// components/Header/Header.styles.ts
import { StyleSheet } from "react-native";
import { Theme } from "../../constants/theme";

export const getStyles = (theme: Theme) =>
  StyleSheet.create({
    header: {
      width: "100%",
      paddingHorizontal: 15,
      paddingTop: 10,
      paddingBottom: theme.spacingSm,
    },

    row: {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
      width: "100%",
    },

    // Brand Section
    brandContainer: {
      flex: 1,
    },

    brandTitle: {
      fontSize: 28,
      fontWeight: "700",
      color: theme.textPrimary,
      letterSpacing: 1,
      fontFamily: "Montserrat",
    },

    brandSubContainer: {
      flexDirection: "row",
      alignItems: "center",
      marginTop: 1,
    },

    brandSubUae: {
      fontSize: 12,
      fontWeight: "500",
      color: theme.textSecondary,
      letterSpacing: 0.5,
    },

    brandSubSeparator: {
      fontSize: 12,
      color: theme.textMuted,
      marginHorizontal: 5,
    },

    brandSubLuxury: {
      fontSize: 12,
      fontWeight: "400",
      color: theme.textSecondary,
      letterSpacing: 0.3,
    },

    // Right group - notification + profile
    rightGroup: {
      flexDirection: "row",
      alignItems: "center",
      gap: theme.spacingSm,
    },

    notificationButton: {
      width: 40,
      height: 40,
      borderRadius: theme.radiusFull,
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: "rgba(255,255,255,0.06)", // subtle lighter circle vs header bg
      position: "relative",
    },

    notificationDot: {
      position: "absolute",
      top: 7,
      right: 7,
      width: 9,
      height: 9,
      borderRadius: theme.radiusFull,
      backgroundColor: "#ef4444",
      borderWidth: 1.5,
      borderColor: theme.bgSecondary,
    },

    avatarButton: {
      width: 40,
      height: 40,
      borderRadius: theme.radiusFull,
      backgroundColor: "#E4D3B0", // cream/gold circle as per design
      alignItems: "center",
      justifyContent: "center",
      borderWidth: 1.5,
      borderColor: theme.borderColor,
    },

    avatarImage: {
      width: 40,
      height: 40,
      borderRadius: theme.radiusFull,
    },

    avatarText: {
      fontSize: 15,
      fontWeight: "700",
      color: "#2A2418", // dark text on cream bg
    },
  });

  export const headerGradient = [
  "#151c29",
  "#000000",
  "#151c29",
] as const;