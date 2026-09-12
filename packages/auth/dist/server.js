import { betterAuth } from "better-auth";
import { prismaAdapter } from "@better-auth/prisma-adapter";
import { prisma } from "@ideons/database";
import { env, isProduction } from "./env";
import { sendPasswordResetEmail, sendVerificationEmail } from "./email/templates";
export const auth = betterAuth({
    appName: "IDEONS Ecosystem",
    baseURL: env.AUTH_BASE_URL,
    secret: env.AUTH_SECRET,
    database: prismaAdapter(prisma, { provider: "postgresql" }),
    advanced: {
        cookiePrefix: "ideons",
        defaultCookieAttributes: {
            httpOnly: true,
            sameSite: "lax",
            secure: isProduction,
        },
    },
    session: {
        expiresIn: 60 * 60 * 24 * 7,
        updateAge: 60 * 60 * 24,
        cookieCache: {
            enabled: true,
            maxAge: 5 * 60,
        },
    },
    user: {
        additionalFields: {
            username: {
                type: "string",
                required: true,
                input: true,
            },
            role: {
                type: "string",
                required: false,
                defaultValue: "BUYER",
            },
            bio: {
                type: "string",
                required: false,
            },
            location: {
                type: "string",
                required: false,
            },
        },
    },
    emailAndPassword: {
        enabled: true,
        requireEmailVerification: true,
        minPasswordLength: 8,
        maxPasswordLength: 128,
        resetPasswordTokenExpiresIn: 60 * 60,
        sendResetPassword: async ({ user, url }) => {
            await sendPasswordResetEmail(user.email, url);
        },
        onPasswordReset: async ({ user }) => {
            await prisma.auditLog.create({
                data: {
                    actorId: user.id,
                    action: "PASSWORD_RESET",
                    entityType: "User",
                    entityId: user.id,
                },
            });
        },
    },
    emailVerification: {
        sendOnSignUp: true,
        autoSignInAfterVerification: true,
        sendVerificationEmail: async ({ user, url }) => {
            await sendVerificationEmail(user.email, url);
        },
    },
    socialProviders: {
        google: {
            clientId: env.GOOGLE_CLIENT_ID ?? "",
            clientSecret: env.GOOGLE_CLIENT_SECRET ?? "",
        },
    },
    rateLimit: {
        enabled: true,
        window: 10,
        max: 100,
    },
    onAPIError: {
        throw: true,
    },
    logger: {
        disabled: isProduction,
        level: "info",
    },
    databaseHooks: {
        user: {
            create: {
                after: async (user) => {
                    const onboarding = [
                        prisma.userXP.create({ data: { userId: user.id } }),
                        prisma.profile.create({ data: { userId: user.id } }),
                        prisma.buyerProfile.create({ data: { userId: user.id } }),
                        prisma.auditLog.create({
                            data: {
                                actorId: user.id,
                                action: "USER_REGISTERED",
                                entityType: "User",
                                entityId: user.id,
                            },
                        }),
                    ];
                    await Promise.all(onboarding.map((p) => p.catch(() => undefined)));
                },
            },
        },
    },
});
