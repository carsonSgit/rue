import React, { useState, useRef } from 'react';
import {
  View,
  ScrollView,
  Image,
  Dimensions,
  StyleSheet,
  TouchableOpacity,
  Text,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const { width: screenWidth } = Dimensions.get('window');

interface ImageCarouselProps {
  images: string[];
  onClose?: () => void;
}

export default function ImageCarousel({ images, onClose }: ImageCarouselProps) {
  const [currentPage, setCurrentPage] = useState(0);
  const scrollViewRef = useRef<ScrollView>(null);

  const handleScroll = (event: any) => {
    const offsetX = event.nativeEvent.contentOffset.x;
    const page = Math.round(offsetX / screenWidth);
    setCurrentPage(page);
  };

  return (
    <View style={styles.container}>
      <ScrollView
        ref={scrollViewRef}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onScroll={handleScroll}
        scrollEventThrottle={16}
      >
        {images.map((image, index) => (
          <Image
            key={index}
            source={{ uri: image }}
            style={styles.image}
            resizeMode="cover"
          />
        ))}
      </ScrollView>

      {/* Page indicator */}
      <View style={styles.pagination}>
        {images.map((_, index) => (
          <View
            key={index}
            style={[
              styles.paginationDot,
              index === currentPage && styles.paginationDotActive,
            ]}
          />
        ))}
      </View>

      {/* Close button */}
      {onClose && (
        <TouchableOpacity style={styles.closeButton} onPress={onClose}>
          <Ionicons name="close" size={24} color="#fff" />
        </TouchableOpacity>
      )}

      {/* Image counter */}
      <View style={styles.counter}>
        <Text style={styles.counterText}>
          {currentPage + 1} / {images.length}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
  image: {
    width: screenWidth,
    height: '100%',
  },
  pagination: {
    flexDirection: 'row',
    position: 'absolute',
    bottom: 40,
    alignSelf: 'center',
    gap: 8,
  },
  paginationDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: 'rgba(255, 255, 255, 0.4)',
  },
  paginationDotActive: {
    backgroundColor: '#fff',
  },
  closeButton: {
    position: 'absolute',
    top: 50,
    right: 20,
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  counter: {
    position: 'absolute',
    top: 50,
    left: 20,
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 15,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  counterText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: '600',
  },
}); 