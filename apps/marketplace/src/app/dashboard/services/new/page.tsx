import type { Metadata } from "next";

import { ServiceForm } from "@/components/dashboard/service-form";
import { requireFreelancer } from "@/lib/session";
import { prisma } from "@/lib/prisma";

export const metadata: Metadata = {
  title: "Publish a service",
};

export default async function DashboardServiceNewPage() {
  await requireFreelancer();

  const categories = await prisma.category.findMany({
    where: { active: true },
    orderBy: { name: "asc" },
    select: { id: true, name: true },
  });

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold tracking-tight">Publish a service</h1>
        <p className="mt-1 text-sm text-muted-foreground">
          Create a new listing that buyers can find on the marketplace.
        </p>
      </div>
      <ServiceForm categories={categories} />
    </div>
  );
}