import { useState } from 'react';
import { Play, BookOpen, Calendar, Tag, Search, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import { contentItems } from '../data/mockData';

type Filter = 'all' | 'strategy' | 'build' | 'video' | 'blog';

export default function ContentHub() {
  const [filter, setFilter] = useState<Filter>('all');
  const [query, setQuery] = useState('');

  const filtered = contentItems.filter((item) => {
    const matchesFilter =
      filter === 'all' ? true :
      filter === 'video' ? item.type === 'video' :
      filter === 'blog' ? item.type === 'blog' :
      item.category === filter;

    const q = query.toLowerCase();
    const matchesSearch = !q || item.title.toLowerCase().includes(q) ||
      item.description.toLowerCase().includes(q) ||
      item.tags.some((t) => t.toLowerCase().includes(q));

    return matchesFilter && matchesSearch;
  });

  const filters: { key: Filter; label: string }[] = [
    { key: 'all', label: 'All' },
    { key: 'strategy', label: '📊 Strategy (CEO)' },
    { key: 'build', label: '🔧 Build (Architect)' },
    { key: 'video', label: '🎬 Videos' },
    { key: 'blog', label: '📝 Blogs' },
  ];

  return (
    <>
      {/* Page hero */}
      <div className="py-16 px-5 border-b border-gray-200 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: 'var(--arch-green)' }}>
            ☕ Curated for GenAI Leaders
          </div>
          <div className="flex flex-col md:flex-row md:items-end gap-6 justify-between">
            <div>
              <h1 className="font-dense text-5xl md:text-6xl text-black mb-2">Content Hub</h1>
              <p className="text-base font-light" style={{ color: 'var(--arch-grey)' }}>
                Deep-dive videos and frameworks from Shreekant's GenAI architecture practice.
              </p>
            </div>
            {/* Search */}
            <div className="relative w-full md:w-72 flex-shrink-0">
              <Search size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search topics, tags..."
                className="w-full pl-9 pr-8 py-2.5 rounded-lg text-sm border border-gray-300 bg-white outline-none focus:border-black transition-colors"
              />
              {query && (
                <button onClick={() => setQuery('')} className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-black">
                  <X size={13} />
                </button>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Filter + grid */}
      <div className="py-10 px-5 bg-gray-50 min-h-screen">
        <div className="max-w-6xl mx-auto">
          {/* Filter pills */}
          <div className="flex flex-wrap gap-2 mb-8">
            {filters.map(({ key, label }) => (
              <button key={key} onClick={() => setFilter(key)}
                className="text-sm px-4 py-2 rounded-full border font-medium transition-all"
                style={filter === key
                  ? { background: '#000', color: '#fff', borderColor: '#000' }
                  : { background: '#fff', color: 'var(--arch-grey)', borderColor: 'var(--border)' }
                }>
                {label}
              </button>
            ))}
            {query && (
              <span className="text-sm px-4 py-2 rounded-full border font-medium bg-orange-50 text-orange-600 border-orange-200 flex items-center gap-1">
                "{query}" <button onClick={() => setQuery('')}><X size={12} /></button>
              </span>
            )}
          </div>

          {/* Results count */}
          <p className="text-xs text-gray-400 mb-6">{filtered.length} result{filtered.length !== 1 ? 's' : ''}</p>

          {/* Featured 2-col */}
          {!query && filter === 'all' && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              {filtered.filter((i) => i.featured).map((item) => (
                <ContentCard key={item.id} item={item} featured />
              ))}
            </div>
          )}

          {/* Regular grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {(query || filter !== 'all' ? filtered : filtered.filter((i) => !i.featured)).map((item) => (
              <ContentCard key={item.id} item={item} featured={false} />
            ))}
          </div>

          {filtered.length === 0 && (
            <div className="text-center py-20 text-gray-400">
              <div className="text-4xl mb-3">🔍</div>
              <p className="font-medium">No results found</p>
              <p className="text-sm mt-1">Try a different search term or filter</p>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

function ContentCard({ item, featured }: { item: typeof contentItems[0]; featured: boolean }) {
  return (
    <Link
      to={`/content/${item.id}`}
      className="group rounded-xl border border-gray-200 overflow-hidden transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md bg-white no-underline block"
    >
      {/* Thumbnail */}
      <div className="flex items-center justify-center relative"
        style={{
          height: featured ? '180px' : '120px',
          background: item.category === 'strategy'
            ? 'linear-gradient(135deg, #f5ffe6, #fff9e6)'
            : 'linear-gradient(135deg, #fff5f0, #fff)',
        }}>
        <span style={{ fontSize: featured ? '3rem' : '2rem' }}>{item.thumbnail}</span>
        {item.type === 'video' && (
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
            <div className="w-12 h-12 rounded-full bg-white shadow-lg flex items-center justify-center">
              <Play size={18} style={{ color: 'var(--primary)' }} fill="currentColor" />
            </div>
          </div>
        )}
        <div className="absolute top-3 left-3">
          <span className="text-xs px-2 py-1 rounded-full font-medium bg-white border border-gray-200"
            style={{ color: item.category === 'strategy' ? 'var(--arch-green)' : 'var(--primary)' }}>
            {item.category === 'strategy' ? '📊 Strategy' : '🔧 Build'}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-5">
        <h3 className="font-semibold mb-2 line-clamp-2 text-black" style={{ fontSize: featured ? '1rem' : '0.875rem' }}>
          {item.title}
        </h3>
        <p className="text-xs leading-relaxed mb-4 line-clamp-2 text-gray-500">{item.description}</p>

        <div className="flex items-center justify-between text-xs text-gray-400">
          <div className="flex items-center gap-3">
            {item.type === 'video'
              ? <span className="flex items-center gap-1"><Play size={11} /> {item.duration}</span>
              : <span className="flex items-center gap-1"><BookOpen size={11} /> {item.readTime}</span>}
            <span className="flex items-center gap-1"><Calendar size={11} /> {item.date}</span>
          </div>
        </div>

        <div className="flex flex-wrap gap-1 mt-3">
          {item.tags.map((tag) => (
            <span key={tag} className="inline-flex items-center gap-1 text-xs px-2 py-0.5 rounded border border-gray-200 text-gray-500 bg-gray-50">
              <Tag size={9} /> {tag}
            </span>
          ))}
        </div>
      </div>
    </Link>
  );
}
