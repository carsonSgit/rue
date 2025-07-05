import React, { useState, useEffect } from 'react';
import { View, FlatList, ActivityIndicator } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../../navigation';
import { Spot } from '../../../types/models';
import { mockSpots } from '../../../tempData/mockApi';
import SpotCard from '../components/SpotCard';
import MockMap from '../components/MockMap';
import { styles } from './ExploreScreen.styles';

type ExploreScreenNavigationProp = StackNavigationProp<RootStackParamList>;

const DEFAULT_REGION = {
  latitude: 45.5017,
  longitude: -73.5673,
  latitudeDelta: 0.0922,
  longitudeDelta: 0.0421,
};

export default function ExploreScreen() {
  const navigation = useNavigation<ExploreScreenNavigationProp>();
  const [spots, setSpots] = useState<Spot[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadSpots();
  }, []);

  const loadSpots = async () => {
    try {
      const nearbySpots = await mockSpots.getNearbySpots(
        DEFAULT_REGION.latitude,
        DEFAULT_REGION.longitude,
        15 // Default 15km radius
      );
      setSpots(nearbySpots);
    } catch (error) {
      console.error('Failed to load spots:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleSpotPress = (spotId: string) => {
    navigation.navigate('SpotDetail', { spotId });
  };

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#FF385C" />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <MockMap
        spots={spots}
        onSpotPress={handleSpotPress}
        initialRegion={DEFAULT_REGION}
      />

      <FlatList
        data={spots}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <SpotCard
            spot={item}
            onPress={() => handleSpotPress(item.id)}
          />
        )}
        horizontal
        showsHorizontalScrollIndicator={false}
        style={styles.spotsList}
        contentContainerStyle={styles.spotsListContent}
      />
    </View>
  );
} 