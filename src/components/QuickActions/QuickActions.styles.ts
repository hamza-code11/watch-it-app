// components/QuickActions/QuickActions.styles.ts
import { Dimensions, StyleSheet } from "react-native";
import { Theme } from "../../constants/theme";

const { width } = Dimensions.get("window");
const H_PADDING = 15;
const GAP = 12;
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
      borderRadius: theme.radiusLg,
      overflow: "hidden",
      elevation: 4,
      shadowColor: "#000",
      shadowOffset: { width: 0, height: 4 },
      shadowOpacity: 0.15,
      shadowRadius: 12,
    },

    cardGradient: {
      padding: 16,
      minHeight: 120,
      justifyContent: "space-between",
    },

    iconContainer: {
      width: 44,
      height: 44,
      borderRadius: theme.radiusFull,
      backgroundColor: "rgba(255,255,255,0.2)",
      alignItems: "center",
      justifyContent: "center",
      marginBottom: 8,
    },

    contentContainer: {
      flex: 1,
    },

    cardTitle: {
      fontSize: 15,
      fontWeight: "700",
      color: "#FFFFFF",
      letterSpacing: 0.3,
      marginBottom: 4,
    },

    cardSubtitle: {
      fontSize: 11,
      fontWeight: "400",
      color: "rgba(255,255,255,0.8)",
      lineHeight: 15,
    },
  });

  