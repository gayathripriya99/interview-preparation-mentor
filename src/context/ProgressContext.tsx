import React, { createContext, useContext, useState, useEffect, useMemo, ReactNode } from 'react';
import confetti from 'canvas-confetti';
import { ProgressState, SelfRating } from '../types';
import { CURRICULUM_MODULES } from '../data/curriculumData';
import { DAILY_SCHEDULE } from '../data/scheduleData';
import { INTERVIEW_QUESTIONS } from '../data/questionsData';
import { PROJECT_WORKSHEET_SECTIONS } from '../data/projectWorksheetData';

const STORAGE_KEY = 'production_interview_mentor_state_v1';

interface ProgressContextType {
  state: ProgressState;
  toggleTask: (taskId: string) => void;
  setQuestionRating: (questionId: string, rating: SelfRating) => void;
  setModuleConfidence: (moduleId: string, score: number) => void;
  updateWorksheetNote: (sectionId: string, content: string) => void;
  resetProgress: () => void;
  exportProgressJSON: () => void;
  importProgressJSON: (jsonString: string) => boolean;
  totalTaskCount: number;
  completedTaskCount: number;
  overallPercentage: number;
  nextBestTask: { id: string; title: string; category: string; targetView: string } | null;
  activeTab: string;
  setActiveTab: (tab: string) => void;
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  celebrate: () => void;
}

const defaultState: ProgressState = {
  completedTasks: {},
  questionRatings: {},
  moduleConfidence: {
    'react-js': 3,
    'javascript-fundamentals': 3,
    'nodejs-express-rest': 3,
    'postgresql-sql': 3,
    'python-fastapi': 3,
    'generative-ai-llm': 3,
    'rag-vector-search': 3,
    'speech-ai-production': 3
  },
  worksheetNotes: {},
  lastActiveModuleId: 'react-js'
};

const ProgressContext = createContext<ProgressContextType | undefined>(undefined);

export const ProgressProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [state, setState] = useState<ProgressState>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        return { ...defaultState, ...JSON.parse(saved) };
      }
    } catch (e) {
      console.error('Failed to load progress from localStorage', e);
    }
    return defaultState;
  });

  const [activeTab, setActiveTab] = useState<string>('dashboard');
  const [searchQuery, setSearchQuery] = useState<string>('');

  // Auto-save to localStorage
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
    } catch (e) {
      console.error('Failed to save progress to localStorage', e);
    }
  }, [state]);

  const celebrate = () => {
    confetti({
      particleCount: 60,
      spread: 70,
      origin: { y: 0.7 }
    });
  };

  const toggleTask = (taskId: string) => {
    setState(prev => {
      const wasCompleted = !!prev.completedTasks[taskId];
      const updated = {
        ...prev,
        completedTasks: {
          ...prev.completedTasks,
          [taskId]: !wasCompleted
        }
      };
      if (!wasCompleted) {
        celebrate();
      }
      return updated;
    });
  };

  const setQuestionRating = (questionId: string, rating: SelfRating) => {
    setState(prev => ({
      ...prev,
      questionRatings: {
        ...prev.questionRatings,
        [questionId]: rating
      }
    }));
  };

  const setModuleConfidence = (moduleId: string, score: number) => {
    setState(prev => ({
      ...prev,
      moduleConfidence: {
        ...prev.moduleConfidence,
        [moduleId]: score
      }
    }));
  };

  const updateWorksheetNote = (sectionId: string, content: string) => {
    setState(prev => ({
      ...prev,
      worksheetNotes: {
        ...prev.worksheetNotes,
        [sectionId]: content
      }
    }));
  };

  const resetProgress = () => {
    localStorage.removeItem(STORAGE_KEY);
    setState(defaultState);
  };

  const exportProgressJSON = () => {
    const dataStr = 'data:text/json;charset=utf-8,' + encodeURIComponent(JSON.stringify(state, null, 2));
    const downloadAnchor = document.createElement('a');
    downloadAnchor.setAttribute('href', dataStr);
    downloadAnchor.setAttribute('download', `interview_mentor_progress_${new Date().toISOString().slice(0, 10)}.json`);
    document.body.appendChild(downloadAnchor);
    downloadAnchor.click();
    downloadAnchor.remove();
  };

  const importProgressJSON = (jsonString: string): boolean => {
    try {
      const parsed = JSON.parse(jsonString);
      if (typeof parsed === 'object' && parsed !== null) {
        setState({ ...defaultState, ...parsed });
        return true;
      }
    } catch (e) {
      console.error('Invalid JSON import', e);
    }
    return false;
  };

  // Calculate all checklist tasks: schedule tasks + curriculum practical tasks
  const allTaskIds = useMemo(() => {
    const ids: { id: string; title: string; category: string; targetView: string }[] = [];
    
    // Daily schedule tasks
    DAILY_SCHEDULE.forEach(day => {
      day.tasks.forEach(t => {
        ids.push({
          id: t.id,
          title: t.text,
          category: day.title,
          targetView: 'schedule'
        });
      });
    });

    // Module practical tasks
    CURRICULUM_MODULES.forEach(mod => {
      mod.practicalTasks.forEach(pt => {
        ids.push({
          id: pt.id,
          title: pt.title,
          category: mod.title,
          targetView: 'curriculum'
        });
      });
    });

    return ids;
  }, []);

  const totalTaskCount = allTaskIds.length;
  const completedTaskCount = useMemo(() => {
    return allTaskIds.filter(t => !!state.completedTasks[t.id]).length;
  }, [allTaskIds, state.completedTasks]);

  const overallPercentage = totalTaskCount > 0 ? Math.round((completedTaskCount / totalTaskCount) * 100) : 0;

  // Next best task: find first incomplete task
  const nextBestTask = useMemo(() => {
    return allTaskIds.find(t => !state.completedTasks[t.id]) || null;
  }, [allTaskIds, state.completedTasks]);

  return (
    <ProgressContext.Provider
      value={{
        state,
        toggleTask,
        setQuestionRating,
        setModuleConfidence,
        updateWorksheetNote,
        resetProgress,
        exportProgressJSON,
        importProgressJSON,
        totalTaskCount,
        completedTaskCount,
        overallPercentage,
        nextBestTask,
        activeTab,
        setActiveTab,
        searchQuery,
        setSearchQuery,
        celebrate
      }}
    >
      {children}
    </ProgressContext.Provider>
  );
};

export const useProgress = () => {
  const context = useContext(ProgressContext);
  if (!context) {
    throw new Error('useProgress must be used within a ProgressProvider');
  }
  return context;
};
