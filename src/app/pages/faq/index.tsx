import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { ScrollView, StatusBar, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useTheme } from '../../../context/ThemeContext';
import { getStyles } from '../../../screens/faq/faq.style';

import FAQBanner from '../../../components/faq/FAQBanner';
import FAQCategorySection from '../../../components/faq/FAQCategorySection';

export default function FAQ() {
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
          <Text style={styles.headerTitle}>FAQ</Text>
          <View style={{ width: 24 }} />
        </View>

        {/* Component 1: FAQBanner */}
        <FAQBanner />

        {/* Component 2: Categories & Questions */}
        <FAQCategorySection />
      </ScrollView>
    </SafeAreaView>
  );
}
