// myListings.style.ts
import { StyleSheet } from 'react-native';
import { Theme } from '../../constants/theme';

export const getStyles = (theme: Theme) =>
  StyleSheet.create({
    container: {
      flex: 1,
      marginTop: 60,
      marginBottom: 60,
    },

    // Header
    header: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      paddingHorizontal: 16,
      paddingVertical: 12,
      backgroundColor: '#090A0F',
    },
    headerTitle: {
      color: '#FFFFFF',
      fontSize: 20,
      fontWeight: 'bold',
    },
    backBtn: {
      width: 36,
      height: 36,
      borderRadius: 18,
      backgroundColor: '#181A24',
      borderWidth: 1,
      borderColor: '#2A2D3D',
      alignItems: 'center',
      justifyContent: 'center',
    },
    createBtn: {
      backgroundColor: '#0284C7',
      paddingHorizontal: 16,
      paddingVertical: 8,
      borderRadius: 8,
    },
    createBtnText: {
      color: '#FFFFFF',
      fontSize: 13,
      fontWeight: 'bold',
    },

    // Filter Chips
    filterScrollView: {
      maxHeight: 44,
      marginTop: 4,
      marginBottom: 8,
    },
    filterScrollContainer: {
      paddingHorizontal: 16,
      gap: 8,
      alignItems: 'center',
    },
    filterChip: {
      paddingHorizontal: 16,
      paddingVertical: 7,
      borderRadius: 20,
      backgroundColor: '#161822',
      borderWidth: 1,
      borderColor: '#26293B',
    },
    filterChipActive: {
      backgroundColor: '#0284C7',
      borderColor: '#0284C7',
    },
    filterChipText: {
      color: '#8B92A5',
      fontSize: 13,
      fontWeight: '600',
    },
    filterChipTextActive: {
      color: '#FFFFFF',
      fontWeight: '700',
    },

    listingCount: {
      color: '#636B7E',
      fontSize: 13,
      paddingHorizontal: 16,
      marginBottom: 12,
    },

    listContainer: {
      paddingBottom: 40,
    },
    listingCard: {
      backgroundColor: '#13151F',
      borderRadius: 16,
      marginHorizontal: 16,
      marginBottom: 12,
      padding: 14,
      borderWidth: 1,
      borderColor: '#222636',
      position: 'relative',
    },
    cardMain: {
      flexDirection: 'row',
      alignItems: 'flex-start',
    },
    listingImage: {
      width: 64,
      height: 64,
      borderRadius: 12,
      backgroundColor: '#1C2237',
      marginRight: 12,
      borderWidth: 1,
      borderColor: '#2D3348',
    },
    listingInfo: {
      flex: 1,
      justifyContent: 'center',
    },
    listingBrand: {
      color: '#38BDF8',
      fontSize: 11,
      fontWeight: '700',
      letterSpacing: 0.5,
      textTransform: 'uppercase',
      marginBottom: 2,
    },
    listingTitle: {
      color: '#FFFFFF',
      fontSize: 15,
      fontWeight: 'bold',
      marginBottom: 4,
    },
    listingPrice: {
      color: '#F3F4F6',
      fontSize: 17,
      fontWeight: 'bold',
    },

    // 3 Dots & Dropdown Container
    menuWrapper: {
      position: 'relative',
    },
    menuIcon: {
      padding: 4,
      marginTop: -2,
    },
    dropdownMenu: {
      position: 'absolute',
      top: 24,
      right: 0,
      width: 155,
      backgroundColor: '#0F121C',
      borderRadius: 12,
      paddingVertical: 6,
      paddingHorizontal: 6,
      borderWidth: 1,
      borderColor: '#222738',
      elevation: 10,
      shadowColor: '#000000',
      shadowOffset: { width: 0, height: 4 },
      shadowOpacity: 0.4,
      shadowRadius: 10,
      zIndex: 200,
    },
    dropdownItem: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: 10,
      paddingVertical: 8,
      paddingHorizontal: 10,
      borderRadius: 8,
    },
    dropdownText: {
      color: '#38BDF8',
      fontSize: 13,
      fontWeight: '600',
    },
    dropdownTextDelete: {
      color: '#EF4444',
    },

    // Card Footer
    cardFooter: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      marginTop: 12,
      paddingTop: 10,
      borderTopWidth: 1,
      borderTopColor: '#1F2333',
    },
    statusBadge: {
      paddingHorizontal: 10,
      paddingVertical: 4,
      borderRadius: 6,
    },
    statusText: {
      fontSize: 11,
      fontWeight: '700',
    },
    listingMeta: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: 5,
    },
    metaText: {
      color: '#8B92A5',
      fontSize: 12,
    },
    metaDivider: {
      color: '#636B7E',
      fontSize: 12,
      marginHorizontal: 2,
    },

    emptyState: {
      alignItems: 'center',
      justifyContent: 'center',
      paddingVertical: 60,
    },
    emptyStateText: {
      color: '#636B7E',
      fontSize: 14,
    },
  });

