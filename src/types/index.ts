export type Difficulty = 'Beginner' | 'Intermediate' | 'Advanced';
export type SelfRating = 'Not yet' | 'Needs practice' | 'Confident';

export interface ResourceItem {
  id: string;
  title: string;
  url: string;
  type: 'doc' | 'tutorial' | 'course' | 'repo' | 'video' | 'guide';
  description: string;
}

export interface PracticalTask {
  id: string;
  title: string;
  description: string;
  keyTakeaway: string;
}

export interface CurriculumModule {
  id: string;
  number: number;
  title: string;
  tagline: string;
  category: 'frontend' | 'backend' | 'database' | 'ai' | 'devops';
  icon: string;
  topics: string[];
  resources: ResourceItem[];
  practicalTasks: PracticalTask[];
  interviewFocus: string[];
}

export interface DailyScheduleDay {
  id: string;
  dateStr: string;
  dateLabel: string;
  title: string;
  focus: string;
  tasks: {
    id: string;
    text: string;
    estimatedMinutes?: number;
  }[];
  keyDeliverable: string;
}

export interface InterviewQuestion {
  id: string;
  questionNumber: number;
  question: string;
  moduleId: string;
  moduleName: string;
  difficulty: Difficulty;
  whatTheyAreTesting: string;
  answerOutline: string[];
  keyInsight: string;
  followUpQuestion: string;
}

export interface WorksheetSection {
  id: string;
  title: string;
  description: string;
  guidelines: string[];
  suggestedPrompt: string;
  defaultContent: string;
}

export interface ProgressState {
  completedTasks: Record<string, boolean>; // taskId -> boolean
  questionRatings: Record<string, SelfRating>; // questionId -> rating
  moduleConfidence: Record<string, number>; // moduleId -> 1-5
  worksheetNotes: Record<string, string>; // sectionId -> user text
  lastActiveModuleId?: string;
}
