import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { Text, TouchableOpacity, View } from 'react-native';
import { useTheme } from '../../context/ThemeContext';
import { getYourWatchCareStyles } from './YourWatchCare.style';

interface Props {
  activeServices?: number;
}

const BENEFITS = [
  {
    icon: 'stats-chart-outline',
    text: 'Track progress in real time',
  },
  {
    icon: 'notifications-outline',
    text: 'Get update notifications',
  },
  {
    icon: 'document-text-outline',
    text: 'View your service history',
  },
] as const;

export default function YourWatchCare({
  activeServices = 0,
}: Props) {
  const router = useRouter();
  const { theme } = useTheme();
  const styles = getYourWatchCareStyles(theme);

  return (
    <View style={styles.container}>

      {/* Header */}
      <View style={styles.headerRow}>
        <Text style={styles.title}>
          Your Watch Care
        </Text>

        <View style={styles.activeBadge}>
          <Text style={styles.activeCount}>
            {activeServices}
          </Text>

          <Text style={styles.activeText}>
            Active
          </Text>
        </View>
      </View>

      {/* Subtitle */}
      <Text style={styles.subtitle}>
        Track and manage all your service requests.
      </Text>


      {/* CTA */}
      <TouchableOpacity
        style={styles.bookBtn}
        onPress={() => router.push('/pages/watchCare/bookService')}
        activeOpacity={0.85}
      >
        <Text style={styles.bookBtnText}>
          Book a Service
        </Text>

        <Ionicons
          name="arrow-forward"
          size={15}
          color="#0A0A0C"
        />
      </TouchableOpacity>

      {/* Divider */}
      <View style={styles.divider} />

      {/* Benefits */}
      <View style={styles.benefitsRow}>
        {BENEFITS.map((item) => (
          <View
            key={item.text}
            style={styles.benefitItem}
          >
            <View style={styles.iconContainer}>
              <Ionicons
                name={item.icon}
                size={16}
                color="#D4AF37"
              />
            </View>

            <Text style={styles.benefitText}>
              {item.text}
            </Text>
          </View>
        ))}
      </View>

    </View>
  );
}
