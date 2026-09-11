import { StyleSheet } from 'react-native';
import { Theme } from '../../constants/theme';

export const getStyles = (theme: Theme) =>
  StyleSheet.create({
    container: {
      flex: 1,
      marginTop: 60,
      marginBottom: 60,
    },
    header: {
      flexDirection: 'row',
      alignItems: 'center', 
      gap: 8, 
      paddingHorizontal: theme.spacingMd,
      paddingVertical: theme.spacingSm,
      backgroundColor: theme.bgPrimary,
    },
    backBtn: {
      padding: 4,
    },
    headerTitle: {
      color: theme.textPrimary,
      fontSize: 15,
      fontFamily: theme.bold,
    },

    // Filter Icon (Right Corner - Bilkul right mein)
    filterIconBtn: {
      marginLeft: 'auto', // Right corner mein push karega
      width: 40,
      height: 40,
      borderRadius: 22,
      backgroundColor: theme.bgCard,
      borderWidth: 1,
      borderColor: theme.borderColor,
      alignItems: 'center',
      justifyContent: 'center',
    },

    // Dropdown (Filter dropdown)
    dropdownContainer: {
      position: 'absolute',
      top: 65,
      right: 16,
      backgroundColor: theme.bgCard,
      borderRadius: theme.radiusLg,
      borderWidth: 1,
      borderColor: theme.borderColor,
      padding: 8,
      zIndex: 1000,
      elevation: 5,
      minWidth: 220,
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 4 },
      shadowOpacity: 0.2,
      shadowRadius: 8,
    },
    dropdownHeader: {
      paddingVertical: 8,
      paddingHorizontal: 12,
      borderBottomWidth: 1,
      borderBottomColor: theme.borderColor,
    },
    dropdownHeaderText: {
      color: theme.textMuted,
      fontSize: 13,
      fontFamily: theme.bold,
      textTransform: 'uppercase',
    },
    dropdownItem: {
      paddingVertical: 8,
      paddingHorizontal: 12,
      borderRadius: theme.radiusMd,
    },
    dropdownItemSelected: {
      backgroundColor: theme.accentUltraLight,
    },
    dropdownItemText: {
      color: theme.textPrimary,
      fontSize: 12,
      fontFamily: theme.regular,
    },
    dropdownItemTextSelected: {
      color: theme.accentPrimary,
    },
  });