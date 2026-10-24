import React, { useState } from 'react';
import { 
  HelpCircle, 
  Search, 
  Filter, 
  CheckCircle2, 
  Clock, 
  AlertCircle, 
  ChevronDown, 
  ChevronUp, 
  Sparkles,
  Award,
  Layers,
  ThumbsUp
} from 'lucide-react';
import { useProgress } from '../context/ProgressContext';
import { INTERVIEW_QUESTIONS } from '../data/questionsData';
import { SelfRating, Difficulty } from '../types';

export const QuestionBankView: React.FC = () => {
  const { state, setQuestionRating } = useProgress();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedModule, setSelectedModule] = useState('all');
  const [selectedRating, setSelectedRating] = useState<string>('all');
  const [expandedId, setExpandedId] = useState<string | null>('q-1');

  // Filter modules available
  const moduleOptions = [
    { id: 'all', label: 'All Modules' },
    { id: 'react-js', label: 'React.js' },
    { id: 'javascript-fundamentals', label: 'JavaScript' },
    { id: 'nodejs-express-rest', label: 'Node / REST' },
    { id: 'postgresql-sql', label: 'PostgreSQL / SQL' },
    { id: 'python-fastapi', label: 'Python / FastAPI' },
    { id: 'generative-ai-llm', label: 'GenAI / LLMs' },
    { id: 'rag-vector-search', label: 'RAG & Vector' },
    { id: 'speech-ai-production', label: 'Speech & Production' }
  ];

  const filteredQuestions = INTERVIEW_QUESTIONS.filter(q => {
    const matchesModule = selectedModule === 'all' || q.moduleId === selectedModule;
    const currentRating = state.questionRatings[q.id] || 'Not yet';
    const matchesRating = selectedRating === 'all' || currentRating === selectedRating;
    const matchesSearch = 
      q.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      q.whatTheyAreTesting.toLowerCase().includes(searchQuery.toLowerCase()) ||
      q.answerOutline.some(a => a.toLowerCase().includes(searchQuery.toLowerCase()));

    return matchesModule && matchesRating && matchesSearch;
  });

  const ratingCounts = {
    total: INTERVIEW_QUESTIONS.length,
    confident: INTERVIEW_QUESTIONS.filter(q => state.questionRatings[q.id] === 'Confident').length,
    needsPractice: INTERVIEW_QUESTIONS.filter(q => state.questionRatings[q.id] === 'Needs practice').length,
    notYet: INTERVIEW_QUESTIONS.filter(q => !state.questionRatings[q.id] || state.questionRatings[q.id] === 'Not yet').length,
  };

  const difficultyBadge = (diff: Difficulty) => {
    switch (diff) {
      case 'Beginner': return <span className="badge badge-cyan">Beginner</span>;
      case 'Intermediate': return <span className="badge badge-primary">Intermediate</span>;
      case 'Advanced': return <span className="badge badge-rose">Advanced</span>;
    }
  };

  return (
    <div className="animate-fade-in" style={{ padding: '2rem 0 4rem' }}>
      {/* Title */}
      <div style={{ marginBottom: '2rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
          <span className="badge badge-primary">20 Core Production Questions</span>
          <span className="badge badge-emerald">Concise Answer Frameworks</span>
        </div>
        <h1 style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>
          Technical Interview <span className="gradient-text">Question Bank</span>
        </h1>
        <p style={{ color: 'var(--text-secondary)', fontSize: '1rem', maxWidth: '800px' }}>
          Each question is structured with interviewer objectives, concise frameworks (no memorized jargon), key insights, follow-up questions, and interactive self-evaluation.
        </p>
      </div>

      {/* Scorecard Bar */}
      <div className="glass-card" style={{ marginBottom: '2rem', padding: '1.25rem 1.5rem' }}>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1.5rem', alignItems: 'center', justifyContent: 'space-between' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '2rem', flexWrap: 'wrap' }}>
            <div>
              <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', textTransform: 'uppercase' }}>Total Questions</div>
              <div style={{ fontSize: '1.25rem', fontWeight: 800 }}>{ratingCounts.total}</div>
            </div>
            <div>
              <div style={{ fontSize: '0.75rem', color: '#10b981', textTransform: 'uppercase' }}>Confident</div>
              <div style={{ fontSize: '1.25rem', fontWeight: 800, color: '#10b981' }}>{ratingCounts.confident}</div>
            </div>
            <div>
              <div style={{ fontSize: '0.75rem', color: '#f59e0b', textTransform: 'uppercase' }}>Needs Practice</div>
              <div style={{ fontSize: '1.25rem', fontWeight: 800, color: '#f59e0b' }}>{ratingCounts.needsPractice}</div>
            </div>
            <div>
              <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', textTransform: 'uppercase' }}>Not Yet Reviewed</div>
              <div style={{ fontSize: '1.25rem', fontWeight: 800, color: 'var(--text-muted)' }}>{ratingCounts.notYet}</div>
            </div>
          </div>

          <div style={{ minWidth: '180px', flex: '1 1 auto', maxWidth: '280px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.75rem', color: 'var(--text-muted)', marginBottom: '0.35rem' }}>
              <span>Readiness</span>
              <span>{Math.round((ratingCounts.confident / ratingCounts.total) * 100)}%</span>
            </div>
            <div className="progress-bar-bg" style={{ height: '8px' }}>
              <div 
                className="progress-bar-fill" 
                style={{ width: `${Math.round((ratingCounts.confident / ratingCounts.total) * 100)}%`, background: '#10b981' }} 
              />
            </div>
          </div>
        </div>
      </div>

      {/* Filters & Search */}
      <div className="glass-card" style={{ marginBottom: '2rem', padding: '1rem 1.25rem' }}>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', justifyContent: 'space-between', alignItems: 'center' }}>
          {/* Module Selector */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
            {moduleOptions.map(opt => (
              <button
                key={opt.id}
                onClick={() => setSelectedModule(opt.id)}
                style={{
                  padding: '0.35rem 0.75rem',
                  borderRadius: 'var(--radius-full)',
                  border: '1px solid',
                  borderColor: selectedModule === opt.id ? 'var(--primary)' : 'var(--border-subtle)',
                  background: selectedModule === opt.id ? 'rgba(99, 102, 241, 0.2)' : 'rgba(255, 255, 255, 0.03)',
                  color: selectedModule === opt.id ? '#a5b4fc' : 'var(--text-secondary)',
                  fontSize: '0.785rem',
                  fontWeight: 600,
                  cursor: 'pointer'
                }}
              >
                {opt.label}
              </button>
            ))}
          </div>

          {/* Search Box */}
          <div style={{ position: 'relative', minWidth: '220px', flex: '1 1 auto', maxWidth: '300px' }}>
            <Search style={{ position: 'absolute', left: '0.75rem', top: '50%', transform: 'translateY(-50%)', width: '0.9rem', height: '0.9rem', color: 'var(--text-muted)' }} />
            <input
              type="text"
              placeholder="Search question keywords..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
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

      {/* Questions Accordion List */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
        {filteredQuestions.map((q) => {
          const isExpanded = expandedId === q.id;
          const currentRating: SelfRating = state.questionRatings[q.id] || 'Not yet';

          return (
            <div
              key={q.id}
              className="glass-card"
              style={{
                padding: '0',
                overflow: 'hidden',
                border: currentRating === 'Confident' 
                  ? '1px solid rgba(16, 185, 129, 0.3)' 
                  : currentRating === 'Needs practice'
                  ? '1px solid rgba(245, 158, 11, 0.3)'
                  : '1px solid var(--border-subtle)'
              }}
            >
              {/* Card Header */}
              <div
                onClick={() => setExpandedId(isExpanded ? null : q.id)}
                style={{
                  padding: '1.25rem 1.5rem',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  gap: '1rem',
                  cursor: 'pointer',
                  background: isExpanded ? 'rgba(255, 255, 255, 0.02)' : 'transparent',
                  borderBottom: isExpanded ? '1px solid var(--border-subtle)' : 'none'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem', flex: 1 }}>
                  <span style={{
                    width: '2rem',
                    height: '2rem',
                    borderRadius: 'var(--radius-full)',
                    background: 'rgba(99, 102, 241, 0.15)',
                    color: '#a5b4fc',
                    display: 'grid',
                    placeContent: 'center',
                    fontWeight: 700,
                    fontSize: '0.85rem',
                    flexShrink: 0
                  }}>
                    {q.questionNumber}
                  </span>

                  <div>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '0.35rem' }}>
                      <span className="badge badge-primary" style={{ fontSize: '0.65rem' }}>{q.moduleName}</span>
                      {difficultyBadge(q.difficulty)}
                      {currentRating === 'Confident' && (
                        <span className="badge badge-emerald" style={{ fontSize: '0.65rem' }}>Confident</span>
                      )}
                      {currentRating === 'Needs practice' && (
                        <span className="badge badge-amber" style={{ fontSize: '0.65rem' }}>Needs Practice</span>
                      )}
                    </div>
                    <h3 style={{ fontSize: '1.1rem', fontWeight: 600, color: '#f8fafc', margin: 0, lineHeight: 1.4 }}>
                      {q.question}
                    </h3>
                  </div>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', flexShrink: 0 }}>
                  <button
                    style={{
                      background: 'rgba(255, 255, 255, 0.05)',
                      border: '1px solid var(--border-subtle)',
                      borderRadius: 'var(--radius-sm)',
                      padding: '0.4rem',
                      color: 'var(--text-secondary)',
                      cursor: 'pointer'
                    }}
                    aria-label="Expand question"
                  >
                    {isExpanded ? <ChevronUp style={{ width: '1.1rem', height: '1.1rem' }} /> : <ChevronDown style={{ width: '1.1rem', height: '1.1rem' }} />}
                  </button>
                </div>
              </div>

              {/* Card Body */}
              {isExpanded && (
                <div style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                  {/* What Interviewer is Testing */}
                  <div style={{
                    background: 'rgba(99, 102, 241, 0.05)',
                    border: '1px solid rgba(99, 102, 241, 0.2)',
                    borderRadius: 'var(--radius-md)',
                    padding: '1rem'
                  }}>
                    <div style={{ fontSize: '0.75rem', fontWeight: 700, color: '#818cf8', textTransform: 'uppercase', marginBottom: '0.25rem' }}>
                      🎯 What the Interviewer is Evaluating
                    </div>
                    <p style={{ fontSize: '0.875rem', color: '#e2e8f0', margin: 0, lineHeight: 1.5 }}>
                      {q.whatTheyAreTesting}
                    </p>
                  </div>

                  {/* Concise Answer Outline */}
                  <div>
                    <h4 style={{ fontSize: '0.95rem', fontWeight: 700, color: '#f8fafc', marginBottom: '0.75rem' }}>
                      Structured Answer Outline (Direct Framework):
                    </h4>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
                      {q.answerOutline.map((point, idx) => (
                        <div
                          key={idx}
                          style={{
                            display: 'flex',
                            alignItems: 'flex-start',
                            gap: '0.75rem',
                            padding: '0.75rem 1rem',
                            background: 'rgba(255, 255, 255, 0.02)',
                            borderRadius: 'var(--radius-sm)',
                            border: '1px solid rgba(255, 255, 255, 0.04)'
                          }}
                        >
                          <span style={{
                            width: '1.25rem',
                            height: '1.25rem',
                            borderRadius: '50%',
                            background: 'rgba(99, 102, 241, 0.2)',
                            color: '#a5b4fc',
                            display: 'grid',
                            placeContent: 'center',
                            fontSize: '0.75rem',
                            fontWeight: 700,
                            flexShrink: 0,
                            marginTop: '0.1rem'
                          }}>
                            {idx + 1}
                          </span>
                          <span style={{ fontSize: '0.875rem', color: '#e2e8f0', lineHeight: 1.5 }}>
                            {point}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Key Insight */}
                  <div style={{
                    background: 'rgba(16, 185, 129, 0.06)',
                    border: '1px solid rgba(16, 185, 129, 0.25)',
                    borderRadius: 'var(--radius-md)',
                    padding: '0.85rem 1rem'
                  }}>
                    <span style={{ fontSize: '0.75rem', fontWeight: 700, color: '#6ee7b7', textTransform: 'uppercase', display: 'block', marginBottom: '0.2rem' }}>
                      💡 Senior Engineer Key Insight:
                    </span>
                    <span style={{ fontSize: '0.875rem', color: '#f8fafc', lineHeight: 1.5 }}>
                      {q.keyInsight}
                    </span>
                  </div>

                  {/* Follow-up Question */}
                  <div style={{
                    background: 'rgba(245, 158, 11, 0.06)',
                    border: '1px solid rgba(245, 158, 11, 0.25)',
                    borderRadius: 'var(--radius-md)',
                    padding: '0.85rem 1rem'
                  }}>
                    <span style={{ fontSize: '0.75rem', fontWeight: 700, color: '#fcd34d', textTransform: 'uppercase', display: 'block', marginBottom: '0.2rem' }}>
                      ❓ Anticipated Follow-up Question:
                    </span>
                    <span style={{ fontSize: '0.875rem', color: '#f8fafc', fontStyle: 'italic' }}>
                      "{q.followUpQuestion}"
                    </span>
                  </div>

                  {/* Interactive Self Rating */}
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    flexWrap: 'wrap',
                    gap: '1rem',
                    paddingTop: '1rem',
                    borderTop: '1px solid var(--border-subtle)'
                  }}>
                    <span style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', fontWeight: 600 }}>
                      Self-Evaluation for this question:
                    </span>

                    <div style={{ display: 'flex', gap: '0.5rem' }}>
                      {(['Not yet', 'Needs practice', 'Confident'] as SelfRating[]).map(r => {
                        const isCurrent = currentRating === r;
                        return (
                          <button
                            key={r}
                            onClick={() => setQuestionRating(q.id, r)}
                            style={{
                              padding: '0.35rem 0.85rem',
                              borderRadius: 'var(--radius-md)',
                              border: '1px solid',
                              borderColor: isCurrent 
                                ? (r === 'Confident' ? '#10b981' : r === 'Needs practice' ? '#f59e0b' : '#64748b')
                                : 'var(--border-subtle)',
                              background: isCurrent
                                ? (r === 'Confident' ? 'rgba(16, 185, 129, 0.2)' : r === 'Needs practice' ? 'rgba(245, 158, 11, 0.2)' : 'rgba(255, 255, 255, 0.1)')
                                : 'rgba(255, 255, 255, 0.03)',
                              color: isCurrent 
                                ? (r === 'Confident' ? '#6ee7b7' : r === 'Needs practice' ? '#fcd34d' : '#fff')
                                : 'var(--text-secondary)',
                              fontSize: '0.8rem',
                              fontWeight: 600,
                              cursor: 'pointer',
                              transition: 'all 0.15s ease'
                            }}
                          >
                            {r}
                          </button>
                        );
                      })}
                    </div>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};
