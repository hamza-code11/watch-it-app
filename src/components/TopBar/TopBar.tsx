// components/TopBar/TopBar.tsx
import { Ionicons } from "@expo/vector-icons";
import { Text, TouchableOpacity, View } from "react-native";

import { useTheme } from "../../context/ThemeContext";
import { getStyles } from "./TopBar.styles";

type TopBarProps = {
  appName?: string;
  onAvatarPress?: () => void;
};

const TopBar = ({
  appName = "WristAffair",
  onAvatarPress,
}: TopBarProps) => {
  const { theme } = useTheme();
  const styles = getStyles(theme);

  return (
    <View style={styles.container}>
      {/* Left - App Name */}
      <View style={styles.brandRow}>
        <Text style={styles.appName}>{appName}</Text>
      </View>

      {/* Right - Hamburger Menu Button */}
      <TouchableOpacity
        style={styles.avatarButton}
        onPress={onAvatarPress}
        activeOpacity={0.75}
      >
        <View style={styles.avatarImageWrapper}>
          <Ionicons name="menu" size={20} color="#ffffff" />
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default TopBar;
