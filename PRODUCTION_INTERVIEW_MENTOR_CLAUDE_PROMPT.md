# Production Interview Mentor — Claude Build Instructions

## Goal

Build a complete, polished, responsive interview-preparation website named **Production Interview Mentor** that I can push to GitHub and deploy to Vercel.

Use the exact preparation scope, modules, dates, and learning approach below. Do not reduce this to a React-only kit. This is for preparing for both **Full-Stack Developer** and **Generative AI Engineer** interviews.

## Deliverables

1. A production-ready website project that runs locally.
2. A responsive preparation dashboard with the complete curriculum below.
3. An interactive checklist/tracker for daily tasks.
4. A resource library with clickable tutorial/documentation links.
5. A daily schedule for **October 24–31, 2026**.
6. Interview questions, practical coding tasks, project-recall prompts, and a mock-interview mode.
7. A polished README with exact GitHub and Vercel deployment steps.
8. No secrets or API keys committed to the repository.

## Preferred implementation

- Use **Vite + React + TypeScript** (or plain React/JavaScript if simpler).
- Use a clean, professional UI, responsive on desktop and mobile.
- Use localStorage for checklist progress and user notes, with a clear “Reset progress” action and confirmation.
- Make all navigation, tabs, filters, checkboxes, and buttons functional.
- Add search/filter for modules and resources.
- Ensure external links open in a new tab with `rel="noopener noreferrer"`.
- Include accessible labels, keyboard focus styles, and semantic HTML.
- No paid services or API keys are required for the first version.
- If you cannot build all features, prioritize the complete content and a reliable deployable site over decorative complexity.

## Product experience

### Dashboard
Show:
- Title: **Production Interview Mentor**
- Subtitle: “A practical, interview-first roadmap for Full-Stack + Generative AI”
- Target completion date: **October 31, 2026**
- Progress percentage and completed task count
- Quick links to the eight learning modules
- Today’s plan based on the schedule below
- “Start learning” action that navigates to the first incomplete task/module

### Curriculum — include all eight modules

#### 1. React.js
Cover:
- JSX, components, props, state, event handling, conditional rendering, lists and keys
- All major hooks: `useState`, `useEffect`, `useContext`, `useRef`, `useMemo`, `useCallback`, `useReducer`, `useLayoutEffect`, `useImperativeHandle`, `useId`, `useTransition`, `useDeferredValue`, `useSyncExternalStore`, `useDebugValue`
- Custom hooks and the Rules of Hooks
- Rendering, reconciliation, keys, memoization, Strict Mode, stale closures, dependency arrays
- Forms and validation, controlled/uncontrolled inputs
- Context API, Redux Toolkit, TanStack Query
- React Router, API integration, loading/error/empty states
- Performance, lazy loading, code splitting, error boundaries
- Testing with React Testing Library
- Accessibility, component design, folder structure, environment variables and production builds

Resource links:
- React Learn: https://react.dev/learn
- React API reference: https://react.dev/reference/react
- React Router: https://reactrouter.com/
- Redux Toolkit: https://redux-toolkit.js.org/
- TanStack Query: https://tanstack.com/query/latest
- React Testing Library: https://testing-library.com/docs/react-testing-library/intro/
- Vite: https://vite.dev/guide/
- freeCodeCamp React course: https://www.youtube.com/watch?v=4UZrsTqkcW4
- PedroTech React hooks: https://www.youtube.com/watch?v=LlvBzyy-558

Practical tasks:
- Build a searchable/filterable list.
- Build a form with validation and accessible errors.
- Fetch API data with loading, error, retry, and empty states.
- Demonstrate `useMemo`/`useCallback` only where justified.
- Explain a previous React feature using the language-learning platform as context.

#### 2. JavaScript fundamentals
Cover:
- `let`, `const`, scope, hoisting, closures, `this`, prototypes
- Primitive vs reference values, shallow/deep copy
- Arrays/objects, destructuring, spread/rest
- Promises, async/await, event loop, microtasks/macrotasks
- Error handling, modules, optional chaining, nullish coalescing
- Debounce/throttle, immutability, common coding exercises

Resource:
- MDN JavaScript Guide: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide

Practical tasks:
- Explain the event loop.
- Implement array/object transformations.
- Write a debounce function.
- Solve common string, array, and object problems.

#### 3. Node.js + Express + REST APIs
Cover:
- Node runtime, event loop, non-blocking I/O
- CommonJS vs ES modules
- Express routing, controllers, middleware
- REST conventions and status codes
- Validation, centralized error handling, pagination/filtering
- Authentication basics, sessions/JWT concepts, authorization
- CORS, rate limiting, security headers, environment variables
- File upload concepts, logging, testing, graceful shutdown
- Database connection pools and async error handling

Resources:
- Node.js Learn: https://nodejs.org/en/learn
- Express docs: https://expressjs.com/
- MDN HTTP overview: https://developer.mozilla.org/en-US/docs/Web/HTTP/Overview

Practical tasks:
- Build CRUD endpoints for lessons or learning activities.
- Add validation and consistent error responses.
- Add pagination and filtering.
- Explain one API you worked on and how the frontend consumed it.

#### 4. PostgreSQL + SQL
Cover:
- SELECT, INSERT, UPDATE, DELETE
- WHERE, ORDER BY, GROUP BY, HAVING
- Joins, subqueries, CTEs, aggregates
- Primary/foreign keys, constraints, normalization
- Indexes and query plans (`EXPLAIN`)
- Transactions, ACID, isolation basics
- Pagination, NULL behavior, window functions
- Parameterized queries, SQL injection prevention
- Schema design for users, courses, lessons, progress, and attempts

Resources:
- PostgreSQL tutorial: https://www.postgresql.org/docs/current/tutorial.html
- SQLBolt: https://sqlbolt.com/

Practical tasks:
- Design tables for a language-learning platform.
- Write queries for learner progress and lesson completion.
- Explain CRUD operations, joins, indexes, and transactions.

#### 5. Python + FastAPI
Cover:
- Python types, collections, functions, comprehensions
- Exceptions, modules, virtual environments, package management
- Classes and typing basics
- Async concepts and when async helps
- FastAPI routes, request/response models, Pydantic validation
- Dependency injection, HTTP errors, middleware, CORS
- Testing, environment configuration, API documentation
- Calling an external model service safely

Resources:
- Python tutorial: https://docs.python.org/3/tutorial/
- FastAPI tutorial: https://fastapi.tiangolo.com/tutorial/

Practical tasks:
- Build a FastAPI endpoint that accepts a question and returns a structured response.
- Add Pydantic validation and error handling.
- Explain Python vs Node.js use cases in a full-stack system.

#### 6. Generative AI + LLM fundamentals
Cover:
- What LLMs are and how tokens/context windows work
- Prompting, system/user instructions, structured outputs
- Temperature and sampling concepts
- Embeddings and semantic similarity
- Inference, latency, cost, quality, and evaluation trade-offs
- Hallucinations, grounding, prompt injection, privacy
- Fine-tuning vs RAG vs prompting
- Model selection and responsible AI basics

Resources:
- Hugging Face LLM Course: https://huggingface.co/learn/llm-course/
- OpenAI API documentation: https://platform.openai.com/docs/

Practical tasks:
- Explain an LLM app architecture in two minutes.
- Design a prompt that returns validated structured data.
- Describe how you would evaluate answer quality and reduce hallucinations.

#### 7. RAG, vector search, and LLM applications
Cover:
- RAG architecture and when to use it
- Document ingestion, parsing, chunking, metadata
- Embeddings, vector stores, similarity search
- Retrieval, top-k, filtering, reranking
- Context assembly, grounded generation, citations
- Evaluation of retrieval and generation separately
- Caching, latency, cost, retries, observability
- Access control and data isolation

Resources:
- LangChain retrieval concepts: https://python.langchain.com/docs/concepts/retrieval/
- Hugging Face LLM Course: https://huggingface.co/learn/llm-course/

Practical tasks:
- Draw a RAG pipeline.
- Design a document Q&A app.
- Explain chunk size, overlap, top-k, retrieval quality, and how to test grounded answers.

#### 8. Speech AI + ASR/TTS + production engineering
Speech AI topics:
- ASR/speech-to-text, TTS/text-to-speech, transcription quality
- Audio preprocessing, timestamps, language/accent considerations
- Streaming vs batch processing, latency, error handling
- LSRW: listening, speaking, reading, writing features for a language-learning platform
- Evaluation metrics and privacy for audio data

Resources:
- OpenAI speech-to-text guide: https://platform.openai.com/docs/guides/speech-to-text
- Whisper repository: https://github.com/openai/whisper

Production engineering topics:
- Git branching, commits, pull requests, conflict resolution
- Docker basics and environment configuration
- Unit/integration tests and API testing
- Logging, monitoring, retries, timeouts
- Authentication/authorization, input validation, secrets handling
- Deployment basics, CI/CD, health checks, rollback concepts

Resources:
- Git book: https://git-scm.com/book/en/v2
- Docker getting started: https://docs.docker.com/get-started/

Practical tasks:
- Explain the end-to-end LSRW learning-platform architecture.
- Describe how a speech-to-text feature would connect to a React UI and backend API.
- Create a deployment checklist for a full-stack/GenAI app.

## Daily schedule: October 24–31, 2026

- **Oct 24 — Resume audit + baseline:** inspect resume, map every claimed skill to an honest experience/example, identify gaps, complete a short React/JavaScript baseline.
- **Oct 25 — React + JavaScript:** hooks, rendering, state, async JavaScript, coding drills, explain prior UI work.
- **Oct 26 — Node.js + REST APIs:** middleware, CRUD, validation, errors, security basics, API coding.
- **Oct 27 — PostgreSQL + SQL:** joins, schema design, indexes, transactions, practice queries.
- **Oct 28 — Python + FastAPI:** core Python, typed request/response models, API exercise.
- **Oct 29 — LLMs + RAG:** LLM basics, embeddings, retrieval, grounding, evaluation, architecture explanation.
- **Oct 30 — Full-stack + GenAI integration:** connect React, API, database, and model/speech services; testing and deployment review.
- **Oct 31 — Mock interviews:** timed technical questions, coding round, project deep dive, revise weak areas, then prepare self-introduction and experience explanation.

## Interview question bank

Create a question bank with concise answer frameworks, not misleading claims that the learner has used a technology. Label questions by module and difficulty.

Include at least these questions:
1. Explain React rendering and reconciliation.
2. When would you use `useEffect` versus derived state?
3. What causes an effect loop?
4. Explain `useMemo` versus `useCallback`.
5. What are stale closures?
6. Explain JavaScript event loop and microtasks.
7. How do Express middleware functions work?
8. How would you design a secure CRUD API?
9. Explain SQL joins and when to use indexes.
10. What is a transaction and why does it matter?
11. When would you use Python/FastAPI rather than Node.js?
12. What is an LLM and what is a context window?
13. Explain RAG end to end.
14. What are embeddings and vector search?
15. How would you reduce hallucinations?
16. What are ASR and TTS?
17. How would you connect speech AI to a React app?
18. How do you test and monitor a production API?
19. Explain the language-learning platform architecture and the LSRW flow.
20. Describe one bug, how it was diagnosed, and what was learned.

For every question, provide:
- What the interviewer is testing
- A short answer outline
- A follow-up question
- A self-rating field: Not yet / Needs practice / Confident

## Project-recall worksheet

Build a worksheet for the learner’s prior language-learning platform:
- User journey and major pages
- Listening, speaking, reading, writing features
- React component structure and state flow
- API endpoints and request/response examples (use placeholders; do not invent actual endpoints)
- PostgreSQL entities/relationships (mark as proposed if not remembered)
- Analytics/ETL, if applicable to the learner’s actual work
- Production bugs and fixes
- Testing, deployment, collaboration, and trade-offs
- “I personally implemented” versus “the team implemented” distinction

Never invent project facts. Clearly mark unknown details as “Recall/confirm” and help the learner answer honestly.

## Progress tracker

- Track daily completion and module-level self-confidence.
- Store progress and notes in localStorage.
- Provide a reset option with a confirmation step.
- Show progress by completed checklist items.
- Include a “Next best task” suggestion based on incomplete items.
- Make clear that progress is stored only in this browser unless the user exports it.

## Deployment requirements

- Provide `README.md` with:
  1. Install Node.js
  2. `npm install`
  3. `npm run dev`
  4. `npm run build`
  5. Push repository to GitHub
  6. Import GitHub repository into Vercel
  7. Build command `npm run build`
  8. Output directory `dist`
  9. No environment variables needed for the static first version
- Include `.gitignore` for `node_modules`, `dist`, `.env`, `.vercel`, and local editor files.
- Ensure Vercel can deploy the Vite app without a server.
- Include a static HTML version if practical, but the React app is the main deployable project.
- Do not claim that you have pushed to GitHub or deployed to Vercel; only provide files/instructions unless access is explicitly granted.

## Final acceptance checklist

- [ ] All eight modules are present.
- [ ] Dates match October 24–31, 2026.
- [ ] Links are clickable and checked for obvious typos.
- [ ] Tracker works and survives refresh.
- [ ] Mobile layout works.
- [ ] No fake project facts or fabricated experience.
- [ ] `npm run build` succeeds.
- [ ] README explains GitHub and Vercel deployment.
- [ ] All user-facing buttons work.
- [ ] No API key or secret is required.

Build the complete project now. Start by creating the project structure, then implement the curriculum and tracker, then test the production build, and finally explain how I can push it to GitHub and deploy it to Vercel.
