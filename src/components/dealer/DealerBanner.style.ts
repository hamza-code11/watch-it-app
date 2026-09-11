// DealerBanner.style.ts
import { StyleSheet } from 'react-native';
import { Theme } from '../../constants/theme';

export const getDealerBannerStyles = (theme: Theme) =>
  StyleSheet.create({
    banner: {
      width: '100%',
      paddingHorizontal: theme.spacingLg,
      paddingVertical: theme.spacingLg,
    },
    label: {
      color: theme.accentPrimary,
      fontSize: 12,
      fontWeight: 'bold',
      textTransform: 'uppercase',
      letterSpacing: 1,
      marginBottom: 8,
    },
    title: {
      color: '#FFFFFF',
      fontSize: 28,
      fontFamily: theme.bold,
      lineHeight: 34,
      marginBottom: 8,
    },
    subtitle: {
      color: 'rgba(255,255,255,0.9)',
      fontSize: 12,
      lineHeight: 22,
      fontFamily: theme.regular,
    },
  });
  