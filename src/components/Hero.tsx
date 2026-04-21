import { ArrowDown } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-5 bg-white overflow-hidden border-b border-gray-200">
      {/* Subtle grid */}
      <div className="absolute inset-0 grid-bg opacity-60 pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto w-full">
        {/* Eyebrow */}
        <div className="mb-8">
          <span className="text-xs font-semibold uppercase tracking-widest px-3 py-1 rounded-full border"
            style={{ color: 'var(--arch-green)', borderColor: 'var(--arch-green)', background: '#f5ffe6' }}>
            ☕ The GenAI Brew · Decision Support Engine
          </span>
        </div>

        {/* Main headline — architechtures.com uses very large, compressed font */}
        <h1 className="font-dense mb-6 max-w-4xl"
          style={{ fontSize: 'clamp(3rem, 8vw, 6rem)', lineHeight: '1', color: '#000' }}>
          Your AI Architecture<br />
          <span style={{ color: 'var(--primary)' }}>Advisor.</span> Trained<br />
          on Proven Frameworks.
        </h1>

        <p className="text-lg font-light mb-10 max-w-xl leading-relaxed"
          style={{ color: 'var(--arch-grey)' }}>
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
              <div className="font-dense text-4xl text-black">{value}</div>
              <div className="text-sm mt-1" style={{ color: 'var(--muted-foreground)' }}>{label}</div>
            </div>
          ))}
        </div>

        {/* CTAs */}
        <div className="flex flex-wrap gap-4">
          <Link
            to="/chat"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg font-semibold text-sm text-white transition-opacity hover:opacity-90 no-underline"
            style={{ background: 'var(--primary)' }}
          >
            Ask Your Architecture Question
          </Link>
          <Link
            to="/content"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg font-semibold text-sm border border-gray-300 text-black transition-colors hover:bg-gray-50 no-underline"
          >
            Browse Content Hub
          </Link>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <ArrowDown size={16} className="text-gray-400" />
      </div>
    </section>
  );
}
