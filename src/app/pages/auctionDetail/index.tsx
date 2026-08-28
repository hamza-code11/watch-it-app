import { Ionicons } from '@expo/vector-icons';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { useRef } from 'react';
import { ScrollView, StatusBar, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

// Importing components
import BidHistory from '../../../components/AuctionDetails/BidHistory/BidHistory';
import PlaceBid from '../../../components/AuctionDetails/placeBit/PlaceBid';
import ProductImage from '../../../components/AuctionDetails/ProductImage/ProductImage';
import ProductInfo from '../../../components/AuctionDetails/ProductInfo/ProductInfo';
import SellerCard from '../../../components/AuctionDetails/SellerCard/SellerCard';
import TimerRow from '../../../globalComponents/timer/TimerRow';

// Importing styles
import { useTheme } from '../../../context/ThemeContext';
import { getStyles } from '../../../screens/auctionDetail/auctionDetail.style';

export default function AuctionDetail() {
  const router = useRouter();
  const { watch } = useLocalSearchParams();
  const { theme } = useTheme();
  const styles = getStyles(theme);

  const watchData = watch ? JSON.parse(watch as string) : null;
  const scrollRef = useRef<ScrollView>(null);

  if (!watchData) return null;

  const scrollToBidSection = () => {
    scrollRef.current?.scrollToEnd({ animated: true });
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" />

      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()}>
          <Ionicons name="arrow-back" size={24} color="#fff" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Auction Details</Text>
        <View style={styles.liveBadge}>
          <Text style={styles.liveBadgeText}>LIVE</Text>
        </View>
      </View>

      <ScrollView
        ref={scrollRef}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 100 }}
      >
        {/* Step 1: Timer (endsAt use karein) */}
        <TimerRow endsAt={watchData.endsAt} />

        {/* Step 2: Product Image */}
        <ProductImage watchData={watchData} />

        {/* Step 3: Product Info */}
        <ProductInfo 
          watchData={watchData} 
          onPlaceBidPress={scrollToBidSection}
        />

        {/* Step 4: Seller, Bid History, Place Bid */}
        <View style={{ paddingHorizontal: 20 }}>
          <SellerCard watchData={watchData} />
          <BidHistory watchData={watchData} />
          <PlaceBid watchData={watchData} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

