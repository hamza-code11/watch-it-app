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
      colors={['#2c414b', '#152331', '#0a0a0c']}
      start={{ x: 0.5, y: 0 }}
      end={{ x: 0.5, y: 1 }}
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
