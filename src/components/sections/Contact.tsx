export default function Contact() {
  return (
    <section id="contact" className="section-container">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Let's Connect</span>
          </h2>
          <p className="text-xl text-dark-300">
            Open to opportunities, collaborations, and conversations about AI
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Contact info */}
          <div className="card">
            <h3 className="text-2xl font-semibold mb-6">Get In Touch</h3>

            <div className="space-y-4">
              {/* Email */}
              <a
                href="mailto:your.email@example.com"
                className="flex items-center gap-4 p-4 bg-dark-900/50 rounded-lg hover:bg-dark-900 transition-colors group"
              >
                <div className="w-12 h-12 bg-primary-500/10 rounded-lg flex items-center justify-center text-primary-400 group-hover:bg-primary-500/20 transition-colors">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <div className="font-semibold">Email</div>
                  <div className="text-sm text-dark-400">your.email@example.com</div>
                </div>
              </a>

              {/* LinkedIn */}
              <a
                href="https://linkedin.com/in/yourprofile"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 bg-dark-900/50 rounded-lg hover:bg-dark-900 transition-colors group"
              >
                <div className="w-12 h-12 bg-primary-500/10 rounded-lg flex items-center justify-center text-primary-400 group-hover:bg-primary-500/20 transition-colors">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </div>
                <div>
                  <div className="font-semibold">LinkedIn</div>
                  <div className="text-sm text-dark-400">Connect with me</div>
                </div>
              </a>

              {/* GitHub */}
              <a
                href="https://github.com/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 bg-dark-900/50 rounded-lg hover:bg-dark-900 transition-colors group"
              >
                <div className="w-12 h-12 bg-primary-500/10 rounded-lg flex items-center justify-center text-primary-400 group-hover:bg-primary-500/20 transition-colors">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
                  </svg>
                </div>
                <div>
                  <div className="font-semibold">GitHub</div>
                  <div className="text-sm text-dark-400">View my code</div>
                </div>
              </a>

              {/* YouTube */}
              <a
                href="https://youtube.com/@yourchannel"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 bg-dark-900/50 rounded-lg hover:bg-dark-900 transition-colors group"
              >
                <div className="w-12 h-12 bg-primary-500/10 rounded-lg flex items-center justify-center text-primary-400 group-hover:bg-primary-500/20 transition-colors">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                  </svg>
                </div>
                <div>
                  <div className="font-semibold">YouTube</div>
                  <div className="text-sm text-dark-400">Watch my videos</div>
                </div>
              </a>
            </div>
          </div>

          {/* What I'm looking for */}
          <div className="card">
            <h3 className="text-2xl font-semibold mb-6">What I'm Looking For</h3>

            <div className="space-y-4">
              <div className="flex gap-3">
                <div className="text-primary-400 text-xl">💼</div>
                <div>
                  <h4 className="font-semibold mb-1">AI/ML Engineer Roles</h4>
                  <p className="text-sm text-dark-400">
                    Positions focusing on LLMs, transformers, or applied AI engineering
                  </p>
                </div>
              </div>

              <div className="flex gap-3">
                <div className="text-accent-400 text-xl">🤝</div>
                <div>
                  <h4 className="font-semibold mb-1">Collaborations</h4>
                  <p className="text-sm text-dark-400">
                    Open-source projects, research, or interesting AI applications
                  </p>
                </div>
              </div>

              <div className="flex gap-3">
                <div className="text-primary-400 text-xl">💬</div>
                <div>
                  <h4 className="font-semibold mb-1">Technical Discussions</h4>
                  <p className="text-sm text-dark-400">
                    Always happy to chat about transformers, attention, or AI in general
                  </p>
                </div>
              </div>

              <div className="flex gap-3">
                <div className="text-accent-400 text-xl">📚</div>
                <div>
                  <h4 className="font-semibold mb-1">Content Ideas</h4>
                  <p className="text-sm text-dark-400">
                    Suggestions for topics to cover in videos or blog posts
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-6 border-t border-dark-700">
              <p className="text-sm text-dark-400 mb-4">
                Response time: Usually within 24 hours
              </p>
              <a href="mailto:your.email@example.com" className="btn-primary w-full text-center block">
                Send Me an Email
              </a>
            </div>
          </div>
        </div>

        {/* Quick stats */}
        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="text-center">
            <div className="text-3xl font-bold text-primary-400 mb-1">5+</div>
            <div className="text-sm text-dark-500">Projects</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-accent-400 mb-1">20+</div>
            <div className="text-sm text-dark-500">Videos</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary-400 mb-1">50K+</div>
            <div className="text-sm text-dark-500">Lines of Code</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-accent-400 mb-1">100%</div>
            <div className="text-sm text-dark-500">Passion</div>
          </div>
        </div>
      </div>
    </section>
  );
}
