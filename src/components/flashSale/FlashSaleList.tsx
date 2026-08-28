import { Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { useRouter } from 'expo-router';
import { Image, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { flashSaleData } from '../../data/flashSale';
import { FlashSaleItem } from '../../types/flashSale.types';
import { flashSaleStyles } from './FlashSaleList.style';

export default function FlashSaleList() {
  const router = useRouter();

  return (
    <ScrollView 
      style={flashSaleStyles.listContainer} 
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{ paddingBottom: 30 }}
    >
      {flashSaleData.map((watch: FlashSaleItem) => (
        <TouchableOpacity 
          key={watch.id} 
          style={flashSaleStyles.watchCard}
          onPress={() => router.push({
            pathname: '/pages/flashSaleDetail',
            params: { watch: JSON.stringify(watch) }
          })}
        >
          {/* Image Section */}
          <View style={flashSaleStyles.imageContainer}>
            {/* Discount Badge */}
            <View style={flashSaleStyles.discountBadge}>
              <Text style={flashSaleStyles.discountBadgeText}>-{watch.discount}%</Text>
            </View>

            <Image 
              source={{ uri: watch.image }} 
              style={flashSaleStyles.watchImage} 
              resizeMode="cover"
            />
          </View>

          {/* Card Content */}
          <View style={flashSaleStyles.cardContent}>
            <Text style={flashSaleStyles.brandText}>{watch.brand}</Text>
            <Text style={flashSaleStyles.titleText}>{watch.title}</Text>
            
            {/* Rating */}
            <View style={flashSaleStyles.ratingRow}>
              <Ionicons name="star" size={14} color="#fbbf24" />
              <Text style={flashSaleStyles.ratingText}>4.9</Text>
              <Text style={flashSaleStyles.reviewsText}>(234 reviews)</Text>
            </View>

            {/* Price */}
            <View style={flashSaleStyles.priceRow}>
              <Text style={flashSaleStyles.flashPrice}>{watch.flashSalePrice}</Text>
              <Text style={flashSaleStyles.oldPrice}>{watch.startingPrice}</Text>
            </View>

            {/* View Details Button (White Gradient) */}
            <TouchableOpacity 
              style={flashSaleStyles.viewDetailsBtnWrapper} 
              onPress={() => router.push('/pages/flashSaleDetail')}
              activeOpacity={0.8}
            >
              <LinearGradient
                colors={['#FFFFFF', '#E5E7EB', '#D1D5DB']} // White Gradient
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 1 }}
                style={flashSaleStyles.viewDetailsBtn}
              >
                <Ionicons name="arrow-forward" size={16} color="#000" />
                <Text style={flashSaleStyles.viewDetailsText}>View Details</Text>
              </LinearGradient>
            </TouchableOpacity>
          </View>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
}

