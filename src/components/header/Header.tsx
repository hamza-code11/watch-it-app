import { Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import { Image, Text, TouchableOpacity, View } from "react-native";

import { useTheme } from "../../context/ThemeContext";
import { getStyles, headerGradient } from "./Header.styles";

type HeaderProps = {
  onProfilePress?: () => void;
  onNotificationPress?: () => void;
  avatarImage?: string;
};

const Header = ({
  onProfilePress,
  onNotificationPress,
  avatarImage,
}: HeaderProps) => {
  const { theme } = useTheme();
  const styles = getStyles(theme);

  return (
    <LinearGradient
      colors={headerGradient}
      start={{ x: 2, y: 6 }}
      end={{ x: 0, y: 0.5 }}
      style={styles.header}
    >
      <View style={styles.row}>
        {/* Left - Brand Section */}
        <View style={styles.brandContainer}>
          <Text style={styles.brandTitle}>WATCH IT</Text>

          <View style={styles.brandSubContainer}>
            <Text style={styles.brandSubUae}>UAE</Text>
            <Text style={styles.brandSubSeparator}>·</Text>
            <Text style={styles.brandSubLuxury}>
              LUXURY TIMEPIECES
            </Text>
          </View>
        </View>

        {/* Right - Notification + Profile Avatar */}
        <View style={styles.rightGroup}>
          <TouchableOpacity
            style={styles.notificationButton}
            onPress={onNotificationPress}
          >
            <Ionicons
              name="notifications-outline"
              size={22}
              color={theme.textPrimary}
            />

            <View style={styles.notificationDot} />
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.avatarButton}
            onPress={onProfilePress}
          >
            {avatarImage ? (
              <Image
                source={{ uri: avatarImage }}
                style={styles.avatarImage}
              />
            ) : (
              <Text style={styles.avatarText}>JD</Text>
            )}
          </TouchableOpacity>
        </View>
      </View>
    </LinearGradient>
  );
};

export default Header;