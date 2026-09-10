// components/CommunityReferral/CommunityReferral.tsx
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { Text, TouchableOpacity, View } from "react-native";
import { useTheme } from "../../context/ThemeContext";
import { getStyles } from "./CommunityReferral.styles";

type CommunityReferralProps = {
  onJoinCommunity?: () => void;
  onStartEarning?: () => void;
};

const CommunityReferral = ({
  onJoinCommunity,
  onStartEarning,
}: CommunityReferralProps) => {
  const { theme } = useTheme();
  const styles = getStyles(theme);
  const router = useRouter();

  const handleJoinCommunity = () => {
    if (onJoinCommunity) {
      onJoinCommunity();
    } else {
      router.push("/community" as any);
    }
  };

  const handleStartEarning = () => {
    if (onStartEarning) {
      onStartEarning();
    } else {
      router.push("/referral" as any);
    }
  };

  return (
    <View style={styles.container}>
      {/* Community Card */}
      <View style={styles.communityCard}>
        <View style={styles.topRow}>
          <View style={styles.iconBadge}>
            <Ionicons name="people" size={20} color="#5B9EFF" />
          </View>
          <View style={styles.pillBadgeBlue}>
            <Text style={styles.pillBadgeBlueText}>GCC NETWORK</Text>
          </View>
        </View>

        <Text style={styles.communityTitle}>UAE Watch Community</Text>

        <Text style={styles.communityDescription}>
          Share your collection, discuss markets, connect with fellow
          enthusiasts across the GCC.
        </Text>

        {/* Stats row */}
        <View style={styles.statsRow}>
          <View style={styles.avatarsRow}>
            <View style={styles.avatarStack}>
              <View style={[styles.avatarCircle, { backgroundColor: "#3B82F6", zIndex: 3 }]} />
              <View style={[styles.avatarCircle, styles.avatarOverlap, { backgroundColor: "#8B5CF6", zIndex: 2 }]} />
              <View style={[styles.avatarCircle, styles.avatarOverlap, { backgroundColor: "#EC4899", zIndex: 1 }]} />
            </View>
            <Text style={styles.statsText}>4.8k active collectors</Text>
          </View>

          <View style={styles.onlineRow}>
            <View style={styles.onlineDot} />
            <Text style={styles.statsText}>142 Online</Text>
          </View>
        </View>

        <TouchableOpacity
          activeOpacity={0.7}
          onPress={handleJoinCommunity}
          style={styles.joinLinkRow}
        >
          <Text style={styles.joinLinkText}>Join Community</Text>
          <Ionicons name="chevron-forward" size={16} color="#5B9EFF" />
        </TouchableOpacity>
      </View>

      {/* Referral Card */}
      <View style={styles.referralCard}>
        <View style={styles.topRow}>
          <View style={[styles.iconBadge, styles.iconBadgeGold]}>
            <Ionicons name="trophy" size={20} color="#F0B429" />
          </View>
          <View style={styles.pillBadgeGold}>
            <Text style={styles.pillBadgeGoldText}>EXCLUSIVE REWARD</Text>
          </View>
        </View>

        <Text style={styles.referralTitle}>
          Earn AED 100 Per Referral
        </Text>

        <Text style={styles.referralDescription}>
          Invite collectors and earn AED 100 app credit for every verified
          purchase. Unlock Gold, Silver, and Platinum tiers.
        </Text>

        {/* Tier status */}
        <View style={styles.tierStatusRow}>
          <Text style={styles.tierStatusLabel}>PRIVILEGE TIER STATUS</Text>
          <Text style={styles.tierStatusValue}>GOLD MEMBER</Text>
        </View>

        <View style={styles.tierSegmentRow}>
          <View style={styles.tierSegment}>
            <Text style={styles.tierSegmentText}>Silver</Text>
          </View>
          <View style={[styles.tierSegment, styles.tierSegmentActive]}>
            <Ionicons name="star" size={11} color="#0B0E14" style={{ marginRight: 4 }} />
            <Text style={styles.tierSegmentActiveText}>Gold (Active)</Text>
          </View>
          <View style={styles.tierSegment}>
            <Text style={styles.tierSegmentText}>Platinum</Text>
          </View>
        </View>

        <TouchableOpacity
          activeOpacity={0.7}
          onPress={handleStartEarning}
          style={styles.joinLinkRow}
        >
          <Text style={styles.startEarningLinkText}>Start Earning</Text>
          <Ionicons name="chevron-forward" size={16} color="#F0B429" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CommunityReferral;

