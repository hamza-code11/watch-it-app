import { StyleSheet } from 'react-native';
import { Theme } from '../../constants/theme';

export const getBannerStyles = (theme: Theme) =>
  StyleSheet.create({
    banner: {
      width: '100%',
      paddingVertical: theme.spacingLg,
      paddingHorizontal: theme.spacingMd,
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
      fontFamily: theme.bold,
    },
    bannerTitle: {
      color: '#FFFFFF',
      fontSize: 28,
      fontFamily: theme.bold,
      marginBottom: theme.spacingXs,
    },
    bannerSubtitle: {
      color: 'rgba(255,255,255,0.9)',
      fontSize: 12,
      lineHeight: 20,
      fontFamily: theme.regular,
    },

    // Trust Row (3 items in one row)
    trustRow: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      gap: 8,
      marginTop: theme.spacingMd,
    },
    trustItem: {
      flex: 1,
      alignItems: 'center',
      gap: 4,
    },
    trustTitle: {
      color: '#FFFFFF',
      fontSize: 11,
      fontFamily: theme.bold,
      textAlign: 'center',
    },
    trustSubtitle: {
      color: 'rgba(255,255,255,0.7)',
      fontSize: 9.5,
      lineHeight: 13,
      fontFamily: theme.regular,
      textAlign: 'center',
    },
  });
  