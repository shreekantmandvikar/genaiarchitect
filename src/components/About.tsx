import { ExternalLink } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-24 px-5 bg-white border-b border-gray-200">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-5 gap-0 rounded-xl border border-gray-200 overflow-hidden">
          {/* Left — identity */}
          <div className="md:col-span-2 p-10 flex flex-col items-start justify-center border-b md:border-b-0 md:border-r border-gray-200 bg-gray-50">
            <div className="w-20 h-20 rounded-xl flex items-center justify-center text-2xl font-bold text-white mb-5"
              style={{ background: 'var(--primary)' }}>
              SM
            </div>
            <h3 className="font-dense text-3xl text-black mb-1">Shreekant Mandvikar</h3>
            <p className="text-sm mb-1 font-light" style={{ color: 'var(--arch-grey)' }}>Senior GenAI Architect</p>
            <span className="text-xs px-3 py-1 rounded-full font-medium mb-6 border"
              style={{ color: 'var(--arch-green)', borderColor: 'var(--arch-green)', background: '#f5ffe6' }}>
              ☕ GenAI Brew Author
            </span>
            <a
              href="https://linkedin.com/in/shreekantmandvikar"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm px-4 py-2 rounded-lg font-semibold transition-all hover:opacity-90 no-underline text-white"
              style={{ background: '#0A66C2' }}
            >
              <ExternalLink size={14} /> Connect on LinkedIn
            </a>
          </div>

          {/* Right */}
          <div className="md:col-span-3 p-10">
            <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest mb-4"
              style={{ color: 'var(--arch-green)' }}>
              About Shree
            </div>
            <h2 className="font-dense text-4xl text-black mb-4">
              Bridging Strategy &amp; Implementation
            </h2>
            <p className="text-sm font-light leading-relaxed mb-4" style={{ color: 'var(--arch-grey)' }}>
              Shree is a practitioner-architect who has designed and deployed GenAI systems for Fortune 500 enterprises.
              His frameworks — including the <strong className="text-black font-semibold">AGENTS.md governance standard</strong> and
              the <strong className="text-black font-semibold">3-Layer Evaluation Framework</strong> — are used by engineering teams worldwide.
            </p>
            <p className="text-sm font-light leading-relaxed mb-8" style={{ color: 'var(--arch-grey)' }}>
              This platform is the distillation of years of hands-on experience into a <strong className="text-black font-semibold">Decision Support Engine</strong> —
              designed specifically for CXOs and architects who need answers grounded in production reality, not theory.
            </p>

            <div className="flex flex-wrap gap-2">
              {['AGENTS.md Author', 'RAG Architecture', 'Enterprise GenAI', 'Multi-Agent Systems', 'LLM Evaluation'].map((item) => (
                <span key={item} className="text-xs px-3 py-1.5 rounded-full border border-gray-300 text-gray-600 bg-white">
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
