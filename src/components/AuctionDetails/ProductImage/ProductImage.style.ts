import { StyleSheet } from 'react-native';
import { darkTheme } from '../../../constants/theme';

export const productImageStyles = StyleSheet.create({
  // Outer container jo margin handle karega
  container: {
    marginHorizontal: darkTheme.spacingLg,
    marginTop: darkTheme.spacingMd,
    marginBottom: darkTheme.spacingLg,
  },

  // Image Slider (FlatList)
  sliderContainer: {
    backgroundColor: darkTheme.bgCard,
    borderRadius: darkTheme.radiusXl,
    height: 280,
    overflow: 'hidden',
    position: 'relative',
  },

  // Har image ka container
  imageWrapper: {
    width: '100%',
    height: '100%',
  },

  watchImage: {
    width: '100%',
    height: '100%',
  },

  // Brand Badge (Fixed)
  brandBadge: {
    position: 'absolute',
    top: 15,
    left: 15,
    backgroundColor: 'rgba(0,0,0,0.7)', // Dark background for better visibility
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

  // Dots Pagination
  paginationContainer: {
    position: 'absolute',
    bottom: 15,
    right: 15,
    flexDirection: 'row',
    alignItems: 'center',
  },

  dot: {
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: 'rgba(255,255,255,0.5)',
    marginHorizontal: 3,
  },

  activeDot: {
    backgroundColor: '#fff',
    width: 8,
    height: 8,
    borderRadius: 4,
  },

  // Image Counter (3/4)
  imageCounter: {
    position: 'absolute',
    bottom: 15,
    left: 15,
    backgroundColor: 'rgba(0,0,0,0.7)',
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: darkTheme.radiusMd,
  },
  imageCounterText: {
    color: '#fff',
    fontSize: 12,
    fontWeight: '600',
  },
});
