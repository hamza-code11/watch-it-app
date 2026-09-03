import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { ScrollView, StatusBar, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useTheme } from '../../../context/ThemeContext';
import { getStyles } from '../../../screens/dealer/dealer.style';

import DealerBanner from '../../../components/dealer/DealerBanner';
import DealerBenefitsList from '../../../components/dealer/DealerBenefitsList';
import StartApplicationButton from '../../../components/dealer/StartApplicationButton';

export default function Dealer() {
  const router = useRouter();
  const { theme } = useTheme();
  const styles = getStyles(theme);

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" />

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.contentContainer}
      >
        {/* Header */}
        <View style={styles.header}>
          <TouchableOpacity style={styles.backBtn} onPress={() => router.back()}>
            <Ionicons name="arrow-back" size={24} color={theme.textPrimary} />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>Dealer</Text>
          <View style={{ width: 24 }} />
        </View>

        {/* Component 1: Banner */}
        <DealerBanner />

        {/* Component 2: Benefits */}
        <DealerBenefitsList />

        {/* Component 3: Start Application Button */}
        <StartApplicationButton />
      </ScrollView>
    </SafeAreaView>
  );
}
