import { Link } from 'react-router-dom';
import AnimatedBackground from '../components/AnimatedBackground';

export default function Home() {
  return (
    <div className="min-h-screen">
      <AnimatedBackground />

      {/* Hero Section */}
      <section className="min-h-[calc(100vh-4rem)] flex items-center justify-center relative overflow-hidden">
        {/* Animated background gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary-900/20 via-dark-900 to-accent-900/20"></div>

        {/* Floating orbs for visual interest */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>

        <div className="section-container relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            {/* Intro badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-dark-800/50 border border-primary-500/30 rounded-full mb-8 animate-fade-in">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary-500"></span>
              </span>
              <span className="text-sm text-dark-300">AI/ML Engineer • Production AI Systems</span>
            </div>

            {/* Main heading */}
            <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-slide-up">
              Dharssini Karthikeyan{' '}
              <span className="gradient-text block mt-2">Building AI That Matters</span>
            </h1>

            {/* Subheading */}
            <p className="text-xl md:text-2xl text-dark-300 mb-8 max-w-3xl mx-auto animate-slide-up animation-delay-200">
              Multi-agent AI systems, RAG pipelines, and LLM fine-tuning — bridging research innovation with real-world impact
            </p>

            {/* Research interests */}
            <div className="flex flex-wrap justify-center gap-3 mb-12 animate-slide-up animation-delay-300">
              <span className="px-4 py-2 bg-primary-500/10 border border-primary-500/20 rounded-full text-sm text-primary-400">
                Multi-Agent Systems
              </span>
              <span className="px-4 py-2 bg-accent-500/10 border border-accent-500/20 rounded-full text-sm text-accent-400">
                RAG Pipelines
              </span>
              <span className="px-4 py-2 bg-primary-500/10 border border-primary-500/20 rounded-full text-sm text-primary-400">
                LLM Fine-Tuning
              </span>
              <span className="px-4 py-2 bg-accent-500/10 border border-accent-500/20 rounded-full text-sm text-accent-400">
                Computer Vision
              </span>
              <span className="px-4 py-2 bg-primary-500/10 border border-primary-500/20 rounded-full text-sm text-primary-400">
                Healthcare AI
              </span>
            </div>

            {/* CTA buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up animation-delay-400">
              <Link to="/learning" className="btn-primary">
                View Learning Journey
              </Link>
              <Link to="/projects" className="btn-secondary">
                Explore Projects
              </Link>
            </div>

            {/* Scroll indicator */}
            <div className="mt-16 animate-bounce">
              <svg className="w-6 h-6 mx-auto text-dark-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </div>
          </div>
        </div>
      </section>

      {/* What I Do */}
      <section className="section-container bg-dark-900/50">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">What I Do</span>
          </h2>
          <p className="text-xl text-dark-300">
            My approach to learning AI and machine learning
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Card 1 */}
          <Link to="/learning" className="card hover:scale-[1.03] cursor-pointer group">
            <div className="text-4xl mb-4">📚</div>
            <h3 className="text-xl font-bold mb-2 group-hover:text-primary-400 transition-colors">Deep Learning</h3>
            <p className="text-dark-400 mb-4">
              Studying topics in depth, from mathematical foundations to cutting-edge research
            </p>
            <div className="text-primary-400 text-sm font-medium">
              View learning journey →
            </div>
          </Link>

          {/* Card 2 */}
          <Link to="/projects" className="card hover:scale-[1.03] cursor-pointer group">
            <div className="text-4xl mb-4">💻</div>
            <h3 className="text-xl font-bold mb-2 group-hover:text-accent-400 transition-colors">Implementing</h3>
            <p className="text-dark-400 mb-4">
              Building everything from scratch to truly understand how it works
            </p>
            <div className="text-accent-400 text-sm font-medium">
              View projects →
            </div>
          </Link>

          {/* Card 3 */}
          <Link to="/blogs" className="card hover:scale-[1.03] cursor-pointer group">
            <div className="text-4xl mb-4">📝</div>
            <h3 className="text-xl font-bold mb-2 group-hover:text-primary-400 transition-colors">Documenting</h3>
            <p className="text-dark-400 mb-4">
              Writing blogs and creating videos to solidify understanding and help others
            </p>
            <div className="text-primary-400 text-sm font-medium">
              Read blogs →
            </div>
          </Link>
        </div>
      </section>

      {/* Current Focus */}
      <section className="section-container">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-8 text-center">
            <span className="gradient-text">Current Focus</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Focus Area 1 */}
            <div className="bg-dark-800 border border-dark-700 rounded-lg p-6 hover:border-primary-500/50 transition-colors">
              <h3 className="text-2xl font-semibold mb-3 flex items-center gap-3">
                <span className="text-primary-400">🤖</span>
                Multi-Agent Orchestration
              </h3>
              <p className="text-dark-300 mb-4">
                Architecting autonomous agent swarms with confidence-based routing and collaborative problem solving.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="text-xs px-3 py-1 bg-primary-500/10 text-primary-400 rounded-full border border-primary-500/20">
                  LangGraph
                </span>
                <span className="text-xs px-3 py-1 bg-primary-500/10 text-primary-400 rounded-full border border-primary-500/20">
                  CrewAI
                </span>
              </div>
            </div>

            {/* Focus Area 2 */}
            <div className="bg-dark-800 border border-dark-700 rounded-lg p-6 hover:border-accent-500/50 transition-colors">
              <h3 className="text-2xl font-semibold mb-3 flex items-center gap-3">
                <span className="text-accent-400">⚡</span>
                High-Performance RAG
              </h3>
              <p className="text-dark-300 mb-4">
                Optimizing retrieval with HNSW indexes, hybrid search fusion (RRF), and late-interaction reranking.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="text-xs px-3 py-1 bg-accent-500/10 text-accent-400 rounded-full border border-accent-500/20">
                  Qdrant
                </span>
                <span className="text-xs px-3 py-1 bg-accent-500/10 text-accent-400 rounded-full border border-accent-500/20">
                  Hybrid Search
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Latest Content */}
      <section className="section-container bg-dark-900/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">
            <span className="gradient-text">Featured Work</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* System Project 1 */}
            <Link to="/projects" className="card hover:scale-[1.03] transition-transform">
              <div className="inline-block px-3 py-1 bg-primary-500/20 text-primary-400 text-xs font-semibold rounded-full mb-4">
                Architecture
              </div>
              <h3 className="text-xl font-bold mb-3">Enterprise Multi-Agent RAG</h3>
              <p className="text-dark-400 text-sm mb-4">
                7-agent system with HNSW vector search handling 1000+ daily conversations...
              </p>
              <div className="text-primary-400 text-sm font-medium">
                View Architecture →
              </div>
            </Link>

            {/* System Project 2 */}
            <Link to="/projects" className="card hover:scale-[1.03] transition-transform">
              <div className="inline-block px-3 py-1 bg-accent-500/20 text-accent-400 text-xs font-semibold rounded-full mb-4">
                Edge AI
              </div>
              <h3 className="text-xl font-bold mb-3">Clinical Voice Assistant</h3>
              <p className="text-dark-400 text-sm mb-4">
                Local-first privacy-preserving AI with &lt;2s latency using quantized SLMs...
              </p>
              <div className="text-accent-400 text-sm font-medium">
                View Details →
              </div>
            </Link>

            {/* System Project 3 */}
            <Link to="/projects" className="card hover:scale-[1.03] transition-transform">
              <div className="inline-block px-3 py-1 bg-primary-500/20 text-primary-400 text-xs font-semibold rounded-full mb-4">
                Data Engineering
              </div>
              <h3 className="text-xl font-bold mb-3">Healthcare Data Pipeline</h3>
              <p className="text-dark-400 text-sm mb-4">
                Processing 1.15M+ records with ARM algorithms and Triple-Frequency Validation...
              </p>
              <div className="text-primary-400 text-sm font-medium">
                View Pipeline →
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="section-container">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-primary-400 mb-2">$4,500+</div>
              <div className="text-sm text-dark-500">Cost Savings</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-accent-400 mb-2">80%</div>
              <div className="text-sm text-dark-500">Latency Reduction</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary-400 mb-2">7+</div>
              <div className="text-sm text-dark-500">AI Agents Built</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-accent-400 mb-2">5+</div>
              <div className="text-sm text-dark-500">Companies</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-container bg-dark-900/50">
        <div className="max-w-3xl mx-auto text-center">
          <div className="bg-gradient-to-r from-primary-500/10 to-accent-500/10 border border-primary-500/30 rounded-lg p-12">
            <h2 className="text-3xl font-bold mb-4">Let's Connect</h2>
            <p className="text-dark-300 mb-8">
              I'm always open to discussing AI research, potential collaborations, or just geeking out about transformers.
            </p>
            <div className="flex gap-4 justify-center">
              <Link to="/contact" className="btn-primary">
                Get in Touch
              </Link>
              <Link to="/about" className="btn-secondary">
                About Me
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
