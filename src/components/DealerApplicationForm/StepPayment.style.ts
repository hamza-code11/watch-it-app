// StepPayment.style.ts
import { StyleSheet } from 'react-native';
import { Theme } from '../../constants/theme';

export const getStepPaymentStyles = (theme: Theme) =>
  StyleSheet.create({
    container: {
      paddingHorizontal: theme.spacingLg,
    },
    card: {
      backgroundColor: theme.bgCard,
      borderRadius: theme.radiusXl,
      padding: theme.spacingMd,
      borderWidth: 1,
      borderColor: theme.borderColor,
    },
    title: {
      color: theme.textPrimary,
      fontSize: 18,
      fontWeight: 'bold',
      marginBottom: 4,
    },
    subtitle: {
      color: theme.textMuted,
      fontSize: 13,
      marginBottom: 16,
    },
    feeBox: {
      backgroundColor: theme.bgInput,
      borderRadius: theme.radiusMd,
      padding: theme.spacingMd,
      marginBottom: 12,
    },
    feeLabel: {
      color: theme.textMuted,
      fontSize: 12,
    },
    feeAmount: {
      color: theme.textPrimary,
      fontSize: 24,
      fontWeight: 'bold',
      marginTop: 4,
    },
    paymentMethodRow: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: 10,
      marginBottom: 12,
      padding: 12,
      borderRadius: theme.radiusMd,
      borderWidth: 1,
      borderColor: theme.borderLight,
    },
    paymentMethodSelected: {
      backgroundColor: theme.accentUltraLight,
      borderColor: theme.accentPrimary,
    },
    paymentIcon: {
      width: 24,
      height: 24,
    },
    paymentText: {
      color: theme.textPrimary,
      fontSize: 14,
      fontWeight: '600',
      flex: 1,
    },
  });
  