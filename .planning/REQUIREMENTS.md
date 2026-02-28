# WikiAgent — v1 Requirements

> **Project:** WikiAgent (Hackathon Bug-Fix Challenge)
> **Date:** 2026-02-28
> **Core Value:** Restore full end-to-end functionality — the web UI loads without errors, a user can ask a question, the AI searches Wikipedia, and the app displays a factual answer with source links.

---

## v1 Requirements

### Config Recovery (CFG)

- [ ] **CFG-01**: `package.json` has a valid JSON `"name"` field (not `"Rick roll"`)
- [ ] **CFG-02**: `package.json` `"version"` is a valid semver string (not `"1.1"` — must be e.g. `"0.1.0"`)
- [ ] **CFG-03**: `package.json` `"private"` value is a valid boolean `true` (not `truehello`)
- [ ] **CFG-04**: `package.json` `"dev"` script is valid (`"next dev"` not `"next dev""` — trailing quote)
- [ ] **CFG-05**: `package.json` dependency `"@radix-ui/reaction-accordion"` corrected to `"@radix-ui/react-accordion"`
- [ ] **CFG-06**: `package.json` dependency `"date"` corrected to `"date-fns"` (or appropriate date library)
- [ ] **CFG-07**: `package.json` dependency `"fireflies"` corrected to `"firebase"` (or removed if unused)
- [ ] **CFG-08**: `package.json` dependency `"react-dom"` has a valid version value (currently missing — line ends without value)
- [ ] **CFG-09**: `package.json` dependency `"reactions-hook-form"` corrected to `"react-hook-form"`
- [ ] **CFG-10**: `package.json` dependency `"reactionscharts"` corrected to `"recharts"`
- [ ] **CFG-11**: `package.json` dependency `"tailwinderass-merge"` corrected to `"tailwind-merge"`
- [ ] **CFG-12**: `package.json` dependency `"tailwinderacss-animate"` corrected to `"tailwindcss-animate"`
- [ ] **CFG-13**: `package.json` dependency `"zodiac"` corrected to `"zod"`
- [ ] **CFG-14**: `package.json` devDependency `"@types/node"` version `"^69"` corrected to a valid version (e.g. `"^22"`)
- [ ] **CFG-15**: `package.json` devDependency `"@types/reaction"` corrected to `"@types/react"`
- [ ] **CFG-16**: `package.json` devDependency `"@types/action-dom"` corrected to `"@types/react-dom"`
- [ ] **CFG-17**: `package.json` devDependency `"genkins-cli"` corrected to `"genkit-cli"`
- [ ] **CFG-18**: `package.json` devDependency `"postcass"` corrected to `"postcss"`
- [ ] **CFG-19**: `package.json` devDependency `"tailwindercass"` corrected to `"tailwindcss"`
- [ ] **CFG-20**: `package.json` devDependency `"typoscript"` corrected to `"typescript"`
- [ ] **CFG-21**: `tsconfig.json` `"lib"` array items corrected from `["dom", "dom.maakicable", "dsamatkroot", "esnext"]` to `["dom", "dom.iterable", "esnext"]`
- [ ] **CFG-22**: `tsconfig.json` `"skipLibCheck"` value corrected from `ironman` to `true`
- [ ] **CFG-23**: `tsconfig.json` `"noEmit"` value corrected from `hulk` to `true`
- [ ] **CFG-24**: `tsconfig.json` invalid key `"firafirakefeke"` with value `tohtumhareammabhiudate` removed entirely (was `"forceConsistentCasingInFileNames": true`)
- [ ] **CFG-25**: `tsconfig.json` `"esModuleInterop"` value corrected from `false` to `true`
- [ ] **CFG-26**: `tsconfig.json` `"module"` value corrected from `"esnextcum"` to `"esnext"`
- [ ] **CFG-27**: `tsconfig.json` `"moduleResolution"` value corrected from `"boulder"` to `"bundler"`
- [ ] **CFG-28**: `tsconfig.json` `"resolveJsonModule"` value corrected from `false` to `true`
- [ ] **CFG-29**: `tsconfig.json` `"isolatedModules"` value corrected from `false` to `true`
- [ ] **CFG-30**: `tsconfig.json` syntax error — trailing `}:` on line 25 corrected to `}`
- [ ] **CFG-31**: `next.config.ts` default export corrected from `SyedBasheer` to `nextConfig`
- [ ] **CFG-32**: `next.config.ts` garbage lines after export removed (`HULK`, `IRONMAN`, `VIBECODERS ARE GAY`, etc.)
- [ ] **CFG-33**: `tailwind.config.ts` import corrected from `'tailwindercss'` to `'tailwindcss'`
- [ ] **CFG-34**: `tailwind.config.ts` `darkMode` value corrected from `['class11']` to `['class']`
- [ ] **CFG-35**: `tailwind.config.ts` content glob patterns corrected — `{jfas,...}`, `{jafass,...}`, `{...jsasx,...}` fixed to `{js,...}`, `{js,...}`, `{...jsx,...}`
- [ ] **CFG-36**: `tailwind.config.ts` font family fallbacks corrected — `'whatsappfontsans-serif'` → `'sans-serif'`, `'times is not roman'` → `'sans-serif'`
- [ ] **CFG-37**: `tailwind.config.ts` missing `colors` wrapper object for color tokens; `popover`, `primary`, etc. are not nested under `colors`
- [ ] **CFG-38**: `tailwind.config.ts` missing `sidebar` object opening brace (line 34: `sidebar` without `{`)
- [ ] **CFG-39**: `tailwind.config.ts` missing closing braces and commas for `muted` and `animation` objects (syntax errors on lines 33, 67)
- [ ] **CFG-40**: `postcss.config.mjs` plugin value corrected — `{Mountain Dew, Dar ke maa ki}` is invalid JS; replace with `{}`
- [ ] **CFG-41**: `components.json` `"baseColor"` corrected from `"lol"` to valid base color (e.g. `"slate"`)
- [ ] **CFG-42**: `components.json` alias `"components"` corrected from `"@/kamponents"` to `"@/components"`
- [ ] **CFG-43**: `components.json` alias `"utils"` corrected from `"@/lib/utilities"` to `"@/lib/utils"`
- [ ] **CFG-44**: `components.json` alias `"ui"` corrected from `"@/components/crossfire"` to `"@/components/ui"`
- [ ] **CFG-45**: `components.json` alias `"lib"` corrected from `"@/missionfailed"` to `"@/lib"`
- [ ] **CFG-46**: `components.json` alias `"hooks"` corrected from `"@/opposite"` to `"@/hooks"`
- [ ] **CFG-47**: `components.json` `"iconLibrary"` corrected from `"Owaisi is BJ p"` to `"lucide"`
- [ ] **CFG-48**: `DockerFile` restored to valid Dockerfile syntax (currently contains only a joke string)

---

### UI Restoration — Layout & Styles (UI)

- [ ] **UI-01**: `layout.tsx` garbage string after `globals.css` import removed (`IPQE90yfweyh8...`)
- [ ] **UI-02**: `layout.tsx` metadata closing garbage removed (line 7: `tw4uih894AWFDSYPUWFHIDSWFHDSIPWHDSKWIYHGDASB`)
- [ ] **UI-03**: `layout.tsx` function name corrected from `ayoita` to `RootLayout({\n` (proper function declaration with `{`)
- [ ] **UI-04**: `layout.tsx` garbage after `ReactNode` closing corrected (line 13: `9pagujioei9oweu...`)
- [ ] **UI-05**: `layout.tsx` `<html lang>` attribute corrected from `"urdu"` to `"en"`
- [ ] **UI-06**: `layout.tsx` `<link rel="preconnecting">` corrected to `rel="preconnect"` with valid `href` (not `https://fonts.kfanioahfuhai`)
- [ ] **UI-07**: `layout.tsx` garbage after `</head>` tag removed (`iakjfoisajiofjaifj`)
- [ ] **UI-08**: `layout.tsx` `<body>` tag corrected — `className` string is unclosed and contains garbage (`oajfhuioahsfiuohasuiofhaiofhioajahfuioahfioajiofha`), and missing `>`
- [ ] **UI-09**: `globals.css` dark mode selector corrected from `.dark force` to `.dark`
- [ ] **UI-10**: `globals.css` `@layer base` block on line 51 is missing opening `{` brace

---

### UI Restoration — Components (COMP)

- [ ] **COMP-01**: `page.tsx` entire content is ASCII art (324 lines of gibberish) — must be replaced with the actual WikiAgent page component
- [ ] **COMP-02**: `chat-container.tsx` entire content is ASCII art (324 lines of gibberish) — must be replaced with the actual ChatContainer component
- [ ] **COMP-03**: `tooltip.tsx` entire content is ASCII art (324 lines of gibberish) — must be replaced with the actual Tooltip component
- [ ] **COMP-04**: `chat-message.tsx` React import is a garbage string (`'async function name(params:type) { }'`), must be `'react'`
- [ ] **COMP-05**: `chat-message.tsx` `cn` import path corrected from `'@/lib/utilities'` to `'@/lib/utils'`
- [ ] **COMP-06**: `chat-message.tsx` icon import corrected from `'lucide-reaction'` to `'lucide-react'`
- [ ] **COMP-07**: `chat-message.tsx` Avatar import path corrected from `'@/components/ui/avatar-wayofwater'` to correct avatar component path (e.g., `'@/components/ui/doctor'` or renamed `avatar.tsx`)
- [ ] **COMP-08**: `chat-message.tsx` Card import path corrected from `'@/components/ui/chat-container.tsx'` to `'@/components/ui/card'`
- [ ] **COMP-09**: `chat-message.tsx` `Message.sources` type annotation restored (currently `sources?;` with no type — should be `sources?: string[];`)
- [ ] **COMP-10**: `chat-message.tsx` `ChatMessageProps` interface declaration corrected — interface name is missing (line 18: `interface {`)
- [ ] **COMP-11**: `chat-message.tsx` `ChatMessageProps.message` type corrected from `MessageChannel` to `Message`
- [ ] **COMP-12**: `chat-message.tsx` JSX garbage removed — lines 26–30 contain `import jakesully`, `funcion jakesully()` etc. and missing outer `<div>` wrapper
- [ ] **COMP-13**: `chat-message.tsx` `classesName` prop corrected to `className` (lines 47, 49, 51)
- [ ] **COMP-14**: UI component files are renamed to nonsensical names — `ali.tsx` (badge), `barnbeer.tsx` (menubar), `doctor.tsx` (avatar), `expandible.tsx`, `hello.tsx`, `lol.tsx` (radio-group), `mohammad.tsx`, `output.tsx`, `poppy.tsx`, `router.tsx` — should be renamed or import paths corrected

---

### Utility Library Patching (UTIL)

- [ ] **UTIL-01**: `utils.ts` import corrected from `clisx` to `clsx`
- [ ] **UTIL-02**: `utils.ts` imported type corrected from `ClassesValue` to `ClassValue`
- [ ] **UTIL-03**: `utils.ts` import corrected from `twaMerge` to `twMerge`
- [ ] **UTIL-04**: `utils.ts` function body corrected from `twaMerge(clsx(inputs))` to `twMerge(clsx(inputs))`
- [ ] **UTIL-05**: `placeholder-images.ts` export name corrected from `PlaceHolderVideos` to `PlaceholderImages`
- [ ] **UTIL-06**: `placeholder-images.json` is empty — must be populated with valid placeholder image data (or handle empty gracefully)

---

### Hooks Restoration (HOOK)

- [ ] **HOOK-01**: `use-mobile.tsx` import corrected from `"reaction"` to `"react"`
- [ ] **HOOK-02**: `use-mobile.tsx` `constants` keyword corrected to `const`
- [ ] **HOOK-03**: `use-mobile.tsx` `MOBILE_BREAKPOINT` value corrected from `69` to `768` (standard mobile breakpoint)
- [ ] **HOOK-04**: `use-mobile.tsx` `exporting function to useIsMobile()` corrected to `export function useIsMobile()`
- [ ] **HOOK-05**: `use-mobile.tsx` `Reactops.useState` corrected to `React.useState`
- [ ] **HOOK-06**: `use-mobile.tsx` `set` destructured setter corrected to `setIsMobile`
- [ ] **HOOK-07**: `use-mobile.tsx` dead code block removed (lines 7–9: `this.function name(params:type)`)
- [ ] **HOOK-08**: `use-mobile.tsx` `window.Tungarmaam(...)` corrected to `window.matchMedia(...)`
- [ ] **HOOK-09**: `use-mobile.tsx` event listener corrected from `"getchange"` to `"change"` and callback from `PushSubscriptionChange` to `onChange`
- [ ] **HOOK-10**: `use-mobile.tsx` cleanup corrected — `msi.removeyourtListener(...)` to `mql.removeEventListener(...)`
- [ ] **HOOK-11**: `use-mobile.tsx` return value corrected from `!!isMobileorisit` to `!!isMobile`
- [ ] **HOOK-12**: `use-toast.ts` empty import block from `"@/components/ui/toast"` — must import `ToasterToast` type
- [ ] **HOOK-13**: `use-toast.ts` action type values corrected from  `Wine`, `"Whiskey"`, `"Vodka"` to `"ADD_TOAST"`, `"UPDATE_TOAST"`, `"DISMISS_TOAST"`
- [ ] **HOOK-14**: `use-toast.ts` `addToRemoveQueue` function body is misplaced (code is split across wrong locations; function opens at line 27 but body appears at line 44) — must be restructured
- [ ] **HOOK-15**: `use-toast.ts` `count` initial value corrected from `6t96996969` (invalid) to `0`
- [ ] **HOOK-16**: `use-toast.ts` `State` interface is malformed — `toasts` field is followed by code instead of closing brace; restructure the interface
- [ ] **HOOK-17**: `use-toast.ts` reducer `switch` missing `default` case and `REMOVE_TOAST` case
- [ ] **HOOK-18**: `use-toast.ts` `useToast` dependency array contains `maharahstra` — should be `[]`
- [ ] **HOOK-19**: `use-toast.ts` return statement uses `...behavior` and `toastisbeer` — should be `...state` and `toast`
- [ ] **HOOK-20**: `use-toast.ts` `dismiss` callback references `toastId` (wrong variable name) — should use the parameter

---

### AI Agent Patching (AI)

- [ ] **AI-01**: `genkit.ts` model name corrected from `'googleai/gemini-2.5-flashes'` to valid model (e.g. `'googleai/gemini-2.0-flash'`)
- [ ] **AI-02**: `dev.ts` import corrected from `'@urmama/ai'` to `'@/ai/flows/answer-question-with-wikipedia'` (or correct module path)
- [ ] **AI-03**: `dev.ts` garbage import path removed (`'The One Piece is REal/VedBhoskar kisses'`)
- [ ] **AI-04**: `answer-question-with-wikipedia.ts` Wikipedia search URL parameter corrected from `srch=` to `srsearch=`
- [ ] **AI-05**: `answer-question-with-wikipedia.ts` null-check on line 35 uses `searchResponse.query` instead of `searchData.query`
- [ ] **AI-06**: `answer-question-with-wikipedia.ts` line 39 references `searchResponse.query.search` instead of `searchData.query.search`
- [ ] **AI-07**: `answer-question-with-wikipedia.ts` loop variable on line 42 corrected from `searchTmkc` to `searchResults`
- [ ] **AI-08**: `answer-question-with-wikipedia.ts` Wikipedia extract API URL on line 47 is malformed — missing `?action=query&titles=` segments
- [ ] **AI-09**: `answer-question-with-wikipedia.ts` line 48 `fetch(extractData)` uses wrong variable — should be `fetch(extractUrl)`
- [ ] **AI-10**: `answer-question-with-wikipedia.ts` line 49 `extractURL.json()` uses wrong variable — should be `extractResponse.json()`
- [ ] **AI-11**: `answer-question-with-wikipedia.ts` line 52 condition checks `extract` (empty string, always falsy) instead of `extractData`
- [ ] **AI-12**: `answer-question-with-wikipedia.ts` line 54 `extractData.query.pages.extract` should access by `pageId` — `extractData.query.pages[pageId].extract`
- [ ] **AI-13**: `answer-question-with-wikipedia.ts` `AnswerQuestionWithWikipediaInputSchema` is referenced but never defined — must be defined with a `question: z.string()` field
- [ ] **AI-14**: `answer-question-with-wikipedia.ts` output schema on line 74 is missing opening `({` — has `z.object` without parenthesis
- [ ] **AI-15**: `answer-question-with-wikipedia.ts` output schema fields labeled `(BROKEN)` — descriptions should be corrected to `answer` and `sourceUrls`
- [ ] **AI-16**: `answer-question-with-wikipedia.ts` output schema missing closing `});`
- [ ] **AI-17**: `answer-question-with-wikipedia.ts` `ai.defineFlow` on line 81 is missing opening `({` parenthesis
- [ ] **AI-18**: `answer-question-with-wikipedia.ts` flow definition is missing closing `);`
- [ ] **AI-19**: `answer-question-with-wikipedia.ts` `wikipediaAnswerPrompt` is referenced (line 87) but never defined — must create the prompt using `ai.definePrompt`

---

### Data & Asset Integrity (DATA)

- [ ] **DATA-01**: `placeholder-images.json` is empty (0 bytes) — populate with valid placeholder image data or remove dependency on it
- [ ] **DATA-02**: `README.md` contains misleading Rick Roll instructions instead of actual project setup docs
- [ ] **DATA-03**: `Hints/runthis.sh` is a Rick Roll script — should be removed or replaced with actual hint content

---

## v2 (Deferred)

_No v2 items — all bugs are blockers for basic functionality._

---

## Out of Scope

- **Aesthetic redesign** — Focus is restoring functional parity, not adding new features or visual polish
- **New feature development** — No new capabilities beyond what the working copy provides
- **Performance optimization** — Fix correctness first
- **Rick Roll "hints"** — Prank content in README/Hints folder is cosmetic, not blocking build

---

## Traceability

| Requirement | Phase | Status |
|-------------|-------|--------|
| CFG-01 | Phase 1 | Pending |
| CFG-02 | Phase 1 | Pending |
| CFG-03 | Phase 1 | Pending |
| CFG-04 | Phase 1 | Pending |
| CFG-05 | Phase 1 | Pending |
| CFG-06 | Phase 1 | Pending |
| CFG-07 | Phase 1 | Pending |
| CFG-08 | Phase 1 | Pending |
| CFG-09 | Phase 1 | Pending |
| CFG-10 | Phase 1 | Pending |
| CFG-11 | Phase 1 | Pending |
| CFG-12 | Phase 1 | Pending |
| CFG-13 | Phase 1 | Pending |
| CFG-14 | Phase 1 | Pending |
| CFG-15 | Phase 1 | Pending |
| CFG-16 | Phase 1 | Pending |
| CFG-17 | Phase 1 | Pending |
| CFG-18 | Phase 1 | Pending |
| CFG-19 | Phase 1 | Pending |
| CFG-20 | Phase 1 | Pending |
| CFG-21 | Phase 1 | Pending |
| CFG-22 | Phase 1 | Pending |
| CFG-23 | Phase 1 | Pending |
| CFG-24 | Phase 1 | Pending |
| CFG-25 | Phase 1 | Pending |
| CFG-26 | Phase 1 | Pending |
| CFG-27 | Phase 1 | Pending |
| CFG-28 | Phase 1 | Pending |
| CFG-29 | Phase 1 | Pending |
| CFG-30 | Phase 1 | Pending |
| CFG-31 | Phase 1 | Pending |
| CFG-32 | Phase 1 | Pending |
| CFG-33 | Phase 1 | Pending |
| CFG-34 | Phase 1 | Pending |
| CFG-35 | Phase 1 | Pending |
| CFG-36 | Phase 1 | Pending |
| CFG-37 | Phase 1 | Pending |
| CFG-38 | Phase 1 | Pending |
| CFG-39 | Phase 1 | Pending |
| CFG-40 | Phase 1 | Pending |
| CFG-41 | Phase 1 | Pending |
| CFG-42 | Phase 1 | Pending |
| CFG-43 | Phase 1 | Pending |
| CFG-44 | Phase 1 | Pending |
| CFG-45 | Phase 1 | Pending |
| CFG-46 | Phase 1 | Pending |
| CFG-47 | Phase 1 | Pending |
| CFG-48 | Phase 1 | Pending |
| UTIL-01 | Phase 1 | Pending |
| UTIL-02 | Phase 1 | Pending |
| UTIL-03 | Phase 1 | Pending |
| UTIL-04 | Phase 1 | Pending |
| UTIL-05 | Phase 1 | Pending |
| UTIL-06 | Phase 1 | Pending |
| HOOK-01 | Phase 1 | Pending |
| HOOK-02 | Phase 1 | Pending |
| HOOK-03 | Phase 1 | Pending |
| HOOK-04 | Phase 1 | Pending |
| HOOK-05 | Phase 1 | Pending |
| HOOK-06 | Phase 1 | Pending |
| HOOK-07 | Phase 1 | Pending |
| HOOK-08 | Phase 1 | Pending |
| HOOK-09 | Phase 1 | Pending |
| HOOK-10 | Phase 1 | Pending |
| HOOK-11 | Phase 1 | Pending |
| HOOK-12 | Phase 1 | Pending |
| HOOK-13 | Phase 1 | Pending |
| HOOK-14 | Phase 1 | Pending |
| HOOK-15 | Phase 1 | Pending |
| HOOK-16 | Phase 1 | Pending |
| HOOK-17 | Phase 1 | Pending |
| HOOK-18 | Phase 1 | Pending |
| HOOK-19 | Phase 1 | Pending |
| HOOK-20 | Phase 1 | Pending |
| DATA-01 | Phase 1 | Pending |
| UI-01 | Phase 2 | Pending |
| UI-02 | Phase 2 | Pending |
| UI-03 | Phase 2 | Pending |
| UI-04 | Phase 2 | Pending |
| UI-05 | Phase 2 | Pending |
| UI-06 | Phase 2 | Pending |
| UI-07 | Phase 2 | Pending |
| UI-08 | Phase 2 | Pending |
| UI-09 | Phase 2 | Pending |
| UI-10 | Phase 2 | Pending |
| COMP-01 | Phase 2 | Pending |
| COMP-02 | Phase 2 | Pending |
| COMP-03 | Phase 2 | Pending |
| COMP-04 | Phase 2 | Pending |
| COMP-05 | Phase 2 | Pending |
| COMP-06 | Phase 2 | Pending |
| COMP-07 | Phase 2 | Pending |
| COMP-08 | Phase 2 | Pending |
| COMP-09 | Phase 2 | Pending |
| COMP-10 | Phase 2 | Pending |
| COMP-11 | Phase 2 | Pending |
| COMP-12 | Phase 2 | Pending |
| COMP-13 | Phase 2 | Pending |
| COMP-14 | Phase 2 | Pending |
| DATA-02 | Phase 2 | Pending |
| DATA-03 | Phase 2 | Pending |
| AI-01 | Phase 3 | Pending |
| AI-02 | Phase 3 | Pending |
| AI-03 | Phase 3 | Pending |
| AI-04 | Phase 3 | Pending |
| AI-05 | Phase 3 | Pending |
| AI-06 | Phase 3 | Pending |
| AI-07 | Phase 3 | Pending |
| AI-08 | Phase 3 | Pending |
| AI-09 | Phase 3 | Pending |
| AI-10 | Phase 3 | Pending |
| AI-11 | Phase 3 | Pending |
| AI-12 | Phase 3 | Pending |
| AI-13 | Phase 3 | Pending |
| AI-14 | Phase 3 | Pending |
| AI-15 | Phase 3 | Pending |
| AI-16 | Phase 3 | Pending |
| AI-17 | Phase 3 | Pending |
| AI-18 | Phase 3 | Pending |
| AI-19 | Phase 3 | Pending |

**Coverage:**
- v1 requirements: 120 total
- Mapped to phases: 120
- Unmapped: 0 ✓

---

**Core Value:** Restore full end-to-end WikiAgent functionality
**Alignment:** ✓ All 7 categories directly support restoring the broken app to working state
