// components/EverythingInOnePlace/EverythingInOnePlace.styles.ts
import { Dimensions, StyleSheet } from "react-native";
import { Theme } from "../../constants/theme";

const { width } = Dimensions.get("window");

export const getStyles = (theme: Theme) =>
  StyleSheet.create({
    container: {
      marginHorizontal: 15,
      marginTop: 16,
      marginBottom: 8,
    },

    header: {
      marginBottom: 16,
    },

    eyebrow: {
      fontSize: 10,
      fontWeight: "700",
      color: theme.textMuted,
      letterSpacing: 4,
      textTransform: "uppercase",
      marginBottom: 4,
    },

    heading: {
      fontSize: 22,
      fontWeight: "700",
      color: theme.textPrimary,
      fontFamily: "Georgia",
      marginBottom: 4,
    },

    subheading: {
      fontSize: 12,
      fontWeight: "400",
      color: theme.textMuted,
      lineHeight: 17,
    },

    scrollContent: {
      paddingHorizontal: 2,
      gap: 12,
      alignItems: "flex-start",
    },

    card: {
      borderRadius: theme.radiusLg,
      borderWidth: 1,
      padding: 16,
      shadowColor: "#000",
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.06,
      shadowRadius: 8,
      elevation: 3,
      justifyContent: "space-between",
    },

    cardTop: {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
    },

    iconSquare: {
      width: 36,
      height: 36,
      borderRadius: theme.radiusMd,
      alignItems: "center",
      justifyContent: "center",
    },

    cardTitle: {
      fontSize: 16,
      fontWeight: "700",
      color: theme.textPrimary,
      marginTop: 8,
      marginBottom: 4,
    },

    cardDescription: {
      fontSize: 12,
      fontWeight: "400",
      color: theme.textMuted,
      lineHeight: 17,
      flex: 1,
      marginBottom: 2,
    },

    tagsRow: {
      flexDirection: "row",
      flexWrap: "wrap",
      gap: 6,
    },

    tag: {
      paddingHorizontal: 10,
      paddingVertical: 4,
      borderRadius: theme.radiusFull,
      borderWidth: 1,
    },

    tagText: {
      fontSize: 9,
      fontWeight: "600",
      letterSpacing: 0.3,
    },
  });

