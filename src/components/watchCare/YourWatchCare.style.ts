import { StyleSheet } from 'react-native';
import { Theme } from '../../constants/theme';

export const getYourWatchCareStyles = (theme: Theme) =>
  StyleSheet.create({
    container: {
      backgroundColor: theme.bgCard,
      borderRadius: theme.radiusLg,
      borderWidth: 1,
      borderColor: theme.borderColor,
      paddingHorizontal: theme.spacingMd,
      paddingVertical: theme.spacingLg,
      margin: theme.spacingSm,
      marginBottom: theme.spacingMd,
    },

    // Header 
    headerRow: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
    },

    title: {
      color: theme.textPrimary,
      fontSize: 22,
      fontFamily: theme.bold,
    },

    // 0 Active
    activeBadge: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: 4,
    },

    activeCount: {
      color: theme.textPrimary,
      fontSize: 13,
      fontFamily: theme.bold,
    },

    activeText: {
      color: theme.textMuted,
      fontSize: 12,
      fontFamily: theme.regular,
    },

    // Subtitle
    subtitle: {
      color: theme.textMuted,
      fontSize: 13,
      fontFamily: theme.regular,
      marginTop: 5,
      marginBottom: 15,
    },


    // CTA
    bookBtn: {
      alignSelf: 'center',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 8,
      backgroundColor: '#F5E6B8',
      borderRadius: 10,
      paddingVertical: 11,
      paddingHorizontal: 18,
      marginBottom: 18,
    },

    bookBtnText: {
      color: '#0A0A0C',
      fontSize: 13,
      fontFamily: theme.bold,
    },

    // Long horizontal line
    divider: {
      width: '100%',
      height: 1,
      backgroundColor: theme.borderColor,
      marginBottom: 16,
    },

    // Benefits row
    benefitsRow: {
      flexDirection: 'row',
      width: '100%',
    },

    benefitItem: {
      flex: 1,
      alignItems: 'center',
      paddingHorizontal: 5,
    },

    // Icon
    iconContainer: {
      width: 32,
      height: 32,
      borderRadius: 9,
      borderWidth: 1,
      borderColor: '#D4AF37',
      backgroundColor: 'rgba(212, 175, 55, 0.08)',
      alignItems: 'center',
      justifyContent: 'center',
      marginBottom: 7,
    },

    // Benefit text
    benefitText: {
      color: theme.textSecondary,
      fontSize: 10.5,
      lineHeight: 14,
      fontFamily: theme.regular,
      textAlign: 'center',
    },
  });
