import { StyleSheet } from 'react-native';
import { Theme } from '../../constants/theme';

export const getImageGalleryStyles = (theme: Theme) =>
  StyleSheet.create({
    container: {
      width: '100%',
      height: 340, // pehle 460 tha — reduce kar diya
      position: 'relative',
      overflow: 'hidden',
    },

    // Full width/height background image — no rounded corners
    mainImage: {
      width: '100%',
      height: '100%',
      borderRadius: 0,
    },

    // Top Buttons (Back, Heart, Share) — floating over image
    topRow: {
      position: 'absolute',
      top: 20,
      left: 0,
      right: 0,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      paddingHorizontal: 20,
      zIndex: 10,
    },
    iconBtn: {
      width: 36,
      height: 36,
      borderRadius: 18,
      backgroundColor: 'rgba(0,0,0,0.35)',
      alignItems: 'center',
      justifyContent: 'center',
      borderWidth: 1,
      borderColor: 'rgba(255,255,255,0.2)',
    },
    iconBtnGroup: {
      flexDirection: 'row',
      gap: 10,
    },

    // Vertical Thumbnails — floating on left over image, chota size
    thumbnailsColumn: {
      position: 'absolute',
      left: 8, // pehle 16 tha — thora aur left
      top: 70,
      bottom: 44,
      width: 44, // pehle 64 tha — chota size
      zIndex: 10,
    },
    thumbnail: {
      width: 44,
      height: 44,
      borderRadius: theme.radiusMd,
      backgroundColor: theme.bgTertiary,
      borderWidth: 1,
      borderColor: 'rgba(255,255,255,0.2)',
      overflow: 'hidden',
    },
    activeThumbnail: {
      borderWidth: 2,
      borderColor: '#3B82F6',
    },
    moreThumbnail: {
      width: 44,
      height: 44,
      borderRadius: theme.radiusMd,
      backgroundColor: 'rgba(0,0,0,0.5)',
      alignItems: 'center',
      justifyContent: 'center',
      borderWidth: 1,
      borderColor: 'rgba(255,255,255,0.2)',
    },
    moreText: {
      color: '#FFFFFF',
      fontSize: 12,
      fontWeight: 'bold',
    },

    // Pagination Dots — floating at bottom over image
    dotsRow: {
      position: 'absolute',
      bottom: 14,
      left: 0,
      right: 0,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 6,
      zIndex: 10,
    },
    dot: {
      width: 6,
      height: 6,
      borderRadius: 3,
      backgroundColor: 'rgba(255,255,255,0.4)',
    },
    activeDot: {
      width: 8,
      height: 8,
      borderRadius: 4,
      backgroundColor: '#3B82F6',
    },
  });

  