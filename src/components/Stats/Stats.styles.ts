// components/Stats/Stats.styles.ts
import { Dimensions, StyleSheet } from "react-native";
import { Theme } from "../../constants/theme";

const { width } = Dimensions.get("window");

export const getStyles = (theme: Theme) =>
  StyleSheet.create({
    container: {
      flexDirection: "row",
      justifyContent: "space-between",
      paddingHorizontal: 15,
      marginTop: 10,
      marginBottom: 4,
      gap: 8,
    },

    statBox: {
      flex: 1,
      backgroundColor: theme.bgCard,
      borderRadius: theme.radiusMd,
      borderWidth: 1,
      borderColor: theme.borderColor,
      alignItems: "center",
      justifyContent: "center",
      paddingVertical: 10,
      paddingHorizontal: 4,
      minHeight: 65,
    },

    statNumber: {
      fontSize: 20,
      fontWeight: "700",
      color: "#FFFFFF",
      fontFamily: "Georgia",
      letterSpacing: 0.3,
      marginBottom: 1,
    },

    statLabel: {
      fontSize: 8,
      fontWeight: "600",
      color: theme.textMuted,
      letterSpacing: 1.2,
      textTransform: "uppercase",
      textAlign: "center",
    },
  });
  