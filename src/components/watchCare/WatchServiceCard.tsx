import { Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { useRouter } from 'expo-router';
import { ImageBackground, Text, TouchableOpacity, View, } from 'react-native';
import { useTheme } from '../../context/ThemeContext';
import { WatchService } from '../../types/watchCare.types';
import { getServiceCardStyles } from './WatchServiceCard.style';

interface Props {
  service: WatchService;
}

export default function WatchServiceCard({ service }: Props) {
  const router = useRouter();
  const { theme } = useTheme();
  const styles = getServiceCardStyles(theme);

  return (
    <ImageBackground
      source={{ uri: service.image }}
      style={styles.serviceCard}
      imageStyle={styles.serviceCardImage}
      resizeMode="cover"
    >
      {/* Gradient overlay: upar transparent, neeche dark taake text readable rahe */}
      <LinearGradient
        colors={['transparent', 'rgba(8,8,10,0.55)', 'rgba(8,8,10,0.92)']}
        locations={[0, 0.5, 1]}
        style={styles.gradientOverlay}
      />

      {/* Content */}
      <View style={styles.cardContent}>
        {/* Icon circle */}
        <View style={styles.iconCircle}>
          <Ionicons name={service.icon as any} size={16} color="#D4AF37" />
        </View>

        {/* Title */}
        <Text style={styles.serviceName} numberOfLines={1}>
          {service.name}
        </Text>

        {/* Description */}
        <Text style={styles.serviceDescription} numberOfLines={3}>
          {service.description}
        </Text>

        {/* Bottom row: Price + Arrow button */}
        <View style={styles.bottomRow}>
          <Text style={styles.servicePrice} numberOfLines={1}>
            {service.price}
          </Text>
          <TouchableOpacity
            style={styles.arrowBtn}
            activeOpacity={0.85}
            onPress={() => router.push('/pages/watchCare/bookService')}
          >
            <Ionicons name="arrow-forward" size={14} color="#0A0A0C" />
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
}
