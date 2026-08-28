import { Ionicons } from '@expo/vector-icons';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { useRef } from 'react';
import { ScrollView, StatusBar, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

// Import Components
import ImageGallery from '../../../components/flashSaleDetail/ImageGallery/ImageGallery';
import ProductInfo from '../../../components/flashSaleDetail/ProductInfo/ProductInfo';
import SellerCard from '../../../components/flashSaleDetail/SellerCard/SellerCard';
// Import TimerRow
import TimerRow from '../../../globalComponents/timer/TimerRow';

// Import Styles
import { useTheme } from '../../../context/ThemeContext';
import { getStyles } from '../../../screens/flashSaleDetail/flashSaleDetail.style';

export default function FlashSaleDetail() {
  const router = useRouter();
  const { watch } = useLocalSearchParams();
  const { theme } = useTheme();
  const styles = getStyles(theme);

  const watchData = watch ? JSON.parse(watch as string) : null;
  const scrollRef = useRef<ScrollView>(null);

  if (!watchData) return null;

  const gallery = watchData.gallery || [watchData.image];

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" />

      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()}>
          <Ionicons name="arrow-back" size={24} color="#fff" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Flash Sale Details</Text>
        <View style={styles.liveBadge}>
          <Text style={styles.liveBadgeText}>FLASH</Text>
        </View>
      </View>

      <ScrollView
        ref={scrollRef}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 100 }}
      >
        {/* Component 1: Timer */}
        <TimerRow endsAt={watchData.endsAt} />

        {/* Component 2: Image Gallery */}
        <ImageGallery gallery={gallery} />

        {/* Component 3: Product Info */}
        <ProductInfo
          watchData={watchData}
          onOrderNowPress={() => router.push('/pages/home')}
        />

        {/* Component 4: Seller Card (Last mein) */}
        <SellerCard watchData={watchData} />
      </ScrollView>

      {/* Fixed Bottom Button */}
      <View style={styles.bottomBar}>
        <TouchableOpacity
          style={styles.orderNowBtn}
          onPress={() => router.push('/pages/home')}
        >
          <Ionicons name="cart" size={20} color="#000" style={{ marginRight: 8 }} />
          <Text style={styles.orderNowText}>ORDER NOW</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}