import { Link } from 'react-router-dom';

export default function NotFoundPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-5" style={{ background: 'var(--color-bg)' }}>
      <div className="font-dense text-8xl mb-4" style={{ color: 'var(--color-border-strong)' }}>404</div>
      <h1 className="font-dense text-3xl mb-2" style={{ color: 'var(--color-text-primary)' }}>Page not found</h1>
      <p className="text-sm font-light mb-8" style={{ color: 'var(--color-text-muted)' }}>
        The page you're looking for doesn't exist.
      </p>
      <Link
        to="/"
        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-pill font-semibold text-sm text-white no-underline"
        style={{ background: 'var(--color-accent)' }}
      >
        ← Back to Home
      </Link>
    </div>
  );
}
