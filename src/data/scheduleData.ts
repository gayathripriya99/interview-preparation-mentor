import { DailyScheduleDay } from '../types';

export const DAILY_SCHEDULE: DailyScheduleDay[] = [
  {
    id: 'day-oct-24',
    dateStr: '2026-10-24',
    dateLabel: 'Oct 24, 2026',
    title: 'Resume Audit + Technical Baseline',
    focus: 'Inspect resume line by line, map every claimed skill to honest real-world examples, identify gaps, complete React & JS baseline diagnostics.',
    tasks: [
      { id: 'sched-24-1', text: 'Conduct line-by-line resume audit: distinguish "personally built" vs "team built"', estimatedMinutes: 45 },
      { id: 'sched-24-2', text: 'Document 3 technical stories with metrics (latency, bugs fixed, throughput)', estimatedMinutes: 45 },
      { id: 'sched-24-3', text: 'Complete React & JavaScript baseline diagnostics (hooks, rendering lifecycle)', estimatedMinutes: 60 },
      { id: 'sched-24-4', text: 'Review language-learning platform architecture and isolate LSRW features', estimatedMinutes: 45 },
      { id: 'sched-24-5', text: 'Identify top 3 technical weaknesses to prioritize over the week', estimatedMinutes: 30 }
    ],
    keyDeliverable: 'Audited resume cheat-sheet with concrete project examples and honest capability boundaries.'
  },
  {
    id: 'day-oct-25',
    dateStr: '2026-10-25',
    dateLabel: 'Oct 25, 2026',
    title: 'React.js & JavaScript Fundamentals Intensive',
    focus: 'Master React hooks mechanics, Fiber reconciliation, stale closures, event loop microtasks, async JavaScript, and coding drills.',
    tasks: [
      { id: 'sched-25-1', text: 'Deep-dive into 14 React hooks: useEffect vs useLayoutEffect, useTransition, useMemo', estimatedMinutes: 60 },
      { id: 'sched-25-2', text: 'Trace JavaScript Event Loop: microtasks (Promises) vs macrotasks (Timers)', estimatedMinutes: 45 },
      { id: 'sched-25-3', text: 'Code from scratch: custom debounce and throttle utilities with cleanup', estimatedMinutes: 45 },
      { id: 'sched-25-4', text: 'Implement a searchable/filterable list with empty, loading, and error states', estimatedMinutes: 60 },
      { id: 'sched-25-5', text: 'Rehearse verbal answers for Questions 1-6 (Rendering, reconciliation, stale closures)', estimatedMinutes: 45 }
    ],
    keyDeliverable: 'Working code drills for debounce, search filter, and confident verbal delivery of React rendering mechanics.'
  },
  {
    id: 'day-oct-26',
    dateStr: '2026-10-26',
    dateLabel: 'Oct 26, 2026',
    title: 'Node.js, Express & REST APIs',
    focus: 'Master Node.js runtime, non-blocking I/O, Express middleware pipeline, REST standards, error handling, auth, and API resilience.',
    tasks: [
      { id: 'sched-26-1', text: 'Review Node.js runtime, libuv thread pool, and non-blocking asynchronous I/O', estimatedMinutes: 45 },
      { id: 'sched-26-2', text: 'Build modular Express router with 4-argument centralized error handler', estimatedMinutes: 60 },
      { id: 'sched-26-3', text: 'Design secure CRUD API with Zod validation, JWT verification, and rate limiting', estimatedMinutes: 60 },
      { id: 'sched-26-4', text: 'Contrast offset pagination with keyset/cursor pagination for large datasets', estimatedMinutes: 30 },
      { id: 'sched-26-5', text: 'Rehearse verbal answers for Questions 7-8 (Middleware, secure API design)', estimatedMinutes: 45 }
    ],
    keyDeliverable: 'Clean mental model of Express request/response pipeline and API security patterns.'
  },
  {
    id: 'day-oct-27',
    dateStr: '2026-10-27',
    dateLabel: 'Oct 27, 2026',
    title: 'PostgreSQL, Relational Modeling & SQL Optimization',
    focus: 'Master SQL joins, schema design, B-tree indexes, ACID transactions, EXPLAIN query plan analysis, and query performance.',
    tasks: [
      { id: 'sched-27-1', text: 'Design relational schema for learning platform (users, courses, lessons, progress)', estimatedMinutes: 60 },
      { id: 'sched-27-2', text: 'Write complex SQL queries with CTEs, window functions (ROW_NUMBER), and aggregations', estimatedMinutes: 60 },
      { id: 'sched-27-3', text: 'Study EXPLAIN / EXPLAIN ANALYZE: Seq Scan vs Index Scan vs Bitmap Index Scan', estimatedMinutes: 45 },
      { id: 'sched-27-4', text: 'Master ACID transactions, isolation levels, and race condition prevention', estimatedMinutes: 45 },
      { id: 'sched-27-5', text: 'Rehearse verbal answers for Questions 9-10 (Joins, indexing, transactions)', estimatedMinutes: 45 }
    ],
    keyDeliverable: 'Normalized PostgreSQL schema diagram and ability to explain index execution plans.'
  },
  {
    id: 'day-oct-28',
    dateStr: '2026-10-28',
    dateLabel: 'Oct 28, 2026',
    title: 'Python, Async Concurrency & FastAPI',
    focus: 'Master modern Python type annotations, Pydantic v2 schemas, FastAPI dependency injection, ASGI async endpoints, and AI microservices.',
    tasks: [
      { id: 'sched-28-1', text: 'Review Python 3.11 type hints, dataclasses, and asyncio event loop semantics', estimatedMinutes: 45 },
      { id: 'sched-28-2', text: 'Build FastAPI endpoint with Pydantic request/response validation models', estimatedMinutes: 60 },
      { id: 'sched-28-3', text: 'Implement FastAPI Depends() for dependency injection and auth verification', estimatedMinutes: 45 },
      { id: 'sched-28-4', text: 'Structure async httpx client with timeouts and retries for external AI services', estimatedMinutes: 45 },
      { id: 'sched-28-5', text: 'Rehearse verbal answer for Question 11 (Python/FastAPI vs Node.js trade-offs)', estimatedMinutes: 30 }
    ],
    keyDeliverable: 'Complete typed FastAPI route contract and clear justification for Python vs Node in architecture.'
  },
  {
    id: 'day-oct-29',
    dateStr: '2026-10-29',
    dateLabel: 'Oct 29, 2026',
    title: 'Generative AI, LLMs & RAG Architectures',
    focus: 'Master LLM tokenomics, context windows, prompt engineering, embeddings, vector search (pgvector), hybrid retrieval, and grounding.',
    tasks: [
      { id: 'sched-29-1', text: 'Master LLM concepts: tokens, context windows, temperature, top-p, attention', estimatedMinutes: 45 },
      { id: 'sched-29-2', text: 'Diagram complete RAG pipeline: chunking -> embedding -> pgvector -> rerank -> LLM', estimatedMinutes: 60 },
      { id: 'sched-29-3', text: 'Analyze chunking strategies (recursive character vs semantic) and chunk overlap', estimatedMinutes: 45 },
      { id: 'sched-29-4', text: 'Define hallucination reduction strategies: grounding, citations, schema validation', estimatedMinutes: 45 },
      { id: 'sched-29-5', text: 'Rehearse verbal answers for Questions 12-15 (LLM, RAG, vector search, hallucinations)', estimatedMinutes: 45 }
    ],
    keyDeliverable: 'Flawless 2-minute whiteboarding of a production RAG application with evaluation metrics.'
  },
  {
    id: 'day-oct-30',
    dateStr: '2026-10-30',
    dateLabel: 'Oct 30, 2026',
    title: 'Full-Stack + GenAI Integration & Production Engineering',
    focus: 'Connect React, API, Database, and Speech/Model services; review Docker containerization, testing, CI/CD, and LSRW audio pipelines.',
    tasks: [
      { id: 'sched-30-1', text: 'Map out the full-stack LSRW interactive flow (browser audio -> backend -> Whisper -> LLM -> TTS)', estimatedMinutes: 60 },
      { id: 'sched-30-2', text: 'Review Dockerfile multi-stage builds, container security, and .dockerignore', estimatedMinutes: 45 },
      { id: 'sched-30-3', text: 'Formulate production deployment checklist (secrets, migrations, rate limits, health checks)', estimatedMinutes: 45 },
      { id: 'sched-30-4', text: 'Review testing pyramid: Unit (Vitest), API (Supertest), and E2E smoke tests', estimatedMinutes: 45 },
      { id: 'sched-30-5', text: 'Rehearse verbal answers for Questions 16-19 (Speech AI, React audio, monitoring, LSRW flow)', estimatedMinutes: 45 }
    ],
    keyDeliverable: 'End-to-end architecture diagram connecting all tiers and complete production deployment checklist.'
  },
  {
    id: 'day-oct-31',
    dateStr: '2026-10-31',
    dateLabel: 'Oct 31, 2026',
    title: 'Mock Interviews, Timed Drills & Final Polish',
    focus: 'Timed technical Q&A rounds, live coding drills, behavioral/project deep-dive, weak spot revision, and flawless self-introduction.',
    tasks: [
      { id: 'sched-31-1', text: 'Deliver 2-minute professional elevator pitch ("Tell me about yourself")', estimatedMinutes: 30 },
      { id: 'sched-31-2', text: 'Conduct 45-minute timed mock interview covering full question bank', estimatedMinutes: 60 },
      { id: 'sched-31-3', text: 'Practice live coding drill: debounce implementation and array transformation', estimatedMinutes: 45 },
      { id: 'sched-31-4', text: 'Deep-dive into Question 20: STAR framework breakdown of a hard production bug', estimatedMinutes: 45 },
      { id: 'sched-31-5', text: 'Targeted revision of all items marked "Needs practice" in the tracker', estimatedMinutes: 60 }
    ],
    keyDeliverable: '100% confidence scorecard, ready to ace both Full-Stack and Generative AI interviews.'
  }
];
