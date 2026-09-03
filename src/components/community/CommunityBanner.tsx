import { LinearGradient } from 'expo-linear-gradient';
import { Text } from 'react-native';
import { useTheme } from '../../context/ThemeContext';
import { getCommunityBannerStyles } from './CommunityBanner.style';

export default function CommunityBanner() {
  const { theme } = useTheme();
  const styles = getCommunityBannerStyles(theme);

  return (
    <LinearGradient
      colors={['#1B2B4B', '#121C33', '#0D1322']}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      style={styles.banner}
    >
      <Text style={styles.title}>WatchIt Community</Text>
      <Text style={styles.subtitle}>
        Connect with watch enthusiasts across the UAE
      </Text>
    </LinearGradient>
  );
}
