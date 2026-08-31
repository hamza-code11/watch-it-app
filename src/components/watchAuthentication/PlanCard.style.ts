import { StyleSheet } from 'react-native';
import { Theme } from '../../constants/theme';

export const getPlanCardStyles = (theme: Theme) =>
  StyleSheet.create({
    planCard: {
      width: 280,
      backgroundColor: theme.bgCard,
      borderRadius: theme.radiusXl,
      padding: theme.spacingLg,
      marginRight: theme.spacingMd,
      borderWidth: 1,
      borderColor: theme.borderColor,
    },
    
    // Icon aur Heading Ek Hi Row
    planHeader: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: 10,
      marginBottom: theme.spacingMd,
    },
    
    planIcon: {
      width: 28,
      height: 28,
      borderRadius: 14,
      backgroundColor: theme.accentUltraLight,
      alignItems: 'center',
      justifyContent: 'center',
    },
    
    planName: {
      color: theme.textPrimary,
      fontSize: 16,
      fontWeight: 'bold',
    },

    planPrice: {
      color: theme.accentPrimary,
      fontSize: 20,
      fontWeight: 'bold',
      marginBottom: 2,
    },
    planDuration: {
      color: theme.textMuted,
      fontSize: 12,
      marginBottom: theme.spacingMd,
    },
    planDescription: {
      color: theme.textSecondary,
      fontSize: 13,
      lineHeight: 20,
      marginBottom: theme.spacingMd,
    },
    planFeatures: {
      marginBottom: 0, // Button remove hone ki wajah se margin bhi hata diya
    },
    planFeature: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: 8,
      marginBottom: 8,
    },
    planFeatureText: {
      color: theme.textMuted,
      fontSize: 13,
    },
  });
  