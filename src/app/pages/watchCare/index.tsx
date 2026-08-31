import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { ScrollView, StatusBar, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useTheme } from '../../../context/ThemeContext';
import { watchServicesData } from '../../../data/watchCare';
import { getStyles } from '../../../screens/watchCare/watchCare.style';

import BeforeAfter from '../../../components/watchCare/BeforeAfter';
import BookServiceForm from '../../../components/watchCare/BookServiceForm';
import MyRequests from '../../../components/watchCare/MyRequests';
import WatchCareBanner from '../../../components/watchCare/WatchCareBanner';
import WatchServiceCard from '../../../components/watchCare/WatchServiceCard';
import WhyChooseUs from '../../../components/watchCare/WhyChooseUs';

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

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.contentContainer}
      >
        {/* Banner */}
        <WatchCareBanner />

        {/* Horizontal Scrollable Service Cards */}
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.servicesContainer}
        >
          {watchServicesData.map((service) => (
            <WatchServiceCard key={service.id} service={service} />
          ))}
        </ScrollView>

        {/* Before & After Section */}
        <BeforeAfter />

        {/* Why Choose Us Section */}
        <WhyChooseUs />

        {/* Book a Service Form */}
        <BookServiceForm />

        {/* My Requests Section */}
        <MyRequests />
      </ScrollView>
    </SafeAreaView>
  );
}
