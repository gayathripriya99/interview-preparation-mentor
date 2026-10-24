import React, { useState, useEffect } from 'react';
import { 
  Mic, 
  Play, 
  Pause, 
  RotateCcw, 
  ChevronRight, 
  Eye, 
  EyeOff, 
  CheckCircle2, 
  AlertCircle, 
  Clock, 
  Sparkles,
  Award
} from 'lucide-react';
import { useProgress } from '../context/ProgressContext';
import { INTERVIEW_QUESTIONS } from '../data/questionsData';
import { SelfRating } from '../types';

export const MockInterviewView: React.FC = () => {
  const { state, setQuestionRating, celebrate } = useProgress();

  const [currentIndex, setCurrentIndex] = useState(0);
  const [showAnswer, setShowAnswer] = useState(false);
  const [timerSeconds, setTimerSeconds] = useState(1800); // 30 minutes default
  const [isTimerRunning, setIsTimerRunning] = useState(false);
  const [sessionCompleted, setSessionCompleted] = useState(false);

  // Timer interval
  useEffect(() => {
    let interval: any = null;
    if (isTimerRunning && timerSeconds > 0) {
      interval = setInterval(() => {
        setTimerSeconds(prev => prev - 1);
      }, 1000);
    } else if (timerSeconds === 0) {
      setIsTimerRunning(false);
    }
    return () => clearInterval(interval);
  }, [isTimerRunning, timerSeconds]);

  const currentQ = INTERVIEW_QUESTIONS[currentIndex];
  const currentRating = state.questionRatings[currentQ.id] || 'Not yet';

  const formatTime = (secs: number) => {
    const m = Math.floor(secs / 60);
    const s = secs % 60;
    return `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
  };

  const handleNext = () => {
    setShowAnswer(false);
    if (currentIndex < INTERVIEW_QUESTIONS.length - 1) {
      setCurrentIndex(prev => prev + 1);
    } else {
      setSessionCompleted(true);
      celebrate();
    }
  };

  const handlePrev = () => {
    setShowAnswer(false);
    if (currentIndex > 0) {
      setCurrentIndex(prev => prev - 1);
    }
  };

  const resetSession = () => {
    setCurrentIndex(0);
    setShowAnswer(false);
    setTimerSeconds(1800);
    setIsTimerRunning(false);
    setSessionCompleted(false);
  };

  return (
    <div className="animate-fade-in" style={{ padding: '2rem 0 4rem' }}>
      {/* Title */}
      <div style={{ marginBottom: '2rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
          <span className="badge badge-rose">High-Stakes Simulator</span>
          <span className="badge badge-primary">Timed Mock Interview</span>
        </div>
        <h1 style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>
          Mock Interview <span className="gradient-text">Simulation</span>
        </h1>
        <p style={{ color: 'var(--text-secondary)', fontSize: '1rem', maxWidth: '800px' }}>
          Simulate a real technical round under time pressure. Answer out loud first, then reveal the concise framework to calibrate your verbal clarity and structure.
        </p>
      </div>

      {/* Timer & Controls Bar */}
      <div className="glass-card" style={{ marginBottom: '2rem', padding: '1.25rem 1.75rem' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}>
          {/* Timer Display */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <div style={{
              width: '3rem',
              height: '3rem',
              borderRadius: 'var(--radius-md)',
              background: isTimerRunning ? 'rgba(244, 63, 94, 0.15)' : 'rgba(255, 255, 255, 0.05)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: isTimerRunning ? '#fb7185' : 'var(--text-secondary)'
            }}>
              <Clock style={{ width: '1.5rem', height: '1.5rem' }} />
            </div>
            <div>
              <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', textTransform: 'uppercase' }}>
                Remaining Session Time
              </div>
              <div style={{ fontSize: '1.75rem', fontWeight: 800, fontFamily: 'var(--font-mono)', color: timerSeconds < 300 ? '#fb7185' : '#f8fafc' }}>
                {formatTime(timerSeconds)}
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', flexWrap: 'wrap' }}>
            <button
              onClick={() => setIsTimerRunning(!isTimerRunning)}
              className="btn btn-primary"
              style={{ gap: '0.45rem' }}
            >
              {isTimerRunning ? <Pause style={{ width: '1rem', height: '1rem' }} /> : <Play style={{ width: '1rem', height: '1rem', fill: 'currentColor' }} />}
              <span>{isTimerRunning ? 'Pause' : 'Start Timer'}</span>
            </button>

            <button
              onClick={() => setTimerSeconds(900)} // 15m
              className="btn btn-secondary btn-sm"
            >
              15m
            </button>
            <button
              onClick={() => setTimerSeconds(1800)} // 30m
              className="btn btn-secondary btn-sm"
            >
              30m
            </button>
            <button
              onClick={() => setTimerSeconds(2700)} // 45m
              className="btn btn-secondary btn-sm"
            >
              45m
            </button>

            <button
              onClick={resetSession}
              className="btn btn-secondary btn-sm"
              title="Reset mock session"
            >
              <RotateCcw style={{ width: '0.9rem', height: '0.9rem' }} />
            </button>
          </div>
        </div>
      </div>

      {/* Main Flashcard Card */}
      {!sessionCompleted ? (
        <div className="glass-card" style={{ padding: '2.5rem', minHeight: '440px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
          <div>
            {/* Top Indicator */}
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <span className="badge badge-primary">
                  Question {currentIndex + 1} of {INTERVIEW_QUESTIONS.length}
                </span>
                <span className="badge badge-cyan">
                  {currentQ.moduleName}
                </span>
                <span className="badge badge-rose">
                  {currentQ.difficulty}
                </span>
              </div>

              <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>
                Press "Reveal" after answering out loud
              </span>
            </div>

            {/* Question Text */}
            <h2 style={{ fontSize: 'clamp(1.35rem, 3vw, 1.85rem)', lineHeight: 1.35, marginBottom: '1.5rem', color: '#f8fafc' }}>
              "{currentQ.question}"
            </h2>

            {/* Evaluator Context */}
            <div style={{
              background: 'rgba(255, 255, 255, 0.02)',
              border: '1px solid var(--border-subtle)',
              borderRadius: 'var(--radius-md)',
              padding: '1rem',
              marginBottom: '1.5rem'
            }}>
              <span style={{ fontSize: '0.75rem', fontWeight: 700, color: '#818cf8', textTransform: 'uppercase', display: 'block', marginBottom: '0.25rem' }}>
                Interviewer Perspective:
              </span>
              <p style={{ fontSize: '0.9rem', color: '#cbd5e1', margin: 0, lineHeight: 1.5 }}>
                {currentQ.whatTheyAreTesting}
              </p>
            </div>

            {/* Answer Framework (Hidden until revealed) */}
            {showAnswer ? (
              <div className="animate-fade-in" style={{
                background: 'rgba(15, 23, 42, 0.9)',
                border: '1px solid rgba(99, 102, 241, 0.3)',
                borderRadius: 'var(--radius-md)',
                padding: '1.5rem',
                marginBottom: '1.5rem'
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.75rem' }}>
                  <Sparkles style={{ width: '1rem', height: '1rem', color: '#10b981' }} />
                  <span style={{ fontSize: '0.875rem', fontWeight: 700, color: '#6ee7b7', textTransform: 'uppercase' }}>
                    Concise Answer Framework
                  </span>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.65rem', marginBottom: '1rem' }}>
                  {currentQ.answerOutline.map((p, i) => (
                    <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.65rem', fontSize: '0.875rem', color: '#f8fafc' }}>
                      <span style={{ color: '#818cf8', fontWeight: 700 }}>•</span>
                      <span>{p}</span>
                    </div>
                  ))}
                </div>

                <div style={{ fontSize: '0.825rem', color: '#cbd5e1', borderTop: '1px solid var(--border-subtle)', paddingTop: '0.75rem' }}>
                  <strong>Expected Follow-up:</strong> <em>"{currentQ.followUpQuestion}"</em>
                </div>
              </div>
            ) : (
              <div style={{ textAlign: 'center', padding: '2rem 0' }}>
                <button
                  onClick={() => setShowAnswer(true)}
                  className="btn btn-secondary"
                  style={{ gap: '0.5rem' }}
                >
                  <Eye style={{ width: '1rem', height: '1rem' }} />
                  Reveal Concise Answer Framework
                </button>
              </div>
            )}
          </div>

          {/* Bottom Card Footer: Self Rating and Navigation */}
          <div style={{ borderTop: '1px solid var(--border-subtle)', paddingTop: '1.5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>
                Rate your response:
              </span>
              {(['Not yet', 'Needs practice', 'Confident'] as SelfRating[]).map(r => {
                const isSelected = currentRating === r;
                return (
                  <button
                    key={r}
                    onClick={() => setQuestionRating(currentQ.id, r)}
                    className="btn btn-sm"
                    style={{
                      background: isSelected ? 'rgba(99, 102, 241, 0.25)' : 'rgba(255, 255, 255, 0.04)',
                      borderColor: isSelected ? 'var(--primary)' : 'var(--border-subtle)',
                      color: isSelected ? '#a5b4fc' : 'var(--text-secondary)'
                    }}
                  >
                    {r}
                  </button>
                );
              })}
            </div>

            <div style={{ display: 'flex', gap: '0.75rem' }}>
              <button
                onClick={handlePrev}
                disabled={currentIndex === 0}
                className="btn btn-secondary btn-sm"
                style={{ opacity: currentIndex === 0 ? 0.4 : 1, cursor: currentIndex === 0 ? 'not-allowed' : 'pointer' }}
              >
                Previous
              </button>
              <button
                onClick={handleNext}
                className="btn btn-primary btn-sm"
                style={{ gap: '0.35rem' }}
              >
                <span>{currentIndex === INTERVIEW_QUESTIONS.length - 1 ? 'Finish Round' : 'Next Question'}</span>
                <ChevronRight style={{ width: '0.95rem', height: '0.95rem' }} />
              </button>
            </div>
          </div>
        </div>
      ) : (
        /* Session Completed Screen */
        <div className="glass-card" style={{ padding: '3rem', textAlign: 'center' }}>
          <div style={{
            width: '4rem',
            height: '4rem',
            borderRadius: '50%',
            background: 'rgba(16, 185, 129, 0.15)',
            color: '#10b981',
            display: 'grid',
            placeContent: 'center',
            margin: '0 auto 1.5rem'
          }}>
            <Award style={{ width: '2.5rem', height: '2.5rem' }} />
          </div>
          <h2 style={{ fontSize: '1.75rem', marginBottom: '0.5rem' }}>
            Mock Round Completed!
          </h2>
          <p style={{ color: 'var(--text-secondary)', fontSize: '1rem', maxWidth: '550px', margin: '0 auto 2rem' }}>
            Great work completing all 20 technical questions under simulated interview conditions. Review any questions you marked "Needs practice" before October 31.
          </p>
          <button onClick={resetSession} className="btn btn-primary">
            Start Another Mock Session
          </button>
        </div>
      )}
    </div>
  );
};
