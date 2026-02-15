// Intent-driven navigation types

export type IntentType =
  | 'depth-understanding'
  | 'build-systems'
  | 'research-mindset'
  | 'teaching-communication'
  | 'quick-signal'
  | 'role-fit';

export type TimeConstraint = '2min' | '5min' | '10min' | '30min' | 'deep-dive';

export type BackgroundType =
  | 'engineer'
  | 'researcher'
  | 'founder'
  | 'recruiter'
  | 'student';

export type RoleType =
  | 'ml-engineer'
  | 'research-engineer'
  | 'ai-product-engineer'
  | 'founding-engineer'
  | 'research-scientist'
  | 'other';

export type RoleSignal =
  | 'deep-learning-fundamentals'
  | 'system-design'
  | 'research-depth'
  | 'shipping-speed'
  | 'communication'
  | 'debugging-resilience';

export interface IntentContext {
  intent: IntentType;
  timeConstraint?: TimeConstraint;
  background?: BackgroundType;
  roleType?: RoleType;
  roleSignals?: RoleSignal[];
  customRole?: string;
}

export interface ContentReference {
  type: 'project' | 'video' | 'blog' | 'skill' | 'achievement' | 'research';
  id: string;
  reason?: string;
  priority?: 'high' | 'medium' | 'low';
}

export interface PathRecommendation {
  title: string;
  description: string;
  estimatedTime: string;
  content: ContentReference[];
  reasoning: string[];
}

export interface RoleFitReport {
  roleType: string;
  strongSignals: ContentReference[];
  relevantDepth: ContentReference[];
  communicationStyle: ContentReference[];
  potentialGaps: string[];
  overallFit: 'strong' | 'good' | 'moderate';
  customNotes?: string;
}
