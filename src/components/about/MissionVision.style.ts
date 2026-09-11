import { StyleSheet } from 'react-native';
import { Theme } from '../../constants/theme';

export const getMissionVisionStyles = (theme: Theme) =>
  StyleSheet.create({
    container: {
      paddingHorizontal: theme.spacingMd,
      paddingVertical: theme.spacingMd,
    },
    title: {
      color: theme.textPrimary,
      fontSize: 24,
      fontFamily: theme.bold,
      marginBottom: 8,
    },
    subtitle: {
      color: theme.textSecondary,
      fontSize: 14,
      lineHeight: 20,
      marginBottom: 16,
      fontFamily: theme.bold,
    },
    sectionTitle: {
      color: theme.textPrimary,
      fontSize: 18,
      fontFamily: theme.bold,
      marginBottom: 8,
    },
    sectionText: {
      color: theme.textMuted,
      fontSize: 12,
      lineHeight: 22,
      marginBottom: 16,
      fontFamily: theme.regular,
    },
  });
  