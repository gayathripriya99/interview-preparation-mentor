import React, { useState } from 'react';
import { 
  Layers, 
  Code, 
  Server, 
  Database, 
  Terminal, 
  Cpu, 
  Network, 
  Radio, 
  ExternalLink, 
  CheckCircle2, 
  ChevronDown, 
  ChevronUp, 
  Star, 
  Search,
  BookOpen,
  Wrench,
  Sparkles
} from 'lucide-react';
import { useProgress } from '../context/ProgressContext';
import { CURRICULUM_MODULES } from '../data/curriculumData';

export const CurriculumView: React.FC = () => {
  const { state, toggleTask, setModuleConfidence } = useProgress();
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [expandedModules, setExpandedModules] = useState<Record<string, boolean>>({
    'react-js': true,
    'javascript-fundamentals': true
  });

  const iconMap: Record<string, React.ReactNode> = {
    Layers: <Layers style={{ width: '1.25rem', height: '1.25rem' }} />,
    Code: <Code style={{ width: '1.25rem', height: '1.25rem' }} />,
    Server: <Server style={{ width: '1.25rem', height: '1.25rem' }} />,
    Database: <Database style={{ width: '1.25rem', height: '1.25rem' }} />,
    Terminal: <Terminal style={{ width: '1.25rem', height: '1.25rem' }} />,
    Cpu: <Cpu style={{ width: '1.25rem', height: '1.25rem' }} />,
    Network: <Network style={{ width: '1.25rem', height: '1.25rem' }} />,
    Radio: <Radio style={{ width: '1.25rem', height: '1.25rem' }} />,
  };

  const toggleExpand = (id: string) => {
    setExpandedModules(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const filteredModules = CURRICULUM_MODULES.filter(mod => {
    const matchesCategory = selectedCategory === 'all' || mod.category === selectedCategory;
    const matchesSearch = 
      mod.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      mod.topics.some(t => t.toLowerCase().includes(searchTerm.toLowerCase())) ||
      mod.practicalTasks.some(pt => pt.title.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="animate-fade-in" style={{ padding: '2rem 0 4rem' }}>
      {/* Header */}
      <div style={{ marginBottom: '2rem' }}>
        <h1 style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>
          8 Core Curriculum <span className="gradient-text">Modules</span>
        </h1>
        <p style={{ color: 'var(--text-secondary)', fontSize: '1rem', maxWidth: '800px' }}>
          Complete, unfiltered preparation scope for modern Full-Stack and Generative AI roles. Every module includes deep topics, verified documentation links, and practical tasks.
        </p>
      </div>

      {/* Filter and Search Controls */}
      <div className="glass-card" style={{ marginBottom: '2rem', padding: '1rem 1.25rem' }}>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', justifyContent: 'space-between', alignItems: 'center' }}>
          {/* Category Chips */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
            {['all', 'frontend', 'backend', 'database', 'ai', 'devops'].map(cat => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                style={{
                  padding: '0.4rem 0.85rem',
                  borderRadius: 'var(--radius-full)',
                  border: '1px solid',
                  borderColor: selectedCategory === cat ? 'var(--primary)' : 'var(--border-subtle)',
                  background: selectedCategory === cat ? 'rgba(99, 102, 241, 0.2)' : 'rgba(255, 255, 255, 0.03)',
                  color: selectedCategory === cat ? '#a5b4fc' : 'var(--text-secondary)',
                  fontWeight: 600,
                  fontSize: '0.8rem',
                  textTransform: 'capitalize',
                  cursor: 'pointer',
                  transition: 'all 0.15s ease'
                }}
              >
                {cat === 'all' ? 'All Modules (8)' : cat}
              </button>
            ))}
          </div>

          {/* Search Box */}
          <div style={{ position: 'relative', minWidth: '240px', flex: '1 1 auto', maxWidth: '340px' }}>
            <Search style={{ position: 'absolute', left: '0.75rem', top: '50%', transform: 'translateY(-50%)', width: '0.95rem', height: '0.95rem', color: 'var(--text-muted)' }} />
            <input
              type="text"
              placeholder="Search topics or tasks..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              style={{
                width: '100%',
                padding: '0.45rem 0.85rem 0.45rem 2.25rem',
                borderRadius: 'var(--radius-md)',
                background: 'rgba(255, 255, 255, 0.05)',
                border: '1px solid var(--border-subtle)',
                color: '#fff',
                fontSize: '0.85rem',
                outline: 'none'
              }}
            />
          </div>
        </div>
      </div>

      {/* Modules List */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
        {filteredModules.map(mod => {
          const isExpanded = !!expandedModules[mod.id];
          const practicalTotal = mod.practicalTasks.length;
          const practicalDone = mod.practicalTasks.filter(pt => !!state.completedTasks[pt.id]).length;
          const currentConfidence = state.moduleConfidence[mod.id] || 3;

          return (
            <div key={mod.id} className="glass-card" style={{ padding: '0', overflow: 'hidden' }}>
              {/* Module Header Bar */}
              <div
                onClick={() => toggleExpand(mod.id)}
                style={{
                  padding: '1.5rem',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  cursor: 'pointer',
                  background: isExpanded ? 'rgba(255, 255, 255, 0.02)' : 'transparent',
                  borderBottom: isExpanded ? '1px solid var(--border-subtle)' : 'none',
                  transition: 'background 0.2s ease'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', flex: 1 }}>
                  <div style={{
                    width: '3rem',
                    height: '3rem',
                    borderRadius: 'var(--radius-md)',
                    background: 'rgba(99, 102, 241, 0.15)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#818cf8',
                    flexShrink: 0
                  }}>
                    {iconMap[mod.icon] || <Layers />}
                  </div>
                  <div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', marginBottom: '0.25rem', flexWrap: 'wrap' }}>
                      <span className="badge badge-primary">Module {mod.number}</span>
                      <h2 style={{ fontSize: '1.25rem', fontWeight: 700, margin: 0 }}>{mod.title}</h2>
                      <span className="badge badge-cyan" style={{ textTransform: 'capitalize' }}>{mod.category}</span>
                    </div>
                    <p style={{ fontSize: '0.875rem', color: 'var(--text-secondary)', margin: 0 }}>
                      {mod.tagline}
                    </p>
                  </div>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', flexShrink: 0 }}>
                  <div style={{ textAlign: 'right', display: 'none' }} className="hide-sm">
                    <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>
                      Practical Tasks
                    </div>
                    <div style={{ fontSize: '0.9rem', fontWeight: 700, color: practicalDone === practicalTotal ? '#10b981' : '#f8fafc' }}>
                      {practicalDone} / {practicalTotal} Completed
                    </div>
                  </div>

                  <button
                    style={{
                      background: 'rgba(255, 255, 255, 0.05)',
                      border: '1px solid var(--border-subtle)',
                      borderRadius: 'var(--radius-sm)',
                      padding: '0.4rem',
                      color: 'var(--text-secondary)',
                      cursor: 'pointer'
                    }}
                    aria-label="Toggle details"
                  >
                    {isExpanded ? <ChevronUp style={{ width: '1.25rem', height: '1.25rem' }} /> : <ChevronDown style={{ width: '1.25rem', height: '1.25rem' }} />}
                  </button>
                </div>
              </div>

              {/* Collapsible Content */}
              {isExpanded && (
                <div style={{ padding: '1.75rem', display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                  {/* Confidence Rating Bar */}
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    flexWrap: 'wrap',
                    gap: '1rem',
                    background: 'rgba(255, 255, 255, 0.02)',
                    padding: '0.85rem 1.25rem',
                    borderRadius: 'var(--radius-md)',
                    border: '1px solid var(--border-subtle)'
                  }}>
                    <span style={{ fontSize: '0.875rem', color: 'var(--text-secondary)', fontWeight: 600 }}>
                      Self-Assessed Confidence Level (1-5):
                    </span>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
                      {[1, 2, 3, 4, 5].map(star => (
                        <button
                          key={star}
                          onClick={() => setModuleConfidence(mod.id, star)}
                          style={{
                            background: 'transparent',
                            border: 'none',
                            cursor: 'pointer',
                            padding: '0.2rem',
                            color: star <= currentConfidence ? '#f59e0b' : 'var(--text-muted)',
                            transition: 'color 0.15s ease'
                          }}
                          title={`Rate confidence ${star} of 5`}
                        >
                          <Star style={{ width: '1.25rem', height: '1.25rem', fill: star <= currentConfidence ? '#f59e0b' : 'none' }} />
                        </button>
                      ))}
                      <span style={{ fontSize: '0.85rem', fontWeight: 700, marginLeft: '0.5rem', color: '#f59e0b' }}>
                        {currentConfidence}/5
                      </span>
                    </div>
                  </div>

                  {/* Core Topics Checklist / Breakdown */}
                  <div>
                    <h3 style={{ fontSize: '1rem', marginBottom: '0.85rem', display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#f8fafc' }}>
                      <BookOpen style={{ width: '1rem', height: '1rem', color: '#818cf8' }} />
                      Comprehensive Topics Syllabus ({mod.topics.length} Areas)
                    </h3>
                    <div style={{
                      display: 'grid',
                      gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
                      gap: '0.65rem'
                    }}>
                      {mod.topics.map((topic, i) => (
                        <div
                          key={i}
                          style={{
                            display: 'flex',
                            alignItems: 'flex-start',
                            gap: '0.65rem',
                            padding: '0.65rem 0.85rem',
                            borderRadius: 'var(--radius-sm)',
                            background: 'rgba(255, 255, 255, 0.02)',
                            border: '1px solid rgba(255, 255, 255, 0.04)',
                            fontSize: '0.85rem',
                            lineHeight: 1.5,
                            color: '#e2e8f0'
                          }}
                        >
                          <span style={{
                            width: '6px',
                            height: '6px',
                            borderRadius: '50%',
                            background: 'var(--primary)',
                            marginTop: '0.55rem',
                            flexShrink: 0
                          }} />
                          <span>{topic}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Practical Tasks Checklist */}
                  <div>
                    <h3 style={{ fontSize: '1rem', marginBottom: '0.85rem', display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#f8fafc' }}>
                      <Wrench style={{ width: '1rem', height: '1rem', color: '#10b981' }} />
                      Practical Hands-on Drills & Tasks ({practicalDone}/{practicalTotal})
                    </h3>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                      {mod.practicalTasks.map(task => {
                        const isDone = !!state.completedTasks[task.id];
                        return (
                          <div
                            key={task.id}
                            style={{
                              display: 'flex',
                              alignItems: 'flex-start',
                              gap: '0.85rem',
                              padding: '1rem',
                              borderRadius: 'var(--radius-md)',
                              background: isDone ? 'rgba(16, 185, 129, 0.06)' : 'rgba(255, 255, 255, 0.03)',
                              border: isDone ? '1px solid rgba(16, 185, 129, 0.3)' : '1px solid var(--border-subtle)',
                              transition: 'all 0.15s ease'
                            }}
                          >
                            <input
                              type="checkbox"
                              className="custom-checkbox"
                              checked={isDone}
                              onChange={() => toggleTask(task.id)}
                              style={{ marginTop: '0.2rem' }}
                            />
                            <div style={{ flex: 1 }}>
                              <div style={{
                                fontSize: '0.95rem',
                                fontWeight: 600,
                                color: isDone ? '#94a3b8' : '#f8fafc',
                                textDecoration: isDone ? 'line-through' : 'none',
                                marginBottom: '0.25rem'
                              }}>
                                {task.title}
                              </div>
                              <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', marginBottom: '0.5rem' }}>
                                {task.description}
                              </p>
                              <div style={{
                                fontSize: '0.785rem',
                                color: '#a5b4fc',
                                background: 'rgba(99, 102, 241, 0.08)',
                                padding: '0.4rem 0.65rem',
                                borderRadius: 'var(--radius-sm)',
                                display: 'inline-block'
                              }}>
                                💡 <strong>Key Takeaway:</strong> {task.keyTakeaway}
                              </div>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>

                  {/* Resource Links Library */}
                  <div>
                    <h3 style={{ fontSize: '1rem', marginBottom: '0.85rem', display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#f8fafc' }}>
                      <Sparkles style={{ width: '1rem', height: '1rem', color: '#06b6d4' }} />
                      Verified Tutorials & Documentation Links ({mod.resources.length})
                    </h3>
                    <div style={{
                      display: 'grid',
                      gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))',
                      gap: '0.75rem'
                    }}>
                      {mod.resources.map(res => (
                        <a
                          key={res.id}
                          href={res.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="glass-card"
                          style={{
                            padding: '0.85rem 1rem',
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'space-between',
                            textDecoration: 'none',
                            background: 'rgba(255, 255, 255, 0.02)'
                          }}
                        >
                          <div>
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.35rem' }}>
                              <span className="badge badge-cyan" style={{ fontSize: '0.65rem' }}>
                                {res.type}
                              </span>
                              <ExternalLink style={{ width: '0.85rem', height: '0.85rem', color: 'var(--text-muted)' }} />
                            </div>
                            <div style={{ fontSize: '0.875rem', fontWeight: 600, color: '#f8fafc', marginBottom: '0.25rem' }}>
                              {res.title}
                            </div>
                            <div style={{ fontSize: '0.75rem', color: 'var(--text-secondary)', lineHeight: 1.4 }}>
                              {res.description}
                            </div>
                          </div>
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>

      <style>{`
        @media (min-width: 640px) {
          .hide-sm {
            display: block !important;
          }
        }
      `}</style>
    </div>
  );
};
