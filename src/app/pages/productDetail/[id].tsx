import { useLocalSearchParams, useRouter } from 'expo-router';
import { ScrollView, StatusBar, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useTheme } from '../../../context/ThemeContext';
import { productDetailsData } from '../../../data/productDetails';
import { getStyles } from '../../../screens/productDetail/productDetail.style';

import ProductImageGallery from '../../../components/productDetail/ProductImageGallery';
import ProductInfo from '../../../components/productDetail/ProductInfo';
import ProductVendorReviews from '../../../components/productDetail/ProductVendorReviews';

export default function ProductDetail() {
  const router = useRouter();
  const { theme } = useTheme();
  const styles = getStyles(theme);
  const { id } = useLocalSearchParams();

  const product = productDetailsData.find((p) => p.id === id);

  if (!product) {
    return (
      <SafeAreaView style={styles.container}>
        <StatusBar barStyle="light-content" />
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <Text style={{ color: theme.textMuted }}>Product not found</Text>
        </View>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" />

      <ScrollView
        showsVerticalScrollIndicator={false}
      >

        {/* Component 1: Image Gallery */}
        <ProductImageGallery images={product.images} />

        {/* Component 2: Product Info */}
        <ProductInfo product={product} />

        {/* Component 3: Vendor Information + Customer Reviews */}
        <ProductVendorReviews product={product} />
        
      </ScrollView>
    </SafeAreaView>
  );
}
