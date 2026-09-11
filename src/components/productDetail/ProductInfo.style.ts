import { StyleSheet } from 'react-native';
import { Theme } from '../../constants/theme';

export const getProductInfoStyles = (theme: Theme) =>
  StyleSheet.create({
    container: {
      paddingHorizontal: theme.spacingMd,
      paddingVertical: theme.spacingMd,
    },

    // Breadcrumb
    breadcrumb: {
      flexDirection: 'row',
      alignItems: 'center',
      flexWrap: 'wrap',
      gap: 6,
      marginBottom: theme.spacingXs,
    },
    breadcrumbText: {
      color: theme.textMuted,
      fontSize: 12,
      fontFamily: theme.regular,
    },
    breadcrumbActiveText: {
      color: theme.textSecondary,
    },
    breadcrumbSep: {
      color: theme.textMuted,
      fontSize: 16,
      fontFamily: theme.regular,
    },

    // Title
    title: {
      color: theme.textPrimary,
      fontSize: 28,
      fontFamily: theme.bold,
      marginBottom: theme.spacingXs,
    },

    // Badges Row
    badgesRow: {
      flexDirection: 'row',
      gap: 4,
      marginBottom: 14,
      paddingRight: 4,
    },
    badge: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: 2,
      paddingHorizontal: 4, 
      paddingVertical: 7,
      borderRadius: theme.radiusSm,
      borderWidth: 1,
    },
    badgeText: {
      fontSize: 10,
      fontFamily: theme.bold,
    },

    // Brand & Model
    brandModelRow: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: 8,
      marginBottom: 10,
    },
    brandText: {
      color: theme.accentPrimary,
      fontSize: 14,
      fontFamily: theme.bold,
    },
    modelText: {
      color: theme.textMuted,
      fontSize: 12,
      fontFamily: theme.regular,
    },

    // Star Rating
    ratingRow: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: 6,
      marginBottom: 14,
    },
    ratingStars: {
      flexDirection: 'row',
      gap: 2,
    },
    ratingText: {
      color: theme.textMuted,
      fontSize: 12,
      fontFamily: theme.regular,
    },

    // Divider between rating and price
    divider: {
      height: 1,
      backgroundColor: theme.borderColor,
      marginBottom: 14,
    },

    // Price
    priceRow: {
      flexDirection: 'row',
      alignItems: 'baseline',
      marginBottom: 12,
    },
    priceLabel: {
      color: theme.textMuted,
      fontSize: 18,
      fontFamily: theme.regular,
    },
    price: {
      color: theme.textPrimary,
      fontSize: 28,
      fontFamily: theme.bold,
    },

    // Description
    description: {
      color: theme.textSecondary,
      fontSize: 12,
      lineHeight: 22,
      marginBottom: 14,
      fontFamily: theme.regular,
    },

    // Sold By Row
    soldByRow: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: 8,
      marginBottom: 10,
    },
    soldByText: {
      color: theme.textMuted,
      fontSize: 14,
      fontFamily: theme.bold,
    },
    soldByName: {
      color: theme.accentPrimary,
      fontSize: 14,
      fontFamily: theme.bold,
    },
    goldBadge: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: 4,
      backgroundColor: '#FDB022',
      paddingHorizontal: 8,
      paddingVertical: 3,
      borderRadius: theme.radiusSm,
    },
    goldBadgeText: {
      color: '#000000',
      fontSize: 11,
      fontFamily: theme.bold,
    },

    // In Stock
    inStockRow: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: 6,
      marginBottom: 14,
    },
    inStockText: {
      color: theme.success,
      fontSize: 14,
      fontFamily: theme.bold,
    },
    stockUnits: {
      color: theme.textMuted,
      fontSize: 14,
      fontFamily: theme.regular,
    },

    // Trade-in Accepted
    tradeInRow: {
      backgroundColor: 'rgba(50, 213, 131, 0.1)',
      borderWidth: 1,
      borderColor: 'rgba(50, 213, 131, 0.3)',
      borderRadius: theme.radiusMd,
      padding: 10,
      flexDirection: 'row',
      alignItems: 'center',
      gap: 8,
      marginBottom: 12,
    },
    tradeInText: {
      color: theme.success,
      fontSize: 14,
      fontFamily: theme.bold,
      flex: 1,
    },

    // Quantity + Order Now
    actionRow: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: 10,
      marginBottom: 12,
    },
    quantityBox: {
      width: 88, // pehle 110 tha — kam kar diya
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      backgroundColor: theme.bgCard,
      borderRadius: theme.radiusMd,
      borderWidth: 1,
      borderColor: theme.borderColor,
      paddingHorizontal: 2,
      paddingVertical: 10,
    },
    quantityBtn: {
      width: 28,
      height: 28,
      borderRadius: 14,
      backgroundColor: theme.bgInput,
      alignItems: 'center',
      justifyContent: 'center',
    },
    quantityText: {
      color: theme.textPrimary,
      fontSize: 16,
      fontFamily: theme.bold,
    },
    orderBtnWrapper: {
      flex: 1, // quantity box ke bache hue space ka zyada hissa le leta hai
      borderRadius: theme.radiusMd,
      overflow: 'hidden',
      borderWidth: 1,
      borderColor: 'rgba(255,255,255,0.3)',
    },
    orderBtn: {
      paddingVertical: 14,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 6,
    },
    orderText: {
      color: '#111827',
      fontSize: 16,
      fontFamily: theme.bold,
    },

    // Make an Offer
    makeOfferBtn: {
      backgroundColor: theme.bgCard,
      borderRadius: theme.radiusMd,
      borderWidth: 1,
      borderColor: theme.borderColor,
      paddingVertical: 10,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 6,
      marginBottom: 18,
    },
    makeOfferText: {
      color: theme.accentPrimary,
      fontSize: 16,
      fontFamily: theme.bold,
    },

    // Specifications (Accordion)
    specsContainer: {
      backgroundColor: theme.bgCard,
      borderRadius: theme.radiusLg,
      borderWidth: 1,
      borderColor: theme.borderColor,
      overflow: 'hidden',
    },
    specsHeader: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: 16,
    },
    specsHeaderLeft: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: 8,
    },
    specsTitle: {
      color: theme.textPrimary,
      fontSize: 18,
      fontFamily: theme.bold,
    },
    specRow: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      paddingHorizontal: 16,
      paddingVertical: 8,
      borderBottomWidth: 1,
      borderBottomColor: theme.borderColor,
    },
    specLabel: {
      color: theme.textMuted,
      fontSize: 12,
      fontFamily: theme.bold,
    },
    specValue: {
      color: theme.textPrimary,
      fontSize: 12,
      fontFamily: theme.regular,
    },

    // Make an Offer Modal
    modalOverlay: {
      flex: 1,
      backgroundColor: 'rgba(0,0,0,0.6)',
      justifyContent: 'center',
      alignItems: 'center',
      paddingHorizontal: 24,
    },
    modalCard: {
      width: '100%',
      backgroundColor: theme.bgCard,
      borderRadius: theme.radiusLg,
      borderWidth: 1,
      borderColor: theme.borderColor,
      padding: 20,
    },
    modalHeader: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      marginBottom: 8,
    },
    modalTitle: {
      color: theme.textPrimary,
      fontSize: 18,
      fontFamily: theme.bold,
    },
    modalSubtitle: {
      color: theme.textMuted,
      fontSize: 13,
      marginBottom: 16,
      fontFamily: theme.regular,
    },
    modalInputBox: {
      flexDirection: 'row',
      alignItems: 'center',
      backgroundColor: theme.bgInput,
      borderRadius: theme.radiusMd,
      borderWidth: 1,
      borderColor: theme.borderColor,
      paddingHorizontal: 14,
      marginBottom: 18,
    },
    modalInputPrefix: {
      color: theme.textPrimary,
      fontSize: 18,
      fontFamily: theme.regular,
      marginRight: 6,
    },
    modalInput: {
      flex: 1,
      color: theme.textPrimary,
      fontSize: 14,
      paddingVertical: 14,
      fontFamily: theme.regular,
    },
    modalSubmitBtn: {
      backgroundColor: theme.accentPrimary,
      borderRadius: theme.radiusMd,
      paddingVertical: 14,
      alignItems: 'center',
      justifyContent: 'center',
    },
    modalSubmitText: {
      color: '#FFFFFF',
      fontSize: 16,
      fontFamily: theme.bold,
    },
  });
