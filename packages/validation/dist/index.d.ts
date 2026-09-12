import { z } from "zod";
export * from "zod";
export { z };
export declare const idSchema: z.ZodString;
export declare const cuidSchema: z.ZodString;
export declare const slugSchema: z.ZodString;
export declare const usernameSchema: z.ZodString;
export declare const emailSchema: z.ZodEmail;
export declare const passwordSchema: z.ZodString;
export declare const moneyCentsSchema: z.ZodNumber;
export declare const percentSchema: z.ZodNumber;
export declare const urlSchema: z.ZodURL;
export declare const paginationSchema: z.ZodObject<{
    page: z.ZodDefault<z.ZodCoercedNumber<unknown>>;
    pageSize: z.ZodDefault<z.ZodCoercedNumber<unknown>>;
}, z.core.$strip>;
export declare const searchTermSchema: z.ZodString;
export type PaginationInput = z.infer<typeof paginationSchema>;
//# sourceMappingURL=index.d.ts.map