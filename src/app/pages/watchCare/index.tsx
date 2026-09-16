import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { ScrollView, StatusBar, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useTheme } from '../../../context/ThemeContext';
import { watchServicesData } from '../../../data/watchCare';
import { getStyles } from '../../../screens/watchCare/watchCare.style';

import ExpertAdviceBanner from '../../../components/watchCare/ExpertAdviceBanner';
import HowItWorks from '../../../components/watchCare/HowItWorks';
import WatchCareBanner from '../../../components/watchCare/WatchCareBanner';
import WatchServiceCard from '../../../components/watchCare/WatchServiceCard';
import YourWatchCare from '../../../components/watchCare/YourWatchCare';

export default function WatchCare() {
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
        <Text style={styles.headerTitle}>Watch Care</Text>
        <View style={{ width: 24 }} />
      </View>

      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Banner (includes "Our Services" heading) */}
        <WatchCareBanner />


        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Our Services</Text>
          <Text style={styles.sectionSubtitle}>
            Everything your watch needs, in one place.
          </Text>
        </View>

        {/* 2-column Service Cards Grid */}
        <View style={styles.servicesGrid}>
          {watchServicesData.map((service) => (
            <WatchServiceCard key={service.id} service={service} />
          ))}
        </View>

        {/* Before & After Section */}
        <ExpertAdviceBanner />

        {/* Why Choose Us Section */}
        <HowItWorks />

        <YourWatchCare />
      </ScrollView>
    </SafeAreaView>
  );
}
