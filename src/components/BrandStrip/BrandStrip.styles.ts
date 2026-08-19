import { StyleSheet } from "react-native";
import { Theme } from "../../constants/theme";

export const getStyles = (theme: Theme) =>
  StyleSheet.create({
    wrapper: {
      height: 38,
      overflow: "hidden",
      marginVertical: 8,
    },

    row: {
      flexDirection: "row",
      alignItems: "center",
    },

    chip: {
      backgroundColor: "transparent",
      borderRadius: theme.radiusFull ?? 16,
      borderWidth: 1,
      borderColor: theme.borderColor ?? "rgba(255,255,255,0.15)",
      paddingHorizontal: 12,
      paddingVertical: 6,
      marginRight: 4,
    },

    chipText: {
      fontSize: 14,
      fontWeight: "600",
      letterSpacing: 0.2,
      color: theme.textPrimary,
    },
  });

