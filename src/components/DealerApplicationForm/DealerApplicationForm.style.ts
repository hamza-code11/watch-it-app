import { StyleSheet } from 'react-native';
import { Theme } from '../../constants/theme';

export const getDealerApplicationFormStyles = (theme: Theme) =>
  StyleSheet.create({
    container: {
      flex: 1,
    },
    formWrapper: {
      flex: 1,
    },
    navButtons: {
      paddingHorizontal: theme.spacingLg,
      paddingVertical: theme.spacingMd,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: 10,
    },
    backBtn: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: 6,
      paddingHorizontal: 14,
      paddingVertical: 12,
      borderRadius: theme.radiusMd,
      borderWidth: 1,
      borderColor: theme.borderColor,
      backgroundColor: theme.bgCard,
    },
    backBtnText: {
      color: theme.textPrimary,
      fontSize: 14,
      fontWeight: '600',
    },
    
    // White Gradient Button Wrapper
    nextBtnWrapper: {
      flex: 1,
      borderRadius: theme.radiusMd,
      overflow: 'hidden',
    },
    nextBtn: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 6,
      paddingHorizontal: 14,
      paddingVertical: 12,
      width: '100%',
    },
    nextBtnText: {
      color: '#000000', // Text ka color black kiya
      fontSize: 14,
      fontWeight: 'bold',
    },
  });

  