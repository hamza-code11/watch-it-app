// components/HowItWorks/HowItWorks.styles.ts
import { Dimensions, StyleSheet } from "react-native";
import { Theme } from "../../constants/theme";

const { width } = Dimensions.get("window");

export const getStyles = (theme: Theme) =>
  StyleSheet.create({
    container: {
      marginHorizontal: 15,
      marginTop: 16,
      marginBottom: 8,
      backgroundColor: theme.bgCard,
      borderRadius: theme.radiusLg,
      borderWidth: 1,
      borderColor: theme.borderColor,
      paddingVertical: 20,
      paddingHorizontal: 16,
    },

    title: {
      fontSize: 16,
      fontWeight: "700",
      color: theme.textPrimary,
      marginBottom: 16,
      fontFamily: "Georgia",
      letterSpacing: 0.5,
    },

    stepsContainer: {
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "flex-start",
    },

    stepItem: {
      flex: 1,
      alignItems: "center",
      position: "relative",
    },

    iconCircle: {
      width: 52,
      height: 52,
      borderRadius: theme.radiusFull,
      alignItems: "center",
      justifyContent: "center",
      marginBottom: 8,
      shadowColor: "#000",
      shadowOffset: { width: 0, height: 4 },
      shadowOpacity: 0.2,
      shadowRadius: 8,
      elevation: 4,
    },

    stepLabel: {
      fontSize: 11,
      fontWeight: "700",
      color: theme.textPrimary,
      textAlign: "center",
      letterSpacing: 0.5,
    },

    connectorLine: {
      position: "absolute",
      top: 26,
      right: -12,
      width: 24,
      height: 2,
      backgroundColor: theme.borderColor,
      opacity: 0.3,
    },
  });
  