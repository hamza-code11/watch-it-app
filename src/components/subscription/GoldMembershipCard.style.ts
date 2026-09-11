import { StyleSheet } from 'react-native';
import { Theme } from '../../constants/theme';

export const getGoldMembershipCardStyles = (theme: Theme) =>
  StyleSheet.create({
    // Container
    container: {
      marginHorizontal: theme.spacingSm,
      marginTop: theme.spacingSm,
      marginBottom: theme.spacingMd,
    },

    // Premium Card
    card: {
      borderRadius: theme.radiusLg,
      padding: theme.spacingMd,
      borderWidth: 1,
      borderColor: 'rgba(253, 176, 34, 0.3)', // Subtle gold border
      backgroundColor: 'rgba(20, 22, 35, 0.8)',
      overflow: 'hidden',
      position: 'relative',
    },

    // Background Glow Effect
    glowEffect: {
      position: 'absolute',
      width: 200,
      height: 200,
      borderRadius: 100,
      backgroundColor: 'rgba(253, 176, 34, 0.1)',
      top: -80,
      right: -80,
    },

    // Card Header (Icon + Title)
    cardHeader: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: 12,
      marginBottom: 16,
    },
    crownContainer: {
      width: 48,
      height: 48,
      borderRadius: 24,
      borderWidth: 1,
      borderColor: 'rgba(253, 176, 34, 0.6)',
      backgroundColor: 'rgba(253, 176, 34, 0.15)',
      alignItems: 'center',
      justifyContent: 'center',
    },
    cardTitle: {
      color: '#FDB022',
      fontSize: 20,
      fontFamily: theme.bold,
    },
    cardSubtitle: {
      color: '#C7C9DE',
      fontSize: 12,
      marginTop: 2,
      fontFamily: theme.regular,
    },

    // Price Section
    priceRow: {
      flexDirection: 'row',
      alignItems: 'baseline',
      gap: 5,
      marginBottom: 12,
      borderBottomWidth: 1,
      borderBottomColor: 'rgba(253, 176, 34, 0.2)',
      paddingBottom: 12,
    },
    currency: {
      color: '#FDB022',
      fontSize: 16,
      fontFamily: theme.regular,
    },
    price: {
      color: '#FDB022',
      fontSize: 32,
      fontFamily: theme.bold,
    },
    priceUnit: {
      color: '#C7C9DE',
      fontSize: 14,
      fontFamily: theme.regular,
    },

    // Features
    featuresRow: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: 12,
    },
    featureContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: 4,
    },
    featureText: {
      color: '#8C8FAD',
      fontSize: 12,
      fontFamily: theme.regular,
    },

    // Button Section
    buttonWrapper: {
      borderRadius: 12,
      overflow: 'hidden',
      marginTop: 16,
    },
    button: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      paddingVertical: 14,
      width: '100%',
    },
    buttonText: {
      color: '#000000',
      fontSize: 16,
      fontFamily: theme.bold,
    },
  });

  