// IDEONS ECOSYSTEM — canonical Prisma CLI config (run from repo root).
// npm install --save-dev prisma dotenv tsx
import "dotenv/config";
import { defineConfig } from "prisma/config";

function shadowUrl(url: string | undefined): string | undefined {
  if (!url) return undefined;
  return process.env["SHADOW_DATABASE_URL"] ?? url.replace(/(\/[^/?#]+)([?#]|$)/, "/ideons_shadow$2");
}

export default defineConfig({
  schema: "prisma/schema.prisma",
  migrations: {
    path: "prisma/migrations",
    seed: "tsx prisma/seed.ts",
  },
  datasource: {
    url: process.env["DATABASE_URL"],
    shadowDatabaseUrl: shadowUrl(process.env["DATABASE_URL"]),
  },
});