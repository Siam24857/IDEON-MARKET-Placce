import { PrismaClient } from "./generated/prisma/client";
export { PrismaClient } from "./generated/prisma/client";
export * as $Enums from "./generated/prisma/enums";
export declare function createClient(connectionString: string): PrismaClient;
export declare function getConnectionString(): string;
export declare const prisma: PrismaClient;
