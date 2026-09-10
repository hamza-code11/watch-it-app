import { Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { useRouter } from 'expo-router';
import { useState } from 'react';
import { Modal, ScrollView, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { useTheme } from '../../context/ThemeContext';
import { ProductDetailData } from '../../types/productDetail.types';
import { getProductInfoStyles } from './ProductInfo.style';

const badges = [
  { label: 'Verified Seller', icon: 'checkmark-circle', color: '#60A5FA', bg: 'rgba(96, 165, 250, 0.12)' },
  { label: 'WatchIt Authenticated', icon: 'shield-checkmark', color: '#10B981', bg: 'rgba(16, 185, 129, 0.12)' },
  { label: 'Box & Papers', icon: 'archive', color: '#FDB022', bg: 'rgba(253, 176, 34, 0.12)' },
];

const stars = [1, 2, 3, 4, 5];

export default function ProductInfo({ product }: { product: ProductDetailData }) {
  const { theme } = useTheme();
  const router = useRouter();
  const styles = getProductInfoStyles(theme);
  const [quantity, setQuantity] = useState(1);
  const [specsOpen, setSpecsOpen] = useState(true);
  const [offerModalVisible, setOfferModalVisible] = useState(false);
  const [offerPrice, setOfferPrice] = useState('');

  const handleQuantity = (type: 'increase' | 'decrease') => {
    if (type === 'increase') setQuantity(quantity + 1);
    else if (quantity > 1) setQuantity(quantity - 1);
  };

  const handleOrderNow = () => {
    // Apne actual messages/chat route se replace kar dena (e.g. seller ke sath chat thread)
    router.push('/messages');
  };

  const handleSubmitOffer = () => {
    if (!offerPrice.trim()) return;
    console.log('Offer submitted:', offerPrice);
    setOfferModalVisible(false);
    setOfferPrice('');
  };

  const breadcrumbItems = ['Home', product.brandName, product.title];

  return (
    <View style={styles.container}>
      {/* Breadcrumb */}
      <View style={styles.breadcrumb}>
        {breadcrumbItems.map((item, index) => (
          <View key={item} style={{ flexDirection: 'row', alignItems: 'center', gap: 6 }}>
            <Text
              style={[
                styles.breadcrumbText,
                index === breadcrumbItems.length - 1 && styles.breadcrumbActiveText,
              ]}
              numberOfLines={1}
            >
              {item}
            </Text>
            {index < breadcrumbItems.length - 1 && <Text style={styles.breadcrumbSep}>/</Text>}
          </View>
        ))}
      </View>

      {/* Title */}
      <Text style={styles.title}>{product.title}</Text>

      {/* Badges — sab ek hi row mein fit */}
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.badgesRow}
      >
        {badges.map((badge) => (
          <View key={badge.label} style={[styles.badge, { backgroundColor: badge.bg, borderColor: badge.color }]}>
            <Ionicons name={badge.icon as any} size={12} color={badge.color} />
            <Text style={[styles.badgeText, { color: badge.color }]} numberOfLines={1}>
              {badge.label}
            </Text>
          </View>
        ))}
      </ScrollView>

      {/* Brand & Model */}
      <View style={styles.brandModelRow}>
        <Text style={styles.brandText}>{product.brandName}</Text>
        <Text style={styles.modelText}>| Model: IW371606</Text>
      </View>

      {/* Star Rating */}
      <View style={styles.ratingRow}>
        <View style={styles.ratingStars}>
          {stars.map((star, index) => (
            <Ionicons
              key={index}
              name={star <= Math.floor(product.rating) ? 'star' : 'star-half'}
              size={16}
              color="#FDB022"
            />
          ))}
        </View>
        <Text style={styles.ratingText}>{product.rating} ({product.reviews} reviews)</Text>
      </View>

      {/* Divider */}
      <View style={styles.divider} />

      {/* Price */}
      <View style={styles.priceRow}>
        <Text style={styles.priceLabel}>Price: </Text>
        <Text style={styles.price}>{product.price}</Text>
      </View>

      {/* Description */}
      <Text style={styles.description}>{product.description}</Text>

      {/* Sold By */}
      <View style={styles.soldByRow}>
        <Text style={styles.soldByText}>Sold by:</Text>
        <Text style={styles.soldByName}>{product.seller.name}</Text>
        <View style={styles.goldBadge}>
          <Ionicons name="sparkles" size={11} color="#000000" />
          <Text style={styles.goldBadgeText}>Gold</Text>
        </View>
      </View>

      {/* In Stock */}
      <View style={styles.inStockRow}>
        <Ionicons name="checkmark-circle" size={18} color={theme.success} />
        <Text style={styles.inStockText}>In Stock</Text>
        <Text style={styles.stockUnits}>• 2 units available</Text>
      </View>

      {/* Trade-in Accepted */}
      <TouchableOpacity style={styles.tradeInRow} onPress={() => console.log('Trade-in')}>
        <Ionicons name="swap-horizontal" size={18} color={theme.success} />
        <Text style={styles.tradeInText}>Trade-in Accepted</Text>
        <Ionicons name="chevron-forward" size={18} color={theme.success} />
      </TouchableOpacity>

      {/* Quantity + Order Now */}
      <View style={styles.actionRow}>
        {/* Quantity Stepper — chota width */}
        <View style={styles.quantityBox}>
          <TouchableOpacity style={styles.quantityBtn} onPress={() => handleQuantity('decrease')}>
            <Ionicons name="remove" size={16} color={theme.textPrimary} />
          </TouchableOpacity>
          <Text style={styles.quantityText}>{quantity}</Text>
          <TouchableOpacity style={styles.quantityBtn} onPress={() => handleQuantity('increase')}>
            <Ionicons name="add" size={16} color={theme.textPrimary} />
          </TouchableOpacity>
        </View>

        {/* Order Now — bigger width, white gradient, navigates to messages */}
        <TouchableOpacity style={styles.orderBtnWrapper} onPress={handleOrderNow} activeOpacity={0.85}>
          <LinearGradient
            colors={['#FFFFFF', '#E5E7EB']}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
            style={styles.orderBtn}
          >
            <Ionicons name="bag-handle-outline" size={18} color="#111827" />
            <Text style={styles.orderText}>Order Now</Text>
          </LinearGradient>
        </TouchableOpacity>
      </View>

      {/* Make an Offer — opens price input modal */}
      <TouchableOpacity style={styles.makeOfferBtn} onPress={() => setOfferModalVisible(true)}>
        <Ionicons name="options-outline" size={18} color={theme.accentPrimary} />
        <Text style={styles.makeOfferText}>Make an Offer</Text>
      </TouchableOpacity>

      {/* Specifications (Accordion) */}
      <View style={styles.specsContainer}>
        <TouchableOpacity style={styles.specsHeader} onPress={() => setSpecsOpen(!specsOpen)} activeOpacity={0.7}>
          <View style={styles.specsHeaderLeft}>
            <Ionicons name="bookmark-outline" size={20} color={theme.textPrimary} />
            <Text style={styles.specsTitle}>Specifications</Text>
          </View>
          <Ionicons name={specsOpen ? 'chevron-up' : 'chevron-down'} size={20} color={theme.textMuted} />
        </TouchableOpacity>

        {specsOpen && (
          <View>
            {product.specifications.map((spec, index) => (
              <View
                key={spec.label}
                style={[
                  styles.specRow,
                  index === product.specifications.length - 1 && { borderBottomWidth: 0 },
                ]}
              >
                <Text style={styles.specLabel}>{spec.label}</Text>
                <Text style={styles.specValue}>{spec.value}</Text>
              </View>
            ))}
          </View>
        )}
      </View>

      {/* Make an Offer Modal */}
      <Modal
        visible={offerModalVisible}
        transparent
        animationType="fade"
        onRequestClose={() => setOfferModalVisible(false)}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalCard}>
            <View style={styles.modalHeader}>
              <Text style={styles.modalTitle}>Make an Offer</Text>
              <TouchableOpacity onPress={() => setOfferModalVisible(false)}>
                <Ionicons name="close" size={22} color={theme.textMuted} />
              </TouchableOpacity>
            </View>

            <Text style={styles.modalSubtitle}>
              Enter your offer price for {product.title}
            </Text>

            <View style={styles.modalInputBox}>
              <Text style={styles.modalInputPrefix}>$</Text>
              <TextInput
                style={styles.modalInput}
                placeholder="Enter amount"
                placeholderTextColor={theme.textMuted}
                keyboardType="numeric"
                value={offerPrice}
                onChangeText={setOfferPrice}
                autoFocus
              />
            </View>

            <TouchableOpacity style={styles.modalSubmitBtn} onPress={handleSubmitOffer}>
              <Text style={styles.modalSubmitText}>Submit Offer</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
}
