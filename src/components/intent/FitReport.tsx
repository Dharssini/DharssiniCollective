import type { RoleFitReport, ContentReference } from '../../types/intent';
import { knowledgeBase } from '../../data/knowledgeBase';
import type { KnowledgeItem } from '../../data/knowledgeBase';
import { Link } from 'react-router-dom';

interface FitReportProps {
  report: RoleFitReport;
  onExploreFreely: () => void;
  onChangeRole: () => void;
}

export default function FitReport({ report, onExploreFreely, onChangeRole }: FitReportProps) {
  const getContentItem = (ref: ContentReference): KnowledgeItem | undefined => {
    return knowledgeBase.find(item => item.id === ref.id);
  };

  const getFitBadge = (fit: 'strong' | 'good' | 'moderate') => {
    switch (fit) {
      case 'strong':
        return 'bg-green-500/20 text-green-400 border-green-500/30';
      case 'good':
        return 'bg-accent-500/20 text-accent-400 border-accent-500/30';
      case 'moderate':
        return 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30';
    }
  };

  return (
    <div className="min-h-screen bg-dark-950 py-12">
      <div className="max-w-4xl mx-auto px-6">
        {/* Header */}
        <div className="mb-8 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-dark-800/50 border border-primary-500/30 rounded-full mb-4">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary-500"></span>
            </span>
            <span className="text-sm text-dark-300">Role Fit Report</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold mb-2">
            <span className="gradient-text">{report.roleType}</span>
          </h1>
          {report.customNotes && (
            <p className="text-dark-400 text-sm">{report.customNotes}</p>
          )}
        </div>

        {/* Overall Fit Badge */}
        <div className="flex justify-center mb-12">
          <div
            className={`inline-flex items-center gap-2 px-6 py-3 rounded-full border text-lg font-semibold
            ${getFitBadge(report.overallFit)}`}
          >
            {report.overallFit === 'strong' && '✓'}
            {report.overallFit === 'good' && '○'}
            {report.overallFit === 'moderate' && '△'}
            <span className="capitalize">{report.overallFit} Fit</span>
          </div>
        </div>

        {/* Report Content */}
        <div className="space-y-8">
          {/* Strongest Signals */}
          <ReportSection
            title="Strongest Signals"
            icon="✓"
            iconColor="text-green-400"
          >
            <div className="space-y-4">
              {report.strongSignals.map((ref, idx) => (
                <ContentCard key={idx} reference={ref} item={getContentItem(ref)} />
              ))}
            </div>
          </ReportSection>

          {/* Relevant Depth */}
          <ReportSection
            title="Relevant Depth"
            icon="→"
            iconColor="text-primary-400"
          >
            <div className="space-y-4">
              {report.relevantDepth.map((ref, idx) => (
                <ContentCard key={idx} reference={ref} item={getContentItem(ref)} />
              ))}
            </div>
          </ReportSection>

          {/* Communication Style */}
          {report.communicationStyle.length > 0 && (
            <ReportSection
              title="Communication Style"
              icon="→"
              iconColor="text-accent-400"
            >
              <div className="space-y-4">
                {report.communicationStyle.map((ref, idx) => (
                  <ContentCard key={idx} reference={ref} item={getContentItem(ref)} />
                ))}
              </div>
            </ReportSection>
          )}

          {/* Potential Gaps */}
          {report.potentialGaps.length > 0 && (
            <ReportSection
              title="Potential Gaps"
              icon="⚠"
              iconColor="text-yellow-400"
            >
              <div className="space-y-3">
                {report.potentialGaps.map((gap, idx) => (
                  <div
                    key={idx}
                    className="p-4 bg-yellow-500/5 border border-yellow-500/20 rounded-lg"
                  >
                    <p className="text-dark-300 text-sm">{gap}</p>
                    <p className="text-yellow-400/60 text-xs mt-1">
                      (Mention in interview if relevant)
                    </p>
                  </div>
                ))}
              </div>
            </ReportSection>
          )}
        </div>

        {/* Actions */}
        <div className="mt-12 p-8 bg-dark-800/50 border border-dark-700 rounded-lg">
          <h3 className="text-xl font-bold mb-4 text-center">Next Steps</h3>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button onClick={onChangeRole} className="btn-secondary">
              Evaluate for Different Role
            </button>
            <Link to="/resume" className="btn-primary flex items-center gap-2 px-6">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" /><polyline points="7 10 12 15 17 10" /><line x1="12" x2="12" y1="15" y2="3" /></svg>
              View & Export Full Resume
            </Link>
            <button onClick={onExploreFreely} className="text-dark-400 hover:text-white transition-colors text-sm font-semibold">
              See Full Depth
            </button>
          </div>
        </div>

        {/* Footer Note */}
        <div className="mt-8 text-center">
          <p className="text-dark-500 text-sm">
            This report was generated based on your role selection.
            <br />
            All content is available for deeper exploration.
          </p>
        </div>
      </div>
    </div >
  );
}

function ReportSection({
  title,
  icon,
  iconColor,
  children,
}: {
  title: string;
  icon: string;
  iconColor: string;
  children: React.ReactNode;
}) {
  return (
    <div className="border-t border-dark-800 pt-6">
      <h2 className="text-xl font-bold mb-4 flex items-center gap-3">
        <span className={`${iconColor} text-2xl`}>{icon}</span>
        {title}
      </h2>
      {children}
    </div>
  );
}

function ContentCard({
  reference,
  item,
}: {
  reference: ContentReference;
  item: KnowledgeItem | undefined;
}) {
  if (!item) return null;

  const typeColors: Record<string, string> = {
    project: 'bg-primary-500/10 text-primary-400 border-primary-500/20',
    achievement: 'bg-green-500/10 text-green-400 border-green-500/20',
    skill: 'bg-accent-500/10 text-accent-400 border-accent-500/20',
    research: 'bg-purple-500/10 text-purple-400 border-purple-500/20',
  };

  const typeColor = typeColors[item.type] || typeColors.project;

  return (
    <div className="p-5 bg-dark-800/50 border border-dark-700 rounded-lg hover:border-dark-600 transition-colors">
      <div className="flex items-start justify-between gap-4 mb-3">
        <div className="flex-1">
          <div className="flex items-center gap-3 mb-2">
            <span
              className={`text-xs px-2 py-1 rounded-full border ${typeColor} font-semibold`}
            >
              {item.type}
            </span>
            {reference.priority === 'high' && (
              <span className="text-xs text-primary-400">⭐ Key Evidence</span>
            )}
          </div>
          <h3 className="text-lg font-semibold text-dark-100">{item.title}</h3>
        </div>
      </div>

      <p className="text-dark-300 text-sm mb-3">{item.description}</p>

      {reference.reason && (
        <div className="p-3 bg-dark-900/50 rounded-lg mb-3">
          <p className="text-primary-400 text-xs font-medium mb-1">Why this matters:</p>
          <p className="text-dark-400 text-sm">{reference.reason}</p>
        </div>
      )}

      {item.metrics && item.metrics.length > 0 && (
        <div className="flex flex-wrap gap-2 mb-3">
          {item.metrics.map((metric, idx) => (
            <span
              key={idx}
              className="text-xs px-2 py-1 bg-dark-900/50 text-accent-400 rounded"
            >
              {metric}
            </span>
          ))}
        </div>
      )}

      {item.technologies && item.technologies.length > 0 && (
        <div className="flex flex-wrap gap-2">
          {item.technologies.slice(0, 5).map((tech, idx) => (
            <span
              key={idx}
              className="text-xs px-2 py-1 bg-dark-900/30 text-dark-400 rounded"
            >
              {tech}
            </span>
          ))}
          {item.technologies.length > 5 && (
            <span className="text-xs px-2 py-1 text-dark-500">
              +{item.technologies.length - 5} more
            </span>
          )}
        </div>
      )}

      {item.link && (
        <div className="mt-3 pt-3 border-t border-dark-700">
          <a
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary-400 text-sm font-medium hover:text-primary-300 flex items-center gap-2"
          >
            View project →
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
              />
            </svg>
          </a>
        </div>
      )}
    </div>
  );
}
