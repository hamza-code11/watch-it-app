import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { Image, ScrollView, StatusBar, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useTheme } from '../../../context/ThemeContext';
import { wishlistData } from '../../../data/wishlist';
import { getStyles } from '../../../screens/wishlist/wishlist.style';

export default function Wishlist() {
  const router = useRouter();
  const { theme } = useTheme();
  const styles = getStyles(theme);

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" />

      <ScrollView
        showsVerticalScrollIndicator={false}
      >
        {/* Header */}
        <View style={styles.header}>
          <TouchableOpacity style={styles.backBtn} onPress={() => router.back()}>
            <Ionicons name="arrow-back" size={24} color={theme.textPrimary} />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>Wishlist</Text>
          <View style={{ width: 24 }} />
        </View>

        {/* Count */}
        <Text style={styles.countText}>Showing {wishlistData.length} items</Text>

        {/* Vertical List */}
        <View style={styles.listContainer}>
          {wishlistData.map((product) => (
            <TouchableOpacity
              key={product.id}
              style={styles.listItem}
              onPress={() => router.push(`/pages/productDetail/${product.id}`)}
            >
              <Image source={{ uri: product.image }} style={styles.itemImage} resizeMode="cover" />
              <View style={styles.itemInfo}>
                <Text style={styles.itemTitle}>{product.title}</Text>
                <View style={styles.itemPriceRow}>
                  <Text style={styles.itemPrice}>{product.price}</Text>
                  <View style={styles.itemRating}>
                    <Ionicons name="star" size={12} color="#FDB022" />
                    <Text style={styles.itemRatingText}>({product.rating})</Text>
                  </View>
                </View>

                {/* Item Actions (Har card ke andar) */}
                <View style={styles.itemActions}>
                  <TouchableOpacity style={styles.moveToCartBtn} onPress={() => console.log('Move to Cart')}>
                    <Ionicons name="cart-outline" size={14} color={theme.accentPrimary} />
                    <Text style={styles.moveToCartBtnText}>Move to Cart</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.removeBtn} onPress={() => console.log('Remove')}>
                    <Ionicons name="trash-outline" size={14} color={theme.danger} />
                    <Text style={styles.removeBtnText}>Remove</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
