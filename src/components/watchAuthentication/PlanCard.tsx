import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import { useTheme } from '../../context/ThemeContext';
import { AuthenticationMethod } from '../../types/watchAuthentication.types';
import { getPlanCardStyles } from './PlanCard.style';

interface PlanCardProps {
  plan: AuthenticationMethod;
}

export default function PlanCard({ plan }: PlanCardProps) {
  const { theme } = useTheme();
  const styles = getPlanCardStyles(theme);
  const router = useRouter();

  return (
    <View>
      <View style={styles.pageHeader}>
        <Text style={styles.pageTitle}>
          Choose Your Authentication Method
        </Text>

        <Text style={styles.pageSubtitle}>
          Three convenient ways. The same trusted result.
        </Text>
      </View>

      <View style={styles.planCard}>
        <View style={styles.planRow}>

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

          <View style={styles.planContent}>
            <Text style={styles.planDescription} numberOfLines={3}>
              {plan.description}
            </Text>

            <View style={styles.planFeatures}>
              {plan.features.map((feature, index) => (
                <View key={index} style={styles.planFeature}>
                  <Ionicons
                    name="checkmark-circle"
                    size={13}
                    color="#4a94c4"
                  />

                  <Text style={styles.planFeatureText} numberOfLines={2}>
                    {feature}
                  </Text>
                </View>
              ))}
            </View>

            <TouchableOpacity
              style={styles.planButton}
              activeOpacity={0.85}
              onPress={() => router.push('/pages/watchAuthentication/manageRequests')}
            >
              <Text style={styles.planButtonText}>
                {plan.buttonLabel}
              </Text>

              <Ionicons
                name="arrow-forward"
                size={15}
                color="#fdfdff"
              />
            </TouchableOpacity>
          </View>

        </View>
      </View>
    </View>
  );
}