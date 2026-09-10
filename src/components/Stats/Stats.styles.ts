import { Dimensions, StyleSheet } from "react-native";
import { Theme } from "../../constants/theme";

const { width } = Dimensions.get("window");

export const getStyles = (theme: Theme) =>
  StyleSheet.create({
    container: {
      flexDirection: "row",
      justifyContent: "space-between",
      paddingHorizontal: 5,
      marginTop: 10,
      marginBottom: 4,
      gap: 6,
    },

    statBox: {
      flex: 1,
      backgroundColor: theme.bgCard,
      borderRadius: theme.radiusMd,
      borderWidth: 1,
      borderColor: theme.borderColor,
      alignItems: "center",
      justifyContent: "center",
      paddingVertical: 12,
      paddingHorizontal: 4,
      minHeight: 65,
    },

    statNumber: {
      fontSize: 12, 
      color: "#FFFFFF",
      fontFamily: theme.bold,
      letterSpacing: 0.2,
      marginBottom: 2,
      textAlign: "center",
    },

    statLabel: {
      fontSize: 7,
      color: theme.textMuted,
      letterSpacing: 0.8,
      textAlign: "center",
      lineHeight: 11,
      fontFamily: theme.regular,
    },

  });

