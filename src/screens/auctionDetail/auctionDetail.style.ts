import { StyleSheet } from "react-native";
import { Theme } from "../../constants/theme";

export const getStyles = (theme: Theme) =>
  StyleSheet.create({
    container: {
      flex: 1,
      marginTop: 60,
    },

    header: {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
      paddingHorizontal: theme.spacingLg,
      paddingVertical: theme.spacingMd,
      borderBottomWidth: 1,
      borderBottomColor: theme.borderColor,
    },

    headerTitle: {
      color: theme.textPrimary,
      fontSize: 16,
      fontWeight: "500",
    },

    liveBadge: {
      backgroundColor: theme.danger,
      paddingHorizontal: 10,
      paddingVertical: 4,
      borderRadius: theme.radiusFull,
    },

    liveBadgeText: {
      color: "#fff",
      fontSize: 10,
      fontWeight: "bold",
    },

    bottomBar: {
      position: "absolute",
      bottom: 0,
      left: 0,
      right: 0,
      padding: theme.spacingLg,
      paddingBottom: theme.spacingMd, 
    },

    placeBidBtn: {
      backgroundColor: theme.accentPrimary,
      borderRadius: theme.radiusXl,
      paddingVertical: 10,
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
    },

    placeBidText: {
      color: "#000",
      fontSize: 16,
      fontWeight: "bold",
    },
  });

