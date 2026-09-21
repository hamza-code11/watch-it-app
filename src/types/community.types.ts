export type CommunityTab =
  | 'all'
  | 'general'
  | 'buyingAdvice'
  | 'selling'
  | 'events'
  | 'uaeCollectors'
  | 'offTopic';

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
  category: 'general' | 'buyingAdvice' | 'selling' | 'events' | 'uaeCollectors' | 'offTopic';
  title: string;
  content: string;
  hashtags: string[];
  likes: number;
  comments: Comment[];
  shares: number;
}

export interface CreatePostFormData {
  category: string;
  title: string;
  content: string;
  hashtags: string;
}

