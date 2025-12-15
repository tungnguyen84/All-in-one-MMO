export interface Feature {
  id: string;
  category: 'Video' | 'Image' | 'Automation' | 'Utility' | 'Audio' | 'System';
  title: string;
  description: string;
  details?: string[];
  iconName: string;
}

export interface PricingTier {
  name: string;
  price: string;
  features: string[];
  recommended?: boolean;
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
  timestamp: Date;
}

export interface ApiKeyData {
  id: number;
  provider: string;
  key: string; // Masked in UI
  status: 'Active' | 'Unchecked' | 'Error';
  quota: string;
  model: string;
}