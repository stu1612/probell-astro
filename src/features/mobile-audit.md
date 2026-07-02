Use the Playwright MCP for this session — do not shell out to
Playwright via Bash.

Read these first:

- docs/brand.md
- docs/design.md
- docs/page-structure.md
- docs/coding-standards.md

This is a mobile audit, not a build session. Do not write or change
any code yet.

For each of the 11 homepage sections in page-structure.md, in order:

1. Navigate to the local dev server at the relevant scroll position /
   route
2. Screenshot at 375px width
3. Compare against the section's spec (copy, spacing, border breaker
   technique) and against design.md tokens
4. Flag anything broken, overlapping, illegible, or missing its
   responsive rule as written in the spec (e.g. product breakout
   offset, clamp() scaling, single-column stacking)

Also check:

- /supplements and one /supplements/[slug] product page
- /learn
- One legal page

Produce a single findings list, ordered by severity (broken/unusable
first, then visual roughness, then polish items). Do not fix anything
yet — I want to review the list and prioritize before we touch code.
