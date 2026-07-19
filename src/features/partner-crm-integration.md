# Probell — Partner Program CRM Integration Spec

**Status: Ready for development**

---

## Overview

Shared integration pattern used by all three partner forms: Sales
Partner, Retailer, Distributor. All three submit into the same CRM via
the same technical pattern — defined once here, not per-page.

**CRM: HubSpot (free tier).** No backend, no database, no accounts —
every form POSTs directly to HubSpot's Forms API client-side, same
non-blocking fetch pattern as the existing Contact form, just pointed
at a different endpoint.

```
Form submit → fetch() → HubSpot Forms API → contact created/updated
                                            → tagged with partner_type
```

---

## ⚠️ Region-Specific Endpoint — Critical

This HubSpot portal is on the **EU data center** (`region: eu1`), not
the default US infrastructure. This is a genuinely separate system —
submitting to the generic US endpoint fails outright.

**Correct endpoint pattern:**
```
POST https://api-eu1.hsforms.com/submissions/v3/integration/submit/{portalId}/{formGuid}
```

**Do NOT use** `api.hsforms.com` or the older `/submit/v3/...` path.

```
Portal ID: 148924644
```

---

## Per-Form GUIDs

| Form | Form GUID | Full Endpoint |
|---|---|---|
| Sales Partner | `f2569cec-521e-41db-957f-88b3793241c4` | `https://api-eu1.hsforms.com/submissions/v3/integration/submit/148924644/f2569cec-521e-41db-957f-88b3793241c4` |
| Retailer | `d11252b6-8442-4caa-8b44-c1965d3fcee8` | `https://api-eu1.hsforms.com/submissions/v3/integration/submit/148924644/d11252b6-8442-4caa-8b44-c1965d3fcee8` |
| Distributor | `7aaa6c4f-7540-43d6-b396-a50a06fa257a` | `https://api-eu1.hsforms.com/submissions/v3/integration/submit/148924644/7aaa6c4f-7540-43d6-b396-a50a06fa257a` |

(Existing Contact form is unaffected — remains on Web3Forms, not
HubSpot.)

Build one shared submission utility (e.g. `src/lib/hubspot.ts` or
wherever shared logic lives in this project) that all three partner
pages call with their own Form GUID and field payload — don't
duplicate the fetch/endpoint/error-handling logic per page.

---

## Custom Properties

Free tier caps custom properties at 10 total. 7 in use, 3 available.

| Property (internal name) | Type | Used by |
|---|---|---|
| `business_name` | Single-line text | Retailer, Distributor |
| `region_interest` | Single-line text | Sales Partner |
| `event_interest` | Single-line text | Sales Partner |
| `inquiry_message` | Multi-line text | Sales Partner, Retailer |
| `how_heard` | Single-line text | Sales Partner |
| `partner_type` | Single-line text (hidden field, fixed value per form) | All three |
| `application_status` | Dropdown: New / Reviewing / In Discussion / Active | All three |

Standard properties (no cap impact): Email, Phone, Firstname/Lastname
— the latter populated via each form's single "Full Name" field, which
HubSpot splits automatically.

---

## Status Tracking

`application_status` custom property, set manually on each Contact by
the business owner as submissions are reviewed:

```
New → Reviewing → In Discussion → Active
```

**Deliberately not using HubSpot's Deal pipeline.** A Deal models a
transaction with a dollar value — not what's tracked here, which is
review status on a person. Free tier also allows only one Deal
pipeline; keeping it unused preserves it for when a real dollar-value
order eventually needs tracking. The property-based approach also
avoids extra admin overhead for both developer and client.

---

## Spam Protection

reCAPTCHA enabled on all three forms. Data privacy/consent fields
present on all three per CAN-SPAM/GDPR requirements.

---

## Automated Confirmation Emails

- **Sales Partner:** built, sends from a temporary placeholder address
  — swap to `info@probellnutrition.com` once confirmed working.
- **Retailer:** not built — inline success message + personal
  follow-up sufficient.
- **Distributor:** deliberately not built — page's positioning states
  relationships are built through personal conversation, not
  automation.

---

## Pending Items

- `info@probellnutrition.com` — not yet confirmed live. Swap the Sales
  Partner confirmation email's From address once confirmed.
- Confirm the working address is `@probellnutrition.com`, not
  `@probellnutrition.se`.
- Physical address in email footer — confirmed (Probell Nutrition, 8
  The Green, Dover, DE 19901, USA), satisfies CAN-SPAM.

---

## Explicitly Deferred

- Self-serve retailer accounts / login
- Gated wholesale pricing dashboard (replaced by request form → manual
  price list send)
- Any custom backend or database
- Additional automated email sequences beyond Sales Partner
