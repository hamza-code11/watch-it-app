import { AuthenticationPlan, BannerFeatures } from '../types/watchAuthentication.types';

export const bannerFeatures: BannerFeatures[] = [
  { icon: 'checkmark-circle', text: '2,500+ Watches Verified' },
  { icon: 'time-outline', text: '48-Hour Turnaround' },
  { icon: 'shield-checkmark', text: '100% Authenticity Guaranteed' },
];

export const plansData: AuthenticationPlan[] = [
  {
    id: 1,
    name: 'Remote Verification',
    price: 'AED 150',
    duration: '/ one-time',
    time: '24 hours',
    description: 'Submit photos online for expert review by certified watchmakers.',
    icon: 'camera-outline',
    features: [
      'Submit up to 10 high-quality photos',
      'Serial number verification',
      'Detailed condition report',
    ],
  },
  {
    id: 2,
    name: 'Physical Inspection',
    price: 'AED 300',
    duration: '/ one-time',
    time: 'Same day',
    description: 'In-person inspection at our UAE authentication center.',
    icon: 'search-outline',
    features: [
      'Full physical inspection by expert',
      'Movement and mechanism testing',
      'Water resistance testing',
    ],
  },
  {
    id: 3,
    name: 'Pickup Service',
    price: 'AED 450',
    duration: '/ one-time',
    time: '48 hours',
    description: 'We collect your watch and return it after authentication.',
    icon: 'car-outline',
    features: [
      'Doorstep pickup and delivery',
      'Full physical inspection by expert',
      'Movement and mechanism testing',
    ],
  },
];
