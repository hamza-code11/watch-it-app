import { Ionicons } from '@expo/vector-icons';
import { Text, TouchableOpacity, View } from 'react-native';
import { useTheme } from '../../context/ThemeContext';
import { getManageStyles } from './ManageRequests.style';

interface Props {
  onPress?: () => void;
}

export default function ManageRequests({ onPress }: Props) {
  const { theme } = useTheme();
  const styles = getManageStyles(theme);

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Manage Your Requests</Text>
      <Text style={styles.text}>
        View all your authentication requests, track status, and manage submissions
      </Text>

      <TouchableOpacity style={styles.button} onPress={onPress} activeOpacity={0.85}>
        <Text style={styles.buttonText}>Go to My Requests</Text>
        <Ionicons name="arrow-forward" size={16} color="#0A0A0C" />
      </TouchableOpacity>
    </View>
  );
}
