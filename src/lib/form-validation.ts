// Shared inline validation for the three partner forms (Sales Partner,
// Retailer, Distributor). The forms keep `novalidate` so the browser's
// popups never show; each field's message goes in the <p> its
// aria-describedby points at. Errors appear on the first submit attempt
// and then update live as the person fixes them.

export type FieldRule = "fullName" | "phone" | "message";

type FieldElement = HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement;

const MIN_MESSAGE_LENGTH = 20;

const MESSAGES = {
  required: "Please fill in this field.",
  consent: "Please tick the box to continue.",
  email: "Please enter a valid email address.",
  phone: "Please enter a 10-digit US phone number.",
  fullName: "Please enter your first and last name.",
  message: `Please tell us a little more (${MIN_MESSAGE_LENGTH}+ characters).`,
};

// Allows spaces, dashes, dots, brackets and a leading +1.
function isUsPhone(value: string): boolean {
  const digits = value.replace(/[\s\-.()+]/g, "");
  if (!/^\d+$/.test(digits)) return false;
  return digits.length === 10 || (digits.length === 11 && digits.startsWith("1"));
}

function getMessage(el: FieldElement): string | null {
  if (el instanceof HTMLInputElement && el.type === "checkbox") {
    return el.required && !el.checked ? MESSAGES.consent : null;
  }

  const value = el.value.trim();
  if (!value) return el.required ? MESSAGES.required : null;

  if (el instanceof HTMLInputElement && el.type === "email") {
    // The browser's check accepts "name@host"; a lead needs a real domain.
    const domain = value.split("@")[1] ?? "";
    if (el.validity.typeMismatch || !domain.includes(".")) return MESSAGES.email;
  }

  switch (el.dataset.rule as FieldRule | undefined) {
    case "phone":
      return isUsPhone(value) ? null : MESSAGES.phone;
    case "fullName":
      return value.split(/\s+/).length >= 2 ? null : MESSAGES.fullName;
    case "message":
      return value.length >= MIN_MESSAGE_LENGTH ? null : MESSAGES.message;
    default:
      return null;
  }
}

// Only fields with an error <p> are validated, which skips the honeypot.
function getFields(form: HTMLFormElement): FieldElement[] {
  return Array.from(
    form.querySelectorAll<FieldElement>("input, textarea, select"),
  ).filter((el) => el.hasAttribute("aria-describedby"));
}

export function validateField(el: FieldElement): boolean {
  const message = getMessage(el);
  const errorId = el.getAttribute("aria-describedby");
  const errorEl = errorId ? document.getElementById(errorId) : null;

  if (message) {
    el.setAttribute("aria-invalid", "true");
  } else {
    el.removeAttribute("aria-invalid");
  }
  if (errorEl) {
    errorEl.textContent = message ?? "";
    errorEl.hidden = !message;
  }
  return !message;
}

// Checks every field and moves focus to the first invalid one.
export function validateForm(form: HTMLFormElement): boolean {
  const invalid = getFields(form).filter((el) => !validateField(el));
  invalid[0]?.focus();
  return invalid.length === 0;
}

// Call after a failed submit. Safe to call more than once.
export function enableLiveValidation(form: HTMLFormElement): void {
  if (form.dataset.liveValidation) return;
  form.dataset.liveValidation = "true";

  const revalidate = (e: Event) => {
    const el = e.target as FieldElement;
    if (el.hasAttribute("aria-describedby")) validateField(el);
  };
  form.addEventListener("input", revalidate);
  form.addEventListener("change", revalidate);
}
