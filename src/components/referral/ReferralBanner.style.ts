import { StyleSheet } from 'react-native';
import { Theme } from '../../constants/theme';

export const getReferralBannerStyles = (theme: Theme) =>
  StyleSheet.create({
    banner: {
      width: '100%',
      paddingHorizontal: theme.spacingMd,
      paddingVertical: theme.spacingLg,
      marginBottom: theme.spacingMd,
    },
    bannerTitle: {
      color: '#FFFFFF',
      fontSize: 28,
      fontFamily: theme.bold,
      marginBottom: 8,
    },
    bannerSubtitle: {
      color: 'rgba(255,255,255,0.9)',
      fontSize: 14,
      lineHeight: 22,
      fontFamily: theme.regular,
    },
  });
