import type { Metadata } from "next";
import Link from "next/link";
import {
  BadgeCheck,
  Clock,
  Building,
  CheckCircle2,
  Rocket,
  ShieldCheck,
  Wallet,
} from "lucide-react";

import { Navbar } from "@/components/marketplace/navbar";
import { FreelancerApplyForm } from "@/components/dashboard/freelancer-apply-form";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { getSession } from "@/lib/session";
import { prisma } from "@/lib/prisma";

export const metadata: Metadata = {
  title: "Become a seller",
};

export default async function BecomeAFreelancerPage() {
  const session = await getSession();
  const user = session?.user;

  let profile = null;
  let dbUser = null;
  if (user) {
    [profile, dbUser] = await Promise.all([
      prisma.freelancerProfile.findUnique({
        where: { userId: user.id },
      }),
      prisma.user.findUnique({
        where: { id: user.id },
        select: { skills: true, languages: true },
      }),
    ]);
  }

  const sellsActive =
    profile?.status === "ACTIVE" ||
    (!profile && user?.role === "FREELANCER");

  return (
    <>
      <Navbar />
      <main className="mx-auto max-w-7xl px-4 py-12 sm:px-6">
        <section className="grid gap-12 lg:grid-cols-2">
          <div>
            <p className="mb-4 inline-flex items-center gap-2 rounded-full border bg-card px-3 py-1 text-xs font-medium text-muted-foreground">
              <Rocket className="h-3.5 w-3.5 text-primary" />
              Freelancer onboarding
            </p>
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
              Turn your skills into{" "}
              <span className="bg-gradient-to-r from-primary to-fuchsia-500 bg-clip-text text-transparent">
                income
              </span>
            </h1>
            <p className="mt-4 max-w-lg text-lg text-muted-foreground">
              Publish services, receive orders and get paid through IDEONS
              Marketplace. Build your profile once — sell forever.
            </p>

            <ul className="mt-8 space-y-4">
              {[
                {
                  icon: Building,
                  title: "Create your seller profile",
                  text: "Showcase your skills, experience and languages.",
                },
                {
                  icon: Wallet,
                  title: "Publish services",
                  text: "List digital services with clear pricing and delivery.",
                },
                {
                  icon: ShieldCheck,
                  title: "Get paid securely",
                  text: "Payments are held safely and released on delivery.",
                },
              ].map((item) => (
                <li key={item.title} className="flex gap-3">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-accent text-accent-foreground">
                    <item.icon className="h-5 w-5" />
                  </span>
                  <div>
                    <p className="font-semibold">{item.title}</p>
                    <p className="text-sm text-muted-foreground">{item.text}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <div>
            {!user ? (
              <Card className="w-full">
                <CardHeader>
                  <CardTitle className="text-2xl">Sign in to get started</CardTitle>
                  <CardDescription>
                    Create an account or sign in to begin your seller application.
                  </CardDescription>
                </CardHeader>
                <CardFooter className="flex gap-3">
                  <Button asChild className="flex-1">
                    <Link href="/register">Create account</Link>
                  </Button>
                  <Button asChild variant="outline" className="flex-1">
                    <Link href="/login">Sign in</Link>
                  </Button>
                </CardFooter>
              </Card>
            ) : sellsActive ? (
              <Card className="w-full border-emerald-200 dark:border-emerald-900">
                <CardHeader>
                  <span className="flex h-12 w-12 items-center justify-center rounded-full bg-emerald-100 text-emerald-700 dark:bg-emerald-950 dark:text-emerald-300">
                    <CheckCircle2 className="h-6 w-6" />
                  </span>
                  <CardTitle className="text-2xl">You’re a seller</CardTitle>
                  <CardDescription>
                    Your freelancer profile is active. You can now publish and
                    manage services from your dashboard.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-3">
                  {profile ? (
                    <div className="rounded-lg border bg-card p-4">
                      <p className="font-semibold">{profile.title}</p>
                      <p className="mt-1 text-sm text-muted-foreground">
                        {profile.about}
                      </p>
                    </div>
                  ) : null}
                </CardContent>
                <CardFooter className="gap-3">
                  <Button asChild>
                    <Link href="/dashboard/services">Manage services</Link>
                  </Button>
                  <Button asChild variant="outline">
                    <Link href="/marketplace">Browse marketplace</Link>
                  </Button>
                </CardFooter>
              </Card>
            ) : profile?.status === "PENDING" ? (
              <Card className="w-full">
                <CardHeader>
                  <span className="flex h-12 w-12 items-center justify-center rounded-full bg-amber-100 text-amber-700 dark:bg-amber-950 dark:text-amber-300">
                    <Clock className="h-6 w-6" />
                  </span>
                  <CardTitle className="text-2xl">Application under review</CardTitle>
                  <CardDescription>
                    Our team reviews every seller profile. You’ll be able to
                    publish services once your profile is approved.
                  </CardDescription>
                </CardHeader>
                <CardFooter className="gap-3">
                  <Button asChild>
                    <Link href="/dashboard">Go to dashboard</Link>
                  </Button>
                  <Button asChild variant="outline">
                    <Link href="/marketplace">Explore services</Link>
                  </Button>
                </CardFooter>
              </Card>
            ) : (
              <Card className="w-full">
                <CardHeader>
                  <CardTitle className="text-2xl">Start your application</CardTitle>
                  <CardDescription>
                    Tell buyers who you are and what you can deliver.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <FreelancerApplyForm
                    skills={dbUser?.skills ?? []}
                    languages={dbUser?.languages ?? []}
                  />
                </CardContent>
                <CardFooter className="text-xs text-muted-foreground">
                  <BadgeCheck className="mr-1.5 h-4 w-4 shrink-0" />
                  Applications are reviewed before going live.
                </CardFooter>
              </Card>
            )}
          </div>
        </section>
      </main>
    </>
  );
}