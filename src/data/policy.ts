import { PolicyData } from '../types/policy.types';

export const privacyPolicyData: PolicyData = {
  title: 'Privacy Policy',
  lastUpdated: 'January 15, 2026',
  intro:
    'At WatchIt, we take your privacy seriously. This policy explains how we collect, use, and protect your personal information when you interact with our platform.',
  sections: [
    {
      id: 1,
      title: 'Information We Collect',
      content:
        'We collect information that you provide directly to us, such as when you create an account, make a purchase, or contact our support team. This includes your name, email address, phone number, shipping address, and payment information.\n\nWe also automatically collect certain information about your device and usage patterns, including your IP address, browser type, operating system, and browsing behavior on our platform. This helps us improve your experience and ensure security.',
      bulletPoints: [
        'Account registration information (name, email, password)',
        'Transaction and payment details',
        'Shipping and billing addresses',
        'Communication preferences',
        'Device and usage data',
        'Cookies and tracking technologies',
      ],
    },
    {
      id: 2,
      title: 'How We Use Your Information',
      content:
        'We use your information to provide, maintain, and improve our services, process transactions, and communicate with you about your orders and account.\n\nYour data helps us personalize your experience, recommend products you might like, and send you relevant updates about new arrivals, promotions, and watch-related content.',
      bulletPoints: [
        'Process and fulfill your orders',
        'Send order confirmations and updates',
        'Provide customer support and respond to inquiries',
        'Personalize your shopping experience',
        'Send marketing communications with your consent',
        'Analyze and improve our platform performance',
        'Prevent fraud and ensure security',
      ],
    },
    {
      id: 3,
      title: 'Information Sharing',
      content:
        'We do not sell your personal information to third parties. We may share your information with trusted partners who help us operate our platform, process payments, and deliver orders.\n\nThese partners are contractually obligated to protect your data and use it only for the specific services they provide to us. We carefully vet all partners to ensure they meet our privacy standards.',
      bulletPoints: [
        'Payment processors to complete transactions',
        'Shipping carriers to deliver your orders',
        'Service providers for platform maintenance',
        'Analytics partners to improve our services',
        'Legal authorities when required by law',
      ],
    },
    {
      id: 4,
      title: 'Data Security',
      content:
        'We implement industry-standard security measures to protect your personal information from unauthorized access, alteration, disclosure, or destruction.\n\nOur platform uses SSL encryption for all data transmission, and we regularly update our security protocols to address emerging threats. We also conduct regular security audits to ensure compliance with best practices.',
    },
    {
      id: 5,
      title: 'Your Rights',
      content:
        'You have the right to access, modify, or delete your personal information at any time. You can manage your preferences and privacy settings directly through your account dashboard.\n\nYou may also request a copy of the personal data we hold about you, or ask us to restrict the processing of your data in certain circumstances. We will respond to all legitimate requests within 30 days.',
      bulletPoints: [
        'Access and view your personal data',
        'Update or correct inaccurate information',
        'Request deletion of your data',
        'Opt-out of marketing communications',
        'Withdraw consent for data processing',
        'Export your data in a portable format',
      ],
    },
    {
      id: 6,
      title: 'Cookies & Tracking',
      content:
        'We use cookies and similar tracking technologies to enhance your browsing experience, analyze site traffic, and personalize content. You can control cookie preferences through your browser settings.\n\nEssential cookies are necessary for the platform to function properly. Performance and analytics cookies help us understand how you interact with our site, while marketing cookies allow us to show you relevant advertisements.',
    },
    {
      id: 7,
      title: 'Data Retention',
      content:
        'We retain your personal information for as long as necessary to provide our services, comply with legal obligations, resolve disputes, and enforce our agreements.\n\nWhen your information is no longer needed, we will securely delete or anonymize it. You can request deletion of your data at any time, subject to certain legal and regulatory requirements.',
    },
    {
      id: 8,
      title: "Children's Privacy",
      content:
        'Our platform is not intended for use by individuals under the age of 18. We do not knowingly collect personal information from minors. If we discover that we have collected data from a minor, we will promptly delete it.\n\nParents or guardians who believe their child has provided us with personal information should contact us immediately so we can take appropriate action.',
    },
    {
      id: 9,
      title: 'Updates to This Policy',
      content:
        'We may update this Privacy Policy from time to time to reflect changes in our practices or legal requirements. We will notify you of any material changes by posting the new policy on this page.\n\nThe date at the top of this policy indicates when it was last updated. We encourage you to review this policy periodically to stay informed about how we protect your privacy.',
    },
  ],
  contactText:
    'Have questions about our privacy practices? Contact our privacy team for assistance.',
};

