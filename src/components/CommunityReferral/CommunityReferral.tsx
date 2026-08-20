// components/CommunityReferral/CommunityReferral.tsx
import { Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import { useRouter } from "expo-router";
import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { useTheme } from "../../context/ThemeContext";
import { getStyles } from "./CommunityReferral.styles";

type CommunityReferralProps = {
  onJoinCommunity?: () => void;
  onStartEarning?: () => void;
  onShowcasePress?: () => void;
  onSalePress?: () => void;
  onWantedPress?: () => void;
  onNewsPress?: () => void;
};

const CommunityReferral = ({ 
  onJoinCommunity, 
  onStartEarning,
  onShowcasePress,
  onSalePress,
  onWantedPress,
  onNewsPress,
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
      {/* Community Section with Quick Links */}
      <View style={styles.communityCard}>
        <View style={styles.communityHeader}>
          <View style={[styles.iconBadge, { backgroundColor: theme.accentPrimary + "20" }]}>
            <Ionicons name="people" size={22} color={theme.accentPrimary} />
          </View>
          <Text style={styles.communityTitle}>UAE Watch Community</Text>
        </View>

        <Text style={styles.communityDescription}>
          Share your collection, discuss markets, connect with fellow enthusiasts across the GCC.
        </Text>

        <TouchableOpacity
          activeOpacity={0.85}
          onPress={handleJoinCommunity}
          style={styles.buttonWrapper}
        >
          <LinearGradient
            colors={["#FFFFFF", "#E9EEF6"]}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
            style={styles.whiteButton}
          >
            <Text style={styles.whiteButtonText}>Join Community</Text>
            <Ionicons name="arrow-forward" size={16} color="#0B0E14" />
          </LinearGradient>
        </TouchableOpacity>

        {/* Quick Links - Inside Community Card */}
        <View style={styles.quickLinks}>
          <TouchableOpacity style={styles.quickLink} onPress={onShowcasePress}>
            <Ionicons name="grid-outline" size={20} color={theme.textSecondary} />
            <Text style={[styles.quickLinkText, { color: theme.textSecondary }]}>Showcase</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.quickLink} onPress={onSalePress}>
            <Ionicons name="pricetag-outline" size={20} color={theme.textSecondary} />
            <Text style={[styles.quickLinkText, { color: theme.textSecondary }]}>Sale</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.quickLink} onPress={onWantedPress}>
            <Ionicons name="heart-outline" size={20} color={theme.textSecondary} />
            <Text style={[styles.quickLinkText, { color: theme.textSecondary }]}>Wanted</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.quickLink} onPress={onNewsPress}>
            <Ionicons name="newspaper-outline" size={20} color={theme.textSecondary} />
            <Text style={[styles.quickLinkText, { color: theme.textSecondary }]}>News</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Referral Section */}
      <View style={styles.referralCard}>
        <View style={styles.referralHeader}>
          <View style={[styles.iconBadge, { backgroundColor: theme.accentPrimary + "20" }]}>
            <Ionicons name="gift" size={22} color={theme.accentPrimary} />
          </View>
          <Text style={styles.referralTitle}>Earn AED 100 Per Referral</Text>
        </View>

        <Text style={styles.referralDescription}>
          Invite collectors and earn AED 100 app credit for every verified purchase. Unlock Bronze, Silver, Gold, and Platinum tiers.
        </Text>

        <TouchableOpacity
          activeOpacity={0.85}
          onPress={handleStartEarning}
          style={styles.buttonWrapper}
        >
          <LinearGradient
            colors={["#FFFFFF", "#E9EEF6"]}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
            style={styles.whiteButton}
          >
            <Text style={styles.whiteButtonText}>Start Earning</Text>
            <Ionicons name="arrow-forward" size={16} color="#0B0E14" />
          </LinearGradient>
        </TouchableOpacity>

        {/* Tier badges */}
        <View style={styles.tierContainer}>
          <View style={[styles.tierBadge, { backgroundColor: theme.bgSecondary, borderColor: theme.borderColor }]}>
            <Ionicons name="diamond" size={14} color="#CD7F32" />
            <Text style={[styles.tierText, { color: "#CD7F32" }]}>Bronze</Text>
          </View>
          <View style={[styles.tierBadge, { backgroundColor: theme.bgSecondary, borderColor: theme.borderColor }]}>
            <Ionicons name="diamond" size={14} color="#C0C0C0" />
            <Text style={[styles.tierText, { color: "#C0C0C0" }]}>Silver</Text>
          </View>
          <View style={[styles.tierBadge, { backgroundColor: theme.bgSecondary, borderColor: theme.borderColor }]}>
            <Ionicons name="diamond" size={14} color="#D4AF37" />
            <Text style={[styles.tierText, { color: "#D4AF37" }]}>Gold</Text>
          </View>
          <View style={[styles.tierBadge, { backgroundColor: theme.bgSecondary, borderColor: theme.borderColor }]}>
            <Ionicons name="diamond" size={14} color="#E5E4E2" />
            <Text style={[styles.tierText, { color: "#E5E4E2" }]}>Platinum</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default CommunityReferral;

