import { NextRequest } from "next/server";
import { z } from "zod";

import { apiError, apiSuccess, handleRouteError } from "@/lib/api";
import { getSession } from "@/lib/session";
import { prisma } from "@/lib/prisma";

const removeFavoriteSchema = z.object({
  favoriteId: z.string().min(1),
});

export async function POST(req: NextRequest) {
  try {
    const session = await getSession();
    if (!session?.user) {
      return apiError("Unauthorized", "UNAUTHORIZED", 401);
    }
    const body = await req.json();
    const parsed = removeFavoriteSchema.safeParse(body);
    if (!parsed.success) {
      return apiError("Invalid favorite", "VALIDATION_ERROR", 400);
    }

    const deleted = await prisma.favorite.deleteMany({
      where: {
        id: parsed.data.favoriteId,
        userId: session.user.id,
      },
    });
    if (deleted.count === 0) {
      return apiError("Favorite not found", "NOT_FOUND", 404);
    }

    return apiSuccess({ removed: true }, "Removed from favorites");
  } catch (error) {
    return handleRouteError(error);
  }
}