// DealerBenefitsList.style.ts
import { StyleSheet } from 'react-native';
import { Theme } from '../../constants/theme';

export const getDealerBenefitsStyles = (theme: Theme) =>
  StyleSheet.create({
    container: {
      paddingHorizontal: theme.spacingLg,
      marginTop: theme.spacingLg,
    },
    benefitCard: {
      backgroundColor: 'rgba(20, 22, 35, 0.8)',
      borderRadius: theme.radiusXl,
      padding: theme.spacingMd,
      marginBottom: theme.spacingSm,
      borderWidth: 1,
      borderColor: theme.borderColor,
      flexDirection: 'row',
      alignItems: 'center',
      gap: 14,
    },
    benefitIcon: {
      width: 44,
      height: 44,
      borderRadius: 22,
      backgroundColor: theme.accentUltraLight,
      alignItems: 'center',
      justifyContent: 'center',
    },
    benefitInfo: {
      flex: 1,
    },
    benefitTitle: {
      color: theme.textPrimary,
      fontSize: 16,
      fontWeight: 'bold',
    },
    benefitDescription: {
      color: theme.textMuted,
      fontSize: 13,
      marginTop: 4,
    },
  });
  