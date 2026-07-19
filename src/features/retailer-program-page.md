# Probell — Retailer Program Page Spec

**Version 2 · 18 July 2026**
**Status: Ready for development**
**Supersedes:** earlier draft based on client's Website Vision doc
(login-gated wholesale pricing). Client has since confirmed the
form-gated request approach (see below) — this version reflects that
sign-off plus positioning work done in session.

---

## Core Positioning

A Retailer is distinct from a Distributor: they sell Probell directly to
the end consumer at the point where the consumer actually is (a gym,
supplement store, studio). Single or small number of physical locations.
Buys wholesale, sells retail, keeps the margin.

Given Probell is an early-stage brand without an established retail
network, the honest framing is: **small scale, and that's a strength,
not a weakness.** A local gym owner isn't looking for the biggest
supplier — they're looking for someone who won't waste their time or
bury them in process. The page's job is to make withholding price up
front (pricing is form-gated, not published) feel like a reasonable,
professional practice — not evasiveness.

Primary hesitations to address, in order of likely weight:
1. Price/margin — can't be answered directly (gated), so must be offset
   by trust elsewhere on the page
2. Logistics — will ordering/reordering be straightforward
3. Fit — does this belong in my gym/store

Tone: straight answers, no hassle, competent handling of logistics.
Not a hype pitch — a practical one.

---

## Position in Page

New route: `/partners/retail` (final URL pending nav/IA confirmation).

---

## 1. Hero / Intro

**Eyebrow:** `"Retailer Program"` — `.label-text--red`

**Headline (draft):**
```
"You've Got Enough to Manage."
```

**Sub-line:**
```
"Tell us what you need — we'll give you a straight answer, fast."
```

No CTA in hero — single CTA lives with the form.

---

## 2. Why Stock Probell

Short section, not a heavy stat-chip block (avoid overclaiming scale
the brand doesn't have yet). Focus on product differentiation as the
honest, real selling point:

```
- The kettlebell-shaped container — genuinely distinct on a shelf or 
  gym floor, a conversation starter with members/customers
- US-made, no-compromise formula
- Direct, personal ordering relationship — no call center, no runaround
```

---

## 3. Pricing — Request, Not Publish

**Confirmed client direction:** wholesale pricing is not published.
Framed as normal, professional B2B practice rather than a barrier.

Copy direction:
```
"Wholesale pricing is shared directly with approved retailers. Submit 
a request below and we'll get back to you personally — no account, 
no login, no waiting on hold."
```

This directly addresses the price/margin hesitation without giving a
number — reassurance through process clarity, not data.

---

## 4. How It Works (new — added this session, same pattern as Sales
Partner)

Short, removes the "black box" feeling of a gated-pricing request:

```
1. Submit your request — a short form, a couple minutes
2. We review — every request read personally
3. Pricing shared directly — wholesale pricing and next steps sent 
   to you
4. Order — straightforward reordering once you're set up
```

---

## 5. Application / Request Form

**Confirmed fields (session-locked, deliberately minimal, no
dropdowns):**

| Field label | Maps to | Type | Required? |
|---|---|---|---|---|
| Business Name | Business Name (custom) | Text | **Required** |
| Your Name | Firstname/Lastname (standard, via Full Name field) | Text | **Required** |
| Email | Email (standard) | Email | **Required** |
| Phone | Phone (standard) | Text | Optional |
| Message — "Tell us about your business and what you're looking for" | Inquiry Message (custom) | Multi-line text | **Required** |
| *(hidden)* Partner Type | Partner Type (custom), fixed value "Retailer" | Text | N/A — hidden field |

**Deliberately no Business Type dropdown** — considered and rejected in
session. A dropdown forces applicants into an ill-fitting category
(gym vs. retail store vs. studio); the open Message field captures the
real answer in the applicant's own words instead. Consistent with the
same no-dropdown philosophy applied to Sales Partner and Distributor.

**Location field also deliberately omitted** — session decision:
location/logistics specifics belong in the personal follow-up
conversation (phone/email), not the initial form.

---

## HubSpot Integration

Confirmed, built and published this session:

```
Portal ID:  148924644
Region:     eu1
Form GUID:  d11252b6-8442-4caa-8b44-c1965d3fcee8
```

**⚠️ Region-specific endpoint required.** This portal is on HubSpot's
EU data center — the generic US endpoint (`api.hsforms.com`) will not
work. Use:

```
POST https://api-eu1.hsforms.com/submissions/v3/integration/submit/148924644/d11252b6-8442-4caa-8b44-c1965d3fcee8
```

Same client-side fetch pattern as the existing Contact form and Sales
Partner page — no API key required for this endpoint.

**Lead source tagging:** hidden field `partner_type` set to fixed value
`"Retailer"` on this form specifically — this is how submissions from
this page are distinguished from Sales Partner and Distributor within
the shared pipeline (see below).

**Status tracking:** free tier's single Deal pipeline was deliberately
NOT used for this (see Distributor spec / session note for full
reasoning — a Deal implies a transaction with a dollar value, which
doesn't fit "is this application being reviewed"). Instead, use the
custom `Application Status` property (dropdown: New / Reviewing / In
Discussion / Active) on the Contact record directly, updated manually
by the client as they work through submissions.

**Automated confirmation email:** considered, not built for this form.
Given the friction encountered setting this up for Sales Partner (see
session notes), and that inline form success message + personal
follow-up already covers this need, no automated workflow email is
built for Retailer at this time. Can be added later if desired — not a
blocker.

---

## Component Location

- Playground first: per `kickoff-spec.md` Step 4
- Production: `src/components/partners/RetailerPage.astro` (or
  route-based equivalent per current stack conventions)
- Requires client-side island for form submission (`client:load`)

---

## What Is Not In This Section

- No published wholesale pricing — request-gated, confirmed
- No login/account system — form-gated only, per confirmed client
  direction (this was the single item most needing explicit sign-off;
  now resolved)
- No Business Type dropdown — deliberate, see Section 5
- No location field on the form — deliberate, see Section 5
- No automated confirmation email — deliberate, see HubSpot Integration

---

## What Is Not Yet Built

- Component not yet created
- Final route/URL pending nav-IA confirmation
- Retailer Kit (PDF collateral) — tracked as a design/content
  deliverable, not code; not part of this build
