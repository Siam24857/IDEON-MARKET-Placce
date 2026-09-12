# Ingetic AI

Module: `apps/ingetic-ai` — adopted from `Agentic ai/ai-career-mentor` (Next.js frontend + Express backend + Google GenAI).

## Target feature set (Phase 9, via `@ideons/ai`)

- AI chat with conversation history (`AIConversation`, `AIMessage`)
- User-specific AI data
- Résumé assistance, job assistance, marketplace assistance, e-commerce assistance

## Safety boundary (non-negotiable)

The AI **never queries the database directly**. It only works through explicit server-side
"tools" that the `@ideons/ai` package registers:

```
LLM  ──>  tool call  ──>  server tool  ──>  permission check  ──>  Prisma query  ──>  result
```

Each tool declares what data it can read/write, and the caller identity (session role) gates it.
No tool exposes raw SQL or unrestricted table access.