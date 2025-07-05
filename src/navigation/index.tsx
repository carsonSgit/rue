import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { Ionicons } from '@expo/vector-icons';
import { useAuth } from '../providers/AuthProvider';

// Import screens (to be created)
import ExploreScreen from '../features/explore/screens/ExploreScreen';
import SpotDetailScreen from '../features/explore/screens/SpotDetailScreen';
import ItinerariesScreen from '../features/itineraries/screens/ItinerariesScreen';
import ProfileScreen from '../features/profile/screens/ProfileScreen';
import LoginScreen from '../features/auth/screens/LoginScreen';

// Navigation types
export type RootStackParamList = {
  Main: undefined;
  SpotDetail: { spotId: string };
  Login: undefined;
};

export type MainTabParamList = {
  Explore: undefined;
  Itineraries: undefined;
  Profile: undefined;
};

const Stack = createStackNavigator<RootStackParamList>();
const Tab = createBottomTabNavigator<MainTabParamList>();

// Bottom tab navigator
function MainTabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName: keyof typeof Ionicons.glyphMap;

          switch (route.name) {
            case 'Explore':
              iconName = focused ? 'compass' : 'compass-outline';
              break;
            case 'Itineraries':
              iconName = focused ? 'map' : 'map-outline';
              break;
            case 'Profile':
              iconName = focused ? 'person' : 'person-outline';
              break;
            default:
              iconName = 'help-outline';
          }

          return <Ionicons name={iconName as any} size={size} color={color} />;
        },
        tabBarActiveTintColor: '#FF385C',
        tabBarInactiveTintColor: 'gray',
        headerShown: false,
      })}
    >
      <Tab.Screen name="Explore" component={ExploreScreen} />
      <Tab.Screen name="Itineraries" component={ItinerariesScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
}

// Root navigator
export default function Navigation() {
  const { state } = useAuth();

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        {state.isAuthenticated ? (
          <>
            <Stack.Screen name="Main" component={MainTabs} />
            <Stack.Screen 
              name="SpotDetail" 
              component={SpotDetailScreen}
              options={{
                headerShown: false,
                presentation: 'modal',
                cardStyle: { backgroundColor: 'transparent' },
                cardOverlayEnabled: true,
                cardStyleInterpolator: ({ current: { progress } }) => ({
                  cardStyle: {
                    opacity: progress,
                  },
                }),
              }}
            />
          </>
        ) : (
          <Stack.Screen name="Login" component={LoginScreen} />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
} 