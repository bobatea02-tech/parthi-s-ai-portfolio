# Plan: "Chat with Parthi" Agent Integration

Your existing agent runs locally only, so we can't call it over the network from the deployed portfolio. The cleanest path is to **re-host the same brain inside the portfolio's backend** using Lovable Cloud + Lovable AI Gateway. You keep the persona, prompt logic, and knowledge — we just give it a public, always-on home and a beautiful chat UI.

## What you'll get

1. A floating chat bubble (bottom-right) on every page, with a polished open/close animation.
2. A streaming chat that replies token-by-token in your voice, grounded in your portfolio data + persona.
3. A secure backend endpoint — your API key never touches the browser.

## Architecture

```text
[Floating ChatBubble.tsx]  ──POST stream──>  [/api/chat server route]
        (UI, on every page)                          │
                                                    │ system prompt =
                                                    │   persona + portfolio knowledge
                                                    ▼
                                   [Lovable AI Gateway · Gemini]
                                                    │
                                        stream tokens back to UI
```

## Steps

1. **Enable Lovable Cloud** (provisions `LOVABLE_API_KEY` automatically — no setup from you).
2. **Build the knowledge base** — combine two sources:
   - **Auto-generated from `src/lib/portfolio-data.ts`**: projects, skills, certificates, timeline, contact links — serialized into the system prompt.
   - **Your custom persona block**: paste your existing agent's system prompt + any extra info (bio, hobbies, opinions, tone rules, "things Parthi would never say", etc.).
3. **Create the backend** — a TanStack server route at `src/routes/api/chat.ts` that:
   - Validates the incoming message list.
   - Calls the Lovable AI Gateway (`google/gemini-3-flash-preview`) with the persona system prompt + portfolio knowledge + conversation history.
   - Streams the response back as SSE.
   - Handles 429 (rate-limit) and 402 (credits) with friendly errors.
4. **Build the floating chat UI** — `src/components/ChatWithParthi.tsx`:
   - Bottom-right floating bubble with neon glow + pulse animation.
   - Click to expand into a compact chat panel (with smooth motion).
   - Message list with markdown rendering (so links/lists/code look right).
   - Token-by-token streaming, typing indicator, auto-scroll.
   - Quick-prompt chips ("What are your top projects?", "What's your stack?", "How do I hire you?").
   - Clear chat + close buttons.
5. **Mount it globally** in `src/routes/__root.tsx` so it's present on every page.
6. **Theming** — match the existing neon/dark portfolio aesthetic, with crazy hover/glow animations consistent with the rest of the site.

## What I need from you (before I build)

Please paste, in your next message:
- **Your existing agent's system prompt** (the persona / tone / rules).
- **Any extra info** you want it to know that isn't already on the portfolio (personal interests, working style, availability, career goals, fun facts, things it should refuse, etc.).

If you'd rather I infer the persona from your portfolio for v1 and you can refine the prompt later, just say "go ahead with defaults" and I'll ship it.

## Technical details

- **Model**: `google/gemini-3-flash-preview` (fast, cheap, good for chat). Easy to swap to `gemini-2.5-pro` or `gpt-5` later.
- **Streaming**: SSE parsed line-by-line on the client with proper `[DONE]` + CRLF + final-flush handling.
- **History**: full conversation history sent on each request (no DB needed unless you want chat persistence later).
- **No auth required** on the endpoint — it's a public portfolio assistant. Rate-limited by the AI Gateway per workspace.
- **Cost control**: short max-tokens cap + concise system prompt to keep replies tight and cheap.

## Out of scope (can do later)

- Persisting chat history per visitor (would need Cloud DB).
- Voice mode.
- Admin dashboard to view what visitors asked.
- RAG over your full agent repo (current plan inlines knowledge — sufficient for portfolio scale).
