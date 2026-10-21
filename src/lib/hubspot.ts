// Shared HubSpot Forms API submission utility for the three partner-program
// forms (Sales Partner, Retailer, Distributor). The portal is on HubSpot's EU
// data centre, so only the api-eu1 endpoint works.
//
// Portal-side decisions (not visible in code):
// - Review status is the manual `application_status` contact property
//   (New → Reviewing → In Discussion → Active), not a Deal pipeline: Deals
//   model dollar value, and the free tier's single pipeline is kept for real
//   orders later.
// - Free tier caps custom properties at 10; 7 are in use.
// - Only Sales Partner sends an automated confirmation email. Distributor
//   deliberately has none (its page promises a personal conversation).

// reCAPTCHA is deliberately not used — HubSpot rejects raw API submissions
// outright when CAPTCHA is enabled on the form, so it must stay OFF on all
// three HubSpot forms. Honeypot + time-trap is the confirmed replacement.
// If spam becomes a real problem, the fix is standalone reCAPTCHA v3 with
// server-side verification, which means adding a serverless function.
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
