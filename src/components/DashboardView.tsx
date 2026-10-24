import React from 'react';
import { 
  Play, 
  CheckCircle2, 
  Calendar, 
  Clock, 
  Layers, 
  Code, 
  Server, 
  Database, 
  Terminal, 
  Cpu, 
  Network, 
  Radio, 
  ArrowRight, 
  Target, 
  Sparkles,
  HelpCircle,
  FileText,
  AlertCircle
} from 'lucide-react';
import { useProgress } from '../context/ProgressContext';
import { CURRICULUM_MODULES } from '../data/curriculumData';
import { DAILY_SCHEDULE } from '../data/scheduleData';

export const DashboardView: React.FC = () => {
  const { 
    completedTaskCount, 
    totalTaskCount, 
    overallPercentage, 
    nextBestTask, 
    setActiveTab, 
    toggleTask,
    state
  } = useProgress();

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

  // Determine Today's plan (Assume Oct 24, 2026 default baseline)
  const todaySchedule = DAILY_SCHEDULE[0]; // Oct 24, 2026

  return (
    <div className="animate-fade-in" style={{ padding: '2rem 0 4rem' }}>
      {/* Hero Section */}
      <div 
        className="glass-card" 
        style={{ 
          marginBottom: '2rem', 
          position: 'relative', 
          overflow: 'hidden',
          padding: '2.5rem',
          border: '1px solid rgba(99, 102, 241, 0.25)',
          background: 'radial-gradient(ellipse at 80% 20%, rgba(99, 102, 241, 0.15) 0%, rgba(15, 23, 42, 0.8) 70%)'
        }}
      >
        <div style={{ maxWidth: '800px' }}>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '1rem' }}>
            <span className="badge badge-primary">
              <Sparkles style={{ width: '0.85rem', height: '0.85rem' }} /> Intensive Preparation Sprint
            </span>
            <span className="badge badge-cyan">
              <Calendar style={{ width: '0.85rem', height: '0.85rem' }} /> October 24–31, 2026
            </span>
            <span className="badge badge-emerald">
              <Target style={{ width: '0.85rem', height: '0.85rem' }} /> Full-Stack + Generative AI
            </span>
          </div>

          <h1 style={{ fontSize: 'clamp(1.85rem, 4vw, 2.75rem)', lineHeight: 1.15, marginBottom: '0.75rem' }}>
            Production <span className="gradient-text">Interview Mentor</span>
          </h1>
          <p style={{ fontSize: '1.15rem', color: 'var(--text-secondary)', marginBottom: '1.75rem', fontWeight: 400 }}>
            A practical, interview-first roadmap for Full-Stack + Generative AI engineers. Master React, Node, PostgreSQL, Python, FastAPI, LLMs, RAG, and Speech AI.
          </p>

          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', alignItems: 'center' }}>
            <button
              onClick={() => {
                if (nextBestTask) {
                  setActiveTab(nextBestTask.targetView);
                } else {
                  setActiveTab('curriculum');
                }
              }}
              className="btn btn-primary"
              style={{ padding: '0.85rem 1.75rem', fontSize: '1rem' }}
            >
              <Play style={{ width: '1.1rem', height: '1.1rem', fill: 'currentColor' }} />
              Start Learning
            </button>

            <button
              onClick={() => setActiveTab('questions')}
              className="btn btn-secondary"
              style={{ padding: '0.85rem 1.5rem', fontSize: '0.95rem' }}
            >
              <HelpCircle style={{ width: '1.1rem', height: '1.1rem' }} />
              20 Core Interview Questions
            </button>

            <button
              onClick={() => setActiveTab('worksheet')}
              className="btn btn-secondary"
              style={{ padding: '0.85rem 1.5rem', fontSize: '0.95rem' }}
            >
              <FileText style={{ width: '1.1rem', height: '1.1rem' }} />
              Project Recall Worksheet
            </button>
          </div>
        </div>

        {/* Big Percentage Meter */}
        <div style={{
          position: 'absolute',
          right: '2.5rem',
          top: '50%',
          transform: 'translateY(-50%)',
          display: 'none',
          textAlign: 'center'
        }} className="hero-meter">
          <div style={{
            fontSize: '3.75rem',
            fontWeight: 800,
            background: 'var(--primary-gradient)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            lineHeight: 1
          }}>
            {overallPercentage}%
          </div>
          <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginTop: '0.25rem' }}>
            Roadmap Completed
          </div>
          <div style={{ fontSize: '0.75rem', color: '#10b981', fontWeight: 600, marginTop: '0.2rem' }}>
            {completedTaskCount} of {totalTaskCount} tasks
          </div>
        </div>
      </div>

      {/* Progress & Next Task Bar */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '1.25rem', marginBottom: '2.5rem' }}>
        {/* Progress Tracker Card */}
        <div className="glass-card">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.75rem' }}>
            <span style={{ fontSize: '0.875rem', fontWeight: 600, color: 'var(--text-secondary)' }}>
              Overall Preparation Progress
            </span>
            <span style={{ fontSize: '1rem', fontWeight: 700, color: 'var(--text-accent)' }}>
              {overallPercentage}% Complete
            </span>
          </div>
          <div className="progress-bar-bg" style={{ height: '10px', marginBottom: '0.75rem' }}>
            <div className="progress-bar-fill" style={{ width: `${overallPercentage}%` }} />
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.775rem', color: 'var(--text-muted)' }}>
            <span>{completedTaskCount} tasks verified</span>
            <span>Target: October 31, 2026</span>
          </div>
        </div>

        {/* Smart Next Task Card */}
        <div className="glass-card" style={{ borderLeft: '4px solid #6366f1' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
            <Target style={{ width: '1rem', height: '1rem', color: '#818cf8' }} />
            <span style={{ fontSize: '0.875rem', fontWeight: 600, color: '#818cf8' }}>
              Suggested Next Task
            </span>
          </div>
          {nextBestTask ? (
            <div>
              <p style={{ fontSize: '0.95rem', fontWeight: 600, color: '#f8fafc', marginBottom: '0.5rem', lineHeight: 1.4 }}>
                {nextBestTask.title}
              </p>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span className="badge badge-primary" style={{ fontSize: '0.7rem' }}>
                  {nextBestTask.category}
                </span>
                <button
                  onClick={() => setActiveTab(nextBestTask.targetView)}
                  className="btn btn-secondary btn-sm"
                  style={{ gap: '0.25rem' }}
                >
                  Go to task <ArrowRight style={{ width: '0.85rem', height: '0.85rem' }} />
                </button>
              </div>
            </div>
          ) : (
            <div style={{ color: '#10b981', display: 'flex', alignItems: 'center', gap: '0.5rem', padding: '0.5rem 0' }}>
              <CheckCircle2 style={{ width: '1.25rem', height: '1.25rem' }} />
              <span style={{ fontWeight: 600 }}>All roadmap tasks completed! You are ready for mock interviews.</span>
            </div>
          )}
        </div>
      </div>

      {/* Today's Schedule Highlight */}
      <div className="glass-card" style={{ marginBottom: '2.5rem', background: 'rgba(15, 23, 42, 0.9)' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem', marginBottom: '1.25rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <div style={{
              width: '2.25rem',
              height: '2.25rem',
              borderRadius: 'var(--radius-md)',
              background: 'rgba(6, 182, 212, 0.15)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#67e8f9'
            }}>
              <Calendar style={{ width: '1.2rem', height: '1.2rem' }} />
            </div>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <h3 style={{ fontSize: '1.15rem' }}>Today's Sprint: {todaySchedule.dateLabel}</h3>
                <span className="badge badge-cyan">{todaySchedule.title}</span>
              </div>
              <div style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
                {todaySchedule.focus}
              </div>
            </div>
          </div>

          <button 
            onClick={() => setActiveTab('schedule')} 
            className="btn btn-secondary btn-sm"
            style={{ gap: '0.35rem' }}
          >
            Full 8-Day Roadmap <ArrowRight style={{ width: '0.85rem', height: '0.85rem' }} />
          </button>
        </div>

        {/* Today's Tasks Checklist */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
          {todaySchedule.tasks.map(task => {
            const isDone = !!state.completedTasks[task.id];
            return (
              <label
                key={task.id}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.85rem',
                  padding: '0.75rem 1rem',
                  borderRadius: 'var(--radius-md)',
                  background: isDone ? 'rgba(16, 185, 129, 0.08)' : 'rgba(255, 255, 255, 0.03)',
                  border: isDone ? '1px solid rgba(16, 185, 129, 0.25)' : '1px solid var(--border-subtle)',
                  cursor: 'pointer',
                  transition: 'all 0.15s ease'
                }}
              >
                <input
                  type="checkbox"
                  className="custom-checkbox"
                  checked={isDone}
                  onChange={() => toggleTask(task.id)}
                />
                <span style={{
                  fontSize: '0.9rem',
                  color: isDone ? 'var(--text-muted)' : 'var(--text-primary)',
                  textDecoration: isDone ? 'line-through' : 'none',
                  flex: 1
                }}>
                  {task.text}
                </span>
                {task.estimatedMinutes && (
                  <span style={{ display: 'flex', alignItems: 'center', gap: '0.25rem', fontSize: '0.75rem', color: 'var(--text-muted)' }}>
                    <Clock style={{ width: '0.75rem', height: '0.75rem' }} />
                    {task.estimatedMinutes}m
                  </span>
                )}
              </label>
            );
          })}
        </div>
      </div>

      {/* 8 Learning Modules Quick Links */}
      <div style={{ marginBottom: '2.5rem' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.25rem' }}>
          <div>
            <h2 style={{ fontSize: '1.4rem', marginBottom: '0.25rem' }}>
              The 8 Core Curriculum Modules
            </h2>
            <p style={{ fontSize: '0.875rem', color: 'var(--text-secondary)' }}>
              Full coverage across Full-Stack engineering, Systems Architecture, and Generative AI.
            </p>
          </div>
          <button 
            onClick={() => setActiveTab('curriculum')}
            className="btn btn-secondary btn-sm"
          >
            Explore all topics <ArrowRight style={{ width: '0.85rem', height: '0.85rem' }} />
          </button>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
          gap: '1.25rem'
        }}>
          {CURRICULUM_MODULES.map(mod => {
            const practicalCount = mod.practicalTasks.length;
            const completedPractical = mod.practicalTasks.filter(pt => !!state.completedTasks[pt.id]).length;
            const pct = Math.round((completedPractical / practicalCount) * 100);

            return (
              <div 
                key={mod.id} 
                className="glass-card"
                onClick={() => setActiveTab('curriculum')}
                style={{
                  cursor: 'pointer',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  padding: '1.5rem',
                  position: 'relative'
                }}
              >
                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.85rem' }}>
                    <div style={{
                      width: '2.5rem',
                      height: '2.5rem',
                      borderRadius: 'var(--radius-md)',
                      background: 'rgba(99, 102, 241, 0.12)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: 'var(--text-accent)'
                    }}>
                      {iconMap[mod.icon] || <Layers />}
                    </div>
                    <span className="badge badge-primary">
                      Module {mod.number}
                    </span>
                  </div>

                  <h3 style={{ fontSize: '1.15rem', marginBottom: '0.4rem', color: '#f8fafc' }}>
                    {mod.title}
                  </h3>
                  <p style={{ fontSize: '0.825rem', color: 'var(--text-secondary)', lineHeight: 1.5, marginBottom: '1.25rem' }}>
                    {mod.tagline}
                  </p>
                </div>

                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.75rem', color: 'var(--text-muted)', marginBottom: '0.4rem' }}>
                    <span>{mod.topics.length} topics</span>
                    <span>{completedPractical}/{practicalCount} drills done ({pct}%)</span>
                  </div>
                  <div className="progress-bar-bg" style={{ height: '6px' }}>
                    <div className="progress-bar-fill" style={{ width: `${pct}%` }} />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Media query helper */}
      <style>{`
        @media (min-width: 900px) {
          .hero-meter {
            display: block !important;
          }
        }
      `}</style>
    </div>
  );
};
