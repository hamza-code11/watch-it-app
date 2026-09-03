import { StyleSheet } from 'react-native';
import { Theme } from '../../constants/theme';

export const getPersonalChatStyles = (theme: Theme) =>
  StyleSheet.create({
    container: {
      flex: 1,
      marginTop: 70,
      marginBottom: 70,
    },
    header: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: 10,
      paddingHorizontal: theme.spacingLg,
      paddingVertical: theme.spacingMd,
      borderBottomWidth: 1,
      borderBottomColor: theme.borderColor,
    },
    backBtn: {
      padding: 4,
    },
    headerAvatar: {
      width: 40,
      height: 40,
      borderRadius: 20,
      alignItems: 'center',
      justifyContent: 'center',
    },
    headerAvatarText: {
      color: '#FFFFFF',
      fontSize: 14,
      fontWeight: 'bold',
    },
    headerInfo: {
      flex: 1,
    },
    headerName: {
      color: theme.textPrimary,
      fontSize: 16,
      fontWeight: 'bold',
    },
    headerStatus: {
      color: theme.textMuted,
      fontSize: 12,
    },
    messagesContainer: {
      flex: 1,
      paddingHorizontal: theme.spacingLg,
      paddingVertical: theme.spacingMd,
    },
    messageRow: {
      marginBottom: 12,
      flexDirection: 'row',
    },
    messageRowSent: {
      justifyContent: 'flex-end',
    },
    messageRowReceived: {
      justifyContent: 'flex-start',
    },
    messageBubble: {
      maxWidth: '75%',
      paddingHorizontal: 14,
      paddingVertical: 10,
      borderRadius: 18,
    },
    messageBubbleSent: {
      backgroundColor: theme.accentPrimary,
      borderBottomRightRadius: 4,
    },
    messageBubbleReceived: {
      backgroundColor: theme.bgCard,
      borderBottomLeftRadius: 4,
      borderWidth: 1,
      borderColor: theme.borderColor,
    },
    messageImage: {
      width: 200,
      height: 200,
      borderRadius: 12,
      marginBottom: 6,
    },
    fileChip: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: 6,
      marginBottom: 6,
      maxWidth: 200,
    },
    fileChipText: {
      color: theme.textPrimary,
      fontSize: 13,
      flexShrink: 1,
    },
    messageText: {
      color: theme.textPrimary,
      fontSize: 14,
      lineHeight: 20,
    },
    messageTextSent: {
      color: '#FFFFFF',
    },
    messageTime: {
      fontSize: 10,
      marginTop: 4,
      alignSelf: 'flex-end',
    },
    messageTimeSent: {
      color: 'rgba(255,255,255,0.75)',
    },
    messageTimeReceived: {
      color: theme.textMuted,
    },
    inputContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: 8,
      paddingHorizontal: theme.spacingLg,
      paddingVertical: theme.spacingSm,
      borderTopWidth: 1,
      borderTopColor: theme.borderColor,
      backgroundColor: theme.bgPrimary,
    },
    attachBtn: {
      width: 36,
      height: 36,
      borderRadius: 18,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: theme.bgInput,
      borderWidth: 1,
      borderColor: theme.borderLight,
    },
    input: {
      flex: 1,
      backgroundColor: theme.bgInput,
      borderRadius: theme.radiusFull,
      paddingHorizontal: 14,
      paddingVertical: 10,
      color: theme.textPrimary,
      fontSize: 14,
      borderWidth: 1,
      borderColor: theme.borderLight,
    },
    sendBtn: {
      width: 40,
      height: 40,
      borderRadius: 20,
      backgroundColor: theme.accentPrimary,
      alignItems: 'center',
      justifyContent: 'center',
    },
    attachOverlay: {
      flex: 1,
      backgroundColor: 'rgba(0,0,0,0.4)',
      justifyContent: 'flex-end',
    },
    attachSheet: {
      flexDirection: 'row',
      backgroundColor: theme.bgCard,
      borderTopLeftRadius: 20,
      borderTopRightRadius: 20,
      paddingHorizontal: theme.spacingLg,
      paddingVertical: theme.spacingLg,
      gap: 24,
    },
    attachOption: {
      alignItems: 'center',
      gap: 8,
    },
    attachIconWrap: {
      width: 50,
      height: 50,
      borderRadius: 25,
      alignItems: 'center',
      justifyContent: 'center',
    },
    attachOptionText: {
      color: theme.textPrimary,
      fontSize: 12,
      fontWeight: '600',
    },
  });
