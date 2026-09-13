import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  BadgeCheck,
  Briefcase,
  Heart,
  Package,
  Star,
  User as UserIcon,
} from "lucide-react";

import { StatCard } from "@/components/dashboard/stat-card";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { requireUser } from "@/lib/session";
import { prisma } from "@/lib/prisma";
import { computeProfileCompletion } from "@/lib/profile";

export const metadata: Metadata = {
  title: "Dashboard",
};

export default async function DashboardHomePage() {
  const session = await requireUser();
  const userId = session.user.id;

  const [user, favoriteCount, serviceCount, purchaseCount] = await Promise.all([
    prisma.user.findUnique({
      where: { id: userId },
      include: {
        profile: true,
        freelancerProfile: true,
        buyerProfile: true,
      },
    }),
    prisma.favorite.count({ where: { userId } }),
    prisma.service.count({ where: { userId } }),
    prisma.order.count({ where: { buyerId: userId } }),
  ]);

  if (!user) {
    return null;
  }

  const isFreelancer =
    user.role === "FREELANCER" ||
    user.role === "ADMIN" ||
    user.role === "SUPER_ADMIN";
  const firstName = user.name?.split(" ")[0] ?? "there";
  const completion = computeProfileCompletion({
    name: user.name,
    username: user.username,
    bio: user.bio,
    location: user.location,
    website: user.website,
    github: user.github,
    linkedin: user.linkedin,
    timezone: user.timezone,
    skills: user.skills,
    languages: user.languages,
    headline: user.profile?.headline,
    occupation: user.profile?.occupation,
    education: user.profile?.education,
    experience: user.profile?.experience,
    phoneNumber: user.profile?.phoneNumber,
    country: user.profile?.country,
    city: user.profile?.city,
  });

  return (
    <div className="space-y-8">
      <div className="flex flex-wrap items-start justify-between gap-4">
        <div>
          <div className="flex items-center gap-2">
            <h1 className="text-2xl font-bold tracking-tight">
              Welcome back, {firstName}
            </h1>
            <Badge variant={isFreelancer ? "success" : "secondary"}>
              {isFreelancer ? "Freelancer" : "Buyer"}
            </Badge>
          </div>
          <p className="mt-1 text-sm text-muted-foreground">
            Manage your profile, favorites and services in one place.
          </p>
        </div>
        {isFreelancer ? (
          <Button asChild>
            <Link href="/dashboard/services/new">
              Publish a service <ArrowRight />
            </Link>
          </Button>
        ) : (
          <Button asChild>
            <Link href="/become-a-freelancer">
              Become a seller <ArrowRight />
            </Link>
          </Button>
        )}
      </div>

      <div>
        <div className="flex items-center justify-between text-sm">
          <span className="font-medium">Profile completion</span>
          <span className="text-muted-foreground">{completion}%</span>
        </div>
        <div className="mt-2 h-2 w-full overflow-hidden rounded-full bg-muted">
          <div
            className="h-full rounded-full bg-primary transition-all"
            style={{ width: `${completion}%` }}
          />
        </div>
        {completion === 100 ? (
          <p className="mt-2 flex items-center gap-1.5 text-xs text-emerald-600 dark:text-emerald-400">
            <BadgeCheck className="h-3.5 w-3.5" /> Your profile is complete.
          </p>
        ) : (
          <p className="mt-2 text-xs text-muted-foreground">
            Complete your profile to increase trust with buyers and sellers.
          </p>
        )}
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <StatCard
          label="Order total"
          value={purchaseCount}
          icon={Package}
          hint="Orders you’ve placed"
        />
        <StatCard
          label="Favorites"
          value={favoriteCount}
          icon={Heart}
          hint="Saved services"
        />
        {isFreelancer ? (
          <>
            <StatCard
              label="My services"
              value={serviceCount}
              icon={Briefcase}
              hint="Published and draft"
            />
            <StatCard
              label="Rating"
              value={
                user.freelancerProfile?.reviewCount
                  ? user.freelancerProfile.ratingValue.toFixed(1)
                  : "—"
              }
              icon={Star}
              hint={
                user.freelancerProfile?.reviewCount
                  ? `${user.freelancerProfile.reviewCount} reviews`
                  : "No reviews yet"
              }
            />
          </>
        ) : (
          <StatCard
            label="Profile setup"
            value={`${completion}%`}
            icon={UserIcon}
            hint="How complete your profile is"
          />
        )}
      </div>

      <div>
        <h2 className="mb-3 text-lg font-semibold">Quick links</h2>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <QuickLink
            href="/dashboard/profile"
            icon={<UserIcon className="h-5 w-5" />}
            title="Edit profile"
            description="Update your bio, location, links and skills."
          />
          <QuickLink
            href="/dashboard/favorites"
            icon={<Heart className="h-5 w-5" />}
            title="Favorites"
            description="Review services you’ve saved for later."
          />
          {isFreelancer ? (
            <QuickLink
              href="/dashboard/services"
              icon={<Briefcase className="h-5 w-5" />}
              title="My services"
              description="Manage your listings and see performance."
            />
          ) : (
            <QuickLink
              href="/become-a-freelancer"
              icon={<BadgeCheck className="h-5 w-5" />}
              title="Become a seller"
              description="Publish services and start earning."
            />
          )}
        </div>
      </div>

      <Card className="overflow-hidden border-primary/20 bg-gradient-to-br from-primary/10 to-fuchsia-500/10">
        <CardHeader>
          <CardTitle className="text-lg">
            {isFreelancer ? "Grow your business" : "Make your next big idea real"}
          </CardTitle>
          <CardDescription>
            {isFreelancer
              ? "Publish polished services with clear packages and shipping times to attract more buyers."
              : "Browse the marketplace to explore digital services from vetted freelancers."}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Button asChild variant="outline" className="bg-background">
            <Link href={isFreelancer ? "/dashboard/services/new" : "/marketplace"}>
              {isFreelancer ? "Publish a service" : "Explore services"} <ArrowRight />
            </Link>
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}

function QuickLink({
  href,
  icon,
  title,
  description,
}: {
  href: string;
  icon: React.ReactNode;
  title: string;
  description: string;
}) {
  return (
    <Link
      href={href}
      className="group flex items-start gap-4 rounded-xl border bg-card p-5 transition-all hover:-translate-y-0.5 hover:shadow-md"
    >
      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-accent text-accent-foreground group-hover:bg-primary group-hover:text-primary-foreground">
        {icon}
      </span>
      <span>
        <span className="block font-semibold">{title}</span>
        <span className="mt-0.5 block text-sm text-muted-foreground">
          {description}
        </span>
      </span>
    </Link>
  );
}