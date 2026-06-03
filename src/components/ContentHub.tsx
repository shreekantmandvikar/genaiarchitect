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
      <div
        className="py-16 px-5"
        style={{ borderBottom: '1px solid var(--color-border)', background: 'var(--color-bg-surface)' }}
      >
        <div className="max-w-6xl mx-auto">
          <div
            className="text-xs font-semibold uppercase tracking-widest mb-3"
            style={{ color: 'var(--color-text-muted)' }}
          >
            ☕ Curated for GenAI Leaders
          </div>
          <div className="flex flex-col md:flex-row md:items-end gap-6 justify-between">
            <div>
              <h1 className="font-dense text-5xl md:text-6xl mb-2" style={{ color: 'var(--color-text-primary)' }}>
                Content Hub
              </h1>
              <p className="text-base font-light" style={{ color: 'var(--color-text-body)' }}>
                Deep-dive videos and frameworks from Shreekant's GenAI architecture practice.
              </p>
            </div>
            {/* Search */}
            <div className="relative w-full md:w-72 flex-shrink-0">
              <Search size={14} className="absolute left-3 top-1/2 -translate-y-1/2" style={{ color: 'var(--color-text-muted)' }} />
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search topics, tags..."
                className="w-full pl-9 pr-8 py-2.5 rounded-lg text-sm outline-none transition-colors"
                style={{
                  border: '1px solid var(--color-border-strong)',
                  background: 'var(--color-bg)',
                  color: 'var(--color-text-primary)',
                }}
              />
              {query && (
                <button
                  onClick={() => setQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2"
                  style={{ color: 'var(--color-text-muted)' }}
                >
                  <X size={13} />
                </button>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Filter + grid */}
      <div className="py-10 px-5 min-h-screen" style={{ background: 'var(--color-bg)' }}>
        <div className="max-w-6xl mx-auto">
          {/* Filter pills */}
          <div className="flex flex-wrap gap-2 mb-8">
            {filters.map(({ key, label }) => (
              <button
                key={key}
                onClick={() => setFilter(key)}
                className="text-sm px-4 py-2 rounded-full font-medium transition-all"
                style={filter === key
                  ? { background: 'var(--color-text-primary)', color: 'var(--color-text-inverse)', borderColor: 'var(--color-text-primary)', border: '1px solid var(--color-text-primary)' }
                  : { background: 'var(--color-bg-surface)', color: 'var(--color-text-body)', border: '1px solid var(--color-border-strong)' }
                }
              >
                {label}
              </button>
            ))}
            {query && (
              <span
                className="text-sm px-4 py-2 rounded-full font-medium flex items-center gap-1"
                style={{
                  background: 'var(--color-accent-subtle)',
                  color: 'var(--color-accent)',
                  border: '1px solid var(--color-accent)',
                }}
              >
                "{query}" <button onClick={() => setQuery('')}><X size={12} /></button>
              </span>
            )}
          </div>

          {/* Results count */}
          <p className="text-xs mb-6" style={{ color: 'var(--color-text-muted)' }}>
            {filtered.length} result{filtered.length !== 1 ? 's' : ''}
          </p>

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
            <div className="text-center py-20" style={{ color: 'var(--color-text-muted)' }}>
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
      className="group rounded-xl overflow-hidden transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md no-underline block"
      style={{ border: '1px solid var(--color-border)', background: 'var(--color-bg-surface)' }}
    >
      {/* Thumbnail */}
      <div
        className="flex items-center justify-center relative"
        style={{
          height: featured ? '180px' : '120px',
          background: item.category === 'strategy'
            ? 'linear-gradient(135deg, var(--color-accent-subtle), #F2EFE6)'
            : 'linear-gradient(135deg, #EEEEF8, var(--color-bg-muted))',
        }}
      >
        <span style={{ fontSize: featured ? '3rem' : '2rem' }}>{item.thumbnail}</span>
        {item.type === 'video' && (
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
            <div
              className="w-12 h-12 rounded-full flex items-center justify-center"
              style={{ background: 'var(--color-bg-surface)', boxShadow: 'var(--shadow-md)' }}
            >
              <Play size={18} style={{ color: 'var(--color-accent)' }} fill="currentColor" />
            </div>
          </div>
        )}
        <div className="absolute top-3 left-3">
          <span
            className="text-xs px-2 py-1 rounded-full font-medium"
            style={{
              background: 'var(--color-bg-surface)',
              border: '1px solid var(--color-border)',
              color: 'var(--color-accent)',
            }}
          >
            {item.category === 'strategy' ? '📊 Strategy' : '🔧 Build'}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-5">
        <h3
          className="font-semibold mb-2 line-clamp-2"
          style={{ fontSize: featured ? '1rem' : '0.875rem', color: 'var(--color-text-primary)' }}
        >
          {item.title}
        </h3>
        <p className="text-xs leading-relaxed mb-4 line-clamp-2" style={{ color: 'var(--color-text-muted)' }}>
          {item.description}
        </p>

        <div className="flex items-center justify-between text-xs" style={{ color: 'var(--color-text-muted)' }}>
          <div className="flex items-center gap-3">
            {item.type === 'video'
              ? <span className="flex items-center gap-1"><Play size={11} /> {item.duration}</span>
              : <span className="flex items-center gap-1"><BookOpen size={11} /> {item.readTime}</span>}
            <span className="flex items-center gap-1"><Calendar size={11} /> {item.date}</span>
          </div>
        </div>

        <div className="flex flex-wrap gap-1 mt-3">
          {item.tags.map((tag) => (
            <span
              key={tag}
              className="inline-flex items-center gap-1 text-xs px-2 py-0.5 rounded"
              style={{
                border: '1px solid var(--color-border)',
                color: 'var(--color-text-muted)',
                background: 'var(--color-bg-muted)',
              }}
            >
              <Tag size={9} /> {tag}
            </span>
          ))}
        </div>
      </div>
    </Link>
  );
}
