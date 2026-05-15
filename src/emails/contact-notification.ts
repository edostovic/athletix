/**
 * Builds an HTML email body for new contact form submissions.
 * Used by the /api/contact route to notify admins.
 */

interface ContactNotificationProps {
  name: string;
  email: string;
  phone?: string;
  interest?: string;
  message: string;
}

export function buildContactNotificationHtml({
  name,
  email,
  phone,
  interest,
  message,
}: ContactNotificationProps): string {
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
          <h1 style="color:#1a1a2e;font-size:24px;font-weight:700;letter-spacing:-0.02em;margin:0 0 16px">New Contact Form Submission</h1>
          <p style="color:#525f7f;font-size:14px;line-height:1.6;margin:0 0 24px">A new message has been submitted via the Athletix contact form.</p>

          <p style="color:#8898aa;font-size:12px;font-weight:600;text-transform:uppercase;margin:16px 0 2px">Name</p>
          <p style="color:#32325d;font-size:14px;margin:0 0 4px">${escapeHtml(name)}</p>

          <p style="color:#8898aa;font-size:12px;font-weight:600;text-transform:uppercase;margin:16px 0 2px">Email</p>
          <p style="color:#32325d;font-size:14px;margin:0 0 4px">${escapeHtml(email)}</p>

          ${
            phone
              ? `
          <p style="color:#8898aa;font-size:12px;font-weight:600;text-transform:uppercase;margin:16px 0 2px">Phone</p>
          <p style="color:#32325d;font-size:14px;margin:0 0 4px">${escapeHtml(phone)}</p>`
              : ""
          }

          ${
            interest
              ? `
          <p style="color:#8898aa;font-size:12px;font-weight:600;text-transform:uppercase;margin:16px 0 2px">Interest</p>
          <p style="color:#32325d;font-size:14px;margin:0 0 4px">${escapeHtml(interest)}</p>`
              : ""
          }

          <hr style="border:none;border-top:1px solid #e6e9ef;margin:24px 0" />

          <p style="color:#8898aa;font-size:12px;font-weight:600;text-transform:uppercase;margin:16px 0 2px">Message</p>
          <blockquote style="border-left:3px solid #ccc;padding-left:12px;margin:12px 0;color:#32325d;font-size:14px">${escapeHtml(message)}</blockquote>
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
