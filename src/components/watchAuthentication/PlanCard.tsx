import { Ionicons } from '@expo/vector-icons';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import { useTheme } from '../../context/ThemeContext';
import { AuthenticationMethod } from '../../types/watchAuthentication.types';
import { getPlanCardStyles } from './PlanCard.style';

interface PlanCardProps {
  plan: AuthenticationMethod;
  onPress?: () => void;
}

export default function PlanCard({ plan, onPress }: PlanCardProps) {
  const { theme } = useTheme();
  const styles = getPlanCardStyles(theme);

  return (
    <View>
      {/* Page Heading + Subtitle (top-left, outside the card) */}
      <View style={styles.pageHeader}>
        <Text style={styles.pageTitle}>Choose Your Authentication Method</Text>
        <Text style={styles.pageSubtitle}>
          Three convenient ways. The same trusted result.
        </Text>
      </View>

      <View style={styles.planCard}>
        <View style={styles.planRow}>
          {/* Left column: Header (number + title) on top, image below */}
          <View style={styles.planLeft}>
            <View style={styles.planHeader}>
              <View style={styles.numberBadge}>
                <Text style={styles.numberText}>{plan.number}</Text>
              </View>
              <Text style={styles.planName} numberOfLines={1}>
                {plan.name}
              </Text>
            </View>

            <Image
              source={{ uri: plan.image }}
              style={styles.planImage}
              resizeMode="cover"
            />
          </View>

          {/* Right column: Description + Features + Button */}
          <View style={styles.planContent}>
            <Text style={styles.planDescription} numberOfLines={3}>
              {plan.description}
            </Text>

            <View style={styles.planFeatures}>
              {plan.features.map((feature, index) => (
                <View key={index} style={styles.planFeature}>
                  <Ionicons name="checkmark-circle" size={13} color="#D4AF37" />
                  <Text style={styles.planFeatureText} numberOfLines={2}>
                    {feature}
                  </Text>
                </View>
              ))}
            </View>

            <TouchableOpacity
              style={styles.planButton}
              onPress={onPress}
              activeOpacity={0.85}
            >
              <Text style={styles.planButtonText}>{plan.buttonLabel}</Text>
              <Ionicons name="arrow-forward" size={15} color="#0A0A0C" />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
}
