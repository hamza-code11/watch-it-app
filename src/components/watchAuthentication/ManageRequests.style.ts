import { StyleSheet } from 'react-native';
import { Theme } from '../../constants/theme';

export const getManageStyles = (theme: Theme) =>
  StyleSheet.create({
    container: {
      margin: theme.spacingSm,
      backgroundColor: '#0E1626',
      borderRadius: theme.radiusLg,
      padding: theme.spacingSm,
      borderWidth: 1,
      borderColor: 'rgba(212, 175, 55, 0.15)',
    },
    heading: {
      color: '#FFFFFF',
      fontSize: 16,
      fontFamily: theme.bold,
      marginBottom: 4,
    },
    text: {
      color: '#94A3B8',
      fontSize: 11,
      lineHeight: 16,
      fontFamily: theme.regular,
      marginBottom: 12,
    },
    button: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 8,
      backgroundColor: theme.accentPrimary,
      borderRadius: 10,
      paddingVertical: 11,
      paddingHorizontal: 14,
    },
    buttonText: {
      color: '#fefeff',
      fontSize: 13,
      fontFamily: theme.bold,
    },
  });
  