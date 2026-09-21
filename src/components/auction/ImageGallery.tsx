import { useState } from 'react';
import { Image, ScrollView, TouchableOpacity, View } from 'react-native';
import { useTheme } from '../../context/ThemeContext';
import { getImageGalleryStyles } from './ImageGallery.style';

export default function ImageGallery({ images }: { images: string[] }) {
  const { theme } = useTheme();
  const styles = getImageGalleryStyles(theme);
  const [active, setActive] = useState(0);

  return (
    <View>
      <Image source={{ uri: images[active] }} style={styles.mainImage} />
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.thumbsRow}
      >
        {images.map((uri, i) => (
          <TouchableOpacity
            key={i}
            onPress={() => setActive(i)}
            style={[styles.thumbWrap, active === i && styles.thumbActive]}
          >
            <Image source={{ uri }} style={styles.thumb} />
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
}
