# Screen Map 🗺️

## Authentication Flow

### Login Screen
- **Path**: `src/features/auth/screens/LoginScreen.tsx`
- **Parameters**: None
- **State**: Email, password
- **Navigation**:
  - → Register Screen
  - → Forgot Password Screen
  - → Tab Navigator (on success)

### Register Screen
- **Path**: `src/features/auth/screens/RegisterScreen.tsx`
- **Parameters**: None
- **State**: Email, password, name
- **Navigation**:
  - → Login Screen
  - → Tab Navigator (on success)

## Main Navigation (Tab Navigator)

### Explore Tab

#### Explore Screen
- **Path**: `src/features/explore/screens/ExploreScreen.tsx`
- **Parameters**: None
- **State**: 
  - Selected location
  - Filter settings
  - Search query
- **Navigation**:
  - → Spot Detail Screen
  - → Filter Modal

#### Spot Detail Screen
- **Path**: `src/features/explore/screens/SpotDetailScreen.tsx`
- **Parameters**:
  - `spotId`: string
  - `initialTab?`: 'info' | 'reviews' | 'photos'
- **State**:
  - Spot details
  - Review list
  - Photo gallery
- **Navigation**:
  - → Add to Itinerary Modal
  - → Photo Gallery
  - → Review Form

### Itineraries Tab

#### Itineraries Screen
- **Path**: `src/features/itineraries/screens/ItinerariesScreen.tsx`
- **Parameters**: None
- **State**:
  - Itinerary list
  - Filter/sort settings
- **Navigation**:
  - → Itinerary Detail Screen
  - → Create Itinerary Screen

#### Itinerary Detail Screen
- **Path**: `src/features/itineraries/screens/ItineraryDetailScreen.tsx`
- **Parameters**:
  - `itineraryId`: string
  - `isEditing?`: boolean
- **State**:
  - Itinerary details
  - Spot list
  - Edit mode
- **Navigation**:
  - → Spot Detail Screen
  - → Share Modal
  - → Edit Mode

### Profile Tab

#### Profile Screen
- **Path**: `src/features/profile/screens/ProfileScreen.tsx`
- **Parameters**: None
- **State**:
  - User profile
  - Stats
  - Recent activity
- **Navigation**:
  - → Edit Profile Screen
  - → Settings Screen
  - → My Reviews Screen

#### Settings Screen
- **Path**: `src/features/profile/screens/SettingsScreen.tsx`
- **Parameters**: None
- **State**:
  - App settings
  - Notification preferences
  - Theme selection
- **Navigation**:
  - → About Screen
  - → Privacy Policy
  - → Terms of Service

## Modals

### Filter Modal
- **Path**: `src/features/explore/components/FilterModal.tsx`
- **Parameters**:
  - `currentFilters`: FilterSettings
  - `onApply`: (filters: FilterSettings) => void
- **State**: Filter settings

### Add to Itinerary Modal
- **Path**: `src/features/itineraries/components/AddToItineraryModal.tsx`
- **Parameters**:
  - `spotId`: string
  - `onAdd`: (itineraryId: string) => void
- **State**: Selected itinerary

### Share Modal
- **Path**: `src/features/shared/components/ShareModal.tsx`
- **Parameters**:
  - `itemType`: 'itinerary' | 'spot'
  - `itemId`: string
- **State**: Share settings

## Navigation Parameters Reference

```typescript
// Common parameter types used across screens

type SpotDetailParams = {
  spotId: string;
  initialTab?: 'info' | 'reviews' | 'photos';
};

type ItineraryDetailParams = {
  itineraryId: string;
  isEditing?: boolean;
};

type FilterModalParams = {
  currentFilters: FilterSettings;
  onApply: (filters: FilterSettings) => void;
};

type AddToItineraryModalParams = {
  spotId: string;
  onAdd: (itineraryId: string) => void;
};

type ShareModalParams = {
  itemType: 'itinerary' | 'spot';
  itemId: string;
};
``` 