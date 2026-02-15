const publications = [
  {
    title: 'Efficient Sparse Attention for Long-Context Transformers',
    authors: 'Your Name, Collaborator A., Collaborator B.',
    venue: 'NeurIPS 2024',
    year: 2024,
    status: 'Published',
    abstract: 'We propose a novel sparse attention mechanism that achieves O(n log n) complexity while maintaining performance on long-context tasks. Our approach combines learned sparsity patterns with local attention windows.',
    links: {
      paper: '#',
      code: '#',
      arxiv: '#',
    },
    tags: ['Attention', 'Efficiency', 'Transformers'],
    citations: 45,
  },
  {
    title: 'Understanding Training Dynamics in Large Language Models',
    authors: 'Your Name, Research Team',
    venue: 'ICML 2024',
    year: 2024,
    status: 'Published',
    abstract: 'An empirical study of training dynamics in LLMs across different scales. We analyze loss landscape geometry, gradient flow, and identify critical periods during training.',
    links: {
      paper: '#',
      code: '#',
      arxiv: '#',
    },
    tags: ['Training', 'Optimization', 'LLMs'],
    citations: 78,
  },
  {
    title: 'Mechanistic Analysis of Attention Head Specialization',
    authors: 'Your Name, Co-author A.',
    venue: 'ICLR 2024',
    year: 2024,
    status: 'Published',
    abstract: 'We investigate how different attention heads in transformers specialize for different linguistic and syntactic tasks. Includes tools for visualizing and analyzing head behavior.',
    links: {
      paper: '#',
      code: '#',
      arxiv: '#',
    },
    tags: ['Interpretability', 'Attention', 'Analysis'],
    citations: 62,
  },
  {
    title: 'Adaptive Learning Rate Schedules for Transformer Training',
    authors: 'Your Name, et al.',
    venue: 'ACL 2023',
    year: 2023,
    status: 'Published',
    abstract: 'Novel adaptive learning rate schedule that adjusts based on loss landscape curvature. Shows improved convergence speed and final performance across multiple benchmarks.',
    links: {
      paper: '#',
      code: '#',
      arxiv: '#',
    },
    tags: ['Optimization', 'Training', 'Learning Rate'],
    citations: 91,
  },
  {
    title: 'Scaling Laws for Sparse Attention Mechanisms',
    authors: 'Your Name, Research Group',
    venue: 'Under Review',
    year: 2024,
    status: 'Under Review',
    abstract: 'Empirical investigation of how sparse attention mechanisms scale with model size, context length, and compute budget. Derives predictive scaling laws.',
    links: {
      arxiv: '#',
    },
    tags: ['Scaling', 'Attention', 'Empirical'],
    citations: 0,
  },
];

const experiments = [
  {
    title: 'Linear Attention Variants Comparison',
    description: 'Comprehensive comparison of 12 different linear attention mechanisms across multiple tasks and model sizes.',
    status: 'Completed',
    findings: [
      'Performer attention shows best trade-off for sequences < 4096',
      'Linformer excels on classification tasks',
      'Custom hybrid approach achieves 15% speed improvement',
    ],
    metrics: {
      'Models Trained': '36',
      'GPU Hours': '1,200',
      'Datasets': '8',
    },
    links: {
      notebook: '#',
      results: '#',
      code: '#',
    },
  },
  {
    title: 'Training Stability Analysis',
    description: 'Investigating what causes training instability in large transformers and testing mitigation strategies.',
    status: 'Ongoing',
    findings: [
      'Gradient norm spikes correlate with attention entropy changes',
      'Pre-LayerNorm improves stability by 40%',
      'Warmup critical for models > 1B parameters',
    ],
    metrics: {
      'Runs Analyzed': '150+',
      'Checkpoints': '500+',
      'Model Sizes': '7',
    },
    links: {
      dashboard: '#',
      interim: '#',
    },
  },
  {
    title: 'Attention Pattern Evolution',
    description: 'Tracking how attention patterns change throughout training and their relationship to model capabilities.',
    status: 'Completed',
    findings: [
      'Heads specialize within first 10% of training',
      'Pattern complexity increases with task difficulty',
      'Certain patterns predict model performance',
    ],
    metrics: {
      'Training Runs': '24',
      'Snapshots': '2,400',
      'Heads Analyzed': '288',
    },
    links: {
      visualization: '#',
      paper: '#',
    },
  },
];

export default function Research() {
  return (
    <div className="min-h-screen">
      {/* Header */}
      <section className="section-container pt-32">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="gradient-text">Research</span>
          </h1>
          <p className="text-xl text-dark-300">
            Publications, experiments, and contributions to AI research
          </p>
        </div>
      </section>

      {/* Publications */}
      <section id="publications" className="section-container bg-dark-900/50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">
            <span className="gradient-text">Publications</span>
          </h2>

          <div className="space-y-8">
            {publications.map((pub, idx) => (
              <div key={idx} className="card hover:scale-[1.01]">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="text-2xl font-bold">{pub.title}</h3>
                      <span
                        className={`px-3 py-1 text-xs rounded-full ${
                          pub.status === 'Published'
                            ? 'bg-green-500/10 text-green-400 border border-green-500/20'
                            : 'bg-yellow-500/10 text-yellow-400 border border-yellow-500/20'
                        }`}
                      >
                        {pub.status}
                      </span>
                    </div>
                    <p className="text-dark-400 text-sm mb-2">{pub.authors}</p>
                    <p className="text-primary-400 font-medium text-sm">
                      {pub.venue} {pub.year}
                      {pub.citations > 0 && (
                        <span className="text-dark-500 ml-3">• {pub.citations} citations</span>
                      )}
                    </p>
                  </div>
                </div>

                <p className="text-dark-300 mb-4">{pub.abstract}</p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {pub.tags.map((tag, tagIdx) => (
                    <span
                      key={tagIdx}
                      className="px-3 py-1 bg-dark-900 border border-dark-700 rounded-full text-xs"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4 pt-4 border-t border-dark-700">
                  {pub.links.paper && (
                    <a href={pub.links.paper} className="text-sm text-primary-400 hover:text-primary-300 flex items-center gap-1">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                      Paper
                    </a>
                  )}
                  {pub.links.arxiv && (
                    <a href={pub.links.arxiv} className="text-sm text-accent-400 hover:text-accent-300 flex items-center gap-1">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                      arXiv
                    </a>
                  )}
                  {pub.links.code && (
                    <a href={pub.links.code} className="text-sm text-primary-400 hover:text-primary-300 flex items-center gap-1">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                      </svg>
                      Code
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experiments */}
      <section id="experiments" className="section-container">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">
            <span className="gradient-text">Research Experiments</span>
          </h2>

          <div className="grid grid-cols-1 gap-8">
            {experiments.map((exp, idx) => (
              <div key={idx} className="card">
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-2xl font-bold flex-1">{exp.title}</h3>
                  <span
                    className={`px-3 py-1 text-xs rounded-full whitespace-nowrap ${
                      exp.status === 'Completed'
                        ? 'bg-green-500/10 text-green-400 border border-green-500/20'
                        : 'bg-blue-500/10 text-blue-400 border border-blue-500/20'
                    }`}
                  >
                    {exp.status}
                  </span>
                </div>

                <p className="text-dark-300 mb-6">{exp.description}</p>

                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-dark-300 mb-3">Key Findings:</h4>
                  <ul className="space-y-2">
                    {exp.findings.map((finding, findingIdx) => (
                      <li key={findingIdx} className="flex gap-2 text-sm text-dark-400">
                        <span className="text-primary-400 mt-0.5">→</span>
                        <span>{finding}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-dark-300 mb-3">Metrics:</h4>
                  <div className="grid grid-cols-3 gap-4">
                    {Object.entries(exp.metrics).map(([key, value], metricIdx) => (
                      <div key={metricIdx} className="bg-dark-900/50 rounded-lg p-3 text-center">
                        <div className="text-xl font-bold text-primary-400">{value}</div>
                        <div className="text-xs text-dark-500">{key}</div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex gap-4 pt-4 border-t border-dark-700">
                  {Object.entries(exp.links).map(([key, value], linkIdx) => (
                    <a
                      key={linkIdx}
                      href={value}
                      className="text-sm text-primary-400 hover:text-primary-300 capitalize"
                    >
                      {key} →
                    </a>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Research Interests */}
      <section className="section-container bg-dark-900/50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">
            <span className="gradient-text">Research Interests</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-dark-800 border border-dark-700 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-3 text-primary-400">Current</h3>
              <ul className="space-y-2 text-dark-300">
                <li className="flex items-start gap-2">
                  <span className="text-primary-400 mt-1">•</span>
                  <span>Efficient attention mechanisms for long contexts</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary-400 mt-1">•</span>
                  <span>Training dynamics and optimization in LLMs</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary-400 mt-1">•</span>
                  <span>Mechanistic interpretability of transformers</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary-400 mt-1">•</span>
                  <span>Scaling laws and compute efficiency</span>
                </li>
              </ul>
            </div>

            <div className="bg-dark-800 border border-dark-700 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-3 text-accent-400">Future Directions</h3>
              <ul className="space-y-2 text-dark-300">
                <li className="flex items-start gap-2">
                  <span className="text-accent-400 mt-1">•</span>
                  <span>Multimodal attention mechanisms</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent-400 mt-1">•</span>
                  <span>Neural architecture search for transformers</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent-400 mt-1">•</span>
                  <span>Continual learning in large models</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent-400 mt-1">•</span>
                  <span>Theoretical understanding of emergence</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
