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
import { getExpertAdviceBannerStyles } from './ExpertAdviceBanner.style';

interface Props {
  onPress?: () => void;
  activeDotIndex?: number;
  dotsCount?: number;
}

export default function ExpertAdviceBanner({
  onPress,
}: Props) {
  const router = useRouter();

  const { theme } = useTheme();
  const styles = getExpertAdviceBannerStyles(theme);

  return (
    <View style={styles.bannerWrapper}>
      <ImageBackground
        source={{
          uri: 'https://images.unsplash.com/photo-1523170335258-f5ed11844a49?q=80&w=1200&auto=format&fit=crop',
        }}
        style={styles.banner}
        imageStyle={styles.bannerImage}
        resizeMode="cover"
      >
        <LinearGradient
          colors={[
            'rgba(3,10,17,0.98)',
            'rgba(3,10,17,0.90)',
            'rgba(3,10,17,0.45)',
            'rgba(3,10,17,0.05)',
          ]}
          locations={[0, 0.35, 0.68, 1]}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
          style={styles.bannerOverlay}
        />

        <View style={styles.bannerContent}>
          <Text style={styles.bannerLabel}>
            NEW SERVICE
          </Text>

          <Text style={styles.bannerTitle}>
            Get Expert Advice
          </Text>

          <Text style={styles.bannerSubtitle}>
            Speak with our watch specialists for personalized
            care and recommendations.
          </Text>

          <TouchableOpacity
            style={styles.bannerBtn}
            onPress={() => router.push('/pages/watchCare/bookService')}
            activeOpacity={0.85}
          >
            <Text style={styles.bannerBtnText}>
              Request an Inspection
            </Text>

            <Ionicons
              name="arrow-forward"
              size={13}
              color="#111111"
            />
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
}
