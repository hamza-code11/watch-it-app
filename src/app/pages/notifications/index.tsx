import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { FlatList, StatusBar, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import NotificationCard from '../../../components/notifications/NotificationCard';
import { useTheme } from '../../../context/ThemeContext';
import { notifications } from '../../../data/notifications';
import { getNotificationsStyles } from '../../../screens/notifications/notifications.style';
import { AppNotification } from '../../../types/notification.types';

export default function NotificationsPage() {
  const router = useRouter();
  const { theme } = useTheme();
  const styles = getNotificationsStyles(theme);

  const handlePress = (item: AppNotification) => {
    // Yahan chaho to type ke hisaab se route kar sakte ho
    console.log('Open notification:', item.id);
  };

  const renderItem = ({ item }: { item: AppNotification }) => (
    <NotificationCard item={item} onPress={handlePress} />
  );

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" />

      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity style={styles.iconBtn} onPress={() => router.back()}>
          <Ionicons name="arrow-back" size={22} color={theme.textPrimary} />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Notifications</Text>
      </View>

      {/* List */}
      {notifications.length === 0 ? (
        <View style={styles.emptyWrap}>
          <Ionicons name="notifications-off-outline" size={48} color={theme.textMuted} />
          <Text style={styles.emptyTitle}>No notifications</Text>
          <Text style={styles.emptyText}>
            You're all caught up. New activity will appear here.
          </Text>
        </View>
      ) : (
        <FlatList
          data={notifications}
          keyExtractor={(item) => item.id}
          renderItem={renderItem}
          contentContainerStyle={styles.listContent}
          showsVerticalScrollIndicator={false}
        />
      )}
    </SafeAreaView>
  );
}
