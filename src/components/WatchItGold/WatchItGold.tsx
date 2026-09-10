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


  return (
    <View style={styles.container}>

        <TouchableOpacity
          activeOpacity={0.85}
          onPress={() => router.push("/pages/subscription" as any)}
        >
          <View style={styles.card}>

            <View style={styles.content}>
              {/* Top row */}
              <View style={styles.topRow}>
                {/* Left: sparkle icon + stacked gold title */}
                <View style={styles.leftSection}>
                  <Ionicons name="sparkles" size={16} color="#F0B429" />
                  <View style={styles.titleStack}>
                    <Text style={styles.titleLine}>WATCH IT</Text>
                    <Text style={styles.titleLine}>GOLD</Text>
                  </View>
                </View>

                <View style={{ flex: 1 }} />

                {/* Right: Upgrade pill button */}
                <LinearGradient
                  colors={["#F7C948", "#E8A424"]}
                  start={{ x: 0, y: 0 }}
                  end={{ x: 1, y: 0 }}
                  style={styles.upgradeBtn}
                >
                  <Text style={styles.upgradeBtnText}>Upgrade · AED 50</Text>
                </LinearGradient>
              </View>
            </View>
          </View>
        </TouchableOpacity>

    </View>
  );
};

export default WatchItGold;
