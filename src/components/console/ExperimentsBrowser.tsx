import { motion } from 'framer-motion';
import { topics, knowledgeBase } from '../../data/knowledgeBase';

interface Props {
  selectedDomain: string;
  setSelectedDomain: (domain: string) => void;
  selectedExperiment: string | null;
  setSelectedExperiment: (id: string | null) => void;
}

export default function ExperimentsBrowser({
  selectedDomain,
  setSelectedDomain,
  selectedExperiment,
  setSelectedExperiment,
}: Props) {
  // Group experiments by domain
  const recentWork = knowledgeBase.filter((item) => item.type === 'project').slice(0, 5);

  const metrics = [
    { label: '$4.5K saved', value: '4500', icon: '💰' },
    { label: '80% ↓ latency', value: '80', icon: '⚡' },
    { label: '7+ agents', value: '7', icon: '🤖' },
  ];

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="space-y-2">
        <h2 className="text-lg font-mono font-bold text-primary-400">
          &gt; Experiments_
        </h2>
        <p className="text-xs text-dark-400 font-mono">Select domain to filter experiments</p>
      </div>

      {/* Domains */}
      <div className="space-y-2">
        <h3 className="text-sm font-mono text-dark-300 flex items-center gap-2">
          <span>📂</span> Domains
        </h3>
        <div className="space-y-1">
          <button
            onClick={() => setSelectedDomain('all')}
            className={`w-full text-left px-3 py-2 rounded-lg text-sm font-mono transition-all ${
              selectedDomain === 'all'
                ? 'bg-primary-500/20 text-primary-400 border-l-2 border-primary-500'
                : 'text-dark-300 hover:bg-dark-800'
            }`}
          >
            All Experiments
          </button>
          {topics.map((topic) => (
            <button
              key={topic.id}
              onClick={() => setSelectedDomain(topic.id)}
              className={`w-full text-left px-3 py-2 rounded-lg text-sm font-mono transition-all ${
                selectedDomain === topic.id
                  ? 'bg-primary-500/20 text-primary-400 border-l-2 border-primary-500'
                  : 'text-dark-300 hover:bg-dark-800'
              }`}
            >
              <span className="mr-2">{topic.icon}</span>
              {topic.name}
            </button>
          ))}
        </div>
      </div>

      {/* Recent Work */}
      <div className="space-y-2">
        <h3 className="text-sm font-mono text-dark-300 flex items-center gap-2">
          <span>🔬</span> Recent Work
        </h3>
        <div className="space-y-1">
          {recentWork.map((item) => (
            <motion.button
              key={item.id}
              onClick={() => setSelectedExperiment(item.id)}
              className={`w-full text-left px-3 py-2 rounded-lg text-xs font-mono transition-all ${
                selectedExperiment === item.id
                  ? 'bg-accent-500/20 text-accent-400 border-l-2 border-accent-500'
                  : 'text-dark-300 hover:bg-dark-800'
              }`}
              whileHover={{ x: 4 }}
            >
              <div className="truncate">{item.title}</div>
              {item.company && (
                <div className="text-[10px] text-dark-500 mt-1">{item.company}</div>
              )}
            </motion.button>
          ))}
        </div>
      </div>

      {/* Metrics */}
      <div className="space-y-2">
        <h3 className="text-sm font-mono text-dark-300 flex items-center gap-2">
          <span>📊</span> Impact Metrics
        </h3>
        <div className="space-y-2">
          {metrics.map((metric) => (
            <div
              key={metric.label}
              className="bg-dark-800/50 rounded-lg p-3 border border-dark-700"
            >
              <div className="flex items-center justify-between mb-1">
                <span className="text-xs text-dark-400 font-mono">{metric.label}</span>
                <span className="text-lg">{metric.icon}</span>
              </div>
              <div className="text-2xl font-mono font-bold text-success-400">
                {metric.value}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* System Status */}
      <div className="pt-4 border-t border-dark-800">
        <div className="space-y-2 text-xs font-mono text-dark-400">
          <div className="flex items-center justify-between">
            <span>Total Experiments:</span>
            <span className="text-primary-400">{knowledgeBase.length}</span>
          </div>
          <div className="flex items-center justify-between">
            <span>Domains:</span>
            <span className="text-primary-400">{topics.length}</span>
          </div>
          <div className="flex items-center justify-between">
            <span>Production Ready:</span>
            <span className="text-success-400">✓</span>
          </div>
        </div>
      </div>
    </div>
  );
}
