// components/BottomTabBar/BottomTabBar.styles.ts
import { StyleSheet } from "react-native";
import { Theme } from "../../constants/theme";

export const getStyles = (theme: Theme, bottomInset: number = 0) =>
  StyleSheet.create({
    wrapper: {
      position: "absolute",
      left: 0,
      right: 0,
      bottom: 0,
    },

    barContainer: {
      backgroundColor: theme.bgCard ?? "#0B0B0B",
      borderTopLeftRadius: 20,
      borderTopRightRadius: 20,
      paddingTop: 14,
      paddingBottom: bottomInset > 0 ? bottomInset + 4 : 10,
      paddingHorizontal: 4,
      shadowColor: "#000",
      shadowOffset: { width: 0, height: -4 },
      shadowOpacity: 0.2,
      shadowRadius: 8,
      elevation: 10,
    },

    tabsRow: {
      flexDirection: "row",
      alignItems: "flex-start",
    },

    tabButton: {
      flex: 1,
      alignItems: "center",
      justifyContent: "center",
      gap: 4,
      paddingVertical: 4,
    },

    label: {
      fontSize: 10,
      fontFamily: theme.regular,
      color: theme.textMuted,
    },

    labelActive: {
      fontFamily: theme.bold,
      color: theme.accentTertiary,
    },

    // Center raised "List" button
    centerTabWrapper: {
      flex: 1,
      alignItems: "center",
      gap: 6,
    },

    centerButton: {
      width: 52,
      height: 52,
      borderRadius: 26,
      backgroundColor: theme.accentPrimary, 
      alignItems: "center",
      justifyContent: "center",
      marginTop: -30,
      shadowColor: "#2989f0",
      shadowOffset: { width: 0, height: 4 },
      shadowOpacity: 0.4,
      shadowRadius: 8,
      elevation: 8,
      borderWidth: 3,
      borderColor: theme.bgCard ?? "#fdfbfb",
    },

    centerLabel: {
      fontSize: 10,
      fontFamily: theme.bold,
      color: theme.textPrimary,
    },
  });
  