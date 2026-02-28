# Phase 03: AI Agent & Logic Hardening — Plan Summary

## Overview

| Plan | Name | Requirements | Tasks | Depends On |
|------|------|-------------|-------|------------|
| 03-01 | Genkit Config & Dev Server | AI-01, AI-02, AI-03 | 2 | — |
| 03-02 | Wikipedia Search Tool Fix | AI-04 – AI-12 | 4 | 03-01 |
| 03-03 | Schema, Flow & Prompt Restoration | AI-13 – AI-19 | 5 | 03-02 |

## Execution Order

```
03-01: Genkit Config & Dev Server (3 reqs)
  └──► 03-02: Wikipedia Search Tool Fix (9 reqs)
         └──► 03-03: Schema, Flow & Prompt Restoration (7 reqs)
```

All plans are sequential — each builds on the previous.

## Requirements Coverage

- **Total Phase 3 requirements:** 19
- **Covered by plans:** 19 (AI-01 through AI-19)
- **Uncovered:** 0 ✓

## Plan Details

### 03-01: Genkit Config & Dev Server
**File scope:** `src/ai/genkit.ts`, `src/ai/dev.ts`
- Task 1: Fix hallucinated model name (`gemini-2.5-flashes` → `gemini-2.0-flash`)
- Task 2: Fix garbage imports in dev.ts

### 03-02: Wikipedia Search Tool Fix
**File scope:** `src/ai/flows/answer-question-with-wikipedia.ts` (lines 27–68)
- Task 1: Fix search URL parameter (`srch=` → `srsearch=`)
- Task 2: Fix `searchResponse`/`searchData` variable swaps (2 locations)
- Task 3: Fix loop variable (`searchTmkc` → `searchResults`)
- Task 4: Fix entire extract-fetch chain (5 bugs: URL, fetch arg, .json() target, condition, bracket access)

### 03-03: Schema, Flow & Prompt Restoration
**File scope:** `src/ai/flows/answer-question-with-wikipedia.ts` (lines 72–93 + new code)
- Task 1: Define missing `AnswerQuestionWithWikipediaInputSchema`
- Task 2: Fix broken output schema syntax and descriptions
- Task 3: Fix `ai.defineFlow` missing parentheses
- Task 4: Create `wikipediaAnswerPrompt` using `ai.definePrompt`
- Task 5: End-to-end verification checkpoint
