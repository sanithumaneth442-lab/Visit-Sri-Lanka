import { Experience } from '../types';

export const EXPERIENCES: Experience[] = [
  {
    id: 'exp-wildlife-safari',
    title: 'Private Yala & Udawalawe Wildlife Safaris',
    subtitle: 'Wild Leopards, Elephants & Sloth Bears',
    category: 'Wildlife Excursion',
    description: 'Traverse protected national parks in custom open-top 4x4 vehicles guided by senior wildlife naturalists.',
    image: 'https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?auto=format&fit=crop&w=1200&q=80',
    alt: 'Wild elephant herd crossing green park grassland in Udawalawe',
    highlights: [
      'Private 4x4 open-air safari vehicle with specialist driver-tracker',
      'High probability leopard & sloth bear tracking in Yala Block 1',
      'Udawalawe Elephant Transit Home visit & calf feeding',
      'Gourmet bush lunch served beside serene river banks'
    ],
    actionLabel: 'Book a Safari',
    badge: 'Exclusive Access',
    icon: 'pets'
  },
  {
    id: 'exp-cultural-triangle',
    title: 'Sacred UNESCO Cultural Triangle',
    subtitle: 'Anuradhapura, Polonnaruwa & Sigiriya',
    category: 'Heritage Journey',
    description: 'Uncover 2,500 years of ancient Buddhist civilization, giant stupas, and royal water gardens.',
    image: 'https://images.unsplash.com/photo-1608848461950-0fe51dfc41cb?auto=format&fit=crop&w=1200&q=80',
    alt: 'Ancient white stupa in Anuradhapura against blue sky',
    highlights: [
      'Sunrise climb up Sigiriya Rock before general opening hours',
      'Private cycling tour among ancient ruins of Polonnaruwa',
      'Traditional blessing at Sri Maha Bodhi — world’s oldest recorded tree',
      'Private archaeological expert accompaniment'
    ],
    actionLabel: 'Explore Cultural Tour',
    badge: 'UNESCO Highlights',
    icon: 'account_balance'
  },
  {
    id: 'exp-tea-train',
    title: 'The Royal Highland Tea Train',
    subtitle: 'Kandy to Ella Scenic Journey',
    category: 'Highland Luxury',
    description: 'Recognized as one of the world’s most scenic railway voyages through cloud forests and emerald valleys.',
    image: 'https://images.unsplash.com/photo-1546708973-b339540b5162?auto=format&fit=crop&w=1200&q=80',
    alt: 'Classic blue train traveling across viaduct bridge in Ceylon tea country',
    highlights: [
      'Reserved First-Class observation car seats',
      'Private bungalow stay at historic 1920s Tea Factory estate',
      'Master Teasmith masterclass and signature leaf picking',
      'Private gourmet high tea on colonial lawn terraces'
    ],
    actionLabel: 'Reserve Rail Journey',
    badge: 'Signature Trip',
    icon: 'train'
  },
  {
    id: 'exp-coastal-ayurveda',
    title: 'Southern Coastal Escapes & Ayurveda',
    subtitle: 'Mirissa, Tangalle & Bentota Havens',
    category: 'Coastal Wellness',
    description: 'Rejuvenate body and soul at luxury beachfront sanctuaries with authentic Ayurvedic treatments.',
    image: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1200&q=80',
    alt: 'Tropical spa pavilion overlooking quiet turquoise sea',
    highlights: [
      'Personalized Ayurvedic consultation with resident doctor',
      'Private Blue Whale charter with marine biologist on board',
      'Sunset yoga sessions on private cliffside platforms',
      'Organic catch-of-the-day beach dinner under palm fronds'
    ],
    actionLabel: 'Plan Coastal Retreat',
    badge: 'Pure Relaxation',
    icon: 'spa'
  }
];
