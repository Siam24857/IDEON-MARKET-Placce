import { NextRequest } from "next/server";

import { apiError, apiSuccess, handleRouteError } from "@/lib/api";
import { getSession } from "@/lib/session";
import { prisma } from "@/lib/prisma";
import { serviceCreateSchema } from "@/lib/validators";
import { parseCommaList } from "@/lib/profile";
import { slugify } from "@/lib/utils";

async function uniqueSlug(base: string): Promise<string> {
  const existing = await prisma.service.findFirst({
    where: { slug: base },
    select: { id: true },
  });
  if (!existing) return base;

  let i = 2;
  while (i < 100) {
    const next = `${base}-${i}`;
    const exists = await prisma.service.findFirst({
      where: { slug: next },
      select: { id: true },
    });
    if (!exists) return next;
    i++;
  }
  throw new Error("Could not generate unique slug");
}

export async function POST(req: NextRequest) {
  try {
    const session = await getSession();
    const user = session?.user;
    if (!user) {
      return apiError("Unauthorized", "UNAUTHORIZED", 401);
    }

    const role = user.role as string | undefined;
    if (role !== "FREELANCER" && role !== "ADMIN" && role !== "SUPER_ADMIN") {
      return apiError(
        "Only freelancers can publish services",
        "FORBIDDEN",
        403
      );
    }

    const body = await req.json();
    const parsed = serviceCreateSchema.safeParse(body);
    if (!parsed.success) {
      return apiError(
        "Invalid service data",
        "VALIDATION_ERROR",
        400,
        parsed.error.flatten().fieldErrors
      );
    }
    const d = parsed.data;

    const slug = await uniqueSlug(slugify(d.title));
    const priceCents = Math.round(d.price * 100);

    const category = await prisma.category.findUnique({
      where: { id: d.categoryId },
    });
    if (!category) {
      return apiError("Invalid category", "VALIDATION_ERROR", 400);
    }

    const service = await prisma.service.create({
      data: {
        slug,
        title: d.title,
        shortDescription: d.shortDescription || d.title,
        description: d.description,
        userId: user.id,
        categoryId: d.categoryId,
        status: "PENDING_REVIEW",
        tags: parseCommaList(d.tags),
        minPrice: priceCents,
        maxPrice: priceCents,
        deliveryTime: d.deliveryTime,
        revisions: d.revisions,
        packages: {
          create: {
            name: "BASIC",
            title: d.title,
            price: priceCents,
            deliveryTime: d.deliveryTime,
            revisions: d.revisions,
            sortOrder: 0,
          },
        },
      },
      select: { id: true, slug: true },
    });

    await prisma.auditLog.create({
      data: {
        actorId: user.id,
        action: "SERVICE_CREATED",
        entityType: "Service",
        entityId: service.id,
      },
    });

    return apiSuccess({ id: service.id, slug: service.slug }, "Service created");
  } catch (error) {
    return handleRouteError(error);
  }
}