import { StyleSheet } from 'react-native';
import { Theme } from '../../constants/theme';

export const getNotificationsStyles = (theme: Theme) =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: theme.bgPrimary,
      marginTop: 70,
      marginBottom: 40,
    },
    header: {
      flexDirection: 'row',
      alignItems: 'center',
      paddingHorizontal: theme.spacingMd,
      paddingVertical: theme.spacingSm,
      gap: 12,
    },
    iconBtn: { padding: 4 },
    headerTitle: {
      color: theme.textPrimary,
      fontSize: 16,
      fontFamily: theme.bold,
      flex: 1,
    },
    listContent: {
      paddingHorizontal: theme.spacingSm,
      paddingTop: theme.spacingSm,
      paddingBottom: 40,
      gap: 10,
    },
    emptyWrap: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      paddingHorizontal: 40,
    },
    emptyTitle: {
      color: theme.textPrimary,
      fontSize: 16,
      fontFamily: theme.bold,
      marginTop: 12,
    },
    emptyText: {
      color: theme.textMuted,
      fontSize: 13,
      fontFamily: theme.regular,
      textAlign: 'center',
      marginTop: 6,
    },
  });
