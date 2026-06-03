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
      <section
        className="py-20 px-5"
        style={{ borderBottom: '1px solid var(--color-border)', background: 'var(--color-bg-surface)' }}
      >
        <div className="max-w-6xl mx-auto grid md:grid-cols-5 gap-12 items-start">
          <div className="md:col-span-2">
            <div
              className="w-24 h-24 rounded-2xl flex items-center justify-center text-3xl font-bold text-white mb-6"
              style={{ background: 'var(--color-accent)' }}
            >SM</div>
            <h1 className="font-dense text-5xl mb-2" style={{ color: 'var(--color-text-primary)' }}>
              Shreekant<br />Mandvikar
            </h1>
            <p className="text-base font-light mb-3" style={{ color: 'var(--color-text-body)' }}>Senior GenAI Architect</p>
            <span
              className="text-xs px-3 py-1.5 rounded-full font-medium border inline-block mb-6"
              style={{
                color: 'var(--color-accent)',
                borderColor: 'var(--color-accent)',
                background: 'var(--color-accent-subtle)',
              }}
            >
              ☕ GenAI Brew Author
            </span>
            <div className="flex flex-col gap-3">
              <a
                href="https://linkedin.com/in/shreekantmandvikar"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm px-4 py-2.5 rounded-lg font-semibold text-white no-underline transition-opacity hover:opacity-90 w-fit"
                style={{ background: '#0A66C2' }}
              >
                <ExternalLink size={14} /> LinkedIn Profile
              </a>
            </div>
          </div>
          <div className="md:col-span-3">
            <div className="text-xs font-semibold uppercase tracking-widest mb-4" style={{ color: 'var(--color-text-muted)' }}>
              About
            </div>
            <p className="text-lg font-light leading-relaxed mb-5" style={{ color: 'var(--color-text-body)' }}>
              Shree is a practitioner-architect who has designed and deployed GenAI systems for Fortune 500 enterprises across healthcare, finance, and technology sectors.
            </p>
            <p className="text-base font-light leading-relaxed mb-5" style={{ color: 'var(--color-text-body)' }}>
              His frameworks — including the{' '}
              <strong style={{ fontWeight: 600, color: 'var(--color-text-primary)' }}>AGENTS.md governance standard</strong>{' '}
              and the{' '}
              <strong style={{ fontWeight: 600, color: 'var(--color-text-primary)' }}>3-Layer Evaluation Framework</strong>{' '}
              — emerged from hard-won lessons building production systems where failure had real consequences.
            </p>
            <p className="text-base font-light leading-relaxed" style={{ color: 'var(--color-text-body)' }}>
              This platform is the distillation of that experience into a{' '}
              <strong style={{ fontWeight: 600, color: 'var(--color-text-primary)' }}>Decision Support Engine</strong>{' '}
              — designed for CXOs and architects who need answers grounded in production reality, not vendor marketing or academic theory.
            </p>
          </div>
        </div>
      </section>

      {/* Credentials grid */}
      <section
        className="py-20 px-5"
        style={{ background: 'var(--color-bg-muted)', borderBottom: '1px solid var(--color-border)' }}
      >
        <div className="max-w-6xl mx-auto">
          <div className="text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: 'var(--color-text-muted)' }}>Expertise</div>
          <h2 className="font-dense text-4xl mb-10" style={{ color: 'var(--color-text-primary)' }}>Areas of Practice</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {credentials.map((c) => (
              <div
                key={c.title}
                className="rounded-xl p-6"
                style={{ border: '1px solid var(--color-border)', background: 'var(--color-bg-surface)' }}
              >
                <div className="text-2xl mb-3">{c.icon}</div>
                <h3 className="font-semibold text-sm mb-2" style={{ color: 'var(--color-text-primary)' }}>{c.title}</h3>
                <p className="text-xs font-light leading-relaxed" style={{ color: 'var(--color-text-muted)' }}>{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Principles */}
      <section
        className="py-20 px-5"
        style={{ background: 'var(--color-bg-surface)', borderBottom: '1px solid var(--color-border)' }}
      >
        <div className="max-w-6xl mx-auto">
          <div className="text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: 'var(--color-text-muted)' }}>Philosophy</div>
          <h2 className="font-dense text-4xl mb-10" style={{ color: 'var(--color-text-primary)' }}>Design Principles</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {principles.map((p) => (
              <div
                key={p.number}
                className="flex gap-5 p-6 rounded-xl"
                style={{ border: '1px solid var(--color-border)', background: 'var(--color-bg)' }}
              >
                <div className="font-dense text-3xl flex-shrink-0" style={{ color: 'var(--color-accent)' }}>{p.number}</div>
                <div>
                  <h3 className="font-semibold mb-2" style={{ color: 'var(--color-text-primary)' }}>{p.title}</h3>
                  <p className="text-sm font-light leading-relaxed" style={{ color: 'var(--color-text-muted)' }}>{p.body}</p>
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
