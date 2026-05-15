/**
 * Builds an HTML email body for trial booking confirmations.
 * Used by the /api/trial route to confirm bookings with users.
 */

interface TrialConfirmationProps {
  name: string;
  email: string;
  phone: string;
  preferredDate: string;
  preferredTime?: string;
}

export function buildTrialConfirmationHtml({
  name,
  email,
  phone,
  preferredDate,
  preferredTime,
}: TrialConfirmationProps): string {
  return `
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
  </head>
  <body style="background-color:#f6f9fc;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif;padding:20px 0;margin:0">
    <table align="center" style="background-color:#ffffff;border:1px solid #e6e9ef;border-radius:8px;padding:32px;max-width:560px;width:100%">
      <tr>
        <td>
          <h1 style="color:#1a1a2e;font-size:24px;font-weight:700;letter-spacing:-0.02em;margin:0 0 16px">Thanks for booking, ${escapeHtml(name)}!</h1>
          <p style="color:#525f7f;font-size:14px;line-height:1.6;margin:0 0 24px">We've received your free trial request. Here's a summary of your booking:</p>

          <p style="color:#8898aa;font-size:12px;font-weight:600;text-transform:uppercase;margin:16px 0 2px">Name</p>
          <p style="color:#32325d;font-size:14px;margin:0 0 4px">${escapeHtml(name)}</p>

          <p style="color:#8898aa;font-size:12px;font-weight:600;text-transform:uppercase;margin:16px 0 2px">Email</p>
          <p style="color:#32325d;font-size:14px;margin:0 0 4px">${escapeHtml(email)}</p>

          <p style="color:#8898aa;font-size:12px;font-weight:600;text-transform:uppercase;margin:16px 0 2px">Phone</p>
          <p style="color:#32325d;font-size:14px;margin:0 0 4px">${escapeHtml(phone)}</p>

          <p style="color:#8898aa;font-size:12px;font-weight:600;text-transform:uppercase;margin:16px 0 2px">Preferred Date</p>
          <p style="color:#32325d;font-size:14px;margin:0 0 4px">${escapeHtml(preferredDate)}</p>

          ${
            preferredTime
              ? `
          <p style="color:#8898aa;font-size:12px;font-weight:600;text-transform:uppercase;margin:16px 0 2px">Preferred Time</p>
          <p style="color:#32325d;font-size:14px;margin:0 0 4px">${escapeHtml(preferredTime)}</p>`
              : ""
          }

          <hr style="border:none;border-top:1px solid #e6e9ef;margin:24px 0" />

          <p style="color:#525f7f;font-size:14px;line-height:1.6">Our team will reach out to confirm your appointment shortly. If you have any questions, give us a call at <strong>+1 (555) 123-4567</strong>.</p>

          <p style="color:#525f7f;font-size:14px;line-height:1.6">See you soon!<br /><strong>— The Athletix Team</strong></p>
        </td>
      </tr>
    </table>
  </body>
</html>`.trim();
}

function escapeHtml(text: string): string {
  return text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}
