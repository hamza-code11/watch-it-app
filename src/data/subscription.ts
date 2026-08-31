import { MembershipBenefit } from '../types/subscription.types';

export const membershipBenefits: MembershipBenefit[] = [
  {
    id: 1,
    title: 'Unlimited Swipes',
    description: 'Swipe without any daily limits',
    icon: 'flash-outline',
  },
  {
    id: 2,
    title: 'Dedicated Shop Access',
    description: 'Full access to vendor shops',
    icon: 'storefront-outline',
  },
  {
    id: 3,
    title: 'Priority Listings',
    description: 'Your watches appear first in search',
    icon: 'trending-up-outline',
  },
  {
    id: 4,
    title: 'Gold Badge',
    description: 'Displayed on your profile and listings',
    icon: 'shield-checkmark-outline',
  },
  {
    id: 5,
    title: 'Exclusive Drops',
    description: 'First access to new releases',
    icon: 'diamond-outline',
  },
  {
    id: 6,
    title: 'Advanced Filters',
    description: 'Watch history · Papers · Dealer verified',
    icon: 'filter-outline',
  },
  {
    id: 7,
    title: 'Early Access to Auctions',
    description: 'Bid before public opens',
    icon: 'lock-open-outline',
  },
];

export const subscriptionPlans = [
  {
    id: 'gold',
    name: 'Watch It Gold',
    description: "The UAE's premium collector membership",
    price: 'AED 50',
    priceUnit: '/mo',
    features: ['Cancel anytime', 'No commitment'],
  },
];

