import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Play, BookOpen, Calendar, Tag } from 'lucide-react';
import { contentItems } from '../data/mockData';
import SubscribeBanner from '../components/SubscribeBanner';

export default function ContentDetailPage() {
  const { id } = useParams<{ id: string }>();
  const item = contentItems.find((c) => c.id === Number(id));

  if (!item) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center gap-4 px-5">
        <div className="text-5xl">🔍</div>
        <h1 className="font-dense text-3xl text-black">Content not found</h1>
        <Link to="/content" className="text-sm font-semibold no-underline" style={{ color: 'var(--primary)' }}>
          ← Back to Content Hub
        </Link>
      </div>
    );
  }

  return (
    <>
      <article>
        {/* Hero */}
        <div className="border-b border-gray-200"
          style={{ background: item.category === 'strategy' ? 'linear-gradient(135deg,#f5ffe6,#fff9e6)' : 'linear-gradient(135deg,#fff5f0,#fff)' }}>
          <div className="max-w-4xl mx-auto px-5 py-16">
            {/* Breadcrumb */}
            <Link to="/content" className="inline-flex items-center gap-2 text-sm font-medium mb-8 no-underline transition-opacity hover:opacity-70"
              style={{ color: 'var(--arch-grey)' }}>
              <ArrowLeft size={14} /> Content Hub
            </Link>

            <div className="flex flex-wrap items-center gap-3 mb-5">
              <span className="text-xs px-3 py-1 rounded-full font-medium border bg-white"
                style={{ color: item.category === 'strategy' ? 'var(--arch-green)' : 'var(--primary)', borderColor: item.category === 'strategy' ? 'var(--arch-green)' : 'var(--primary)' }}>
                {item.category === 'strategy' ? '📊 Strategy' : '🔧 Build'}
              </span>
              <span className="text-xs px-3 py-1 rounded-full font-medium border border-gray-300 bg-white text-gray-500">
                {item.type === 'video' ? '🎬 Video' : '📝 Blog'}
              </span>
            </div>

            <h1 className="font-dense text-4xl md:text-5xl text-black mb-4 max-w-3xl">{item.title}</h1>
            <p className="text-lg font-light mb-6 max-w-2xl leading-relaxed" style={{ color: 'var(--arch-grey)' }}>
              {item.description}
            </p>

            <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500">
              {item.type === 'video'
                ? <span className="flex items-center gap-1.5"><Play size={14} /> {item.duration}</span>
                : <span className="flex items-center gap-1.5"><BookOpen size={14} /> {item.readTime}</span>}
              <span className="flex items-center gap-1.5"><Calendar size={14} /> {item.date}</span>
              <div className="flex gap-2">
                {item.tags.map((tag) => (
                  <span key={tag} className="inline-flex items-center gap-1 text-xs px-2 py-0.5 rounded border border-gray-200 bg-white text-gray-500">
                    <Tag size={10} /> {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Video embed placeholder */}
        {item.type === 'video' && (
          <div className="bg-gray-900 border-b border-gray-200">
            <div className="max-w-4xl mx-auto px-5 py-10">
              <div className="rounded-xl overflow-hidden aspect-video bg-black flex flex-col items-center justify-center gap-4 border border-gray-700 cursor-pointer group">
                <div className="w-16 h-16 rounded-full flex items-center justify-center transition-transform group-hover:scale-110"
                  style={{ background: 'var(--primary)' }}>
                  <Play size={24} color="#fff" fill="#fff" />
                </div>
                <p className="text-gray-400 text-sm">Click to play · {item.duration}</p>
              </div>
            </div>
          </div>
        )}

        {/* Body */}
        <div className="max-w-4xl mx-auto px-5 py-16">
          <div className="max-w-2xl">
            {item.body?.split('\n\n').map((para, i) => {
              if (para.startsWith('**') && para.includes(':**')) {
                const [heading, ...rest] = para.split('\n');
                return (
                  <div key={i} className="mb-6">
                    <h3 className="font-semibold text-black mb-2 text-base">{heading.replace(/\*\*/g, '')}</h3>
                    {rest.map((line, j) => <ContentLine key={j} line={line} />)}
                  </div>
                );
              }
              return (
                <p key={i} className="text-base font-light leading-relaxed mb-5" style={{ color: 'var(--arch-grey)' }}>
                  {renderInline(para)}
                </p>
              );
            })}
          </div>

          {/* CTA */}
          <div className="mt-12 rounded-xl border border-gray-200 bg-gray-50 px-6 py-6 max-w-2xl">
            <p className="text-sm font-semibold text-black mb-1">Want the full template?</p>
            <p className="text-sm font-light text-gray-500 mb-4">Subscribe to GenAI Brew for downloadable frameworks, checklists, and code templates.</p>
            <Link to="/subscribe"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-semibold text-white no-underline transition-opacity hover:opacity-90"
              style={{ background: 'var(--primary)' }}>
              ☕ Subscribe Free
            </Link>
          </div>
        </div>
      </article>
      <SubscribeBanner />
    </>
  );
}

function ContentLine({ line }: { line: string }) {
  if (line.startsWith('- ') || line.startsWith('* ')) {
    return <p className="text-sm font-light pl-4 mb-1" style={{ color: 'var(--arch-grey)' }}>• {renderInline(line.slice(2))}</p>;
  }
  if (line.trim() === '') return <br />;
  return <p className="text-sm font-light leading-relaxed mb-1" style={{ color: 'var(--arch-grey)' }}>{renderInline(line)}</p>;
}

function renderInline(text: string) {
  const parts = text.split(/(\*\*[^*]+\*\*)/g);
  return parts.map((part, i) =>
    part.startsWith('**') && part.endsWith('**')
      ? <strong key={i} className="font-semibold text-black">{part.slice(2, -2)}</strong>
      : part
  );
}
