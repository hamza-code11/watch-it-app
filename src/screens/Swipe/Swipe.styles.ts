// screens/Swipe/Swipe.styles.ts (updated styles for buttons)
import { Dimensions, StyleSheet } from "react-native";
import { Theme } from "../../constants/theme";

const { width, height } = Dimensions.get("window");
const IMAGE_HEIGHT = height * 0.45;

export const getStyles = (theme: Theme) =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "transparent",
      paddingTop: 80,
    },

    imageWrapper: {
      width: "100%",
      height: IMAGE_HEIGHT,
      backgroundColor: theme.bgCard,
    },

    image: {
      width: "100%",
      height: "100%",
    },

    tapZone: {
      position: "absolute",
      top: 0,
      bottom: 0,
      width: "50%",
    },

    tapZoneLeft: {
      left: 0,
    },

    tapZoneRight: {
      right: 0,
    },

    dotsRow: {
      position: "absolute",
      bottom: 12,
      left: 0,
      right: 0,
      flexDirection: "row",
      justifyContent: "center",
      gap: 5,
    },

    dot: {
      width: 5,
      height: 5,
      borderRadius: theme.radiusFull,
      backgroundColor: "rgba(255,255,255,0.4)",
    },

    dotActive: {
      width: 16,
      backgroundColor: "#FFFFFF",
    },

    sheet: {
      flex: 1,
      backgroundColor: theme.bgPrimary,
      borderTopLeftRadius: 28,
      borderTopRightRadius: 28,
      marginTop: -24,
      paddingHorizontal: 20,
      paddingTop: 20,
    },

    brandName: {
      fontSize: 12,
      fontWeight: "600",
      color: theme.accentPrimary,
      letterSpacing: 1.5,
      marginBottom: 2,
    },

    titleRow: {
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      marginBottom: 8,
      minHeight: 28,
    },

    name: {
      fontSize: 20,
      fontWeight: "700",
      color: theme.textPrimary,
      fontFamily: theme.fontFamily,
      flex: 1,
      marginRight: 10,
      maxWidth: "70%",
    },

    price: {
      fontSize: 20,
      fontWeight: "700",
      color: "#FFFFFF",
      flexShrink: 0,
    },

    detailsRow: {
      flexDirection: "row",
      alignItems: "center",
      flexWrap: "wrap",
      marginBottom: 16,
      gap: 4,
      minHeight: 20,
    },

    detailItem: {
      flexDirection: "row",
      alignItems: "center",
      gap: 4,
      maxWidth: "30%",
    },

    detailText: {
      fontSize: 12,
      color: theme.textMuted,
      fontWeight: "500",
    },

    detailDot: {
      width: 3,
      height: 3,
      borderRadius: theme.radiusFull,
      backgroundColor: theme.textMuted,
      marginHorizontal: 4,
      opacity: 0.5,
    },

    thumbRow: {
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
      gap: 8,
      marginBottom: 20,
      paddingHorizontal: 4,
    },

    thumbWrapper: {
      borderRadius: theme.radiusFull,
      overflow: "hidden",
      borderWidth: 2,
      borderColor: "transparent",
      elevation: 2,
      shadowColor: "#000",
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.1,
      shadowRadius: 4,
    },

    thumbWrapperActive: {
      borderColor: theme.accentPrimary,
      elevation: 8,
      shadowColor: theme.accentPrimary,
      shadowOffset: { width: 0, height: 4 },
      shadowOpacity: 0.3,
      shadowRadius: 8,
    },

    thumbImage: {
      width: 44,
      height: 44,
      borderRadius: theme.radiusFull,
    },

    thumbImageActive: {
      width: 64,
      height: 64,
      borderRadius: theme.radiusFull,
    },

    thumbOverlay: {
      position: "absolute",
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: "rgba(0,0,0,0.3)",
      borderRadius: theme.radiusFull,
    },

    // ===== ATTRACTIVE BUTTONS =====
    actionRow: {
      flexDirection: "row",
      justifyContent: "space-between",
      gap: 16,
      marginBottom: 10,
    },

    // Pass Button
    passButtonWrapper: {
      flex: 1,
      borderRadius: theme.radiusLg,
      overflow: "hidden",
      borderWidth: 1,
      borderColor: "rgba(255,107,107,0.2)",
    },

    passButtonGradient: {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "center",
      paddingVertical: 14,
      gap: 10,
    },

    passIconCircle: {
      width: 32,
      height: 32,
      borderRadius: theme.radiusFull,
      backgroundColor: "rgba(255,107,107,0.15)",
      alignItems: "center",
      justifyContent: "center",
    },

    passText: {
      fontSize: 15,
      fontWeight: "600",
      color: "#FF6B6B",
      letterSpacing: 0.5,
    },

    // Interest Button
    interestButtonWrapper: {
      flex: 1,
      borderRadius: theme.radiusLg,
      overflow: "hidden",
      borderWidth: 1,
      borderColor: "rgba(79,159,255,0.2)",
    },

    interestButtonGradient: {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "center",
      paddingVertical: 14,
      gap: 10,
    },

    interestIconCircle: {
      width: 32,
      height: 32,
      borderRadius: theme.radiusFull,
      backgroundColor: "rgba(79,159,255,0.15)",
      alignItems: "center",
      justifyContent: "center",
    },

    interestText: {
      fontSize: 15,
      fontWeight: "600",
      color: "#4F9FFF",
      letterSpacing: 0.5,
    },
  });



