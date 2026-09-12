import Link from "next/link";
import { ArrowRight, Building2, Briefcase, MapPin, Users } from "lucide-react";
import { prisma } from "@ideons/database";
import { Badge, Button, Card, CardContent, CardDescription, CardHeader, CardTitle } from "@ideons/ui";

export const dynamic = "force-dynamic";

function formatSalary(job: { salaryMin: number | null; salaryMax: number | null; currency: string }) {
  if (job.salaryMin == null && job.salaryMax == null) return "Pay not disclosed";
  const fmt = (n: number) =>
    n.toLocaleString(undefined, { style: "currency", currency: job.currency, maximumFractionDigits: 0 });
  if (job.salaryMin != null && job.salaryMax != null)
    return `${fmt(job.salaryMin)} – ${fmt(job.salaryMax)}`;
  return job.salaryMin != null ? `From ${fmt(job.salaryMin)}` : `Up to ${fmt(job.salaryMax!)}`;
}

export default async function HomePage() {
  const [jobs, companies, applications, latest] = await Promise.all([
    prisma.job.count({ where: { status: "OPEN" } }),
    prisma.company.count(),
    prisma.jobApplication.count(),
    prisma.job.findMany({
      where: { status: "OPEN" },
      orderBy: { createdAt: "desc" },
      take: 3,
      include: { company: true },
    }),
  ]);

  return (
    <main>
      <section className="border-b bg-gradient-to-b from-background to-muted/40">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 py-16 md:grid-cols-[1.2fr_1fr] md:py-24">
          <div>
            <Badge className="mb-4">Now powered by the IDEONS platform</Badge>
            <h1 className="text-4xl font-extrabold leading-tight md:text-5xl">
              Every job, one place.
              <br />
              <span className="text-primary">Build your career.</span>
            </h1>
            <p className="mt-4 max-w-lg text-muted-foreground">
              Companies across the ecosystem post openings here. Apply in one
              click with your shared IDEONS profile — employers see your
              resume instantly.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/jobs">
                <Button size="lg">
                  Browse jobs <ArrowRight />
                </Button>
              </Link>
              <Link href="/companies">
                <Button size="lg" variant="outline">
                  Explore companies
                </Button>
              </Link>
            </div>
            <dl className="mt-10 flex flex-wrap gap-8 text-sm">
              <div>
                <dt className="flex items-center gap-1.5 text-muted-foreground">
                  <Briefcase className="h-4 w-4" /> Open jobs
                </dt>
                <dd className="mt-1 text-2xl font-bold">{jobs}</dd>
              </div>
              <div>
                <dt className="flex items-center gap-1.5 text-muted-foreground">
                  <Building2 className="h-4 w-4" /> Companies
                </dt>
                <dd className="mt-1 text-2xl font-bold">{companies}</dd>
              </div>
              <div>
                <dt className="flex items-center gap-1.5 text-muted-foreground">
                  <Users className="h-4 w-4" /> Applications
                </dt>
                <dd className="mt-1 text-2xl font-bold">{applications}</dd>
              </div>
            </dl>
          </div>

          <div className="flex flex-col justify-center gap-4">
            {latest.map((job) => (
              <Link key={job.id} href={`/jobs/${job.slug}`}>
                <Card className="transition hover:shadow-md">
                  <CardHeader>
                    <CardTitle className="text-lg">{job.title}</CardTitle>
                    <CardDescription>
                      {job.company.name}
                      {job.location ? (
                        <span className="ml-1 inline-flex items-center gap-1 text-muted-foreground">
                          · <MapPin className="h-3 w-3" /> {job.location}
                        </span>
                      ) : null}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="pt-0 text-sm text-muted-foreground">
                    {formatSalary(job)}
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-12">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-bold">How it works</h2>
          <Link href="/jobs" className="text-sm text-primary hover:underline">
            View all jobs <ArrowRight className="inline h-4 w-4" />
          </Link>
        </div>
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {[
            { step: "1", title: "Create your profile", body: "Sign in with one IDEONS account and apply to any job across the ecosystem." },
            { step: "2", title: "Post a job", body: "Companies create a profile and post openings — full-time, part-time, contract or freelance." },
            { step: "3", title: "Manage applicants", body: "Recruiters review every application and its resume from a single dashboard." },
          ].map((s) => (
            <Card key={s.step}>
              <CardHeader>
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <span className="font-bold">{s.step}</span>
                </div>
                <CardTitle className="mt-3 text-base">{s.title}</CardTitle>
                <CardDescription>{s.body}</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </section>
    </main>
  );
}