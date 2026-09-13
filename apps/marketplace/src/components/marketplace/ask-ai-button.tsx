"use client";

import { Sparkles } from "lucide-react";

import { Button } from "@/components/ui/button";

export function AskAiButton() {
  function openAssistant() {
    window.dispatchEvent(new CustomEvent("ideons:ask-ai"));
  }

  return (
    <Button
      variant="ghost"
      size="sm"
      onClick={openAssistant}
      aria-label="Ask AI"
    >
      <Sparkles />
      <span className="hidden lg:inline">Ask AI</span>
    </Button>
  );
}