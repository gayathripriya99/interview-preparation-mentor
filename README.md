# Production Interview Mentor 🚀

> **A practical, interview-first roadmap & preparation platform for Full-Stack Developer and Generative AI Engineer candidates.**

Designed for high-intensity, structured preparation from **October 24 to October 31, 2026**.

---

## 🎯 Key Features & Capabilities

- **Interactive Sprint Dashboard**: Target completion countdown (October 31, 2026), live progress meter, and "Next Best Task" recommendation.
- **8 Core Curriculum Modules**:
  1. **React.js**: 14 hooks, Fiber reconciliation, stale closures, TanStack Query, RTL testing, and performance profiling.
  2. **JavaScript Fundamentals**: Event loop (microtasks vs macrotasks), closures, `this` binding, prototypes, immutability, and debounce/throttle.
  3. **Node.js + Express + REST APIs**: Libuv thread pool, middleware pipeline, centralized error handlers, JWT authentication, and pagination.
  4. **PostgreSQL + SQL**: Joins, B-tree indexes, transactions (ACID), EXPLAIN plans, window functions, and schema design.
  5. **Python + FastAPI**: Type annotations, Pydantic v2 schemas, ASGI async endpoints, dependency injection, and AI microservices.
  6. **Generative AI + LLM Fundamentals**: Tokenomics, context windows, prompt engineering, structured JSON generation, embeddings, and hallucination reduction.
  7. **RAG, Vector Search & LLM Applications**: Ingestion, recursive chunking, pgvector, hybrid search, rerankers, and RAG evaluation.
  8. **Speech AI + ASR/TTS + Production Engineering**: Whisper ASR, audio pipelines (16kHz WAV vs WebM), LSRW flow, Docker multi-stage builds, and CI/CD.
- **Daily Sprint Schedule (Oct 24–31, 2026)**: Line-by-line daily tasks, checklists with estimated minutes, and daily milestones.
- **20-Question Core Interview Bank**: Evaluator testing goals, concise frameworks, key insights, and follow-up questions with interactive self-rating (*Not yet / Needs practice / Confident*).
- **Timed Mock Interview Mode**: 15m / 30m / 45m countdown simulator with flashcard review, reveal answer framework, and performance scorecard.
- **Prior Language-Learning Platform Project Recall Worksheet**: Honest memory guide for LSRW features, React component hierarchy, REST contracts, PostgreSQL schema, and STAR production bug resolution with autosaving notes.
- **Interactive Coding Workbenches**: Live debounce benchmark with cancellation, real-time RAG text chunking visualizer, and canonical code snippets.
- **Resource Directory**: Searchable catalog of official documentation and video courses with verified links (`rel="noopener noreferrer"`).
- **Zero Secrets / Local Storage**: Progress and notes are persisted entirely in your browser's `localStorage` with JSON export & import capabilities.

---

## 🛠️ Local Development Setup

### 1. Prerequisites
Ensure you have **Node.js** (v18+ recommended) and **npm** installed:
```bash
node -v
npm -v
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Run Locally (Dev Server)
```bash
npm run dev
```
Open your browser at `http://localhost:5173/` to view the application with hot module replacement (HMR).

### 4. Build for Production
```bash
npm run build
```
This compiles TypeScript and outputs optimized static assets to the `dist/` folder.

You can preview the production bundle locally with:
```bash
npm run preview
```

---

## 🚀 GitHub & Vercel Deployment Instructions

### Step 1: Initialize Git and Push to GitHub

1. Open your terminal in this project root:
   ```bash
   git init
   git add .
   git commit -m "feat: complete production interview mentor roadmap"
   ```

2. Link to your GitHub repository and push:
   ```bash
   git branch -M main
   git remote add origin https://github.com/gayathripriya99/interview-preparation-mentor.git
   git push -u origin main
   ```
   *(If prompted, authenticate using your GitHub personal access token or Git Credential Manager).*

---

### Step 2: Deploy to Vercel

1. Log into your Vercel account at [https://vercel.com/gayathripriyacvg-6868s-projects](https://vercel.com/gayathripriyacvg-6868s-projects).
2. Click **"Add New..."** > **"Project"**.
3. Under **"Import Git Repository"**, select `interview-preparation-mentor` (or paste `https://github.com/gayathripriya99/interview-preparation-mentor`).
4. Configure the project settings:
   - **Framework Preset**: `Vite`
   - **Root Directory**: `./`
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
   - **Install Command**: `npm install`
5. **Environment Variables**: None needed! (The application is 100% self-contained and requires zero API keys or secrets for the first release).
6. Click **Deploy**. Vercel will build and assign you a live production URL (e.g., `https://interview-preparation-mentor.vercel.app`).

---

## 📦 Project Structure

```
├── Complete_React_JS_Concepts_and_Hooks_Interview_Guide.pdf # Reference PDF guide
├── PRODUCTION_INTERVIEW_MENTOR_CLAUDE_PROMPT.md            # Master specification
├── index.html                                              # HTML5 entry with Plus Jakarta Sans & JetBrains Mono
├── package.json                                            # Vite + React 19 + TypeScript + Lucide + Confetti
├── tsconfig.json                                           # TypeScript compiler configuration
├── vite.config.ts                                          # Vite build config
├── dist/                                                   # Static production output for Vercel
└── src/
    ├── main.tsx                                            # React root mount
    ├── App.tsx                                             # App layout, router & navigation tabs
    ├── types/                                              # TypeScript interfaces
    ├── context/
    │   └── ProgressContext.tsx                             # LocalStorage state, progress metrics & JSON export/import
    ├── styles/
    │   └── index.css                                       # Dark theme design system & glassmorphism tokens
    ├── data/
    │   ├── curriculumData.ts                               # 8 modules topics, tasks, and documentation links
    │   ├── scheduleData.ts                                 # Daily roadmap from Oct 24 to Oct 31, 2026
    │   ├── questionsData.ts                                # 20 technical interview questions with answer outlines
    │   ├── projectWorksheetData.ts                         # Honest LSRW language-learning platform recall worksheet
    │   └── drillsData.ts                                   # Code snippets and algorithms
    └── components/
        ├── Navbar.tsx                                      # Header navigation, progress pill & reset modal
        ├── DashboardView.tsx                               # Executive dashboard & next-best-task selector
        ├── CurriculumView.tsx                              # 8 modules interactive accordion & confidence rater
        ├── ScheduleView.tsx                                # Oct 24-31 timeline & daily action items
        ├── QuestionBankView.tsx                            # 20 questions with concise frameworks & follow-ups
        ├── MockInterviewView.tsx                           # Timed mock simulator with answer reveal & timer
        ├── ProjectRecallView.tsx                           # Honest project recall notes with autosave
        ├── ResourceLibraryView.tsx                         # Searchable external documentation repository
        ├── CodingDrillsView.tsx                            # Live debounce & RAG chunking workbenches
        └── icons/
            └── GithubIcon.tsx                              # Clean GitHub SVG icon
```

---

## 🛡️ License
Private repository for interview preparation.
