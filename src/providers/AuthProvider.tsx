import React, { createContext, useContext, useReducer, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { AuthState, UserProfile } from '../types/models';
import { mockAuth, mockUserProfile } from '../tempData/mockApi';

// Define action types
type AuthAction =
  | { type: 'LOGIN_START' }
  | { type: 'LOGIN_SUCCESS'; payload: UserProfile }
  | { type: 'LOGIN_ERROR'; payload: string }
  | { type: 'LOGOUT' }
  | { type: 'RESTORE_TOKEN'; payload: UserProfile | null }
  | { type: 'UPDATE_USER'; payload: UserProfile };

// Initial state
const initialState: AuthState = {
  isAuthenticated: false,
  user: null,
  loading: true,
  error: null,
};

// Create context
const AuthContext = createContext<{
  state: AuthState;
  login: (email: string, password: string) => Promise<void>;
  logout: () => Promise<void>;
  refreshUser: () => Promise<void>;
} | null>(null);

// Reducer function
function authReducer(state: AuthState, action: AuthAction): AuthState {
  switch (action.type) {
    case 'LOGIN_START':
      return {
        ...state,
        loading: true,
        error: null,
      };
    case 'LOGIN_SUCCESS':
      return {
        ...state,
        isAuthenticated: true,
        user: action.payload,
        loading: false,
        error: null,
      };
    case 'LOGIN_ERROR':
      return {
        ...state,
        isAuthenticated: false,
        user: null,
        loading: false,
        error: action.payload,
      };
    case 'LOGOUT':
      return {
        ...state,
        isAuthenticated: false,
        user: null,
        loading: false,
        error: null,
      };
    case 'RESTORE_TOKEN':
      return {
        ...state,
        isAuthenticated: !!action.payload,
        user: action.payload,
        loading: false,
      };
    case 'UPDATE_USER':
      return {
        ...state,
        user: action.payload,
      };
    default:
      return state;
  }
}

// Provider component
export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [state, dispatch] = useReducer(authReducer, initialState);

  useEffect(() => {
    // Check for stored auth state on mount
    const bootstrapAsync = async () => {
      try {
        const storedUser = await AsyncStorage.getItem('@auth_user');
        if (storedUser) {
          dispatch({ type: 'RESTORE_TOKEN', payload: JSON.parse(storedUser) });
        } else {
          dispatch({ type: 'RESTORE_TOKEN', payload: null });
        }
      } catch (e) {
        console.error('Failed to restore auth state:', e);
        dispatch({ type: 'RESTORE_TOKEN', payload: null });
      }
    };

    bootstrapAsync();
  }, []);

  const login = async (email: string, password: string) => {
    dispatch({ type: 'LOGIN_START' });
    try {
      const user = await mockAuth.login(email, password);
      await AsyncStorage.setItem('@auth_user', JSON.stringify(user));
      dispatch({ type: 'LOGIN_SUCCESS', payload: user });
    } catch (error) {
      dispatch({ type: 'LOGIN_ERROR', payload: (error as Error).message });
    }
  };

  const logout = async () => {
    try {
      await mockAuth.logout();
      await AsyncStorage.removeItem('@auth_user');
      dispatch({ type: 'LOGOUT' });
    } catch (error) {
      console.error('Logout error:', error);
    }
  };

  const refreshUser = async () => {
    if (state.user) {
      try {
        const updatedUser = await mockUserProfile.getUserProfile(state.user.id);
        if (updatedUser) {
          await AsyncStorage.setItem('@auth_user', JSON.stringify(updatedUser));
          dispatch({ type: 'UPDATE_USER', payload: updatedUser });
        }
      } catch (error) {
        console.error('Failed to refresh user:', error);
      }
    }
  };

  return (
    <AuthContext.Provider value={{ state, login, logout, refreshUser }}>
      {children}
    </AuthContext.Provider>
  );
}

// Custom hook for using auth context
export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
} 