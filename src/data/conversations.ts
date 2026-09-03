import { Conversation, MessageFilter } from '../types/messages.types';

export const conversationsData: Conversation[] = [
    {
    id: 'CONV-001',
    participantId: 'CUST-001',
    participantName: 'Ahmed Khan',
    participantType: 'customer',
    lastMessage: 'Thank you for your help!',
    lastMessageTime: '2025-06-15T14:30:00Z',
    unreadCount: 2,
    status: 'active',
    createdAt: '2025-06-12T10:30:00Z',
    updatedAt: '2025-06-15T14:30:00Z',
    messages: [
      {
        id: 'MSG-001',
        senderId: 'CUST-001',
        senderName: 'Ahmed Khan',
        senderType: 'customer',
        content: 'Hi, I received the product but I have a question about it.',
        timestamp: '2025-06-12T10:35:00Z',
        read: true
      },
      {
        id: 'MSG-002',
        senderId: 'VENDOR-001',
        senderName: 'John Doe',
        senderType: 'vendor',
        content: 'Hello Ahmed, thank you for reaching out. How can I help you?',
        timestamp: '2025-06-12T11:00:00Z',
        read: true
      },
      {
        id: 'MSG-003',
        senderId: 'CUST-001',
        senderName: 'Ahmed Khan',
        senderType: 'customer',
        content: 'Great, thank you! One more question about the warranty.',
        timestamp: '2025-06-15T14:20:00Z',
        read: false
      },
      {
        id: 'MSG-004',
        senderId: 'VENDOR-001',
        senderName: 'John Doe',
        senderType: 'vendor',
        content: 'The warranty covers manufacturing defects only.',
        timestamp: '2025-06-15T14:30:00Z',
        read: false
      }
    ]
  },
  {
    id: 'CONV-006',
    participantId: 'CUST-005',
    participantName: 'Khalid Al-Fahd',
    participantType: 'customer',
    lastMessage: 'When will the item be available?',
    lastMessageTime: '2025-06-15T08:00:00Z',
    unreadCount: 3,
    status: 'active',
    createdAt: '2025-06-08T08:00:00Z',
    updatedAt: '2025-06-15T08:00:00Z',
    messages: [
      {
        id: 'MSG-013',
        senderId: 'CUST-005',
        senderName: 'Khalid Al-Fahd',
        senderType: 'customer',
        content: 'Hello, when will the item be available for purchase?',
        timestamp: '2025-06-15T08:00:00Z',
        read: false
      },
      {
        id: 'MSG-014',
        senderId: 'VENDOR-001',
        senderName: 'John Doe',
        senderType: 'vendor',
        content: 'Hi Khalid, we expect stock in 2 weeks. I can notify you.',
        timestamp: '2025-06-15T08:15:00Z',
        read: false
      }
    ]
  },
  {
    id: 'CONV-012',
    participantId: 'VENDOR-002',
    participantName: 'Luxury Watches UAE',
    participantType: 'vendor',
    lastMessage: 'Thanks for the partnership!',
    lastMessageTime: '2025-06-16T14:05:00Z',
    unreadCount: 2,
    status: 'active',
    createdAt: '2025-06-15T11:00:00Z',
    updatedAt: '2025-06-16T14:05:00Z',
    messages: [
      {
        id: 'MSG-024',
        senderId: 'VENDOR-002',
        senderName: 'Luxury Watches UAE',
        senderType: 'vendor',
        content: 'Hi John, we\'re interested in partnering with you.',
        timestamp: '2025-06-15T11:00:00Z',
        read: true
      },
      {
        id: 'MSG-025',
        senderId: 'VENDOR-001',
        senderName: 'John Doe',
        senderType: 'vendor',
        content: 'That sounds great! I\'m always open to collaborations.',
        timestamp: '2025-06-15T11:30:00Z',
        read: true
      },
      {
        id: 'MSG-026',
        senderId: 'VENDOR-002',
        senderName: 'Luxury Watches UAE',
        senderType: 'vendor',
        content: 'We can offer you exclusive deals on our premium collection.',
        timestamp: '2025-06-16T14:00:00Z',
        read: false
      },
      {
        id: 'MSG-027',
        senderId: 'VENDOR-002',
        senderName: 'Luxury Watches UAE',
        senderType: 'vendor',
        content: 'Let me know what you think about the partnership.',
        timestamp: '2025-06-16T14:05:00Z',
        read: false
      }
    ]
  },
  {
    id: 'CONV-002',
    participantId: 'CUST-002',
    participantName: 'Fatima Al-Hassan',
    participantType: 'customer',
    lastMessage: 'When will the item be shipped?',
    lastMessageTime: '2025-06-14T09:15:00Z',
    unreadCount: 1,
    status: 'active',
    createdAt: '2025-06-11T14:15:00Z',
    updatedAt: '2025-06-14T09:15:00Z',
    messages: [
      {
        id: 'MSG-005',
        senderId: 'CUST-002',
        senderName: 'Fatima Al-Hassan',
        senderType: 'customer',
        content: 'Hello, I placed an order. When will it be shipped?',
        timestamp: '2025-06-14T09:00:00Z',
        read: true
      },
      {
        id: 'MSG-006',
        senderId: 'VENDOR-001',
        senderName: 'John Doe',
        senderType: 'vendor',
        content: 'Hi Fatima, your order will be shipped within 24 hours.',
        timestamp: '2025-06-14T09:15:00Z',
        read: false
      }
    ]
  },
  {
    id: 'CONV-007',
    participantId: 'CUST-006',
    participantName: 'Mona Al-Otaibi',
    participantType: 'customer',
    lastMessage: 'Can I get a discount on bulk order?',
    lastMessageTime: '2025-06-14T16:30:00Z',
    unreadCount: 1,
    status: 'active',
    createdAt: '2025-06-07T13:45:00Z',
    updatedAt: '2025-06-14T16:30:00Z',
    messages: [
      {
        id: 'MSG-015',
        senderId: 'CUST-006',
        senderName: 'Mona Al-Otaibi',
        senderType: 'customer',
        content: 'I want to order multiple items. Can you offer a bulk discount?',
        timestamp: '2025-06-14T16:30:00Z',
        read: false
      }
    ]
  },
  {
    id: 'CONV-014',
    participantId: 'VENDOR-004',
    participantName: 'Swiss Watch Imports',
    participantType: 'vendor',
    lastMessage: 'Order confirmed',
    lastMessageTime: '2025-06-14T12:00:00Z',
    unreadCount: 0,
    status: 'archived',
    createdAt: '2025-06-13T10:00:00Z',
    updatedAt: '2025-06-14T12:00:00Z',
    messages: [
      {
        id: 'MSG-031',
        senderId: 'VENDOR-004',
        senderName: 'Swiss Watch Imports',
        senderType: 'vendor',
        content: 'I want to place a bulk order for your products.',
        timestamp: '2025-06-13T10:00:00Z',
        read: true
      },
      {
        id: 'MSG-032',
        senderId: 'VENDOR-001',
        senderName: 'John Doe',
        senderType: 'vendor',
        content: 'Sure, I can provide you with wholesale pricing.',
        timestamp: '2025-06-13T10:30:00Z',
        read: true
      },
      {
        id: 'MSG-033',
        senderId: 'VENDOR-004',
        senderName: 'Swiss Watch Imports',
        senderType: 'vendor',
        content: 'Order confirmed. We will proceed with the payment.',
        timestamp: '2025-06-14T12:00:00Z',
        read: true
      }
    ]
  },
  {
    id: 'CONV-003',
    participantId: 'ADMIN-001',
    participantName: 'Support Team',
    participantType: 'admin',
    lastMessage: 'Your store has been verified. Congratulations!',
    lastMessageTime: '2025-06-13T17:00:00Z',
    unreadCount: 0,
    status: 'active',
    createdAt: '2025-06-13T16:00:00Z',
    updatedAt: '2025-06-13T17:00:00Z',
    messages: [
      {
        id: 'MSG-007',
        senderId: 'ADMIN-001',
        senderName: 'Support Team',
        senderType: 'admin',
        content: 'Congratulations! Your store has been verified and is now live on the platform.',
        timestamp: '2025-06-13T16:45:00Z',
        read: true
      },
      {
        id: 'MSG-008',
        senderId: 'VENDOR-001',
        senderName: 'John Doe',
        senderType: 'vendor',
        content: 'Thank you so much! I\'m excited to start selling.',
        timestamp: '2025-06-13T17:00:00Z',
        read: true
      }
    ]
  },
  {
    id: 'CONV-008',
    participantId: 'CUST-007',
    participantName: 'Omar Al-Farhan',
    participantType: 'customer',
    lastMessage: 'Is this product authentic?',
    lastMessageTime: '2025-06-13T12:15:00Z',
    unreadCount: 0,
    status: 'active',
    createdAt: '2025-06-06T09:45:00Z',
    updatedAt: '2025-06-13T12:15:00Z',
    messages: [
      {
        id: 'MSG-016',
        senderId: 'CUST-007',
        senderName: 'Omar Al-Farhan',
        senderType: 'customer',
        content: 'Is the product authentic with original packaging?',
        timestamp: '2025-06-13T12:00:00Z',
        read: true
      },
      {
        id: 'MSG-017',
        senderId: 'VENDOR-001',
        senderName: 'John Doe',
        senderType: 'vendor',
        content: 'Yes, all our products come with original packaging and warranty.',
        timestamp: '2025-06-13T12:15:00Z',
        read: true
      }
    ]
  },
  {
    id: 'CONV-015',
    participantId: 'VENDOR-005',
    participantName: 'Dubai Watch Traders',
    participantType: 'vendor',
    lastMessage: 'When is the next auction?',
    lastMessageTime: '2025-06-13T16:00:00Z',
    unreadCount: 1,
    status: 'active',
    createdAt: '2025-06-12T14:00:00Z',
    updatedAt: '2025-06-13T16:00:00Z',
    messages: [
      {
        id: 'MSG-034',
        senderId: 'VENDOR-005',
        senderName: 'Dubai Watch Traders',
        senderType: 'vendor',
        content: 'Hi John, when is the next watch auction happening?',
        timestamp: '2025-06-12T14:00:00Z',
        read: true
      },
      {
        id: 'MSG-035',
        senderId: 'VENDOR-001',
        senderName: 'John Doe',
        senderType: 'vendor',
        content: 'The next auction is scheduled for next month.',
        timestamp: '2025-06-12T14:30:00Z',
        read: true
      },
      {
        id: 'MSG-036',
        senderId: 'VENDOR-005',
        senderName: 'Dubai Watch Traders',
        senderType: 'vendor',
        content: 'When is the next auction? I want to participate.',
        timestamp: '2025-06-13T16:00:00Z',
        read: false
      }
    ]
  },
  {
    id: 'CONV-009',
    participantId: 'CUST-008',
    participantName: 'Layla Al-Ghamdi',
    participantType: 'customer',
    lastMessage: 'What\'s the return policy?',
    lastMessageTime: '2025-06-12T09:15:00Z',
    unreadCount: 0,
    status: 'active',
    createdAt: '2025-06-05T16:00:00Z',
    updatedAt: '2025-06-12T09:15:00Z',
    messages: [
      {
        id: 'MSG-018',
        senderId: 'CUST-008',
        senderName: 'Layla Al-Ghamdi',
        senderType: 'customer',
        content: 'What is your return policy for products?',
        timestamp: '2025-06-12T09:00:00Z',
        read: true
      },
      {
        id: 'MSG-019',
        senderId: 'VENDOR-001',
        senderName: 'John Doe',
        senderType: 'vendor',
        content: 'We accept returns within 14 days. Full refund or exchange available.',
        timestamp: '2025-06-12T09:15:00Z',
        read: true
      }
    ]
  },
  {
    id: 'CONV-013',
    participantId: 'VENDOR-003',
    participantName: 'Classic Timepieces',
    participantType: 'vendor',
    lastMessage: 'We have new stock available',
    lastMessageTime: '2025-06-15T09:00:00Z',
    unreadCount: 1,
    status: 'active',
    createdAt: '2025-06-14T15:30:00Z',
    updatedAt: '2025-06-15T09:00:00Z',
    messages: [
      {
        id: 'MSG-028',
        senderId: 'VENDOR-003',
        senderName: 'Classic Timepieces',
        senderType: 'vendor',
        content: 'We just received a new batch of vintage watches.',
        timestamp: '2025-06-14T15:30:00Z',
        read: true
      },
      {
        id: 'MSG-029',
        senderId: 'VENDOR-001',
        senderName: 'John Doe',
        senderType: 'vendor',
        content: 'Great! Can you send me the catalog?',
        timestamp: '2025-06-14T16:00:00Z',
        read: true
      },
      {
        id: 'MSG-030',
        senderId: 'VENDOR-003',
        senderName: 'Classic Timepieces',
        senderType: 'vendor',
        content: 'We have new stock available. Check out our latest collection.',
        timestamp: '2025-06-15T09:00:00Z',
        read: false
      }
    ]
  },
  {
    id: 'CONV-004',
    participantId: 'CUST-003',
    participantName: 'Mohammed Ali',
    participantType: 'customer',
    lastMessage: 'I want to return the item',
    lastMessageTime: '2025-06-11T08:30:00Z',
    unreadCount: 0,
    status: 'archived',
    createdAt: '2025-06-10T09:00:00Z',
    updatedAt: '2025-06-11T08:30:00Z',
    messages: [
      {
        id: 'MSG-009',
        senderId: 'CUST-003',
        senderName: 'Mohammed Ali',
        senderType: 'customer',
        content: 'I want to return the item. It\'s not what I expected.',
        timestamp: '2025-06-11T08:00:00Z',
        read: true
      },
      {
        id: 'MSG-010',
        senderId: 'VENDOR-001',
        senderName: 'John Doe',
        senderType: 'vendor',
        content: 'I\'m sorry to hear that. We accept returns within 14 days.',
        timestamp: '2025-06-11T08:30:00Z',
        read: true
      }
    ]
  },
  {
    id: 'CONV-005',
    participantId: 'CUST-004',
    participantName: 'Sara Al-Fahd',
    participantType: 'customer',
    lastMessage: 'I received the item today! It\'s beautiful!',
    lastMessageTime: '2025-06-10T11:15:00Z',
    unreadCount: 0,
    status: 'archived',
    createdAt: '2025-06-09T11:30:00Z',
    updatedAt: '2025-06-10T11:15:00Z',
    messages: [
      {
        id: 'MSG-011',
        senderId: 'CUST-004',
        senderName: 'Sara Al-Fahd',
        senderType: 'customer',
        content: 'I received the item today! It\'s absolutely beautiful!',
        timestamp: '2025-06-10T11:00:00Z',
        read: true
      },
      {
        id: 'MSG-012',
        senderId: 'VENDOR-001',
        senderName: 'John Doe',
        senderType: 'vendor',
        content: 'I\'m so glad you love it! Enjoy your purchase.',
        timestamp: '2025-06-10T11:15:00Z',
        read: true
      }
    ]
  },
  {
    id: 'CONV-010',
    participantId: 'CUST-009',
    participantName: 'Nasser Al-Saud',
    participantType: 'customer',
    lastMessage: 'I received the item! Thank you!',
    lastMessageTime: '2025-06-11T15:10:00Z',
    unreadCount: 0,
    status: 'archived',
    createdAt: '2025-06-04T10:00:00Z',
    updatedAt: '2025-06-11T15:10:00Z',
    messages: [
      {
        id: 'MSG-020',
        senderId: 'CUST-009',
        senderName: 'Nasser Al-Saud',
        senderType: 'customer',
        content: 'I received the item today! It\'s absolutely stunning!',
        timestamp: '2025-06-11T15:00:00Z',
        read: true
      },
      {
        id: 'MSG-021',
        senderId: 'VENDOR-001',
        senderName: 'John Doe',
        senderType: 'vendor',
        content: 'So glad to hear that Nasser! Enjoy your purchase.',
        timestamp: '2025-06-11T15:10:00Z',
        read: true
      }
    ]
  }
];

export const messageFilters: { key: MessageFilter; label: string }[] = [
  { key: 'all', label: 'All' },
  { key: 'buyers', label: 'Buyers' },
  { key: 'sellers', label: 'Sellers' },
  { key: 'support', label: 'Support' },
];
