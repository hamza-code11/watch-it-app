import { StatusBar } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import ChatList from '../../../components/chat/ChatList';

export default function Messages() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar barStyle="light-content" />

      <ChatList />
    </SafeAreaView>
  );
}
