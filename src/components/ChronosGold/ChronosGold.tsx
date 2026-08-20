// components/ChronosGold/ChronosGold.tsx
import { Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import { useRouter } from "expo-router";
import React from "react";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import { useTheme } from "../../context/ThemeContext";
import { getStyles } from "./ChronosGold.styles";

type ColorKey =
  | "accentPrimary"
  | "accentSecondary"
  | "accentTertiary"
  | "success"
  | "warning"
  | "danger";

type Perk = {
  key: string;
  icon: React.ComponentProps<typeof Ionicons>["name"];
  label: string;
  colorKey: ColorKey;
};

const PERKS: Perk[] = [
  { key: "verified", icon: "shield-checkmark", label: "Verified", colorKey: "accentPrimary" },
  { key: "priority", icon: "flash", label: "Priority", colorKey: "warning" },
  { key: "escrow", icon: "shield-half", label: "Escrow", colorKey: "success" },
  { key: "private", icon: "watch", label: "Private", colorKey: "accentTertiary" },
  { key: "global", icon: "globe", label: "Global", colorKey: "accentSecondary" },
  { key: "vip", icon: "headset", label: "VIP", colorKey: "danger" },
];

const ChronosGold = () => {
  const { theme } = useTheme();
  const styles = getStyles(theme);
  const router = useRouter();

  return (
    <View style={styles.container}>
      {/* Header with gold accent */}
      <View style={styles.headerSection}>
        <View style={styles.headerLeft}>
          <LinearGradient
            colors={["#D4AF37", "#F7E7B4", "#D4AF37"]}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
            style={styles.goldBadge}
          >
            <Ionicons name="diamond" size={16} color="#0B0E14" />
          </LinearGradient>
          <View>
            <Text style={styles.badgeLabel}>CHRONOS GOLD</Text>
            <Text style={styles.title}>Premium Membership</Text>
          </View>
        </View>
        <TouchableOpacity
          activeOpacity={0.85}
          onPress={() => router.push("/membership" as any)}
        >
          <LinearGradient
            colors={["#FFFFFF", "#E9EEF6"]}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
            style={styles.joinButton}
          >
            <Text style={styles.joinButtonText}>Join</Text>
          </LinearGradient>
        </TouchableOpacity>
      </View>

      {/* Perks in horizontal scroll */}
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        {PERKS.map((perk) => {
          const color = theme[perk.colorKey];
          return (
            <View key={perk.key} style={styles.perkCard}>
              <View style={[styles.iconCircle, { backgroundColor: color + "15" }]}>
                <Ionicons name={perk.icon} size={24} color={color} />
              </View>
              <Text style={styles.perkLabel}>{perk.label}</Text>
            </View>
          );
        })}
      </ScrollView>

    </View>
  );
};

export default ChronosGold;