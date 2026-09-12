import { z } from "@ideons/validation";
export declare const PLATFORM: {
    readonly NAME: "IDEONS ECOSYSTEM";
    readonly MARKETPLACE_NAME: "IDEONS Marketplace";
    readonly DEFAULT_CURRENCY: "USD";
    readonly COMMISSION_PERCENT: 10;
    readonly MIN_SERVICE_PRICE_CENTS: 500;
    readonly MAX_SERVICE_PRICE_CENTS: 10000000;
};
export declare const CURRENCIES: readonly ["USD", "EUR", "GBP"];
export type Currency = (typeof CURRENCIES)[number];
export declare const ROLES: readonly ["USER", "BUYER", "FREELANCER", "JOB_SEEKER", "EMPLOYER", "AUTHOR", "ADMIN", "SUPER_ADMIN"];
export type Role = (typeof ROLES)[number];
declare const envSchema: z.ZodObject<{
    NODE_ENV: z.ZodDefault<z.ZodEnum<{
        development: "development";
        test: "test";
        production: "production";
    }>>;
    DATABASE_URL: z.ZodOptional<z.ZodString>;
    DIRECT_URL: z.ZodOptional<z.ZodString>;
    AUTH_SECRET: z.ZodOptional<z.ZodString>;
    STRIPE_SECRET_KEY: z.ZodOptional<z.ZodString>;
    STRIPE_PUBLISHABLE_KEY: z.ZodOptional<z.ZodString>;
    STRIPE_WEBHOOK_SECRET: z.ZodOptional<z.ZodString>;
    NEXT_PUBLIC_APP_URL: z.ZodDefault<z.ZodString>;
}, z.core.$strip>;
export type Env = z.infer<typeof envSchema>;
export declare function getEnv(overrides?: NodeJS.ProcessEnv): Env;
export declare function requireEnv(overrides?: NodeJS.ProcessEnv): Env;
export {};
//# sourceMappingURL=index.d.ts.map