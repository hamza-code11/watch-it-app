// components/QuickActions/QuickActions.styles.ts
import { Dimensions, StyleSheet } from "react-native";
import { Theme } from "../../constants/theme";

const { width } = Dimensions.get("window");
const H_PADDING = 5;
const GAP = 6;
const CARD_WIDTH = (width - H_PADDING * 2 - GAP) / 2;

export const getStyles = (theme: Theme) =>
  StyleSheet.create({
    container: {
      paddingHorizontal: H_PADDING,
      paddingTop: 8,
      paddingBottom: 8,
    },

    grid: {
      flexDirection: "row",
      flexWrap: "wrap",
      gap: GAP,
    },

    card: {
      width: CARD_WIDTH,
      height: 130,
      borderRadius: theme.radiusLg,
      overflow: "hidden",
      elevation: 4,
      shadowColor: "#000",
      shadowOffset: { width: 0, height: 4 },
      shadowOpacity: 0.2,
      shadowRadius: 12,
    },

    cardBg: {
      flex: 1,
      justifyContent: "flex-end",
    },

    cardImage: {
      borderRadius: theme.radiusLg,
    },

    overlay: {
      flex: 1,
      padding: 12,
      justifyContent: "space-between",
    },

    topRow: {
      flexDirection: "row",
      justifyContent: "flex-start",
    },

    iconBadge: {
      width: 32,
      height: 32,
      borderRadius: theme.radiusFull,
      backgroundColor: "rgba(255,255,255,0.12)",
      borderWidth: 1,
      borderColor: "rgba(255,255,255,0.35)",
      alignItems: "center",
      justifyContent: "center",
    },

    bottomRow: {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
    },

    textContainer: {
      flex: 1,
      marginRight: 6,
    },

    cardTitle: {
      fontSize: 13,
      fontFamily: theme.bold,
      color: "#FFFFFF",
      letterSpacing: 0.2,
      marginBottom: 2,
    },

    cardSubtitle: {
      fontSize: 10,
      fontFamily: theme.regular,
      color: "rgba(255,255,255,0.75)",
    },

    chevronBadge: {
      width: 24,
      height: 24,
      borderRadius: theme.radiusFull,
      backgroundColor: "rgba(255,255,255,0.12)",
      borderWidth: 1,
      borderColor: "rgba(255,255,255,0.35)",
      alignItems: "center",
      justifyContent: "center",
    },
  });
