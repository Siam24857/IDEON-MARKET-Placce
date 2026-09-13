import { NextRequest } from "next/server";

import { apiError, apiSuccess, handleRouteError } from "@/lib/api";
import { getSession } from "@/lib/session";
import { prisma } from "@/lib/prisma";
import { freelancerApplySchema } from "@/lib/validators";
import { parseCommaList } from "@/lib/profile";

export async function POST(req: NextRequest) {
  try {
    const session = await getSession();
    if (!session?.user) {
      return apiError("Unauthorized", "UNAUTHORIZED", 401);
    }
    const userId = session.user.id;

    const body = await req.json();
    const parsed = freelancerApplySchema.safeParse(body);
    if (!parsed.success) {
      return apiError(
        "Invalid application",
        "VALIDATION_ERROR",
        400,
        parsed.error.flatten().fieldErrors
      );
    }
    const d = parsed.data;

    const existing = await prisma.freelancerProfile.findUnique({
      where: { userId },
      select: { status: true },
    });
    if (existing && existing.status === "ACTIVE") {
      return apiError("You’re already a seller", "ALREADY_FREELANCER", 409);
    }

    await prisma.$transaction([
      prisma.freelancerProfile.upsert({
        where: { userId },
        update: {
          title: d.title,
          about: d.about,
          skills: parseCommaList(d.skills),
          languages: parseCommaList(d.languages),
          status: "PENDING",
          submittedAt: new Date(),
        },
        create: {
          userId,
          title: d.title,
          about: d.about,
          skills: parseCommaList(d.skills),
          languages: parseCommaList(d.languages),
          status: "PENDING",
          submittedAt: new Date(),
        },
      }),
      prisma.user.update({
        where: { id: userId },
        data: {
          role: "FREELANCER",
          skills: parseCommaList(d.skills),
          languages: parseCommaList(d.languages),
        },
      }),
      prisma.auditLog.create({
        data: {
          actorId: userId,
          action: "FREELANCER_APPLIED",
          entityType: "FreelancerProfile",
          entityId: userId,
        },
      }),
    ]);

    return apiSuccess({ status: "PENDING" }, "Application submitted");
  } catch (error) {
    return handleRouteError(error);
  }
}