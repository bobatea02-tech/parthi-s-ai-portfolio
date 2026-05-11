import { useState, type FormEvent } from "react";
import { Send, Loader2, Check, ExternalLink } from "lucide-react";
import { toast } from "sonner";
import { z } from "zod";
import { CONTACT_EMAIL } from "@/lib/portfolio-data";
import { gmailComposeUrl } from "@/lib/contact-links";

const MESSAGE_LIMIT = 2000;

const contactSchema = z.object({
  name: z
    .string()
    .trim()
    .min(1, "Name is required.")
    .max(100, "Name must be under 100 characters."),
  email: z
    .string()
    .trim()
    .email("Enter a valid email address.")
    .max(255, "Email must be under 255 characters."),
  message: z
    .string()
    .trim()
    .min(1, "Message is required.")
    .max(MESSAGE_LIMIT, `Message must be under ${MESSAGE_LIMIT} characters.`),
});

export function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [website, setWebsite] = useState("");
  const [state, setState] = useState<"idle" | "sending" | "sent">("idle");
  const [err, setErr] = useState<string | null>(null);

  const parsed = contactSchema.safeParse({ name, email, message });
  const trimmedName = name.trim();
  const trimmedEmail = email.trim();
  const trimmedMessage = message.trim();
  const messageTooLong = message.length > MESSAGE_LIMIT;
  const subject = trimmedName ? `Portfolio · message from ${trimmedName}` : "Portfolio inquiry";
  const body = `Hi Parthi,\n\n${trimmedMessage}\n\n— ${trimmedName}\n${trimmedEmail}`;

  const submit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setErr(null);

    if (website.trim()) return;
    if (!parsed.success) return setErr(parsed.error.issues[0]?.message ?? "Please check the form.");

    const gmailUrl = gmailComposeUrl(subject, body);
    setState("sending");
    toast.success("Gmail draft is opening", {
      description: "Your recipient, subject, and message are pre-filled. Review it and hit send.",
    });
    setState("sent");

    try {
      window.top?.location.assign(gmailUrl);
    } catch {
      window.location.assign(gmailUrl);
    }
  };

  return (
    <form onSubmit={submit} className="space-y-4">
      <div
        aria-hidden="true"
        className="absolute left-[-9999px] top-auto h-px w-px overflow-hidden"
      >
        <label htmlFor="contact-website">Website</label>
        <input
          id="contact-website"
          name="website"
          value={website}
          onChange={(e) => setWebsite(e.target.value)}
          tabIndex={-1}
          autoComplete="off"
        />
      </div>
      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label className="text-xs font-mono text-muted-foreground">NAME</label>
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            maxLength={100}
            className="mt-1 w-full rounded-md bg-secondary/40 border border-border px-3 py-2 text-sm focus:outline-none focus:border-primary transition"
          />
        </div>
        <div>
          <label className="text-xs font-mono text-muted-foreground">EMAIL</label>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            maxLength={255}
            className="mt-1 w-full rounded-md bg-secondary/40 border border-border px-3 py-2 text-sm focus:outline-none focus:border-primary transition"
          />
        </div>
      </div>
      <div>
        <label className="text-xs font-mono text-muted-foreground">MESSAGE</label>
        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          rows={5}
          maxLength={MESSAGE_LIMIT}
          className="mt-1 w-full rounded-md bg-secondary/40 border border-border px-3 py-2 text-sm focus:outline-none focus:border-primary transition resize-none"
        />
        <div className="mt-1 flex justify-end">
          <span
            className={`text-[11px] font-mono ${messageTooLong ? "text-destructive" : "text-muted-foreground"}`}
          >
            {message.length}/{MESSAGE_LIMIT}
          </span>
        </div>
      </div>
      {err && <p className="text-xs text-destructive">{err}</p>}
      <button
        type="submit"
        disabled={state === "sending" || messageTooLong}
        className="group inline-flex items-center gap-2 px-5 py-2.5 rounded-md bg-primary text-primary-foreground text-sm font-medium hover:shadow-[0_0_30px_var(--neon)] transition disabled:opacity-60"
      >
        {state === "sending" ? (
          <Loader2 className="w-4 h-4 animate-spin" />
        ) : state === "sent" ? (
          <Check className="w-4 h-4" />
        ) : (
          <Send className="w-4 h-4 group-hover:translate-x-0.5 transition" />
        )}
        {state === "sent" ? "Opened in Gmail — hit send" : "Send via Gmail"}
        {state === "idle" && <ExternalLink className="w-3.5 h-3.5 opacity-70" />}
      </button>
    </form>
  );
}
