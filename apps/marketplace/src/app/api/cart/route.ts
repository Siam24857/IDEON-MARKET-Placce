import { NextRequest } from "next/server";
import { z } from "zod";

import { cartItemSchema } from "@/lib/validators";
import { prisma } from "@/lib/prisma";
import { getSession } from "@/lib/session";
import { apiError, apiSuccess, handleRouteError } from "@/lib/api";

async function getUserCartCount(userId: string) {
  const count = await prisma.cartItem.aggregate({
    where: { cart: { userId } },
    _sum: { quantity: true },
  });
  return count._sum.quantity ?? 0;
}

export async function POST(req: NextRequest) {
  try {
    const session = await getSession();
    if (!session?.user) {
      return apiError("Unauthorized", "UNAUTHORIZED", 401);
    }
    const userId = session.user.id;

    const body = await req.json();
    const parsed = cartItemSchema.safeParse(body);
    if (!parsed.success) {
      return apiError(
        "Invalid cart item",
        "VALIDATION_ERROR",
        400,
        parsed.error.flatten().fieldErrors
      );
    }

    const { serviceId, packageId } = parsed.data;

    const service = await prisma.service.findFirst({
      where: {
        id: serviceId,
        status: "PUBLISHED",
        packages: { some: { id: packageId, isActive: true } },
      },
      select: { id: true, userId: true },
    });
    if (!service) {
      return apiError("Service or package not found", "NOT_FOUND", 404);
    }
    if (service.userId === userId) {
      return apiError(
        "You can't add your own service to the cart",
        "FORBIDDEN",
        403
      );
    }

    const pkg = await prisma.servicePackage.findUnique({
      where: { id: packageId },
      select: { price: true },
    });
    if (!pkg) {
      return apiError("Package not found", "NOT_FOUND", 404);
    }

    const cart = await prisma.cart.upsert({
      where: { userId },
      update: {},
      create: { userId },
      select: { id: true },
    });

    await prisma.cartItem.upsert({
      where: {
        cartId_serviceId_packageId: { cartId: cart.id, serviceId, packageId },
      },
      update: { quantity: { increment: 1 }, price: pkg.price },
      create: {
        cartId: cart.id,
        serviceId,
        packageId,
        price: pkg.price,
        quantity: 1,
      },
    });

    const cartItemCount = await getUserCartCount(userId);
    return apiSuccess({ cartItemCount }, "Added to cart");
  } catch (error) {
    return handleRouteError(error);
  }
}

export async function DELETE(req: NextRequest) {
  try {
    const session = await getSession();
    if (!session?.user) {
      return apiError("Unauthorized", "UNAUTHORIZED", 401);
    }
    const userId = session.user.id;

    const body = await req.json();
    const parsed = z.object({ id: z.string().min(1) }).safeParse(body);
    if (!parsed.success) {
      return apiError("Cart item id is required", "VALIDATION_ERROR", 400);
    }

    const cart = await prisma.cart.findUnique({
      where: { userId },
      select: { id: true },
    });
    if (!cart) {
      return apiError("Cart not found", "NOT_FOUND", 404);
    }

    const item = await prisma.cartItem.findUnique({
      where: { id: parsed.data.id },
      select: { id: true, cartId: true },
    });
    if (!item || item.cartId !== cart.id) {
      return apiError("Cart item not found", "NOT_FOUND", 404);
    }

    await prisma.cartItem.delete({ where: { id: item.id } });

    const cartItemCount = await getUserCartCount(userId);
    return apiSuccess({ cartItemCount }, "Removed from cart");
  } catch (error) {
    return handleRouteError(error);
  }
}