import { ExternalLink } from 'lucide-react';
import SubscribeBanner from '../components/SubscribeBanner';

const credentials = [
  { icon: '🏗️', title: 'AGENTS.md Author', desc: 'Creator of the open governance standard for agentic AI systems, adopted by engineering teams at Fortune 500 enterprises.' },
  { icon: '🔍', title: 'RAG Architecture', desc: 'Designed retrieval-augmented generation systems across healthcare, finance, and legal verticals.' },
  { icon: '🏢', title: 'Enterprise GenAI', desc: 'Led GenAI strategy and implementation programs for organizations with 10,000+ employees.' },
  { icon: '🤖', title: 'Multi-Agent Systems', desc: 'Built and deployed hierarchical agent networks in regulated industries with full audit trails.' },
  { icon: '📊', title: 'LLM Evaluation', desc: 'Developed enterprise-grade evaluation frameworks used to benchmark and select LLM providers.' },
  { icon: '☕', title: 'GenAI Brew', desc: 'Author of the weekly GenAI architecture newsletter read by 200+ CTOs and Architects.' },
];

const principles = [
  { number: '01', title: 'Governance First', body: 'Before any tool selection, establish the rules of engagement. An undocumented agent is a liability waiting to materialize.' },
  { number: '02', title: 'Production Reality Over Theory', body: 'Frameworks are only valuable if they survive contact with real systems. Every recommendation here has been battle-tested.' },
  { number: '03', title: 'Minimal Complexity', body: 'The best architecture is the simplest one that meets the requirements. Complexity is a cost that compounds.' },
  { number: '04', title: 'Human-in-the-Loop by Default', body: 'Autonomous agents are powerful. Irreversible autonomous agents are dangerous. Design for human oversight first.' },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="py-20 px-5 border-b border-gray-200 bg-white">
        <div className="max-w-6xl mx-auto grid md:grid-cols-5 gap-12 items-start">
          <div className="md:col-span-2">
            <div className="w-24 h-24 rounded-2xl flex items-center justify-center text-3xl font-bold text-white mb-6"
              style={{ background: 'var(--primary)' }}>SM</div>
            <h1 className="font-dense text-5xl text-black mb-2">Shreekant<br />Mandvikar</h1>
            <p className="text-base font-light mb-3" style={{ color: 'var(--arch-grey)' }}>Senior GenAI Architect</p>
            <span className="text-xs px-3 py-1.5 rounded-full font-medium border inline-block mb-6"
              style={{ color: 'var(--arch-green)', borderColor: 'var(--arch-green)', background: '#f5ffe6' }}>
              ☕ GenAI Brew Author
            </span>
            <div className="flex flex-col gap-3">
              <a href="https://linkedin.com/in/shreekantmandvikar" target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm px-4 py-2.5 rounded-lg font-semibold text-white no-underline transition-opacity hover:opacity-90 w-fit"
                style={{ background: '#0A66C2' }}>
                <ExternalLink size={14} /> LinkedIn Profile
              </a>
            </div>
          </div>
          <div className="md:col-span-3">
            <div className="text-xs font-semibold uppercase tracking-widest mb-4" style={{ color: 'var(--arch-green)' }}>
              About
            </div>
            <p className="text-lg font-light leading-relaxed mb-5" style={{ color: 'var(--arch-grey)' }}>
              Shree is a practitioner-architect who has designed and deployed GenAI systems for Fortune 500 enterprises across healthcare, finance, and technology sectors.
            </p>
            <p className="text-base font-light leading-relaxed mb-5" style={{ color: 'var(--arch-grey)' }}>
              His frameworks — including the <strong className="font-semibold text-black">AGENTS.md governance standard</strong> and the <strong className="font-semibold text-black">3-Layer Evaluation Framework</strong> — emerged from hard-won lessons building production systems where failure had real consequences.
            </p>
            <p className="text-base font-light leading-relaxed" style={{ color: 'var(--arch-grey)' }}>
              This platform is the distillation of that experience into a <strong className="font-semibold text-black">Decision Support Engine</strong> — designed for CXOs and architects who need answers grounded in production reality, not vendor marketing or academic theory.
            </p>
          </div>
        </div>
      </section>

      {/* Credentials grid */}
      <section className="py-20 px-5 bg-gray-50 border-b border-gray-200">
        <div className="max-w-6xl mx-auto">
          <div className="text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: 'var(--arch-green)' }}>Expertise</div>
          <h2 className="font-dense text-4xl text-black mb-10">Areas of Practice</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {credentials.map((c) => (
              <div key={c.title} className="rounded-xl border border-gray-200 bg-white p-6">
                <div className="text-2xl mb-3">{c.icon}</div>
                <h3 className="font-semibold text-black text-sm mb-2">{c.title}</h3>
                <p className="text-xs font-light leading-relaxed text-gray-500">{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Principles */}
      <section className="py-20 px-5 bg-white border-b border-gray-200">
        <div className="max-w-6xl mx-auto">
          <div className="text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: 'var(--arch-green)' }}>Philosophy</div>
          <h2 className="font-dense text-4xl text-black mb-10">Design Principles</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {principles.map((p) => (
              <div key={p.number} className="flex gap-5 p-6 rounded-xl border border-gray-200">
                <div className="font-dense text-3xl flex-shrink-0" style={{ color: 'var(--primary)' }}>{p.number}</div>
                <div>
                  <h3 className="font-semibold text-black mb-2">{p.title}</h3>
                  <p className="text-sm font-light leading-relaxed text-gray-500">{p.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <SubscribeBanner />
    </>
  );
}
