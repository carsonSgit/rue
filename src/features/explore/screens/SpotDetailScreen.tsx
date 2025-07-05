import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  ActivityIndicator,
  SafeAreaView,
  Dimensions,
} from 'react-native';
import { RouteProp, useRoute, useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import { RootStackParamList } from '../../../navigation';
import { Spot } from '../../../types/models';
import { mockSpots } from '../../../tempData/mockApi';
import { useAuth } from '../../../providers/AuthProvider';
import { Badge } from '../../profile/components/StatBadge';
import { styles } from './SpotDetailScreen.styles';
import ImageCarousel from '../components/ImageCarousel';

type SpotDetailScreenRouteProp = RouteProp<RootStackParamList, 'SpotDetail'>;

export default function SpotDetailScreen() {
  const route = useRoute<SpotDetailScreenRouteProp>();
  const navigation = useNavigation();
  const { state: authState } = useAuth();
  const [spot, setSpot] = useState<Spot | null>(null);
  const [loading, setLoading] = useState(true);
  const [isSaved, setIsSaved] = useState(false);

  useEffect(() => {
    loadSpotDetails();
  }, []);

  const loadSpotDetails = async () => {
    try {
      const spotDetails = await mockSpots.getSpotById(route.params.spotId);
      if (spotDetails) {
        setSpot(spotDetails);
        setIsSaved(
          authState.user?.savedSpots.includes(spotDetails.id) || false
        );
      }
    } catch (error) {
      console.error('Failed to load spot details:', error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.loadingContainer}>
          <ActivityIndicator size="large" color="#FF385C" />
        </View>
      </SafeAreaView>
    );
  }

  if (!spot) {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.errorContainer}>
          <Text style={styles.errorText}>Spot not found</Text>
        </View>
      </SafeAreaView>
    );
  }

  // Generate mock images for demo
  const mockImages = Array(5).fill(null).map((_, i) => 
    `https://picsum.photos/800/400?random=${spot.id}-${i}`
  );

  return (
    <View style={styles.container}>
      <View style={styles.carouselContainer}>
        <ImageCarousel 
          images={mockImages}
          onClose={() => navigation.goBack()}
        />
      </View>

      <ScrollView style={styles.detailsContainer} bounces={false}>
        <View style={styles.content}>
          <View style={styles.header}>
            <View style={styles.titleContainer}>
              <Text style={styles.name}>{spot.name}</Text>
              <View style={styles.ratingContainer}>
                <Ionicons name="star" size={20} color="#FFD700" />
                <Text style={styles.rating}>{spot.rating?.toFixed(1)}</Text>
              </View>
            </View>

            {authState.isAuthenticated && (
              <TouchableOpacity
                style={styles.saveButton}
                onPress={() => setIsSaved(!isSaved)}
              >
                <Ionicons
                  name={isSaved ? 'heart' : 'heart-outline'}
                  size={24}
                  color={isSaved ? '#FF385C' : '#666'}
                />
              </TouchableOpacity>
            )}
          </View>

          <View style={styles.badgeContainer}>
            <Badge
              value={spot.views}
              label={spot.category}
              type="category"
              variant="filled"
              size="sm"
            />
            <Badge
              value={spot.rating ? Math.round(spot.rating * 100) : 0}
              label="Rating"
              type="category"
              variant="light"
              size="sm"
            />
          </View>

          <Text style={styles.description}>{spot.description}</Text>

          <View style={styles.tagsContainer}>
            {spot.tags.map((tag, index) => (
              <View key={index} style={styles.tag}>
                <Text style={styles.tagText}>#{tag}</Text>
              </View>
            ))}
          </View>

          {spot.address && (
            <View style={styles.infoRow}>
              <Ionicons name="location" size={20} color="#666" />
              <Text style={styles.infoText}>{spot.address}</Text>
            </View>
          )}
        </View>
      </ScrollView>
    </View>
  );
} 