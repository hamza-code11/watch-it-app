import { Ionicons } from '@expo/vector-icons';
import { View, Text } from 'react-native';
import { sellerStyles } from './SellerCard.style';

export default function SellerCard({ watchData }: any) {
  // Ab seller data watchData.seller se aayega
  const seller = watchData.seller || { name: '', rating: 0, reviews: 0 };

  return (
    <>
      <Text style={sellerStyles.sectionHeader}>Seller</Text>
      <View style={sellerStyles.card}>
        <Text style={sellerStyles.sellerLabel}>SELLER</Text>
        <View style={sellerStyles.sellerRow}>
          <View style={sellerStyles.sellerAvatar}>
            <Ionicons name="checkmark-circle" size={20} color="#60a5fa" />
          </View>
          <View style={{ flex: 1 }}>
            <Text style={sellerStyles.sellerName}>{seller.name}</Text>
            <Text style={sellerStyles.sellerRating}>★ {seller.rating} ({seller.reviews} reviews)</Text>
          </View>
          <Ionicons name="chevron-forward" size={24} color="#555" />
        </View>
      </View>
    </>
  );
}
