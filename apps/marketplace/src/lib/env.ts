import { z } from "zod";

const serverEnvSchema = z.object({
  NODE_ENV: z
    .enum(["development", "test", "production"])
    .default("development"),

  DATABASE_URL: z.string().min(1),
  DIRECT_URL: z.string().optional(),

  AUTH_SECRET: z.string().min(1),
  AUTH_BASE_URL: z.string().url().default("http://localhost:3000"),

  GOOGLE_CLIENT_ID: z.string().optional(),
  GOOGLE_CLIENT_SECRET: z.string().optional(),

  STRIPE_SECRET_KEY: z.string().optional(),
  STRIPE_WEBHOOK_SECRET: z.string().optional(),
  STRIPE_CURRENCY: z.string().default("usd"),

  STORAGE_PROVIDER: z
    .enum(["local", "s3", "r2", "supabase"])
    .default("local"),
  STORAGE_BUCKET: z.string().optional(),
  STORAGE_ACCESS_KEY: z.string().optional(),
  STORAGE_SECRET_KEY: z.string().optional(),
  STORAGE_REGION: z.string().default("auto"),

  AI_API_KEY: z.string().optional(),
  AI_MODEL: z.string().default("gemini-3.6-flash"),

  EMAIL_API_KEY: z.string().optional(),
  EMAIL_FROM: z.string().default("IDEONS Marketplace <no-reply@ideons.com>"),

  GUEST_CART_SECRET: z.string().optional(),
});

export type ServerEnv = z.infer<typeof serverEnvSchema>;

function loadServerEnv(): ServerEnv {
  const parsed = serverEnvSchema.safeParse(process.env);
  if (!parsed.success) {
    console.error(
      "Invalid server environment variables:",
      parsed.error.flatten().fieldErrors
    );
    throw new Error("Invalid server environment variables");
  }
  return parsed.data;
}

export const env: ServerEnv = loadServerEnv();

export const isProduction = env.NODE_ENV === "production";