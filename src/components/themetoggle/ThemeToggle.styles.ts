// ThemeToggle.styles.ts
import { StyleSheet } from "react-native";
import { Theme } from "../../constants/theme";

export const getStyles = (theme: Theme) =>
  StyleSheet.create({
    toggleButton: {
      width: 40,
      height: 40,
      borderRadius: theme.radiusFull,
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: theme.bgCard,
      borderColor: theme.borderColor,
      borderWidth: 1,
    },
  });
  