// TermsBanner.tsx
import { Ionicons } from '@expo/vector-icons';
import { Text, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useTheme } from '../../context/ThemeContext';
import { getTermsBannerStyles } from './TermsBanner.style';
import { termsData } from '../../data/terms';

export default function TermsBanner() {
  const { theme } = useTheme();
  const styles = getTermsBannerStyles(theme);

  return (
    <LinearGradient
      colors={['#1B2B4B', '#121C33', '#0D1322']}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
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
