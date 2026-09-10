import { Dimensions, StyleSheet } from "react-native";
import { Theme } from "../../constants/theme";

const { width } = Dimensions.get("window");
const GRID_GAP = 8;
const H_PADDING = 15;
const COLUMNS = 3; 
const CARD_WIDTH =
  (width - H_PADDING * 2 - GRID_GAP * (COLUMNS - 1)) / COLUMNS;

export const getStyles = (theme: Theme) =>
  StyleSheet.create({
    container: {
      paddingTop: 24,
      paddingBottom: 8,
    },

    headerRow: {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
      marginBottom: 14,
      paddingHorizontal: H_PADDING,
    },

    headerTitle: {
      fontSize: 19,
      color: theme.textPrimary,
      fontFamily: theme.bold,
    },

    // ✅ Horizontal ScrollView
    scrollContent: {
      paddingHorizontal: H_PADDING,
      gap: GRID_GAP,
    },

    // ✅ Card (Height kam ki)
    card: {
      width: CARD_WIDTH,
      backgroundColor: theme.bgCard,
      borderRadius: theme.radiusMd, // Radius kam kiya
      borderWidth: 1,
      borderColor: theme.borderLight,
      overflow: "hidden",
    },

    // ✅ Image Height kam ki
    imageWrapper: {
      width: "100%",
      height: CARD_WIDTH * 0.9, // Height reduced (square se thora chota)
      position: "relative",
    },

    image: {
      width: "100%",
      height: "100%",
    },

    verifiedBadge: {
      position: "absolute",
      top: 6,
      left: 6,
      flexDirection: "row",
      alignItems: "center",
      backgroundColor: "rgba(0,0,0,0.55)",
      paddingHorizontal: 6,
      paddingVertical: 2,
      borderRadius: theme.radiusFull,
      gap: 2,
    },

    verifiedText: {
      fontSize: 8,
      color: theme.success,
      letterSpacing: 0.2,
      fontFamily: theme.regular,
    },

    // ✅ Info Padding kam ki
    info: {
      padding: 8,
    },

    brand: {
      fontSize: 11,
      fontFamily: theme.bold,
      color: theme.textPrimary,
    },

    price: {
      fontSize: 13,
      fontFamily: theme.bold,
      color: theme.textPrimary,
      marginTop: 3,
    },

    location: {
      fontSize: 9,
      fontFamily: theme.regular,
      color: theme.textMuted,
      marginTop: 2,
    },
  });