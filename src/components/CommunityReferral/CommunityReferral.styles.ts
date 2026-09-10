// components/CommunityReferral/CommunityReferral.styles.ts
import { StyleSheet } from "react-native";
import { Theme } from "../../constants/theme";

export const getStyles = (theme: Theme) =>
  StyleSheet.create({
    container: {
      paddingHorizontal: 5,
      gap: 6,
      marginBottom: theme.spacingSm,
      marginTop: theme.spacingSm,
    },

    topRow: {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
      marginBottom: 14,
    },

    iconBadge: {
      width: 40,
      height: 40,
      borderRadius: theme.radiusMd ?? 10,
      backgroundColor: "rgba(91, 158, 255, 0.12)",
      alignItems: "center",
      justifyContent: "center",
    },

    iconBadgeGold: {
      backgroundColor: "rgba(240, 180, 41, 0.12)",
    },

    // ---- Community Card ----
    communityCard: {
      // backgroundColor: theme.bgSecondary,
      borderRadius: theme.radiusLg,
      padding: theme.spacingMd,
      borderWidth: 1,
      borderColor: "rgba(91, 158, 255, 0.15)",
    },

    pillBadgeBlue: {
      backgroundColor: "rgba(91, 158, 255, 0.12)",
      borderWidth: 1,
      borderColor: "rgba(91, 158, 255, 0.3)",
      borderRadius: theme.radiusFull,
      paddingHorizontal: 10,
      paddingVertical: 4,
    },

    pillBadgeBlueText: {
      fontSize: 10,
      fontFamily: theme.bold,
      letterSpacing: 0.5,
      color: "#5B9EFF",
    },

    communityTitle: {
      fontSize: 19,
      fontFamily: theme.bold,
      color: theme.textPrimary,
      letterSpacing: 0.2,
      marginBottom: 8,
    },

    communityDescription: {
      fontSize: 13,
      fontFamily: theme.regular,
      color: theme.textSecondary,
      lineHeight: 19,
      marginBottom: 16,
    },

    statsRow: {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
      paddingBottom: 14,
      marginBottom: 4,
      borderBottomWidth: 1,
      borderBottomColor: "rgba(255,255,255,0.06)",
    },

    avatarsRow: {
      flexDirection: "row",
      alignItems: "center",
    },

    avatarStack: {
      flexDirection: "row",
      marginRight: 8,
    },

    avatarCircle: {
      width: 20,
      height: 20,
      borderRadius: theme.radiusFull,
      borderWidth: 1.5,
      borderColor: "#0B1220",
    },

    avatarOverlap: {
      marginLeft: -8,
    },

    statsText: {
      fontSize: 11,
      fontWeight: "500",
      color: theme.textSecondary,
    },

    onlineRow: {
      flexDirection: "row",
      alignItems: "center",
      gap: 6,
    },

    onlineDot: {
      width: 6,
      height: 6,
      borderRadius: theme.radiusFull,
      backgroundColor: "#22c55e",
    },

    joinLinkRow: {
      flexDirection: "row",
      alignItems: "center",
      gap: 4,
      marginTop: 12,
    },

    joinLinkText: {
      fontSize: 13,
      fontFamily: theme.bold,
      color: "#5B9EFF",
    },

    // ---- Referral Card ----
    referralCard: {
      // backgroundColor: theme.bgSecondary,
      borderRadius: theme.radiusLg,
      padding: theme.spacingMd,
      borderWidth: 1,
      borderColor: "rgba(240, 180, 41, 0.15)",
    },

    pillBadgeGold: {
      backgroundColor: "rgba(240, 180, 41, 0.12)",
      borderWidth: 1,
      borderColor: "rgba(240, 180, 41, 0.3)",
      borderRadius: theme.radiusFull,
      paddingHorizontal: 10,
      paddingVertical: 4,
    },

    pillBadgeGoldText: {
      fontSize: 10,
      fontFamily: theme.bold,
      letterSpacing: 0.5,
      color: "#F0B429",
    },

    referralTitle: {
      fontSize: 19,
      fontFamily: theme.bold,
      color: theme.textPrimary,
      letterSpacing: 0.2,
      marginBottom: 8,
    },

    referralDescription: {
      fontSize: 13,
      fontFamily: theme.regular,
      color: theme.textSecondary,
      lineHeight: 19,
      marginBottom: 16,
    },

    tierStatusRow: {
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      marginBottom: 8,
    },

    tierStatusLabel: {
      fontSize: 10,
      fontFamily: theme.bold,
      letterSpacing: 0.5,
      color: theme.textSecondary,
    },

    tierStatusValue: {
      fontSize: 10,
      fontFamily: theme.bold,
      letterSpacing: 0.5,
      color: theme.textSecondary,
    },

    tierSegmentRow: {
      flexDirection: "row",
      backgroundColor: "rgba(255,255,255,0.04)",
      borderRadius: theme.radiusMd ?? 10,
      padding: 4,
      marginBottom: 4,
    },

    tierSegment: {
      flex: 1,
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "center",
      paddingVertical: 8,
      borderRadius: (theme.radiusMd ?? 10) - 2,
    },

    tierSegmentActive: {
      backgroundColor: "#F0B429",
    },

    tierSegmentText: {
      fontSize: 11,
      fontFamily: theme.regular,
      color: theme.textSecondary,
    },

    tierSegmentActiveText: {
      fontSize: 11,
      fontFamily: theme.bold,
      color: "#0B0E14",
    },

    startEarningLinkText: {
      fontSize: 13,
      fontFamily: theme.bold,
      color: "#F0B429",
    },
  });

