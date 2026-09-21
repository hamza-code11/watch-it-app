import { Image, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { useTheme } from '../../context/ThemeContext';
import { Auction } from '../../types/auction.types';
import { getSimilarLotsStyles } from './SimilarLots.style';

interface Props {
  lots: Auction[];
  onPress: (id: number) => void;
}

const statusColor: Record<string, string> = {
  live: '#EF4444',
  endingSoon: '#F59E0B',
  upcoming: '#60A5FA',
  myBids: '#8B5CF6',
};

const statusLabel: Record<string, string> = {
  live: 'Live',
  endingSoon: 'Ending Soon',
  upcoming: 'Upcoming',
  myBids: 'My Bid',
};

export default function SimilarLots({ lots, onPress }: Props) {
  const { theme } = useTheme();
  const styles = getSimilarLotsStyles(theme);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Similar Lots</Text>
      </View>

      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.row}
      >
        {lots.map((lot) => (
          <TouchableOpacity
            key={lot.id}
            style={styles.card}
            activeOpacity={0.85}
            onPress={() => onPress(lot.id)}
          >
            <View style={styles.imageWrap}>
              <Image source={{ uri: lot.images[0] }} style={styles.image} />
              <View style={[styles.badge, { backgroundColor: statusColor[lot.category] }]}>
                <Text style={styles.badgeText}>{statusLabel[lot.category]}</Text>
              </View>
            </View>
            <View style={styles.body}>
              <Text style={styles.brand}>{lot.brand}</Text>
              <Text style={styles.name} numberOfLines={1}>{lot.name}</Text>
              <Text style={styles.ref} numberOfLines={1}>{lot.reference}</Text>
              <Text style={styles.price}>AED {lot.currentBid.toLocaleString()}</Text>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
}
