import { Ionicons } from '@expo/vector-icons';
import { Text, View } from 'react-native';
import { useTheme } from '../../context/ThemeContext';
import { getWhyChooseUsStyles } from './WhyChooseUs.style';

const featuresData = [
  {
    id: 1,
    title: 'Certified Watch Experts',
    description: 'Our team consists of certified professionals with years of experience',
    icon: 'ribbon-outline',
  },
  {
    id: 2,
    title: 'Genuine Parts',
    description: 'We use only authentic parts for all repairs and servicing',
    icon: 'settings-outline',
  },
  {
    id: 3,
    title: '24-48 Hour Inspection',
    description: 'Quick turnaround with thorough inspection and detailed reporting',
    icon: 'time-outline',
  },
  {
    id: 4,
    title: 'Secure Handling',
    description: 'Your watch is handled with the utmost care and security',
    icon: 'lock-closed-outline',
  },
  {
    id: 5,
    title: 'Doorstep Pickup & Delivery',
    description: 'Convenient pickup and delivery service right at your doorstep',
    icon: 'car-outline',
  },
  {
    id: 6,
    title: 'Service Warranty',
    description: 'All services come with a comprehensive warranty for peace of mind',
    icon: 'shield-checkmark-outline',
  },
];

export default function WhyChooseUs() {
  const { theme } = useTheme();
  const styles = getWhyChooseUsStyles(theme);

  return (
    <View style={styles.container}>
      {/* Section Heading */}
      <Text style={styles.sectionTitle}>Why Choose Our Service</Text>
      <Text style={styles.sectionSubtitle}>Trusted by watch enthusiasts across the UAE</Text>

      {/* Features Grid (2 Columns) */}
      <View style={styles.featuresGrid}>
        {featuresData.map((feature) => (
          <View key={feature.id} style={styles.featureItem}>
            {/* Feature Icon */}
            <View style={styles.featureIcon}>
              <Ionicons name={feature.icon as any} size={20} color={theme.accentPrimary} />
            </View>

            {/* Feature Title */}
            <Text style={styles.featureTitle}>{feature.title}</Text>

            {/* Feature Description */}
            <Text style={styles.featureDescription}>{feature.description}</Text>
          </View>
        ))}
      </View>
    </View>
  );
}
