import { Spot, Itinerary, UserProfile, SearchFilters } from '../types/models';
import { spots } from './spots';
import { itineraries } from './itineraries';
import { users } from './users';

const MOCK_DELAY = 800; // Simulate network delay

// Helper function to simulate API delay
const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

// Mock authentication responses
export const mockAuth = {
  async login(email: string, password: string): Promise<UserProfile> {
    await delay(MOCK_DELAY);
    const user = users.find(u => u.email === email);
    if (!user || password.length < 6) {
      throw new Error('Invalid credentials');
    }
    return user;
  },

  async logout(): Promise<void> {
    await delay(MOCK_DELAY / 2);
    return;
  },

  async getCurrentUser(): Promise<UserProfile | null> {
    await delay(MOCK_DELAY / 2);
    return users[0]; // Default to first user for demo
  }
};

// Mock spots API
export const mockSpots = {
  async getSpots(filters?: SearchFilters): Promise<Spot[]> {
    await delay(MOCK_DELAY);
    if (!filters) return spots;
    
    return spots.filter(spot => {
      if (filters.category && filters.category.length > 0) {
        if (!filters.category.includes(spot.category)) return false;
      }
      if (filters.rating && spot.rating) {
        if (spot.rating < filters.rating) return false;
      }
      if (filters.tags && filters.tags.length > 0) {
        if (!spot.tags.some(tag => filters.tags?.includes(tag))) return false;
      }
      return true;
    });
  },

  async getSpotById(id: string): Promise<Spot | null> {
    await delay(MOCK_DELAY);
    return spots.find(spot => spot.id === id) || null;
  },

  async getNearbySpots(lat: number, lng: number, radius: number): Promise<Spot[]> {
    await delay(MOCK_DELAY);
    // Simple distance calculation for demo
    return spots.filter(spot => {
      const distance = Math.sqrt(
        Math.pow(spot.location.lat - lat, 2) + 
        Math.pow(spot.location.lng - lng, 2)
      ) * 111; // Rough conversion to km
      return distance <= radius;
    });
  }
};

// Mock itineraries API
export const mockItineraries = {
  async getItineraries(): Promise<Itinerary[]> {
    await delay(MOCK_DELAY);
    return itineraries;
  },

  async getItineraryById(id: string): Promise<Itinerary | null> {
    await delay(MOCK_DELAY);
    return itineraries.find(itinerary => itinerary.id === id) || null;
  },

  async getPersonalizedItineraries(userId: string): Promise<Itinerary[]> {
    await delay(MOCK_DELAY);
    return itineraries.filter(i => i.type === 'personalized');
  }
};

// Mock user profile API
export const mockUserProfile = {
  async getUserProfile(userId: string): Promise<UserProfile | null> {
    await delay(MOCK_DELAY);
    return users.find(user => user.id === userId) || null;
  },

  async updateUserProfile(userId: string, updates: Partial<UserProfile>): Promise<UserProfile> {
    await delay(MOCK_DELAY);
    const user = users.find(u => u.id === userId);
    if (!user) throw new Error('User not found');
    return { ...user, ...updates };
  },

  async toggleSavedSpot(userId: string, spotId: string): Promise<string[]> {
    await delay(MOCK_DELAY);
    const user = users.find(u => u.id === userId);
    if (!user) throw new Error('User not found');
    
    const savedSpots = [...user.savedSpots];
    const index = savedSpots.indexOf(spotId);
    
    if (index === -1) {
      savedSpots.push(spotId);
    } else {
      savedSpots.splice(index, 1);
    }
    
    return savedSpots;
  },

  async markSpotAsVisited(userId: string, spotId: string): Promise<string[]> {
    await delay(MOCK_DELAY);
    const user = users.find(u => u.id === userId);
    if (!user) throw new Error('User not found');
    
    if (!user.visitedSpots.includes(spotId)) {
      user.visitedSpots.push(spotId);
    }
    
    return user.visitedSpots;
  }
}; 