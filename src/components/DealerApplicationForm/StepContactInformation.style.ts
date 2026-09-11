import { StyleSheet } from 'react-native';
import { Theme } from '../../constants/theme';

export const getStepContactStyles = (theme: Theme) =>
  StyleSheet.create({
    container: {
      paddingHorizontal: theme.spacingSm,
    },
    card: {
      backgroundColor: theme.bgCard,
      borderRadius: theme.radiusLg,
      padding: theme.spacingMd,
      borderWidth: 1,
      borderColor: theme.borderColor,
    },
    title: {
      color: theme.textPrimary,
      fontSize: 18,
      fontFamily: theme.bold,
      marginBottom: 4,
    },
    subtitle: {
      color: theme.textMuted,
      fontSize: 13,
      marginBottom: 16,
      fontFamily: theme.regular,
    },
    // Sab inputs ek nayi row mein
    inputContainer: {
      marginBottom: 12,
    },
    label: {
      color: theme.textSecondary,
      fontSize: 13,
      fontFamily: theme.bold,
      marginBottom: 4,
    },
    input: {
      backgroundColor: theme.bgInput,
      borderRadius: theme.radiusMd,
      paddingHorizontal: 12,
      paddingVertical: 10,
      color: theme.textPrimary,
      fontSize: 14,
      borderWidth: 1,
      borderColor: theme.borderLight,
      fontFamily: theme.regular,
    },
  });
  