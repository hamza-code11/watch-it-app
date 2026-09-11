// TermsBanner.tsx
import { Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { Text, View } from 'react-native';
import { useTheme } from '../../context/ThemeContext';
import { termsData } from '../../data/terms';
import { getTermsBannerStyles } from './TermsBanner.style';

export default function TermsBanner() {
  const { theme } = useTheme();
  const styles = getTermsBannerStyles(theme);

  return (
    <LinearGradient
      colors={['#2c414b', '#152331', '#0a0a0c']}
      start={{ x: 0.5, y: 0 }}
      end={{ x: 0.5, y: 1 }}
      style={styles.banner}
    >
      <Text style={styles.bannerTitle}>{termsData.title}</Text>
      <Text style={styles.bannerIntro}>{termsData.intro}</Text>
      <View style={styles.lastUpdatedRow}>
        <Ionicons name="calendar-outline" size={16} color="#60A5FA" />
        <Text style={styles.lastUpdatedText}>Last Updated: {termsData.lastUpdated}</Text>
      </View>
    </LinearGradient>
  );
}
