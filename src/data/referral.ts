import { ReferralData, ReferralPerson, ReferralTier } from '../types/referral.types';

export const referralData: ReferralData = {
  referralCode: 'WI-FC06B6',
  stats: [
    {
      label: 'Total Referrals',
      value: 5,
      icon: 'people-outline',
      color: '#4F9FFF',
    },
    {
      label: 'Successful Referrals',
      value: 3,
      icon: 'checkmark-circle-outline',
      color: '#32D583',
    },
    {
      label: 'AED Earned',
      value: 1500,
      icon: 'cash-outline',
      color: '#FDB022',
    },
  ],
  tier: {
    name: 'Silver',
    progress: 0.55,
    progressText: '5 referrals + 5 more to Gold',
  },
};

// Naya: Referral Tiers
export const referralTiersData: ReferralTier[] = [
  {
    id: 1,
    name: 'Bronze',
    range: '0-2 referrals',
    icon: 'star-outline',
    iconColor: '#D97706',
  },
  {
    id: 2,
    name: 'Silver',
    range: '3-9 referrals',
    icon: 'ribbon-outline',
    iconColor: '#64748B',
    current: true,
  },
  {
    id: 3,
    name: 'Gold',
    range: '10-24 referrals',
    icon: 'diamond-outline',
    iconColor: '#FDB022',
  },
  {
    id: 4,
    name: 'Platinum',
    range: '25+ referrals',
    icon: 'flash-outline',
    iconColor: '#3B82F6',
  },
];

// Naya: My Referrals
export const myReferralsData: ReferralPerson[] = [
  {
    id: 1,
    name: 'Ahmed Khan',
    email: 'ahmed@example.com',
    joined: 'Dec 19, 2024',
    initials: 'A',
  },
  {
    id: 2,
    name: 'Fatima Al-Hassan',
    email: 'fatima@example.com',
    joined: 'Dec 19, 2024',
    initials: 'F',
  },
  {
    id: 3,
    name: 'Mohammed Ali',
    email: 'mohammed@example.com',
    joined: 'Dec 5, 2024',
    initials: 'M',
  },
  {
    id: 4,
    name: 'Sara Al-Fahd',
    email: 'sara@example.com',
    joined: 'Nov 28, 2024',
    initials: 'S',
  },
];
