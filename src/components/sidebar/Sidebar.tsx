// components/Sidebar/Sidebar.tsx
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import React, { useEffect, useRef, useState } from "react";
import {
  Animated,
  Dimensions,
  Pressable,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

import { useTheme } from "../../context/ThemeContext";
import { getStyles } from "./Sidebar.styles";

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

type Section = {
  title: string;
  items: SidebarItemProps[];
  isMain?: boolean;
};

const SIDEBAR_WIDTH = width * 0.78;
const ANIMATION_DURATION = 300;

const Sidebar = ({ visible, onClose }: SidebarProps) => {
  const router = useRouter();
  const { theme } = useTheme();
  const styles = getStyles(theme);

  const slideAnim = useRef(new Animated.Value(-SIDEBAR_WIDTH)).current;
  const overlayAnim = useRef(new Animated.Value(0)).current;
  const [shouldRender, setShouldRender] = useState(visible);
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
          router={router}
        />
      </Animated.View>
    </View>
  );
};

// ========== HEADER ==========
const SidebarHeader = ({ onClose, theme, styles }: any) => (
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
  router 
}: any) => {
  const sections: Section[] = [
    {
      title: "Main",
      isMain: true,
      items: [
        { icon: "home-outline", title: "Home" },
        { icon: "information-circle-outline", title: "About" },
        { icon: "construct-outline", title: "Services" },
        { icon: "hammer-outline", title: "Auctions" },
        { icon: "people-outline", title: "Community" },
      ],
    },
    {
      title: "Explore",
      items: [
        { icon: "grid-outline", title: "All Brands" },
        { icon: "storefront-outline", title: "All Vendors" },
      ],
    },
    {
      title: "Account",
      items: [
        { icon: "heart-outline", title: "Wishlist" },
        { icon: "person-outline", title: "My Profile" },
      ],
    },
    {
      title: "Actions",
      items: [
        { 
          icon: "settings-outline", 
          title: "Settings", 
          onPress: () => { 
            router.push("/settings"); 
            onItemPress(); 
          } 
        },
        { icon: "log-out-outline", title: "Logout", isLast: true },
      ],
    },
  ];

  const handlePress = (title: string) => {
    console.log(`📱 Navigating to: ${title}`);
    onItemPress();
  };

  return (
    <View style={styles.menuContainer}>
      {sections.map((section) => (
        <View key={section.title} style={styles.section}>
          {section.isMain ? (
            // Main section - always visible
            <>
              <Text style={styles.sectionTitle}>{section.title}</Text>
              {section.items.map((item, index) => (
                <SidebarItem
                  key={index}
                  icon={item.icon}
                  title={item.title}
                  isLast={index === section.items.length - 1}
                  theme={theme}
                  styles={styles}
                  onPress={() => handlePress(item.title)}
                />
              ))}
            </>
          ) : (
            // Collapsible sections
            <>
              <TouchableOpacity
                style={styles.sectionHeader}
                onPress={() => onToggleSection(section.title)}
                activeOpacity={0.7}
              >
                <Text style={styles.sectionTitle}>{section.title}</Text>
                <Ionicons
                  name={expandedSections.has(section.title) ? "chevron-up" : "chevron-down"}
                  size={18}
                  color={theme.textMuted}
                />
              </TouchableOpacity>
              {expandedSections.has(section.title) && (
                <View style={styles.sectionContent}>
                  {section.items.map((item, index) => {
                    const isLast = item.isLast || index === section.items.length - 1;
                    return (
                      <SidebarItem
                        key={index}
                        icon={item.icon}
                        title={item.title}
                        isLast={isLast}
                        theme={theme}
                        styles={styles}
                        onPress={item.onPress || (() => handlePress(item.title))}
                      />
                    );
                  })}
                </View>
              )}
            </>
          )}
        </View>
      ))}
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
  onPress 
}: SidebarItemProps & { theme: any; styles: any }) => (
  <TouchableOpacity
    style={[styles.menuItem, isLast && styles.menuItemLast]}
    activeOpacity={0.7}
    onPress={onPress}
  >
    <Ionicons name={icon} size={20} color={theme.textMuted} /> 
    <Text style={styles.menuText}>{title}</Text>
  </TouchableOpacity>
);

export default Sidebar;

