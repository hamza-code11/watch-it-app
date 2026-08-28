import { Platform, StyleSheet } from 'react-native';
import { darkTheme } from '../../../constants/theme';

export const productInfoStyles = StyleSheet.create({
  section: {
    paddingHorizontal: darkTheme.spacingLg,
  },
  brandText: {
    color: darkTheme.accentPrimary,
    fontSize: 12,
    fontWeight: 'bold',
    letterSpacing: 1,
    marginTop: 20,
  },
  titleText: {
    color: darkTheme.textPrimary,
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 4,
  },
  priceRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    marginTop: 10,
  },
  flashPrice: {
    color: darkTheme.danger,
    fontSize: 22,
    fontWeight: 'bold',
  },
  oldPrice: {
    color: darkTheme.textMuted,
    fontSize: 14,
    textDecorationLine: 'line-through',
  },
  ratingRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 6,
    gap: 4,
  },
  ratingText: {
    color: darkTheme.warning,
    fontSize: 14,
    fontWeight: '600',
  },
  reviewsText: {
    color: darkTheme.textMuted,
    fontSize: 14,
  },
  sectionHeader: {
    color: darkTheme.textPrimary,
    fontSize: 20,
    fontWeight: 'bold',
    fontFamily: Platform.OS === 'ios' ? 'Georgia' : darkTheme.fontFamily,
    marginTop: 20,
    marginBottom: 10,
  },
  descriptionText: {
    color: darkTheme.textMuted,
    fontSize: 14,
    lineHeight: 22,
  },
  
  // === Key Features Styles ===
  featureList: {
    marginTop: 5,
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

