import { AboutValue } from '../types/about.types';

export const aboutData = {
  heading: 'WatchIt',
  subheading: 'The UAE’s Premier Luxury Watch Marketplace',
  description: `WatchIt was founded in 2023 with a simple yet powerful mission: to create a trusted, transparent, and secure platform for buying and selling authentic luxury timepieces in the UAE and beyond. We combine cutting-edge technology with a deep passion for horology to connect collectors, enthusiasts, and dealers.`,
  stats: {
    founded: 2023,
    users: '10K+',
    watches: '5,000+',
    vendors: '250+',
  },
  mission: `Our mission is to provide a world-class platform where watch enthusiasts can trade with confidence. We are committed to authenticity, transparency, and exceptional customer service.`,
  values: [
    {
      id: 'auth',
      title: 'Authenticity First',
      description: 'Every watch goes through a rigorous multi-point authentication process before being listed.',
    },
    {
      id: 'trust',
      title: 'Trust & Transparency',
      description: 'We believe in building long-term relationships through honest and open communication.',
    },
    {
      id: 'excellence',
      title: 'Excellence in Service',
      description: 'From curated collections to customer support, we strive for excellence in every interaction.',
    },
    {
      id: 'community',
      title: 'Community Driven',
      description: 'We foster a vibrant community of collectors, dealers, and enthusiasts to share their passion.',
    },
  ] as AboutValue[],
};

// Story Data
export const storyData = {
  title: 'Our Story',
  subtitle: 'How WatchIt Began',
  paragraphs: [
    'WatchIt began with a simple frustration: finding an authentic luxury watch online was a gamble. What started as a small boutique has grown into a destination trusted by collectors who refuse to compromise.',
    'Our founder, a lifelong collector, set out to build something that carried the trust of a physical boutique into an online experience — without cutting a single corner on verification.',
    'Today, every timepiece that passes through WatchIt is inspected, certified, and backed by a network of authorized dealers spanning the globe.',
  ],
  timeline: [
    {
      year: '2020',
      text: 'Founded as a single boutique in New York on one rule: everything sold is exactly what it claims to be.',
    },
    {
      year: '2022',
      text: 'Formal partnerships signed with authorized dealers across three continents, formalizing our authentication chain.',
    },
    {
      year: '2024',
      text: 'WatchIt opens as a full marketplace — collectors and sellers connect directly, for the first time.',
    },
  ],
};

// Mission & Vision Data
export const missionVisionData = {
  title: 'What Drives Us',
  subtitle: 'Mission & Vision',
  mission: `To democratize access to luxury timepieces by building a trusted, transparent platform where collectors can discover, buy, and sell authentic watches with complete confidence. We bridge the gap between traditional brick-and-mortar boutiques and the digital age, ensuring every transaction is secure, every timepiece is verified, and every collector feels valued.`,
  vision: `To become the world's most trusted and revered destination for luxury timepieces — a global community where every collector finds their perfect watch, every seller reaches an engaged audience, and every piece tells a story of excellence, heritage, and precision.`,
};

// Partners Data
export const partnersData = {
  label: 'Our Partners',
  title: 'In Distinguished Company',
  description: `We're proud to partner with the world's most prestigious watchmakers — every relationship built on the same standard of verification.`,
  brands: [
    'Rolex',
    'Omega',
    'Patek Philippe',
    'Audemars Piguet',
    'Cartier',
    'Breitling',
    'Tag Heuer',
    'Panerai',
    'IWC',
    'Jaeger-LeCoultre',
    'Vacheron Constantin',
    'Grand Seiko',
  ],
};
