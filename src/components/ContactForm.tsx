import { useState } from "react";
import { Send, Loader2, Check, ExternalLink } from "lucide-react";
import { CONTACT_EMAIL } from "@/lib/portfolio-data";

/** Builds a Gmail web-compose URL — opens Gmail in a new tab, never Outlook. */
export function gmailComposeUrl(to: string, subject: string, body: string) {
  const params = new URLSearchParams({
    view: "cm",
    fs: "1",
    to,
    su: subject,
    body,
  });
  return `https://mail.google.com/mail/?${params.toString()}`;
}

export function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [state, setState] = useState<"idle" | "sending" | "sent">("idle");
  const [err, setErr] = useState<string | null>(null);

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    setErr(null);
    if (!name.trim() || name.length > 100) return setErr("Name is required (max 100 chars).");
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) || email.length > 255) return setErr("Valid email required.");
    if (!message.trim() || message.length > 2000) return setErr("Message required (max 2000 chars).");

    setState("sending");
    const subject = `Portfolio · message from ${name}`;
    const body = `Hi Parthi,\n\n${message}\n\n— ${name}\n${email}`;
    const url = gmailComposeUrl(CONTACT_EMAIL, subject, body);
    const a = document.createElement("a");
    a.href = url;
    a.target = "_blank";
    a.rel = "noopener noreferrer";
    document.body.appendChild(a);
    a.click();
    a.remove();
    setTimeout(() => setState("sent"), 500);
  };

  return (
    <form onSubmit={submit} className="space-y-4">
      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label className="text-xs font-mono text-muted-foreground">NAME</label>
          <input value={name} onChange={(e) => setName(e.target.value)} maxLength={100}
                 className="mt-1 w-full rounded-md bg-secondary/40 border border-border px-3 py-2 text-sm focus:outline-none focus:border-primary transition" />
        </div>
        <div>
          <label className="text-xs font-mono text-muted-foreground">EMAIL</label>
          <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" maxLength={255}
                 className="mt-1 w-full rounded-md bg-secondary/40 border border-border px-3 py-2 text-sm focus:outline-none focus:border-primary transition" />
        </div>
      </div>
      <div>
        <label className="text-xs font-mono text-muted-foreground">MESSAGE</label>
        <textarea value={message} onChange={(e) => setMessage(e.target.value)} rows={5} maxLength={2000}
                  className="mt-1 w-full rounded-md bg-secondary/40 border border-border px-3 py-2 text-sm focus:outline-none focus:border-primary transition resize-none" />
      </div>
      {err && <p className="text-xs text-destructive">{err}</p>}
      <button type="submit" disabled={state === "sending"}
              className="group inline-flex items-center gap-2 px-5 py-2.5 rounded-md bg-primary text-primary-foreground text-sm font-medium hover:shadow-[0_0_30px_var(--neon)] transition disabled:opacity-60">
        {state === "sending" ? <Loader2 className="w-4 h-4 animate-spin" />
          : state === "sent" ? <Check className="w-4 h-4" />
          : <Send className="w-4 h-4 group-hover:translate-x-0.5 transition" />}
        {state === "sent" ? "Opened in Gmail — hit send" : "Send via Gmail"}
        {state === "idle" && <ExternalLink className="w-3.5 h-3.5 opacity-70" />}
      </button>
    </form>
  );
}
