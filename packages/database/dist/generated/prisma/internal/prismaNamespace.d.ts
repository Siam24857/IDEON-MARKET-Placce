import * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../models";
import { type PrismaClient } from "./class";
export type * from '../models';
export type DMMF = typeof runtime.DMMF;
export type PrismaPromise<T> = runtime.Types.Public.PrismaPromise<T>;
/**
 * Prisma Errors
 */
export declare const PrismaClientKnownRequestError: typeof runtime.PrismaClientKnownRequestError;
export type PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError;
export declare const PrismaClientUnknownRequestError: typeof runtime.PrismaClientUnknownRequestError;
export type PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError;
export declare const PrismaClientRustPanicError: typeof runtime.PrismaClientRustPanicError;
export type PrismaClientRustPanicError = runtime.PrismaClientRustPanicError;
export declare const PrismaClientInitializationError: typeof runtime.PrismaClientInitializationError;
export type PrismaClientInitializationError = runtime.PrismaClientInitializationError;
export declare const PrismaClientValidationError: typeof runtime.PrismaClientValidationError;
export type PrismaClientValidationError = runtime.PrismaClientValidationError;
/**
 * Re-export of sql-template-tag
 */
export declare const sql: typeof runtime.sqltag;
export declare const empty: runtime.Sql;
export declare const join: typeof runtime.join;
export declare const raw: typeof runtime.raw;
export declare const Sql: typeof runtime.Sql;
export type Sql = runtime.Sql;
/**
 * Decimal.js
 */
export declare const Decimal: typeof runtime.Decimal;
export type Decimal = runtime.Decimal;
export type DecimalJsLike = runtime.DecimalJsLike;
/**
* Extensions
*/
export type Extension = runtime.Types.Extensions.UserArgs;
export declare const getExtensionContext: typeof runtime.Extensions.getExtensionContext;
export type Args<T, F extends runtime.Operation> = runtime.Types.Public.Args<T, F>;
export type Payload<T, F extends runtime.Operation = never> = runtime.Types.Public.Payload<T, F>;
export type Result<T, A, F extends runtime.Operation> = runtime.Types.Public.Result<T, A, F>;
export type Exact<A, W> = runtime.Types.Public.Exact<A, W>;
export type PrismaVersion = {
    client: string;
    engine: string;
};
/**
 * Prisma Client JS version: 7.10.0
 * Query Engine version: 0edf323efd1d98336f3f0a68684b56f689b900d3
 */
export declare const prismaVersion: PrismaVersion;
/**
 * Utility Types
 */
export type Bytes = runtime.Bytes;
export type JsonObject = runtime.JsonObject;
export type JsonArray = runtime.JsonArray;
export type JsonValue = runtime.JsonValue;
export type InputJsonObject = runtime.InputJsonObject;
export type InputJsonArray = runtime.InputJsonArray;
export type InputJsonValue = runtime.InputJsonValue;
export declare const NullTypes: {
    DbNull: (new (secret: never) => typeof runtime.DbNull);
    JsonNull: (new (secret: never) => typeof runtime.JsonNull);
    AnyNull: (new (secret: never) => typeof runtime.AnyNull);
};
/**
 * Helper for filtering JSON entries that have `null` on the database (empty on the db)
 *
 * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
 */
export declare const DbNull: runtime.DbNullClass;
/**
 * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
 *
 * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
 */
export declare const JsonNull: runtime.JsonNullClass;
/**
 * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
 *
 * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
 */
export declare const AnyNull: runtime.AnyNullClass;
type SelectAndInclude = {
    select: any;
    include: any;
};
type SelectAndOmit = {
    select: any;
    omit: any;
};
/**
 * From T, pick a set of properties whose keys are in the union K
 */
type Prisma__Pick<T, K extends keyof T> = {
    [P in K]: T[P];
};
export type Enumerable<T> = T | Array<T>;
/**
 * Subset
 * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
 */
export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
};
/**
 * Resolved type of the argument passed to the `PrismaClient` constructor.
 *
 * When called without a narrower options type (the common case), this resolves
 * to `PrismaClientOptions` directly, which produces a clear TypeScript error
 * message (`not assignable to parameter of type 'PrismaClientOptions'`) when
 * the argument is missing or incomplete. When the user supplies a narrower
 * options type (e.g. via a literal), it falls back to `Subset` to keep
 * filtering out unknown properties.
 */
export type PrismaClientConstructorArgs<Options extends PrismaClientOptions> = [
    PrismaClientOptions
] extends [Options] ? PrismaClientOptions : Subset<Options, PrismaClientOptions>;
/**
 * SelectSubset
 * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
 * Additionally, it validates, if both select and include are present. If the case, it errors.
 */
export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
} & (T extends SelectAndInclude ? 'Please either choose `select` or `include`.' : T extends SelectAndOmit ? 'Please either choose `select` or `omit`.' : {});
/**
 * Subset + Intersection
 * @desc From `T` pick properties that exist in `U` and intersect `K`
 */
export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
} & K;
type Without<T, U> = {
    [P in Exclude<keyof T, keyof U>]?: never;
};
/**
 * XOR is needed to have a real mutually exclusive union type
 * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
 */
export type XOR<T, U> = T extends object ? U extends object ? ((Without<T, U> & U) | (Without<U, T> & T)) & object : U : T;
/**
 * Is T a Record?
 */
type IsObject<T extends any> = T extends Array<any> ? False : T extends Date ? False : T extends Uint8Array ? False : T extends BigInt ? False : T extends object ? True : False;
/**
 * If it's T[], return T
 */
export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T;
/**
 * From ts-toolbelt
 */
type __Either<O extends object, K extends Key> = Omit<O, K> & {
    [P in K]: Prisma__Pick<O, P & keyof O>;
}[K];
type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>;
type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>;
type _Either<O extends object, K extends Key, strict extends Boolean> = {
    1: EitherStrict<O, K>;
    0: EitherLoose<O, K>;
}[strict];
export type Either<O extends object, K extends Key, strict extends Boolean = 1> = O extends unknown ? _Either<O, K, strict> : never;
export type Union = any;
export type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K];
} & {};
/** Helper Types for "Merge" **/
export type IntersectOf<U extends Union> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;
export type Overwrite<O extends object, O1 extends object> = {
    [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
} & {};
type _Merge<U extends object> = IntersectOf<Overwrite<U, {
    [K in keyof U]-?: At<U, K>;
}>>;
type Key = string | number | symbol;
type AtStrict<O extends object, K extends Key> = O[K & keyof O];
type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
    1: AtStrict<O, K>;
    0: AtLoose<O, K>;
}[strict];
export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
} & {};
export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
} & {};
type _Record<K extends keyof any, T> = {
    [P in K]: T;
};
type NoExpand<T> = T extends unknown ? T : never;
export type AtLeast<O extends object, K extends string> = NoExpand<O extends unknown ? (K extends keyof O ? {
    [P in K]: O[P];
} & O : O) | {
    [P in keyof O as P extends K ? P : never]-?: O[P];
} & O : never>;
type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;
export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
/** End Helper Types for "Merge" **/
export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;
export type Boolean = True | False;
export type True = 1;
export type False = 0;
export type Not<B extends Boolean> = {
    0: 1;
    1: 0;
}[B];
export type Extends<A1 extends any, A2 extends any> = [A1] extends [never] ? 0 : A1 extends A2 ? 1 : 0;
export type Has<U extends Union, U1 extends Union> = Not<Extends<Exclude<U1, U>, U1>>;
export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
        0: 0;
        1: 1;
    };
    1: {
        0: 1;
        1: 1;
    };
}[B1][B2];
export type Keys<U extends Union> = U extends unknown ? keyof U : never;
export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O ? O[P] : never;
} : never;
type FieldPaths<T, U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>> = IsObject<T> extends True ? U : T;
export type GetHavingFields<T> = {
    [K in keyof T]: Or<Or<Extends<'OR', K>, Extends<'AND', K>>, Extends<'NOT', K>> extends True ? T[K] extends infer TK ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never> : never : {} extends FieldPaths<T[K]> ? never : K;
}[keyof T];
/**
 * Convert tuple to union
 */
type _TupleToUnion<T> = T extends (infer E)[] ? E : never;
type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>;
export type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T;
/**
 * Like `Pick`, but additionally can also accept an array of keys
 */
export type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>;
/**
 * Exclude all keys with underscores
 */
export type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T;
export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>;
type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>;
export declare const ModelName: {
    readonly User: "User";
    readonly Account: "Account";
    readonly Session: "Session";
    readonly Verification: "Verification";
    readonly Profile: "Profile";
    readonly FreelancerProfile: "FreelancerProfile";
    readonly BuyerProfile: "BuyerProfile";
    readonly Category: "Category";
    readonly Subcategory: "Subcategory";
    readonly Service: "Service";
    readonly ServicePackage: "ServicePackage";
    readonly ServiceImage: "ServiceImage";
    readonly ServiceFAQ: "ServiceFAQ";
    readonly Portfolio: "Portfolio";
    readonly Order: "Order";
    readonly OrderItem: "OrderItem";
    readonly OrderRequirement: "OrderRequirement";
    readonly OrderDelivery: "OrderDelivery";
    readonly Revision: "Revision";
    readonly Review: "Review";
    readonly Favorite: "Favorite";
    readonly Cart: "Cart";
    readonly CartItem: "CartItem";
    readonly Conversation: "Conversation";
    readonly ConversationParticipant: "ConversationParticipant";
    readonly Message: "Message";
    readonly MessageAttachment: "MessageAttachment";
    readonly Notification: "Notification";
    readonly Payment: "Payment";
    readonly PaymentTransaction: "PaymentTransaction";
    readonly Refund: "Refund";
    readonly Payout: "Payout";
    readonly Dispute: "Dispute";
    readonly Report: "Report";
    readonly Coupon: "Coupon";
    readonly CouponUsage: "CouponUsage";
    readonly PlatformSetting: "PlatformSetting";
    readonly AuditLog: "AuditLog";
    readonly Achievement: "Achievement";
    readonly UserAchievement: "UserAchievement";
    readonly UserXP: "UserXP";
    readonly SearchHistory: "SearchHistory";
    readonly Role: "Role";
    readonly Permission: "Permission";
    readonly RolePermission: "RolePermission";
    readonly UserRole: "UserRole";
    readonly ProductCategory: "ProductCategory";
    readonly Product: "Product";
    readonly ProductImage: "ProductImage";
    readonly ProductReview: "ProductReview";
    readonly Company: "Company";
    readonly Job: "Job";
    readonly JobApplication: "JobApplication";
    readonly Resume: "Resume";
    readonly ResumeScore: "ResumeScore";
    readonly BookCategory: "BookCategory";
    readonly Book: "Book";
    readonly BookChapter: "BookChapter";
    readonly BookPurchase: "BookPurchase";
    readonly BookReview: "BookReview";
    readonly ResourceCategory: "ResourceCategory";
    readonly Resource: "Resource";
    readonly ResourceFile: "ResourceFile";
    readonly PortfolioProject: "PortfolioProject";
    readonly Employee: "Employee";
    readonly AIConversation: "AIConversation";
    readonly AIMessage: "AIMessage";
};
export type ModelName = (typeof ModelName)[keyof typeof ModelName];
export interface TypeMapCb<GlobalOmitOptions = {}> extends runtime.Types.Utils.Fn<{
    extArgs: runtime.Types.Extensions.InternalArgs;
}, runtime.Types.Utils.Record<string, any>> {
    returns: TypeMap<this['params']['extArgs'], GlobalOmitOptions>;
}
export type TypeMap<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
        omit: GlobalOmitOptions;
    };
    meta: {
        modelProps: "user" | "account" | "session" | "verification" | "profile" | "freelancerProfile" | "buyerProfile" | "category" | "subcategory" | "service" | "servicePackage" | "serviceImage" | "serviceFAQ" | "portfolio" | "order" | "orderItem" | "orderRequirement" | "orderDelivery" | "revision" | "review" | "favorite" | "cart" | "cartItem" | "conversation" | "conversationParticipant" | "message" | "messageAttachment" | "notification" | "payment" | "paymentTransaction" | "refund" | "payout" | "dispute" | "report" | "coupon" | "couponUsage" | "platformSetting" | "auditLog" | "achievement" | "userAchievement" | "userXP" | "searchHistory" | "role" | "permission" | "rolePermission" | "userRole" | "productCategory" | "product" | "productImage" | "productReview" | "company" | "job" | "jobApplication" | "resume" | "resumeScore" | "bookCategory" | "book" | "bookChapter" | "bookPurchase" | "bookReview" | "resourceCategory" | "resource" | "resourceFile" | "portfolioProject" | "employee" | "aIConversation" | "aIMessage";
        txIsolationLevel: TransactionIsolationLevel;
    };
    model: {
        User: {
            payload: Prisma.$UserPayload<ExtArgs>;
            fields: Prisma.UserFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.UserFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserPayload>;
                };
                findFirst: {
                    args: Prisma.UserFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserPayload>;
                };
                findMany: {
                    args: Prisma.UserFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserPayload>[];
                };
                create: {
                    args: Prisma.UserCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserPayload>;
                };
                createMany: {
                    args: Prisma.UserCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserPayload>[];
                };
                delete: {
                    args: Prisma.UserDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserPayload>;
                };
                update: {
                    args: Prisma.UserUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserPayload>;
                };
                deleteMany: {
                    args: Prisma.UserDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.UserUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserPayload>[];
                };
                upsert: {
                    args: Prisma.UserUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserPayload>;
                };
                aggregate: {
                    args: Prisma.UserAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateUser>;
                };
                groupBy: {
                    args: Prisma.UserGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.UserGroupByOutputType>[];
                };
                count: {
                    args: Prisma.UserCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.UserCountAggregateOutputType> | number;
                };
            };
        };
        Account: {
            payload: Prisma.$AccountPayload<ExtArgs>;
            fields: Prisma.AccountFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.AccountFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AccountPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.AccountFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AccountPayload>;
                };
                findFirst: {
                    args: Prisma.AccountFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AccountPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.AccountFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AccountPayload>;
                };
                findMany: {
                    args: Prisma.AccountFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AccountPayload>[];
                };
                create: {
                    args: Prisma.AccountCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AccountPayload>;
                };
                createMany: {
                    args: Prisma.AccountCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.AccountCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AccountPayload>[];
                };
                delete: {
                    args: Prisma.AccountDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AccountPayload>;
                };
                update: {
                    args: Prisma.AccountUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AccountPayload>;
                };
                deleteMany: {
                    args: Prisma.AccountDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.AccountUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.AccountUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AccountPayload>[];
                };
                upsert: {
                    args: Prisma.AccountUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AccountPayload>;
                };
                aggregate: {
                    args: Prisma.AccountAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateAccount>;
                };
                groupBy: {
                    args: Prisma.AccountGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AccountGroupByOutputType>[];
                };
                count: {
                    args: Prisma.AccountCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AccountCountAggregateOutputType> | number;
                };
            };
        };
        Session: {
            payload: Prisma.$SessionPayload<ExtArgs>;
            fields: Prisma.SessionFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.SessionFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SessionPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.SessionFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SessionPayload>;
                };
                findFirst: {
                    args: Prisma.SessionFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SessionPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.SessionFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SessionPayload>;
                };
                findMany: {
                    args: Prisma.SessionFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SessionPayload>[];
                };
                create: {
                    args: Prisma.SessionCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SessionPayload>;
                };
                createMany: {
                    args: Prisma.SessionCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.SessionCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SessionPayload>[];
                };
                delete: {
                    args: Prisma.SessionDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SessionPayload>;
                };
                update: {
                    args: Prisma.SessionUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SessionPayload>;
                };
                deleteMany: {
                    args: Prisma.SessionDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.SessionUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.SessionUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SessionPayload>[];
                };
                upsert: {
                    args: Prisma.SessionUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SessionPayload>;
                };
                aggregate: {
                    args: Prisma.SessionAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateSession>;
                };
                groupBy: {
                    args: Prisma.SessionGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.SessionGroupByOutputType>[];
                };
                count: {
                    args: Prisma.SessionCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.SessionCountAggregateOutputType> | number;
                };
            };
        };
        Verification: {
            payload: Prisma.$VerificationPayload<ExtArgs>;
            fields: Prisma.VerificationFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.VerificationFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$VerificationPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.VerificationFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$VerificationPayload>;
                };
                findFirst: {
                    args: Prisma.VerificationFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$VerificationPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.VerificationFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$VerificationPayload>;
                };
                findMany: {
                    args: Prisma.VerificationFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$VerificationPayload>[];
                };
                create: {
                    args: Prisma.VerificationCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$VerificationPayload>;
                };
                createMany: {
                    args: Prisma.VerificationCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.VerificationCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$VerificationPayload>[];
                };
                delete: {
                    args: Prisma.VerificationDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$VerificationPayload>;
                };
                update: {
                    args: Prisma.VerificationUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$VerificationPayload>;
                };
                deleteMany: {
                    args: Prisma.VerificationDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.VerificationUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.VerificationUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$VerificationPayload>[];
                };
                upsert: {
                    args: Prisma.VerificationUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$VerificationPayload>;
                };
                aggregate: {
                    args: Prisma.VerificationAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateVerification>;
                };
                groupBy: {
                    args: Prisma.VerificationGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.VerificationGroupByOutputType>[];
                };
                count: {
                    args: Prisma.VerificationCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.VerificationCountAggregateOutputType> | number;
                };
            };
        };
        Profile: {
            payload: Prisma.$ProfilePayload<ExtArgs>;
            fields: Prisma.ProfileFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.ProfileFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ProfilePayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.ProfileFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ProfilePayload>;
                };
                findFirst: {
                    args: Prisma.ProfileFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ProfilePayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.ProfileFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ProfilePayload>;
                };
                findMany: {
                    args: Prisma.ProfileFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ProfilePayload>[];
                };
                create: {
                    args: Prisma.ProfileCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ProfilePayload>;
                };
                createMany: {
                    args: Prisma.ProfileCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.ProfileCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ProfilePayload>[];
                };
                delete: {
                    args: Prisma.ProfileDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ProfilePayload>;
                };
                update: {
                    args: Prisma.ProfileUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ProfilePayload>;
                };
                deleteMany: {
                    args: Prisma.ProfileDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.ProfileUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.ProfileUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ProfilePayload>[];
                };
                upsert: {
                    args: Prisma.ProfileUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ProfilePayload>;
                };
                aggregate: {
                    args: Prisma.ProfileAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateProfile>;
                };
                groupBy: {
                    args: Prisma.ProfileGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.ProfileGroupByOutputType>[];
                };
                count: {
                    args: Prisma.ProfileCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.ProfileCountAggregateOutputType> | number;
                };
            };
        };
        FreelancerProfile: {
            payload: Prisma.$FreelancerProfilePayload<ExtArgs>;
            fields: Prisma.FreelancerProfileFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.FreelancerProfileFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$FreelancerProfilePayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.FreelancerProfileFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$FreelancerProfilePayload>;
                };
                findFirst: {
                    args: Prisma.FreelancerProfileFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$FreelancerProfilePayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.FreelancerProfileFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$FreelancerProfilePayload>;
                };
                findMany: {
                    args: Prisma.FreelancerProfileFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$FreelancerProfilePayload>[];
                };
                create: {
                    args: Prisma.FreelancerProfileCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$FreelancerProfilePayload>;
                };
                createMany: {
                    args: Prisma.FreelancerProfileCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.FreelancerProfileCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$FreelancerProfilePayload>[];
                };
                delete: {
                    args: Prisma.FreelancerProfileDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$FreelancerProfilePayload>;
                };
                update: {
                    args: Prisma.FreelancerProfileUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$FreelancerProfilePayload>;
                };
                deleteMany: {
                    args: Prisma.FreelancerProfileDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.FreelancerProfileUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.FreelancerProfileUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$FreelancerProfilePayload>[];
                };
                upsert: {
                    args: Prisma.FreelancerProfileUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$FreelancerProfilePayload>;
                };
                aggregate: {
                    args: Prisma.FreelancerProfileAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateFreelancerProfile>;
                };
                groupBy: {
                    args: Prisma.FreelancerProfileGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.FreelancerProfileGroupByOutputType>[];
                };
                count: {
                    args: Prisma.FreelancerProfileCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.FreelancerProfileCountAggregateOutputType> | number;
                };
            };
        };
        BuyerProfile: {
            payload: Prisma.$BuyerProfilePayload<ExtArgs>;
            fields: Prisma.BuyerProfileFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.BuyerProfileFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$BuyerProfilePayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.BuyerProfileFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$BuyerProfilePayload>;
                };
                findFirst: {
                    args: Prisma.BuyerProfileFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$BuyerProfilePayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.BuyerProfileFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$BuyerProfilePayload>;
                };
                findMany: {
                    args: Prisma.BuyerProfileFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$BuyerProfilePayload>[];
                };
                create: {
                    args: Prisma.BuyerProfileCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$BuyerProfilePayload>;
                };
                createMany: {
                    args: Prisma.BuyerProfileCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.BuyerProfileCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$BuyerProfilePayload>[];
                };
                delete: {
                    args: Prisma.BuyerProfileDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$BuyerProfilePayload>;
                };
                update: {
                    args: Prisma.BuyerProfileUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$BuyerProfilePayload>;
                };
                deleteMany: {
                    args: Prisma.BuyerProfileDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.BuyerProfileUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.BuyerProfileUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$BuyerProfilePayload>[];
                };
                upsert: {
                    args: Prisma.BuyerProfileUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$BuyerProfilePayload>;
                };
                aggregate: {
                    args: Prisma.BuyerProfileAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateBuyerProfile>;
                };
                groupBy: {
                    args: Prisma.BuyerProfileGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.BuyerProfileGroupByOutputType>[];
                };
                count: {
                    args: Prisma.BuyerProfileCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.BuyerProfileCountAggregateOutputType> | number;
                };
            };
        };
        Category: {
            payload: Prisma.$CategoryPayload<ExtArgs>;
            fields: Prisma.CategoryFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.CategoryFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CategoryPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.CategoryFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CategoryPayload>;
                };
                findFirst: {
                    args: Prisma.CategoryFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CategoryPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.CategoryFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CategoryPayload>;
                };
                findMany: {
                    args: Prisma.CategoryFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CategoryPayload>[];
                };
                create: {
                    args: Prisma.CategoryCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CategoryPayload>;
                };
                createMany: {
                    args: Prisma.CategoryCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.CategoryCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CategoryPayload>[];
                };
                delete: {
                    args: Prisma.CategoryDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CategoryPayload>;
                };
                update: {
                    args: Prisma.CategoryUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CategoryPayload>;
                };
                deleteMany: {
                    args: Prisma.CategoryDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.CategoryUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.CategoryUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CategoryPayload>[];
                };
                upsert: {
                    args: Prisma.CategoryUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CategoryPayload>;
                };
                aggregate: {
                    args: Prisma.CategoryAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateCategory>;
                };
                groupBy: {
                    args: Prisma.CategoryGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.CategoryGroupByOutputType>[];
                };
                count: {
                    args: Prisma.CategoryCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.CategoryCountAggregateOutputType> | number;
                };
            };
        };
        Subcategory: {
            payload: Prisma.$SubcategoryPayload<ExtArgs>;
            fields: Prisma.SubcategoryFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.SubcategoryFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SubcategoryPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.SubcategoryFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SubcategoryPayload>;
                };
                findFirst: {
                    args: Prisma.SubcategoryFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SubcategoryPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.SubcategoryFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SubcategoryPayload>;
                };
                findMany: {
                    args: Prisma.SubcategoryFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SubcategoryPayload>[];
                };
                create: {
                    args: Prisma.SubcategoryCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SubcategoryPayload>;
                };
                createMany: {
                    args: Prisma.SubcategoryCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.SubcategoryCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SubcategoryPayload>[];
                };
                delete: {
                    args: Prisma.SubcategoryDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SubcategoryPayload>;
                };
                update: {
                    args: Prisma.SubcategoryUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SubcategoryPayload>;
                };
                deleteMany: {
                    args: Prisma.SubcategoryDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.SubcategoryUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.SubcategoryUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SubcategoryPayload>[];
                };
                upsert: {
                    args: Prisma.SubcategoryUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SubcategoryPayload>;
                };
                aggregate: {
                    args: Prisma.SubcategoryAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateSubcategory>;
                };
                groupBy: {
                    args: Prisma.SubcategoryGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.SubcategoryGroupByOutputType>[];
                };
                count: {
                    args: Prisma.SubcategoryCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.SubcategoryCountAggregateOutputType> | number;
                };
            };
        };
        Service: {
            payload: Prisma.$ServicePayload<ExtArgs>;
            fields: Prisma.ServiceFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.ServiceFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ServicePayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.ServiceFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ServicePayload>;
                };
                findFirst: {
                    args: Prisma.ServiceFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ServicePayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.ServiceFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ServicePayload>;
                };
                findMany: {
                    args: Prisma.ServiceFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ServicePayload>[];
                };
                create: {
                    args: Prisma.ServiceCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ServicePayload>;
                };
                createMany: {
                    args: Prisma.ServiceCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.ServiceCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ServicePayload>[];
                };
                delete: {
                    args: Prisma.ServiceDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ServicePayload>;
                };
                update: {
                    args: Prisma.ServiceUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ServicePayload>;
                };
                deleteMany: {
                    args: Prisma.ServiceDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.ServiceUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.ServiceUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ServicePayload>[];
                };
                upsert: {
                    args: Prisma.ServiceUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ServicePayload>;
                };
                aggregate: {
                    args: Prisma.ServiceAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateService>;
                };
                groupBy: {
                    args: Prisma.ServiceGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.ServiceGroupByOutputType>[];
                };
                count: {
                    args: Prisma.ServiceCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.ServiceCountAggregateOutputType> | number;
                };
            };
        };
        ServicePackage: {
            payload: Prisma.$ServicePackagePayload<ExtArgs>;
            fields: Prisma.ServicePackageFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.ServicePackageFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ServicePackagePayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.ServicePackageFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ServicePackagePayload>;
                };
                findFirst: {
                    args: Prisma.ServicePackageFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ServicePackagePayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.ServicePackageFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ServicePackagePayload>;
                };
                findMany: {
                    args: Prisma.ServicePackageFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ServicePackagePayload>[];
                };
                create: {
                    args: Prisma.ServicePackageCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ServicePackagePayload>;
                };
                createMany: {
                    args: Prisma.ServicePackageCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.ServicePackageCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ServicePackagePayload>[];
                };
                delete: {
                    args: Prisma.ServicePackageDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ServicePackagePayload>;
                };
                update: {
                    args: Prisma.ServicePackageUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ServicePackagePayload>;
                };
                deleteMany: {
                    args: Prisma.ServicePackageDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.ServicePackageUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.ServicePackageUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ServicePackagePayload>[];
                };
                upsert: {
                    args: Prisma.ServicePackageUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ServicePackagePayload>;
                };
                aggregate: {
                    args: Prisma.ServicePackageAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateServicePackage>;
                };
                groupBy: {
                    args: Prisma.ServicePackageGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.ServicePackageGroupByOutputType>[];
                };
                count: {
                    args: Prisma.ServicePackageCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.ServicePackageCountAggregateOutputType> | number;
                };
            };
        };
        ServiceImage: {
            payload: Prisma.$ServiceImagePayload<ExtArgs>;
            fields: Prisma.ServiceImageFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.ServiceImageFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ServiceImagePayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.ServiceImageFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ServiceImagePayload>;
                };
                findFirst: {
                    args: Prisma.ServiceImageFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ServiceImagePayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.ServiceImageFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ServiceImagePayload>;
                };
                findMany: {
                    args: Prisma.ServiceImageFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ServiceImagePayload>[];
                };
                create: {
                    args: Prisma.ServiceImageCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ServiceImagePayload>;
                };
                createMany: {
                    args: Prisma.ServiceImageCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.ServiceImageCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ServiceImagePayload>[];
                };
                delete: {
                    args: Prisma.ServiceImageDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ServiceImagePayload>;
                };
                update: {
                    args: Prisma.ServiceImageUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ServiceImagePayload>;
                };
                deleteMany: {
                    args: Prisma.ServiceImageDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.ServiceImageUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.ServiceImageUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ServiceImagePayload>[];
                };
                upsert: {
                    args: Prisma.ServiceImageUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ServiceImagePayload>;
                };
                aggregate: {
                    args: Prisma.ServiceImageAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateServiceImage>;
                };
                groupBy: {
                    args: Prisma.ServiceImageGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.ServiceImageGroupByOutputType>[];
                };
                count: {
                    args: Prisma.ServiceImageCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.ServiceImageCountAggregateOutputType> | number;
                };
            };
        };
        ServiceFAQ: {
            payload: Prisma.$ServiceFAQPayload<ExtArgs>;
            fields: Prisma.ServiceFAQFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.ServiceFAQFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ServiceFAQPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.ServiceFAQFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ServiceFAQPayload>;
                };
                findFirst: {
                    args: Prisma.ServiceFAQFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ServiceFAQPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.ServiceFAQFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ServiceFAQPayload>;
                };
                findMany: {
                    args: Prisma.ServiceFAQFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ServiceFAQPayload>[];
                };
                create: {
                    args: Prisma.ServiceFAQCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ServiceFAQPayload>;
                };
                createMany: {
                    args: Prisma.ServiceFAQCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.ServiceFAQCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ServiceFAQPayload>[];
                };
                delete: {
                    args: Prisma.ServiceFAQDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ServiceFAQPayload>;
                };
                update: {
                    args: Prisma.ServiceFAQUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ServiceFAQPayload>;
                };
                deleteMany: {
                    args: Prisma.ServiceFAQDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.ServiceFAQUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.ServiceFAQUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ServiceFAQPayload>[];
                };
                upsert: {
                    args: Prisma.ServiceFAQUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ServiceFAQPayload>;
                };
                aggregate: {
                    args: Prisma.ServiceFAQAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateServiceFAQ>;
                };
                groupBy: {
                    args: Prisma.ServiceFAQGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.ServiceFAQGroupByOutputType>[];
                };
                count: {
                    args: Prisma.ServiceFAQCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.ServiceFAQCountAggregateOutputType> | number;
                };
            };
        };
        Portfolio: {
            payload: Prisma.$PortfolioPayload<ExtArgs>;
            fields: Prisma.PortfolioFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.PortfolioFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PortfolioPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.PortfolioFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PortfolioPayload>;
                };
                findFirst: {
                    args: Prisma.PortfolioFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PortfolioPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.PortfolioFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PortfolioPayload>;
                };
                findMany: {
                    args: Prisma.PortfolioFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PortfolioPayload>[];
                };
                create: {
                    args: Prisma.PortfolioCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PortfolioPayload>;
                };
                createMany: {
                    args: Prisma.PortfolioCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.PortfolioCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PortfolioPayload>[];
                };
                delete: {
                    args: Prisma.PortfolioDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PortfolioPayload>;
                };
                update: {
                    args: Prisma.PortfolioUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PortfolioPayload>;
                };
                deleteMany: {
                    args: Prisma.PortfolioDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.PortfolioUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.PortfolioUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PortfolioPayload>[];
                };
                upsert: {
                    args: Prisma.PortfolioUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PortfolioPayload>;
                };
                aggregate: {
                    args: Prisma.PortfolioAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregatePortfolio>;
                };
                groupBy: {
                    args: Prisma.PortfolioGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.PortfolioGroupByOutputType>[];
                };
                count: {
                    args: Prisma.PortfolioCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.PortfolioCountAggregateOutputType> | number;
                };
            };
        };
        Order: {
            payload: Prisma.$OrderPayload<ExtArgs>;
            fields: Prisma.OrderFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.OrderFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$OrderPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.OrderFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$OrderPayload>;
                };
                findFirst: {
                    args: Prisma.OrderFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$OrderPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.OrderFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$OrderPayload>;
                };
                findMany: {
                    args: Prisma.OrderFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$OrderPayload>[];
                };
                create: {
                    args: Prisma.OrderCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$OrderPayload>;
                };
                createMany: {
                    args: Prisma.OrderCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.OrderCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$OrderPayload>[];
                };
                delete: {
                    args: Prisma.OrderDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$OrderPayload>;
                };
                update: {
                    args: Prisma.OrderUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$OrderPayload>;
                };
                deleteMany: {
                    args: Prisma.OrderDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.OrderUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.OrderUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$OrderPayload>[];
                };
                upsert: {
                    args: Prisma.OrderUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$OrderPayload>;
                };
                aggregate: {
                    args: Prisma.OrderAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateOrder>;
                };
                groupBy: {
                    args: Prisma.OrderGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.OrderGroupByOutputType>[];
                };
                count: {
                    args: Prisma.OrderCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.OrderCountAggregateOutputType> | number;
                };
            };
        };
        OrderItem: {
            payload: Prisma.$OrderItemPayload<ExtArgs>;
            fields: Prisma.OrderItemFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.OrderItemFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$OrderItemPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.OrderItemFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$OrderItemPayload>;
                };
                findFirst: {
                    args: Prisma.OrderItemFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$OrderItemPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.OrderItemFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$OrderItemPayload>;
                };
                findMany: {
                    args: Prisma.OrderItemFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$OrderItemPayload>[];
                };
                create: {
                    args: Prisma.OrderItemCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$OrderItemPayload>;
                };
                createMany: {
                    args: Prisma.OrderItemCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.OrderItemCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$OrderItemPayload>[];
                };
                delete: {
                    args: Prisma.OrderItemDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$OrderItemPayload>;
                };
                update: {
                    args: Prisma.OrderItemUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$OrderItemPayload>;
                };
                deleteMany: {
                    args: Prisma.OrderItemDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.OrderItemUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.OrderItemUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$OrderItemPayload>[];
                };
                upsert: {
                    args: Prisma.OrderItemUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$OrderItemPayload>;
                };
                aggregate: {
                    args: Prisma.OrderItemAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateOrderItem>;
                };
                groupBy: {
                    args: Prisma.OrderItemGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.OrderItemGroupByOutputType>[];
                };
                count: {
                    args: Prisma.OrderItemCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.OrderItemCountAggregateOutputType> | number;
                };
            };
        };
        OrderRequirement: {
            payload: Prisma.$OrderRequirementPayload<ExtArgs>;
            fields: Prisma.OrderRequirementFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.OrderRequirementFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$OrderRequirementPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.OrderRequirementFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$OrderRequirementPayload>;
                };
                findFirst: {
                    args: Prisma.OrderRequirementFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$OrderRequirementPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.OrderRequirementFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$OrderRequirementPayload>;
                };
                findMany: {
                    args: Prisma.OrderRequirementFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$OrderRequirementPayload>[];
                };
                create: {
                    args: Prisma.OrderRequirementCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$OrderRequirementPayload>;
                };
                createMany: {
                    args: Prisma.OrderRequirementCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.OrderRequirementCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$OrderRequirementPayload>[];
                };
                delete: {
                    args: Prisma.OrderRequirementDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$OrderRequirementPayload>;
                };
                update: {
                    args: Prisma.OrderRequirementUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$OrderRequirementPayload>;
                };
                deleteMany: {
                    args: Prisma.OrderRequirementDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.OrderRequirementUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.OrderRequirementUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$OrderRequirementPayload>[];
                };
                upsert: {
                    args: Prisma.OrderRequirementUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$OrderRequirementPayload>;
                };
                aggregate: {
                    args: Prisma.OrderRequirementAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateOrderRequirement>;
                };
                groupBy: {
                    args: Prisma.OrderRequirementGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.OrderRequirementGroupByOutputType>[];
                };
                count: {
                    args: Prisma.OrderRequirementCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.OrderRequirementCountAggregateOutputType> | number;
                };
            };
        };
        OrderDelivery: {
            payload: Prisma.$OrderDeliveryPayload<ExtArgs>;
            fields: Prisma.OrderDeliveryFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.OrderDeliveryFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$OrderDeliveryPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.OrderDeliveryFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$OrderDeliveryPayload>;
                };
                findFirst: {
                    args: Prisma.OrderDeliveryFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$OrderDeliveryPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.OrderDeliveryFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$OrderDeliveryPayload>;
                };
                findMany: {
                    args: Prisma.OrderDeliveryFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$OrderDeliveryPayload>[];
                };
                create: {
                    args: Prisma.OrderDeliveryCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$OrderDeliveryPayload>;
                };
                createMany: {
                    args: Prisma.OrderDeliveryCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.OrderDeliveryCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$OrderDeliveryPayload>[];
                };
                delete: {
                    args: Prisma.OrderDeliveryDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$OrderDeliveryPayload>;
                };
                update: {
                    args: Prisma.OrderDeliveryUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$OrderDeliveryPayload>;
                };
                deleteMany: {
                    args: Prisma.OrderDeliveryDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.OrderDeliveryUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.OrderDeliveryUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$OrderDeliveryPayload>[];
                };
                upsert: {
                    args: Prisma.OrderDeliveryUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$OrderDeliveryPayload>;
                };
                aggregate: {
                    args: Prisma.OrderDeliveryAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateOrderDelivery>;
                };
                groupBy: {
                    args: Prisma.OrderDeliveryGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.OrderDeliveryGroupByOutputType>[];
                };
                count: {
                    args: Prisma.OrderDeliveryCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.OrderDeliveryCountAggregateOutputType> | number;
                };
            };
        };
        Revision: {
            payload: Prisma.$RevisionPayload<ExtArgs>;
            fields: Prisma.RevisionFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.RevisionFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$RevisionPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.RevisionFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$RevisionPayload>;
                };
                findFirst: {
                    args: Prisma.RevisionFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$RevisionPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.RevisionFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$RevisionPayload>;
                };
                findMany: {
                    args: Prisma.RevisionFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$RevisionPayload>[];
                };
                create: {
                    args: Prisma.RevisionCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$RevisionPayload>;
                };
                createMany: {
                    args: Prisma.RevisionCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.RevisionCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$RevisionPayload>[];
                };
                delete: {
                    args: Prisma.RevisionDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$RevisionPayload>;
                };
                update: {
                    args: Prisma.RevisionUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$RevisionPayload>;
                };
                deleteMany: {
                    args: Prisma.RevisionDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.RevisionUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.RevisionUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$RevisionPayload>[];
                };
                upsert: {
                    args: Prisma.RevisionUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$RevisionPayload>;
                };
                aggregate: {
                    args: Prisma.RevisionAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateRevision>;
                };
                groupBy: {
                    args: Prisma.RevisionGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.RevisionGroupByOutputType>[];
                };
                count: {
                    args: Prisma.RevisionCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.RevisionCountAggregateOutputType> | number;
                };
            };
        };
        Review: {
            payload: Prisma.$ReviewPayload<ExtArgs>;
            fields: Prisma.ReviewFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.ReviewFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ReviewPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.ReviewFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ReviewPayload>;
                };
                findFirst: {
                    args: Prisma.ReviewFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ReviewPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.ReviewFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ReviewPayload>;
                };
                findMany: {
                    args: Prisma.ReviewFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ReviewPayload>[];
                };
                create: {
                    args: Prisma.ReviewCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ReviewPayload>;
                };
                createMany: {
                    args: Prisma.ReviewCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.ReviewCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ReviewPayload>[];
                };
                delete: {
                    args: Prisma.ReviewDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ReviewPayload>;
                };
                update: {
                    args: Prisma.ReviewUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ReviewPayload>;
                };
                deleteMany: {
                    args: Prisma.ReviewDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.ReviewUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.ReviewUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ReviewPayload>[];
                };
                upsert: {
                    args: Prisma.ReviewUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ReviewPayload>;
                };
                aggregate: {
                    args: Prisma.ReviewAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateReview>;
                };
                groupBy: {
                    args: Prisma.ReviewGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.ReviewGroupByOutputType>[];
                };
                count: {
                    args: Prisma.ReviewCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.ReviewCountAggregateOutputType> | number;
                };
            };
        };
        Favorite: {
            payload: Prisma.$FavoritePayload<ExtArgs>;
            fields: Prisma.FavoriteFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.FavoriteFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$FavoritePayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.FavoriteFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$FavoritePayload>;
                };
                findFirst: {
                    args: Prisma.FavoriteFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$FavoritePayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.FavoriteFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$FavoritePayload>;
                };
                findMany: {
                    args: Prisma.FavoriteFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$FavoritePayload>[];
                };
                create: {
                    args: Prisma.FavoriteCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$FavoritePayload>;
                };
                createMany: {
                    args: Prisma.FavoriteCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.FavoriteCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$FavoritePayload>[];
                };
                delete: {
                    args: Prisma.FavoriteDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$FavoritePayload>;
                };
                update: {
                    args: Prisma.FavoriteUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$FavoritePayload>;
                };
                deleteMany: {
                    args: Prisma.FavoriteDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.FavoriteUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.FavoriteUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$FavoritePayload>[];
                };
                upsert: {
                    args: Prisma.FavoriteUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$FavoritePayload>;
                };
                aggregate: {
                    args: Prisma.FavoriteAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateFavorite>;
                };
                groupBy: {
                    args: Prisma.FavoriteGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.FavoriteGroupByOutputType>[];
                };
                count: {
                    args: Prisma.FavoriteCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.FavoriteCountAggregateOutputType> | number;
                };
            };
        };
        Cart: {
            payload: Prisma.$CartPayload<ExtArgs>;
            fields: Prisma.CartFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.CartFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CartPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.CartFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CartPayload>;
                };
                findFirst: {
                    args: Prisma.CartFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CartPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.CartFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CartPayload>;
                };
                findMany: {
                    args: Prisma.CartFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CartPayload>[];
                };
                create: {
                    args: Prisma.CartCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CartPayload>;
                };
                createMany: {
                    args: Prisma.CartCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.CartCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CartPayload>[];
                };
                delete: {
                    args: Prisma.CartDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CartPayload>;
                };
                update: {
                    args: Prisma.CartUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CartPayload>;
                };
                deleteMany: {
                    args: Prisma.CartDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.CartUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.CartUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CartPayload>[];
                };
                upsert: {
                    args: Prisma.CartUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CartPayload>;
                };
                aggregate: {
                    args: Prisma.CartAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateCart>;
                };
                groupBy: {
                    args: Prisma.CartGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.CartGroupByOutputType>[];
                };
                count: {
                    args: Prisma.CartCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.CartCountAggregateOutputType> | number;
                };
            };
        };
        CartItem: {
            payload: Prisma.$CartItemPayload<ExtArgs>;
            fields: Prisma.CartItemFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.CartItemFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CartItemPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.CartItemFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CartItemPayload>;
                };
                findFirst: {
                    args: Prisma.CartItemFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CartItemPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.CartItemFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CartItemPayload>;
                };
                findMany: {
                    args: Prisma.CartItemFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CartItemPayload>[];
                };
                create: {
                    args: Prisma.CartItemCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CartItemPayload>;
                };
                createMany: {
                    args: Prisma.CartItemCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.CartItemCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CartItemPayload>[];
                };
                delete: {
                    args: Prisma.CartItemDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CartItemPayload>;
                };
                update: {
                    args: Prisma.CartItemUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CartItemPayload>;
                };
                deleteMany: {
                    args: Prisma.CartItemDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.CartItemUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.CartItemUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CartItemPayload>[];
                };
                upsert: {
                    args: Prisma.CartItemUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CartItemPayload>;
                };
                aggregate: {
                    args: Prisma.CartItemAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateCartItem>;
                };
                groupBy: {
                    args: Prisma.CartItemGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.CartItemGroupByOutputType>[];
                };
                count: {
                    args: Prisma.CartItemCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.CartItemCountAggregateOutputType> | number;
                };
            };
        };
        Conversation: {
            payload: Prisma.$ConversationPayload<ExtArgs>;
            fields: Prisma.ConversationFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.ConversationFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ConversationPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.ConversationFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ConversationPayload>;
                };
                findFirst: {
                    args: Prisma.ConversationFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ConversationPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.ConversationFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ConversationPayload>;
                };
                findMany: {
                    args: Prisma.ConversationFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ConversationPayload>[];
                };
                create: {
                    args: Prisma.ConversationCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ConversationPayload>;
                };
                createMany: {
                    args: Prisma.ConversationCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.ConversationCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ConversationPayload>[];
                };
                delete: {
                    args: Prisma.ConversationDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ConversationPayload>;
                };
                update: {
                    args: Prisma.ConversationUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ConversationPayload>;
                };
                deleteMany: {
                    args: Prisma.ConversationDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.ConversationUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.ConversationUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ConversationPayload>[];
                };
                upsert: {
                    args: Prisma.ConversationUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ConversationPayload>;
                };
                aggregate: {
                    args: Prisma.ConversationAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateConversation>;
                };
                groupBy: {
                    args: Prisma.ConversationGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.ConversationGroupByOutputType>[];
                };
                count: {
                    args: Prisma.ConversationCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.ConversationCountAggregateOutputType> | number;
                };
            };
        };
        ConversationParticipant: {
            payload: Prisma.$ConversationParticipantPayload<ExtArgs>;
            fields: Prisma.ConversationParticipantFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.ConversationParticipantFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ConversationParticipantPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.ConversationParticipantFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ConversationParticipantPayload>;
                };
                findFirst: {
                    args: Prisma.ConversationParticipantFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ConversationParticipantPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.ConversationParticipantFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ConversationParticipantPayload>;
                };
                findMany: {
                    args: Prisma.ConversationParticipantFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ConversationParticipantPayload>[];
                };
                create: {
                    args: Prisma.ConversationParticipantCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ConversationParticipantPayload>;
                };
                createMany: {
                    args: Prisma.ConversationParticipantCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.ConversationParticipantCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ConversationParticipantPayload>[];
                };
                delete: {
                    args: Prisma.ConversationParticipantDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ConversationParticipantPayload>;
                };
                update: {
                    args: Prisma.ConversationParticipantUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ConversationParticipantPayload>;
                };
                deleteMany: {
                    args: Prisma.ConversationParticipantDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.ConversationParticipantUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.ConversationParticipantUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ConversationParticipantPayload>[];
                };
                upsert: {
                    args: Prisma.ConversationParticipantUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ConversationParticipantPayload>;
                };
                aggregate: {
                    args: Prisma.ConversationParticipantAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateConversationParticipant>;
                };
                groupBy: {
                    args: Prisma.ConversationParticipantGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.ConversationParticipantGroupByOutputType>[];
                };
                count: {
                    args: Prisma.ConversationParticipantCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.ConversationParticipantCountAggregateOutputType> | number;
                };
            };
        };
        Message: {
            payload: Prisma.$MessagePayload<ExtArgs>;
            fields: Prisma.MessageFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.MessageFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MessagePayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.MessageFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MessagePayload>;
                };
                findFirst: {
                    args: Prisma.MessageFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MessagePayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.MessageFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MessagePayload>;
                };
                findMany: {
                    args: Prisma.MessageFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MessagePayload>[];
                };
                create: {
                    args: Prisma.MessageCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MessagePayload>;
                };
                createMany: {
                    args: Prisma.MessageCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.MessageCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MessagePayload>[];
                };
                delete: {
                    args: Prisma.MessageDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MessagePayload>;
                };
                update: {
                    args: Prisma.MessageUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MessagePayload>;
                };
                deleteMany: {
                    args: Prisma.MessageDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.MessageUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.MessageUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MessagePayload>[];
                };
                upsert: {
                    args: Prisma.MessageUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MessagePayload>;
                };
                aggregate: {
                    args: Prisma.MessageAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateMessage>;
                };
                groupBy: {
                    args: Prisma.MessageGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.MessageGroupByOutputType>[];
                };
                count: {
                    args: Prisma.MessageCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.MessageCountAggregateOutputType> | number;
                };
            };
        };
        MessageAttachment: {
            payload: Prisma.$MessageAttachmentPayload<ExtArgs>;
            fields: Prisma.MessageAttachmentFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.MessageAttachmentFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MessageAttachmentPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.MessageAttachmentFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MessageAttachmentPayload>;
                };
                findFirst: {
                    args: Prisma.MessageAttachmentFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MessageAttachmentPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.MessageAttachmentFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MessageAttachmentPayload>;
                };
                findMany: {
                    args: Prisma.MessageAttachmentFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MessageAttachmentPayload>[];
                };
                create: {
                    args: Prisma.MessageAttachmentCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MessageAttachmentPayload>;
                };
                createMany: {
                    args: Prisma.MessageAttachmentCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.MessageAttachmentCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MessageAttachmentPayload>[];
                };
                delete: {
                    args: Prisma.MessageAttachmentDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MessageAttachmentPayload>;
                };
                update: {
                    args: Prisma.MessageAttachmentUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MessageAttachmentPayload>;
                };
                deleteMany: {
                    args: Prisma.MessageAttachmentDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.MessageAttachmentUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.MessageAttachmentUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MessageAttachmentPayload>[];
                };
                upsert: {
                    args: Prisma.MessageAttachmentUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MessageAttachmentPayload>;
                };
                aggregate: {
                    args: Prisma.MessageAttachmentAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateMessageAttachment>;
                };
                groupBy: {
                    args: Prisma.MessageAttachmentGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.MessageAttachmentGroupByOutputType>[];
                };
                count: {
                    args: Prisma.MessageAttachmentCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.MessageAttachmentCountAggregateOutputType> | number;
                };
            };
        };
        Notification: {
            payload: Prisma.$NotificationPayload<ExtArgs>;
            fields: Prisma.NotificationFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.NotificationFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$NotificationPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.NotificationFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$NotificationPayload>;
                };
                findFirst: {
                    args: Prisma.NotificationFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$NotificationPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.NotificationFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$NotificationPayload>;
                };
                findMany: {
                    args: Prisma.NotificationFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$NotificationPayload>[];
                };
                create: {
                    args: Prisma.NotificationCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$NotificationPayload>;
                };
                createMany: {
                    args: Prisma.NotificationCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.NotificationCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$NotificationPayload>[];
                };
                delete: {
                    args: Prisma.NotificationDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$NotificationPayload>;
                };
                update: {
                    args: Prisma.NotificationUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$NotificationPayload>;
                };
                deleteMany: {
                    args: Prisma.NotificationDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.NotificationUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.NotificationUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$NotificationPayload>[];
                };
                upsert: {
                    args: Prisma.NotificationUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$NotificationPayload>;
                };
                aggregate: {
                    args: Prisma.NotificationAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateNotification>;
                };
                groupBy: {
                    args: Prisma.NotificationGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.NotificationGroupByOutputType>[];
                };
                count: {
                    args: Prisma.NotificationCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.NotificationCountAggregateOutputType> | number;
                };
            };
        };
        Payment: {
            payload: Prisma.$PaymentPayload<ExtArgs>;
            fields: Prisma.PaymentFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.PaymentFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PaymentPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.PaymentFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PaymentPayload>;
                };
                findFirst: {
                    args: Prisma.PaymentFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PaymentPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.PaymentFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PaymentPayload>;
                };
                findMany: {
                    args: Prisma.PaymentFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PaymentPayload>[];
                };
                create: {
                    args: Prisma.PaymentCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PaymentPayload>;
                };
                createMany: {
                    args: Prisma.PaymentCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.PaymentCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PaymentPayload>[];
                };
                delete: {
                    args: Prisma.PaymentDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PaymentPayload>;
                };
                update: {
                    args: Prisma.PaymentUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PaymentPayload>;
                };
                deleteMany: {
                    args: Prisma.PaymentDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.PaymentUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.PaymentUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PaymentPayload>[];
                };
                upsert: {
                    args: Prisma.PaymentUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PaymentPayload>;
                };
                aggregate: {
                    args: Prisma.PaymentAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregatePayment>;
                };
                groupBy: {
                    args: Prisma.PaymentGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.PaymentGroupByOutputType>[];
                };
                count: {
                    args: Prisma.PaymentCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.PaymentCountAggregateOutputType> | number;
                };
            };
        };
        PaymentTransaction: {
            payload: Prisma.$PaymentTransactionPayload<ExtArgs>;
            fields: Prisma.PaymentTransactionFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.PaymentTransactionFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PaymentTransactionPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.PaymentTransactionFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PaymentTransactionPayload>;
                };
                findFirst: {
                    args: Prisma.PaymentTransactionFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PaymentTransactionPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.PaymentTransactionFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PaymentTransactionPayload>;
                };
                findMany: {
                    args: Prisma.PaymentTransactionFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PaymentTransactionPayload>[];
                };
                create: {
                    args: Prisma.PaymentTransactionCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PaymentTransactionPayload>;
                };
                createMany: {
                    args: Prisma.PaymentTransactionCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.PaymentTransactionCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PaymentTransactionPayload>[];
                };
                delete: {
                    args: Prisma.PaymentTransactionDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PaymentTransactionPayload>;
                };
                update: {
                    args: Prisma.PaymentTransactionUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PaymentTransactionPayload>;
                };
                deleteMany: {
                    args: Prisma.PaymentTransactionDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.PaymentTransactionUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.PaymentTransactionUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PaymentTransactionPayload>[];
                };
                upsert: {
                    args: Prisma.PaymentTransactionUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PaymentTransactionPayload>;
                };
                aggregate: {
                    args: Prisma.PaymentTransactionAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregatePaymentTransaction>;
                };
                groupBy: {
                    args: Prisma.PaymentTransactionGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.PaymentTransactionGroupByOutputType>[];
                };
                count: {
                    args: Prisma.PaymentTransactionCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.PaymentTransactionCountAggregateOutputType> | number;
                };
            };
        };
        Refund: {
            payload: Prisma.$RefundPayload<ExtArgs>;
            fields: Prisma.RefundFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.RefundFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$RefundPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.RefundFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$RefundPayload>;
                };
                findFirst: {
                    args: Prisma.RefundFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$RefundPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.RefundFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$RefundPayload>;
                };
                findMany: {
                    args: Prisma.RefundFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$RefundPayload>[];
                };
                create: {
                    args: Prisma.RefundCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$RefundPayload>;
                };
                createMany: {
                    args: Prisma.RefundCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.RefundCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$RefundPayload>[];
                };
                delete: {
                    args: Prisma.RefundDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$RefundPayload>;
                };
                update: {
                    args: Prisma.RefundUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$RefundPayload>;
                };
                deleteMany: {
                    args: Prisma.RefundDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.RefundUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.RefundUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$RefundPayload>[];
                };
                upsert: {
                    args: Prisma.RefundUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$RefundPayload>;
                };
                aggregate: {
                    args: Prisma.RefundAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateRefund>;
                };
                groupBy: {
                    args: Prisma.RefundGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.RefundGroupByOutputType>[];
                };
                count: {
                    args: Prisma.RefundCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.RefundCountAggregateOutputType> | number;
                };
            };
        };
        Payout: {
            payload: Prisma.$PayoutPayload<ExtArgs>;
            fields: Prisma.PayoutFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.PayoutFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PayoutPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.PayoutFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PayoutPayload>;
                };
                findFirst: {
                    args: Prisma.PayoutFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PayoutPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.PayoutFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PayoutPayload>;
                };
                findMany: {
                    args: Prisma.PayoutFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PayoutPayload>[];
                };
                create: {
                    args: Prisma.PayoutCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PayoutPayload>;
                };
                createMany: {
                    args: Prisma.PayoutCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.PayoutCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PayoutPayload>[];
                };
                delete: {
                    args: Prisma.PayoutDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PayoutPayload>;
                };
                update: {
                    args: Prisma.PayoutUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PayoutPayload>;
                };
                deleteMany: {
                    args: Prisma.PayoutDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.PayoutUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.PayoutUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PayoutPayload>[];
                };
                upsert: {
                    args: Prisma.PayoutUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PayoutPayload>;
                };
                aggregate: {
                    args: Prisma.PayoutAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregatePayout>;
                };
                groupBy: {
                    args: Prisma.PayoutGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.PayoutGroupByOutputType>[];
                };
                count: {
                    args: Prisma.PayoutCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.PayoutCountAggregateOutputType> | number;
                };
            };
        };
        Dispute: {
            payload: Prisma.$DisputePayload<ExtArgs>;
            fields: Prisma.DisputeFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.DisputeFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DisputePayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.DisputeFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DisputePayload>;
                };
                findFirst: {
                    args: Prisma.DisputeFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DisputePayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.DisputeFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DisputePayload>;
                };
                findMany: {
                    args: Prisma.DisputeFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DisputePayload>[];
                };
                create: {
                    args: Prisma.DisputeCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DisputePayload>;
                };
                createMany: {
                    args: Prisma.DisputeCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.DisputeCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DisputePayload>[];
                };
                delete: {
                    args: Prisma.DisputeDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DisputePayload>;
                };
                update: {
                    args: Prisma.DisputeUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DisputePayload>;
                };
                deleteMany: {
                    args: Prisma.DisputeDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.DisputeUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.DisputeUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DisputePayload>[];
                };
                upsert: {
                    args: Prisma.DisputeUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DisputePayload>;
                };
                aggregate: {
                    args: Prisma.DisputeAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateDispute>;
                };
                groupBy: {
                    args: Prisma.DisputeGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.DisputeGroupByOutputType>[];
                };
                count: {
                    args: Prisma.DisputeCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.DisputeCountAggregateOutputType> | number;
                };
            };
        };
        Report: {
            payload: Prisma.$ReportPayload<ExtArgs>;
            fields: Prisma.ReportFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.ReportFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ReportPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.ReportFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ReportPayload>;
                };
                findFirst: {
                    args: Prisma.ReportFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ReportPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.ReportFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ReportPayload>;
                };
                findMany: {
                    args: Prisma.ReportFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ReportPayload>[];
                };
                create: {
                    args: Prisma.ReportCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ReportPayload>;
                };
                createMany: {
                    args: Prisma.ReportCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.ReportCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ReportPayload>[];
                };
                delete: {
                    args: Prisma.ReportDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ReportPayload>;
                };
                update: {
                    args: Prisma.ReportUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ReportPayload>;
                };
                deleteMany: {
                    args: Prisma.ReportDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.ReportUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.ReportUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ReportPayload>[];
                };
                upsert: {
                    args: Prisma.ReportUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ReportPayload>;
                };
                aggregate: {
                    args: Prisma.ReportAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateReport>;
                };
                groupBy: {
                    args: Prisma.ReportGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.ReportGroupByOutputType>[];
                };
                count: {
                    args: Prisma.ReportCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.ReportCountAggregateOutputType> | number;
                };
            };
        };
        Coupon: {
            payload: Prisma.$CouponPayload<ExtArgs>;
            fields: Prisma.CouponFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.CouponFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CouponPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.CouponFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CouponPayload>;
                };
                findFirst: {
                    args: Prisma.CouponFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CouponPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.CouponFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CouponPayload>;
                };
                findMany: {
                    args: Prisma.CouponFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CouponPayload>[];
                };
                create: {
                    args: Prisma.CouponCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CouponPayload>;
                };
                createMany: {
                    args: Prisma.CouponCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.CouponCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CouponPayload>[];
                };
                delete: {
                    args: Prisma.CouponDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CouponPayload>;
                };
                update: {
                    args: Prisma.CouponUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CouponPayload>;
                };
                deleteMany: {
                    args: Prisma.CouponDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.CouponUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.CouponUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CouponPayload>[];
                };
                upsert: {
                    args: Prisma.CouponUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CouponPayload>;
                };
                aggregate: {
                    args: Prisma.CouponAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateCoupon>;
                };
                groupBy: {
                    args: Prisma.CouponGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.CouponGroupByOutputType>[];
                };
                count: {
                    args: Prisma.CouponCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.CouponCountAggregateOutputType> | number;
                };
            };
        };
        CouponUsage: {
            payload: Prisma.$CouponUsagePayload<ExtArgs>;
            fields: Prisma.CouponUsageFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.CouponUsageFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CouponUsagePayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.CouponUsageFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CouponUsagePayload>;
                };
                findFirst: {
                    args: Prisma.CouponUsageFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CouponUsagePayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.CouponUsageFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CouponUsagePayload>;
                };
                findMany: {
                    args: Prisma.CouponUsageFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CouponUsagePayload>[];
                };
                create: {
                    args: Prisma.CouponUsageCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CouponUsagePayload>;
                };
                createMany: {
                    args: Prisma.CouponUsageCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.CouponUsageCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CouponUsagePayload>[];
                };
                delete: {
                    args: Prisma.CouponUsageDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CouponUsagePayload>;
                };
                update: {
                    args: Prisma.CouponUsageUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CouponUsagePayload>;
                };
                deleteMany: {
                    args: Prisma.CouponUsageDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.CouponUsageUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.CouponUsageUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CouponUsagePayload>[];
                };
                upsert: {
                    args: Prisma.CouponUsageUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CouponUsagePayload>;
                };
                aggregate: {
                    args: Prisma.CouponUsageAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateCouponUsage>;
                };
                groupBy: {
                    args: Prisma.CouponUsageGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.CouponUsageGroupByOutputType>[];
                };
                count: {
                    args: Prisma.CouponUsageCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.CouponUsageCountAggregateOutputType> | number;
                };
            };
        };
        PlatformSetting: {
            payload: Prisma.$PlatformSettingPayload<ExtArgs>;
            fields: Prisma.PlatformSettingFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.PlatformSettingFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PlatformSettingPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.PlatformSettingFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PlatformSettingPayload>;
                };
                findFirst: {
                    args: Prisma.PlatformSettingFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PlatformSettingPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.PlatformSettingFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PlatformSettingPayload>;
                };
                findMany: {
                    args: Prisma.PlatformSettingFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PlatformSettingPayload>[];
                };
                create: {
                    args: Prisma.PlatformSettingCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PlatformSettingPayload>;
                };
                createMany: {
                    args: Prisma.PlatformSettingCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.PlatformSettingCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PlatformSettingPayload>[];
                };
                delete: {
                    args: Prisma.PlatformSettingDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PlatformSettingPayload>;
                };
                update: {
                    args: Prisma.PlatformSettingUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PlatformSettingPayload>;
                };
                deleteMany: {
                    args: Prisma.PlatformSettingDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.PlatformSettingUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.PlatformSettingUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PlatformSettingPayload>[];
                };
                upsert: {
                    args: Prisma.PlatformSettingUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PlatformSettingPayload>;
                };
                aggregate: {
                    args: Prisma.PlatformSettingAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregatePlatformSetting>;
                };
                groupBy: {
                    args: Prisma.PlatformSettingGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.PlatformSettingGroupByOutputType>[];
                };
                count: {
                    args: Prisma.PlatformSettingCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.PlatformSettingCountAggregateOutputType> | number;
                };
            };
        };
        AuditLog: {
            payload: Prisma.$AuditLogPayload<ExtArgs>;
            fields: Prisma.AuditLogFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.AuditLogFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AuditLogPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.AuditLogFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AuditLogPayload>;
                };
                findFirst: {
                    args: Prisma.AuditLogFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AuditLogPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.AuditLogFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AuditLogPayload>;
                };
                findMany: {
                    args: Prisma.AuditLogFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AuditLogPayload>[];
                };
                create: {
                    args: Prisma.AuditLogCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AuditLogPayload>;
                };
                createMany: {
                    args: Prisma.AuditLogCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.AuditLogCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AuditLogPayload>[];
                };
                delete: {
                    args: Prisma.AuditLogDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AuditLogPayload>;
                };
                update: {
                    args: Prisma.AuditLogUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AuditLogPayload>;
                };
                deleteMany: {
                    args: Prisma.AuditLogDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.AuditLogUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.AuditLogUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AuditLogPayload>[];
                };
                upsert: {
                    args: Prisma.AuditLogUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AuditLogPayload>;
                };
                aggregate: {
                    args: Prisma.AuditLogAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateAuditLog>;
                };
                groupBy: {
                    args: Prisma.AuditLogGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AuditLogGroupByOutputType>[];
                };
                count: {
                    args: Prisma.AuditLogCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AuditLogCountAggregateOutputType> | number;
                };
            };
        };
        Achievement: {
            payload: Prisma.$AchievementPayload<ExtArgs>;
            fields: Prisma.AchievementFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.AchievementFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AchievementPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.AchievementFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AchievementPayload>;
                };
                findFirst: {
                    args: Prisma.AchievementFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AchievementPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.AchievementFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AchievementPayload>;
                };
                findMany: {
                    args: Prisma.AchievementFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AchievementPayload>[];
                };
                create: {
                    args: Prisma.AchievementCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AchievementPayload>;
                };
                createMany: {
                    args: Prisma.AchievementCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.AchievementCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AchievementPayload>[];
                };
                delete: {
                    args: Prisma.AchievementDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AchievementPayload>;
                };
                update: {
                    args: Prisma.AchievementUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AchievementPayload>;
                };
                deleteMany: {
                    args: Prisma.AchievementDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.AchievementUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.AchievementUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AchievementPayload>[];
                };
                upsert: {
                    args: Prisma.AchievementUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AchievementPayload>;
                };
                aggregate: {
                    args: Prisma.AchievementAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateAchievement>;
                };
                groupBy: {
                    args: Prisma.AchievementGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AchievementGroupByOutputType>[];
                };
                count: {
                    args: Prisma.AchievementCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AchievementCountAggregateOutputType> | number;
                };
            };
        };
        UserAchievement: {
            payload: Prisma.$UserAchievementPayload<ExtArgs>;
            fields: Prisma.UserAchievementFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.UserAchievementFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserAchievementPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.UserAchievementFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserAchievementPayload>;
                };
                findFirst: {
                    args: Prisma.UserAchievementFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserAchievementPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.UserAchievementFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserAchievementPayload>;
                };
                findMany: {
                    args: Prisma.UserAchievementFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserAchievementPayload>[];
                };
                create: {
                    args: Prisma.UserAchievementCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserAchievementPayload>;
                };
                createMany: {
                    args: Prisma.UserAchievementCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.UserAchievementCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserAchievementPayload>[];
                };
                delete: {
                    args: Prisma.UserAchievementDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserAchievementPayload>;
                };
                update: {
                    args: Prisma.UserAchievementUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserAchievementPayload>;
                };
                deleteMany: {
                    args: Prisma.UserAchievementDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.UserAchievementUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.UserAchievementUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserAchievementPayload>[];
                };
                upsert: {
                    args: Prisma.UserAchievementUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserAchievementPayload>;
                };
                aggregate: {
                    args: Prisma.UserAchievementAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateUserAchievement>;
                };
                groupBy: {
                    args: Prisma.UserAchievementGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.UserAchievementGroupByOutputType>[];
                };
                count: {
                    args: Prisma.UserAchievementCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.UserAchievementCountAggregateOutputType> | number;
                };
            };
        };
        UserXP: {
            payload: Prisma.$UserXPPayload<ExtArgs>;
            fields: Prisma.UserXPFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.UserXPFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserXPPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.UserXPFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserXPPayload>;
                };
                findFirst: {
                    args: Prisma.UserXPFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserXPPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.UserXPFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserXPPayload>;
                };
                findMany: {
                    args: Prisma.UserXPFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserXPPayload>[];
                };
                create: {
                    args: Prisma.UserXPCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserXPPayload>;
                };
                createMany: {
                    args: Prisma.UserXPCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.UserXPCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserXPPayload>[];
                };
                delete: {
                    args: Prisma.UserXPDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserXPPayload>;
                };
                update: {
                    args: Prisma.UserXPUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserXPPayload>;
                };
                deleteMany: {
                    args: Prisma.UserXPDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.UserXPUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.UserXPUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserXPPayload>[];
                };
                upsert: {
                    args: Prisma.UserXPUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserXPPayload>;
                };
                aggregate: {
                    args: Prisma.UserXPAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateUserXP>;
                };
                groupBy: {
                    args: Prisma.UserXPGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.UserXPGroupByOutputType>[];
                };
                count: {
                    args: Prisma.UserXPCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.UserXPCountAggregateOutputType> | number;
                };
            };
        };
        SearchHistory: {
            payload: Prisma.$SearchHistoryPayload<ExtArgs>;
            fields: Prisma.SearchHistoryFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.SearchHistoryFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SearchHistoryPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.SearchHistoryFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SearchHistoryPayload>;
                };
                findFirst: {
                    args: Prisma.SearchHistoryFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SearchHistoryPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.SearchHistoryFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SearchHistoryPayload>;
                };
                findMany: {
                    args: Prisma.SearchHistoryFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SearchHistoryPayload>[];
                };
                create: {
                    args: Prisma.SearchHistoryCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SearchHistoryPayload>;
                };
                createMany: {
                    args: Prisma.SearchHistoryCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.SearchHistoryCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SearchHistoryPayload>[];
                };
                delete: {
                    args: Prisma.SearchHistoryDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SearchHistoryPayload>;
                };
                update: {
                    args: Prisma.SearchHistoryUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SearchHistoryPayload>;
                };
                deleteMany: {
                    args: Prisma.SearchHistoryDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.SearchHistoryUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.SearchHistoryUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SearchHistoryPayload>[];
                };
                upsert: {
                    args: Prisma.SearchHistoryUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SearchHistoryPayload>;
                };
                aggregate: {
                    args: Prisma.SearchHistoryAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateSearchHistory>;
                };
                groupBy: {
                    args: Prisma.SearchHistoryGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.SearchHistoryGroupByOutputType>[];
                };
                count: {
                    args: Prisma.SearchHistoryCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.SearchHistoryCountAggregateOutputType> | number;
                };
            };
        };
        Role: {
            payload: Prisma.$RolePayload<ExtArgs>;
            fields: Prisma.RoleFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.RoleFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$RolePayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.RoleFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$RolePayload>;
                };
                findFirst: {
                    args: Prisma.RoleFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$RolePayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.RoleFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$RolePayload>;
                };
                findMany: {
                    args: Prisma.RoleFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$RolePayload>[];
                };
                create: {
                    args: Prisma.RoleCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$RolePayload>;
                };
                createMany: {
                    args: Prisma.RoleCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.RoleCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$RolePayload>[];
                };
                delete: {
                    args: Prisma.RoleDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$RolePayload>;
                };
                update: {
                    args: Prisma.RoleUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$RolePayload>;
                };
                deleteMany: {
                    args: Prisma.RoleDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.RoleUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.RoleUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$RolePayload>[];
                };
                upsert: {
                    args: Prisma.RoleUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$RolePayload>;
                };
                aggregate: {
                    args: Prisma.RoleAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateRole>;
                };
                groupBy: {
                    args: Prisma.RoleGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.RoleGroupByOutputType>[];
                };
                count: {
                    args: Prisma.RoleCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.RoleCountAggregateOutputType> | number;
                };
            };
        };
        Permission: {
            payload: Prisma.$PermissionPayload<ExtArgs>;
            fields: Prisma.PermissionFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.PermissionFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PermissionPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.PermissionFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PermissionPayload>;
                };
                findFirst: {
                    args: Prisma.PermissionFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PermissionPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.PermissionFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PermissionPayload>;
                };
                findMany: {
                    args: Prisma.PermissionFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PermissionPayload>[];
                };
                create: {
                    args: Prisma.PermissionCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PermissionPayload>;
                };
                createMany: {
                    args: Prisma.PermissionCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.PermissionCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PermissionPayload>[];
                };
                delete: {
                    args: Prisma.PermissionDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PermissionPayload>;
                };
                update: {
                    args: Prisma.PermissionUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PermissionPayload>;
                };
                deleteMany: {
                    args: Prisma.PermissionDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.PermissionUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.PermissionUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PermissionPayload>[];
                };
                upsert: {
                    args: Prisma.PermissionUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PermissionPayload>;
                };
                aggregate: {
                    args: Prisma.PermissionAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregatePermission>;
                };
                groupBy: {
                    args: Prisma.PermissionGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.PermissionGroupByOutputType>[];
                };
                count: {
                    args: Prisma.PermissionCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.PermissionCountAggregateOutputType> | number;
                };
            };
        };
        RolePermission: {
            payload: Prisma.$RolePermissionPayload<ExtArgs>;
            fields: Prisma.RolePermissionFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.RolePermissionFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$RolePermissionPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.RolePermissionFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$RolePermissionPayload>;
                };
                findFirst: {
                    args: Prisma.RolePermissionFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$RolePermissionPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.RolePermissionFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$RolePermissionPayload>;
                };
                findMany: {
                    args: Prisma.RolePermissionFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$RolePermissionPayload>[];
                };
                create: {
                    args: Prisma.RolePermissionCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$RolePermissionPayload>;
                };
                createMany: {
                    args: Prisma.RolePermissionCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.RolePermissionCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$RolePermissionPayload>[];
                };
                delete: {
                    args: Prisma.RolePermissionDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$RolePermissionPayload>;
                };
                update: {
                    args: Prisma.RolePermissionUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$RolePermissionPayload>;
                };
                deleteMany: {
                    args: Prisma.RolePermissionDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.RolePermissionUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.RolePermissionUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$RolePermissionPayload>[];
                };
                upsert: {
                    args: Prisma.RolePermissionUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$RolePermissionPayload>;
                };
                aggregate: {
                    args: Prisma.RolePermissionAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateRolePermission>;
                };
                groupBy: {
                    args: Prisma.RolePermissionGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.RolePermissionGroupByOutputType>[];
                };
                count: {
                    args: Prisma.RolePermissionCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.RolePermissionCountAggregateOutputType> | number;
                };
            };
        };
        UserRole: {
            payload: Prisma.$UserRolePayload<ExtArgs>;
            fields: Prisma.UserRoleFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.UserRoleFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserRolePayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.UserRoleFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserRolePayload>;
                };
                findFirst: {
                    args: Prisma.UserRoleFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserRolePayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.UserRoleFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserRolePayload>;
                };
                findMany: {
                    args: Prisma.UserRoleFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserRolePayload>[];
                };
                create: {
                    args: Prisma.UserRoleCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserRolePayload>;
                };
                createMany: {
                    args: Prisma.UserRoleCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.UserRoleCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserRolePayload>[];
                };
                delete: {
                    args: Prisma.UserRoleDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserRolePayload>;
                };
                update: {
                    args: Prisma.UserRoleUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserRolePayload>;
                };
                deleteMany: {
                    args: Prisma.UserRoleDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.UserRoleUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.UserRoleUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserRolePayload>[];
                };
                upsert: {
                    args: Prisma.UserRoleUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserRolePayload>;
                };
                aggregate: {
                    args: Prisma.UserRoleAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateUserRole>;
                };
                groupBy: {
                    args: Prisma.UserRoleGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.UserRoleGroupByOutputType>[];
                };
                count: {
                    args: Prisma.UserRoleCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.UserRoleCountAggregateOutputType> | number;
                };
            };
        };
        ProductCategory: {
            payload: Prisma.$ProductCategoryPayload<ExtArgs>;
            fields: Prisma.ProductCategoryFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.ProductCategoryFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ProductCategoryPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.ProductCategoryFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ProductCategoryPayload>;
                };
                findFirst: {
                    args: Prisma.ProductCategoryFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ProductCategoryPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.ProductCategoryFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ProductCategoryPayload>;
                };
                findMany: {
                    args: Prisma.ProductCategoryFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ProductCategoryPayload>[];
                };
                create: {
                    args: Prisma.ProductCategoryCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ProductCategoryPayload>;
                };
                createMany: {
                    args: Prisma.ProductCategoryCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.ProductCategoryCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ProductCategoryPayload>[];
                };
                delete: {
                    args: Prisma.ProductCategoryDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ProductCategoryPayload>;
                };
                update: {
                    args: Prisma.ProductCategoryUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ProductCategoryPayload>;
                };
                deleteMany: {
                    args: Prisma.ProductCategoryDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.ProductCategoryUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.ProductCategoryUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ProductCategoryPayload>[];
                };
                upsert: {
                    args: Prisma.ProductCategoryUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ProductCategoryPayload>;
                };
                aggregate: {
                    args: Prisma.ProductCategoryAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateProductCategory>;
                };
                groupBy: {
                    args: Prisma.ProductCategoryGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.ProductCategoryGroupByOutputType>[];
                };
                count: {
                    args: Prisma.ProductCategoryCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.ProductCategoryCountAggregateOutputType> | number;
                };
            };
        };
        Product: {
            payload: Prisma.$ProductPayload<ExtArgs>;
            fields: Prisma.ProductFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.ProductFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ProductPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.ProductFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ProductPayload>;
                };
                findFirst: {
                    args: Prisma.ProductFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ProductPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.ProductFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ProductPayload>;
                };
                findMany: {
                    args: Prisma.ProductFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ProductPayload>[];
                };
                create: {
                    args: Prisma.ProductCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ProductPayload>;
                };
                createMany: {
                    args: Prisma.ProductCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.ProductCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ProductPayload>[];
                };
                delete: {
                    args: Prisma.ProductDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ProductPayload>;
                };
                update: {
                    args: Prisma.ProductUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ProductPayload>;
                };
                deleteMany: {
                    args: Prisma.ProductDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.ProductUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.ProductUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ProductPayload>[];
                };
                upsert: {
                    args: Prisma.ProductUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ProductPayload>;
                };
                aggregate: {
                    args: Prisma.ProductAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateProduct>;
                };
                groupBy: {
                    args: Prisma.ProductGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.ProductGroupByOutputType>[];
                };
                count: {
                    args: Prisma.ProductCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.ProductCountAggregateOutputType> | number;
                };
            };
        };
        ProductImage: {
            payload: Prisma.$ProductImagePayload<ExtArgs>;
            fields: Prisma.ProductImageFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.ProductImageFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ProductImagePayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.ProductImageFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ProductImagePayload>;
                };
                findFirst: {
                    args: Prisma.ProductImageFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ProductImagePayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.ProductImageFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ProductImagePayload>;
                };
                findMany: {
                    args: Prisma.ProductImageFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ProductImagePayload>[];
                };
                create: {
                    args: Prisma.ProductImageCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ProductImagePayload>;
                };
                createMany: {
                    args: Prisma.ProductImageCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.ProductImageCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ProductImagePayload>[];
                };
                delete: {
                    args: Prisma.ProductImageDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ProductImagePayload>;
                };
                update: {
                    args: Prisma.ProductImageUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ProductImagePayload>;
                };
                deleteMany: {
                    args: Prisma.ProductImageDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.ProductImageUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.ProductImageUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ProductImagePayload>[];
                };
                upsert: {
                    args: Prisma.ProductImageUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ProductImagePayload>;
                };
                aggregate: {
                    args: Prisma.ProductImageAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateProductImage>;
                };
                groupBy: {
                    args: Prisma.ProductImageGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.ProductImageGroupByOutputType>[];
                };
                count: {
                    args: Prisma.ProductImageCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.ProductImageCountAggregateOutputType> | number;
                };
            };
        };
        ProductReview: {
            payload: Prisma.$ProductReviewPayload<ExtArgs>;
            fields: Prisma.ProductReviewFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.ProductReviewFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ProductReviewPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.ProductReviewFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ProductReviewPayload>;
                };
                findFirst: {
                    args: Prisma.ProductReviewFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ProductReviewPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.ProductReviewFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ProductReviewPayload>;
                };
                findMany: {
                    args: Prisma.ProductReviewFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ProductReviewPayload>[];
                };
                create: {
                    args: Prisma.ProductReviewCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ProductReviewPayload>;
                };
                createMany: {
                    args: Prisma.ProductReviewCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.ProductReviewCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ProductReviewPayload>[];
                };
                delete: {
                    args: Prisma.ProductReviewDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ProductReviewPayload>;
                };
                update: {
                    args: Prisma.ProductReviewUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ProductReviewPayload>;
                };
                deleteMany: {
                    args: Prisma.ProductReviewDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.ProductReviewUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.ProductReviewUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ProductReviewPayload>[];
                };
                upsert: {
                    args: Prisma.ProductReviewUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ProductReviewPayload>;
                };
                aggregate: {
                    args: Prisma.ProductReviewAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateProductReview>;
                };
                groupBy: {
                    args: Prisma.ProductReviewGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.ProductReviewGroupByOutputType>[];
                };
                count: {
                    args: Prisma.ProductReviewCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.ProductReviewCountAggregateOutputType> | number;
                };
            };
        };
        Company: {
            payload: Prisma.$CompanyPayload<ExtArgs>;
            fields: Prisma.CompanyFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.CompanyFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CompanyPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.CompanyFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CompanyPayload>;
                };
                findFirst: {
                    args: Prisma.CompanyFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CompanyPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.CompanyFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CompanyPayload>;
                };
                findMany: {
                    args: Prisma.CompanyFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CompanyPayload>[];
                };
                create: {
                    args: Prisma.CompanyCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CompanyPayload>;
                };
                createMany: {
                    args: Prisma.CompanyCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.CompanyCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CompanyPayload>[];
                };
                delete: {
                    args: Prisma.CompanyDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CompanyPayload>;
                };
                update: {
                    args: Prisma.CompanyUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CompanyPayload>;
                };
                deleteMany: {
                    args: Prisma.CompanyDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.CompanyUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.CompanyUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CompanyPayload>[];
                };
                upsert: {
                    args: Prisma.CompanyUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CompanyPayload>;
                };
                aggregate: {
                    args: Prisma.CompanyAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateCompany>;
                };
                groupBy: {
                    args: Prisma.CompanyGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.CompanyGroupByOutputType>[];
                };
                count: {
                    args: Prisma.CompanyCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.CompanyCountAggregateOutputType> | number;
                };
            };
        };
        Job: {
            payload: Prisma.$JobPayload<ExtArgs>;
            fields: Prisma.JobFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.JobFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$JobPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.JobFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$JobPayload>;
                };
                findFirst: {
                    args: Prisma.JobFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$JobPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.JobFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$JobPayload>;
                };
                findMany: {
                    args: Prisma.JobFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$JobPayload>[];
                };
                create: {
                    args: Prisma.JobCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$JobPayload>;
                };
                createMany: {
                    args: Prisma.JobCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.JobCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$JobPayload>[];
                };
                delete: {
                    args: Prisma.JobDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$JobPayload>;
                };
                update: {
                    args: Prisma.JobUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$JobPayload>;
                };
                deleteMany: {
                    args: Prisma.JobDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.JobUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.JobUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$JobPayload>[];
                };
                upsert: {
                    args: Prisma.JobUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$JobPayload>;
                };
                aggregate: {
                    args: Prisma.JobAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateJob>;
                };
                groupBy: {
                    args: Prisma.JobGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.JobGroupByOutputType>[];
                };
                count: {
                    args: Prisma.JobCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.JobCountAggregateOutputType> | number;
                };
            };
        };
        JobApplication: {
            payload: Prisma.$JobApplicationPayload<ExtArgs>;
            fields: Prisma.JobApplicationFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.JobApplicationFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$JobApplicationPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.JobApplicationFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$JobApplicationPayload>;
                };
                findFirst: {
                    args: Prisma.JobApplicationFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$JobApplicationPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.JobApplicationFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$JobApplicationPayload>;
                };
                findMany: {
                    args: Prisma.JobApplicationFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$JobApplicationPayload>[];
                };
                create: {
                    args: Prisma.JobApplicationCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$JobApplicationPayload>;
                };
                createMany: {
                    args: Prisma.JobApplicationCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.JobApplicationCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$JobApplicationPayload>[];
                };
                delete: {
                    args: Prisma.JobApplicationDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$JobApplicationPayload>;
                };
                update: {
                    args: Prisma.JobApplicationUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$JobApplicationPayload>;
                };
                deleteMany: {
                    args: Prisma.JobApplicationDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.JobApplicationUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.JobApplicationUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$JobApplicationPayload>[];
                };
                upsert: {
                    args: Prisma.JobApplicationUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$JobApplicationPayload>;
                };
                aggregate: {
                    args: Prisma.JobApplicationAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateJobApplication>;
                };
                groupBy: {
                    args: Prisma.JobApplicationGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.JobApplicationGroupByOutputType>[];
                };
                count: {
                    args: Prisma.JobApplicationCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.JobApplicationCountAggregateOutputType> | number;
                };
            };
        };
        Resume: {
            payload: Prisma.$ResumePayload<ExtArgs>;
            fields: Prisma.ResumeFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.ResumeFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ResumePayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.ResumeFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ResumePayload>;
                };
                findFirst: {
                    args: Prisma.ResumeFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ResumePayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.ResumeFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ResumePayload>;
                };
                findMany: {
                    args: Prisma.ResumeFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ResumePayload>[];
                };
                create: {
                    args: Prisma.ResumeCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ResumePayload>;
                };
                createMany: {
                    args: Prisma.ResumeCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.ResumeCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ResumePayload>[];
                };
                delete: {
                    args: Prisma.ResumeDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ResumePayload>;
                };
                update: {
                    args: Prisma.ResumeUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ResumePayload>;
                };
                deleteMany: {
                    args: Prisma.ResumeDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.ResumeUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.ResumeUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ResumePayload>[];
                };
                upsert: {
                    args: Prisma.ResumeUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ResumePayload>;
                };
                aggregate: {
                    args: Prisma.ResumeAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateResume>;
                };
                groupBy: {
                    args: Prisma.ResumeGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.ResumeGroupByOutputType>[];
                };
                count: {
                    args: Prisma.ResumeCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.ResumeCountAggregateOutputType> | number;
                };
            };
        };
        ResumeScore: {
            payload: Prisma.$ResumeScorePayload<ExtArgs>;
            fields: Prisma.ResumeScoreFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.ResumeScoreFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ResumeScorePayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.ResumeScoreFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ResumeScorePayload>;
                };
                findFirst: {
                    args: Prisma.ResumeScoreFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ResumeScorePayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.ResumeScoreFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ResumeScorePayload>;
                };
                findMany: {
                    args: Prisma.ResumeScoreFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ResumeScorePayload>[];
                };
                create: {
                    args: Prisma.ResumeScoreCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ResumeScorePayload>;
                };
                createMany: {
                    args: Prisma.ResumeScoreCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.ResumeScoreCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ResumeScorePayload>[];
                };
                delete: {
                    args: Prisma.ResumeScoreDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ResumeScorePayload>;
                };
                update: {
                    args: Prisma.ResumeScoreUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ResumeScorePayload>;
                };
                deleteMany: {
                    args: Prisma.ResumeScoreDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.ResumeScoreUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.ResumeScoreUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ResumeScorePayload>[];
                };
                upsert: {
                    args: Prisma.ResumeScoreUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ResumeScorePayload>;
                };
                aggregate: {
                    args: Prisma.ResumeScoreAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateResumeScore>;
                };
                groupBy: {
                    args: Prisma.ResumeScoreGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.ResumeScoreGroupByOutputType>[];
                };
                count: {
                    args: Prisma.ResumeScoreCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.ResumeScoreCountAggregateOutputType> | number;
                };
            };
        };
        BookCategory: {
            payload: Prisma.$BookCategoryPayload<ExtArgs>;
            fields: Prisma.BookCategoryFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.BookCategoryFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$BookCategoryPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.BookCategoryFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$BookCategoryPayload>;
                };
                findFirst: {
                    args: Prisma.BookCategoryFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$BookCategoryPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.BookCategoryFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$BookCategoryPayload>;
                };
                findMany: {
                    args: Prisma.BookCategoryFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$BookCategoryPayload>[];
                };
                create: {
                    args: Prisma.BookCategoryCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$BookCategoryPayload>;
                };
                createMany: {
                    args: Prisma.BookCategoryCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.BookCategoryCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$BookCategoryPayload>[];
                };
                delete: {
                    args: Prisma.BookCategoryDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$BookCategoryPayload>;
                };
                update: {
                    args: Prisma.BookCategoryUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$BookCategoryPayload>;
                };
                deleteMany: {
                    args: Prisma.BookCategoryDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.BookCategoryUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.BookCategoryUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$BookCategoryPayload>[];
                };
                upsert: {
                    args: Prisma.BookCategoryUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$BookCategoryPayload>;
                };
                aggregate: {
                    args: Prisma.BookCategoryAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateBookCategory>;
                };
                groupBy: {
                    args: Prisma.BookCategoryGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.BookCategoryGroupByOutputType>[];
                };
                count: {
                    args: Prisma.BookCategoryCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.BookCategoryCountAggregateOutputType> | number;
                };
            };
        };
        Book: {
            payload: Prisma.$BookPayload<ExtArgs>;
            fields: Prisma.BookFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.BookFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$BookPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.BookFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$BookPayload>;
                };
                findFirst: {
                    args: Prisma.BookFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$BookPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.BookFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$BookPayload>;
                };
                findMany: {
                    args: Prisma.BookFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$BookPayload>[];
                };
                create: {
                    args: Prisma.BookCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$BookPayload>;
                };
                createMany: {
                    args: Prisma.BookCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.BookCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$BookPayload>[];
                };
                delete: {
                    args: Prisma.BookDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$BookPayload>;
                };
                update: {
                    args: Prisma.BookUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$BookPayload>;
                };
                deleteMany: {
                    args: Prisma.BookDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.BookUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.BookUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$BookPayload>[];
                };
                upsert: {
                    args: Prisma.BookUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$BookPayload>;
                };
                aggregate: {
                    args: Prisma.BookAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateBook>;
                };
                groupBy: {
                    args: Prisma.BookGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.BookGroupByOutputType>[];
                };
                count: {
                    args: Prisma.BookCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.BookCountAggregateOutputType> | number;
                };
            };
        };
        BookChapter: {
            payload: Prisma.$BookChapterPayload<ExtArgs>;
            fields: Prisma.BookChapterFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.BookChapterFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$BookChapterPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.BookChapterFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$BookChapterPayload>;
                };
                findFirst: {
                    args: Prisma.BookChapterFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$BookChapterPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.BookChapterFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$BookChapterPayload>;
                };
                findMany: {
                    args: Prisma.BookChapterFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$BookChapterPayload>[];
                };
                create: {
                    args: Prisma.BookChapterCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$BookChapterPayload>;
                };
                createMany: {
                    args: Prisma.BookChapterCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.BookChapterCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$BookChapterPayload>[];
                };
                delete: {
                    args: Prisma.BookChapterDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$BookChapterPayload>;
                };
                update: {
                    args: Prisma.BookChapterUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$BookChapterPayload>;
                };
                deleteMany: {
                    args: Prisma.BookChapterDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.BookChapterUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.BookChapterUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$BookChapterPayload>[];
                };
                upsert: {
                    args: Prisma.BookChapterUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$BookChapterPayload>;
                };
                aggregate: {
                    args: Prisma.BookChapterAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateBookChapter>;
                };
                groupBy: {
                    args: Prisma.BookChapterGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.BookChapterGroupByOutputType>[];
                };
                count: {
                    args: Prisma.BookChapterCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.BookChapterCountAggregateOutputType> | number;
                };
            };
        };
        BookPurchase: {
            payload: Prisma.$BookPurchasePayload<ExtArgs>;
            fields: Prisma.BookPurchaseFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.BookPurchaseFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$BookPurchasePayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.BookPurchaseFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$BookPurchasePayload>;
                };
                findFirst: {
                    args: Prisma.BookPurchaseFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$BookPurchasePayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.BookPurchaseFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$BookPurchasePayload>;
                };
                findMany: {
                    args: Prisma.BookPurchaseFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$BookPurchasePayload>[];
                };
                create: {
                    args: Prisma.BookPurchaseCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$BookPurchasePayload>;
                };
                createMany: {
                    args: Prisma.BookPurchaseCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.BookPurchaseCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$BookPurchasePayload>[];
                };
                delete: {
                    args: Prisma.BookPurchaseDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$BookPurchasePayload>;
                };
                update: {
                    args: Prisma.BookPurchaseUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$BookPurchasePayload>;
                };
                deleteMany: {
                    args: Prisma.BookPurchaseDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.BookPurchaseUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.BookPurchaseUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$BookPurchasePayload>[];
                };
                upsert: {
                    args: Prisma.BookPurchaseUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$BookPurchasePayload>;
                };
                aggregate: {
                    args: Prisma.BookPurchaseAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateBookPurchase>;
                };
                groupBy: {
                    args: Prisma.BookPurchaseGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.BookPurchaseGroupByOutputType>[];
                };
                count: {
                    args: Prisma.BookPurchaseCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.BookPurchaseCountAggregateOutputType> | number;
                };
            };
        };
        BookReview: {
            payload: Prisma.$BookReviewPayload<ExtArgs>;
            fields: Prisma.BookReviewFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.BookReviewFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$BookReviewPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.BookReviewFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$BookReviewPayload>;
                };
                findFirst: {
                    args: Prisma.BookReviewFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$BookReviewPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.BookReviewFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$BookReviewPayload>;
                };
                findMany: {
                    args: Prisma.BookReviewFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$BookReviewPayload>[];
                };
                create: {
                    args: Prisma.BookReviewCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$BookReviewPayload>;
                };
                createMany: {
                    args: Prisma.BookReviewCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.BookReviewCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$BookReviewPayload>[];
                };
                delete: {
                    args: Prisma.BookReviewDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$BookReviewPayload>;
                };
                update: {
                    args: Prisma.BookReviewUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$BookReviewPayload>;
                };
                deleteMany: {
                    args: Prisma.BookReviewDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.BookReviewUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.BookReviewUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$BookReviewPayload>[];
                };
                upsert: {
                    args: Prisma.BookReviewUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$BookReviewPayload>;
                };
                aggregate: {
                    args: Prisma.BookReviewAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateBookReview>;
                };
                groupBy: {
                    args: Prisma.BookReviewGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.BookReviewGroupByOutputType>[];
                };
                count: {
                    args: Prisma.BookReviewCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.BookReviewCountAggregateOutputType> | number;
                };
            };
        };
        ResourceCategory: {
            payload: Prisma.$ResourceCategoryPayload<ExtArgs>;
            fields: Prisma.ResourceCategoryFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.ResourceCategoryFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ResourceCategoryPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.ResourceCategoryFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ResourceCategoryPayload>;
                };
                findFirst: {
                    args: Prisma.ResourceCategoryFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ResourceCategoryPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.ResourceCategoryFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ResourceCategoryPayload>;
                };
                findMany: {
                    args: Prisma.ResourceCategoryFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ResourceCategoryPayload>[];
                };
                create: {
                    args: Prisma.ResourceCategoryCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ResourceCategoryPayload>;
                };
                createMany: {
                    args: Prisma.ResourceCategoryCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.ResourceCategoryCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ResourceCategoryPayload>[];
                };
                delete: {
                    args: Prisma.ResourceCategoryDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ResourceCategoryPayload>;
                };
                update: {
                    args: Prisma.ResourceCategoryUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ResourceCategoryPayload>;
                };
                deleteMany: {
                    args: Prisma.ResourceCategoryDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.ResourceCategoryUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.ResourceCategoryUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ResourceCategoryPayload>[];
                };
                upsert: {
                    args: Prisma.ResourceCategoryUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ResourceCategoryPayload>;
                };
                aggregate: {
                    args: Prisma.ResourceCategoryAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateResourceCategory>;
                };
                groupBy: {
                    args: Prisma.ResourceCategoryGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.ResourceCategoryGroupByOutputType>[];
                };
                count: {
                    args: Prisma.ResourceCategoryCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.ResourceCategoryCountAggregateOutputType> | number;
                };
            };
        };
        Resource: {
            payload: Prisma.$ResourcePayload<ExtArgs>;
            fields: Prisma.ResourceFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.ResourceFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ResourcePayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.ResourceFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ResourcePayload>;
                };
                findFirst: {
                    args: Prisma.ResourceFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ResourcePayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.ResourceFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ResourcePayload>;
                };
                findMany: {
                    args: Prisma.ResourceFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ResourcePayload>[];
                };
                create: {
                    args: Prisma.ResourceCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ResourcePayload>;
                };
                createMany: {
                    args: Prisma.ResourceCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.ResourceCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ResourcePayload>[];
                };
                delete: {
                    args: Prisma.ResourceDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ResourcePayload>;
                };
                update: {
                    args: Prisma.ResourceUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ResourcePayload>;
                };
                deleteMany: {
                    args: Prisma.ResourceDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.ResourceUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.ResourceUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ResourcePayload>[];
                };
                upsert: {
                    args: Prisma.ResourceUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ResourcePayload>;
                };
                aggregate: {
                    args: Prisma.ResourceAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateResource>;
                };
                groupBy: {
                    args: Prisma.ResourceGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.ResourceGroupByOutputType>[];
                };
                count: {
                    args: Prisma.ResourceCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.ResourceCountAggregateOutputType> | number;
                };
            };
        };
        ResourceFile: {
            payload: Prisma.$ResourceFilePayload<ExtArgs>;
            fields: Prisma.ResourceFileFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.ResourceFileFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ResourceFilePayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.ResourceFileFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ResourceFilePayload>;
                };
                findFirst: {
                    args: Prisma.ResourceFileFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ResourceFilePayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.ResourceFileFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ResourceFilePayload>;
                };
                findMany: {
                    args: Prisma.ResourceFileFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ResourceFilePayload>[];
                };
                create: {
                    args: Prisma.ResourceFileCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ResourceFilePayload>;
                };
                createMany: {
                    args: Prisma.ResourceFileCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.ResourceFileCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ResourceFilePayload>[];
                };
                delete: {
                    args: Prisma.ResourceFileDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ResourceFilePayload>;
                };
                update: {
                    args: Prisma.ResourceFileUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ResourceFilePayload>;
                };
                deleteMany: {
                    args: Prisma.ResourceFileDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.ResourceFileUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.ResourceFileUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ResourceFilePayload>[];
                };
                upsert: {
                    args: Prisma.ResourceFileUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ResourceFilePayload>;
                };
                aggregate: {
                    args: Prisma.ResourceFileAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateResourceFile>;
                };
                groupBy: {
                    args: Prisma.ResourceFileGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.ResourceFileGroupByOutputType>[];
                };
                count: {
                    args: Prisma.ResourceFileCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.ResourceFileCountAggregateOutputType> | number;
                };
            };
        };
        PortfolioProject: {
            payload: Prisma.$PortfolioProjectPayload<ExtArgs>;
            fields: Prisma.PortfolioProjectFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.PortfolioProjectFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PortfolioProjectPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.PortfolioProjectFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PortfolioProjectPayload>;
                };
                findFirst: {
                    args: Prisma.PortfolioProjectFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PortfolioProjectPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.PortfolioProjectFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PortfolioProjectPayload>;
                };
                findMany: {
                    args: Prisma.PortfolioProjectFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PortfolioProjectPayload>[];
                };
                create: {
                    args: Prisma.PortfolioProjectCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PortfolioProjectPayload>;
                };
                createMany: {
                    args: Prisma.PortfolioProjectCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.PortfolioProjectCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PortfolioProjectPayload>[];
                };
                delete: {
                    args: Prisma.PortfolioProjectDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PortfolioProjectPayload>;
                };
                update: {
                    args: Prisma.PortfolioProjectUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PortfolioProjectPayload>;
                };
                deleteMany: {
                    args: Prisma.PortfolioProjectDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.PortfolioProjectUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.PortfolioProjectUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PortfolioProjectPayload>[];
                };
                upsert: {
                    args: Prisma.PortfolioProjectUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PortfolioProjectPayload>;
                };
                aggregate: {
                    args: Prisma.PortfolioProjectAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregatePortfolioProject>;
                };
                groupBy: {
                    args: Prisma.PortfolioProjectGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.PortfolioProjectGroupByOutputType>[];
                };
                count: {
                    args: Prisma.PortfolioProjectCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.PortfolioProjectCountAggregateOutputType> | number;
                };
            };
        };
        Employee: {
            payload: Prisma.$EmployeePayload<ExtArgs>;
            fields: Prisma.EmployeeFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.EmployeeFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$EmployeePayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.EmployeeFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$EmployeePayload>;
                };
                findFirst: {
                    args: Prisma.EmployeeFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$EmployeePayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.EmployeeFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$EmployeePayload>;
                };
                findMany: {
                    args: Prisma.EmployeeFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$EmployeePayload>[];
                };
                create: {
                    args: Prisma.EmployeeCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$EmployeePayload>;
                };
                createMany: {
                    args: Prisma.EmployeeCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.EmployeeCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$EmployeePayload>[];
                };
                delete: {
                    args: Prisma.EmployeeDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$EmployeePayload>;
                };
                update: {
                    args: Prisma.EmployeeUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$EmployeePayload>;
                };
                deleteMany: {
                    args: Prisma.EmployeeDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.EmployeeUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.EmployeeUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$EmployeePayload>[];
                };
                upsert: {
                    args: Prisma.EmployeeUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$EmployeePayload>;
                };
                aggregate: {
                    args: Prisma.EmployeeAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateEmployee>;
                };
                groupBy: {
                    args: Prisma.EmployeeGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.EmployeeGroupByOutputType>[];
                };
                count: {
                    args: Prisma.EmployeeCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.EmployeeCountAggregateOutputType> | number;
                };
            };
        };
        AIConversation: {
            payload: Prisma.$AIConversationPayload<ExtArgs>;
            fields: Prisma.AIConversationFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.AIConversationFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AIConversationPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.AIConversationFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AIConversationPayload>;
                };
                findFirst: {
                    args: Prisma.AIConversationFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AIConversationPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.AIConversationFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AIConversationPayload>;
                };
                findMany: {
                    args: Prisma.AIConversationFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AIConversationPayload>[];
                };
                create: {
                    args: Prisma.AIConversationCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AIConversationPayload>;
                };
                createMany: {
                    args: Prisma.AIConversationCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.AIConversationCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AIConversationPayload>[];
                };
                delete: {
                    args: Prisma.AIConversationDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AIConversationPayload>;
                };
                update: {
                    args: Prisma.AIConversationUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AIConversationPayload>;
                };
                deleteMany: {
                    args: Prisma.AIConversationDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.AIConversationUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.AIConversationUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AIConversationPayload>[];
                };
                upsert: {
                    args: Prisma.AIConversationUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AIConversationPayload>;
                };
                aggregate: {
                    args: Prisma.AIConversationAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateAIConversation>;
                };
                groupBy: {
                    args: Prisma.AIConversationGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AIConversationGroupByOutputType>[];
                };
                count: {
                    args: Prisma.AIConversationCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AIConversationCountAggregateOutputType> | number;
                };
            };
        };
        AIMessage: {
            payload: Prisma.$AIMessagePayload<ExtArgs>;
            fields: Prisma.AIMessageFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.AIMessageFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AIMessagePayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.AIMessageFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AIMessagePayload>;
                };
                findFirst: {
                    args: Prisma.AIMessageFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AIMessagePayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.AIMessageFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AIMessagePayload>;
                };
                findMany: {
                    args: Prisma.AIMessageFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AIMessagePayload>[];
                };
                create: {
                    args: Prisma.AIMessageCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AIMessagePayload>;
                };
                createMany: {
                    args: Prisma.AIMessageCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.AIMessageCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AIMessagePayload>[];
                };
                delete: {
                    args: Prisma.AIMessageDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AIMessagePayload>;
                };
                update: {
                    args: Prisma.AIMessageUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AIMessagePayload>;
                };
                deleteMany: {
                    args: Prisma.AIMessageDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.AIMessageUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.AIMessageUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AIMessagePayload>[];
                };
                upsert: {
                    args: Prisma.AIMessageUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AIMessagePayload>;
                };
                aggregate: {
                    args: Prisma.AIMessageAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateAIMessage>;
                };
                groupBy: {
                    args: Prisma.AIMessageGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AIMessageGroupByOutputType>[];
                };
                count: {
                    args: Prisma.AIMessageCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AIMessageCountAggregateOutputType> | number;
                };
            };
        };
    };
} & {
    other: {
        payload: any;
        operations: {
            $executeRaw: {
                args: [query: TemplateStringsArray | Sql, ...values: any[]];
                result: any;
            };
            $executeRawUnsafe: {
                args: [query: string, ...values: any[]];
                result: any;
            };
            $queryRaw: {
                args: [query: TemplateStringsArray | Sql, ...values: any[]];
                result: any;
            };
            $queryRawUnsafe: {
                args: [query: string, ...values: any[]];
                result: any;
            };
        };
    };
};
/**
 * Enums
 */
export declare const TransactionIsolationLevel: {
    readonly ReadUncommitted: "ReadUncommitted";
    readonly ReadCommitted: "ReadCommitted";
    readonly RepeatableRead: "RepeatableRead";
    readonly Serializable: "Serializable";
};
export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel];
export declare const UserScalarFieldEnum: {
    readonly id: "id";
    readonly name: "name";
    readonly username: "username";
    readonly email: "email";
    readonly emailVerified: "emailVerified";
    readonly image: "image";
    readonly coverImage: "coverImage";
    readonly bio: "bio";
    readonly location: "location";
    readonly skills: "skills";
    readonly languages: "languages";
    readonly timezone: "timezone";
    readonly website: "website";
    readonly github: "github";
    readonly linkedin: "linkedin";
    readonly role: "role";
    readonly status: "status";
    readonly verificationStatus: "verificationStatus";
    readonly profileCompletion: "profileCompletion";
    readonly preferredCurrency: "preferredCurrency";
    readonly stripeAccountId: "stripeAccountId";
    readonly stripeOnboardingDone: "stripeOnboardingDone";
    readonly lastLoginAt: "lastLoginAt";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum];
export declare const AccountScalarFieldEnum: {
    readonly id: "id";
    readonly userId: "userId";
    readonly accountId: "accountId";
    readonly providerId: "providerId";
    readonly accessToken: "accessToken";
    readonly refreshToken: "refreshToken";
    readonly idToken: "idToken";
    readonly accessTokenExpiresAt: "accessTokenExpiresAt";
    readonly refreshTokenExpiresAt: "refreshTokenExpiresAt";
    readonly scope: "scope";
    readonly password: "password";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type AccountScalarFieldEnum = (typeof AccountScalarFieldEnum)[keyof typeof AccountScalarFieldEnum];
export declare const SessionScalarFieldEnum: {
    readonly id: "id";
    readonly token: "token";
    readonly userId: "userId";
    readonly expiresAt: "expiresAt";
    readonly ipAddress: "ipAddress";
    readonly userAgent: "userAgent";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type SessionScalarFieldEnum = (typeof SessionScalarFieldEnum)[keyof typeof SessionScalarFieldEnum];
export declare const VerificationScalarFieldEnum: {
    readonly id: "id";
    readonly identifier: "identifier";
    readonly value: "value";
    readonly expiresAt: "expiresAt";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type VerificationScalarFieldEnum = (typeof VerificationScalarFieldEnum)[keyof typeof VerificationScalarFieldEnum];
export declare const ProfileScalarFieldEnum: {
    readonly id: "id";
    readonly userId: "userId";
    readonly headline: "headline";
    readonly occupation: "occupation";
    readonly education: "education";
    readonly experience: "experience";
    readonly phoneNumber: "phoneNumber";
    readonly country: "country";
    readonly city: "city";
    readonly dateOfBirth: "dateOfBirth";
    readonly updatedAt: "updatedAt";
};
export type ProfileScalarFieldEnum = (typeof ProfileScalarFieldEnum)[keyof typeof ProfileScalarFieldEnum];
export declare const FreelancerProfileScalarFieldEnum: {
    readonly id: "id";
    readonly userId: "userId";
    readonly title: "title";
    readonly about: "about";
    readonly skills: "skills";
    readonly languages: "languages";
    readonly level: "level";
    readonly responseTime: "responseTime";
    readonly responseRate: "responseRate";
    readonly onTimeDelivery: "onTimeDelivery";
    readonly explanationRate: "explanationRate";
    readonly completedOrders: "completedOrders";
    readonly successfulOrders: "successfulOrders";
    readonly ratingValue: "ratingValue";
    readonly reviewCount: "reviewCount";
    readonly status: "status";
    readonly verified: "verified";
    readonly submittedAt: "submittedAt";
    readonly approvedAt: "approvedAt";
    readonly updatedAt: "updatedAt";
};
export type FreelancerProfileScalarFieldEnum = (typeof FreelancerProfileScalarFieldEnum)[keyof typeof FreelancerProfileScalarFieldEnum];
export declare const BuyerProfileScalarFieldEnum: {
    readonly id: "id";
    readonly userId: "userId";
    readonly orderCount: "orderCount";
    readonly totalSpent: "totalSpent";
    readonly updatedAt: "updatedAt";
};
export type BuyerProfileScalarFieldEnum = (typeof BuyerProfileScalarFieldEnum)[keyof typeof BuyerProfileScalarFieldEnum];
export declare const CategoryScalarFieldEnum: {
    readonly id: "id";
    readonly name: "name";
    readonly slug: "slug";
    readonly description: "description";
    readonly icon: "icon";
    readonly image: "image";
    readonly sortOrder: "sortOrder";
    readonly active: "active";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type CategoryScalarFieldEnum = (typeof CategoryScalarFieldEnum)[keyof typeof CategoryScalarFieldEnum];
export declare const SubcategoryScalarFieldEnum: {
    readonly id: "id";
    readonly categoryId: "categoryId";
    readonly name: "name";
    readonly slug: "slug";
    readonly description: "description";
    readonly active: "active";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type SubcategoryScalarFieldEnum = (typeof SubcategoryScalarFieldEnum)[keyof typeof SubcategoryScalarFieldEnum];
export declare const ServiceScalarFieldEnum: {
    readonly id: "id";
    readonly slug: "slug";
    readonly title: "title";
    readonly shortDescription: "shortDescription";
    readonly description: "description";
    readonly userId: "userId";
    readonly categoryId: "categoryId";
    readonly subcategoryId: "subcategoryId";
    readonly type: "type";
    readonly status: "status";
    readonly tags: "tags";
    readonly technologies: "technologies";
    readonly languages: "languages";
    readonly minPrice: "minPrice";
    readonly maxPrice: "maxPrice";
    readonly deliveryTime: "deliveryTime";
    readonly revisions: "revisions";
    readonly ratingValue: "ratingValue";
    readonly reviewCount: "reviewCount";
    readonly salesCount: "salesCount";
    readonly views: "views";
    readonly favoritesCount: "favoritesCount";
    readonly demoUrl: "demoUrl";
    readonly repositoryUrl: "repositoryUrl";
    readonly documentationUrl: "documentationUrl";
    readonly license: "license";
    readonly supportPeriod: "supportPeriod";
    readonly pages: "pages";
    readonly features: "features";
    readonly requirements: "requirements";
    readonly isFeatured: "isFeatured";
    readonly reviewedAt: "reviewedAt";
    readonly rejectionReason: "rejectionReason";
    readonly availability: "availability";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type ServiceScalarFieldEnum = (typeof ServiceScalarFieldEnum)[keyof typeof ServiceScalarFieldEnum];
export declare const ServicePackageScalarFieldEnum: {
    readonly id: "id";
    readonly serviceId: "serviceId";
    readonly name: "name";
    readonly title: "title";
    readonly description: "description";
    readonly price: "price";
    readonly deliveryTime: "deliveryTime";
    readonly revisions: "revisions";
    readonly features: "features";
    readonly sortOrder: "sortOrder";
    readonly isActive: "isActive";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type ServicePackageScalarFieldEnum = (typeof ServicePackageScalarFieldEnum)[keyof typeof ServicePackageScalarFieldEnum];
export declare const ServiceImageScalarFieldEnum: {
    readonly id: "id";
    readonly serviceId: "serviceId";
    readonly url: "url";
    readonly alt: "alt";
    readonly sortOrder: "sortOrder";
    readonly createdAt: "createdAt";
};
export type ServiceImageScalarFieldEnum = (typeof ServiceImageScalarFieldEnum)[keyof typeof ServiceImageScalarFieldEnum];
export declare const ServiceFAQScalarFieldEnum: {
    readonly id: "id";
    readonly serviceId: "serviceId";
    readonly question: "question";
    readonly answer: "answer";
    readonly sortOrder: "sortOrder";
};
export type ServiceFAQScalarFieldEnum = (typeof ServiceFAQScalarFieldEnum)[keyof typeof ServiceFAQScalarFieldEnum];
export declare const PortfolioScalarFieldEnum: {
    readonly id: "id";
    readonly userId: "userId";
    readonly title: "title";
    readonly description: "description";
    readonly image: "image";
    readonly url: "url";
    readonly technologies: "technologies";
    readonly sortOrder: "sortOrder";
    readonly createdAt: "createdAt";
};
export type PortfolioScalarFieldEnum = (typeof PortfolioScalarFieldEnum)[keyof typeof PortfolioScalarFieldEnum];
export declare const OrderScalarFieldEnum: {
    readonly id: "id";
    readonly orderNumber: "orderNumber";
    readonly buyerId: "buyerId";
    readonly freelancerId: "freelancerId";
    readonly serviceId: "serviceId";
    readonly packageId: "packageId";
    readonly status: "status";
    readonly amount: "amount";
    readonly platformFee: "platformFee";
    readonly freelancerAmount: "freelancerAmount";
    readonly currency: "currency";
    readonly quantity: "quantity";
    readonly couponCode: "couponCode";
    readonly requirementsSubmitted: "requirementsSubmitted";
    readonly paidAt: "paidAt";
    readonly deliveredAt: "deliveredAt";
    readonly completedAt: "completedAt";
    readonly cancelledAt: "cancelledAt";
    readonly revisionDeadline: "revisionDeadline";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type OrderScalarFieldEnum = (typeof OrderScalarFieldEnum)[keyof typeof OrderScalarFieldEnum];
export declare const OrderItemScalarFieldEnum: {
    readonly id: "id";
    readonly orderId: "orderId";
    readonly serviceId: "serviceId";
    readonly packageName: "packageName";
    readonly title: "title";
    readonly price: "price";
    readonly quantity: "quantity";
    readonly deliveryTime: "deliveryTime";
    readonly revisions: "revisions";
    readonly packageId: "packageId";
};
export type OrderItemScalarFieldEnum = (typeof OrderItemScalarFieldEnum)[keyof typeof OrderItemScalarFieldEnum];
export declare const OrderRequirementScalarFieldEnum: {
    readonly id: "id";
    readonly orderId: "orderId";
    readonly responses: "responses";
    readonly submittedAt: "submittedAt";
};
export type OrderRequirementScalarFieldEnum = (typeof OrderRequirementScalarFieldEnum)[keyof typeof OrderRequirementScalarFieldEnum];
export declare const OrderDeliveryScalarFieldEnum: {
    readonly id: "id";
    readonly orderId: "orderId";
    readonly message: "message";
    readonly attachments: "attachments";
    readonly submittedAt: "submittedAt";
};
export type OrderDeliveryScalarFieldEnum = (typeof OrderDeliveryScalarFieldEnum)[keyof typeof OrderDeliveryScalarFieldEnum];
export declare const RevisionScalarFieldEnum: {
    readonly id: "id";
    readonly orderId: "orderId";
    readonly requestedBy: "requestedBy";
    readonly note: "note";
    readonly requestedAt: "requestedAt";
};
export type RevisionScalarFieldEnum = (typeof RevisionScalarFieldEnum)[keyof typeof RevisionScalarFieldEnum];
export declare const ReviewScalarFieldEnum: {
    readonly id: "id";
    readonly orderId: "orderId";
    readonly serviceId: "serviceId";
    readonly reviewerId: "reviewerId";
    readonly revieweeId: "revieweeId";
    readonly rating: "rating";
    readonly title: "title";
    readonly body: "body";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type ReviewScalarFieldEnum = (typeof ReviewScalarFieldEnum)[keyof typeof ReviewScalarFieldEnum];
export declare const FavoriteScalarFieldEnum: {
    readonly id: "id";
    readonly userId: "userId";
    readonly targetType: "targetType";
    readonly targetId: "targetId";
    readonly createdAt: "createdAt";
};
export type FavoriteScalarFieldEnum = (typeof FavoriteScalarFieldEnum)[keyof typeof FavoriteScalarFieldEnum];
export declare const CartScalarFieldEnum: {
    readonly id: "id";
    readonly userId: "userId";
    readonly shareToken: "shareToken";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type CartScalarFieldEnum = (typeof CartScalarFieldEnum)[keyof typeof CartScalarFieldEnum];
export declare const CartItemScalarFieldEnum: {
    readonly id: "id";
    readonly cartId: "cartId";
    readonly serviceId: "serviceId";
    readonly packageId: "packageId";
    readonly quantity: "quantity";
    readonly price: "price";
    readonly customRequirements: "customRequirements";
    readonly savedForLater: "savedForLater";
    readonly createdAt: "createdAt";
};
export type CartItemScalarFieldEnum = (typeof CartItemScalarFieldEnum)[keyof typeof CartItemScalarFieldEnum];
export declare const ConversationScalarFieldEnum: {
    readonly id: "id";
    readonly orderId: "orderId";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
    readonly lastMessageAt: "lastMessageAt";
};
export type ConversationScalarFieldEnum = (typeof ConversationScalarFieldEnum)[keyof typeof ConversationScalarFieldEnum];
export declare const ConversationParticipantScalarFieldEnum: {
    readonly id: "id";
    readonly conversationId: "conversationId";
    readonly userId: "userId";
    readonly lastReadAt: "lastReadAt";
    readonly muted: "muted";
    readonly joinedAt: "joinedAt";
};
export type ConversationParticipantScalarFieldEnum = (typeof ConversationParticipantScalarFieldEnum)[keyof typeof ConversationParticipantScalarFieldEnum];
export declare const MessageScalarFieldEnum: {
    readonly id: "id";
    readonly conversationId: "conversationId";
    readonly senderId: "senderId";
    readonly type: "type";
    readonly body: "body";
    readonly status: "status";
    readonly parentId: "parentId";
    readonly editedAt: "editedAt";
    readonly deletedAt: "deletedAt";
    readonly createdAt: "createdAt";
};
export type MessageScalarFieldEnum = (typeof MessageScalarFieldEnum)[keyof typeof MessageScalarFieldEnum];
export declare const MessageAttachmentScalarFieldEnum: {
    readonly id: "id";
    readonly messageId: "messageId";
    readonly url: "url";
    readonly name: "name";
    readonly type: "type";
    readonly size: "size";
    readonly createdAt: "createdAt";
};
export type MessageAttachmentScalarFieldEnum = (typeof MessageAttachmentScalarFieldEnum)[keyof typeof MessageAttachmentScalarFieldEnum];
export declare const NotificationScalarFieldEnum: {
    readonly id: "id";
    readonly userId: "userId";
    readonly type: "type";
    readonly title: "title";
    readonly body: "body";
    readonly data: "data";
    readonly read: "read";
    readonly createdAt: "createdAt";
};
export type NotificationScalarFieldEnum = (typeof NotificationScalarFieldEnum)[keyof typeof NotificationScalarFieldEnum];
export declare const PaymentScalarFieldEnum: {
    readonly id: "id";
    readonly orderId: "orderId";
    readonly userId: "userId";
    readonly amount: "amount";
    readonly currency: "currency";
    readonly status: "status";
    readonly provider: "provider";
    readonly providerSessionId: "providerSessionId";
    readonly providerIntentId: "providerIntentId";
    readonly paidAt: "paidAt";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type PaymentScalarFieldEnum = (typeof PaymentScalarFieldEnum)[keyof typeof PaymentScalarFieldEnum];
export declare const PaymentTransactionScalarFieldEnum: {
    readonly id: "id";
    readonly paymentId: "paymentId";
    readonly type: "type";
    readonly amount: "amount";
    readonly status: "status";
    readonly providerReference: "providerReference";
    readonly metadata: "metadata";
    readonly createdAt: "createdAt";
};
export type PaymentTransactionScalarFieldEnum = (typeof PaymentTransactionScalarFieldEnum)[keyof typeof PaymentTransactionScalarFieldEnum];
export declare const RefundScalarFieldEnum: {
    readonly id: "id";
    readonly paymentId: "paymentId";
    readonly orderId: "orderId";
    readonly amount: "amount";
    readonly reason: "reason";
    readonly status: "status";
    readonly providerRefundId: "providerRefundId";
    readonly createdBy: "createdBy";
    readonly processedAt: "processedAt";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type RefundScalarFieldEnum = (typeof RefundScalarFieldEnum)[keyof typeof RefundScalarFieldEnum];
export declare const PayoutScalarFieldEnum: {
    readonly id: "id";
    readonly freelancerId: "freelancerId";
    readonly amount: "amount";
    readonly platformFee: "platformFee";
    readonly fee: "fee";
    readonly status: "status";
    readonly providerPayoutId: "providerPayoutId";
    readonly periodStart: "periodStart";
    readonly periodEnd: "periodEnd";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type PayoutScalarFieldEnum = (typeof PayoutScalarFieldEnum)[keyof typeof PayoutScalarFieldEnum];
export declare const DisputeScalarFieldEnum: {
    readonly id: "id";
    readonly orderId: "orderId";
    readonly openerId: "openerId";
    readonly reason: "reason";
    readonly details: "details";
    readonly status: "status";
    readonly evidence: "evidence";
    readonly resolution: "resolution";
    readonly openedAt: "openedAt";
    readonly resolvedAt: "resolvedAt";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type DisputeScalarFieldEnum = (typeof DisputeScalarFieldEnum)[keyof typeof DisputeScalarFieldEnum];
export declare const ReportScalarFieldEnum: {
    readonly id: "id";
    readonly reporterId: "reporterId";
    readonly targetType: "targetType";
    readonly targetId: "targetId";
    readonly reason: "reason";
    readonly details: "details";
    readonly status: "status";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type ReportScalarFieldEnum = (typeof ReportScalarFieldEnum)[keyof typeof ReportScalarFieldEnum];
export declare const CouponScalarFieldEnum: {
    readonly id: "id";
    readonly code: "code";
    readonly type: "type";
    readonly value: "value";
    readonly maxUses: "maxUses";
    readonly usedCount: "usedCount";
    readonly maxPerUser: "maxPerUser";
    readonly minOrderValue: "minOrderValue";
    readonly startsAt: "startsAt";
    readonly expiresAt: "expiresAt";
    readonly active: "active";
    readonly createdAt: "createdAt";
};
export type CouponScalarFieldEnum = (typeof CouponScalarFieldEnum)[keyof typeof CouponScalarFieldEnum];
export declare const CouponUsageScalarFieldEnum: {
    readonly id: "id";
    readonly couponId: "couponId";
    readonly userId: "userId";
    readonly orderId: "orderId";
    readonly usedAt: "usedAt";
};
export type CouponUsageScalarFieldEnum = (typeof CouponUsageScalarFieldEnum)[keyof typeof CouponUsageScalarFieldEnum];
export declare const PlatformSettingScalarFieldEnum: {
    readonly id: "id";
    readonly key: "key";
    readonly value: "value";
    readonly type: "type";
    readonly description: "description";
    readonly updatedAt: "updatedAt";
};
export type PlatformSettingScalarFieldEnum = (typeof PlatformSettingScalarFieldEnum)[keyof typeof PlatformSettingScalarFieldEnum];
export declare const AuditLogScalarFieldEnum: {
    readonly id: "id";
    readonly actorId: "actorId";
    readonly action: "action";
    readonly entityType: "entityType";
    readonly entityId: "entityId";
    readonly metadata: "metadata";
    readonly ipAddress: "ipAddress";
    readonly userAgent: "userAgent";
    readonly createdAt: "createdAt";
};
export type AuditLogScalarFieldEnum = (typeof AuditLogScalarFieldEnum)[keyof typeof AuditLogScalarFieldEnum];
export declare const AchievementScalarFieldEnum: {
    readonly id: "id";
    readonly code: "code";
    readonly title: "title";
    readonly description: "description";
    readonly icon: "icon";
    readonly xpReward: "xpReward";
    readonly category: "category";
    readonly createdAt: "createdAt";
};
export type AchievementScalarFieldEnum = (typeof AchievementScalarFieldEnum)[keyof typeof AchievementScalarFieldEnum];
export declare const UserAchievementScalarFieldEnum: {
    readonly id: "id";
    readonly userId: "userId";
    readonly achievementId: "achievementId";
    readonly earnedAt: "earnedAt";
};
export type UserAchievementScalarFieldEnum = (typeof UserAchievementScalarFieldEnum)[keyof typeof UserAchievementScalarFieldEnum];
export declare const UserXPScalarFieldEnum: {
    readonly id: "id";
    readonly userId: "userId";
    readonly totalXp: "totalXp";
    readonly level: "level";
    readonly updatedAt: "updatedAt";
};
export type UserXPScalarFieldEnum = (typeof UserXPScalarFieldEnum)[keyof typeof UserXPScalarFieldEnum];
export declare const SearchHistoryScalarFieldEnum: {
    readonly id: "id";
    readonly userId: "userId";
    readonly query: "query";
    readonly filters: "filters";
    readonly createdAt: "createdAt";
};
export type SearchHistoryScalarFieldEnum = (typeof SearchHistoryScalarFieldEnum)[keyof typeof SearchHistoryScalarFieldEnum];
export declare const RoleScalarFieldEnum: {
    readonly id: "id";
    readonly key: "key";
    readonly name: "name";
    readonly description: "description";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type RoleScalarFieldEnum = (typeof RoleScalarFieldEnum)[keyof typeof RoleScalarFieldEnum];
export declare const PermissionScalarFieldEnum: {
    readonly id: "id";
    readonly key: "key";
    readonly name: "name";
    readonly module: "module";
    readonly createdAt: "createdAt";
};
export type PermissionScalarFieldEnum = (typeof PermissionScalarFieldEnum)[keyof typeof PermissionScalarFieldEnum];
export declare const RolePermissionScalarFieldEnum: {
    readonly id: "id";
    readonly roleId: "roleId";
    readonly permissionId: "permissionId";
};
export type RolePermissionScalarFieldEnum = (typeof RolePermissionScalarFieldEnum)[keyof typeof RolePermissionScalarFieldEnum];
export declare const UserRoleScalarFieldEnum: {
    readonly id: "id";
    readonly userId: "userId";
    readonly roleId: "roleId";
};
export type UserRoleScalarFieldEnum = (typeof UserRoleScalarFieldEnum)[keyof typeof UserRoleScalarFieldEnum];
export declare const ProductCategoryScalarFieldEnum: {
    readonly id: "id";
    readonly name: "name";
    readonly slug: "slug";
    readonly description: "description";
    readonly image: "image";
    readonly sortOrder: "sortOrder";
    readonly active: "active";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type ProductCategoryScalarFieldEnum = (typeof ProductCategoryScalarFieldEnum)[keyof typeof ProductCategoryScalarFieldEnum];
export declare const ProductScalarFieldEnum: {
    readonly id: "id";
    readonly title: "title";
    readonly slug: "slug";
    readonly description: "description";
    readonly userId: "userId";
    readonly categoryId: "categoryId";
    readonly type: "type";
    readonly status: "status";
    readonly price: "price";
    readonly compareAtPrice: "compareAtPrice";
    readonly currency: "currency";
    readonly sku: "sku";
    readonly stock: "stock";
    readonly digitalFileUrl: "digitalFileUrl";
    readonly images: "images";
    readonly tags: "tags";
    readonly isFeatured: "isFeatured";
    readonly ratingValue: "ratingValue";
    readonly reviewCount: "reviewCount";
    readonly salesCount: "salesCount";
    readonly publishedAt: "publishedAt";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type ProductScalarFieldEnum = (typeof ProductScalarFieldEnum)[keyof typeof ProductScalarFieldEnum];
export declare const ProductImageScalarFieldEnum: {
    readonly id: "id";
    readonly productId: "productId";
    readonly url: "url";
    readonly alt: "alt";
    readonly sortOrder: "sortOrder";
};
export type ProductImageScalarFieldEnum = (typeof ProductImageScalarFieldEnum)[keyof typeof ProductImageScalarFieldEnum];
export declare const ProductReviewScalarFieldEnum: {
    readonly id: "id";
    readonly orderId: "orderId";
    readonly productId: "productId";
    readonly reviewerId: "reviewerId";
    readonly revieweeId: "revieweeId";
    readonly rating: "rating";
    readonly title: "title";
    readonly body: "body";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type ProductReviewScalarFieldEnum = (typeof ProductReviewScalarFieldEnum)[keyof typeof ProductReviewScalarFieldEnum];
export declare const CompanyScalarFieldEnum: {
    readonly id: "id";
    readonly name: "name";
    readonly slug: "slug";
    readonly logo: "logo";
    readonly website: "website";
    readonly description: "description";
    readonly industry: "industry";
    readonly location: "location";
    readonly size: "size";
    readonly verified: "verified";
    readonly ownerId: "ownerId";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type CompanyScalarFieldEnum = (typeof CompanyScalarFieldEnum)[keyof typeof CompanyScalarFieldEnum];
export declare const JobScalarFieldEnum: {
    readonly id: "id";
    readonly slug: "slug";
    readonly companyId: "companyId";
    readonly title: "title";
    readonly description: "description";
    readonly requirements: "requirements";
    readonly salaryMin: "salaryMin";
    readonly salaryMax: "salaryMax";
    readonly currency: "currency";
    readonly location: "location";
    readonly remote: "remote";
    readonly type: "type";
    readonly level: "level";
    readonly category: "category";
    readonly tags: "tags";
    readonly status: "status";
    readonly expiresAt: "expiresAt";
    readonly views: "views";
    readonly postedById: "postedById";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type JobScalarFieldEnum = (typeof JobScalarFieldEnum)[keyof typeof JobScalarFieldEnum];
export declare const JobApplicationScalarFieldEnum: {
    readonly id: "id";
    readonly jobId: "jobId";
    readonly applicantId: "applicantId";
    readonly resumeId: "resumeId";
    readonly status: "status";
    readonly coverLetter: "coverLetter";
    readonly answers: "answers";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type JobApplicationScalarFieldEnum = (typeof JobApplicationScalarFieldEnum)[keyof typeof JobApplicationScalarFieldEnum];
export declare const ResumeScalarFieldEnum: {
    readonly id: "id";
    readonly userId: "userId";
    readonly title: "title";
    readonly fileUrl: "fileUrl";
    readonly content: "content";
    readonly skills: "skills";
    readonly experience: "experience";
    readonly education: "education";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type ResumeScalarFieldEnum = (typeof ResumeScalarFieldEnum)[keyof typeof ResumeScalarFieldEnum];
export declare const ResumeScoreScalarFieldEnum: {
    readonly id: "id";
    readonly resumeId: "resumeId";
    readonly jobId: "jobId";
    readonly score: "score";
    readonly feedback: "feedback";
    readonly engine: "engine";
    readonly createdAt: "createdAt";
};
export type ResumeScoreScalarFieldEnum = (typeof ResumeScoreScalarFieldEnum)[keyof typeof ResumeScoreScalarFieldEnum];
export declare const BookCategoryScalarFieldEnum: {
    readonly id: "id";
    readonly name: "name";
    readonly slug: "slug";
    readonly description: "description";
    readonly active: "active";
    readonly sortOrder: "sortOrder";
    readonly createdAt: "createdAt";
};
export type BookCategoryScalarFieldEnum = (typeof BookCategoryScalarFieldEnum)[keyof typeof BookCategoryScalarFieldEnum];
export declare const BookScalarFieldEnum: {
    readonly id: "id";
    readonly slug: "slug";
    readonly title: "title";
    readonly author: "author";
    readonly authorUserId: "authorUserId";
    readonly bio: "bio";
    readonly description: "description";
    readonly coverImage: "coverImage";
    readonly categoryId: "categoryId";
    readonly price: "price";
    readonly status: "status";
    readonly pages: "pages";
    readonly edition: "edition";
    readonly isbn: "isbn";
    readonly tags: "tags";
    readonly ratingValue: "ratingValue";
    readonly reviewCount: "reviewCount";
    readonly salesCount: "salesCount";
    readonly publishedAt: "publishedAt";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type BookScalarFieldEnum = (typeof BookScalarFieldEnum)[keyof typeof BookScalarFieldEnum];
export declare const BookChapterScalarFieldEnum: {
    readonly id: "id";
    readonly bookId: "bookId";
    readonly title: "title";
    readonly slug: "slug";
    readonly content: "content";
    readonly sortOrder: "sortOrder";
    readonly isFree: "isFree";
    readonly createdAt: "createdAt";
};
export type BookChapterScalarFieldEnum = (typeof BookChapterScalarFieldEnum)[keyof typeof BookChapterScalarFieldEnum];
export declare const BookPurchaseScalarFieldEnum: {
    readonly id: "id";
    readonly bookId: "bookId";
    readonly userId: "userId";
    readonly orderId: "orderId";
    readonly price: "price";
    readonly accessKey: "accessKey";
    readonly createdAt: "createdAt";
};
export type BookPurchaseScalarFieldEnum = (typeof BookPurchaseScalarFieldEnum)[keyof typeof BookPurchaseScalarFieldEnum];
export declare const BookReviewScalarFieldEnum: {
    readonly id: "id";
    readonly bookId: "bookId";
    readonly userId: "userId";
    readonly rating: "rating";
    readonly title: "title";
    readonly body: "body";
    readonly createdAt: "createdAt";
};
export type BookReviewScalarFieldEnum = (typeof BookReviewScalarFieldEnum)[keyof typeof BookReviewScalarFieldEnum];
export declare const ResourceCategoryScalarFieldEnum: {
    readonly id: "id";
    readonly name: "name";
    readonly slug: "slug";
    readonly description: "description";
    readonly icon: "icon";
    readonly active: "active";
    readonly sortOrder: "sortOrder";
    readonly createdAt: "createdAt";
};
export type ResourceCategoryScalarFieldEnum = (typeof ResourceCategoryScalarFieldEnum)[keyof typeof ResourceCategoryScalarFieldEnum];
export declare const ResourceScalarFieldEnum: {
    readonly id: "id";
    readonly slug: "slug";
    readonly title: "title";
    readonly description: "description";
    readonly type: "type";
    readonly categoryId: "categoryId";
    readonly tags: "tags";
    readonly authorId: "authorId";
    readonly status: "status";
    readonly downloadCount: "downloadCount";
    readonly featured: "featured";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type ResourceScalarFieldEnum = (typeof ResourceScalarFieldEnum)[keyof typeof ResourceScalarFieldEnum];
export declare const ResourceFileScalarFieldEnum: {
    readonly id: "id";
    readonly resourceId: "resourceId";
    readonly name: "name";
    readonly url: "url";
    readonly size: "size";
    readonly mimeType: "mimeType";
    readonly sortOrder: "sortOrder";
    readonly downloadable: "downloadable";
};
export type ResourceFileScalarFieldEnum = (typeof ResourceFileScalarFieldEnum)[keyof typeof ResourceFileScalarFieldEnum];
export declare const PortfolioProjectScalarFieldEnum: {
    readonly id: "id";
    readonly slug: "slug";
    readonly userId: "userId";
    readonly title: "title";
    readonly description: "description";
    readonly coverImage: "coverImage";
    readonly gallery: "gallery";
    readonly tags: "tags";
    readonly technologies: "technologies";
    readonly projectUrl: "projectUrl";
    readonly repositoryUrl: "repositoryUrl";
    readonly featured: "featured";
    readonly sortOrder: "sortOrder";
    readonly liveAt: "liveAt";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type PortfolioProjectScalarFieldEnum = (typeof PortfolioProjectScalarFieldEnum)[keyof typeof PortfolioProjectScalarFieldEnum];
export declare const EmployeeScalarFieldEnum: {
    readonly id: "id";
    readonly companyId: "companyId";
    readonly userId: "userId";
    readonly employeeId: "employeeId";
    readonly fullName: "fullName";
    readonly email: "email";
    readonly phone: "phone";
    readonly department: "department";
    readonly position: "position";
    readonly joiningDate: "joiningDate";
    readonly status: "status";
    readonly idImage: "idImage";
    readonly createdById: "createdById";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type EmployeeScalarFieldEnum = (typeof EmployeeScalarFieldEnum)[keyof typeof EmployeeScalarFieldEnum];
export declare const AIConversationScalarFieldEnum: {
    readonly id: "id";
    readonly userId: "userId";
    readonly title: "title";
    readonly module: "module";
    readonly status: "status";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type AIConversationScalarFieldEnum = (typeof AIConversationScalarFieldEnum)[keyof typeof AIConversationScalarFieldEnum];
export declare const AIMessageScalarFieldEnum: {
    readonly id: "id";
    readonly conversationId: "conversationId";
    readonly role: "role";
    readonly content: "content";
    readonly toolName: "toolName";
    readonly toolInput: "toolInput";
    readonly toolOutput: "toolOutput";
    readonly metadata: "metadata";
    readonly createdAt: "createdAt";
};
export type AIMessageScalarFieldEnum = (typeof AIMessageScalarFieldEnum)[keyof typeof AIMessageScalarFieldEnum];
export declare const SortOrder: {
    readonly asc: "asc";
    readonly desc: "desc";
};
export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder];
export declare const NullableJsonNullValueInput: {
    readonly DbNull: runtime.DbNullClass;
    readonly JsonNull: runtime.JsonNullClass;
};
export type NullableJsonNullValueInput = (typeof NullableJsonNullValueInput)[keyof typeof NullableJsonNullValueInput];
export declare const QueryMode: {
    readonly default: "default";
    readonly insensitive: "insensitive";
};
export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode];
export declare const NullsOrder: {
    readonly first: "first";
    readonly last: "last";
};
export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder];
export declare const JsonNullValueFilter: {
    readonly DbNull: runtime.DbNullClass;
    readonly JsonNull: runtime.JsonNullClass;
    readonly AnyNull: runtime.AnyNullClass;
};
export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter];
/**
 * Field references
 */
/**
 * Reference to a field of type 'String'
 */
export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>;
/**
 * Reference to a field of type 'String[]'
 */
export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>;
/**
 * Reference to a field of type 'Boolean'
 */
export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>;
/**
 * Reference to a field of type 'Int'
 */
export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>;
/**
 * Reference to a field of type 'Int[]'
 */
export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>;
/**
 * Reference to a field of type 'DateTime'
 */
export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>;
/**
 * Reference to a field of type 'DateTime[]'
 */
export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>;
/**
 * Reference to a field of type 'Float'
 */
export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>;
/**
 * Reference to a field of type 'Float[]'
 */
export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>;
/**
 * Reference to a field of type 'Json'
 */
export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>;
/**
 * Reference to a field of type 'QueryMode'
 */
export type EnumQueryModeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QueryMode'>;
/**
 * Batch Payload for updateMany & deleteMany & createMany
 */
export type BatchPayload = {
    count: number;
};
export declare const defineExtension: runtime.Types.Extensions.ExtendsHook<"define", TypeMapCb, runtime.Types.Extensions.DefaultArgs>;
export type DefaultPrismaClient = PrismaClient;
export type ErrorFormat = 'pretty' | 'colorless' | 'minimal';
/**
 * Options common to all variants of `PrismaClientOptions`, regardless of whether you connect to your database through a driver adapter or through Prisma Accelerate.
 */
export interface PrismaClientBaseOptions {
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat;
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     *
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     *
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     *
     * ```
     * Read more in our [docs](https://pris.ly/d/logging).
     */
    log?: (LogLevel | LogDefinition)[];
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
        maxWait?: number;
        timeout?: number;
        isolationLevel?: TransactionIsolationLevel;
    };
    /**
     * Global configuration for omitting model fields by default.
     *
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: GlobalOmitConfig;
    /**
     * SQL commenter plugins that add metadata to SQL queries as comments.
     * Comments follow the sqlcommenter format: https://google.github.io/sqlcommenter/
     *
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   adapter,
     *   comments: [
     *     traceContext(),
     *     queryInsights(),
     *   ],
     * })
     * ```
     */
    comments?: runtime.SqlCommenterPlugin[];
    /**
     * Optional maximum size for the query plan cache. If not provided, a default size will be used.
     * A value of `0` can be used to disable the cache entirely. A higher cache size can improve
     * performance for applications that execute a large number of unique queries, while a smaller
     * cache size can reduce memory usage.
     *
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   adapter,
     *   queryPlanCacheMaxSize: 100,
     * })
     * ```
     */
    queryPlanCacheMaxSize?: number;
}
/**
 * `PrismaClient` options for connecting to your database through Prisma Accelerate instead of a driver adapter.
 *
 * Learn more: https://pris.ly/d/accelerate
 */
export interface PrismaClientOptionsWithAccelerateUrl extends PrismaClientBaseOptions {
    /**
     * The Prisma Accelerate connection URL. Use this option to connect to your database through Prisma Accelerate instead of using a driver adapter to connect directly.
     *
     * Learn more: https://pris.ly/d/accelerate
     */
    accelerateUrl: string;
    adapter?: never;
}
/**
 * `PrismaClient` options for connecting to your database through a driver adapter. This is the common case in Prisma 7.
 *
 * Learn more: https://pris.ly/d/driver-adapters
 */
export interface PrismaClientOptionsWithAdapter extends PrismaClientBaseOptions {
    /**
     * A driver adapter that PrismaClient uses to connect to your database, such as the ones provided by `@prisma/adapter-pg`, `@prisma/adapter-libsql`, `@prisma/adapter-planetscale`, etc.
     *
     * A driver adapter is **required** unless you connect to your database through Prisma Accelerate (in which case use `accelerateUrl` instead).
     *
     * Learn more: https://pris.ly/d/driver-adapters
     *
     * @example
     * ```ts
     * import { PrismaPg } from '@prisma/adapter-pg'
     * import { PrismaClient } from './generated/prisma/client'
     *
     * const adapter = new PrismaPg({ connectionString: process.env.DATABASE_URL })
     * const prisma = new PrismaClient({ adapter })
     * ```
     */
    adapter: runtime.SqlDriverAdapterFactory;
    accelerateUrl?: never;
}
/**
 * Options passed to the `PrismaClient` constructor.
 *
 * A driver adapter (or, alternatively, a Prisma Accelerate URL) is **required**. See {@link PrismaClientOptionsWithAdapter} and {@link PrismaClientOptionsWithAccelerateUrl} for the two variants. All other properties live in {@link PrismaClientBaseOptions} and are optional.
 *
 * Learn more about driver adapters: https://pris.ly/d/driver-adapters
 */
export type PrismaClientOptions = PrismaClientOptionsWithAccelerateUrl | PrismaClientOptionsWithAdapter;
export type GlobalOmitConfig = {
    user?: Prisma.UserOmit;
    account?: Prisma.AccountOmit;
    session?: Prisma.SessionOmit;
    verification?: Prisma.VerificationOmit;
    profile?: Prisma.ProfileOmit;
    freelancerProfile?: Prisma.FreelancerProfileOmit;
    buyerProfile?: Prisma.BuyerProfileOmit;
    category?: Prisma.CategoryOmit;
    subcategory?: Prisma.SubcategoryOmit;
    service?: Prisma.ServiceOmit;
    servicePackage?: Prisma.ServicePackageOmit;
    serviceImage?: Prisma.ServiceImageOmit;
    serviceFAQ?: Prisma.ServiceFAQOmit;
    portfolio?: Prisma.PortfolioOmit;
    order?: Prisma.OrderOmit;
    orderItem?: Prisma.OrderItemOmit;
    orderRequirement?: Prisma.OrderRequirementOmit;
    orderDelivery?: Prisma.OrderDeliveryOmit;
    revision?: Prisma.RevisionOmit;
    review?: Prisma.ReviewOmit;
    favorite?: Prisma.FavoriteOmit;
    cart?: Prisma.CartOmit;
    cartItem?: Prisma.CartItemOmit;
    conversation?: Prisma.ConversationOmit;
    conversationParticipant?: Prisma.ConversationParticipantOmit;
    message?: Prisma.MessageOmit;
    messageAttachment?: Prisma.MessageAttachmentOmit;
    notification?: Prisma.NotificationOmit;
    payment?: Prisma.PaymentOmit;
    paymentTransaction?: Prisma.PaymentTransactionOmit;
    refund?: Prisma.RefundOmit;
    payout?: Prisma.PayoutOmit;
    dispute?: Prisma.DisputeOmit;
    report?: Prisma.ReportOmit;
    coupon?: Prisma.CouponOmit;
    couponUsage?: Prisma.CouponUsageOmit;
    platformSetting?: Prisma.PlatformSettingOmit;
    auditLog?: Prisma.AuditLogOmit;
    achievement?: Prisma.AchievementOmit;
    userAchievement?: Prisma.UserAchievementOmit;
    userXP?: Prisma.UserXPOmit;
    searchHistory?: Prisma.SearchHistoryOmit;
    role?: Prisma.RoleOmit;
    permission?: Prisma.PermissionOmit;
    rolePermission?: Prisma.RolePermissionOmit;
    userRole?: Prisma.UserRoleOmit;
    productCategory?: Prisma.ProductCategoryOmit;
    product?: Prisma.ProductOmit;
    productImage?: Prisma.ProductImageOmit;
    productReview?: Prisma.ProductReviewOmit;
    company?: Prisma.CompanyOmit;
    job?: Prisma.JobOmit;
    jobApplication?: Prisma.JobApplicationOmit;
    resume?: Prisma.ResumeOmit;
    resumeScore?: Prisma.ResumeScoreOmit;
    bookCategory?: Prisma.BookCategoryOmit;
    book?: Prisma.BookOmit;
    bookChapter?: Prisma.BookChapterOmit;
    bookPurchase?: Prisma.BookPurchaseOmit;
    bookReview?: Prisma.BookReviewOmit;
    resourceCategory?: Prisma.ResourceCategoryOmit;
    resource?: Prisma.ResourceOmit;
    resourceFile?: Prisma.ResourceFileOmit;
    portfolioProject?: Prisma.PortfolioProjectOmit;
    employee?: Prisma.EmployeeOmit;
    aIConversation?: Prisma.AIConversationOmit;
    aIMessage?: Prisma.AIMessageOmit;
};
export type LogLevel = 'info' | 'query' | 'warn' | 'error';
export type LogDefinition = {
    level: LogLevel;
    emit: 'stdout' | 'event';
};
export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;
export type GetLogType<T> = CheckIsLogLevel<T extends LogDefinition ? T['level'] : T>;
export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition> ? GetLogType<T[number]> : never;
export type QueryEvent = {
    timestamp: Date;
    query: string;
    params: string;
    duration: number;
    target: string;
};
export type LogEvent = {
    timestamp: Date;
    message: string;
    target: string;
};
export type PrismaAction = 'findUnique' | 'findUniqueOrThrow' | 'findMany' | 'findFirst' | 'findFirstOrThrow' | 'create' | 'createMany' | 'createManyAndReturn' | 'update' | 'updateMany' | 'updateManyAndReturn' | 'upsert' | 'delete' | 'deleteMany' | 'executeRaw' | 'queryRaw' | 'aggregate' | 'count' | 'runCommandRaw' | 'findRaw' | 'groupBy';
/**
 * `PrismaClient` proxy available in interactive transactions.
 */
export type TransactionClient = Omit<DefaultPrismaClient, runtime.ITXClientDenyList>;
