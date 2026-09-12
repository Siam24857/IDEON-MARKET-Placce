import "dotenv/config";
import { prisma } from "@ideons/database";

async function main() {
  const [cats, svcs, users, settings, subs, packages] = await Promise.all([
    prisma.category.count(),
    prisma.service.count(),
    prisma.user.count(),
    prisma.platformSetting.count(),
    prisma.subcategory.count(),
    prisma.servicePackage.count(),
  ]);

  console.log(
    `CATEGORIES ${cats} | SUBS ${subs} | SERVICES ${svcs} | PACKAGES ${packages} | USERS ${users} | SETTINGS ${settings}`
  );

  const sample = await prisma.service.findFirst({
    include: { category: true, packages: { orderBy: { sortOrder: "asc" } } },
  });
  console.log(
    "SAMPLE:",
    sample?.title,
    "| cat:",
    sample?.category.name,
    "| packages:",
    sample?.packages.map((p) => `${p.name}@$${p.price}`).join(", ")
  );

  await prisma.$disconnect();
}

main().catch((e) => {
  console.error("FAILED:", e.message);
  process.exit(1);
});