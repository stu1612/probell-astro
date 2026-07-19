---
name: kickoff
description: "Run the standard feature-session start ritual defined in src/docs/ai-interaction.md. Use at the start of any new feature build (e.g. /kickoff sales-partner-page). Reads the core docs plus the relevant feature spec, confirms understanding, and stops for developer confirmation before any implementation begins."
---

# Feature Kickoff

Invoked as `/kickoff [feature-name]`, where `[feature-name]` matches a
file in `src/features/` (e.g. `sales-partner-page` for
`src/features/sales-partner-page.md`). Invoke with no argument
(`/kickoff`) for a session that isn't tied to one specific feature spec
— e.g. a general audit, cleanup, or cross-cutting task.

## What this skill does

Follows the Session Start Protocol in `src/docs/ai-interaction.md`
exactly — this skill exists to save retyping that prompt, not to
replace or reinterpret it. If `ai-interaction.md`'s protocol changes,
update it there; this skill should stay a thin trigger for it, not
grow its own separate copy of the rules.

1. Read the core docs: `src/docs/brand.md`, `src/docs/design.md`,
   `src/docs/coding-standards.md`, `src/docs/ai-interaction.md`,
   `src/docs/page-structure.md`, `src/docs/progress-tracker.md`.
2. If a feature name was given, read `src/features/[feature-name].md`.
   If the file doesn't exist at that path, say so and stop — don't
   guess at a similarly-named file.
3. Confirm all relevant documents have been read.
4. State the current build status from `progress-tracker.md`.
5. State the next section/task to be built.
6. State one specific thing to check before writing any code.

**Hard stop after step 6.** Do not take any action — no file creation,
no code, no git operations — until the developer replies with explicit
confirmation ("confirmed, proceed"). If the developer requests changes
to the summary instead, revise and re-present, then wait again.

## After confirmation

Proceed per the Workflow section of `src/docs/ai-interaction.md`:
build the component (folder/`index.astro` pattern for section-level
components, per `page-structure.md`'s Component File Structure), import
it, then run the required visual verification (Step 4.5 — Playwright
MCP, three breakpoints: 375px/768px/1440px) before reporting the task
complete. Update `progress-tracker.md` at the end, per the existing
session-log pattern.

## Notes

- If the developer's task is prefixed `Deviation:`, proceed without
  flagging spec misalignment for that task, and log it with a
  `**DEVIATION:**` prefix in `progress-tracker.md` — see
  `ai-interaction.md` for the full convention.
- If the referenced feature spec mentions the shared HubSpot submission
  pattern (`src/features/partner-crm-integration.md`), check whether
  that shared utility already exists in the codebase before building a
  new one per page — reuse over duplication.
- `src/docs/page-structure.md` currently flags several things as
  needing verification against live source (see its own warnings) —
  don't treat everything in it as fully settled fact without checking
  when something seems off from what's actually in the codebase.
