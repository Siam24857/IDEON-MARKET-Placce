import { z } from "@ideons/validation";
export const PLATFORM = {
    NAME: "IDEONS ECOSYSTEM",
    MARKETPLACE_NAME: "IDEONS Marketplace",
    DEFAULT_CURRENCY: "USD",
    COMMISSION_PERCENT: 10,
    MIN_SERVICE_PRICE_CENTS: 500,
    MAX_SERVICE_PRICE_CENTS: 10_000_000,
};
export const CURRENCIES = ["USD", "EUR", "GBP"];
export const ROLES = [
    "USER",
    "BUYER",
    "FREELANCER",
    "JOB_SEEKER",
    "EMPLOYER",
    "AUTHOR",
    "ADMIN",
    "SUPER_ADMIN",
];
const envSchema = z.object({
    NODE_ENV: z.enum(["development", "test", "production"]).default("development"),
    DATABASE_URL: z.string().min(1).optional(),
    DIRECT_URL: z.string().min(1).optional(),
    AUTH_SECRET: z.string().min(1).optional(),
    STRIPE_SECRET_KEY: z.string().optional(),
    STRIPE_PUBLISHABLE_KEY: z.string().optional(),
    STRIPE_WEBHOOK_SECRET: z.string().optional(),
    NEXT_PUBLIC_APP_URL: z.string().url().default("http://localhost:3000"),
});
export function getEnv(overrides = process.env) {
    return envSchema.parse(overrides);
}
export function requireEnv(overrides = process.env) {
    const parsed = envSchema.safeParse(overrides);
    if (!parsed.success) {
        throw new Error(`Missing environment variables: ${parsed.error.message}`);
    }
    return parsed.data;
}
//# sourceMappingURL=index.js.map