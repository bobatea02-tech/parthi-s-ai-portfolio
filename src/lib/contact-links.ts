import { CONTACT_EMAIL } from "@/lib/portfolio-data";

// Use the account-agnostic compose endpoint. /mail/u/0/ returns a 403
// when the visitor isn't signed into the first Google account, so we
// route through /mail/?view=cm which lets Google pick the active account
// (or prompt for sign-in) without erroring.
export function gmailComposeUrl(subject = "Portfolio inquiry", body = "") {
  const params = new URLSearchParams({
    view: "cm",
    fs: "1",
    tf: "1",
    to: CONTACT_EMAIL,
    su: subject,
    body,
  });

  return `https://mail.google.com/mail/?${params.toString()}`;
}

export function mailtoUrl(subject = "Portfolio inquiry", body = "") {
  const params = new URLSearchParams({ subject, body });
  return `mailto:${CONTACT_EMAIL}?${params.toString()}`;
}

// Opens Gmail compose in a new tab. Falls back to mailto: if the popup
// is blocked so the user always has a working path to send the message.
export function openGmailCompose(subject: string, body: string) {
  const gmail = gmailComposeUrl(subject, body);
  const win = window.open(gmail, "_blank", "noopener,noreferrer");
  if (!win) {
    window.location.href = mailtoUrl(subject, body);
    return "mailto" as const;
  }
  return "gmail" as const;
}

export const GMAIL_ACTION = "https://mail.google.com/mail/";
