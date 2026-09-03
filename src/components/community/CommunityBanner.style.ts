import { StyleSheet } from 'react-native';
import { Theme } from '../../constants/theme';

export const getCommunityBannerStyles = (theme: Theme) =>
  StyleSheet.create({
    banner: {
      width: '100%',
      paddingHorizontal: theme.spacingLg,
      paddingVertical: theme.spacingLg,
    },
    title: {
      color: '#FFFFFF',
      fontSize: 28,
      fontWeight: 'bold',
      fontFamily: theme.fontFamily,
      marginBottom: 8,
    },
    subtitle: {
      color: 'rgba(255,255,255,0.9)',
      fontSize: 14,
      lineHeight: 22,
    },
  });
  