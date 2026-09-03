export interface CommunityProfileUser {
  name: string;
  role: string;
  location: string;
  initials: string;
}

export interface CommunityStats {
  posts: number;
  listings: number;
}

export interface TrendItem {
  id: number;
  hashtag: string;
  postsCount: string;
}
