// MyReferralsList.tsx
import { Ionicons } from '@expo/vector-icons';
import { Text, TouchableOpacity, View } from 'react-native';
import { useTheme } from '../../context/ThemeContext';
import { myReferralsData } from '../../data/referral';
import { getMyReferralsListStyles } from './MyReferralsList.style';

export default function MyReferralsList() {
  const { theme } = useTheme();
  const styles = getMyReferralsListStyles(theme);

  return (
    <View style={styles.container}>
      <View style={styles.referralListSection}>
        <View style={styles.referralHeader}>
          <Text style={styles.referralTitle}>My Referrals</Text>
          <Text style={styles.referralCount}>7 people</Text>
        </View>

        {myReferralsData.map((referral, index) => (
          <View
            key={referral.id}
            style={[styles.referralItem, index === myReferralsData.length - 1 && styles.referralItemLast]}
          >
            <View style={styles.referralAvatar}>
              <Text style={styles.referralAvatarText}>{referral.initials}</Text>
            </View>
            <View style={styles.referralInfo}>
              <Text style={styles.referralName}>{referral.name}</Text>
              <Text style={styles.referralEmail}>{referral.email}</Text>
            </View>
            <Text style={styles.referralDate}>Joined {referral.joined}</Text>
          </View>
        ))}

        {/* Show More Button */}
        <TouchableOpacity style={styles.showMoreBtn} onPress={() => console.log('Show More')}>
          <Ionicons name="chevron-down" size={16} color={theme.textPrimary} />
          <Text style={styles.showMoreText}>Show 3 More</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

