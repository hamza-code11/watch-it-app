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
      paddingHorizontal: theme.spacingLg,
      paddingVertical: theme.spacingMd,
    },
    backBtn: {
      padding: 4,
    },
    headerTitle: {
      color: theme.textPrimary,
      fontSize: 15,
      fontWeight: '600',
    },
    contentContainer: {
      paddingBottom: 40,
    },

    // Profile Card
    profileCard: {
      backgroundColor: theme.bgCard,
      borderRadius: theme.radiusXl,
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
      fontWeight: 'bold',
    },
    userInfo: {
      flex: 1,
    },
    userName: {
      color: theme.textPrimary,
      fontSize: 20,
      fontWeight: 'bold',
    },
    userRole: {
      color: theme.textMuted,
      fontSize: 13,
      marginTop: 2,
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
      fontWeight: 'bold',
    },
    statLabel: {
      color: theme.textMuted,
      fontSize: 12,
      marginTop: 2,
    },
    statDivider: {
      width: 1,
      height: 40,
      backgroundColor: theme.borderColor,
    },

    // Sab Menu Items (Create Post, View Profile, View Listings, Messages)
    menuItem: {
      backgroundColor: theme.bgCard,
      borderRadius: theme.radiusXl,
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
      fontWeight: '600',
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

    // Joined Row
    joinedRow: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: 8,
      marginTop: 12,
    },
    joinedText: {
      color: theme.textMuted,
      fontSize: 12,
    },

    // Top Trends Section
    trendsContainer: {
      marginHorizontal: theme.spacingMd,
      marginTop: theme.spacingSm,
    },
    trendsHeader: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: 8,
      marginBottom: 12,
    },
    trendsTitle: {
      color: theme.textPrimary,
      fontSize: 18,
      fontWeight: 'bold',
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
      fontWeight: 'bold',
    },
    trendHashtag: {
      color: theme.textPrimary,
      fontSize: 14,
      fontWeight: '600',
      flex: 1,
    },
    trendCount: {
      color: theme.textMuted,
      fontSize: 13,
    },
  });
