import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { ScrollView, StatusBar, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useTheme } from '../../../context/ThemeContext';
import { getStyles } from '../../../screens/subscription/subscription.style';

import GoldMembershipCard from '../../../components/subscription/GoldMembershipCard';
import MembershipBenefits from '../../../components/subscription/MembershipBenefits';

export default function Subscription() {
  const router = useRouter();
  const { theme } = useTheme();
  const styles = getStyles(theme);

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" />

      <ScrollView
        showsVerticalScrollIndicator={false}
      >
        {/* Header Row (Back Button + Title) */}
        <View style={styles.header}>
          <TouchableOpacity style={styles.backBtn} onPress={() => router.back()}>
            <Ionicons name="arrow-back" size={18} color={theme.textPrimary} />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>Watch It Gold</Text>
          <View style={{ width: 36 }} />
        </View>

        {/* Component 1: Gold Card with Activate Button */}
        <GoldMembershipCard />

        {/* Component 2: Membership Benefits */}
        <MembershipBenefits />
      </ScrollView>
    </SafeAreaView>
  );
}
