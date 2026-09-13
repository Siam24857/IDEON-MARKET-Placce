import type { Metadata } from "next";

import { FavoritesList, type FavoriteListItem } from "@/components/dashboard/favorites-list";
import { requireUser } from "@/lib/session";
import { prisma } from "@/lib/prisma";

export const metadata: Metadata = {
  title: "Favorites",
};

export default async function DashboardFavoritesPage() {
  const session = await requireUser();

  const favorites = await prisma.favorite.findMany({
    where: { userId: session.user.id },
    orderBy: { createdAt: "desc" },
  });

  const serviceIds = favorites
    .filter((f) => f.targetType === "SERVICE")
    .map((f) => f.targetId);

  const services = serviceIds.length
    ? await prisma.service.findMany({
        where: { id: { in: serviceIds }, status: "PUBLISHED" },
        select: {
          id: true,
          slug: true,
          title: true,
          ratingValue: true,
          reviewCount: true,
          minPrice: true,
          images: { orderBy: { sortOrder: "asc" }, take: 1 },
          category: { select: { name: true } },
          user: { select: { name: true } },
        },
      })
    : [];

  const serviceById = new Map(services.map((s) => [s.id, s]));

  const items: FavoriteListItem[] = favorites
    .map((favorite) => {
      const service = serviceById.get(favorite.targetId);
      if (!service) return null;
      return {
        favoriteId: favorite.id,
        createdAt: favorite.createdAt.toISOString(),
        service: {
          id: service.id,
          slug: service.slug,
          title: service.title,
          ratingValue: service.ratingValue,
          reviewCount: service.reviewCount,
          minPrice: service.minPrice,
          imageUrl: service.images[0]?.url ?? null,
          imageAlt: service.images[0]?.alt ?? null,
          categoryName: service.category.name,
          sellerName: service.user.name,
        },
      };
    })
    .filter((item): item is FavoriteListItem => item !== null);

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold tracking-tight">Favorites</h1>
        <p className="mt-1 text-sm text-muted-foreground">
          Services you’ve saved while browsing the marketplace.
        </p>
      </div>
      <FavoritesList items={items} />
    </div>
  );
}