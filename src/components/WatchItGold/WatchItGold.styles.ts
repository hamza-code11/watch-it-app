// components/WatchItGold/WatchItGold.styles.ts
import { StyleSheet } from "react-native";
import { Theme } from "../../constants/theme";

export const getStyles = (theme: Theme) => {
  return StyleSheet.create({
    container: {
      marginTop: 12,
      marginBottom: 4,
      paddingHorizontal: 5,
    },

    card: {
      flexDirection: "row",
    },

    content: {
      flex: 1,
      paddingHorizontal: 14,
      paddingVertical: 12,
    },

    topRow: {
      flexDirection: "row",
      alignItems: "center",
    },

    leftSection: {
      flexDirection: "row",
      alignItems: "center",
      gap: 8,
    },

    titleStack: {
      justifyContent: "center",
    },

    titleLine: {
      fontSize: 15,
      fontFamily: theme.bold,
      color: theme.textSecondary,
      letterSpacing: 0.5,
      lineHeight: 18,
    },


    upgradeBtn: {
      borderRadius: theme.radiusMd,
      paddingHorizontal: 16,
      paddingVertical: 10,
    },

    upgradeBtnText: {
      fontSize: 13,
      fontFamily: theme.bold,
      color: "#1A1206",
    },

  });
};
