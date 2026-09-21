import { LinearGradient } from 'expo-linear-gradient';
import { Text } from 'react-native';
import { useTheme } from '../../context/ThemeContext';
import { getReferralBannerStyles } from './ReferralBanner.style';

export default function ReferralBanner() {
  const { theme } = useTheme();
  const styles = getReferralBannerStyles(theme);

  return (
    <LinearGradient
      colors={['#0a1628', '#0f4c81']}
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
