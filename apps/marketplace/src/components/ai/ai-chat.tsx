"use client";

import { useEffect, useRef, useState } from "react";
import { MessageCircle, Send, Sparkles, X } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";

interface ChatMessage {
  role: "user" | "model";
  content: string;
}

const SUGGESTIONS = [
  "What is IDEONS?",
  "How do I become a seller?",
  "How do I order a service?",
  "Where is my cart?",
];

export function AiChat() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, loading]);

  useEffect(() => {
    if (!open) return;
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false);
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  useEffect(() => {
    function onAskAi() {
      setOpen(true);
    }
    window.addEventListener("ideons:ask-ai", onAskAi);
    return () => window.removeEventListener("ideons:ask-ai", onAskAi);
  }, []);

  async function send(text: string) {
    const content = text.trim();
    if (!content || loading) return;

    const history = messages.slice(-8);
    const next: ChatMessage[] = [...messages, { role: "user", content }];
    setMessages(next);
    setInput("");
    setLoading(true);
    setError(null);

    try {
      const res = await fetch("/api/ai/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          message: content,
          history: history.map((m) => ({ role: m.role, content: m.content })),
          page: {
            pathname: window.location.pathname,
            title: document.title,
          },
        }),
      });
      const data = await res.json();
      if (data.success) {
        setMessages((m) => [...m, { role: "model", content: data.data.message }]);
      } else {
        setError(data.message ?? "The assistant is unavailable right now.");
      }
    } catch {
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      <Button
        size="icon"
        className="fixed bottom-5 right-5 z-50 h-12 w-12 rounded-full shadow-lg"
        onClick={() => setOpen((o) => !o)}
        aria-label={open ? "Close assistant" : "Open AI assistant"}
      >
        {open ? <X /> : <MessageCircle />}
      </Button>

      {open ? (
        <div className="fixed bottom-20 right-4 z-50 flex h-[520px] max-h-[calc(100vh-6rem)] w-[min(92vw,380px)] flex-col overflow-hidden rounded-2xl border bg-background shadow-xl">
          <div className="flex items-center gap-2 border-b bg-card px-4 py-3">
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10 text-primary">
              <Sparkles className="h-4 w-4" />
            </span>
            <div>
              <p className="text-sm font-semibold">IDEONS Assistant</p>
              <p className="text-xs text-muted-foreground">Ask anything about IDEONS</p>
            </div>
          </div>

          <div className="flex-1 space-y-3 overflow-y-auto p-4">
            {messages.length === 0 ? (
              <div className="space-y-2">
                <p className="text-sm leading-relaxed text-muted-foreground">
                  Hi! I am the IDEONS assistant. I can help you understand the company
                  and navigate this website.
                </p>
                <div className="flex flex-wrap gap-2">
                  {SUGGESTIONS.map((s) => (
                    <button
                      key={s}
                      type="button"
                      onClick={() => send(s)}
                      className="rounded-full border bg-card px-3 py-1.5 text-xs font-medium text-muted-foreground transition-colors hover:border-primary hover:text-foreground"
                    >
                      {s}
                    </button>
                  ))}
                </div>
              </div>
            ) : (
              messages.map((m, i) => (
                <div
                  key={i}
                  className={cn(
                    "max-w-[85%] whitespace-pre-wrap rounded-2xl px-3.5 py-2 text-sm leading-relaxed",
                    m.role === "user"
                      ? "ml-auto bg-primary text-primary-foreground"
                      : "mr-auto border bg-card"
                  )}
                >
                  {m.content}
                </div>
              ))
            )}

            {loading ? (
              <div className="mr-auto max-w-[85%] rounded-2xl border bg-card px-3.5 py-2 text-sm text-muted-foreground">
                Thinking…
              </div>
            ) : null}

            {error ? (
              <div className="rounded-xl border border-destructive/30 bg-destructive/10 px-3.5 py-2 text-xs text-destructive">
                {error}
              </div>
            ) : null}
            <div ref={bottomRef} />
          </div>

          <form
            className="flex items-center gap-2 border-t bg-card p-3"
            onSubmit={(e) => {
              e.preventDefault();
              void send(input);
            }}
          >
            <Input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask a question…"
              className="h-9"
              autoFocus
            />
            <Button
              type="submit"
              size="icon"
              className="h-9 w-9 shrink-0"
              disabled={loading || !input.trim()}
              aria-label="Send"
            >
              <Send />
            </Button>
          </form>
        </div>
      ) : null}
    </>
  );
}