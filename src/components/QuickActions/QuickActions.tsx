import { Ionicons } from "@expo/vector-icons";
import { Text, TouchableOpacity, View } from "react-native";

import { useTheme } from "../../context/ThemeContext";
import { getStyles } from "./QuickActions.styles";

type ActionItem = {
  title: string;
  icon: React.ComponentProps<typeof Ionicons>["name"];
  color: string;
  tint: string;
  onPress?: () => void;
};

const actions: ActionItem[] = [
  {
    title: "Community",
    icon: "people-outline",
    color: "#6366F1",
    tint: "#12141F",
  },
  {
    title: "Authnticate",
    icon: "shield-checkmark-outline",
    color: "#0EA5E9",
    tint: "#12141F",
  },
  {
    title: "Services",
    icon: "construct-outline",
    color: "#F59E0B",
    tint: "#12141F",
  },
  {
    title: "Auctions",
    icon: "hammer-outline",
    color: "#EF4444",
    tint: "#12141F",
  },
];

const QuickActions = () => {
  const { theme } = useTheme();
  const styles = getStyles(theme);

  return (
    <View style={styles.container}>
      <View style={styles.headerRow}>
        <Text style={styles.headerTitle}>Quick actions</Text>
        <Text style={styles.headerSubtitle}>Everything you need, one tap away</Text>
      </View>

      <View style={styles.grid}>
        {actions.map((action) => (
          <TouchableOpacity
            key={action.title}
            style={styles.tile}
            activeOpacity={0.75}
            onPress={action.onPress}
          >
            <View style={[styles.iconChip, { backgroundColor: action.tint }]}>
              <Ionicons name={action.icon} size={30} color={action.color} />
            </View>

            <Text style={styles.tileTitle} numberOfLines={2}>
              {action.title}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

export default QuickActions;

