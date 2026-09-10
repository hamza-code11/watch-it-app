import { StyleSheet } from 'react-native';
import { Theme } from '../../constants/theme';

export const getAboutBannerStyles = (theme: Theme) =>
  StyleSheet.create({
    banner: {
      paddingHorizontal: theme.spacingLg,
      paddingVertical: theme.spacingLg,
      width: '100%',
    },
    title: {
      color: '#FFFFFF',
      fontSize: 28,
      fontWeight: 'bold',
      fontFamily: theme.fontFamily,
      marginBottom: 8,
    },
    description: {
      color: 'rgba(255,255,255,0.9)',
      fontSize: 14,
      lineHeight: 22,
      marginBottom: 20,
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
      fontSize: 16,
      fontWeight: 'bold',
    },
    statLabel: {
      color: 'rgba(255,255,255,0.8)',
      fontSize: 10,
      marginTop: 2,
    },
  });
  