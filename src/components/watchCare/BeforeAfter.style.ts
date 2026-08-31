import { StyleSheet } from 'react-native';
import { Theme } from '../../constants/theme';

export const getBeforeAfterStyles = (theme: Theme) =>
  StyleSheet.create({
    // Section Container
    container: {
      paddingHorizontal: theme.spacingLg,
      paddingVertical: theme.spacingLg,
    },

    // Section Heading
    sectionHeading: {
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

    // Card
    card: {
      backgroundColor: theme.bgCard,
      borderRadius: theme.radiusXl,
      padding: theme.spacingMd,
      marginBottom: theme.spacingLg,
      borderWidth: 1,
      borderColor: theme.borderColor,
    },

    // Before/After Images Row
    imageRow: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      position: 'relative',
      marginBottom: theme.spacingMd,
    },

    // Image Container (Before / After) - No Padding, No Margins
    imageContainer: {
      width: '48%',
      height: 140, // Height barha di taake look professional ho
      borderRadius: theme.radiusMd,
      overflow: 'hidden',
      backgroundColor: theme.bgTertiary,
      position: 'relative',
    },
    image: {
      width: '100%',
      height: '100%', // Image ko poora fit karne ke liye
    },
    imageLabel: {
      position: 'absolute',
      top: 8,
      left: 8,
      backgroundColor: 'rgba(0,0,0,0.7)',
      paddingHorizontal: 8,
      paddingVertical: 3,
      borderRadius: 4,
    },
    imageLabelText: {
      color: '#FFFFFF',
      fontSize: 10,
      fontWeight: 'bold',
      textTransform: 'uppercase',
    },

    // Center Arrow Icon (Image ke Upar)
    centerArrow: {
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: [{ translateX: -20 }, { translateY: -20 }],
      width: 40,
      height: 40,
      borderRadius: 20,
      backgroundColor: '#FFFFFF',
      alignItems: 'center',
      justifyContent: 'center',
      zIndex: 10,
      shadowColor: '#000000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.3,
      shadowRadius: 4,
      elevation: 5,
    },

    // Watch Information
    watchInfo: {
      marginTop: theme.spacingXs,
    },
    watchName: {
      color: theme.textPrimary,
      fontSize: 18,
      fontWeight: 'bold',
      marginBottom: 2,
    },
    watchDescription: {
      color: theme.textMuted,
      fontSize: 13,
      lineHeight: 18,
    },
  });
  