// ReferralStats.style.ts
import { StyleSheet } from 'react-native';
import { Theme } from '../../constants/theme';

export const getReferralStatsStyles = (theme: Theme) =>
  StyleSheet.create({
    statsRow: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      gap: 10,
      paddingHorizontal: theme.spacingLg,
      marginBottom: theme.spacingLg,
    },
    statCard: {
      width: '31%',
      backgroundColor: theme.bgCard,
      borderRadius: theme.radiusXl,
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
      fontWeight: 'bold',
    },
    statLabel: {
      color: theme.textMuted,
      fontSize: 12,
      textAlign: 'center',
      marginTop: 2,
    },
  });
  