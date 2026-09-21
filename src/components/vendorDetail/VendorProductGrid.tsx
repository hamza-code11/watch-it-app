import { View } from 'react-native';
import { useTheme } from '../../context/ThemeContext';
import { getVendorProductGridStyles } from './VendorProductGrid.style';
import ProductCard from '../../globalComponents/ProductCard/ProductCard';
import { Product } from '../../types/product.types';

interface Props {
  products: Product[];
  onProductPress?: (productId: string) => void;
}

export default function VendorProductGrid({
  products,
  onProductPress,
}: Props) {
  const { theme } = useTheme();
  const styles = getVendorProductGridStyles(theme);
 
  return (
    <View style={styles.container}>
      <View style={styles.grid}>
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            // Product ID Grid se ProductCard ke onPress ko pass ho rahi hai
            onPress={() => onProductPress?.(product.id)}
          />
        ))}
      </View>
    </View>
  );
}