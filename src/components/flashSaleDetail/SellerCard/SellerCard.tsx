import { Ionicons } from '@expo/vector-icons';
import { Text, View } from 'react-native';
import { sellerCardStyles } from './SellerCard.style';

export default function SellerCard({ watchData }: { watchData: any }) {
  return (
    <>
      <View style={sellerCardStyles.card}>
        <Text style={sellerCardStyles.sellerLabel}>SELLER</Text>
        <View style={sellerCardStyles.sellerRow}>
          <View style={sellerCardStyles.sellerAvatar}>
            <Ionicons name="checkmark-circle" size={20} color="#60a5fa" />
          </View>
          <View style={{ flex: 1 }}>
            <Text style={sellerCardStyles.sellerName}>{watchData.seller.name}</Text>
            <Text style={sellerCardStyles.sellerRating}>★ {watchData.seller.rating} ({watchData.seller.reviews} reviews)</Text>
          </View>
          <Ionicons name="chevron-forward" size={24} color="#555" />
        </View>
      </View>
    </>
  );
}