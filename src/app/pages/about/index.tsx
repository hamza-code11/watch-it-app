import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { ScrollView, StatusBar, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useTheme } from '../../../context/ThemeContext';
import { getStyles } from '../../../screens/about/about.style';

import AboutBanner from '../../../components/about/AboutBanner';
import MissionVision from '../../../components/about/MissionVision';
import OurStory from '../../../components/about/OurStory';
import Partners from '../../../components/about/Partners';

export default function About() {
  const router = useRouter();
  const { theme } = useTheme();
  const styles = getStyles(theme);

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" />

      <ScrollView
        showsVerticalScrollIndicator={false}
      >
        {/* Header */}
        <View style={styles.header}>
          <TouchableOpacity style={styles.backBtn} onPress={() => router.back()}>
            <Ionicons name="arrow-back" size={24} color={theme.textPrimary} />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>About Us</Text>
          <View style={{ width: 24 }} />
        </View>

        {/* Component 1: About Banner */}
        <AboutBanner />

        {/* Component 2: Our Story */}
        <OurStory />

        {/* Component 3: Mission & Vision */}
        <MissionVision />

        {/* Component 4: Partners */}
        <Partners />
      </ScrollView>
    </SafeAreaView>
  );
}
