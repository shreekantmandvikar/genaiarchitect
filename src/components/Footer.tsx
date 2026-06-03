export default function Footer() {
  return (
    <footer
      className="py-8 px-5"
      style={{ borderTop: '1px solid var(--color-border)', background: 'var(--color-bg-surface)' }}
    >
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <span className="font-dense text-xl" style={{ color: 'var(--color-text-primary)' }}>
          genai<span style={{ color: 'var(--color-accent)' }}>architect</span>
        </span>
        <p className="text-xs" style={{ color: 'var(--color-text-muted)' }}>
          © 2025 Shreekant Mandvikar · AI-generated advice; verify before production use.
        </p>
        <div className="flex gap-6 text-xs" style={{ color: 'var(--color-text-muted)' }}>
          <a href="#" className="transition-colors no-underline hover:text-black">Privacy</a>
          <a href="#" className="transition-colors no-underline hover:text-black">Terms</a>
        </div>
      </div>
    </footer>
  );
}
