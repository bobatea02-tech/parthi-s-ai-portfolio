import { createFileRoute } from "@tanstack/react-router";
import { buildSystemPrompt } from "@/lib/chat-knowledge";

type ChatMessage = { role: "user" | "assistant"; content: string };

export const Route = createFileRoute("/api/chat")({
  server: {
    handlers: {
      POST: async ({ request }) => {
        const apiKey = process.env.LOVABLE_API_KEY;
        if (!apiKey) {
          return new Response(JSON.stringify({ error: "LOVABLE_API_KEY missing" }), {
            status: 500,
            headers: { "Content-Type": "application/json" },
          });
        }

        let body: { messages?: ChatMessage[] };
        try {
          body = await request.json();
        } catch {
          return new Response(JSON.stringify({ error: "Invalid JSON" }), { status: 400 });
        }

        const messages = (body.messages ?? []).filter(
          (m) =>
            m &&
            (m.role === "user" || m.role === "assistant") &&
            typeof m.content === "string" &&
            m.content.trim().length > 0 &&
            m.content.length < 4000
        );

        if (messages.length === 0) {
          return new Response(JSON.stringify({ error: "No messages" }), { status: 400 });
        }

        // Keep history bounded
        const trimmed = messages.slice(-20);

        const upstream = await fetch("https://ai.gateway.lovable.dev/v1/chat/completions", {
          method: "POST",
          headers: {
            Authorization: `Bearer ${apiKey}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            model: "google/gemini-3-flash-preview",
            stream: true,
            messages: [{ role: "system", content: buildSystemPrompt() }, ...trimmed],
          }),
        });

        if (!upstream.ok) {
          if (upstream.status === 429) {
            return new Response(
              JSON.stringify({ error: "I'm getting too many messages right now — try again in a moment." }),
              { status: 429, headers: { "Content-Type": "application/json" } }
            );
          }
          if (upstream.status === 402) {
            return new Response(
              JSON.stringify({ error: "AI credits exhausted. Ping Parthi at parthigadher@gmail.com." }),
              { status: 402, headers: { "Content-Type": "application/json" } }
            );
          }
          const text = await upstream.text();
          console.error("AI gateway error", upstream.status, text);
          return new Response(JSON.stringify({ error: "Upstream AI error" }), { status: 500 });
        }

        return new Response(upstream.body, {
          headers: { "Content-Type": "text/event-stream" },
        });
      },
    },
  },
});
