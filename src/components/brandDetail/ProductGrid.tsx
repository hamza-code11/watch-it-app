import { Text, View } from 'react-native';
import { useTheme } from '../../context/ThemeContext';
import ProductCard from '../../globalComponents/ProductCard/ProductCard';
import { Product } from '../../types/product.types';
import { getProductGridStyles } from './ProductGrid.style';

interface Props {
  products: Product[];
  onProductPress?: (productId: string) => void;
}

export default function ProductGrid({ products, onProductPress }: Props) {
  const { theme } = useTheme();
  const styles = getProductGridStyles(theme);

  return (
    <View style={styles.container}>
      {/* Count */}
      <Text style={styles.countText}>{products.length} watches found</Text>

      {/* Product Grid */}
      <View style={styles.grid}>
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            onPress={onProductPress}
          />
        ))}
      </View>
    </View>
  );
}