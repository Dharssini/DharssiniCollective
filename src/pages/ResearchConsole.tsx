import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Terminal from '../components/console/Terminal';
import ExperimentsBrowser from '../components/console/ExperimentsBrowser';
import ContextWindow from '../components/console/ContextWindow';
import TrainingTimeline from '../components/console/TrainingTimeline';
import FailureMuseum from '../components/console/FailureMuseum';
import WhatIfSimulator from '../components/console/WhatIfSimulator';
import AITwinChat from '../components/console/AITwinChat';
import DecisionTree from '../components/console/DecisionTree';

import { resumeData } from '../data/resumeData';

type ViewMode = 'console' | 'paper' | 'timeline' | 'tree';
type ExperimentView = 'overview' | 'architecture' | 'results' | 'failures';

export default function ResearchConsole() {
  const [viewMode, setViewMode] = useState<ViewMode>('console');
  const [selectedDomain, setSelectedDomain] = useState<string>('all');
  const [selectedExperiment, setSelectedExperiment] = useState<string | null>(null);
  const [experimentView, setExperimentView] = useState<ExperimentView>('overview');
  const [showAIChat, setShowAIChat] = useState(false);

  return (
    <div className="min-h-screen bg-dark-950 text-dark-100 font-sans">
      {/* Scanline effect overlay */}
      <div className="fixed inset-0 pointer-events-none z-50 opacity-5">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary-500/10 to-transparent animate-scanline" />
      </div>

      {/* Top Navigation Bar - Sticky below global nav */}
      <nav className="sticky top-0 w-full bg-dark-900/95 backdrop-blur-md border-b border-dark-800 z-40">
        <div className="max-w-full px-6 py-4 flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-4">
            <h1 className="text-xl font-mono font-bold text-primary-500">
              DK <span className="text-dark-400">|</span> <span className="text-dark-300">Research Console</span>
            </h1>
          </div>

          {/* View Mode Toggles */}
          <div className="flex gap-2">
            <button
              onClick={() => setViewMode('console')}
              className={`px-4 py-2 rounded-lg font-mono text-sm transition-all ${viewMode === 'console'
                ? 'bg-primary-500/20 text-primary-400 border border-primary-500/50'
                : 'bg-dark-800 text-dark-400 border border-dark-700 hover:border-dark-600'
                }`}
            >
              Console
            </button>
            <button
              onClick={() => setViewMode('timeline')}
              className={`px-4 py-2 rounded-lg font-mono text-sm transition-all ${viewMode === 'timeline'
                ? 'bg-accent-500/20 text-accent-400 border border-accent-500/50'
                : 'bg-dark-800 text-dark-400 border border-dark-700 hover:border-dark-600'
                }`}
            >
              Training Log
            </button>
            <button
              onClick={() => setViewMode('tree')}
              className={`px-4 py-2 rounded-lg font-mono text-sm transition-all ${viewMode === 'tree'
                ? 'bg-violet-500/20 text-violet-400 border border-violet-500/50'
                : 'bg-dark-800 text-dark-400 border border-dark-700 hover:border-dark-600'
                }`}
            >
              Decision Tree
            </button>
            <button
              onClick={() => setViewMode('paper')}
              className={`px-4 py-2 rounded-lg font-mono text-sm transition-all ${viewMode === 'paper'
                ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/50'
                : 'bg-dark-800 text-dark-400 border border-dark-700 hover:border-dark-600'
                }`}
            >
              Paper Mode
            </button>
          </div>

          {/* System Status */}
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2 text-xs font-mono text-dark-400">
              <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>System Active</span>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="">
        <AnimatePresence mode="wait">
          {viewMode === 'console' && (
            <motion.div
              key="console"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="flex h-[calc(100vh-8.5rem)]"
            >
              {/* Left Sidebar: Experiments Browser */}
              <div className="w-80 border-r border-dark-800 bg-dark-900/50 overflow-y-auto">
                <ExperimentsBrowser
                  selectedDomain={selectedDomain}
                  setSelectedDomain={setSelectedDomain}
                  selectedExperiment={selectedExperiment}
                  setSelectedExperiment={setSelectedExperiment}
                />
              </div>

              {/* Main Panel: Terminal View */}
              <div className="flex-1 overflow-y-auto">
                <Terminal
                  selectedExperiment={selectedExperiment}
                  setSelectedExperiment={setSelectedExperiment}
                  experimentView={experimentView}
                  setExperimentView={setExperimentView}
                />

                {/* Failure Museum Section */}
                {experimentView === 'failures' && (
                  <div className="p-8">
                    <FailureMuseum />
                  </div>
                )}

                {/* What-If Simulator */}
                <div className="p-8 border-t border-dark-800">
                  <WhatIfSimulator />
                </div>
              </div>

              {/* Right Panel: Context Window */}
              <div className="w-80 border-l border-dark-800 bg-dark-900/50 overflow-y-auto">
                <ContextWindow selectedExperiment={selectedExperiment} />
              </div>
            </motion.div>
          )}

          {viewMode === 'timeline' && (
            <motion.div
              key="timeline"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="p-8"
            >
              <TrainingTimeline />
            </motion.div>
          )}

          {viewMode === 'tree' && (
            <motion.div
              key="tree"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="p-8"
            >
              <DecisionTree />
            </motion.div>
          )}

          {viewMode === 'paper' && (
            <motion.div
              key="paper"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="max-w-[210mm] mx-auto p-12 bg-[#fafafa] text-[#1a1a1a] shadow-2xl my-8 font-serif leading-relaxed min-h-screen"
            >
              <PaperMode />
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* AI Twin Chat - Fixed bottom right */}
      <div className="fixed bottom-6 right-6 z-50">
        <AITwinChat isOpen={showAIChat} setIsOpen={setShowAIChat} />
      </div>
    </div>
  );
}

// Paper Mode Component - Academic Stylings
function PaperMode() {
  const { personalInfo, summary, experience, education, projects, skills, researchEngineering } = resumeData;

  return (
    <div className="space-y-8 text-justify">
      {/* Paper Header */}
      <header className="text-center space-y-2 border-b-2 border-slate-900 pb-6">
        <h1 className="text-4xl font-black tracking-tight uppercase">
          {personalInfo.name}
        </h1>
        <div className="text-sm font-bold text-slate-600 flex justify-center gap-4 flex-wrap uppercase tracking-widest">
          <span>{personalInfo.title}</span>
          <span>•</span>
          <span>{personalInfo.location}</span>
          <span>•</span>
          <a href={`mailto:${personalInfo.email}`} className="text-black underline">{personalInfo.email}</a>
        </div>
        <div className="text-[10px] font-mono text-slate-400">
          DOCUMENT ID: {new Date().getTime().toString(16).toUpperCase()} // CLASSIFICATION: UNRESTRICTED
        </div>
      </header>

      {/* Abstract Section */}
      <section>
        <h2 className="text-lg font-black uppercase tracking-tighter border-b border-slate-300 mb-3">Abstract</h2>
        <p className="text-[11pt] italic text-slate-700 leading-relaxed">
          {summary}
        </p>
      </section>

      {/* Methods and Materials (Skills) */}
      <section>
        <h2 className="text-lg font-black uppercase tracking-tighter border-b border-slate-300 mb-4">I. Technical Infrastructure</h2>
        <div className="grid grid-cols-2 gap-x-12 gap-y-4 text-[10pt]">
          {skills.slice(0, 4).map((skill: any, idx: number) => (
            <div key={idx} className="space-y-1">
              <h3 className="font-bold border-l-2 border-slate-900 pl-2 uppercase text-[9pt]">{skill.category}</h3>
              <p className="text-slate-600">{skill.items.join(', ')}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Research Highlights Section */}
      <section>
        <h2 className="text-lg font-black uppercase tracking-tighter border-b border-slate-300 mb-4">II. Research & Innovation Highlights</h2>
        <div className="space-y-4">
          {researchEngineering.highlights.map((highlight: any, idx: number) => (
            <div key={idx} className="flex gap-4">
              <span className="font-black text-slate-300 text-lg">0{idx + 1}</span>
              <div>
                <h3 className="font-bold text-[11pt] leading-tight">{highlight.label}</h3>
                <p className="text-[10pt] text-slate-600 leading-snug">{highlight.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Experimental Methods (Professional Experience) */}
      <section>
        <h2 className="text-lg font-black uppercase tracking-tighter border-b border-slate-300 mb-4">III. Empirical Evaluation (Professional Experience)</h2>
        <div className="space-y-6">
          {experience.map((exp: any, idx: number) => (
            <div key={idx} className="space-y-2">
              <div className="flex justify-between items-baseline group">
                <h3 className="font-black text-[12pt]">{exp.company}</h3>
                <span className="text-[9pt] font-mono text-slate-400">{exp.period}</span>
              </div>
              <div className="text-[9pt] font-bold text-slate-400 uppercase tracking-widest mb-2">
                {exp.role} — {exp.location}
              </div>
              <ul className="list-disc list-outside ml-4 space-y-1.5 text-[10pt] text-slate-700">
                {exp.bullets.map((bullet: string, bidx: number) => (
                  <li key={bidx} dangerouslySetInnerHTML={{ __html: bullet.replace(/\*\*(.*?)\*\*/g, '<span class="font-bold text-black">$1</span>') }} />
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Case Studies (Projects) */}
      <section>
        <h2 className="text-lg font-black uppercase tracking-tighter border-b border-slate-300 mb-4">IV. Prototyping & Implementations</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project: any, idx: number) => (
            <div key={idx} className="bg-slate-50 p-4 border border-slate-200">
              <h3 className="font-black text-[11pt] mb-1">{project.name}</h3>
              <p className="text-[9pt] text-slate-600 mb-2 leading-tight">{project.desc}</p>
              <a href={project.link} className="text-[9pt] text-indigo-600 hidden group-hover:block font-mono">CODE_SRC://repository</a>
            </div>
          ))}
        </div>
      </section>

      {/* Educational Foundation */}
      <section>
        <h2 className="text-lg font-black uppercase tracking-tighter border-b border-slate-300 mb-4">V. Educational Foundation</h2>
        {education.map((edu: any, idx: number) => (
          <div key={idx} className="flex justify-between items-start">
            <div className="space-y-1">
              <h3 className="font-black text-[11pt]">{edu.degree}</h3>
              <p className="text-[10pt] text-slate-600">{edu.institution}, {edu.location}</p>
              <p className="text-[9pt] italic text-slate-500">{edu.details}</p>
            </div>
            <span className="text-[9pt] font-mono text-slate-400">{edu.period}</span>
          </div>
        ))}
      </section>

      {/* Footer / References Sign-off */}
      <footer className="pt-8 text-center text-[10px] text-slate-400 border-t border-slate-100 uppercase tracking-[0.3em]">
        End of Document — Last Updated {new Date().toLocaleDateString()}
      </footer>
    </div>
  );
}
