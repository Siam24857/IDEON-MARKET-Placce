import type { Metadata } from "next";
import Link from "next/link";
import { Plus } from "lucide-react";

import { DeleteServiceButton } from "@/components/dashboard/delete-service-button";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { requireFreelancer } from "@/lib/session";
import { prisma } from "@/lib/prisma";
import { formatMoney } from "@/lib/utils";

export const metadata: Metadata = {
  title: "My services",
};

const STATUS_VARIANT: Record<string, "default" | "secondary" | "outline" | "destructive" | "warning" | "success"> = {
  DRAFT: "secondary",
  PENDING_REVIEW: "warning",
  PUBLISHED: "success",
  REJECTED: "destructive",
  PAUSED: "outline",
};

export default async function DashboardServicesPage() {
  const session = await requireFreelancer();

  const services = await prisma.service.findMany({
    where: { userId: session.user.id },
    orderBy: { createdAt: "desc" },
    include: {
      category: { select: { name: true } },
      packages: { where: { isActive: true }, select: { price: true } },
    },
  });

  const priceRange = (pkg: { price: number }[]) => {
    const prices = pkg.map((x) => x.price);
    if (!prices.length) return null;
    const min = Math.min(...prices);
    const max = Math.max(...prices);
    return min === max ? formatMoney(min) : `${formatMoney(min)} — ${formatMoney(max)}`;
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-wrap items-start justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">My services</h1>
          <p className="mt-1 text-sm text-muted-foreground">
            Manage your published and draft services.
          </p>
        </div>
        <Button asChild>
          <Link href="/dashboard/services/new">
            <Plus />
            Publish a service
          </Link>
        </Button>
      </div>

      {services.length === 0 ? (
        <div className="flex flex-col items-center rounded-2xl border bg-card p-12 text-center">
          <p className="font-semibold">No services yet</p>
          <p className="mt-1 max-w-sm text-sm text-muted-foreground">
            Publish your first service to start receiving orders.
          </p>
          <Button asChild className="mt-6">
            <Link href="/dashboard/services/new">Publish a service</Link>
          </Button>
        </div>
      ) : (
        <ul className="space-y-3">
          {services.map((service) => (
            <li
              key={service.id}
              className="flex flex-col gap-4 rounded-xl border bg-card p-5 sm:flex-row sm:items-center"
            >
              <div className="min-w-0 flex-1">
                <div className="flex flex-wrap items-center gap-2">
                  <Link
                    href={
                      service.status === "PUBLISHED"
                        ? `/services/${service.slug}`
                        : "#"
                    }
                    className="text-sm font-semibold hover:underline"
                  >
                    {service.title}
                  </Link>
                  <Badge variant={STATUS_VARIANT[service.status] ?? "secondary"}>
                    {service.status === "PENDING_REVIEW"
                      ? "Pending review"
                      : service.status.replace("_", " ")}
                  </Badge>
                </div>
                <p className="mt-1 text-xs text-muted-foreground">
                  {service.category.name}
                  {priceRange(service.packages)
                    ? ` · ${priceRange(service.packages)}`
                    : ""}
                </p>
                <div className="mt-2 flex flex-wrap gap-3 text-xs text-muted-foreground">
                  <span>
                    {service.salesCount} sale{service.salesCount === 1 ? "" : "s"}
                  </span>
                  <span>
                    {service.views.toLocaleString()} view{service.views === 1 ? "" : "s"}
                  </span>
                  <span>
                    {service.favoritesCount} favorite{service.favoritesCount === 1 ? "" : "s"}
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-3">
                {service.status === "PUBLISHED" ? (
                  <Button asChild variant="outline" size="sm">
                    <Link href={`/services/${service.slug}`}>View live</Link>
                  </Button>
                ) : service.status === "DRAFT" || service.status === "REJECTED" ? (
                  <Button asChild variant="outline" size="sm">
                    <Link href={`/dashboard/services/new?edit=${service.id}`}>
                      Edit
                    </Link>
                  </Button>
                ) : null}
                <DeleteServiceButton serviceId={service.id} />
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}