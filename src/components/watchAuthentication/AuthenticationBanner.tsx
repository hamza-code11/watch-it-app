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

  const trustItems = [
    {
      icon: 'ribbon-outline',
      title: 'Expert Watchmakers',
      subtitle: 'Years of industry experience',
    },
    {
      icon: 'document-text-outline',
      title: 'Official Certificate',
      subtitle: 'Recognised & trusted',
    },
    {
      icon: 'lock-closed-outline',
      title: 'Secure & Confidential',
      subtitle: 'Your privacy, our priority',
    },
  ] as const;

  return (
    <LinearGradient
      colors={['#0a1628', '#0f4c81']}
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

      {/* Trust Row: 3 items in one row */}
      <View style={styles.trustRow}>
        {trustItems.map((item, index) => (
          <View key={index} style={styles.trustItem}>
            <Ionicons name={item.icon} size={16} color="#2f95c8" />
            <Text style={styles.trustTitle} numberOfLines={1}>
              {item.title}
            </Text>
            <Text style={styles.trustSubtitle} numberOfLines={2}>
              {item.subtitle}
            </Text>
          </View>
        ))}
      </View>
    </LinearGradient>
  );
}
