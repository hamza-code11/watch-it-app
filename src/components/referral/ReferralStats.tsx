// ReferralStats.tsx
import { Ionicons } from '@expo/vector-icons';
import { Text, View } from 'react-native';
import { useTheme } from '../../context/ThemeContext';
import { getReferralStatsStyles } from './ReferralStats.style';
import { referralData } from '../../data/referral';

export default function ReferralStats() {
  const { theme } = useTheme();
  const styles = getReferralStatsStyles(theme);

  return (
    <View style={styles.statsRow}>
      {referralData.stats.map((stat) => (
        <View key={stat.label} style={styles.statCard}>
          <View style={[styles.statIcon, { backgroundColor: `${stat.color}20` }]}>
            <Ionicons name={stat.icon as any} size={18} color={stat.color} />
          </View>
          <Text style={styles.statNumber}>{stat.value}</Text>
          <Text style={styles.statLabel}>{stat.label}</Text>
        </View>
      ))}
    </View>
  );
}
