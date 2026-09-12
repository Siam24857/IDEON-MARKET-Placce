import type { Metadata } from "next";

import { requireUser } from "@/lib/session";
import { PlaceholderPage } from "@/components/placeholder-page";

export const metadata: Metadata = {
  title: "Dashboard",
};

export default async function DashboardHomePage() {
  await requireUser();
  return <PlaceholderPage title="Dashboard" description="Your dashboard is being built (Phases 5–6)." />;
}