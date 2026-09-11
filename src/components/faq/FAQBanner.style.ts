import { StyleSheet } from 'react-native';
import { Theme } from '../../constants/theme';

export const getFAQBannerStyles = (theme: Theme) =>
  StyleSheet.create({
    banner: {
      width: '100%',
      paddingHorizontal: theme.spacingMd,
      paddingVertical: theme.spacingLg,
    },
    title: {
      color: '#FFFFFF',
      fontSize: 28,
      fontFamily: theme.bold,
      marginBottom: 8,
    },
    intro: {
      color: 'rgba(255,255,255,0.9)',
      fontSize: 12,
      lineHeight: 22,
      fontFamily: theme.regular,
    },
  });
  