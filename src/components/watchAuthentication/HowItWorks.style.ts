import { StyleSheet } from 'react-native';
import { Theme } from '../../constants/theme';

export const getHowItWorksStyles = (theme: Theme) =>
  StyleSheet.create({
    // Section Container
    container: {
      paddingHorizontal: theme.spacingLg,
      paddingVertical: theme.spacingLg,
      marginTop: theme.spacingLg,
    },

    // Small Label
    sectionLabel: {
      color: theme.accentPrimary,
      fontSize: 12,
      fontWeight: '700',
      textTransform: 'uppercase',
      letterSpacing: 1,
      marginBottom: theme.spacingXs,
    },

    // Heading
    sectionTitle: {
      color: theme.textPrimary,
      fontSize: 26,
      fontWeight: 'bold',
      fontFamily: theme.fontFamily,
      marginBottom: 4,
    },

    // Subtitle
    sectionSubtitle: {
      color: theme.textMuted,
      fontSize: 14,
      marginBottom: theme.spacingLg,
    },

    // Timeline Vertical Line (Dotted)
    timelineContainer: {
      position: 'relative',
    },
    timelineLine: {
      position: 'absolute',
      left: 15,
      top: 10,
      bottom: 10,
      width: 2,
      borderLeftWidth: 2,
      borderStyle: 'dashed',
      borderColor: theme.borderColor,
    },

    // Step Item
    stepItem: {
      flexDirection: 'row',
      marginBottom: theme.spacingLg,
      paddingLeft: 0,
    },

    // Number Circle
    stepNumberCircle: {
      width: 32,
      height: 32,
      borderRadius: 16,
      backgroundColor: theme.accentPrimary,
      alignItems: 'center',
      justifyContent: 'center',
      marginRight: theme.spacingMd,
      zIndex: 10,
    },
    stepNumber: {
      color: '#FFFFFF',
      fontSize: 13,
      fontWeight: 'bold',
    },

    // Step Content
    stepContent: {
      flex: 1,
      paddingTop: 4,
    },
    stepTitle: {
      color: theme.textPrimary,
      fontSize: 16,
      fontWeight: 'bold',
      marginBottom: 4,
    },
    stepDescription: {
      color: theme.textMuted,
      fontSize: 14,
      lineHeight: 20,
    },
  });

  