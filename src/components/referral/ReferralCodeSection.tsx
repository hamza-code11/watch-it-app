import { Ionicons } from '@expo/vector-icons';
import { useState } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { useTheme } from '../../context/ThemeContext';
import { referralData } from '../../data/referral';
import { getReferralCodeStyles } from './ReferralCodeSection.style';

export default function ReferralCodeSection() {
  const { theme } = useTheme();
  const styles = getReferralCodeStyles(theme);
  const [copied, setCopied] = useState(false);

  const handleCopyCode = () => {
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
    console.log('Copying referral code:', referralData.referralCode);
  };

  return (
    <View style={styles.mainCard}>
      {/* Referral Code */}
      <Text style={styles.codeLabel}>YOUR REFERRAL CODE</Text>
      <View style={styles.codeRow}>
        <Text style={styles.codeText}>{referralData.referralCode}</Text>
        <TouchableOpacity style={styles.copyBtn} onPress={handleCopyCode}>
          <Ionicons name="copy-outline" size={16} color={theme.accentPrimary} />
          <Text style={styles.copyBtnText}>{copied ? 'Copied!' : 'Copy'}</Text>
        </TouchableOpacity>
      </View>

      {/* Buttons */}
      <View style={styles.buttonsRow}>
        <TouchableOpacity style={styles.linkBtn} onPress={() => console.log('Copy Link')}>
          <Ionicons name="link-outline" size={16} color={theme.accentPrimary} />
          <Text style={styles.linkBtnText}>Copy Link</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.shareBtn} onPress={() => console.log('Share')}>
          <Ionicons name="share-social-outline" size={16} color={theme.accentPrimary} />
          <Text style={styles.shareBtnText}>Share</Text>
        </TouchableOpacity>
      </View>

      {/* Tier Section (Inside the same card) */}
      <View style={styles.tierRow}>
        <View style={styles.tierInfo}>
          <View style={styles.tierIcon}>
            <Ionicons name="ribbon-outline" size={14} color={theme.accentPrimary} />
          </View>
          <Text style={styles.tierText}>{referralData.tier.name}</Text>
        </View>
        <Text style={styles.tierProgressText}>{referralData.tier.progressText}</Text>
      </View>

      {/* Progress Bar */}
      <View style={styles.progressBar}>
        <View style={[styles.progressFill, { width: `${referralData.tier.progress * 100}%` }]} />
      </View>
    </View>
  );
}
