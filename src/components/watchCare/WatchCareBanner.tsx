// WatchCareBanner.tsx
import { Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { useRouter } from 'expo-router';
import { Text, TouchableOpacity } from 'react-native';
import { useTheme } from '../../context/ThemeContext';
import { getBannerStyles } from './WatchCareBanner.style';

export default function WatchCareBanner() {
  const router = useRouter();
  const { theme } = useTheme();
  const styles = getBannerStyles(theme);

  return (
    <LinearGradient
      colors={['#1B2B4B', '#121C33', '#0D1322']}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      style={styles.banner}
    >
      <TouchableOpacity style={styles.backBtn} onPress={() => router.back()}>
        <Ionicons name="shield" size={16} color="#FFFFFF" />
        <Text style={styles.backBtnText}>Premium Watch Care</Text>
      </TouchableOpacity>

      <Text style={styles.bannerTitle}>Premium Watch Care</Text>
      <Text style={styles.bannerSubtitle}>
        Protect your luxury timepiece with our professional PPF protection and comprehensive watch care services in the UAE.
      </Text>
    </LinearGradient>
  );
}

