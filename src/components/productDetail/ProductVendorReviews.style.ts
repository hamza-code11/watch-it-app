import { StyleSheet } from 'react-native';
import { Theme } from '../../constants/theme';

export const getVendorReviewsStyles = (theme: Theme) =>
  StyleSheet.create({
    container: {
      marginTop: theme.spacingLg,
    },
    tabsRow: {
      flexDirection: 'row',
    },
    tab: {
      flex: 1,
      paddingVertical: 12,
      alignItems: 'center',
      borderBottomWidth: 2,
    },
    activeTab: {
      borderBottomColor: theme.accentPrimary,
    },
    tabText: {
      color: theme.textMuted,
      fontSize: 16,
      fontWeight: '600',
    },
    activeTabText: {
      color: theme.accentPrimary,
      fontWeight: 'bold',
    },

    // Vendor Information Section
    vendorSection: {
      paddingTop: theme.spacingLg,
      paddingBottom: theme.spacingLg,
      backgroundColor: theme.bgCard,
      paddingHorizontal: theme.spacingMd,
    },
    vendorHeader: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: 12,
      marginBottom: 12,
    },
    vendorAvatar: {
      width: 60,
      height: 60,
      borderRadius: 30,
      alignItems: 'center',
      justifyContent: 'center',
      shadowColor: '#4F9FFF',
      shadowOffset: { width: 0, height: 0 },
      shadowOpacity: 0.5,
      shadowRadius: 10,
      elevation: 8,
    },
    vendorAvatarText: {
      color: '#FFFFFF',
      fontSize: 18,
      fontWeight: 'bold',
    },
    vendorInfo: {
      flex: 1,
    },
    vendorNameRow: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: 6,
      marginBottom: 4,
    },
    vendorName: {
      color: theme.textPrimary,
      fontSize: 18,
      fontWeight: 'bold',
    },
    verifiedBadge: {
      width: 18,
      height: 18,
      borderRadius: 9,
      backgroundColor: '#3B82F6',
      alignItems: 'center',
      justifyContent: 'center',
    },
    ratingRow: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: 4,
      marginBottom: 4,
    },
    ratingStars: {
      flexDirection: 'row',
      gap: 2,
    },
    ratingText: {
      color: theme.textMuted,
      fontSize: 13,
      fontWeight: '600',
    },
    metaRow: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: 12,
    },
    metaItem: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: 4,
    },
    metaText: {
      color: theme.textMuted,
      fontSize: 12,
    },

    // Vendor Description
    vendorDescription: {
      color: theme.textSecondary,
      fontSize: 14,
      lineHeight: 22,
      marginBottom: 12,
    },

    // Vendor Stats (3 Columns)
    vendorStatsRow: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      marginBottom: 12,
    },
    vendorStat: {
      alignItems: 'center',
      flex: 1,
      margin: 6,
      backgroundColor: theme.bgSecondary,
      padding: 10,
      borderRadius: theme.radiusLg,
    },
    vendorStatIcon: {
      width: 24,
      height: 24,
      marginBottom: 8,
    },
    
    vendorStatNumber: {
      color: theme.textPrimary,
      fontSize: 18,
      fontWeight: 'bold',
    },
    vendorStatLabel: {
      color: theme.textMuted,
      fontSize: 11,
      marginTop: 2,
    },

    // Visit Store Button (White Gradient)
    visitStoreBtnWrapper: {
      borderRadius: theme.radiusFull,
      overflow: 'hidden',
    },
    visitStoreBtn: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 8,
      paddingVertical: 16,
      width: '100%',
    },
    visitStoreText: {
      color: '#000000',
      fontSize: 16,
      fontWeight: 'bold',
    },

    // ===== REVIEWS SECTION (Image ke mutabiq) =====
    reviewsContainer: {
      marginBottom: 16,
    },
    reviewSummaryCard: {
      backgroundColor: theme.bgCard,
      borderRadius: theme.radiusLg,
      borderWidth: 1,
      borderColor: theme.borderColor,
      padding: 16,
      flexDirection: 'row',
      alignItems: 'center',
      gap: 20,
      marginBottom: 16,
    },
    avgRatingContainer: {
      alignItems: 'center',
    },
    avgRatingNumber: {
      color: theme.textPrimary,
      fontSize: 32,
      fontWeight: 'bold',
    },
    avgRatingStars: {
      flexDirection: 'row',
      gap: 2,
      marginTop: 4,
    },
    avgRatingText: {
      color: theme.textMuted,
      fontSize: 12,
      marginTop: 4,
    },
    ratingBarsContainer: {
      flex: 1,
      gap: 4,
    },
    ratingBarRow: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: 8,
    },
    ratingBarLabel: {
      color: theme.textMuted,
      fontSize: 12,
      width: 20,
    },
    ratingBarTrack: {
      flex: 1,
      height: 6,
      borderRadius: 3,
      backgroundColor: theme.bgTertiary,
    },
    ratingBarFill: {
      height: 6,
      borderRadius: 3,
      backgroundColor: '#10B981',
    },
    ratingBarCount: {
      color: theme.textMuted,
      fontSize: 12,
      width: 20,
      textAlign: 'right',
    },

    // Reviews List
    reviewCard: {
      flexDirection: 'row',
      alignItems: 'flex-start',
      gap: 12,
      padding: 16,
      borderRadius: theme.radiusLg,
      borderWidth: 1,
      borderColor: theme.borderColor,
      backgroundColor: theme.bgCard,
      marginBottom: 12,
    },
    reviewAvatar: {
      width: 40,
      height: 40,
      borderRadius: 20,
      alignItems: 'center',
      justifyContent: 'center',
      shadowColor: '#4F9FFF',
      shadowOffset: { width: 0, height: 0 },
      shadowOpacity: 0.5,
      shadowRadius: 8,
      elevation: 6,
    },
    reviewAvatarText: {
      color: '#FFFFFF',
      fontSize: 14,
      fontWeight: 'bold',
    },
    reviewContent: {
      flex: 1,
    },
    reviewHeader: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      marginBottom: 4,
    },
    reviewerName: {
      color: theme.textPrimary,
      fontSize: 14,
      fontWeight: 'bold',
    },
    reviewDate: {
      color: theme.textMuted,
      fontSize: 12,
    },
    reviewTitle: {
      color: theme.textPrimary,
      fontSize: 14,
      fontWeight: 'bold',
      marginTop: 4,
    },
    reviewStars: {
      flexDirection: 'row',
      gap: 2,
      marginBottom: 4,
      marginTop: 2,
    },
    reviewText: {
      color: theme.textSecondary,
      fontSize: 13,
      lineHeight: 20,
      marginTop: 4,
    },
    helpfulBtn: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: 4,
      paddingVertical: 8,
      paddingHorizontal: 12,
      borderRadius: theme.radiusFull,
      borderWidth: 1,
      borderColor: theme.borderColor,
      backgroundColor: theme.bgInput,
      marginTop: 8,
      alignSelf: 'flex-start',
    },
    helpfulBtnText: {
      color: theme.textMuted,
      fontSize: 12,
      fontWeight: '600',
    },
  });


