import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Spot } from '../../../types/models';
import { styles } from './SpotCard.styles';

interface SpotCardProps {
  spot: Spot;
  onPress?: () => void;
  compact?: boolean;
}

export default function SpotCard({ spot, onPress, compact = false }: SpotCardProps) {
  return (
    <TouchableOpacity
      style={[styles.container, compact && styles.compactContainer]}
      onPress={onPress}
      activeOpacity={0.8}
    >
      <Image
        source={{ uri: `https://picsum.photos/300/200?random=${spot.id}` }} // Placeholder image
        style={[styles.image, compact && styles.compactImage]}
      />

      <View style={[styles.content, compact && styles.compactContent]}>
        <Text style={styles.name} numberOfLines={1}>
          {spot.name}
        </Text>

        <Text style={styles.category} numberOfLines={1}>
          {spot.category}
        </Text>

        {!compact && (
          <>
            <View style={styles.ratingContainer}>
              <Ionicons name="star" size={16} color="#FFD700" />
              <Text style={styles.rating}>{spot.rating?.toFixed(1)}</Text>
            </View>

            <View style={styles.tagsContainer}>
              {spot.tags.slice(0, 2).map((tag, index) => (
                <View key={index} style={styles.tag}>
                  <Text style={styles.tagText}>#{tag}</Text>
                </View>
              ))}
            </View>
          </>
        )}
      </View>
    </TouchableOpacity>
  );
} 