import { Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { useState } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { useTheme } from '../../context/ThemeContext';
import { ProductDetailData } from '../../types/productDetail.types';
import { getVendorReviewsStyles } from './ProductVendorReviews.style';

const stars = [1, 2, 3, 4, 5];

// Rating distribution data (mock)
const ratingDistribution = [
  { rating: 5, count: 2 },
  { rating: 4, count: 1 },
  { rating: 3, count: 0 },
  { rating: 2, count: 0 },
  { rating: 1, count: 0 },
];

export default function ProductVendorReviews({ product }: { product: ProductDetailData }) {
  const { theme } = useTheme();
  const styles = getVendorReviewsStyles(theme);
  const [activeTab, setActiveTab] = useState<'vendor' | 'reviews'>('vendor');

  // Avatar colors (blue gradient) - Tuple type
  const avatarColors: [string, string] = ['#4F9FFF', '#3560D9'];

  return (
    <View style={styles.container}>
      {/* Tabs */}
      <View style={styles.tabsRow}>
        <TouchableOpacity
          style={[styles.tab, activeTab === 'vendor' && styles.activeTab]}
          onPress={() => setActiveTab('vendor')}
        >
          <Text style={[styles.tabText, activeTab === 'vendor' && styles.activeTabText]}>Vendor Information</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.tab, activeTab === 'reviews' && styles.activeTab]}
          onPress={() => setActiveTab('reviews')}
        >
          <Text style={[styles.tabText, activeTab === 'reviews' && styles.activeTabText]}>Customer Reviews</Text>
        </TouchableOpacity>
      </View>

      {/* Vendor Information */}
      {activeTab === 'vendor' && (
        <View style={styles.vendorSection}>
          {/* Vendor Header */}
          <View style={styles.vendorHeader}>
            {/* Blue Gradient Avatar */}
            <LinearGradient
              colors={avatarColors} // Tuple type
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 1 }}
              style={styles.vendorAvatar}
            >
              <Text style={styles.vendorAvatarText}>{product.seller.name.split(' ').map((n) => n[0]).join('')}</Text>
            </LinearGradient>
            <View style={styles.vendorInfo}>
              <View style={styles.vendorNameRow}>
                <Text style={styles.vendorName}>{product.seller.name}</Text>
                <View style={styles.verifiedBadge}>
                  <Ionicons name="checkmark" size={10} color="#FFFFFF" />
                </View>
              </View>
              <View style={styles.ratingRow}>
                <View style={styles.ratingStars}>
                  {stars.map((star, index) => (
                    <Ionicons
                      key={index}
                      name={star <= Math.floor(product.seller.rating) ? 'star' : 'star-half'}
                      size={14}
                      color="#FDB022"
                    />
                  ))}
                </View>
                <Text style={styles.ratingText}>{product.seller.rating} ({product.seller.reviews} reviews)</Text>
              </View>
              <View style={styles.metaRow}>
                <View style={styles.metaItem}>
                  <Ionicons name="calendar-outline" size={12} color="#60A5FA" />
                  <Text style={styles.metaText}>Member since 2018</Text>
                </View>
                <View style={styles.metaItem}>
                  <Ionicons name="location-outline" size={12} color="#60A5FA" />
                  <Text style={styles.metaText}>{product.seller.location}</Text>
                </View>
              </View>
            </View>
          </View>

          {/* Vendor Description */}
          <Text style={styles.vendorDescription}>
            Heritage Timepieces brings you the finest vintage and pre-owned luxury watches from around the world. Each timepiece is carefully authenticated and restored.
          </Text>

          {/* Vendor Stats (3 Columns) */}
          <View style={styles.vendorStatsRow}>
            <View style={styles.vendorStat}>
              <Ionicons name="cube-outline" size={24} color={theme.textPrimary} style={styles.vendorStatIcon} />
              <Text style={styles.vendorStatNumber}>52</Text>
              <Text style={styles.vendorStatLabel}>Products</Text>
            </View>
            <View style={styles.vendorStat}>
              <Ionicons name="chatbubble-ellipses-outline" size={24} color={theme.textPrimary} style={styles.vendorStatIcon} />
              <Text style={styles.vendorStatNumber}>423</Text>
              <Text style={styles.vendorStatLabel}>Reviews</Text>
            </View>
            <View style={styles.vendorStat}>
              <Ionicons name="star-outline" size={24} color={theme.textPrimary} style={styles.vendorStatIcon} />
              <Text style={styles.vendorStatNumber}>4.9</Text>
              <Text style={styles.vendorStatLabel}>Rating</Text>
            </View>
          </View>

          {/* Visit Store Button (White Gradient) */}
          <View style={styles.visitStoreBtnWrapper}>
            <LinearGradient
              colors={['#FFFFFF', '#E5E7EB', '#D1D5DB']} // Tuple type
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 1 }}
              style={styles.visitStoreBtn}
            >
              <TouchableOpacity onPress={() => console.log('Visit Store')} style={{ flex: 1, flexDirection: 'row', alignItems: 'center', justifyContent: 'center', gap: 8 }}>
                <Ionicons name="storefront-outline" size={18} color="#000000" />
                <Text style={styles.visitStoreText}>Visit Store</Text>
                <Ionicons name="arrow-forward" size={18} color="#000000" />
              </TouchableOpacity>
            </LinearGradient>
          </View>
        </View>
      )}

      {/* Customer Reviews */}
      {activeTab === 'reviews' && (
        <View style={styles.reviewsContainer}>
          {/* Rating Summary */}
          <View style={styles.reviewSummaryCard}>
            <View style={styles.avgRatingContainer}>
              <Text style={styles.avgRatingNumber}>4.7</Text>
              <View style={styles.avgRatingStars}>
                {[1, 2, 3, 4, 5].map((star) => (
                  <Ionicons
                    key={star}
                    name={star <= 4 ? 'star' : 'star-half'}
                    size={14}
                    color="#FDB022"
                  />
                ))}
              </View>
              <Text style={styles.avgRatingText}>3 reviews</Text>
            </View>

            {/* Rating Bars */}
            <View style={styles.ratingBarsContainer}>
              {ratingDistribution.map((item) => (
                <View key={item.rating} style={styles.ratingBarRow}>
                  <Text style={styles.ratingBarLabel}>{item.rating} ★</Text>
                  <View style={styles.ratingBarTrack}>
                    <View
                      style={[
                        styles.ratingBarFill,
                        { width: `${(item.count / 3) * 100}%` },
                      ]}
                    />
                  </View>
                  <Text style={styles.ratingBarCount}>{item.count}</Text>
                </View>
              ))}
            </View>
          </View>

          {/* Reviews List */}
          {product.customerReviews.map((review) => (
            <View key={review.id} style={styles.reviewCard}>
              {/* Blue Gradient Avatar */}
              <LinearGradient
                colors={avatarColors} // Tuple type
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 1 }}
                style={styles.reviewAvatar}
              >
                <Text style={styles.reviewAvatarText}>{review.user.split(' ').map((n) => n[0]).join('')}</Text>
              </LinearGradient>

              <View style={styles.reviewContent}>
                <View style={styles.reviewHeader}>
                  <Text style={styles.reviewerName}>{review.user}</Text>
                  <Text style={styles.reviewDate}>{review.date}</Text>
                </View>
                <View style={styles.reviewStars}>
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Ionicons
                      key={star}
                      name={star <= review.rating ? 'star' : 'star-outline'}
                      size={12}
                      color="#FDB022"
                    />
                  ))}
                </View>
                <Text style={styles.reviewTitle}>{review.title}</Text>
                <Text style={styles.reviewText}>{review.comment}</Text>

                {/* Helpful Button */}
                <TouchableOpacity style={styles.helpfulBtn}>
                  <Ionicons name="thumbs-up-outline" size={14} color={theme.textMuted} />
                  <Text style={styles.helpfulBtnText}>Helpful ({review.helpfulCount})</Text>
                </TouchableOpacity>
              </View>
            </View>
          ))}
        </View>
      )}
    </View>
  );
}
