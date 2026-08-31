import { Ionicons } from '@expo/vector-icons';
import { Text, View } from 'react-native';
import { useTheme } from '../../context/ThemeContext';
import { referralTiersData } from '../../data/referral';
import { getReferralTiersStyles } from './ReferralTiers.style';

export default function ReferralTiers() {
  const { theme } = useTheme();
  const styles = getReferralTiersStyles(theme);

  return (
    <View style={styles.mainCard}>
      <Text style={styles.sectionTitle}>Referral Tiers</Text>

      {referralTiersData.map((tier, index) => (
        <View
          key={tier.id}
          style={[styles.tierItem, index === referralTiersData.length - 1 && styles.tierItemLast]}
        >
          <View style={[styles.tierIcon, { backgroundColor: `${tier.iconColor}20` }]}>
            <Ionicons name={tier.icon as any} size={16} color={tier.iconColor} />
          </View>
          <View style={styles.tierInfo}>
            <Text style={styles.tierName}>{tier.name}</Text>
            <Text style={styles.tierRange}>{tier.range}</Text>
          </View>
          {tier.current && (
            <View style={[styles.tierBadge, { backgroundColor: theme.accentPrimary }]}>
              <Text style={styles.tierBadgeText}>Current</Text>
            </View>
          )}
          <Ionicons name="chevron-forward" size={16} color={theme.textMuted} />
        </View>
      ))}
    </View>
  );
}

