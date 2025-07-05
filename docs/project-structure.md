# Project Structure 🗂️

## Directory Overview

```
rue/
├── app.json                # Expo configuration
├── App.tsx                 # Root component
├── assets/                 # Static assets (images, fonts)
├── src/                    # Main source code
│   ├── features/           # Feature-based modules
│   │   ├── auth/           # Authentication feature
│   │   ├── explore/        # Spot exploration feature
│   │   ├── itineraries/    # Itinerary management
│   │   └── profile/        # User profile feature
│   ├── navigation/         # Navigation configuration
│   ├── providers/          # Context providers
│   ├── tempData/           # Mock data (temporary)
│   └── types/              # TypeScript type definitions
└── docs/                   # Project documentation
```

## Key Directories Explained

### `src/features/`
Each feature is a self-contained module with its own:
- `screens/`: Feature-specific screens
- `components/`: Reusable components for the feature
- `hooks/`: Custom hooks (if needed)
- `utils/`: Helper functions
- `types/`: Feature-specific types

#### Feature Breakdown:

##### `auth/`
- Handles user authentication
- Login/Register flows
- Session management
- Password reset

##### `explore/`
- Main spot discovery feature
- Map integration
- Spot details and reviews
- Search and filtering

##### `itineraries/`
- Itinerary creation and management
- Trip planning
- Sharing functionality

##### `profile/`
- User profile management
- Stats and achievements
- Settings

### `src/navigation/`
- Navigation stack configuration
- Screen routing
- Navigation types
- Deep linking setup

### `src/providers/`
- Global state management
- Context providers
- Theme provider
- Authentication state

### `src/tempData/`
- Mock data for development
- API response simulation
- Test data structures

### `src/types/`
- Global TypeScript interfaces
- Shared type definitions
- API response types

### `assets/`
- Images and icons
- Fonts
- Other static resources

## File Naming Conventions

- Components: `PascalCase.tsx`
- Styles: `ComponentName.styles.ts`
- Screens: `ScreenName.tsx`
- Utilities: `camelCase.ts`
- Types: `models.ts` or `types.ts`
