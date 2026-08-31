import { StyleSheet } from 'react-native';
import { Theme } from '../../constants/theme';

export const getPrivacyBannerStyles = (theme: Theme) =>
  StyleSheet.create({
    banner: {
      width: '100%',
      paddingHorizontal: theme.spacingLg,
      paddingVertical: theme.spacingLg,
      marginBottom: 20,
    },
    bannerTitle: {
      color: '#FFFFFF',
      fontSize: 32,
      fontWeight: 'bold',
      fontFamily: theme.fontFamily,
      marginBottom: 8,
    },
    bannerIntro: {
      color: 'rgba(255,255,255,0.9)',
      fontSize: 14,
      lineHeight: 22,
      marginBottom: 12,
    },
    lastUpdatedRow: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: 6,
    },
    lastUpdatedText: {
      color: '#60A5FA',
      fontSize: 13,
      fontWeight: '600',
    },
  });

