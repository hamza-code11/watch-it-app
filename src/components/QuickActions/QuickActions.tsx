// components/QuickActions/QuickActions.tsx
import { Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import { Text, TouchableOpacity, View } from "react-native";
import { useTheme } from "../../context/ThemeContext";
import { getStyles } from "./QuickActions.styles";

type ActionItem = {
  title: string;
  subtitle: string;
  icon: React.ComponentProps<typeof Ionicons>["name"];
  gradient: [string, string];
  iconColor: string;
};

const actions: ActionItem[] = [
  {
    title: "Swipe to Discover",
    subtitle: "Browse like Tinder — for luxury watches",
    icon: "swap-horizontal-outline",
    gradient: ["#4F9FFF", "#22D3EE"],
    iconColor: "#FFFFFF",
  },
  {
    title: "Live Auctions",
    subtitle: "Bid in real-time on rare timepieces",
    icon: "hammer-outline",
    gradient: ["#8B5CF6", "#4F9FFF"],
    iconColor: "#FFFFFF",
  },
  {
    title: "Direct Negotiate",
    subtitle: "Chat & close deals without middlemen",
    icon: "chatbubble-outline",
    gradient: ["#34D399", "#10B981"],
    iconColor: "#FFFFFF",
  },
  {
    title: "Authentication",
    subtitle: "Expert-certified with digital certificate",
    icon: "shield-checkmark-outline",
    gradient: ["#F472B6", "#EC4899"],
    iconColor: "#FFFFFF",
  },
];

const QuickActions = () => {
  const { theme } = useTheme();
  const styles = getStyles(theme);

  return (
    <View style={styles.container}>
      <View style={styles.grid}>
        {actions.map((action, index) => (
          <TouchableOpacity
            key={index}
            style={styles.card}
            activeOpacity={0.85}
          >
            <LinearGradient
              colors={action.gradient}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 1 }}
              style={styles.cardGradient}
            >
              <View style={styles.iconContainer}>
                <Ionicons name={action.icon} size={28} color={action.iconColor} />
              </View>
              <View style={styles.contentContainer}>
                <Text style={styles.cardTitle}>{action.title}</Text>
                <Text style={styles.cardSubtitle}>{action.subtitle}</Text>
              </View>
            </LinearGradient>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

export default QuickActions;

