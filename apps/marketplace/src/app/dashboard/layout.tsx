import { Navbar } from "@/components/marketplace/navbar";
import {
  SidebarNav,
  type SidebarNavItem,
} from "@/components/dashboard/sidebar-nav";
import { requireUser } from "@/lib/session";

export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await requireUser();
  const user = session.user;
  const isFreelancer =
    user.role === "FREELANCER" ||
    user.role === "ADMIN" ||
    user.role === "SUPER_ADMIN";

  const items: SidebarNavItem[] = [
    { href: "/dashboard", label: "Overview", icon: "LayoutDashboard" },
    { href: "/dashboard/profile", label: "Profile", icon: "User" },
    { href: "/dashboard/favorites", label: "Favorites", icon: "Heart" },
    ...(isFreelancer
      ? [{ href: "/dashboard/services", label: "My services", icon: "Briefcase" }]
      : [{ href: "/become-a-freelancer", label: "Become a seller", icon: "Store" }]),
  ];

  return (
    <>
      <Navbar />
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6">
        <div className="flex flex-col gap-8 md:flex-row">
          <aside className="shrink-0 md:w-60">
            <SidebarNav
              name={user.name ?? "User"}
              email={user.email ?? ""}
              image={user.image}
              items={items}
            />
          </aside>
          <div className="min-w-0 flex-1">{children}</div>
        </div>
      </div>
    </>
  );
}