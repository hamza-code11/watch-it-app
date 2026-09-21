import { LinearGradient } from 'expo-linear-gradient';
import { Text, View } from 'react-native';
import { useTheme } from '../../context/ThemeContext';
import { getAboutBannerStyles } from './AboutBanner.style';

export default function AboutBanner() {
  const { theme } = useTheme();
  const styles = getAboutBannerStyles(theme);

  return (
    <LinearGradient
      colors={['#0a1628', '#0f4c81']}
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
