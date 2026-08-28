import { StyleSheet } from 'react-native';
import { darkTheme } from '../../constants/theme';

export const listStyles = StyleSheet.create({
  listContainer: {
    flex: 1,
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
    height: 220,
    width: '100%',
  },
  brandBadge: {
    position: 'absolute',
    top: 15,
    left: 15,
    backgroundColor: 'rgba(0,0,0,0.6)',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: darkTheme.radiusMd,
    zIndex: 10,
  },
  brandBadgeText: {
    color: '#fff',
    fontSize: 12,
    fontWeight: 'bold',
    letterSpacing: 1,
  },
  timerBadge: {
    position: 'absolute',
    top: 15,
    right: 15,
    backgroundColor: darkTheme.danger, // Red background for ended
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: darkTheme.radiusMd,
    flexDirection: 'row',
    alignItems: 'center',
    zIndex: 10,
  },
  timerBadgeText: {
    color: '#fff', // White text on red background
    fontSize: 12,
    marginLeft: 5,
  },
  watchImage: {
    width: '100%',
    height: '100%',
  },
  cardContent: {
    padding: darkTheme.spacingMd,
  },
  titleRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: darkTheme.spacingMd,
  },
  titleContainer: {
    flex: 1,
  },
  watchTitle: {
    color: darkTheme.textPrimary,
    fontSize: 18,
    fontWeight: 'bold',
  },
  watchBrand: {
    color: darkTheme.textMuted,
    fontSize: 13,
    marginTop: 4,
  },
  priceRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
  },
  startingPriceContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  startingPriceLabel: {
    color: darkTheme.textMuted,
    fontSize: 13,
  },
  startingPriceValue: {
    color: darkTheme.textSecondary,
    fontSize: 14,
    marginLeft: darkTheme.spacingXs,
  },
  bidsContainer: {
    alignItems: 'flex-end',
  },
  currentPriceLabel: {
    color: darkTheme.textMuted,
    fontSize: 12,
  },
  currentPriceValue: {
    color: darkTheme.accentPrimary,
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 2,
  },
  bidsText: {
    color: darkTheme.textMuted,
    fontSize: 12,
    marginTop: darkTheme.spacingXs,
  },

  // === ENDED AUCTION RED THEME STYLES ===
  endedCard: {
    borderColor: darkTheme.danger,
  },
  endedImageContainer: {
    backgroundColor: 'rgba(240, 68, 56, 0.1)', // Red tint on image background
  },
  endedBrandBadge: {
    backgroundColor: darkTheme.danger, // Red badge
  },
  endedTimerBadge: {
    backgroundColor: darkTheme.danger,
  },
  endedTitle: {
    color: darkTheme.danger,
  },
  endedCurrentPrice: {
    color: darkTheme.danger,
  },
  endedStartingPrice: {
    color: darkTheme.danger,
  },
  endedBidsText: {
    color: darkTheme.danger,
  },
});

