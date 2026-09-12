import { PrismaPg } from "@prisma/adapter-pg";
import { PrismaClient } from "./generated/prisma/client";

export { PrismaClient } from "./generated/prisma/client";
export * as $Enums from "./generated/prisma/enums";

export function createClient(connectionString: string): PrismaClient {
  const adapter = new PrismaPg({ connectionString });
  return new PrismaClient({ adapter });
}

export function getConnectionString(): string {
  const url = process.env.DATABASE_URL;
  if (!url) {
    throw new Error(
      "DATABASE_URL is not set. Copy .env.example to .env at the repo root and fill in DATABASE_URL.",
    );
  }
  return url;
}

const globalForPrisma = globalThis as unknown as { ideonsPrisma?: PrismaClient };

export const prisma: PrismaClient =
  globalForPrisma.ideonsPrisma ?? createClient(getConnectionString());

if (process.env.NODE_ENV !== "production") {
  globalForPrisma.ideonsPrisma = prisma;
}