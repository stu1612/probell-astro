# Probell — Partner Program CRM Integration Spec

**Version 1 · 9 July 2026**
**Status: Ready for development**

---

## Overview

This document defines the shared integration pattern used by every partner-facing
form on the site: Sales Partner application, Retailer enquiry, Distributor
enquiry. All three follow the same technical pattern and submit into the same
CRM. This spec exists so the pattern is defined once, not per-page.

**CRM: HubSpot (free tier)**

Chosen over Mailchimp because the client's stated need — track when/where a
contact was met, current pipeline status (new lead / follow-up / quotation
sent / customer), next follow-up date — is a sales pipeline, not an email
list. HubSpot's free tier has native deal-stage tracking that matches this
requirement directly. Mailchimp does not.

Chosen over building a custom CRM because the lead volume at this stage
(one expo, early organic inbound) does not justify the engineering or
maintenance cost. Revisit only if free-tier contact limits are hit or the
business needs self-serve retailer accounts — see "Trigger for revisit"
below.

---

## Architecture

No backend, no database, no accounts. The static-site constraint is
preserved. Every form on the site POSTs directly to HubSpot's Forms API
client-side — the same non-blocking fetch pattern already used in
`Contact.astro` (no page reload, inline success/error state), just pointed
at a different endpoint.

```
Form submit → fetch() → HubSpot Forms API → contact created in HubSpot
                                            → tagged with source form
```

Each form has its own **HubSpot Form GUID**, which is how submissions are
distinguished by source without any custom logic on the site side. HubSpot
handles this natively — no need to pass a manual "source" field.

---

## Per-form requirements

| Form | HubSpot Form GUID | Pipeline stage on creation |
|---|---|---|
| Contact (existing) | `TBD — client to create in HubSpot` | New Lead |
| Sales Partner application | `TBD` | New Lead — Sales Partner pipeline |
| Retailer enquiry | `TBD` | New Lead — Retailer pipeline |
| Distributor enquiry | `TBD` | New Lead — Distributor pipeline |

GUIDs are generated when the client creates each form inside HubSpot. This
is a **client setup task**, not a dev task — flag it back to them as a
prerequisite before these pages can go live. Site code takes the GUID as
an environment variable per form (`HUBSPOT_SALES_PARTNER_FORM_ID`, etc.),
same pattern as `WEB3FORMS_KEY`.

---

## Client setup checklist (for the client, not Claude Code)

- [ ] Create free HubSpot account
- [ ] Define deal pipeline stages: New Lead → Follow-up → Quotation Sent → Customer
- [ ] Create one HubSpot form per site form above, note each Form GUID
- [ ] Confirm who on the client side monitors incoming leads and follow-up dates

---

## Spam protection

HubSpot Forms API has native spam filtering. hCaptcha (used on the existing
Contact form) is not required for the new forms unless spam becomes a
problem in practice — don't add complexity preemptively.

---

## Explicitly deferred — not in this phase

- Self-serve retailer accounts / login
- Gated wholesale pricing dashboard (replaced by: enquiry form → client
  manually sends price list — see `retailer-program-page.md`)
- Any custom backend or database
- Automated email sequences (HubSpot workflows can do this later — client
  configuration, not a build task)

---

## Trigger for revisit

Reconsider this architecture only if:
- HubSpot free-tier active contact limit is hit, or
- The business has confirmed retailers at volume requiring actual self-serve
  ordering/login, not just enquiry-based pricing

Until then, this pattern covers every partner-program need in the vision
document without new infrastructure.
