import type { Metadata } from "next";

import { PlaceholderPage } from "@/components/placeholder-page";

export const metadata: Metadata = {
  title: "Become a Seller",
};

export default function BecomeAFreelancerPage() {
  return (
    <PlaceholderPage
      title="Become a seller"
      description="Create your freelancer profile, publish services and start earning. Onboarding flow lands in Phase 5/53."
    />
  );
}