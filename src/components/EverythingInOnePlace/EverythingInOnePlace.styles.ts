import { Dimensions, StyleSheet } from "react-native";
import { Theme } from "../../constants/theme";

const { width } = Dimensions.get("window");

export const getStyles = (theme: Theme) =>
  StyleSheet.create({
    container: {
      marginHorizontal: 5,
      marginTop: 16,
      marginBottom: 8,
    },

    header: {
      marginBottom: 16,
      marginHorizontal: 5,
    },

    eyebrow: {
      fontSize: 10,
      fontFamily: theme.regular,
      color: theme.textMuted,
      letterSpacing: 4,
      marginBottom: 4,
    },

    heading: {
      fontSize: 22,
      color: theme.textPrimary,
      fontFamily: theme.bold,
      marginBottom: 4,
    },

    subheading: {
      fontSize: 11,
      fontFamily: theme.regular,
      color: theme.textMuted,
      lineHeight: 17,
    },

    scrollContent: {
      paddingHorizontal: 2,
      gap: 10, // ✅ Gap kam kiya
      alignItems: "flex-start",
    },

    // ✅ Card (Chota kiya aur padding kam ki)
    card: {
      borderRadius: theme.radiusLg,
      borderWidth: 1,
      padding: 12, // ✅ Padding kam ki (14 → 12)
      shadowColor: "#000",
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.06,
      shadowRadius: 8,
      elevation: 3,
      justifyContent: "space-between", // Ye rakhna hai taake tags bottom pe rahein
    },

    cardTop: {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
      marginBottom: 4, // ✅ Space kam ki
    },

    iconSquare: {
      width: 32, // ✅ Chota kiya (36 → 32)
      height: 32,
      borderRadius: theme.radiusMd,
      alignItems: "center",
      justifyContent: "center",
    },

    cardTitle: {
      fontSize: 15, // ✅ Chota kiya (16 → 15)
      fontFamily: theme.bold,
      color: theme.textPrimary,
      marginTop: 4, // ✅ Kam kiya (8 → 4)
      marginBottom: 4,
    },

    // ✅ Description (numberOfLines se height control hogi)
    cardDescription: {
      fontSize: 11.5, // ✅ Chota kiya
      fontFamily: theme.regular,
      color: theme.textMuted,
      lineHeight: 16, // ✅ Line height kam ki (18 → 16)
      flex: 1, // Ye rakhna hai taake tags bottom pe push ho jayein
    },

    tagsRow: {
      flexDirection: "row",
      flexWrap: "wrap",
      gap: 5, // ✅ Gap kam kiya (6 → 5)
      marginTop: 4, // ✅ Kam kiya
    },

    tag: {
      paddingHorizontal: 8, // ✅ Kam kiya (10 → 8)
      paddingVertical: 3, // ✅ Kam kiya (4 → 3)
      borderRadius: theme.radiusFull,
      borderWidth: 1,
    },

    tagText: {
      fontSize: 9,
      fontFamily: theme.regular,
      letterSpacing: 0.3,
    },
  });

  