import { Link } from 'react-router-dom';
import Hero from '../components/Hero';
import SubscribeBanner from '../components/SubscribeBanner';
import { contentItems } from '../data/mockData';
import { Play, BookOpen, Calendar, ArrowRight } from 'lucide-react';

export default function HomePage() {
  return (
    <>
      <Hero />
      <ChatTeaser />
      <ContentTeaser />
      <AboutTeaser />
      <SubscribeBanner />
    </>
  );
}

function ChatTeaser() {
  return (
    <section className="py-24 px-5 bg-gray-50 border-b border-gray-200">
      <div className="max-w-4xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="text-xs font-semibold uppercase tracking-widest mb-4" style={{ color: 'var(--arch-green)' }}>
              RAG-Powered Chat
            </div>
            <h2 className="font-dense text-4xl md:text-5xl text-black mb-4">
              Ask Anything.<br />Get Framework-Backed Answers.
            </h2>
            <p className="text-base font-light mb-6 leading-relaxed" style={{ color: 'var(--arch-grey)' }}>
              The Architect Chat is trained on Shree's proven frameworks — AGENTS.md, the 3-Layer Evaluation model, and 50+ architecture patterns. Get answers grounded in production reality.
            </p>
            <Link to="/chat"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg font-semibold text-sm text-white no-underline transition-opacity hover:opacity-90"
              style={{ background: 'var(--primary)' }}>
              Open Architect Chat <ArrowRight size={14} />
            </Link>
          </div>

          {/* Mini chat preview */}
          <div className="rounded-xl border border-gray-200 overflow-hidden shadow-sm bg-white">
            <div className="flex items-center gap-2 px-4 py-3 border-b border-gray-200 bg-gray-50">
              <div className="w-6 h-6 rounded-full text-white text-xs font-bold flex items-center justify-center" style={{ background: 'var(--primary)' }}>A</div>
              <span className="text-xs font-medium text-black">Senior GenAI Architect</span>
              <span className="ml-auto flex items-center gap-1 text-xs text-gray-400"><span className="w-1.5 h-1.5 rounded-full bg-green-500 inline-block"></span>Online</span>
            </div>
            <div className="p-4 space-y-3">
              <div className="flex gap-2">
                <div className="w-6 h-6 rounded-full flex-shrink-0 text-white text-xs font-bold flex items-center justify-center" style={{ background: 'var(--primary)' }}>A</div>
                <div className="rounded-xl px-3 py-2 text-xs leading-relaxed max-w-xs bg-gray-100 text-gray-700">
                  What architectural challenge are you solving today?
                </div>
              </div>
              <div className="flex gap-2 flex-row-reverse">
                <div className="w-6 h-6 rounded-full flex-shrink-0 bg-gray-800 flex items-center justify-center">
                  <span className="text-white text-xs">U</span>
                </div>
                <div className="rounded-xl px-3 py-2 text-xs text-white max-w-xs" style={{ background: 'var(--secondary)' }}>
                  How do I secure my agentic workflow?
                </div>
              </div>
              <div className="flex gap-2">
                <div className="w-6 h-6 rounded-full flex-shrink-0 text-white text-xs font-bold flex items-center justify-center" style={{ background: 'var(--primary)' }}>A</div>
                <div className="rounded-xl px-3 py-2 text-xs leading-relaxed bg-gray-100 text-gray-700">
                  Start with the AGENTS.md trust hierarchy: Human → Orchestrator → Sub-Agent → Tool. Each layer gets least-privilege access only...
                </div>
              </div>
            </div>
            <div className="px-4 py-3 border-t border-gray-200 bg-gray-50">
              <Link to="/chat" className="flex items-center justify-center gap-2 text-xs font-semibold no-underline transition-opacity hover:opacity-80" style={{ color: 'var(--primary)' }}>
                Continue in full chat <ArrowRight size={12} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ContentTeaser() {
  const featured = contentItems.filter((i) => i.featured);
  return (
    <section className="py-24 px-5 bg-white border-b border-gray-200">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
          <div>
            <div className="text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: 'var(--arch-green)' }}>
              Content Hub
            </div>
            <h2 className="font-dense text-4xl md:text-5xl text-black">
              Deep Dives for<br />GenAI Leaders
            </h2>
          </div>
          <Link to="/content" className="inline-flex items-center gap-2 text-sm font-semibold no-underline transition-opacity hover:opacity-70" style={{ color: 'var(--primary)' }}>
            View all content <ArrowRight size={14} />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {featured.map((item) => (
            <Link key={item.id} to={`/content/${item.id}`}
              className="group rounded-xl border border-gray-200 overflow-hidden hover:shadow-md transition-all no-underline bg-white block">
              <div className="flex items-center justify-center relative"
                style={{ height: '160px', background: item.category === 'strategy' ? 'linear-gradient(135deg,#f5ffe6,#fff9e6)' : 'linear-gradient(135deg,#fff5f0,#fff)' }}>
                <span className="text-4xl">{item.thumbnail}</span>
                {item.type === 'video' && (
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center">
                      <Play size={16} style={{ color: 'var(--primary)' }} fill="currentColor" />
                    </div>
                  </div>
                )}
              </div>
              <div className="p-5">
                <h3 className="font-semibold text-black mb-2 text-sm">{item.title}</h3>
                <p className="text-xs leading-relaxed mb-3 text-gray-500">{item.description}</p>
                <div className="flex items-center gap-3 text-xs text-gray-400">
                  {item.type === 'video'
                    ? <span className="flex items-center gap-1"><Play size={10} /> {item.duration}</span>
                    : <span className="flex items-center gap-1"><BookOpen size={10} /> {item.readTime}</span>}
                  <span className="flex items-center gap-1"><Calendar size={10} /> {item.date}</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

function AboutTeaser() {
  return (
    <section className="py-24 px-5 bg-gray-50 border-b border-gray-200">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="flex items-center gap-6">
            <div className="w-20 h-20 rounded-xl flex-shrink-0 flex items-center justify-center text-2xl font-bold text-white"
              style={{ background: 'var(--primary)' }}>SM</div>
            <div>
              <div className="font-dense text-2xl text-black">Shreekant Mandvikar</div>
              <div className="text-sm font-light text-gray-500">Senior GenAI Architect</div>
              <span className="text-xs px-2 py-0.5 rounded-full border mt-1 inline-block"
                style={{ color: 'var(--arch-green)', borderColor: 'var(--arch-green)', background: '#f5ffe6' }}>
                ☕ GenAI Brew Author
              </span>
            </div>
          </div>
          <div>
            <div className="text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: 'var(--arch-green)' }}>
              About
            </div>
            <p className="text-base font-light leading-relaxed mb-5 text-gray-600">
              Practitioner-architect who has designed GenAI systems for Fortune 500 enterprises. Creator of the AGENTS.md governance standard used by engineering teams worldwide.
            </p>
            <Link to="/about" className="inline-flex items-center gap-2 text-sm font-semibold no-underline transition-opacity hover:opacity-70" style={{ color: 'var(--primary)' }}>
              Learn more <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
