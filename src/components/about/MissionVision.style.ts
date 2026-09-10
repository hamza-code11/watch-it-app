import { StyleSheet } from 'react-native';
import { Theme } from '../../constants/theme';

export const getMissionVisionStyles = (theme: Theme) =>
  StyleSheet.create({
    container: {
      paddingHorizontal: theme.spacingLg,
      paddingVertical: theme.spacingLg,
    },
    title: {
      color: theme.textPrimary,
      fontSize: 24,
      fontWeight: 'bold',
      fontFamily: theme.fontFamily,
      marginBottom: 8,
    },
    subtitle: {
      color: theme.textSecondary,
      fontSize: 14,
      lineHeight: 20,
      marginBottom: 16,
    },
    sectionTitle: {
      color: theme.textPrimary,
      fontSize: 18,
      fontWeight: 'bold',
      marginBottom: 8,
    },
    sectionText: {
      color: theme.textMuted,
      fontSize: 14,
      lineHeight: 22,
      marginBottom: 16,
    },
  });
  