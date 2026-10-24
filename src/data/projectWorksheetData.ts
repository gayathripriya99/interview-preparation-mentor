import { WorksheetSection } from '../types';

export const PROJECT_WORKSHEET_SECTIONS: WorksheetSection[] = [
  {
    id: 'ws-distinction',
    title: '1. "I Personally Implemented" vs "The Team Implemented"',
    description: 'Establish crystal-clear boundaries between what you personally coded, architected, or debugged versus what peers or senior staff delivered. Interviewers detect inflated ownership immediately.',
    guidelines: [
      'Be 100% honest: "My focus was on building the interactive React exercise cards and integrating audio recording APIs, while the core ML models were hosted by our backend team."',
      'Highlight your specific collaboration points and API contracts.',
      'Specify files, hooks, or components you wrote from scratch.'
    ],
    suggestedPrompt: 'What exact features did you write line-by-line? What did you integrate with that someone else built?',
    defaultContent: `[Recall / Confirm Checklist]
- I personally built:
  • React client audio recorder component with visual recording state & timer
  • Pronunciation exercise interactive cards with instant feedback UI
  • State management for user daily streak & progress synchronization
  • Integration with backend REST endpoints for audio blob upload

- The team / seniors implemented:
  • Whisper ASR deployment & GPU inference cluster
  • Core database migration pipelines & DBA optimizations
  • OAuth2 authentication microservice`
  },
  {
    id: 'ws-journey',
    title: '2. User Journey & Core Pages',
    description: 'Walk through the user lifecycle from onboarding to daily study streaks and mastery milestones.',
    guidelines: [
      'Keep it linear and focused on learner progression.',
      'Mention how state is preserved between page transitions.',
      'Note responsiveness on mobile devices.'
    ],
    suggestedPrompt: 'What are the 4-5 key views an active learner navigates through daily?',
    defaultContent: `[Recall / Confirm Pages]
1. Landing / Onboarding: Level placement diagnostic test (A1 to C2 CEFR levels).
2. Learner Dashboard: Daily streak counter, recommended daily lesson, progress meters.
3. Interactive Lesson Player (LSRW): The main activity view cycling through audio drills, speech recording, text reading, and sentence construction.
4. Review & Flashcard Deck: Spaced-repetition vocabulary flashcards.
5. Profile & Analytics: Historical accuracy trends, pronunciation weakness breakdown.`
  },
  {
    id: 'ws-lsrw',
    title: '3. LSRW Pedagogical Features (Listening, Speaking, Reading, Writing)',
    description: 'Detail each of the four language learning pillars and the technical mechanisms powering them.',
    guidelines: [
      'Listening: Audio streaming, scrubbing, playback rate (0.75x, 1x), transcript sync.',
      'Speaking: Microphone permission, MediaRecorder capture, chunk upload, pronunciation scoring.',
      'Reading: Dual-subtitles, click-to-lookup tokenized vocabulary tooltip.',
      'Writing: Input validation, grammar check response parsing, diff highlights.'
    ],
    suggestedPrompt: 'How did your UI handle each of the four core skills technically?',
    defaultContent: `[LSRW Implementation Details]
• Listening:
  - Audio playback using HTML5 Audio element wrapped in custom useAudioPlayer hook.
  - Variable speed playback (0.8x, 1.0x, 1.2x) for pronunciation clarity.
  - Sentence timestamps mapped to active highlight state.

• Speaking:
  - MediaRecorder API with audio/webm (Chromium) and audio/mp4 (Safari) fallbacks.
  - Visual audio waveform meter showing recording loudness.
  - Submits recorded blob -> backend calculates acoustic similarity score (0-100%).

• Reading:
  - Tokenized sentence rendering where words are clickable spans.
  - Clicking a word queries dictionary cache for translation & audio pronunciation snippet.

• Writing:
  - Controlled textarea with debounce validation.
  - Feedback UI highlights spelling mistakes and suggests grammatical improvements.`
  },
  {
    id: 'ws-react-arch',
    title: '4. React Component Structure & State Flow',
    description: 'Explain component hierarchy, props vs context, custom hooks, and state lifecycles.',
    guidelines: [
      'Identify top-level context/providers (Auth, Audio, Theme, LessonContext).',
      'Describe custom hooks created (e.g. useAudioRecorder, useLessonProgress).',
      'Explain how state resets between consecutive exercise questions.'
    ],
    suggestedPrompt: 'If you had to sketch the component tree on a whiteboard, what are the primary parent and child components?',
    defaultContent: `[Component Tree & State Flow]
<AppProvider> (AuthContext, QueryClientProvider)
  └── <LessonSessionLayout>
        ├── <LessonProgressBar percent={progress} streak={streak} />
        ├── <AudioWaveformVisualizer isRecording={isRecording} />
        ├── <ExerciseCardContainer activeStep={currentStep}>
        │     ├── <SpeakingExercise onComplete={handleAnswerSubmit} />
        │     ├── <ListeningDrill audioUrl={activeItem.audio} />
        │     └── <WritingPrompt schema={activeItem.prompt} />
        └── <FeedbackFooter status={resultStatus} onNext={goToNextQuestion} />

State Management:
- Local state (useState) for audio recording timers and input fields.
- Context / TanStack Query for lesson payload, user stats, and server synchronization.`
  },
  {
    id: 'ws-api-endpoints',
    title: '5. Backend API Endpoints & Request / Response Contracts',
    description: 'Provide REST or RPC endpoint specifications. Use standard patterns and mark exact URLs as placeholders to confirm.',
    guidelines: [
      'Use proper HTTP verbs: GET for retrieval, POST for creation, PATCH for progress updates.',
      'Always include status codes and error response structure.',
      'Never claim proprietary confidential URLs—use clean placeholder patterns.'
    ],
    suggestedPrompt: 'What endpoints did the frontend consume during an active session?',
    defaultContent: `[Proposed / Recall API Contracts]
1. GET /api/v1/lessons/:lessonId
   - Request: Headers: Authorization: Bearer <token>
   - Response (200 OK):
     {
       "id": "les_49102",
       "title": "Conversational French: Ordering at a Café",
       "level": "A2",
       "exercises": [ ... ]
     }

2. POST /api/v1/exercises/:exerciseId/submit-audio
   - Request: Multipart FormData { audioFile: Blob, durationMs: 4200 }
   - Response (200 OK):
     {
       "transcription": "Je voudrais un café s'il vous plaît",
       "accuracyScore": 94,
       "phonemeGaps": ["s'il vous"],
       "passed": true
     }

3. PATCH /api/v1/users/me/progress
   - Request: { "completedLessonId": "les_49102", "xpEarned": 50 }
   - Response (200 OK): { "currentStreak": 14, "totalXp": 1250 }`
  },
  {
    id: 'ws-postgres-schema',
    title: '6. PostgreSQL Entities & Relational Schema',
    description: 'Outline database tables, foreign key constraints, indexes, and progress tracking tables.',
    guidelines: [
      'Tables: users, courses, lessons, exercises, user_progress, audio_submissions.',
      'Highlight primary keys (UUID) and composite indexes on user_id + lesson_id.',
      'Explain cascade deletion and transaction protection.'
    ],
    suggestedPrompt: 'How were user attempts and completion records modeled in relational tables?',
    defaultContent: `[Proposed / Recall Relational Tables]
• users: (id UUID PK, email VARCHAR, created_at TIMESTAMPTZ, target_lang VARCHAR)
• courses: (id UUID PK, title VARCHAR, difficulty_level VARCHAR)
• lessons: (id UUID PK, course_id FK, order_index INT, title VARCHAR, content_json JSONB)
• exercises: (id UUID PK, lesson_id FK, exercise_type VARCHAR, prompt_text TEXT, reference_audio_url TEXT)
• user_progress: (
    id UUID PK, 
    user_id UUID FK REFERENCES users(id), 
    lesson_id UUID FK REFERENCES lessons(id), 
    status VARCHAR (in_progress, completed), 
    completed_at TIMESTAMPTZ,
    UNIQUE(user_id, lesson_id)
  )
• audio_submissions: (
    id UUID PK,
    user_id UUID FK,
    exercise_id UUID FK,
    audio_s3_key VARCHAR,
    accuracy_score INT,
    created_at TIMESTAMPTZ
  )`
  },
  {
    id: 'ws-bugs-fixes',
    title: '7. Production Bugs Diagnosed & Engineering Fixes',
    description: 'Document 2-3 genuine engineering challenges solved under production constraints.',
    guidelines: [
      'Bug 1: MediaRecorder codec incompatibility on Safari/iOS devices.',
      'Bug 2: Memory leak from un-cleared audio context listeners on rapid question skip.',
      'Bug 3: Database deadlock or race condition during rapid multi-device progress sync.'
    ],
    suggestedPrompt: 'Recall a real bug that stumped you for hours and how you methodically solved it.',
    defaultContent: `[Case Study: MediaRecorder Audio Stream Leak on Unmount]
• Symptom: After navigating through 10-15 speaking exercises rapidly, mobile browser tabs became sluggish and crashed with "Out of Memory".
• Root Cause: In the custom audio hook, the MediaStream tracks were not being explicitly stopped (stream.getTracks().forEach(track => track.stop())) during useEffect cleanup. Microphones remained active in hardware background.
• Resolution: Added strict cleanup handlers in useEffect return callback, ensuring all audio tracks stop and audioContext.close() is invoked on component unmount.
• Verification: Profiled browser memory allocation in Chrome DevTools before and after fix; heap remained stable under 30MB across 50 consecutive drills.`
  },
  {
    id: 'ws-testing-deploy',
    title: '8. Testing, Deployment, Collaboration & Trade-offs',
    description: 'Explain CI/CD pipelines, Docker containerization, staging vs production environments, and team code review practices.',
    guidelines: [
      'Testing: React Testing Library for component interactions, Supertest for endpoints.',
      'CI/CD: GitHub Actions running linter, typecheck, tests on pull requests.',
      'Trade-offs: Why client-side audio recording was chosen over server-side WebRTC streaming.'
    ],
    suggestedPrompt: 'How did code move from your local machine to production? What trade-offs were made?',
    defaultContent: `[Deployment & Collaboration Workflow]
• Git Workflow: Feature branches (feature/speech-feedback) branched from dev, peer review required via PR with 1 approval.
• CI/CD: GitHub Actions pipeline:
  1. npm run lint & tsc typecheck
  2. vitest unit tests
  3. Docker build & tag
• Staging & Production: Deployed via Vercel (frontend) and Dockerized containers (backend) with health check endpoints.
• Key Architectural Trade-off: Chosen batch audio submission over WebRTC streaming for initial phase to reduce backend infrastructure cost and support spotty mobile connectivity.`
  }
];
