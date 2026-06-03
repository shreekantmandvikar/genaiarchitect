import { ArrowDown } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Hero() {
  return (
    <section
      className="relative min-h-screen flex flex-col items-center justify-center px-5 overflow-hidden"
      style={{ background: 'var(--color-bg)', borderBottom: '1px solid var(--color-border)' }}
    >
      {/* Subtle grid */}
      <div className="absolute inset-0 grid-bg opacity-60 pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto w-full">
        {/* Eyebrow */}
        <div className="mb-8">
          <span
            className="text-xs font-semibold uppercase tracking-widest px-3 py-1 rounded-full border"
            style={{
              color: 'var(--color-accent)',
              borderColor: 'var(--color-accent)',
              background: 'var(--color-accent-subtle)',
            }}
          >
            ☕ The GenAI Brew · Decision Support Engine
          </span>
        </div>

        {/* Main headline */}
        <h1
          className="font-dense mb-6 max-w-4xl"
          style={{ fontSize: 'clamp(3rem, 8vw, 6rem)', lineHeight: '1', color: 'var(--color-text-primary)' }}
        >
          Your AI Architecture<br />
          <span style={{ color: 'var(--color-accent)' }}>Advisor.</span> Trained<br />
          on Proven Frameworks.
        </h1>

        <p className="text-lg font-light mb-10 max-w-xl" style={{ color: 'var(--color-text-body)', lineHeight: 'var(--leading-normal)' }}>
          Ask complex GenAI architecture questions. Get vetted answers grounded in
          Shreekant Mandvikar's battle-tested frameworks — not generic internet advice.
        </p>

        {/* Stats row */}
        <div className="flex flex-wrap gap-10 mb-12">
          {[
            { value: '50+', label: 'Architecture Patterns' },
            { value: '200+', label: 'GenAI Leaders' },
            { value: '12+', label: 'Framework Guides' },
          ].map(({ value, label }) => (
            <div key={label}>
              <div className="font-dense text-4xl" style={{ color: 'var(--color-text-primary)' }}>{value}</div>
              <div className="text-sm mt-1" style={{ color: 'var(--color-text-muted)' }}>{label}</div>
            </div>
          ))}
        </div>

        {/* CTAs */}
        <div className="flex flex-wrap gap-4">
          <Link
            to="/chat"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-pill font-semibold text-sm text-white transition-opacity hover:opacity-90 no-underline"
            style={{ background: 'var(--color-accent)' }}
          >
            Ask Your Architecture Question
          </Link>
          <Link
            to="/content"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-pill font-semibold text-sm transition-colors no-underline"
            style={{
              border: '1.5px solid var(--color-border-dark)',
              color: 'var(--color-text-primary)',
              background: 'transparent',
            }}
          >
            Browse Content Hub
          </Link>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <ArrowDown size={16} style={{ color: 'var(--color-text-muted)' }} />
      </div>
    </section>
  );
}
