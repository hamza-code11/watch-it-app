import { Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { useRouter } from 'expo-router';
import {
  ImageBackground,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { useTheme } from '../../context/ThemeContext';
import { getBannerStyles } from './WatchCareBanner.style';

const TRUST_ITEMS = [
  { icon: 'ribbon-outline',           title: 'Certified Experts', desc: 'UAE based specialists' },
  { icon: 'shield-checkmark-outline', title: 'Genuine Parts',     desc: '100% authentic' },
  { icon: 'car-outline',              title: 'Pickup & Delivery', desc: 'Across the UAE' },
  { icon: 'checkmark-done-outline',   title: 'Service Warranty',  desc: 'For your peace of mind' },
] as const;

export default function WatchCareBanner() {
  const router = useRouter();
  const { theme } = useTheme();
  const styles = getBannerStyles(theme);

  return (
    <View style={styles.wrapper}>
      <ImageBackground
        source={{
          uri: 'https://images.unsplash.com/photo-1622434641406-a158123450f9?q=80&w=1200&auto=format&fit=crop',
        }}
        style={styles.banner}
        imageStyle={styles.bannerImage}
        resizeMode="cover"
      >
        {/* Left-side dark overlay for text highlight */}
        <LinearGradient
          colors={[
            'rgba(10,10,12,0.85)',
            'rgba(10,10,12,0.5)',
            'transparent',
          ]}
          start={{ x: 0, y: 0.5 }}
          end={{ x: 1, y: 0.5 }}
          style={styles.leftOverlay}
          pointerEvents="none"
        />

        {/* Bottom gradient overlay (holds all content) */}
        <LinearGradient
          colors={['transparent', 'rgba(10,10,12,0.7)', 'rgba(10,10,12,0.98)']}
          start={{ x: 0, y: 0 }}
          end={{ x: 0, y: 1 }}
          style={styles.overlay}
        >
          {/* SERVICES label */}
          <Text style={styles.serviceLabel}>SERVICES</Text>

          {/* Heading */}
          <Text style={styles.bannerTitle}>
            Expert Care{'\n'}for Timeless Value.
          </Text>

          {/* Subtitle */}
          <Text style={styles.bannerSubtitle}>
            Professional protection, servicing and repairs for your watch in the
            UAE.
          </Text>

          {/* Book a Service Button */}
          <TouchableOpacity
            style={styles.bookBtn}
            activeOpacity={0.85}
            onPress={() => router.push('/pages/watchCare/bookService')}
          >
            <Text style={styles.bookBtnText}>Book a Service</Text>
            <Ionicons name="arrow-forward" size={16} color="#ffffff" />
          </TouchableOpacity>

          {/* Trust Items Row */}
          <View style={styles.trustRow}>
            {TRUST_ITEMS.map((item, i) => (
              <View key={i} style={styles.trustItem}>
                <Ionicons name={item.icon} size={16} color="#8bbdd9" />
                <Text style={styles.trustTitle} numberOfLines={1}>
                  {item.title}
                </Text>
                <Text style={styles.trustDesc} numberOfLines={2}>
                  {item.desc}
                </Text>
              </View>
            ))}
          </View>
        </LinearGradient>
      </ImageBackground>
    </View>
  );
}
