import { useState } from 'react';
import { motion } from 'framer-motion';

interface TreeNode {
  id: string;
  label: string;
  description?: string;
  children?: string[];
  content?: string;
}

const treeData: Record<string, TreeNode> = {
  root: {
    id: 'root',
    label: 'What do you want to know?',
    description: 'Choose a path to explore',
    children: ['thinking', 'built', 'curious'],
  },
  thinking: {
    id: 'thinking',
    label: 'How I Think',
    description: 'My approach to problems',
    children: ['philosophy', 'process', 'failures'],
  },
  built: {
    id: 'built',
    label: "What I've Built",
    description: 'Production systems & research',
    children: ['multiagent', 'rag', 'cv'],
  },
  curious: {
    id: 'curious',
    label: "What I'm Curious About",
    description: 'Current research interests',
    children: ['memory', 'safety', 'optimization'],
  },
  philosophy: {
    id: 'philosophy',
    label: 'Research Philosophy',
    content: `**Production-first research.** Research means nothing if it doesn't ship. Every project here has measurable business impact: $4.5K saved, 80% latency reduction, 70% effort reduction.

**Multi-domain depth.** I'm not a specialist. I'm a systems thinker who connects NLP + CV + Robotics + Healthcare AI.

**Failure is data.** I share what didn't work because that's where the real learning happens.`,
  },
  process: {
    id: 'process',
    label: 'My Process',
    content: `1. **Understand the constraint.** Is it latency? Cost? Accuracy? You can't optimize everything.

2. **Start simple.** Pure LLM? Single geocoding API? Get something working, then iterate.

3. **Measure obsessively.** If you can't measure it, you can't improve it.

4. **Build redundancy.** Single points of failure kill production systems. Always have a fallback.`,
  },
  failures: {
    id: 'failures',
    label: 'Failed Experiments',
    content: `**Route Optimization v1:** Single provider geocoding → 15s latency. Added multi-provider fallback → 2s (80% ↓).

**RAG v1:** Simple vector search → 60% recall. Added hybrid RRF fusion → 85% recall.

**Excel Automation v1:** Pure LLM → 40% accuracy. Hybrid LLM+ML → 72% (+32%).

Every v1 fails. The question is: how fast can you iterate to v2?`,
  },
  multiagent: {
    id: 'multiagent',
    label: 'Multi-Agent Systems',
    content: `Built a 7-agent orchestration system for healthcare with confidence-based routing (70%/50%/30% thresholds).

The hard part isn't the agents. It's the orchestration. How do you handle failures? What if one agent is slow? How do you maintain context across agents?

Answer: Hybrid vector search (RRF + weighted + cascade) and async worker architecture.`,
  },
  rag: {
    id: 'rag',
    label: 'RAG Pipelines',
    content: `RAG isn't just "embed + search + LLM." It's:
- Hybrid retrieval (keyword + semantic)
- Context compression (8K+ conversations → 2K relevant)
- Grounded generation (cite sources, detect hallucinations)
- Evaluation (recall@k, faithfulness, context relevance)

Current challenge: Long-term memory beyond single sessions.`,
  },
  cv: {
    id: 'cv',
    label: 'Computer Vision',
    content: `OCR Pipeline using OCDRNet (NVIDIA TAO) on Triton Inference Server. The insight wasn't the model — it was the preprocessing pipeline.

Document classification with LayoutLM (512-token support). Layout matters as much as text.

Current work: Multimodal RAG combining vision + language.`,
  },
  memory: {
    id: 'memory',
    label: 'Long-Term Memory',
    content: `Current RAG systems have short memories. I'm exploring hybrid approaches:
- Vector DB for semantic search
- Graph DB for relationships
- Temporal reasoning for time-aware retrieval

Goal: Conversations that remember context across days, not just turns.`,
  },
  safety: {
    id: 'safety',
    label: 'Safety Alignment',
    content: `Built a 5-tier crisis detection system for mental health AI. The challenge: 40+ keywords × semantic similarity × context understanding.

Rule-based systems catch obvious cases. Embeddings catch nuanced cases. You need both.

Current research: Safety beyond keywords. How do you align for therapeutic contexts?`,
  },
  optimization: {
    id: 'optimization',
    label: 'Optimization',
    content: `**Latency:** Multi-provider caching (15s → 2s). Always have redundancy.

**Accuracy:** Hybrid approaches beat pure methods. LLM+ML > pure LLM for structured data.

**Cost:** $4.5K+ savings through automation. ROI matters.

Current focus: Embedding optimization for efficient vector search at scale.`,
  },
};

export default function DecisionTree() {
  const [currentNode, setCurrentNode] = useState('root');
  const [path, setPath] = useState<string[]>(['root']);

  const node = treeData[currentNode];

  const handleNavigate = (nodeId: string) => {
    setCurrentNode(nodeId);
    setPath((prev) => [...prev, nodeId]);
  };

  const handleBack = () => {
    if (path.length > 1) {
      const newPath = path.slice(0, -1);
      setPath(newPath);
      setCurrentNode(newPath[newPath.length - 1]);
    }
  };

  return (
    <div className="max-w-4xl mx-auto">
      {/* Header */}
      <div className="mb-12 text-center">
        <h1 className="text-4xl font-bold mb-4">
          <span className="gradient-text">Decision Tree Navigation</span>
        </h1>
        <p className="text-dark-300">
          Explore my work through connected nodes — click to expand, navigate spatially
        </p>
      </div>

      {/* Breadcrumbs */}
      <div className="mb-8 flex items-center gap-2 text-sm font-mono text-dark-400">
        {path.map((nodeId, idx) => (
          <div key={nodeId} className="flex items-center gap-2">
            {idx > 0 && <span>→</span>}
            <button
              onClick={() => {
                setPath(path.slice(0, idx + 1));
                setCurrentNode(nodeId);
              }}
              className={`hover:text-primary-400 transition-colors ${
                nodeId === currentNode ? 'text-primary-400' : ''
              }`}
            >
              {treeData[nodeId].label}
            </button>
          </div>
        ))}
      </div>

      {/* Current Node */}
      <motion.div
        key={currentNode}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="card border-2 border-primary-500/50"
      >
        <h2 className="text-3xl font-bold mb-3">{node.label}</h2>
        {node.description && <p className="text-dark-300 mb-6">{node.description}</p>}

        {/* Content */}
        {node.content && (
          <div className="prose prose-invert max-w-none mb-6">
            {node.content.split('\n\n').map((paragraph, idx) => {
              if (paragraph.startsWith('**') && paragraph.includes(':**')) {
                const [title, ...rest] = paragraph.split(':**');
                return (
                  <div key={idx} className="mb-4">
                    <strong className="text-primary-400">{title.replace(/\*\*/g, '')}:</strong>
                    <span className="text-dark-200">{rest.join(':**')}</span>
                  </div>
                );
              }
              return (
                <p key={idx} className="text-dark-200 mb-4">
                  {paragraph}
                </p>
              );
            })}
          </div>
        )}

        {/* Children Nodes */}
        {node.children && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {node.children.map((childId) => {
              const child = treeData[childId];
              return (
                <motion.button
                  key={childId}
                  onClick={() => handleNavigate(childId)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="p-6 bg-dark-800 border border-dark-700 rounded-lg hover:border-primary-500/50 transition-all text-left"
                >
                  <div className="text-lg font-bold mb-2">{child.label}</div>
                  {child.description && (
                    <div className="text-sm text-dark-400">{child.description}</div>
                  )}
                </motion.button>
              );
            })}
          </div>
        )}

        {/* Back Button */}
        {path.length > 1 && (
          <div className="mt-6 pt-6 border-t border-dark-800">
            <button
              onClick={handleBack}
              className="text-primary-400 hover:text-primary-300 transition-colors font-mono text-sm"
            >
              ← Go Back
            </button>
          </div>
        )}
      </motion.div>
    </div>
  );
}
