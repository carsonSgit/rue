import React, { useEffect, useRef } from 'react';
import { View, Text, TouchableOpacity, Image, Animated } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Spot } from '../../../types/models';
import { styles } from './SpotCard.styles';

interface SpotCardProps {
  spot: Spot;
  onPress?: () => void;
  isSelected?: boolean;
  layout?: 'horizontal' | 'vertical';
}

export default function SpotCard({ 
  spot, 
  onPress, 
  layout = 'horizontal' 
}: SpotCardProps) {


  const isVertical = layout === 'vertical';

  return (
    <Animated.View style={[
      styles.container,
      isVertical ? styles.verticalContainer : styles.horizontalContainer,
    ]}>
      <TouchableOpacity
        onPress={onPress}
        activeOpacity={0.95}
        style={styles.touchable}
      >
        <Image
          source={{ uri: `https://picsum.photos/800/600?random=${spot.id}` }}
          style={[
            styles.image,
            isVertical ? styles.verticalImage : styles.horizontalImage
          ] as any}
        />

        <View style={[
          styles.content,
          isVertical ? styles.verticalContent : styles.horizontalContent
        ]}>
          <View style={styles.header}>
            <View style={styles.titleContainer}>
              <Text style={styles.category} numberOfLines={1}>
                {spot.category}
              </Text>
              <Text style={styles.name} numberOfLines={isVertical ? 2 : 1}>
                {spot.name}
              </Text>
            </View>

            <View style={styles.ratingContainer}>
              <Ionicons name="star" size={16} color="#FFD700" />
              <Text style={styles.rating}>{spot.rating?.toFixed(1)}</Text>
            </View>
          </View>

          <View style={styles.tagsContainer}>
            {spot.tags.slice(0, isVertical ? 3 : 2).map((tag, index) => (
              <View 
                key={index} 
                style={[
                  styles.tag,
                  { backgroundColor: getTagColor(tag) }
                ]}
              >
                <Text style={styles.tagText}>#{tag}</Text>
              </View>
            ))}
          </View>
        </View>
      </TouchableOpacity>
    </Animated.View>
  );
}

// Helper function to generate consistent pastel colors for tags
function getTagColor(tag: string): string {
  const hue = Math.abs(tag.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0)) % 360;
  return `hsla(${hue}, 70%, 90%, 0.8)`;
} 