"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { ArrowLeft, Loader2, Save } from "lucide-react";
import Link from "next/link";

import { Field } from "@/components/ui/field";
import { TextareaField } from "@/components/ui/textarea-field";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { serviceCreateSchema, type ServiceCreateValues } from "@/lib/validators";

export function ServiceForm({
  categories,
}: {
  categories: { id: string; name: string }[];
}) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ServiceCreateValues>({
    resolver: zodResolver(serviceCreateSchema),
    defaultValues: {
      title: "",
      shortDescription: "",
      description: "",
      categoryId: "",
      price: 50,
      deliveryTime: 5,
      revisions: 1,
      tags: "",
    },
  });

  async function onSubmit(values: ServiceCreateValues) {
    setLoading(true);
    setError(null);
    try {
      const res = await fetch("/api/freelancer/services", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });
      const json = await res.json();
      if (!json.success) {
        setError(json.message ?? "Something went wrong");
        setLoading(false);
        return;
      }
      router.push("/dashboard/services");
      router.refresh();
    } catch {
      setError("Something went wrong");
      setLoading(false);
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
      {error ? (
        <p className="rounded-md border border-destructive/30 bg-destructive/5 p-3 text-sm text-destructive">
          {error}
        </p>
      ) : null}

      <Card>
        <CardHeader>
          <CardTitle>Service details</CardTitle>
          <CardDescription>
            Buyers see this on your listing. Be clear and specific.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <Field
            label="Title"
            placeholder="e.g. Full-Stack SaaS Application"
            error={errors.title?.message}
            {...register("title")}
          />
          <Field
            label="Short description"
            placeholder="A one-liner buyers can scan quickly"
            hint="Shown on cards and search results"
            error={errors.shortDescription?.message}
            {...register("shortDescription")}
          />
          <TextareaField
            label="Description"
            placeholder="Explain exactly what buyers receive, your process, and any unique value you bring..."
            rows={8}
            error={errors.description?.message}
            {...register("description")}
          />
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Pricing</CardTitle>
          <CardDescription>
            Choose a category and set your service price.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-1.5">
            <label className="text-sm font-medium" htmlFor="categoryId">
              Category
            </label>
            <select
              id="categoryId"
              className="flex h-10 w-full rounded-lg border border-input bg-background px-3 py-2 text-sm shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
              defaultValue=""
              {...register("categoryId")}
            >
              <option value="" disabled>
                Choose a category
              </option>
              {categories.map((cat) => (
                <option key={cat.id} value={cat.id}>
                  {cat.name}
                </option>
              ))}
            </select>
            {errors.categoryId?.message ? (
              <p className="text-xs text-destructive">
                {errors.categoryId.message}
              </p>
            ) : null}
          </div>

          <div className="grid gap-4 sm:grid-cols-3">
            <Field
              label="Price (USD)"
              type="number"
              min={5}
              max={100000}
              error={errors.price?.message}
              {...register("price", { valueAsNumber: true })}
            />
            <Field
              label="Delivery (days)"
              type="number"
              min={1}
              max={120}
              error={errors.deliveryTime?.message}
              {...register("deliveryTime", { valueAsNumber: true })}
            />
            <Field
              label="Revisions included"
              type="number"
              min={0}
              max={20}
              error={errors.revisions?.message}
              {...register("revisions", { valueAsNumber: true })}
            />
          </div>

          <Field
            label="Tags"
            placeholder="saas, stripe, next.js, typescript"
            hint="Comma-separated keywords buyers can search"
            error={errors.tags?.message}
            {...register("tags")}
          />
        </CardContent>
      </Card>

      <div className="flex items-center justify-between">
        <Button type="button" variant="ghost" asChild>
          <Link href="/dashboard/services">
            <ArrowLeft />
            Back
          </Link>
        </Button>
        <Button type="submit" disabled={loading}>
          {loading && <Loader2 className="animate-spin" />}
          <Save />
          Submit for review
        </Button>
      </div>
    </form>
  );
}