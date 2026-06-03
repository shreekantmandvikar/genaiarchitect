import { Link } from 'react-router-dom';
import { roadmapPhases } from '../data/mockData';
import SubscribeBanner from '../components/SubscribeBanner';
import { ArrowRight } from 'lucide-react';

const priorityConfig = {
  high:   { label: 'High Priority', bg: 'var(--color-accent-subtle)', color: 'var(--color-accent)' },
  medium: { label: 'Medium',        bg: 'var(--color-bg-muted)',       color: 'var(--color-text-body)' },
  low:    { label: 'Low',           bg: 'var(--color-bg-muted)',       color: 'var(--color-text-muted)' },
};

const statusConfig = {
  current:  { label: 'Now',    bg: 'var(--color-accent)',        color: '#fff' },
  upcoming: { label: 'Next',   bg: 'var(--color-text-primary)',  color: 'var(--color-text-inverse)' },
  future:   { label: 'Future', bg: 'var(--color-border-strong)', color: 'var(--color-text-body)' },
};

export default function RoadmapPage() {
  return (
    <>
      {/* Hero */}
      <section
        className="py-20 px-5"
        style={{ borderBottom: '1px solid var(--color-border)', background: 'var(--color-bg-surface)' }}
      >
        <div className="max-w-6xl mx-auto">
          <div className="text-xs font-semibold uppercase tracking-widest mb-4" style={{ color: 'var(--color-text-muted)' }}>
            Enterprise GenAI Roadmap · 2025
          </div>
          <h1 className="font-dense text-5xl md:text-6xl mb-4 max-w-3xl" style={{ color: 'var(--color-text-primary)' }}>
            Where to Invest<br />Your Attention in GenAI
          </h1>
          <p className="text-lg font-light max-w-2xl" style={{ color: 'var(--color-text-body)', lineHeight: 'var(--leading-normal)' }}>
            A structured quarterly view of GenAI priorities for enterprise leaders — grounded in production deployments, not hype cycles.
          </p>
        </div>
      </section>

      {/* Phase timeline */}
      <section className="py-20 px-5" style={{ background: 'var(--color-bg)' }}>
        <div className="max-w-6xl mx-auto">
          <div className="space-y-8">
            {roadmapPhases.map((phase) => {
              const status = statusConfig[phase.status];
              return (
                <div
                  key={phase.quarter}
                  className="rounded-xl overflow-hidden"
                  style={{ border: '1px solid var(--color-border)', background: 'var(--color-bg-surface)' }}
                >
                  {/* Phase header */}
                  <div
                    className="flex flex-wrap items-center justify-between gap-4 px-6 py-5"
                    style={{ borderBottom: '1px solid var(--color-border)' }}
                  >
                    <div className="flex items-center gap-4">
                      <div className="font-dense text-3xl" style={{ color: 'var(--color-text-primary)' }}>{phase.quarter}</div>
                      <div>
                        <div className="font-semibold text-base" style={{ color: 'var(--color-text-primary)' }}>{phase.theme}</div>
                        <div className="text-xs" style={{ color: 'var(--color-text-muted)' }}>4 key initiatives</div>
                      </div>
                    </div>
                    <span
                      className="text-xs px-3 py-1.5 rounded-full font-semibold"
                      style={{ background: status.bg, color: status.color }}
                    >
                      {status.label}
                    </span>
                  </div>

                  {/* Initiatives grid */}
                  <div
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-0 divide-x divide-y"
                    style={{ '--tw-divide-color': 'var(--color-border)' } as React.CSSProperties}
                  >
                    {phase.initiatives.map((init) => {
                      const p = priorityConfig[init.priority];
                      return (
                        <div key={init.title} className="p-5" style={{ borderColor: 'var(--color-border)' }}>
                          <div className="flex items-start justify-between gap-2 mb-2">
                            <h3 className="font-semibold text-sm leading-tight" style={{ color: 'var(--color-text-primary)' }}>{init.title}</h3>
                            <span
                              className="text-xs px-2 py-0.5 rounded-full flex-shrink-0 font-medium"
                              style={{ background: p.bg, color: p.color }}
                            >
                              {init.priority}
                            </span>
                          </div>
                          <p className="text-xs font-light leading-relaxed" style={{ color: 'var(--color-text-muted)' }}>{init.description}</p>
                        </div>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Risks section */}
      <section
        className="py-20 px-5"
        style={{ background: 'var(--color-bg-surface)', borderTop: '1px solid var(--color-border)' }}
      >
        <div className="max-w-6xl mx-auto">
          <div className="text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: 'var(--color-text-muted)' }}>
            Risk Monitor
          </div>
          <h2 className="font-dense text-4xl mb-10" style={{ color: 'var(--color-text-primary)' }}>Watch These Carefully</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              { icon: '⚖️', title: 'EU AI Act Enforcement', body: 'Risk classification requirements come into force in 2025. High-risk AI systems need documented compliance now, not later.' },
              { icon: '💰', title: 'API Cost Normalization', body: 'Current pricing is subsidized by VC capital. Model the TCO at 3–5x current API costs in your business cases.' },
              { icon: '🎯', title: 'Capability Convergence', body: "The gap between leading LLM providers is narrowing fast. Avoid over-engineering around one provider's specific strengths." },
            ].map((risk) => (
              <div
                key={risk.title}
                className="rounded-xl p-6"
                style={{ border: '1px solid var(--color-border)', background: 'var(--color-bg)' }}
              >
                <div className="text-2xl mb-3">{risk.icon}</div>
                <h3 className="font-semibold text-sm mb-2" style={{ color: 'var(--color-text-primary)' }}>{risk.title}</h3>
                <p className="text-xs font-light leading-relaxed" style={{ color: 'var(--color-text-muted)' }}>{risk.body}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 flex flex-wrap gap-4">
            <Link
              to="/chat"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-pill font-semibold text-sm text-white no-underline transition-opacity hover:opacity-90"
              style={{ background: 'var(--color-accent)' }}
            >
              Ask the Architect Chat <ArrowRight size={14} />
            </Link>
            <Link
              to="/content"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-pill font-semibold text-sm no-underline transition-colors"
              style={{
                border: '1.5px solid var(--color-border-dark)',
                color: 'var(--color-text-primary)',
                background: 'transparent',
              }}
            >
              Browse Deep Dives
            </Link>
          </div>
        </div>
      </section>

      <SubscribeBanner />
    </>
  );
}
