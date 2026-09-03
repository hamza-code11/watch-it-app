import { Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { useRouter } from 'expo-router';
import { useState } from 'react';
import { ScrollView, StatusBar, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useTheme } from '../../../context/ThemeContext';
import { communityPosts } from '../../../data/community';
import { getStyles } from '../../../screens/community/community.style';

import CommunityBanner from '../../../components/community/CommunityBanner';
import CommunityPostCard from '../../../components/community/CommunityPostCard';
import CommunityTabs from '../../../components/community/CommunityTabs';

const TABS = ['All Posts', 'Showcase', 'Sale', 'Wanted', 'News', 'My Posts'];

export default function Community() {
  const router = useRouter();
  const { theme } = useTheme();
  const styles = getStyles(theme);
  const [activeTab, setActiveTab] = useState('All Posts');

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" />

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.contentContainer}
      >
        {/* Top Header Row */}
        <View style={styles.header}>
          <TouchableOpacity style={styles.backBtn} onPress={() => router.back()}>
            <Ionicons name="arrow-back" size={24} color={theme.textPrimary} />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>Community</Text>

          {/* Profile Avatar (Blue Gradient) */}
          <TouchableOpacity
            style={styles.profileAvatar}
            onPress={() => router.push('/pages/communityProfile')}
          >
            <LinearGradient
              colors={['#4F9FFF', '#3560D9']}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 1 }}
              style={styles.profileAvatar}
            >
              <Text style={styles.profileAvatarText}>AM</Text>
            </LinearGradient>
          </TouchableOpacity>
        </View>

        {/* Community Banner */}
        <CommunityBanner />

        {/* Filter Tabs */}
        <CommunityTabs activeTab={activeTab} onTabChange={setActiveTab} tabs={TABS} />

        {/* Posts */}
        {communityPosts.map((post) => (
          <CommunityPostCard key={post.id} post={post} />
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}
