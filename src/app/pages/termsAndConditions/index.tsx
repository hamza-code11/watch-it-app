import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { ScrollView, StatusBar, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useTheme } from '../../../context/ThemeContext';
import { getStyles } from '../../../screens/termsAndConditions/termsAndConditions.style';

import TermsBanner from '../../../components/termsAndConditions/TermsBanner';
import TermsAccordionList from '../../../components/termsAndConditions/TermsAccordionList';
import TermsContactCard from '../../../components/termsAndConditions/TermsContactCard';

export default function TermsAndConditions() {
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
          <Text style={styles.headerTitle}>Terms of Services</Text>
          <View style={{ width: 24 }} />
        </View>

        {/* Component 1: Banner */}
        <TermsBanner />

        {/* Component 2: Accordion List */}
        <TermsAccordionList />

        {/* Component 3: Contact Card */}
        <TermsContactCard />
      </ScrollView>
    </SafeAreaView>
  );
}
