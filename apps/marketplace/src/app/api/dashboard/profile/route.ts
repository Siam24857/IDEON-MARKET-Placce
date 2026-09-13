import { NextRequest } from "next/server";

import { apiError, apiSuccess, handleRouteError } from "@/lib/api";
import { getSession } from "@/lib/session";
import { prisma } from "@/lib/prisma";
import { updateProfileSchema } from "@/lib/validators";
import {
  computeProfileCompletion,
  parseCommaList,
  toOptional,
} from "@/lib/profile";

export async function PUT(req: NextRequest) {
  try {
    const session = await getSession();
    if (!session?.user) {
      return apiError("Unauthorized", "UNAUTHORIZED", 401);
    }
    const userId = session.user.id;

    const body = await req.json();
    const parsed = updateProfileSchema.safeParse(body);
    if (!parsed.success) {
      return apiError(
        "Invalid profile data",
        "VALIDATION_ERROR",
        400,
        parsed.error.flatten().fieldErrors
      );
    }
    const d = parsed.data;

    const usernameTaken = await prisma.user.findFirst({
      where: { username: d.username, id: { not: userId } },
      select: { id: true },
    });
    if (usernameTaken) {
      return apiError("Username is already taken", "USERNAME_TAKEN", 409);
    }

    const userData = {
      name: d.name,
      username: d.username,
      bio: toOptional(d.bio),
      location: toOptional(d.location),
      website: toOptional(d.website),
      github: toOptional(d.github),
      linkedin: toOptional(d.linkedin),
      timezone: toOptional(d.timezone),
      skills: parseCommaList(d.skills),
      languages: parseCommaList(d.languages),
    };
    const profileData = {
      headline: toOptional(d.headline),
      occupation: toOptional(d.occupation),
      education: toOptional(d.education),
      experience: toOptional(d.experience),
      phoneNumber: toOptional(d.phoneNumber),
      country: toOptional(d.country),
      city: toOptional(d.city),
    };

    await prisma.user.update({ where: { id: userId }, data: userData });
    await prisma.profile.upsert({
      where: { userId },
      update: profileData,
      create: { userId, ...profileData },
    });

    const completion = computeProfileCompletion(d as Record<string, unknown>);
    await prisma.user.update({
      where: { id: userId },
      data: { profileCompletion: completion },
    });

    await prisma.auditLog.create({
      data: {
        actorId: userId,
        action: "PROFILE_UPDATED",
        entityType: "User",
        entityId: userId,
      },
    });

    return apiSuccess({ completion }, "Profile updated");
  } catch (error) {
    return handleRouteError(error);
  }
}