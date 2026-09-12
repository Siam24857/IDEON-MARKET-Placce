import { z } from "@ideons/validation";
declare const authEnvSchema: z.ZodObject<{
    NODE_ENV: z.ZodDefault<z.ZodEnum<{
        development: "development";
        test: "test";
        production: "production";
    }>>;
    AUTH_SECRET: z.ZodString;
    AUTH_BASE_URL: z.ZodDefault<z.ZodString>;
    GOOGLE_CLIENT_ID: z.ZodOptional<z.ZodString>;
    GOOGLE_CLIENT_SECRET: z.ZodOptional<z.ZodString>;
    EMAIL_API_KEY: z.ZodOptional<z.ZodString>;
    EMAIL_FROM: z.ZodDefault<z.ZodString>;
}, z.core.$strip>;
export type AuthEnv = z.infer<typeof authEnvSchema>;
export declare const env: AuthEnv;
export declare const isProduction: boolean;
export {};
