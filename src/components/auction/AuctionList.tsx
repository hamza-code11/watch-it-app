import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { Image, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { getEndedAuctions, getLiveAuctions } from '../../data/auction';
import { AuctionItem } from '../../types/auction.types';
import { listStyles } from './AuctionList.style';

// Helper: ISO datetime ko readable time mein convert karein
const formatTimeLeft = (endsAt: string) => {
  if (!endsAt) return 'Live';
  
  const endTime = new Date(endsAt).getTime();
  const now = Date.now();
  const diff = Math.max(0, endTime - now);

  if (diff === 0) return 'Ended';

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const mins = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
  const secs = Math.floor((diff % (1000 * 60)) / 1000);

  if (days > 0) return `${days}d ${hours}h ${mins}m`;
  if (hours > 0) return `${hours}h ${mins}m ${secs}s`;
  return `${mins}m ${secs}s`;
};

export default function AuctionList({ type = 'live' }: { type?: 'live' | 'ended' }) {
  const router = useRouter();
  
  // Correct data source based on type
  const data = type === 'ended' ? getEndedAuctions() : getLiveAuctions();

  return (
    <ScrollView 
      style={listStyles.listContainer} 
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{ paddingBottom: 30 }}
    >
      {data.map((watch: AuctionItem) => {
        const isEnded = type === 'ended';
        const timeText = isEnded ? 'Ended' : formatTimeLeft(watch.endsAt);

        return (
          <TouchableOpacity 
            key={watch.id} 
            style={[listStyles.watchCard, isEnded && listStyles.endedCard]}
            onPress={() => router.push({
              pathname: '/pages/auctionDetail',
              params: { watch: JSON.stringify(watch) }
            })}
          >
            <View style={[listStyles.imageContainer, isEnded && listStyles.endedImageContainer]}>
              <View style={[listStyles.brandBadge, isEnded && listStyles.endedBrandBadge]}>
                <Text style={listStyles.brandBadgeText}>{watch.brand}</Text>
              </View>
              
              <View style={[listStyles.timerBadge, isEnded && listStyles.endedTimerBadge]}>
                <Ionicons name="time-outline" size={14} color="#fff" />
                <Text style={listStyles.timerBadgeText}>{timeText}</Text> 
              </View>

              <Image 
                source={{ uri: watch.image }} 
                style={listStyles.watchImage} 
                resizeMode="cover"
              />
            </View>

            <View style={listStyles.cardContent}>
              <View style={listStyles.titleRow}>
                <View style={listStyles.titleContainer}>
                  <Text style={[listStyles.watchTitle, isEnded && listStyles.endedTitle]}>{watch.title}</Text>
                  <Text style={listStyles.watchBrand}>{watch.brand}</Text>
                </View>
                
                <View style={listStyles.bidsContainer}>
                  <Text style={listStyles.currentPriceLabel}>Current Bid</Text>
                  <Text style={[listStyles.currentPriceValue, isEnded && listStyles.endedCurrentPrice]}>{watch.currentPrice}</Text>
                  <Text style={[listStyles.bidsText, isEnded && listStyles.endedBidsText]}>{watch.bids} Bids</Text>
                </View>
              </View>

              <View style={listStyles.priceRow}>
                <View style={listStyles.startingPriceContainer}>
                  <Text style={listStyles.startingPriceLabel}>Starting:</Text>
                  <Text style={[listStyles.startingPriceValue, isEnded && listStyles.endedStartingPrice]}>{watch.startingPrice}</Text>
                </View>
              </View>
            </View>
          </TouchableOpacity>
        );
      })}
    </ScrollView>
  );
}

