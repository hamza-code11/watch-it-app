import { Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { useRouter } from 'expo-router';
import { useState } from 'react';
import {
  Image,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import { useTheme } from '../../context/ThemeContext';
import { ProductDetailData } from '../../types/productDetail.types';
import { getProductDetailsInlineStyles } from './ProductDetailsInline.style';

interface Props {
  product: ProductDetailData;
  onClose: () => void;
  tradeAccepted?: boolean; // 👈 new: agar watch trade accepted hai
}

const Stars = ({ rating, size = 12 }: { rating: number; size?: number }) => (
  <View style={{ flexDirection: 'row', gap: 2 }}>
    {[1, 2, 3, 4, 5].map((i) => (
      <Ionicons
        key={i}
        name={i <= Math.round(rating) ? 'star' : 'star-outline'}
        size={size}
        color="#D4AF37"
      />
    ))}
  </View>
);

export default function ProductDetailsInline({ product, onClose, tradeAccepted }: Props) {
  const { theme } = useTheme();
  const styles = getProductDetailsInlineStyles(theme);
  const [activeImage, setActiveImage] = useState(0);
  const [offer, setOffer] = useState('');
  const router = useRouter();

  return (
    <View style={styles.container}>
      {/* Header row */}
      <View style={styles.headerRow}>
        <Text style={styles.sectionTitle}>Product Details</Text>
        <TouchableOpacity onPress={onClose} style={styles.closeBtn}>
          <Ionicons name="close" size={20} color={theme.textPrimary} />
        </TouchableOpacity>
      </View>

      {/* Image gallery */}
      <Image
        source={{ uri: product.images[activeImage] }}
        style={styles.mainImage}
        resizeMode="cover"
      />
      {product.images.length > 1 && (
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.thumbsRow}
        >
          {product.images.map((uri, i) => (
            <TouchableOpacity
              key={i}
              onPress={() => setActiveImage(i)}
              style={[styles.thumbWrap, activeImage === i && styles.thumbActive]}
            >
              <Image source={{ uri }} style={styles.thumb} />
            </TouchableOpacity>
          ))}
        </ScrollView>
      )}

      {/* Brand + Title */}
      <View style={styles.block}>
        <Text style={styles.brand}>{product.brandName.toUpperCase()}</Text>
        <Text style={styles.title}>{product.title}</Text>
        <View style={styles.ratingRow}>
          <Stars rating={product.rating} />
          <Text style={styles.ratingText}>
            {product.rating.toFixed(1)} ({product.reviews} reviews)
          </Text>
        </View>
      </View>

      {/* 🏅 Badges */}
      <View style={styles.badgesRow}>
        {/* Verified Seller — Blue */}
        <View style={[styles.badge, styles.badgeBlue]}>
          <Ionicons name="shield-checkmark" size={13} color="#3B82F6" />
          <Text style={[styles.badgeText, styles.badgeTextBlue]}>Verified Seller</Text>
        </View>

        {/* Watch Authenticated — Green */}
        <View style={[styles.badge, styles.badgeGreen]}>
          <Ionicons name="checkmark-circle" size={13} color="#10B981" />
          <Text style={[styles.badgeText, styles.badgeTextGreen]}>Watch Authenticated</Text>
        </View>

        {/* Box & Papers — Orange */}
        <View style={[styles.badge, styles.badgeOrange]}>
          <Ionicons name="cube-outline" size={13} color="#F59E0B" />
          <Text style={[styles.badgeText, styles.badgeTextOrange]}>Box & Papers</Text>
        </View>

        {/* Trade Accepted — Purple (conditional) */}
        {tradeAccepted && (
          <View style={[styles.badge, styles.badgePurple]}>
            <Ionicons name="swap-horizontal" size={13} color="#8B5CF6" />
            <Text style={[styles.badgeText, styles.badgeTextPurple]}>Trade Accepted</Text>
          </View>
        )}
      </View>

      {/* Description */}
      <View style={styles.block}>
        <Text style={styles.blockTitle}>Description</Text>
        <Text style={styles.description}>{product.description}</Text>
      </View>

      {/* Make Offer row — input left, button right */}
      <View style={styles.offerRow}>
        <TextInput
          style={styles.offerInput}
          placeholder="Enter offer amount"
          placeholderTextColor={theme.textMuted}
          keyboardType="number-pad"
          value={offer}
          onChangeText={setOffer}
        />
        <TouchableOpacity
          activeOpacity={0.85}
          style={styles.offerBtnWrap}
          onPress={() => {
            /* handle make offer */
            console.log('Offer:', offer);
          }}
        >
          <LinearGradient
            colors={['#FFFFFF', '#E8E8E8', '#FFFFFF']}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
            style={styles.offerBtn}
          >
            <Text style={styles.offerBtnText}>Make Offer</Text>
          </LinearGradient>
        </TouchableOpacity>
      </View>

      {/* Message Now — full width, yellow gradient */}
      <TouchableOpacity
        activeOpacity={0.85}
        style={styles.messageNowWrap}
        onPress={() => {
           router.push('/pages/messages');
        }}
      >
        <LinearGradient
          colors={['#D4AF37', '#F7E7B4', '#D4AF37']}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
          style={styles.messageNowBtn}
        >
          <Ionicons name="chatbubble-ellipses" size={16} color="#0B0E14" />
          <Text style={styles.messageNowText}>Message Now</Text>
        </LinearGradient>
      </TouchableOpacity>

      {/* Specs */}
      <View style={styles.block}>
        <Text style={styles.blockTitle}>Specifications</Text>
        {product.specifications.map((s) => (
          <View key={s.label} style={styles.specRow}>
            <Text style={styles.specLabel}>{s.label}</Text>
            <Text style={styles.specValue}>{s.value}</Text>
          </View>
        ))}
      </View>

      {/* Seller */}
      <View style={styles.block}>
        <Text style={styles.blockTitle}>Seller</Text>
        <View style={styles.sellerRow}>
          <View style={styles.sellerAvatar}>
            <Ionicons name="storefront-outline" size={18} color="#D4AF37" />
          </View>
          <View style={{ flex: 1 }}>
            <Text style={styles.sellerName}>{product.seller.name}</Text>
            <View style={styles.ratingRow}>
              <Stars rating={product.seller.rating} size={11} />
              <Text style={styles.sellerMeta}>
                {product.seller.rating} · {product.seller.reviews} reviews
              </Text>
            </View>
            <Text style={styles.sellerLocation}>{product.seller.location}</Text>
          </View>

          {/* View Profile — white gradient */}
          <TouchableOpacity
            activeOpacity={0.85}
            style={styles.viewProfileWrap}
            onPress={() => {
              /* navigate to seller profile */
            }}
          >
            <LinearGradient
              colors={['#FFFFFF', '#E8E8E8', '#FFFFFF']}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 1 }}
              style={styles.viewProfileBtn}
            >
              <Text style={styles.viewProfileText}>View Profile</Text>
            </LinearGradient>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}