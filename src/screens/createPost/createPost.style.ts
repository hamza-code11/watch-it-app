import { StyleSheet } from 'react-native';
import { Theme } from '../../constants/theme';

export const getStyles = (theme: Theme) =>
  StyleSheet.create({
    container: {
      flex: 1,
      marginTop: 60,
      marginBottom: 40,
    },
    header: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: 8,
      paddingHorizontal: theme.spacingMd,
      paddingVertical: theme.spacingMd,
    },
    backBtn: {
      padding: 4,
    },
    headerTitle: {
      color: theme.textPrimary,
      fontSize: 15,
      fontFamily: theme.bold,
    },
    contentContainer: {
      paddingBottom: 40,
    },

    // Form Card
    formCard: {
      backgroundColor: theme.bgCard,
      borderRadius: theme.radiusLg,
      padding: theme.spacingMd,
      borderWidth: 1,
      borderColor: theme.borderColor,
      marginHorizontal: theme.spacingSm,
    },

    // Form Title
    formTitle: {
      color: theme.textPrimary,
      fontSize: 22,
      fontFamily: theme.bold,
      marginBottom: 16,
    },

    // Category Selection
    categorySection: {
      marginBottom: 14,
    },
    categoryLabel: {
      color: theme.textSecondary,
      fontSize: 12,
      fontFamily: theme.bold,
      textTransform: 'uppercase',
      marginBottom: 8,
    },
    categoryRow: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      gap: 2,
      marginBottom: 8,
    },
    categoryOption: {
      paddingHorizontal: 14,
      paddingVertical: 8,
      borderRadius: theme.radiusMd,
      borderWidth: 1,
      borderColor: theme.borderLight,
      backgroundColor: theme.bgInput,
    },
    categorySelected: {
      backgroundColor: theme.accentUltraLight,
      borderColor: theme.accentPrimary,
    },
    categoryText: {
      color: theme.textPrimary,
      fontSize: 11,
      fontFamily: theme.regular,
    },
    categoryTextSelected: {
      color: theme.accentPrimary,
      fontFamily: theme.bold,
    },

    // Title Input
    inputContainer: {
      marginBottom: 14,
    },
    label: {
      color: theme.textSecondary,
      fontSize: 12,
      fontFamily: theme.bold,
      textTransform: 'uppercase',
      marginBottom: 6,
    },
    input: {
      backgroundColor: theme.bgInput,
      borderRadius: theme.radiusMd,
      paddingHorizontal: 12,
      paddingVertical: 10,
      color: theme.textPrimary,
      fontSize: 12,
      borderWidth: 1,
      borderColor: theme.borderLight,
      fontFamily: theme.regular,
    },
    textArea: {
      backgroundColor: theme.bgInput,
      borderRadius: theme.radiusMd,
      paddingHorizontal: 12,
      paddingVertical: 10,
      color: theme.textPrimary,
      fontSize: 12,
      height: 120,
      textAlignVertical: 'top',
      borderWidth: 1,
      borderColor: theme.borderLight,
      fontFamily: theme.regular,
    },

    // Hashtags Section (Tag Input)
    tagInputContainer: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      gap: 6,
      alignItems: 'center',
      backgroundColor: theme.bgInput,
      borderRadius: theme.radiusMd,
      paddingHorizontal: 12,
      paddingVertical: 8,
      borderWidth: 1,
      borderColor: theme.borderLight,
      minHeight: 44,
    },
    tagChip: {
      backgroundColor: theme.accentUltraLight,
      borderRadius: theme.radiusFull,
      paddingHorizontal: 10,
      paddingVertical: 4,
      flexDirection: 'row',
      alignItems: 'center',
      gap: 4,
    },
    tagChipText: {
      color: theme.accentPrimary,
      fontSize: 12,
      fontWeight: '600',
    },
    removeTagBtn: {
      padding: 2,
    },
    tagInput: {
      flex: 1,
      minWidth: 80,
      color: theme.textPrimary,
      fontSize: 12,
      paddingVertical: 4,
      fontFamily: theme.regular,
    },

    // Buttons Row
    buttonsRow: {
      flexDirection: 'row',
      gap: 10,
      marginTop: 16,
    },
    cancelBtn: {
      flex: 1,
      paddingVertical: 14,
      borderRadius: theme.radiusMd,
      borderWidth: 1,
      borderColor: theme.borderColor,
      backgroundColor: theme.bgInput,
      alignItems: 'center',
    },
    cancelBtnText: {
      color: theme.textPrimary,
      fontSize: 14,
      fontFamily: theme.bold,
    },

    // Post Button (White Gradient)
    postBtnWrapper: {
      flex: 1,
      borderRadius: theme.radiusMd,
      overflow: 'hidden',
    },
    postBtn: {
      paddingVertical: 14,
      width: '100%',
      alignItems: 'center',
    },
    postBtnText: {
      color: '#000000',
      fontSize: 14,
      fontFamily: theme.bold,
    },
  });



