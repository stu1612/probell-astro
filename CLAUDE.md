# Probell Nutrition — Claude Code Context

**Project:** Probell Nutrition website
**Stack:** Astro (static output) · Plain CSS · Google Fonts · No frameworks
**Deploy:** Static `/dist/` upload to one.com via FTP
**Purpose:** B2B brand presentation — gyms, distributors, retailers,
sales partners. Single conversion goal: get the right people to make
contact. Not an ecommerce store.

---

## This File Is Intentionally Thin

Everything about how to work on this project — session protocol,
coding standards, design tokens, current page structure, build
history — lives in `src/docs/` and `src/features/`, not here. This
file previously duplicated large sections of those files inline; that
duplication has been removed because it created drift risk (a token or
rule could change in one place and silently go stale in the other).

**Do not re-add detailed rules here.** If something needs to be a
standing rule, it belongs in the relevant `src/docs/` file. This file's
job is to point at the right place, not to restate content.

---

## Session Start Protocol

Follow `src/docs/ai-interaction.md` exactly — it contains the full
required session-start prompt, the doc read list, and the
confirm-before-proceeding rule. Do not skip it and do not proceed
without developer confirmation.

Quick reference — the docs read at the start of every session:
`src/docs/brand.md`, `src/docs/design.md`, `src/docs/coding-standards.md`,
`src/docs/ai-interaction.md`, `src/docs/page-structure.md`,
`src/docs/progress-tracker.md`. Feature-specific specs live separately
in `src/features/` and are read only when working on that feature.

---

## Stack Rules — Non-Negotiable Summary

Full detail in `src/docs/coding-standards.md`. In short: no React/Vue/
Svelte, no Tailwind/CSS frameworks, no `<img>` tags (always
`astro:assets` `<Image />`), no raw hex/px/rem values (always CSS
custom property tokens), no animations beyond the few permitted hover
transitions (see `src/docs/design.md` Section 8 for the current list
including one confirmed exception), no features outside
`page-structure.md` or the relevant `src/features/` spec, no auto-commits.

---

## Deviation Convention

The developer may prefix a task with `Deviation:` to signal a knowing,
deliberate departure from spec. Full rules in
`src/docs/ai-interaction.md` — the short version: proceed without
flagging spec misalignment for that task, then log it with a
`**DEVIATION:**` prefix in `src/docs/progress-tracker.md`'s session log.

---

## Known Current State (as of 19 Jul 2026)

The homepage went through a major structural redesign in Session 24
(11 Jun 2026) — several original sections were deleted and replaced.
`src/docs/page-structure.md` reflects the current, real structure.
**Do not rely on memory of an earlier homepage layout** — if anything
here or in a past conversation describes an 11-section homepage with
`Trending`, `BuiltForStrength`, `BoldStatement`, or `Instagram`
components, that's stale; check `page-structure.md` for what's
actually live.

Four partner-program pages (Sales Partner, Retailer, Distributor, plus
a shared CRM integration spec) are specced in `src/features/` and
scaffolded as empty route files in `src/pages/partners/` — not yet
built. Read the specs fresh before starting that work.

For anything not covered by this summary, go to the actual source file
— this document does not attempt to be comprehensive.
