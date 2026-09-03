import { FAQData } from '../types/faq.types';

export const faqData: FAQData = {
  title: 'Frequently Asked Questions',
  intro:
    'Find answers to the most common questions about WatchIt. From authentication to shipping, we\'ve got you covered.',
  categories: [
    {
      id: 1,
      title: 'Shopping & Orders',
      items: [
        {
          id: 1,
          question: 'How do I place an order on WatchIt?',
          answer:
            'To place an order, simply browse our collection, select your desired timepiece, and click "Buy Now". You will be guided through the checkout process where you can enter your shipping details and payment information. Once your order is confirmed, you will receive a confirmation email.',
        },
        {
          id: 2,
          question: 'Can I cancel or modify my order?',
          answer:
            'Orders can be cancelled or modified within 24 hours of placement. After this period, orders are processed and cannot be changed. To cancel or modify, please contact our support team as soon as possible.',
        },
        {
          id: 3,
          question: 'Do you offer gift wrapping services?',
          answer:
            'Yes, we offer complimentary gift wrapping for all orders. You can select the gift wrapping option at checkout, and we will ensure your timepiece is beautifully packaged with a personalized message if requested.',
        },
      ],
    },
    {
      id: 2,
      title: 'Payment & Pricing',
      items: [
        {
          id: 4,
          question: 'What payment methods do you accept?',
          answer:
            'We accept all major credit and debit cards (Visa, Mastercard, American Express), as well as Apple Pay, Google Pay, and bank transfers for larger purchases.',
        },
        {
          id: 5,
          question: 'Is it safe to enter my payment information?',
          answer:
            'Absolutely. We use industry-standard SSL encryption to protect your data. Your payment information is securely processed and never stored on our servers.',
        },
        {
          id: 6,
          question: 'Do you offer financing options?',
          answer:
            'Yes, we offer flexible financing options through our partner providers. You can choose to pay in installments at checkout. Eligibility is determined by the financing provider.',
        },
      ],
    },
    {
      id: 3,
      title: 'Shipping & Delivery',
      items: [
        {
          id: 7,
          question: 'How long does shipping take?',
          answer:
            'Standard shipping takes 3-5 business days within the UAE. Express shipping is available for 1-2 business day delivery.',
        },
        {
          id: 8,
          question: 'Do you ship internationally?',
          answer:
            'Yes, we ship to over 50 countries worldwide. International shipping times vary based on destination, typically 7-14 business days.',
        },
        {
          id: 9,
          question: 'How can I track my order?',
          answer:
            'Once your order is shipped, you will receive a tracking number via email. You can also track your order status anytime through your account dashboard.',
        },
      ],
    },
    {
      id: 4,
      title: 'Account & Security',
      items: [
        {
          id: 10,
          question: 'How do I create an account?',
          answer:
            'To create an account, click on "Sign Up" and enter your email address and password. You will need to verify your email to activate your account.',
        },
        {
          id: 11,
          question: 'I forgot my password. How do I reset it?',
          answer:
            'Click on "Forgot Password" on the login page, enter your email, and we will send you a secure link to reset your password.',
        },
        {
          id: 12,
          question: 'How do I update my account information?',
          answer:
            'You can update your account information (name, phone, address, etc.) by going to your Profile Settings and selecting "Edit Profile".',
        },
      ],
    },
    {
      id: 5,
      title: 'Product & Authenticity',
      items: [
        {
          id: 13,
          question: 'How do you guarantee authenticity?',
          answer:
            'Every watch undergoes a rigorous authentication process by our certified horologists. Each timepiece is inspected, serial numbers are verified, and a digital certificate of authenticity is issued.',
        },
        {
          id: 14,
          question: 'Do you sell pre-owned watches?',
          answer:
            'Yes, we offer a curated selection of pre-owned luxury watches. All pre-owned timepieces are thoroughly inspected and authenticated before being listed on our platform.',
        },
        {
          id: 15,
          question: 'What warranty do you provide?',
          answer:
            'All new watches come with their original manufacturer warranty. Pre-owned watches come with a 6-month WatchIt warranty covering movement and functionality.',
        },
      ],
    },
    {
      id: 6,
      title: 'General Questions',
      items: [
        {
          id: 16,
          question: 'What is WatchIt\'s mission?',
          answer:
            'Our mission is to provide a trusted, transparent, and secure platform for buying and selling authentic luxury timepieces in the UAE and beyond.',
        },
        {
          id: 17,
          question: 'How do I contact customer support?',
          answer:
            'You can contact our support team 24/7 via live chat, email at support@watchit.com, or by calling +971 50 123 4567.',
        },
        {
          id: 18,
          question: 'Do you offer app or newsletter?',
          answer:
            'Yes, we have a mobile app available on iOS and Android. You can also subscribe to our newsletter to stay updated on new arrivals, exclusive drops, and promotions.',
        },
      ],
    },
  ],
  supportText:
    'Can\'t find what you\'re looking for? Contact our support team and we\'ll be happy to help.',
};
