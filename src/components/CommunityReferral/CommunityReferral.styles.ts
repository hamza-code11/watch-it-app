// components/CommunityReferral/CommunityReferral.styles.ts
import { StyleSheet } from "react-native";
import { Theme } from "../../constants/theme";

export const getStyles = (theme: Theme) =>
  StyleSheet.create({
    container: {
      paddingHorizontal: 15,
      gap: 12,
      marginBottom: theme.spacingSm,
    },

    // Community Card
    communityCard: {
      backgroundColor: theme.bgCard,
      borderRadius: theme.radiusXl,
      padding: theme.spacingLg,
      borderWidth: 1,
      borderColor: theme.borderColor,
    },

    communityHeader: {
      flexDirection: "row",
      alignItems: "center",
      gap: 10,
      marginBottom: 8,
    },

    iconBadge: {
      width: 38,
      height: 38,
      borderRadius: theme.radiusFull,
      alignItems: "center",
      justifyContent: "center",
    },

    communityTitle: {
      fontSize: 16,
      fontWeight: "700",
      color: theme.textPrimary,
      letterSpacing: 0.3,
    },

    communityDescription: {
      fontSize: 13,
      fontWeight: "400",
      color: theme.textSecondary,
      lineHeight: 19,
      marginBottom: 14,
    },

    // White Button
    buttonWrapper: {
      width: "100%",
      marginBottom: 14,
    },

    whiteButton: {
      borderRadius: theme.radiusMd + 4,
      paddingHorizontal: theme.spacingLg,
      paddingVertical: theme.spacingSm + 4,
      alignItems: "center",
      justifyContent: "center",
      flexDirection: "row",
      gap: 8,
      width: "100%",
    },

    whiteButtonText: {
      fontSize: 13,
      fontWeight: "700",
      letterSpacing: 0.5,
      color: "#0B0E14",
    },

    // Quick Links - Inside Community Card
    quickLinks: {
      flexDirection: "row",
      justifyContent: "space-between",
      paddingTop: 14,
      borderTopWidth: 1,
      borderTopColor: theme.borderLight,
    },

    quickLink: {
      alignItems: "center",
      gap: 4,
      paddingVertical: 4,
      flex: 1,
    },

    quickLinkText: {
      fontSize: 10,
      fontWeight: "600",
      letterSpacing: 0.3,
    },

    // Referral Card
    referralCard: {
      backgroundColor: theme.bgCard,
      borderRadius: theme.radiusXl,
      padding: theme.spacingLg,
      borderWidth: 1,
      borderColor: theme.borderColor,
    },

    referralHeader: {
      flexDirection: "row",
      alignItems: "center",
      gap: 10,
      marginBottom: 8,
    },

    referralTitle: {
      fontSize: 16,
      fontWeight: "700",
      color: theme.textPrimary,
      letterSpacing: 0.3,
    },

    referralDescription: {
      fontSize: 13,
      fontWeight: "400",
      color: theme.textSecondary,
      lineHeight: 19,
      marginBottom: 14,
    },

    // Tier Badges
    tierContainer: {
      flexDirection: "row",
      justifyContent: "center",
      gap: 8,
      marginTop: 4,
    },

    tierBadge: {
      flexDirection: "row",
      alignItems: "center",
      gap: 4,
      paddingHorizontal: 10,
      paddingVertical: 4,
      borderRadius: theme.radiusFull,
      borderWidth: 1,
    },

    tierText: {
      fontSize: 10,
      fontWeight: "600",
      letterSpacing: 0.3,
    },
  });

  