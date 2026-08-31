import { Ionicons } from '@expo/vector-icons';
import { Text, View } from 'react-native';
import { useTheme } from '../../context/ThemeContext';
import { privacyPolicyData } from '../../data/policy';
import { getPrivacyContactStyles } from './PrivacyContactCard.style';

export default function PrivacyContactCard() {
  const { theme } = useTheme();
  const styles = getPrivacyContactStyles(theme);

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <View style={styles.contactIcon}>
          <Ionicons name="chatbubble-ellipses-outline" size={20} color={theme.accentPrimary} />
        </View>
        <View style={styles.contactInfo}>
          <Text style={styles.contactTitle}>Have questions about our privacy practices?</Text>
          <Text style={styles.contactSubtitle}>{privacyPolicyData.contactText}</Text>
        </View>
        <Ionicons name="chevron-forward" size={18} color={theme.textMuted} />
      </View>
    </View>
  );
}
