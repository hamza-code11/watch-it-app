import { StyleSheet } from 'react-native';
import { Theme } from '../../constants/theme';

export const getBannerStyles = (theme: Theme) =>
  StyleSheet.create({
    // Full-width wrapper
    wrapper: {
      width: '100%',
    },

    // Background image container
    banner: {
      width: '100%',
      minHeight: 300,
      justifyContent: 'flex-end',
    },
    bannerImage: {
      // Ensures image fills nicely
    },

    // Left-side dark overlay (absolute, behind content)
    leftOverlay: {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
    },

    // Bottom gradient overlay (holds all content)
    overlay: {
      width: '100%',
      paddingHorizontal: theme.spacingLg,
      paddingTop: theme.spacingXl,
      paddingBottom: theme.spacingLg,
      justifyContent: 'flex-end',
    },

    // SERVICES label
    serviceLabel: {
      color: theme.accentSecondary,
      fontSize: 11,
      fontFamily: theme.bold,
      letterSpacing: 2,
      marginBottom: 6,
    },

    // Heading
    bannerTitle: {
      color: '#FFFFFF',
      fontSize: 28,
      fontFamily: theme.bold,
      lineHeight: 34,
      marginBottom: theme.spacingXs,
    },

    // Subtitle
    bannerSubtitle: {
      color: 'rgba(255,255,255,0.9)',
      fontSize: 13,
      lineHeight: 19,
      fontFamily: theme.regular,
      marginBottom: theme.spacingMd,
    },

    // Book a Service button (gold)
    bookBtn: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 8,
      backgroundColor: theme.accentPrimary,
      borderRadius: 12,
      paddingVertical: 12,
      paddingHorizontal: 18,
      alignSelf: 'flex-start',
      marginBottom: theme.spacingLg,
    },
    bookBtnText: {
      color: 'white',
      fontSize: 14,
      fontFamily: theme.bold,
    },

    // Trust items row (4 items)
    trustRow: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      gap: 6,
    },
    trustItem: {
      flex: 1,
      alignItems: 'center',
      gap: 3,
    },
    trustTitle: {
      color: '#FFFFFF',
      fontSize: 10,
      fontFamily: theme.bold,
      textAlign: 'center',
    },
    trustDesc: {
      color: 'rgba(255,255,255,0.7)',
      fontSize: 8.5,
      lineHeight: 11,
      fontFamily: theme.regular,
      textAlign: 'center',
    },
  });
