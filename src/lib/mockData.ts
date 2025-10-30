import { Dataset, Transaction, Validator, Profile } from './types';

export const mockDatasets: Dataset[] = [
  {
    id: 'ds-001',
    title: 'Customer Support Conversations - SaaS Product',
    description: 'High-quality customer support chat logs from a B2B SaaS company. Covers technical troubleshooting, billing inquiries, and feature requests. Excellent for training support chatbots.',
    contributor: '7xKe...9mPq',
    dataType: 'conversation',
    files: [
      { name: 'support_logs_2024_q1.json', size: 524288000, type: 'application/json', hash: 'QmX7Y...' }
    ],
    totalSize: 524288000,
    qualityScore: 91,
    qualityBreakdown: { completeness: 95, diversity: 88, formatting: 93, uniqueness: 87, consistency: 92 },
    price: 2.5,
    tags: ['customer-support', 'saas', 'technical', 'english'],
    language: 'English',
    timePeriod: { start: new Date('2024-01-01'), end: new Date('2024-03-31') },
    privacyLevel: 'public',
    license: 'Commercial use allowed',
    accessCount: 47,
    totalEarned: 105.75,
    status: 'active',
    uploadedAt: new Date('2024-04-15'),
    updatedAt: new Date('2024-04-15')
  },
  {
    id: 'ds-002',
    title: 'Discord Community Conversations - Gaming',
    description: '500K messages from an active gaming community. Rich in casual conversations, technical discussions about games, and community interactions.',
    contributor: '9pLm...3xTr',
    dataType: 'conversation',
    files: [
      { name: 'discord_export_2024.json', size: 892371968, type: 'application/json', hash: 'QmA8B...' }
    ],
    totalSize: 892371968,
    qualityScore: 84,
    qualityBreakdown: { completeness: 89, diversity: 92, formatting: 78, uniqueness: 85, consistency: 76 },
    price: 1.8,
    tags: ['gaming', 'community', 'casual', 'english'],
    language: 'English',
    timePeriod: { start: new Date('2023-06-01'), end: new Date('2024-06-01') },
    privacyLevel: 'public',
    license: 'CC BY-SA 4.0',
    accessCount: 32,
    totalEarned: 51.84,
    status: 'active',
    uploadedAt: new Date('2024-06-10'),
    updatedAt: new Date('2024-06-10')
  },
  {
    id: 'ds-003',
    title: 'Technical Documentation - Web Development',
    description: 'Comprehensive technical docs for modern web development frameworks. Includes tutorials, API references, and best practices.',
    contributor: '4mNq...7pKl',
    dataType: 'document',
    files: [
      { name: 'react_docs.pdf', size: 15728640, type: 'application/pdf', hash: 'QmC9D...' },
      { name: 'nextjs_guides.pdf', size: 20971520, type: 'application/pdf', hash: 'QmE2F...' }
    ],
    totalSize: 36700160,
    qualityScore: 96,
    qualityBreakdown: { completeness: 98, diversity: 92, formatting: 99, uniqueness: 94, consistency: 97 },
    price: 3.2,
    tags: ['programming', 'web-dev', 'documentation', 'technical'],
    language: 'English',
    timePeriod: { start: new Date('2023-01-01'), end: new Date('2024-01-01') },
    privacyLevel: 'public',
    license: 'MIT',
    accessCount: 89,
    totalEarned: 256.32,
    status: 'active',
    uploadedAt: new Date('2024-02-20'),
    updatedAt: new Date('2024-02-20')
  },
  {
    id: 'ds-004',
    title: 'Code Repository - Open Source Projects',
    description: 'Well-documented code from 50+ open source projects. Includes Python, JavaScript, and Rust implementations with extensive comments.',
    contributor: '2vXy...8qWe',
    dataType: 'code',
    files: [
      { name: 'projects_archive.zip', size: 419430400, type: 'application/zip', hash: 'QmG3H...' }
    ],
    totalSize: 419430400,
    qualityScore: 88,
    qualityBreakdown: { completeness: 90, diversity: 95, formatting: 85, uniqueness: 82, consistency: 88 },
    price: 2.0,
    tags: ['code', 'open-source', 'python', 'javascript', 'rust'],
    language: 'Multiple',
    timePeriod: { start: new Date('2022-01-01'), end: new Date('2024-01-01') },
    privacyLevel: 'public',
    license: 'MIT',
    accessCount: 64,
    totalEarned: 115.2,
    status: 'active',
    uploadedAt: new Date('2024-03-05'),
    updatedAt: new Date('2024-03-05')
  },
  {
    id: 'ds-005',
    title: 'Healthcare Patient Records - Anonymized',
    description: 'De-identified patient records with medical histories, treatments, and outcomes. Perfect for healthcare AI training while maintaining privacy.',
    contributor: '5bRt...1nMp',
    dataType: 'structured',
    files: [
      { name: 'patient_records.csv', size: 157286400, type: 'text/csv', hash: 'QmI4J...' }
    ],
    totalSize: 157286400,
    qualityScore: 93,
    qualityBreakdown: { completeness: 96, diversity: 89, formatting: 95, uniqueness: 91, consistency: 94 },
    price: 5.5,
    tags: ['healthcare', 'medical', 'structured', 'anonymized'],
    language: 'English',
    timePeriod: { start: new Date('2020-01-01'), end: new Date('2023-12-31') },
    privacyLevel: 'private',
    license: 'Restricted commercial use',
    accessCount: 28,
    totalEarned: 138.6,
    status: 'active',
    uploadedAt: new Date('2024-01-10'),
    updatedAt: new Date('2024-01-10')
  },
  {
    id: 'ds-006',
    title: 'E-commerce Product Reviews - 1M Reviews',
    description: 'One million product reviews from various categories. Includes ratings, text reviews, and product metadata.',
    contributor: '8cWx...4tLk',
    dataType: 'structured',
    files: [
      { name: 'reviews_dataset.json', size: 734003200, type: 'application/json', hash: 'QmK5L...' }
    ],
    totalSize: 734003200,
    qualityScore: 87,
    qualityBreakdown: { completeness: 91, diversity: 94, formatting: 83, uniqueness: 79, consistency: 88 },
    price: 1.5,
    tags: ['e-commerce', 'reviews', 'sentiment', 'consumer'],
    language: 'English',
    timePeriod: { start: new Date('2022-01-01'), end: new Date('2024-06-01') },
    privacyLevel: 'public',
    license: 'CC BY 4.0',
    accessCount: 156,
    totalEarned: 210.6,
    status: 'active',
    uploadedAt: new Date('2024-06-15'),
    updatedAt: new Date('2024-06-15')
  }
];

export const mockTransactions: Transaction[] = [
  {
    id: 'tx-001',
    dataset: 'ds-001',
    buyer: '3aHj...7mQx',
    seller: '7xKe...9mPq',
    amount: 2.5,
    platformFee: 0.25,
    timestamp: new Date('2024-07-15T10:30:00'),
    signature: '5KXE8...9mPqL',
    status: 'completed'
  },
  {
    id: 'tx-002',
    dataset: 'ds-003',
    buyer: '9pLm...3xTr',
    seller: '4mNq...7pKl',
    amount: 3.2,
    platformFee: 0.32,
    timestamp: new Date('2024-07-14T15:45:00'),
    signature: '7LPQ9...3xTrN',
    status: 'completed'
  }
];

export const mockValidators: Validator[] = [
  {
    id: 'val-001',
    wallet: '6tYu...2nVb',
    stake: 100,
    validationsCount: 1847,
    accuracy: 97.8,
    uptime: 99.2,
    status: 'online',
    joinedAt: new Date('2024-01-05')
  },
  {
    id: 'val-002',
    wallet: '8xRw...5pCm',
    stake: 250,
    validationsCount: 2934,
    accuracy: 98.5,
    uptime: 99.8,
    status: 'online',
    joinedAt: new Date('2023-11-20')
  },
  {
    id: 'val-003',
    wallet: '4mKl...9qTh',
    stake: 150,
    validationsCount: 1523,
    accuracy: 96.2,
    uptime: 98.5,
    status: 'online',
    joinedAt: new Date('2024-02-10')
  }
];

export const mockProfile: Profile = {
  wallet: '7xKe...9mPq',
  username: 'DataContributor',
  reputation: 87,
  reputationBreakdown: {
    dataQuality: 91,
    reliability: 88,
    community: 82,
    activity: 87
  },
  badges: [
    {
      id: 'badge-001',
      name: 'Top Contributor',
      description: 'Uploaded over 100 GB of data',
      icon: '🏆',
      earnedAt: new Date('2024-05-01')
    },
    {
      id: 'badge-002',
      name: 'Quality Master',
      description: 'Average quality score above 90',
      icon: '⭐',
      earnedAt: new Date('2024-06-15')
    }
  ],
  totalDatasets: 3,
  totalDataSize: 1073741824,
  totalEarnings: 256.32,
  totalAccesses: 178,
  memberSince: new Date('2024-01-15')
};
