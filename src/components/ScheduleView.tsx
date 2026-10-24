import React, { useState } from 'react';
import { 
  Calendar, 
  Clock, 
  CheckCircle2, 
  Target, 
  ChevronRight, 
  Sparkles,
  Award,
  ArrowRight
} from 'lucide-react';
import { useProgress } from '../context/ProgressContext';
import { DAILY_SCHEDULE } from '../data/scheduleData';

export const ScheduleView: React.FC = () => {
  const { state, toggleTask, setActiveTab } = useProgress();
  const [selectedDayId, setSelectedDayId] = useState<string>('day-oct-24');

  const selectedDay = DAILY_SCHEDULE.find(d => d.id === selectedDayId) || DAILY_SCHEDULE[0];

  return (
    <div className="animate-fade-in" style={{ padding: '2rem 0 4rem' }}>
      {/* Title */}
      <div style={{ marginBottom: '2rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
          <span className="badge badge-primary">Structured 8-Day Roadmap</span>
          <span className="badge badge-cyan">October 24–31, 2026</span>
        </div>
        <h1 style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>
          Daily Sprint <span className="gradient-text">Schedule</span>
        </h1>
        <p style={{ color: 'var(--text-secondary)', fontSize: '1rem', maxWidth: '800px' }}>
          A high-intensity, day-by-day execution plan taking you from baseline resume diagnostics to peak mock-interview readiness by October 31, 2026.
        </p>
      </div>

      {/* Main Grid: Days Navigation Sidebar + Active Day Details */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2rem' }}>
        {/* Left: Day Selector Cards */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
          {DAILY_SCHEDULE.map((day, idx) => {
            const isSelected = day.id === selectedDayId;
            const totalTasks = day.tasks.length;
            const doneTasks = day.tasks.filter(t => !!state.completedTasks[t.id]).length;
            const isDayDone = doneTasks === totalTasks;
            const pct = Math.round((doneTasks / totalTasks) * 100);

            return (
              <div
                key={day.id}
                onClick={() => setSelectedDayId(day.id)}
                className="glass-card"
                style={{
                  cursor: 'pointer',
                  padding: '1rem 1.25rem',
                  border: isSelected ? '1px solid var(--primary)' : '1px solid var(--border-subtle)',
                  background: isSelected ? 'rgba(99, 102, 241, 0.12)' : 'rgba(15, 23, 42, 0.6)',
                  transition: 'all 0.2s ease',
                  position: 'relative'
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.4rem' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <span style={{
                      fontSize: '0.75rem',
                      fontWeight: 700,
                      color: isSelected ? '#a5b4fc' : 'var(--text-muted)',
                      textTransform: 'uppercase'
                    }}>
                      Day {idx + 1}
                    </span>
                    <span style={{
                      fontSize: '0.875rem',
                      fontWeight: 700,
                      color: isSelected ? '#fff' : 'var(--text-primary)'
                    }}>
                      {day.dateLabel}
                    </span>
                  </div>

                  {isDayDone ? (
                    <span className="badge badge-emerald" style={{ fontSize: '0.65rem' }}>
                      <CheckCircle2 style={{ width: '0.75rem', height: '0.75rem' }} /> Complete
                    </span>
                  ) : (
                    <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>
                      {doneTasks}/{totalTasks} ({pct}%)
                    </span>
                  )}
                </div>

                <div style={{ fontSize: '0.9rem', fontWeight: 600, color: '#f8fafc', marginBottom: '0.6rem' }}>
                  {day.title}
                </div>

                <div className="progress-bar-bg" style={{ height: '4px' }}>
                  <div className="progress-bar-fill" style={{ width: `${pct}%`, background: isDayDone ? '#10b981' : 'var(--primary-gradient)' }} />
                </div>
              </div>
            );
          })}
        </div>

        {/* Right: Active Day Drill-down & Action Items */}
        <div>
          <div className="glass-card" style={{ padding: '2rem', background: 'rgba(15, 23, 42, 0.85)' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '1rem', marginBottom: '1.25rem' }}>
              <div>
                <span className="badge badge-cyan" style={{ marginBottom: '0.5rem' }}>
                  {selectedDay.dateLabel} Focus
                </span>
                <h2 style={{ fontSize: '1.5rem', marginBottom: '0.4rem' }}>
                  {selectedDay.title}
                </h2>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.925rem', lineHeight: 1.5 }}>
                  {selectedDay.focus}
                </p>
              </div>

              {selectedDay.id === 'day-oct-31' && (
                <button
                  onClick={() => setActiveTab('mock')}
                  className="btn btn-primary btn-sm"
                >
                  <Sparkles style={{ width: '0.95rem', height: '0.95rem' }} />
                  Launch Mock Interview
                </button>
              )}
            </div>

            {/* Key Deliverable Box */}
            <div style={{
              background: 'rgba(99, 102, 241, 0.08)',
              border: '1px solid rgba(99, 102, 241, 0.25)',
              borderRadius: 'var(--radius-md)',
              padding: '1rem 1.25rem',
              marginBottom: '1.75rem',
              display: 'flex',
              alignItems: 'center',
              gap: '0.75rem'
            }}>
              <Award style={{ width: '1.35rem', height: '1.35rem', color: '#a5b4fc', flexShrink: 0 }} />
              <div>
                <div style={{ fontSize: '0.75rem', fontWeight: 700, color: '#a5b4fc', textTransform: 'uppercase' }}>
                  Key Deliverable of the Day
                </div>
                <div style={{ fontSize: '0.875rem', color: '#f8fafc', fontWeight: 500 }}>
                  {selectedDay.keyDeliverable}
                </div>
              </div>
            </div>

            {/* Daily Tasks Checklist */}
            <div style={{ marginBottom: '1.5rem' }}>
              <h3 style={{ fontSize: '1.05rem', marginBottom: '0.85rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <Target style={{ width: '1rem', height: '1rem', color: '#10b981' }} />
                Daily Action Checklist
              </h3>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                {selectedDay.tasks.map((task, i) => {
                  const isDone = !!state.completedTasks[task.id];
                  return (
                    <label
                      key={task.id}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.85rem',
                        padding: '0.85rem 1rem',
                        borderRadius: 'var(--radius-md)',
                        background: isDone ? 'rgba(16, 185, 129, 0.06)' : 'rgba(255, 255, 255, 0.03)',
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
                        flex: 1,
                        fontSize: '0.9rem',
                        color: isDone ? 'var(--text-muted)' : 'var(--text-primary)',
                        textDecoration: isDone ? 'line-through' : 'none'
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

            {/* Quick Context Switcher */}
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingTop: '1rem', borderTop: '1px solid var(--border-subtle)' }}>
              <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>
                Target Completion: October 31, 2026
              </span>
              <button
                onClick={() => setActiveTab('questions')}
                className="btn btn-secondary btn-sm"
                style={{ gap: '0.35rem' }}
              >
                Practice Interview Questions <ArrowRight style={{ width: '0.85rem', height: '0.85rem' }} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
