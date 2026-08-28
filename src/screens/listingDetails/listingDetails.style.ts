import { StyleSheet } from 'react-native';
import { Theme } from '../../constants/theme';

export const getStyles = (theme: Theme) =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#090A0F',
    },

    // Header
    header: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      paddingHorizontal: 16,
      paddingVertical: 12,
      backgroundColor: '#090A0F',
      borderBottomWidth: 1,
      borderBottomColor: '#1F2333',
    },
    closeBtn: {
      width: 36,
      height: 36,
      borderRadius: 18,
      backgroundColor: '#181A24',
      borderWidth: 1,
      borderColor: '#2A2D3D',
      alignItems: 'center',
      justifyContent: 'center',
    },
    headerTitle: {
      color: '#FFFFFF',
      fontSize: 18,
      fontWeight: 'bold',
    },
    editBtn: {
      backgroundColor: '#181A24',
      borderWidth: 1,
      borderColor: '#2A2D3D',
      paddingHorizontal: 14,
      paddingVertical: 8,
      borderRadius: 8,
      flexDirection: 'row',
      alignItems: 'center',
      gap: 6,
    },
    editBtnText: {
      color: '#FFFFFF',
      fontSize: 13,
      fontWeight: '600',
    },

    // Main Content Scroll
    contentContainer: {
      padding: 16,
      paddingBottom: 40,
    },

    // Status Badge (Top Left of Image)
    imageContainer: {
      position: 'relative',
      marginBottom: 16,
    },
    image: {
      width: '100%',
      height: 280,
      borderRadius: 16,
      backgroundColor: '#1C2237',
    },
    statusBadge: {
      position: 'absolute',
      top: 12,
      left: 12,
      paddingHorizontal: 10,
      paddingVertical: 5,
      borderRadius: 8,
      flexDirection: 'row',
      alignItems: 'center',
      gap: 5,
    },
    statusText: {
      color: '#FFFFFF',
      fontSize: 12,
      fontWeight: '700',
    },

    // Product Info
    brand: {
      color: '#38BDF8',
      fontSize: 13,
      fontWeight: '700',
      textTransform: 'uppercase',
      letterSpacing: 0.5,
      marginBottom: 4,
    },
    title: {
      color: '#FFFFFF',
      fontSize: 22,
      fontWeight: 'bold',
      marginBottom: 6,
    },
    price: {
      color: '#38BDF8',
      fontSize: 24,
      fontWeight: 'bold',
      marginBottom: 8,
    },
    metaRow: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: 8,
      marginBottom: 16,
    },
    metaText: {
      color: '#8B92A5',
      fontSize: 13,
    },

    // Listing Features
    sectionTitle: {
      color: '#FFFFFF',
      fontSize: 16,
      fontWeight: 'bold',
      marginBottom: 10,
    },
    featuresRow: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      gap: 8,
      marginBottom: 16,
    },
    featureChip: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: 6,
      paddingHorizontal: 12,
      paddingVertical: 8,
      borderRadius: 8,
      borderWidth: 1,
    },
    featureChipText: {
      fontSize: 13,
      fontWeight: '600',
    },

    // Specifications
    specsContainer: {
      marginBottom: 16,
    },
    specsGrid: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      gap: 10,
    },
    specItem: {
      width: '48%',
      backgroundColor: '#13151F',
      borderRadius: 12,
      padding: 12,
      borderWidth: 1,
      borderColor: '#222636',
    },
    specLabel: {
      color: '#8B92A5',
      fontSize: 11,
      marginBottom: 4,
    },
    specValue: {
      color: '#FFFFFF',
      fontSize: 14,
      fontWeight: '600',
    },

    // Condition & Details (Description)
    descriptionContainer: {
      marginBottom: 24,
    },
    descriptionText: {
      color: '#C7C9DE',
      fontSize: 14,
      lineHeight: 22,
    },

    // Buttons
    buttonsRow: {
      flexDirection: 'row',
      gap: 12,
    },
    closeBtnMain: {
      flex: 1,
      backgroundColor: '#13151F',
      borderRadius: 12,
      paddingVertical: 14,
      alignItems: 'center',
      borderWidth: 1,
      borderColor: '#222636',
    },
    closeBtnText: {
      color: '#FFFFFF',
      fontSize: 15,
      fontWeight: '600',
    },
    editBtnMain: {
      flex: 1,
      backgroundColor: '#0284C7',
      borderRadius: 12,
      paddingVertical: 14,
      alignItems: 'center',
      flexDirection: 'row',
      justifyContent: 'center',
      gap: 8,
    },
    editBtnMainText: {
      color: '#FFFFFF',
      fontSize: 15,
      fontWeight: 'bold',
    },
  });

  