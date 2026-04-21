import { Link } from 'react-router-dom';

export default function NotFoundPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-5 bg-white">
      <div className="font-dense text-8xl text-gray-200 mb-4">404</div>
      <h1 className="font-dense text-3xl text-black mb-2">Page not found</h1>
      <p className="text-sm font-light text-gray-500 mb-8">The page you're looking for doesn't exist.</p>
      <Link to="/" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg font-semibold text-sm text-white no-underline"
        style={{ background: 'var(--primary)' }}>
        ← Back to Home
      </Link>
    </div>
  );
}
