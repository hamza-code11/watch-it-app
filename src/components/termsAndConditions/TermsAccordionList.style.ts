// TermsAccordionList.style.ts
import { StyleSheet } from 'react-native';
import { Theme } from '../../constants/theme';

export const getTermsAccordionStyles = (theme: Theme) =>
  StyleSheet.create({
    container: {
      paddingHorizontal: theme.spacingSm,
      marginTop: theme.spacingMd,
    },
    sectionItem: {
      backgroundColor: 'rgba(20, 22, 35, 0.8)',
      borderRadius: theme.radiusMd,
      marginBottom: theme.spacingSm,
      borderWidth: 1,
      borderColor: theme.borderColor,
    },
    sectionHeader: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: 10,
      padding: 16,
    },
    sectionNumber: {
      width: 32,
      height: 32,
      borderRadius: 16,
      backgroundColor: theme.accentUltraLight,
      alignItems: 'center',
      justifyContent: 'center',
    },
    sectionNumberText: {
      color: theme.accentPrimary,
      fontSize: 14,
      fontFamily: theme.bold,
    },
    sectionTitle: {
      flex: 1,
      color: theme.textPrimary,
      fontSize: 15,
      fontFamily: theme.bold,
    },
    chevron: {
      padding: 4,
    },
    sectionContent: {
      paddingHorizontal: 16,
      paddingBottom: 16,
      paddingTop: 0,
      fontFamily: theme.bold,
    },
    sectionBody: {
      color: theme.textMuted,
      fontSize: 12,
      lineHeight: 20,
      fontFamily: theme.regular,
    },
    bulletPoints: {
      paddingLeft: 8,
    },
    bulletPointItem: {
      flexDirection: 'row',
      alignItems: 'flex-start',
      gap: 8,
      marginBottom: 6,
    },
    bulletText: {
      color: theme.textSecondary,
      fontSize: 13,
      flex: 1,
    },
  });
