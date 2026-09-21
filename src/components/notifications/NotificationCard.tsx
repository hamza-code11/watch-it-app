import { Ionicons } from '@expo/vector-icons';
import { Text, TouchableOpacity, View } from 'react-native';
import { useTheme } from '../../context/ThemeContext';
import { AppNotification, NotificationType } from '../../types/notification.types';
import { getNotificationCardStyles } from './NotificationCard.style';

interface Props {
  item: AppNotification;
  onPress?: (item: AppNotification) => void;
}

const TYPE_META: Record<
  NotificationType,
  { icon: keyof typeof Ionicons.glyphMap; color: string }
> = {
  bid:     { icon: 'hammer-outline',         color: '#D4AF37' },
  offer:   { icon: 'pricetag-outline',       color: '#10B981' },
  message: { icon: 'chatbubble-outline',     color: '#3B82F6' },
  like:    { icon: 'heart-outline',          color: '#EF4444' },
  follow:  { icon: 'person-add-outline',     color: '#8B5CF6' },
  order:   { icon: 'cube-outline',           color: '#F59E0B' },
  listing: { icon: 'checkmark-circle-outline', color: '#10B981' },
  system:  { icon: 'notifications-outline',  color: '#94A3B8' },
};

export default function NotificationCard({ item, onPress }: Props) {
  const { theme } = useTheme();
  const styles = getNotificationCardStyles(theme);
  const meta = TYPE_META[item.type];

  return (
    <TouchableOpacity
      activeOpacity={0.85}
      style={[styles.card, !item.read && styles.cardUnread]}
      onPress={() => onPress?.(item)}
    >
      <View style={[styles.iconWrap, { backgroundColor: `${meta.color}20` }]}>
        <Ionicons name={meta.icon} size={20} color={meta.color} />
      </View>

      <View style={styles.body}>
        <View style={styles.topRow}>
          <Text style={styles.title} numberOfLines={1}>
            {item.title}
          </Text>
          {!item.read && <View style={styles.dot} />}
        </View>
        <Text style={styles.message} numberOfLines={2}>
          {item.message}
        </Text>
        <Text style={styles.time}>{item.timeAgo}</Text>
      </View>
    </TouchableOpacity>
  );
}
