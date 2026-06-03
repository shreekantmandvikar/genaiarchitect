import { useState, useRef, useEffect } from 'react';
import { Send, User, Plus, MessageSquare, Sparkles, ChevronRight, Lock } from 'lucide-react';
import { quickStartTopics, mockResponses } from '../data/mockData';

interface Message {
  role: 'user' | 'assistant';
  content: string;
}

interface Conversation {
  id: string;
  title: string;
  preview: string;
  messages: Message[];
}

function getMockResponse(query: string): string {
  const q = query.toLowerCase();
  if (q.includes('secure') || q.includes('security') || q.includes('agent')) return mockResponses.secure;
  if (q.includes('rag') || q.includes('fine-tun') || q.includes('retrieval')) return mockResponses.rag;
  if (q.includes('llm') || q.includes('provider') || q.includes('gpt') || q.includes('gemini') || q.includes('claude')) return mockResponses.llm;
  return mockResponses.default;
}

const INITIAL_MESSAGE: Message = {
  role: 'assistant',
  content: "Hello! I'm your **Senior GenAI Architect Assistant**, trained on Shreekant Mandvikar's frameworks and methodologies.\n\nAsk me anything about GenAI architecture — from securing agentic systems to choosing the right LLM provider for your use case.\n\nWhat architectural challenge are you solving today?",
};

function newConversation(): Conversation {
  return { id: crypto.randomUUID(), title: 'New conversation', preview: '', messages: [INITIAL_MESSAGE] };
}

export default function ArchitectChat() {
  const [conversations, setConversations] = useState<Conversation[]>([newConversation()]);
  const [activeId, setActiveId] = useState(conversations[0].id);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const bottomRef = useRef<HTMLDivElement>(null);

  const active = conversations.find((c) => c.id === activeId)!;

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [active?.messages, isTyping]);

  const sendMessage = async (text: string) => {
    if (!text.trim()) return;
    const userMsg: Message = { role: 'user', content: text };

    setConversations((prev) =>
      prev.map((c) =>
        c.id === activeId
          ? {
              ...c,
              title: c.title === 'New conversation' ? text.slice(0, 40) : c.title,
              preview: text.slice(0, 60),
              messages: [...c.messages, userMsg],
            }
          : c
      )
    );
    setInput('');
    setIsTyping(true);

    await new Promise((r) => setTimeout(r, 1200 + Math.random() * 800));
    const reply: Message = { role: 'assistant', content: getMockResponse(text) };
    setIsTyping(false);
    setConversations((prev) =>
      prev.map((c) => (c.id === activeId ? { ...c, messages: [...c.messages, reply] } : c))
    );
  };

  const startNew = () => {
    const c = newConversation();
    setConversations((prev) => [c, ...prev]);
    setActiveId(c.id);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    sendMessage(input);
  };

  return (
    <div
      className="flex h-[calc(100vh-3.5rem)] overflow-hidden"
      style={{ background: 'var(--color-bg-surface)' }}
    >
      {/* ── Sidebar ─────────────────────────────────────────── */}
      <aside
        className={`flex-shrink-0 flex flex-col transition-all duration-200 ${sidebarOpen ? 'w-64' : 'w-0 overflow-hidden'}`}
        style={{ borderRight: '1px solid var(--color-border)', background: 'var(--color-bg-muted)' }}
      >
        {/* Sidebar header */}
        <div
          className="flex items-center justify-between px-4 py-4"
          style={{ borderBottom: '1px solid var(--color-border)' }}
        >
          <span
            className="text-xs font-semibold uppercase tracking-widest"
            style={{ color: 'var(--color-text-muted)' }}
          >
            Conversations
          </span>
          <button
            onClick={startNew}
            className="flex items-center gap-1 text-xs font-semibold px-2 py-1 rounded-md transition-colors"
            style={{ color: 'var(--color-accent)' }}
          >
            <Plus size={12} /> New
          </button>
        </div>

        {/* Conversation list */}
        <div className="flex-1 overflow-y-auto py-2">
          {conversations.map((c) => (
            <button
              key={c.id}
              onClick={() => setActiveId(c.id)}
              className={`w-full text-left px-4 py-3 flex items-start gap-3 transition-colors ${c.id === activeId ? 'border-r-2' : ''}`}
              style={{
                background: c.id === activeId ? 'var(--color-bg-surface)' : 'transparent',
                borderRightColor: c.id === activeId ? 'var(--color-accent)' : 'transparent',
              }}
            >
              <MessageSquare size={14} className="flex-shrink-0 mt-0.5" style={{ color: 'var(--color-text-muted)' }} />
              <div className="min-w-0">
                <p className="text-xs font-medium truncate" style={{ color: 'var(--color-text-primary)' }}>{c.title}</p>
                {c.preview && <p className="text-xs truncate mt-0.5" style={{ color: 'var(--color-text-muted)' }}>{c.preview}</p>}
              </div>
            </button>
          ))}
        </div>

        {/* Sidebar footer — subscribe nudge */}
        <div className="p-4" style={{ borderTop: '1px solid var(--color-border)' }}>
          <div
            className="rounded-lg p-3"
            style={{ background: 'var(--color-bg-surface)', border: '1px solid var(--color-border)' }}
          >
            <p className="text-xs font-semibold mb-1 flex items-center gap-1" style={{ color: 'var(--color-text-primary)' }}>
              <Lock size={11} /> Save paths
            </p>
            <p className="text-xs mb-2" style={{ color: 'var(--color-text-muted)' }}>
              Subscribe to unlock conversation history &amp; full templates.
            </p>
            <button
              className="w-full text-xs font-semibold py-1.5 rounded-md text-white transition-opacity hover:opacity-90"
              style={{ background: 'var(--color-accent)' }}
            >
              ☕ Subscribe Free
            </button>
          </div>
        </div>
      </aside>

      {/* ── Main chat area ───────────────────────────────────── */}
      <div className="flex-1 flex flex-col min-w-0">
        {/* Chat header */}
        <div
          className="flex items-center justify-between px-5 py-3 flex-shrink-0"
          style={{ borderBottom: '1px solid var(--color-border)', background: 'var(--color-bg-surface)' }}
        >
          <div className="flex items-center gap-3">
            <button
              onClick={() => setSidebarOpen(!sidebarOpen)}
              className="p-1.5 rounded-md transition-colors"
              style={{ color: 'var(--color-text-muted)' }}
            >
              <ChevronRight size={16} className={`transition-transform ${sidebarOpen ? 'rotate-180' : ''}`} />
            </button>
            <div
              className="w-8 h-8 rounded-full flex items-center justify-center text-sm text-white font-bold flex-shrink-0"
              style={{ background: 'var(--color-accent)' }}
            >A</div>
            <div>
              <div className="text-sm font-semibold" style={{ color: 'var(--color-text-primary)' }}>Senior GenAI Architect</div>
              <div className="flex items-center gap-1 text-xs" style={{ color: 'var(--color-text-muted)' }}>
                <span className="w-1.5 h-1.5 rounded-full bg-green-500 inline-block"></span>
                Trained on Shree's Frameworks
              </div>
            </div>
          </div>
          <div
            className="hidden sm:flex items-center gap-1 text-xs font-medium px-2.5 py-1 rounded-full"
            style={{
              border: '1px solid var(--color-border)',
              background: 'var(--color-bg-muted)',
              color: 'var(--color-accent)',
            }}
          >
            <Sparkles size={11} /> RAG-Powered
          </div>
        </div>

        {/* Messages */}
        <div
          className="flex-1 overflow-y-auto px-5 py-6 flex flex-col gap-4"
          style={{ background: 'var(--color-bg)' }}
        >
          {active.messages.map((msg, i) => (
            <div key={i} className={`flex gap-3 ${msg.role === 'user' ? 'flex-row-reverse' : ''}`}>
              <div
                className="w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0 text-xs text-white font-bold"
                style={{ background: msg.role === 'user' ? 'var(--color-text-primary)' : 'var(--color-accent)' }}
              >
                {msg.role === 'user' ? <User size={13} color="#fff" /> : 'A'}
              </div>
              <div
                className="max-w-2xl rounded-2xl px-4 py-3 text-sm leading-relaxed"
                style={msg.role === 'assistant'
                  ? {
                      background: 'var(--color-bg-surface)',
                      color: 'var(--color-text-body)',
                      border: '1px solid var(--color-border)',
                    }
                  : {
                      background: 'var(--color-text-primary)',
                      color: 'var(--color-text-inverse)',
                    }
                }
              >
                <MessageContent content={msg.content} />
              </div>
            </div>
          ))}

          {isTyping && (
            <div className="flex gap-3">
              <div
                className="w-7 h-7 rounded-full flex items-center justify-center text-xs text-white font-bold"
                style={{ background: 'var(--color-accent)' }}
              >A</div>
              <div
                className="rounded-2xl px-4 py-3"
                style={{ background: 'var(--color-bg-surface)', border: '1px solid var(--color-border)' }}
              >
                <div className="chat-typing flex gap-1 items-center h-4">
                  <span className="w-1.5 h-1.5 rounded-full" style={{ background: 'var(--color-text-muted)' }}></span>
                  <span className="w-1.5 h-1.5 rounded-full" style={{ background: 'var(--color-text-muted)' }}></span>
                  <span className="w-1.5 h-1.5 rounded-full" style={{ background: 'var(--color-text-muted)' }}></span>
                </div>
              </div>
            </div>
          )}
          <div ref={bottomRef} />
        </div>

        {/* Quick topics — shown only on new conversation */}
        {active.messages.length === 1 && (
          <div
            className="px-5 pb-3 flex flex-wrap gap-2"
            style={{ background: 'var(--color-bg)' }}
          >
            {quickStartTopics.map((topic) => (
              <button
                key={topic}
                onClick={() => sendMessage(topic)}
                className="text-xs px-3 py-1.5 rounded-full font-medium transition-all"
                style={{
                  border: '1px solid var(--color-border-strong)',
                  color: 'var(--color-text-body)',
                  background: 'var(--color-bg-surface)',
                }}
              >
                {topic}
              </button>
            ))}
          </div>
        )}

        {/* Input bar */}
        <div
          className="flex-shrink-0 px-5 py-4"
          style={{ borderTop: '1px solid var(--color-border)', background: 'var(--color-bg-surface)' }}
        >
          <form onSubmit={handleSubmit} className="flex gap-3 max-w-3xl mx-auto">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask your architecture question..."
              disabled={isTyping}
              className="flex-1 rounded-xl px-4 py-3 text-sm outline-none transition-colors"
              style={{
                border: '1px solid var(--color-border-strong)',
                background: 'var(--color-bg)',
                color: 'var(--color-text-primary)',
              }}
            />
            <button
              type="submit"
              disabled={!input.trim() || isTyping}
              className="w-11 h-11 rounded-xl flex items-center justify-center transition-opacity hover:opacity-90 disabled:opacity-40 text-white flex-shrink-0"
              style={{ background: 'var(--color-accent)' }}
            >
              <Send size={16} />
            </button>
          </form>
          <p className="text-xs mt-2 text-center" style={{ color: 'var(--color-text-muted)' }}>
            AI-generated advice · Verify before production implementation
          </p>
        </div>
      </div>
    </div>
  );
}

function MessageContent({ content }: { content: string }) {
  const lines = content.split('\n');
  return (
    <div className="space-y-1.5">
      {lines.map((line, i) => {
        if (line.startsWith('- ') || line.startsWith('* '))
          return <p key={i} className="pl-3">• {renderInline(line.slice(2))}</p>;
        if (/^\d+\./.test(line))
          return <p key={i} className="pl-3">{renderInline(line)}</p>;
        if (line.startsWith('```') || line.startsWith('|'))
          return <p key={i} className="font-mono text-xs opacity-70 px-2 py-0.5 rounded" style={{ background: 'rgba(0,0,0,0.05)' }}>{line}</p>;
        if (line.trim() === '') return <br key={i} />;
        return <p key={i}>{renderInline(line)}</p>;
      })}
    </div>
  );
}

function renderInline(text: string) {
  const parts = text.split(/(\*\*[^*]+\*\*)/g);
  return parts.map((part, i) =>
    part.startsWith('**') && part.endsWith('**')
      ? <strong key={i}>{part.slice(2, -2)}</strong>
      : part
  );
}
