# Context Audit

## Snapshot 1

**Model:** claude-opus-5-5
**Usage:** 28.7k / 1.0M tokens (3%)

### Context Usage by Category

| Category                | Tokens | Usage |
| ----------------------- | -----: | ----: |
| System prompt           |   3.7k |  0.4% |
| System tools            |  14.6k |  1.5% |
| MCP tools               |    647 | <0.1% |
| MCP server instructions |   1.6k |  0.2% |
| Custom agents           |    104 | <0.1% |
| Memory files            |   2.1k |  0.2% |
| Skills                  |   6.0k |  0.6% |
| Messages                |     10 | <0.1% |
| Autocompact buffer      |  33.0k |  3.3% |
| Free space              | 938.3k | 93.8% |

### Memory Files (`/memory`)

| File                                                                          | Tokens |
| ----------------------------------------------------------------------------- | -----: |
| `~/Documents/Apps/probell-astro/CLAUDE.md`                                    |   1.2k |
| `~/.claude/rules/context7.md`                                                 |    428 |
| `~/.claude/projects/-Users-stu-Documents-Apps-probell-astro/memory/MEMORY.md` |    377 |

### Custom Agents (`/agents`)

| Agent             | Tokens |
| ----------------- | -----: |
| tracker-historian |    104 |

---

## Snapshot 2

**Model:** claude-opus-5-5
**Usage:** 136.5k / 1.0M tokens (14%)

### Context Usage by Category

| Category                | Tokens | Usage |
| ----------------------- | -----: | ----: |
| System prompt           |   3.7k |  0.4% |
| System tools            |  15.3k |  1.5% |
| MCP server instructions |   1.6k |  0.2% |
| Custom agents           |    104 | <0.1% |
| Memory files            |   2.1k |  0.2% |
| Skills                  |   6.0k |  0.6% |
| Messages                | 107.8k | 10.8% |
| Autocompact buffer      |  33.0k |  3.3% |
| Free space              | 830.5k | 83.1% |

### Memory Files (`/memory`)

| File                                                                          | Tokens |
| ----------------------------------------------------------------------------- | -----: |
| `~/Documents/Apps/probell-astro/CLAUDE.md`                                    |   1.2k |
| `~/.claude/rules/context7.md`                                                 |    428 |
| `~/.claude/projects/-Users-stu-Documents-Apps-probell-astro/memory/MEMORY.md` |    377 |

### Custom Agents (`/agents`)

| Agent             | Tokens |
| ----------------- | -----: |
| tracker-historian |    104 |

---

## File Line Counts (`wc -l`)

Measured 17 Oct 2026.

### Loaded at session start (Memory files)

| File                                                                          |   Lines |
| ----------------------------------------------------------------------------- | ------: |
| `CLAUDE.md`                                                                   |      81 |
| `~/.claude/rules/context7.md`                                                 |      10 |
| `~/.claude/projects/-Users-stu-Documents-Apps-probell-astro/memory/MEMORY.md` |       9 |
| `~/.claude/CLAUDE.md`                                                         |     n/a |
| **Subtotal**                                                                  | **100** |

`~/.claude/CLAUDE.md` does not exist.

### Loaded by `/kickoff` (Messages)

| File                              |     Lines |
| --------------------------------- | --------: |
| `.claude/skills/kickoff/SKILL.md` |        61 |
| `src/docs/brand.md`               |       186 |
| `src/docs/design.md`              |       407 |
| `src/docs/coding-standards.md`    |       383 |
| `src/docs/ai-interaction.md`      |       310 |
| `src/docs/page-structure.md`      |       220 |
| `src/docs/progress-tracker.md`    | **1,825** |
| **Subtotal**                      | **3,392** |

Plus one `src/features/*.md` spec when `/kickoff` is given a feature name.

### @ imports

`CLAUDE.md` uses no `@` imports. The core docs are referenced by path
only and read explicitly by `/kickoff`, which is why they count under
Messages rather than Memory files.

### Observations

- `progress-tracker.md` is ~54% of the lines `/kickoff` loads, and
  likely accounts for most of the Messages jump (10 → 107.8k tokens)
  between Snapshot 1 and Snapshot 2.

---

## Claim Audit — Keep / Fix / Move / Cut / Archive

Reviewed 17 Oct 2026, covering `CLAUDE.md`, `.claude/skills/kickoff/SKILL.md`
and every file in `src/docs/` except this one. Claims were spot-checked
against the code (`global.css`, `astro.config.mjs`, `BaseLayout.astro`,
`index.astro`, `src/components/`, `src/data/`, `src/assets/`). Claims that
say almost the same thing are grouped under a line range. Nothing has
been edited yet. This is the sorting pass only.

### Buckets

| Bucket      | Meaning                                                                    | Where it ends up                                         |
| ----------- | -------------------------------------------------------------------------- | -------------------------------------------------------- |
| **Keep**    | Needed every session, before any task                                      | `CLAUDE.md` (auto-loaded)                                |
| **Fix**     | Needed, but wrong against the code. Correct it, then re-bucket it          | wherever it lands after the fix                          |
| **Move**    | True, but only relevant to some tasks                                      | a skill, a path-scoped rule or an on-demand doc          |
| **Cut**     | Can be derived from the code, duplicated elsewhere, or obsolete            | deleted                                                  |
| **Archive** | Historical record, not an instruction                                      | archive file, queried via the `tracker-historian` agent  |

**When needed** (Move rows): the task or path that should trigger loading it.

### Keep — needed every session

| Claim                                                                                         | Ref                                                              | Note                                                     |
| --------------------------------------------------------------------------------------------- | ---------------------------------------------------------------- | -------------------------------------------------------- |
| B2B brand site for gyms, distributors, retailers and sales partners. Single goal: make contact. Not ecommerce | `CLAUDE.md:6-8` (dupe `brand.md:13-20`)                          | Core framing                                             |
| American-directed, strength/blue-collar brand; US market only                                 | `brand.md:9-11`, `market-strategy.md:10`                         | One line is enough                                       |
| Stack: Astro static, plain CSS, no React/Vue/Svelte/Tailwind, no backend                      | `CLAUDE.md:4,44-45`, `coding-standards.md:18-19,35`              | Verified (`output: "static"`, no framework deps)         |
| Never `<img>`, always `<Image />` with an imported `src/assets/` source                       | `CLAUDE.md:45-46`, `coding-standards.md:229-267`                 | Verified: no `<img>` in `src/`                           |
| No raw hex/px/rem: use tokens; new values go into the global CSS file first                   | `CLAUDE.md:46-47`, `ai-interaction.md:201-214`                   | Keep the rule, cut the token tables (see Cut)            |
| No animations beyond hover transitions                                                        | `CLAUDE.md:47-49`, `design.md:349-354`                           | Verified (`--transition-*` tokens)                       |
| No features outside spec; no auto-commits or git operations; never delete files without confirmation | `CLAUDE.md:49-50`, `ai-interaction.md:79-84,252-253,266`         |                                                          |
| Deviation convention (summary)                                                                | `CLAUDE.md:56-60`                                                | Full detail can move to a skill                          |
| Minimal changes, no unrelated refactors, preserve patterns                                    | `ai-interaction.md:191-194`                                      |                                                          |
| Stop after 2 failed attempts; don't install packages to fix problems                          | `ai-interaction.md:244-246`                                      |                                                          |
| Commits: ask first, conventional prefixes, one fix per commit, no "Generated with Claude"     | `ai-interaction.md:266-269`                                      | User preference                                          |
| `npm run dev` / `npm run build`                                                               | `coding-standards.md:344-352`                                    | Verified (`package-lock.json`, npm)                      |
| "This file is a pointer, don't re-add rules" + "go to source for anything else"               | `CLAUDE.md:12-23,80-81`                                          | Maintainer note                                          |
| Document map: which doc to read when                                                          | `ai-interaction.md:299-310`                                      | Becomes the "more info" index in `CLAUDE.md` (after Fix) |
| Pending DNS/MX check before pointing DNS to Vercel                                            | `progress-tracker.md:6-11`                                       | Live risk                                                |
| Branch work queue: doc drift to reconcile                                                     | `progress-tracker.md:119-133`                                    | Keep only for `course/module-3`                          |

### Fix — needed, but wrong

| Claim                                                                               | Ref                                                                                                 | Reality                                                                                                                                                              |
| ----------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Deploy is a `/dist/` FTP upload to one.com                                          | `CLAUDE.md:5`, `coding-standards.md:15,354-359`, `ai-interaction.md:40`                             | Hosted on Vercel                                                                                                                                                     |
| CSS file is `globals.css`                                                           | `coding-standards.md:12,14,101,168,223`, `ai-interaction.md:204,213`, `design.md:37,71,158,402`      | The file is `src/styles/global.css`                                                                                                                                  |
| Google Fonts are imported in `globals.css`                                          | `coding-standards.md:14`                                                                            | Loaded via `<link>` in `BaseLayout.astro:71-74`                                                                                                                       |
| Astro 4.x                                                                           | `coding-standards.md:11`                                                                            | `astro ^7.4.0`                                                                                                                                                        |
| Partner pages are empty scaffolds in `src/pages/partners/`, not built               | `CLAUDE.md:75-78`, `page-structure.md:131-140`                                                      | Built at `/sales`, `/retail`, `/distributor`; `partners/` deleted (Session 41)                                                                                       |
| "Known Current State (as of 19 Jul 2026)"                                           | `CLAUDE.md:64`                                                                                      | Stale date; the section's content is mostly obsolete (see Cut)                                                                                                        |
| Session-start read list = 6 core docs including the whole tracker                   | `CLAUDE.md:34-38`, `SKILL.md:22-24`, `ai-interaction.md:50-57`                                      | Structural fix: the main cause of the context bloat                                                                                                                  |
| `src/docs/` core list includes `market-strategy.md` "read every session"            | `ai-interaction.md:16-19`                                                                           | Contradicts its own read list (`:50-57`) and the doc map (`:309`)                                                                                                    |
| Playwright visual verification at 3 breakpoints is mandatory                        | `ai-interaction.md:85-86,151-175,295`, `SKILL.md:43-45`                                              | Opt-in only since Session 41                                                                                                                                         |
| Images must exist in `/public/images/`                                              | `ai-interaction.md:223,291`, `coding-standards.md:364-365`                                          | Photography lives in `src/assets/` (Session 55); only `og-image.jpg` and the Contact CSS background stay in `public/images/`                                          |
| Islands only for contact form, mobile nav, Instagram feed                           | `coding-standards.md:44-47`                                                                         | No `client:` directives at all; inline `<script>` in `Nav/index.astro` and the three partner pages; no contact form or Instagram                                     |
| `--color-white` is `#FFFFFF`                                                        | `design.md:45`, `brand.md:75`                                                                       | `#f9f6ee`; `--color-silver` exists but isn't documented                                                                                                              |
| "No gradients anywhere on the site"                                                 | `design.md:67`                                                                                      | `gradient(` used in Hero (both), Contact, AudienceCard, ProductHero. Either the rule or the code is wrong; developer call                                             |
| Font choice still an open decision                                                  | `design.md:103-105`, `page-structure.md:211-212`, `progress-tracker.md:52-55,1799`                   | `global.css` sets `--font-display: anton`, `--font-body: grotesk`. Confirm and close                                                                                 |
| Section boundaries are torn ink edges, diagonal cuts, product breakouts             | `brand.md:141-144`                                                                                  | None in code (no `clip-path`; `TornEdge.astro` exists but is unused). Rewrite the principle to match `SectionWrapper`                                               |
| Nav: `rgba(0,0,0,0.9)` bg, social icons, "CTA pill"                                 | `design.md:317,320-322`                                                                             | Transparent → `--color-white` solid; `SocialIcons` commented out (Session 57); buttons are square                                                                    |
| Homepage order: AudienceCards first inside the black wrapper, before Identity       | `page-structure.md:29-31,48`                                                                        | `index.astro:19-28`: Identity → ProductStrips → AudienceCards                                                                                                         |
| Contact uses `ContactForm.astro`                                                    | `page-structure.md:52,180`                                                                          | `ContactRouter.astro`                                                                                                                                                |
| Footer placement "confirm whether still the case"; "unclear wrapper"                | `page-structure.md:54,219-220`                                                                      | Footer rendered by `BaseLayout.astro:89`, outside `<main>`; the wrapper is an empty `<SectionWrapper bg="black" />`                                                  |
| `categories.ts` kept, unused                                                        | `page-structure.md:108-110,154`                                                                     | File is gone; `src/data/` = audience-cards, catalog, legal, navigation, stats (`legal.ts` not documented)                                                             |
| `site.ts` exports `CONTACT_SUBJECT`                                                 | `page-structure.md:156`                                                                             | Only `SITE_NAME`, `COPYRIGHT`                                                                                                                                         |
| Open decisions list                                                                 | `page-structure.md:209-220`                                                                         | Contact email, `WEB3FORMS_KEY`, Instagram URL resolved or moot (Session 41)                                                                                           |
| Example data files include `products.ts`; interfaces may live in `src/types/`        | `data-architecture.md:15,21`                                                                        | `catalog.ts`; no `src/types/` directory                                                                                                                               |
| `18px` body text raw-value exception                                                | `design.md:130-134`, `ai-interaction.md:207-210`                                                    | No `18px` in components or styles. The exception is obsolete, so cut it once confirmed                                                                               |
| Kickoff: "check whether the shared HubSpot utility exists"                          | `SKILL.md:54-57`                                                                                    | It exists: `src/lib/hubspot.ts`. Restate as "reuse `src/lib/hubspot.ts`"                                                                                             |
| Current Status / Next action                                                        | `progress-tracker.md:17-19`                                                                         | Needed, but it's one ~900-word paragraph of history. Rewrite as a short now/next                                                                                     |
| Deferred items                                                                      | `progress-tracker.md:1793-1802`                                                                     | Hero headline (resolved Session 24), Instagram and fonts are stale                                                                                                    |

### Move — true, but only sometimes relevant

| Claim                                                                         | Ref                                                                                 | When needed                                  | Suggested home                              |
| ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- | -------------------------------------------- | ------------------------------------------- |
| Brand principles, voice do/avoid, success criteria                            | `brand.md:24-62,181-186`                                                            | Writing copy                                 | On-demand doc / copy skill                  |
| Photography rules (grade, environment, athletes, product, never-use)          | `brand.md:87-126`                                                                   | Choosing or placing imagery                  | On-demand doc                               |
| Experience principles + anti-patterns                                         | `brand.md:130-153,167-177`                                                          | Designing a new section or page              | On-demand doc                               |
| Go-to-market phases, sales-partner criteria, Arnold Expo date                 | `market-strategy.md:35-61`                                                          | Market-facing copy, partner pages            | On-demand doc                               |
| Deviation logging detail + structural-vs-tactical distinction                 | `ai-interaction.md:88-114`                                                          | Task prefixed `Deviation:`                   | Kickoff / session-end skill                 |
| Build workflow steps 1–6, edit loop, section-complete checklist               | `ai-interaction.md:125-185,273-295`, `SKILL.md:38-46`                               | Building a section                           | Kickoff (or a build) skill                  |
| How to update the tracker (start, section end, session end)                   | `progress-tracker.md:1806-1825`                                                     | End of session                               | Session-end skill                           |
| Image placeholder rule (placeholder div, never a missing path)                | `ai-interaction.md:225-227`                                                         | Image work                                   | Path-scoped `src/components/**`             |
| Folder/`index.astro` pattern; `ui/` stays flat                                | `page-structure.md:166-168,187`, `ai-interaction.md:140-143`                        | Creating components                          | Path-scoped `src/components/**`             |
| Component file template, props/defaults, no template logic                    | `coding-standards.md:122-160`                                                       | Writing `.astro` files                       | Path-scoped `src/components/**`             |
| Naming conventions, TypeScript rules, accessibility, performance              | `coding-standards.md:109-114,271-315`                                               | Writing code                                 | Path-scoped `src/**`                        |
| Scoped-style do/don't                                                         | `coding-standards.md:175-221`                                                       | Writing CSS                                  | Path-scoped `**/*.astro`, `src/styles/**`   |
| Display/body text casing, letter-spacing, line-height, left-align default     | `design.md:138-142,185-188`                                                         | Writing CSS                                  | Path-scoped CSS rule                        |
| BrandStory white background is a locked exception                             | `design.md:26-29`, `page-structure.md:51`                                           | Editing BrandStory                           | Path-scoped `src/components/BrandStory/**`  |
| Identity centered layout is a deliberate exception                            | `page-structure.md:49`                                                              | Editing Identity                             | Path-scoped `src/components/Identity/**`    |
| Ghost number pattern: token color + `opacity: 0.08`, no text-stroke           | `design.md:82-88`                                                                   | ProductStrips / 404 / SupplementRow          | Path-scoped CSS rule                        |
| Photo overlay `rgba(0,0,0,0.5)` exception                                     | `design.md:76-81`                                                                   | Photo overlays                               | Path-scoped CSS rule                        |
| Square buttons; commented-out radius is intentional, don't re-add             | `design.md:250-254`                                                                 | Button / CSS work                            | Path-scoped `src/styles/**`                 |
| Two button styles only; one primary CTA per section                           | `design.md:248,295-296`                                                             | Building sections                            | Path-scoped components rule                 |
| Use `ui/FormField.astro` for form fields                                      | `design.md:333-334`                                                                 | Form work                                    | Path-scoped (verified: used by 3 partner pages) |
| Data in `src/data/` (uppercase named exports + interface), constants in `src/constants/`, aliases | `data-architecture.md:7-33`, `page-structure.md:146-160`              | Touching content or data                     | Path-scoped `src/data/**`                   |
| `catalog.ts` is the single product source (`PRODUCTS`)                        | `page-structure.md:98-101,152`                                                      | Product / supplements work                   | Path-scoped `src/data/**`                   |
| Supplements listing/detail current design                                     | `page-structure.md:81-97`                                                           | Supplements work                             | On-demand page doc                          |
| Legal pages: `LegalLayout` + `LegalSections` + `LEGAL_PAGES`                  | `page-structure.md:113-117`                                                         | Legal work                                   | On-demand page doc                          |
| 404 page design                                                               | `page-structure.md:120-127`                                                         | 404 work                                     | On-demand page doc                          |
| Partner specs live in `src/features/`; read them fresh                        | `page-structure.md:136-140`                                                         | Partner page work                            | Kickoff skill (feature arg)                 |
| SEO: `BaseLayout` props, meta/OG/Twitter/canonical/robots, sitemap, robots.txt, new-page checklist, title table | `seo.md:9-145`                                   | New page or head changes                     | Path-scoped `src/pages/**`, `src/layouts/**` (verified against `BaseLayout.astro:7-59`) |
| Kickoff invocation, thin-trigger principle, hard stop                         | `SKILL.md:8-36`                                                                     | `/kickoff`                                   | Already a skill                             |

### Cut — derivable from code, duplicate or obsolete

| Claim                                                                          | Ref                                                                     | Why                                                                                                                         |
| ------------------------------------------------------------------------------ | ----------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------- |
| Color hex table                                                                | `brand.md:72-77`, `design.md:39-49`                                     | Derivable from `global.css:26-35`; already drifted (white, silver)                                                          |
| Font stack table + `.font-*` classes                                           | `brand.md:78-81`, `design.md:96-114`                                    | Derivable; the `.font-*` classes are unused in components                                                                    |
| Typography scale                                                               | `design.md:121-128`                                                     | Drifted: `--text-body` is now `clamp()`; 6 tokens missing                                                                    |
| Spacing, breakpoint, container, grid tables                                    | `design.md:148-181,372-377`                                             | Derivable from `global.css`                                                                                                  |
| Button and tag CSS blocks                                                      | `design.md:256-311`                                                     | Derivable; already drifted (`.tag--coming-soon`, not `.tag-coming-soon`)                                                     |
| Form input styling                                                             | `design.md:328-332`                                                     | Derivable from `FormField.astro`                                                                                             |
| Image handling list                                                            | `design.md:340-343`, `ai-interaction.md:220-223`                        | Duplicates `coding-standards.md:261-267`                                                                                     |
| Section transitions §5 (Techniques A–E)                                        | `design.md:192-240`, `ai-interaction.md:233-238`, `page-structure.md:64-69`, `design.md:389-390` | Verified obsolete: no `clip-path`, `TornEdge.astro` unused                                                                    |
| `scale(1.03)` hover exception                                                  | `design.md:356-363`                                                     | Not in code; the exception was dropped with Trending                                                                         |
| File structure tree                                                            | `coding-standards.md:62-107`, `page-structure.md:170-185`               | Derivable (`ls src/components`); both stale (`Button.astro`, `Tag.astro` don't exist, `LegalSections.astro` missing)         |
| Homepage section map (code block + table)                                      | `page-structure.md:23-55`                                               | Derivable from `index.astro`; already wrong once                                                                             |
| Asset checklist                                                                | `page-structure.md:195-205`, `progress-tracker.md:39-48`                | Derivable; stale paths; favicon now exists                                                                                   |
| Contact form via Formspree/mailto                                              | `coding-standards.md:319-336`                                           | Obsolete since Session 41 (router + mailto)                                                                                  |
| One.com `.htaccess` 404 note                                                   | `page-structure.md:127-129`                                             | Moot on Vercel                                                                                                               |
| Don't commit `/dist/`                                                          | `coding-standards.md:381`                                               | Enforced by `.gitignore`                                                                                                     |
| Pre-deploy checklist                                                           | `coding-standards.md:361-369`                                           | One.com-era; Vercel builds from git                                                                                          |
| "What not to do" / "never does" lists                                          | `coding-standards.md:373-383`, `ai-interaction.md:250-260`              | Duplicate the Keep rules                                                                                                     |
| Session-start prompt block                                                     | `ai-interaction.md:46-71`                                               | Duplicates `SKILL.md`; keep one source                                                                                       |
| `src/features/` file list                                                      | `ai-interaction.md:21-23`                                               | Incomplete (23 files exist); derivable via `ls`                                                                              |
| Responsibilities table                                                         | `ai-interaction.md:34-42`                                               | Git/commit rules already in Keep; deploy row wrong                                                                           |
| Second document map                                                            | `design.md:396-407`                                                     | Duplicates `ai-interaction.md:299-310`                                                                                       |
| "Add this row to the design.md doc map"                                        | `market-strategy.md:68-74`                                              | Already done (`design.md:407`)                                                                                               |
| Homepage-redesign warning ("don't rely on 11-section memory")                  | `CLAUDE.md:66-73`, `page-structure.md:7-17,56-60`                       | Historical; fixed docs make it unnecessary                                                                                   |
| Pre-build spec-documents checklist                                             | `progress-tracker.md:29-37`                                             | Build phase is over                                                                                                          |
| Note about earlier `docs/` paths                                               | `ai-interaction.md:26-28`                                               | Meta history                                                                                                                 |
| Page-structure verification warnings                                           | `SKILL.md:58-61`                                                        | Only exists because `page-structure.md` is stale; cut once it's fixed                                                        |
| Known Issues: none                                                             | `progress-tracker.md:1785-1787`                                         | No information                                                                                                               |

### Archive — historical records, not instructions

| Content                                                                                       | Ref                                                                                       | Note                                                            |
| --------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- | --------------------------------------------------------------- |
| Session log, Sessions 1–58                                                                    | `progress-tracker.md:94-1784`                                                             | ~1,690 lines; the biggest win. `tracker-historian` already queries it |
| Build Sections table (per-section history incl. removed sections)                             | `progress-tracker.md:65-90`                                                               | Current per-page state belongs in page docs                     |
| Pre-build decisions/assets history                                                            | `progress-tracker.md:39-61`                                                               |                                                                 |
| Sessions 31–33 were off-script, logged retroactively                                          | `progress-tracker.md:21`, `ai-interaction.md:116-121`                                     |                                                                 |
| Removed components/pages (Trending, BuiltForStrength, BoldStatement, Instagram, InkEdge, Banner, Learn, ProductCard ×2) | `page-structure.md:56-60,103-110,187-191`                              | One-line "don't rebuild without a spec" could stay with the page doc |
| Change history inside rules (Session 41 `#121213` correction, Session 23 vs 24 ghost number, Session 55 image bug, Session 16/22 notes) | `design.md:41-42,84-88`, `coding-standards.md:236-240`         | Keep the rule, archive the story                                |
| Supplements rebuild history (Sessions 30/44/48/51)                                            | `page-structure.md:77-79,86-90,96-97`                                                     |                                                                 |
| Sweden-first strategy superseded                                                              | `market-strategy.md:12-15,62-64`                                                          |                                                                 |
| Mobile audit brief                                                                            | `src/docs/mobile-audit.md` (whole file)                                                   | One-off task brief for the pre-Session-24 homepage (Trending, `/learn`, `docs/` paths, `pnpm`). Duplicates `src/features/mobile-audit.md` |
| Doc "Last updated" headers referencing old sessions                                           | `brand.md:3`, `coding-standards.md:3`, `design.md:3`, `page-structure.md:3`, `data-architecture.md:3`, `seo.md:3` | Git history covers this                                         |

### What this means for session start

- **Before any task (auto-load):** only the Keep rows. Roughly 40–60
  lines in `CLAUDE.md`, plus a fixed document map pointing to the rest.
- **Before a specific task:** Move rows, loaded by path-scoped rules
  (CSS, components, data, pages/SEO) or by `/kickoff <feature>`.
- **For more information:** on-demand docs (brand, market, per-page
  state) and the archived session log via `tracker-historian`.
- **Never loaded:** Cut rows (delete them) and Archive.

---

## Clean-up decisions (Oct 2026)

Agreed with Stu over 17–19 Oct 2026 on `course/module-3`.

### Why

This was the first project, built with heavy spec-driven development.
When the direction changed, the specs and guidelines conflicted with
it, so the Deviation convention and hard confirm stops were added to
work around them. The working model now is lean docs: key concepts
only. Claude uses judgement, proposes ideas and gives opinions, and
Stu confirms, rejects or redirects.

The brief has four parts:

1. Remove anything not required, including inactive skills, agents and
   MCP servers.
2. Collapse duplicated rules. If the same rule lives in several docs,
   the docs have failed.
3. Remove docs that aren't needed.
4. Fix stale data that misleads Claude's judgement.

### Confirmed facts

| Fact | Evidence |
| ---- | -------- |
| The site is served by Vercel | `curl -sI` returns `server: Vercel` |
| DNS is managed at one.com, and email (MX) is intact at one.com | `dig` (see DNS proof below) |
| The apex domain redirects to `www` | `curl -sI` returns 308 to `https://www.probellnutrition.com/` (noted only, not acted on) |
| Vercel project `probell-astro`. The MCP gets 403 on the team scope, and there's no CLI | MCP `list_projects` works, other calls are forbidden |
| HubSpot env vars are set in Vercel and tested | Stu |
| Partner forms fall back to `""` if a `HUBSPOT_*` var is missing | `src/pages/sales.astro:11-12` and its siblings |
| Vercel production builds from `main`. Day-to-day work is on `dev`; `course/*` branches are children of `dev`, used for now | Stu; `git merge-base` |
| Fonts are Anton (display) and Space Grotesk (body), confirmed final | `global.css:38-46`; Stu |
| `TornEdge.astro` isn't used in the code | Referenced only in docs and specs |
| Playwright MCP is configured at project scope and fails to connect | `~/.claude.json`; 2 allow rules in `settings.local.json` |

### DNS proof (19 Oct 2026, read-only)

```
$ dig +short probellnutrition.com A
216.198.79.1
$ dig +short probellnutrition.com NS
ns01.one.com.
ns02.one.com.
$ dig +short probellnutrition.com MX
10 mx1.mailpod16-cph3.g1i.one.com.
10 mx2.mailpod16-cph3.g1i.one.com.
10 mx3.mailpod16-cph3.g1i.one.com.
10 mx4.mailpod16-cph3.g1i.one.com.
$ curl -sI https://probellnutrition.com | grep -i server
server: Vercel
```

The stale DNS/MX line was deleted from the tracker, and nothing was
added in its place.

### Decisions

1. **DNS/MX tracker item:** deleted, nothing added in its place.
2. **External services:** "If you need information from Vercel, DNS
   or any external service, ask Stu. Don't propose installing tools or
   widening permissions to get it." This goes into CLAUDE.md as an
   example of a good rule.
3. **HubSpot silent failure:** no code change now. It's logged under
   Later.
4. **Approach:** a lean reset.
5. **CLAUDE.md:** about 50 lines covering the project, stack, hard
   code rules, deploy facts, the HubSpot `""` fact, the
   external-services rule, working style and a doc map.
6. **Retired:** the Deviation convention, the mandatory confirm stop
   and the mandatory Playwright checks.
7. **Completed specs:** ~~moved as-is to `src/features/archive/` with
   the header "Implemented. Paths may be stale."~~ Revised 21 Oct 2026:
   the site is published and the code is the source, so all of
   `src/features/` was deleted (git history keeps it). Non-obvious intent
   moved to `brand.md` (Partner pages) and the `hubspot.ts` header; the
   pending confirmation-email sender swap went to the tracker board.
8. **Design docs:** they describe intent and aren't rulebooks. Claude
   proposes ideas within that intent.
   - Gradients: the code wins. Dark overlays go where text sits on
     images; no decorative gradients.
   - Motion: restrained, and Claude proposes anything beyond hover.
9. **Progress tracker:** it's the project record and is never read at
   session start. It's read on demand through `tracker-historian`.
   - Structure: a board (Now / Next / Open / Known bugs / Closed)
     above the full session log.
   - `/wrap` moves finished jobs into the log and promotes Next to
     Now.
10. **`/start` and `/wrap`:** they run only when Stu types them.
    Nothing runs automatically at session start.
11. **Git, delete and attribution rules** go into settings and
    permissions, not CLAUDE.md.
12. **Fonts:** the ones in use are confirmed.
13. **`TornEdge.astro`:** delete it, since it's unused.
14. **Playwright MCP:** remove the server and its allow rules.

### Plan

1. Audit baseline: this section and the Later entries.
2. Tracker restructure.
3. Fix stale data in the docs that are kept.
4. Remove what isn't needed.
5. Archive the completed specs.
6. Write the new CLAUDE.md.
7. Add settings and permissions.
8. Add `/start` and `/wrap`, and update memory.
9. Re-measure and run the proof: target well under 1,099 lines
   (baseline 1,648), and a fresh session answers "Vercel, from
   `main`" without being prompted.

---

## Later

### HubSpot partner forms: missing config fails silently

- Problem: sales/retail/distributor pages fall back to "" when a
  HUBSPOT_* value is missing (sales.astro:11-12 and siblings).
  The build passes and leads are lost without anyone knowing.
- Decision (Stu): forms must never fail silently.
  - Missing config = catch at build. Production build fails
    (Vercel keeps the last good deploy live). Dev/preview: warn and
    show a visible "form unavailable, email us" fallback.
  - HubSpot errors at submit time: show a clear error plus a
    mailto fallback.
- First check when this is picked up: are the portal ID and GUIDs
  public anyway (grep dist/ after a build)? If so, move them to a
  typed file in src/data/ instead of guarding env vars.
- Preview env vars: Stu checks in the Vercel dashboard. No Vercel
  access needed.
- Planned for: Module 4 (spec + build), test in Module 5.

### Security headers

- There's no `vercel.json`, so the site ships without HSTS,
  `X-Content-Type-Options`, `Referrer-Policy`, `Permissions-Policy` or
  a CSP. A CSP would need to allow `api-eu1.hsforms.com`, the HubSpot
  embed and Google Fonts.
- Not urgent for a static site with no logins, but worth doing.

### Vercel access

- The Vercel MCP gets 403 on the `boldersonstu-5986s-projects` team
  scope, and there's no CLI.
- Until then, Claude asks Stu for any Vercel, DNS or external
  information.
- Parked until Module 6.
