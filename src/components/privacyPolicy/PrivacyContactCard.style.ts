import { StyleSheet } from 'react-native';
import { Theme } from '../../constants/theme';

export const getPrivacyContactStyles = (theme: Theme) =>
  StyleSheet.create({
    // Card Container (Dark Boxed Style)
    container: {
      paddingHorizontal: theme.spacingLg,
      marginTop: theme.spacingMd,
      marginBottom: theme.spacingLg,
    },
    card: {
      backgroundColor: 'rgba(20, 22, 35, 0.8)', // Same dark box as accordion
      borderRadius: theme.radiusMd, // Same radius as accordion items
      padding: theme.spacingMd,
      borderWidth: 1,
      borderColor: theme.borderColor,
      flexDirection: 'row',
      alignItems: 'center',
      gap: 12,
    },
    contactIcon: {
      width: 40,
      height: 40,
      borderRadius: 20,
      backgroundColor: theme.accentUltraLight,
      alignItems: 'center',
      justifyContent: 'center',
    },
    contactInfo: {
      flex: 1,
    },
    contactTitle: {
      color: theme.textPrimary,
      fontSize: 13,
      fontWeight: 'bold',
    },
    contactSubtitle: {
      color: theme.textMuted,
      fontSize: 12,
      marginTop: 2,
    },
  });
  