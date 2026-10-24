import React from 'react';
import { ProgressProvider, useProgress } from './context/ProgressContext';
import { Navbar } from './components/Navbar';
import { DashboardView } from './components/DashboardView';
import { CurriculumView } from './components/CurriculumView';
import { ScheduleView } from './components/ScheduleView';
import { QuestionBankView } from './components/QuestionBankView';
import { MockInterviewView } from './components/MockInterviewView';
import { ProjectRecallView } from './components/ProjectRecallView';
import { ResourceLibraryView } from './components/ResourceLibraryView';
import { CodingDrillsView } from './components/CodingDrillsView';
import { Globe, Heart, CheckCircle2, ShieldCheck } from 'lucide-react';
import { GithubIcon } from './components/icons/GithubIcon';

const MainContent: React.FC = () => {
  const { activeTab, setActiveTab } = useProgress();

  const renderActiveView = () => {
    switch (activeTab) {
      case 'dashboard':
        return <DashboardView />;
      case 'curriculum':
        return <CurriculumView />;
      case 'schedule':
        return <ScheduleView />;
      case 'questions':
        return <QuestionBankView />;
      case 'mock':
        return <MockInterviewView />;
      case 'worksheet':
        return <ProjectRecallView />;
      case 'resources':
        return <ResourceLibraryView />;
      case 'drills':
        return <CodingDrillsView />;
      default:
        return <DashboardView />;
    }
  };

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Navbar />

      <main className="container" style={{ flex: 1 }}>
        {renderActiveView()}
      </main>

      {/* Footer */}
      <footer style={{
        borderTop: '1px solid var(--border-subtle)',
        background: 'rgba(10, 13, 20, 0.95)',
        padding: '2.5rem 0',
        marginTop: 'auto'
      }}>
        <div className="container" style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '1.5rem'
        }}>
          <div>
            <div style={{ fontWeight: 800, fontSize: '1rem', color: '#f8fafc', marginBottom: '0.25rem' }}>
              Production Interview Mentor
            </div>
            <div style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>
              Full-Stack Developer & Generative AI Engineer Preparation Roadmap • Target: Oct 31, 2026
            </div>
            <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', marginTop: '0.25rem' }}>
              Progress is stored in your local browser storage. No external API keys or secrets required.
            </div>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', flexWrap: 'wrap' }}>
            <a
              href="https://github.com/gayathripriya99/interview-preparation-mentor"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-secondary btn-sm"
              style={{ gap: '0.45rem' }}
            >
              <GithubIcon style={{ width: '0.95rem', height: '0.95rem' }} />
              <span>GitHub Repository</span>
            </a>

            <a
              href="https://vercel.com/gayathripriyacvg-6868s-projects"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-secondary btn-sm"
              style={{ gap: '0.45rem' }}
            >
              <Globe style={{ width: '0.95rem', height: '0.95rem' }} />
              <span>Vercel Projects</span>
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export function App() {
  return (
    <ProgressProvider>
      <MainContent />
    </ProgressProvider>
  );
}

export default App;
