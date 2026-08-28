// components/BottomTabBar/BottomTabBar.tsx
import { Ionicons } from "@expo/vector-icons";
import { usePathname, useRouter } from "expo-router";
import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useTheme } from "../../context/ThemeContext";
import { getStyles } from "./BottomTabBar.styles";

type TabItem = {
  key: string;
  route: string;
  icon: React.ComponentProps<typeof Ionicons>["name"];
  activeIcon: React.ComponentProps<typeof Ionicons>["name"];
  label: string;
};

const TABS: TabItem[] = [
  { key: "home", route: "/pages/home", icon: "home-outline", activeIcon: "home", label: "Home" },
  { key: "explore", route: "/pages/swipe", icon: "compass-outline", activeIcon: "compass", label: "Explore" },
  { key: "sell", route: "/pages/auction", icon: "add-circle-outline", activeIcon: "add-circle", label: "Sell" },
  { key: "chat", route: "/pages/chat", icon: "chatbubble-ellipses-outline", activeIcon: "chatbubble-ellipses", label: "Chat" },
  { key: "profile", route: "/pages/profile", icon: "person-outline", activeIcon: "person", label: "Profile" },
];

const BottomTabBar = () => {
  const { theme } = useTheme();
  const insets = useSafeAreaInsets();
  const styles = getStyles(theme, insets.bottom);
  const router = useRouter();
  const pathname = usePathname();

  const isActive = (route: string) => {
    return pathname === route || pathname.startsWith(`${route}/`);
  };

  return (
    <View style={styles.wrapper}>
      <View style={styles.barContainer}>
        <View style={styles.tabsRow}>
          {TABS.map((tab) => {
            const active = isActive(tab.route);

            return (
              <TouchableOpacity
                key={tab.key}
                style={styles.tabButton}
                activeOpacity={0.6}
                onPress={() => router.push(tab.route as any)}
              >
                <Ionicons
                  name={active ? tab.activeIcon : tab.icon}
                  size={25}
                  color={active ? "#FFFFFF" : theme.textMuted}
                />
                <Text style={[styles.label, active && styles.labelActive]}>
                  {tab.label}
                </Text>
              </TouchableOpacity>
            );
          })}
        </View>
      </View>
    </View>
  );
};

export default BottomTabBar;


