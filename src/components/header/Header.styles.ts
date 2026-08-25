// components/Header/Header.styles.ts
import { StyleSheet } from "react-native";
import { Theme } from "../../constants/theme";

export const getStyles = (theme: Theme) =>
  StyleSheet.create({
    header: {
      width: "100%",
      paddingHorizontal: 15,
      paddingTop: 10,
      paddingBottom: 10,
    },

    row: {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
      width: "100%",
    },

    brandContainer: {
      flex: 1,
    },

    brandTitle: {
      fontSize: 24,
      fontWeight: "700",
      color: theme.textPrimary,
      letterSpacing: 1,
      fontFamily: "Montserrat",
    },

    brandSubContainer: {
      flexDirection: "row",
      alignItems: "center",
      marginTop: 0,
    },

    brandSubUae: {
      fontSize: 10,
      fontWeight: "500",
      color: theme.textSecondary,
      letterSpacing: 0.5,
    },

    brandSubSeparator: {
      fontSize: 10,
      color: theme.textMuted,
      marginHorizontal: 4,
    },

    brandSubLuxury: {
      fontSize: 10,
      fontWeight: "400",
      color: theme.textSecondary,
      letterSpacing: 0.3,
    },

    rightGroup: {
      flexDirection: "row",
      alignItems: "center",
      gap: theme.spacingXs,
    },

    notificationButton: {
      width: 34,
      height: 34,
      borderRadius: theme.radiusFull,
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: "rgba(255,255,255,0.06)",
      position: "relative",
    },

    notificationDot: {
      position: "absolute",
      top: 6,
      right: 6,
      width: 7,
      height: 7,
      borderRadius: theme.radiusFull,
      backgroundColor: "#ef4444",
      borderWidth: 1.5,
      borderColor: theme.bgSecondary,
    },

    avatarButton: {
      width: 34,
      height: 34,
      borderRadius: theme.radiusFull,
      alignItems: "center",
      justifyContent: "center",
    },

    avatarImage: {
      width: 34,
      height: 34,
      borderRadius: theme.radiusFull,
    },

    avatarText: {
      fontSize: 13,
      fontWeight: "700",
      color: "#0B0E14",
    },
  });

export const headerGradient = [
  "#151c29",
  "#000000",
  "#151c29",
] as const;

