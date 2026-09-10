import { StyleSheet } from 'react-native';
import { Theme } from '../../constants/theme';

export const getPartnersStyles = (theme: Theme) =>
  StyleSheet.create({
    container: {
      paddingHorizontal: theme.spacingLg,
      paddingVertical: theme.spacingLg,
    },
    label: {
      color: theme.accentPrimary,
      fontSize: 13,
      fontWeight: 'bold',
      textTransform: 'uppercase',
      letterSpacing: 1,
      marginBottom: 8,
    },
    title: {
      color: theme.textPrimary,
      fontSize: 28,
      fontWeight: 'bold',
      fontFamily: theme.fontFamily,
      marginBottom: 12,
    },
    description: {
      color: theme.textSecondary,
      fontSize: 14,
      lineHeight: 22,
      marginBottom: 24,
    },
    grid: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      justifyContent: 'space-between',
      borderWidth: 1,
      borderColor: theme.borderColor,
      borderRadius: theme.radiusLg,
      overflow: 'hidden',
    },
    brandItem: {
      width: '33.33%', // 3 brands in a row
      alignItems: 'center',
      justifyContent: 'center',
      paddingVertical: 16,
      borderRightWidth: 1,
      borderBottomWidth: 1,
      borderColor: theme.borderColor,
    },
    brandText: {
      color: theme.textPrimary,
      fontSize: 13,
      fontWeight: '600',
      fontFamily: theme.fontFamily,
      fontStyle: 'italic',
      textAlign: 'center',
    },
  });
  