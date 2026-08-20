import { StyleSheet } from "react-native";

import { Theme } from "../../constants/theme";

export const getStyles = (theme: Theme) =>
  StyleSheet.create({
    container: {
      width: "100%",
      paddingHorizontal: 15,
      marginTop: 10,
    },

    card: {
      width: "100%",
      height: 180,
      flexDirection: "row",
      backgroundColor: theme.bgCard,
      borderRadius: theme.radiusLg,
      overflow: "hidden",
      borderWidth: 1,
      borderColor: theme.borderColor,
    },

    contentContainer: {
      width: "58%",
      padding: 16,
      justifyContent: "center",
    },

    title: {
      fontSize: 18,
      fontWeight: "700",
      color: theme.textPrimary,
      marginBottom: 8,
      letterSpacing: 0.3,
    },

    description: {
      fontSize: 12,
      fontWeight: "400",
      color: theme.textSecondary,
      lineHeight: 18,
      marginBottom: 14,
    },

    button: {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "center",
      paddingVertical: 10,
      paddingHorizontal: 16,
      borderRadius: theme.radiusFull,
      alignSelf: "flex-start",
      gap: 6,
    },

    buttonText: {
      fontSize: 13,
      fontWeight: "700",
      color: "#0B0E14",
      letterSpacing: 0.3,
    },

    imageContainer: {
      width: "42%",
      height: "100%",
    },

    image: {
      width: "100%",
      height: "100%",
    },
  });