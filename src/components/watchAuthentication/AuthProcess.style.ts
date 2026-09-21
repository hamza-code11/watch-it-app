import { StyleSheet } from 'react-native';
import { Theme } from '../../constants/theme';

export const getProcessStyles = (theme: Theme) =>
  StyleSheet.create({
    container: { margin: theme.spacingSm },
    heading: {
      color: '#FFFFFF',
      fontSize: 18,
      fontFamily: theme.bold,
      marginBottom: theme.spacingSm,
    },
    stepsRow: {
      flexDirection: 'row',
      gap: 8,
    },
    step: { flex: 1 },
    stepNum: {
      color: theme.accentSecondary,
      fontSize: 16,
      fontFamily: theme.bold,
      marginBottom: 2,
    },
    stepTitle: {
      color: '#FFFFFF',
      fontSize: 11,
      fontFamily: theme.bold,
      marginBottom: 3,
    },
    stepDesc: {
      color: '#94A3B8',
      fontSize: 9,
      lineHeight: 13,
      fontFamily: theme.regular,
    },
    questionsBox: {
      marginTop: theme.spacingMd,
      padding: theme.spacingSm,
      backgroundColor: '#0E1626',
      borderRadius: theme.radiusMd,
      borderWidth: 1,
      borderColor: 'rgba(212, 175, 55, 0.15)',
    },
    questionsTitle: {
      color: '#FFFFFF',
      fontSize: 14,
      fontFamily: theme.bold,
    },
    questionsText: {
      color: '#94A3B8',
      fontSize: 11,
      fontFamily: theme.regular,
      marginTop: 2,
    },
  });
  