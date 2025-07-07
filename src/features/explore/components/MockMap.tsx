import React, { useRef, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Dimensions, Animated } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { BlurView } from 'expo-blur';
import { Spot } from '../../../types/models';

interface MockMapProps {
  spots: Spot[];
  onSpotPress: (spotId: string) => void;
  selectedSpotId: string | null;
  initialRegion: {
    latitude: number;
    longitude: number;
    latitudeDelta: number;
    longitudeDelta: number;
  };
}

export default function MockMap({ spots, onSpotPress, selectedSpotId, initialRegion }: MockMapProps) {
  // Animation values for each marker
  const markerAnimations = useRef<{ [key: string]: Animated.Value }>(
    spots.reduce((acc, spot) => ({
      ...acc,
      [spot.id]: new Animated.Value(0)
    }), {})
  ).current;

  useEffect(() => {
    // Animate selected marker
    spots.forEach(spot => {
      Animated.spring(markerAnimations[spot.id], {
        toValue: spot.id === selectedSpotId ? 1 : 0,
        useNativeDriver: true,
        tension: 40,
        friction: 7
      }).start();
    });
  }, [selectedSpotId]);

  // Calculate relative positions based on lat/lng
  const getRelativePosition = (lat: number, lng: number) => {
    const centerLat = initialRegion.latitude;
    const centerLng = initialRegion.longitude;
    const latRange = initialRegion.latitudeDelta;
    const lngRange = initialRegion.longitudeDelta;

    // Calculate position as percentage from center
    const x = ((lng - centerLng) / lngRange + 0.5) * 100;
    const y = ((centerLat - lat) / latRange + 0.5) * 100;

    return {
      left: `${Math.max(0, Math.min(100, x))}%`,
      top: `${Math.max(0, Math.min(100, y))}%`,
    };
  };

  return (
    <View style={styles.container}>
      {/* Mock map background with gradient */}
      <View style={styles.mapBackground}>
        <Text style={styles.mockText}>Montreal</Text>
        {/* Grid lines to simulate map */}
        <View style={styles.gridLines} />
      </View>

      {/* Spot markers */}
      {spots.map((spot) => {
        const position = getRelativePosition(spot.location.lat, spot.location.lng);
        const isSelected = spot.id === selectedSpotId;

        const markerStyle = {
          transform: [
            { translateX: -12 },
            { translateY: -24 },
            {
              scale: markerAnimations[spot.id].interpolate({
                inputRange: [0, 1],
                outputRange: [1, 1.2]
              })
            }
          ]
        };

        return (
          <Animated.View
            key={spot.id}
            style={[
              styles.marker,
              { left: position.left, top: position.top },
              markerStyle
            ]}
          >
            <TouchableOpacity
              onPress={() => onSpotPress(spot.id)}
              style={styles.markerTouchable}
            >
              <Ionicons 
                name="location" 
                size={24} 
                color={isSelected ? "#FF385C" : "#666"} 
                style={styles.markerIcon}
              />
              {isSelected && (
                <BlurView intensity={80} style={styles.markerLabelBlur}>
                  <View style={styles.markerLabel}>
                    <Text style={styles.markerText} numberOfLines={1}>
                      {spot.name}
                    </Text>
                    <Text style={styles.markerCategory} numberOfLines={1}>
                      {spot.category}
                    </Text>
                  </View>
                </BlurView>
              )}
            </TouchableOpacity>
          </Animated.View>
        );
      })}
    </View>
  );
}

const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    width: width,
    height: height * 0.65,
    backgroundColor: '#f8f8f8',
    position: 'relative',
    overflow: 'hidden',
  },
  mapBackground: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: '#f0f0f0',
    justifyContent: 'center',
    alignItems: 'center',
  },
  mockText: {
    fontSize: 32,
    color: '#ddd',
    fontWeight: 'bold',
  },
  gridLines: {
    ...StyleSheet.absoluteFillObject,
    borderWidth: 1,
    borderColor: '#e8e8e8',
  },
  marker: {
    position: 'absolute',
    alignItems: 'center',
    zIndex: 1,
  },
  markerTouchable: {
    alignItems: 'center',
  },
  markerIcon: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  markerLabelBlur: {
    borderRadius: 12,
    overflow: 'hidden',
    marginTop: 4,
  },
  markerLabel: {
    padding: 8,
    minWidth: 120,
    alignItems: 'center',
  },
  markerText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#1a1a1a',
    textAlign: 'center',
  },
  markerCategory: {
    fontSize: 12,
    color: '#666',
    marginTop: 2,
    textAlign: 'center',
  },
}); 