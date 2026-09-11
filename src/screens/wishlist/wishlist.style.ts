import { StyleSheet } from 'react-native';
import { Theme } from '../../constants/theme';

export const getStyles = (theme: Theme) =>
  StyleSheet.create({
    container: {
      flex: 1,
      marginTop: 60,
      marginBottom: 70,
    },
    header: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: 8,
      paddingHorizontal: theme.spacingMd,
      paddingVertical: theme.spacingMd,
      backgroundColor: theme.bgPrimary,
    },
    backBtn: {
      padding: 4,
    },
    headerTitle: {
      color: theme.textPrimary,
      fontSize: 15,
      fontFamily: theme.bold,
    },
    countText: {
      color: theme.textMuted,
      fontSize: 14,
      paddingHorizontal: theme.spacingMd,
      marginTop: theme.spacingMd,
      marginBottom: theme.spacingSm,
      fontFamily: theme.bold,
    },

    // Vertical List
    listContainer: {
      paddingHorizontal: theme.spacingSm,
    },
    listItem: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: 12,
      backgroundColor: theme.bgCard,
      borderRadius: theme.radiusLg,
      borderWidth: 1,
      borderColor: theme.borderColor,
      padding: 12,
      marginBottom: theme.spacingSm,
    },
    
    // Image (Box ki height ke equal)
    itemImage: {
      width: 80,
      height: 80,
      borderRadius: theme.radiusMd,
      resizeMode: 'cover',
      backgroundColor: theme.bgTertiary,
    },
    
    itemInfo: {
      flex: 1,
      minHeight: 80, // Image ke barabar height maintain karne ke liye
    },
    itemBrand: {
      color: theme.accentPrimary,
      fontSize: 12,
      fontFamily: theme.bold,
      textTransform: 'uppercase',
      letterSpacing: 0.5,
    },
    itemTitle: {
      color: theme.textPrimary,
      fontSize: 15,
      fontFamily: theme.bold,
      marginTop: 4,
    },
    itemSeller: {
      color: theme.textMuted,
      fontSize: 12,
      marginTop: 2,
    },
    itemPriceRow: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      marginTop: 8,
    },
    itemPrice: {
      color: theme.textPrimary,
      fontSize: 15,
      fontFamily: theme.bold,
    },
    itemRating: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: 4,
    },
    itemRatingText: {
      color: theme.textMuted,
      fontSize: 12,
      fontFamily: theme.regular,
    },
    
    // Item Action Buttons (Har card ke andar)
    itemActions: {
      flexDirection: 'row',
      gap: 6,
      marginTop: 10,
      alignItems: 'center',
      justifyContent: 'flex-start',
    },
    moveToCartBtn: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 4,
      paddingVertical: 4,
      paddingHorizontal: 10,
      borderRadius: theme.radiusSm,
      borderWidth: 1,
      borderColor: theme.accentPrimary,
      backgroundColor: 'rgba(79, 159, 255, 0.1)',
    },
    moveToCartBtnText: {
      color: theme.accentPrimary,
      fontSize: 12,
      fontFamily: theme.bold,
    },
    removeBtn: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 4,
      paddingVertical: 4,
      paddingHorizontal: 10,
      borderRadius: theme.radiusSm,
      borderWidth: 1,
      borderColor: theme.danger,
      backgroundColor: 'rgba(220, 38, 38, 0.1)',
    },
    removeBtnText: {
      color: theme.danger,
      fontSize: 12,
      fontFamily: theme.bold,
    },
  });
