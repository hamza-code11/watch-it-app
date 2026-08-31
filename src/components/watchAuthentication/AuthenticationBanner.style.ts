import { StyleSheet } from 'react-native';
import { Theme } from '../../constants/theme';

export const getBannerStyles = (theme: Theme) =>
  StyleSheet.create({
    // Full Width, Dark Blue Gradient, Compact Height
    banner: {
      width: '100%',
      paddingVertical: theme.spacingMd, // Height aur compact ki
      paddingHorizontal: theme.spacingLg,
    },
    badge: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: 6,
      paddingHorizontal: 10,
      paddingVertical: 5,
      borderRadius: theme.radiusFull,
      backgroundColor: 'rgba(255,255,255,0.2)',
      alignSelf: 'flex-start',
      marginBottom: theme.spacingXs,
    },
    badgeText: {
      color: '#FFFFFF',
      fontSize: 12,
      fontWeight: '700',
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
