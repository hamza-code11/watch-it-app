import { StyleSheet } from 'react-native';
import { Theme } from '../../constants/theme';

export const getStyles = (theme: Theme) =>
  StyleSheet.create({
    container: {
      flex: 1,
      marginTop: 60,
      marginBottom: 50,
    },
    header: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: 8,
      paddingHorizontal: theme.spacingLg,
      paddingVertical: theme.spacingMd,
    },
    backBtn: {
      padding: 4,
    },
    headerTitle: {
      color: theme.textPrimary,
      fontSize: 15,
      fontWeight: '600',
    },
    contentContainer: {
      paddingBottom: 40,
    },

    // Form Card
    formCard: {
      backgroundColor: theme.bgCard,
      borderRadius: theme.radiusXl,
      padding: theme.spacingMd,
      borderWidth: 1,
      borderColor: theme.borderColor,
      marginHorizontal: theme.spacingSm,
    },

    // Form Title
    formTitle: {
      color: theme.textPrimary,
      fontSize: 22,
      fontWeight: 'bold',
      marginBottom: 16,
    },

    // Category Selection
    categorySection: {
      marginBottom: 14,
    },
    categoryLabel: {
      color: theme.textSecondary,
      fontSize: 13,
      fontWeight: '700',
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
      paddingHorizontal: 16,
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
      fontSize: 13,
      fontWeight: '600',
    },
    categoryTextSelected: {
      color: theme.accentPrimary,
      fontWeight: 'bold',
    },

    // Title Input
    inputContainer: {
      marginBottom: 14,
    },
    label: {
      color: theme.textSecondary,
      fontSize: 13,
      fontWeight: '700',
      textTransform: 'uppercase',
      marginBottom: 6,
    },
    input: {
      backgroundColor: theme.bgInput,
      borderRadius: theme.radiusMd,
      paddingHorizontal: 12,
      paddingVertical: 10,
      color: theme.textPrimary,
      fontSize: 14,
      borderWidth: 1,
      borderColor: theme.borderLight,
    },
    textArea: {
      backgroundColor: theme.bgInput,
      borderRadius: theme.radiusMd,
      paddingHorizontal: 12,
      paddingVertical: 10,
      color: theme.textPrimary,
      fontSize: 14,
      height: 120,
      textAlignVertical: 'top',
      borderWidth: 1,
      borderColor: theme.borderLight,
    },

    // Images Section
    imagesSection: {
      marginBottom: 14,
    },
    imageUploadBox: {
      width: '100%',
      height: 100,
      borderRadius: theme.radiusMd,
      backgroundColor: theme.bgInput,
      justifyContent: 'center',
      alignItems: 'center',
      borderWidth: 1,
      borderColor: theme.borderLight,
      borderStyle: 'dashed',
      marginBottom: 10,
    },
    imageUploadIcon: {
      fontSize: 32,
      color: theme.textMuted,
      marginBottom: 4,
    },
    imageUploadText: {
      color: theme.textSecondary,
      fontSize: 13,
      fontWeight: '600',
    },
    imagePreviewRow: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      gap: 8,
    },
    imagePreview: {
      width: 60,
      height: 60,
      borderRadius: theme.radiusMd,
      borderWidth: 1,
      borderColor: theme.borderLight,
    },
    imageRemoveBtn: {
      position: 'absolute',
      top: -4,
      right: -4,
      width: 18,
      height: 18,
      borderRadius: 9,
      backgroundColor: theme.danger,
      alignItems: 'center',
      justifyContent: 'center',
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
      fontSize: 14,
      paddingVertical: 4,
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
      fontWeight: '600',
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
      fontWeight: 'bold',
    },
  });



