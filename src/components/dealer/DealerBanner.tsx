// DealerBanner.tsx
import { Text, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useTheme } from '../../context/ThemeContext';
import { getDealerBannerStyles } from './DealerBanner.style';

export default function DealerBanner() {
  const { theme } = useTheme();
  const styles = getDealerBannerStyles(theme);

  return (
    <LinearGradient
      colors={['#1B2B4B', '#121C33', '#0D1322']}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      style={styles.banner}
    >
      <Text style={styles.label}>Dealer Partnership</Text>
      <Text style={styles.title}>Become a{"\n"}Verified Dealer</Text>
      <Text style={styles.subtitle}>
        Join the UAE's premier luxury watch marketplace and connect with thousands of serious collectors.
      </Text>
    </LinearGradient>
  );
}
