const videoCategories = [
  {
    category: 'From-Scratch Implementations',
    description: 'Watch me build AI systems from the ground up',
    videos: [
      {
        title: 'Building Backpropagation from Scratch',
        duration: '12:34',
        views: '2.3K',
        description: 'Understanding and implementing automatic differentiation',
        topics: ['Autograd', 'Chain Rule', 'Computational Graphs'],
        thumbnail: 'backprop.png',
        link: '#',
      },
      {
        title: 'Multi-Head Attention Explained & Coded',
        duration: '18:42',
        views: '5.1K',
        description: 'Why transformers use multiple attention heads',
        topics: ['Attention', 'Transformers', 'PyTorch'],
        thumbnail: 'attention.png',
        link: '#',
      },
      {
        title: 'Training a Mini GPT: Complete Walkthrough',
        duration: '45:23',
        views: '8.7K',
        description: 'End-to-end training of a decoder-only transformer',
        topics: ['GPT', 'Language Models', 'Training'],
        thumbnail: 'mini-gpt.png',
        link: '#',
      },
      {
        title: 'Implementing LoRA from Scratch',
        duration: '22:15',
        views: '4.2K',
        description: 'Low-rank adaptation for efficient fine-tuning',
        topics: ['LoRA', 'Fine-tuning', 'Implementation'],
        thumbnail: 'lora.png',
        link: '#',
      },
    ],
  },
  {
    category: 'Concept Deep-Dives',
    description: 'Understanding the "why" behind AI techniques',
    videos: [
      {
        title: 'Why Attention Actually Works',
        duration: '8:15',
        views: '4.2K',
        description: 'The intuition behind scaled dot-product attention',
        topics: ['Attention', 'Theory', 'Intuition'],
        thumbnail: 'why-attention.png',
        link: '#',
      },
      {
        title: 'Understanding Positional Encoding',
        duration: '10:30',
        views: '3.5K',
        description: 'How transformers know about sequence order',
        topics: ['Positional Encoding', 'Transformers', 'Theory'],
        thumbnail: 'pos-encoding.png',
        link: '#',
      },
      {
        title: 'Flash Attention: Memory Efficiency Explained',
        duration: '11:20',
        views: '6.4K',
        description: 'Understanding memory-efficient attention computation',
        topics: ['Flash Attention', 'Optimization', 'Memory'],
        thumbnail: 'flash-attention.png',
        link: '#',
      },
      {
        title: 'Training Dynamics of Transformers',
        duration: '14:50',
        views: '2.8K',
        description: 'What happens during training and why',
        topics: ['Training', 'Optimization', 'Analysis'],
        thumbnail: 'training-dynamics.png',
        link: '#',
      },
    ],
  },
  {
    category: 'Project Walkthroughs',
    description: 'Behind-the-scenes of my projects',
    videos: [
      {
        title: 'Building a RAG System: Design Decisions',
        duration: '22:15',
        views: '7.9K',
        description: 'Architecture choices and trade-offs in production RAG',
        topics: ['RAG', 'Architecture', 'Production'],
        thumbnail: 'rag-design.png',
        link: '#',
      },
      {
        title: 'Attention Visualizer: Making AI Interpretable',
        duration: '16:45',
        views: '5.6K',
        description: 'Creating interactive visualizations for transformers',
        topics: ['Visualization', 'D3.js', 'Interpretability'],
        thumbnail: 'attention-viz.png',
        link: '#',
      },
      {
        title: 'Fine-tuning Llama with LoRA',
        duration: '28:30',
        views: '9.2K',
        description: 'Complete walkthrough of efficient fine-tuning',
        topics: ['Fine-tuning', 'Llama', 'LoRA'],
        thumbnail: 'llama-lora.png',
        link: '#',
      },
    ],
  },
  {
    category: 'Quick Tips & Insights',
    description: 'Short, focused lessons (2-5 mins)',
    videos: [
      {
        title: 'KV Cache: 10x Faster Inference',
        duration: '3:45',
        views: '12K',
        description: 'One trick to dramatically speed up generation',
        topics: ['Optimization', 'Inference', 'Quick Tip'],
        thumbnail: 'kv-cache.png',
        link: '#',
      },
      {
        title: 'Common Transformer Mistakes',
        duration: '4:20',
        views: '8.3K',
        description: 'Bugs I\'ve made so you don\'t have to',
        topics: ['Debugging', 'Tips', 'Transformers'],
        thumbnail: 'mistakes.png',
        link: '#',
      },
      {
        title: 'Choosing the Right Positional Encoding',
        duration: '5:10',
        views: '6.7K',
        description: 'When to use sinusoidal vs learned vs RoPE',
        topics: ['Positional Encoding', 'Design Choices'],
        thumbnail: 'choosing-pos.png',
        link: '#',
      },
      {
        title: 'Gradient Clipping: Why It Matters',
        duration: '3:25',
        views: '5.4K',
        description: 'Preventing exploding gradients in training',
        topics: ['Training', 'Optimization', 'Quick Tip'],
        thumbnail: 'grad-clip.png',
        link: '#',
      },
      {
        title: 'Layer Norm vs Batch Norm',
        duration: '4:15',
        views: '7.1K',
        description: 'Why transformers use layer normalization',
        topics: ['Normalization', 'Architecture', 'Quick Tip'],
        thumbnail: 'layer-norm.png',
        link: '#',
      },
    ],
  },
];

export default function Videos() {
  return (
    <div className="min-h-screen">
      {/* Header */}
      <section className="section-container pt-32">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="gradient-text">Videos</span>
          </h1>
          <p className="text-xl text-dark-300">
            Engineer-first walkthroughs showing real code, real experiments, and real insights
          </p>
        </div>
      </section>

      {/* What makes videos unique */}
      <section className="section-container bg-dark-900/50">
        <div className="max-w-4xl mx-auto">
          <div className="bg-dark-800 border border-accent-500/30 rounded-lg p-8">
            <h2 className="text-2xl font-semibold mb-6 text-center">What Makes These Videos Different</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex gap-3">
                <div className="text-accent-400 text-2xl">🎯</div>
                <div>
                  <h4 className="font-semibold mb-1">Code-First</h4>
                  <p className="text-sm text-dark-400">Watch actual implementation, not just slides</p>
                </div>
              </div>
              <div className="flex gap-3">
                <div className="text-accent-400 text-2xl">🔬</div>
                <div>
                  <h4 className="font-semibold mb-1">Show Experiments</h4>
                  <p className="text-sm text-dark-400">See what works, what fails, and why</p>
                </div>
              </div>
              <div className="flex gap-3">
                <div className="text-accent-400 text-2xl">🐛</div>
                <div>
                  <h4 className="font-semibold mb-1">Include Mistakes</h4>
                  <p className="text-sm text-dark-400">Real debugging, not perfect demos</p>
                </div>
              </div>
              <div className="flex gap-3">
                <div className="text-accent-400 text-2xl">⚡</div>
                <div>
                  <h4 className="font-semibold mb-1">Learner POV</h4>
                  <p className="text-sm text-dark-400">Explain what confused me and how I got it</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Video Categories */}
      <section className="section-container">
        <div className="max-w-6xl mx-auto space-y-16">
          {videoCategories.map((category, catIdx) => (
            <div key={catIdx}>
              <div className="mb-8">
                <h2 className="text-3xl font-bold mb-2">{category.category}</h2>
                <p className="text-dark-400">{category.description}</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {category.videos.map((video, videoIdx) => (
                  <a
                    key={videoIdx}
                    href={video.link}
                    className="card hover:scale-[1.03] cursor-pointer group"
                  >
                    {/* Video thumbnail placeholder */}
                    <div className="bg-gradient-to-br from-primary-500/20 to-accent-500/20 rounded-lg h-40 mb-4 flex items-center justify-center border border-primary-500/30 relative overflow-hidden">
                      <div className="absolute inset-0 bg-dark-900/50 group-hover:bg-dark-900/30 transition-colors"></div>
                      <svg className="w-16 h-16 text-white/80 relative z-10" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z"/>
                      </svg>
                      <div className="absolute bottom-2 right-2 bg-dark-900/90 px-2 py-1 rounded text-xs font-semibold">
                        {video.duration}
                      </div>
                    </div>

                    {/* Video info */}
                    <h3 className="font-semibold mb-2 group-hover:text-primary-400 transition-colors">
                      {video.title}
                    </h3>
                    <p className="text-sm text-dark-400 mb-3">{video.description}</p>

                    {/* Topics */}
                    <div className="flex flex-wrap gap-1 mb-3">
                      {video.topics.map((topic, topicIdx) => (
                        <span
                          key={topicIdx}
                          className="px-2 py-0.5 bg-dark-900 border border-dark-700 rounded text-xs text-dark-400"
                        >
                          {topic}
                        </span>
                      ))}
                    </div>

                    {/* Views */}
                    <div className="flex items-center gap-2 text-xs text-dark-500">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                      </svg>
                      <span>{video.views} views</span>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Video Strategy */}
      <section className="section-container bg-dark-900/50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">
            <span className="gradient-text">My Video Strategy</span>
          </h2>

          <div className="bg-gradient-to-r from-primary-500/10 to-accent-500/10 border border-primary-500/30 rounded-lg p-8">
            <h3 className="text-xl font-semibold mb-4 text-center">I Don't Try to Compete with Big Creators</h3>
            <p className="text-dark-300 mb-6 text-center">
              Instead, I focus on what makes my perspective unique:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-3xl mb-2">📽️</div>
                <h4 className="font-semibold mb-2">Engineer-First</h4>
                <p className="text-sm text-dark-400">Real code, real experiments, real debugging</p>
              </div>
              <div className="text-center">
                <div className="text-3xl mb-2">🧪</div>
                <h4 className="font-semibold mb-2">Show Process</h4>
                <p className="text-sm text-dark-400">Iterations, mistakes, and learnings</p>
              </div>
              <div className="text-center">
                <div className="text-3xl mb-2">🎓</div>
                <h4 className="font-semibold mb-2">Learner POV</h4>
                <p className="text-sm text-dark-400">What confused me and how I understood it</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="section-container">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary-400 mb-1">20+</div>
              <div className="text-sm text-dark-500">Videos</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-accent-400 mb-1">50K+</div>
              <div className="text-sm text-dark-500">Total Views</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary-400 mb-1">15min</div>
              <div className="text-sm text-dark-500">Avg Duration</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-accent-400 mb-1">100%</div>
              <div className="text-sm text-dark-500">With Code</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-container bg-dark-900/50">
        <div className="max-w-3xl mx-auto text-center">
          <div className="bg-gradient-to-r from-primary-500/10 to-accent-500/10 border border-primary-500/30 rounded-lg p-12">
            <h2 className="text-3xl font-bold mb-4">Subscribe for New Videos</h2>
            <p className="text-dark-300 mb-8">
              I publish new technical deep-dives and implementation tutorials every week
            </p>
            <a
              href="https://youtube.com"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary inline-flex items-center gap-2"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
              </svg>
              Watch on YouTube
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
