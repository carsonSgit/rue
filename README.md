# Rue - Discover Montreal's Hidden Gems

A mobile app that helps users explore the best places in Montreal through curated content, interactive maps, and personalized itineraries.

## Features

- 🗺️ Interactive map with location pins
- 📍 Detailed spot information
- 🎯 Personalized itineraries
- 👤 User profiles with visit tracking
- 🏅 Achievement badges
- 🔍 Search and filtering options

## Tech Stack

- Expo / React Native
- TypeScript
- Supabase (Authentication & Database)
- Mapbox (Maps)
- React Navigation
- Expo Vector Icons

## Prerequisites

- Node.js (v14 or newer)
- npm or yarn
- Expo CLI (`npm install -g expo-cli`)
- iOS Simulator (macOS) or Android Emulator

## Getting Started

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/rue.git
   cd rue
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env` file in the root directory:
   ```
   SUPABASE_URL=your_supabase_url
   SUPABASE_ANON_KEY=your_supabase_anon_key
   MAPBOX_ACCESS_TOKEN=your_mapbox_token
   ```

4. Start the development server:
   ```bash
   npm start
   ```

5. Run on your preferred platform:
   - Press `i` for iOS simulator
   - Press `a` for Android emulator
   - Scan QR code with Expo Go app for physical device

## Project Structure

```
/src
  /features         # Feature-based modules
    /auth          # Authentication
    /explore       # Map and spot discovery
    /itineraries   # Curated and personal itineraries
    /profile       # User profile and achievements
  /components      # Shared components
  /navigation      # Navigation setup
  /providers       # Context providers
  /lib            # Third-party service setup
  /types          # TypeScript definitions
  /utils          # Helper functions
  /tempData       # Mock data for development
```

## Development Notes

- The app uses mock data during development
- Authentication is simulated with mock responses
- Map functionality works without API key in development
- Styling uses StyleSheet.create() in separate .styles.ts files

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- Expo team for the amazing React Native tooling
- Supabase for the backend infrastructure
- Mapbox for the mapping capabilities
- Montreal's vibrant community for inspiration 