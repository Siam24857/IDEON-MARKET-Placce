import { NextRequest } from "next/server";

import { apiError, apiSuccess, handleRouteError } from "@/lib/api";
import { getSession } from "@/lib/session";
import { prisma } from "@/lib/prisma";

export async function DELETE(
  _req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const session = await getSession();
    const user = session?.user;
    if (!user) {
      return apiError("Unauthorized", "UNAUTHORIZED", 401);
    }

    const { id } = await params;

    const isAdmin =
      user.role === "ADMIN" || user.role === "SUPER_ADMIN";

    const deleted = await prisma.service.deleteMany({
      where: isAdmin
        ? { id }
        : {
            id,
            userId: user.id,
            status: { not: "PUBLISHED" },
          },
    });

    if (deleted.count === 0) {
      return apiError(
        "Service not found",
        "NOT_FOUND",
        404
      );
    }

    await prisma.auditLog.create({
      data: {
        actorId: user.id,
        action: "SERVICE_DELETED",
        entityType: "Service",
        entityId: id,
      },
    });

    return apiSuccess({ deleted: true }, "Service deleted");
  } catch (error) {
    return handleRouteError(error);
  }
}