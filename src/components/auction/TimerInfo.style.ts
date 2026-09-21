import { StyleSheet } from 'react-native';
import { Theme } from '../../constants/theme';

const GOLD = '#8bbdd9'; 

export const getTimerInfoStyles = (theme: Theme) =>
    StyleSheet.create({
        container: { paddingHorizontal: theme.spacingMd, paddingTop: theme.spacingMd },
        titleRow: { flexDirection: 'row', alignItems: 'flex-start', gap: 10 },
        brand: { color: GOLD, fontSize: 11, letterSpacing: 1.5, fontFamily: theme.bold },
        name: { color: theme.textPrimary, fontSize: 24, fontFamily: theme.bold, marginTop: 4 },
        ref: { color: theme.textMuted, fontSize: 12, fontFamily: theme.regular, marginTop: 2 },
        infoBtn: {
            width: 40, height: 40, borderRadius: 20,
            borderWidth: 1, borderColor: `${GOLD}60`,
            alignItems: 'center', justifyContent: 'center',
        },

        priceRow: {
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginTop: theme.spacingMd,
            paddingVertical: theme.spacingMd,
            borderTopWidth: 1, borderBottomWidth: 1,
            borderColor: theme.borderColor,
        },
        priceBlock: { flex: 1 },
        priceLabel: { color: theme.textMuted, fontSize: 11, fontFamily: theme.regular },
        priceValue: { color: GOLD, fontSize: 18, fontFamily: theme.bold, marginTop: 4 },
        priceSub: { color: theme.textPrimary, fontSize: 14, fontFamily: theme.bold, marginTop: 4 },

        endsLabel: {
            color: theme.textMuted, fontSize: 12,
            fontFamily: theme.regular,
            marginTop: theme.spacingMd, marginBottom: 8,
        },
        timerRow: { flexDirection: 'row', gap: 8 },
        timeCell: {
            flex: 1,
            backgroundColor: theme.bgCard,
            borderRadius: 10,
            paddingVertical: 12,
            alignItems: 'center',
            borderWidth: 1, borderColor: theme.borderColor,
        },
        timeValue: { color: theme.textPrimary, fontSize: 20, fontFamily: theme.bold },
        timeLabel: { color: theme.textMuted, fontSize: 10, fontFamily: theme.regular, marginTop: 2 },

        yourBidLabel: {
            color: theme.textMuted, fontSize: 12,
            fontFamily: theme.regular,
            marginTop: theme.spacingMd, marginBottom: 8,
        },
        bidRow: { flexDirection: 'row', gap: 8, alignItems: 'center' },
        bidInputWrap: {
            flex: 1,
            height: 48,
            backgroundColor: theme.bgCard,
            borderRadius: 10,
            paddingHorizontal: 14,
            justifyContent: 'center',
            borderWidth: 1,
            borderColor: theme.borderColor,
        },
        bidInput: {
            color: theme.textPrimary,
            fontSize: 14,
            fontFamily: theme.regular,
            paddingVertical: 0,
            padding: 0,
        },
        chip: {
            height: 48,
            paddingHorizontal: 12,
            borderRadius: 10,
            borderWidth: 1,
            borderColor: theme.borderColor,
            backgroundColor: theme.bgCard,
            alignItems: 'center',
            justifyContent: 'center',
        },
        chipText: { color: theme.textPrimary, fontSize: 12, fontFamily: theme.bold },

        placeBidBtn: {
            marginTop: theme.spacingMd,
            borderRadius: 12,
            overflow: 'hidden',
        },

        placeBidBtnInner: {
            width: '100%',
            paddingVertical: 16,
            alignItems: 'center',
            justifyContent: 'center',
        },

        placeBidText: {
            color: '#0D1322',
            fontSize: 15,
            fontFamily: theme.bold,
        },
        trustLine: {
            color: theme.textMuted, fontSize: 11,
            fontFamily: theme.regular,
            textAlign: 'center',
            marginTop: theme.spacingSm,
            marginBottom: theme.spacingMd,
        },
    });
