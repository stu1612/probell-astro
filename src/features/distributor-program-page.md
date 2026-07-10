# Probell — Distributor Program Page Spec

**Version 1 · 9 July 2026**
**Status: Ready for development — light version only**

---

## Overview

New page, `src/pages/partners/distributors.astro` (confirm URL with
client). Deliberately scoped light — the full ask in the vision document
(MOQs, exclusivity terms, supply chain detail, national distribution
contracts) assumes retail traction and distributor conversations that
don't exist yet. Building that level of detail now is optics without
substance. This spec covers a credibility page + contact path only; the
detailed distributor kit is separately deferred.

**Integration:** see `partner-crm-integration.md` for the HubSpot form
pattern this page uses.

---

## Page Sections

### 1. Intro

Same brand-consistent pattern as the other two partner pages. Framing:
Probell as a growing US brand open to distribution conversations —
confident, not overselling scale that doesn't exist yet.

### 2. Product Portfolio

Reuse existing product presentation pattern from `/supplements` — do not
build a new product display component for this page. A condensed grid or
list referencing the existing product data (`src/data/supplements.ts`) is
sufficient.

### 3. Production & Supply Capabilities

**Light version only.** A few sentences — Made in USA, current production
scale (first run 300–400 units per the Sales & Launch Strategy doc, if
the client is comfortable sharing that figure publicly — confirm). Do not
build out detailed manufacturing capacity, MOQ, or supply chain
documentation — that's investor/distributor-conversation material, not
public web page content. See Open Items.

### 4. Distribution & Exclusivity Opportunities

**Deferred entirely for this phase.** No exclusivity terms exist yet to
describe. Replace with a single line inviting distributors to get in touch
to discuss opportunities — the conversation happens off-site once a real
distributor is interested, not on a public page.

### 5. Contact Form

Fields:

```
Company Name          — text, required
Contact Name            — text, required
Email                     — email, required
Phone                      — text, optional
Company Type               — select: Distributor / Wholesaler / Other
Region(s) of Interest        — text, optional
Message                       — textarea, optional
```

- Submits to HubSpot Distributor form (GUID per
  `partner-crm-integration.md`)
- Same fetch-based UX pattern as `Contact.astro`

---

## Design Tokens

Standard site tokens per `design.md`. No new components — reuse existing
patterns throughout.

---

## Component Location

- Production: `src/pages/partners/distributors.astro`
- Nav: group with Sales Partner and Retailer pages

---

## Open Items — Blocked on Client

- [ ] Confirm whether production scale figures (300–400 unit first run)
  are acceptable to state publicly, or should stay private
- [ ] Confirmed page URL/slug
- [ ] HubSpot Form GUID

## What Is Not Yet Built

- Everything in this document — page does not exist yet
- Full Distributor Kit (market analysis, sales projections, manufacturing
  capacity detail, MOQs, supply chain/logistics) — explicitly deferred,
  not planned for this phase. Revisit only once a real distributor
  conversation is underway and specific data is needed for it.
