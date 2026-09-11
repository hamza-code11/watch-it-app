import { StyleSheet } from 'react-native';
import { Theme } from '../../constants/theme';

export const getMembershipBenefitsStyles = (theme: Theme) =>
  StyleSheet.create({
    container: {
      paddingHorizontal: theme.spacingSm,
      marginBottom: theme.spacingLg,
    },
    sectionTitle: {
      color: theme.textPrimary,
      fontSize: 20,
      fontFamily: theme.bold,
      textAlign: 'center',
      marginBottom: theme.spacingMd,
    },
    benefitItem: {
      backgroundColor: theme.bgCard,
      borderRadius: theme.radiusMd,
      padding: theme.spacingMd,
      marginBottom: theme.spacingSm,
      borderWidth: 1,
      borderColor: theme.borderColor,
      flexDirection: 'row',
      alignItems: 'center',
      gap: 12,
    },
    benefitIcon: {
      width: 40,
      height: 40,
      borderRadius: 20,
      backgroundColor: theme.accentUltraLight,
      alignItems: 'center',
      justifyContent: 'center',
    },
    benefitInfo: {
      flex: 1,
    },
    benefitTitle: {
      color: theme.textPrimary,
      fontSize: 14,
      fontFamily: theme.bold,
    },
    benefitDescription: {
      color: theme.textMuted,
      fontSize: 12,
      marginTop: 2,
      fontFamily: theme.regular,
    },
    benefitArrow: {
      alignItems: 'flex-end',
    },
  });
  