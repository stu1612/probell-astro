# Probell Nutrition — Contact Spec

**Version 2 · 17 May 2026**
**Status: Not started**

---

## Goal

B2B contact form. Two column layout — brand statement left, form right.
Submits directly to client email via Web3Forms — free, no backend required,
works on static hosting. No consumer waitlist language — business enquiry only.

---

## Reference

`docs/page-structure.md` — Section 10: Contact

---

## Design Tokens

- Background: `var(--color-surface)`
- Eyebrow: `.label-text--red`
- Headline: `var(--font-display)`, `var(--text-section)`, `var(--color-white)`
- Sub-line: `var(--font-body)`, `var(--text-body)`, `var(--color-grey)`
- Form inputs: `.form-input`, `.form-label`, `.form-group` from globals.css
- CTA: `.btn-primary`
- id: `contact`

---

## Pre-Build Confirmation Required

Before building this section confirm with developer:
- [ ] Web3Forms access key generated — web3forms.com
- [ ] Client email address confirmed — Web3Forms sends submissions here
- [ ] Access key added to project — store as `WEB3FORMS_KEY` in `.env`

---

## Web3Forms Setup

Web3Forms is free, requires no backend, and works on any static host
including one.com.

**How it works:**
- Form POSTs to `https://api.web3forms.com/submit`
- Access key is a hidden input field in the form
- Web3Forms forwards the submission to the client email
- No server, no database, no paid plan required

**Getting the access key:**
1. Go to web3forms.com
2. Enter the client email address
3. Web3Forms sends the access key to that email
4. Confirm and copy the key
5. Add to `.env` as `WEB3FORMS_KEY=your-key-here`

**Environment variable in Astro:**
```
// Access in component frontmatter:
const web3formsKey = import.meta.env.WEB3FORMS_KEY;
```

**Important:** Never hardcode the access key in the component.
Always use the environment variable.

---

## Tasks

### 1. Create Contact.astro

File: `src/components/Contact.astro`
Requires `client:load` for form submission handling.

### 2. Two column layout

- Left column: brand statement content
- Right column: contact form
- Single column on mobile — content top, form below
- Aligned items centered vertically on desktop

### 3. Left column — brand statement

**Eyebrow:** `"Partner with Probell"` — `.label-text--red`

**Headline:**
```
"Stock Probell.
Be First."
```
Display font, section size, white, uppercase.

**Sub-line:**
```
"Whether you're a gym, distributor, or retailer —
we want to hear from you."
```
Body font, body size, grey.

### 4. Right column — form

Five fields. All use globals.css form classes.

```
Field 1: Full Name       — text, required
Field 2: Business Name   — text, required
Field 3: Email Address   — email, required
Field 4: I am a...       — select, required
          Options: Gym / Distributor / Retailer / Other
Field 5: Message         — textarea, optional
          Placeholder: "Tell us about your business and
                        how you'd like to work with Probell."
```

### 5. Web3Forms hidden fields

Required hidden inputs inside the form:

```html
<!-- Access key -->
<input type="hidden" name="access_key" value={web3formsKey} />

<!-- Custom subject line in client inbox -->
<input type="hidden" name="subject" value="New Probell Partnership Enquiry" />

<!-- Redirect to same page after submission — handled by JS instead -->
<input type="hidden" name="redirect" value="false" />

<!-- Honeypot — spam protection -->
<input type="checkbox" name="botcheck" style="display: none;" />
```

### 6. Form action and method

```html
<form action="https://api.web3forms.com/submit" method="POST">
```

Form submits via fetch — not a full page reload. JS intercepts
the submit event, POSTs via fetch, handles success/error states.

### 7. Submit button

Text: `"Get in Touch"` — `.btn-primary`, full width on mobile.

### 8. Success and error states

**Success:** Replace form with inline message.
```
"Thanks for reaching out. We'll be in touch soon."
```
Color: `var(--color-gold)`, `.label-text` style.

**Error:** Show inline error message below submit button.
```
"Something went wrong. Please try again or email us directly."
```
Color: `var(--color-red)`, `.label-text` style.

Both states toggled via JS — no page reload.

### 9. Spam protection

Two layers of spam protection:

**hCaptcha — Web3Forms free plan supported**
Add Web3Forms client script to component head:
```html
<script src="https://web3forms.com/client/script.js" async defer></script>
```
Add hCaptcha div inside the form, above the submit button:
```html
<div class="h-captcha" data-captcha="true"></div>
```
Web3Forms loads hCaptcha automatically — no separate hCaptcha account needed.

Note: hCaptcha widget renders with its own styling. Test on localhost
and adjust wrapper CSS if it clashes with the dark form aesthetic.

**Honeypot field**
The hidden honeypot checkbox remains as a secondary layer.

---

## Confirmed Working ✓

- [ ] `.env` file created with `WEB3FORMS_KEY`
- [ ] Access key not hardcoded — uses environment variable
- [ ] Two column layout — content left, form right
- [ ] Eyebrow correct — red label style
- [ ] Headline correct copy and style
- [ ] Sub-line correct copy and color
- [ ] All five fields render with correct labels and placeholders
- [ ] Select dropdown has correct options
- [ ] Hidden fields present — access key, subject, redirect, honeypot
- [ ] Form submits via fetch — no page reload
- [ ] Success message displays on submission
- [ ] Error message displays on failure
- [ ] Client email receives test submission — confirm before launch
- [ ] hCaptcha renders correctly in form
- [ ] hCaptcha visible and functional on localhost
- [ ] hCaptcha styling sits cleanly within dark form aesthetic
- [ ] Mobile: single column, inputs full width
- [ ] `npm run build` passes

---

## What Is Not In This Spec

- No Formspree — replaced with Web3Forms
- No consumer waitlist language
- No newsletter signup
- No GDPR consent checkbox — form goes direct to client email
- No database storage of submissions
- No file upload
- No CAPTCHA alternative — hCaptcha via Web3Forms is the only option
