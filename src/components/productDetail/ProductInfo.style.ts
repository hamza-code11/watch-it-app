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
      marginBottom: 14,
    },
    breadcrumbText: {
      color: theme.textMuted,
      fontSize: 13,
    },
    breadcrumbActiveText: {
      color: theme.textSecondary,
    },
    breadcrumbSep: {
      color: theme.textMuted,
      fontSize: 13,
    },

    // Title
    title: {
      color: theme.textPrimary,
      fontSize: 28,
      fontWeight: 'bold',
      fontFamily: theme.fontFamily,
      marginBottom: 12,
    },

    // Badges Row — horizontal scroll ki contentContainerStyle
    badgesRow: {
      flexDirection: 'row',
      gap: 8,
      marginBottom: 14,
      paddingRight: 4, // taake last badge screen edge se chip na jaye
    },
    badge: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: 4,
      paddingHorizontal: 8, // pehle 12 tha — kam kar diya
      paddingVertical: 7,
      borderRadius: 999,
      borderWidth: 1,
    },
    badgeText: {
      fontSize: 11,
      fontWeight: '600',
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
      fontWeight: '600',
    },
    modelText: {
      color: theme.textMuted,
      fontSize: 14,
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
      fontSize: 14,
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
      fontWeight: '600',
    },
    price: {
      color: theme.textPrimary,
      fontSize: 28,
      fontWeight: 'bold',
    },

    // Description
    description: {
      color: theme.textSecondary,
      fontSize: 14,
      lineHeight: 22,
      marginBottom: 14,
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
    },
    soldByName: {
      color: theme.accentPrimary,
      fontSize: 14,
      fontWeight: '600',
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
      fontWeight: 'bold',
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
      fontWeight: '600',
    },
    stockUnits: {
      color: theme.textMuted,
      fontSize: 14,
    },

    // Trade-in Accepted
    tradeInRow: {
      backgroundColor: 'rgba(50, 213, 131, 0.1)',
      borderWidth: 1,
      borderColor: 'rgba(50, 213, 131, 0.3)',
      borderRadius: theme.radiusLg,
      padding: 10,
      flexDirection: 'row',
      alignItems: 'center',
      gap: 8,
      marginBottom: 12,
    },
    tradeInText: {
      color: theme.success,
      fontSize: 14,
      fontWeight: '600',
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
      fontWeight: 'bold',
    },
    orderBtnWrapper: {
      flex: 1, // quantity box ke bache hue space ka zyada hissa le leta hai
      borderRadius: theme.radiusLg,
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
      fontWeight: 'bold',
    },

    // Make an Offer
    makeOfferBtn: {
      backgroundColor: theme.bgCard,
      borderRadius: theme.radiusLg,
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
      fontWeight: '600',
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
      fontWeight: 'bold',
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
    },
    specValue: {
      color: theme.textPrimary,
      fontSize: 12,
      fontWeight: '600',
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
      fontWeight: 'bold',
    },
    modalSubtitle: {
      color: theme.textMuted,
      fontSize: 13,
      marginBottom: 16,
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
      fontWeight: '600',
      marginRight: 6,
    },
    modalInput: {
      flex: 1,
      color: theme.textPrimary,
      fontSize: 18,
      paddingVertical: 14,
    },
    modalSubmitBtn: {
      backgroundColor: theme.accentPrimary,
      borderRadius: theme.radiusLg,
      paddingVertical: 14,
      alignItems: 'center',
      justifyContent: 'center',
    },
    modalSubmitText: {
      color: '#FFFFFF',
      fontSize: 16,
      fontWeight: 'bold',
    },
  });
