// ReferralStats.style.ts
import { StyleSheet } from 'react-native';
import { Theme } from '../../constants/theme';

export const getReferralStatsStyles = (theme: Theme) =>
  StyleSheet.create({
    statsRow: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      paddingHorizontal: theme.spacingSm,
      marginBottom: theme.spacingSm,
    },
    statCard: {
      width: '31%',
      backgroundColor: theme.bgCard,
      borderRadius: theme.radiusLg,
      padding: theme.spacingMd,
      borderWidth: 1,
      borderColor: theme.borderColor,
      alignItems: 'center',
    },
    statIcon: {
      width: 36,
      height: 36,
      borderRadius: 18,
      alignItems: 'center',
      justifyContent: 'center',
      marginBottom: 8,
    },
    statNumber: {
      color: theme.textPrimary,
      fontSize: 22,
      fontFamily: theme.bold,
    },
    statLabel: {
      color: theme.textMuted,
      fontSize: 12,
      textAlign: 'center',
      marginTop: 2,
      fontFamily: theme.regular,
    },
  });
  