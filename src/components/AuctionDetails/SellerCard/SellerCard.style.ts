// SellerCard.style.ts
import { StyleSheet } from 'react-native';
import { darkTheme } from '../../../constants/theme';

export const sellerStyles = StyleSheet.create({
  sectionHeader: {
    color: darkTheme.textPrimary,
    fontSize: 20,
    fontWeight: 'bold',
    fontFamily: darkTheme.fontFamily,
    marginTop: darkTheme.spacingLg,
    marginBottom: 10,
  },
  card: {
    backgroundColor: darkTheme.bgCard,
    borderRadius: darkTheme.radiusXl,
    padding: darkTheme.spacingMd,
    marginTop: darkTheme.spacingMd,
    borderWidth: 1,
    borderColor: darkTheme.borderColor,
  },
  sellerLabel: {
    color: darkTheme.textMuted,
    fontSize: 12,
    letterSpacing: 1,
    marginBottom: 10,
  },
  sellerRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  sellerAvatar: {
    width: 40,
    height: 40,
    borderRadius: darkTheme.radiusFull,
    backgroundColor: darkTheme.bgTertiary,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: darkTheme.spacingSm,
  },
  sellerName: {
    color: darkTheme.textPrimary,
    fontSize: 16,
    fontWeight: 'bold',
  },
  sellerRating: {
    color: darkTheme.warning,
    fontSize: 13,
    marginTop: darkTheme.spacingXs,
  },
});
