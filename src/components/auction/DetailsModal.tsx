import { Ionicons } from '@expo/vector-icons';
import { useEffect, useState } from 'react';
import {
  Modal, Pressable, ScrollView, Text, TouchableOpacity, View,
} from 'react-native';
import { useTheme } from '../../context/ThemeContext';
import { BidEntry, ProductDetails } from '../../types/auction.types';
import { getDetailsModalStyles } from './DetailsModal.style';

interface Props {
  visible: boolean;
  onClose: () => void;
  initialTab: 'details' | 'bidHistory';
  details: ProductDetails;
  bidHistory: BidEntry[];
}

export default function DetailsModal({
  visible, onClose, initialTab, details, bidHistory,
}: Props) {
  const { theme } = useTheme();
  const styles = getDetailsModalStyles(theme);
  const [tab, setTab] = useState<'details' | 'bidHistory'>(initialTab);

  useEffect(() => { if (visible) setTab(initialTab); }, [visible, initialTab]);

  const rows: [string, string][] = [
    ['Brand', details.brand],
    ['Model', details.model],
    ['Reference Number', details.referenceNumber],
    ['Case Diameter', details.caseDiameter],
    ['Case Material', details.caseMaterial],
    ['Movement', details.movement],
    ['Water Resistance', details.waterResistance],
    ['Box & Papers', details.boxPapers],
    ['Condition', details.condition],
  ];

  return (
    <Modal visible={visible} transparent animationType="slide" onRequestClose={onClose}>
      <Pressable style={styles.overlay} onPress={onClose}>
        <Pressable style={styles.sheet} onPress={() => {}}>
          <View style={styles.handle} />

          <View style={styles.tabsRow}>
            <TouchableOpacity
              style={[styles.tab, tab === 'details' && styles.tabActive]}
              onPress={() => setTab('details')}
            >
              <Text style={[styles.tabText, tab === 'details' && styles.tabTextActive]}>
                Details
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.tab, tab === 'bidHistory' && styles.tabActive]}
              onPress={() => setTab('bidHistory')}
            >
              <Text style={[styles.tabText, tab === 'bidHistory' && styles.tabTextActive]}>
                Bid History
              </Text>
            </TouchableOpacity>
          </View>

          <ScrollView style={{ maxHeight: 420 }} showsVerticalScrollIndicator={false}>
            {tab === 'details' ? (
              <View style={{ paddingVertical: 8 }}>
                {rows.map(([k, v]) => (
                  <View key={k} style={styles.detailRow}>
                    <Text style={styles.detailKey}>{k}</Text>
                    <Text style={styles.detailVal}>{v}</Text>
                  </View>
                ))}
              </View>
            ) : (
              <View style={{ paddingVertical: 8 }}>
                {bidHistory.length === 0 && (
                  <Text style={styles.emptyText}>No bids yet.</Text>
                )}
                {bidHistory.map((b) => (
                  <View key={b.id} style={styles.bidRow}>
                    <View style={styles.bidAvatar}>
                      <Text style={styles.bidAvatarText}>{b.user.initials}</Text>
                    </View>
                    <View style={{ flex: 1 }}>
                      <Text style={styles.bidName}>{b.user.name}</Text>
                      <Text style={styles.bidTime}>{b.timeAgo}</Text>
                    </View>
                    <Text style={styles.bidAmount}>
                      AED {b.amount.toLocaleString()}
                    </Text>
                  </View>
                ))}
              </View>
            )}
          </ScrollView>
        </Pressable>
      </Pressable>
    </Modal>
  );
}
