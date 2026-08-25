// components/WatchItGold/WatchItGold.styles.ts
import { Dimensions, StyleSheet } from "react-native";
import { Theme } from "../../constants/theme";

const { width } = Dimensions.get("window");

export const getStyles = (theme: Theme) => {
  const columnWidth = (width - 30 - 24 - 12) / 3; // 3 columns with proper spacing

  return StyleSheet.create({
    container: {
      marginHorizontal: 15,
      marginTop: 12,
      marginBottom: 4,
    },

    card: {
      backgroundColor: theme.bgCard,
      borderRadius: theme.radiusLg,
      borderWidth: 1,
      borderColor: theme.borderColor,
      padding: 16,
      paddingTop: 14,
      overflow: "hidden",
      shadowColor: theme.warning,
      shadowOffset: { width: 0, height: 4 },
      shadowOpacity: 0.1,
      shadowRadius: 12,
      elevation: 4,
      position: "relative",
    },

    recommendedBadge: {
      position: "absolute",
      top: 10,
      right: 10,
      backgroundColor: theme.warningLight,
      borderWidth: 1,
      borderColor: theme.warning,
      borderRadius: theme.radiusFull,
      paddingHorizontal: 10,
      paddingVertical: 2,
      zIndex: 5,
    },

    recommendedText: {
      fontSize: 8,
      fontWeight: "700",
      color: theme.warning,
      letterSpacing: 0.5,
      textTransform: "uppercase",
    },

    closeButton: {
      position: "absolute",
      top: 8,
      right: 8,
      zIndex: 10,
      width: 24,
      height: 24,
      alignItems: "center",
      justifyContent: "center",
    },

    badgeRow: {
      flexDirection: "row",
      alignItems: "center",
      gap: 6,
      marginBottom: 2,
    },

    badgeText: {
      fontSize: 11,
      fontWeight: "700",
      color: theme.warning,
      letterSpacing: 0.5,
      textTransform: "uppercase",
    },

    title: {
      fontSize: 17,
      fontWeight: "700",
      color: theme.textPrimary,
      marginBottom: 14,
      fontFamily: "Georgia",
    },

    featuresGrid: {
      flexDirection: "row",
      flexWrap: "wrap",
      marginBottom: 16,
    },

    featureItem: {
      width: columnWidth,
      alignItems: "center",
      marginBottom: 10,
      paddingHorizontal: 2,
    },

    iconContainer: {
      width: 28,
      height: 28,
      borderRadius: theme.radiusFull,
      backgroundColor: theme.warningLight,
      alignItems: "center",
      justifyContent: "center",
      marginBottom: 4,
    },

    featureLabel: {
      fontSize: 10,
      fontWeight: "500",
      color: theme.textSecondary,
      textAlign: "center",
      lineHeight: 13,
    },

    ctaWrapper: {
      borderRadius: theme.radiusFull,
      overflow: "hidden",
      marginBottom: 6,
    },

    ctaButton: {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "center",
      paddingVertical: 12,
      gap: 8,
      borderRadius: theme.radiusFull,
    },

    ctaText: {
      fontSize: 13,
      fontWeight: "700",
      color: theme.bgPrimary,
      letterSpacing: 0.3,
    },

    trustText: {
      fontSize: 9,
      color: theme.textLight,
      textAlign: "center",
    },
  });
};



