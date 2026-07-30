# Probell — Contact Router + Partner Route Flatten Spec

**Version 1 · 29 July 2026**
**Status: Ready for development**

---

## Current Build — Confirmed Working ✓

- Sales Partner, Retailer, Distributor pages live at `src/pages/partners/sales.astro`,
  `src/pages/partners/retail.astro`, `src/pages/partners/distributor.astro`
- All three submit to HubSpot via shared `src/lib/hubspot.ts`
- Contact section currently submits via Web3Forms (separate, unrelated pipeline)
  — not wired to HubSpot, no Application Status tracking

---

## Scope

### 1. Route flatten — Deviation: intentional structure simplification

Move the three partner pages out of the `/partners/` nested path:

- `src/pages/partners/sales.astro` → `src/pages/sales.astro`
- `src/pages/partners/retail.astro` → `src/pages/retail.astro`
- `src/pages/partners/distributor.astro` → `src/pages/distributor.astro`

Reasoning: no page exists at `/partners` itself and nothing links to it — the
nested segment is unused taxonomy with no parent route. Update any internal
links/nav references from `/partners/[name]` to `/[name]`.

Delete the now-empty `src/pages/partners/` directory.

**Before implementation:** grep the codebase for every `partners/` reference
(nav, footer, sitemap, any hardcoded links) — do not assume the reference list
below is exhaustive. Confirm the full set with the developer before editing.

### 2. Contact section — replace form with router

Remove the Web3Forms contact form entirely, including:
- Form markup and fields in `Contact.astro`
- `WEB3FORMS_KEY` reference
- hCaptcha script/div and related client script

Replace with three link cards / buttons:
- "I'm a Gym" → `/sales`
- "I'm a Distributor" → `/distributor`
- "I'm a Retailer" → `/retail`

Below the three options, a plain fallback for non-partner inquiries:
- Plain `mailto:info@probellnutrition.com` link — no form, no JS, no service
  dependency
- Label: something like "Something else? Reach out directly."

---

## Design Tokens

- Reuse existing `.btn-primary` / `.btn-secondary` styles for the three router
  options — do not introduce a new button variant (global button restyle is
  separately deferred, don't couple this feature to it)
- Color tokens only — no raw hex, per `coding-standards.md`
- Layout: three options can be equal-weight cards or a simple stacked/grid
  choice — developer's call in the edit loop, not prescribed here

---

## Animation / Interaction Logic

None. No hover transitions beyond existing button hover states already defined
globally.

---

## Next Iteration Tasks

- [ ] Grep codebase for all `partners/` references before touching anything
- [ ] Move three partner page files, update all internal links referencing
      old `/partners/*` paths
- [ ] Remove Web3Forms form, `WEB3FORMS_KEY` usage, hCaptcha script from Contact
- [ ] Build three-option router UI + mailto fallback in Contact section
- [ ] Confirm no other page/component still references `/partners/` prefix
      (nav, footer, sitemap if present)
- [ ] `npm run build` — verify no broken links from the route move

---

## What Is Not Yet Built

- No general-inquiry form of any kind — mailto is the deliberate full stop here
- Global button restyle not part of this feature — reuse current button styles
  as-is
