import { StyleSheet } from 'react-native';
import { Theme } from '../../constants/theme';

export const getWhyChooseUsStyles = (theme: Theme) =>
  StyleSheet.create({
    // Section Container
    container: {
      paddingHorizontal: theme.spacingLg,
      paddingVertical: theme.spacingLg,
    },

    // Section Heading
    sectionTitle: {
      color: theme.textPrimary,
      fontSize: 24,
      fontWeight: 'bold',
      fontFamily: theme.fontFamily,
      marginBottom: 4,
    },
    sectionSubtitle: {
      color: theme.textMuted,
      fontSize: 14,
      marginBottom: theme.spacingLg,
    },

    // Features Grid (2 Columns)
    featuresGrid: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      justifyContent: 'space-between',
    },

    // Feature Item
    featureItem: {
      width: '48%',
      backgroundColor: theme.bgCard,
      borderRadius: theme.radiusXl,
      padding: theme.spacingMd,
      marginBottom: theme.spacingMd,
      borderWidth: 1,
      borderColor: theme.borderColor,
    },

    // Feature Icon
    featureIcon: {
      width: 40,
      height: 40,
      borderRadius: 20,
      backgroundColor: theme.accentUltraLight,
      alignItems: 'center',
      justifyContent: 'center',
      marginBottom: theme.spacingSm,
    },

    // Feature Title
    featureTitle: {
      color: theme.textPrimary,
      fontSize: 14,
      fontWeight: 'bold',
      marginBottom: 4,
    },

    // Feature Description
    featureDescription: {
      color: theme.textMuted,
      fontSize: 12,
      lineHeight: 18,
    },
  });

  