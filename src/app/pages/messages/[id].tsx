import { router, useLocalSearchParams } from 'expo-router';
import { StatusBar, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import PersonalChat from '../../../components/chat/PersonalChat/PersonalChat';
import { conversationsData } from '../../../data/conversations';

export default function PersonalChatPage() {
  const { id } = useLocalSearchParams<{ id: string }>();

  const conversation = conversationsData.find(
    (conv) => String(conv.id) === String(id)
  );

  if (!conversation) {
    return (
      <SafeAreaView style={{ flex: 1 }}>
        <StatusBar barStyle="light-content" />

        <View
          style={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Text>Conversation not found.</Text>
        </View>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar barStyle="light-content" />

      <PersonalChat
        conversation={conversation}
        onBack={() => router.back()}
      />
    </SafeAreaView>
  );
}
