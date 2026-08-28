import { StyleSheet } from 'react-native';
import { Theme } from '../../constants/theme';

export const getStyles = (theme: Theme) =>
  StyleSheet.create({
    container: {
      flex: 1,
      marginTop: 60,
      marginBottom: 60,
    },

    // Header — Fixed Top Par, Full Width
    headerWrapper: {
      backgroundColor: theme.bgPrimary,
      borderBottomWidth: 1,
      borderBottomColor: theme.borderColor,
      zIndex: 10,
    },
    header: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      paddingHorizontal: theme.spacingMd,
      paddingVertical: 10,
      width: '100%',
    },
    headerTitle: {
      color: theme.textPrimary,
      fontSize: 15,
      fontWeight: '600',
    },
    backBtn: {
      padding: 4,
    },

    // ScrollView Container
    scrollContainer: {
      padding: theme.spacingMd,
      paddingBottom: 32,
    },

    // Pura form ek box mein
    formBox: {
      backgroundColor: theme.bgCard,
      borderRadius: theme.radiusXl,
      padding: theme.spacingMd,
      borderWidth: 1,
      borderColor: theme.borderColor,
      marginTop: 12,
    },

    // Headings
    pageTitle: {
      color: theme.textPrimary,
      fontSize: 19,
      fontWeight: 'bold',
      marginBottom: 3,
    },
    pageSubtitle: {
      color: theme.textMuted,
      fontSize: 12.5,
      marginBottom: 14,
    },

    // Section Headers
    sectionHeader: {
      color: theme.textPrimary,
      fontSize: 12,
      fontWeight: '700',
      textTransform: 'uppercase',
      letterSpacing: 0.5,
      marginTop: 16,
      marginBottom: 8,
    },

    // Input Label
    inputLabel: {
      color: theme.textSecondary,
      fontSize: 11.5,
      fontWeight: '600',
    },

    labelRow: {
      flexDirection: 'row',
      alignItems: 'center',
      marginBottom: 4,
    },

    inputLabelOptional: {
      color: theme.textMuted,
      fontSize: 10.5,
      fontWeight: '400',
      marginLeft: 4,
    },

    requiredStar: {
      color: theme.danger,
      fontSize: 12,
      fontWeight: '700',
      marginLeft: 2,
    },

    // Input Fields
    inputContainer: {
      marginBottom: 10,
    },

    input: {
      backgroundColor: theme.bgInput,
      borderRadius: theme.radiusMd,
      paddingHorizontal: 12,
      paddingVertical: 9,
      color: theme.textPrimary,
      fontSize: 13.5,
      borderWidth: 1,
      borderColor: theme.borderLight,
    },

    // Dropdown / Select
    selectInput: {
      backgroundColor: theme.bgInput,
      borderRadius: theme.radiusMd,
      paddingHorizontal: 12,
      paddingVertical: 9,
      borderWidth: 1,
      borderColor: theme.borderLight,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
    },

    selectInputOpen: {
      borderColor: theme.accentPrimary,
    },

    selectText: {
      color: theme.textPrimary,
      fontSize: 13.5,
    },

    selectPlaceholder: {
      color: theme.textMuted,
      fontSize: 13.5,
    },

    // Inline dropdown options
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
      paddingVertical: 9,
      borderBottomWidth: StyleSheet.hairlineWidth,
      borderBottomColor: theme.borderColor,
    },

    optionRowLast: {
      borderBottomWidth: 0,
    },

    optionRowSelected: {
      backgroundColor: theme.bgTertiary,
    },

    optionText: {
      color: theme.textPrimary,
      fontSize: 13,
    },

    optionTextSelected: {
      color: theme.accentPrimary,
      fontWeight: '600',
    },

    // Checkboxes
    checkboxRow: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: 8,
      marginTop: 4,
      marginBottom: 12,
    },

    checkbox: {
      backgroundColor: theme.accentPrimary,
      width: 17,
      height: 17,
      borderRadius: 4,
      alignItems: 'center',
      justifyContent: 'center',
    },

    checkboxUnchecked: {
      backgroundColor: 'transparent',
      borderWidth: 1,
      borderColor: theme.borderLight,
    },

    checkboxLabel: {
      color: theme.textSecondary,
      fontSize: 12.5,
    },

    // Description Textarea
    textArea: {
      backgroundColor: theme.bgInput,
      borderRadius: theme.radiusMd,
      paddingHorizontal: 12,
      paddingVertical: 9,
      color: theme.textPrimary,
      fontSize: 13.5,
      height: 100,
      textAlignVertical: 'top',
      borderWidth: 1,
      borderColor: theme.borderLight,
    },

    // Toggle Switch
    toggleRow: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      marginBottom: 12,
    },

    toggleInfo: {
      flex: 1,
      marginRight: theme.spacingMd,
    },

    toggleTitle: {
      color: theme.textPrimary,
      fontSize: 13.5,
      fontWeight: '600',
    },

    toggleDescription: {
      color: theme.textMuted,
      fontSize: 11.5,
      marginTop: 2,
    },

    toggleSwitch: {
      width: 42,
      height: 23,
      borderRadius: 12,
      padding: 2,
      backgroundColor: theme.bgTertiary,
      justifyContent: 'center',
    },

    toggleSwitchOn: {
      backgroundColor: theme.accentPrimary,
    },

    toggleKnob: {
      width: 19,
      height: 19,
      borderRadius: 10,
      backgroundColor: '#fff',
    },

    toggleKnobOn: {
      marginLeft: 19,
    },

    // Photos Section
    photosRow: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      marginBottom: 10,
    },

    photosCount: {
      color: theme.textMuted,
      fontSize: 11.5,
    },

    photosLimit: {
      color: theme.textMuted,
      fontSize: 11.5,
    },

    photoUploadBox: {
      width: '100%',
      height: 110,
      borderRadius: theme.radiusMd,
      backgroundColor: theme.bgInput,
      justifyContent: 'center',
      alignItems: 'center',
      borderWidth: 1,
      borderColor: theme.borderLight,
      borderStyle: 'dashed',
    },

    photoUploadIcon: {
      fontSize: 24,
      color: theme.textMuted,
      marginBottom: 4,
    },

    photoUploadTitle: {
      color: theme.textSecondary,
      fontSize: 13,
      fontWeight: '600',
    },

    photoUploadNote: {
      color: theme.textMuted,
      fontSize: 11,
      marginTop: 3,
    },

    // Photo previews
    photoPreviewRow: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      marginTop: 10,
      gap: 8,
    },

    photoThumbWrapper: {
      position: 'relative',
      width: 90,
      height: 90,
    },

    photoThumb: {
      width: 90,
      height: 90,
      borderRadius: theme.radiusMd,
      borderWidth: 1,
      borderColor: theme.borderLight,
    },

    photoRemoveBtn: {
      position: 'absolute',
      top: -6,
      right: -6,
      width: 18,
      height: 18,
      borderRadius: 9,
      backgroundColor: theme.danger,
      alignItems: 'center',
      justifyContent: 'center',
    },

    photoAddMoreTile: {
      width: 90,
      height: 90,
      borderRadius: theme.radiusMd,
      backgroundColor: theme.bgInput,
      borderWidth: 1,
      borderColor: theme.borderLight,
      borderStyle: 'dashed',
      alignItems: 'center',
      justifyContent: 'center',
    },

    // Cover Button (Sirf Selected Par Dikhega)
    coverBtn: {
      position: 'absolute',
      bottom: 4,
      left: 4,
      backgroundColor: theme.accentPrimary,
      paddingHorizontal: 10,
      paddingVertical: 4,
      borderRadius: theme.radiusSm,
    },

    coverBtnText: {
      color: '#000',
      fontSize: 10,
      fontWeight: 'bold',
    },

    coverSelected: {
      backgroundColor: theme.success,
    },

    // Tags
    tagsRow: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      gap: 6,
      marginTop: 2,
    },

    tag: {
      backgroundColor: theme.bgTertiary,
      borderRadius: theme.radiusFull,
      paddingHorizontal: 11,
      paddingVertical: 5,
      borderWidth: 1,
      borderColor: theme.borderColor,
    },

    tagText: {
      color: theme.textPrimary,
      fontSize: 11.5,
      fontWeight: '500',
    },

    tagSelected: {
      backgroundColor: theme.accentPrimary,
      borderColor: theme.accentPrimary,
    },

    tagSelectedText: {
      color: '#000',
      fontWeight: '700',
    },

    // Submit Button
    submitBtn: {
      borderRadius: theme.radiusMd,
      overflow: 'hidden',
      marginTop: 18,
    },

    submitBtnGradient: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 8,
      paddingVertical: 12,
      width: '100%',
    },

    submitText: {
      color: '#000',
      fontSize: 14,
      fontWeight: 'bold',
    },



    // Add these to your styles file
    setCoverBtn: {
      position: 'absolute',
      bottom: 4,
      left: 4,
      width: 28,
      height: 28,
      borderRadius: 14,
      backgroundColor: 'rgba(0,0,0,0.7)',
      alignItems: 'center',
      justifyContent: 'center',
      zIndex: 2,
    },

    coverBadge: {
      position: 'absolute',
      bottom: 4,
      right: 4,
      backgroundColor: 'rgba(255, 215, 0, 0.9)',
      paddingHorizontal: 8,
      paddingVertical: 2,
      borderRadius: 4,
    },

    coverBadgeText: {
      color: '#000',
      fontSize: 9,
      fontWeight: 'bold',
    },


    // Photo Tips Container (Non-clickable instructions)
    photoTipsContainer: {
      marginTop: 8,
      marginBottom: 16,
    },

    photoTipsText: {
      color: theme.textMuted,
      fontSize: 11.5,
      marginBottom: 8,
    },

    photoTipChip: {
      backgroundColor: theme.bgPrimary,
      paddingHorizontal: 10,
      paddingVertical: 5,
      borderRadius: theme.radiusSm,
    },

    photoTipChipText: {
      color: theme.textSecondary,
      fontSize: 11,
    },



  });
