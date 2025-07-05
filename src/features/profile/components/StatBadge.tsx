import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

interface BadgeProps {
  value: number;
  label: string;
  type?: 'stat' | 'category';
  size?: 'sm' | 'md' | 'lg';
  variant?: 'filled' | 'light' | 'outline';
}

export const Badge: React.FC<BadgeProps> = ({ 
  value, 
  label, 
  type = 'stat',
  size = 'md',
  variant = 'light'
}) => {
  const getColors = () => {
    if (type === 'stat') {
      if (value < 5) return { bg: '#E9FBF0', text: '#40C057', border: '#A6F0C6' }; // Green
      if (value < 10) return { bg: '#E7F5FF', text: '#339AF0', border: '#A5D8FF' }; // Blue
      if (value < 15) return { bg: '#F3F0FF', text: '#7950F2', border: '#D0BFFF' }; // Purple
      return { bg: '#FFF5F5', text: '#FA5252', border: '#FFBABA' }; // Red
    } else {
      // For categories, we'll use a different color scheme based on views
      if (value < 100) return { bg: '#E9FBF0', text: '#40C057', border: '#A6F0C6' }; // Green
      if (value < 500) return { bg: '#E7F5FF', text: '#339AF0', border: '#A5D8FF' }; // Blue
      if (value < 1000) return { bg: '#F3F0FF', text: '#7950F2', border: '#D0BFFF' }; // Purple
      return { bg: '#FFF5F5', text: '#FA5252', border: '#FFBABA' }; // Red
    }
  };

  const getSizeStyles = () => {
    switch (size) {
      case 'sm':
        return {
          container: { paddingVertical: 4, paddingHorizontal: 8 },
          value: { fontSize: 12 },
          label: { fontSize: 10 }
        };
      case 'lg':
        return {
          container: { paddingVertical: 8, paddingHorizontal: 16 },
          value: { fontSize: 16 },
          label: { fontSize: 14 }
        };
      default: // md
        return {
          container: { paddingVertical: 6, paddingHorizontal: 12 },
          value: { fontSize: 14 },
          label: { fontSize: 12 }
        };
    }
  };

  const colors = getColors();
  const sizeStyles = getSizeStyles();

  const getVariantStyles = () => {
    switch (variant) {
      case 'filled':
        return {
          container: { backgroundColor: colors.text },
          text: { color: '#fff' }
        };
      case 'outline':
        return {
          container: { 
            backgroundColor: 'transparent',
            borderWidth: 1,
            borderColor: colors.text
          },
          text: { color: colors.text }
        };
      default: // light
        return {
          container: { backgroundColor: colors.bg },
          text: { color: colors.text }
        };
    }
  };

  const variantStyles = getVariantStyles();

  return (
    <View style={[
      styles.container,
      sizeStyles.container,
      variantStyles.container,
      { borderRadius: size === 'sm' ? 12 : size === 'lg' ? 16 : 14 }
    ]}>
      <Text style={[
        styles.value,
        sizeStyles.value,
        variantStyles.text,
        { fontWeight: '600' }
      ]}>
        {value}
      </Text>
      <Text style={[
        styles.label,
        sizeStyles.label,
        variantStyles.text
      ]}>
        {label}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 8,
    marginBottom: 8,
  },
  value: {
    marginRight: 4,
  },
  label: {
    fontWeight: '500',
  },
}); 