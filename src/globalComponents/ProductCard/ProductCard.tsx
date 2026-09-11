import { Ionicons } from '@expo/vector-icons';
import { useState } from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import { useTheme } from '../../context/ThemeContext';
import { Product } from '../../types/product.types';
import { getProductCardStyles } from './ProductCard.style';

interface Props {
  product: Product;
  onPress?: (productId: string) => void;
}

export default function ProductCard({ product, onPress }: Props) {
  const { theme } = useTheme();
  const styles = getProductCardStyles(theme);
  const [isWishlisted, setIsWishlisted] = useState(false); // State for wishlist

  const handleWishlist = () => {
    setIsWishlisted(!isWishlisted); // Toggle state
  };

  return (
    <TouchableOpacity
      style={styles.card}
      onPress={() => onPress && onPress(product.id)}
    >
      {/* Image + Heart */}
      <View style={styles.imageContainer}>
        <Image source={{ uri: product.image }} style={styles.image} resizeMode="cover" />
        <TouchableOpacity style={styles.heartBtn} onPress={handleWishlist}>
          <Ionicons 
            name={isWishlisted ? "heart" : "heart-outline"} 
            size={18} 
            color={isWishlisted ? "#FF0000" : "#FFFFFF"} 
          />
        </TouchableOpacity>
      </View>

      {/* Product Info */}
      <View style={styles.info}>
        <Text style={styles.brandName}>{product.brandName}</Text>
        <Text style={styles.title}>{product.title}</Text>
        <Text style={styles.sellerName}>by {product.sellerName}</Text>

        {/* Price + Rating */}
        <View style={styles.priceRow}>
          <Text style={styles.price}>{product.price}</Text>
          <View style={styles.ratingContainer}>
            <Ionicons name="star" size={12} color="#FDB022" />
            <Text style={styles.ratingText}>({product.rating})</Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
}

