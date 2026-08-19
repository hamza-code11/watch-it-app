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
  { key: "home", route: "/home", icon: "home-outline", activeIcon: "home", label: "Home" },
  { key: "explore", route: "/explore", icon: "compass-outline", activeIcon: "compass", label: "Explore" },
  { key: "sell", route: "/sell", icon: "add-circle-outline", activeIcon: "add-circle", label: "Sell" },
  { key: "chat", route: "/chat", icon: "chatbubble-ellipses-outline", activeIcon: "chatbubble-ellipses", label: "Chat" },
  { key: "profile", route: "/profile", icon: "person-outline", activeIcon: "person", label: "Profile" },
];

const BottomTabBar = () => {
  const { theme } = useTheme();
  const insets = useSafeAreaInsets();
  const styles = getStyles(theme, insets.bottom);
  const router = useRouter();
  const pathname = usePathname();

  return (
    <View style={styles.wrapper}>
      <View style={styles.barContainer}>
        <View style={styles.tabsRow}>
          {TABS.map((tab) => {
            const active = pathname.startsWith(tab.route);
            return (
              <TouchableOpacity
                key={tab.key}
                style={styles.tabButton}
                activeOpacity={0.6}
                onPress={() => router.push(tab.route as any)}
              >
                <Ionicons
                  name={active ? tab.activeIcon : tab.icon}
                  size={24}
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
