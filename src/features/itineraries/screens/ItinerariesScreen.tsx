import React from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useAuth } from '../../../providers/AuthProvider';

interface Itinerary {
  id: string;
  name: string;
  spots: string[];
  date: string;
}

export default function ItinerariesScreen() {
  const { state } = useAuth();
  
  // Mock data for MVP
  const mockItineraries: Itinerary[] = [
    {
      id: '1',
      name: 'Weekend in Montreal',
      spots: ['spot1', 'spot2', 'spot3'],
      date: '2024-07-15',
    },
    {
      id: '2',
      name: 'Food Tour',
      spots: ['spot4', 'spot5'],
      date: '2024-07-20',
    },
  ];

  const renderItem = ({ item }: { item: Itinerary }) => (
    <TouchableOpacity style={styles.itineraryCard}>
      <View style={styles.header}>
        <Text style={styles.title}>{item.name}</Text>
        <Text style={styles.date}>{item.date}</Text>
      </View>
      
      <View style={styles.spotsInfo}>
        <Ionicons name="location" size={16} color="#666" />
        <Text style={styles.spotsText}>
          {item.spots.length} {item.spots.length === 1 ? 'spot' : 'spots'}
        </Text>
      </View>

      <TouchableOpacity style={styles.viewButton}>
        <Text style={styles.viewButtonText}>View Details</Text>
      </TouchableOpacity>
    </TouchableOpacity>
  );

  if (!state.isAuthenticated) {
    return (
      <View style={styles.container}>
        <Text style={styles.message}>Please log in to view your itineraries</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={mockItineraries}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        contentContainerStyle={styles.listContainer}
        ListEmptyComponent={
          <Text style={styles.message}>No itineraries yet</Text>
        }
      />

      <TouchableOpacity style={styles.fab}>
        <Ionicons name="add" size={24} color="#fff" />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  listContainer: {
    padding: 16,
    gap: 16,
  },
  itineraryCard: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 16,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
    elevation: 5,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },
  title: {
    fontSize: 18,
    fontWeight: '600',
    color: '#1a1a1a',
  },
  date: {
    fontSize: 14,
    color: '#666',
  },
  spotsInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  spotsText: {
    marginLeft: 6,
    fontSize: 14,
    color: '#666',
  },
  viewButton: {
    backgroundColor: '#f5f5f5',
    padding: 8,
    borderRadius: 8,
    alignItems: 'center',
  },
  viewButtonText: {
    color: '#FF385C',
    fontWeight: '500',
  },
  message: {
    textAlign: 'center',
    fontSize: 16,
    color: '#666',
    marginTop: 24,
  },
  fab: {
    position: 'absolute',
    bottom: 24,
    right: 24,
    backgroundColor: '#FF385C',
    width: 56,
    height: 56,
    borderRadius: 28,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
}); 