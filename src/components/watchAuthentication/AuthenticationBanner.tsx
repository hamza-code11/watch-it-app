import { Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { useRouter } from 'expo-router';
import { Text, View } from 'react-native';
import { useTheme } from '../../context/ThemeContext';
import { getBannerStyles } from './AuthenticationBanner.style';

export default function AuthenticationBanner() {
  const router = useRouter();
  const { theme } = useTheme();
  const styles = getBannerStyles(theme);

  return (
    <LinearGradient
      colors={['#1B2B4B', '#121C33', '#0D1322']} // Dark Blue Gradient
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      style={styles.banner}
    >

      {/* UAE Certified Badge */}
      <View style={styles.badge}>
        <Ionicons name="shield-checkmark-outline" size={14} color="#FFFFFF" />
        <Text style={styles.badgeText}>UAE Certified</Text>
      </View>

      {/* Heading (One Line) */}
      <Text style={styles.bannerTitle}>Watch Authentication</Text>

      {/* Subtitle */}
      <Text style={styles.bannerSubtitle}>
        Get your luxury watch verified by certified UAE experts. Increase buyer trust and selling value with our professional authentication service.
      </Text>
    </LinearGradient>
  );
}
