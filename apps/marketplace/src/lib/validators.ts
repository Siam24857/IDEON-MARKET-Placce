import { z } from "zod";

const optionalString = (max: number, label: string) =>
  z
    .string()
    .trim()
    .max(max, `${label} must be at most ${max} characters`)
    .optional()
    .or(z.literal(""));

const urlOrEmpty = (label = "URL") =>
  z
    .string()
    .trim()
    .url(`${label} must be a valid URL starting with http(s)://`)
    .max(300)
    .optional()
    .or(z.literal(""));

export const updateProfileSchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(80),
  username: z
    .string()
    .trim()
    .min(3, "Username must be at least 3 characters")
    .max(30)
    .regex(
      /^[a-zA-Z0-9_-]+$/,
      "Only letters, numbers, underscores and hyphens are allowed"
    ),
  bio: optionalString(1000, "Bio"),
  location: optionalString(120, "Location"),
  website: urlOrEmpty("Website"),
  github: urlOrEmpty("GitHub URL"),
  linkedin: urlOrEmpty("LinkedIn URL"),
  timezone: optionalString(80, "Timezone"),
  skills: optionalString(500, "Skills"),
  languages: optionalString(300, "Languages"),
  headline: optionalString(150, "Headline"),
  occupation: optionalString(150, "Occupation"),
  education: optionalString(300, "Education"),
  experience: optionalString(2000, "Experience"),
  phoneNumber: optionalString(40, "Phone number"),
  country: optionalString(100, "Country"),
  city: optionalString(100, "City"),
});
export type UpdateProfileValues = z.infer<typeof updateProfileSchema>;

export const freelancerApplySchema = z.object({
  title: z
    .string()
    .trim()
    .min(2, "Title is required")
    .max(150, "Title must be at most 150 characters"),
  about: z
    .string()
    .trim()
    .min(10, "Tell us a bit about yourself (at least 10 characters)")
    .max(5000, "About must be at most 5000 characters"),
  skills: z
    .string()
    .trim()
    .min(1, "Add at least one skill")
    .max(500, "Skills must be at most 500 characters"),
  languages: optionalString(300, "Languages"),
});
export type FreelancerApplyValues = z.infer<typeof freelancerApplySchema>;

export const serviceCreateSchema = z.object({
  title: z
    .string()
    .trim()
    .min(3, "Title is required")
    .max(120, "Title must be at most 120 characters"),
  shortDescription: optionalString(250, "Short description"),
  description: z
    .string()
    .trim()
    .min(20, "Description must be at least 20 characters")
    .max(8000, "Description must be at most 8000 characters"),
  categoryId: z.string().min(1, "Choose a category"),
  price: z
    .number()
    .int("Price must be a whole number")
    .gte(5, "Minimum price is $5")
    .lte(100000, "Maximum price is $100,000"),
  deliveryTime: z
    .number()
    .int("Delivery time must be a whole number")
    .gte(1, "Delivery time must be at least 1 day")
    .lte(120, "Delivery time must be at most 120 days"),
  revisions: z
    .number()
    .int("Revisions must be a whole number")
    .gte(0, "Revisions can't be negative")
    .lte(20, "Revisions must be at most 20"),
  tags: optionalString(500, "Tags"),
});
export type ServiceCreateValues = z.infer<typeof serviceCreateSchema>;

export const cartItemSchema = z.object({
  serviceId: z.string().min(1, "Service is required"),
  packageId: z.string().min(1, "Package is required"),
});
export type CartItemValues = z.infer<typeof cartItemSchema>;