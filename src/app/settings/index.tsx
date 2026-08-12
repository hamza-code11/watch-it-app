// src/app/settings/index.tsx
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import {
  Image,
  ScrollView,
  Share,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import ThemeToggle from "../../../example/src/components/themetoggle/ThemeToggle";
import { useTheme } from "../../../example/src/context/ThemeContext";
import { getStyles } from "./settings.styles";

type SettingItemProps = {
  icon: React.ComponentProps<typeof Ionicons>["name"];
  title: string;
  onPress?: () => void;
  showArrow?: boolean;
  rightElement?: React.ReactNode;
};

// TODO: replace with actual logged-in user data (context / API / props)
const USER = {
  name: "Alex",
  email: "Alex.law@example.com",
  avatar: "https://i.pravatar.cc/150?img=12",
};

const Settings = () => {
  const { theme } = useTheme();
  const styles = getStyles(theme);
  const router = useRouter();

  const handleInviteFriends = async () => {
    try {
      await Share.share({
        message: "Check out this amazing app! 🚀",
        title: "Invite Friends",
      });
    } catch (error) {
      console.log("Error sharing:", error);
    }
  };

  const handleLogout = () => {
    console.log("🚪 Logging out...");
  };

  return (
    <SafeAreaView style={styles.container} edges={["top"]}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        {/* Header with Close Button */}
        {/* <View style={styles.headerRow}>
          <Text style={styles.pageTitle}>Settings</Text>
          <TouchableOpacity onPress={() => router.back()} style={styles.closeButton}>
            <Ionicons name="close" size={22} color={theme.textPrimary} />
          </TouchableOpacity>
        </View> */}

        {/* Profile */}
        <View style={styles.profileSection}>
          <Image source={{ uri: USER.avatar }} style={styles.avatar} />
          <Text style={styles.profileName}>{USER.name}</Text>
          <Text style={styles.profileEmail}>{USER.email}</Text>
        </View>

        {/* Invite Friends - Premium Card */}
        <TouchableOpacity
          style={styles.inviteCard}
          onPress={handleInviteFriends}
          activeOpacity={0.85}
        >
          <View style={styles.inviteLeft}>
            <View style={styles.inviteIconWrapper}>
              <Ionicons name="people" size={22} color="#ffffff" />
            </View>
            <View style={{ flexShrink: 1 }}>
              <Text style={styles.inviteTitle}>Invite friends</Text>
              <Text style={styles.inviteSubtitle}>Get ₹50 for each friend who joins</Text>
            </View>
          </View>

          {/* Decorative graphic (right side) */}
          <View style={styles.inviteGraphic}>
            <View style={styles.inviteGraphicCard}>
              <View style={styles.inviteGraphicLine} />
              <View style={styles.inviteGraphicLine} />
              <View style={[styles.inviteGraphicLine, { width: "60%" }]} />
            </View>
            <View style={styles.inviteGraphicHeart}>
              <Ionicons name="heart" size={12} color="#ffffff" />
            </View>
          </View>
        </TouchableOpacity>

        {/* Settings List - each item its own card */}
        <View style={styles.settingsList}>
          <SettingItem
            icon="moon-outline"
            title="Dark mode"
            rightElement={<ThemeToggle />}
          />

          <SettingItem
            icon="settings-outline"
            title="Mange profile"
            onPress={() => console.log("Manage profile")}
          />

          <SettingItem
            icon="options-outline"
            title="Customize my experience"
            onPress={() => console.log("Customize my experience")}
          />

          <SettingItem
            icon="person-circle-outline"
            title="Manage notifications"
            onPress={() => console.log("Manage notifications")}
          />

          <SettingItem
            icon="bulb-outline"
            title="FAQ"
            onPress={() => console.log("FAQ")}
          />

          <SettingItem
            icon="ribbon-outline"
            title="Mange subscription"
            onPress={() => console.log("Manage subscription")}
          />

          <SettingItem
            icon="happy-outline"
            title="Report a bug"
            onPress={() => console.log("Report a bug")}
          />
        </View>

        {/* Logout Button */}
        <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
          <Ionicons name="log-out-outline" size={22} color="#dc2626" />
          <Text style={styles.logoutText}>Logout</Text>
        </TouchableOpacity>

        {/* Version Info */}
        <View style={styles.versionContainer}>
          <Text style={styles.versionText}>Version 1.0.0</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

// ========== SETTING ITEM ==========
const SettingItem = ({
  icon,
  title,
  onPress,
  showArrow = true,
  rightElement,
}: SettingItemProps) => {
  const { theme } = useTheme();
  const styles = getStyles(theme);

  return (
    <TouchableOpacity
      style={styles.settingItem}
      onPress={onPress}
      activeOpacity={onPress ? 0.7 : 1}
      disabled={!onPress && !rightElement}
    >
      <View style={styles.settingLeft}>
        <View style={styles.settingIconWrapper}>
          <Ionicons name={icon} size={18} color={theme.textPrimary} />
        </View>
        <Text style={styles.settingTitle}>{title}</Text>
      </View>

      {rightElement ? (
        <View style={styles.settingRight}>{rightElement}</View>
      ) : showArrow ? (
        <View style={styles.settingArrowWrapper}>
          <Ionicons name="chevron-forward" size={16} color={theme.textPrimary} />
        </View>
      ) : null}
    </TouchableOpacity>
  );
};

export default Settings;


