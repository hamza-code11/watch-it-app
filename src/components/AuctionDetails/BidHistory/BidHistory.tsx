import { View, Text } from 'react-native';
import { bidHistoryStyles } from './BidHistory.style';

export default function BidHistory({ watchData }: any) {
  // Ab bid history watchData.bidHistory se aayegi
  const bidHistory = watchData.bidHistory || [];

  return (
    <>
      <Text style={bidHistoryStyles.sectionHeader}>Bid History</Text>
      <View style={bidHistoryStyles.card}>
        <View style={bidHistoryStyles.bidHeader}>
          <Text style={bidHistoryStyles.cardTitle}>Bid History</Text>
          <View style={bidHistoryStyles.countBadge}>
            <Text style={bidHistoryStyles.countBadgeText}>{watchData.bids} bids</Text>
          </View>
        </View>

        {bidHistory.map((bid: any, index: number) => (
          <View key={index} style={bidHistoryStyles.bidItem}>
            <View style={bidHistoryStyles.avatar}>
              <Text style={bidHistoryStyles.avatarText}>{bid.initials}</Text>
            </View>
            <View style={bidHistoryStyles.bidInfo}>
              <Text style={bidHistoryStyles.bidName}>{bid.name}</Text>
              <Text style={bidHistoryStyles.bidTime}>{bid.time}</Text>
            </View>
            <Text style={bidHistoryStyles.bidAmount}>{bid.amount}</Text>
          </View>
        ))}
      </View>
    </>
  );
}
