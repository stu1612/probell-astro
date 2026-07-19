# Probell Nutrition — AI Interaction Guidelines

**Last updated: 19 Jul 2026**

---

## Purpose

This document defines how Claude Code works on this project.
Read this document at the start of every session without exception.

---

## Where Docs Actually Live — Two Locations

- **`src/docs/`** — core, always-relevant project docs: `brand.md`,
  `design.md`, `coding-standards.md`, `ai-interaction.md` (this file),
  `page-structure.md`, `progress-tracker.md`, `market-strategy.md`.
  Read at the start of every session per the protocol below.
- **`src/features/`** — feature-specific specs for work in progress or
  planned: `audience-cards.md`, `sales-partner-page.md`,
  `retailer-program-page.md`, `distributor-program-page.md`,
  `partner-crm-integration.md`. Read the relevant one when working on
  that specific feature — not required every session.

(Note: earlier versions of this file referenced plain `docs/` without
the `src/` prefix — that was incorrect relative to the actual repo
structure. This version corrects it.)

---

## Responsibilities

| Responsibility            | Owner                   |
| ------------------------- | ----------------------- |
| Feature scope and spec    | Developer + Claude Chat |
| Doc read and confirmation | Claude Code             |
| Implementation            | Claude Code             |
| Git operations            | Developer               |
| Deploy to one.com         | Developer               |
| Spec updates              | Claude Code             |
| Progress tracker updates  | Claude Code             |

---

## Session Start — Required Every Time

The first message of every Claude Code session must be:

```
Read the following docs before we start:
- src/docs/brand.md
- src/docs/design.md
- src/docs/coding-standards.md
- src/docs/ai-interaction.md
- src/docs/page-structure.md
- src/docs/progress-tracker.md

If this session is working on a specific feature, also read the
relevant file in src/features/.

Once read:
1. Confirm you have read all documents
2. State the current build status from progress-tracker.md
3. State the next section to be built
4. State one specific thing you will check before writing any code

Do not take any action until the developer confirms.
```

**Hard stop — do not proceed until developer replies: "confirmed, proceed"**

---

## Communication

- Be concise and direct
- Explain non-obvious decisions briefly
- Ask before making changes outside the current section
- Never add features not in `page-structure.md` (or the relevant
  `src/features/` spec, if working on a feature not yet folded into
  `page-structure.md`)
- Never delete files without confirmation
- Never auto-commit or run git operations
- A passing build is not a completion signal for UI work — visual
  verification (Step 4.5) is required first

## Deviations from Spec

The developer may explicitly choose to work outside the documented
specs. This is intentional and should not be treated as an error to
correct.

**Signal:** any task prefixed `Deviation:` means the developer is
knowingly diverging from spec for this task. Proceed without flagging
spec misalignment for that specific change.

**Logging:** when updating `progress-tracker.md` at the end of a
session, tag any deviation-flagged change with a `**DEVIATION:**`
prefix inside the normal "Decisions made this session" list — do not
create a separate section or file for it.

Example:

**Decisions made this session:**

- **DEVIATION:** Hero CTA changed from "Contact" to "Become a Partner"
  — diverges from page-structure.md Nav spec, per developer direction

If a deviation represents a genuine strategic/structural change (new
audience segment, dropped market strategy, IA overhaul) rather than a
one-off tactical choice — flag this distinction to the developer.
Structural changes get their own doc (see `market-strategy.md` as the
model), not a session-log tag.

**Note on recent history:** Sessions 31–33 were carried out by the
developer directly, outside Claude Code, and logged retroactively at
the developer's request. Treat those entries the same as any other
session log — they are not deviations from this protocol, just a
different session type, explicitly marked as such in
`progress-tracker.md`.

---

## Workflow — Every Section

### 1. Read the section spec

Before writing any code, read the relevant entry in `page-structure.md`
(or the `src/features/` spec if building a not-yet-integrated feature).
Confirm layout, exact copy, image assets, and responsive behaviour.

### 2. Confirm understanding

State in one sentence what this section does and how it will be built.
Wait for developer confirmation before writing code.

### 3. Build the component

Create the `.astro` component in `src/components/`, following the
folder/`index.astro` pattern established since Session 28 for
section-level components (see `page-structure.md` → Component File
Structure). `ui/` components stay flat.

### 4. Import into page

Add the component import and usage to the relevant page
(`src/pages/index.astro` for homepage sections, or the appropriate
route file for standalone pages).

### 4.5 Visual Verification (required for any layout/UI change)

A passing build confirms the code compiles, not that it looks right.
This step is separate and mandatory before any layout, component, or
styling task is reported complete.

**Tooling:** Playwright MCP. Say "use the Playwright MCP" explicitly at
the start of the session — Claude Code defaults to shelling out via
Bash otherwise.

**Process:**

1. Start the dev server, navigate to the changed page/route via
   Playwright MCP.
2. Screenshot at three breakpoints: `375px`, `768px`, `1440px`.
3. Compare each screenshot against `design.md` tokens and the relevant
   spec.
4. State explicitly what matches and what doesn't. "Looks good" is not
   an acceptable report.
5. Fix issues found, re-screenshot, repeat until clean at all three
   widths.
6. Only then report the task complete.

This applies retroactively when doing an audit pass on existing
sections, not just new builds.

### 5. Confirm completion

State what was built, any deviation from spec and why, and ask: "Any
edits before we move to the next section?"

### 6. Update progress tracker

Mark the section complete in `src/docs/progress-tracker.md`. Add
completion date and any notes.

---

## Code Rules

- Minimal changes to accomplish the task
- No refactoring of unrelated code
- No unrequested features
- Preserve existing patterns in the codebase
- One section per session focus — do not jump ahead

---

## CSS Rules — Non-Negotiable

- All colors via `var(--color-*)` tokens — no raw hex values
- All spacing via `var(--space-*)` tokens — no raw rem/px values
- All typography via `var(--text-*)`/`var(--font-*)` tokens
- Global utility classes from `globals.css` used before writing new CSS
- Scoped styles for component-specific layout only

Known, developer-confirmed exceptions to "no raw values" exist (see
`design.md` for the specific list — e.g. `18px` body text where no
token matched). These are not errors to fix; check `design.md` before
assuming a raw value is a mistake.

If a genuinely new value is needed and no exception applies:
→ Flag it to the developer → add it to `globals.css` first → then use
the token → never improvise silently.

---

## Image Rules

- Always Astro `<Image />` — never `<img>`
- Hero image: `loading="eager"` — all others: `loading="lazy"`
- Always `format="webp"`, always meaningful `alt` text
- Image files must exist in `/public/images/` before referencing

If an image asset isn't yet available: use a placeholder div with
background color and correct dimensions, note it in a comment, never
reference a non-existent file path.

---

## Section Transition Rules

`design.md` Section 5 currently flags most of its documented
techniques as **unverified against the live site** following the
Session 24 redesign. Before implementing any section transition, check
`design.md`'s current warning on this rather than assuming any of the
five original techniques still apply — several of the components they
were built for no longer exist.

---

## When Stuck

- Stop after 2 failed attempts
- Explain the issue clearly, ask for direction
- Do not apply random fixes, do not install new packages to solve a problem

---

## What Claude Code Never Does

- Auto-commits or runs git commands
- Adds features not in the confirmed spec
- Uses raw color, spacing, or typography values (outside confirmed
  exceptions — see `design.md`)
- Uses `<img>` tags instead of Astro `<Image />`
- Installs Tailwind, React, or any unapproved package
- Skips the session start doc read
- Proceeds without developer confirmation after summary
- Leaves unused imports, components, or dead code

---

## Commits

- Ask before committing — never auto-commit
- Conventional commit messages: `feat:` / `fix:` / `chore:` / `style:` / `docs:`
- One section or fix per commit
- Never include "Generated with Claude" in commit messages

---

## Edit Loop

After each section is built, an edit loop begins: make the requested
edit, confirm what changed, ask "Any further edits, or shall we move to
the next section?" — repeat until the developer explicitly moves on.

---

## Section Complete Checklist

Before marking a section complete in `progress-tracker.md`:

- [ ] Component file created in `src/components/`, following the
      folder/`index.astro` pattern
- [ ] Component imported into the relevant page
- [ ] All copy matches spec exactly
- [ ] All colors/spacing/typography use token variables (or a confirmed
      exception per `design.md`)
- [ ] Image referenced exists in `/public/images/`
- [ ] Responsive behaviour implemented per spec
- [ ] No unused imports or dead code
- [ ] Build passes — zero errors
- [ ] Visual verification done at 375px / 768px / 1440px (Step 4.5)

---

## Project Document Map

| File                              | Read when                      |
| ---------------------------------- | ------------------------------- |
| `src/docs/brand.md`                | Start of every session          |
| `src/docs/design.md`               | Before any UI code              |
| `src/docs/coding-standards.md`     | Before any component or CSS     |
| `src/docs/ai-interaction.md`       | Start of every session          |
| `src/docs/page-structure.md`       | Before each section             |
| `src/docs/progress-tracker.md`     | Start and end of every session  |
| `src/docs/market-strategy.md`      | Before any market-facing decision |
| `src/features/[name].md`           | Before building that specific feature |
