import { StyleSheet } from 'react-native';
import { Theme } from '../../constants/theme';

const GOLD = '#8bbdd9';

export const getCommunityBannerStyles = (theme: Theme) =>
  StyleSheet.create({
    banner: {
      width: '100%',
      minHeight: 220,
      overflow: 'hidden',
      justifyContent: 'center',
    },
    overlay: {
      // No longer needed — kept in case you want it back
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
    },
    content: {
      paddingHorizontal: theme.spacingMd,
      paddingVertical: theme.spacingMd,
      maxWidth: '90%',
    },
    label: {
      color: GOLD,
      fontSize: 11,
      letterSpacing: 1.5,
      fontFamily: theme.bold,
      marginBottom: 8,
    },
    title: {
      color: '#FFFFFF',
      fontSize: 24,
      lineHeight: 30,
      fontFamily: theme.bold,
      marginBottom: 10,
    },
    titleHighlight: {
      color: GOLD,
    },
    subtitle: {
      color: 'rgba(255,255,255,0.85)',
      fontSize: 12,
      lineHeight: 20,
      fontFamily: theme.regular,
      marginBottom: 18,
    },
    button: {
      flexDirection: 'row',
      alignItems: 'center',
      alignSelf: 'flex-start',
      borderWidth: 1,
      borderColor: GOLD,
      borderRadius: 8,
      paddingHorizontal: 16,
      paddingVertical: 10,
      gap: 8,
    },
    buttonText: {
      color: GOLD,
      fontSize: 14,
      fontFamily: theme.bold,
    },
  });
