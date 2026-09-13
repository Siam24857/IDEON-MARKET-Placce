import type { Metadata } from "next";
import { redirect } from "next/navigation";

import { ProfileForm } from "@/components/dashboard/profile-form";
import { requireUser } from "@/lib/session";
import { prisma } from "@/lib/prisma";

export const metadata: Metadata = {
  title: "Profile",
};

export default async function DashboardProfilePage() {
  const session = await requireUser();
  const user = await prisma.user.findUnique({
    where: { id: session.user.id },
    include: { profile: true },
  });

  if (!user) {
    redirect("/login");
  }

  const initial = {
    name: user.name,
    username: user.username ?? "",
    bio: user.bio ?? "",
    location: user.location ?? "",
    website: user.website ?? "",
    github: user.github ?? "",
    linkedin: user.linkedin ?? "",
    timezone: user.timezone ?? "",
    skills: user.skills.join(", "),
    languages: user.languages.join(", "),
    headline: user.profile?.headline ?? "",
    occupation: user.profile?.occupation ?? "",
    education: user.profile?.education ?? "",
    experience: user.profile?.experience ?? "",
    phoneNumber: user.profile?.phoneNumber ?? "",
    country: user.profile?.country ?? "",
    city: user.profile?.city ?? "",
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold tracking-tight">Profile</h1>
        <p className="mt-1 text-sm text-muted-foreground">
          These details are shown on your public profile and service listings.
        </p>
      </div>
      <ProfileForm initial={initial} />
    </div>
  );
}