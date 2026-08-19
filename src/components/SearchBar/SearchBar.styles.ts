// components/SearchBar/SearchBar.styles.ts
import { StyleSheet } from "react-native";
import { Theme } from "../../constants/theme";

export const getStyles = (theme: Theme) =>
  StyleSheet.create({
    container: {
      width: "100%",
      paddingHorizontal: 15,
      paddingVertical: 8,
    },

    searchRow: {
      flexDirection: "row",
      alignItems: "center",
      backgroundColor: theme.bgInput,
      borderColor: theme.borderColor,
      borderWidth: 1,
      borderRadius: theme.radiusFull,
      paddingHorizontal: theme.spacingMd,
      height: 48,
      width: "100%",
    },

    searchIcon: {
      marginRight: theme.spacingSm,
    },

    input: {
      flex: 1,
      fontSize: 15,
      color: theme.textPrimary,
      height: "100%",
      padding: 0,
    },

    clearIcon: {
      paddingLeft: theme.spacingSm,
    },
  });

