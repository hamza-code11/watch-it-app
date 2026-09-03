import { Ionicons } from '@expo/vector-icons';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { ScrollView, StatusBar, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import BrandBanner from '../../../components/brandDetail/BrandBanner';
import FilterSortBar from '../../../components/brandDetail/FilterSortBar';
import ProductGrid from '../../../components/brandDetail/ProductGrid';
import { useTheme } from '../../../context/ThemeContext';
import { brandDetailsData } from '../../../data/brandDetails';
import { getStyles } from '../../../screens/brandDetail/brandDetail.style';

export default function BrandDetail() {
  const router = useRouter();
  const { theme } = useTheme();
  const styles = getStyles(theme);
  const { id } = useLocalSearchParams();

  const brand = brandDetailsData.find((b) => b.id === id);

  if (!brand) {
    return (
      <SafeAreaView style={styles.container}>
        <StatusBar barStyle="light-content" />
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <Text style={{ color: theme.textMuted }}>Brand not found</Text>
        </View>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" />

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.contentContainer}
      >
        {/* Header */}
        <View style={styles.header}>
          <TouchableOpacity style={styles.backBtn} onPress={() => router.back()}>
            <Ionicons name="arrow-back" size={24} color={theme.textPrimary} />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>{brand.name}</Text>
          <View style={{ width: 24 }} />
        </View>

        {/* Banner */}
        <View style={{ paddingHorizontal: 16 }}>
          <BrandBanner brand={brand} />
        </View>

        {/* Filter + Sort Bar */}
        <FilterSortBar />

        {/* Product Grid */}
        <ProductGrid
          products={brand.products}
        //   onProductPress={(productId) => router.push(`/pages/productDetail/${productId}`)}
        />
      </ScrollView>
    </SafeAreaView>
  );
}
