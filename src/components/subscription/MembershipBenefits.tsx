import { Ionicons } from '@expo/vector-icons';
import { Text, View } from 'react-native';
import { useTheme } from '../../context/ThemeContext';
import { getMembershipBenefitsStyles } from './MembershipBenefits.style';
import { membershipBenefits } from '../../data/subscription';

export default function MembershipBenefits() {
  const { theme } = useTheme();
  const styles = getMembershipBenefitsStyles(theme);

  return (
    <View style={styles.container}>
      {/* Section Heading */}
      <Text style={styles.sectionTitle}>Membership Benefits</Text>

      {/* Benefit List */}
      {membershipBenefits.map((benefit) => (
        <View key={benefit.id} style={styles.benefitItem}>
          <View style={styles.benefitIcon}>
            <Ionicons name={benefit.icon as any} size={20} color={theme.accentPrimary} />
          </View>
          <View style={styles.benefitInfo}>
            <Text style={styles.benefitTitle}>{benefit.title}</Text>
            <Text style={styles.benefitDescription}>{benefit.description}</Text>
          </View>
          <View style={styles.benefitArrow}>
            <Ionicons name="chevron-forward" size={18} color={theme.textMuted} />
          </View>
        </View>
      ))}
    </View>
  );
}
