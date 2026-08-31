import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { ScrollView, StatusBar, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useTheme } from '../../../context/ThemeContext';
import { plansData } from '../../../data/watchAuthentication';
import { getStyles } from '../../../screens/watchAuthentication/watchAuthentication.style';

// Components import karein (CSS file nahi)
import AuthenticationBanner from '../../../components/watchAuthentication/AuthenticationBanner';
import AuthenticationForm from '../../../components/watchAuthentication/AuthenticationForm';
import HowItWorks from '../../../components/watchAuthentication/HowItWorks';
import MyRequests from '../../../components/watchAuthentication/MyRequests';
import PlanCard from '../../../components/watchAuthentication/PlanCard';

export default function WatchAuthentication() {
  const router = useRouter();
  const { theme } = useTheme();
  const styles = getStyles(theme);

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" />

      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity style={styles.backBtn} onPress={() => router.back()}>
          <Ionicons name="arrow-back" size={24} color={theme.textPrimary} />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Authentication</Text>
        <View style={{ width: 24 }} />
      </View>

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.contentContainer}
      >
        {/* Component 1: Banner */}
        <AuthenticationBanner />

        {/* Component 2: Plan Cards */}
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.plansContainer}
        >
          {plansData.map((plan) => (
            <PlanCard key={plan.id} plan={plan} />
          ))}
        </ScrollView>

        {/* Component 5: How It Works */}
        <HowItWorks />

        {/* Component 3: Authentication Form */}
        <AuthenticationForm />

        {/* Component 4: My Requests */}
        <MyRequests />

      </ScrollView>
    </SafeAreaView>
  );
}