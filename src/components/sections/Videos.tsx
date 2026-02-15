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
      },
      {
        title: 'Multi-Head Attention Explained & Coded',
        duration: '18:42',
        views: '5.1K',
        description: 'Why transformers use multiple attention heads',
        topics: ['Attention', 'Transformers', 'PyTorch'],
      },
      {
        title: 'Training a Mini GPT: Complete Walkthrough',
        duration: '45:23',
        views: '8.7K',
        description: 'End-to-end training of a decoder-only transformer',
        topics: ['GPT', 'Language Models', 'Training'],
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
      },
      {
        title: 'LoRA: Mathematics and Implementation',
        duration: '15:30',
        views: '3.8K',
        description: 'How LoRA achieves parameter-efficient fine-tuning',
        topics: ['LoRA', 'Fine-tuning', 'Math'],
      },
      {
        title: 'Flash Attention: Memory Efficiency Explained',
        duration: '11:20',
        views: '6.4K',
        description: 'Understanding memory-efficient attention computation',
        topics: ['Flash Attention', 'Optimization', 'Memory'],
      },
    ],
  },
  {
    category: 'Project Breakdowns',
    description: 'Behind-the-scenes of my projects',
    videos: [
      {
        title: 'Building a RAG System: Design Decisions',
        duration: '22:15',
        views: '7.9K',
        description: 'Architecture choices and trade-offs in production RAG',
        topics: ['RAG', 'Architecture', 'Production'],
      },
      {
        title: 'Attention Visualizer: Making AI Interpretable',
        duration: '16:45',
        views: '5.6K',
        description: 'Creating interactive visualizations for transformers',
        topics: ['Visualization', 'D3.js', 'Interpretability'],
      },
      {
        title: 'LLM Agent: From Idea to Deployment',
        duration: '28:30',
        views: '9.2K',
        description: 'Building an autonomous agent with tool use',
        topics: ['Agents', 'LLMs', 'Deployment'],
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
      },
      {
        title: 'Common Transformer Mistakes',
        duration: '4:20',
        views: '8.3K',
        description: 'Bugs I\'ve made so you don\'t have to',
        topics: ['Debugging', 'Tips', 'Transformers'],
      },
      {
        title: 'Choosing the Right Positional Encoding',
        duration: '5:10',
        views: '6.7K',
        description: 'When to use sinusoidal vs learned vs RoPE',
        topics: ['Positional Encoding', 'Design Choices'],
      },
    ],
  },
];

export default function Videos() {
  return (
    <section id="videos" className="section-container">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">
          <span className="gradient-text">Video Content</span>
        </h2>
        <p className="text-xl text-dark-300 max-w-3xl mx-auto">
          Engineer-first walkthroughs showing real code, real experiments, and real insights
        </p>
      </div>

      {/* What makes your videos unique */}
      <div className="max-w-4xl mx-auto mb-16">
        <div className="bg-dark-800 border border-accent-500/30 rounded-lg p-8">
          <h3 className="text-2xl font-semibold mb-6 text-center">What Makes These Videos Different</h3>
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

      {/* Video categories */}
      <div className="space-y-12">
        {videoCategories.map((category, catIdx) => (
          <div key={catIdx}>
            <div className="mb-6">
              <h3 className="text-2xl font-bold mb-2">{category.category}</h3>
              <p className="text-dark-400">{category.description}</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {category.videos.map((video, videoIdx) => (
                <div
                  key={videoIdx}
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
                  <h4 className="font-semibold mb-2 group-hover:text-primary-400 transition-colors">
                    {video.title}
                  </h4>
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
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Video strategy callout */}
      <div className="mt-16 max-w-4xl mx-auto">
        <div className="bg-gradient-to-r from-primary-500/10 to-accent-500/10 border border-primary-500/30 rounded-lg p-8">
          <h3 className="text-xl font-semibold mb-4 text-center">My Video Strategy</h3>
          <p className="text-dark-300 mb-4 text-center">
            I don't try to compete with big creators. Instead, I focus on:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
            <div className="text-center">
              <div className="text-2xl mb-2">📽️</div>
              <p className="text-dark-400">Engineer-first walkthroughs with real code</p>
            </div>
            <div className="text-center">
              <div className="text-2xl mb-2">🧪</div>
              <p className="text-dark-400">Showing experiments and iteration</p>
            </div>
            <div className="text-center">
              <div className="text-2xl mb-2">🎓</div>
              <p className="text-dark-400">Learner perspective: what I struggled with</p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="mt-12 text-center">
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
    </section>
  );
}
