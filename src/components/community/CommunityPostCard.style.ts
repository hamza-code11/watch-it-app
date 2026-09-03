import { StyleSheet } from 'react-native';
import { Theme } from '../../constants/theme';

export const getCommunityPostStyles = (theme: Theme) =>
  StyleSheet.create({
    // Main Card Container
    container: {
      paddingHorizontal: theme.spacingXs,
      marginBottom: theme.spacingMd,
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
      width: 48,
      height: 48,
      borderRadius: 24,
      backgroundColor: theme.accentUltraLight,
      alignItems: 'center',
      justifyContent: 'center',
    },
    avatarText: {
      color: theme.accentPrimary,
      fontSize: 18,
      fontWeight: 'bold',
    },
    userInfo: {
      flex: 1,
      minWidth: 0,
    },
    userName: {
      color: theme.textPrimary,
      fontSize: 16,
      fontWeight: 'bold',
      flexShrink: 1,
      overflow: 'hidden',
    },
    date: {
      color: theme.textMuted,
      fontSize: 12,
      marginTop: 2,
    },
    categoryBadge: {
      paddingHorizontal: 10,
      paddingVertical: 4,
      borderRadius: theme.radiusFull,
      borderWidth: 1,
      borderColor: 'rgba(59, 130, 246, 0.3)',
    },
    categoryText: {
      color: '#60A5FA',
      fontSize: 11,
      fontWeight: '600',
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
      fontWeight: 'bold',
      marginBottom: 6,
    },
    postText: {
      color: theme.textSecondary,
      fontSize: 14,
      lineHeight: 22,
    },

    // Image Slider Section
    imageSection: {
      position: 'relative',
      marginBottom: 12,
    },
    postImage: {
      width: '100%',
      height: 220,
      borderRadius: 12,
      backgroundColor: theme.bgTertiary,
    },
    imageCounter: {
      position: 'absolute',
      bottom: 10,
      right: 10,
      backgroundColor: 'rgba(0,0,0,0.7)',
      paddingHorizontal: 8,
      paddingVertical: 4,
      borderRadius: 4,
    },
    imageCounterText: {
      color: '#FFFFFF',
      fontSize: 12,
      fontWeight: 'bold',
    },
    sliderDots: {
      position: 'absolute',
      bottom: 10,
      left: 0,
      right: 0,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 6,
    },
    dot: {
      width: 20,
      height: 4,
      borderRadius: 2,
      backgroundColor: 'rgba(255,255,255,0.4)',
    },
    activeDot: {
      width: 20,
      height: 4,
      borderRadius: 2,
      backgroundColor: '#60A5FA',
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
      fontWeight: '600',
    },

    // Stats Row
    statsRow: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: 24,
      marginBottom: 14,
    },
    statItem: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: 6,
    },
    statText: {
      color: theme.textMuted,
      fontSize: 14,
    },

    // COMMENT SECTION BOX (Naya Box)
    commentSectionBox: {
      backgroundColor: theme.bgInput,
      borderRadius: theme.radiusMd,
      padding: theme.spacingSm,
      borderWidth: 1,
      borderColor: theme.borderLight,
      marginTop: 10,
    },

    // Comment Input Row (Avatar + Input + Send)
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
      fontWeight: 'bold',
      fontFamily: 'Arial',
    },
    commentInput: {
      flex: 1,
      backgroundColor: theme.bgCard,
      borderRadius: theme.radiusMd,
      paddingHorizontal: 6,
      color: theme.textPrimary,
      fontSize: 13,
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
      fontWeight: 'bold',
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
      fontWeight: 'bold',
    },
    commentDate: {
      color: theme.textMuted,
      fontSize: 11,
    },
    commentText: {
      color: theme.textSecondary,
      fontSize: 13,
      marginTop: 2,
    },



    menuWrapper: {
      position: 'relative',
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
      fontWeight: '600',
    },


  });

