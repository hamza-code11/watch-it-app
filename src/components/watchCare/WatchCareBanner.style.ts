// WatchCareBanner.style.ts
import { StyleSheet } from 'react-native';
import { Theme } from '../../constants/theme';

export const getBannerStyles = (theme: Theme) =>
  StyleSheet.create({
    banner: {
      width: '100%',
      paddingVertical: theme.spacingMd,
      paddingHorizontal: theme.spacingLg,
    },
    backBtn: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: 6,
      paddingHorizontal: 12,
      paddingVertical: 8,
      borderRadius: theme.radiusFull,
      backgroundColor: 'rgba(255,255,255,0.1)',
      alignSelf: 'flex-start',
      marginBottom: theme.spacingSm,
    },
    backBtnText: {
      color: '#FFFFFF',
      fontSize: 14,
      fontWeight: '600',
    },
    bannerTitle: {
      color: '#FFFFFF',
      fontSize: 28,
      fontWeight: 'bold',
      fontFamily: theme.fontFamily,
      marginBottom: theme.spacingXs,
    },
    bannerSubtitle: {
      color: 'rgba(255,255,255,0.9)',
      fontSize: 14,
      lineHeight: 20,
    },
  });

  