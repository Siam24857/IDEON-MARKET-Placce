import { NextRequest } from "next/server";
import { z } from "zod";

import { apiError, apiSuccess, handleRouteError } from "@/lib/api";
import { env } from "@/lib/env";
import { COMPANY_KNOWLEDGE } from "@/lib/ai/knowledge";

const MAX_HISTORY = 10;
const MAX_MESSAGE_LENGTH = 4000;

const chatRequestSchema = z.object({
  message: z.string().trim().min(1).max(MAX_MESSAGE_LENGTH),
  history: z
    .array(
      z.object({
        role: z.enum(["user", "model"]),
        content: z.string().trim().max(MAX_MESSAGE_LENGTH),
      })
    )
    .max(MAX_HISTORY)
    .default([]),
  page: z
    .object({
      pathname: z.string().max(200).default("/"),
      title: z.string().max(200).default(""),
    })
    .optional(),
});

type Role = "user" | "model";

export async function POST(req: NextRequest) {
  try {
    const key = env.AI_API_KEY;
    if (!key) {
      return apiError(
        "The AI assistant is not configured yet. Add AI_API_KEY to your .env file.",
        "AI_NOT_CONFIGURED",
        503
      );
    }
    if (!/^[A-Za-z0-9_.-]{20,}$/.test(key)) {
      return apiError(
        "The AI key in .env is not valid. Get a Gemini API key at https://aistudio.google.com/apikey and set it as AI_API_KEY.",
        "AI_KEY_INVALID",
        503
      );
    }

    const body = await req.json();
    const parsed = chatRequestSchema.safeParse(body);
    if (!parsed.success) {
      return apiError("Invalid request", "VALIDATION_ERROR", 400);
    }
    const { message, history, page } = parsed.data;

    const pageContext =
      page && page.pathname
        ? `\n\nThe user is currently on this page: ${page.pathname}${page.title ? ` (${page.title})` : ""}`
        : "";

    const contents: { role: Role; parts: { text: string }[] }[] = [
      ...history.slice(-MAX_HISTORY).map((m) => ({
        role: m.role as Role,
        parts: [{ text: m.content }],
      })),
      { role: "user" as Role, parts: [{ text: message }] },
    ];

    const response = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/${env.AI_MODEL}:generateContent?key=${key}`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          systemInstruction: { parts: [{ text: COMPANY_KNOWLEDGE + pageContext }] },
          contents,
          generationConfig: {
            temperature: 0.7,
            maxOutputTokens: 800,
            topP: 0.95,
          },
        }),
      }
    );

    if (!response.ok) {
      const errText = await response.text();
      console.error("[ai] Gemini error:", response.status, errText.slice(0, 300));
      if (response.status === 400 || response.status === 401 || response.status === 403) {
        return apiError(
          "The AI key in .env is not valid for Gemini. Get a key at https://aistudio.google.com/apikey.",
          "AI_KEY_INVALID",
          503
        );
      }
      if (response.status === 404) {
        return apiError(
          `The AI model "${env.AI_MODEL}" is not available. Set a valid AI_MODEL (e.g. gemini-3.6-flash) in your .env file.`,
          "AI_MODEL_UNAVAILABLE",
          503
        );
      }
      return apiError("The AI assistant is unavailable right now. Please try again.", "AI_UNAVAILABLE", 502);
    }

    const data = await response.json();
    const text: string | undefined =
      data?.candidates?.[0]?.content?.parts
        ?.filter((p: { text?: string }) => typeof p.text === "string")
        .map((p: { text: string }) => p.text)
        .join("") || undefined;

    if (!text) {
      const blockReason = data?.promptFeedback?.blockReason;
      if (blockReason) {
        return apiError(
          `Your message was blocked (${blockReason}). Please rephrase it.`,
          "AI_BLOCKED",
          400
        );
      }
      return apiError("The AI assistant returned an empty response.", "AI_EMPTY", 502);
    }

    return apiSuccess({ message: text });
  } catch (error) {
    return handleRouteError(error);
  }
}