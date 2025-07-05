import { Spot } from '../types/models';

export const spots: Spot[] = [
  {
    id: '1',
    name: 'Mount Royal Lookout',
    location: {
      lat: 45.5048,
      lng: -73.5873,
    },
    category: 'Landmarks',
    description: 'Iconic lookout point offering panoramic views of downtown Montreal and the St. Lawrence River.',
    tags: ['views', 'hiking', 'nature', 'photography'],
    images: ['mount-royal-1.jpg', 'mount-royal-2.jpg'],
    rating: 4.8,
    views: 1250,
    address: 'Mount Royal, Montreal, QC',
  },
  {
    id: '2',
    name: 'Jean-Talon Market',
    location: {
      lat: 45.5365,
      lng: -73.6155,
    },
    category: 'Markets',
    description: 'Vibrant open-air market featuring local produce, flowers, and specialty food shops.',
    tags: ['food', 'shopping', 'local', 'culture'],
    images: ['jean-talon-1.jpg', 'jean-talon-2.jpg'],
    rating: 4.6,
    views: 850,
    address: '7070 Henri Julien Ave, Montreal, QC',
  },
  {
    id: '3',
    name: 'Old Port of Montreal',
    location: {
      lat: 45.5017,
      lng: -73.5504,
    },
    category: 'Historic Sites',
    description: 'Historic waterfront area with activities, dining, and cultural attractions.',
    tags: ['history', 'waterfront', 'activities', 'dining'],
    images: ['old-port-1.jpg', 'old-port-2.jpg'],
    rating: 4.7,
    views: 2100,
    address: 'Old Port of Montreal, Montreal, QC',
  },
  {
    id: '4',
    name: 'La Banquise',
    location: {
      lat: 45.5252,
      lng: -73.5744,
    },
    category: 'Restaurants',
    description: 'Famous 24-hour restaurant known for its extensive poutine menu.',
    tags: ['food', 'poutine', 'late-night', 'casual'],
    images: ['banquise-1.jpg', 'banquise-2.jpg'],
    rating: 4.5,
    views: 750,
    address: '994 Rue Rachel E, Montreal, QC',
  },
  {
    id: '5',
    name: 'Notre-Dame Basilica',
    location: {
      lat: 45.5046,
      lng: -73.5566,
    },
    category: 'Architecture',
    description: 'Gothic Revival church with stunning interior and light shows.',
    tags: ['architecture', 'history', 'culture', 'art'],
    images: ['notre-dame-1.jpg', 'notre-dame-2.jpg'],
    rating: 4.9,
    views: 1800,
    address: '110 Notre-Dame St W, Montreal, QC',
  }
];

// More spots can be added here following the same pattern 