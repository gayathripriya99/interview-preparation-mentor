import React, { useState } from 'react';
import { 
  FileText, 
  Save, 
  Copy, 
  RotateCcw, 
  Check, 
  AlertTriangle, 
  ShieldCheck, 
  Edit3,
  HelpCircle,
  Sparkles
} from 'lucide-react';
import { useProgress } from '../context/ProgressContext';
import { PROJECT_WORKSHEET_SECTIONS } from '../data/projectWorksheetData';

export const ProjectRecallView: React.FC = () => {
  const { state, updateWorksheetNote } = useProgress();
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const copyToClipboard = (id: string, text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  return (
    <div className="animate-fade-in" style={{ padding: '2rem 0 4rem' }}>
      {/* Title */}
      <div style={{ marginBottom: '2rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
          <span className="badge badge-emerald">Truthful Experience Architecture</span>
          <span className="badge badge-primary">Prior Language-Learning Platform</span>
        </div>
        <h1 style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>
          Project Recall <span className="gradient-text">Worksheet</span>
        </h1>
        <p style={{ color: 'var(--text-secondary)', fontSize: '1rem', maxWidth: '800px' }}>
          Never invent project facts in interviews. Use this honest recall worksheet to prepare defensible, real-world explanations of your platform's LSRW flow, APIs, database tables, and production bug resolutions.
        </p>
      </div>

      {/* Honest Boundary Notice Banner */}
      <div style={{
        background: 'rgba(245, 158, 11, 0.08)',
        border: '1px solid rgba(245, 158, 11, 0.3)',
        borderRadius: 'var(--radius-lg)',
        padding: '1.25rem 1.5rem',
        marginBottom: '2.5rem',
        display: 'flex',
        alignItems: 'flex-start',
        gap: '1rem'
      }}>
        <AlertTriangle style={{ width: '1.5rem', height: '1.5rem', color: '#f59e0b', flexShrink: 0, marginTop: '0.15rem' }} />
        <div>
          <h3 style={{ fontSize: '1.05rem', color: '#fcd34d', marginBottom: '0.35rem' }}>
            Interviewer Defense Principle: Honesty & Recall Boundaries
          </h3>
          <p style={{ fontSize: '0.875rem', color: '#e2e8f0', lineHeight: 1.5, margin: 0 }}>
            Senior interviewers will drill into the deepest details of your claimed projects. Clearly distinguish between <strong>"What I personally coded"</strong> vs <strong>"What the wider team built"</strong>. For any detail you do not immediately recall, label it as <em>"Recall / Confirm"</em> and never guess numbers or pretend you built proprietary ML models if your role was frontend/API integration.
          </p>
        </div>
      </div>

      {/* Sections List */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
        {PROJECT_WORKSHEET_SECTIONS.map((section) => {
          const currentContent = state.worksheetNotes[section.id] !== undefined
            ? state.worksheetNotes[section.id]
            : section.defaultContent;

          return (
            <div key={section.id} className="glass-card" style={{ padding: '1.75rem' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '1rem', marginBottom: '1rem' }}>
                <div>
                  <h2 style={{ fontSize: '1.3rem', marginBottom: '0.35rem', color: '#f8fafc' }}>
                    {section.title}
                  </h2>
                  <p style={{ fontSize: '0.875rem', color: 'var(--text-secondary)', maxWidth: '750px', lineHeight: 1.5 }}>
                    {section.description}
                  </p>
                </div>

                <div style={{ display: 'flex', gap: '0.5rem' }}>
                  <button
                    onClick={() => copyToClipboard(section.id, currentContent)}
                    className="btn btn-secondary btn-sm"
                  >
                    {copiedId === section.id ? <Check style={{ width: '0.85rem', height: '0.85rem', color: '#10b981' }} /> : <Copy style={{ width: '0.85rem', height: '0.85rem' }} />}
                    <span>{copiedId === section.id ? 'Copied' : 'Copy'}</span>
                  </button>

                  <button
                    onClick={() => updateWorksheetNote(section.id, section.defaultContent)}
                    className="btn btn-secondary btn-sm"
                    title="Reset section notes to default template"
                  >
                    <RotateCcw style={{ width: '0.85rem', height: '0.85rem' }} />
                    <span>Reset</span>
                  </button>
                </div>
              </div>

              {/* Guidelines Chips */}
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '1.25rem' }}>
                {section.guidelines.map((g, idx) => (
                  <span
                    key={idx}
                    style={{
                      fontSize: '0.75rem',
                      background: 'rgba(255, 255, 255, 0.03)',
                      border: '1px solid var(--border-subtle)',
                      borderRadius: 'var(--radius-sm)',
                      padding: '0.3rem 0.65rem',
                      color: '#cbd5e1'
                    }}
                  >
                    ✓ {g}
                  </span>
                ))}
              </div>

              {/* Editable Text Area */}
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.75rem', color: 'var(--text-muted)', marginBottom: '0.4rem' }}>
                  <span style={{ display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
                    <Edit3 style={{ width: '0.8rem', height: '0.8rem' }} /> Edit your personal recall notes (auto-saved to localStorage):
                  </span>
                  <span>{currentContent.length} chars</span>
                </div>
                <textarea
                  rows={8}
                  value={currentContent}
                  onChange={(e) => updateWorksheetNote(section.id, e.target.value)}
                  style={{
                    width: '100%',
                    padding: '1rem',
                    background: '#0a0d14',
                    border: '1px solid var(--border-subtle)',
                    borderRadius: 'var(--radius-md)',
                    color: '#f8fafc',
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.85rem',
                    lineHeight: 1.6,
                    resize: 'vertical',
                    outline: 'none'
                  }}
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
