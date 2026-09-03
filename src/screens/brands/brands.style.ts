import { StyleSheet } from 'react-native';
import { Theme } from '../../constants/theme';

export const getStyles = (theme: Theme) =>
    StyleSheet.create({
        container: {
            flex: 1,
            marginTop: 60,
            marginBottom: 60,
        },
        contentContainer: {
            paddingBottom: 80,
        },

        // Top Header Row (Back Button + Title)
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

        // Banner (Blue Gradient)
        banner: {
            paddingHorizontal: theme.spacingLg,
            paddingVertical: theme.spacingLg,
        },
        bannerTitle: {
            color: '#FFFFFF',
            fontSize: 28,
            fontWeight: 'bold',
            fontFamily: theme.fontFamily,
            marginBottom: 8,
        },
        bannerSubtitle: {
            color: 'rgba(255,255,255,0.9)',
            fontSize: 14,
            lineHeight: 22,
        },

        // Search Bar
        searchContainer: {
            paddingHorizontal: theme.spacingMd,
            marginBottom: theme.spacingMd,
            marginTop: theme.spacingMd,
        },
        searchRow: {
            flexDirection: 'row',
            alignItems: 'center',
            gap: 10,
        },
        searchBox: {
            flex: 1,
            flexDirection: 'row',
            alignItems: 'center',
            gap: 8,
            backgroundColor: theme.bgCard,
            borderRadius: theme.radiusFull,
            paddingHorizontal: 14,
            paddingVertical: 0,
            borderWidth: 1,
            borderColor: theme.borderColor,
        },
        searchInput: {
            flex: 1,
            color: theme.textPrimary,
            fontSize: 14,
        },
        viewToggle: {
            flexDirection: 'row',
            gap: 6,
        },
        toggleBtn: {
            width: 32,
            height: 32,
            borderRadius: 8,
            backgroundColor: theme.bgCard,
            borderWidth: 1,
            borderColor: theme.borderColor,
            alignItems: 'center',
            justifyContent: 'center',
        },
        toggleBtnActive: {
            backgroundColor: theme.accentPrimary,
            borderColor: theme.accentPrimary,
        },

        // Alphabet Filters
        alphabetRow: {
            flexDirection: 'row',
            paddingHorizontal: theme.spacingMd,
            marginBottom: theme.spacingMd,
        },
        alphabetScroll: {
            flexGrow: 0,
        },
        filterChip: {
            paddingHorizontal: 12,
            paddingVertical: 8,
            borderRadius: theme.radiusSm,
            backgroundColor: theme.bgTertiary,
            marginRight: 6,
        },
        filterChipActive: {
            backgroundColor: theme.accentPrimary,
        },
        filterText: {
            color: theme.textMuted,
            fontSize: 14,
            fontWeight: '600',
        },
        filterTextActive: {
            color: '#FFFFFF',
            fontWeight: 'bold',
        },

        // Count
        countText: {
            color: theme.textMuted,
            fontSize: 14,
            paddingHorizontal: theme.spacingMd,
            marginBottom: theme.spacingMd,
        },

        // Brands Grid (Grid View)
        brandsGrid: {
            flexDirection: 'row',
            flexWrap: 'wrap',
            paddingHorizontal: theme.spacingSm,
        },
        brandCard: {
            width: '48%',
            aspectRatio: 1.2,
            backgroundColor: theme.bgCard,
            borderRadius: theme.radiusLg,
            marginBottom: theme.spacingMd,
            marginHorizontal: '1%',
            borderWidth: 1,
            borderColor: theme.borderColor,
            alignItems: 'center',
            justifyContent: 'center',
            padding: 0,
        },
        brandLogo: {
            width: '100%',
            height: '70%',
            resizeMode: 'contain',
            marginBottom: 8,
            borderRadius: theme.radiusLg,
        },
        brandName: {
            color: theme.textPrimary,
            fontSize: 14,
            fontWeight: '600',
            textAlign: 'center',
        },

        // Brands List (List View) - Detailed Design
        brandsList: {
            paddingHorizontal: theme.spacingMd,
        },
        brandListItem: {
            flexDirection: 'row',
            alignItems: 'center',
            gap: 16,
            paddingVertical: 2,
            borderBottomWidth: 1,
            borderBottomColor: theme.borderColor,
            backgroundColor: theme.bgCard,
            borderRadius: theme.radiusLg,
            marginBottom: theme.spacingSm,
            paddingHorizontal: 12,
        },
        brandListLogo: {
            width: 80,
            height: 80,
            resizeMode: 'contain',
            borderRadius: theme.radiusLg,
        },
        brandListInfo: {
            flex: 1,
        },
        brandListName: {
            color: theme.textPrimary,
            fontSize: 18,
            fontWeight: 'bold',
        },
        brandListMeta: {
            flexDirection: 'row',
            alignItems: 'center',
            gap: 8,
            marginTop: 4,
        },
        brandListWatches: {
            color: theme.textMuted,
            fontSize: 13,
        },
        brandListRating: {
            flexDirection: 'row',
            alignItems: 'center',
            gap: 4,
        },
        brandListRatingText: {
            color: theme.textPrimary,
            fontSize: 13,
            fontWeight: '600',
        },
        brandListRatingCount: {
            color: theme.textMuted,
            fontSize: 13,
        },
        brandListCountry: {
            color: theme.textMuted,
            fontSize: 13,
            marginTop: 4,
        },
    });