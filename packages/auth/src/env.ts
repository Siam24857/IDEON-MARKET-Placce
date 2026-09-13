import crypto from "node:crypto";
import { z } from "@ideons/validation";

const authEnvSchema = z.object({
  NODE_ENV: z
    .enum(["development", "test", "production"])
    .default("development"),

  AUTH_SECRET: z.string().optional(),
  AUTH_BASE_URL: z.string().url().default("http://localhost:3000"),

  GOOGLE_CLIENT_ID: z.string().optional(),
  GOOGLE_CLIENT_SECRET: z.string().optional(),

  EMAIL_API_KEY: z.string().optional(),
  EMAIL_FROM: z.string().default("IDEONS ECOSYSTEM <no-reply@ideons.com>"),
});

export type AuthEnv = z.infer<typeof authEnvSchema>;

function loadAuthEnv(): AuthEnv {
  const parsed = authEnvSchema.safeParse(process.env);
  if (!parsed.success) {
    console.error(
      "Invalid auth environment variables:",
      parsed.error.flatten().fieldErrors
    );
    throw new Error("Invalid auth environment variables");
  }
  return parsed.data;
}

export const env: AuthEnv = loadAuthEnv();

export const isProduction = env.NODE_ENV === "production";

export function getAuthSecret(): string {
  if (env.AUTH_SECRET) return env.AUTH_SECRET;
  if (isProduction) {
    throw new Error(
      "AUTH_SECRET is required in production. Set a strong random value in your deployment environment (generate one with `openssl rand -base64 32`)."
    );
  }
  const devSecret = crypto.randomBytes(32).toString("base64");
  console.warn(
    "[auth] AUTH_SECRET is not set. Using a randomly generated secret for development — sessions will be invalidated each time the server restarts. Set AUTH_SECRET in your .env for stable dev sessions."
  );
  return devSecret;
}