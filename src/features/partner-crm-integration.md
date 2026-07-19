# Probell — Partner Program CRM Integration Spec

**Version 1 · 18 July 2026**
**Status: Ready for development**

---

## Overview

This document defines the shared integration pattern used by every
partner-facing form on the site: Sales Partner application, Retailer
enquiry, Distributor enquiry. All three follow the same technical
pattern and submit into the same CRM. This spec exists so the pattern
is defined once, not per-page.

**CRM: HubSpot (free tier)**

Chosen over Mailchimp because the client's stated need — track
when/where a contact was met, current status, next follow-up — is
closer to a sales pipeline than an email list, and HubSpot's contact
and property model fits that more directly.

Chosen over building a custom CRM because the lead volume at this stage
(one expo, early organic inbound) does not justify the engineering or
maintenance cost. Revisit only if free-tier limits are hit or the
business needs self-serve retailer accounts — see "Trigger for Revisit"
below.

---

## Architecture

No backend, no database, no accounts. The static-site constraint is
preserved. Every form on the site POSTs directly to HubSpot's Forms API
client-side — the same non-blocking fetch pattern already used in
`Contact.astro` (no page reload, inline success/error state), just
pointed at a different endpoint.

```
Form submit → fetch() → HubSpot Forms API → contact created/updated
                                            → tagged with partner_type
```

---

## ⚠️ Region-Specific Endpoint — Critical

This HubSpot portal is provisioned on the **EU data center**
(`region: eu1`), not the default US infrastructure. This is a
genuinely separate system, not an interchangeable URL — EU-region
accounts have their own API infrastructure for data-residency reasons.
Submitting to the generic US endpoint will fail outright.

**Correct endpoint pattern:**
```
POST https://api-eu1.hsforms.com/submissions/v3/integration/submit/{portalId}/{formGuid}
```

**Do NOT use** `api.hsforms.com` (US default) or the older
`/submit/v3/...` path — both fail for this portal.

```
Portal ID: 148924644
```

---

## Per-Form Requirements — Confirmed

| Form | HubSpot Form GUID | Full Endpoint |
|---|---|---|
| Sales Partner application | `f2569cec-521e-41db-957f-88b3793241c4` | `https://api-eu1.hsforms.com/submissions/v3/integration/submit/148924644/f2569cec-521e-41db-957f-88b3793241c4` |
| Retailer enquiry | `d11252b6-8442-4caa-8b44-c1965d3fcee8` | `https://api-eu1.hsforms.com/submissions/v3/integration/submit/148924644/d11252b6-8442-4caa-8b44-c1965d3fcee8` |
| Distributor enquiry | `7aaa6c4f-7540-43d6-b396-a50a06fa257a` | `https://api-eu1.hsforms.com/submissions/v3/integration/submit/148924644/7aaa6c4f-7540-43d6-b396-a50a06fa257a` |

(Existing Contact form is unaffected — remains on Web3Forms, not
HubSpot. Not in scope of this spec.)

Site code should take each Form GUID as an environment variable per
form (`HUBSPOT_SALES_PARTNER_FORM_ID`, etc.), same pattern as
`WEB3FORMS_KEY`.

---

## Custom Properties

Free tier caps custom properties at 10 total, shared across
Contacts/Companies/Deals. 7 are in use, 3 remain available.

| Property (internal name) | Type | Used by |
|---|---|---|
| `business_name` | Single-line text | Retailer, Distributor |
| `region_interest` | Single-line text | Sales Partner |
| `event_interest` | Single-line text | Sales Partner |
| `inquiry_message` | Multi-line text | Sales Partner ("Why Probell?"), Retailer ("Message") |
| `how_heard` | Single-line text | Sales Partner |
| `partner_type` | Single-line text (hidden field, fixed value per form) | All three — see below |
| `application_status` | Dropdown: New / Reviewing / In Discussion / Active | All three |

**Standard properties used (do not count against the custom-property
cap):** Email, Phone, Firstname/Lastname (populated via each form's
single "Full Name" field, which HubSpot splits automatically).

**`partner_type` values, set as a hidden field fixed per form:**
```
Sales Partner form → "Sales Partner"
Retailer form      → "Retailer"
Distributor form   → "Distributor"
```
This is what distinguishes submission source without any custom
site-side logic — HubSpot's hidden-field mechanism handles it
natively.

---

## Status Tracking

`application_status` custom property, dropdown, set manually on each
Contact record by the business owner as they review submissions.

```
New → Reviewing → In Discussion → Active
```

**Deliberately not using HubSpot's Deal pipeline for this.** A "Deal"
models a specific transaction with a dollar value and expected close
date — that's not what's being tracked here. What's needed is "where
is this application in our review process," a status on the person,
not a transaction. Free tier also only allows one Deal pipeline total;
keeping it unused preserves it for when a real dollar-value order or
distribution contract eventually needs tracking. The simpler
property-based approach also avoids extra admin/learning overhead for
both developer and client, and keeps the CRM setup easy to maintain.

---

## Spam Protection

reCAPTCHA is enabled on all three forms. Data privacy/consent fields
are also present on all three forms per CAN-SPAM/GDPR requirements.

---

## Automated Confirmation Emails

- **Sales Partner:** built. Sends from a temporary placeholder address
  (`boldersonstu@gmail.com`) — **must be swapped to
  `info@probellnutrition.com` once that domain email is confirmed
  working** (see Pending Items).
- **Retailer:** not built — inline form success message + personal
  follow-up considered sufficient for now.
- **Distributor:** deliberately not built — this page's positioning
  explicitly states relationships are built through personal
  conversation, not automation; an automated email would contradict
  that promise directly.

**Known HubSpot quirk worth knowing if more automated emails are built
later:** the "Automated email" dropdown inside a workflow's Send Email
action only shows emails created *as automated type* from the start.
A regular email built through the standalone Marketing Email tool will
not appear as selectable there, even once fully saved and published.

---

## Pending Items — Not Yet Resolved

- **`info@probellnutrition.com`** — not yet confirmed as live/working.
  Swap the Sales Partner confirmation email's From address once
  confirmed.
- **Domain check:** explicitly confirm the working address is
  `@probellnutrition.com`, not `@probellnutrition.se`.
- **Physical address in email footer:** confirmed and entered (Probell
  Nutrition, 8 The Green, Dover, DE 19901, USA) — satisfies CAN-SPAM.
  No further action unless the business address changes.

---

## Explicitly Deferred — Not in This Phase

- Self-serve retailer accounts / login
- Gated wholesale pricing dashboard (replaced by: enquiry form → client
  manually sends price list — see `retailer-program-page.md`)
- Any custom backend or database
- Additional automated email sequences beyond Sales Partner (HubSpot
  workflows can do this later — client configuration, not a build task)

---

## Trigger for Revisit

Reconsider this architecture only if:
- HubSpot free-tier active contact limit is hit, or
- The custom-property cap (10 total, 7 currently used) is reached and
  a genuinely new field is needed, or
- The business has confirmed retailers at volume requiring actual
  self-serve ordering/login, not just enquiry-based pricing

Until then, this pattern covers every partner-program need without new
infrastructure.
