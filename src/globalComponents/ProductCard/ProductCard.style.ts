import { StyleSheet } from 'react-native';
import { Theme } from '../../constants/theme';

export const getProductCardStyles = (theme: Theme) =>
  StyleSheet.create({
    card: {
      width: '48%',
      backgroundColor: theme.bgCard,
      borderRadius: theme.radiusMd,
      marginBottom: theme.spacingMd,
      borderWidth: 1,
      borderColor: theme.borderColor,
      overflow: 'hidden',
    },
    imageContainer: {
      position: 'relative',
    },
    image: {
      width: '100%',
      height: 150,
      resizeMode: 'cover',
    },
    heartBtn: {
      position: 'absolute',
      top: 10,
      right: 10,
      width: 36,
      height: 36,
      borderRadius: 18,
      backgroundColor: 'rgba(0,0,0,0.6)',
      alignItems: 'center',
      justifyContent: 'center',
    },
    info: {
      padding: 12,
    },
    brandName: {
      color: theme.accentPrimary,
      fontSize: 12,
      fontWeight: '600',
      textTransform: 'uppercase',
      letterSpacing: 0.5,
    },
    title: {
      color: theme.textPrimary,
      fontSize: 16,
      fontWeight: 'bold',
    },
    sellerName: {
      color: theme.textMuted,
      fontSize: 12,
    },
    priceRow: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      marginTop: 8,
    },
    price: {
      color: theme.textPrimary,
      fontSize: 16,
      fontWeight: 'bold',
    },
    ratingContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: 4,
    },
    ratingText: {
      color: theme.textMuted,
      fontSize: 12,
    },
  });

