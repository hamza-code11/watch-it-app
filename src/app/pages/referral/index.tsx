import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { ScrollView, StatusBar, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useTheme } from '../../../context/ThemeContext';
import { getStyles } from '../../../screens/referral/referral.style';

import MyReferralsList from '../../../components/referral/MyReferralsList';
import ReferralBanner from '../../../components/referral/ReferralBanner';
import ReferralCodeSection from '../../../components/referral/ReferralCodeSection';
import ReferralStats from '../../../components/referral/ReferralStats';
import ReferralTiers from '../../../components/referral/ReferralTiers';

export default function ReferralProgram() {
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
          <Text style={styles.headerTitle}>Referral Program</Text>
          <View style={{ width: 24 }} />
        </View>

        {/* Component 1: Referral Banner */}
        <ReferralBanner />

        {/* Component 2: Stats */}
        <ReferralStats />

        {/* Component 3: Code + Tier */}
        <ReferralCodeSection />

        {/* Component 4: Referral Tiers */}
        <ReferralTiers />

        {/* Component 5: My Referrals */}
        <MyReferralsList />
      </ScrollView>
    </SafeAreaView>
  );
}
