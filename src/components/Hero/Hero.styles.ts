import { Dimensions, StyleSheet } from "react-native";
import { Theme } from "../../constants/theme";

const { width } = Dimensions.get("window");

export const getStyles = (theme: Theme) =>
  StyleSheet.create({
    banner: {
      marginHorizontal: 5,
      borderRadius: theme.radiusLg,
      overflow: "hidden",
      borderWidth: 1,
      borderColor: "rgba(255,255,255,0.06)",
      height: 150,
      position: "relative",
    },

    watchImageBg: {
      position: "absolute",
      right: 0,
      top: 0,
      bottom: 0,
      width: 180,
      height: 150,
      opacity: 0.5,
    },

    fadeOverlay: {
      position: "absolute",
      left: 0,
      top: 0,
      bottom: 0,
      right: 0,
    },

    content: {
      paddingHorizontal: 20,
      paddingVertical: 18,
      zIndex: 2,
    },

    label: {
      color: "#8FA3B0",
      fontSize: 9,
      letterSpacing: 1.6,
      marginBottom: 6,
      textTransform: "uppercase",
      fontFamily: theme.bold,
    },

    title: {
      color: "#FFFFFF",
      fontSize: 20,
      lineHeight: 26,
      marginBottom: 12,
      fontFamily: theme.bold,
    },

    titleHighlight: {
      color: "#A8C8E8",
      fontFamily: theme.bold,
    },

    buttonRow: {
      flexDirection: "row",
      gap: 8,
      justifyContent: "flex-start",
    },


    ctaWrapper: {
      borderRadius: theme.radiusMd,
    },

    ctaButton: {
      alignItems: "center",
      justifyContent: "center",
      paddingVertical: 10,
      paddingHorizontal: 10,
      borderRadius: theme.radiusMd,
    },

    ctaText: {
      color: "#0B0E14",
      fontSize: 11,
      letterSpacing: 0.3,
      textAlign: "center",
      fontFamily: theme.regular,
    },

    secondaryWrapper: {
      borderRadius: theme.radiusMd,
      overflow: "hidden",
      borderWidth: 1,
      borderColor: "rgba(255,255,255,0.15)",
    },

    secondaryButton: {
      alignItems: "center",
      justifyContent: "center",
      paddingVertical: 10,
      paddingHorizontal: 18,
      borderRadius: theme.radiusMd,
    },

    secondaryText: {
      color: "#0B0E14",
      fontSize: 11,
      letterSpacing: 0.3,
      textAlign: "center",
      fontFamily: theme.regular,
    },
  });

  