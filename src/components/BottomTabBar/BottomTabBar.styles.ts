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
      backgroundColor: theme.bgCard ?? "#121212",
      borderTopLeftRadius: 24,
      borderTopRightRadius: 24,
      paddingTop: 16,
      paddingBottom: bottomInset > 0 ? bottomInset + 8 : 16,
      paddingHorizontal: 6,
      shadowColor: "#000",
      shadowOffset: { width: 0, height: -4 },
      shadowOpacity: 0.25,
      shadowRadius: 10,
      elevation: 12,
    },

    tabsRow: {
      flexDirection: "row",
    },

    tabButton: {
      flex: 1,
      alignItems: "center",
      justifyContent: "center",
      gap: 6,
    },

    label: {
      fontSize: 11.5,
      fontWeight: "500",
      color: theme.textMuted,
    },

    labelActive: {
      fontWeight: "700",
      color: "#FFFFFF",
    },
  });

