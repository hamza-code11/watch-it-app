import { StyleSheet } from 'react-native';
import { darkTheme } from '../../constants/theme';

export const flashSaleStyles = StyleSheet.create({
  listContainer: {
    flex: 1,
    paddingBottom: 20,
  },
  watchCard: {
    marginHorizontal: darkTheme.spacingLg,
    marginBottom: darkTheme.spacingLg,
    backgroundColor: darkTheme.bgCard,
    borderRadius: darkTheme.radiusXl,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: darkTheme.borderColor,
  },
  imageContainer: {
    position: 'relative',
    backgroundColor: darkTheme.bgTertiary,
    height: 200,
    width: '100%',
  },
  discountBadge: {
    position: 'absolute',
    top: 10,
    left: 10,
    backgroundColor: darkTheme.danger,
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: darkTheme.radiusMd,
    zIndex: 10,
  },
  discountBadgeText: {
    color: '#fff',
    fontSize: 12,
    fontWeight: 'bold',
  },
  heartIcon: {
    position: 'absolute',
    top: 10,
    right: 10,
    backgroundColor: 'rgba(0,0,0,0.5)',
    padding: 6,
    borderRadius: darkTheme.radiusFull,
    zIndex: 10,
  },
  watchImage: {
    width: '100%',
    height: '100%',
  },
  cardContent: {
    padding: darkTheme.spacingMd,
  },
  brandText: {
    color: darkTheme.accentPrimary,
    fontSize: 12,
    fontWeight: 'bold',
    letterSpacing: 1,
    marginTop: 2,
  },
  titleText: {
    color: darkTheme.textPrimary,
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 4,
  },
  ratingRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: darkTheme.spacingXs,
    gap: 4,
  },
  ratingText: {
    color: darkTheme.warning,
    fontSize: 12,
    fontWeight: '600',
  },
  reviewsText: {
    color: darkTheme.textMuted,
    fontSize: 12,
  },
  priceRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    marginTop: darkTheme.spacingMd,
  },
  flashPrice: {
    color: darkTheme.danger,
    fontSize: 18,
    fontWeight: 'bold',
  },
  oldPrice: {
    color: darkTheme.textMuted,
    fontSize: 12,
    textDecorationLine: 'line-through',
  },

  // === View Details Button (White Gradient) ===
  viewDetailsBtnWrapper: {
    marginTop: darkTheme.spacingMd,
    borderRadius: darkTheme.radiusMd,
    overflow: 'hidden',
  },
  viewDetailsBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 6,
    paddingHorizontal: 16,
    paddingVertical: 12,
    backgroundColor: 'transparent', // Gradient background ke liye transparent
  },
  viewDetailsText: {
    color: '#000', // Black text on white background
    fontSize: 14,
    fontWeight: 'bold',
  },
});

