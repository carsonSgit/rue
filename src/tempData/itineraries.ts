import { Itinerary } from '../types/models';

export const itineraries: Itinerary[] = [
  {
    id: '1',
    title: 'Perfect Day in Old Montreal',
    description: 'Experience the historic charm and cultural richness of Old Montreal in this carefully curated day trip.',
    spotIds: ['3', '5'], // References to Old Port and Notre-Dame Basilica
    duration: '6 hours',
    theme: 'Historic',
    createdBy: 'rue_team',
    type: 'perfect_day',
    imageUrl: 'old-montreal.jpg',
    estimatedCost: '$50-100',
    difficulty: 'easy',
    seasonality: ['spring', 'summer', 'fall'],
  },
  {
    id: '2',
    title: 'Montreal Foodie Adventure',
    description: 'Discover the best local flavors and culinary gems of Montreal.',
    spotIds: ['2', '4'], // References to Jean-Talon Market and La Banquise
    duration: '4 hours',
    theme: 'Food & Dining',
    createdBy: 'rue_team',
    type: 'personalized',
    imageUrl: 'food-tour.jpg',
    estimatedCost: '$30-70',
    difficulty: 'easy',
    seasonality: ['all'],
  },
  {
    id: '3',
    title: 'Nature and City Views',
    description: 'Combine urban exploration with natural beauty in this balanced itinerary.',
    spotIds: ['1', '3'], // References to Mount Royal and Old Port
    duration: '5 hours',
    theme: 'Nature & Urban',
    createdBy: 'rue_team',
    type: 'perfect_day',
    imageUrl: 'nature-city.jpg',
    estimatedCost: '$0-30',
    difficulty: 'moderate',
    seasonality: ['spring', 'summer', 'fall'],
  }
];

// More itineraries can be added here following the same pattern 