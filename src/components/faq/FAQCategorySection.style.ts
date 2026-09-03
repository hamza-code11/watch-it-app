// FAQCategorySection.style.ts
import { StyleSheet } from 'react-native';
import { Theme } from '../../constants/theme';

export const getFAQCategoryStyles = (theme: Theme) =>
  StyleSheet.create({
    categoryContainer: {
      paddingHorizontal: theme.spacingLg,
      marginTop: 20,
    },
    categoryTitle: {
      color: theme.textPrimary,
      fontSize: 18,
      fontWeight: 'bold',
      marginBottom: 10,
    },
    faqItem: {
      backgroundColor: 'rgba(20, 22, 35, 0.8)',
      borderRadius: theme.radiusMd,
      marginBottom: 8,
      borderWidth: 1,
      borderColor: theme.borderColor,
    },
    faqHeader: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: 16,
    },
    faqQuestion: {
      flex: 1,
      color: theme.textPrimary,
      fontSize: 14,
      fontWeight: '600',
      marginRight: 10,
    },
    faqChevron: {
      padding: 4,
    },
    faqAnswer: {
      paddingHorizontal: 16,
      paddingBottom: 16,
      paddingTop: 0,
      color: theme.textMuted,
      fontSize: 13,
      lineHeight: 20,
    },
    supportSection: {
      backgroundColor: 'rgba(20, 22, 35, 0.8)',
      borderRadius: theme.radiusXl,
      padding: theme.spacingMd,
      marginHorizontal: theme.spacingLg,
      marginTop: theme.spacingLg,
      borderWidth: 1,
      borderColor: theme.borderColor,
      flexDirection: 'row',
      alignItems: 'center',
      gap: 12,
    },
    supportIcon: {
      width: 40,
      height: 40,
      borderRadius: 20,
      backgroundColor: theme.accentUltraLight,
      alignItems: 'center',
      justifyContent: 'center',
    },
    supportInfo: {
      flex: 1,
    },
    supportTitle: {
      color: theme.textPrimary,
      fontSize: 14,
      fontWeight: 'bold',
    },
    supportSubtitle: {
      color: theme.textMuted,
      fontSize: 12,
      marginTop: 2,
    },
  });
  