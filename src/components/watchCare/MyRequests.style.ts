import { StyleSheet } from 'react-native';
import { Theme } from '../../constants/theme';

export const getMyRequestsStyles = (theme: Theme) =>
  StyleSheet.create({
    // Section Container
    container: {
      paddingHorizontal: theme.spacingSm,
      paddingVertical: theme.spacingMd,
    },

    // Section Heading
    sectionTitle: {
      color: theme.textPrimary,
      fontSize: 24,
      fontFamily: theme.bold,
      marginBottom: 4,
    },
    sectionSubtitle: {
      color: theme.textMuted,
      fontSize: 14,
      marginBottom: theme.spacingSm,
    },

    // Request Card
    requestCard: {
      backgroundColor: theme.bgCard,
      borderRadius: theme.radiusXl,
      padding: theme.spacingMd,
      marginBottom: theme.spacingMd,
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
      fontFamily: theme.regular,
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
      fontFamily: theme.bold,
    },

    // Main Row (Image + Info)
    mainRow: {
      flexDirection: 'row',
      alignItems: 'center',
      marginBottom: theme.spacingMd,
    },
    serviceImage: {
      width: 70,
      height: 70,
      borderRadius: theme.radiusMd,
      backgroundColor: theme.bgTertiary,
      marginRight: theme.spacingMd,
      borderWidth: 1,
      borderColor: theme.borderLight,
    },
    serviceInfo: {
      flex: 1,
    },
    serviceName: {
      color: theme.textPrimary,
      fontSize: 16,
      fontFamily: theme.bold,
      marginBottom: 4,
    },
    dateSubmitted: {
      color: theme.textMuted,
      fontSize: 12,
      fontFamily: theme.regular,
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
      fontFamily: theme.bold,
    },
    detailValue: {
      color: theme.textPrimary,
      fontSize: 13,
      fontFamily: theme.regular,
    },
  });
  