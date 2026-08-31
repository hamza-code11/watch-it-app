import { Text, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useTheme } from '../../context/ThemeContext';
import { getReferralBannerStyles } from './ReferralBanner.style';

export default function ReferralBanner() {
  const { theme } = useTheme();
  const styles = getReferralBannerStyles(theme);

  return (
    <LinearGradient
      colors={['#1B2B4B', '#121C33', '#0D1322']}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      style={styles.banner}
    >
      <Text style={styles.bannerTitle}>Referral Program</Text>
      <Text style={styles.bannerSubtitle}>
        Invite friends and earn AED 500 for every successful referral
      </Text>
    </LinearGradient>
  );
}
