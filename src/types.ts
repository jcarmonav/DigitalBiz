export interface SolutionItem {
  id: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  iconName: 'cloud' | 'support' | 'shield' | 'code' | 'router' | 'lightbulb';
  features: string[];
  sla: string;
  techStack: string[];
  startingPrice: string;
}

export interface QuoteRequest {
  fullName: string;
  email: string;
  company: string;
  phone: string;
  serviceId: string;
  companySize: '1-10' | '11-50' | '51-200' | '200+';
  urgency: 'normal' | 'alta' | 'urgente';
  message: string;
  addons: string[];
}

export interface ContactMessage {
  fullName: string;
  email: string;
  service: string;
  message: string;
  timestamp?: number;
}
