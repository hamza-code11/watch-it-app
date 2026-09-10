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
  isCenter?: boolean;
};

const TABS: TabItem[] = [
  { key: "discover", route: "/pages/home", icon: "home-outline", activeIcon: "home", label: "Discover" },
  { key: "timepieces", route: "/pages/swipe", icon: "time-outline", activeIcon: "time", label: "Explore" },
  { key: "list", route: "/pages/createListing", icon: "add", activeIcon: "add", label: "List", isCenter: true },
  { key: "goldVip", route: "/pages/messages", icon: "chatbubble-ellipses-outline", activeIcon: "chatbubble-ellipses", label: "Gold VIP" },
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

            if (tab.isCenter) {
              return (
                <View key={tab.key} style={styles.centerTabWrapper}>
                  <TouchableOpacity
                    style={styles.centerButton}
                    activeOpacity={0.85}
                    onPress={() => router.push(tab.route as any)}
                  >
                    <Ionicons name="add" size={26} color="#0B0E14" />
                  </TouchableOpacity>
                  <Text style={styles.centerLabel}>{tab.label}</Text>
                </View>
              );
            }

            return (
              <TouchableOpacity
                key={tab.key}
                style={styles.tabButton}
                activeOpacity={0.6}
                onPress={() => router.push(tab.route as any)}
              >
                <Ionicons
                  name={active ? tab.activeIcon : tab.icon}
                  size={22}
                  color={active ? "#F0B429" : theme.textMuted}
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
