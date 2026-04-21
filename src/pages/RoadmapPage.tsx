import { Link } from 'react-router-dom';
import { roadmapPhases } from '../data/mockData';
import SubscribeBanner from '../components/SubscribeBanner';
import { ArrowRight } from 'lucide-react';

const priorityConfig = {
  high: { label: 'High Priority', bg: '#fff5f0', color: 'var(--primary)' },
  medium: { label: 'Medium', bg: '#f5ffe6', color: 'var(--arch-green)' },
  low: { label: 'Low', bg: '#f5f5f5', color: 'var(--arch-grey)' },
};

const statusConfig = {
  current: { label: 'Now', bg: 'var(--arch-green)', color: '#fff' },
  upcoming: { label: 'Next', bg: 'var(--primary)', color: '#fff' },
  future: { label: 'Future', bg: 'var(--secondary)', color: '#fff' },
};

export default function RoadmapPage() {
  return (
    <>
      {/* Hero */}
      <section className="py-20 px-5 border-b border-gray-200 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-xs font-semibold uppercase tracking-widest mb-4" style={{ color: 'var(--arch-green)' }}>
            Enterprise GenAI Roadmap · 2025
          </div>
          <h1 className="font-dense text-5xl md:text-6xl text-black mb-4 max-w-3xl">
            Where to Invest<br />Your Attention in GenAI
          </h1>
          <p className="text-lg font-light max-w-2xl leading-relaxed" style={{ color: 'var(--arch-grey)' }}>
            A structured quarterly view of GenAI priorities for enterprise leaders — grounded in production deployments, not hype cycles.
          </p>
        </div>
      </section>

      {/* Phase timeline */}
      <section className="py-20 px-5 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="space-y-8">
            {roadmapPhases.map((phase) => {
              const status = statusConfig[phase.status];
              return (
                <div key={phase.quarter} className="rounded-xl border border-gray-200 overflow-hidden bg-white">
                  {/* Phase header */}
                  <div className="flex flex-wrap items-center justify-between gap-4 px-6 py-5 border-b border-gray-200">
                    <div className="flex items-center gap-4">
                      <div className="font-dense text-3xl text-black">{phase.quarter}</div>
                      <div>
                        <div className="font-semibold text-black text-base">{phase.theme}</div>
                        <div className="text-xs text-gray-400">4 key initiatives</div>
                      </div>
                    </div>
                    <span className="text-xs px-3 py-1.5 rounded-full font-semibold"
                      style={{ background: status.bg, color: status.color }}>
                      {status.label}
                    </span>
                  </div>

                  {/* Initiatives grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-0 divide-x divide-y divide-gray-100">
                    {phase.initiatives.map((init) => {
                      const p = priorityConfig[init.priority];
                      return (
                        <div key={init.title} className="p-5">
                          <div className="flex items-start justify-between gap-2 mb-2">
                            <h3 className="font-semibold text-black text-sm leading-tight">{init.title}</h3>
                            <span className="text-xs px-2 py-0.5 rounded-full flex-shrink-0 font-medium"
                              style={{ background: p.bg, color: p.color }}>
                              {init.priority}
                            </span>
                          </div>
                          <p className="text-xs font-light leading-relaxed text-gray-500">{init.description}</p>
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
      <section className="py-20 px-5 bg-white border-t border-gray-200">
        <div className="max-w-6xl mx-auto">
          <div className="text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: 'var(--arch-green)' }}>
            Risk Monitor
          </div>
          <h2 className="font-dense text-4xl text-black mb-10">Watch These Carefully</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              { icon: '⚖️', title: 'EU AI Act Enforcement', body: 'Risk classification requirements come into force in 2025. High-risk AI systems need documented compliance now, not later.' },
              { icon: '💰', title: 'API Cost Normalization', body: 'Current pricing is subsidized by VC capital. Model the TCO at 3–5x current API costs in your business cases.' },
              { icon: '🎯', title: 'Capability Convergence', body: 'The gap between leading LLM providers is narrowing fast. Avoid over-engineering around one provider\'s specific strengths.' },
            ].map((risk) => (
              <div key={risk.title} className="rounded-xl border border-gray-200 p-6">
                <div className="text-2xl mb-3">{risk.icon}</div>
                <h3 className="font-semibold text-black text-sm mb-2">{risk.title}</h3>
                <p className="text-xs font-light leading-relaxed text-gray-500">{risk.body}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 flex flex-wrap gap-4">
            <Link to="/chat"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg font-semibold text-sm text-white no-underline transition-opacity hover:opacity-90"
              style={{ background: 'var(--primary)' }}>
              Ask the Architect Chat <ArrowRight size={14} />
            </Link>
            <Link to="/content"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg font-semibold text-sm border border-gray-300 text-black no-underline transition-colors hover:bg-gray-50">
              Browse Deep Dives
            </Link>
          </div>
        </div>
      </section>

      <SubscribeBanner />
    </>
  );
}
