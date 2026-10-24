export interface CodingDrill {
  id: string;
  title: string;
  module: string;
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
  description: string;
  codeSnippet: string;
  explanation: string;
  testPrompt: string;
}

export const CODING_DRILLS: CodingDrill[] = [
  {
    id: 'drill-debounce',
    title: 'Custom Debounce Utility with Cancellation',
    module: 'JavaScript Fundamentals',
    difficulty: 'Intermediate',
    description: 'Implement a debounce function from scratch that delays function execution until after wait milliseconds have elapsed since the last time it was invoked.',
    codeSnippet: `// Custom Debounce Implementation
function debounce<T extends (...args: any[]) => void>(
  fn: T,
  delayMs: number
): { (...args: Parameters<T>): void; cancel: () => void } {
  let timerId: ReturnType<typeof setTimeout> | null = null;

  const debounced = (...args: Parameters<T>) => {
    if (timerId !== null) {
      clearTimeout(timerId);
    }
    timerId = setTimeout(() => {
      fn(...args);
      timerId = null;
    }, delayMs);
  };

  debounced.cancel = () => {
    if (timerId !== null) {
      clearTimeout(timerId);
      timerId = null;
    }
  };

  return debounced;
}`,
    explanation: 'Debounce ensures that a function is not called too frequently. By clearing the active timer on every subsequent invocation, only the trailing call fires after the user pauses typing.',
    testPrompt: 'Notice how cancel() is attached directly to the returned function so useEffect cleanup can clear pending timers on unmount.'
  },
  {
    id: 'drill-event-loop',
    title: 'JavaScript Event Loop: Microtasks vs Macrotasks',
    module: 'JavaScript Fundamentals',
    difficulty: 'Intermediate',
    description: 'Predict and verify the execution sequence of mixed synchronous, microtask, and macrotask statements.',
    codeSnippet: `console.log('1: Synchronous start');

setTimeout(() => {
  console.log('2: Macrotask (setTimeout)');
}, 0);

Promise.resolve().then(() => {
  console.log('3: Microtask 1 (Promise.then)');
}).then(() => {
  console.log('4: Microtask 2 (Chained Promise)');
});

queueMicrotask(() => {
  console.log('5: Microtask 3 (queueMicrotask)');
});

console.log('6: Synchronous end');

// Output order:
// 1 -> 6 -> 3 -> 5 -> 4 -> 2`,
    explanation: '1 and 6 execute synchronously on the call stack. Once the stack is empty, the microtask queue (3, 5, 4) is completely drained before the macrotask queue (2) executes.',
    testPrompt: 'Key rule: Microtasks always preempt macrotasks between turns of the event loop.'
  },
  {
    id: 'drill-react-fetch',
    title: 'Resilient Fetch Hook with AbortController & States',
    module: 'React.js',
    difficulty: 'Intermediate',
    description: 'A custom hook pattern that prevents race conditions, handles loading/error states, and supports manual refetching.',
    codeSnippet: `import { useState, useEffect, useCallback } from 'react';

export function useFetchData<T>(url: string) {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const fetchData = useCallback(async (signal?: AbortSignal) => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch(url, { signal });
      if (!response.ok) {
        throw new Error(\`HTTP error! status: \${response.status}\`);
      }
      const json = await response.json();
      setData(json);
    } catch (err: any) {
      if (err.name !== 'AbortError') {
        setError(err.message || 'Unknown network error');
      }
    } finally {
      setLoading(false);
    }
  }, [url]);

  useEffect(() => {
    const controller = new AbortController();
    fetchData(controller.signal);
    return () => controller.abort();
  }, [fetchData]);

  return { data, loading, error, refetch: () => fetchData() };
}`,
    explanation: 'The AbortController ensures that if url changes or the component unmounts before the network request resolves, the browser cancels the request without throwing an uncaught error in state setters.',
    testPrompt: 'Always check err.name !== "AbortError" so cancelled requests are not misreported as user errors.'
  },
  {
    id: 'drill-rag-pipeline',
    title: 'RAG Text Chunking & Embedding Pipeline Flow',
    module: 'RAG & Vector Search',
    difficulty: 'Advanced',
    description: 'Practical recursive text chunking logic with overlap calculation for vector databases.',
    codeSnippet: `def recursive_character_chunker(
    text: str, 
    chunk_size: int = 500, 
    chunk_overlap: int = 50
) -> list[str]:
    chunks = []
    start = 0
    text_length = len(text)
    
    while start < text_length:
        end = min(start + chunk_size, text_length)
        chunk = text[start:end]
        chunks.append(chunk)
        
        # Advance with overlap
        start += (chunk_size - chunk_overlap)
        if start >= text_length:
            break
            
    return chunks

# Example usage for pgvector ingestion
chunks = recursive_character_chunker(document_text, 500, 50)
print(f"Total chunks created: {len(chunks)}")`,
    explanation: 'Chunk overlap preserves semantic context across slice boundaries so vital sentences split in the middle do not lose their semantic embedding similarity.',
    testPrompt: 'Rule of thumb: 10% overlap (e.g., 500 size with 50 overlap) balances semantic continuity without excessive vector storage inflation.'
  },
  {
    id: 'drill-fastapi-schema',
    title: 'FastAPI Structured AI Endpoint with Pydantic v2',
    module: 'Python + FastAPI',
    difficulty: 'Intermediate',
    description: 'Typed request/response schema with strict validation and dependency injection.',
    codeSnippet: `from fastapi import FastAPI, Depends, HTTPException, status
from pydantic import BaseModel, Field
import time

app = FastAPI(title="Interview AI Assistant API", version="1.0.0")

class PromptRequest(BaseModel):
    question: str = Field(..., min_length=5, max_length=1000)
    topic: str = Field(..., examples=["React", "PostgreSQL", "RAG"])
    temperature: float = Field(default=0.2, ge=0.0, le=1.0)

class AIResponse(BaseModel):
    question: str
    concise_framework: list[str]
    confidence_score: float
    processed_in_ms: float

@app.post("/api/v1/generate-answer", response_model=AIResponse)
async def generate_answer(payload: PromptRequest):
    start = time.perf_counter()
    # In production, call LLM async client with timeout
    framework = [
        "1. Direct definition & core principle",
        "2. Production architecture / code example",
        "3. Common edge cases and trade-offs"
    ]
    elapsed = (time.perf_counter() - start) * 1000
    
    return AIResponse(
        question=payload.question,
        concise_framework=framework,
        confidence_score=0.96,
        processed_in_ms=round(elapsed, 2)
    )`,
    explanation: 'FastAPI uses Pydantic to automatically validate HTTP request payloads, reject invalid types with 422 Unprocessable Entity, and generate OpenAPI documentation automatically.',
    testPrompt: 'Pydantic models eliminate manual input validation boilerplate across your entire backend.'
  }
];
