// components/Sidebar/Sidebar.styles.ts
import { StyleSheet } from "react-native";
import { Theme } from "../../constants/theme";

export const getStyles = (theme: Theme) =>
  StyleSheet.create({
    container: {
      position: "absolute",
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      zIndex: 999,
    },

    overlay: {
      ...StyleSheet.absoluteFill,
      backgroundColor: "rgba(0, 0, 0, 0.55)",
    },

    overlayPress: {
      flex: 1,
    },

    sidebar: {
      position: "absolute",
      left: 0,
      top: 0,
      bottom: 0,
      backgroundColor: theme.bgPrimary,
      paddingTop: theme.spacingXl * 2,
      paddingHorizontal: theme.spacingLg,
      elevation: 10,
      shadowColor: "#000",
      shadowOffset: { width: 5, height: 0 },
      shadowOpacity: 0.2,
      shadowRadius: 10,
    },

    // ===== HEADER =====
    header: {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
      paddingBottom: theme.spacingLg,
      borderBottomWidth: 1,
      borderBottomColor: theme.borderColor,
      marginBottom: theme.spacingMd,
    },

    profileContainer: {
      flexDirection: "row",
      alignItems: "center",
    },

    avatar: {
      width: 50,
      height: 50,
      borderRadius: theme.radiusFull,
      backgroundColor: theme.bgSecondary,
      alignItems: "center",
      justifyContent: "center",
      marginRight: theme.spacingMd,
    },

    welcomeText: {
      fontSize: 16,
      fontWeight: "700",
      color: theme.textPrimary,
    },

    subtitleText: {
      fontSize: 12,
      color: theme.textMuted,
      marginTop: 2,
    },

    // ===== MENU =====
    menuContainer: {
      flex: 1,
      marginTop: theme.spacingSm,
    },

    section: {
      marginBottom: theme.spacingLg,
    },

    sectionHeader: {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
      paddingVertical: 6,
    },

    sectionTitle: {
      fontSize: 11,
      fontWeight: "600",
      color: theme.textMuted,
      textTransform: "uppercase",
      letterSpacing: 0.8,
    },

    sectionContent: {
      marginTop: 2,
    },

    menuItem: {
      flexDirection: "row",
      alignItems: "center",
      paddingVertical: 10,
      paddingLeft: 4,
      borderBottomWidth: 1,
      borderBottomColor: theme.borderLight,
    },

    menuItemLast: {
      borderBottomWidth: 0,
    },

    menuText: {
      marginLeft: theme.spacingMd,
      fontSize: 14.5,
      fontWeight: "500",
      color: theme.textPrimary,
    },
  });

  