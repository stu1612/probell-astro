# Probell — Pre-Launch Technical Audit Brief

**Date: 12 August 2026**
**Type: Audit — read/report only, no changes without separate approval**

---

## Purpose

Second pass pre-launch audit, following the completed SEO audit. This covers
code-inspectable areas not yet reviewed. Confirmed already handled and
excluded from this scope: build passes cleanly and has been tested after
every feature implementation; a 404 page is in place. Do not re-audit these.

This is a review pass — report findings, do not fix anything yet.

---

## Scope

### 1. Broken links — full site, not just partner routes

The `/partners/*` → `/*` route flatten was already checked for broken
references at the time of that change. Re-verify end to end now that
additional features have shipped since:

- Every internal link across every page — nav, footer, in-body content,
  CTAs — confirm target routes actually exist and resolve
- Specifically check the Contact router's three links (`/sales`,
  `/retail`, `/distributor`) plus the `mailto:` fallback are correct
- Check `/supplements` index links to each `[slug]` page resolve correctly
- Flag any link pointing to a route that no longer exists (leftover from
  any past restructure) or a route that exists but isn't linked from
  anywhere (orphaned page — not a bug, but worth knowing)

### 2. Form validation — edge cases, not just happy path

Across all three partner forms (Sales, Retail, Distributor):

- Empty required field — confirm client-side validation blocks
  submission and shows a clear error, not a silent failure or a
  submission that reaches HubSpot with missing data
- Malformed email (e.g. `test@`, `notanemail`) — confirm this is caught
  before submission
- Extremely long input in a text field — confirm no crash, no layout
  break, no unbounded submission to HubSpot
- Rapid/bot-speed submission — confirm the time-trap actually blocks it
  (this can likely be tested by scripting a fast form-fill locally, or
  by manually submitting as fast as possible and checking it's rejected)
- Honeypot field — confirm it's genuinely hidden from real users
  (not just visually hidden in a way that breaks keyboard/screen-reader
  navigation) and confirm a filled honeypot blocks submission

### 3. Environment variables

- Confirm `WEB3FORMS_KEY` is fully removed — not just unused in code,
  but actually absent from `.env` / Vercel environment variable settings,
  since the Contact router replaced Web3Forms
- Confirm any HubSpot-related keys/IDs are correctly set for production,
  not left pointing at a dev/sandbox portal
- Flag anything hardcoded in source that should be an environment
  variable instead (API keys, portal IDs, anything environment-specific)

### 4. Console errors and warnings

For every route, load in a browser with dev tools open and report:

- Any console errors
- Any console warnings (including React/Astro hydration warnings if
  applicable, deprecated API usage, etc.)
- Any failed network requests (404s on assets, failed fetches)

---

## Output format

Same as the SEO audit — checklist grouped by section, each finding with:

- **Status**: Pass / Issue found
- **Location**: file path or route
- **What's wrong**: one line, specific
- **Suggested fix**: one line — do not implement yet

Flag anything that can't be verified through code/build alone (e.g.
actual bot-speed submission behavior may need a live test, not just
code review) rather than guessing at the outcome.

---

## What this brief does NOT cover

- HubSpot end-to-end submission from a real US IP — being tested
  separately via a live US-based volunteer
- SEO — covered in the prior audit
- Mobile / responsive testing — handled directly by the developer, not
  part of this audit
- Performance / Core Web Vitals — already tested via PageSpeed Insights
