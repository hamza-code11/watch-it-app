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
      borderTopLeftRadius: 20,
      borderTopRightRadius: 20,
      paddingTop: 10,
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
      alignItems: "center",
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
      fontWeight: "500",
      color: theme.textMuted,
    },

    labelActive: {
      fontWeight: "700",
      color: "#FFFFFF",
    },
  });

  