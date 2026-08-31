import { Ionicons } from '@expo/vector-icons';
import { Text, View } from 'react-native';
import { useTheme } from '../../context/ThemeContext';
import { WatchService } from '../../types/watchCare.types';
import { getServiceCardStyles } from './WatchServiceCard.style';

export default function WatchServiceCard({ service }: { service: WatchService }) {
  const { theme } = useTheme();
  const styles = getServiceCardStyles(theme);

  return (
    <View style={styles.serviceCard}>
      {/* Icon aur Heading Ek Hi Row Mein */}
      <View style={styles.serviceHeader}>
        <View style={styles.serviceIcon}>
          <Ionicons name={service.icon as any} size={18} color={theme.accentPrimary} />
        </View>
        <Text style={styles.serviceName}>{service.name}</Text>
      </View>

      {/* Service Price */}
      <Text style={styles.servicePrice}>
        {service.price} {service.priceType && <Text style={styles.priceType}>{service.priceType}</Text>}
      </Text>

      {/* Features */}
      <View style={styles.serviceFeatures}>
        {service.features.map((feature, index) => (
          <View key={index} style={styles.serviceFeature}>
            <Ionicons name="checkmark" size={14} color={theme.success} />
            <Text style={styles.serviceFeatureText}>{feature}</Text>
          </View>
        ))}
      </View>
    </View>
  );
}
