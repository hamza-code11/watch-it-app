import { Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { useRouter } from 'expo-router';
import { useState } from 'react';
import {
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

import { useTheme } from '../../context/ThemeContext';
import {
  conversationsData,
  messageFilters,
} from '../../data/conversations';
import {
  Conversation,
  MessageFilter,
} from '../../types/messages.types';
import { getChatListStyles } from './ChatList.style';

const avatarGradients: Record<string, [string, string, string]> = {
  vendor: ['#BBD2C5', '#536976', '#292E49'],
  customer: ['#2D9EE0', '#2F80ED', '#091E3A'],
  admin: ['#F87171', '#ff0084', '#33001b'],
};

const filterGradient: [string, string] = ['#b6b9d7', '#3f3f47'];

export default function ChatList() {
  const router = useRouter();
  
  const { theme } = useTheme();
  const styles = getChatListStyles(theme);

  const [activeFilter, setActiveFilter] =
    useState<MessageFilter>('all');

  const [search, setSearch] = useState('');

  const filteredConversations = conversationsData
    .filter((conv) => {
      if (activeFilter === 'all') return true;

      if (activeFilter === 'buyers') {
        return conv.participantType === 'customer';
      }

      if (activeFilter === 'sellers') {
        return conv.participantType === 'vendor';
      }

      if (activeFilter === 'support') {
        return conv.participantType === 'admin';
      }

      return true;
    })
    .filter((conv) =>
      conv.participantName
        .toLowerCase()
        .includes(search.toLowerCase())
    );

  const formatTime = (timestamp: string) => {
    const date = new Date(timestamp);
    const now = new Date();

    const diff = now.getTime() - date.getTime();
    const mins = Math.floor(diff / 60000);

    if (mins < 1) return 'Just now';
    if (mins < 60) return `${mins}m`;

    const hours = Math.floor(mins / 60);

    if (hours < 24) return `${hours}h`;

    const days = Math.floor(hours / 24);

    if (days < 7) return `${days}d`;

    return date.toLocaleDateString();
  };

  const handleSelectConversation = (
    conversation: Conversation
  ) => {
    router.push(`/pages/chat/${conversation.id}`);
  };

  return (
    <View style={styles.container}>
      <View style={styles.searchContainer}>
        <View style={styles.searchBox}>
          <Ionicons
            name="search"
            size={18}
            color={theme.textMuted}
          />

          <TextInput
            style={styles.searchInput}
            placeholder="Search conversations..."
            placeholderTextColor={theme.textMuted}
            value={search}
            onChangeText={setSearch}
          />
        </View>
      </View>

      <ScrollView
        showsVerticalScrollIndicator={false}
        style={styles.scrollArea}
      >
        <View style={styles.filterRow}>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            style={styles.filterScrollView}
          >
            {messageFilters.map((filter) => {
              const isActive =
                activeFilter === filter.key;

              return (
                <TouchableOpacity
                  key={filter.key}
                  onPress={() =>
                    setActiveFilter(filter.key)
                  }
                  activeOpacity={0.8}
                >
                  {isActive ? (
                    <LinearGradient
                      colors={filterGradient}
                      start={{ x: 0, y: 0 }}
                      end={{ x: 1, y: 1 }}
                      style={[
                        styles.filterBtn,
                        styles.filterBtnActive,
                      ]}
                    >
                      <Text style={styles.filterTextActive}>
                        {filter.label}
                      </Text>
                    </LinearGradient>
                  ) : (
                    <View style={styles.filterBtn}>
                      <Text style={styles.filterText}>
                        {filter.label}
                      </Text>
                    </View>
                  )}
                </TouchableOpacity>
              );
            })}
          </ScrollView>
        </View>

        {filteredConversations.map((conv) => (
          <TouchableOpacity
            key={conv.id}
            style={styles.conversationItem}
            onPress={() =>
              handleSelectConversation(conv)
            }
          >
            <LinearGradient
              colors={
                avatarGradients[conv.participantType]
              }
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 1 }}
              style={styles.avatar}
            >
              <Text style={styles.avatarText}>
                {conv.participantName
                  .split(' ')
                  .map((word) => word[0])
                  .slice(0, 2)
                  .join('')
                  .toUpperCase()}
              </Text>
            </LinearGradient>

            <View style={styles.conversationInfo}>
              <View style={styles.conversationTopRow}>
                <Text
                  style={styles.participantName}
                  numberOfLines={1}
                >
                  {conv.participantName}
                </Text>

                <Text style={styles.lastMessageTime}>
                  {formatTime(conv.lastMessageTime)}
                </Text>
              </View>

              <View style={styles.conversationBottomRow}>
                <Text
                  style={styles.lastMessage}
                  numberOfLines={1}
                >
                  {conv.lastMessage}
                </Text>

                {conv.unreadCount > 0 && (
                  <View style={styles.unreadBadge}>
                    <Text style={styles.unreadBadgeText}>
                      {conv.unreadCount}
                    </Text>
                  </View>
                )}
              </View>
            </View>
          </TouchableOpacity>
        ))}

        {filteredConversations.length === 0 && (
          <View style={styles.emptyState}>
            <Text style={styles.emptyStateText}>
              No conversations found.
            </Text>
          </View>
        )}
      </ScrollView>
    </View>
  );
}