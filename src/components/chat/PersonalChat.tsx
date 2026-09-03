import { Ionicons } from '@expo/vector-icons';
import * as DocumentPicker from 'expo-document-picker';
import * as ImagePicker from 'expo-image-picker';
import { LinearGradient } from 'expo-linear-gradient';
import { useState } from 'react';
import { Image, Modal, Pressable, ScrollView, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { useTheme } from '../../context/ThemeContext';
import { Conversation } from '../../types/messages.types';
import { getPersonalChatStyles } from './PersonalChat.style';

interface Props {
  conversation: Conversation;
  onBack: () => void;
}

interface LocalMessage {
  id: string;
  senderId: string;
  content: string;
  timestamp: string;
  imageUri?: string;
  fileName?: string;
}

const avatarGradients: Record<string, [string, string]> = {
  vendor: ['#34D399', '#10B981'],
  customer: ['#60A5FA', '#3B82F6'],
  admin: ['#F87171', '#EF4444'],
};

const CURRENT_USER_ID = 'VENDOR-001';

export default function PersonalChat({ conversation, onBack }: Props) {
  const { theme } = useTheme();
  const styles = getPersonalChatStyles(theme);
  const [inputText, setInputText] = useState('');
  const [messages, setMessages] = useState<LocalMessage[]>(conversation.messages);
  const [attachMenuVisible, setAttachMenuVisible] = useState(false);

  const initials = conversation.participantName
    .split(' ')
    .map((word) => word[0])
    .slice(0, 2)
    .join('')
    .toUpperCase();

  const gradientColors = avatarGradients[conversation.participantType] ?? avatarGradients.customer;

  const formatTime = (timestamp: string) => {
    const date = new Date(timestamp);
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };

  const appendMessage = (message: Omit<LocalMessage, 'id' | 'senderId' | 'timestamp'>) => {
    setMessages((prev) => [
      ...prev,
      {
        id: `local-${Date.now()}`,
        senderId: CURRENT_USER_ID,
        timestamp: new Date().toISOString(),
        ...message,
      },
    ]);
  };

  const handleSend = () => {
    if (!inputText.trim()) return;
    appendMessage({ content: inputText.trim() });
    setInputText('');
  };

  const handlePickImage = async () => {
    setAttachMenuVisible(false);
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ['images'],
      quality: 0.8,
    });

    if (!result.canceled && result.assets.length > 0) {
      appendMessage({ content: '', imageUri: result.assets[0].uri });
    }
  };

  const handlePickCamera = async () => {
    setAttachMenuVisible(false);
    const permission = await ImagePicker.requestCameraPermissionsAsync();
    if (!permission.granted) return;

    const result = await ImagePicker.launchCameraAsync({ quality: 0.8 });
    if (!result.canceled && result.assets.length > 0) {
      appendMessage({ content: '', imageUri: result.assets[0].uri });
    }
  };

  const handlePickDocument = async () => {
    setAttachMenuVisible(false);
    const result = await DocumentPicker.getDocumentAsync({ type: '*/*' });
    if (!result.canceled && result.assets && result.assets.length > 0) {
      appendMessage({ content: '', fileName: result.assets[0].name });
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.backBtn} onPress={onBack}>
          <Ionicons name="arrow-back" size={24} color={theme.textPrimary} />
        </TouchableOpacity>

        <LinearGradient
          colors={gradientColors}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
          style={styles.headerAvatar}
        >
          <Text style={styles.headerAvatarText}>{initials}</Text>
        </LinearGradient>

        <View style={styles.headerInfo}>
          <Text style={styles.headerName} numberOfLines={1}>{conversation.participantName}</Text>
          <Text style={styles.headerStatus}>Online</Text>
        </View>
      </View>

      <ScrollView
        style={styles.messagesContainer}
        showsVerticalScrollIndicator={false}
      >
        {messages.map((message) => {
          const isSent = message.senderId === CURRENT_USER_ID;
          return (
            <View key={message.id} style={[styles.messageRow, isSent ? styles.messageRowSent : styles.messageRowReceived]}>
              <View style={[styles.messageBubble, isSent ? styles.messageBubbleSent : styles.messageBubbleReceived]}>
                {message.imageUri && (
                  <Image source={{ uri: message.imageUri }} style={styles.messageImage} resizeMode="cover" />
                )}
                {message.fileName && (
                  <View style={styles.fileChip}>
                    <Ionicons name="document-text-outline" size={16} color={isSent ? '#FFFFFF' : theme.textPrimary} />
                    <Text style={[styles.fileChipText, isSent ? styles.messageTextSent : {}]} numberOfLines={1}>
                      {message.fileName}
                    </Text>
                  </View>
                )}
                {!!message.content && (
                  <Text style={[styles.messageText, isSent ? styles.messageTextSent : {}]}>
                    {message.content}
                  </Text>
                )}
                <Text style={[styles.messageTime, isSent ? styles.messageTimeSent : styles.messageTimeReceived]}>
                  {formatTime(message.timestamp)}
                </Text>
              </View>
            </View>
          );
        })}
      </ScrollView>

      <View style={styles.inputContainer}>
        <TouchableOpacity style={styles.attachBtn} onPress={() => setAttachMenuVisible(true)}>
          <Ionicons name="add" size={24} color={theme.textPrimary} />
        </TouchableOpacity>

        <TextInput
          style={styles.input}
          placeholder="Type a message..."
          placeholderTextColor={theme.textMuted}
          value={inputText}
          onChangeText={setInputText}
          multiline
        />
        <TouchableOpacity style={styles.sendBtn} onPress={handleSend}>
          <Ionicons name="send" size={18} color="#FFFFFF" />
        </TouchableOpacity>
      </View>

      <Modal
        visible={attachMenuVisible}
        transparent
        animationType="slide"
        onRequestClose={() => setAttachMenuVisible(false)}
      >
        <Pressable style={styles.attachOverlay} onPress={() => setAttachMenuVisible(false)}>
          <View style={styles.attachSheet}>
            <TouchableOpacity style={styles.attachOption} onPress={handlePickCamera}>
              <View style={[styles.attachIconWrap, { backgroundColor: '#EF4444' }]}>
                <Ionicons name="camera" size={20} color="#FFFFFF" />
              </View>
              <Text style={styles.attachOptionText}>Camera</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.attachOption} onPress={handlePickImage}>
              <View style={[styles.attachIconWrap, { backgroundColor: '#8B5CF6' }]}>
                <Ionicons name="images" size={20} color="#FFFFFF" />
              </View>
              <Text style={styles.attachOptionText}>Gallery</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.attachOption} onPress={handlePickDocument}>
              <View style={[styles.attachIconWrap, { backgroundColor: '#3B82F6' }]}>
                <Ionicons name="document" size={20} color="#FFFFFF" />
              </View>
              <Text style={styles.attachOptionText}>Document</Text>
            </TouchableOpacity>
          </View>
        </Pressable>
      </Modal>
    </View>
  );
}
