import { Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { useRouter } from 'expo-router';
import { Text, TouchableOpacity, View } from 'react-native';
import { useTheme } from '../../context/ThemeContext';
import { getStartApplicationStyles } from './StartApplicationButton.style';

export default function StartApplicationButton() {
  const router = useRouter();
  const { theme } = useTheme();
  const styles = getStartApplicationStyles(theme);

  return (
    <View style={styles.container}>
      <View style={styles.buttonWrapper}>
        <LinearGradient
          colors={['#FFFFFF', '#E5E7EB', '#D1D5DB']} // White Gradient
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
          style={styles.button}
        >
          <TouchableOpacity
            onPress={() => router.push('/pages/dealerApplication')}
            style={{ flex: 1 }}
          >
            <Text style={styles.buttonText}>Start Application</Text>
          </TouchableOpacity>
          <Ionicons name="chevron-forward" size={20} color="#000000" />
        </LinearGradient>
      </View>
    </View>
  );
}

