export default function Footer() {
  return (
    <footer className="py-8 px-5 border-t border-gray-200 bg-white">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <span className="font-dense text-xl text-black">
          genai<span style={{ color: 'var(--primary)' }}>architect</span>
        </span>
        <p className="text-xs text-gray-400">
          © 2026 Shreekant Mandvikar · AI-generated advice; verify before production use.
        </p>
        <div className="flex gap-6 text-xs text-gray-400">
          <a href="#" className="hover:text-black transition-colors no-underline">Privacy</a>
          <a href="#" className="hover:text-black transition-colors no-underline">Terms</a>
        </div>
      </div>
    </footer>
  );
}
