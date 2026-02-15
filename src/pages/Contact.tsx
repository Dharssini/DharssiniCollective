export default function Contact() {
  return (
    <div className="min-h-screen">
      {/* Header */}
      <section className="section-container pt-12">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="gradient-text">Get in Touch</span>
          </h1>
          <p className="text-xl text-dark-300">
            Open to research collaborations, speaking opportunities, and interesting conversations
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="section-container bg-dark-900/50">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Contact Information */}
            <div className="space-y-6">
              <div className="card">
                <h2 className="text-2xl font-bold mb-6">Contact Information</h2>

                <div className="space-y-4">
                  {/* Email */}
                  <a
                    href="mailto:dharssinikarthikeyan@gmail.com"
                    className="flex items-center gap-4 p-4 bg-dark-900/50 rounded-lg hover:bg-dark-900 transition-colors group"
                  >
                    <div className="w-12 h-12 bg-primary-500/10 rounded-lg flex items-center justify-center text-primary-400 group-hover:bg-primary-500/20 transition-colors">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <div className="font-semibold">Email</div>
                      <div className="text-sm text-dark-400">dharssinikarthikeyan@gmail.com</div>
                    </div>
                  </a>

                  {/* Phone */}
                  <a
                    href="tel:+917695890560"
                    className="flex items-center gap-4 p-4 bg-dark-900/50 rounded-lg hover:bg-dark-900 transition-colors group"
                  >
                    <div className="w-12 h-12 bg-primary-500/10 rounded-lg flex items-center justify-center text-primary-400 group-hover:bg-primary-500/20 transition-colors">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <div>
                      <div className="font-semibold">Phone</div>
                      <div className="text-sm text-dark-400">+91 7695890560</div>
                    </div>
                  </a>

                  {/* GitHub */}
                  <a
                    href="https://github.com/Dharssini"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-4 bg-dark-900/50 rounded-lg hover:bg-dark-900 transition-colors group"
                  >
                    <div className="w-12 h-12 bg-primary-500/10 rounded-lg flex items-center justify-center text-primary-400 group-hover:bg-primary-500/20 transition-colors">
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                      </svg>
                    </div>
                    <div>
                      <div className="font-semibold">GitHub</div>
                      <div className="text-sm text-dark-400">github.com/Dharssini</div>
                    </div>
                  </a>

                  {/* LinkedIn */}
                  <a
                    href="https://linkedin.com/in/dharssini-karthikeyan"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-4 bg-dark-900/50 rounded-lg hover:bg-dark-900 transition-colors group"
                  >
                    <div className="w-12 h-12 bg-primary-500/10 rounded-lg flex items-center justify-center text-primary-400 group-hover:bg-primary-500/20 transition-colors">
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                      </svg>
                    </div>
                    <div>
                      <div className="font-semibold">LinkedIn</div>
                      <div className="text-sm text-dark-400">linkedin/in/dharssini-karthikeyan</div>
                    </div>
                  </a>
                </div>
              </div>
            </div>

            {/* What I'm Looking For */}
            <div className="space-y-6">
              <div className="card">
                <h2 className="text-2xl font-bold mb-6">I'm Open To</h2>

                <div className="space-y-4">
                  <div className="flex gap-4">
                    <div className="text-primary-400 text-2xl">🤝</div>
                    <div>
                      <h3 className="font-bold mb-1">Research Collaborations</h3>
                      <p className="text-sm text-dark-400">
                        Interested in joint research on attention mechanisms, model optimization, or related topics
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="text-accent-400 text-2xl">🎤</div>
                    <div>
                      <h3 className="font-bold mb-1">Speaking Engagements</h3>
                      <p className="text-sm text-dark-400">
                        Available for talks, workshops, and panels on AI research topics
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="text-primary-400 text-2xl">👥</div>
                    <div>
                      <h3 className="font-bold mb-1">Mentoring</h3>
                      <p className="text-sm text-dark-400">
                        Happy to advise students on ML research, career paths, and grad school applications
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="text-accent-400 text-2xl">💼</div>
                    <div>
                      <h3 className="font-bold mb-1">Research Positions</h3>
                      <p className="text-sm text-dark-400">
                        Exploring opportunities at research labs and AI companies
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="text-primary-400 text-2xl">📝</div>
                    <div>
                      <h3 className="font-bold mb-1">Peer Review</h3>
                      <p className="text-sm text-dark-400">
                        Reviewer for major ML conferences (NeurIPS, ICML, ICLR, etc.)
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="card bg-gradient-to-r from-primary-500/10 to-accent-500/10 border-primary-500/30">
                <h3 className="font-bold mb-2">Response Time</h3>
                <p className="text-sm text-dark-400">
                  I typically respond to emails within 2-3 business days. For urgent matters, please indicate in the subject line.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Office Hours / Availability */}
      <section className="section-container">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">
            <span className="gradient-text">Office Hours</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="card">
              <h3 className="text-xl font-bold mb-4">Virtual Office Hours</h3>
              <p className="text-dark-400 text-sm mb-4">
                I hold virtual office hours for students and researchers interested in discussing AI research topics.
              </p>
              <div className="text-dark-300">
                <p className="text-sm mb-2">
                  <span className="font-semibold">When:</span> Fridays, 2-4 PM EST
                </p>
                <p className="text-sm">
                  <span className="font-semibold">Format:</span> 20-30 minute video calls
                </p>
              </div>
              <a href="#" className="btn-primary mt-4 inline-block">
                Schedule a Call
              </a>
            </div>

            <div className="card">
              <h3 className="text-xl font-bold mb-4">In-Person Meetings</h3>
              <p className="text-dark-400 text-sm mb-4">
                Available for in-person meetings if you're in the area.
              </p>
              <div className="text-dark-300">
                <p className="text-sm mb-2">
                  <span className="font-semibold">Location:</span> University/Company Campus
                </p>
                <p className="text-sm">
                  <span className="font-semibold">Schedule:</span> By appointment
                </p>
              </div>
              <a href="mailto:your.email@university.edu" className="btn-secondary mt-4 inline-block">
                Email to Schedule
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="section-container bg-dark-900/50">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary-400 mb-1">24h</div>
              <div className="text-sm text-dark-500">Avg Response Time</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-accent-400 mb-1">10+</div>
              <div className="text-sm text-dark-500">Collaborations</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary-400 mb-1">20+</div>
              <div className="text-sm text-dark-500">Talks Given</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-accent-400 mb-1">50+</div>
              <div className="text-sm text-dark-500">Students Mentored</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
