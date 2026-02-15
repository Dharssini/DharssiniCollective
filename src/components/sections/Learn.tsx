const foundations = [
  {
    title: 'Linear Algebra for Deep Learning',
    description: 'Matrix operations, vectorization, and the mathematical foundation of neural networks',
    topics: ['Matrix Multiplication', 'Eigenvalues & Eigenvectors', 'SVD', 'Gradient Computation'],
    icon: '📐',
    color: 'primary',
    resources: [
      { type: 'notebook', title: 'Interactive Matrix Operations' },
      { type: 'video', title: 'Why Linear Algebra Matters for AI' },
      { type: 'code', title: 'NumPy Implementation from Scratch' },
    ],
  },
  {
    title: 'Calculus & Optimization',
    description: 'Derivatives, chain rule, and gradient descent — the engine of learning',
    topics: ['Partial Derivatives', 'Chain Rule', 'Gradient Descent', 'Backpropagation Math'],
    icon: '∫',
    color: 'accent',
    resources: [
      { type: 'notebook', title: 'Visualizing Gradients' },
      { type: 'video', title: 'Backprop Intuition' },
      { type: 'code', title: 'Autograd from Scratch' },
    ],
  },
  {
    title: 'Neural Network Fundamentals',
    description: 'From perceptrons to deep networks — understanding the building blocks',
    topics: ['Perceptron', 'Activation Functions', 'Loss Functions', 'Weight Initialization'],
    icon: '🧠',
    color: 'primary',
    resources: [
      { type: 'notebook', title: 'MLP from Scratch' },
      { type: 'video', title: 'Why Deep Networks Work' },
      { type: 'code', title: 'Custom Training Loop' },
    ],
  },
  {
    title: 'PyTorch Internals',
    description: 'Deep dive into PyTorch architecture, autograd, and computational graphs',
    topics: ['Tensor Operations', 'Autograd Engine', 'Custom Layers', 'Training Loops'],
    icon: '🔥',
    color: 'accent',
    resources: [
      { type: 'notebook', title: 'Building Custom Layers' },
      { type: 'video', title: 'PyTorch Under the Hood' },
      { type: 'code', title: 'Recreating torch.nn' },
    ],
  },
];

const iconMap: Record<string, React.ReactElement> = {
  notebook: (
    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
    </svg>
  ),
  video: (
    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  ),
  code: (
    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
    </svg>
  ),
};

export default function Learn() {
  return (
    <section id="learn" className="section-container bg-dark-900/50">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">
          <span className="gradient-text">Foundations</span>
        </h2>
        <p className="text-xl text-dark-300 max-w-3xl mx-auto">
          Learn the fundamentals from an engineer's perspective — focused on what matters for building real AI systems
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {foundations.map((foundation, idx) => (
          <div
            key={idx}
            className="card group hover:scale-[1.02] cursor-pointer"
          >
            {/* Header */}
            <div className="flex items-start gap-4 mb-4">
              <div className="text-5xl">{foundation.icon}</div>
              <div className="flex-1">
                <h3 className="text-2xl font-semibold mb-2 group-hover:text-primary-400 transition-colors">
                  {foundation.title}
                </h3>
                <p className="text-dark-400">{foundation.description}</p>
              </div>
            </div>

            {/* Topics */}
            <div className="mb-4">
              <h4 className="text-sm font-semibold text-dark-300 mb-2">Key Topics:</h4>
              <div className="flex flex-wrap gap-2">
                {foundation.topics.map((topic, topicIdx) => (
                  <span
                    key={topicIdx}
                    className={`px-3 py-1 text-xs rounded-full ${
                      foundation.color === 'primary'
                        ? 'bg-primary-500/10 text-primary-400 border border-primary-500/20'
                        : 'bg-accent-500/10 text-accent-400 border border-accent-500/20'
                    }`}
                  >
                    {topic}
                  </span>
                ))}
              </div>
            </div>

            {/* Resources */}
            <div className="border-t border-dark-700 pt-4">
              <h4 className="text-sm font-semibold text-dark-300 mb-3">Resources:</h4>
              <div className="space-y-2">
                {foundation.resources.map((resource, resIdx) => (
                  <div
                    key={resIdx}
                    className="flex items-center gap-2 text-sm text-dark-400 hover:text-primary-400 transition-colors"
                  >
                    {iconMap[resource.type]}
                    <span>{resource.title}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Learning Philosophy */}
      <div className="mt-16 max-w-4xl mx-auto">
        <div className="bg-gradient-to-r from-primary-500/10 to-accent-500/10 border border-primary-500/20 rounded-lg p-8">
          <h3 className="text-2xl font-semibold mb-4 text-center">My Learning Philosophy</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div>
              <div className="text-3xl mb-2">🎯</div>
              <h4 className="font-semibold mb-2">Focused</h4>
              <p className="text-sm text-dark-400">Only concepts that matter for real AI engineering</p>
            </div>
            <div>
              <div className="text-3xl mb-2">💡</div>
              <h4 className="font-semibold mb-2">Intuitive</h4>
              <p className="text-sm text-dark-400">Why things work, not just how to use them</p>
            </div>
            <div>
              <div className="text-3xl mb-2">⚡</div>
              <h4 className="font-semibold mb-2">Practical</h4>
              <p className="text-sm text-dark-400">Every concept connects to real implementations</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
