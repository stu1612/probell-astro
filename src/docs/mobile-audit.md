# Mobile Audit — Homepage & Key Routes

**Session type:** Audit only. Do not write or change any code.
**Tooling:** Playwright MCP. Say "use the Playwright MCP" explicitly at
session start — Claude Code will default to shelling out via Bash
otherwise.
**Dev server:** `pnpm dev` → `http://localhost:4321`

---

## Pre-read (in order)

- `docs/brand.md`
- `docs/design.md`
- `docs/page-structure.md`
- `docs/progress-tracker.md`

Read `progress-tracker.md` last — it tells you which sections are
confirmed complete vs. still in progress. A gap in an "in progress"
section is expected; a gap in a "Complete" section is a regression and
should be flagged as higher severity.

Do not read `coding-standards.md` — it governs implementation, not
visual output, and isn't relevant to a no-code session.

---

## What counts as "broken" — use this bar consistently

Flag as **Critical** if any of the following are present:

- Horizontal scroll/overflow on the page at the tested width
- Any interactive element (button, link, form field) smaller than
  ~44×44px or overlapping another tappable element
- Text clipped, cut off, or overlapping another element
- A layout rule explicitly defined in `page-structure.md` or
  `design.md` that is visibly not applied (e.g. product breakout
  offset missing, single-column stacking not triggering, clamp()
  value not scaling)

Flag as **Moderate** if:

- Spacing visibly doesn't match `--space-*` tokens (too tight, too
  loose, inconsistent between similar elements)
- Contrast or legibility is poor but not unreadable
- An animation/interaction spec is missing but doesn't break layout

Flag as **Polish** for anything below that bar. Do not report
"looks good" as a finding — every section gets an explicit pass/fail
against the criteria above, even if the result is "no issues found."

---

## Viewports

Primary: **375px** (iPhone SE — smallest common target, catches the
most breaks)
Secondary: **430px** (iPhone Pro Max — check for different wrapping
behavior on `clamp()`-scaled text, since 375 and 430 can render text
line-breaks differently)

Screenshot both for every section below unless noted otherwise.

---

## Homepage — sections in build order

For each, screenshot per the viewport rule above, then compare against
its entry in `page-structure.md` (copy, spacing, border breaker
technique) and the color/type tokens in `design.md`.

1. **Nav** — screenshot closed state, then interact: open the hamburger
   menu and screenshot the open overlay state. Check tap targets on
   the menu links and the CTA. This is the single most common mobile
   failure point — do not skip the interaction step.
2. **Hero**
3. **Identity**
4. **Trending** — this section uses a CSS scroll-snap carousel on
   mobile. Do not just screenshot the static first-card view: scroll
   the carousel programmatically and screenshot mid-scroll to confirm
   snap behavior actually works, not just that cards exist.
5. **Brand Story**
6. **Built for Strength**
7. **Bold Statement**
8. **Built for Endurance**
9. **Instagram**
10. **Contact** — screenshot the form in default state, then with a
    field focused, to check input styling and label positioning at
    375px.
11. **Footer**

---

## Secondary routes

Treat these as their own numbered steps, not an afterthought:

12. `/supplements` — product listing grid
13. `/supplements/[slug]` — pick the Whey Strawberry detail page
14. `/learn` — check the tab interaction at mobile width, not just the
    default tab's static layout
15. `/legal/terms` — chosen specifically over the other legal pages
    because it's the longest, so it's the most likely to surface text
    overflow, spacing, or scroll issues that a shorter page like
    `/legal/shipping` wouldn't expose

---

## Output

Write findings to `docs/mobile-audit-findings.md`, structured as:

```markdown
# Mobile Audit Findings — [date]

## Critical

- [Section] — [issue] — [screenshot reference]

## Moderate

- ...

## Polish

- ...

## Confirmed passing (no issues found)

- [list sections/routes that passed cleanly, so this is a complete
  record, not just a list of problems]
```

Do not propose fixes in this file. This is a findings record only —
triage and prioritization happens separately, after developer review.
