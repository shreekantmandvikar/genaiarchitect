import { ExternalLink } from 'lucide-react';

export default function About() {
  return (
    <section
      id="about"
      className="py-24 px-5"
      style={{ background: 'var(--color-bg-surface)', borderBottom: '1px solid var(--color-border)' }}
    >
      <div className="max-w-6xl mx-auto">
        <div
          className="grid md:grid-cols-5 gap-0 rounded-xl overflow-hidden"
          style={{ border: '1px solid var(--color-border)' }}
        >
          {/* Left — identity */}
          <div
            className="md:col-span-2 p-10 flex flex-col items-start justify-center"
            style={{
              borderBottom: undefined,
              background: 'var(--color-bg-muted)',
              borderRight: '1px solid var(--color-border)',
            }}
          >
            <div
              className="w-20 h-20 rounded-xl flex items-center justify-center text-2xl font-bold text-white mb-5"
              style={{ background: 'var(--color-accent)' }}
            >
              SM
            </div>
            <h3 className="font-dense text-3xl mb-1" style={{ color: 'var(--color-text-primary)' }}>
              Shreekant Mandvikar
            </h3>
            <p className="text-sm mb-1 font-light" style={{ color: 'var(--color-text-body)' }}>
              Senior GenAI Architect
            </p>
            <span
              className="text-xs px-3 py-1 rounded-full font-medium mb-6 border"
              style={{
                color: 'var(--color-accent)',
                borderColor: 'var(--color-accent)',
                background: 'var(--color-accent-subtle)',
              }}
            >
              ☕ GenAI Brew Author
            </span>
            <a
              href="https://linkedin.com/in/shreekantmandvikar"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm px-4 py-2 rounded-lg font-semibold transition-all hover:opacity-90 no-underline text-white"
              style={{ background: '#0A66C2' }}
            >
              <ExternalLink size={14} /> Connect on LinkedIn
            </a>
          </div>

          {/* Right */}
          <div className="md:col-span-3 p-10" style={{ background: 'var(--color-bg-surface)' }}>
            <div
              className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest mb-4"
              style={{ color: 'var(--color-text-muted)' }}
            >
              About Shree
            </div>
            <h2 className="font-dense text-4xl mb-4" style={{ color: 'var(--color-text-primary)' }}>
              Bridging Strategy &amp; Implementation
            </h2>
            <p className="text-sm font-light leading-relaxed mb-4" style={{ color: 'var(--color-text-body)' }}>
              Shree is a practitioner-architect who has designed and deployed GenAI systems for Fortune 500 enterprises.
              His frameworks — including the{' '}
              <strong style={{ color: 'var(--color-text-primary)', fontWeight: 600 }}>AGENTS.md governance standard</strong>{' '}
              and the{' '}
              <strong style={{ color: 'var(--color-text-primary)', fontWeight: 600 }}>3-Layer Evaluation Framework</strong>{' '}
              — are used by engineering teams worldwide.
            </p>
            <p className="text-sm font-light leading-relaxed mb-8" style={{ color: 'var(--color-text-body)' }}>
              This platform is the distillation of years of hands-on experience into a{' '}
              <strong style={{ color: 'var(--color-text-primary)', fontWeight: 600 }}>Decision Support Engine</strong>{' '}
              — designed specifically for CXOs and architects who need answers grounded in production reality, not theory.
            </p>

            <div className="flex flex-wrap gap-2">
              {['AGENTS.md Author', 'RAG Architecture', 'Enterprise GenAI', 'Multi-Agent Systems', 'LLM Evaluation'].map((item) => (
                <span
                  key={item}
                  className="text-xs px-3 py-1.5 rounded-full"
                  style={{
                    border: '1px solid var(--color-border-strong)',
                    color: 'var(--color-text-body)',
                    background: 'var(--color-bg-surface)',
                  }}
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
