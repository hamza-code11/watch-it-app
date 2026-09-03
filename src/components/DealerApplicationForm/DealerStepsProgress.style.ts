import { StyleSheet } from 'react-native';
import { Theme } from '../../constants/theme';

export const getDealerStepsProgressStyles = (theme: Theme) =>
  StyleSheet.create({
    container: {
      paddingHorizontal: theme.spacingLg,
      marginBottom: theme.spacingLg,
    },
    
    // Header / Step Counter
    stepTitle: {
      color: theme.textPrimary,
      fontSize: 14,
      fontWeight: '600',
      textAlign: 'center',
      marginBottom: 16,
      letterSpacing: 0.5,
    },
    stepTitleHighlight: {
      color: theme.accentPrimary,
      fontWeight: '800',
    },

    // Main Row
    progressRow: {
      flexDirection: 'row',
      alignItems: 'flex-start',
      justifyContent: 'center',
      marginTop: 20,
    },

    // Single Step Item
    stepItem: {
      alignItems: 'center',
      flex: 1,
    },

    // Connector Line (Flexible width)
    connectorLine: {
      position: 'absolute',
      top: 18,
      height: 2,
      left: '50%',
      right: '-50%',
      zIndex: 1,
    },
    connectorActive: {
      backgroundColor: '#32D583', // Green Gradient ke liye base color
      opacity: 1,
    },
    connectorInactive: {
      backgroundColor: theme.borderLight,
      opacity: 0.6,
    },

    // Circle Wrapper (Ring effect ke liye)
    circleWrapper: {
      width: 44,
      height: 44,
      borderRadius: 22,
      alignItems: 'center',
      justifyContent: 'center',
      marginBottom: 6,
      zIndex: 2,
      borderWidth: 2,
      borderColor: 'transparent',
    },
    circleActive: {
      // White Gradient Wrapper
      borderColor: '#FFFFFF',
      shadowColor: '#FFFFFF',
      shadowOffset: { width: 0, height: 0 },
      shadowOpacity: 0.3,
      shadowRadius: 10,
      elevation: 6,
    },
    circleCompleted: {
      // Green Gradient Wrapper
      borderColor: '#32D583',
      shadowColor: '#32D583',
      shadowOffset: { width: 0, height: 0 },
      shadowOpacity: 0.3,
      shadowRadius: 6,
      elevation: 4,
    },
    circleInactive: {
      backgroundColor: theme.bgTertiary,
      borderColor: theme.borderColor,
    },

    // Inner Circle Content
    circleContent: {
      width: 34,
      height: 34,
      borderRadius: 17,
      alignItems: 'center',
      justifyContent: 'center',
    },
    activeStepNumber: {
      color: '#000000', // White gradient par black number
      fontSize: 15,
      fontWeight: '800',
    },
    completedCheck: {
      color: '#FFFFFF', // Green gradient par white check
    },
    inactiveStepNumber: {
      color: theme.textMuted,
      fontSize: 15,
      fontWeight: '600',
    },

    // Labels
    stepLabel: {
      fontSize: 11,
      fontWeight: '500',
      textAlign: 'center',
      letterSpacing: 0.3,
    },
    stepLabelActive: {
      color: '#FFFFFF', // White text for active
      fontWeight: '700',
    },
    stepLabelCompleted: {
      color: '#32D583', // Green for completed
      fontWeight: '600',
    },
    stepLabelInactive: {
      color: theme.textMuted,
      fontWeight: '400',
    },
  });
