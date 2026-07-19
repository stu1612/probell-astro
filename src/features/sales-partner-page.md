# Probell — Sales Partner Page Spec

**Version 2 · 10 July 2026**
**Status: Ready for development**
**Supersedes:** earlier draft based on client's Website Vision doc. This
version reflects confirmed client feedback (commission approach, no
Investors/Media page) plus a deliberate positioning decision made in
session — see "Core Positioning" below.

---

## Core Positioning

The applicant pool for this page is unknown and mixed — could be a
gym-floor trainer, an independent sales rep, or someone with zero sales
background who simply believes in the product. Rather than write copy
that guesses at one persona, the page qualifies on **belief and vision,
not credentials.** This is the single filtering criterion, stated
directly rather than implied.

This is a deliberate brand reinforcement, not a compromise for lack of a
sharper persona: Probell is positioned throughout `brand.md` as
"earned, not aspirational" — this page extends that principle to who
gets to represent the brand, not just who buys it.

Practical implication: no persona-specific language, no assumed sales
background, no resume-shaped qualification. The application form
mirrors this — see Section 6.

---

## Position in Page

New route: `/partners/sales` (final URL pending nav/IA confirmation —
see `page-structure.md` deviation note on 4-audience nav).

---

## 1. Hero / Intro

**Eyebrow:** `"Sales Partner Program"` — `.label-text--red`

**Headline (draft, swap freely):**
```
"We're Not Looking for Salespeople."
```
or
```
"Believe First. Sell Second."
```

**Sub-line:**
```
"Probell partners aren't chosen for experience — they're chosen for 
conviction. If you already live this, we want to hear from you."
```

- Font/color per `design.md` section headline rules
- No CTA in hero — save the single CTA for the form section

---

## 2. Why Probell

3–4 stat/value callouts, reusing the `BuiltForStrength` stat-chip visual
pattern. Content must be honest to current stage — no invented traction
numbers, no implied established sales network.

Draft content (confirm/replace):
```
- US-made, no compromise formula
- Kettlebell-shaped container — the product is the conversation starter
- Ground-floor opportunity — early partners shape the network
- Built for people who already show up
```

---

## 3. How It Works

New section, not in the original client vision doc — added to remove
the "black box" feeling of applying to an unproven program. Directly
operationalizes the client's confirmed commission-copy approach.

```
1. Apply — a short form, a few minutes
2. We review — every application read personally, including any 
   region or event opportunities you've flagged
3. Conversation — commission structure and territory discussed 1:1
4. Onboarding — [materials/kit TBD]
```

Visual treatment: simple 4-step horizontal list on desktop, stacked on
mobile. No icons required — number + short label is enough, consistent
with the site's "no decoration that isn't earning its place" principle.

---

## 4. Territories — removed, folded into the form (session decision)

A standalone Territories section is no longer built. Rather than
Probell stating where it currently operates, the application form asks
the applicant directly where and at what events they'd like to sell —
see Section 6. This is a deliberate reversal from the earlier draft:

- It's more honest to the brand's current stage — no established
  territory to claim
- It doubles as real data collection, directly serving the CRM's
  "areas of interest" tracking goal from the original vision doc
- It surfaces opportunities the client may not know about — a regional
  expo, a local event, a gym relationship — rather than only working
  from a list Probell already has in mind

If a short framing line is wanted near the form to set this up, use
something like:

```
"We're building our partner network from the ground up. Tell us where 
you want to sell — you could be the first Probell partner in your area."
```

---

## 5. FAQ (new — added this session)

Reuse the existing FAQ accordion component exactly (see
`faq.md` / Completed Features log) — same interaction pattern, same
visual treatment. 3–4 questions addressing likely hesitation points
regardless of applicant background:

```
- Is there a cost to apply?
- Do I need prior sales experience?
- What territories are currently available?
- What happens after I apply?
```

Answers should reinforce the belief-first positioning, not just answer
logistically — e.g. "No — we're not looking for a resume, we're looking
for someone who already believes in what we're building."

---

## 6. Application Form

Fields:

```
Full Name              — text, required
Email                  — email, required
Phone                  — text, optional
Where do you want to sell? — text, required
                        Placeholder: "City, state, or region"
Any event you'd like to sell at? — text, optional
                        Placeholder: "Expo, competition, gym event — 
                        tell us about an opportunity you've spotted"
Why Probell?            — textarea, required
                        Placeholder: "Tell us what draws you to Probell — 
                        experience helps, but it's not the requirement."
How did you hear about us — text, optional
```

**Deliberately no "relevant experience" field, no resume upload, no
sales-background checkbox list.** The "Why Probell?" field is the
single qualifying input — consistent with the belief-first positioning.
This is a considered omission, not a gap — do not add experience/resume
fields without a documented reason to reverse this decision.

**Region and event fields are intentionally free text, not dropdowns.**
A dropdown would imply Probell has a fixed, curated list of valid
territories or events — it doesn't yet. Free text also captures
opportunities the client hasn't thought to list (a specific gym chain,
a regional competition, a local event) rather than constraining
applicants to a predefined set. Both fields map to CRM properties
("areas of interest" / "where we met") per the original vision doc's
tracking goals.

---

## Form Field Reference — Required vs Optional (session note, 18 July 2026)

| Field label | Maps to | Type | Required? |
|---|---|---|---|
| Full Name | Firstname/Lastname (standard) | Text | **Required** |
| Email | Email (standard) | Email | **Required** |
| Phone | Phone (standard) | Text | Optional |
| Where do you want to sell? | Region Interest (custom) | Text | **Required** |
| Any event you'd like to sell at? | Event Interest (custom) | Text | Optional |
| Why Probell? | Inquiry Message (custom) | Multi-line text | **Required** |
| How did you hear about us? | How Heard (custom) | Text | Optional |
| *(hidden, not user-facing)* Partner Type | Partner Type (custom) | Text, fixed value "Sales Partner" | N/A — hidden field |

## HubSpot Integration

Same client-side pattern as existing Contact form (Web3Forms) and per
`partner-crm-integration.md`, using HubSpot's public Forms API — no API
key required for this endpoint:

**⚠️ Region-specific endpoint required.** This HubSpot portal is
provisioned on HubSpot's EU data center (portal region: `eu1`), not the
default US infrastructure. EU-region accounts have entirely separate
API infrastructure — submitting to the generic US endpoint will fail,
since that server has no record of an EU-hosted portal. Use:

```
POST https://api-eu1.hsforms.com/submissions/v3/integration/submit/{portalId}/{formGuid}
```

NOT `api.hsforms.com` (US default — will not work for this portal).

Confirmed values for this project:
- Portal ID: `148924644`
- Sales Partner Form GUID: `f2569cec-521e-41db-957f-88b3793241c4`
- Full endpoint: `https://api-eu1.hsforms.com/submissions/v3/integration/submit/148924644/f2569cec-521e-41db-957f-88b3793241c4`

Retailer and Distributor forms will use the same `api-eu1.hsforms.com`
base (region is portal-level, not per-form) once their own form GUIDs
are created.

Body: `fields` array matching form inputs above, plus HubSpot's required
`context` object (page URI, page name).

**Lead source tagging:** include a hidden field, `lead_source: "Sales 
Partner Page"`, mapped to a custom HubSpot contact property. Populates
automatically on every submission — this is how "where we met" tracking
(per the original CRM vision doc) gets solved without manual tagging.

**Pipeline stages** (manual, inside HubSpot — not automated):
```
New Lead → Reviewing → Commission Discussion → Active Partner
```

Success/error UI states: match existing Contact component pattern
exactly (inline success message replaces form, error shown inline).

---

## Component Location

- Playground first: per `kickoff-spec.md` Step 4
- Production: `src/components/partners/SalesPartnerPage.astro` (or
  route-based equivalent per current stack conventions)
- Requires client-side island for form submission (`client:load`),
  same as existing Contact component

---

## What Is Not In This Section

- No standalone Territories section or map — replaced by form fields,
  see Section 4
- No published commission percentages or payout terms
- No "relevant experience" / resume-style form fields — deliberate, see
  Section 6
- No dropdown/predefined list for region or event — free text only,
  deliberate, see Section 6
- No Arnold Expo reference — dropped per session decision (unverified
  date)

---

## What Is Not Yet Built

- Component not yet created
- Final route/URL pending nav-IA confirmation
- Info Sheet PDF download — still cut from v1 entirely (depends on
  commission data existing in written form; no dead download link)
- Onboarding materials/kit content (Step 4 of "How It Works") — content
  TBD, placeholder label acceptable at build time
