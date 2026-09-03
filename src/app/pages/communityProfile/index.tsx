import { Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { useRouter } from 'expo-router';
import { ScrollView, StatusBar, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useTheme } from '../../../context/ThemeContext';
import { communityProfileUser, communityStats, topTrends } from '../../../data/communityProfile';
import { getStyles } from '../../../screens/communityProfile/communityProfile.style';

export default function CommunityProfile() {
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
          <Text style={styles.headerTitle}>Community Profile</Text>
          <View style={{ width: 24 }} />
        </View>

        {/* Profile Card */}
        <View style={styles.profileCard}>
          <View style={styles.profileRow}>
            {/* Gradient Avatar */}
            <LinearGradient
              colors={['#4F9FFF', '#3560D9']}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 1 }}
              style={styles.avatar}
            >
              <Text style={styles.avatarText}>{communityProfileUser.initials}</Text>
            </LinearGradient>

            <View style={styles.userInfo}>
              <Text style={styles.userName}>{communityProfileUser.name}</Text>
              <Text style={styles.userRole}>{communityProfileUser.role}</Text>
              <View style={styles.locationRow}>
                <Ionicons name="location-outline" size={14} color={theme.textMuted} />
                <Text style={styles.locationText}>{communityProfileUser.location}</Text>
              </View>
            </View>
          </View>

          {/* Stats */}
          <View style={styles.statsRow}>
            <View style={styles.statItem}>
              <Text style={styles.statNumber}>{communityStats.posts}</Text>
              <Text style={styles.statLabel}>Posts</Text>
            </View>
            <View style={styles.statDivider} />
            <View style={styles.statItem}>
              <Text style={styles.statNumber}>{communityStats.listings}</Text>
              <Text style={styles.statLabel}>Listings</Text>
            </View>
          </View>
        </View>

        {/* Create Post (Menu Item) */}
        <TouchableOpacity style={styles.menuItem} onPress={() => router.push('/pages/createPost')}>
          <View style={styles.menuIcon}>
            <Ionicons name="add-circle-outline" size={22} color={theme.textPrimary} />
          </View>
          <Text style={styles.menuText}>Create Post</Text>
          <View style={styles.menuArrow}>
            <Ionicons name="chevron-forward" size={18} color={theme.textMuted} />
          </View>
        </TouchableOpacity>

        {/* View Profile (Menu Item) */}
        <TouchableOpacity style={styles.menuItem} onPress={() => router.push('/pages/profile')}>
          <View style={styles.menuIcon}>
            <Ionicons name="person-outline" size={20} color={theme.textPrimary} />
          </View>
          <Text style={styles.menuText}>View Profile</Text>
          <View style={styles.menuArrow}>
            <Ionicons name="chevron-forward" size={18} color={theme.textMuted} />
          </View>
        </TouchableOpacity>

        {/* View Listings (Menu Item) */}
        <TouchableOpacity style={styles.menuItem} onPress={() => router.push('/pages/myListings')}>
          <View style={styles.menuIcon}>
            <Ionicons name="list-outline" size={20} color={theme.textPrimary} />
          </View>
          <Text style={styles.menuText}>View Listings</Text>
          <View style={styles.menuArrow}>
            <Ionicons name="chevron-forward" size={18} color={theme.textMuted} />
          </View>
        </TouchableOpacity>

        {/* Messages (Menu Item) */}
        <TouchableOpacity style={styles.menuItem} onPress={() => router.push('/pages/chat')}>
          <View style={styles.menuIcon}>
            <Ionicons name="mail-outline" size={20} color={theme.textPrimary} />
          </View>
          <Text style={styles.menuText}>Messages</Text>
          <View style={styles.badge}>
            <Text style={styles.badgeText}>26</Text>
          </View>
          <View style={styles.menuArrow}>
            <Ionicons name="chevron-forward" size={18} color={theme.textMuted} />
          </View>
        </TouchableOpacity>

        {/* Joined Row */}
        <View style={{ paddingHorizontal: theme.spacingLg }}>
          <View style={styles.joinedRow}>
            <Ionicons name="calendar-outline" size={14} color={theme.textMuted} />
            <Text style={styles.joinedText}>Joined Jun 15, 2023</Text>
          </View>
        </View>

        {/* Top Trends */}
        <View style={styles.trendsContainer}>
          <View style={styles.trendsHeader}>
            <Ionicons name="trending-up" size={20} color={theme.accentPrimary} />
            <Text style={styles.trendsTitle}>Top Trends</Text>
          </View>

          {topTrends.map((trend) => (
            <View key={trend.id} style={styles.trendItem}>
              <Text style={styles.trendNumber}>#{trend.id}</Text>
              <Text style={styles.trendHashtag}>{trend.hashtag}</Text>
              <Text style={styles.trendCount}>{trend.postsCount}</Text>
            </View>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

