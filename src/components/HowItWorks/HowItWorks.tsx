// components/HowItWorks/HowItWorks.tsx
import { Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import { useRouter } from "expo-router";
import { Text, TouchableOpacity, View } from "react-native";
import { useTheme } from "../../context/ThemeContext";
import { getStyles } from "./HowItWorks.styles";

const HowItWorks = () => {
  const { theme } = useTheme();
  const styles = getStyles(theme);
  const router = useRouter();

  const steps = [
    {
      icon: "search-outline",
      label: "Browse",
      route: "/browse",
      colors: ["#4F9FFF", "#22D3EE"] as const,
    },
    {
      icon: "swap-horizontal-outline",
      label: "Swipe",
      route: "/swipe",
      colors: ["#8B5CF6", "#4F9FFF"] as const,
    },
    {
      icon: "heart-outline",
      label: "Match",
      route: "/match",
      colors: ["#F472B6", "#EC4899"] as const,
    },
    {
      icon: "chatbubble-outline",
      label: "Chat & Buy",
      route: "/chat",
      colors: ["#34D399", "#10B981"] as const,
    },
  ];

  const handlePress = (route: string) => {
    router.push(route as any);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>How it works</Text>

      <View style={styles.stepsContainer}>
        {steps.map((step, index) => (
          <TouchableOpacity
            key={index}
            style={styles.stepItem}
            activeOpacity={0.7}
            onPress={() => handlePress(step.route)}
          >
            <LinearGradient
              colors={step.colors}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 1 }}
              style={styles.iconCircle}
            >
              <Ionicons name={step.icon as any} size={24} color="#FFFFFF" />
            </LinearGradient>
            <Text style={styles.stepLabel}>{step.label}</Text>
            {index < steps.length - 1 && (
              <View style={styles.connectorLine} />
            )}
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

export default HowItWorks;

