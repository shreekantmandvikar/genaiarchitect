import { useState } from 'react';
import { Mail, ArrowRight, Check } from 'lucide-react';

export default function SubscribeBanner() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) setSubmitted(true);
  };

  return (
    <section
      className="py-24 px-5"
      style={{ background: 'var(--color-bg-muted)', borderBottom: '1px solid var(--color-border)' }}
    >
      <div className="max-w-2xl mx-auto text-center">
        <div className="text-5xl mb-4">☕</div>
        <div
          className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest mb-4"
          style={{ color: 'var(--color-text-muted)' }}
        >
          Weekly Newsletter
        </div>
        <h2 className="font-dense text-4xl md:text-5xl mb-3" style={{ color: 'var(--color-text-primary)' }}>
          Subscribe to GenAI Brew
        </h2>
        <p className="text-base font-light mb-8" style={{ color: 'var(--color-text-body)', lineHeight: 'var(--leading-normal)' }}>
          Weekly deep-dives on GenAI architecture. Real frameworks, production patterns, and zero fluff.
          Join 200+ CTOs and Architects already subscribed.
        </p>

        {!submitted ? (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <div className="flex-1 relative">
              <Mail size={14} className="absolute left-3 top-1/2 -translate-y-1/2" style={{ color: 'var(--color-text-muted)' }} />
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="your@company.com"
                required
                className="w-full pl-9 pr-4 py-3 rounded-lg text-sm outline-none transition-colors"
                style={{
                  border: '1px solid var(--color-border-strong)',
                  background: 'var(--color-bg-surface)',
                  color: 'var(--color-text-primary)',
                }}
              />
            </div>
            <button
              type="submit"
              className="flex items-center justify-center gap-2 px-5 py-3 rounded-pill text-sm font-semibold transition-opacity hover:opacity-90 whitespace-nowrap text-white"
              style={{ background: 'var(--color-accent)' }}
            >
              Subscribe Free <ArrowRight size={14} />
            </button>
          </form>
        ) : (
          <div
            className="flex items-center justify-center gap-2 text-sm font-semibold py-3"
            style={{ color: 'var(--color-accent)' }}
          >
            <Check size={16} /> You're in! Welcome to GenAI Brew ☕
          </div>
        )}

        <p className="text-xs mt-4" style={{ color: 'var(--color-text-muted)' }}>
          No spam. Unsubscribe anytime. GDPR compliant.
        </p>
      </div>
    </section>
  );
}
