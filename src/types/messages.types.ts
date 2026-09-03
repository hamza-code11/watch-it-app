export interface Message {
  id: string;
  senderId: string;
  senderName: string;
  senderType: 'vendor' | 'customer' | 'admin';
  content: string;
  timestamp: string;
  read: boolean;
  attachments?: {
    id: string;
    name: string;
    type: string;
    url: string;
  }[];
  richMessage?: {
    title: string;
    description: string;
    image: string;
    url: string;
    userName: string;
    userAvatar: string;
    category: string;
  };
}

export interface Conversation {
  id: string;
  participantId: string;
  participantName: string;
  participantType: 'customer' | 'admin' | 'vendor';
  participantAvatar?: string;
  lastMessage: string;
  lastMessageTime: string;
  unreadCount: number;
  messages: Message[];
  status: 'active' | 'archived';
  createdAt: string;
  updatedAt: string;
}

export type MessageFilter = 'all' | 'buyers' | 'sellers' | 'support';

