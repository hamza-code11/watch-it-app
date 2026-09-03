import { CommunityPost, CreatePostFormData } from '../types/community.types';
export const postCategories = ['Showcase', 'Sale', 'Wanted', 'News'];

export const communityPosts: CommunityPost[] = [
  {
    id: 1,
    user: {
      name: 'Ahmed Al Maktoum',
      initials: 'AM',
    },
    date: 'Jun 15, 2024',
    category: 'Showcase',
    title: 'My New Rolex Submariner',
    content:
      'Just added this beauty to my collection. The Rolex Submariner Date with the black dial is an absolute classic. Can\'t stop staring at it! 🔥',
    images: [
      'https://images.unsplash.com/photo-1523170335258-f5ed11844a49?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1614164185128-e4ec99c436d7?q=80&w=800&auto=format&fit=crop',
    ],
    hashtags: ['#Rolex', '#Submariner', '#LuxuryWatch', '#WatchCollection'],
    likes: 24,
    shares: 0,
    comments: [
      {
        id: 1,
        user: {
          name: 'Sara Al Hashmi',
          initials: 'SA',
        },
        date: 'Jun 15, 2024',
        text: 'Mashallah! That\'s a stunning piece. Where did you get it from?',
      },
    ],
  },
  {
    id: 2,
    user: {
      name: 'Ahmed Al Maktoum',
      initials: 'AM',
    },
    date: 'Jun 11, 2024',
    category: 'Sale',
    title: 'Rolex Submariner 126610LN - Full Set',
    content: 'Selling my Rolex Submariner Date with full box and papers. Excellent condition.',
    images: [
      'https://images.unsplash.com/photo-1523170335258-f5ed11844a49?q=80&w=800&auto=format&fit=crop',
    ],
    hashtags: ['#Rolex', '#Submariner', '#ForSale'],
    likes: 12,
    shares: 2,
    comments: [],
  },
];







export const initialCreatePostFormData: CreatePostFormData = {
  category: 'Showcase',
  title: '',
  content: '',
  images: [],
  hashtags: '',
};