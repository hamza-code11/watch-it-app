import { StyleSheet } from 'react-native';
import { Theme } from '../../constants/theme';

export const getChatListStyles = (theme: Theme) =>
  StyleSheet.create({
    container: {
      flex: 1,
      marginTop: 70,
      marginBottom: 60,
    },
    scrollArea: {
      flex: 1,
    },

    searchContainer: {
      paddingHorizontal: theme.spacingLg,
      paddingVertical: theme.spacingSm,
    },
    searchBox: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: 8,
      backgroundColor: theme.bgCard,
      borderRadius: theme.radiusFull,
      paddingHorizontal: 12,
      paddingVertical: 2,
      borderWidth: 1,
      borderColor: theme.borderLight,
    },
    searchInput: {
      flex: 1,
      color: theme.textPrimary,
      fontSize: 14,
    },

    filterRow: {
      flexDirection: 'row',
      paddingHorizontal: theme.spacingLg,
      paddingVertical: theme.spacingSm,
    },
    filterScrollView: {
      flex: 1,
    },
    filterBtn: {
      paddingHorizontal: 14,
      paddingVertical: 6,
      borderRadius: theme.radiusFull,
      backgroundColor: theme.bgTertiary,
      borderWidth: 1,
      borderColor: theme.borderColor,
      marginRight: 8,
      justifyContent: 'center',
      alignItems: 'center',
    },
    filterBtnActive: {
      borderColor: 'transparent',
    },
    filterText: {
      color: theme.textMuted,
      fontSize: 13,
      fontWeight: '600',
    },
    filterTextActive: {
      color: '#FFFFFF',
      fontSize: 13,
      fontWeight: 'bold',
    },

    conversationItem: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: 12,
      paddingHorizontal: theme.spacingLg,
      paddingVertical: theme.spacingSm,
      borderBottomWidth: 1,
      borderBottomColor: theme.borderLight,
    },
    avatar: {
      width: 50,
      height: 50,
      borderRadius: 25,
      alignItems: 'center',
      justifyContent: 'center',
    },
    avatarText: {
      color: '#FFFFFF',
      fontSize: 16,
      fontWeight: 'bold',
    },
    conversationInfo: {
      flex: 1,
      justifyContent: 'center',
    },
    conversationTopRow: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      marginBottom: 4,
    },
    participantName: {
      flex: 1,
      color: theme.textPrimary,
      fontSize: 15,
      fontWeight: 'bold',
      marginRight: 8,
    },
    lastMessageTime: {
      color: theme.textMuted,
      fontSize: 12,
    },
    conversationBottomRow: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
    },
    lastMessage: {
      flex: 1,
      color: theme.textMuted,
      fontSize: 13,
      marginRight: 8,
    },
    unreadBadge: {
      backgroundColor: '#25D366',
      paddingHorizontal: 8,
      paddingVertical: 2,
      borderRadius: theme.radiusFull,
      minWidth: 22,
      alignItems: 'center',
    },
    unreadBadgeText: {
      color: '#FFFFFF',
      fontSize: 11,
      fontWeight: 'bold',
    },
    emptyState: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      paddingVertical: 60,
    },
    emptyStateText: {
      color: theme.textMuted,
      fontSize: 14,
    },
  });
  