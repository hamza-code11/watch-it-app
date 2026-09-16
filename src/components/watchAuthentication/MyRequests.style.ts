import { StyleSheet } from 'react-native';
import { Theme } from '../../constants/theme';

export const getMyRequestsStyles = (theme: Theme) =>
  StyleSheet.create({
    sectionTitle: {
      color: theme.textPrimary,
      fontSize: 22,
      fontFamily: theme.bold,
      paddingHorizontal: theme.spacingMd,
      paddingTop: theme.spacingLg,
      marginBottom: theme.spacingSm,
    },
    requestCard: {
      backgroundColor: theme.bgCard,
      borderRadius: theme.radiusLg,
      marginHorizontal: theme.spacingSm,
      marginBottom: theme.spacingMd,
      padding: theme.spacingMd,
      borderWidth: 1,
      borderColor: theme.borderColor,
    },
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
      fontFamily: theme.bold,
      marginBottom: 4,
    },
    dateSubmitted: {
      color: theme.textMuted,
      fontSize: 12,
      fontFamily: theme.regular,
    },
    detailsGrid: {
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
      fontFamily: theme.regular,
      marginBottom: 2,
    },
    detailValue: {
      color: theme.textPrimary,
      fontSize: 13,
      fontFamily: theme.bold,
    },
  });


