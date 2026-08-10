export type ViewType = 'home' | 'destinations' | 'experiences' | 'plan' | 'culture' | 'about';

export type CategoryType = 'All' | 'Coast' | 'Highlands' | 'Heritage' | 'Wildlife';

export interface Destination {
  id: string;
  title: string;
  subtitle: string;
  region: string;
  category: 'Coast' | 'Highlands' | 'Heritage' | 'Wildlife';
  description: string;
  longDescription: string;
  pricePerNight?: number;
  startingPrice?: number;
  image: string;
  alt: string;
  highlights: string[];
  bestTimeToVisit: string;
  tag?: string;
  gridSpan?: 'large' | 'tall' | 'standard';
}

export interface Experience {
  id: string;
  title: string;
  subtitle: string;
  category: string;
  description: string;
  image: string;
  alt: string;
  highlights: string[];
  actionLabel: string;
  badge: string;
  icon: string;
}

export interface ItineraryDraft {
  arrivalDate: string;
  departureDate: string;
  travelers: 'Solo' | 'Couple' | 'Family/Group';
  selectedInterests: string[];
  accommodationType: 'Luxury Boutique' | 'Eco Lodge' | 'Colonial Estate' | 'Beach Villa';
  pace: 'Relaxed' | 'Balanced' | 'Active Exploration';
  budgetLevel: 'Standard Luxury' | 'Ultra Premium' | 'Custom';
  specialRequests: string;
}

export interface GeneratedItineraryDay {
  dayNumber: number;
  title: string;
  location: string;
  description: string;
  morningActivity: string;
  afternoonActivity: string;
  eveningActivity: string;
  stayRecommendation: string;
}

export interface Testimonial {
  quote: string;
  author: string;
  details: string;
  avatar: string;
  rating: number;
}
