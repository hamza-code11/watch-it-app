import { useState } from 'react';
import { StatusBar } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useTheme } from '../../../context/ThemeContext';
import { Conversation } from '../../../types/messages.types';

import ChatList from '../../../components/chat/ChatList';
import PersonalChat from '../../../components/chat/PersonalChat';

export default function Messages() {
  const { theme } = useTheme();
  const [selectedConversation, setSelectedConversation] = useState<Conversation | null>(null);

  return (
    <SafeAreaView style={{ flex: 1}}>
      <StatusBar barStyle="light-content" />

      {/* Sirf 2 Components */}
      {selectedConversation ? (
        <PersonalChat
          conversation={selectedConversation}
          onBack={() => setSelectedConversation(null)}
        />
      ) : (
        <ChatList onSelectConversation={setSelectedConversation} />
      )}
    </SafeAreaView>
  );
}
