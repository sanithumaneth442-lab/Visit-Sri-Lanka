import { ExperienceCategory, SampleItinerary } from '../types';

export const EXPERIENCES: ExperienceCategory[] = [
  {
    id: 'wildlife-nature',
    title: "Wildlife Safaris",
    tag: "Wildlife & Nature",
    icon: "pets",
    description: "Venture into the heart of Sri Lanka's untamed landscapes. Experience the thrill of spotting elusive leopards in Yala National Park or marvel at the majestic herds of wild elephants roaming freely across the plains of Udawalawe.",
    ctaText: "Book a Safari",
    items: [
      {
        title: "Yala National Park",
        description: "World's highest density of leopards prowling amidst ancient granite outcrops.",
        imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuCQzTeMIj2qlTtkMfn8hNeDW5gyqtiBs1HLls-Ih_9ny5ueCMSwxUauIQpwHu3CXVimN7lxpdy8D3zDpw3nQoqiAM_OEIKbBaG0oorOYAiTdGf_56BrERKtvZk-3D8InriaOpBZ-p7fDqHYESSp6IgO5K_wJ-G0d6t9IyU3-ESoXn0Fdir9YlyyMuFb_pIwY7QeHI5IAMpoK3VL8js-EKiG-qgbRMH-kbTgjMQsjWIP2Q_t-0SSRgGLSA",
        altText: "High contrast Sri Lankan leopard resting on granite boulder"
      },
      {
        title: "Udawalawe Gathering",
        description: "Observe vast elephant families bathing in shimmering open water reservoirs.",
        imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuBTPpVXgjqXPS_X8MRqdyZhR1IixgUSdJGlKMi7dTbC0GM5X9BKA-uADs7emw8anJSDVS1_b-hOUeeCwSS1Gp9NypY_na6LCtKZgL4MCOymeAdZ1AJESTaSCFDOyxFtFDWEum6hlagAV6c7HhIXk-QA4o01J8ZH2rlfeqowcJE_vqLye113Aw9qeMbR066OcG2Etec-4x0yB_1fHjsVeZ_5d2WxL8kcragNdZ8bR_2iwUZbKERsXvklmQ",
        altText: "Herd of Asian elephants gathered around watering hole"
      }
    ]
  },
  {
    id: 'cultural-heritage',
    title: "Cultural Heritage Tours",
    tag: "History & Architecture",
    icon: "account_balance",
    description: "Step back in time as you explore the monumental ruins of ancient kingdoms. Wander through the sacred city of Anuradhapura and the architectural wonders of Polonnaruwa, echoing tales of a glorious past.",
    ctaText: "Explore Heritage",
    items: [
      {
        title: "Sacred Anuradhapura",
        description: "Discover the cradle of Buddhism in Sri Lanka with monumental stupas and the Sri Maha Bodhi tree.",
        imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuBQQ0P4mVnIPO0Gk2nXtsfWtKPUVH1XIxS3fGBH-VUCCJCqHMmqzXmvkL5a38J--mmU-WV3CKF6oq9Awrj0zHrnfisADIlMfRyKN2htdw4ga48L3HpduRbyU5yEyhNjLpjvAjK18M94H8nSE8H9hEIDmnD0eVKj3yO7xRIZXwqeIAn0zJvTc94AbjxlP812sz1j_x8G9vF2l4kjCOeHMK9AA0eo61eGVaAw8hepjiipwg12yeWBOK0RXw",
        altText: "White dome of Ruwanwelisaya stupa in Anuradhapura"
      },
      {
        title: "Ancient Polonnaruwa",
        description: "Cycle through medieval ruins and marvel at masterful rock-carved Buddha statues at Gal Vihara.",
        imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuD6-lEB7xVJdFtMAmSNVG1D22PoQPYYHLrxXuEbl9Oago2MPjH_B87Y0Tn8NOCMX_fmURZmQqN6ykawxNVIcDY-r_kGVBYNWeV2Yd1ctQWNPePwqi8NXj5j7Vi-UcPPcm7ZZlQAlaaLsIGhEVs3_iaHNj-WVhQF77zJJz8LoWsqfLsVtK26z7lFgIuNzrLTqM4G-2HCsqfNopiPbPzJA1Jsbz4ly1PkaUNkZHOJncjdEvuEbMbiTFYFPA",
        altText: "Carved stone Buddha statues at Gal Vihara Polonnaruwa"
      }
    ]
  },
  {
    id: 'coastal-escapes',
    title: "Coastal Escapes",
    tag: "Relaxation & Sun",
    icon: "pool",
    description: "Find your sanctuary along the golden shores of the Indian Ocean. Whether seeking the vibrant beach culture of Unawatuna or the serene, luxurious retreats in Bentota, our coastal experiences offer ultimate relaxation.",
    ctaText: "Find Your Beach",
    items: [
      {
        title: "Unawatuna & Bentota",
        description: "Powdery golden sand, luxury beachfront villas, and turquoise ocean water.",
        imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuCmH-A03A29xGa0PDe-x5oWLANj2ewzixT3AWQn4jAg-tOfKZqk5YmdO0uI9zZww12L4i0coK7NlRzHE7IRprX7Y2kZwG4OoJFEvraY_vBhodgKXASSpCXx5JQ_rYTkfbe-PYDYGzz2RTeVyRdGFrgzUhGceM-ncE70Cuz4kypm1pZyGiuGhBjTJ0CJf8ze8VxOCJLU8TB0GQQUyHi7h1eQNruIizpsCSev5_OmRWee5CaWwcq1AQyxMQ",
        altText: "Pristine crescent-shaped beach in Sri Lanka"
      }
    ]
  }
];

export const SAMPLE_ITINERARIES: SampleItinerary[] = [
  {
    id: 'serendib-essential',
    title: "7-Day Classic Island Odyssey",
    durationDays: 7,
    tags: ["Heritage", "Tea Highlands", "Safari"],
    highlights: ["Sigiriya Fortress climb", "Kandy Temple of Tooth", "Scenic train ride to Ella", "Yala Safari"],
    priceEstimate: "From $1,450 / person",
    description: "The ideal introductory journey blending UNESCO ancient wonders, cool tea mountains, and leopard safaris."
  },
  {
    id: 'coastal-wellness',
    title: "10-Day Tropical Serenity & Coast",
    durationDays: 10,
    tags: ["Beach Luxury", "Ayurveda", "Colonial Heritage"],
    highlights: ["Galle Fort strolls", "Mirissa whale watching", "Bentota beach villa", "Ayurvedic wellness spa"],
    priceEstimate: "From $2,100 / person",
    description: "An unhurried coastal retreat combining boutique beach resorts, whale watching, and traditional Sri Lankan wellness."
  },
  {
    id: 'grand-explorer',
    title: "14-Day Grand Ceylon Discovery",
    durationDays: 14,
    tags: ["Full Circuit", "Culture", "Highlands", "Wildlife"],
    highlights: ["Anuradhapura & Polonnaruwa", "Sigiriya & Dambulla", "Ella Nine Arch Bridge", "Yala & Udawalawe", "Mirissa Coast"],
    priceEstimate: "From $2,950 / person",
    description: "Our complete signature circuit covering all top UNESCO cultural landmarks, tea estates, safaris, and golden beaches."
  }
];
