import { StyleSheet } from 'react-native';
import { Theme } from '../../constants/theme';

export const getReferralBannerStyles = (theme: Theme) =>
  StyleSheet.create({
    banner: {
      width: '100%',
      paddingHorizontal: theme.spacingLg,
      paddingVertical: theme.spacingLg,
      marginBottom: 20,
    },
    bannerTitle: {
      color: '#FFFFFF',
      fontSize: 28,
      fontWeight: 'bold',
      fontFamily: theme.fontFamily,
      marginBottom: 8,
    },
    bannerSubtitle: {
      color: 'rgba(255,255,255,0.9)',
      fontSize: 14,
      lineHeight: 22,
    },
  });
