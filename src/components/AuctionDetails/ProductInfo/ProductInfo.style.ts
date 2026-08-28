import { Platform, StyleSheet } from 'react-native';
import { darkTheme } from '../../../constants/theme';

export const productInfoStyles = StyleSheet.create({
  titleSection: {
    paddingHorizontal: darkTheme.spacingLg,
  },
  productTitle: {
    color: darkTheme.textPrimary,
    fontSize: 24,
    fontWeight: 'bold',
    fontFamily: Platform.OS === 'ios' ? 'Georgia' : darkTheme.fontFamily,
  },
  productBrand: {
    color: darkTheme.textMuted,
    fontSize: 14,
    marginTop: darkTheme.spacingXs,
    letterSpacing: 1,
  },
  priceCard: {
    backgroundColor: darkTheme.bgCard,
    borderRadius: darkTheme.radiusXl,
    padding: darkTheme.spacingMd,
    marginTop: darkTheme.spacingMd,
    borderWidth: 1,
    borderColor: darkTheme.borderColor,
  },
  priceRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: darkTheme.spacingMd,
  },
  labelSmall: {
    color: darkTheme.textMuted,
    fontSize: 12,
    marginBottom: darkTheme.spacingXs,
  },
  strikePrice: {
    color: darkTheme.textMuted,
    fontSize: 16,
    textDecorationLine: 'line-through',
  },
  currentPrice: {
    color: darkTheme.accentPrimary,
    fontSize: 22,
    fontWeight: 'bold',
  },
  timeLeftRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between', // Button ko right align karne ke liye
    borderTopWidth: 1,
    borderTopColor: darkTheme.borderColor,
    paddingTop: darkTheme.spacingMd,
  },
  timeLeftText: {
    color: darkTheme.warning,
    fontSize: 13,
    marginLeft: darkTheme.spacingXs,
  },
  // Place Bid Button (Right align)
  placeBidLinkBtn: {
    backgroundColor: darkTheme.accentPrimary,
    borderRadius: darkTheme.radiusFull,
    paddingHorizontal: 12,
    paddingVertical: 6,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  placeBidLinkText: {
    color: '#000',
    fontSize: 13,
    fontWeight: 'bold',
  },
  sectionHeader: {
    color: darkTheme.textPrimary,
    fontSize: 20,
    fontWeight: 'bold',
    fontFamily: Platform.OS === 'ios' ? 'Georgia' : darkTheme.fontFamily,
    marginTop: darkTheme.spacingLg,
    marginBottom: 10,
  },
  descriptionText: {
    color: darkTheme.textMuted,
    fontSize: 14,
    lineHeight: 22,
  },
  featureList: {
    marginTop: darkTheme.spacingXs,
  },
  featureRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  featureText: {
    color: darkTheme.textMuted,
    fontSize: 14,
    marginLeft: 10,
  },
});


