import { StyleSheet } from 'react-native';
import { Theme } from '../../constants/theme';

export const getStyles = (theme: Theme) =>
  StyleSheet.create({
    container: {
      flex: 1,
      marginTop: 60,
      marginBottom: 30,
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
    contentContainer: {
      paddingBottom: 40,
    },

    // Profile Card
    profileCard: {
      backgroundColor: theme.bgCard,
      borderRadius: theme.radiusLg,
      padding: theme.spacingMd,
      borderWidth: 1,
      borderColor: theme.borderColor,
      marginHorizontal: theme.spacingSm,
      marginBottom: theme.spacingSm,
    },
    profileRow: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: 16,
      marginBottom: 16,
    },
    avatar: {
      width: 80,
      height: 80,
      borderRadius: 40,
      alignItems: 'center',
      justifyContent: 'center',
      shadowColor: '#4F9FFF',
      shadowOffset: { width: 0, height: 0 },
      shadowOpacity: 0.5,
      shadowRadius: 10,
      elevation: 8,
    },
    avatarText: {
      color: '#FFFFFF',
      fontSize: 28,
      fontFamily: theme.bold,
    },
    userInfo: {
      flex: 1,
    },
    userName: {
      color: theme.textPrimary,
      fontSize: 20,
      fontFamily: theme.bold,
    },
    userRole: {
      color: theme.textMuted,
      fontSize: 12,
      marginTop: 2,
      fontFamily: theme.regular,
    },
    locationRow: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: 4,
      marginTop: 4,
    },
    locationText: {
      color: theme.textMuted,
      fontSize: 12,
      fontFamily: theme.regular,
    },

    // Stats Row
    statsRow: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-around',
      borderTopWidth: 1,
      borderTopColor: theme.borderColor,
      paddingTop: 12,
    },
    statItem: {
      alignItems: 'center',
    },
    statNumber: {
      color: theme.textPrimary,
      fontSize: 22,
      fontFamily: theme.bold,
    },
    statLabel: {
      color: theme.textMuted,
      fontSize: 12,
      marginTop: 2,
      fontFamily: theme.bold,
    },
    statDivider: {
      width: 1,
      height: 40,
      backgroundColor: theme.borderColor,
    },

    // Sab Menu Items (Create Post, View Profile, View Listings, Messages)
    menuItem: {
      backgroundColor: theme.bgCard,
      borderRadius: theme.radiusLg,
      paddingVertical: theme.spacingMd, // Vertical padding barha di
      paddingHorizontal: theme.spacingMd,
      borderWidth: 1,
      borderColor: theme.borderColor,
      marginHorizontal: theme.spacingSm,
      marginBottom: theme.spacingSm,
      flexDirection: 'row',
      alignItems: 'center',
      gap: 12,
    },
    menuIcon: {
      width: 24,
      height: 24,
      justifyContent: 'center',
      alignItems: 'center',
    },
    menuText: {
      color: theme.textPrimary,
      fontSize: 15,
      fontFamily: theme.bold,
      flex: 1,
    },
    menuArrow: {
      alignItems: 'flex-end',
    },

    // Messages Badge (Sirf Messages ke liye)
    badge: {
      backgroundColor: '#EF4444',
      paddingHorizontal: 8,
      paddingVertical: 3,
      borderRadius: theme.radiusFull,
    },
    badgeText: {
      color: '#FFFFFF',
      fontSize: 12,
      fontWeight: 'bold',
    },








    // Shared card wrapper for Suggested People + Top Trends
    sectionCard: {
      backgroundColor: theme.bgCard,
      borderRadius: theme.radiusLg,
      borderWidth: 1,
      borderColor: theme.borderColor,
      padding: theme.spacingMd,
      marginHorizontal: theme.spacingSm,
      marginBottom: theme.spacingSm,
    },

    // Suggested People Section
    suggestedHeader: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: 8,
      marginBottom: 12,
    },
    suggestedTitle: {
      color: theme.textPrimary,
      fontSize: 18,
      fontFamily: theme.bold,
    },
    suggestedItem: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: 12,
      paddingVertical: 10,
      borderBottomWidth: 1,
      borderBottomColor: theme.borderColor,
    },
    suggestedAvatar: {
      width: 40,
      height: 40,
      borderRadius: 20,
      backgroundColor: 'rgba(212, 175, 55, 0.15)',
      borderWidth: 1,
      borderColor: 'rgba(212, 175, 55, 0.4)',
      alignItems: 'center',
      justifyContent: 'center',
    },
    suggestedAvatarText: {
      color: '#D4AF37',
      fontSize: 16,
      fontFamily: theme.bold,
    },
    suggestedInfo: {
      flex: 1,
    },
    suggestedName: {
      color: theme.textPrimary,
      fontSize: 14,
      fontFamily: theme.bold,
    },
    suggestedUsername: {
      color: theme.textMuted,
      fontSize: 12,
      fontFamily: theme.regular,
      marginTop: 2,
    },

    // Follow Button (default: gold outline)
    followBtn: {
      borderWidth: 1,
      borderColor: '#D4AF37',
      borderRadius: 999,
      paddingHorizontal: 14,
      paddingVertical: 6,
    },
    followBtnText: {
      color: '#D4AF37',
      fontSize: 12,
      fontFamily: theme.bold,
    },

    // Follow Button (active: gold filled)
    followBtnActive: {
      backgroundColor: '#D4AF37',
      borderColor: '#D4AF37',
    },
    followBtnTextActive: {
      color: '#0A0A0C',
    },

    // Top Trends Section
    trendsHeader: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: 8,
      marginBottom: 12,
    },
    trendsTitle: {
      color: theme.textPrimary,
      fontSize: 18,
      fontFamily: theme.bold,
    },
    trendItem: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: 10,
      marginBottom: 10,
      borderBottomWidth: 1,
      borderBottomColor: theme.borderColor,
      paddingBottom: 8,
    },
    trendNumber: {
      color: theme.textMuted,
      fontSize: 14,
      fontFamily: theme.regular,
    },
    trendHashtag: {
      color: theme.textPrimary,
      fontSize: 14,
      fontFamily: theme.regular,
      flex: 1,
    },
    trendCount: {
      color: theme.textMuted,
      fontSize: 12,
      fontFamily: theme.regular,
    },

  });
