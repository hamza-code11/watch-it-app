// components/WatchItGold/WatchItGold.tsx
import { Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import { useRouter } from "expo-router";
import { Text, TouchableOpacity, View } from "react-native";
import { useTheme } from "../../context/ThemeContext";
import { getStyles } from "./WatchItGold.styles";

interface WatchItGoldProps {
  onDismiss?: () => void;
}

const WatchItGold = ({ onDismiss }: WatchItGoldProps) => {
  const { theme } = useTheme();
  const styles = getStyles(theme);
  const router = useRouter();

  const features = [
    { icon: "infinite-outline", label: "Unlimited swipes" },
    { icon: "trending-up-outline", label: "Priority listings" },
    { icon: "lock-closed-outline", label: "Escrow access" },
    { icon: "hammer-outline", label: "Auction access" },
    { icon: "ribbon-outline", label: "Gold badge" },
    { icon: "star-outline", label: "VIP events" },
  ];

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        {/* Recommended Badge */}
        <View style={styles.recommendedBadge}>
          <Text style={styles.recommendedText}>Most popular</Text>
        </View>

        {onDismiss && (
          <TouchableOpacity
            style={styles.closeButton}
            onPress={onDismiss}
            hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
          >
            <Ionicons name="close" size={16} color={theme.textLight} />
          </TouchableOpacity>
        )}

        {/* Header */}
        <View style={styles.badgeRow}>
          <Ionicons name="diamond" size={14} color={theme.warning} />
          <Text style={styles.badgeText}>Watch it gold</Text>
        </View>
        <Text style={styles.title}>Unlock the full experience</Text>

        {/* Features Grid - 3 columns */}
        <View style={styles.featuresGrid}>
          {features.map((feature, index) => (
            <View key={index} style={styles.featureItem}>
              <View style={styles.iconContainer}>
                <Ionicons name={feature.icon as any} size={14} color={theme.warning} />
              </View>
              <Text style={styles.featureLabel}>{feature.label}</Text>
            </View>
          ))}
        </View>

        {/* CTA Button */}
        <TouchableOpacity
          activeOpacity={0.85}
          onPress={() => router.push("/gold" as any)}
          style={styles.ctaWrapper}
        >
          <LinearGradient
            colors={["#D4AF37", "#F7E7B4", "#D4AF37"]}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
            style={styles.ctaButton}
          >
            <Text style={styles.ctaText}>Get Gold · AED 50/month</Text>
            <Ionicons name="arrow-forward" size={16} color={theme.bgPrimary} />
          </LinearGradient>
        </TouchableOpacity>

        <Text style={styles.trustText}>Cancel anytime · No commitment</Text>
      </View>
    </View>
  );
};

export default WatchItGold;

