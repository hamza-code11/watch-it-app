import { CommunityProfileUser, CommunityStats, TrendItem } from '../types/communityProfile.types';

export const communityProfileUser: CommunityProfileUser = {
  name: 'Ahmed Al Maktoum',
  role: 'Collector & Seller',
  location: 'Dubai, UAE',
  initials: 'AM',
};

export const communityStats: CommunityStats = {
  posts: 12,
  listings: 12,
};

export const topTrends: TrendItem[] = [
  { id: 1, hashtag: '#rolex', postsCount: '1.2k posts' },
  { id: 2, hashtag: '#submariner', postsCount: '980 posts' },
  { id: 3, hashtag: '#luxurywatch', postsCount: '875 posts' },
  { id: 4, hashtag: '#watchcollection', postsCount: '760 posts' },
  { id: 5, hashtag: '#patekphilippe', postsCount: '640 posts' },
];
