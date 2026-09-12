import type { Metadata } from "next";
import Link from "next/link";
import { requireUser } from "@ideons/auth";
import { prisma } from "@ideons/database";
import PostJobForm from "@/components/post-job-form";

export const metadata: Metadata = { title: "Post a job" };
export const dynamic = "force-dynamic";

export default async function PostJobPage() {
  const { user } = await requireUser();

  const companies = await prisma.company.findMany({
    where: { ownerId: user.id },
    select: { id: true, name: true, slug: true },
    orderBy: { name: "asc" },
  });

  return (
    <main className="mx-auto max-w-6xl px-4 py-10">
      <h1 className="text-2xl font-bold">Post a job</h1>
      <p className="mt-1 text-sm text-muted-foreground">
        Share an opening with every IDEONS user. You can reuse an existing
        company profile or create a new one.
      </p>
      {companies.length > 0 ? (
        <p className="mt-2 text-sm text-muted-foreground">
          You manage:{" "}
          {companies.map((c) => (
            <Link key={c.id} href={`/companies/${c.slug}`} className="text-primary hover:underline">
              <span className="mx-0.5">{c.name}</span>
            </Link>
          ))}
        </p>
      ) : null}
      <PostJobForm companies={companies} />
    </main>
  );
}