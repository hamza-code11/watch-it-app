import { Dimensions, StyleSheet } from "react-native";

import { Theme } from "../../constants/theme";

const { width } = Dimensions.get("window");
const GRID_GAP = 10;
const H_PADDING = 15;
const COLUMNS = 4;
const TILE_WIDTH =
  (width - H_PADDING * 2 - GRID_GAP * (COLUMNS - 1)) / COLUMNS;

export const getStyles = (theme: Theme) =>
  StyleSheet.create({
    container: {
      paddingHorizontal: H_PADDING,
      paddingBottom: 8,
    },

    headerRow: {
      marginBottom: 14,
    },

    headerTitle: {
      fontSize: 17,
      fontWeight: "700",
      color: theme.textPrimary,
      letterSpacing: 0.2,
    },

    headerSubtitle: {
      fontSize: 12,
      fontWeight: "500",
      color: theme.textMuted,
      marginTop: 2,
    },

    grid: {
      flexDirection: "row",
      justifyContent: "space-between",
      gap: GRID_GAP,
    },

    tile: {
      width: TILE_WIDTH,
      alignItems: "center",
      backgroundColor: theme.bgCard,
      borderRadius: 18,
      paddingVertical: 14,
      paddingHorizontal: 8,
      borderWidth: 1,
      borderColor: theme.borderLight,
      shadowColor: "#000",
      shadowOffset: { width: 0, height: 4 },
      shadowOpacity: 0.06,
      shadowRadius: 10,
      elevation: 3,
    },

    iconChip: {
      width: 40,
      height: 40,
      borderRadius: 12,
      alignItems: "center",
      justifyContent: "center",
      marginBottom: 8,
    },

    tileTitle: {
      fontSize: 11,
      fontWeight: "700",
      color: theme.textPrimary,
      textAlign: "center",
      lineHeight: 14,
    },
  });

  