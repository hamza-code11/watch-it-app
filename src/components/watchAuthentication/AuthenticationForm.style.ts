import { StyleSheet } from 'react-native';
import { Theme } from '../../constants/theme';

export const getFormStyles = (theme: Theme) =>
  StyleSheet.create({
    // Form Container
    formContainer: {
      padding: theme.spacingLg,
      marginHorizontal: theme.spacingLg,
      marginTop: theme.spacingLg,
      backgroundColor: theme.bgCard,
      borderRadius: theme.radiusXl,
      borderWidth: 1,
      borderColor: theme.borderColor,
    },

    // Headings
    formTitle: {
      color: theme.textPrimary,
      fontSize: 24,
      fontWeight: 'bold',
      fontFamily: theme.fontFamily,
      marginBottom: theme.spacingXs,
    },
    formSubtitle: {
      color: theme.textMuted,
      fontSize: 14,
      lineHeight: 20,
      marginBottom: theme.spacingLg,
    },

    // Labels & Inputs
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
      fontSize: 13,
      fontWeight: '700',
      textTransform: 'uppercase',
    },
    requiredStar: {
      color: theme.danger,
      fontSize: 13,
      fontWeight: '700',
      marginLeft: 2,
    },
    optionalText: {
      color: theme.textMuted,
      fontSize: 11,
      marginLeft: 4,
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
      fontSize: 14,
    },
    selectPlaceholder: {
      color: theme.textMuted,
      fontSize: 14,
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
      fontSize: 14,
    },
    optionSelected: {
      color: theme.accentPrimary,
      fontWeight: '700',
    },

    // Inspection Type
    inspectionTypeContainer: {
      marginBottom: theme.spacingMd,
    },
    inspectionTypeLabel: {
      color: theme.textSecondary,
      fontSize: 13,
      fontWeight: '700',
      textTransform: 'uppercase',
      marginBottom: 8,
    },
    inspectionTypeOption: {
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
    inspectionTypeSelected: {
      borderColor: theme.accentPrimary,
      backgroundColor: theme.accentUltraLight,
    },
    inspectionTypeText: {
      color: theme.textPrimary,
      fontSize: 14,
      fontWeight: '600',
    },
    inspectionTypeTime: {
      color: theme.textMuted,
      fontSize: 12,
      marginTop: 2,
    },

    // Description
    textArea: {
      backgroundColor: theme.bgInput,
      borderRadius: theme.radiusMd,
      paddingHorizontal: 12,
      paddingVertical: 10,
      color: theme.textPrimary,
      fontSize: 14,
      height: 100,
      textAlignVertical: 'top',
      borderWidth: 1,
      borderColor: theme.borderLight,
    },

    // Photos
    photosSection: {
      marginBottom: theme.spacingLg,
    },
    photosLabel: {
      color: theme.textSecondary,
      fontSize: 13,
      fontWeight: '700',
      textTransform: 'uppercase',
      marginBottom: 8,
    },
    photosLimitText: {
      color: theme.textMuted,
      fontSize: 12,
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
      fontWeight: '600',
    },
    photoCounter: {
      color: theme.textMuted,
      fontSize: 12,
      marginTop: 4,
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

    // Submit Button
    submitBtn: {
      backgroundColor: theme.accentPrimary,
      borderRadius: theme.radiusXl,
      paddingVertical: 16,
      alignItems: 'center',
      justifyContent: 'center',
      marginTop: theme.spacingLg,
    },
    submitBtnText: {
      color: '#FFFFFF',
      fontSize: 16,
      fontWeight: 'bold',
    },
    termsText: {
      color: theme.textMuted,
      fontSize: 12,
      textAlign: 'center',
      marginTop: 12,
      lineHeight: 18,
    },
  });

  