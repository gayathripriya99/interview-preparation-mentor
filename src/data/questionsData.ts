import { InterviewQuestion } from '../types';

export const INTERVIEW_QUESTIONS: InterviewQuestion[] = [
  {
    id: 'q-1',
    questionNumber: 1,
    question: 'Explain React rendering and reconciliation.',
    moduleId: 'react-js',
    moduleName: 'React.js',
    difficulty: 'Intermediate',
    whatTheyAreTesting: 'Understanding of how React determines what needs to change on screen, Fiber tree mechanics, render vs commit phases, and why unnecessary re-renders happen.',
    answerOutline: [
      'Render Phase (Pure & interruptible): React calls component functions and creates a new Virtual DOM / Fiber tree of React elements based on state or prop changes.',
      'Reconciliation (Diffing algorithm): React compares the new Fiber tree with the previous Fiber tree using heuristics: elements with different types produce different trees, and lists rely on keys to match children.',
      'Commit Phase (Synchronous & un-interruptible): React updates the real DOM via ReactDOM, applying minimal mutations, followed by running useLayoutEffect and useEffect.'
    ],
    keyInsight: 'Rendering does NOT always mean DOM updates. A component can re-render (calculate JSX), but if the diff produces zero DOM changes, the real DOM is untouched.',
    followUpQuestion: 'What triggers a child component to re-render if its props have not changed?'
  },
  {
    id: 'q-2',
    questionNumber: 2,
    question: 'When would you use useEffect versus derived state?',
    moduleId: 'react-js',
    moduleName: 'React.js',
    difficulty: 'Intermediate',
    whatTheyAreTesting: 'Whether you know how to avoid redundant state and unnecessary render cycles caused by syncing state in effects.',
    answerOutline: [
      'Derived State: If a value can be computed from existing props or state (e.g., filtered items, fullName = firstName + lastName), calculate it directly in the component body during render (optionally wrapped in useMemo if computationally expensive).',
      'useEffect: Reserved strictly for synchronizing with EXTERNAL systems (browser APIs, DOM listeners, timers, network fetch, WebSockets) that React does not control.',
      'Anti-pattern: Storing derived values in useState and updating them in useEffect triggers an extra render pass, causes layout glitches, and invites stale bugs.'
    ],
    keyInsight: 'Rule of thumb: "You might not need an effect." If it only transforms data for rendering, derive it inline.',
    followUpQuestion: 'How would you reset an entire form state when an ID prop changes without using useEffect?'
  },
  {
    id: 'q-3',
    questionNumber: 3,
    question: 'What causes an effect loop?',
    moduleId: 'react-js',
    moduleName: 'React.js',
    difficulty: 'Beginner',
    whatTheyAreTesting: 'Root-cause analysis of infinite re-render loops and reference equality in dependency arrays.',
    answerOutline: [
      'Mechanism: An effect updates a state variable (setState) that is itself listed in the effect dependency array, or that causes a dependency to change reference on every render.',
      'Non-primitive dependencies: Creating objects, arrays, or inline functions inside the component body creates a new memory reference on every render. If passed to useEffect dependency array, the effect runs after every render, triggering setState, resulting in an infinite loop.',
      'Fixes: Use functional state updates (setState(prev => ...)), move object/function declarations inside the effect, memoize dependencies with useMemo/useCallback, or remove redundant state.'
    ],
    keyInsight: 'React compares dependencies using Object.is. { a: 1 } !== { a: 1 } across two consecutive renders.',
    followUpQuestion: 'Why does an empty dependency array [] run twice in development when React.StrictMode is active?'
  },
  {
    id: 'q-4',
    questionNumber: 4,
    question: 'Explain useMemo versus useCallback.',
    moduleId: 'react-js',
    moduleName: 'React.js',
    difficulty: 'Intermediate',
    whatTheyAreTesting: 'Grasp of JavaScript reference stability, memoization overhead, and when optimization is actually warranted vs premature.',
    answerOutline: [
      'useMemo: Caches the RESULT of a computation: useMemo(() => computeExpensiveValue(a, b), [a, b]). Recalculates only when dependencies change.',
      'useCallback: Caches the FUNCTION INSTANCE itself: useCallback((param) => { ... }, [deps]). It is syntactic sugar for useMemo(() => fn, [deps]).',
      'Primary purpose of useCallback: Passing stable callback references to memoized children (React.memo) to prevent unnecessary re-renders, or as dependencies to other hooks.'
    ],
    keyInsight: 'Memoization is not free; it incurs memory overhead and dependency comparison cost. Never wrap cheap calculations in useMemo.',
    followUpQuestion: 'If a child component is NOT wrapped in React.memo, does passing a useCallback prop prevent the child from re-rendering?'
  },
  {
    id: 'q-5',
    questionNumber: 5,
    question: 'What are stale closures?',
    moduleId: 'react-js',
    moduleName: 'React.js',
    difficulty: 'Advanced',
    whatTheyAreTesting: 'Deep understanding of JavaScript lexical scope combined with React component lifecycles and hook dependencies.',
    answerOutline: [
      'Definition: A closure that captures variables from an older render cycle because the function reference was not recreated when those variables were updated.',
      'Common appearance: Inside setInterval callbacks, setTimeout, event listeners, or hooks with omitted dependencies (e.g., []).',
      'Example: useEffect(() => { setInterval(() => { console.log(count); }, 1000); }, []) will forever print the initial value of count (0).',
      'Remedies: Use functional updates (setCount(c => c + 1)), include all referenced variables in the dependency array, or use a mutable useRef to track the latest value.'
    ],
    keyInsight: 'Functions in JavaScript "remember" the lexical scope of the specific render cycle in which they were declared.',
    followUpQuestion: 'How can you write a custom useLatest(value) hook using useRef to bypass stale closures in event handlers?'
  },
  {
    id: 'q-6',
    questionNumber: 6,
    question: 'Explain JavaScript event loop and microtasks.',
    moduleId: 'javascript-fundamentals',
    moduleName: 'JavaScript Fundamentals',
    difficulty: 'Intermediate',
    whatTheyAreTesting: 'Single-threaded non-blocking concurrency model in the JavaScript runtime (V8 / Node / Browser).',
    answerOutline: [
      'Call Stack: Synchronous code executes one frame at a time. Blocking tasks freeze the stack.',
      'Task Queues: When asynchronous operations complete (Web APIs/libuv), callbacks are queued into either the Microtask Queue or the Macrotask (Task) Queue.',
      'Microtasks: Promise callbacks (.then, .catch, .finally), queueMicrotask, MutationObserver, and in Node: process.nextTick (which runs with highest priority).',
      'Macrotasks: setTimeout, setInterval, setImmediate (Node), I/O operations, UI rendering.',
      'Loop Rule: After the call stack is empty, the event loop drains ALL microtasks in the queue completely before executing the single next macrotask.'
    ],
    keyInsight: 'If a microtask continuously schedules another microtask, it will starve the event loop, completely blocking UI rendering and macrotasks.',
    followUpQuestion: 'What will be logged and in what exact order for: console.log(1); setTimeout(() => console.log(2), 0); Promise.resolve().then(() => console.log(3)); console.log(4);?'
  },
  {
    id: 'q-7',
    questionNumber: 7,
    question: 'How do Express middleware functions work?',
    moduleId: 'nodejs-express-rest',
    moduleName: 'Node.js + Express + REST APIs',
    difficulty: 'Beginner',
    whatTheyAreTesting: 'Pipeline architecture, request-response cycle, middleware chaining, and error propagation in Express.',
    answerOutline: [
      'Signature: A function with (req, res, next) access. Error middlewares have four parameters: (err, req, res, next).',
      'Pipeline execution: Express executes middlewares sequentially in the order registered via app.use() or router.use().',
      'Flow control: Middleware must either terminate the request (res.json(), res.send()) or pass control to the next middleware by invoking next().',
      'Error flow: Calling next(err) with any truthy argument skips all subsequent standard middlewares and immediately routes to the registered 4-argument error handling middleware.'
    ],
    keyInsight: 'If a middleware neither calls next() nor ends the response, the request will hang indefinitely until client timeout.',
    followUpQuestion: 'How do you handle async errors inside Express 4 middleware without crashing the process?'
  },
  {
    id: 'q-8',
    questionNumber: 8,
    question: 'How would you design a secure CRUD API?',
    moduleId: 'nodejs-express-rest',
    moduleName: 'Node.js + Express + REST APIs',
    difficulty: 'Advanced',
    whatTheyAreTesting: 'Production API security, authorization boundaries, input sanitization, and defensive engineering.',
    answerOutline: [
      'Authentication & Authorization: Use verified JWTs or secure httpOnly, SameSite cookies. Enforce RBAC/ABAC at the route handler level (check user ownership: WHERE id = :id AND user_id = :userId).',
      'Input Validation: Validate all params, query, and request bodies against strict schemas (e.g. Zod) before executing business logic; strip unexpected keys.',
      'Network Security: Enforce HTTPS, Helmet security headers (HSTS, CSP), and tight CORS origin allowlists.',
      'Rate Limiting & DoS: Apply IP-based and user-token-based rate limiters (e.g., redis-backed rate limit) and request payload size caps.',
      'Safe Error Responses: Centralized error handling returning structured error codes (e.g., { error: "NOT_FOUND" }) without leaking database queries or stack traces.'
    ],
    keyInsight: 'Never trust user input or IDs passed in URL parameters; always verify ownership of the resource against the authenticated caller context.',
    followUpQuestion: 'What is IDOR (Insecure Direct Object Reference) and how does your API design prevent it?'
  },
  {
    id: 'q-9',
    questionNumber: 9,
    question: 'Explain SQL joins and when to use indexes.',
    moduleId: 'postgresql-sql',
    moduleName: 'PostgreSQL + SQL',
    difficulty: 'Intermediate',
    whatTheyAreTesting: 'Relational query construction, join semantics, B-tree index mechanics, and database query optimization.',
    answerOutline: [
      'Join Types: INNER JOIN (only matching records in both tables), LEFT JOIN (all records from left table, NULLs for unmatched right), RIGHT JOIN, and FULL OUTER JOIN.',
      'B-Tree Indexing: Balanced tree structure providing O(log n) lookups. Use on columns frequently evaluated in WHERE, JOIN ON, and ORDER BY clauses.',
      'Composite Index: Indexed on multiple columns (colA, colB). Effective for queries filtering on colA or (colA, colB), but not colB alone (leftmost prefix rule).',
      'When NOT to index: Small tables (sequential scan is faster), columns with very low selectivity/cardinality (e.g. boolean is_active), or write-heavy tables where index maintenance slows down inserts/updates.'
    ],
    keyInsight: 'Adding an index speeds up reads but incurs a storage penalty and slows down INSERT, UPDATE, and DELETE operations.',
    followUpQuestion: 'What does EXPLAIN ANALYZE output reveal about whether a query is using an index scan vs a sequential scan?'
  },
  {
    id: 'q-10',
    questionNumber: 10,
    question: 'What is a transaction and why does it matter?',
    moduleId: 'postgresql-sql',
    moduleName: 'PostgreSQL + SQL',
    difficulty: 'Intermediate',
    whatTheyAreTesting: 'Understanding of ACID properties, atomic multi-step database operations, and data consistency under concurrent load.',
    answerOutline: [
      'Definition: A single logical unit of work consisting of one or more SQL statements wrapped between BEGIN and COMMIT (or ROLLBACK).',
      'ACID Guarantees: Atomicity (all succeed or none do), Consistency (schema constraints preserved), Isolation (concurrent transactions do not interfere), Durability (committed changes survive system crash).',
      'Practical necessity: Multi-step business operations like transferring funds or enrolling a student while debiting a lesson credit. If step 2 fails, step 1 is rolled back automatically.',
      'Isolation Levels: Read Committed (default in PG), Repeatable Read, and Serializable to prevent dirty reads, non-repeatable reads, and phantom reads.'
    ],
    keyInsight: 'Without transactions, partial failures leave databases corrupted with orphaned records and inconsistent financial or progress records.',
    followUpQuestion: 'What causes a database deadlock in concurrent transactions and how do you prevent it?'
  },
  {
    id: 'q-11',
    questionNumber: 11,
    question: 'When would you use Python/FastAPI rather than Node.js?',
    moduleId: 'python-fastapi',
    moduleName: 'Python + FastAPI',
    difficulty: 'Intermediate',
    whatTheyAreTesting: 'Architectural maturity, polyglot system evaluation, and knowing the right tool for AI/ML workloads vs general web services.',
    answerOutline: [
      'Choose Python/FastAPI: When building services integrated with AI/ML, NLP, data science libraries (PyTorch, Hugging Face, NumPy, Whisper, LangChain, LlamaIndex), or when automatic OpenAPI docs with Pydantic validation are paramount.',
      'Choose Node.js: For high-throughput I/O-bound web APIs, real-time WebSockets, full-stack JavaScript/TypeScript code sharing (types, utilities, React SSR), and broad npm ecosystem integrations.',
      'Microservice pattern: Common modern architecture uses Node.js/TypeScript as the customer-facing gateway/BFF and Python/FastAPI as dedicated internal AI inference and RAG microservices.'
    ],
    keyInsight: 'FastAPI provides async ASGI performance close to Node/Go, but Python’s real superpower is its unrivaled AI ecosystem.',
    followUpQuestion: 'How does FastAPI handle asynchronous vs synchronous routes with its background thread pool?'
  },
  {
    id: 'q-12',
    questionNumber: 12,
    question: 'What is an LLM and what is a context window?',
    moduleId: 'generative-ai-llm',
    moduleName: 'Generative AI + LLM Fundamentals',
    difficulty: 'Beginner',
    whatTheyAreTesting: 'Core Generative AI primitives, transformer architecture intuition, and token limit constraints.',
    answerOutline: [
      'Large Language Model: A deep neural network (typically a decoder-only Transformer) trained on massive text corpora to predict the statistical probability of the next token.',
      'Tokens: Sub-word chunks (roughly 4 characters or 0.75 words in English). Models process token IDs, not raw text strings.',
      'Context Window: The maximum number of total tokens (input prompt + generated completion) the model can process in a single inference call.',
      'Implications: Context limits dictate how much documentation, chat history, or RAG context can be supplied at once. Long context windows also suffer from "Lost-in-the-Middle" retrieval degradation.'
    ],
    keyInsight: 'LLMs are stateless: they remember past conversation turns only because the client application resends previous turns in the prompt history.',
    followUpQuestion: 'What is the trade-off between increasing context window size and inference latency/cost?'
  },
  {
    id: 'q-13',
    questionNumber: 13,
    question: 'Explain RAG end to end.',
    moduleId: 'rag-vector-search',
    moduleName: 'RAG, Vector Search, and LLM Applications',
    difficulty: 'Advanced',
    whatTheyAreTesting: 'End-to-end architecture of Retrieval-Augmented Generation systems, data flow, and grounding mechanics.',
    answerOutline: [
      'Ingestion Phase: Documents are loaded, cleaned, split into chunks (e.g. 500 characters with 50 overlap), converted to vector embeddings via an embedding model, and indexed in a vector database (e.g., pgvector).',
      'Retrieval Phase: User query is converted into an embedding using the SAME model. A similarity search (cosine/inner product) finds top-K most relevant chunks, often refined by hybrid search (BM25 + vector) and a reranker.',
      'Generation Phase: The retrieved chunks are assembled into a prompt template alongside the user question with strict instructions to answer only based on provided context.',
      'Output: The LLM generates a grounded response with citations, dramatically minimizing hallucinations.'
    ],
    keyInsight: 'RAG separates knowledge storage (cheap, dynamic vector DB) from reasoning (LLM), avoiding expensive model fine-tuning.',
    followUpQuestion: 'How do you prevent a RAG application from answering when the retrieved context does not contain the answer?'
  },
  {
    id: 'q-14',
    questionNumber: 14,
    question: 'What are embeddings and vector search?',
    moduleId: 'rag-vector-search',
    moduleName: 'RAG, Vector Search, and LLM Applications',
    difficulty: 'Intermediate',
    whatTheyAreTesting: 'Mathematical intuition behind semantic representations and indexing algorithms in vector stores.',
    answerOutline: [
      'Embeddings: Dense numerical vectors (e.g., 1536 floating-point numbers) generated by neural networks that capture semantic meaning in high-dimensional space.',
      'Semantic distance: Concepts that are semantically related (e.g., "dog" and "puppy") have vectors that point in similar directions, even if they share zero identical keywords.',
      'Vector Search: Finding nearest neighbor vectors using metrics like Cosine Similarity, Dot Product, or Euclidean Distance.',
      'Vector Indexes: Approximate Nearest Neighbor (ANN) algorithms like HNSW (graph-based) and IVFFlat (cluster-based) allow sub-millisecond retrieval across millions of vectors.'
    ],
    keyInsight: 'Keyword search matches exact words; vector search matches conceptual meaning and intent.',
    followUpQuestion: 'Why is hybrid search (combining BM25 keyword matching with vector search) usually superior to pure vector search alone?'
  },
  {
    id: 'q-15',
    questionNumber: 15,
    question: 'How would you reduce hallucinations?',
    moduleId: 'generative-ai-llm',
    moduleName: 'Generative AI + LLM Fundamentals',
    difficulty: 'Intermediate',
    whatTheyAreTesting: 'Practical strategies for building trustworthy, grounded production AI applications.',
    answerOutline: [
      'Grounded Context (RAG): Provide verifiable reference source documents and instruct the model: "Answer solely using the context provided below. If unknown, say I do not know."',
      'Temperature Reduction: Set temperature close to 0 (e.g., 0.0 - 0.2) for deterministic, factual responses.',
      'Structured Outputs: Enforce schemas via JSON Schema / tool calling to prevent speculative narrative rambling.',
      'Few-Shot Prompting: Include concrete input-output examples demonstrating the exact tone, constraints, and refusal behavior.',
      'Verification / Guardrails: Implement citation matching, or use an independent lightweight evaluator model to check faithfulness of output against retrieved chunks.'
    ],
    keyInsight: 'Hallucination is not a bug in LLMs—it is next-token generation doing what it was trained to do without explicit fact verification unless grounded by your pipeline.',
    followUpQuestion: 'How do you measure hallucination rates programmatically in a continuous CI/CD evaluation pipeline?'
  },
  {
    id: 'q-16',
    questionNumber: 16,
    question: 'What are ASR and TTS?',
    moduleId: 'speech-ai-production',
    moduleName: 'Speech AI + ASR/TTS + Production Engineering',
    difficulty: 'Beginner',
    whatTheyAreTesting: 'Understanding of foundational speech processing modalities and real-world audio pipeline constraints.',
    answerOutline: [
      'ASR (Automatic Speech Recognition / Speech-to-Text): Converts spoken acoustic audio waves into written text transcripts (e.g., OpenAI Whisper, Deepgram, Google Speech-to-Text).',
      'TTS (Text-to-Speech): Synthesizes natural-sounding spoken audio speech from written text using acoustic models and vocoders (e.g., ElevenLabs, Azure Speech, OpenAI TTS).',
      'Technical Considerations: Audio sample rates (16kHz for ASR), background noise filtering, latency (streaming vs batch), accents/dialects, and word-level timestamps.'
    ],
    keyInsight: 'Real-time interactive voice applications require end-to-end latency under 300-500ms to feel natural to human conversational flow.',
    followUpQuestion: 'What are the architectural differences between batch ASR transcription and real-time streaming WebSocket transcription?'
  },
  {
    id: 'q-17',
    questionNumber: 17,
    question: 'How would you connect speech AI to a React app?',
    moduleId: 'speech-ai-production',
    moduleName: 'Speech AI + ASR/TTS + Production Engineering',
    difficulty: 'Intermediate',
    whatTheyAreTesting: 'Browser Web APIs for audio capture, streaming vs REST transport, and audio playback UX.',
    answerOutline: [
      'Capture: Use browser navigator.mediaDevices.getUserMedia({ audio: true }) to request microphone access and MediaRecorder API to record audio chunks.',
      'Transport Option 1 (Batch): Collect audio blobs into a single WebM file, append to FormData, and POST to backend ASR endpoint.',
      'Transport Option 2 (Streaming): Stream audio chunks over WebSocket directly for low-latency live transcription and pronunciation feedback.',
      'Backend Processing: Validate audio mime-type, convert format if needed (e.g. ffmpeg to WAV 16kHz mono), call ASR engine, and return text/phoneme assessment.',
      'TTS Playback: Receive audio buffer or streaming audio URL and play via HTML5 Audio element or Web Audio API with visual waveform feedback.'
    ],
    keyInsight: 'Always handle microphone permission denial, unmounted component audio buffer leaks, and browser autoplay audio policy restrictions gracefully.',
    followUpQuestion: 'How do you handle browser compatibility differences in MediaRecorder audio codecs (e.g., Safari iOS vs Chrome)?'
  },
  {
    id: 'q-18',
    questionNumber: 18,
    question: 'How do you test and monitor a production API?',
    moduleId: 'speech-ai-production',
    moduleName: 'Speech AI + ASR/TTS + Production Engineering',
    difficulty: 'Intermediate',
    whatTheyAreTesting: 'Engineering rigor across the testing lifecycle and production observability (metrics, logs, traces).',
    answerOutline: [
      'Testing Pyramid: Unit tests for pure business logic and validators; Integration tests with Supertest against live test database instances; E2E smoke tests for critical user flows.',
      'Observability - Metrics: Monitor Golden Signals (Latency p50/p95/p99, Traffic/RPS, Errors 4xx/5xx rates, Saturation/CPU/Memory) using Prometheus/Datadog.',
      'Structured Logging: Emit JSON logs with correlation IDs (traceId) passed across microservices for distributed debugging.',
      'Health Checks: Liveness probe (/live) and readiness probe (/ready - verifies DB and Redis connectivity) for orchestrators like Kubernetes or Docker.',
      'Alerting: Set proactive thresholds for error spikes and latency degradation with automated rollback triggers.'
    ],
    keyInsight: 'If you do not have distributed trace IDs, debugging a production issue spanning frontend -> Node gateway -> Python AI service is nearly impossible.',
    followUpQuestion: 'What is the difference between a liveness probe and a readiness probe in automated container deployments?'
  },
  {
    id: 'q-19',
    questionNumber: 19,
    question: 'Explain the language-learning platform architecture and the LSRW flow.',
    moduleId: 'speech-ai-production',
    moduleName: 'Speech AI + ASR/TTS + Production Engineering',
    difficulty: 'Advanced',
    whatTheyAreTesting: 'Holistic system design ability, multi-modal integration, and personal ownership of the candidate’s flagship project.',
    answerOutline: [
      'Architecture Overview: Multi-tier system with React frontend, Node/Express or FastAPI backend, PostgreSQL relational database, and speech/AI processing services.',
      'Listening (L): React streams audio lessons from CDN/S3; playback speed controls and interactive sentence timestamps synced to transcripts.',
      'Speaking (S): User records pronunciation exercises via MediaRecorder; audio is sent to ASR service to produce phoneme-level alignment and pronunciation accuracy score.',
      'Reading (R): Interactive text display with instant tap-to-translate, vocab definitions, and grammar explanations powered by LLM prompt templates.',
      'Writing (W): User writes sentences or short essays; backend validates against NLP/LLM grammar checker, returning highlighted corrections and stylistic suggestions.',
      'Progress Sync: Learner activity, accuracy scores, and streaks update atomically in PostgreSQL with optimistic UI feedback in React.'
    ],
    keyInsight: 'Structuring an interview answer around the LSRW pedagogical pillars demonstrates product empathy combined with technical depth.',
    followUpQuestion: 'How did you optimize audio upload latency for mobile users on unstable network connections?'
  },
  {
    id: 'q-20',
    questionNumber: 20,
    question: 'Describe one complex bug, how it was diagnosed, and what was learned.',
    moduleId: 'speech-ai-production',
    moduleName: 'Speech AI + ASR/TTS + Production Engineering',
    difficulty: 'Intermediate',
    whatTheyAreTesting: 'STAR method competency, systematic root-cause diagnosis, debugging under pressure, and continuous improvement.',
    answerOutline: [
      'Situation: In the language platform, users reported intermittent recording failures where pronunciation exercises submitted empty audio or crashed on iOS Safari.',
      'Task: Identify why mobile users suffered audio submission failures and eliminate client crashes without degrading audio fidelity.',
      'Action: Examined client error logs; discovered iOS Safari did not support the "audio/webm" mime-type used in MediaRecorder defaults, falling back to unsupported codecs. Also identified a race condition where stopping the media stream was called before dataavailable fired.',
      'Resolution: Implemented dynamic mimeType detection (audio/mp4 on Safari, audio/webm on Chromium), ensured MediaRecorder.onstop only dispatches after ondataavailable flushes the final chunk, and added fallback audio conversion on the server.',
      'Learnings: Never assume browser API parity across vendors for media devices; always include automated cross-browser testing for audio hardware access.'
    ],
    keyInsight: 'Great engineers don’t just fix the immediate bug—they add defensive code, cross-browser compatibility checks, and automated monitoring to prevent recurrence.',
    followUpQuestion: 'How did you verify that this bug fix did not regress performance on Android or desktop browsers?'
  }
];
