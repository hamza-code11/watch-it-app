import { StyleSheet } from 'react-native';
import { Theme } from '../../constants/theme';

export const getCheckStyles = (theme: Theme) =>
  StyleSheet.create({
    container: { margin: theme.spacingSm },
    heading: {
      color: '#FFFFFF',
      fontSize: 18,
      fontFamily: theme.bold,
    },
    subheading: {
      color: '#94A3B8',
      fontSize: 11,
      lineHeight: 16,
      fontFamily: theme.regular,
      marginBottom: theme.spacingSm,
      marginTop: 4,
    },
    grid: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      justifyContent: 'space-between',
      rowGap: 8,
    },
    gridItem: {
      width: '23.5%', // 👈 4 items per row
      backgroundColor: '#0E1626',
      borderRadius: theme.radiusMd,
      padding: 8,
      borderWidth: 1,
      borderColor: 'rgba(212, 175, 55, 0.15)',
      gap: 4,
      alignItems: 'center',
    },
    itemTitle: {
      color: '#FFFFFF',
      fontSize: 10,
      fontFamily: theme.bold,
      textAlign: 'center',
    },
    itemDesc: {
      color: '#94A3B8',
      fontSize: 8,
      lineHeight: 11,
      fontFamily: theme.regular,
      textAlign: 'center',
    },
  });
  