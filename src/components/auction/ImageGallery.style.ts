import { StyleSheet } from 'react-native';
import { Theme } from '../../constants/theme';

export const getImageGalleryStyles = (theme: Theme) =>
  StyleSheet.create({
    mainImage: {
      width: '100%',
      height: 320,
      backgroundColor: theme.bgSecondary,
    },
    thumbsRow: {
      paddingHorizontal: theme.spacingMd,
      paddingVertical: theme.spacingSm,
      gap: 10,
    },
    thumbWrap: {
      width: 64, height: 64,
      borderRadius: 10,
      overflow: 'hidden',
      borderWidth: 2,
      borderColor: 'transparent',
    },
    thumbActive: { borderColor: theme.accentPrimary },
    thumb: {
      width: '100%', height: '100%',
      backgroundColor: theme.bgSecondary,
    },
  });
  