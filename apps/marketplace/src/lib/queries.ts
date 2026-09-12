import { prisma } from "@/lib/prisma";

export type ServiceSort =
  | "recommended"
  | "new"
  | "price_asc"
  | "price_desc"
  | "rating"
  | "popular";

export interface MarketplaceFilters {
  q?: string;
  category?: string;
  subcategory?: string;
  type?: string;
  sort?: ServiceSort;
  minPrice?: number;
  maxPrice?: number;
  page?: number;
  pageSize?: number;
}

const serviceFeedInclude = {
  images: { orderBy: { sortOrder: "asc" as const }, take: 1 },
  user: {
    select: {
      id: true,
      name: true,
      username: true,
      image: true,
      freelancerProfile: {
        select: {
          level: true,
          ratingValue: true,
          reviewCount: true,
        },
      },
    },
  },
  category: { select: { name: true, slug: true, icon: true } },
} as const;

const serviceDetailInclude = {
  images: { orderBy: { sortOrder: "asc" as const } },
  packages: {
    where: { isActive: true },
    orderBy: { sortOrder: "asc" as const },
  },
  faqs: { orderBy: { sortOrder: "asc" as const } },
  user: {
    select: {
      id: true,
      name: true,
      username: true,
      image: true,
      bio: true,
      location: true,
      freelancerProfile: {
        select: {
          title: true,
          level: true,
          responseRate: true,
          responseTime: true,
          onTimeDelivery: true,
          completedOrders: true,
          ratingValue: true,
          reviewCount: true,
          verified: true,
        },
      },
    },
  },
  category: { select: { name: true, slug: true, icon: true } },
  reviews: {
    orderBy: { createdAt: "desc" as const },
    include: {
      reviewer: { select: { id: true, name: true, image: true } },
    },
  },
} as const;

export type ServiceFeedItem = Awaited<
  ReturnType<typeof getFeedServices>
>["services"][number];

export type ServiceDetail = NonNullable<
  Awaited<ReturnType<typeof getServiceBySlug>>
>;

export async function getActiveCategories() {
  return prisma.category.findMany({
    where: { active: true },
    orderBy: [{ sortOrder: "asc" }, { name: "asc" }],
    include: {
      subcategories: {
        where: { active: true },
        orderBy: { name: "asc" },
      },
    },
  });
}

export async function getFeedServices(limit = 12) {
  const services = await prisma.service.findMany({
    where: { status: "PUBLISHED" },
    orderBy: [{ isFeatured: "desc" }, { salesCount: "desc" }],
    take: limit,
    include: serviceFeedInclude,
  });
  return { services };
}

export async function getFeaturedServices(limit = 3) {
  const services = await prisma.service.findMany({
    where: { status: "PUBLISHED", isFeatured: true },
    orderBy: { salesCount: "desc" },
    take: limit,
    include: serviceFeedInclude,
  });
  return { services };
}

export const SORT_OPTIONS: { value: ServiceSort; label: string }[] = [
  { value: "recommended", label: "Recommended" },
  { value: "new", label: "Newest" },
  { value: "popular", label: "Most sold" },
  { value: "rating", label: "Top rated" },
  { value: "price_asc", label: "Price: low to high" },
  { value: "price_desc", label: "Price: high to low" },
];

const serviceOrderBy: Record<ServiceSort, object> = {
  recommended: [{ isFeatured: "desc" }, { salesCount: "desc" }],
  new: { createdAt: "desc" },
  popular: { salesCount: "desc" },
  rating: { ratingValue: "desc" },
  price_asc: { minPrice: "asc" },
  price_desc: { minPrice: "desc" },
};

export async function getMarketplaceServices(filters: MarketplaceFilters = {}) {
  const page = Math.max(1, filters.page ?? 1);
  const pageSize = Math.min(60, Math.max(1, filters.pageSize ?? 12));

  const where = {
    status: "PUBLISHED",
    ...(filters.q
      ? {
          OR: [
            { title: { contains: filters.q, mode: "insensitive" as const } },
            {
              shortDescription: {
                contains: filters.q,
                mode: "insensitive" as const,
              },
            },
            { description: { contains: filters.q, mode: "insensitive" as const } },
            { tags: { has: filters.q } },
          ],
        }
      : {}),
    ...(filters.category
      ? { category: { slug: filters.category } }
      : {}),
    ...(filters.subcategory
      ? { subcategory: { slug: filters.subcategory } }
      : {}),
    ...(filters.type ? { type: filters.type } : {}),
    ...(typeof filters.minPrice === "number"
      ? { minPrice: { gte: filters.minPrice } }
      : {}),
    ...(typeof filters.maxPrice === "number"
      ? { maxPrice: { lte: filters.maxPrice } }
      : {}),
  };

  const [services, total] = await Promise.all([
    prisma.service.findMany({
      where,
      orderBy: serviceOrderBy[filters.sort ?? "recommended"],
      skip: (page - 1) * pageSize,
      take: pageSize,
      include: serviceFeedInclude,
    }),
    prisma.service.count({ where }),
  ]);

  return { services, total, page, pageSize };
}

export async function getServiceBySlug(slug: string) {
  return prisma.service.findFirst({
    where: { slug, status: "PUBLISHED" },
    include: serviceDetailInclude,
  });
}

export async function getRelatedServices(serviceId: string, categoryId: string, limit = 4) {
  return prisma.service.findMany({
    where: {
      status: "PUBLISHED",
      categoryId,
      id: { not: serviceId },
    },
    orderBy: { salesCount: "desc" },
    take: limit,
    include: serviceFeedInclude,
  });
}