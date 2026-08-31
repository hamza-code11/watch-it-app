import { StyleSheet } from 'react-native';
import { Theme } from '../../constants/theme';

export const getMyRequestsStyles = (theme: Theme) =>
  StyleSheet.create({
    // Section Heading
    sectionTitle: {
      color: theme.textPrimary,
      fontSize: 22,
      fontWeight: 'bold',
      fontFamily: theme.fontFamily,
      paddingHorizontal: theme.spacingLg,
      paddingTop: theme.spacingLg,
      marginBottom: theme.spacingMd,
    },

    // Request Card
    requestCard: {
      backgroundColor: theme.bgCard,
      borderRadius: theme.radiusXl,
      marginHorizontal: theme.spacingLg,
      marginBottom: theme.spacingMd,
      padding: theme.spacingMd,
      borderWidth: 1,
      borderColor: theme.borderColor,
    },

    // Card Header (ID + Status)
    cardHeader: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      marginBottom: theme.spacingMd,
    },
    requestId: {
      color: theme.textMuted,
      fontSize: 12,
      fontWeight: '600',
    },
    statusBadge: {
      paddingHorizontal: 10,
      paddingVertical: 4,
      borderRadius: theme.radiusFull,
      flexDirection: 'row',
      alignItems: 'center',
    },
    statusText: {
      color: '#FFFFFF',
      fontSize: 11,
      fontWeight: '700',
    },

    // Main Row (Image + Info)
    mainRow: {
      flexDirection: 'row',
      alignItems: 'center',
      marginBottom: theme.spacingMd,
    },
    watchImage: {
      width: 70,
      height: 70,
      borderRadius: theme.radiusMd,
      backgroundColor: theme.bgTertiary,
      marginRight: theme.spacingMd,
      borderWidth: 1,
      borderColor: theme.borderLight,
    },
    watchInfo: {
      flex: 1,
    },
    watchName: {
      color: theme.textPrimary,
      fontSize: 16,
      fontWeight: 'bold',
      marginBottom: 4,
    },
    dateSubmitted: {
      color: theme.textMuted,
      fontSize: 12,
    },

    // Details Grid
    detailsGrid: {
      display: 'flex',
      flexDirection: 'row',
      flexWrap: 'wrap',
      marginBottom: theme.spacingMd,
    },
    detailItem: {
      width: '33.33%',
      paddingVertical: 6,
    },
    detailLabel: {
      color: theme.textMuted,
      fontSize: 11,
      marginBottom: 2,
    },
    detailValue: {
      color: theme.textPrimary,
      fontSize: 13,
      fontWeight: '600',
    },

  });

  