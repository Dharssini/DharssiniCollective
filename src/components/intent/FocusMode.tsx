import { useState } from 'react';
import type { PathRecommendation } from '../../types/intent';
import { knowledgeBase } from '../../data/knowledgeBase';

interface FocusModeProps {
  path: PathRecommendation;
  onExit: () => void;
  onChangeIntent: () => void;
}

export default function FocusMode({ path, onExit, onChangeIntent }: FocusModeProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showReasoning, setShowReasoning] = useState(false);

  const currentContent = path.content[currentIndex];
  const currentItem = knowledgeBase.find(item => item.id === currentContent.id);

  const progress = ((currentIndex + 1) / path.content.length) * 100;

  const handleNext = () => {
    if (currentIndex < path.content.length - 1) {
      setCurrentIndex(currentIndex + 1);
      setShowReasoning(false);
    } else {
      // Completed path
      onExit();
    }
  };

  const handlePrevious = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
      setShowReasoning(false);
    }
  };

  if (!currentItem) {
    return <div>Content not found</div>;
  }

  return (
    <div className="min-h-screen bg-dark-950">
      {/* Minimal header with progress */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-dark-900/95 backdrop-blur-sm border-b border-dark-800">
        <div className="max-w-4xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center gap-4">
              <button
                onClick={onChangeIntent}
                className="text-dark-500 hover:text-dark-400 text-sm flex items-center gap-2"
              >
                ← Change intent
              </button>
              <span className="text-dark-600">|</span>
              <span className="text-dark-400 text-sm">
                {currentIndex + 1} of {path.content.length}
              </span>
            </div>
            <button
              onClick={onExit}
              className="text-dark-500 hover:text-dark-400 text-sm"
            >
              Exit focus mode
            </button>
          </div>

          {/* Progress bar */}
          <div className="w-full bg-dark-800 rounded-full h-1.5 overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-primary-500 to-accent-500 transition-all duration-500"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="pt-24 pb-12 px-6">
        <div className="max-w-3xl mx-auto">
          {/* Path context */}
          <div className="mb-8 text-center">
            <h1 className="text-2xl font-bold mb-2">
              <span className="gradient-text">{path.title}</span>
            </h1>
            <p className="text-dark-400 text-sm">{path.description}</p>
            <div className="mt-2 text-dark-500 text-xs">
              Estimated time: {path.estimatedTime}
            </div>
          </div>

          {/* Current content card */}
          <div className="bg-dark-800/50 border border-dark-700 rounded-lg p-8 mb-6">
            {/* Type badge */}
            <div className="flex items-center gap-3 mb-4">
              <span
                className={`text-xs px-3 py-1 rounded-full border font-semibold
                ${getTypeBadgeColor(currentItem.type)}`}
              >
                {currentItem.type}
              </span>
              {currentContent.priority === 'high' && (
                <span className="text-xs text-primary-400 flex items-center gap-1">
                  <span>⭐</span> Key content
                </span>
              )}
            </div>

            {/* Title */}
            <h2 className="text-3xl font-bold mb-4">{currentItem.title}</h2>

            {/* Description */}
            <p className="text-dark-300 text-lg mb-6">{currentItem.description}</p>

            {/* Why this matters */}
            {currentContent.reason && (
              <div className="p-4 bg-primary-500/10 border border-primary-500/20 rounded-lg mb-6">
                <p className="text-primary-400 text-sm font-semibold mb-2">
                  Why this is on your path:
                </p>
                <p className="text-dark-300 text-sm">{currentContent.reason}</p>
              </div>
            )}

            {/* Details */}
            {currentItem.details && currentItem.details.length > 0 && (
              <div className="mb-6">
                <h3 className="text-sm font-semibold text-dark-400 mb-3">Key Details:</h3>
                <ul className="space-y-2">
                  {currentItem.details.map((detail, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <span className="text-primary-400 mt-1">→</span>
                      <span className="text-dark-300 text-sm">{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Metrics */}
            {currentItem.metrics && currentItem.metrics.length > 0 && (
              <div className="mb-6">
                <h3 className="text-sm font-semibold text-dark-400 mb-3">Impact:</h3>
                <div className="flex flex-wrap gap-2">
                  {currentItem.metrics.map((metric, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1.5 bg-accent-500/10 text-accent-400 border border-accent-500/20 rounded-lg text-sm font-medium"
                    >
                      {metric}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Technologies */}
            {currentItem.technologies && currentItem.technologies.length > 0 && (
              <div className="mb-6">
                <h3 className="text-sm font-semibold text-dark-400 mb-3">Technologies:</h3>
                <div className="flex flex-wrap gap-2">
                  {currentItem.technologies.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-1 bg-dark-900/50 text-dark-400 rounded text-xs"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Link */}
            {currentItem.link && (
              <div className="pt-4 border-t border-dark-700">
                <a
                  href={currentItem.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary-400 font-medium hover:text-primary-300 flex items-center gap-2"
                >
                  View full project →
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

          {/* Why I chose this path toggle */}
          <button
            onClick={() => setShowReasoning(!showReasoning)}
            className="w-full p-4 bg-dark-800/30 border border-dark-700 rounded-lg
                     hover:border-dark-600 transition-colors mb-6"
          >
            <div className="flex items-center justify-between">
              <span className="text-dark-300 text-sm font-medium">
                {showReasoning ? '▼' : '▶'} Why I chose this path for you
              </span>
            </div>
          </button>

          {showReasoning && (
            <div className="mb-6 p-6 bg-dark-800/50 border border-dark-700 rounded-lg animate-slide-up">
              <h3 className="text-lg font-bold mb-4">Path Reasoning:</h3>
              <ul className="space-y-3">
                {path.reasoning.map((reason, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <span className="text-accent-400 mt-1">•</span>
                    <span className="text-dark-300 text-sm">{reason}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Navigation */}
          <div className="flex items-center justify-between gap-4">
            <button
              onClick={handlePrevious}
              disabled={currentIndex === 0}
              className={`flex items-center gap-2 px-6 py-3 rounded-lg font-medium transition-all
                ${
                  currentIndex === 0
                    ? 'bg-dark-800 text-dark-600 cursor-not-allowed'
                    : 'bg-dark-800 text-dark-300 hover:bg-dark-700'
                }`}
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
              Previous
            </button>

            <button onClick={handleNext} className="btn-primary px-8">
              {currentIndex < path.content.length - 1 ? 'Next' : 'Complete'}
            </button>
          </div>

          {/* Content indicator dots */}
          <div className="flex justify-center gap-2 mt-8">
            {path.content.map((_, idx) => (
              <button
                key={idx}
                onClick={() => {
                  setCurrentIndex(idx);
                  setShowReasoning(false);
                }}
                className={`w-2 h-2 rounded-full transition-all
                  ${
                    idx === currentIndex
                      ? 'bg-primary-400 w-8'
                      : idx < currentIndex
                      ? 'bg-primary-600'
                      : 'bg-dark-700'
                  }`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function getTypeBadgeColor(type: string): string {
  const colors: Record<string, string> = {
    project: 'bg-primary-500/10 text-primary-400 border-primary-500/20',
    achievement: 'bg-green-500/10 text-green-400 border-green-500/20',
    skill: 'bg-accent-500/10 text-accent-400 border-accent-500/20',
    research: 'bg-purple-500/10 text-purple-400 border-purple-500/20',
  };
  return colors[type] || colors.project;
}
