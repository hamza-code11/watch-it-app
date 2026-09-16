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
    servicesGrid: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      justifyContent: 'space-between',
      rowGap: theme.spacingSm,
      paddingHorizontal: theme.spacingSm,
    },

    sectionHeader: {
      margin: theme.spacingMd,
    },
    sectionTitle: {
      color: '#FFFFFF',
      fontSize: 24,
      fontFamily: theme.bold,
      marginBottom: 4,
    },
    sectionSubtitle: {
      color: 'rgba(255,255,255,0.6)',
      fontSize: 13,
      fontFamily: theme.regular,
    },


  });

