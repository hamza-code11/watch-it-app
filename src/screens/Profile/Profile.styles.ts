// screens/Profile/Profile.styles.ts (updated styles)
import { StyleSheet } from "react-native";
import { Theme } from "../../constants/theme";

export const getStyles = (theme: Theme) =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: theme.bgPrimary,
    },

    contentContainer: {
      paddingTop: 100,
      paddingBottom: 100,
    },

    // Profile Header Card
    profileCard: {
      backgroundColor: theme.bgCard,
      marginHorizontal: 16,
      marginBottom: 12,
      borderRadius: theme.radiusLg,
      borderWidth: 1,
      borderColor: theme.borderColor,
      overflow: "hidden",
    },

    profileHeader: {
      flexDirection: "row",
      alignItems: "center",
      paddingHorizontal: 16,
      paddingVertical: 16,
    },

    avatarContainer: {
      marginRight: 14,
    },

    avatarGradient: {
      width: 56,
      height: 56,
      borderRadius: theme.radiusFull,
      alignItems: "center",
      justifyContent: "center",
    },

    avatarText: {
      fontSize: 22,
      fontWeight: "700",
      color: "#0B0E14",
    },

    profileInfo: {
      flex: 1,
    },

    userName: {
      fontSize: 17,
      fontWeight: "700",
      color: theme.textPrimary,
      marginBottom: 1,
    },

    userHandle: {
      fontSize: 13,
      color: theme.textMuted,
    },

    settingsIcon: {
      padding: 6,
    },

    // Stats Card
    statsCard: {
      backgroundColor: theme.bgCard,
      marginHorizontal: 16,
      marginBottom: 12,
      borderRadius: theme.radiusLg,
      borderWidth: 1,
      borderColor: theme.borderColor,
      overflow: "hidden",
      paddingVertical: 16,
    },

    statsRow: {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-around",
    },

    statItem: {
      alignItems: "center",
      flex: 1,
    },

    statNumber: {
      fontSize: 20,
      fontWeight: "700",
      color: theme.textPrimary,
    },

    statLabel: {
      fontSize: 12,
      color: theme.textMuted,
      marginTop: 2,
    },

    statDivider: {
      width: 1,
      height: 30,
      backgroundColor: theme.borderLight,
    },

    // Sections
    section: {
      backgroundColor: theme.bgCard,
      marginHorizontal: 16,
      marginBottom: 12,
      borderRadius: theme.radiusLg,
      borderWidth: 1,
      borderColor: theme.borderColor,
      overflow: "hidden",
      paddingVertical: 4,
    },

    sectionTitle: {
      fontSize: 12,
      fontWeight: "600",
      color: theme.textMuted,
      textTransform: "uppercase",
      letterSpacing: 0.5,
      paddingHorizontal: 16,
      paddingTop: 10,
      paddingBottom: 4,
    },

    // Menu Items
    menuItem: {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
      paddingHorizontal: 16,
      paddingVertical: 12,
      backgroundColor: theme.bgCard,
    },

    menuItemLeft: {
      flexDirection: "row",
      alignItems: "center",
      gap: 12,
    },

    menuIcon: {
      width: 20,
    },

    menuText: {
      fontSize: 14,
      color: theme.textPrimary,
      fontWeight: "500",
    },

    divider: {
      height: 1,
      backgroundColor: theme.borderLight,
      marginHorizontal: 16,
    },

    // Watch It Gold Card
    goldCard: {
      backgroundColor: theme.bgCard,
      marginHorizontal: 16,
      marginBottom: 12,
      borderRadius: theme.radiusLg,
      borderWidth: 1,
      borderColor: theme.borderColor,
      overflow: "hidden",
      padding: 16,
    },

    goldRow: {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
    },

    goldContent: {
      flex: 1,
      marginRight: 12,
    },

    goldHeader: {
      flexDirection: "row",
      alignItems: "center",
      marginBottom: 4,
    },

    goldTitle: {
      fontSize: 15,
      fontWeight: "700",
      color: theme.textPrimary,
      marginLeft: 8,
    },

    goldPrice: {
      fontSize: 13,
      color: theme.textMuted,
      fontWeight: "500",
      marginLeft: 20,
    },

    goldDescription: {
      fontSize: 12,
      color: theme.textSecondary,
      lineHeight: 16,
    },

    upgradeButton: {
      flexShrink: 0,
    },

    upgradeGradient: {
      flexDirection: "row",
      alignItems: "center",
      gap: 6,
      paddingHorizontal: 16,
      paddingVertical: 8,
      borderRadius: theme.radiusFull,
    },

    upgradeText: {
      fontSize: 12,
      fontWeight: "700",
      color: "#0B0E14",
      letterSpacing: 0.3,
    },

    // Log Out
    logoutButton: {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "center",
      gap: 10,
      backgroundColor: theme.bgCard,
      marginHorizontal: 16,
      marginTop: 4,
      paddingVertical: 14,
      borderRadius: theme.radiusLg,
      borderWidth: 1,
      borderColor: theme.borderColor,
    },

    logoutText: {
      fontSize: 14,
      fontWeight: "600",
      color: "#F04438",
    },
  });