import { StyleSheet } from "react-native";

import { Theme } from "../../constants/theme";

export const getStyles = (theme: Theme) =>
  StyleSheet.create({
    container: {
      width: "100%",
      paddingHorizontal: 5,
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
      fontFamily: theme.bold,
      color: theme.textPrimary,
      marginBottom: 8,
      letterSpacing: 0.3,
    },

    description: {
      fontSize: 11,
      fontFamily: theme.regular,
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
      fontFamily: theme.regular,
      color: "#0B0E14",
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