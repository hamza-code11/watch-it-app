import { Dimensions, StyleSheet } from "react-native";
import { Theme } from "../../constants/theme";

const { width } = Dimensions.get("window");

export const getStyles = (theme: Theme) =>
  StyleSheet.create({
    banner: {
      width: width - 30,
      height: 180,
      marginHorizontal: 15,
      borderRadius: theme.radiusLg,
      overflow: "hidden",
      position: "relative",
    },
    bannerImage: {
      width: "100%",
      height: "100%",
    },
    gradientOverlay: {
      position: "absolute",
      left: 0,
      right: 0,
      bottom: 0,
      height: "70%",
    },
    contentContainer: {
      position: "absolute",
      left: 16,
      bottom: 30,
      right: 16,
    },
    label: {
      color: "#8FA3B0",
      fontSize: 10,
      fontWeight: "700",
      letterSpacing: 1.5,
      marginBottom: 4,
      textTransform: "uppercase",
    },
    title: {
      color: "#FFFFFF",
      fontSize: 22,
      fontFamily: "PlayfairDisplay-Italic", // agar font load nahi hua to fontStyle: "italic" use karo
      fontStyle: "italic",
      marginBottom: 12,
    },
    ctaButton: {
      backgroundColor: "#F5EFE3",
      alignSelf: "flex-start",
      paddingHorizontal: 16,
      paddingVertical: 8,
      borderRadius: theme.radiusFull,
    },
    ctaText: {
      color: "#1A1A1A",
      fontSize: 12,
      fontWeight: "600",
    },
    dotsContainer: {
      position: "absolute",
      bottom: 10,
      left: 0,
      right: 0,
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
    },
    dot: {
      width: 7,
      height: 7,
      borderRadius: theme.radiusFull,
      backgroundColor: "rgba(255,255,255,0.5)",
      marginHorizontal: 4,
    },
    activeDot: {
      width: 20,
      backgroundColor: theme.bgCard,
    },
  });

  