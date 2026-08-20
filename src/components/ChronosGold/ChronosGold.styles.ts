// components/ChronosGold/ChronosGold.styles.ts
import { StyleSheet } from "react-native";
import { Theme } from "../../constants/theme";

export const getStyles = (theme: Theme) =>
  StyleSheet.create({
    container: {
      backgroundColor: theme.bgCard,
      borderRadius: theme.radiusXl,
      marginHorizontal: 15,
      marginTop: theme.spacingMd,
      marginBottom: theme.spacingSm,
      padding: theme.spacingLg,
      borderWidth: 1,
      borderColor: theme.borderColor,
      gap: theme.spacingMd,
    },

    // Header Section
    headerSection: {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
    },

    headerLeft: {
      flexDirection: "row",
      alignItems: "center",
      gap: 10,
    },

    goldBadge: {
      width: 36,
      height: 36,
      borderRadius: theme.radiusFull,
      alignItems: "center",
      justifyContent: "center",
    },

    badgeLabel: {
      fontSize: 10,
      fontWeight: "700",
      color: "#D4AF37",
      letterSpacing: 0.8,
    },

    title: {
      fontSize: 14,
      fontWeight: "700",
      color: theme.textPrimary,
      letterSpacing: 0.3,
    },

    joinButton: {
      borderRadius: theme.radiusFull,
      paddingHorizontal: theme.spacingLg,
      paddingVertical: theme.spacingSm,
      alignItems: "center",
      justifyContent: "center",
    },

    joinButtonText: {
      fontSize: 12,
      fontWeight: "700",
      color: "#0B0E14",
      letterSpacing: 0.5,
    },

    // Scroll View
    scrollContent: {
      gap: 10,
      paddingVertical: 4,
    },

    perkCard: {
      width: 70,
      alignItems: "center",
      gap: 6,
      paddingVertical: 8,
      paddingHorizontal: 4,
      borderRadius: theme.radiusMd,
      backgroundColor: theme.bgSecondary,
      borderWidth: 1,
      borderColor: theme.borderLight,
    },

    iconCircle: {
      width: 44,
      height: 44,
      borderRadius: theme.radiusFull,
      alignItems: "center",
      justifyContent: "center",
    },

    perkLabel: {
      fontSize: 9,
      fontWeight: "600",
      color: theme.textSecondary,
      textAlign: "center",
      letterSpacing: 0.3,
    },

  });