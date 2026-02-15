import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface Props {
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
}

const responses: Record<string, string> = {
  'hardest project': `The mental health AI platform was the hardest. Building a 5-tier crisis detection system meant balancing sensitivity (catching real risks) with specificity (avoiding false alarms). Every design decision had real-world consequences. We went through 3 iterations before getting the false positive rate below 15%.`,

  'current research': `I'm focusing on long-term memory architectures for LLMs. Current RAG systems have short context windows. I'm exploring hybrid approaches that combine vector search, graph databases, and temporal reasoning to maintain coherent conversations across days or weeks.`,

  'biggest failure': `Pure LLM for data extraction. We hit 40% accuracy and I thought "just add more examples." Wrong. The real insight came when we added traditional ML for pattern matching. Hybrid LLM+ML jumped to 72%. Sometimes the old methods are old because they work.`,

  'tech stack choice': `FastAPI for speed, Qdrant for vector search, React for UX. But tech stack is 20% of the battle. The other 80%? System architecture, error handling, monitoring, and documentation. I've seen beautiful code fail in production because we didn't think about edge cases.`,

  'ai trends disagree': `The hype around AGI timelines. Everyone's talking about superintelligence while we can't reliably detect sarcasm or handle long contexts. We're solving the wrong problems. I'd rather build systems that reduce manual work by 70% today than speculate about AGI in 2030.`,
};

const suggestedPrompts = [
  "What's your hardest project?",
  "Current research interests?",
  "Biggest failure you learned from?",
  "Why this tech stack?",
  "What AI trends do you disagree with?",
];

export default function AITwinChat({ isOpen, setIsOpen }: Props) {
  const [messages, setMessages] = useState<Array<{ role: 'user' | 'ai'; content: string }>>([
    {
      role: 'ai',
      content: `Hi! I'm an AI version of Dharssini. Ask me anything about my work, philosophy, or technical choices. I won't sugarcoat — if it's still an open question, I'll tell you.`,
    },
  ]);
  const [input, setInput] = useState('');

  const handleSend = (message: string) => {
    const userMessage = message || input;
    if (!userMessage.trim()) return;

    setMessages((prev) => [...prev, { role: 'user', content: userMessage }]);

    // Find matching response
    const lowerMessage = userMessage.toLowerCase();
    let response = `That's an interesting question. To be honest, this is still an open question in my research. What I can say is: every project teaches something new, and I'm constantly iterating on my approach. Feel free to ask about specific projects or technical choices — those I can answer with data.`;

    for (const [key, value] of Object.entries(responses)) {
      if (lowerMessage.includes(key.toLowerCase())) {
        response = value;
        break;
      }
    }

    setTimeout(() => {
      setMessages((prev) => [...prev, { role: 'ai', content: response }]);
    }, 500);

    setInput('');
  };

  return (
    <>
      {/* Chat Button */}
      {!isOpen && (
        <motion.button
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          onClick={() => setIsOpen(true)}
          className="bg-gradient-to-r from-primary-500 to-accent-500 text-white rounded-full p-4 shadow-lg hover:shadow-xl transition-shadow"
        >
          <div className="text-2xl">💬</div>
        </motion.button>
      )}

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="bg-dark-900 border border-dark-800 rounded-lg shadow-2xl w-96 flex flex-col overflow-hidden"
            style={{ height: '500px' }}
          >
            {/* Header */}
            <div className="bg-dark-800 border-b border-dark-700 px-4 py-3 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-success-500 animate-pulse" />
                <div>
                  <div className="font-mono font-bold text-sm">AI Twin</div>
                  <div className="text-xs text-dark-400">Ask me anything</div>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="text-dark-400 hover:text-dark-200 transition-colors"
              >
                ✕
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {messages.map((msg, idx) => (
                <div
                  key={idx}
                  className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-[80%] rounded-lg px-4 py-2 text-sm ${
                      msg.role === 'user'
                        ? 'bg-primary-500/20 text-primary-100 border border-primary-500/30'
                        : 'bg-dark-800 text-dark-100 border border-dark-700'
                    }`}
                  >
                    {msg.content}
                  </div>
                </div>
              ))}
            </div>

            {/* Suggested Prompts */}
            {messages.length <= 2 && (
              <div className="px-4 pb-2">
                <div className="text-xs text-dark-400 mb-2">Try asking:</div>
                <div className="flex flex-wrap gap-2">
                  {suggestedPrompts.slice(0, 3).map((prompt) => (
                    <button
                      key={prompt}
                      onClick={() => handleSend(prompt)}
                      className="text-xs px-2 py-1 bg-dark-800 border border-dark-700 rounded hover:border-primary-500/50 transition-colors"
                    >
                      {prompt}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Input */}
            <div className="border-t border-dark-800 p-4">
              <div className="flex gap-2">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter') handleSend(input);
                  }}
                  placeholder="Ask anything..."
                  className="flex-1 px-3 py-2 bg-dark-800 border border-dark-700 rounded outline-none focus:border-primary-500 text-sm"
                />
                <button
                  onClick={() => handleSend(input)}
                  className="px-4 py-2 bg-primary-500 hover:bg-primary-600 rounded font-mono text-sm transition-colors"
                >
                  Send
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
