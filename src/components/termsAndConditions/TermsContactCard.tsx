// TermsContactCard.tsx
import { Ionicons } from '@expo/vector-icons';
import { Text, View } from 'react-native';
import { useTheme } from '../../context/ThemeContext';
import { getTermsContactStyles } from './TermsContactCard.style';
import { termsData } from '../../data/terms';

export default function TermsContactCard() {
  const { theme } = useTheme();
  const styles = getTermsContactStyles(theme);

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <View style={styles.contactIcon}>
          <Ionicons name="chatbubble-ellipses-outline" size={20} color={theme.accentPrimary} />
        </View>
        <View style={styles.contactInfo}>
          <Text style={styles.contactTitle}>Have questions about these Terms?</Text>
          <Text style={styles.contactSubtitle}>{termsData.contactText}</Text>
        </View>
        <Ionicons name="chevron-forward" size={18} color={theme.textMuted} />
      </View>
    </View>
  );
}
