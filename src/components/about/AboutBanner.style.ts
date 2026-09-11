import { StyleSheet } from 'react-native';
import { Theme } from '../../constants/theme';

export const getAboutBannerStyles = (theme: Theme) =>
  StyleSheet.create({
    banner: {
      paddingHorizontal: theme.spacingMd,
      paddingVertical: theme.spacingLg,
      width: '100%',
    },
    title: {
      color: '#FFFFFF',
      fontSize: 28,
      fontFamily: theme.bold,
      marginBottom: 8,
    },
    description: {
      color: 'rgba(255,255,255,0.9)',
      fontSize: 12,
      lineHeight: 22,
      marginBottom: 20,
      fontFamily: theme.regular,
    },

    // Stats Row (Single Row)
    statsRow: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      width: '100%',
    },
    statItem: {
      alignItems: 'center',
    },
    statNumber: {
      color: '#FFFFFF',
      fontSize: 14,
      fontFamily: theme.bold,
    },
    statLabel: {
      color: 'rgba(255,255,255,0.8)',
      fontSize: 9,
      marginTop: 2,
      fontFamily: theme.regular,
    },
  });
  