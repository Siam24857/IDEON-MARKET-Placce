export const PROFILE_FIELDS = [
  "name",
  "username",
  "bio",
  "location",
  "website",
  "github",
  "linkedin",
  "timezone",
  "skills",
  "languages",
  "headline",
  "occupation",
  "education",
  "experience",
  "phoneNumber",
  "country",
  "city",
] as const;

export function toOptional(value: string | null | undefined): string | null {
  const trimmed = value?.trim();
  return trimmed ? trimmed : null;
}

export function parseCommaList(
  value: string | null | undefined,
  max = 30
): string[] {
  if (!value) return [];
  const seen = new Set<string>();
  for (const part of value.split(",")) {
    const cleaned = part.trim();
    if (!cleaned) continue;
    seen.add(cleaned);
    if (seen.size >= max) break;
  }
  return [...seen];
}

export function computeProfileCompletion(
  input: Record<string, unknown>
): number {
  const filled = PROFILE_FIELDS.filter((field) => {
    const value = input[field];
    return (
      value !== undefined &&
      value !== null &&
      (Array.isArray(value) ? value.length > 0 : String(value).trim() !== "")
    );
  }).length;
  return Math.round((filled / PROFILE_FIELDS.length) * 100);
}