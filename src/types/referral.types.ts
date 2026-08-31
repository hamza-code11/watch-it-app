export interface ReferralStat {
  label: string;
  value: number;
  icon: string;
  color: string;
}

export interface ReferralData {
  referralCode: string;
  stats: ReferralStat[];
  tier: {
    name: string;
    progress: number;
    progressText: string;
  };
}

// Naya: Tiers and Referrals
export interface ReferralTier {
  id: number;
  name: string;
  range: string;
  icon: string;
  iconColor: string;
  current?: boolean;
}

export interface ReferralPerson {
  id: number;
  name: string;
  email: string;
  joined: string;
  initials: string;
}
