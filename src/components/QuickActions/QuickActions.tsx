// components/QuickActions/QuickActions.tsx
import { Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import { ImageBackground, Text, TouchableOpacity, View } from "react-native";
import { useTheme } from "../../context/ThemeContext";
import { getStyles } from "./QuickActions.styles";

type ActionItem = {
  title: string;
  subtitle: string;
  icon: React.ComponentProps<typeof Ionicons>["name"];
  image: { uri: string };
};

const actions: ActionItem[] = [
  {
    title: "Swipe to Discover",
    subtitle: "Browse like Tinder — for luxury watches",
    icon: "swap-horizontal-outline",
    image: {
      uri: "https://images.unsplash.com/photo-1595923533867-ff8a01335ff9?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  },
  {
    title: "Live Auctions",
    subtitle: "Bid on rare finds",
    icon: "hammer-outline",
    image: {
      uri: "https://plus.unsplash.com/premium_photo-1658506826316-f21670ec809e?q=80&w=1143&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  },
  {
    title: "Direct Negotiate",
    subtitle: "Chat & close deals without middlemen",
    icon: "chatbubble-outline",
    image: {
      uri: "https://plus.unsplash.com/premium_photo-1720551260146-df564ac2eed4?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  },
  {
    title: "Authentication",
    subtitle: "100% Genuine",
    icon: "shield-checkmark-outline",
    image: {
      uri: "https://images.unsplash.com/photo-1604242692760-2f7b0c26856d?q=80&w=1169&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
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
            <ImageBackground
              source={action.image}
              style={styles.cardBg}
              imageStyle={styles.cardImage}
            >
              <LinearGradient
                colors={[
                  "rgba(0,0,0,0.15)",
                  "rgba(0,0,0,0.75)",
                  "rgba(0,0,0,0.99)",
                ]}
                locations={[0, 0.5, 1]}
                style={styles.overlay}
              >
                {/* Top row: icon badge */}
                <View style={styles.topRow}>
                  <View style={styles.iconBadge}>
                    <Ionicons name={action.icon} size={18} color="#FFFFFF" />
                  </View>
                </View>

                {/* Bottom row: text + chevron */}
                <View style={styles.bottomRow}>
                  <View style={styles.textContainer}>
                    <Text style={styles.cardTitle} numberOfLines={1}>
                      {action.title}
                    </Text>
                    <Text style={styles.cardSubtitle} numberOfLines={1}>
                      {action.subtitle}
                    </Text>
                  </View>

                  <View style={styles.chevronBadge}>
                    <Ionicons
                      name="chevron-forward"
                      size={14}
                      color="#FFFFFF"
                    />
                  </View>
                </View>
              </LinearGradient>
            </ImageBackground>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

export default QuickActions;