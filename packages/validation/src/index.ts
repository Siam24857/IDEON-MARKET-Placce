import { z } from "zod";

export * from "zod";
export { z };

export const idSchema = z.string().trim().min(1, "Invalid id");
export const cuidSchema = z
  .string()
  .trim()
  .min(1)
  .regex(/^[a-z0-9]{8,}$/i, "Must be a cuid-style identifier");

export const slugSchema = z
  .string()
  .trim()
  .min(1)
  .regex(/^[a-z0-9]+(?:-[a-z0-9]+)*$/, "Invalid slug");

export const usernameSchema = z
  .string()
  .trim()
  .min(3)
  .max(30)
  .regex(/^[a-z0-9_.]+$/, "Lowercase letters, numbers, dots and underscores only");

export const emailSchema = z.email("Invalid email address");

export const passwordSchema = z
  .string()
  .min(8, "Password must be at least 8 characters")
  .max(128, "Password is too long");

export const moneyCentsSchema = z
  .number({ message: "Price must be a number of cents" })
  .int("Price must be whole cents")
  .min(0, "Price cannot be negative");

export const percentSchema = z
  .number()
  .int()
  .min(0)
  .max(100);

export const urlSchema = z.url("Invalid URL");

export const paginationSchema = z.object({
  page: z.coerce.number().int().min(1).default(1),
  pageSize: z.coerce.number().int().min(1).max(100).default(12),
});

export const searchTermSchema = z.string().trim().max(120);

export type PaginationInput = z.infer<typeof paginationSchema>;