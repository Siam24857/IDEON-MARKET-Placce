export const publicEnv = {
  NEXT_PUBLIC_APP_URL:
    process.env.NEXT_PUBLIC_APP_URL ?? "http://localhost:3002",
  NEXT_PUBLIC_MARKETPLACE_URL:
    process.env.NEXT_PUBLIC_MARKETPLACE_URL ?? "http://localhost:3000",
  NEXT_PUBLIC_WEB_URL:
    process.env.NEXT_PUBLIC_WEB_URL ?? "http://localhost:3001",
} as const;

export const MARKETPLACE_URL = publicEnv.NEXT_PUBLIC_MARKETPLACE_URL;
export const WEB_URL = publicEnv.NEXT_PUBLIC_WEB_URL;