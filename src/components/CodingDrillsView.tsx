import React, { useState, useEffect, useRef } from 'react';
import { 
  Code2, 
  Copy, 
  Check, 
  Play, 
  RotateCcw, 
  Sparkles, 
  Search, 
  Filter, 
  Cpu, 
  Zap,
  Sliders,
  CheckCircle2
} from 'lucide-react';
import { CODING_DRILLS } from '../data/drillsData';

export const CodingDrillsView: React.FC = () => {
  const [selectedDrillId, setSelectedDrillId] = useState(CODING_DRILLS[0].id);
  const [copiedId, setCopiedId] = useState<string | null>(null);

  // Live Debounce interactive workbench state
  const [rawText, setRawText] = useState('');
  const [debouncedValue, setDebouncedValue] = useState('');
  const [rawKeystrokes, setRawKeystrokes] = useState(0);
  const [debouncedTriggers, setDebouncedTriggers] = useState(0);
  const debounceTimerRef = useRef<any>(null);

  const handleRawChange = (val: string) => {
    setRawText(val);
    setRawKeystrokes(prev => prev + 1);

    if (debounceTimerRef.current) {
      clearTimeout(debounceTimerRef.current);
    }
    debounceTimerRef.current = setTimeout(() => {
      setDebouncedValue(val);
      setDebouncedTriggers(prev => prev + 1);
    }, 450);
  };

  const handleCancelDebounce = () => {
    if (debounceTimerRef.current) {
      clearTimeout(debounceTimerRef.current);
      debounceTimerRef.current = null;
    }
  };

  // Live RAG Chunking interactive state
  const [ragChunkSize, setRagChunkSize] = useState(120);
  const [ragOverlap, setRagOverlap] = useState(25);
  const sampleDoc = "Retrieval-Augmented Generation (RAG) grounds Large Language Models on verified domain knowledge. By chunking internal documentation into semantic segments, converting text into vector embeddings, and indexing them in a database like PostgreSQL with pgvector, the system can retrieve the most relevant passages for any user query. A cross-encoder reranker then filters the top-k results before presenting the clean context to the model.";
  
  // Compute chunks dynamically
  const computedChunks: string[] = [];
  let start = 0;
  while (start < sampleDoc.length) {
    const end = Math.min(start + ragChunkSize, sampleDoc.length);
    computedChunks.push(sampleDoc.slice(start, end));
    start += Math.max(1, ragChunkSize - ragOverlap);
    if (start >= sampleDoc.length) break;
  }

  const copyCode = (id: string, code: string) => {
    navigator.clipboard.writeText(code);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const activeDrill = CODING_DRILLS.find(d => d.id === selectedDrillId) || CODING_DRILLS[0];

  return (
    <div className="animate-fade-in" style={{ padding: '2rem 0 4rem' }}>
      {/* Title */}
      <div style={{ marginBottom: '2rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
          <span className="badge badge-primary">Hands-on Execution</span>
          <span className="badge badge-emerald">Interactive Coding Workbenches</span>
        </div>
        <h1 style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>
          Practical Coding <span className="gradient-text">Drills</span>
        </h1>
        <p style={{ color: 'var(--text-secondary)', fontSize: '1rem', maxWidth: '800px' }}>
          Real interview coding drills with live interactive sandboxes. Test your debounce implementation, observe event loop mechanics, and tune RAG chunking parameters in real-time.
        </p>
      </div>

      {/* Two Interactive Live Workbenches */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: '1.5rem', marginBottom: '2.5rem' }}>
        {/* Live Debounce Workbench */}
        <div className="glass-card" style={{ background: 'rgba(15, 23, 42, 0.85)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem' }}>
            <Zap style={{ width: '1.25rem', height: '1.25rem', color: '#f59e0b' }} />
            <h3 style={{ fontSize: '1.1rem' }}>Live Debounce Workbench (450ms Delay)</h3>
          </div>
          <p style={{ fontSize: '0.825rem', color: 'var(--text-secondary)', marginBottom: '1rem' }}>
            Type rapidly below to see raw keystrokes vs debounced trigger efficiency:
          </p>

          <input
            type="text"
            placeholder="Type fast here to test debounce..."
            value={rawText}
            onChange={(e) => handleRawChange(e.target.value)}
            style={{
              width: '100%',
              padding: '0.65rem 0.85rem',
              borderRadius: 'var(--radius-md)',
              background: '#090d16',
              border: '1px solid var(--border-medium)',
              color: '#fff',
              fontSize: '0.9rem',
              marginBottom: '1rem',
              outline: 'none'
            }}
          />

          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem', flexWrap: 'wrap', gap: '0.5rem' }}>
            <div style={{ display: 'flex', gap: '1rem' }}>
              <div>
                <div style={{ fontSize: '0.7rem', color: 'var(--text-muted)' }}>Raw Keystrokes</div>
                <div style={{ fontSize: '1.2rem', fontWeight: 800, color: '#fb7185' }}>{rawKeystrokes}</div>
              </div>
              <div>
                <div style={{ fontSize: '0.7rem', color: 'var(--text-muted)' }}>Debounced Calls</div>
                <div style={{ fontSize: '1.2rem', fontWeight: 800, color: '#10b981' }}>{debouncedTriggers}</div>
              </div>
            </div>

            <button
              onClick={handleCancelDebounce}
              className="btn btn-secondary btn-sm"
              title="Trigger cancel() method"
            >
              Cancel Pending
            </button>
          </div>

          <div style={{
            background: 'rgba(0,0,0,0.3)',
            borderRadius: 'var(--radius-sm)',
            padding: '0.65rem',
            fontSize: '0.8rem',
            color: '#a5b4fc',
            border: '1px solid var(--border-subtle)'
          }}>
            <strong>Latest Debounced Value:</strong> {debouncedValue || '(awaiting input...)'}
          </div>
        </div>

        {/* Live RAG Chunking Calculator */}
        <div className="glass-card" style={{ background: 'rgba(15, 23, 42, 0.85)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem' }}>
            <Sliders style={{ width: '1.25rem', height: '1.25rem', color: '#06b6d4' }} />
            <h3 style={{ fontSize: '1.1rem' }}>RAG Text Chunking Visualizer</h3>
          </div>
          <p style={{ fontSize: '0.825rem', color: 'var(--text-secondary)', marginBottom: '0.75rem' }}>
            Adjust chunk size and overlap sliders to see real-time vector splitting:
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1rem' }}>
            <div>
              <label style={{ fontSize: '0.75rem', color: 'var(--text-muted)', display: 'block', marginBottom: '0.25rem' }}>
                Chunk Size: {ragChunkSize} chars
              </label>
              <input 
                type="range" 
                min={50} 
                max={250} 
                value={ragChunkSize} 
                onChange={(e) => setRagChunkSize(Number(e.target.value))} 
                style={{ width: '100%', accentColor: '#6366f1' }}
              />
            </div>
            <div>
              <label style={{ fontSize: '0.75rem', color: 'var(--text-muted)', display: 'block', marginBottom: '0.25rem' }}>
                Overlap: {ragOverlap} chars
              </label>
              <input 
                type="range" 
                min={0} 
                max={50} 
                value={ragOverlap} 
                onChange={(e) => setRagOverlap(Number(e.target.value))} 
                style={{ width: '100%', accentColor: '#06b6d4' }}
              />
            </div>
          </div>

          <div style={{ fontSize: '0.8rem', color: '#67e8f9', marginBottom: '0.5rem', fontWeight: 600 }}>
            Generated {computedChunks.length} Chunks for Vector Embedding:
          </div>

          <div style={{ maxHeight: '110px', overflowY: 'auto', display: 'flex', flexDirection: 'column', gap: '0.35rem' }}>
            {computedChunks.map((c, i) => (
              <div key={i} style={{ fontSize: '0.75rem', background: 'rgba(255,255,255,0.03)', padding: '0.35rem 0.5rem', borderRadius: '4px', borderLeft: '3px solid #6366f1' }}>
                <strong>Chunk #{i + 1}:</strong> {c}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Code Snippets Library & Explanations */}
      <div className="glass-card" style={{ padding: '2rem' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem', marginBottom: '1.5rem' }}>
          <div>
            <h2 style={{ fontSize: '1.35rem', marginBottom: '0.3rem' }}>
              Canonical Code Implementations
            </h2>
            <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
              Interview-ready, bug-free implementations for whiteboards and live coding rounds.
            </p>
          </div>

          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
            {CODING_DRILLS.map(d => (
              <button
                key={d.id}
                onClick={() => setSelectedDrillId(d.id)}
                style={{
                  padding: '0.4rem 0.85rem',
                  borderRadius: 'var(--radius-md)',
                  border: '1px solid',
                  borderColor: selectedDrillId === d.id ? 'var(--primary)' : 'var(--border-subtle)',
                  background: selectedDrillId === d.id ? 'rgba(99, 102, 241, 0.25)' : 'rgba(255, 255, 255, 0.03)',
                  color: selectedDrillId === d.id ? '#a5b4fc' : 'var(--text-secondary)',
                  fontSize: '0.8rem',
                  fontWeight: 600,
                  cursor: 'pointer'
                }}
              >
                {d.title}
              </button>
            ))}
          </div>
        </div>

        {/* Selected Drill Display */}
        <div style={{ background: '#090d16', borderRadius: 'var(--radius-lg)', border: '1px solid var(--border-subtle)', overflow: 'hidden' }}>
          <div style={{
            padding: '1rem 1.25rem',
            background: 'rgba(255, 255, 255, 0.02)',
            borderBottom: '1px solid var(--border-subtle)',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center'
          }}>
            <div>
              <div style={{ fontSize: '1rem', fontWeight: 700, color: '#f8fafc' }}>
                {activeDrill.title}
              </div>
              <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>
                {activeDrill.module} • {activeDrill.difficulty}
              </div>
            </div>

            <button
              onClick={() => copyCode(activeDrill.id, activeDrill.codeSnippet)}
              className="btn btn-secondary btn-sm"
              style={{ gap: '0.35rem' }}
            >
              {copiedId === activeDrill.id ? <Check style={{ width: '0.85rem', height: '0.85rem', color: '#10b981' }} /> : <Copy style={{ width: '0.85rem', height: '0.85rem' }} />}
              <span>{copiedId === activeDrill.id ? 'Copied' : 'Copy Code'}</span>
            </button>
          </div>

          <pre style={{ margin: 0, padding: '1.25rem', fontSize: '0.85rem', overflowX: 'auto', color: '#e2e8f0', lineHeight: 1.6 }}>
            <code>{activeDrill.codeSnippet}</code>
          </pre>

          <div style={{ padding: '1.25rem', borderTop: '1px solid var(--border-subtle)', background: 'rgba(255, 255, 255, 0.01)' }}>
            <div style={{ fontSize: '0.875rem', color: '#f8fafc', marginBottom: '0.5rem' }}>
              <strong>Architecture & Complexity:</strong> {activeDrill.explanation}
            </div>
            <div style={{ fontSize: '0.8rem', color: '#a5b4fc', fontStyle: 'italic' }}>
              💡 <strong>Interview Pro-Tip:</strong> {activeDrill.testPrompt}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
