# @ideons/database

Shared PostgreSQL + Prisma data layer for all IDEONS apps.

- **Canonical schema**: root `prisma/schema.prisma` (`prisma7.config.ts`). ~66 models across all ecosystem modules.
- **Generated client**: `src/generated/prisma` (regenerate with `npm run db:generate`).
- **Exports**: `prisma` singleton (PrismaPg adapter), `PrismaClient` class, `createClient(url)` helper, `$Enums`.
- **Consumption**: apps import `import { prisma } from "@ideons/database"`; the built `dist/` is ESM and is intended for bundlers (Next) or `tsx` scripts — plain Node ESM cannot resolve the generated client's extensionless imports.

Example:

```ts
import { prisma } from "@ideons/database";

const services = await prisma.service.findMany({ include: { category: true } });
```