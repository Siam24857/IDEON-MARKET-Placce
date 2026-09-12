export type Role = "BUYER" | "FREELANCER" | "ADMIN" | "SUPER_ADMIN";
export declare const getSession: () => Promise<{
    session: {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        userId: string;
        expiresAt: Date;
        token: string;
        ipAddress?: string | null | undefined | undefined;
        userAgent?: string | null | undefined | undefined;
    };
    user: {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        email: string;
        emailVerified: boolean;
        name: string;
        image?: string | null | undefined | undefined;
        username: string;
        role: string | null | undefined;
        bio?: string | null | undefined;
        location?: string | null | undefined;
    };
} | null>;
export declare function requireUser(): Promise<{
    session: {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        userId: string;
        expiresAt: Date;
        token: string;
        ipAddress?: string | null | undefined | undefined;
        userAgent?: string | null | undefined | undefined;
    };
    user: {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        email: string;
        emailVerified: boolean;
        name: string;
        image?: string | null | undefined | undefined;
        username: string;
        role: string | null | undefined;
        bio?: string | null | undefined;
        location?: string | null | undefined;
    };
}>;
export declare function requireRole(roles: Role[]): Promise<{
    session: {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        userId: string;
        expiresAt: Date;
        token: string;
        ipAddress?: string | null | undefined | undefined;
        userAgent?: string | null | undefined | undefined;
    };
    user: {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        email: string;
        emailVerified: boolean;
        name: string;
        image?: string | null | undefined | undefined;
        username: string;
        role: string | null | undefined;
        bio?: string | null | undefined;
        location?: string | null | undefined;
    };
}>;
export declare function requireAdmin(): Promise<{
    session: {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        userId: string;
        expiresAt: Date;
        token: string;
        ipAddress?: string | null | undefined | undefined;
        userAgent?: string | null | undefined | undefined;
    };
    user: {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        email: string;
        emailVerified: boolean;
        name: string;
        image?: string | null | undefined | undefined;
        username: string;
        role: string | null | undefined;
        bio?: string | null | undefined;
        location?: string | null | undefined;
    };
}>;
export declare function requireFreelancer(): Promise<{
    session: {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        userId: string;
        expiresAt: Date;
        token: string;
        ipAddress?: string | null | undefined | undefined;
        userAgent?: string | null | undefined | undefined;
    };
    user: {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        email: string;
        emailVerified: boolean;
        name: string;
        image?: string | null | undefined | undefined;
        username: string;
        role: string | null | undefined;
        bio?: string | null | undefined;
        location?: string | null | undefined;
    };
}>;
