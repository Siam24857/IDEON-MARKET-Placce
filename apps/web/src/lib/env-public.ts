export const publicEnv = {
  NEXT_PUBLIC_APP_URL:
    process.env.NEXT_PUBLIC_APP_URL ?? "http://localhost:3001",
  NEXT_PUBLIC_MARKETPLACE_URL:
    process.env.NEXT_PUBLIC_MARKETPLACE_URL ?? "http://localhost:3000",
  NEXT_PUBLIC_ECOMMERCE_URL:
    process.env.NEXT_PUBLIC_ECOMMERCE_URL ?? "http://localhost:3002",
} as const;

export const MARKETPLACE_URL = publicEnv.NEXT_PUBLIC_MARKETPLACE_URL;
export const ECOMMERCE_URL = publicEnv.NEXT_PUBLIC_ECOMMERCE_URL;