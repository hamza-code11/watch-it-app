import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { useState } from 'react';
import { ScrollView, StatusBar, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import AuctionList from '../../../components/auction/AuctionList';
import FlashSaleList from '../../../components/flashSale/FlashSaleList';
import { getEndedAuctions, getLiveAuctions } from '../../../data/auction'; // Updated imports
import { flashSaleData } from '../../../data/flashSale';
import { styles } from '../../../screens/auction/auction.style';

export default function AuctionPage() {
  const router = useRouter();
  const [activeMainTab, setActiveMainTab] = useState('Live');
  
  // Correctly calculate live and ended counts
  const liveCount = getLiveAuctions().length; // Sirf future wale
  const endedCount = getEndedAuctions().length; // Sirf past wale
  const flashSaleCount = flashSaleData.length; // Flash sale ki count

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" />
      
      {/* FIXED HEADER */}
      <View style={styles.header}>
        <TouchableOpacity>
          <Ionicons name="arrow-back" size={24} color="#fff" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Live Auction House</Text>
        <View style={styles.liveBadge}>
          <Text style={styles.liveBadgeText}>LIVE</Text>
        </View>
      </View>

      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ paddingBottom: 30 }}>
        
        <View style={styles.heroContainer}>
          <Text style={styles.heroTitle}>Rare Timepieces.{'\n'}Exceptional Prices.</Text>
          <Text style={styles.heroSubtitle}>
            Bid on authenticated luxury watches from verified collectors across the UAE.
          </Text>
          
          <View style={styles.heroInfoRow}>
            <View style={styles.infoItem}>
              <Ionicons name="time-outline" size={16} color="#60a5fa" />
              <Text style={styles.infoText}>Live Now</Text>
            </View>
            <View style={styles.infoItem}>
              <Ionicons name="shield-checkmark-outline" size={16} color="#4ade80" />
              <Text style={styles.infoText}>100% Authenticated</Text>
            </View>
          </View>
        </View>

        <View style={styles.tabBarContainer}>
          {[
            { label: 'LIVE', count: liveCount, key: 'Live' },
            { label: 'FLASH SALE', count: flashSaleCount, key: 'Flash' },
            { label: 'ENDED', count: endedCount, key: 'Ended' },
          ].map((tab) => (
            <TouchableOpacity
              key={tab.key}
              style={[styles.tabBarItem, activeMainTab === tab.key && styles.activeTabBarItem]}
              onPress={() => setActiveMainTab(tab.key)}
            >
              <Text style={[styles.tabBarLabel, activeMainTab === tab.key && styles.activeTabBarLabel]}>
                {tab.label}{' '}
                <Text style={[styles.tabBarCount, activeMainTab === tab.key && styles.activeTabBarCount]}>
                  {tab.count}
                </Text>
              </Text>
            </TouchableOpacity>
          ))}
        </View>

        {/* Tab switch logic */}
        {activeMainTab === 'Flash' ? (
          <FlashSaleList />
        ) : activeMainTab === 'Ended' ? (
          <AuctionList type="ended" />
        ) : (
          <AuctionList type="live" />
        )}

      </ScrollView>
    </SafeAreaView>
  );
}

