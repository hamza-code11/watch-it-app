import { StyleSheet } from 'react-native';
import { Theme } from '../../constants/theme';

export const getBookServiceStyles = (theme: Theme) =>
  StyleSheet.create({
    // Form Container (Background + Border Radius)
    formContainer: {
      paddingHorizontal: theme.spacingMd,
      paddingVertical: theme.spacingLg,
      backgroundColor: theme.bgCard,
      borderRadius: theme.radiusLg,
      borderWidth: 1,
      borderColor: theme.borderColor,
      marginHorizontal: theme.spacingSm,
    },

    // Headings
    formTitle: {
      color: theme.textPrimary,
      fontSize: 24,
      fontFamily: theme.bold,
      marginBottom: 4,
    },
    formSubtitle: {
      color: theme.textMuted,
      fontSize: 12,
      marginBottom: theme.spacingLg,
      fontFamily: theme.regular,
    },

    // Input Groups
    inputContainer: {
      marginBottom: theme.spacingMd,
    },
    labelRow: {
      flexDirection: 'row',
      alignItems: 'center',
      marginBottom: 4,
    },
    fieldLabel: {
      color: theme.textSecondary,
      fontSize: 12,
      fontFamily: theme.bold,
    },
    requiredStar: {
      color: theme.danger,
      fontSize: 13,
      fontFamily: theme.bold,
      marginLeft: 2,
    },
    optionalText: {
      color: theme.textMuted,
      fontSize: 11,
      marginLeft: 4,
      fontFamily: theme.regular,
    },

    // Inputs
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

    // Dropdown
    selectWrapper: {
      position: 'relative',
    },
    selectButton: {
      backgroundColor: theme.bgInput,
      borderRadius: theme.radiusMd,
      paddingHorizontal: 12,
      paddingVertical: 10,
      borderWidth: 1,
      borderColor: theme.borderLight,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
    },
    selectText: {
      color: theme.textPrimary,
      fontSize: 12,
      fontFamily: theme.regular,
    },
    selectPlaceholder: {
      color: theme.textMuted,
      fontSize: 12,
    },
    optionsDropdown: {
      backgroundColor: theme.bgInput,
      borderRadius: theme.radiusMd,
      borderWidth: 1,
      borderColor: theme.borderLight,
      marginTop: 4,
      overflow: 'hidden',
    },
    optionRow: {
      paddingHorizontal: 12,
      paddingVertical: 10,
      borderBottomWidth: StyleSheet.hairlineWidth,
      borderBottomColor: theme.borderColor,
    },
    optionRowLast: {
      borderBottomWidth: 0,
    },
    optionText: {
      color: theme.textPrimary,
      fontSize: 12,
      fontFamily: theme.regular,
    },
    optionSelected: {
      color: theme.accentPrimary,
      fontFamily: theme.bold,
    },

    // Collection Method
    collectionMethodContainer: {
      marginBottom: theme.spacingMd,
    },
    collectionMethodLabel: {
      color: theme.textSecondary,
      fontSize: 13,
      fontFamily: theme.bold,
      textTransform: 'uppercase',
      marginBottom: 8,
    },
    collectionOption: {
      backgroundColor: theme.bgInput,
      borderRadius: theme.radiusMd,
      paddingHorizontal: 12,
      paddingVertical: 10,
      borderWidth: 1,
      borderColor: theme.borderLight,
      marginBottom: 8,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
    },
    collectionSelected: {
      borderColor: theme.accentPrimary,
      backgroundColor: theme.accentUltraLight,
    },
    collectionOptionText: {
      color: theme.textPrimary,
      fontSize: 14,
      fontFamily: theme.regular,
    },

    // Photos Section
    photosSection: {
      marginBottom: theme.spacingLg,
    },
    photosLabel: {
      color: theme.textSecondary,
      fontSize: 12,
      fontFamily: theme.regular,
      textTransform: 'uppercase',
      marginBottom: 8,
    },
    photoUploadBox: {
      width: '100%',
      height: 120,
      borderRadius: theme.radiusMd,
      backgroundColor: theme.bgInput,
      justifyContent: 'center',
      alignItems: 'center',
      borderWidth: 1,
      borderColor: theme.borderLight,
      borderStyle: 'dashed',
      marginBottom: 12,
    },
    photoUploadIcon: {
      fontSize: 32,
      color: theme.textMuted,
      marginBottom: 4,
    },
    photoUploadText: {
      color: theme.textSecondary,
      fontSize: 14,
      fontFamily: theme.regular,
    },
    photoCounter: {
      color: theme.textMuted,
      fontSize: 12,
      marginTop: 4,
      fontFamily: theme.regular,
    },
    photoPreviewRow: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      gap: 8,
    },
    photoThumbWrapper: {
      position: 'relative',
      width: 60,
      height: 60,
    },
    photoThumb: {
      width: 60,
      height: 60,
      borderRadius: theme.radiusMd,
      borderWidth: 1,
      borderColor: theme.borderLight,
    },
    photoRemoveBtn: {
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

    // Condition Notes
    textArea: {
      backgroundColor: theme.bgInput,
      borderRadius: theme.radiusMd,
      paddingHorizontal: 12,
      paddingVertical: 10,
      color: theme.textPrimary,
      fontSize: 12,
      height: 100,
      textAlignVertical: 'top',
      borderWidth: 1,
      borderColor: theme.borderLight,
      fontFamily: theme.regular,
    },

    // Submit Button (White Gradient)
    submitBtnWrapper: {
      marginTop: theme.spacingLg,
      borderRadius: theme.radiusXl,
      overflow: 'hidden',
    },
    submitBtn: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      paddingVertical: 16,
      width: '100%',
    },
    submitBtnText: {
      color: '#000000',
      fontSize: 16,
      fontFamily: theme.bold,
    },
    termsText: {
      color: theme.textMuted,
      fontSize: 12,
      textAlign: 'center',
      marginTop: 12,
      lineHeight: 18,
      fontFamily: theme.regular,
    },
  });

  