// Shared HubSpot Forms API submission utility for the three partner-program
// forms (Sales Partner, Retailer, Distributor). See
// src/features/partner-crm-integration.md for the full integration spec.

// reCAPTCHA is deliberately not used — HubSpot rejects raw API submissions
// outright when CAPTCHA is enabled on the form. Honeypot + time-trap is the
// confirmed replacement (see partner-crm-integration.md, Spam Protection).
const MIN_SUBMIT_SECONDS = 3;

export interface HubSpotField {
  name: string;
  value: string;
}

interface SubmitToHubSpotOptions {
  portalId: string;
  formGuid: string;
  fields: HubSpotField[];
  consentText: string;
}

export type SpamCheckResult = "honeypot" | "too-fast" | null;

// Honeypot means the field was filled — near-certainly a bot, safe to
// silently drop with no feedback. Too-fast can also catch a genuine human
// (autofill, repeat visitor moving quickly), so callers should surface an
// error for that case rather than dropping it silently.
export function checkSpamSubmission(
  honeypotValue: boolean,
  formRenderedAt: number,
): SpamCheckResult {
  if (honeypotValue) return "honeypot";
  const elapsedSeconds = (Date.now() - formRenderedAt) / 1000;
  if (elapsedSeconds < MIN_SUBMIT_SECONDS) return "too-fast";
  return null;
}

export async function submitToHubSpot({
  portalId,
  formGuid,
  fields,
  consentText,
}: SubmitToHubSpotOptions): Promise<{ success: boolean }> {
  const res = await fetch(
    `https://api-eu1.hsforms.com/submissions/v3/integration/submit/${portalId}/${formGuid}`,
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        fields,
        context: {
          pageUri: window.location.href,
          pageName: document.title,
        },
        legalConsentOptions: {
          consent: {
            consentToProcess: true,
            text: consentText,
          },
        },
      }),
    },
  );

  return { success: res.ok };
}

export function splitFullName(fullName: string): {
  firstname: string;
  lastname: string;
} {
  const parts = fullName.trim().split(/\s+/);
  return {
    firstname: parts[0] ?? "",
    lastname: parts.slice(1).join(" "),
  };
}
