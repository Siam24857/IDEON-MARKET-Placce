"use server";

import { revalidatePath } from "next/cache";
import { z } from "zod";
import { requireUser } from "@ideons/auth";
import { prisma } from "@ideons/database";

function slugify(input: string): string {
  return input
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)+/g, "")
    .slice(0, 80);
}

const companySchema = z.object({
  name: z.string().min(2, "Company name must be at least 2 characters"),
  description: z.string().max(2000).optional(),
  website: z.string().url("Enter a valid website URL").or(z.literal("")).optional(),
  industry: z.string().max(100).optional(),
  location: z.string().max(120).optional(),
  size: z.string().max(60).optional(),
});

const jobSchema = z.object({
  title: z.string().min(3, "Job title must be at least 3 characters"),
  description: z.string().min(20, "Description must be at least 20 characters"),
  requirements: z.string().max(4000).optional(),
  salaryMin: z.number().int().min(0).nullable().optional(),
  salaryMax: z.number().int().min(0).nullable().optional(),
  currency: z.string().min(3).max(3).default("USD"),
  location: z.string().max(120).optional(),
  remote: z.boolean().default(false),
  type: z.enum(["FULL_TIME", "PART_TIME", "CONTRACT", "INTERNSHIP", "FREELANCE"]).default("FULL_TIME"),
  level: z.enum(["JUNIOR", "MID", "SENIOR", "LEAD", "STAFF"]).optional(),
  category: z.string().max(60).optional(),
  tags: z.array(z.string().trim().min(1).max(30)).max(8).default([]),
});

export type ActionState =
  | { ok: true; message: string }
  | { ok: false; error: string };

function toInt(value: FormDataEntryValue | null): number | null {
  if (!value || String(value).trim() === "") return null;
  const n = Number(value);
  return Number.isFinite(n) ? Math.round(n) : null;
}

function toStr(value: FormDataEntryValue | null): string {
  return String(value ?? "").trim();
}

export async function postJob(formData: FormData): Promise<ActionState> {
  try {
    const { user } = await requireUser();

    const companyRaw = {
      name: toStr(formData.get("companyName")) || toStr(formData.get("company")),
      description: toStr(formData.get("companyDescription")),
      website: toStr(formData.get("companyWebsite")),
      industry: toStr(formData.get("companyIndustry")),
      location: toStr(formData.get("companyLocation")),
      size: toStr(formData.get("companySize")),
    };
    const companyId = toStr(formData.get("companyId"));
    if (!companyId) {
      const companyParsed = companySchema.safeParse(companyRaw);
      if (!companyParsed.success) {
        return { ok: false, error: companyParsed.error.issues[0]?.message ?? "Invalid company details" };
      }
      const company = await prisma.company.create({
        data: {
          ...companyParsed.data,
          slug: slugify(companyParsed.data.name) + "-" + companyParsed.data.name.length,
          ownerId: user.id,
        },
      });
      formData.set("companyId", company.id);
    }

    const tagsRaw = toStr(formData.get("tags"));
    const tags = tagsRaw ? tagsRaw.split(",").map((t) => t.trim()).filter(Boolean) : [];

    const jobParsed = jobSchema.safeParse({
      title: toStr(formData.get("title")),
      description: toStr(formData.get("description")),
      requirements: toStr(formData.get("requirements")),
      salaryMin: toInt(formData.get("salaryMin")),
      salaryMax: toInt(formData.get("salaryMax")),
      currency: toStr(formData.get("currency")) || "USD",
      location: toStr(formData.get("location")),
      remote: formData.get("remote") === "on",
      type: toStr(formData.get("type")) || "FULL_TIME",
      level: toStr(formData.get("level")) || undefined,
      category: toStr(formData.get("category")),
      tags,
    });
    if (!jobParsed.success) {
      return { ok: false, error: jobParsed.error.issues[0]?.message ?? "Invalid job details" };
    }

    const data = jobParsed.data;
    const existing = await prisma.job.findUnique({
      where: { slug: slugify(data.title) },
      select: { id: true },
    });
    const slugBase = existing
      ? `${slugify(data.title)}-${Date.now().toString(36)}`
      : slugify(data.title);

    await prisma.job.create({
      data: {
        title: data.title,
        slug: slugBase,
        description: data.description,
        requirements: data.requirements || null,
        salaryMin: data.salaryMin ?? null,
        salaryMax: data.salaryMax ?? null,
        currency: data.currency,
        location: data.location || null,
        remote: data.remote,
        type: data.type,
        level: data.level || null,
        category: data.category || null,
        tags: data.tags,
        status: "OPEN",
        companyId: formData.get("companyId") as string,
        postedById: user.id,
      },
    });

    revalidatePath("/jobs");
    revalidatePath("/");
    revalidatePath("/my-postings");
    return { ok: true, message: "Job posted" };
  } catch (err) {
    const message = err instanceof Error ? err.message : "Failed to post job";
    return { ok: false, error: message };
  }
}

const applySchema = z.object({
  resumeTitle: z.string().min(2, "Resume title is required").max(120),
  skills: z.array(z.string().trim().min(1).max(40).toLowerCase()).max(30).default([]),
  coverLetter: z.string().max(3000).optional(),
});

export async function applyToJob(jobId: string, formData: FormData): Promise<ActionState> {
  try {
    const { user } = await requireUser();

    const skillsRaw = toStr(formData.get("skills"));
    const parsed = applySchema.safeParse({
      resumeTitle: toStr(formData.get("resumeTitle")) || `Resume for ${user.name ?? "job"}`,
      skills: skillsRaw ? skillsRaw.split(",").map((s) => s.trim()).filter(Boolean) : [],
      coverLetter: toStr(formData.get("coverLetter")),
    });
    if (!parsed.success) {
      return { ok: false, error: parsed.error.issues[0]?.message ?? "Invalid application" };
    }

    const existing = await prisma.jobApplication.findUnique({
      where: { jobId_applicantId: { jobId, applicantId: user.id } },
      select: { id: true },
    });
    if (existing) {
      return { ok: false, error: "You already applied to this job" };
    }

    const resume = await prisma.resume.create({
      data: {
        userId: user.id,
        title: parsed.data.resumeTitle,
        skills: parsed.data.skills,
      },
    });

    await prisma.jobApplication.create({
      data: {
        jobId,
        applicantId: user.id,
        resumeId: resume.id,
        status: "PENDING",
        coverLetter: parsed.data.coverLetter || null,
      },
    });

    revalidatePath("/jobs");
    revalidatePath("/my-postings");
    return { ok: true, message: "Application submitted" };
  } catch (err) {
    const message = err instanceof Error ? err.message : "Failed to apply";
    return { ok: false, error: message };
  }
}