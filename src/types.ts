export type ViewTab = 'home' | 'destinations' | 'experiences' | 'culture' | 'about' | 'craft-journey';

export type DestinationCategory = 'All' | 'Coast' | 'Highlands' | 'Heritage' | 'Wildlife';

export interface Destination {
  id: string;
  name: string;
  category: DestinationCategory;
  region: string;
  pricePerNight: number;
  description: string;
  longDescription: string;
  imageUrl: string;
  altText: string;
  highlights: string[];
  bestTimeToVisit: string;
  suggestedDuration: string;
  featured?: boolean;
}

export interface ExperienceCategory {
  id: string;
  title: string;
  tag: string;
  icon: string;
  description: string;
  ctaText: string;
  items: {
    title: string;
    description: string;
    imageUrl: string;
    altText: string;
    linkLocation?: string;
  }[];
}

export interface BookingState {
  arrivalDate: string;
  departureDate: string;
  travelerType: 'Solo' | 'Couple' | 'Family/Group';
  travelerCount: number;
  selectedExperiences: string[];
  accommodationType: 'Boutique Luxury' | 'Eco Lodges' | 'Heritage Hotels' | 'Beach Resorts';
  pace: 'Relaxed' | 'Balanced' | 'Active Explorer';
  selectedDestinations: string[];
  contactName: string;
  contactEmail: string;
  contactPhone: string;
  specialRequests: string;
}

export interface SampleItinerary {
  id: string;
  title: string;
  durationDays: number;
  tags: string[];
  highlights: string[];
  priceEstimate: string;
  description: string;
}
