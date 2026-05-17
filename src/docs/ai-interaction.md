# Probell Nutrition — AI Interaction Guidelines

**Last updated: 14 May 2026**

---

## Purpose

This document defines how Claude Code works on this project.
Read this document at the start of every session without exception.

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
- docs/brand.md
- docs/design.md
- docs/coding-standards.md
- docs/ai-interaction.md
- docs/page-structure.md
- docs/progress-tracker.md

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
- Never add features not in `page-structure.md`
- Never delete files without confirmation
- Never auto-commit or run git operations

---

## Workflow — Every Section

### 1. Read the section spec

Before writing any code for a section, read its entry in
`page-structure.md` completely. Confirm:

- Layout and composition
- Copy — exact strings as specified
- Image asset — filename and location
- Border breaker technique assigned to this section
- Responsive behaviour

### 2. Confirm understanding

State in one sentence what this section does and how it will be built.
Wait for developer confirmation before writing code.

### 3. Build the component

Create the `.astro` component file in `src/components/`.
Follow `coding-standards.md` component structure exactly.

### 4. Import into page

Add the component import and usage to `src/pages/index.astro`.

### 5. Confirm completion

State:

- What was built
- Any deviation from the spec and why
- Ask: "Any edits before we move to the next section?"

### 6. Update progress tracker

Mark the section complete in `docs/progress-tracker.md`.
Add completion date and any notes.

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
- All spacing via `var(--space-*)` tokens — no raw rem or px values
- All typography via `var(--text-*)` and `var(--font-*)` tokens
- Global utility classes from `globals.css` used before writing new CSS
- Scoped styles for component-specific layout only

If a needed value is not in the token system:
→ Flag it to the developer
→ Add it to `globals.css` first
→ Then use the token in the component
→ Never improvise with a raw value

---

## Image Rules

- Always use Astro `<Image />` component — never `<img>` tags
- Hero image: `loading="eager"` — all others: `loading="lazy"`
- Always `format="webp"`
- Always meaningful `alt` text
- Image files must exist in `/public/images/` before referencing

If an image asset is not yet available:
→ Use a placeholder div with background color and correct dimensions
→ Note it clearly in the component with a comment
→ Do not reference a non-existent file path

---

## Border Breaker Rules

Each section transition has an assigned technique in `page-structure.md`.
Do not substitute or invent techniques.

When implementing a border breaker:

1. Check the assigned technique in `page-structure.md`
2. Use the implementation code from `design.md` as the base
3. Adjust only what is necessary for the specific section context

---

## When Stuck

- Stop after 2 failed attempts
- Explain the issue clearly
- Ask for direction before trying again
- Do not apply random fixes
- Do not install new packages to solve a problem

---

## What Claude Code Never Does

- Auto-commits or runs git commands
- Adds features not in the confirmed spec
- Uses raw color, spacing, or typography values
- Uses `<img>` tags instead of Astro `<Image />`
- Installs Tailwind, React, or any unapproved package
- Builds outside the component files defined in `coding-standards.md`
- Skips the session start doc read
- Proceeds without developer confirmation after summary
- Leaves unused imports, components, or dead code

---

## Commits

- Ask before committing — never auto-commit
- Conventional commit messages:
  - `feat:` — new section or component
  - `fix:` — bug fix
  - `chore:` — config, deps, tooling
  - `style:` — CSS only changes
  - `docs:` — documentation updates
- One section or fix per commit
- Never include "Generated with Claude" in commit messages

---

## Edit Loop

After each section is built, an edit loop begins.

Claude Code behaviour during edit loop:

- Make the requested edit
- Confirm what changed
- Ask: "Any further edits, or shall we move to the next section?"

This repeats until the developer explicitly moves on.
Never exit the edit loop without developer confirmation.

---

## Section Complete Checklist

Before marking a section complete in `progress-tracker.md`:

- [ ] Component file created in `src/components/`
- [ ] Component imported into `src/pages/index.astro`
- [ ] All copy matches `page-structure.md` exactly
- [ ] All colors use token variables — no raw values
- [ ] All spacing uses token variables — no raw values
- [ ] Image referenced exists in `/public/images/`
- [ ] Border breaker implemented if assigned to this section
- [ ] Responsive behaviour implemented per spec
- [ ] No unused imports or dead code
- [ ] Build passes — `npm run build` — zero errors

---

## Project Document Map

| File                       | Read when                      |
| -------------------------- | ------------------------------ |
| `docs/brand.md`            | Start of every session         |
| `docs/design.md`           | Before any UI code             |
| `docs/coding-standards.md` | Before any component or CSS    |
| `docs/ai-interaction.md`   | Start of every session         |
| `docs/page-structure.md`   | Before each section            |
| `docs/progress-tracker.md` | Start and end of every session |
