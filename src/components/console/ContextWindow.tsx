import { knowledgeBase } from '../../data/knowledgeBase';

interface Props {
  selectedExperiment: string | null;
}

export default function ContextWindow({ selectedExperiment }: Props) {
  const experiment = knowledgeBase.find(item => item.id === selectedExperiment);

  // Find related experiments
  const related = experiment
    ? knowledgeBase
        .filter(item =>
          item.id !== experiment.id &&
          item.topics.some(topic => experiment.topics.includes(topic))
        )
        .slice(0, 4)
    : [];

  return (
    <div className="p-6 space-y-6">
      <div>
        <h3 className="text-sm font-mono text-dark-300 mb-4">💡 Context</h3>

        {selectedExperiment && experiment ? (
          <>
            {/* Impact Metrics */}
            <div className="space-y-3 mb-6">
              <div>
                <div className="flex justify-between text-xs mb-1">
                  <span className="text-dark-400">Impact</span>
                  <span className="text-primary-400 font-mono">80%</span>
                </div>
                <div className="w-full bg-dark-800 rounded-full h-2">
                  <div className="bg-primary-500 h-2 rounded-full" style={{ width: '80%' }} />
                </div>
              </div>

              <div>
                <div className="flex justify-between text-xs mb-1">
                  <span className="text-dark-400">Novelty</span>
                  <span className="text-accent-400 font-mono">65%</span>
                </div>
                <div className="w-full bg-dark-800 rounded-full h-2">
                  <div className="bg-accent-500 h-2 rounded-full" style={{ width: '65%' }} />
                </div>
              </div>

              <div>
                <div className="flex justify-between text-xs mb-1">
                  <span className="text-dark-400">Production Ready</span>
                  <span className="text-success-400 font-mono">100%</span>
                </div>
                <div className="w-full bg-dark-800 rounded-full h-2">
                  <div className="bg-success-500 h-2 rounded-full" style={{ width: '100%' }} />
                </div>
              </div>
            </div>

            {/* Related Work */}
            {related.length > 0 && (
              <div className="mb-6">
                <h4 className="text-xs text-dark-400 mb-2">Related Experiments</h4>
                <div className="space-y-2">
                  {related.map(item => (
                    <div
                      key={item.id}
                      className="text-xs p-2 bg-dark-800/50 rounded border border-dark-700 hover:border-primary-500/50 transition-colors cursor-pointer"
                    >
                      <div className="text-primary-400 truncate">{item.title}</div>
                      <div className="text-dark-500 text-[10px] mt-1">{item.company}</div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Tech Stack */}
            {experiment.technologies && (
              <div>
                <h4 className="text-xs text-dark-400 mb-2">Tech Stack</h4>
                <div className="flex flex-wrap gap-1">
                  {experiment.technologies.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-1 bg-dark-800 border border-dark-700 rounded text-[10px] text-dark-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </>
        ) : (
          /* Default view */
          <div className="space-y-4 text-xs text-dark-400">
            <div>
              <div className="font-mono mb-2">System Status</div>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span>Active Experiments:</span>
                  <span className="text-primary-400">{knowledgeBase.length}</span>
                </div>
                <div className="flex justify-between">
                  <span>Production Systems:</span>
                  <span className="text-success-400">12</span>
                </div>
                <div className="flex justify-between">
                  <span>Research Papers:</span>
                  <span className="text-violet-400">5</span>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-dark-800">
              <div className="font-mono mb-2">Quick Stats</div>
              <div className="space-y-2">
                <div className="bg-dark-800/50 rounded p-2">
                  <div className="text-success-400 font-mono text-lg">$4.5K+</div>
                  <div className="text-[10px]">Cost Savings</div>
                </div>
                <div className="bg-dark-800/50 rounded p-2">
                  <div className="text-primary-400 font-mono text-lg">80%</div>
                  <div className="text-[10px]">Latency ↓</div>
                </div>
                <div className="bg-dark-800/50 rounded p-2">
                  <div className="text-accent-400 font-mono text-lg">7+</div>
                  <div className="text-[10px]">AI Agents</div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
