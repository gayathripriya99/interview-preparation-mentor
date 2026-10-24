import React, { useState } from 'react';
import { 
  Bookmark, 
  ExternalLink, 
  Search, 
  BookOpen, 
  Video, 
  Code, 
  GitBranch, 
  FolderGit2, 
  CheckCircle2,
  Sparkles
} from 'lucide-react';
import { CURRICULUM_MODULES } from '../data/curriculumData';

export const ResourceLibraryView: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [typeFilter, setTypeFilter] = useState('all');
  const [moduleFilter, setModuleFilter] = useState('all');

  // Collect all resources with module title
  const allResources = CURRICULUM_MODULES.flatMap(mod => 
    mod.resources.map(res => ({
      ...res,
      moduleTitle: mod.title,
      moduleId: mod.id
    }))
  );

  const filtered = allResources.filter(r => {
    const matchesSearch = 
      r.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      r.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      r.moduleTitle.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesType = typeFilter === 'all' || r.type === typeFilter;
    const matchesModule = moduleFilter === 'all' || r.moduleId === moduleFilter;
    return matchesSearch && matchesType && matchesModule;
  });

  const typeIcon = (type: string) => {
    switch (type) {
      case 'video': return <Video style={{ width: '0.85rem', height: '0.85rem' }} />;
      case 'repo': return <FolderGit2 style={{ width: '0.85rem', height: '0.85rem' }} />;
      case 'course': return <BookOpen style={{ width: '0.85rem', height: '0.85rem' }} />;
      default: return <Bookmark style={{ width: '0.85rem', height: '0.85rem' }} />;
    }
  };

  return (
    <div className="animate-fade-in" style={{ padding: '2rem 0 4rem' }}>
      {/* Title */}
      <div style={{ marginBottom: '2rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
          <span className="badge badge-cyan">Curated Directory</span>
          <span className="badge badge-primary">Official Documentation & Tutorials</span>
        </div>
        <h1 style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>
          Resource <span className="gradient-text">Library</span>
        </h1>
        <p style={{ color: 'var(--text-secondary)', fontSize: '1rem', maxWidth: '800px' }}>
          Direct verified links to official specifications, foundational video courses, and architectural documentation for rapid technical lookup.
        </p>
      </div>

      {/* Filter and Search Bar */}
      <div className="glass-card" style={{ marginBottom: '2rem', padding: '1rem 1.25rem' }}>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', justifyContent: 'space-between', alignItems: 'center' }}>
          {/* Type Filters */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
            {['all', 'doc', 'tutorial', 'course', 'video', 'repo', 'guide'].map(t => (
              <button
                key={t}
                onClick={() => setTypeFilter(t)}
                style={{
                  padding: '0.35rem 0.75rem',
                  borderRadius: 'var(--radius-full)',
                  border: '1px solid',
                  borderColor: typeFilter === t ? 'var(--primary)' : 'var(--border-subtle)',
                  background: typeFilter === t ? 'rgba(99, 102, 241, 0.2)' : 'rgba(255, 255, 255, 0.03)',
                  color: typeFilter === t ? '#a5b4fc' : 'var(--text-secondary)',
                  fontSize: '0.785rem',
                  fontWeight: 600,
                  textTransform: 'capitalize',
                  cursor: 'pointer'
                }}
              >
                {t === 'all' ? 'All Types' : t}
              </button>
            ))}
          </div>

          {/* Search Box */}
          <div style={{ position: 'relative', minWidth: '220px', flex: '1 1 auto', maxWidth: '300px' }}>
            <Search style={{ position: 'absolute', left: '0.75rem', top: '50%', transform: 'translateY(-50%)', width: '0.9rem', height: '0.9rem', color: 'var(--text-muted)' }} />
            <input
              type="text"
              placeholder="Filter resources..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              style={{
                width: '100%',
                padding: '0.45rem 0.85rem 0.45rem 2.15rem',
                borderRadius: 'var(--radius-md)',
                background: 'rgba(255, 255, 255, 0.05)',
                border: '1px solid var(--border-subtle)',
                color: '#fff',
                fontSize: '0.825rem',
                outline: 'none'
              }}
            />
          </div>
        </div>
      </div>

      {/* Grid of Resource Cards */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
        gap: '1.25rem'
      }}>
        {filtered.map(res => (
          <a
            key={res.id}
            href={res.url}
            target="_blank"
            rel="noopener noreferrer"
            className="glass-card"
            style={{
              padding: '1.25rem',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              textDecoration: 'none',
              transition: 'transform 0.2s ease, border-color 0.2s ease'
            }}
          >
            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.75rem' }}>
                <span className="badge badge-primary" style={{ display: 'flex', alignItems: 'center', gap: '0.3rem', fontSize: '0.65rem' }}>
                  {typeIcon(res.type)}
                  {res.type}
                </span>
                <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>
                  {res.moduleTitle}
                </span>
              </div>

              <h3 style={{ fontSize: '1.05rem', color: '#f8fafc', marginBottom: '0.5rem', lineHeight: 1.35 }}>
                {res.title}
              </h3>
              <p style={{ fontSize: '0.825rem', color: 'var(--text-secondary)', lineHeight: 1.5, marginBottom: '1.25rem' }}>
                {res.description}
              </p>
            </div>

            <div style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              fontSize: '0.8rem',
              color: '#818cf8',
              fontWeight: 600,
              borderTop: '1px solid var(--border-subtle)',
              paddingTop: '0.75rem'
            }}>
              <span>Open official link</span>
              <ExternalLink style={{ width: '0.9rem', height: '0.9rem' }} />
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};
