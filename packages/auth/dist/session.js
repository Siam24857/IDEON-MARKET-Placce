import { cache } from "react";
import { headers } from "next/headers";
import { redirect } from "next/navigation";
import { auth } from "./server";
export const getSession = cache(async () => {
    return auth.api.getSession({ headers: await headers() });
});
export async function requireUser() {
    const session = await getSession();
    if (!session?.user) {
        redirect("/login");
    }
    return session;
}
export async function requireRole(roles) {
    const session = await getSession();
    const user = session?.user;
    if (!user) {
        redirect("/login");
    }
    const userRole = user.role;
    if (!userRole || !roles.includes(userRole)) {
        redirect("/");
    }
    return session;
}
export async function requireAdmin() {
    return requireRole(["ADMIN", "SUPER_ADMIN"]);
}
export async function requireFreelancer() {
    return requireRole(["FREELANCER", "ADMIN", "SUPER_ADMIN"]);
}
