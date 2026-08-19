// components/TopBar/TopBar.styles.ts
import { StyleSheet } from "react-native";
import { Theme } from "../../constants/theme";

export const getStyles = (theme: Theme) =>
  StyleSheet.create({
    container: {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
      paddingHorizontal: 15,
      paddingTop: 6,
      paddingBottom: 8,
      backgroundColor: theme.bgSecondary,
    },

    brandRow: {
      flexDirection: "row",
      alignItems: "center",
    },

    appName: {
      fontSize: 20,
      fontWeight: "800",
      letterSpacing: 0.3,
      color: theme.textPrimary,
    },

    avatarButton: {
      shadowColor: theme.accentPrimary,
      shadowOffset: { width: 0, height: 3 },
      shadowOpacity: 0.3,
      shadowRadius: 6,
      elevation: 4,
    },

    avatarImageWrapper: {
      width: 36,
      height: 36,
      borderRadius: theme.radiusFull,
      backgroundColor: theme.accentPrimary,
      alignItems: "center",
      justifyContent: "center",
      borderWidth: 2,
      borderColor: theme.bgCard,
    },
  });

  