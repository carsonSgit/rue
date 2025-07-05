import { UserProfile } from '../types/models';

export const users: UserProfile[] = [
  {
    id: '1',
    name: 'Carson Spriggs',
    savedSpots: ['5', '16', '17', '1', '5','1','2','3','4','6','7','8','9','10','11','12','13','14','15','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50'],
    visitedSpots: ['6', '18'],
    email: 'carson@rue.com',
    avatar: 'avatar1.jpg',
    preferences: {
      categories: ['Food', 'Culture', 'History'],
      radius: 30,
      transportMode: 'transit'
    },
    stats: {
      totalVisits: 5,
      contributionCount: 5,
      joinedDate: '2025-07-04'
    }
  },
  {
    id: '2',
    name: 'Lucas Tremblay',
    savedSpots: ['2', '4'],
    visitedSpots: ['1'],
    email: 'lucas.t@example.com',
    avatar: 'avatar2.jpg',
    preferences: {
      categories: ['Nature', 'Photography'],
      radius: 10,
      transportMode: 'walk'
    },
    stats: {
      totalVisits: 1,
      contributionCount: 0,
      joinedDate: '2024-02-20'
    }
  },
  {
    id: '3',
    name: 'Emma Roy',
    savedSpots: ['1', '2', '3', '4', '5'],
    visitedSpots: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'],
    email: 'emma.r@example.com',
    avatar: 'avatar3.jpg',
    preferences: {
      categories: ['Food', 'Shopping', 'Art'],
      radius: 20,
      transportMode: 'car'
    },
    stats: {
      totalVisits: 10,
      contributionCount: 15,
      joinedDate: '2023-12-01'
    }
  }
];

// More users can be added here following the same pattern 