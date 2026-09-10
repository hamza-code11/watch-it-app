import { Text, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useTheme } from '../../context/ThemeContext';
import { getAboutBannerStyles } from './AboutBanner.style';

export default function AboutBanner() {
  const { theme } = useTheme();
  const styles = getAboutBannerStyles(theme);

  return (
    <LinearGradient
      colors={['#1B2B4B', '#121C33', '#0D1322']}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      style={styles.banner}
    >
      {/* Heading */}
      <Text style={styles.title}>About WatchIt</Text>
      <Text style={styles.description}>
        Curating the world's finest timepieces for discerning collectors sourced with rigor, authenticated without compromise.
      </Text>

      {/* Stats (Single Row) */}
      <View style={styles.statsRow}>
        <View style={styles.statItem}>
          <Text style={styles.statNumber}>5,000+</Text>
          <Text style={styles.statLabel}>Happy Customers</Text>
        </View>
        <View style={styles.statItem}>
          <Text style={styles.statNumber}>50+</Text>
          <Text style={styles.statLabel}>Luxury Brands</Text>
        </View>
        <View style={styles.statItem}>
          <Text style={styles.statNumber}>100%</Text>
          <Text style={styles.statLabel}>Authentic Products</Text>
        </View>
        <View style={styles.statItem}>
          <Text style={styles.statNumber}>4.9★</Text>
          <Text style={styles.statLabel}>Average Rating</Text>
        </View>
      </View>
    </LinearGradient>
  );
}
