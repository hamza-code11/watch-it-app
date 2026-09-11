// DealerBanner.tsx
import { LinearGradient } from 'expo-linear-gradient';
import { Text } from 'react-native';
import { useTheme } from '../../context/ThemeContext';
import { getDealerBannerStyles } from './DealerBanner.style';

export default function DealerBanner() {
  const { theme } = useTheme();
  const styles = getDealerBannerStyles(theme);

  return (
    <LinearGradient
      colors={['#2c414b', '#152331', '#0a0a0c']}
      start={{ x: 0.5, y: 0 }}
      end={{ x: 0.5, y: 1 }}
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
