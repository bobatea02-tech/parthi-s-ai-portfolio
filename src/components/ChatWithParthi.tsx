import { useEffect, useRef, useState } from "react";
import { MessageCircle, X, Send, Loader2, Sparkles, RotateCcw } from "lucide-react";
import ReactMarkdown from "react-markdown";

type Msg = { role: "user" | "assistant"; content: string };

const QUICK_PROMPTS = [
  "What are your top projects?",
  "What's your tech stack?",
  "How do I hire you?",
  "Tell me about your AI work",
];

const GREETING: Msg = {
  role: "assistant",
  content:
    "Hey 👋 I'm **Parthi** — well, an AI version of me trained on my portfolio. Ask me anything about my projects, skills, or how to work together.",
};

export function ChatWithParthi() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Msg[]>([GREETING]);
  const [input, setInput] = useState("");
  const [streaming, setStreaming] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (open) inputRef.current?.focus();
  }, [open]);

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: "smooth" });
  }, [messages, open]);

  async function send(text: string) {
    const content = text.trim();
    if (!content || streaming) return;

    const next: Msg[] = [...messages, { role: "user", content }];
    setMessages(next);
    setInput("");
    setStreaming(true);

    // optimistic empty assistant message
    setMessages((m) => [...m, { role: "assistant", content: "" }]);

    let acc = "";
    const updateAssistant = (chunk: string) => {
      acc += chunk;
      setMessages((m) => {
        const copy = m.slice();
        copy[copy.length - 1] = { role: "assistant", content: acc };
        return copy;
      });
    };

    try {
      const resp = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          messages: next.map(({ role, content }) => ({ role, content })),
        }),
      });

      if (!resp.ok || !resp.body) {
        let err = "Something glitched on my end. Try again?";
        try {
          const j = await resp.json();
          if (j?.error) err = j.error;
        } catch {
          /* noop */
        }
        updateAssistant(err);
        setStreaming(false);
        return;
      }

      const reader = resp.body.getReader();
      const decoder = new TextDecoder();
      let buf = "";
      let done = false;

      while (!done) {
        const { done: rDone, value } = await reader.read();
        if (rDone) break;
        buf += decoder.decode(value, { stream: true });

        let nl: number;
        while ((nl = buf.indexOf("\n")) !== -1) {
          let line = buf.slice(0, nl);
          buf = buf.slice(nl + 1);
          if (line.endsWith("\r")) line = line.slice(0, -1);
          if (!line || line.startsWith(":")) continue;
          if (!line.startsWith("data: ")) continue;
          const payload = line.slice(6).trim();
          if (payload === "[DONE]") {
            done = true;
            break;
          }
          try {
            const json = JSON.parse(payload);
            const delta = json.choices?.[0]?.delta?.content;
            if (delta) updateAssistant(delta);
          } catch {
            buf = line + "\n" + buf;
            break;
          }
        }
      }
    } catch (e) {
      console.error(e);
      updateAssistant("Network hiccup — try again in a sec.");
    } finally {
      setStreaming(false);
    }
  }

  function reset() {
    if (streaming) return;
    setMessages([GREETING]);
  }

  return (
    <>
      {/* Floating bubble */}
      <button
        onClick={() => setOpen((o) => !o)}
        aria-label={open ? "Close chat" : "Chat with Parthi"}
        className="fixed bottom-5 right-5 z-50 group"
      >
        <span className="absolute inset-0 rounded-full bg-primary/40 blur-xl animate-pulse" />
        <span className="relative flex items-center justify-center w-14 h-14 rounded-full bg-gradient-to-br from-primary to-primary/60 text-primary-foreground shadow-[0_0_30px_var(--neon,theme(colors.primary.DEFAULT))] transition-transform duration-300 group-hover:scale-110 group-active:scale-95">
          {open ? <X className="w-6 h-6" /> : <MessageCircle className="w-6 h-6" />}
        </span>
        {!open && (
          <span className="absolute -top-1 -right-1 flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
            <span className="relative inline-flex rounded-full h-3 w-3 bg-primary" />
          </span>
        )}
      </button>

      {/* Panel */}
      <div
        className={`fixed bottom-24 right-5 z-50 w-[min(380px,calc(100vw-2.5rem))] origin-bottom-right transition-all duration-300 ${
          open
            ? "opacity-100 scale-100 translate-y-0 pointer-events-auto"
            : "opacity-0 scale-95 translate-y-2 pointer-events-none"
        }`}
      >
        <div className="rounded-2xl border border-border bg-background/95 backdrop-blur-xl shadow-2xl overflow-hidden flex flex-col max-h-[70vh]">
          {/* Header */}
          <div className="flex items-center justify-between gap-3 px-4 py-3 border-b border-border bg-gradient-to-r from-primary/10 via-transparent to-primary/10">
            <div className="flex items-center gap-2">
              <span className="relative flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-primary to-primary/50 text-primary-foreground">
                <Sparkles className="w-4 h-4" />
              </span>
              <div>
                <p className="text-sm font-semibold leading-none">Chat with Parthi</p>
                <p className="text-[11px] font-mono text-muted-foreground mt-1">
                  AI-powered · live
                </p>
              </div>
            </div>
            <button
              onClick={reset}
              disabled={streaming}
              aria-label="Reset chat"
              className="p-1.5 rounded-md hover:bg-secondary/60 transition disabled:opacity-40"
            >
              <RotateCcw className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Messages */}
          <div ref={scrollRef} className="flex-1 overflow-y-auto px-4 py-3 space-y-3">
            {messages.map((m, i) => (
              <div
                key={i}
                className={`flex ${m.role === "user" ? "justify-end" : "justify-start"}`}
              >
                <div
                  className={`max-w-[85%] rounded-2xl px-3.5 py-2 text-sm leading-relaxed ${
                    m.role === "user"
                      ? "bg-primary text-primary-foreground rounded-br-sm"
                      : "bg-secondary/60 text-foreground rounded-bl-sm"
                  }`}
                >
                  {m.role === "assistant" ? (
                    <div className="prose prose-sm prose-invert max-w-none [&>*:first-child]:mt-0 [&>*:last-child]:mb-0 [&_a]:text-primary [&_a]:underline [&_p]:my-1 [&_ul]:my-1 [&_ol]:my-1">
                      {m.content ? (
                        <ReactMarkdown>{m.content}</ReactMarkdown>
                      ) : (
                        <Loader2 className="w-3.5 h-3.5 animate-spin" />
                      )}
                    </div>
                  ) : (
                    <span className="whitespace-pre-wrap">{m.content}</span>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Quick prompts */}
          {messages.length <= 1 && (
            <div className="px-4 pb-2 flex flex-wrap gap-1.5">
              {QUICK_PROMPTS.map((q) => (
                <button
                  key={q}
                  onClick={() => send(q)}
                  className="text-[11px] px-2.5 py-1 rounded-full border border-border bg-secondary/40 hover:bg-secondary hover:border-primary/50 transition"
                >
                  {q}
                </button>
              ))}
            </div>
          )}

          {/* Input */}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              send(input);
            }}
            className="flex items-center gap-2 px-3 py-3 border-t border-border bg-background/60"
          >
            <input
              ref={inputRef}
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask me anything…"
              maxLength={500}
              disabled={streaming}
              className="flex-1 bg-secondary/40 border border-border rounded-full px-4 py-2 text-sm focus:outline-none focus:border-primary transition disabled:opacity-60"
            />
            <button
              type="submit"
              disabled={streaming || !input.trim()}
              aria-label="Send"
              className="flex items-center justify-center w-9 h-9 rounded-full bg-primary text-primary-foreground hover:shadow-[0_0_20px_var(--neon,theme(colors.primary.DEFAULT))] transition disabled:opacity-50"
            >
              {streaming ? (
                <Loader2 className="w-4 h-4 animate-spin" />
              ) : (
                <Send className="w-4 h-4" />
              )}
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
