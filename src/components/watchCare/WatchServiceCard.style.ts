import { StyleSheet } from 'react-native';
import { Theme } from '../../constants/theme';

export const getServiceCardStyles = (theme: Theme) =>
  StyleSheet.create({
    serviceCard: {
      width: 240,
      backgroundColor: theme.bgCard,
      borderRadius: theme.radiusXl,
      padding: theme.spacingLg,
      marginRight: theme.spacingMd,
      borderWidth: 1,
      borderColor: theme.borderColor,
    },
    
    // Icon aur Heading Ek Hi Row Mein
    serviceHeader: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: 10,
      marginBottom: theme.spacingMd,
    },
    
    serviceIcon: {
      width: 32,
      height: 32,
      borderRadius: 16,
      backgroundColor: theme.accentUltraLight,
      alignItems: 'center',
      justifyContent: 'center',
    },
    
    serviceName: {
      color: theme.textPrimary,
      fontSize: 20, // Heading ka size barha diya
      fontWeight: 'bold',
    },

    servicePrice: {
      color: theme.accentPrimary,
      fontSize: 18,
      fontWeight: 'bold',
      marginBottom: 2,
    },
    priceType: {
      color: theme.textMuted,
      fontSize: 11,
    },
    serviceFeatures: {
      marginTop: theme.spacingMd,
    },
    serviceFeature: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: 6,
      marginBottom: 6,
    },
    serviceFeatureText: {
      color: theme.textMuted,
      fontSize: 13,
    },
  });
  