export interface Spot {
  id: string;
  name: string;
  location: {
    lat: number;
    lng: number;
  };
  category: string;
  description: string;
  tags: string[];
  images: string[];
  rating?: number;
  views: number;
  // Additional fields for future expansion
  address?: string;
  openingHours?: string[];
  priceRange?: string;
  website?: string;
  phoneNumber?: string;
  createdAt?: string;
  updatedAt?: string;
}

export interface Itinerary {
  id: string;
  title: string;
  description: string;
  spotIds: string[];
  duration: string;
  theme: string;
  createdBy: string;
  type: "perfect_day" | "personalized" | "custom";
  // Additional fields for future expansion
  imageUrl?: string;
  estimatedCost?: string;
  difficulty?: "easy" | "moderate" | "challenging";
  seasonality?: string[];
  createdAt?: string;
  updatedAt?: string;
}

export interface UserProfile {
  id: string;
  name: string;
  savedSpots: string[];
  visitedSpots: string[];
  // Additional fields for future expansion
  email?: string;
  avatar?: string;
  preferences?: {
    categories?: string[];
    radius?: number;
    transportMode?: "walk" | "transit" | "car";
  };
  stats?: {
    totalVisits: number;
    contributionCount: number;
    joinedDate: string;
  };
}

export interface AuthState {
  isAuthenticated: boolean;
  user: UserProfile | null;
  loading: boolean;
  error: string | null;
}

export interface MapViewport {
  latitude: number;
  longitude: number;
  zoom: number;
  bearing: number;
  pitch: number;
}

export interface SearchFilters {
  category?: string[];
  radius?: number;
  transportMode: "walk" | "transit" | "car";
  priceRange?: string[];
  rating?: number;
  tags?: string[];
} 