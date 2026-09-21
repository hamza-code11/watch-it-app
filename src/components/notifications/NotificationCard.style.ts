import { StyleSheet } from 'react-native';
import { Theme } from '../../constants/theme';

const GOLD = '#D4AF37';

export const getNotificationCardStyles = (theme: Theme) =>
  StyleSheet.create({
    card: {
      flexDirection: 'row',
      alignItems: 'flex-start',
      gap: 12,
      padding: 14,
      borderRadius: 16,
      backgroundColor: theme.bgCard,
      borderWidth: 1,
      borderColor: theme.borderColor,
    },
    cardUnread: {
      borderColor: 'rgba(212,175,55,0.35)',
      backgroundColor: 'rgba(212,175,55,0.04)',
    },
    iconWrap: {
      width: 42,
      height: 42,
      borderRadius: 21,
      alignItems: 'center',
      justifyContent: 'center',
    },
    body: {
      flex: 1,
    },
    topRow: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: 8,
    },
    title: {
      color: theme.textPrimary,
      fontSize: 14,
      fontFamily: theme.bold,
      flex: 1,
    },
    dot: {
      width: 8,
      height: 8,
      borderRadius: 4,
      backgroundColor: GOLD,
    },
    message: {
      color: theme.textSecondary,
      fontSize: 12.5,
      lineHeight: 18,
      fontFamily: theme.regular,
      marginTop: 4,
    },
    time: {
      color: theme.textMuted,
      fontSize: 11,
      fontFamily: theme.regular,
      marginTop: 6,
    },
  });
  