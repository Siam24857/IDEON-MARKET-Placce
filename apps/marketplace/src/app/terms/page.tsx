import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service",
};

export default function TermsPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-16">
      <h1 className="text-3xl font-bold tracking-tight">Terms of Service</h1>
      <p className="mt-4 text-muted-foreground">
        IDEONS Marketplace connects buyers with freelance sellers of digital
        services and products. Detailed terms are finalized before launch;
        this page is a placeholder.
      </p>
    </div>
  );
}