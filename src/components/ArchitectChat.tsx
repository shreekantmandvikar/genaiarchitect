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
    <div className="flex h-[calc(100vh-3.5rem)] bg-white overflow-hidden">
      {/* ── Sidebar ─────────────────────────────────────────── */}
      <aside
        className={`flex-shrink-0 flex flex-col border-r border-gray-200 bg-gray-50 transition-all duration-200 ${sidebarOpen ? 'w-64' : 'w-0 overflow-hidden'}`}
      >
        {/* Sidebar header */}
        <div className="flex items-center justify-between px-4 py-4 border-b border-gray-200">
          <span className="text-xs font-semibold uppercase tracking-widest text-gray-400">Conversations</span>
          <button
            onClick={startNew}
            className="flex items-center gap-1 text-xs font-semibold px-2 py-1 rounded-md transition-colors hover:bg-gray-200"
            style={{ color: 'var(--primary)' }}
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
              className={`w-full text-left px-4 py-3 flex items-start gap-3 transition-colors hover:bg-gray-100 ${c.id === activeId ? 'bg-white border-r-2' : ''}`}
              style={c.id === activeId ? { borderRightColor: 'var(--primary)' } : {}}
            >
              <MessageSquare size={14} className="flex-shrink-0 mt-0.5 text-gray-400" />
              <div className="min-w-0">
                <p className="text-xs font-medium text-black truncate">{c.title}</p>
                {c.preview && <p className="text-xs text-gray-400 truncate mt-0.5">{c.preview}</p>}
              </div>
            </button>
          ))}
        </div>

        {/* Sidebar footer — subscribe nudge */}
        <div className="p-4 border-t border-gray-200">
          <div className="rounded-lg bg-white border border-gray-200 p-3">
            <p className="text-xs font-semibold text-black mb-1 flex items-center gap-1"><Lock size={11} /> Save paths</p>
            <p className="text-xs text-gray-400 mb-2">Subscribe to unlock conversation history & full templates.</p>
            <button className="w-full text-xs font-semibold py-1.5 rounded-md text-white transition-opacity hover:opacity-90"
              style={{ background: 'var(--primary)' }}>
              ☕ Subscribe Free
            </button>
          </div>
        </div>
      </aside>

      {/* ── Main chat area ───────────────────────────────────── */}
      <div className="flex-1 flex flex-col min-w-0">
        {/* Chat header */}
        <div className="flex items-center justify-between px-5 py-3 border-b border-gray-200 bg-white flex-shrink-0">
          <div className="flex items-center gap-3">
            <button
              onClick={() => setSidebarOpen(!sidebarOpen)}
              className="p-1.5 rounded-md hover:bg-gray-100 transition-colors text-gray-400"
            >
              <ChevronRight size={16} className={`transition-transform ${sidebarOpen ? 'rotate-180' : ''}`} />
            </button>
            <div className="w-8 h-8 rounded-full flex items-center justify-center text-sm text-white font-bold flex-shrink-0"
              style={{ background: 'var(--primary)' }}>A</div>
            <div>
              <div className="text-sm font-semibold text-black">Senior GenAI Architect</div>
              <div className="flex items-center gap-1 text-xs text-gray-400">
                <span className="w-1.5 h-1.5 rounded-full bg-green-500 inline-block"></span>
                Trained on Shree's Frameworks
              </div>
            </div>
          </div>
          <div className="hidden sm:flex items-center gap-1 text-xs font-medium px-2.5 py-1 rounded-full border border-gray-200 bg-gray-50"
            style={{ color: 'var(--arch-green)' }}>
            <Sparkles size={11} /> RAG-Powered
          </div>
        </div>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto px-5 py-6 flex flex-col gap-4">
          {active.messages.map((msg, i) => (
            <div key={i} className={`flex gap-3 ${msg.role === 'user' ? 'flex-row-reverse' : ''}`}>
              <div className="w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0 text-xs text-white font-bold"
                style={{ background: msg.role === 'user' ? 'var(--secondary)' : 'var(--primary)' }}>
                {msg.role === 'user' ? <User size={13} color="#fff" /> : 'A'}
              </div>
              <div className="max-w-2xl rounded-2xl px-4 py-3 text-sm leading-relaxed"
                style={msg.role === 'assistant'
                  ? { background: 'var(--muted)', color: 'var(--foreground)', border: '1px solid var(--border)' }
                  : { background: 'var(--secondary)', color: '#fff' }
                }>
                <MessageContent content={msg.content} />
              </div>
            </div>
          ))}

          {isTyping && (
            <div className="flex gap-3">
              <div className="w-7 h-7 rounded-full flex items-center justify-center text-xs text-white font-bold"
                style={{ background: 'var(--primary)' }}>A</div>
              <div className="rounded-2xl px-4 py-3 border border-gray-200" style={{ background: 'var(--muted)' }}>
                <div className="chat-typing flex gap-1 items-center h-4">
                  <span className="w-1.5 h-1.5 rounded-full bg-gray-400"></span>
                  <span className="w-1.5 h-1.5 rounded-full bg-gray-400"></span>
                  <span className="w-1.5 h-1.5 rounded-full bg-gray-400"></span>
                </div>
              </div>
            </div>
          )}
          <div ref={bottomRef} />
        </div>

        {/* Quick topics — shown only on new conversation */}
        {active.messages.length === 1 && (
          <div className="px-5 pb-3 flex flex-wrap gap-2">
            {quickStartTopics.map((topic) => (
              <button key={topic} onClick={() => sendMessage(topic)}
                className="text-xs px-3 py-1.5 rounded-full border border-gray-300 font-medium transition-all hover:border-black hover:text-black"
                style={{ color: 'var(--arch-grey)' }}>
                {topic}
              </button>
            ))}
          </div>
        )}

        {/* Input bar */}
        <div className="flex-shrink-0 border-t border-gray-200 px-5 py-4 bg-white">
          <form onSubmit={handleSubmit} className="flex gap-3 max-w-3xl mx-auto">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask your architecture question..."
              disabled={isTyping}
              className="flex-1 rounded-xl px-4 py-3 text-sm outline-none border border-gray-300 bg-white focus:border-black transition-colors"
            />
            <button type="submit" disabled={!input.trim() || isTyping}
              className="w-11 h-11 rounded-xl flex items-center justify-center transition-opacity hover:opacity-90 disabled:opacity-40 text-white flex-shrink-0"
              style={{ background: 'var(--primary)' }}>
              <Send size={16} />
            </button>
          </form>
          <p className="text-xs mt-2 text-center text-gray-400">
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
          return <p key={i} className="font-mono text-xs opacity-70 bg-white/50 px-2 py-0.5 rounded">{line}</p>;
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
