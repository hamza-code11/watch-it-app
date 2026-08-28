import { useState } from 'react';
import { Dimensions, FlatList, Image, Text, View } from 'react-native';
import { darkTheme } from '../../../constants/theme';
import { productImageStyles } from './ProductImage.style';

const { width } = Dimensions.get('window');

export default function ProductImage({ watchData }: any) {
  const [activeIndex, setActiveIndex] = useState(0);
  
  // Ab images watchData.gallery se aayengi
  const images = watchData.gallery && watchData.gallery.length > 0 
    ? watchData.gallery.map((uri: string) => ({ uri })) 
    : [{ uri: watchData.image }];

  const onScroll = (event: any) => {
    const slideSize = event.nativeEvent.layoutMeasurement.width;
    const index = event.nativeEvent.contentOffset.x / slideSize;
    const roundIndex = Math.round(index);
    
    if (roundIndex !== activeIndex) {
      setActiveIndex(roundIndex);
    }
  };

  const sliderWidth = width - (darkTheme.spacingLg * 2);

  return (
    <View style={productImageStyles.container}>
      <View style={productImageStyles.sliderContainer}>
        <View style={productImageStyles.brandBadge}>
          <Text style={productImageStyles.brandBadgeText}>{watchData.brand}</Text>
        </View>

        <View style={productImageStyles.imageCounter}>
          <Text style={productImageStyles.imageCounterText}>
            {activeIndex + 1}/{images.length}
          </Text>
        </View>

        <View style={productImageStyles.paginationContainer}>
          {images.map((_: { uri: string }, index: number) => (
            <View
              key={index}
              style={[
                productImageStyles.dot,
                index === activeIndex && productImageStyles.activeDot,
              ]}
            />
          ))}
        </View>

        <FlatList
          data={images}
          horizontal
          pagingEnabled
          showsHorizontalScrollIndicator={false}
          keyExtractor={(_, index) => index.toString()}
          onMomentumScrollEnd={onScroll}
          renderItem={({ item }) => (
            <View style={[productImageStyles.imageWrapper, { width: sliderWidth }]}>
              <Image
                source={{ uri: item.uri }}
                style={productImageStyles.watchImage}
                resizeMode="cover"
              />
            </View>
          )}
        />
      </View>
    </View>
  );
}

