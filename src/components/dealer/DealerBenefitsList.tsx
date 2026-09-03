// DealerBenefitsList.tsx
import { Ionicons } from '@expo/vector-icons';
import { Text, View } from 'react-native';
import { useTheme } from '../../context/ThemeContext';
import { getDealerBenefitsStyles } from './DealerBenefitsList.style';
import { dealerBenefits } from '../../data/dealer';

export default function DealerBenefitsList() {
  const { theme } = useTheme();
  const styles = getDealerBenefitsStyles(theme);

  return (
    <View style={styles.container}>
      {dealerBenefits.map((benefit) => (
        <View key={benefit.id} style={styles.benefitCard}>
          <View style={styles.benefitIcon}>
            <Ionicons name={benefit.icon as any} size={22} color={theme.accentPrimary} />
          </View>
          <View style={styles.benefitInfo}>
            <Text style={styles.benefitTitle}>{benefit.title}</Text>
            <Text style={styles.benefitDescription}>{benefit.description}</Text>
          </View>
        </View>
      ))}
    </View>
  );
}
