import { Ionicons } from '@expo/vector-icons';
import { Text, TouchableOpacity, View } from 'react-native';
import { productInfoStyles } from './ProductInfo.style';

// Helper: ISO datetime ko readable time mein convert karein
const formatTimeLeft = (endsAt: string) => {
  if (!endsAt) return 'Live';
  
  const endTime = new Date(endsAt).getTime();
  const now = Date.now();
  const diff = Math.max(0, endTime - now);

  // Agar time khatam ho chuka hai
  if (diff === 0) return 'Ended';

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const mins = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
  const secs = Math.floor((diff % (1000 * 60)) / 1000);

  if (days > 0) return `${days}d ${hours}h ${mins}m`;
  if (hours > 0) return `${hours}h ${mins}m ${secs}s`;
  return `${mins}m ${secs}s`;
};

export default function ProductInfo({ watchData, onPlaceBidPress }: any) {
  // Ab features watchData.features se aayenge
  const features = watchData.features || [];
  const timeText = formatTimeLeft(watchData.endsAt);

  return (
    <>
      {/* Title & Brand */}
      <View style={productInfoStyles.titleSection}>
        <Text style={productInfoStyles.productTitle}>{watchData.title}</Text>
        <Text style={productInfoStyles.productBrand}>{watchData.brand}</Text>
      </View>

      {/* Price & Time */}
      <View style={[productInfoStyles.priceCard, { marginHorizontal: 20 }]}>
        <View style={productInfoStyles.priceRow}>
          <View>
            <Text style={productInfoStyles.labelSmall}>Starting Price</Text>
            <Text style={productInfoStyles.strikePrice}>{watchData.startingPrice}</Text>
          </View>
          <View style={{ alignItems: 'flex-end' }}>
            <Text style={productInfoStyles.labelSmall}>Current Bid</Text>
            <Text style={productInfoStyles.currentPrice}>{watchData.currentPrice}</Text>
          </View>
        </View>
        <View style={productInfoStyles.timeLeftRow}>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Ionicons name="time-outline" size={16} color="#fbbf24" />
            <Text style={productInfoStyles.timeLeftText}>{timeText} remaining</Text>
          </View>
          <TouchableOpacity 
            style={productInfoStyles.placeBidLinkBtn} 
            onPress={onPlaceBidPress}
            activeOpacity={0.8}
          >
            <Ionicons name="hammer" size={14} color="#000" style={{ marginRight: 4 }} />
            <Text style={productInfoStyles.placeBidLinkText}>PLACE BID</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Description & Features */}
      <View style={{ paddingHorizontal: 20 }}>
        <Text style={productInfoStyles.sectionHeader}>Description</Text>
        <Text style={productInfoStyles.descriptionText}>
          {watchData.description}
        </Text>

        <Text style={productInfoStyles.sectionHeader}>Key Features</Text>
        <View style={productInfoStyles.featureList}>
          {features.map((feature: string, index: number) => (
            <View key={index} style={productInfoStyles.featureRow}>
              <Ionicons name="checkmark" size={18} color="#4ade80" />
              <Text style={productInfoStyles.featureText}>{feature}</Text>
            </View>
          ))}
        </View>
      </View>
    </>
  );
}

