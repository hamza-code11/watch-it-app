import { Ionicons } from '@expo/vector-icons';
import { Text, View } from 'react-native';
import { useTheme } from '../../context/ThemeContext';
import { AuthenticationPlan } from '../../types/watchAuthentication.types';
import { getPlanCardStyles } from './PlanCard.style';

export default function PlanCard({ plan }: { plan: AuthenticationPlan }) {
  const { theme } = useTheme();
  const styles = getPlanCardStyles(theme);

  return (
    <View style={styles.planCard}>
      {/* Icon aur Heading Ek Hi Row Mein */}
      <View style={styles.planHeader}>
        <View style={styles.planIcon}>
          <Ionicons name={plan.icon as any} size={18} color={theme.accentPrimary} />
        </View>
        <Text style={styles.planName}>{plan.name}</Text>
      </View>

      {/* Plan Info */}
      <Text style={styles.planPrice}>
        {plan.price} <Text style={{ fontSize: 12, color: theme.textMuted }}>{plan.duration}</Text>
      </Text>
      <Text style={styles.planDuration}>{plan.time}</Text>

      {/* Description */}
      <Text style={styles.planDescription}>{plan.description}</Text>

      {/* Features */}
      <View style={styles.planFeatures}>
        {plan.features.map((feature, index) => (
          <View key={index} style={styles.planFeature}>
            <Ionicons name="checkmark" size={14} color={theme.success} />
            <Text style={styles.planFeatureText}>{feature}</Text>
          </View>
        ))}
      </View>
    </View>
  );
}
