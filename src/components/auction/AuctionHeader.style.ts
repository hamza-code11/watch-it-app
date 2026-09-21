import { StyleSheet } from 'react-native';
import { Theme } from '../../constants/theme';

export const getAuctionHeaderStyles = (theme: Theme) =>
  StyleSheet.create({
    header: {
      flexDirection: 'row',
      alignItems: 'center',
      paddingHorizontal: theme.spacingMd,
      paddingVertical: theme.spacingSm,
      gap: 12,
    },
    iconBtn: { padding: 4 },
    title: {
      color: theme.textPrimary,
      fontSize: 16,
      fontFamily: theme.bold,
      flex: 1,
    },
    filterBtn: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: 6,
      paddingHorizontal: 12,
      paddingVertical: 8,
      borderRadius: 10,
      borderWidth: 1,
      borderColor: theme.borderColor,
      backgroundColor: theme.bgCard,
    },
    filterText: {
      color: theme.textPrimary,
      fontSize: 12,
      fontFamily: theme.bold,
    },
    overlay: {
      flex: 1,
      backgroundColor: 'rgba(0,0,0,0.5)',
    },
    dropdown: {
      position: 'absolute',
      top: 80,
      right: 16,
      minWidth: 170,
      backgroundColor: theme.bgCard,
      borderRadius: 12,
      borderWidth: 1,
      borderColor: theme.borderColor,
      paddingVertical: 4,
    },
    dropdownItem: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      paddingHorizontal: 14,
      paddingVertical: 12,
    },
    dropdownText: {
      color: theme.textPrimary,
      fontSize: 14,
      fontFamily: theme.regular,
    },
    dropdownTextActive: { color: '#D4AF37', fontFamily: theme.bold },
  });
  