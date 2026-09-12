export declare const auth: import("better-auth").Auth<{
    appName: string;
    baseURL: string;
    secret: string;
    database: (options: import("better-auth").BetterAuthOptions) => import("better-auth").DBAdapter<import("better-auth").BetterAuthOptions>;
    advanced: {
        cookiePrefix: string;
        defaultCookieAttributes: {
            httpOnly: true;
            sameSite: "lax";
            secure: boolean;
        };
    };
    session: {
        expiresIn: number;
        updateAge: number;
        cookieCache: {
            enabled: true;
            maxAge: number;
        };
    };
    user: {
        additionalFields: {
            username: {
                type: "string";
                required: true;
                input: true;
            };
            role: {
                type: "string";
                required: false;
                defaultValue: string;
            };
            bio: {
                type: "string";
                required: false;
            };
            location: {
                type: "string";
                required: false;
            };
        };
    };
    emailAndPassword: {
        enabled: true;
        requireEmailVerification: true;
        minPasswordLength: number;
        maxPasswordLength: number;
        resetPasswordTokenExpiresIn: number;
        sendResetPassword: ({ user, url }: {
            user: import("better-auth").User;
            url: string;
            token: string;
        }) => Promise<void>;
        onPasswordReset: ({ user }: {
            user: import("better-auth").User;
        }) => Promise<void>;
    };
    emailVerification: {
        sendOnSignUp: true;
        autoSignInAfterVerification: true;
        sendVerificationEmail: ({ user, url }: {
            user: import("better-auth").User;
            url: string;
            token: string;
        }) => Promise<void>;
    };
    socialProviders: {
        google: {
            clientId: string;
            clientSecret: string;
        };
    };
    rateLimit: {
        enabled: true;
        window: number;
        max: number;
    };
    onAPIError: {
        throw: true;
    };
    logger: {
        disabled: boolean;
        level: "info";
    };
    databaseHooks: {
        user: {
            create: {
                after: (user: {
                    id: string;
                    createdAt: Date;
                    updatedAt: Date;
                    email: string;
                    emailVerified: boolean;
                    name: string;
                    image?: string | null | undefined;
                } & Record<string, unknown>) => Promise<void>;
            };
        };
    };
}>;
