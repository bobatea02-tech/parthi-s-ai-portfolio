import { CONTACT_EMAIL } from "@/lib/portfolio-data";

export function gmailComposeUrl(subject = "Portfolio inquiry", body = "") {
  const params = new URLSearchParams({
    view: "cm",
    fs: "1",
    tf: "1",
    to: CONTACT_EMAIL,
    su: subject,
    body,
  });

  return `https://mail.google.com/mail/u/0/?${params.toString()}`;
}

export const GMAIL_ACTION = "https://mail.google.com/mail/u/0/";