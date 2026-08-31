import { Ionicons } from '@expo/vector-icons'; // <-- Import add kiya
import { LinearGradient } from 'expo-linear-gradient';
import { Text, View } from 'react-native';
import { useTheme } from '../../context/ThemeContext';
import { privacyPolicyData } from '../../data/policy';
import { getPrivacyBannerStyles } from './PrivacyBanner.style';

export default function PrivacyBanner() {
  const { theme } = useTheme();
  const styles = getPrivacyBannerStyles(theme);

  return (
    <LinearGradient
      colors={['#1B2B4B', '#121C33', '#0D1322']}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      style={styles.banner}
    >
      <Text style={styles.bannerTitle}>{privacyPolicyData.title}</Text>
      <Text style={styles.bannerIntro}>{privacyPolicyData.intro}</Text>
      <View style={styles.lastUpdatedRow}>
        <Ionicons name="calendar-outline" size={16} color="#60A5FA" />
        <Text style={styles.lastUpdatedText}>Last Updated: {privacyPolicyData.lastUpdated}</Text>
      </View>
    </LinearGradient>
  );
}
