const transformerTopics = [
  {
    title: 'Attention Mechanism',
    subtitle: 'The foundation of modern NLP',
    description: 'Understanding how models learn to focus on relevant information',
    implementations: [
      { name: 'Scaled Dot-Product Attention', difficulty: 'Beginner', time: '15 min' },
      { name: 'Multi-Head Attention', difficulty: 'Intermediate', time: '30 min' },
      { name: 'Cross-Attention', difficulty: 'Intermediate', time: '25 min' },
    ],
    visualization: 'Attention heatmap explorer',
    project: 'Build an attention visualizer',
    insights: [
      'Why scaling by √d_k prevents gradient vanishing',
      'How multi-head attention captures different relationships',
      'When to use self-attention vs cross-attention',
    ],
  },
  {
    title: 'Positional Encoding',
    subtitle: 'Teaching transformers about order',
    description: 'How transformers understand sequence order without recurrence',
    implementations: [
      { name: 'Sinusoidal Encoding', difficulty: 'Beginner', time: '20 min' },
      { name: 'Learned Positional Embeddings', difficulty: 'Intermediate', time: '25 min' },
      { name: 'Rotary Position Embeddings (RoPE)', difficulty: 'Advanced', time: '45 min' },
    ],
    visualization: 'Position encoding wave patterns',
    project: 'Compare different encoding methods',
    insights: [
      'Why sinusoidal encoding enables extrapolation',
      'Trade-offs between learned and fixed encodings',
      'How RoPE improves length generalization',
    ],
  },
  {
    title: 'Transformer Architecture',
    subtitle: 'Encoder, Decoder, and variants',
    description: 'Building the complete transformer from components',
    implementations: [
      { name: 'Encoder Block', difficulty: 'Intermediate', time: '40 min' },
      { name: 'Decoder Block', difficulty: 'Intermediate', time: '40 min' },
      { name: 'Full Transformer', difficulty: 'Advanced', time: '90 min' },
    ],
    visualization: 'Interactive architecture diagram',
    project: 'Train a translation model',
    insights: [
      'Why layer normalization placement matters',
      'Pre-norm vs post-norm architectures',
      'Understanding encoder-decoder attention',
    ],
  },
  {
    title: 'Training a Mini GPT',
    subtitle: 'Decoder-only language model',
    description: 'Build and train a small GPT-like model from scratch',
    implementations: [
      { name: 'Tokenizer (BPE)', difficulty: 'Intermediate', time: '35 min' },
      { name: 'Decoder-Only Transformer', difficulty: 'Advanced', time: '60 min' },
      { name: 'Training Loop & Generation', difficulty: 'Advanced', time: '50 min' },
    ],
    visualization: 'Token generation flow',
    project: 'Train on custom dataset',
    insights: [
      'Causal masking for autoregressive generation',
      'Temperature and top-k sampling strategies',
      'Why smaller models still demonstrate emergent behaviors',
    ],
  },
  {
    title: 'LLM Fine-tuning',
    subtitle: 'Adapting pretrained models',
    description: 'Efficient fine-tuning with LoRA and instruction tuning',
    implementations: [
      { name: 'Loading Pretrained Models', difficulty: 'Beginner', time: '20 min' },
      { name: 'LoRA Implementation', difficulty: 'Advanced', time: '60 min' },
      { name: 'Instruction Fine-tuning', difficulty: 'Advanced', time: '90 min' },
    ],
    visualization: 'Model behavior before/after',
    project: 'Fine-tune Llama on custom instructions',
    insights: [
      'Why LoRA is parameter-efficient',
      'Choosing rank r for LoRA matrices',
      'Evaluating instruction-following quality',
    ],
  },
  {
    title: 'Advanced Topics',
    subtitle: 'Cutting-edge techniques',
    description: 'Flash Attention, KV caching, and optimization tricks',
    implementations: [
      { name: 'KV Cache for Inference', difficulty: 'Advanced', time: '45 min' },
      { name: 'Grouped Query Attention', difficulty: 'Advanced', time: '50 min' },
      { name: 'Flash Attention Concepts', difficulty: 'Expert', time: '90 min' },
    ],
    visualization: 'Memory usage comparison',
    project: 'Optimize inference speed',
    insights: [
      'Memory-efficient attention computation',
      'Trading compute for memory with Flash Attention',
      'When GQA improves inference throughput',
    ],
  },
];

const difficultyColors = {
  Beginner: 'bg-green-500/10 text-green-400 border-green-500/20',
  Intermediate: 'bg-yellow-500/10 text-yellow-400 border-yellow-500/20',
  Advanced: 'bg-orange-500/10 text-orange-400 border-orange-500/20',
  Expert: 'bg-red-500/10 text-red-400 border-red-500/20',
};

export default function Transformers() {
  return (
    <section id="transformers" className="section-container">
      <div className="text-center mb-16">
        <div className="inline-block px-4 py-2 bg-accent-500/10 border border-accent-500/30 rounded-full mb-4">
          <span className="text-accent-400 font-semibold">My Specialization</span>
        </div>
        <h2 className="text-4xl md:text-5xl font-bold mb-4">
          <span className="gradient-text">Attention & Transformers</span>
        </h2>
        <p className="text-xl text-dark-300 max-w-3xl mx-auto">
          A complete journey from attention mechanisms to training LLMs — with every component implemented from scratch
        </p>
      </div>

      {/* What makes this unique */}
      <div className="max-w-4xl mx-auto mb-16">
        <div className="bg-dark-800 border border-primary-500/30 rounded-lg p-8">
          <h3 className="text-2xl font-semibold mb-6 text-center">What You'll Find Here</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex gap-3">
              <div className="text-primary-400 mt-1">✓</div>
              <div>
                <h4 className="font-semibold mb-1">Conceptual Clarity</h4>
                <p className="text-sm text-dark-400">Why attention works, not just the equations</p>
              </div>
            </div>
            <div className="flex gap-3">
              <div className="text-primary-400 mt-1">✓</div>
              <div>
                <h4 className="font-semibold mb-1">From-Scratch Code</h4>
                <p className="text-sm text-dark-400">NumPy and PyTorch implementations</p>
              </div>
            </div>
            <div className="flex gap-3">
              <div className="text-primary-400 mt-1">✓</div>
              <div>
                <h4 className="font-semibold mb-1">Visual Explanations</h4>
                <p className="text-sm text-dark-400">Interactive attention visualizations</p>
              </div>
            </div>
            <div className="flex gap-3">
              <div className="text-primary-400 mt-1">✓</div>
              <div>
                <h4 className="font-semibold mb-1">Real Insights</h4>
                <p className="text-sm text-dark-400">Design decisions and trade-offs</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Topics */}
      <div className="space-y-8">
        {transformerTopics.map((topic, idx) => (
          <div
            key={idx}
            className="card hover:scale-[1.01] cursor-pointer"
          >
            <div className="flex items-start justify-between mb-4">
              <div>
                <h3 className="text-2xl font-bold mb-1">{topic.title}</h3>
                <p className="text-primary-400 text-sm font-medium">{topic.subtitle}</p>
              </div>
              <span className="text-4xl">0{idx + 1}</span>
            </div>

            <p className="text-dark-300 mb-6">{topic.description}</p>

            {/* Implementations */}
            <div className="mb-6">
              <h4 className="text-sm font-semibold text-dark-300 mb-3">Implementations:</h4>
              <div className="space-y-2">
                {topic.implementations.map((impl, implIdx) => (
                  <div
                    key={implIdx}
                    className="flex items-center justify-between bg-dark-900/50 rounded-lg p-3 hover:bg-dark-900 transition-colors"
                  >
                    <div className="flex items-center gap-3">
                      <svg className="w-5 h-5 text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span className="font-medium">{impl.name}</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="text-xs text-dark-500">{impl.time}</span>
                      <span className={`px-2 py-1 text-xs rounded-full border ${difficultyColors[impl.difficulty as keyof typeof difficultyColors]}`}>
                        {impl.difficulty}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Key Insights */}
            <div className="mb-6">
              <h4 className="text-sm font-semibold text-dark-300 mb-3">Key Insights:</h4>
              <ul className="space-y-2">
                {topic.insights.map((insight, insightIdx) => (
                  <li key={insightIdx} className="flex gap-2 text-sm text-dark-400">
                    <span className="text-accent-400 mt-0.5">→</span>
                    <span>{insight}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Visualization & Project */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4 border-t border-dark-700">
              <div className="flex items-center gap-2 text-sm">
                <svg className="w-5 h-5 text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" />
                </svg>
                <span className="text-dark-400">Visualization: <span className="text-dark-200">{topic.visualization}</span></span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <svg className="w-5 h-5 text-accent-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
                <span className="text-dark-400">Project: <span className="text-dark-200">{topic.project}</span></span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Call to action */}
      <div className="mt-16 text-center">
        <div className="inline-block bg-gradient-to-r from-primary-500/20 to-accent-500/20 border border-primary-500/30 rounded-lg p-8">
          <h3 className="text-2xl font-bold mb-4">This is My Niche</h3>
          <p className="text-dark-300 mb-6 max-w-2xl">
            Recruiters look for depth in specific areas. This comprehensive coverage of transformers and LLMs demonstrates expert-level understanding.
          </p>
          <a href="#projects" className="btn-primary">
            See How I Apply This Knowledge
          </a>
        </div>
      </div>
    </section>
  );
}
