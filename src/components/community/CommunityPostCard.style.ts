import { StyleSheet } from 'react-native';
import { Theme } from '../../constants/theme';

const GOLD = '#8bbdd9';

export const getCommunityPostStyles = (theme: Theme) =>
  StyleSheet.create({
    // Main Card Container
    container: {
      paddingHorizontal: theme.spacingXs,
      marginBottom: theme.spacingMd,
      marginTop: theme.spacingSm,
    },
    card: {
      backgroundColor: theme.bgCard,
      borderRadius: theme.radiusXl,
      padding: theme.spacingMd,
      borderWidth: 1,
      borderColor: theme.borderColor,
    },

    // Header Row
    headerRow: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: 12,
      marginBottom: theme.spacingMd,
    },
    avatar: {
      width: 44,
      height: 44,
      borderRadius: 22,
      backgroundColor: theme.bgSecondary,
      borderWidth: 1,
      borderColor: 'rgba(255,255,255,0.15)',
      alignItems: 'center',
      justifyContent: 'center',
    },
    avatarText: {
      color: theme.textPrimary,
      fontSize: 15,
      fontFamily: theme.bold,
    },
    userInfo: {
      flex: 1,
      minWidth: 0,
    },
    userName: {
      color: theme.textPrimary,
      fontSize: 15,
      fontFamily: theme.bold,
      flexShrink: 1,
      overflow: 'hidden',
    },
    dateRow: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: 4,
      marginTop: 2,
    },
    date: {
      color: theme.textMuted,
      fontSize: 12,
      fontFamily: theme.regular,
    },
    followBtn: {
      paddingHorizontal: 14,
      paddingVertical: 6,
      borderRadius: theme.radiusFull,
      borderWidth: 1,
      borderColor: GOLD,
      backgroundColor: 'transparent',
    },
    followBtnActive: {
      backgroundColor: GOLD,
    },
    followText: {
      color: GOLD,
      fontSize: 12,
      fontFamily: theme.bold,
    },
    followTextActive: {
      color: '#0D1322',
    },
    categoryBadge: {
      alignSelf: 'flex-start',
      paddingHorizontal: 10,
      paddingVertical: 4,
      borderRadius: theme.radiusFull,
      borderWidth: 1,
      marginBottom: 14,
    },
    categoryText: {
      fontSize: 11,
      fontFamily: theme.bold,
    },
    menuBtn: {
      padding: 4,
    },

    // Post Content
    postContent: {
      marginBottom: 12,
    },
    postTitle: {
      color: theme.textPrimary,
      fontSize: 18,
      fontFamily: theme.bold,
      marginBottom: 6,
    },
    postText: {
      color: theme.textSecondary,
      fontSize: 14,
      lineHeight: 22,
      fontFamily: theme.regular,
    },

    // Hashtags
    hashtagsRow: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      gap: 8,
      marginBottom: 14,
    },
    hashtag: {
      color: '#60A5FA',
      fontSize: 13,
      fontFamily: theme.bold,
    },

    // Stats Row
    statsRow: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      marginBottom: 14,
    },
    statsLeft: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: 24,
    },
    statItem: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: 6,
    },
    statText: {
      color: theme.textMuted,
      fontSize: 14,
      fontFamily: theme.regular,
    },

    // Comment Section Box
    commentSectionBox: {
      backgroundColor: theme.bgInput,
      borderRadius: theme.radiusMd,
      padding: theme.spacingSm,
      borderWidth: 1,
      borderColor: theme.borderLight,
      marginTop: 10,
    },

    commentInputRow: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: 8,
    },
    miniAvatar: {
      width: 36,
      height: 36,
      borderRadius: 18,
      backgroundColor: '#60A5FA',
      alignItems: 'center',
      justifyContent: 'center',
    },
    miniAvatarText: {
      color: '#FFFFFF',
      fontSize: 14,
      fontFamily: theme.bold,
    },
    commentInput: {
      flex: 1,
      backgroundColor: theme.bgCard,
      borderRadius: theme.radiusMd,
      paddingHorizontal: 6,
      color: theme.textPrimary,
      fontSize: 13,
      fontFamily: theme.regular,
      borderWidth: 1,
      borderColor: theme.borderLight,
    },
    sendBtn: {
      width: 40,
      height: 40,
      borderRadius: theme.radiusMd,
      backgroundColor: '#60A5FA',
      alignItems: 'center',
      justifyContent: 'center',
    },

    // Comments List
    commentsList: {
      marginTop: 4,
    },
    commentItem: {
      flexDirection: 'row',
      alignItems: 'flex-start',
      gap: 10,
      paddingVertical: 8,
    },
    commentAvatar: {
      width: 36,
      height: 36,
      borderRadius: 18,
      backgroundColor: '#E2E8F0',
      alignItems: 'center',
      justifyContent: 'center',
    },
    commentAvatarText: {
      color: '#334155',
      fontSize: 14,
      fontFamily: theme.bold,
    },
    commentContent: {
      flex: 1,
    },
    commentHeader: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: 8,
    },
    commentName: {
      color: theme.textPrimary,
      fontSize: 14,
      fontFamily: theme.bold,
    },
    commentDate: {
      color: theme.textMuted,
      fontSize: 11,
      fontFamily: theme.regular,
    },
    commentText: {
      color: theme.textSecondary,
      fontSize: 13,
      marginTop: 2,
      fontFamily: theme.regular,
    },

    statTextActive: {
      color: '#EF4444',
    },
    menuOverlay: {
      flex: 1,
      backgroundColor: 'rgba(0,0,0,0.3)',
    },
    menuDropdown: {
      backgroundColor: theme.bgCard,
      borderRadius: theme.radiusMd,
      borderWidth: 1,
      borderColor: theme.borderColor,
      minWidth: 140,
      paddingVertical: 4,
    },
    menuItem: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: 8,
      paddingHorizontal: 14,
      paddingVertical: 12,
    },
    menuItemText: {
      color: theme.textPrimary,
      fontSize: 14,
      fontFamily: theme.bold,
    },
  });
