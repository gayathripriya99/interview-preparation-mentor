import React, { useState } from 'react';
import { 
  Compass, 
  Calendar, 
  BookOpen, 
  HelpCircle, 
  Mic, 
  FileText, 
  Bookmark, 
  Code2, 
  RotateCcw, 
  Download, 
  Upload, 
  CheckCircle2, 
  Menu, 
  X,
  ExternalLink
} from 'lucide-react';
import { useProgress } from '../context/ProgressContext';

export const Navbar: React.FC = () => {
  const { 
    activeTab, 
    setActiveTab, 
    completedTaskCount, 
    totalTaskCount, 
    overallPercentage, 
    resetProgress, 
    exportProgressJSON,
    importProgressJSON
  } = useProgress();

  const [showResetModal, setShowResetModal] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [importStatus, setImportStatus] = useState<string | null>(null);

  const navItems = [
    { id: 'dashboard', label: 'Dashboard', icon: Compass },
    { id: 'schedule', label: 'Oct 24-31 Schedule', icon: Calendar },
    { id: 'curriculum', label: '8 Modules', icon: BookOpen },
    { id: 'questions', label: 'Question Bank', icon: HelpCircle },
    { id: 'mock', label: 'Mock Interview', icon: Mic },
    { id: 'worksheet', label: 'Project Worksheet', icon: FileText },
    { id: 'resources', label: 'Resources', icon: Bookmark },
    { id: 'drills', label: 'Coding Drills', icon: Code2 },
  ];

  const handleFileImport = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        const text = event.target?.result as string;
        const success = importProgressJSON(text);
        if (success) {
          setImportStatus('Progress imported successfully!');
          setTimeout(() => setImportStatus(null), 3000);
        } else {
          setImportStatus('Failed to import JSON.');
          setTimeout(() => setImportStatus(null), 3000);
        }
      };
      reader.readAsText(file);
    }
  };

  return (
    <>
      <header style={{
        position: 'sticky',
        top: 0,
        zIndex: 50,
        backgroundColor: 'rgba(10, 13, 20, 0.85)',
        backdropFilter: 'blur(16px)',
        borderBottom: '1px solid var(--border-subtle)',
      }}>
        <div className="container" style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          height: '4.5rem',
          gap: '1rem'
        }}>
          {/* Logo & Subtitle */}
          <div 
            onClick={() => setActiveTab('dashboard')} 
            style={{ display: 'flex', alignItems: 'center', gap: '0.85rem', cursor: 'pointer', flexShrink: 0 }}
          >
            <div style={{
              width: '2.5rem',
              height: '2.5rem',
              borderRadius: 'var(--radius-md)',
              background: 'var(--primary-gradient)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: 'var(--shadow-glow)'
            }}>
              <Compass style={{ color: '#fff', width: '1.4rem', height: '1.4rem' }} />
            </div>
            <div>
              <div style={{ fontSize: '1.05rem', fontWeight: 800, letterSpacing: '-0.02em', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <span>Production Interview Mentor</span>
                <span className="badge badge-primary" style={{ fontSize: '0.65rem' }}>Oct 24–31</span>
              </div>
              <div style={{ fontSize: '0.75rem', color: 'var(--text-secondary)' }}>
                Full-Stack + Generative AI Roadmap
              </div>
            </div>
          </div>

          {/* Desktop Nav Tabs */}
          <nav style={{
            display: 'none',
            alignItems: 'center',
            gap: '0.35rem',
            overflowX: 'auto',
            padding: '0.25rem'
          }} className="desktop-nav">
            {navItems.map(item => {
              const Icon = item.icon;
              const isActive = activeTab === item.id;
              return (
                <button
                  key={item.id}
                  id={`nav-${item.id}`}
                  onClick={() => setActiveTab(item.id)}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.45rem',
                    padding: '0.5rem 0.85rem',
                    borderRadius: 'var(--radius-md)',
                    border: 'none',
                    background: isActive ? 'rgba(99, 102, 241, 0.15)' : 'transparent',
                    color: isActive ? '#a5b4fc' : 'var(--text-secondary)',
                    fontWeight: isActive ? 600 : 500,
                    fontSize: '0.825rem',
                    cursor: 'pointer',
                    transition: 'all 0.15s ease',
                    whiteSpace: 'nowrap',
                    borderBottom: isActive ? '2px solid var(--primary)' : '2px solid transparent'
                  }}
                >
                  <Icon style={{ width: '0.95rem', height: '0.95rem' }} />
                  {item.label}
                </button>
              );
            })}
          </nav>

          {/* Progress Status and Utility Controls */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            {/* Progress Badge */}
            <div 
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.65rem',
                background: 'rgba(255, 255, 255, 0.04)',
                border: '1px solid var(--border-subtle)',
                borderRadius: 'var(--radius-full)',
                padding: '0.35rem 0.85rem',
              }}
              title="Progress stored in your browser localStorage"
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
                <CheckCircle2 style={{ width: '1rem', height: '1rem', color: '#10b981' }} />
                <span style={{ fontSize: '0.8rem', fontWeight: 700, color: '#f8fafc' }}>
                  {overallPercentage}%
                </span>
              </div>
              <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>
                ({completedTaskCount}/{totalTaskCount})
              </span>
            </div>

            {/* Export & Reset Actions */}
            <button
              onClick={exportProgressJSON}
              className="btn btn-secondary btn-sm"
              title="Export progress to JSON file"
              style={{ padding: '0.45rem 0.65rem' }}
            >
              <Download style={{ width: '0.95rem', height: '0.95rem' }} />
              <span className="hide-mobile">Export</span>
            </button>

            <label
              className="btn btn-secondary btn-sm"
              title="Import progress from JSON file"
              style={{ padding: '0.45rem 0.65rem', cursor: 'pointer' }}
            >
              <Upload style={{ width: '0.95rem', height: '0.95rem' }} />
              <span className="hide-mobile">Import</span>
              <input type="file" accept=".json" onChange={handleFileImport} style={{ display: 'none' }} />
            </label>

            <button
              onClick={() => setShowResetModal(true)}
              className="btn btn-danger btn-sm"
              title="Reset progress"
              style={{ padding: '0.45rem 0.65rem' }}
            >
              <RotateCcw style={{ width: '0.95rem', height: '0.95rem' }} />
              <span className="hide-mobile">Reset</span>
            </button>

            {/* Mobile Hamburger */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="btn btn-secondary btn-sm mobile-menu-btn"
              style={{ padding: '0.45rem 0.65rem', display: 'none' }}
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X style={{ width: '1.1rem', height: '1.1rem' }} /> : <Menu style={{ width: '1.1rem', height: '1.1rem' }} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Dropdown */}
        {mobileMenuOpen && (
          <div style={{
            background: 'var(--bg-secondary)',
            borderTop: '1px solid var(--border-subtle)',
            padding: '1rem',
            display: 'flex',
            flexDirection: 'column',
            gap: '0.5rem'
          }}>
            {navItems.map(item => {
              const Icon = item.icon;
              const isActive = activeTab === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => {
                    setActiveTab(item.id);
                    setMobileMenuOpen(false);
                  }}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.75rem',
                    padding: '0.75rem 1rem',
                    borderRadius: 'var(--radius-md)',
                    border: 'none',
                    background: isActive ? 'rgba(99, 102, 241, 0.15)' : 'transparent',
                    color: isActive ? '#a5b4fc' : 'var(--text-secondary)',
                    fontWeight: isActive ? 600 : 500,
                    fontSize: '0.9rem',
                    textAlign: 'left',
                    cursor: 'pointer'
                  }}
                >
                  <Icon style={{ width: '1.1rem', height: '1.1rem' }} />
                  {item.label}
                </button>
              );
            })}
          </div>
        )}

        {importStatus && (
          <div style={{
            background: 'rgba(16, 185, 129, 0.2)',
            color: '#6ee7b7',
            padding: '0.5rem',
            textAlign: 'center',
            fontSize: '0.85rem',
            fontWeight: 600,
            borderBottom: '1px solid rgba(16, 185, 129, 0.3)'
          }}>
            {importStatus}
          </div>
        )}
      </header>

      {/* Reset Confirmation Modal */}
      {showResetModal && (
        <div style={{
          position: 'fixed',
          inset: 0,
          backgroundColor: 'rgba(0, 0, 0, 0.75)',
          backdropFilter: 'blur(8px)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 100,
          padding: '1rem'
        }}>
          <div className="glass-card" style={{ maxWidth: '440px', width: '100%', background: '#0f172a' }}>
            <h3 style={{ fontSize: '1.25rem', marginBottom: '0.75rem', color: '#fb7185', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <RotateCcw style={{ width: '1.25rem', height: '1.25rem' }} />
              Reset All Progress?
            </h3>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', marginBottom: '1.5rem', lineHeight: 1.5 }}>
              This will clear all your checklist completions, self-ratings, and custom worksheet notes in this browser's localStorage. This action cannot be undone unless you have exported your JSON.
            </p>
            <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '0.75rem' }}>
              <button 
                onClick={() => setShowResetModal(false)} 
                className="btn btn-secondary"
              >
                Cancel
              </button>
              <button 
                onClick={() => {
                  resetProgress();
                  setShowResetModal(false);
                }} 
                className="btn btn-danger"
              >
                Yes, Reset Everything
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Responsive media query styles */}
      <style>{`
        @media (min-width: 992px) {
          .desktop-nav {
            display: flex !important;
          }
        }
        @media (max-width: 991px) {
          .mobile-menu-btn {
            display: inline-flex !important;
          }
          .hide-mobile {
            display: none !important;
          }
        }
      `}</style>
    </>
  );
};
