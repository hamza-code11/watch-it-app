import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { useState } from 'react';
import { Image, ScrollView, Share, Text, TouchableOpacity, View } from 'react-native';
import { useTheme } from '../../context/ThemeContext';
import { getImageGalleryStyles } from './ProductImageGallery.style';

export default function ProductImageGallery({ images }: { images: string[] }) {
  const { theme } = useTheme();
  const router = useRouter();
  const styles = getImageGalleryStyles(theme);
  const [activeIndex, setActiveIndex] = useState(0);
  const [showAllImages, setShowAllImages] = useState(false);
  const [isLiked, setIsLiked] = useState(false);

  // Thumbnail logic (pehle 4 dikhayein, baqi +3)
  const visibleThumbnails = showAllImages ? images : images.slice(0, 4);
  const hiddenCount = images.length - 4;

  const handleShare = async () => {
    try {
      await Share.share({
        message: images[activeIndex], // ismein product name/url bhi add kar sakte ho
        url: images[activeIndex], // iOS ke liye
      });
    } catch (error) {
      console.log('Share error:', error);
    }
  };

  return (
    <View style={styles.container}>
      {/* Full width main image (background layer) */}
      <Image
        source={{ uri: images[activeIndex] }}
        style={styles.mainImage}
        resizeMode="cover"
      />

      {/* Top Row: Back, Heart, Share — overlaid on image */}
      <View style={styles.topRow}>
        <TouchableOpacity style={styles.iconBtn} onPress={() => router.back()}>
          <Ionicons name="arrow-back" size={18} color="#FFFFFF" />
        </TouchableOpacity>
        <View style={styles.iconBtnGroup}>
          <TouchableOpacity style={styles.iconBtn} onPress={() => setIsLiked((prev) => !prev)}>
            <Ionicons
              name={isLiked ? 'heart' : 'heart-outline'}
              size={18}
              color={isLiked ? '#EF4444' : '#FFFFFF'}
            />
          </TouchableOpacity>
          <TouchableOpacity style={styles.iconBtn} onPress={handleShare}>
            <Ionicons name="share-social-outline" size={18} color="#FFFFFF" />
          </TouchableOpacity>
        </View>
      </View>

      {/* Left Vertical Thumbnails — overlaid on image */}
      <View style={styles.thumbnailsColumn}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ gap: 8 }}
        >
          {visibleThumbnails.map((image, index) => (
            <TouchableOpacity
              key={index}
              style={[styles.thumbnail, index === activeIndex && styles.activeThumbnail]}
              onPress={() => setActiveIndex(index)}
            >
              <Image source={{ uri: image }} style={{ width: '100%', height: '100%' }} resizeMode="cover" />
            </TouchableOpacity>
          ))}

          {/* +3 Button */}
          {!showAllImages && hiddenCount > 0 && (
            <TouchableOpacity style={styles.moreThumbnail} onPress={() => setShowAllImages(true)}>
              <Text style={styles.moreText}>+{hiddenCount}</Text>
            </TouchableOpacity>
          )}
        </ScrollView>
      </View>

      {/* Pagination Dots — overlaid at bottom of image */}
      <View style={styles.dotsRow}>
        {images.map((_, index) => (
          <View
            key={index}
            style={[styles.dot, index === activeIndex && styles.activeDot]}
          />
        ))}
      </View>
    </View>
  );
}