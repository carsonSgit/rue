import React, { useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView, SafeAreaView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useAuth } from '../../../providers/AuthProvider';
import { Badge } from '../components/StatBadge';
import { useFocusEffect } from '@react-navigation/native';

export default function ProfileScreen() {
  const { state, logout, refreshUser } = useAuth();

  // Refresh user data when screen comes into focus
  useFocusEffect(
    React.useCallback(() => {
      refreshUser();
    }, [refreshUser])
  );

  if (!state.isAuthenticated) {
    return (
      <SafeAreaView style={styles.container}>
        <Text style={styles.message}>Please log in to view your profile</Text>
      </SafeAreaView>
    );
  }

  const handleLogout = async () => {
    try {
      await logout();
    } catch (error) {
      console.error('Failed to logout:', error);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <View style={styles.header}>
          <View style={styles.avatarContainer}>
            <Text style={styles.avatarText}>
              {state.user?.name?.charAt(0).toUpperCase() || 'U'}
            </Text>
          </View>
          <Text style={styles.name}>{state.user?.name || 'User'}</Text>
          <Text style={styles.email}>{state.user?.email}</Text>
        </View>

        <View style={styles.statsContainer}>
          <Badge 
            value={state.user?.savedSpots.length || 0} 
            label="Saved Spots"
            variant="light"
            size="md"
          />
          <Badge 
            value={state.user?.visitedSpots.length || 0} 
            label="Visited"
            variant="light"
            size="md"
          />
          <Badge 
            value={state.user?.stats?.contributionCount || 0} 
            label="Contributions"
            variant="light"
            size="md"
          />
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Preferences</Text>
          <TouchableOpacity style={styles.menuItem}>
            <Ionicons name="notifications-outline" size={24} color="#666" />
            <Text style={styles.menuText}>Notifications</Text>
            <Ionicons name="chevron-forward" size={24} color="#666" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.menuItem}>
            <Ionicons name="map-outline" size={24} color="#666" />
            <Text style={styles.menuText}>Default Location</Text>
            <Ionicons name="chevron-forward" size={24} color="#666" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.menuItem}>
            <Ionicons name="color-palette-outline" size={24} color="#666" />
            <Text style={styles.menuText}>Theme</Text>
            <Ionicons name="chevron-forward" size={24} color="#666" />
          </TouchableOpacity>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Account</Text>
          <TouchableOpacity style={styles.menuItem}>
            <Ionicons name="person-outline" size={24} color="#666" />
            <Text style={styles.menuText}>Edit Profile</Text>
            <Ionicons name="chevron-forward" size={24} color="#666" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.menuItem}>
            <Ionicons name="lock-closed-outline" size={24} color="#666" />
            <Text style={styles.menuText}>Change Password</Text>
            <Ionicons name="chevron-forward" size={24} color="#666" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.menuItem} onPress={handleLogout}>
            <Ionicons name="log-out-outline" size={24} color="#FF385C" />
            <Text style={[styles.menuText, styles.logoutText]}>Log Out</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  scrollView: {
    flex: 1,
  },
  header: {
    alignItems: 'center',
    padding: 20,
  },
  avatarContainer: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: '#FF385C',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 12,
  },
  avatarText: {
    fontSize: 32,
    color: '#fff',
    fontWeight: '600',
  },
  name: {
    fontSize: 24,
    fontWeight: '600',
    color: '#1a1a1a',
    marginBottom: 4,
  },
  email: {
    fontSize: 16,
    color: '#666',
  },
  statsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    padding: 20,
    gap: 8,
  },
  section: {
    padding: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#1a1a1a',
    marginBottom: 16,
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
  },
  menuText: {
    flex: 1,
    marginLeft: 12,
    fontSize: 16,
    color: '#1a1a1a',
  },
  logoutText: {
    color: '#FF385C',
  },
  message: {
    textAlign: 'center',
    fontSize: 16,
    color: '#666',
    marginTop: 24,
  },
}); 