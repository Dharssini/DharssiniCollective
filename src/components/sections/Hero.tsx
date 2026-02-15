export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
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
            <span className="text-sm text-dark-300">AI/ML Engineer & Educator</span>
          </div>

          {/* Main heading */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-slide-up">
            Building AI from{' '}
            <span className="gradient-text">First Principles</span>
          </h1>

          {/* Subheading */}
          <p className="text-xl md:text-2xl text-dark-300 mb-8 max-w-3xl mx-auto animate-slide-up animation-delay-200">
            Deep learning, attention mechanisms, and LLMs — explained, implemented from scratch, and deployed in production
          </p>

          {/* Value proposition */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 animate-slide-up animation-delay-400">
            <div className="bg-dark-800/50 backdrop-blur-sm border border-dark-700 rounded-lg p-6">
              <div className="text-primary-400 mb-2">
                <svg className="w-8 h-8 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="font-semibold mb-2">Understand</h3>
              <p className="text-sm text-dark-400">Core concepts explained with clarity and depth</p>
            </div>

            <div className="bg-dark-800/50 backdrop-blur-sm border border-dark-700 rounded-lg p-6">
              <div className="text-accent-400 mb-2">
                <svg className="w-8 h-8 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
              </div>
              <h3 className="font-semibold mb-2">Implement</h3>
              <p className="text-sm text-dark-400">Build everything from scratch with NumPy and PyTorch</p>
            </div>

            <div className="bg-dark-800/50 backdrop-blur-sm border border-dark-700 rounded-lg p-6">
              <div className="text-primary-400 mb-2">
                <svg className="w-8 h-8 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="font-semibold mb-2">Deploy</h3>
              <p className="text-sm text-dark-400">Real-world projects with production-ready code</p>
            </div>
          </div>

          {/* CTA buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up animation-delay-600">
            <a href="#projects" className="btn-primary">
              View Projects
            </a>
            <a href="#learn" className="btn-secondary">
              Explore Learning Path
            </a>
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
  );
}
