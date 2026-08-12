// src/app/settings/settings.styles.ts
import { StyleSheet } from "react-native";
import { Theme } from "../../../example/src/constants/theme";

export const getStyles = (theme: Theme) =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: theme.bgPrimary,
    },

    scrollContent: {
      paddingHorizontal: theme.spacingLg,
      paddingTop: theme.spacingMd,
      paddingBottom: theme.spacingXl * 2,
    },

    // ===== HEADER =====
    headerRow: {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
      marginBottom: theme.spacingMd,
    },

    pageTitle: {
      fontSize: 22,
      fontWeight: "700",
      color: theme.textPrimary,
    },

    closeButton: {
      width: 36,
      height: 36,
      borderRadius: theme.radiusFull,
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: theme.bgSecondary,
    },

    // ===== PROFILE =====
    profileSection: {
      alignItems: "center",
      marginBottom: theme.spacingLg,
    },

    avatar: {
      width: 84,
      height: 84,
      borderRadius: theme.radiusFull,
      marginBottom: theme.spacingSm,
      backgroundColor: theme.bgSecondary,
    },

    profileName: {
      fontSize: 20,
      fontWeight: "700",
      color: theme.textPrimary,
    },

    profileEmail: {
      fontSize: 13,
      color: theme.textMuted,
      marginTop: 2,
    },

    // ===== INVITE CARD =====
    inviteCard: {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
      backgroundColor: theme.accentPrimary,
      borderRadius: 20,
      padding: theme.spacingLg,
      marginBottom: theme.spacingLg,
      overflow: "hidden",
      shadowColor: theme.accentPrimary,
      shadowOffset: { width: 0, height: 6 },
      shadowOpacity: 0.25,
      shadowRadius: 14,
      elevation: 6,
    },

    inviteLeft: {
      flexDirection: "row",
      alignItems: "center",
      flex: 1,
    },

    inviteIconWrapper: {
      width: 40,
      height: 40,
      borderRadius: theme.radiusFull,
      backgroundColor: "rgba(255,255,255,0.2)",
      alignItems: "center",
      justifyContent: "center",
      marginRight: theme.spacingMd,
    },

    inviteTitle: {
      fontSize: 15,
      fontWeight: "600",
      color: "#ffffff",
    },

    inviteSubtitle: {
      fontSize: 11,
      color: "rgba(255,255,255,0.8)",
      marginTop: 2,
    },

    // decorative graphic on the right of invite card
    inviteGraphic: {
      width: 54,
      height: 54,
      alignItems: "flex-end",
      justifyContent: "center",
    },

    inviteGraphicCard: {
      width: 46,
      height: 38,
      borderRadius: 10,
      backgroundColor: "rgba(255,255,255,0.25)",
      padding: 8,
      justifyContent: "center",
      gap: 4,
    },

    inviteGraphicLine: {
      height: 4,
      width: "80%",
      borderRadius: 4,
      backgroundColor: "#ffffff",
    },

    inviteGraphicHeart: {
      position: "absolute",
      bottom: -4,
      right: -4,
      width: 22,
      height: 22,
      borderRadius: theme.radiusFull,
      backgroundColor: "#ef4444",
      alignItems: "center",
      justifyContent: "center",
      borderWidth: 2,
      borderColor: theme.accentPrimary,
    },

    // ===== SETTINGS LIST (each item own card) =====
    settingsList: {
      marginBottom: theme.spacingLg,
      gap: 10,
    },

    settingItem: {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
      backgroundColor: theme.bgCard,
      borderRadius: 16,
      paddingHorizontal: theme.spacingMd,
      paddingVertical: 12,
      shadowColor: "#000",
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.05,
      shadowRadius: 6,
      elevation: 1,
    },

    settingLeft: {
      flexDirection: "row",
      alignItems: "center",
    },

    settingIconWrapper: {
      width: 34,
      height: 34,
      borderRadius: theme.radiusFull,
      backgroundColor: theme.bgSecondary,
      alignItems: "center",
      justifyContent: "center",
      marginRight: theme.spacingMd,
    },

    settingTitle: {
      fontSize: 14,
      fontWeight: "500",
      color: theme.textPrimary,
    },

    settingRight: {
      marginLeft: theme.spacingSm,
    },

    settingArrowWrapper: {
      width: 30,
      height: 30,
      borderRadius: theme.radiusFull,
      backgroundColor: theme.bgSecondary,
      alignItems: "center",
      justifyContent: "center",
    },

    // ===== LOGOUT BUTTON =====
    logoutButton: {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "center",
      paddingVertical: 16,
      borderRadius: theme.radiusLg,
      borderWidth: 1,
      borderColor: "#fecaca",
      backgroundColor: "#fef2f2",
      marginBottom: theme.spacingLg,
    },

    logoutText: {
      fontSize: 15,
      fontWeight: "600",
      color: "#dc2626",
      marginLeft: theme.spacingSm,
    },

    // ===== VERSION =====
    versionContainer: {
      alignItems: "center",
    },

    versionText: {
      fontSize: 13,
      color: theme.textMuted,
    },
  });


  