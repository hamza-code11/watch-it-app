import { useLocalSearchParams, useRouter } from 'expo-router';
import { useState } from 'react';
import { ScrollView, StatusBar } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import AuctionHeader from '../../../components/auction/AuctionHeader';
import DetailsModal from '../../../components/auction/DetailsModal';
import ImageGallery from '../../../components/auction/ImageGallery';
import SimilarLots from '../../../components/auction/SimilarLots';
import TimerInfo from '../../../components/auction/TimerInfo';
import { useTheme } from '../../../context/ThemeContext';
import { auctions } from '../../../data/auctions';
import { getStyles } from '../../../screens/auction/auction.style';

export default function AuctionPage() {
  const router = useRouter();
  const { theme } = useTheme();
  const styles = getStyles(theme);

  const params = useLocalSearchParams<{ id?: string; category?: string }>();

  const initialCategory = params.category ?? 'live';

  const [category, setCategory] = useState<string>(initialCategory);
  const [auctionId, setAuctionId] = useState<number>(() => {
    if (params.id) return Number(params.id);
    const first = auctions.find((a) => a.category === initialCategory);
    return first ? first.id : auctions[0].id;
  });

  const [modalVisible, setModalVisible] = useState(false);
  const [modalTab, setModalTab] = useState<'details' | 'bidHistory'>('details');

  const auction = auctions.find((a) => a.id === auctionId) ?? auctions[0];

  const openModal = (tab: 'details' | 'bidHistory') => {
    setModalTab(tab);
    setModalVisible(true);
  };

  const handleSimilarLotPress = (id: number) => {
    if (id === auctionId) return;
    setAuctionId(id);
  };

  // 👇 Filter change → us category ka pehla product load karo
  const handleCategoryChange = (newCategory: string) => {
    setCategory(newCategory);
    const firstInCategory = auctions.find((a) => a.category === newCategory);
    if (firstInCategory) setAuctionId(firstInCategory.id);
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" />

      <AuctionHeader
        category={category}
        onCategoryChange={handleCategoryChange}
        onBack={() => router.back()}
      />

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.contentContainer}
      >
        <ImageGallery images={auction.images} />

        <TimerInfo
          brand={auction.brand}
          name={auction.name}
          reference={auction.reference}
          currentBid={auction.currentBid}
          startingBid={auction.startingBid}
          bidders={auction.bidders}
          endsAt={auction.endsAt}
          onOpenDetails={() => openModal('details')}
        />

        <SimilarLots lots={auction.similarLots} onPress={handleSimilarLotPress} />
      </ScrollView>

      <DetailsModal
        visible={modalVisible}
        onClose={() => setModalVisible(false)}
        initialTab={modalTab}
        details={auction.details}
        bidHistory={auction.bidHistory}
      />
    </SafeAreaView>
  );
}
