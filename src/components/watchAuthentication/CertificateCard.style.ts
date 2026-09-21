import { StyleSheet } from 'react-native';
import { Theme } from '../../constants/theme';

export const getCertificateStyles = (theme: Theme) =>
  StyleSheet.create({
    wrapper: {
      flexDirection: 'row',
      gap: 12,
      backgroundColor: '#0E1626',
      borderRadius: theme.radiusLg,
      padding: theme.spacingSm,
      borderWidth: 1,
      borderColor: 'rgba(212, 175, 55, 0.2)',
      margin: theme.spacingSm,
    },

    // Left: Certificate preview
    certificate: {
      flex: 1,
      backgroundColor: '#F5EFE0',
      borderRadius: theme.radiusMd,
      padding: 10,
      alignItems: 'center',
      borderWidth: 1,
      borderColor: theme.borderColor,
    },
    certTitle: {
      color: '#3A2E14',
      fontSize: 13,
      fontFamily: theme.bold,
      letterSpacing: 1,
      marginTop: 2,
    },
    certSubtitle: {
      color: '#6B5A2E',
      fontSize: 7,
      fontFamily: theme.bold,
      letterSpacing: 0.5,
      marginBottom: 6,
    },
    certTable: {
      width: '100%',
      borderTopWidth: 0.5,
      borderColor: theme.borderColor,
    },
    certRow: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      paddingVertical: 2.5,
      borderBottomWidth: 0.5,
      borderColor: theme.borderColor,
    },
    certLabel: {
      color: '#5A4A28',
      fontSize: 7,
      fontFamily: theme.regular,
    },
    certValue: {
      color: '#2E2410',
      fontSize: 7,
      fontFamily: theme.bold,
    },
    certFooter: {
      color: '#8B6F2E',
      fontSize: 6,
      fontFamily: theme.bold,
      letterSpacing: 0.8,
      marginTop: 6,
    },

    // Right: Info panel
    info: {
      flex: 1,
      justifyContent: 'center',
    },
    infoTitle: {
      color: '#FFFFFF',
      fontSize: 18,
      fontFamily: theme.bold,
      marginBottom: 6,
    },
    infoText: {
      color: '#94A3B8',
      fontSize: 11,
      lineHeight: 16,
      fontFamily: theme.regular,
      marginBottom: 12,
    },
    viewButton: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 8,
      borderWidth: 1,
      borderColor: theme.borderColor,
      borderRadius: 10,
      paddingVertical: 10,
      paddingHorizontal: 14,
      alignSelf: 'flex-start',
    },
    viewButtonText: {
      color: theme.accentSecondary,
      fontSize: 12,
      fontFamily: theme.bold,
    },
  });

  