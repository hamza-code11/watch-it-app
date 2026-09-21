import { Feather } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { useRouter } from 'expo-router';
import { Text, TouchableOpacity, View } from 'react-native';
import { useTheme } from '../../context/ThemeContext';
import { getCommunityBannerStyles } from './CommunityBanner.style';

export default function CommunityBanner() {
  const router = useRouter();
  const { theme } = useTheme();
  const styles = getCommunityBannerStyles(theme);

  return (
    <LinearGradient
      colors={['#0a1628', '#0f4c81']}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
      style={styles.banner}
    >
      <View style={styles.content}>
        <Text style={styles.label}>COMMUNITY</Text>

        <Text style={styles.title}>
          Connect with people{'\n'}who live{' '}
          <Text style={styles.titleHighlight}>watches.</Text>
        </Text>

        <Text style={styles.subtitle}>
          Share. Learn. Ask. Discover. A global community of collectors and enthusiasts.
        </Text>

        <TouchableOpacity
          style={styles.button}
          activeOpacity={0.8}
          onPress={() => router.push('/pages/createPost')}
        >
          <Feather name="edit-3" size={15} color="#8bbdd9" />
          <Text style={styles.buttonText}>Create Post</Text>
          <Feather name="arrow-right" size={15} color="#8bbdd9" />
        </TouchableOpacity>
      </View>
    </LinearGradient>
  );
}
