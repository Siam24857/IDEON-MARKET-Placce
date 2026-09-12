"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { Loader2, PlusCircle } from "lucide-react";
import { Button, Field } from "@ideons/ui";
import { postJob } from "@/lib/actions";

export type OwnedCompany = {
  id: string;
  name: string;
};

const TYPES = ["FULL_TIME", "PART_TIME", "CONTRACT", "INTERNSHIP", "FREELANCE"] as const;
const LEVELS = ["", "JUNIOR", "MID", "SENIOR", "LEAD", "STAFF"] as const;

export default function PostJobForm({ companies }: { companies: OwnedCompany[] }) {
  const router = useRouter();
  const [createCompany, setCreateCompany] = useState(
    companies.length === 0
  );
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  async function onSubmit(formData: FormData) {
    setLoading(true);
    setError(null);
    const result = await postJob(formData);
    setLoading(false);
    if (!result.ok) {
      setError(result.error);
      return;
    }
    router.push("/jobs");
    router.refresh();
  }

  return (
    <form action={onSubmit} className="mt-8 grid gap-6 lg:grid-cols-[1.5fr_1fr]">
      <div className="space-y-5 rounded-lg border bg-card p-6">
        <div>
          <h2 className="font-semibold">Job details</h2>
          <div className="mt-4 space-y-4">
            <Field label="Job title" name="title" required placeholder="e.g. Senior Product Designer" />
            <div className="space-y-1.5">
              <label htmlFor="description" className="text-sm font-medium">Description *</label>
              <textarea
                id="description"
                name="description"
                required
                rows={6}
                placeholder="A clear summary of the role…"
                className="w-full rounded-md border bg-background px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-primary/40"
              />
            </div>
            <div className="space-y-1.5">
              <label htmlFor="requirements" className="text-sm font-medium">
                Requirements <span className="font-normal text-muted-foreground">(optional)</span>
              </label>
              <textarea
                id="requirements"
                name="requirements"
                rows={4}
                placeholder="Skills, experience and qualifications"
                className="w-full rounded-md border bg-background px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-primary/40"
              />
            </div>
            <Field
              label="Tags (comma separated)"
              name="tags"
              placeholder="design, remote, product"
              hint="Used for search and discovery"
            />
          </div>
        </div>

        <div className="grid gap-4 sm:grid-cols-3">
          <Field label="Salary min" name="salaryMin" type="number" min={0} placeholder="0" />
          <Field label="Salary max" name="salaryMax" type="number" min={0} placeholder="0" />
          <Field label="Currency" name="currency" defaultValue="USD" maxLength={3} />
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <Field label="Location" name="location" placeholder="e.g. Lagos, Nigeria" />
          <div className="space-y-1.5">
            <label htmlFor="type" className="text-sm font-medium">Type</label>
            <select id="type" name="type" defaultValue="FULL_TIME" className="w-full rounded-md border bg-background px-3 py-2 text-sm">
              {TYPES.map((t) => (
                <option key={t} value={t}>{t.replace("_", " ")}</option>
              ))}
            </select>
          </div>
          <div className="space-y-1.5">
            <label htmlFor="level" className="text-sm font-medium">Level</label>
            <select id="level" name="level" defaultValue="" className="w-full rounded-md border bg-background px-3 py-2 text-sm">
              {LEVELS.map((l) => (
                <option key={l || "none"} value={l}>{l || "Any level"}</option>
              ))}
            </select>
          </div>
          <div className="space-y-1.5 sm:col-span-2 lg:col-span-3">
            <Field label="Category" name="category" placeholder="e.g. Design" />
          </div>
          <label className="flex items-center gap-2 text-sm font-medium">
            <input type="checkbox" name="remote" className="h-4 w-4" />
            Remote friendly
          </label>
        </div>
      </div>

      <div className="space-y-5 rounded-lg border bg-card p-6 h-fit">
        <div className="flex items-center justify-between">
          <h2 className="font-semibold">Company</h2>
          {companies.length > 0 ? (
            <label className="flex items-center gap-2 text-xs font-medium text-muted-foreground">
              <input
                type="checkbox"
                checked={createCompany}
                onChange={(e) => setCreateCompany(e.target.checked)}
                className="h-3.5 w-3.5"
              />
              Create new
            </label>
          ) : null}
        </div>

        {!createCompany ? (
          <div className="space-y-1.5">
            <label htmlFor="companyId" className="text-sm font-medium">
              Post on behalf of
            </label>
            <select
              id="companyId"
              name="companyId"
              required
              className="w-full rounded-md border bg-background px-3 py-2 text-sm"
            >
              {companies.map((c) => (
                <option key={c.id} value={c.id}>{c.name}</option>
              ))}
            </select>
          </div>
        ) : (
          <div className="space-y-4">
            <Field label="Company name" name="companyName" required placeholder="Acme Inc" />
            <Field label="Industry" name="companyIndustry" placeholder="Technology" />
            <Field label="Location" name="companyLocation" placeholder="City, Country" />
            <Field label="Size" name="companySize" placeholder="e.g. 11-50 employees" />
            <Field label="Website" name="companyWebsite" type="url" placeholder="https://…" />
            <div className="space-y-1.5">
              <label htmlFor="companyDescription" className="text-sm font-medium">About the company</label>
              <textarea
                id="companyDescription"
                name="companyDescription"
                rows={3}
                placeholder="What does your company do?"
                className="w-full rounded-md border bg-background px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-primary/40"
              />
            </div>
          </div>
        )}

        {error ? (
          <p className="rounded-md bg-destructive/10 p-3 text-sm text-destructive">{error}</p>
        ) : null}

        <Button type="submit" className="w-full" disabled={loading}>
          {loading ? <Loader2 className="animate-spin" /> : <PlusCircle />}
          Publish job
        </Button>
      </div>
    </form>
  );
}