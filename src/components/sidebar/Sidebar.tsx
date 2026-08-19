// components/Sidebar/Sidebar.tsx
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router"; // 👈 ADD THIS IMPORT
import React, { useEffect, useRef, useState } from "react";
import {
    Animated,
    Dimensions,
    LayoutAnimation,
    Platform,
    Pressable,
    Text,
    TouchableOpacity,
    UIManager,
    View,
} from "react-native";

import { useTheme } from "../../context/ThemeContext";
import { getStyles } from "./Sidebar.styles";

// Enable LayoutAnimation for Android
if (Platform.OS === "android") {
  if (UIManager.setLayoutAnimationEnabledExperimental) {
    UIManager.setLayoutAnimationEnabledExperimental(true);
  }
}

const { width } = Dimensions.get("window");

type SidebarProps = {
  visible: boolean;
  onClose: () => void;
};

type SidebarItemProps = {
  icon: React.ComponentProps<typeof Ionicons>["name"];
  title: string;
  onPress?: () => void;
  isLast?: boolean;
};

type SidebarSectionProps = {
  title: string;
  items: SidebarItemProps[];
  isExpanded: boolean;
  onToggle: () => void;
};

const SIDEBAR_WIDTH = width * 0.78;
const ANIMATION_DURATION = 300;

const Sidebar = ({ visible, onClose }: SidebarProps) => {
  const router = useRouter(); // ✅ Now router is properly initialized
  const { theme } = useTheme();
  const styles = getStyles(theme);

  const slideAnim = useRef(new Animated.Value(-SIDEBAR_WIDTH)).current;
  const overlayAnim = useRef(new Animated.Value(0)).current;
  const [shouldRender, setShouldRender] = React.useState(visible);

  // Track expanded sections - all collapsed by default
  const [expandedSections, setExpandedSections] = useState<Set<string>>(new Set());

  useEffect(() => {
    if (visible) setShouldRender(true);

    Animated.parallel([
      Animated.timing(slideAnim, {
        toValue: visible ? 0 : -SIDEBAR_WIDTH,
        duration: ANIMATION_DURATION,
        useNativeDriver: true,
      }),
      Animated.timing(overlayAnim, {
        toValue: visible ? 1 : 0,
        duration: ANIMATION_DURATION,
        useNativeDriver: true,
      }),
    ]).start(({ finished }) => {
      if (!visible && finished) setShouldRender(false);
    });
  }, [visible]);

  const toggleSection = (sectionTitle: string) => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    setExpandedSections((prev) => {
      const next = new Set(prev);
      if (next.has(sectionTitle)) {
        next.delete(sectionTitle);
      } else {
        next.add(sectionTitle);
      }
      return next;
    });
  };

  if (!shouldRender) return null;

  return (
    <View style={styles.container}>
      <Animated.View style={[styles.overlay, { opacity: overlayAnim }]}>
        <Pressable style={styles.overlayPress} onPress={onClose} />
      </Animated.View>

      <Animated.View
        style={[
          styles.sidebar,
          {
            transform: [{ translateX: slideAnim }],
            width: SIDEBAR_WIDTH,
          },
        ]}
      >
        <SidebarHeader onClose={onClose} theme={theme} styles={styles} />
        <SidebarMenu
          theme={theme}
          styles={styles}
          onItemPress={onClose}
          expandedSections={expandedSections}
          onToggleSection={toggleSection}
          router={router} // 👈 Pass router to SidebarMenu
        />
      </Animated.View>
    </View>
  );
};

// ========== HEADER ==========
const SidebarHeader = ({
  onClose,
  theme,
  styles,
}: {
  onClose: () => void;
  theme: any;
  styles: any;
}) => (
  <View style={styles.header}>
    <View style={styles.profileContainer}>
      <View style={styles.avatar}>
        <Ionicons name="person" size={28} color={theme.accentPrimary} />
      </View>
      <View>
        <Text style={styles.welcomeText}>Welcome</Text>
        <Text style={styles.subtitleText}>Sign in to your account</Text>
      </View>
    </View>
    <TouchableOpacity onPress={onClose} hitSlop={8}>
      <Ionicons name="close" size={26} color={theme.textSecondary} />
    </TouchableOpacity>
  </View>
);

// ========== MENU ==========
const SidebarMenu = ({
  theme,
  styles,
  onItemPress,
  expandedSections,
  onToggleSection,
  router, // 👈 Receive router as prop
}: {
  theme: any;
  styles: any;
  onItemPress: () => void;
  expandedSections: Set<string>;
  onToggleSection: (title: string) => void;
  router: any; // 👈 Add router type
}) => {
  const mainMenuItems: SidebarItemProps[] = [
    { icon: "home-outline", title: "Home" },
    { icon: "information-circle-outline", title: "About" },
    { icon: "construct-outline", title: "Services" },
    { icon: "hammer-outline", title: "Auctions" },
    { icon: "people-outline", title: "Community" },
  ];

  const exploreMenuItems: SidebarItemProps[] = [
    { icon: "grid-outline", title: "All Brands" },
    { icon: "storefront-outline", title: "All Vendors" },
  ];

  const accountMenuItems: SidebarItemProps[] = [
    { icon: "heart-outline", title: "Wishlist" },
    { icon: "person-outline", title: "My Profile" },
  ];

  const actionMenuItems: SidebarItemProps[] = [
    { 
      icon: "settings-outline", 
      title: "Settings",
      onPress: () => {
        router.push("/settings"); // ✅ Now this works
        onItemPress();
      }
    },
    { icon: "log-out-outline", title: "Logout", isLast: true },
  ];

  const handlePress = (title: string) => {
    console.log(`📱 Navigating to: ${title}`);
    onItemPress();
  };

  // Handle Settings navigation separately
  const handleSettingsPress = () => {
    router.push("/settings");
    onItemPress();
  };

  return (
    <View style={styles.menuContainer}>
      {/* Main Menu - Always visible without collapse */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Main</Text>
        {mainMenuItems.map((item, index) => (
          <SidebarItem
            key={index}
            icon={item.icon}
            title={item.title}
            isLast={index === mainMenuItems.length - 1}
            theme={theme}
            styles={styles}
            onPress={() => handlePress(item.title)}
          />
        ))}
      </View>

      {/* Explore - Collapsible */}
      <CollapsibleSection
        title="Explore"
        items={exploreMenuItems}
        theme={theme}
        styles={styles}
        isExpanded={expandedSections.has("Explore")}
        onToggle={() => onToggleSection("Explore")}
        onItemPress={handlePress}
      />

      {/* Account - Collapsible */}
      <CollapsibleSection
        title="Account"
        items={accountMenuItems}
        theme={theme}
        styles={styles}
        isExpanded={expandedSections.has("Account")}
        onToggle={() => onToggleSection("Account")}
        onItemPress={handlePress}
      />

      {/* Actions - Collapsible */}
      <CollapsibleSection
        title="Actions"
        items={actionMenuItems}
        theme={theme}
        styles={styles}
        isExpanded={expandedSections.has("Actions")}
        onToggle={() => onToggleSection("Actions")}
        onItemPress={handlePress}
        onSettingsPress={handleSettingsPress} // 👈 Special handler for settings
      />
    </View>
  );
};

// ========== COLLAPSIBLE SECTION ==========
const CollapsibleSection = ({
  title,
  items,
  theme,
  styles,
  isExpanded,
  onToggle,
  onItemPress,
  onSettingsPress, // 👈 Add this prop
}: SidebarSectionProps & {
  theme: any;
  styles: any;
  onItemPress: (title: string) => void;
  onSettingsPress?: () => void;
}) => {
  return (
    <View style={styles.section}>
      {/* Section Header - Tappable */}
      <TouchableOpacity
        style={styles.sectionHeader}
        onPress={onToggle}
        activeOpacity={0.7}
      >
        <Text style={styles.sectionTitle}>{title}</Text>
        <Ionicons
          name={isExpanded ? "chevron-up" : "chevron-down"}
          size={18}
          color={theme.textMuted}
        />
      </TouchableOpacity>

      {/* Section Items - Show only when expanded */}
      {isExpanded && (
        <View style={styles.sectionContent}>
          {items.map((item, index) => {
            // Check if this is the Settings item
            const isSettings = item.title === "Settings";
            return (
              <SidebarItem
                key={index}
                icon={item.icon}
                title={item.title}
                isLast={item.isLast || index === items.length - 1}
                theme={theme}
                styles={styles}
                onPress={() => {
                  if (isSettings && onSettingsPress) {
                    onSettingsPress();
                  } else {
                    onItemPress(item.title);
                  }
                }}
              />
            );
          })}
        </View>
      )}
    </View>
  );
};

// ========== ITEM ==========
const SidebarItem = ({
  icon,
  title,
  isLast = false,
  theme,
  styles,
  onPress,
}: SidebarItemProps & {
  theme: any;
  styles: any;
  onPress?: () => void;
}) => (
  <TouchableOpacity
    style={[styles.menuItem, isLast && styles.menuItemLast]}
    activeOpacity={0.7}
    onPress={onPress}
  >
    <Ionicons name={icon} size={20} color={theme.accentPrimary} />
    <Text style={styles.menuText}>{title}</Text>
  </TouchableOpacity>
);

export default Sidebar;

