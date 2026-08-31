// PolicyAccordionList.style.ts
import { StyleSheet } from 'react-native';
import { Theme } from '../../constants/theme';

export const getAccordionStyles = (theme: Theme) =>
  StyleSheet.create({
    container: {
      paddingHorizontal: theme.spacingLg,
    },
    sectionItem: {
      backgroundColor: theme.bgCard,
      borderRadius: theme.radiusMd,
      marginBottom: 10,
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
      fontWeight: 'bold',
    },
    sectionTitle: {
      flex: 1,
      color: theme.textPrimary,
      fontSize: 15,
      fontWeight: 'bold',
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
      fontSize: 13,
      lineHeight: 20,
      marginBottom: 8,
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
  