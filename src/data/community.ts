import { CommunityPost, CreatePostFormData } from '../types/community.types';
export const postCategories = [
  'All',
  'General',
  'Buying Advice',
  'Selling',
  'Events',
  'UAE Collectors',
  'Off Topic',
];

export const suggestedPeople = [
  { id: 1, initials: 'K', name: 'Karim Al Zahra',    username: '@karimz' },
  { id: 2, initials: 'S', name: 'Sara Khan',         username: '@sarakhan' },
  { id: 3, initials: 'T', name: 'The Vintage Hour',  username: '@thevintagehour' },
  { id: 4, initials: 'A', name: 'Ahmed Al Mansoori', username: '@ahmedmansoori' },
];

export const communityPosts: CommunityPost[] = [
  {
    id: 1,
    user: {
      name: 'Ahmed Al Maktoum',
      initials: 'AM',
    },
    date: 'Jun 15, 2024',
    category: 'general',
    title: 'My New Rolex Submariner',
    content:
      'Just added this beauty to my collection. The Rolex Submariner Date with the black dial is an absolute classic. Can\'t stop staring at it! 🔥',
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
    category: 'events',
    title: 'Rolex Submariner 126610LN - Full Set',
    content: 'Selling my Rolex Submariner Date with full box and papers. Excellent condition.',
    hashtags: ['#Rolex', '#Submariner', '#ForSale'],
    likes: 12,
    shares: 2,
    comments: [],
  },
];







export const initialCreatePostFormData: CreatePostFormData = {
  category: 'general',
  title: '',
  content: '',
  hashtags: '',
};