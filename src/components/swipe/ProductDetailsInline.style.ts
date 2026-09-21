import { StyleSheet } from 'react-native';
import { Theme } from '../../constants/theme';

const GOLD = '#D4AF37';

export const getProductDetailsInlineStyles = (theme: Theme) =>
  StyleSheet.create({
    container: {
      marginTop: 20,
      marginHorizontal: theme.spacingSm,
      padding: 16,
      borderRadius: 20,
      backgroundColor: theme.bgCard,
      borderWidth: 1,
      borderColor: theme.borderColor,
      marginBottom: theme.spacingLg,
    },
    headerRow: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: 12,
    },
    sectionTitle: {
      color: theme.textPrimary,
      fontSize: 15,
      fontFamily: theme.bold,
    },
    closeBtn: {
      width: 32,
      height: 32,
      borderRadius: 16,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: theme.bgSecondary,
    },

    mainImage: {
      width: '100%',
      height: 220,
      borderRadius: 14,
      backgroundColor: theme.bgSecondary,
    },
    thumbsRow: { paddingTop: 10, gap: 8 },
    thumbWrap: {
      width: 56,
      height: 56,
      borderRadius: 10,
      overflow: 'hidden',
      borderWidth: 2,
      borderColor: 'transparent',
    },
    thumbActive: { borderColor: GOLD },
    thumb: { width: '100%', height: '100%' },

    block: { marginTop: 16 },
    blockTitle: {
      color: theme.textPrimary,
      fontSize: 13,
      fontFamily: theme.bold,
      marginBottom: 8,
    },

    brand: {
      color: GOLD,
      fontSize: 11,
      letterSpacing: 1.5,
      fontFamily: theme.bold,
    },
    title: {
      color: theme.textPrimary,
      fontSize: 18,
      fontFamily: theme.bold,
      marginTop: 4,
    },
    ratingRow: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: 6,
      marginTop: 6,
    },
    ratingText: {
      color: theme.textMuted,
      fontSize: 11,
      fontFamily: theme.regular,
    },

    // 🏅 Badges
    badgesRow: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      gap: 2,
      marginTop: 14,
    },
    badge: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: 2,
      paddingHorizontal: 6,
      paddingVertical: 6,
      borderRadius: 999,
      borderWidth: 1,
    },
    badgeText: {
      fontSize: 8.5,
      fontFamily: theme.bold,
      letterSpacing: 0.3,
    },

    // Blue — Verified Seller
    badgeBlue: {
      borderColor: 'rgba(59,130,246,0.35)',
      backgroundColor: 'rgba(59,130,246,0.08)',
    },
    badgeTextBlue: { color: '#3B82F6' },

    // Green — Watch Authenticated
    badgeGreen: {
      borderColor: 'rgba(16,185,129,0.35)',
      backgroundColor: 'rgba(16,185,129,0.08)',
    },
    badgeTextGreen: { color: '#10B981' },

    // Orange — Box & Papers
    badgeOrange: {
      borderColor: 'rgba(245,158,11,0.35)',
      backgroundColor: 'rgba(245,158,11,0.08)',
    },
    badgeTextOrange: { color: '#F59E0B' },

    // Purple — Trade Accepted
    badgePurple: {
      borderColor: 'rgba(139,92,246,0.35)',
      backgroundColor: 'rgba(139,92,246,0.08)',
    },
    badgeTextPurple: { color: '#8B5CF6' },

    priceRow: {
      flexDirection: 'row',
      alignItems: 'baseline',
      gap: 10,
      marginTop: 14,
    },
    price: {
      color: theme.textPrimary,
      fontSize: 20,
      fontFamily: theme.bold,
    },

    description: {
      color: theme.textSecondary,
      fontSize: 13,
      lineHeight: 20,
      fontFamily: theme.regular,
    },

    // Make Offer row
    offerRow: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: 10,
      marginTop: 16,
    },
    offerInput: {
      flex: 1,
      height: 48,
      paddingHorizontal: 14,
      borderRadius: 12,
      borderWidth: 1,
      borderColor: theme.borderColor,
      backgroundColor: theme.bgSecondary,
      color: theme.textPrimary,
      fontSize: 14,
      fontFamily: theme.regular,
    },
    offerBtnWrap: {
      borderRadius: 12,
      overflow: 'hidden',
    },
    offerBtn: {
      height: 48,
      paddingHorizontal: 18,
      alignItems: 'center',
      justifyContent: 'center',
    },
    offerBtnText: {
      color: '#0B0E14',
      fontSize: 13,
      fontFamily: theme.bold,
    },

    // Message Now — full width
    messageNowWrap: {
      marginTop: 10,
      borderRadius: 12,
      overflow: 'hidden',
    },
    messageNowBtn: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 8,
      paddingVertical: 14,
    },
    messageNowText: {
      color: '#0B0E14',
      fontSize: 14,
      fontFamily: theme.bold,
    },

    specRow: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      paddingVertical: 8,
      borderBottomWidth: 1,
      borderColor: theme.borderLight,
    },
    specLabel: {
      color: theme.textMuted,
      fontSize: 12,
      fontFamily: theme.regular,
    },
    specValue: {
      color: theme.textPrimary,
      fontSize: 12,
      fontFamily: theme.bold,
    },

    sellerRow: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: 12,
    },
    sellerAvatar: {
      width: 42,
      height: 42,
      borderRadius: 21,
      backgroundColor: 'rgba(212,175,55,0.12)',
      alignItems: 'center',
      justifyContent: 'center',
    },
    sellerName: {
      color: theme.textPrimary,
      fontSize: 14,
      fontFamily: theme.bold,
    },
    sellerMeta: {
      color: theme.textMuted,
      fontSize: 11,
      fontFamily: theme.regular,
    },
    sellerLocation: {
      color: theme.textMuted,
      fontSize: 11,
      fontFamily: theme.regular,
      marginTop: 2,
    },

    // View Profile — white gradient
    viewProfileWrap: {
      borderRadius: 10,
      overflow: 'hidden',
    },
    viewProfileBtn: {
      paddingHorizontal: 14,
      paddingVertical: 10,
    },
    viewProfileText: {
      color: '#0B0E14',
      fontSize: 11,
      fontFamily: theme.bold,
    },
  });
