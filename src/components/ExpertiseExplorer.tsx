import { useState } from 'react';
import { topics, filterByTopics, searchKnowledge } from '../data/knowledgeBase';
import type { KnowledgeItem } from '../data/knowledgeBase';

export default function ExpertiseExplorer() {
  const [selectedTopics, setSelectedTopics] = useState<string[]>([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

  const toggleTopic = (topicId: string) => {
    setSelectedTopics(prev =>
      prev.includes(topicId)
        ? prev.filter(t => t !== topicId)
        : [...prev, topicId]
    );
  };

  const clearFilters = () => {
    setSelectedTopics([]);
    setSearchQuery('');
  };

  // Filter results
  const filteredItems = searchQuery
    ? searchKnowledge(searchQuery)
    : filterByTopics(selectedTopics);

  const getTypeIcon = (type: KnowledgeItem['type']) => {
    switch (type) {
      case 'project': return '💼';
      case 'achievement': return '🏆';
      case 'skill': return '⚡';
      case 'research': return '🔬';
    }
  };



  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="text-center">
        <h2 className="text-4xl font-bold mb-4">
          <span className="gradient-text">Expertise Explorer</span>
        </h2>
        <p className="text-xl text-dark-300 max-w-3xl mx-auto">
          Explore my multi-topic understanding across NLP, Computer Vision, Robotics, LLM APIs, and more.
          Click topics to filter or search for specific technologies.
        </p>
      </div>

      {/* Search Bar */}
      <div className="max-w-2xl mx-auto">
        <div className="relative">
          <input
            type="text"
            placeholder="Search by technology, company, or keyword..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full px-6 py-4 bg-dark-800 border border-dark-700 rounded-lg text-dark-100 placeholder-dark-500 focus:outline-none focus:border-primary-500 transition-colors"
          />
          <div className="absolute right-4 top-1/2 -translate-y-1/2 text-dark-500">
            🔍
          </div>
        </div>
      </div>

      {/* Topic Filters */}
      <div className="flex flex-wrap gap-3 justify-center">
        {topics.map((topic) => (
          <button
            key={topic.id}
            onClick={() => toggleTopic(topic.id)}
            className={`px-4 py-2 rounded-full font-medium transition-all transform hover:scale-105 ${selectedTopics.includes(topic.id)
                ? `bg-${topic.color}-500/20 border-2 border-${topic.color}-500 text-${topic.color}-400`
                : 'bg-dark-800 border border-dark-700 text-dark-300 hover:border-dark-600'
              }`}
          >
            <span className="mr-2">{topic.icon}</span>
            {topic.name}
          </button>
        ))}
      </div>

      {/* Controls */}
      <div className="flex justify-between items-center">
        <div className="flex gap-2">
          <button
            onClick={() => setViewMode('grid')}
            className={`px-4 py-2 rounded-lg ${viewMode === 'grid'
                ? 'bg-primary-500/20 text-primary-400 border border-primary-500/50'
                : 'bg-dark-800 text-dark-400 border border-dark-700'
              }`}
          >
            Grid
          </button>
          <button
            onClick={() => setViewMode('list')}
            className={`px-4 py-2 rounded-lg ${viewMode === 'list'
                ? 'bg-primary-500/20 text-primary-400 border border-primary-500/50'
                : 'bg-dark-800 text-dark-400 border border-dark-700'
              }`}
          >
            List
          </button>
        </div>

        <div className="flex items-center gap-4">
          <span className="text-dark-400">
            {filteredItems.length} {filteredItems.length === 1 ? 'item' : 'items'} found
          </span>
          {(selectedTopics.length > 0 || searchQuery) && (
            <button
              onClick={clearFilters}
              className="text-accent-400 hover:text-accent-300 transition-colors"
            >
              Clear filters
            </button>
          )}
        </div>
      </div>

      {/* Results */}
      <div className={viewMode === 'grid' ? 'grid grid-cols-1 md:grid-cols-2 gap-6' : 'space-y-4'}>
        {filteredItems.length === 0 ? (
          <div className="col-span-full text-center py-16">
            <div className="text-6xl mb-4">🔍</div>
            <p className="text-xl text-dark-400">No items found matching your criteria</p>
            <button
              onClick={clearFilters}
              className="mt-4 text-primary-400 hover:text-primary-300 transition-colors"
            >
              Clear filters and try again
            </button>
          </div>
        ) : (
          filteredItems.map((item) => (
            <div
              key={item.id}
              className="card hover:scale-[1.02] transition-transform group"
            >
              {/* Header */}
              <div className="flex items-start justify-between mb-3">
                <div className="flex items-center gap-2">
                  <span className="text-2xl">{getTypeIcon(item.type)}</span>
                  <div>
                    <h3 className="text-xl font-bold group-hover:text-primary-400 transition-colors">
                      {item.title}
                    </h3>
                    {item.company && (
                      <p className="text-sm text-accent-400 font-medium">{item.company}</p>
                    )}
                  </div>
                </div>
                {item.date && (
                  <span className="text-xs text-dark-500 whitespace-nowrap">{item.date}</span>
                )}
              </div>

              {/* Description */}
              <p className="text-dark-300 mb-4">{item.description}</p>

              {/* Details */}
              {item.details && item.details.length > 0 && (
                <ul className="space-y-2 mb-4">
                  {item.details.slice(0, 3).map((detail, idx) => (
                    <li key={idx} className="flex gap-2 text-sm text-dark-400">
                      <span className="text-primary-400 mt-1">•</span>
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              )}

              {/* Metrics */}
              {item.metrics && item.metrics.length > 0 && (
                <div className="flex flex-wrap gap-2 mb-4">
                  {item.metrics.map((metric, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 bg-accent-500/20 text-accent-400 text-xs font-bold rounded-full border border-accent-500/30"
                    >
                      {metric}
                    </span>
                  ))}
                </div>
              )}

              {/* Technologies */}
              {item.technologies && item.technologies.length > 0 && (
                <div className="flex flex-wrap gap-2 mb-4">
                  {item.technologies.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-1 bg-dark-900 border border-dark-700 rounded text-xs text-dark-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              )}

              {/* Topics Tags */}
              <div className="flex flex-wrap gap-2">
                {item.topics.map((topicId) => {
                  const topic = topics.find(t => t.id === topicId);
                  if (!topic) return null;

                  return (
                    <button
                      key={topicId}
                      onClick={() => toggleTopic(topicId)}
                      className={`px-2 py-1 rounded-full text-xs font-medium transition-all ${selectedTopics.includes(topicId)
                          ? `bg-${topic.color}-500/20 text-${topic.color}-400 border border-${topic.color}-500/50`
                          : 'bg-dark-800 text-dark-400 border border-dark-700 hover:border-dark-600'
                        }`}
                    >
                      {topic.icon} {topic.name}
                    </button>
                  );
                })}
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
