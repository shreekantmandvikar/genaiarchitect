import { useState } from 'react';
import { Menu, X, LogIn } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const navLinks = [
  { label: 'Chat', to: '/chat' },
  { label: 'Content', to: '/content' },
  { label: 'Roadmap', to: '/roadmap' },
  { label: 'About', to: '/about' },
];

interface AuthModalProps {
  onClose: () => void;
}

function AuthModal({ onClose }: AuthModalProps) {
  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center px-4" onClick={onClose}>
      <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" />
      <div
        className="relative bg-white rounded-2xl shadow-2xl w-full max-w-sm p-8 border border-gray-200"
        onClick={(e) => e.stopPropagation()}
      >
        <button onClick={onClose} className="absolute top-4 right-4 text-gray-400 hover:text-black transition-colors">
          <X size={18} />
        </button>

        <div className="text-center mb-6">
          <div className="font-dense text-2xl text-black mb-1">
            genai<span style={{ color: 'var(--primary)' }}>architect</span>
          </div>
          <p className="text-sm text-gray-500 font-light">Sign in to save paths & access templates</p>
        </div>

        {/* LinkedIn OAuth button */}
        <button
          className="w-full flex items-center justify-center gap-3 px-4 py-3 rounded-xl font-semibold text-sm text-white transition-opacity hover:opacity-90 mb-4"
          style={{ background: '#0A66C2' }}
          onClick={() => alert('LinkedIn OAuth — connect your backend to enable this')}
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
          </svg>
          Continue with LinkedIn
        </button>

        <div className="relative my-4">
          <div className="absolute inset-0 flex items-center"><div className="w-full border-t border-gray-200" /></div>
          <div className="relative flex justify-center"><span className="bg-white px-3 text-xs text-gray-400">or</span></div>
        </div>

        {/* Email */}
        <div className="space-y-3">
          <input type="email" placeholder="your@company.com"
            className="w-full px-4 py-3 rounded-xl text-sm border border-gray-300 outline-none focus:border-black transition-colors" />
          <button className="w-full py-3 rounded-xl text-sm font-semibold text-white transition-opacity hover:opacity-90"
            style={{ background: 'var(--primary)' }}>
            Continue with Email
          </button>
        </div>

        <p className="text-xs text-center text-gray-400 mt-4">
          By signing in you agree to our Terms & Privacy Policy
        </p>
      </div>
    </div>
  );
}

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [showAuth, setShowAuth] = useState(false);
  const { pathname } = useLocation();

  const isActive = (to: string) => pathname === to || (to !== '/' && pathname.startsWith(to));

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-5 h-14 flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="font-dense text-xl tracking-tight text-black no-underline">
            genai<span style={{ color: 'var(--primary)' }}>architect</span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map(({ label, to }) => (
              <Link key={to} to={to}
                className="text-sm font-medium no-underline transition-colors hover:text-black"
                style={{
                  color: isActive(to) ? '#000' : 'var(--arch-grey)',
                  borderBottom: isActive(to) ? '2px solid var(--primary)' : '2px solid transparent',
                  paddingBottom: '2px',
                }}>
                {label}
              </Link>
            ))}
          </div>

          {/* Right CTAs */}
          <div className="hidden md:flex items-center gap-3">
            <button
              onClick={() => setShowAuth(true)}
              className="flex items-center gap-1.5 text-sm font-medium px-3 py-2 rounded-lg border border-gray-200 transition-colors hover:bg-gray-50"
              style={{ color: 'var(--arch-grey)' }}
            >
              <LogIn size={14} /> Sign In
            </button>
            <Link to="/subscribe"
              className="text-sm px-4 py-2 rounded-lg font-semibold text-white transition-opacity hover:opacity-90 no-underline"
              style={{ background: 'var(--primary)' }}>
              Subscribe Free
            </Link>
          </div>

          {/* Mobile toggle */}
          <button className="md:hidden text-gray-500" onClick={() => setOpen(!open)}>
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {open && (
          <div className="md:hidden border-t border-gray-200 px-5 py-4 flex flex-col gap-4 bg-white">
            {navLinks.map(({ label, to }) => (
              <Link key={to} to={to} className="text-sm font-medium no-underline"
                style={{ color: isActive(to) ? '#000' : 'var(--arch-grey)' }}
                onClick={() => setOpen(false)}>
                {label}
              </Link>
            ))}
            <button onClick={() => { setShowAuth(true); setOpen(false); }}
              className="text-sm px-4 py-2 rounded-lg font-semibold border border-gray-300 w-full text-black">
              Sign In
            </button>
            <Link to="/subscribe"
              className="text-sm px-4 py-2 rounded-lg font-semibold text-white w-full text-center no-underline block"
              style={{ background: 'var(--primary)' }}
              onClick={() => setOpen(false)}>
              Subscribe Free
            </Link>
          </div>
        )}
      </nav>

      {showAuth && <AuthModal onClose={() => setShowAuth(false)} />}
    </>
  );
}
