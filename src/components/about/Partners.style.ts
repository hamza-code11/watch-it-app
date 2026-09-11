import { StyleSheet } from 'react-native';
import { Theme } from '../../constants/theme';

export const getPartnersStyles = (theme: Theme) =>
  StyleSheet.create({
    container: {
      paddingHorizontal: theme.spacingSm,
      paddingVertical: theme.spacingMd,
    },
    label: {
      color: theme.accentPrimary,
      fontSize: 12,
      fontFamily: theme.bold,
      textTransform: 'uppercase',
      letterSpacing: 1,
      marginBottom: 8,
      paddingHorizontal: theme.spacingSm,
    },
    title: {
      color: theme.textPrimary,
      fontSize: 28,
      fontFamily: theme.bold,
      marginBottom: 12,
      paddingHorizontal: theme.spacingSm,
    },
    description: {
      color: theme.textSecondary,
      fontSize: 12,
      lineHeight: 22,
      marginBottom: 24,
      fontFamily: theme.regular,
      paddingHorizontal: theme.spacingSm,
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
      backgroundColor: theme.bgCard,
    },
    brandText: {
      color: theme.textPrimary,
      fontSize: 12,
      fontFamily: theme.regular,
      textAlign: 'center',
    },
  });
  