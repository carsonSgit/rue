import React, { useRef } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Dimensions, ScrollView, NativeSyntheticEvent, NativeScrollEvent } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Spot } from '../../../types/models';

interface MockMapProps {
  spots: Spot[];
  onSpotPress: (spotId: string) => void;
  initialRegion: {
    latitude: number;
    longitude: number;
    latitudeDelta: number;
    longitudeDelta: number;
  };
}

export default function MockMap({ spots, onSpotPress, initialRegion }: MockMapProps) {
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
      {/* Mock map background */}
      <View style={styles.mapBackground}>
        <Text style={styles.mockText}>Montreal</Text>
        {/* Grid lines to simulate map */}
        <View style={styles.gridLines} />
      </View>

      {/* Spot markers */}
      {spots.map((spot) => {
        const position = getRelativePosition(spot.location.lat, spot.location.lng);
        return (
          <TouchableOpacity
            key={spot.id}
            style={[styles.marker, { left: position.left, top: position.top }]}
            onPress={() => onSpotPress(spot.id)}
          >
            <Ionicons name="location" size={24} color="#FF385C" />
            <View style={styles.markerLabel}>
              <Text style={styles.markerText} numberOfLines={1}>
                {spot.name}
              </Text>
            </View>
          </TouchableOpacity>
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
    backgroundColor: '#f0f0f0',
    position: 'relative',
    overflow: 'hidden',
  },
  mapBackground: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: '#e8e8e8',
    justifyContent: 'center',
    alignItems: 'center',
  },
  mockText: {
    fontSize: 32,
    color: '#ccc',
    fontWeight: 'bold',
  },
  gridLines: {
    ...StyleSheet.absoluteFillObject,
    borderWidth: 1,
    borderColor: '#ddd',
  },
  marker: {
    position: 'absolute',
    transform: [{ translateX: -12 }, { translateY: -24 }],
    alignItems: 'center',
  },
  markerLabel: {
    backgroundColor: 'white',
    padding: 4,
    borderRadius: 4,
    maxWidth: 100,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 2,
    elevation: 3,
  },
  markerText: {
    fontSize: 12,
    color: '#333',
  },
}); 