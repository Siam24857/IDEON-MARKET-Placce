export const publicEnv = {
  NEXT_PUBLIC_APP_URL:
    process.env.NEXT_PUBLIC_APP_URL ?? "http://localhost:3001",
  NEXT_PUBLIC_MARKETPLACE_URL:
    process.env.NEXT_PUBLIC_MARKETPLACE_URL ?? "http://localhost:3000",
} as const;

export const MARKETPLACE_URL = publicEnv.NEXT_PUBLIC_MARKETPLACE_URL;