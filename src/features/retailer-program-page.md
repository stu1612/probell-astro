# Probell — Retailer Program Page Spec

**Status: Ready for development**
**Route:** `src/pages/partners/retail.astro` (already scaffolded)

---

## Core Positioning

A Retailer sells Probell directly to the end consumer (a gym,
supplement store, studio) — single or few locations, buys wholesale,
sells retail. Distinct from a Distributor, who sells to other
businesses, not consumers.

**Confirmed client direction:** wholesale pricing is not published —
shared directly with approved retailers after a request. The page's job
is to make that withholding feel like normal, professional B2B
practice, not evasiveness.

Given Probell is early-stage without an established retail network, the
honest framing is: **small scale is a strength, not a weakness.** A
local gym owner isn't looking for the biggest supplier — they're
looking for someone who won't waste their time. Tone: straight answers,
no hassle, competent handling of logistics — not a hype pitch.

Primary hesitations, in likely order: price/margin (can't be answered
directly, must be offset by trust elsewhere), logistics, fit.

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

---

## 2. Why Stock Probell

Short, not a heavy stat-chip block — avoid overclaiming scale the brand
doesn't have yet:

```
- The kettlebell-shaped container — genuinely distinct on a shelf or 
  gym floor, a conversation starter with members/customers
- US-made, no-compromise formula
- Direct, personal ordering relationship — no call center, no runaround
```

---

## 3. Pricing — Request, Not Publish

```
"Wholesale pricing is shared directly with approved retailers. Submit 
a request below and we'll get back to you personally — no account, 
no login, no waiting on hold."
```

---

## 4. How It Works

```
1. Submit your request — a short form, a couple minutes
2. We review — every request read personally
3. Pricing shared directly — wholesale pricing and next steps sent 
   to you
4. Order — straightforward reordering once you're set up
```

---

## 5. Request Form

| Field label | Maps to | Type | Required? |
|---|---|---|---|
| Business Name | Business Name (custom) | Text | **Required** |
| Your Name | Firstname/Lastname (standard, via Full Name field) | Text | **Required** |
| Email | Email (standard) | Email | **Required** |
| Phone | Phone (standard) | Text | Optional |
| Message — "Tell us about your business and what you're looking for" | Inquiry Message (custom) | Multi-line text | **Required** |
| *(hidden)* Partner Type | Partner Type (custom), fixed value "Retailer" | Text | N/A |

**No Business Type dropdown.** Considered and rejected — a dropdown
forces applicants into an ill-fitting category; the open Message field
captures the real answer in their own words.

**No location field.** Location/logistics specifics belong in the
personal follow-up conversation, not the initial form.

---

## HubSpot Integration

See `src/docs/partner-crm-integration.md` for the full shared pattern.
This page's specifics:

```
Form GUID: d11252b6-8442-4caa-8b44-c1965d3fcee8
Endpoint:  https://api-eu1.hsforms.com/submissions/v3/integration/submit/148924644/d11252b6-8442-4caa-8b44-c1965d3fcee8
Hidden field: partner_type = "Retailer"
```

**Automated confirmation email:** not built. Inline form success
message + personal follow-up considered sufficient for now.

---

## What Is Not In This Page

- No published wholesale pricing — request-gated, confirmed with client
- No login/account system — form-gated only
- No Business Type dropdown, no location field — deliberate, see
  Section 5
- No automated confirmation email

---

## What Is Not Yet Built

- Retailer Kit (PDF collateral) — design/content deliverable, not part
  of this build
