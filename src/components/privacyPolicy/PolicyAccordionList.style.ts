// PolicyAccordionList.style.ts
import { StyleSheet } from 'react-native';
import { Theme } from '../../constants/theme';

export const getAccordionStyles = (theme: Theme) =>
  StyleSheet.create({
    container: {
      paddingHorizontal: theme.spacingSm,
    },
    sectionItem: {
      backgroundColor: theme.bgCard,
      borderRadius: theme.radiusMd,
      marginBottom: theme.radiusSm,
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
    },
    sectionBody: {
      color: theme.textMuted,
      fontSize: 12,
      lineHeight: 20,
      marginBottom: 8,
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
      fontSize: 12,
      flex: 1,
      fontFamily: theme.regular,
    },
  });
  