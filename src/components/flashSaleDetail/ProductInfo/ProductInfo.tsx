import { Ionicons } from '@expo/vector-icons';
import { View, Text, TouchableOpacity } from 'react-native';
import { productInfoStyles } from './ProductInfo.style';

export default function ProductInfo({
  watchData,
  onOrderNowPress,
}: {
  watchData: any;
  onOrderNowPress: () => void;
}) {
  // Ab features data file se aa rahe hain
  const features = watchData.features || [];

  return (
    <View style={productInfoStyles.section}>
      {/* Title & Brand */}
      <Text style={productInfoStyles.brandText}>{watchData.brand}</Text>
      <Text style={productInfoStyles.titleText}>{watchData.title}</Text>

      {/* Price & Rating */}
      <View style={productInfoStyles.priceRow}>
        <Text style={productInfoStyles.flashPrice}>{watchData.flashSalePrice}</Text>
        <Text style={productInfoStyles.oldPrice}>{watchData.startingPrice}</Text>
      </View>
      <View style={productInfoStyles.ratingRow}>
        <Ionicons name="star" size={16} color="#fbbf24" />
        <Text style={productInfoStyles.ratingText}>4.9</Text>
        <Text style={productInfoStyles.reviewsText}>(234 reviews)</Text>
      </View>

      {/* Description */}
      <Text style={productInfoStyles.sectionHeader}>Description</Text>
      <Text style={productInfoStyles.descriptionText}>
        {watchData.description}
      </Text>

      {/* Key Features */}
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
  );
}