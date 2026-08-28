import { useState } from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import { imageGalleryStyles } from './ImageGallery.style';

export default function ImageGallery({ gallery }: { gallery: string[] }) {
  const [activeIndex, setActiveIndex] = useState(0);

  // Agar gallery empty hai toh default image use karein
  const images = gallery.length > 0 ? gallery : ['https://images.unsplash.com/photo-1523170335258-f5ed11844a49?q=80&w=800&auto=format&fit=crop'];

  // Thumbnail count (4 dikhayenge, agar zyada hain toh "+1" dikhayenge)
  const visibleThumbnails = images.slice(0, 4);
  const hiddenCount = images.length - 4;

  return (
    <View style={imageGalleryStyles.galleryContainer}>
      {/* Main Image (Full Width) */}
      <View style={imageGalleryStyles.mainImageContainer}>
        <Image
          source={{ uri: images[activeIndex] }}
          style={imageGalleryStyles.mainImage}
          resizeMode="cover"
        />
        
        {/* Counter Badge */}
        <View style={imageGalleryStyles.counterBadge}>
          <Text style={imageGalleryStyles.counterText}>
            {activeIndex + 1}/{images.length}
          </Text>
        </View>
      </View>

      {/* Thumbnails (Bottom Horizontal Row) */}
      <View style={imageGalleryStyles.thumbnailsContainer}>
        {visibleThumbnails.map((item, index) => (
          <TouchableOpacity
            key={index}
            activeOpacity={0.7}
            onPress={() => setActiveIndex(index)}
            style={[
              imageGalleryStyles.thumbnailWrapper,
              index === activeIndex && imageGalleryStyles.activeThumbnail,
            ]}
          >
            <Image source={{ uri: item }} style={imageGalleryStyles.thumbnail} resizeMode="cover" />
            
            {/* Last thumbnail par "+1" badge */}
            {index === visibleThumbnails.length - 1 && hiddenCount > 0 && (
              <View style={imageGalleryStyles.plusOneBadge}>
                <Text style={imageGalleryStyles.plusOneText}>+{hiddenCount}</Text>
              </View>
            )}
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
}