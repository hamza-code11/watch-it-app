import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { ScrollView, StatusBar, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useTheme } from '../../../context/ThemeContext';
import { plansData } from '../../../data/watchAuthentication';
import { getStyles } from '../../../screens/watchAuthentication/watchAuthentication.style';

import AuthenticationBanner from '../../../components/watchAuthentication/AuthenticationBanner';
import AuthProcess from '../../../components/watchAuthentication/AuthProcess';
import CertificateCard from '../../../components/watchAuthentication/CertificateCard';
import ManageRequests from '../../../components/watchAuthentication/ManageRequests';
import PlanCard from '../../../components/watchAuthentication/PlanCard';
import WhatWeCheck from '../../../components/watchAuthentication/WhatWeCheck';

export default function WatchAuthentication() {
  const router = useRouter();
  const { theme } = useTheme();
  const styles = getStyles(theme);

  const certificateFields = [
    { label: 'Brand', value: 'Rolex' },
    { label: 'Model', value: 'Submariner Date' },
    { label: 'Reference', value: '126610LN' },
    { label: 'Serial Number', value: '3R728945' },
    { label: 'Case', value: 'Authentic' },
    { label: 'Bezel', value: 'Authentic' },
    { label: 'Dial', value: 'Authentic' },
    { label: 'Bracelet', value: 'Authentic' },
    { label: 'Movement', value: 'Authentic' },
    { label: 'Authentication Date', value: '12 Aug 2026' },
    { label: 'Result', value: 'Authentic' },
    { label: 'Certified by', value: 'WatchIt Experts' },
  ];

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

      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Component 1: Banner */}
        <AuthenticationBanner />

        {/* Component 2: Plan Cards */}
        {plansData.map((plan) => (
          <PlanCard
            key={plan.id}
            plan={plan}
            onPress={() => console.log('Plan selected:', plan.name)}
          />
        ))}

        {/* Component 3: Certificate Card */}
        <CertificateCard
          fields={certificateFields}
          onViewCertificate={() => console.log('View certificate')}
        />

        {/* Component 4: Authentication Process */}
        <AuthProcess />

        {/* Component 5: What We Check */}
        <WhatWeCheck />

        {/* Component 6: Manage Requests CTA → navigates to new screen */}
        <ManageRequests
          onPress={() => router.push('/pages/watchAuthentication/manageRequests')}
        />
      </ScrollView>
    </SafeAreaView>
  );
}
