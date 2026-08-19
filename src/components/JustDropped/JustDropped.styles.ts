import { Dimensions, StyleSheet } from "react-native";

import { Theme } from "../../constants/theme";

const { width } = Dimensions.get("window");
const GRID_GAP = 12;
const H_PADDING = 15;
const COLUMNS = 2;
const CARD_WIDTH =
  (width - H_PADDING * 2 - GRID_GAP * (COLUMNS - 1)) / COLUMNS;

export const getStyles = (theme: Theme) =>
  StyleSheet.create({
    container: {
      paddingHorizontal: H_PADDING,
      paddingTop: 24,
      paddingBottom: 8,
    },

    headerRow: {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
      marginBottom: 14,
    },

    headerTitle: {
      fontSize: 19,
      fontWeight: "700",
      color: theme.textPrimary,
      fontFamily: theme.fontFamily,
    },

    headerLink: {
      fontSize: 12,
      fontWeight: "600",
      color: theme.textMuted,
    },

    grid: {
      flexDirection: "row",
      flexWrap: "wrap",
      gap: GRID_GAP,
    },

    card: {
      width: CARD_WIDTH,
      backgroundColor: theme.bgCard,
      borderRadius: 18,
      borderWidth: 1,
      borderColor: theme.borderLight,
      overflow: "hidden",
    },

    imageWrapper: {
      width: "100%",
      height: CARD_WIDTH,
      position: "relative",
    },

    image: {
      width: "100%",
      height: "100%",
    },

    verifiedBadge: {
      position: "absolute",
      top: 8,
      left: 8,
      flexDirection: "row",
      alignItems: "center",
      backgroundColor: "rgba(0,0,0,0.55)",
      paddingHorizontal: 8,
      paddingVertical: 3,
      borderRadius: theme.radiusFull,
      gap: 3,
    },

    verifiedText: {
      fontSize: 9,
      fontWeight: "700",
      color: theme.success,
      letterSpacing: 0.3,
    },

    favButton: {
      position: "absolute",
      top: 8,
      right: 8,
      width: 26,
      height: 26,
      borderRadius: theme.radiusFull,
      backgroundColor: "rgba(0,0,0,0.45)",
      alignItems: "center",
      justifyContent: "center",
    },

    info: {
      padding: 10,
    },

    brand: {
      fontSize: 13,
      fontWeight: "700",
      color: theme.textPrimary,
    },

    model: {
      fontSize: 11,
      fontWeight: "500",
      color: theme.accentPrimaryLight,
      marginTop: 2,
    },

    price: {
      fontSize: 15,
      fontWeight: "700",
      color: theme.textPrimary,
      marginTop: 8,
    },

    location: {
      fontSize: 10,
      fontWeight: "500",
      color: theme.textMuted,
      marginTop: 2,
    },
  });

  