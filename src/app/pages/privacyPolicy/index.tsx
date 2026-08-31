import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { ScrollView, StatusBar, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useTheme } from '../../../context/ThemeContext';
import { getStyles } from '../../../screens/privacyPolicy/privacyPolicy.style';

import PrivacyBanner from '../../../components/privacyPolicy/PrivacyBanner';
import PolicyAccordionList from '../../../components/privacyPolicy/PolicyAccordionList';
import PrivacyContactCard from '../../../components/privacyPolicy/PrivacyContactCard';

export default function PrivacyPolicy() {
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
          <Text style={styles.headerTitle}>Privacy Policy</Text>
          <View style={{ width: 24 }} />
        </View>

        {/* Component 1: Privacy Banner */}
        <PrivacyBanner />

        {/* Component 2: Accordion List */}
        <PolicyAccordionList />

        {/* Component 3: Contact Card */}
        <PrivacyContactCard />
      </ScrollView>
    </SafeAreaView>
  );
}
