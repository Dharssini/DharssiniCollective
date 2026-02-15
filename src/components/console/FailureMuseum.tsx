import { motion } from 'framer-motion';

const failures = [
  {
    id: 'route-opt-v1',
    project: 'Route Optimization',
    before: 'Single provider geocoding',
    after: 'Multi-provider fallback (Nominatim → Photon → MapBox)',
    metric: '15s → 2s',
    improvement: '80% latency reduction',
    lesson: 'Always have redundancy. Single points of failure kill production systems.',
    color: 'primary',
  },
  {
    id: 'rag-v1',
    project: 'RAG System',
    before: 'Simple vector search',
    after: 'Hybrid RRF fusion (3 strategies: RRF, weighted, cascade)',
    metric: '60% → 85% recall',
    improvement: '25% improvement',
    lesson: 'Combining multiple retrieval strategies beats any single approach.',
    color: 'accent',
  },
  {
    id: 'excel-automation-v1',
    project: 'Excel Automation',
    before: 'Pure LLM extraction',
    after: 'Hybrid LLM+ML approach',
    metric: '40% → 72% accuracy',
    improvement: '32% improvement',
    lesson: 'LLMs aren\'t silver bullets. Traditional ML still has its place.',
    color: 'violet',
  },
  {
    id: 'crisis-detection-v1',
    project: 'Crisis Detection',
    before: 'Pure keyword matching',
    after: 'Semantic + rule-based filtering (40+ keywords + embeddings)',
    metric: '70% FP → 15% FP',
    improvement: '55% false positive reduction',
    lesson: 'Safety-critical systems need multiple layers. No single technique is enough.',
    color: 'success',
  },
];

export default function FailureMuseum() {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-3">
          <span className="text-primary-400">🏛️</span> Museum of Failed Experiments
        </h2>
        <p className="text-dark-300">
          What didn't work — and what I learned. Failure is data.
        </p>
      </div>

      <div className="space-y-6">
        {failures.map((failure, idx) => (
          <motion.div
            key={failure.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.1 }}
            className="bg-dark-900 border border-dark-800 rounded-lg p-6 hover:border-primary-500/50 transition-colors"
          >
            <div className="flex items-start justify-between mb-4">
              <div>
                <h3 className="text-xl font-bold mb-1">{failure.project}</h3>
                <div className={`inline-block px-3 py-1 rounded-full text-xs font-mono bg-${failure.color}-500/20 text-${failure.color}-400 border border-${failure.color}-500/30`}>
                  {failure.improvement}
                </div>
              </div>
            </div>

            {/* Diff View */}
            <div className="bg-dark-950 rounded-lg p-4 font-mono text-sm mb-4">
              <div className="flex items-start gap-2 text-red-400 mb-2">
                <span>-</span>
                <span>{failure.before}</span>
              </div>
              <div className="flex items-start gap-2 text-green-400">
                <span>+</span>
                <span>{failure.after}</span>
              </div>
            </div>

            {/* Metrics */}
            <div className="flex items-center gap-4 mb-4 text-sm">
              <div className="px-3 py-1 bg-dark-800 rounded border border-dark-700">
                <span className="text-dark-400">Before:</span>{' '}
                <span className="text-red-400 font-mono">{failure.metric.split('→')[0].trim()}</span>
              </div>
              <div className="text-dark-500">→</div>
              <div className="px-3 py-1 bg-dark-800 rounded border border-dark-700">
                <span className="text-dark-400">After:</span>{' '}
                <span className="text-green-400 font-mono">{failure.metric.split('→')[1].trim()}</span>
              </div>
            </div>

            {/* Lesson */}
            <div className="bg-violet-500/10 border-l-4 border-violet-500 rounded p-4">
              <div className="text-xs text-violet-400 font-mono mb-1">LESSON LEARNED</div>
              <p className="text-dark-200">{failure.lesson}</p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Philosophy */}
      <div className="mt-12 card bg-gradient-to-br from-primary-500/5 to-accent-500/5 border-primary-500/20">
        <h3 className="text-xl font-bold mb-4 text-primary-400">Why Share Failures?</h3>
        <div className="space-y-3 text-dark-300">
          <p>
            Most portfolios only show successes. But{' '}
            <strong className="text-primary-400">failures contain more signal than successes</strong>.
          </p>
          <p>
            Every system here started with a failed v1. The difference between junior and senior engineers
            isn't avoiding failure — it's{' '}
            <strong className="text-accent-400">learning faster from it</strong>.
          </p>
          <p className="text-sm text-dark-400 italic">
            "Success is a lousy teacher. It seduces smart people into thinking they can't lose." — Bill Gates
          </p>
        </div>
      </div>
    </div>
  );
}
