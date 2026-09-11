// TermsContactCard.style.ts
import { StyleSheet } from 'react-native';
import { Theme } from '../../constants/theme';

export const getTermsContactStyles = (theme: Theme) =>
  StyleSheet.create({
    container: {
      paddingHorizontal: theme.spacingSm,
      marginBottom: theme.spacingMd,
    },
    card: {
      backgroundColor: 'rgba(20, 22, 35, 0.8)',
      borderRadius: theme.radiusMd,
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
      fontSize: 14,
      fontFamily: theme.bold,
    },
    contactSubtitle: {
      color: theme.textMuted,
      fontSize: 12,
      marginTop: 2,
      fontFamily: theme.regular,
    },
  });
  