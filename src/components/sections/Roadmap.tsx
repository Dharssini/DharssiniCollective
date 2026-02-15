const roadmapPhases = [
  {
    phase: 1,
    title: 'Mathematical Foundation',
    duration: '2-3 weeks',
    description: 'Build the mathematical intuition needed for deep learning',
    modules: [
      {
        name: 'Linear Algebra Essentials',
        topics: ['Matrix operations', 'Eigenvalues', 'SVD', 'Vectorization'],
        outcome: 'Understand why neural networks are just matrix multiplications',
        resources: ['Interactive notebook', 'Video series', 'Practice problems'],
      },
      {
        name: 'Calculus for Optimization',
        topics: ['Derivatives', 'Chain rule', 'Gradients', 'Partial derivatives'],
        outcome: 'Master the math behind backpropagation',
        resources: ['Gradient visualizer', 'Manual backprop exercises'],
      },
    ],
  },
  {
    phase: 2,
    title: 'Neural Network Fundamentals',
    duration: '3-4 weeks',
    description: 'Build neural networks from scratch to understand their internals',
    modules: [
      {
        name: 'Building Blocks',
        topics: ['Perceptrons', 'Activation functions', 'Loss functions', 'Optimizers'],
        outcome: 'Code a complete neural network in NumPy',
        resources: ['From-scratch MLP', 'Activation function comparisons'],
      },
      {
        name: 'Backpropagation Deep-Dive',
        topics: ['Computational graphs', 'Forward pass', 'Backward pass', 'Autograd'],
        outcome: 'Build your own automatic differentiation engine',
        resources: ['Micrograd-style implementation', 'Gradient checking'],
      },
      {
        name: 'PyTorch Fundamentals',
        topics: ['Tensors', 'Autograd', 'nn.Module', 'Training loops'],
        outcome: 'Recreate PyTorch components from scratch',
        resources: ['Custom layer implementations', 'Training from first principles'],
      },
    ],
  },
  {
    phase: 3,
    title: 'Attention Mechanisms',
    duration: '4-5 weeks',
    description: 'Master the core innovation behind modern NLP',
    modules: [
      {
        name: 'Attention Basics',
        topics: ['Query-Key-Value', 'Scaled dot-product', 'Softmax attention'],
        outcome: 'Implement attention from scratch and visualize it',
        resources: ['NumPy implementation', 'Attention visualizer', 'Interactive demo'],
      },
      {
        name: 'Multi-Head Attention',
        topics: ['Parallel attention heads', 'Linear projections', 'Concatenation'],
        outcome: 'Understand why multiple heads learn different patterns',
        resources: ['Head analysis tool', 'Pattern visualization'],
      },
      {
        name: 'Positional Encoding',
        topics: ['Sinusoidal encoding', 'Learned positions', 'RoPE'],
        outcome: 'Compare different position encoding strategies',
        resources: ['Encoding comparator', 'Extrapolation tests'],
      },
    ],
  },
  {
    phase: 4,
    title: 'Transformer Architecture',
    duration: '5-6 weeks',
    description: 'Build complete transformers and understand every component',
    modules: [
      {
        name: 'Encoder Architecture',
        topics: ['Self-attention', 'Feed-forward networks', 'Layer norm', 'Residual connections'],
        outcome: 'Build a BERT-style encoder from scratch',
        resources: ['Full implementation', 'Layer-by-layer breakdown'],
      },
      {
        name: 'Decoder Architecture',
        topics: ['Masked attention', 'Cross-attention', 'Autoregressive generation'],
        outcome: 'Build a GPT-style decoder from scratch',
        resources: ['Generation demo', 'Causal masking visualization'],
      },
      {
        name: 'Training & Optimization',
        topics: ['Learning rate schedules', 'Warmup', 'Gradient clipping', 'Mixed precision'],
        outcome: 'Train a small transformer model',
        resources: ['Training notebook', 'Hyperparameter guide'],
      },
    ],
  },
  {
    phase: 5,
    title: 'Large Language Models',
    duration: '6-8 weeks',
    description: 'Work with pretrained models and modern techniques',
    modules: [
      {
        name: 'Working with Pretrained LLMs',
        topics: ['Model loading', 'Inference', 'Prompt engineering', 'Generation strategies'],
        outcome: 'Effectively use GPT, Llama, and other LLMs',
        resources: ['Model comparison', 'Prompting guide'],
      },
      {
        name: 'Fine-tuning Techniques',
        topics: ['Full fine-tuning', 'LoRA', 'QLoRA', 'Instruction tuning'],
        outcome: 'Fine-tune Llama on custom data',
        resources: ['LoRA implementation', 'Dataset preparation guide'],
      },
      {
        name: 'Advanced Optimization',
        topics: ['Flash Attention', 'KV caching', 'Quantization', 'Model compression'],
        outcome: 'Optimize models for production deployment',
        resources: ['Optimization comparison', 'Benchmarking suite'],
      },
    ],
  },
  {
    phase: 6,
    title: 'Applied AI Engineering',
    duration: 'Ongoing',
    description: 'Build production systems using LLMs',
    modules: [
      {
        name: 'RAG Systems',
        topics: ['Vector databases', 'Embeddings', 'Retrieval', 'Evaluation'],
        outcome: 'Build a production-grade RAG system',
        resources: ['Complete RAG project', 'Evaluation framework'],
      },
      {
        name: 'AI Agents',
        topics: ['ReAct pattern', 'Tool use', 'Function calling', 'Chain-of-thought'],
        outcome: 'Build an autonomous agent',
        resources: ['Agent framework', 'Tool integration examples'],
      },
      {
        name: 'Deployment & Monitoring',
        topics: ['API design', 'Scaling', 'Monitoring', 'Cost optimization'],
        outcome: 'Deploy and maintain LLM applications',
        resources: ['Deployment guide', 'Production best practices'],
      },
    ],
  },
];

export default function Roadmap() {
  return (
    <section id="roadmap" className="section-container bg-dark-900/50">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">
          <span className="gradient-text">Learning Roadmap</span>
        </h2>
        <p className="text-xl text-dark-300 max-w-3xl mx-auto">
          My journey from fundamentals to LLM engineering — a path you can follow too
        </p>
      </div>

      {/* Roadmap overview */}
      <div className="max-w-4xl mx-auto mb-16">
        <div className="bg-gradient-to-r from-primary-500/10 to-accent-500/10 border border-primary-500/30 rounded-lg p-8">
          <h3 className="text-xl font-semibold mb-4 text-center">This Roadmap Is:</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-3xl mb-2">🎯</div>
              <h4 className="font-semibold mb-2">Focused</h4>
              <p className="text-sm text-dark-400">Only what you need for real AI work</p>
            </div>
            <div className="text-center">
              <div className="text-3xl mb-2">🛠️</div>
              <h4 className="font-semibold mb-2">Hands-On</h4>
              <p className="text-sm text-dark-400">Build everything from scratch first</p>
            </div>
            <div className="text-center">
              <div className="text-3xl mb-2">📈</div>
              <h4 className="font-semibold mb-2">Progressive</h4>
              <p className="text-sm text-dark-400">Each phase builds on the previous</p>
            </div>
          </div>
        </div>
      </div>

      {/* Roadmap phases */}
      <div className="relative">
        {/* Connecting line */}
        <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary-500 via-accent-500 to-primary-500 hidden md:block"></div>

        <div className="space-y-12">
          {roadmapPhases.map((phase) => (
            <div key={phase.phase} className="relative">
              {/* Phase number indicator */}
              <div className="absolute left-0 w-16 h-16 bg-dark-900 border-2 border-primary-500 rounded-full flex items-center justify-center font-bold text-xl hidden md:flex">
                {phase.phase}
              </div>

              <div className="md:ml-24 card">
                {/* Phase header */}
                <div className="mb-6">
                  <div className="flex items-start justify-between mb-2">
                    <h3 className="text-2xl font-bold">
                      Phase {phase.phase}: {phase.title}
                    </h3>
                    <span className="px-3 py-1 bg-primary-500/20 text-primary-400 text-sm rounded-full whitespace-nowrap">
                      {phase.duration}
                    </span>
                  </div>
                  <p className="text-dark-400">{phase.description}</p>
                </div>

                {/* Modules */}
                <div className="space-y-4">
                  {phase.modules.map((module, moduleIdx) => (
                    <div
                      key={moduleIdx}
                      className="bg-dark-900/50 rounded-lg p-5 border border-dark-700"
                    >
                      <h4 className="font-semibold mb-3 flex items-center gap-2">
                        <span className="text-accent-400">▸</span>
                        {module.name}
                      </h4>

                      {/* Topics */}
                      <div className="mb-3">
                        <div className="flex flex-wrap gap-2">
                          {module.topics.map((topic, topicIdx) => (
                            <span
                              key={topicIdx}
                              className="px-2 py-1 bg-dark-800 border border-dark-700 rounded text-xs text-dark-400"
                            >
                              {topic}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Outcome */}
                      <div className="mb-3 flex gap-2">
                        <span className="text-primary-400 text-sm mt-0.5">🎯</span>
                        <p className="text-sm text-dark-300">
                          <span className="font-medium">Outcome:</span> {module.outcome}
                        </p>
                      </div>

                      {/* Resources */}
                      <div className="flex gap-2 flex-wrap text-xs">
                        {module.resources.map((resource, resIdx) => (
                          <span
                            key={resIdx}
                            className="px-2 py-1 bg-primary-500/10 text-primary-400 rounded border border-primary-500/20"
                          >
                            {resource}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Download roadmap CTA */}
      <div className="mt-16 text-center">
        <div className="max-w-2xl mx-auto bg-dark-800 border border-primary-500/30 rounded-lg p-8">
          <h3 className="text-2xl font-semibold mb-4">Want to Follow This Path?</h3>
          <p className="text-dark-400 mb-6">
            Download the complete roadmap with resources, timelines, and project ideas
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="btn-primary">
              Download Roadmap PDF
            </button>
            <button className="btn-secondary">
              Get Weekly Study Plan
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
