import type {
  IntentContext,
  PathRecommendation,
  RoleFitReport,
  ContentReference,
} from '../types/intent';
import {
  generateRoleFitReport,
  getIntentRecommendations,
} from '../data/roleFitMapping';
import { knowledgeBase } from '../data/knowledgeBase';

/**
 * Routes intent context to appropriate experience
 * Returns either a PathRecommendation or RoleFitReport
 */
export function routeIntent(
  context: IntentContext
): { type: 'path'; data: PathRecommendation } | { type: 'report'; data: RoleFitReport } {
  // Role fit evaluation gets a report
  if (context.intent === 'role-fit' && context.roleType) {
    const report = generateRoleFitReport(
      context.roleType,
      context.roleSignals,
      context.customRole
    );
    return { type: 'report', data: report };
  }

  // All other intents get a path recommendation
  const path = generatePathRecommendation(context);
  return { type: 'path', data: path };
}

/**
 * Generate a path recommendation based on intent context
 */
function generatePathRecommendation(context: IntentContext): PathRecommendation {
  const { intent, timeConstraint } = context;

  // Get base content recommendations
  const baseContent = getIntentRecommendations(intent, timeConstraint || '5min');

  // Generate reasoning based on context
  const reasoning = generateReasoning(context);

  // Determine title and description
  const { title, description } = getPathMetadata(intent);

  // Calculate estimated time
  const estimatedTime = getEstimatedTime(timeConstraint || '5min', baseContent.length);

  return {
    title,
    description,
    estimatedTime,
    content: baseContent,
    reasoning,
  };
}

/**
 * Get path metadata based on intent
 */
function getPathMetadata(intent: string): { title: string; description: string } {
  const metadata: Record<
    string,
    { title: string; description: string }
  > = {
    'depth-understanding': {
      title: 'Depth of AI/ML Understanding',
      description: 'Deep technical knowledge and research mindset',
    },
    'build-systems': {
      title: 'Building Real Systems',
      description: 'Production deployments and end-to-end ownership',
    },
    'research-mindset': {
      title: 'Research Mindset',
      description: 'Novel approaches and experimentation',
    },
    'teaching-communication': {
      title: 'Teaching & Communication',
      description: 'Explaining complex concepts clearly',
    },
    'quick-signal': {
      title: 'Quick Signal',
      description: 'Key highlights and achievements',
    },
  };

  return metadata[intent] || metadata['quick-signal'];
}

/**
 * Generate reasoning for why this path was chosen
 */
function generateReasoning(context: IntentContext): string[] {
  const reasoning: string[] = [];

  // Add intent-based reasoning
  if (context.intent === 'depth-understanding') {
    reasoning.push('Selected research-heavy projects showing deep technical understanding');
    reasoning.push('Included both theoretical knowledge and practical implementations');
  } else if (context.intent === 'build-systems') {
    reasoning.push('Focused on production systems with real-world impact');
    reasoning.push('Emphasized end-to-end ownership and deployment experience');
  } else if (context.intent === 'research-mindset') {
    reasoning.push('Highlighted novel approaches and experimental work');
    reasoning.push('Showcased systematic research methodology');
  } else if (context.intent === 'teaching-communication') {
    reasoning.push('Selected content demonstrating clear communication');
    reasoning.push('Focused on educational and documentation aspects');
  } else if (context.intent === 'quick-signal') {
    reasoning.push('Curated top achievements for quick evaluation');
    reasoning.push('Balanced technical depth with impact metrics');
  }

  // Add time constraint reasoning
  if (context.timeConstraint) {
    const timeMap: Record<string, string> = {
      '2min': 'Limited to highest-impact items for quick assessment',
      '5min': 'Selected 3-4 key items for efficient overview',
      '10min': 'Included 5-6 items for comprehensive understanding',
      '30min': 'Extensive coverage across multiple domains',
      'deep-dive': 'No time constraints - full depth available',
    };
    reasoning.push(timeMap[context.timeConstraint]);
  }

  // Add background-based reasoning
  if (context.background === 'engineer') {
    reasoning.push('Technical details prioritized for engineering audience');
  } else if (context.background === 'researcher') {
    reasoning.push('Research methodology and novel contributions emphasized');
  } else if (context.background === 'recruiter') {
    reasoning.push('Clear impact metrics and skill demonstrations highlighted');
  } else if (context.background === 'founder') {
    reasoning.push('Business impact and full-stack capabilities emphasized');
  } else if (context.background === 'student') {
    reasoning.push('Learning journey and educational value highlighted');
  }

  return reasoning;
}

/**
 * Calculate estimated time based on constraint and content length
 */
function getEstimatedTime(constraint: string, contentLength: number): string {
  if (constraint === 'deep-dive') {
    return `${contentLength * 5} minutes (deep exploration)`;
  }

  const timeMap: Record<string, string> = {
    '2min': '2 minutes',
    '5min': '5 minutes',
    '10min': '10 minutes',
    '30min': '30 minutes',
  };

  return timeMap[constraint] || '5 minutes';
}

/**
 * Filter content by background type (adjust technical depth)
 */
export function filterByBackground(
  content: ContentReference[]
): ContentReference[] {
  // For now, return as-is
  // In future, could reorder or filter based on background
  return content;
}

/**
 * Get content item details
 */
export function getContentDetails(id: string) {
  return knowledgeBase.find(item => item.id === id);
}
