import { StyleSheet } from 'react-native';
import { Theme } from '../../constants/theme';

export const getServiceCardStyles = (theme: Theme) =>
  StyleSheet.create({
    // Card (image background container)
    serviceCard: {
      width: '48%',
      height: 180,
      borderRadius: theme.radiusLg,
      overflow: 'hidden',
      marginBottom: theme.spacingSm,
      justifyContent: 'flex-end',
      borderWidth: 1,
      borderColor: 'rgba(212, 175, 55, 0.25)',
    },

    // Image fills entire card
    serviceCardImage: {
      width: '100%',
      height: '100%',
    },

    // Gradient overlay (transparent top -> dark bottom, image saaf dikhay upar se)
    gradientOverlay: {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
    },

    // Content wrapper
    cardContent: {
      flex: 1,
      padding: theme.spacingMd,
      justifyContent: 'space-between',
    },

    // Icon circle (gold outline)
    iconCircle: {
      width: 32,
      height: 32,
      borderRadius: 18,
      borderWidth: 1.2,
      borderColor: theme.accentPrimary,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: 'rgba(212, 175, 55, 0.1)',
      marginBottom: 8,
    },

    // Service name
    serviceName: {
      color: '#FFFFFF',
      fontSize: 16,
      fontFamily: theme.bold,
      marginBottom: 4,
      letterSpacing: 0.2,
    },

    // Description
    serviceDescription: {
      color: 'rgba(255,255,255,0.7)',
      fontSize: 10,
      lineHeight: 15,
      fontFamily: theme.regular,
      flex: 1,
    },

    // Bottom row: price + arrow
    bottomRow: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      marginTop: 8,
    },
    servicePrice: {
      color: theme.accentSecondary,
      fontSize: 13,
      fontFamily: theme.bold,
    },
    arrowBtn: {
      width: 28,
      height: 28,
      borderRadius: 16,
      backgroundColor: theme.accentPrimary,
      alignItems: 'center',
      justifyContent: 'center',
      shadowColor: '#faf8f8',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.25,
      shadowRadius: 4,
      elevation: 3,
    },
  });
  