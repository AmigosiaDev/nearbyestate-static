export interface PropertyCategory {
  id: string;
  name: string;
  tagline: string;
  description: string;
  image: string;
  fallbackImage: string;
  count: string;
  iconName: string;
}

export interface FeatureItem {
  id: string;
  title: string;
  description: string;
  iconName: string;
  badge?: string;
}

export interface AppScreen {
  id: string;
  title: string;
  subtitle: string;
  badge: string;
  highlights: string[];
}

export interface UseCaseItem {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  fallbackImage: string;
  actionText: string;
}

export interface StepItem {
  number: string;
  title: string;
  description: string;
  details: string;
  iconName: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export const BRAND_CONFIG = {
  name: 'NearbyEstate',
  title: 'NearbyEstate – Find Properties Around You',
  tagline: 'Find Properties Around You.',
  subtagline: 'Discover homes, land, shops, offices and more with NearbyEstate.',
  highlightBadge: '100% FREE • UNLIMITED PROPERTY ADS • ZERO BROKERAGE',
  playStoreUrl: 'https://play.google.com/store/apps/details?id=space.nearestate.twa',
  webAppUrl: 'https://nearestate.space/home',
  instagramUrl: 'https://www.instagram.com/nearestate_/',
  officialWebUrl: 'https://nearbyestate.in',
  copyrightYear: 2026,
};

export const PROPERTY_CATEGORIES: PropertyCategory[] = [
  {
    id: 'residential',
    name: 'Residential',
    tagline: 'Homes, Apartments & Living Spaces',
    description: 'Find homes, family villas, and modern living spaces around you.',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80',
    fallbackImage: '/images/home.jpg',
    count: 'Houses & Apartments',
    iconName: 'Home',
  },
  {
    id: 'land',
    name: 'Land',
    tagline: 'Plots & Open Sites',
    description: 'Discover residential land and plots available near your preferred location.',
    image: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=800&q=80',
    fallbackImage: '/images/land.jpg',
    count: 'Plots & Development',
    iconName: 'MapPin',
  },
  {
    id: 'commercial',
    name: 'Commercial',
    tagline: 'Business & Commercial Buildings',
    description: 'Explore verified commercial spaces and buildings for your business expansion.',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80',
    fallbackImage: '/images/commercialBuilding.jpg',
    count: 'Commercial Buildings',
    iconName: 'Building2',
  },
  {
    id: 'shops',
    name: 'Shops',
    tagline: 'Retail & Storefronts',
    description: 'Discover high-visibility retail storefronts and prime market shops in your vicinity.',
    image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=800&q=80',
    fallbackImage: '/images/shop.jpg',
    count: 'Prime Retail Units',
    iconName: 'ShoppingBag',
  },
  {
    id: 'office',
    name: 'Office',
    tagline: 'Corporate & Workspaces',
    description: 'Find professional office floors, corporate cabins, and modern commercial hubs.',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80',
    fallbackImage: '/images/office.jpg',
    count: 'Workspaces & Floors',
    iconName: 'Briefcase',
  },
  {
    id: 'farmland',
    name: 'Farm Land',
    tagline: 'Agricultural & Plantation',
    description: 'Explore fertile agricultural plots, plantations, and countryside farm lands.',
    image: 'https://images.unsplash.com/photo-1500937386664-56d1dfef3854?auto=format&fit=crop&w=800&q=80',
    fallbackImage: '/images/farmLand.jpg',
    count: 'Agricultural Plots',
    iconName: 'Sprout',
  },
];

export const WHY_ITEMS: FeatureItem[] = [
  {
    id: 'unlimited-ads',
    title: 'Unlimited Ads for FREE',
    description: 'Post and advertise unlimited property listings without hidden charges, paywalls, or broker commissions.',
    iconName: 'Sparkles',
    badge: '100% Free',
  },
  {
    id: 'nearby-gps',
    title: 'Nearby Properties',
    description: 'Discover properties plotted accurately around your current physical location in real-time.',
    iconName: 'Navigation',
    badge: 'Location-First',
  },
  {
    id: 'plus-code',
    title: 'Exact Google Plus Code',
    description: 'Pin-point precise locations for remote land, plots, and buildings using digital Plus Codes on Google Maps.',
    iconName: 'MapPin',
    badge: 'Pin-Point Precision',
  },
  {
    id: 'multiple-types',
    title: 'Multiple Property Types',
    description: 'Explore residential, commercial, retail, office, land, and farm plots in one unified catalog.',
    iconName: 'Layers',
    badge: 'All-in-One',
  },
];

export const APP_FEATURES: FeatureItem[] = [
  {
    id: 'discover',
    title: 'Discover Nearby',
    description: 'Instantly view available properties closest to you with accurate distance calculations.',
    iconName: 'Compass',
    badge: 'Proximity Engine',
  },
  {
    id: 'search-filter',
    title: 'Search & Category Filters',
    description: 'Filter listings by property category, purchase type (Buy/Rent), and targeted budget.',
    iconName: 'Search',
    badge: 'Instant Results',
  },
  {
    id: 'details',
    title: 'Comprehensive Property Details',
    description: 'Inspect verified photos, carpet dimensions, specifications, and owner-defined pricing.',
    iconName: 'Info',
    badge: 'Transparent Specs',
  },
  {
    id: 'location-plus-code',
    title: 'Google Plus Code Precision',
    description: 'Locate remote land and buildings with pin-point Google Maps Plus Codes, eliminating lost visits.',
    iconName: 'MapPin',
    badge: 'Exact Coordinates',
  },
  {
    id: 'list-property',
    title: 'List Your Property',
    description: 'Property owners and sellers can post ads with photos and key details directly from their phone.',
    iconName: 'PlusCircle',
    badge: 'Owner Friendly',
  },
  {
    id: 'direct-contact',
    title: 'Direct Seller Connect',
    description: 'Connect directly with property owners and sellers without paying hefty middleman brokerage.',
    iconName: 'PhoneCall',
    badge: 'Zero Middlemen',
  },
];

export const APP_SCREENS: AppScreen[] = [
  {
    id: 'discover',
    title: 'Nearby Radar & Map',
    subtitle: 'See what is available in your immediate neighborhood',
    badge: 'Discover',
    highlights: [
      'Live GPS distance meter (e.g. 1.2 km away)',
      'Quick glance price and category tags',
      'One-tap navigation to property coordinates',
    ],
  },
  {
    id: 'details',
    title: 'Full Property Specifications',
    subtitle: 'Everything you need before scheduling a visit',
    badge: 'Details',
    highlights: [
      'High-resolution property gallery',
      'Exact Google Plus Code location',
      'Verified owner information & direct call',
    ],
  },
  {
    id: 'listing',
    title: 'Fast & Simple Ad Posting',
    subtitle: 'Showcase your property to thousands of active seekers',
    badge: 'List Property',
    highlights: [
      'Upload photos straight from your camera roll',
      'Set your price, size, and category easily',
      'Manage and update your listings anytime',
    ],
  },
];

export const STEPS: StepItem[] = [
  {
    number: '01',
    title: 'Download',
    description: 'Get NearbyEstate from Google Play onto your Android device in seconds.',
    details: 'Small app size, fast installation, and zero tedious registration hurdles to browse.',
    iconName: 'Download',
  },
  {
    number: '02',
    title: 'Explore',
    description: 'Discover properties around you using your real-time location.',
    details: 'Browse homes, commercial units, and vacant land plotted with clear distance indicators.',
    iconName: 'Compass',
  },
  {
    number: '03',
    title: 'Find What You Need',
    description: 'Explore properties based on your requirements and connect directly.',
    details: 'View exact Plus Code coordinates, inspect full details, and reach out to the owner.',
    iconName: 'CheckCircle2',
  },
];

export const USE_CASES: UseCaseItem[] = [
  {
    id: 'buy',
    title: 'Buy',
    subtitle: 'Find a property that fits your needs',
    description: 'Invest in residential houses, modern flats, plots, or commercial buildings with verified owner listings.',
    image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800&q=80',
    fallbackImage: '/images/home.jpg',
    actionText: 'Explore properties to buy',
  },
  {
    id: 'rent',
    title: 'Rent',
    subtitle: 'Discover places available for rent',
    description: 'Find budget-friendly apartments, family houses, commercial shops, and office spaces ready for occupancy.',
    image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=800&q=80',
    fallbackImage: '/images/appartment.jpg',
    actionText: 'Find rentals nearby',
  },
  {
    id: 'sell',
    title: 'Sell',
    subtitle: 'Showcase your property to potential users',
    description: 'Post your house, land, or commercial premise directly from your smartphone to reach serious local buyers.',
    image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=800&q=80',
    fallbackImage: '/images/commercialBuilding.jpg',
    actionText: 'List to sell easily',
  },
  {
    id: 'lease',
    title: 'Lease',
    subtitle: 'Explore available leasing opportunities',
    description: 'Secure long-term retail shops, business spaces, warehouses, or agricultural land tailored to your enterprise.',
    image: 'https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&w=800&q=80',
    fallbackImage: '/images/office.jpg',
    actionText: 'Discover commercial leases',
  },
];

export const FAQS: FAQItem[] = [
  {
    question: 'What is NearbyEstate?',
    answer: 'NearbyEstate is a mobile property discovery application designed to help users discover properties around their location. Whether you are looking for residential homes, land, shops, offices, or farm plots, NearbyEstate displays available properties based on proximity.',
  },
  {
    question: 'What types of properties can I find?',
    answer: 'You can discover Residential properties (Houses, Villas, Apartments), Land & residential plots, Commercial properties, Shops & storefronts, Offices & workspaces, and Farm land / agricultural plots.',
  },
  {
    question: 'Can I buy or rent properties through NearbyEstate?',
    answer: 'NearbyEstate connects property seekers with verified listings and property owners around their location. You can discover properties for sale, rent, or lease, review complete specifications, and get in direct contact with the owner or seller.',
  },
  {
    question: 'Can I list my property on NearbyEstate?',
    answer: 'Yes. NearbyEstate allows property owners and sellers to list their properties directly from the mobile app, providing photos, location, property specs, and pricing to reach nearby prospective buyers and tenants.',
  },
  {
    question: 'Is posting property ads really free on NearbyEstate?',
    answer: 'Yes, absolutely! NearbyEstate allows you to post Unlimited Ads for FREE. There are no listing fees, no paywalls, and zero broker commissions. Property owners, builders, and agents can advertise as many properties as they need.',
  },
  {
    question: 'Can I use NearbyEstate without installing the Android app?',
    answer: 'Yes! You can explore properties instantly in your web browser by visiting our Web App at nearestate.space/home. On Apple iPhone/iPad, simply open Safari, tap the Share button, and select "Add to Home Screen" to install it as a lightweight PWA.',
  },
  {
    question: 'How does the Google Plus Code feature work?',
    answer: 'Many plots, farm lands, and suburban buildings lack distinct street numbers. NearbyEstate provides exact Google Plus Codes (digital location codes) so you can navigate straight to the property gate on Google Maps without getting lost.',
  },
  {
    question: 'Is NearbyEstate available on Android?',
    answer: 'Yes, NearbyEstate is fully optimized for Android devices and can be installed via the Google Play Store.',
  },
];
