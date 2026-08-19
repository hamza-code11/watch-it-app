// ThemeToggle.tsx
import { Ionicons } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native";
import { useTheme } from "../../context/ThemeContext";
import { getStyles } from "./ThemeToggle.styles";

const ThemeToggle = () => {
  const { theme, isDark, toggleTheme } = useTheme();
  const styles = getStyles(theme);

  return (
    <TouchableOpacity
      style={styles.toggleButton}
      onPress={toggleTheme}
      activeOpacity={0.7}
    >
      <Ionicons
        name={isDark ? "moon" : "sunny"}
        size={18}
        color={isDark ? theme.textPrimary : "#f59e0b"}
      />
    </TouchableOpacity>
  );
};

export default ThemeToggle;