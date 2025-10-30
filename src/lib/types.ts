export interface Dataset {
  id: string;
  title: string;
  description: string;
  contributor: string;
  dataType: 'conversation' | 'document' | 'code' | 'structured' | 'custom';
  files: DataFile[];
  totalSize: number;
  qualityScore: number;
  qualityBreakdown: {
    completeness: number;
    diversity: number;
    formatting: number;
    uniqueness: number;
    consistency: number;
  };
  price: number;
  tags: string[];
  language: string;
  timePeriod: { start: Date; end: Date };
  privacyLevel: 'public' | 'private' | 'semi-public';
  license: string;
  accessCount: number;
  totalEarned: number;
  status: 'draft' | 'active' | 'under_review' | 'paused';
  uploadedAt: Date;
  updatedAt: Date;
}

export interface DataFile {
  name: string;
  size: number;
  type: string;
  hash: string;
}

export interface Transaction {
  id: string;
  dataset: string;
  buyer: string;
  seller: string;
  amount: number;
  platformFee: number;
  timestamp: Date;
  signature: string;
  status: 'pending' | 'completed' | 'failed';
}

export interface Validator {
  id: string;
  wallet: string;
  stake: number;
  validationsCount: number;
  accuracy: number;
  uptime: number;
  status: 'online' | 'offline';
  joinedAt: Date;
}

export interface Profile {
  wallet: string;
  username?: string;
  reputation: number;
  reputationBreakdown: {
    dataQuality: number;
    reliability: number;
    community: number;
    activity: number;
  };
  badges: Badge[];
  totalDatasets: number;
  totalDataSize: number;
  totalEarnings: number;
  totalAccesses: number;
  memberSince: Date;
}

export interface Badge {
  id: string;
  name: string;
  description: string;
  icon: string;
  earnedAt: Date;
}
