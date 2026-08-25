// screens/Swipe/Swipe.styles.ts
import { Dimensions, StyleSheet } from "react-native";
import { Theme } from "../../constants/theme";

const { width, height } = Dimensions.get("window");
const CARD_HEIGHT = height * 0.5;

export const getStyles = (theme: Theme, insets: any) =>
  StyleSheet.create({
    container: {
      flex: 1,
      marginTop: 80,
    },

    // ===== HEADER =====
    header: {
      paddingHorizontal: 16,
      paddingVertical: 12,
      borderBottomWidth: 1,
      borderBottomColor: theme.borderLight,
    },

    headerRow: {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
    },

    headerTitle: {
      fontSize: 18,
      fontWeight: "700",
      color: theme.textPrimary,
      fontFamily: "Georgia",
      flex: 1,
      textAlign: "center",
    },

    headerRight: {
      flexDirection: "row",
      alignItems: "center",
      gap: 10,
    },

    headerCount: {
      fontSize: 12,
      fontWeight: "500",
      color: theme.textMuted,
    },

    headerAction: {
      width: 34,
      height: 34,
      borderRadius: theme.radiusFull,
      backgroundColor: theme.bgCard,
      alignItems: "center",
      justifyContent: "center",
      borderWidth: 1,
      borderColor: theme.borderColor,
    },

    // ===== CARD =====
    cardContainer: {
      flex: 1,
      paddingHorizontal: 16,
      paddingTop: 12,
      paddingBottom: 8,
    },

    cardWrapper: {
      flex: 1,
    },

    card: {
      height: CARD_HEIGHT,
      borderRadius: theme.radiusXl,
      overflow: "hidden",
      backgroundColor: "#000",
    },

    cardImage: {
      width: "100%",
      height: "100%",
    },

    cardOverlay: {
      position: "absolute",
      bottom: 0,
      left: 0,
      right: 0,
      height: "55%",
    },

    cardContent: {
      position: "absolute",
      bottom: 20,
      left: 20,
      right: 20,
    },

    cardBrand: {
      fontSize: 11,
      fontWeight: "600",
      color: "#D4AF37",
      letterSpacing: 1.8,
      textTransform: "uppercase",
    },

    cardName: {
      fontSize: 20,
      fontWeight: "700",
      color: "#FFFFFF",
      fontFamily: "Georgia",
      marginTop: 2,
    },

    cardMeta: {
      flexDirection: "row",
      alignItems: "center",
      flexWrap: "wrap",
      gap: 4,
      marginTop: 4,
    },

    cardMetaText: {
      fontSize: 10,
      color: "rgba(255,255,255,0.7)",
    },

    metaDot: {
      width: 2,
      height: 2,
      borderRadius: 1,
      backgroundColor: "rgba(255,255,255,0.4)",
    },

    cardPrice: {
      fontSize: 18,
      fontWeight: "700",
      color: "#FFFFFF",
      marginTop: 6,
    },

    // ===== ACTION BUTTONS =====
    actionRow: {
      flexDirection: "row",
      gap: 12,
      paddingTop: 16,
    },

    actionBtn: {
      flex: 1,
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "center",
      gap: 8,
      height: 44,
      borderRadius: theme.radiusLg,
      borderWidth: 1,
    },

    passBtn: {
      backgroundColor: "rgba(255,107,107,0.08)",
      borderColor: "rgba(255,107,107,0.2)",
    },

    passText: {
      fontSize: 13,
      fontWeight: "600",
      color: "#FF6B6B",
    },

    interestBtn: {
      backgroundColor: "rgba(79,159,255,0.08)",
      borderColor: "rgba(79,159,255,0.2)",
    },

    interestText: {
      fontSize: 13,
      fontWeight: "600",
      color: "#4F9FFF",
    },

    // ===== LOCK OVERLAY =====
    lockOverlay: {
      flex: 1,
      alignItems: "center",
      justifyContent: "center",
      paddingHorizontal: 40,
    },

    lockTitle: {
      fontSize: 20,
      fontWeight: "700",
      color: theme.textPrimary,
      marginTop: 16,
      fontFamily: "Georgia",
    },

    lockText: {
      fontSize: 14,
      color: theme.textMuted,
      textAlign: "center",
      marginTop: 8,
      marginBottom: 24,
    },

    // ===== FILTER MODAL =====
    modalOverlay: {
      flex: 1,
      backgroundColor: "rgba(0,0,0,0.5)",
      justifyContent: "flex-end",
    },

    modalContent: {
      backgroundColor: theme.bgPrimary,
      borderTopLeftRadius: 28,
      borderTopRightRadius: 28,
      paddingHorizontal: 20,
      paddingTop: 20,
      maxHeight: height * 0.9,
    },

    modalHeader: {
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      marginBottom: 16,
    },

    modalTitle: {
      fontSize: 20,
      fontWeight: "700",
      color: theme.textPrimary,
      fontFamily: "Georgia",
    },

    filterSection: {
      marginBottom: 18,
    },

    filterLabel: {
      fontSize: 13,
      fontWeight: "600",
      color: theme.textPrimary,
      marginBottom: 6,
    },

    searchInput: {
      flexDirection: "row",
      alignItems: "center",
      backgroundColor: theme.bgCard,
      borderWidth: 1,
      borderColor: theme.borderColor,
      borderRadius: theme.radiusMd,
      paddingHorizontal: 12,
      paddingVertical: 8,
      gap: 8,
    },

    searchInputText: {
      flex: 1,
      fontSize: 13,
      color: theme.textPrimary,
    },

    brandItem: {
      paddingVertical: 5,
    },

    brandText: {
      fontSize: 13,
      color: theme.textSecondary,
    },

    // ===== CHIPS =====
    chipsRow: {
      flexDirection: "row",
      flexWrap: "wrap",
      gap: 8,
    },

    chip: {
      paddingHorizontal: 14,
      paddingVertical: 6,
      borderRadius: theme.radiusFull,
      backgroundColor: theme.bgCard,
      borderWidth: 1,
      borderColor: theme.borderColor,
    },

    chipText: {
      fontSize: 12,
      color: theme.textSecondary,
    },

    chipActive: {
      backgroundColor: theme.accentPrimary,
      borderColor: theme.accentPrimary,
    },

    chipTextActive: {
      color: "#FFFFFF",
    },

    // ===== PRICE RANGE =====
    priceRow: {
      flexDirection: "row",
      alignItems: "center",
      gap: 10,
    },

    priceInput: {
      flex: 1,
      backgroundColor: theme.bgCard,
      borderWidth: 1,
      borderColor: theme.borderColor,
      borderRadius: theme.radiusMd,
      paddingHorizontal: 12,
      paddingVertical: 8,
    },

    priceInputText: {
      fontSize: 13,
      color: theme.textPrimary,
    },

    priceSeparator: {
      fontSize: 14,
      color: theme.textMuted,
    },

    // ===== YEAR RANGE =====
    yearRow: {
      flexDirection: "row",
      alignItems: "center",
      gap: 10,
    },

    yearInput: {
      flex: 1,
      backgroundColor: theme.bgCard,
      borderWidth: 1,
      borderColor: theme.borderColor,
      borderRadius: theme.radiusMd,
      paddingHorizontal: 12,
      paddingVertical: 8,
    },

    yearInputText: {
      fontSize: 13,
      color: theme.textPrimary,
    },

    yearSeparator: {
      fontSize: 14,
      color: theme.textMuted,
    },

    // ===== TOGGLES =====
    toggleRow: {
      flexDirection: "row",
      alignItems: "center",
      gap: 10,
      paddingVertical: 4,
    },

    toggleBox: {
      width: 18,
      height: 18,
      borderRadius: 4,
      borderWidth: 2,
      borderColor: theme.borderColor,
      alignItems: "center",
      justifyContent: "center",
    },

    toggleBoxActive: {
      backgroundColor: theme.accentPrimary,
      borderColor: theme.accentPrimary,
    },

    toggleText: {
      fontSize: 13,
      color: theme.textPrimary,
    },

    // ===== FILTER ACTIONS =====
    filterActions: {
      flexDirection: "row",
      gap: 12,
      marginTop: 8,
      marginBottom: 20,
    },

    resetBtn: {
      flex: 0.4,
      paddingVertical: 12,
      borderRadius: theme.radiusLg,
      backgroundColor: theme.bgCard,
      borderWidth: 1,
      borderColor: theme.borderColor,
      alignItems: "center",
    },

    resetText: {
      fontSize: 13,
      fontWeight: "600",
      color: theme.textSecondary,
    },

    showBtn: {
      flex: 0.6,
      borderRadius: theme.radiusLg,
      overflow: "hidden",
    },

    showGradient: {
      paddingVertical: 12,
      alignItems: "center",
    },

    showText: {
      fontSize: 13,
      fontWeight: "700",
      color: "#0B0E14",
    },
  });



