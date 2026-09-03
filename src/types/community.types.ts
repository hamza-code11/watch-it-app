export type CommunityTab = 'all' | 'showcase' | 'sale' | 'wanted' | 'news' | 'myPosts';

export interface Comment {
  id: number;
  user: {
    name: string;
    initials: string;
    avatar?: string;
  };
  date: string;
  text: string;
}

export interface CommunityPost {
  id: number;
  user: {
    name: string;
    initials: string;
    avatar?: string;
  };
  date: string;
  category: 'Showcase' | 'Sale' | 'Wanted' | 'News';
  title: string;
  content: string;
  images: string[];
  hashtags: string[];
  likes: number;
  comments: Comment[];
  shares: number;
}

export interface CreatePostFormData {
  category: string;
  title: string;
  content: string;
  images: string[];
  hashtags: string;
}