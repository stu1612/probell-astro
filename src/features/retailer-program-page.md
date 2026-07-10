# Probell — Retailer Program Page Spec

**Version 1 · 9 July 2026**
**Status: Ready for development**

---

## Overview

New page, `src/pages/partners/retailers.astro` (confirm URL with client).
Targets gyms, supplement stores, and retailers per the Website Vision
document. Original client ask included a login-gated wholesale pricing
dashboard — this spec replaces that with a form-gated equivalent that
achieves the same business outcome (pricing not publicly visible) without
requiring accounts, auth, or a backend. Confirm this simplification with
the client before build — see Open Items.

**Integration:** see `partner-crm-integration.md` for the HubSpot form
pattern this page uses.

---

## Page Sections

### 1. Intro

Brand-consistent intro, same tone/token pattern as the Sales Partner page
Section 1. Audience framing: why a gym or retailer should stock Probell —
this content largely already exists in the homepage Range/Mission sections
and can be adapted rather than written from scratch.

### 2. Wholesale Pricing — Request, Not Dashboard

**Replaces the "view pricing after registration" ask from the client
vision doc.**

Implementation: a single CTA / short form — "Request Wholesale Pricing" —
collecting business name, contact name, email, and business type
(gym / retail store / other). On submission:

- Creates a HubSpot contact/deal (Retailer pipeline)
- Client manually sends the price list via email, OR (later, optional)
  a HubSpot automated workflow emails a PDF price list on form submission

This gets the client the actual outcome they want (pricing stays gated,
not public) without any account system. Flag this clearly to the client as
a deliberate simplification, not a missing feature — see Open Items.

### 3. Product Sample Request

Form section, can be combined with the pricing request form (single form,
"I'm interested in:" checkbox group — Wholesale Pricing / Product Samples
/ Both) rather than building two separate forms. Simpler to build, simpler
for the retailer to fill out.

### 4. Product Catalog Download

Static PDF download link — same production dependency as the Sales
Partner info sheet (blocked on final product images and nutritional data,
tracked separately in `progress-tracker.md` under existing pre-launch
blockers). Do not duplicate that tracking here — just link to it once it
exists.

### 5. Apply for Retailer Account — Form

Fields:

```
Business Name        — text, required
Contact Name           — text, required
Email                   — email, required
Phone                    — text, optional
Business Type            — select: Gym / Supplement Store /
                          Retailer / Other
Interested In             — checkbox group: Wholesale Pricing /
                          Product Samples / Both
Message                    — textarea, optional
```

- Submits to HubSpot Retailer form (GUID per
  `partner-crm-integration.md`)
- Same fetch-based UX pattern as `Contact.astro`
- This single form covers Sections 2, 3, and 5 above — no need for
  separate forms per action

---

## Design Tokens

Standard site tokens per `design.md`. No new components needed — this page
reuses the existing form styling and card/panel patterns already
established across the site.

---

## Component Location

- Production: `src/pages/partners/retailers.astro`
- Nav: group with Sales Partner page under a "Partners" nav item or
  dropdown — confirm structure with client once both pages are built

---

## Open Items — Blocked on Client

- [ ] **Confirm the form-gated pricing approach is acceptable**, versus a
  true login/account system. This is the single most important open
  question in this spec — it determines whether this page is a simple
  build or a backend project. Do not proceed past the form-based version
  without explicit client sign-off that this meets their need.
- [ ] Confirmed page URL/slug and nav structure
- [ ] Product catalog PDF — blocked on existing pre-launch asset items
- [ ] HubSpot Form GUID

## What Is Not Yet Built

- Everything in this document — page does not exist yet
- Any account/login system (explicitly out of scope for this phase)
