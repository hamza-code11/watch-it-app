import { StyleSheet } from 'react-native';
import { darkTheme } from '../../../constants/theme';

export const imageGalleryStyles = StyleSheet.create({
  // Container for the whole gallery
  galleryContainer: {
    flexDirection: 'column',
    paddingHorizontal: darkTheme.spacingLg,
    paddingVertical: darkTheme.spacingMd,
  },

  // Main Image (Full Width)
  mainImageContainer: {
    width: '100%',
    height: 320,
    borderRadius: darkTheme.radiusXl,
    overflow: 'hidden',
    backgroundColor: darkTheme.bgCard,
    position: 'relative',
  },

  mainImage: {
    width: '100%',
    height: '100%',
  },

  // Image Counter (1/5)
  counterBadge: {
    position: 'absolute',
    bottom: 10,
    right: 10,
    backgroundColor: 'rgba(0,0,0,0.7)',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: darkTheme.radiusMd,
  },

  counterText: {
    color: '#fff',
    fontSize: 12,
    fontWeight: '600',
  },

  // Thumbnails (Bottom Horizontal Row)
  thumbnailsContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    gap: 8,
    marginTop: 12,
  },

  thumbnailWrapper: {
    width: 70,
    height: 70,
    borderRadius: darkTheme.radiusMd,
    backgroundColor: darkTheme.bgCard,
    overflow: 'hidden',
    position: 'relative',
  },

  thumbnail: {
    width: '100%',
    height: '100%',
  },

  activeThumbnail: {
    borderWidth: 2,
    borderColor: darkTheme.accentPrimary,
  },

  // "+1" Overlay Badge
  plusOneBadge: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    top: 0,
    backgroundColor: 'rgba(0,0,0,0.7)',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: darkTheme.radiusMd,
  },

  plusOneText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: 'bold',
  },
});

