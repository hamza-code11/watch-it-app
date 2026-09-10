import { StyleSheet } from 'react-native';
import { Theme } from '../../constants/theme';

export const getFilterSortBarStyles = (theme: Theme) =>
  StyleSheet.create({
    container: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      paddingHorizontal: theme.spacingLg,
      paddingVertical: theme.spacingMd,
    },
    filterBtn: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: 8,
      paddingHorizontal: 14,
      paddingVertical: 10,
      borderRadius: theme.radiusFull,
      borderWidth: 1,
      borderColor: theme.accentPrimary,
      backgroundColor: theme.bgInput,
    },
    filterBtnText: {
      color: theme.textPrimary,
      fontSize: 14,
      fontWeight: '600',
    },
    sortBtn: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: 6,
      paddingHorizontal: 14,
      paddingVertical: 10,
      borderRadius: theme.radiusFull,
      borderWidth: 1,
      borderColor: theme.borderColor,
      backgroundColor: theme.bgCard,
    },
    sortText: {
      color: theme.textPrimary,
      fontSize: 14,
      fontWeight: '600',
    },
    sortLabel: {
      color: theme.textMuted,
      fontSize: 14,
    },

    // Dropdown Style
    dropdownContainer: {
      position: 'absolute',
      top: 50,
      right: 16,
      backgroundColor: theme.bgCard,
      borderRadius: theme.radiusLg,
      borderWidth: 1,
      borderColor: theme.borderColor,
      padding: 8,
      zIndex: 1000,
      elevation: 5,
      minWidth: 180,
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 4 },
      shadowOpacity: 0.2,
      shadowRadius: 8,
    },
    dropdownItem: {
      paddingVertical: 10,
      paddingHorizontal: 12,
      borderRadius: theme.radiusMd,
    },
    dropdownItemSelected: {
      backgroundColor: theme.accentUltraLight,
    },
    dropdownItemText: {
      color: theme.textPrimary,
      fontSize: 14,
      fontWeight: '500',
    },
    dropdownItemTextSelected: {
      color: theme.accentPrimary,
      fontWeight: 'bold',
    },

    // Filter Modal Styles
    overlay: {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: 'rgba(0,0,0,0.5)',
      zIndex: 2000,
      justifyContent: 'flex-end',
    },
    filterModal: {
      backgroundColor: theme.bgCard,
      borderTopLeftRadius: theme.radiusXl,
      borderTopRightRadius: theme.radiusXl,
      padding: theme.spacingMd,
      maxHeight: '80%',
    },
    modalHeader: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      marginBottom: 4,
    },
    modalTitle: {
      color: theme.textPrimary,
      fontSize: 20,
      fontWeight: 'bold',
    },
    modalCloseBtn: {
      padding: 4,
    },
    sectionTitle: {
      color: theme.textPrimary,
      fontSize: 16,
      fontWeight: 'bold',
      marginTop: 12,
      marginBottom: 6,
    },
    chipContainer: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      gap: 8,
    },
    chip: {
      paddingHorizontal: 14,
      paddingVertical: 6,
      borderRadius: theme.radiusFull,
      borderWidth: 2,
      borderColor: theme.borderColor,
      backgroundColor: theme.bgCard,
    },
    chipSelected: {
      backgroundColor: theme.accentPrimary,
      borderColor: theme.accentPrimary,
    },
    chipText: {
      color: theme.textPrimary,
      fontSize: 13,
      fontWeight: '500',
    },
    chipTextSelected: {
      color: '#FFFFFF',
      fontWeight: 'bold',
    },

    // Slider Section
    sliderContainer: {
      marginBottom: 2,
    },
    sliderLabels: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      marginBottom: 8,
    },
    sliderMinMax: {
      color: theme.textMuted,
      fontSize: 14,
    },

    // Reset Button Style
    resetBtn: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: 4,
      paddingHorizontal: 12,
      paddingVertical: 6,
      borderRadius: theme.radiusFull,
      borderWidth: 1,
      borderColor: theme.borderColor,
      backgroundColor: theme.bgCard,
    },
    resetBtnText: {
      color: theme.textPrimary,
      fontSize: 13,
      fontWeight: '600',
    },

    // Apply Button (White Gradient)
    applyBtnWrapper: {
      borderRadius: theme.radiusFull,
      overflow: 'hidden',
      marginTop: 10,
    },
    applyBtn: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      paddingVertical: 10,
      width: '100%',
    },
    applyBtnText: {
      color: '#000000',
      fontSize: 16,
      fontWeight: 'bold',
    },
  });
  