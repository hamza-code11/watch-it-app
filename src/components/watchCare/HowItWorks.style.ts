import { StyleSheet } from 'react-native';
import { Theme } from '../../constants/theme';

export const getHowItWorksStyles = (theme: Theme) =>
  StyleSheet.create({
    // Section Container
    container: {
      paddingHorizontal: theme.spacingSm,
      paddingVertical: theme.spacingLg,
    },

    // Section Heading
    sectionTitle: {
      paddingHorizontal: theme.spacingSm,
      color: theme.textPrimary,
      fontSize: 24,
      fontFamily: theme.bold,
      marginBottom: 4,
    },
    sectionSubtitle: {
      paddingHorizontal: theme.spacingSm,
      color: theme.textMuted,
      fontSize: 14,
      fontFamily: theme.regular,
      marginBottom: theme.spacingMd,
    },

    // Steps row: circles + dashed connector line, side by side
    stepsRow: {
      flexDirection: 'row',
      alignItems: 'flex-start',
      justifyContent: 'space-between',
      position: 'relative',
    },

    // Dashed line connecting the circles — sits behind the badges
    connectorLine: {
      position: 'absolute',
      top: 19, // = numberBadge height / 2, adjust together if badge size changes
      left: 20,
      right: 20,
      height: 0,
      borderTopWidth: 1,
      borderStyle: 'dashed',
      borderTopColor: theme.accentSecondary + '55', // faint gold
      zIndex: 0,
    },

    // Single step column (badge + text, centered)
    stepColumn: {
      flex: 1,
      alignItems: 'center',
      paddingHorizontal: 4,
      zIndex: 1,
    },

    // Number badge (gold outline circle)
    numberBadge: {
      width: 40,
      height: 40,
      borderRadius: 20,
      backgroundColor: theme.bgInput, 
      borderWidth: 1.5,
      borderColor: theme.accentSecondary,
      alignItems: 'center',
      justifyContent: 'center',
      marginBottom: 10,
    },
    numberText: {
      color: theme.accentSecondary,
      fontSize: 16,
      fontFamily: theme.bold,
    },

    // Step title + description (centered under each circle)
    stepTitle: {
      color: theme.textPrimary,
      fontSize: 12,
      fontFamily: theme.bold,
      marginBottom: 3,
      textAlign: 'center',
    },
    stepDescription: {
      color: theme.textMuted,
      fontSize: 10,
      lineHeight: 15,
      fontFamily: theme.regular,
      textAlign: 'center',
    },
  });
