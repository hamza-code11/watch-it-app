// components/Hero/Hero.styles.ts
import { Dimensions, StyleSheet } from "react-native";
import { Theme } from "../../constants/theme";

const { width } = Dimensions.get("window");

export const getStyles = (theme: Theme) =>
  StyleSheet.create({
    banner: {
      width: width - 30,
      marginHorizontal: 15,
      borderRadius: theme.radiusLg,
      overflow: "hidden",
      borderWidth: 1,
      borderColor: "rgba(255,255,255,0.06)",
      minHeight: 150,
    },

    content: {
      paddingHorizontal: 20,
      paddingVertical: 22,
    },

    label: {
      color: "#8FA3B0",
      fontSize: 9,
      fontWeight: "700",
      letterSpacing: 1.6,
      marginBottom: 6,
      textTransform: "uppercase",
    },

    title: {
      color: "#FFFFFF",
      fontSize: 22,
      fontWeight: "700",
      lineHeight: 28,
      marginBottom: 16,
      fontFamily: "Georgia",
    },

    titleHighlight: {
      color: "#A8C8E8",
      fontStyle: "italic",
    },

    buttonRow: {
      flexDirection: "row",
      gap: 10,
    },

    ctaWrapper: {
      flex: 1,
      borderRadius: theme.radiusMd,
      overflow: "hidden",
    },

    ctaButton: {
      alignItems: "center",
      justifyContent: "center",
      paddingVertical: 10,
      paddingHorizontal: 12,
      borderRadius: theme.radiusMd,
      minWidth: 100,
    },

    ctaText: {
      color: "#0B0E14",
      fontSize: 12,
      fontWeight: "700",
      letterSpacing: 0.3,
      textAlign: "center",
    },

    secondaryWrapper: {
      flex: 1,
      borderRadius: theme.radiusMd,
      overflow: "hidden",
      borderWidth: 1,
      borderColor: "rgba(255,255,255,0.15)",
    },

    secondaryButton: {
      alignItems: "center",
      justifyContent: "center",
      paddingVertical: 10,
      paddingHorizontal: 12,
      borderRadius: theme.radiusMd,
      minWidth: 100,
    },

    secondaryText: {
      color: "#FFFFFF",
      fontSize: 12,
      fontWeight: "600",
      letterSpacing: 0.3,
      textAlign: "center",
    },
  });

