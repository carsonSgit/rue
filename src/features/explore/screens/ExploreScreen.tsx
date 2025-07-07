import React, { useState, useEffect, useRef } from 'react';
import { View, FlatList, ActivityIndicator, TouchableOpacity, Animated, Platform } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { BlurView } from 'expo-blur';
import { Ionicons } from '@expo/vector-icons';
import { RootStackParamList } from '../../../navigation';
import { Spot } from '../../../types/models';
import { mockSpots } from '../../../tempData/mockApi';
import SpotCard from '../components/SpotCard';
import MockMap from '../components/MockMap';
import { styles } from './ExploreScreen.styles';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

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
  const [isVerticalLayout, setIsVerticalLayout] = useState(false);
  const [selectedSpotId, setSelectedSpotId] = useState<string | null>(null);
  const [showFilters, setShowFilters] = useState(false);
  const listRef = useRef<FlatList>(null);
  const layoutAnimation = useRef(new Animated.Value(0)).current;
  const insets = useSafeAreaInsets();

  useEffect(() => {
    loadSpots();
  }, []);

  const loadSpots = async () => {
    try {
      const nearbySpots = await mockSpots.getNearbySpots(
        DEFAULT_REGION.latitude,
        DEFAULT_REGION.longitude,
        15
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

  const handleMapSpotPress = (spotId: string) => {
    setSelectedSpotId(spotId);
    const spotIndex = spots.findIndex(spot => spot.id === spotId);
    if (spotIndex !== -1 && listRef.current) {
      listRef.current.scrollToIndex({
        index: spotIndex,
        animated: true,
        viewPosition: 0.5
      });
    }
  };

  const toggleLayout = () => {
    Animated.spring(layoutAnimation, {
      toValue: isVerticalLayout ? 0 : 1,
      useNativeDriver: true,
      tension: 40,
      friction: 7
    }).start();
    setIsVerticalLayout(!isVerticalLayout);
  };

  const getItemLayout = (_: any, index: number) => ({
    length: isVerticalLayout ? styles.verticalCard.height : styles.horizontalCard.width,
    offset: isVerticalLayout ? 
      styles.verticalCard.height * index :
      styles.horizontalCard.width * index,
    index,
  });

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#FF385C" />
      </View>
    );
  }

  const listAnimatedStyle = {
    transform: [{
      translateY: layoutAnimation.interpolate({
        inputRange: [0, 1],
        outputRange: [0, -200] // Adjust based on your needs
      })
    }]
  };

  return (
    <View style={[styles.container, { paddingTop: insets.top }]}>
      <MockMap
        spots={spots}
        onSpotPress={handleMapSpotPress}
        initialRegion={DEFAULT_REGION}
        selectedSpotId={selectedSpotId}
      />

      {/* Layout Toggle Button */}
      <TouchableOpacity
        style={[styles.toggleButton, { top: insets.top + 10 }]}
        onPress={toggleLayout}
      >
        <Ionicons
          name={isVerticalLayout ? "grid-outline" : "list-outline"}
          size={24}
          color="#fff"
        />
      </TouchableOpacity>

      {/* Filter Button */}
      <TouchableOpacity
        style={[styles.filterButton, { top: insets.top + 10 }]}
        onPress={() => setShowFilters(true)}
      >
        <Ionicons name="options-outline" size={24} color="#fff" />
      </TouchableOpacity>

      {/* Spots List with Blur Background */}
      <Animated.View style={[
        styles.spotsListContainer,
        listAnimatedStyle,
        { paddingBottom: insets.bottom }
      ]}>
        <BlurView intensity={80} style={styles.blurBackground} />
        <FlatList
          ref={listRef}
          data={spots}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <SpotCard
              spot={item}
              onPress={() => handleSpotPress(item.id)}
              isSelected={item.id === selectedSpotId}
              layout={isVerticalLayout ? 'vertical' : 'horizontal'}
            />
          )}
          horizontal={!isVerticalLayout}
          showsHorizontalScrollIndicator={false}
          showsVerticalScrollIndicator={false}
          snapToAlignment="center"
          snapToInterval={isVerticalLayout ? 
            styles.verticalCard.height : 
            styles.horizontalCard.width
          }
          decelerationRate="fast"
          getItemLayout={getItemLayout}
          contentContainerStyle={[
            styles.spotsListContent,
            isVerticalLayout ? styles.verticalListContent : styles.horizontalListContent
          ]}
        />
      </Animated.View>
    </View>
  );
} 