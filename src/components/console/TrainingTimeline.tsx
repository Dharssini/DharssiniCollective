import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const timelineData = [
  {
    year: 2020,
    skill: 3.0,
    phase: 'Foundation',
    event: 'Started M.Sc. in Decision & Computing Science',
  },
  {
    year: 2021,
    skill: 4.5,
    phase: 'Exploration',
    event: 'GFG Leadership, Google Cloud, AI for Assistive Tech',
  },
  {
    year: 2023,
    skill: 6.5,
    phase: 'Specialization',
    event: 'Buckman (Data Science), Samsung PRISM (R&D)',
  },
  {
    year: 2024,
    skill: 8.0,
    phase: 'Production Focus',
    event: 'RNDsoftech ($4.5K savings), Amazon ML School',
  },
  {
    year: 2025,
    skill: 9.5,
    phase: 'Multi-Domain Mastery',
    event: 'Improva + CyberTranscend (7 agents, 80% latency ↓)',
  },
];

export default function TrainingTimeline() {
  return (
    <div className="max-w-6xl mx-auto">
      <div className="mb-12 text-center">
        <h1 className="text-4xl font-bold mb-4">
          <span className="gradient-text">Training Log</span>
        </h1>
        <p className="text-dark-300 font-mono">
          My career as a model training timeline — epochs, losses, and breakthroughs
        </p>
      </div>

      {/* Chart */}
      <div className="bg-dark-900 border border-dark-800 rounded-lg p-8 mb-12">
        <ResponsiveContainer width="100%" height={400}>
          <LineChart data={timelineData}>
            <CartesianGrid strokeDasharray="3 3" stroke="#1e2837" />
            <XAxis
              dataKey="year"
              stroke="#8b95a8"
              style={{ fontSize: '12px', fontFamily: 'monospace' }}
            />
            <YAxis
              label={{ value: 'Skill Level', angle: -90, position: 'insideLeft', fill: '#8b95a8' }}
              stroke="#8b95a8"
              style={{ fontSize: '12px', fontFamily: 'monospace' }}
            />
            <Tooltip
              contentStyle={{
                backgroundColor: '#151a24',
                border: '1px solid #1e2837',
                borderRadius: '8px',
                fontFamily: 'monospace',
                fontSize: '12px',
              }}
            />
            <Line
              type="monotone"
              dataKey="skill"
              stroke="#60a5fa"
              strokeWidth={3}
              dot={{ fill: '#60a5fa', r: 6 }}
              activeDot={{ r: 8 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>

      {/* Timeline Events */}
      <div className="space-y-6">
        <h2 className="text-2xl font-bold mb-6 text-primary-400">Epochs & Milestones</h2>

        {timelineData.map((epoch) => (
          <div
            key={epoch.year}
            className="card border-l-4 border-primary-500 hover:scale-[1.02] transition-transform cursor-pointer"
          >
            <div className="flex items-start justify-between mb-3">
              <div>
                <div className="text-sm font-mono text-primary-400">Epoch {epoch.year}</div>
                <h3 className="text-xl font-bold">{epoch.phase}</h3>
              </div>
              <div className="text-2xl font-mono font-bold text-accent-400">
                {epoch.skill.toFixed(1)}/10
              </div>
            </div>
            <p className="text-dark-300">{epoch.event}</p>
          </div>
        ))}
      </div>

      {/* Metaphorical Phases */}
      <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="card text-center">
          <div className="text-4xl mb-3">📚</div>
          <h3 className="font-bold mb-2">Overfitting Phase</h3>
          <p className="text-sm text-dark-400">
            Deep dives into specific domains — NLP, CV, Data Science
          </p>
        </div>

        <div className="card text-center">
          <div className="text-4xl mb-3">🔄</div>
          <h3 className="font-bold mb-2">Generalization Breakthrough</h3>
          <p className="text-sm text-dark-400">
            Multi-domain projects — connecting the dots across disciplines
          </p>
        </div>

        <div className="card text-center">
          <div className="text-4xl mb-3">⚡</div>
          <h3 className="font-bold mb-2">Regularization Era</h3>
          <p className="text-sm text-dark-400">
            Production focus — shipping systems that matter
          </p>
        </div>
      </div>
    </div>
  );
}
