import { CurriculumModule } from '../types';

export const CURRICULUM_MODULES: CurriculumModule[] = [
  {
    id: 'react-js',
    number: 1,
    title: 'React.js',
    tagline: 'Component model, hook mechanics, reconciliation, and modern frontend architecture',
    category: 'frontend',
    icon: 'Layers',
    topics: [
      'JSX syntax, functional components, props vs state, event handling & synthetic events',
      'Conditional rendering, lists, reconciliation, and stable key assignment',
      'All Core Hooks: useState, useEffect, useContext, useRef, useMemo, useCallback, useReducer',
      'Specialized Hooks: useLayoutEffect, useImperativeHandle, useId, useTransition, useDeferredValue, useSyncExternalStore, useDebugValue',
      'Custom hooks design patterns and strict adherence to Rules of Hooks',
      'Rendering lifecycle, Fiber architecture, Virtual DOM diffing, Strict Mode double-invocation',
      'Stale closures in callbacks and effects; correct dependency array management',
      'Forms: controlled vs uncontrolled components, custom validation, form state libraries',
      'State management paradigms: Context API, Redux Toolkit (RTK), and TanStack Query (server-state caching)',
      'Client-side routing with React Router v6+, nested layouts, loaders, and error boundaries',
      'Performance optimizations: React.memo, lazy loading (React.lazy + Suspense), code splitting, profiler',
      'Testing UI logic using React Testing Library (RTL) & Vitest (user-event behavior vs implementation details)',
      'Web accessibility (a11y: ARIA attributes, semantic landmarks, keyboard focus management)',
      'Enterprise folder structure, environment variables (VITE_), and production build bundling'
    ],
    resources: [
      {
        id: 'r-react-learn',
        title: 'React Official Documentation (Learn)',
        url: 'https://react.dev/learn',
        type: 'doc',
        description: 'Modern interactive React documentation with deep dives into hooks, state, and rendering.'
      },
      {
        id: 'r-react-api',
        title: 'React API Reference',
        url: 'https://react.dev/reference/react',
        type: 'doc',
        description: 'Complete API reference covering every hook, component, and utility function.'
      },
      {
        id: 'r-react-router',
        title: 'React Router Documentation',
        url: 'https://reactrouter.com/',
        type: 'doc',
        description: 'Nested routing, data loaders, actions, and modern client-side navigation.'
      },
      {
        id: 'r-redux-toolkit',
        title: 'Redux Toolkit (RTK) Docs',
        url: 'https://redux-toolkit.js.org/',
        type: 'doc',
        description: 'Standard way to write Redux logic with createSlice, RTK Query, and immutability.'
      },
      {
        id: 'r-tanstack-query',
        title: 'TanStack Query (React Query)',
        url: 'https://tanstack.com/query/latest',
        type: 'doc',
        description: 'Server state synchronization, background refetching, caching, and mutation states.'
      },
      {
        id: 'r-rtl',
        title: 'React Testing Library Intro',
        url: 'https://testing-library.com/docs/react-testing-library/intro/',
        type: 'doc',
        description: 'Testing components the way real users interact with them.'
      },
      {
        id: 'r-vite',
        title: 'Vite Production Guide',
        url: 'https://vite.dev/guide/',
        type: 'doc',
        description: 'Next-generation frontend tooling, ESM-based HMR, and Rollup production builds.'
      },
      {
        id: 'r-fcc-react',
        title: 'freeCodeCamp React Course',
        url: 'https://www.youtube.com/watch?v=4UZrsTqkcW4',
        type: 'video',
        description: 'Comprehensive video deep dive covering modern React concepts.'
      },
      {
        id: 'r-pedrotech-hooks',
        title: 'PedroTech React Hooks Explained',
        url: 'https://www.youtube.com/watch?v=LlvBzyy-558',
        type: 'video',
        description: 'Clear, practical code examples for every major React hook.'
      }
    ],
    practicalTasks: [
      {
        id: 'task-react-1',
        title: 'Build a searchable/filterable list component',
        description: 'Implement a high-performance list filter with search query, tag filtering, debounced input, and empty state feedback.',
        keyTakeaway: 'Avoid re-filtering on unrelated state updates using useMemo where list sizes exceed trivial counts.'
      },
      {
        id: 'task-react-2',
        title: 'Build a robust form with validation & accessible errors',
        description: 'Create a form with real-time field validation, error message ARIA associations (aria-describedby), and submit disablement.',
        keyTakeaway: 'Ensures clear accessibility patterns and resilient controlled component state handling.'
      },
      {
        id: 'task-react-3',
        title: 'Fetch API data with loading, error, retry, and empty states',
        description: 'Implement an async fetch hook or effect that handles abort controllers, retry triggers, and clean error boundaries.',
        keyTakeaway: 'Prevents race conditions and memory leaks on unmounted components using AbortController.'
      },
      {
        id: 'task-react-4',
        title: 'Demonstrate useMemo & useCallback with legitimate justification',
        description: 'Construct a scenario where expensive calculation or callback prop passed to React.memo child demonstrates measurable render reduction.',
        keyTakeaway: 'Do not prematurely memoize everything; understand object reference equality vs calculation cost.'
      },
      {
        id: 'task-react-5',
        title: 'Explain prior React feature using language-learning platform context',
        description: 'Frame an interactive audio playback or pronunciation feedback card from a language platform as a concrete case study.',
        keyTakeaway: 'Demonstrates end-to-end architectural thinking and real-world trade-off evaluation.'
      }
    ],
    interviewFocus: [
      'Render vs Commit phases',
      'Virtual DOM vs Shadow DOM',
      'Stale closures in useEffect/callbacks',
      'When to lift state vs Context vs Redux',
      'Why keys matter in dynamic lists'
    ]
  },
  {
    id: 'javascript-fundamentals',
    number: 2,
    title: 'JavaScript Fundamentals',
    tagline: 'Execution context, engine event loop, asynchronous concurrency, and prototype chain',
    category: 'frontend',
    icon: 'Code',
    topics: [
      'Variable declarations (var vs let vs const), block scoping, temporal dead zone (TDZ), and hoisting mechanics',
      'Lexical scope, execution context, closures, and practical memory implications',
      'this keyword binding rules (implicit, explicit via call/apply/bind, default, and arrow functions)',
      'Prototypes, prototype chain (__proto__ vs prototype), and ES6 Class syntax syntactic sugar',
      'Primitive types vs reference types; shallow copy (spread, Object.assign) vs structured clone (structuredClone) vs deep clone',
      'Array manipulation (map, filter, reduce, flatMap, some, every, slice vs splice) and Object methods',
      'Destructuring assignment, nested destructuring, rest/spread operators with object immutability',
      'Asynchronous JavaScript: Promises, states (pending/fulfilled/rejected), chaining, Promise.all/allSettled/race/any',
      'Async/await syntax, async error handling, and unhandled promise rejections',
      'The Browser & Node Event Loop: Call stack, Web APIs, Microtask queue (Promises, queueMicrotask) vs Macrotask queue (setTimeout, setImmediate, I/O)',
      'Error handling: try/catch/finally, custom Error classes, and error propagation',
      'ES Modules (import/export) vs CommonJS (require/module.exports)',
      'Modern syntax utilities: Optional chaining (?.), Nullish coalescing (??), Logical assignment (??=, ||=)',
      'Debounce and Throttle implementation patterns from first principles',
      'Functional programming patterns: pure functions, immutability, currying, and composition'
    ],
    resources: [
      {
        id: 'r-mdn-js',
        title: 'MDN JavaScript Guide',
        url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide',
        type: 'guide',
        description: 'The definitive reference and guide for deep JavaScript language mechanics.'
      }
    ],
    practicalTasks: [
      {
        id: 'task-js-1',
        title: 'Explain the JavaScript event loop with a multi-step code snippet',
        description: 'Walk through console output order for a snippet mixing synchronous logs, setTimeout, Promise.then, and queueMicrotask.',
        keyTakeaway: 'Microtasks are completely drained before the next macrotask is processed by the event loop.'
      },
      {
        id: 'task-js-2',
        title: 'Implement array and nested object transformations without mutating input',
        description: 'Perform grouping (Object.groupBy/reduce), deep nested updates, and data flattening purely with immutability.',
        keyTakeaway: 'Prevents unintended side effects in React state and distributed data pipelines.'
      },
      {
        id: 'task-js-3',
        title: 'Write a robust debounce and throttle utility from scratch',
        description: 'Implement a debounce function with cancel method and immediate invocation option, plus a throttle function with trailing edge.',
        keyTakeaway: 'Demonstrates closure mastery and timer cleanup in user input scenarios.'
      },
      {
        id: 'task-js-4',
        title: 'Solve common algorithmic exercises (Two Sum, Group Anagrams, Flatten Object)',
        description: 'Implement efficient O(n) lookups using HashMaps/Sets instead of nested O(n²) iterations.',
        keyTakeaway: 'Interviewers look for optimal time/space complexity trade-offs.'
      }
    ],
    interviewFocus: [
      'Event loop step-by-step resolution order',
      'Closures and memory leak scenarios',
      'Arrow functions vs traditional function this context',
      'Promise.all vs Promise.allSettled error behavior',
      'Debounce vs Throttle differences and use-cases'
    ]
  },
  {
    id: 'nodejs-express-rest',
    number: 3,
    title: 'Node.js + Express + REST APIs',
    tagline: 'Non-blocking server architecture, middleware chains, API security, and production resilience',
    category: 'backend',
    icon: 'Server',
    topics: [
      'Node.js runtime architecture: V8 engine, libuv thread pool, non-blocking asynchronous I/O model',
      'Module systems: CommonJS (require/exports) vs ECMAScript Modules (import/export), "type": "module"',
      'Express framework core: Application, Router, Controller layers, and req/res/next lifecycle',
      'Middleware execution order: application-level, router-level, error-handling middleware (4 arguments: err, req, res, next)',
      'RESTful architectural constraints: statelessness, resource-oriented URIs, HTTP methods (GET, POST, PUT, PATCH, DELETE)',
      'HTTP status code standards (200, 201, 204, 400, 401, 403, 404, 409, 422, 429, 500, 503)',
      'Request validation with libraries like Zod, Joi, or express-validator; consistent API error format',
      'Pagination patterns (offset/limit vs cursor-based pagination) and query filtering/sorting',
      'Authentication & Authorization: Session cookies vs stateless JSON Web Tokens (JWT: access + refresh tokens, rotation)',
      'Security best practices: Helmet headers, CORS policies, rate limiting (express-rate-limit), input sanitization, parameter pollution',
      'Environment variables management via dotenv, configuration schemas, and twelve-factor app principles',
      'File uploads: streaming vs multipart form-data (multer), direct S3/cloud storage pre-signed URLs',
      'Structured logging (Winston, Pino), correlation IDs for distributed tracing',
      'Production operational readiness: health check endpoints (/healthz), graceful shutdown (SIGTERM, SIGINT), uncaughtException handling',
      'Database connection pooling (pg pool), transaction clients, and async error wrapping'
    ],
    resources: [
      {
        id: 'r-node-learn',
        title: 'Node.js Official Learn Platform',
        url: 'https://nodejs.org/en/learn',
        type: 'doc',
        description: 'Official guides on Node.js architecture, streams, buffers, and event emitters.'
      },
      {
        id: 'r-express-docs',
        title: 'Express.js Official Documentation',
        url: 'https://expressjs.com/',
        type: 'doc',
        description: 'Comprehensive routing, middleware, error handling, and API guides.'
      },
      {
        id: 'r-mdn-http',
        title: 'MDN HTTP Protocols & Status Overview',
        url: 'https://developer.mozilla.org/en-US/docs/Web/HTTP/Overview',
        type: 'guide',
        description: 'HTTP headers, caching mechanisms, status codes, and network lifecycle.'
      }
    ],
    practicalTasks: [
      {
        id: 'task-node-1',
        title: 'Build CRUD endpoints for learning activities/lessons',
        description: 'Construct REST endpoints for GET /api/v1/lessons, POST, GET /:id, PATCH /:id, and DELETE /:id with route params.',
        keyTakeaway: 'Adheres to REST principles with proper status codes (201 Created with Location header, 204 No Content for Delete).'
      },
      {
        id: 'task-node-2',
        title: 'Add request validation and centralized error handling middleware',
        description: 'Validate request bodies with Zod/Joi and catch all errors in a uniform 4-argument error middleware with operational flags.',
        keyTakeaway: 'Ensures no unhandled rejections leak internal stack traces to clients in production.'
      },
      {
        id: 'task-node-3',
        title: 'Implement cursor-based pagination and filter query params',
        description: 'Create an endpoint supporting ?cursor=xyz&limit=20&status=active with hasMore indicators.',
        keyTakeaway: 'Cursor pagination avoids offset performance degradation in large SQL tables.'
      },
      {
        id: 'task-node-4',
        title: 'Explain an API feature you built and how the React frontend consumed it',
        description: 'Detail a lesson completion submission endpoint, handling token auth, updating database, and frontend optimistic UI updates.',
        keyTakeaway: 'Shows full-stack cohesion and understanding of contract design.'
      }
    ],
    interviewFocus: [
      'Libuv thread pool vs single JS main thread',
      'How Express middleware next() works and why next(err) triggers error handler',
      'JWT access token vs refresh token storage (httpOnly cookies vs memory)',
      'Handling rate limits and distributed denial-of-service risks',
      'Connection pooling vs opening new connections on every request'
    ]
  },
  {
    id: 'postgresql-sql',
    number: 4,
    title: 'PostgreSQL + SQL',
    tagline: 'Relational data modeling, query optimization, ACID transactions, and query plans',
    category: 'database',
    icon: 'Database',
    topics: [
      'Core DML operations: SELECT, INSERT, UPDATE, DELETE with RETURNING clauses',
      'Filtering & Aggregations: WHERE, ORDER BY, GROUP BY, HAVING, COUNT, SUM, AVG, MIN, MAX',
      'Relational Joins: INNER JOIN, LEFT (OUTER) JOIN, RIGHT JOIN, FULL OUTER JOIN, CROSS JOIN, and self-joins',
      'Advanced SQL queries: Subqueries, Common Table Expressions (CTEs - WITH clause), recursive CTEs',
      'Window functions: ROW_NUMBER(), RANK(), DENSE_RANK(), LAG(), LEAD(), and PARTITION BY clauses',
      'Database constraints: Primary Keys (UUID vs BIGINT IDENTITY), Foreign Keys (ON DELETE CASCADE / SET NULL), UNIQUE, CHECK, NOT NULL',
      'Normalization concepts: 1NF, 2NF, 3NF, and practical denormalization trade-offs for read-heavy workloads',
      'Indexing strategies: B-Tree indexes, Composite indexes (column order importance), Partial indexes, GIN/GiST for JSONB and full-text search',
      'Query plan analysis: EXPLAIN and EXPLAIN ANALYZE (Seq Scan, Index Scan, Index Only Scan, Bitmap Scan, Nested Loop, Hash Join)',
      'ACID properties: Atomicity, Consistency, Isolation, Durability',
      'Transaction isolation levels (Read Committed, Repeatable Read, Serializable) and concurrency phenomena (Dirty Read, Non-repeatable Read, Phantom Read)',
      'Pagination mechanics: LIMIT/OFFSET drawbacks vs Keyset/Cursor pagination',
      'NULL semantics: Three-valued logic (TRUE, FALSE, UNKNOWN), IS NULL, COALESCE, NULLIF',
      'Security: Parameterized queries vs string concatenation, SQL injection prevention',
      'Schema design for enterprise learning systems: users, courses, modules, lessons, user_progress, exercise_attempts, quiz_scores'
    ],
    resources: [
      {
        id: 'r-postgres-tutorial',
        title: 'PostgreSQL Official Tutorial',
        url: 'https://www.postgresql.org/docs/current/tutorial.html',
        type: 'doc',
        description: 'Comprehensive guide to PostgreSQL features, relational querying, and data types.'
      },
      {
        id: 'r-sqlbolt',
        title: 'SQLBolt Interactive Lessons',
        url: 'https://sqlbolt.com/',
        type: 'tutorial',
        description: 'Interactive exercises covering foundational and intermediate SQL queries.'
      }
    ],
    practicalTasks: [
      {
        id: 'task-sql-1',
        title: 'Design relational tables for a language-learning platform',
        description: 'Write DDL for users, courses, lessons, progress, and audio_recordings with foreign keys, timestamps, and check constraints.',
        keyTakeaway: 'Ensures data integrity, clean relationships, and prevention of orphaned rows.'
      },
      {
        id: 'task-sql-2',
        title: 'Write queries for learner progress, completion rates, and streaks',
        description: 'Compose queries using CTEs, window functions (ROW_NUMBER over date), and conditional aggregations (FILTER WHERE).',
        keyTakeaway: 'Efficiently calculates analytics directly in the database engine rather than in Node memory.'
      },
      {
        id: 'task-sql-3',
        title: 'Explain CRUD operations, join behaviors, indexes, and transactions',
        description: 'Analyze an EXPLAIN ANALYZE output showing a Seq Scan transformed into an Index Scan with a composite index.',
        keyTakeaway: 'Proves practical understanding of database engine performance.'
      }
    ],
    interviewFocus: [
      'B-Tree index anatomy and leftmost prefix rule for composite indexes',
      'INNER JOIN vs LEFT JOIN with WHERE filter on right table',
      'ACID transaction guarantees and database deadlocks',
      'Why OFFSET 100000 is slow and how cursor keyset pagination solves it',
      'JSONB columns in PostgreSQL: when to use relational vs semi-structured'
    ]
  },
  {
    id: 'python-fastapi',
    number: 5,
    title: 'Python + FastAPI',
    tagline: 'Modern type-annotated Python, ASGI async endpoints, Pydantic validation, and AI microservices',
    category: 'backend',
    icon: 'Terminal',
    topics: [
      'Python 3.11+ fundamentals: dynamic typing vs Type Hints (typing module: Optional, Union, List, Dict, TypedDict, Any)',
      'Data structures: lists, tuples, sets, dictionaries, dict comprehensions, generator expressions',
      'Functions: *args, **kwargs, decorators, closures, lambda expressions',
      'Object-Oriented Python: classes, dunder methods (__init__, __str__, __repr__, __enter__, __exit__), dataclasses',
      'Virtual environments (venv, uv, poetry), package management (requirements.txt, pyproject.toml)',
      'Concurrency in Python: Threading vs Multiprocessing vs Asyncio (event loop, coroutines, async/await, asyncio.gather)',
      'FastAPI architecture: Starlette foundation, ASGI server (Uvicorn), and non-blocking coroutines',
      'Request & Response models with Pydantic v2 (BaseModel, Field, custom validators, schema generation)',
      'FastAPI routing: Path parameters, Query parameters, Request Body, Header, and Cookie dependencies',
      'Dependency Injection system (Depends) for database sessions, auth verification, and service clients',
      'Error handling: HTTPException, custom exception handlers, and status codes',
      'Middleware: CORS, timing/logging middleware, request context',
      'Automated OpenAPI / Swagger interactive documentation generation',
      'Calling external AI model APIs safely: httpx async client, connection timeouts, retries, and rate limit backoff',
      'System design comparison: Python/FastAPI (AI/ML ecosystem, scientific libraries, async microservices) vs Node.js (high I/O throughput, single-language full-stack)'
    ],
    resources: [
      {
        id: 'r-python-tutorial',
        title: 'Official Python Tutorial',
        url: 'https://docs.python.org/3/tutorial/',
        type: 'doc',
        description: 'Comprehensive language guide covering types, control flow, functions, and modules.'
      },
      {
        id: 'r-fastapi-tutorial',
        title: 'FastAPI Official Interactive Tutorial',
        url: 'https://fastapi.tiangolo.com/tutorial/',
        type: 'doc',
        description: 'First-class guide on Pydantic models, async endpoints, dependency injection, and security.'
      }
    ],
    practicalTasks: [
      {
        id: 'task-py-1',
        title: 'Build a FastAPI endpoint accepting question/audio payload and returning structured schema',
        description: 'Define input Pydantic model with strict validation and response model with confidence scores, feedback, and timestamp.',
        keyTakeaway: 'Ensures strict type contracts between backend services and frontend clients.'
      },
      {
        id: 'task-py-2',
        title: 'Implement Pydantic validation, custom validators, and clean error handlers',
        description: 'Validate field constraints (regex, min length) and format ValidationError responses to return readable errors.',
        keyTakeaway: 'Prevents malformed data from reaching downstream AI model inference pipelines.'
      },
      {
        id: 'task-py-3',
        title: 'Articulate Python vs Node.js use-cases in an enterprise full-stack system',
        description: 'Explain when Python microservices handle AI/RAG/embeddings while Node.js handles user sessions and CRUD.',
        keyTakeaway: 'Shows pragmatic polyglot system design understanding.'
      }
    ],
    interviewFocus: [
      'Asyncio event loop in Python vs Node.js event loop',
      'Pydantic v2 performance and serialization advantages',
      'FastAPI Depends() injection lifecycle and database session cleanup',
      'Async def vs regular def in FastAPI endpoints (thread pool dispatching)',
      'Handling slow external LLM network calls with async httpx clients'
    ]
  },
  {
    id: 'generative-ai-llm',
    number: 6,
    title: 'Generative AI + LLM Fundamentals',
    tagline: 'Transformer architectures, prompt engineering, tokenomics, embeddings, and hallucination reduction',
    category: 'ai',
    icon: 'Cpu',
    topics: [
      'LLM core principles: autoregressive next-token prediction, transformer attention mechanisms',
      'Tokenization: byte-pair encoding (BPE), token-to-word ratios, context window boundaries (e.g. 8k, 32k, 128k, 1M tokens)',
      'Prompt engineering techniques: system vs user vs assistant roles, zero-shot, few-shot with examples, Chain-of-Thought (CoT)',
      'Structured generation: JSON mode, function calling, tool use, schema enforcement via grammar/Pydantic',
      'Sampling hyperparameters: Temperature (creativity vs determinism), Top-P (nucleus sampling), frequency/presence penalties',
      'Vector embeddings: dense semantic representations, dimensionality, cosine similarity, dot product, euclidean distance',
      'Trade-offs in AI engineering: Inference latency (TTFT - Time To First Token vs TPS - Tokens Per Second), cost per 1M tokens, accuracy, model size',
      'Hallucinations in LLMs: causes, failure modes, grounding strategies, and citation verification',
      'AI Security: Prompt injection (direct & indirect), jailbreaking, system prompt leakage, PII data redaction',
      'Decision matrix: Prompt engineering vs Retrieval-Augmented Generation (RAG) vs Parameter-Efficient Fine-Tuning (PEFT/LoRA)',
      'Model selection criteria: Frontier models (GPT-4o, Claude 3.5 Sonnet) vs lightweight open models (Llama 3, Mistral, Qwen)',
      'Responsible AI: bias mitigation, toxicity guardrails, human-in-the-loop validation'
    ],
    resources: [
      {
        id: 'r-hf-llm',
        title: 'Hugging Face LLM Course',
        url: 'https://huggingface.co/learn/llm-course/',
        type: 'course',
        description: 'Comprehensive open-source course on modern language models, tokenizers, and applications.'
      },
      {
        id: 'r-openai-api',
        title: 'OpenAI API Reference & Guides',
        url: 'https://platform.openai.com/docs/',
        type: 'doc',
        description: 'Industry-standard guides on completions, function calling, structured outputs, and embeddings.'
      }
    ],
    practicalTasks: [
      {
        id: 'task-ai-1',
        title: 'Deliver a crisp 2-minute architectural explanation of a production LLM application',
        description: 'Explain the request journey: user prompt -> moderation/guardrails -> context assembly -> model inference -> structured parsing -> output.',
        keyTakeaway: 'Demonstrates clear executive communication without relying on buzzwords.'
      },
      {
        id: 'task-ai-2',
        title: 'Design a robust prompt that guarantees validated JSON structured output',
        description: 'Write a few-shot prompt with strict JSON schema definition, negative constraints, and fallback parsing logic.',
        keyTakeaway: 'Production AI apps must never fail silently on malformed model text outputs.'
      },
      {
        id: 'task-ai-3',
        title: 'Formulate an evaluation framework to measure hallucination rates and output quality',
        description: 'Define metrics: faithfulness, answer relevance, context recall, and automated LLM-as-a-judge scoring protocols.',
        keyTakeaway: 'Shows engineering rigor rather than subjective prompt tweaking.'
      }
    ],
    interviewFocus: [
      'Difference between embeddings and token IDs',
      'How temperature affects softmax probability distributions',
      'Prompt injection defense mechanisms (delimiters, XML tags, secondary validation)',
      'When fine-tuning is required vs when RAG is superior',
      'Latency optimization: streaming responses via Server-Sent Events (SSE)'
    ]
  },
  {
    id: 'rag-vector-search',
    number: 7,
    title: 'RAG, Vector Search, and LLM Applications',
    tagline: 'Document chunking, semantic retrieval, reranking, hybrid search, and evaluation pipelines',
    category: 'ai',
    icon: 'Network',
    topics: [
      'RAG fundamentals: why naive LLMs fail on private/current domain data; architectural pipeline',
      'Data Ingestion: Document parsing (PDF, Markdown, HTML), metadata extraction, cleaning, and sanitization',
      'Chunking strategies: Fixed-size chunking, sentence/paragraph-aware chunking, recursive character chunking, semantic chunking',
      'Chunk size vs overlap trade-offs: context preservation vs embedding diluted semantics',
      'Vector databases: pgvector, Pinecone, Qdrant, Chroma, Weaviate; index algorithms (HNSW - Hierarchical Navigable Small World vs IVFFlat)',
      'Similarity metrics: Cosine distance, inner product, L2 euclidean distance',
      'Hybrid search: Combining dense semantic search (vector embeddings) with sparse keyword search (BM25 / full-text search)',
      'Retrieval refinement: Top-K selection, metadata pre-filtering, and cross-encoder Reranking (Cohere Rerank, BGE-Reranker)',
      'Context synthesis: Prompt assembly, citation attribution, Lost-in-the-Middle mitigation',
      'RAG evaluation frameworks (Ragas / TruLens): Faithfulness, Answer Relevance, Context Precision, Context Recall',
      'Performance & cost optimization: Semantic caching (GPTCache), query compression, asynchronous batching',
      'Enterprise security: Role-based access control (RBAC) at chunk level, tenant isolation, compliance'
    ],
    resources: [
      {
        id: 'r-langchain-retrieval',
        title: 'LangChain Retrieval Concepts Guide',
        url: 'https://python.langchain.com/docs/concepts/retrieval/',
        type: 'doc',
        description: 'In-depth conceptual guide on document loaders, text splitters, vector stores, and retrievers.'
      },
      {
        id: 'r-hf-rag',
        title: 'Hugging Face LLM Course - RAG Module',
        url: 'https://huggingface.co/learn/llm-course/',
        type: 'course',
        description: 'Hands-on vector search implementation and evaluation techniques.'
      }
    ],
    practicalTasks: [
      {
        id: 'task-rag-1',
        title: 'Diagram and explain an end-to-end RAG pipeline from ingestion to answer generation',
        description: 'Map out: Documents -> Recursive Chunking -> Embedding Model -> pgvector -> Hybrid Search + Reranker -> LLM Context Window -> Output with Citations.',
        keyTakeaway: 'Proves holistic system design mastery during technical whiteboard interviews.'
      },
      {
        id: 'task-rag-2',
        title: 'Design a document Q&A application with metadata filtering and access control',
        description: 'Detail how user organization ID and lesson ID are applied as SQL WHERE filters in pgvector queries prior to similarity distance calculation.',
        keyTakeaway: 'Ensures multi-tenant data privacy in production vector search.'
      },
      {
        id: 'task-rag-3',
        title: 'Explain chunk size, chunk overlap, top-K selection, and how to debug poor retrieval',
        description: 'Provide concrete tuning metrics (e.g., 500-character chunks, 50-character overlap, top-k=5 reranked to top-3).',
        keyTakeaway: 'Shows practical experimentation experience rather than theoretical assumptions.'
      }
    ],
    interviewFocus: [
      'Why pgvector with HNSW is popular for PostgreSQL teams',
      'Difference between bi-encoders (embeddings) and cross-encoders (rerankers)',
      'How to evaluate retrieval precision vs generation faithfulness independently',
      'Handling tabular data or structured documents in RAG',
      'Context window stuffing vs fine-tuned context compression'
    ]
  },
  {
    id: 'speech-ai-production',
    number: 8,
    title: 'Speech AI + ASR/TTS + Production Engineering',
    tagline: 'Audio processing pipelines, pronunciation evaluation, Dockerized deployments, and CI/CD',
    category: 'devops',
    icon: 'Radio',
    topics: [
      'Speech AI core primitives: Automatic Speech Recognition (ASR / STT) vs Text-to-Speech (TTS)',
      'Audio engineering basics: Sample rate (16kHz vs 44.1kHz), bit depth, channels (mono vs stereo), formats (WAV, MP3, WebM/Opus)',
      'Transcription architectures: OpenAI Whisper, wav2vec 2.0, word-level timestamps, language identification',
      'Text-to-Speech synthesis: Mel-spectrogram generation, vocoders, neural voice cloning, SSML markup',
      'Streaming audio vs Batch audio: WebSockets / WebRTC vs REST multipart uploads, latency trade-offs',
      'LSRW Architecture: Designing Listening, Speaking, Reading, Writing interactive workflows for educational platforms',
      'Pronunciation assessment: Phoneme-level alignment, Levenshtein distance on phoneme sequences, confidence scoring',
      'Audio data privacy: Ephemeral audio processing, GDPR compliance, consent for voice recording storage',
      'Git workflows: Git Flow, trunk-based development, semantic commit messages, interactive rebase, merge conflict resolution',
      'Containerization with Docker: Dockerfile multi-stage builds, .dockerignore, image layer caching, Docker Compose for local microservices',
      'Testing pyramid: Unit testing (Vitest/Jest), Integration testing (Supertest, testcontainers), End-to-end testing (Playwright)',
      'Observability: Centralized structured logging, APM metrics (latency p95/p99), OpenTelemetry, alerting thresholds',
      'Production deployment: CI/CD automation (GitHub Actions), blue/green deployments, canary releases, zero-downtime rolling updates, rollback strategies'
    ],
    resources: [
      {
        id: 'r-openai-speech',
        title: 'OpenAI Speech-to-Text (Whisper) Guide',
        url: 'https://platform.openai.com/docs/guides/speech-to-text',
        type: 'guide',
        description: 'Audio transcription, translation, timestamp extraction, and format handling.'
      },
      {
        id: 'r-whisper-repo',
        title: 'OpenAI Whisper GitHub Repository',
        url: 'https://github.com/openai/whisper',
        type: 'repo',
        description: 'Robust speech recognition model via large-scale weak supervision.'
      },
      {
        id: 'r-git-book',
        title: 'Pro Git Book (Official)',
        url: 'https://git-scm.com/book/en/v2',
        type: 'doc',
        description: 'The definitive handbook on Git branching, internals, and collaboration workflows.'
      },
      {
        id: 'r-docker-start',
        title: 'Docker Getting Started Guide',
        url: 'https://docs.docker.com/get-started/',
        type: 'doc',
        description: 'Container fundamentals, multi-stage builds, and container networking.'
      }
    ],
    practicalTasks: [
      {
        id: 'task-speech-1',
        title: 'Explain the end-to-end LSRW learning platform architecture',
        description: 'Detail the complete flow: learner speaks -> browser captures WebM audio -> backend converts to 16kHz WAV -> Whisper transcribes -> LLM analyzes grammar/pronunciation -> TTS delivers spoken feedback.',
        keyTakeaway: 'Demonstrates real-world multi-modal architecture with high interview impact.'
      },
      {
        id: 'task-speech-2',
        title: 'Describe how a speech-to-text feature connects React UI to backend API',
        description: 'Map out MediaRecorder Web API in React, chunk buffering, upload via FormData or WebSocket, and optimistic playback state.',
        keyTakeaway: 'Bridges frontend audio engineering with backend processing.'
      },
      {
        id: 'task-speech-3',
        title: 'Create a comprehensive production deployment checklist for Full-Stack / GenAI',
        description: 'Enumerate: env variable verification, database migrations, CORS whitelisting, rate limiters, token budgets, error logging, and health check alerts.',
        keyTakeaway: 'Proves high production readiness and engineering maturity.'
      }
    ],
    interviewFocus: [
      'WebM/Opus browser recording to WAV conversion requirements for ASR models',
      'Handling network dropped connections during audio stream uploads',
      'Docker multi-stage build optimization to keep container images lean',
      'CI/CD pipeline test stages and automated rollback triggers',
      'Secrets management: preventing API keys from leaking into client bundles'
    ]
  }
];
