# WikiAgent — Roadmap

> **Core Value:** Restore full end-to-end WikiAgent functionality
> **Total v1 Requirements:** 120
> **Phases:** 3
> **Created:** 2026-02-28

---

## Phase Overview

| Phase | Name | Requirements | Status |
|-------|------|-------------|--------|
| 1 | Build & Config Recovery | 75 | ✅ Done |
| 2 | UI & Routing Restoration | 26 | ✅ Done |
| 3 | AI Agent & Logic Hardening | 19 | ✅ Done |
| 4 | AI Security Test Suite | 4 | Not Started |

---

## Phase 1: Build & Config Recovery

**Goal:** Fix every config, dependency, toolchain, and utility file so that `npm install` succeeds and `npm run dev` starts the Next.js dev server without crashing.

**Depends on:** Nothing (first phase)

**Requirements:** CFG-01, CFG-02, CFG-03, CFG-04, CFG-05, CFG-06, CFG-07, CFG-08, CFG-09, CFG-10, CFG-11, CFG-12, CFG-13, CFG-14, CFG-15, CFG-16, CFG-17, CFG-18, CFG-19, CFG-20, CFG-21, CFG-22, CFG-23, CFG-24, CFG-25, CFG-26, CFG-27, CFG-28, CFG-29, CFG-30, CFG-31, CFG-32, CFG-33, CFG-34, CFG-35, CFG-36, CFG-37, CFG-38, CFG-39, CFG-40, CFG-41, CFG-42, CFG-43, CFG-44, CFG-45, CFG-46, CFG-47, CFG-48, UTIL-01, UTIL-02, UTIL-03, UTIL-04, UTIL-05, UTIL-06, HOOK-01, HOOK-02, HOOK-03, HOOK-04, HOOK-05, HOOK-06, HOOK-07, HOOK-08, HOOK-09, HOOK-10, HOOK-11, HOOK-12, HOOK-13, HOOK-14, HOOK-15, HOOK-16, HOOK-17, HOOK-18, HOOK-19, HOOK-20, DATA-01

**Research needs:** Unlikely — these are deterministic text corrections

**Success Criteria:**
1. `package.json` is valid JSON and contains only real npm package names with valid versions
2. `tsconfig.json` is valid JSON with correct TypeScript compiler options
3. `next.config.ts`, `tailwind.config.ts`, and `postcss.config.mjs` parse without syntax errors
4. `components.json` aliases point to real directory paths
5. `npm install` completes without resolution errors
6. `src/lib/utils.ts` exports a working `cn()` utility (clsx + twMerge)
7. Both hooks (`use-mobile.tsx`, `use-toast.ts`) are syntactically valid TypeScript with correct API usage
8. `npm run dev` starts the Next.js dev server (may still show component errors — those are Phase 2)

**Status:** ✅ Done

---

## Phase 2: UI & Routing Restoration

**Goal:** Rebuild the three ASCII-art-wiped components, clean all garbage from `layout.tsx` and `globals.css`, and fix every broken import/prop in the chat UI so the app renders a functional interface.

**Depends on:** Phase 1 (build must succeed before UI can render)

**Requirements:** UI-01, UI-02, UI-03, UI-04, UI-05, UI-06, UI-07, UI-08, UI-09, UI-10, COMP-01, COMP-02, COMP-03, COMP-04, COMP-05, COMP-06, COMP-07, COMP-08, COMP-09, COMP-10, COMP-11, COMP-12, COMP-13, COMP-14, DATA-02, DATA-03

**Research needs:** Likely — need to reconstruct `page.tsx`, `chat-container.tsx`, and `tooltip.tsx` from scratch based on the app's blueprint and working-copy behavior

**Research topics:**
- What did the original `page.tsx` WikiAgent page look like? (derive from `blueprint.md` + `chat-message.tsx` interface)
- What ChatContainer component structure does `chat-message.tsx` expect?
- Standard shadcn/ui Tooltip component implementation

**Success Criteria:**
1. `layout.tsx` renders a valid HTML document with `lang="en"`, Inter font loaded, and a clean `<body>` wrapper
2. `globals.css` applies light/dark theme variables without CSS parse errors
3. `page.tsx` renders the WikiAgent chat interface with a question input and message display area
4. `chat-container.tsx` provides the scrollable chat container with message rendering
5. `chat-message.tsx` renders user and assistant messages with source links
6. `tooltip.tsx` exports a working Tooltip component (standard shadcn/ui)
7. All renamed UI component files (`ali.tsx`, `doctor.tsx`, etc.) are either renamed back or import paths consistently resolve
8. The app loads in the browser at `localhost:3000` without runtime React errors

**Status:** ✅ Done

---

## Phase 3: AI Agent & Logic Hardening

**Goal:** Fix the Genkit AI flow so it can receive a user question, search the Wikipedia API, retrieve article extracts, and return a structured answer with source URLs.

**Depends on:** Phase 1 (valid deps), Phase 2 (UI must be able to call the flow)

**Requirements:** AI-01, AI-02, AI-03, AI-04, AI-05, AI-06, AI-07, AI-08, AI-09, AI-10, AI-11, AI-12, AI-13, AI-14, AI-15, AI-16, AI-17, AI-18, AI-19

**Research needs:** Likely — Genkit prompt/flow API patterns, Wikipedia API query format

**Research topics:**
- Genkit `ai.definePrompt` API for creating the missing `wikipediaAnswerPrompt`
- Wikipedia API extract endpoint format (`action=query&prop=extracts&titles=...`)
- Correct Gemini model identifier for `@genkit-ai/google-genai`

**Success Criteria:**
1. `genkit.ts` references a valid Gemini model identifier
2. `dev.ts` imports the correct AI flow module
3. `answer-question-with-wikipedia.ts` has a defined `AnswerQuestionWithWikipediaInputSchema` with a `question` field
4. The Wikipedia search tool correctly calls the Wikipedia API with `srsearch=` and parses the response
5. The Wikipedia extract fetcher uses correct variable names and API URL format
6. `wikipediaAnswerPrompt` is defined and instructs the model to answer using Wikipedia content
7. The full flow (`answerQuestionWithWikipedia`) executes end-to-end: question → Wikipedia search → extract → AI answer → structured output with `text` and `urls`

**Status:** ✅ Done

---

## Phase 4: AI Security Test Suite

**Goal:** Scaffold a robust Jest test suite that validates the AI agent's resilience against prompt injection, schema breakage, API failures, and context overflow attacks.

**Depends on:** Phase 3 (AI Agent flow must be fully restored before testing)

**Requirements:** SEC-01, SEC-02, SEC-03, SEC-04

**Research needs:** Unlikely — Jest/ts-jest patterns are well-known; mocking Genkit is straightforward

**Research topics:**
- Jest mocking patterns for `node-fetch` and Genkit AI instances
- Zod schema validation error handling patterns

**Success Criteria:**
1. Jest is configured with TypeScript support and `@/` path alias
2. `tests/ai/prompt-injection.test.ts` validates defense against instruction override attempts
3. `tests/ai/schema-breakage.test.ts` validates graceful handling of malformed LLM output
4. `tests/ai/api-outage.test.ts` validates resilience against Wikipedia API failures (empty, 500, timeout)
5. `tests/ai/context-overflow.test.ts` validates handling of absurdly large inputs
6. All 20 test cases pass with fully mocked dependencies (no real API calls)
7. `npm test` completes in under 60 seconds

**Status:** Not Started

---

## Dependency Graph

```
Phase 1: Build & Config Recovery
    └──► Phase 2: UI & Routing Restoration
              └──► Phase 3: AI Agent & Logic Hardening
                        └──► Phase 4: AI Security Test Suite
```

All phases are strictly sequential — each depends on the previous.
