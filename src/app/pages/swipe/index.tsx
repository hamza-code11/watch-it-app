// app/swipe.tsx
import { Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import { useRouter } from "expo-router";
import { useEffect, useRef, useState } from "react";
import { Animated, Dimensions, Image, Pressable, ScrollView, Text, TouchableOpacity, View } from "react-native";

import { useTheme } from "../../../context/ThemeContext";
import { getStyles } from "../../../screens/Swipe/Swipe.styles";

const { width, height } = Dimensions.get("window");

type Watch = {
  id: string;
  brand: string;
  name: string;
  price: string;
  location: string;
  year: string;
  condition: string;
  reference: string;
  image: string;
};

const WATCHES: Watch[] = [
  {
    id: "1",
    brand: "ROLEX",
    name: "Daytona Two-Tone",
    price: "AED 118,000",
    location: "Dubai",
    year: "2023",
    condition: "Excellent",
    reference: "Ref. SBGA211",
    image: "https://images.unsplash.com/photo-1523170335258-f5ed11844a49?w=800",
  },
  {
    id: "2",
    brand: "MARINUS",
    name: "Aquaspace 300m",
    price: "AED 14,500",
    location: "Abu Dhabi",
    year: "2022",
    condition: "Mint",
    reference: "Ref. AS300M",
    image: "https://images.unsplash.com/photo-1547996160-81dfa63595aa?w=800",
  },
  {
    id: "3",
    brand: "IWC",
    name: "Vintage Automatic 18k",
    price: "AED 32,900",
    location: "Dubai",
    year: "2021",
    condition: "Very Good",
    reference: "Ref. IW3716",
    image: "https://images.unsplash.com/photo-1495856458515-0637185db551?w=800",
  },
  {
    id: "4",
    brand: "RAYMOND WEIL",
    name: "Freelancer Black",
    price: "AED 9,200",
    location: "Sharjah",
    year: "2023",
    condition: "Excellent",
    reference: "Ref. RW7730",
    image: "https://images.unsplash.com/photo-1508057198894-247b23fe5ade?w=800",
  },
  {
    id: "5",
    brand: "OMEGA",
    name: "Speedmaster Moonwatch Professional",
    price: "AED 26,500",
    location: "Dubai",
    year: "2022",
    condition: "Mint",
    reference: "Ref. 311.30.42.30.01.001",
    image: "https://images.unsplash.com/photo-1542496658-e33a6d0d50f6?w=800",
  },
  {
    id: "6",
    brand: "TAG HEUER",
    name: "Carrera Calibre 16",
    price: "AED 12,800",
    location: "Abu Dhabi",
    year: "2023",
    condition: "Excellent",
    reference: "Ref. CV2A10",
    image: "https://images.unsplash.com/photo-1587836374828-4dbafa94cf0e?w=800",
  },
  {
    id: "7",
    brand: "BREITLING",
    name: "Navitimer B01 Chronograph",
    price: "AED 21,000",
    location: "Dubai",
    year: "2022",
    condition: "Very Good",
    reference: "Ref. AB0120",
    image: "https://images.unsplash.com/photo-1603201667141-5a2d4c673378?w=800",
  },
];

// Track which items have been swiped
const swipedItems = new Set<string>();

const SwipePage = () => {
  const { theme } = useTheme();
  const styles = getStyles(theme);
  const router = useRouter();

  const [index, setIndex] = useState(0);
  const [currentWatch, setCurrentWatch] = useState(WATCHES[0]);
  const [isAnimating, setIsAnimating] = useState(false);

  const translateX = useRef(new Animated.Value(0)).current;
  const rotate = useRef(new Animated.Value(0)).current;
  const opacity = useRef(new Animated.Value(1)).current;

  // Reset animation values when watch changes
  useEffect(() => {
    translateX.setValue(0);
    rotate.setValue(0);
    opacity.setValue(1);
  }, [index]);

  const getNextAvailableIndex = (startIndex: number, direction: number) => {
    let nextIndex = startIndex;
    let attempts = 0;
    const total = WATCHES.length;
    
    do {
      nextIndex = (nextIndex + direction + total) % total;
      attempts++;
      if (attempts > total) break;
    } while (swipedItems.has(WATCHES[nextIndex].id) && attempts < total);
    
    return nextIndex;
  };

  const performSwipe = (direction: 'left' | 'right') => {
    if (isAnimating) return;
    
    swipedItems.add(currentWatch.id);
    setIsAnimating(true);

    const toValue = direction === 'left' ? -width : width;
    const rotateValue = direction === 'left' ? -15 : 15;

    Animated.parallel([
      Animated.timing(translateX, {
        toValue: toValue,
        duration: 400,
        useNativeDriver: true,
      }),
      Animated.timing(rotate, {
        toValue: rotateValue,
        duration: 400,
        useNativeDriver: true,
      }),
      Animated.timing(opacity, {
        toValue: 0,
        duration: 300,
        useNativeDriver: true,
      }),
    ]).start(() => {
      const nextIndex = getNextAvailableIndex(index, 1);
      
      if (nextIndex === index) {
        setIsAnimating(false);
        return;
      }

      setIndex(nextIndex);
      setCurrentWatch(WATCHES[nextIndex]);
      setIsAnimating(false);
    });
  };

  const handlePass = () => {
    if (isAnimating) return;
    performSwipe('left');
  };

  const handleInterest = () => {
    if (isAnimating) return;
    performSwipe('right');
  };

  const goTo = (i: number) => {
    if (isAnimating || i === index) return;
    if (swipedItems.has(WATCHES[i].id)) return;
    
    setIndex(i);
    setCurrentWatch(WATCHES[i]);
  };

  // Always show 5 thumbnails with active centered at index 2
  const getVisibleThumbnails = () => {
    const total = WATCHES.length;
    const visible: number[] = [];
    
    // Always show 5 items with active at center (index 2)
    // Show 2 before and 2 after
    for (let i = -2; i <= 2; i++) {
      let idx = (index + i + total) % total;
      // Skip swiped items for non-active positions
      if (i !== 0 && swipedItems.has(WATCHES[idx].id)) {
        // Find next available
        let nextIdx = (idx + 1 + total) % total;
        let attempts = 0;
        while (swipedItems.has(WATCHES[nextIdx].id) && attempts < total) {
          nextIdx = (nextIdx + 1 + total) % total;
          attempts++;
        }
        idx = nextIdx;
      }
      visible.push(idx);
    }
    
    return visible;
  };

  const visibleIndices = getVisibleThumbnails();

  const rotateInterpolate = rotate.interpolate({
    inputRange: [-15, 0, 15],
    outputRange: ['-15deg', '0deg', '15deg'],
  });

  // If no more items
  if (swipedItems.size >= WATCHES.length) {
    return (
      <View style={[styles.container, { justifyContent: 'center', alignItems: 'center' }]}>
        <Text style={{ color: '#FFFFFF', fontSize: 24, fontWeight: 'bold' }}>All caught up!</Text>
        <Text style={{ color: '#9CA3AF', fontSize: 16, marginTop: 8 }}>No more watches to show</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Animated.View 
        style={[
          styles.imageWrapper,
          {
            transform: [
              { translateX: translateX },
              { rotate: rotateInterpolate },
            ],
            opacity: opacity,
          }
        ]}
      >
        <Image source={{ uri: currentWatch.image }} style={styles.image} resizeMode="cover" />

        <Pressable
          style={[styles.tapZone, styles.tapZoneLeft]}
          onPress={() => {
            const prevIndex = getNextAvailableIndex(index, -1);
            if (prevIndex !== index) {
              setIndex(prevIndex);
              setCurrentWatch(WATCHES[prevIndex]);
            }
          }}
        />
        <Pressable
          style={[styles.tapZone, styles.tapZoneRight]}
          onPress={handlePass}
        />

        <View style={styles.dotsRow}>
          {WATCHES.map((item, i) => (
            <View 
              key={item.id} 
              style={[
                styles.dot, 
                i === index && styles.dotActive,
                swipedItems.has(item.id) && { opacity: 0.2 }
              ]} 
            />
          ))}
        </View>
      </Animated.View>

      <ScrollView style={styles.sheet} showsVerticalScrollIndicator={false}>
        <Text style={styles.brandName}>{currentWatch.brand}</Text>

        <View style={styles.titleRow}>
          <Text style={styles.name} numberOfLines={1} ellipsizeMode="tail">
            {currentWatch.name}
          </Text>
          <Text style={styles.price}>{currentWatch.price}</Text>
        </View>

        <View style={styles.detailsRow}>
          <View style={styles.detailItem}>
            <Ionicons name="location-outline" size={14} color={theme.textMuted} />
            <Text style={styles.detailText}>{currentWatch.location}</Text>
          </View>
          <View style={styles.detailDot} />
          <View style={styles.detailItem}>
            <Ionicons name="calendar-outline" size={14} color={theme.textMuted} />
            <Text style={styles.detailText}>{currentWatch.year}</Text>
          </View>
          <View style={styles.detailDot} />
          <View style={styles.detailItem}>
            <Ionicons name="checkmark-circle-outline" size={14} color={theme.textMuted} />
            <Text style={styles.detailText}>{currentWatch.condition}</Text>
          </View>
          <View style={styles.detailDot} />
          <View style={styles.detailItem}>
            <Ionicons name="pricetag-outline" size={14} color={theme.textMuted} />
            <Text style={styles.detailText} numberOfLines={1} ellipsizeMode="tail">
              {currentWatch.reference}
            </Text>
          </View>
        </View>

        {/* Thumbnails - Fixed 5 items with active centered */}
        <View style={styles.thumbRow}>
          {visibleIndices.map((idx, position) => {
            const isActive = position === 2; // Always center position
            const item = WATCHES[idx];
            if (!item) return null;
            const isSwiped = swipedItems.has(item.id);
            
            return (
              <TouchableOpacity
                key={item.id}
                style={[
                  styles.thumbWrapper,
                  isActive && styles.thumbWrapperActive,
                  isSwiped && { opacity: 0.3 },
                ]}
                onPress={() => {
                  if (!isSwiped && idx !== index) {
                    goTo(idx);
                  }
                }}
                activeOpacity={0.8}
                disabled={isSwiped || isAnimating}
              >
                <Image
                  source={{ uri: item.image }}
                  style={[
                    styles.thumbImage,
                    isActive && styles.thumbImageActive,
                  ]}
                  resizeMode="cover"
                />
                {!isActive && !isSwiped && (
                  <View style={styles.thumbOverlay} />
                )}
                {isSwiped && (
                  <View style={[styles.thumbOverlay, { backgroundColor: 'rgba(0,0,0,0.6)' }]} />
                )}
              </TouchableOpacity>
            );
          })}
        </View>

        {/* Action Buttons */}
        <View style={styles.actionRow}>
          <TouchableOpacity 
            style={styles.passButtonWrapper}
            activeOpacity={0.8}
            onPress={handlePass}
            disabled={isAnimating}
          >
            <LinearGradient
              colors={['rgba(255,107,107,0.15)', 'rgba(255,107,107,0.05)']}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 1 }}
              style={styles.passButtonGradient}
            >
              <View style={styles.passIconCircle}>
                <Ionicons name="close" size={22} color="#FF6B6B" />
              </View>
              <Text style={styles.passText}>Pass</Text>
            </LinearGradient>
          </TouchableOpacity>

          <TouchableOpacity 
            style={styles.interestButtonWrapper}
            activeOpacity={0.8}
            onPress={handleInterest}
            disabled={isAnimating}
          >
            <LinearGradient
              colors={['rgba(79,159,255,0.15)', 'rgba(79,159,255,0.05)']}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 1 }}
              style={styles.interestButtonGradient}
            >
              <View style={styles.interestIconCircle}>
                <Ionicons name="heart" size={22} color="#4F9FFF" />
              </View>
              <Text style={styles.interestText}>Interest</Text>
            </LinearGradient>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

export default SwipePage;


