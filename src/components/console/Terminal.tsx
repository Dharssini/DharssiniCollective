import { useState } from 'react';
import { motion } from 'framer-motion';
import { knowledgeBase } from '../../data/knowledgeBase';

interface Props {
  selectedExperiment: string | null;
  setSelectedExperiment: (id: string | null) => void;
  experimentView: 'overview' | 'architecture' | 'results' | 'failures';
  setExperimentView: (view: 'overview' | 'architecture' | 'results' | 'failures') => void;
}

export default function Terminal({ selectedExperiment, setSelectedExperiment, experimentView, setExperimentView }: Props) {
  const [command, setCommand] = useState('');
  const [commandHistory, setCommandHistory] = useState<string[]>([
    '> init_portfolio("dharssinikarthikeyan")',
    'Loading research environment...',
    '✓ Multi-agent systems    [████████████] 100%',
    '✓ RAG pipelines          [████████████] 100%',
    '✓ LLM fine-tuning        [████████████] 100%',
    '',
    'Type "help" for available commands',
  ]);

  const experiment = knowledgeBase.find(item => item.id === selectedExperiment);

  const handleProjectClick = (projectNumber: number) => {
    if (projectNumber > 0 && projectNumber <= knowledgeBase.length) {
      const project = knowledgeBase[projectNumber - 1];
      setSelectedExperiment(project.id);
      setExperimentView('overview');
      setCommandHistory(prev => [...prev, `> ${projectNumber}`, `Loading ${project.title}...`, '']);
    }
  };

  const renderLine = (line: string, idx: number) => {
    // Check if line is a project listing (starts with number followed by dot)
    const projectMatch = line.match(/^(\d+)\.\s(.+)$/);

    if (projectMatch) {
      const projectNum = parseInt(projectMatch[1]);
      const projectTitle = projectMatch[2];

      return (
        <div key={idx} className="flex items-start gap-2 group">
          <button
            onClick={() => handleProjectClick(projectNum)}
            className="text-dark-300 hover:text-primary-400 transition-colors text-left flex-1"
          >
            <span className="text-accent-400 font-bold">{projectNum}.</span>{' '}
            <span className="group-hover:underline">{projectTitle}</span>
          </button>
        </div>
      );
    }

    return (
      <div
        key={idx}
        className={line.startsWith('>') ? 'text-primary-400' : 'text-dark-300'}
      >
        {line}
      </div>
    );
  };

  const handleCommand = (cmd: string) => {
    const trimmed = cmd.trim().toLowerCase();
    setCommandHistory(prev => [...prev, `> ${cmd}`]);

    if (trimmed === 'help') {
      setCommandHistory(prev => [
        ...prev,
        '',
        'Available commands:',
        '  list           - Show all experiments',
        '  domains        - List technical domains',
        '  metrics        - Display impact metrics',
        '  clear          - Clear terminal',
        '  open [number]  - Open project by number (e.g., "open 1")',
        '  back           - Return to terminal',
        '',
      ]);
    } else if (trimmed === 'clear') {
      setCommandHistory([]);
    } else if (trimmed === 'list') {
      setCommandHistory(prev => [
        ...prev,
        '',
        ...knowledgeBase.map((item, idx) => `${idx + 1}. ${item.title}`),
        '',
        'Tip: Type "open [number]" or click a project number to view details',
        '',
      ]);
    } else if (trimmed === 'domains') {
      setCommandHistory(prev => [...prev, '', 'NLP | Computer Vision | RAG | Multi-Agent | MLOps', '']);
    } else if (trimmed === 'metrics') {
      setCommandHistory(prev => [
        ...prev,
        '',
        'Impact Metrics:',
        '  Cost Savings:      $4,500+',
        '  Latency Reduction: 80% (15s → 2s)',
        '  Effort Reduction:  70%',
        '  UX Enhancement:    45%',
        '',
      ]);
    } else if (trimmed === 'back') {
      setSelectedExperiment(null);
      setCommandHistory(prev => [...prev, 'Returned to terminal', '']);
    } else if (trimmed.startsWith('open ')) {
      const num = parseInt(trimmed.split(' ')[1]);
      if (num > 0 && num <= knowledgeBase.length) {
        const project = knowledgeBase[num - 1];
        setSelectedExperiment(project.id);
        setExperimentView('overview');
        setCommandHistory(prev => [...prev, `Loading ${project.title}...`, '']);
      } else {
        setCommandHistory(prev => [...prev, `Invalid project number. Use 1-${knowledgeBase.length}`, '']);
      }
    } else {
      // Check if it's just a number
      const num = parseInt(trimmed);
      if (!isNaN(num) && num > 0 && num <= knowledgeBase.length) {
        const project = knowledgeBase[num - 1];
        setSelectedExperiment(project.id);
        setExperimentView('overview');
        setCommandHistory(prev => [...prev, `Loading ${project.title}...`, '']);
      } else {
        setCommandHistory(prev => [...prev, `Command not found: ${cmd}`, 'Type "help" for available commands', '']);
      }
    }

    setCommand('');
  };

  return (
    <div className="h-full flex flex-col bg-dark-950">
      {/* Terminal Header */}
      <div className="bg-dark-900 border-b border-dark-800 px-6 py-3 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="flex gap-2">
            <div className="w-3 h-3 rounded-full bg-red-500" />
            <div className="w-3 h-3 rounded-full bg-yellow-500" />
            <div className="w-3 h-3 rounded-full bg-green-500" />
          </div>
          <span className="text-sm font-mono text-dark-300">
            dharssinikarthikeyan@research ~ %
          </span>
        </div>
        <div className="text-xs font-mono text-dark-500">Terminal v2.0</div>
      </div>

      {/* Content Area */}
      <div className="flex-1 overflow-y-auto">
        {!selectedExperiment ? (
          /* Command Terminal */
          <div className="p-6 font-mono text-sm">
            {commandHistory.map((line, idx) => renderLine(line, idx))}
            <div className="flex items-center gap-2 mt-2">
              <span className="text-primary-400">&gt;</span>
              <input
                type="text"
                value={command}
                onChange={(e) => setCommand(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter') handleCommand(command);
                }}
                className="flex-1 bg-transparent outline-none text-dark-100"
                placeholder="Type a command..."
                autoFocus
              />
              <span className="animate-terminal-blink text-primary-400">█</span>
            </div>
          </div>
        ) : (
          /* Experiment View */
          <div className="p-8">
            <div className="mb-6">
              <h1 className="text-3xl font-bold mb-2">{experiment?.title}</h1>
              <p className="text-dark-300 text-lg">{experiment?.description}</p>
              {experiment?.company && (
                <div className="mt-2 text-accent-400 font-mono text-sm">
                  {experiment.company} • {experiment.date}
                </div>
              )}
            </div>

            {/* Tabs */}
            <div className="flex gap-2 mb-6 border-b border-dark-800">
              {(['overview', 'architecture', 'results', 'failures'] as const).map((view) => (
                <button
                  key={view}
                  onClick={() => setExperimentView(view)}
                  className={`px-4 py-2 font-mono text-sm transition-all ${experimentView === view
                      ? 'text-primary-400 border-b-2 border-primary-500'
                      : 'text-dark-400 hover:text-dark-200'
                    }`}
                >
                  [{view}]
                </button>
              ))}
            </div>

            {/* Content */}
            {experimentView === 'overview' && (
              <div className="space-y-6">
                {experiment?.details && (
                  <div>
                    <h3 className="text-xl font-bold mb-4 text-primary-400">Key Innovations</h3>
                    <ul className="space-y-2">
                      {experiment.details.map((detail, idx) => (
                        <motion.li
                          key={idx}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: idx * 0.1 }}
                          className="flex gap-3"
                        >
                          <span className="text-accent-400 mt-1">•</span>
                          <span className="text-dark-200">{detail}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                )}

                {experiment?.metrics && (
                  <div>
                    <h3 className="text-xl font-bold mb-4 text-success-400">Impact Metrics</h3>
                    <div className="flex flex-wrap gap-3">
                      {experiment.metrics.map((metric, idx) => (
                        <div
                          key={idx}
                          className="px-4 py-2 bg-success-500/10 border border-success-500/30 rounded-lg text-success-400 font-mono text-sm"
                        >
                          {metric}
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {experiment?.technologies && (
                  <div>
                    <h3 className="text-xl font-bold mb-4 text-violet-400">Tech Stack</h3>
                    <div className="flex flex-wrap gap-2">
                      {experiment.technologies.map((tech, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1 bg-dark-800 border border-dark-700 rounded text-sm"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            )}

            {experimentView === 'architecture' && (
              <div className="space-y-4">
                <div className="bg-dark-900 border border-dark-800 rounded-lg p-6">
                  <pre className="text-sm text-dark-200 font-mono overflow-x-auto">
                    {`System Architecture
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

User Input
    ↓
┌────────────────┐
│  API Gateway   │
└────────┬───────┘
         ↓
┌────────────────┐
│  Load Balancer │
└────────┬───────┘
         ↓
┌─────────────────────┐
│  Processing Layer   │
│  • Agent Router     │
│  • Vector Search    │
│  • Safety Filter    │
└──────────┬──────────┘
           ↓
┌─────────────────────┐
│  Data Layer         │
│  • Vector DB        │
│  • Cache Layer      │
│  • Analytics        │
└─────────────────────┘`}
                  </pre>
                </div>
              </div>
            )}

            {experimentView === 'results' && (
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-dark-900 border border-dark-800 rounded-lg p-6">
                    <div className="text-4xl font-bold text-success-400 mb-2">95%</div>
                    <div className="text-sm text-dark-400">Accuracy</div>
                  </div>
                  <div className="bg-dark-900 border border-dark-800 rounded-lg p-6">
                    <div className="text-4xl font-bold text-primary-400 mb-2">&lt;200ms</div>
                    <div className="text-sm text-dark-400">Latency</div>
                  </div>
                  <div className="bg-dark-900 border border-dark-800 rounded-lg p-6">
                    <div className="text-4xl font-bold text-accent-400 mb-2">100%</div>
                    <div className="text-sm text-dark-400">Uptime</div>
                  </div>
                  <div className="bg-dark-900 border border-dark-800 rounded-lg p-6">
                    <div className="text-4xl font-bold text-violet-400 mb-2">$4.5K+</div>
                    <div className="text-sm text-dark-400">Savings</div>
                  </div>
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
