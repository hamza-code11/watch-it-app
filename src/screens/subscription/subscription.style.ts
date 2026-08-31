import { StyleSheet } from 'react-native';
import { Theme } from '../../constants/theme';

export const getStyles = (theme: Theme) =>
  StyleSheet.create({
    container: {
      flex: 1,
      marginTop: 60,
      marginBottom: 60,
    },
    
    // Header Row (Back Button + Title)
    header: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      paddingHorizontal: theme.spacingLg,
      paddingVertical: theme.spacingMd,
      backgroundColor: theme.bgPrimary, 
    },
    backBtn: {
      width: 36,
      height: 36,
      borderRadius: 18,
      backgroundColor: 'rgba(255,255,255,0.1)',
      alignItems: 'center',
      justifyContent: 'center',
      borderWidth: 1,
      borderColor: theme.borderColor,
    },
    headerTitle: {
      color: theme.textPrimary,
      fontSize: 18,
      fontWeight: 'bold',
      fontFamily: theme.fontFamily,
    },
  });  