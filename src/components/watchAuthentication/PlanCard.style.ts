import { StyleSheet } from 'react-native';
import { Theme } from '../../constants/theme';

export const getPlanCardStyles = (theme: Theme) =>
  StyleSheet.create({
    pageHeader: {
      marginHorizontal: theme.spacingSm,
      marginTop: theme.spacingSm,
      marginBottom: theme.spacingXs,
    },
    pageTitle: {
      color: '#FFFFFF',
      fontSize: 18,
      fontFamily: theme.bold,
      marginBottom: 4,
    },
    pageSubtitle: {
      color: '#94A3B8',
      fontSize: 12,
      lineHeight: 16,
      fontFamily: theme.regular,
    },

    planCard: {
      backgroundColor: '#0E1626',
      borderRadius: theme.radiusLg,
      margin: theme.spacingSm,
      padding: theme.spacingSm,
      borderWidth: 1,
      borderColor: 'rgba(212, 175, 55, 0.15)',
    },

    // Row: left column (header + image) + right column (content)
    planRow: {
      flexDirection: 'row',
      gap: 10,
      alignItems: 'stretch',
    },

    // Left column: holds header on top and image below
    planLeft: {
      width: 130,
    },

    // Header (Number + Title) — now inside left column
    planHeader: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: 6,
      marginBottom: 6,
    },
    numberBadge: {
      width: 22,
      height: 22,
      borderRadius: 11,
      backgroundColor: '#D4AF37',
      alignItems: 'center',
      justifyContent: 'center',
    },
    numberText: {
      color: '#0A0A0C',
      fontSize: 13,
      fontFamily: theme.regular,
    },
    planName: {
      color: '#FFFFFF',
      fontSize: 14,
      fontFamily: theme.bold,
      flexShrink: 1,
    },

    // Image fills remaining height of left column
    planImage: {
      width: '100%',
      flex: 1,
      borderRadius: theme.radiusLg,
      backgroundColor: '#1E293B',
    },

    // Right column
    planContent: {
      flex: 1,
      justifyContent: 'space-between',
    },

    planDescription: {
      color: '#94A3B8',
      fontSize: 11,
      lineHeight: 16,
      marginBottom: 8,
      fontFamily: theme.regular,
    },

    // Features
    planFeatures: {
      marginBottom: 10,
    },
    planFeature: {
      flexDirection: 'row',
      alignItems: 'flex-start',
      gap: 5,
      marginBottom: 4,
    },
    planFeatureText: {
      color: '#CBD5E1',
      fontSize: 10,
      flexShrink: 1,
      lineHeight: 14,
      fontFamily: theme.regular,
    },

    // Gold Button
    planButton: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 6,
      backgroundColor: '#F5E6B8',
      borderRadius: 10,
      paddingVertical: 9,
      paddingHorizontal: 12,
    },
    planButtonText: {
      color: '#0A0A0C',
      fontSize: 12,
      fontFamily: theme.bold,
    },
  });
