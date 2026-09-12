import * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "./prismaNamespace";
export type LogOptions<ClientOptions extends Prisma.PrismaClientOptions> = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never;
export interface PrismaClientConstructor {
    /**
   * ## Prisma Client
   *
   * Type-safe database client for TypeScript
   * @example
   * ```
   * const prisma = new PrismaClient({
   *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
   * })
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/client).
   */
    new <Options extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions, LogOpts extends LogOptions<Options> = LogOptions<Options>, OmitOpts extends Prisma.PrismaClientOptions['omit'] = Options extends {
        omit: infer U;
    } ? U : Prisma.PrismaClientOptions['omit'], ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs>(options: Prisma.PrismaClientConstructorArgs<Options>): PrismaClient<LogOpts, OmitOpts, ExtArgs>;
}
/**
 * ## Prisma Client
 *
 * Type-safe database client for TypeScript
 * @example
 * ```
 * const prisma = new PrismaClient({
 *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
 * })
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 * Read more in our [docs](https://pris.ly/d/client).
 */
export interface PrismaClient<in LogOpts extends Prisma.LogLevel = never, in out OmitOpts extends Prisma.PrismaClientOptions['omit'] = Prisma.PrismaClientOptions['omit'], in out ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['other'];
    };
    $on<V extends LogOpts>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;
    /**
     * Connect with the database
     */
    $connect(): runtime.Types.Utils.JsPromise<void>;
    /**
     * Disconnect from the database
     */
    $disconnect(): runtime.Types.Utils.JsPromise<void>;
    /**
       * Executes a prepared raw query and returns the number of affected rows.
       * @example
       * ```
       * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
       * ```
       *
       * Read more in our [docs](https://pris.ly/d/raw-queries).
       */
    $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;
    /**
     * Executes a raw query and returns the number of affected rows.
     * Susceptible to SQL injections, see documentation.
     * @example
     * ```
     * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
     * ```
     *
     * Read more in our [docs](https://pris.ly/d/raw-queries).
     */
    $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;
    /**
     * Performs a prepared raw query and returns the `SELECT` data.
     * @example
     * ```
     * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
     * ```
     *
     * Read more in our [docs](https://pris.ly/d/raw-queries).
     */
    $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;
    /**
     * Performs a raw query and returns the `SELECT` data.
     * Susceptible to SQL injections, see documentation.
     * @example
     * ```
     * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
     * ```
     *
     * Read more in our [docs](https://pris.ly/d/raw-queries).
     */
    $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;
    /**
     * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
     * @example
     * ```
     * const [george, bob, alice] = await prisma.$transaction([
     *   prisma.user.create({ data: { name: 'George' } }),
     *   prisma.user.create({ data: { name: 'Bob' } }),
     *   prisma.user.create({ data: { name: 'Alice' } }),
     * ])
     * ```
     *
     * Read more in our [docs](https://www.prisma.io/docs/orm/prisma-client/queries/transactions).
     */
    $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: {
        maxWait?: number;
        timeout?: number;
        isolationLevel?: Prisma.TransactionIsolationLevel;
    }): runtime.Types.Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>;
    $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => runtime.Types.Utils.JsPromise<R>, options?: {
        maxWait?: number;
        timeout?: number;
        isolationLevel?: Prisma.TransactionIsolationLevel;
    }): runtime.Types.Utils.JsPromise<R>;
    $extends: runtime.Types.Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<OmitOpts>, ExtArgs, runtime.Types.Utils.Call<Prisma.TypeMapCb<OmitOpts>, {
        extArgs: ExtArgs;
    }>>;
    /**
 * `prisma.user`: Exposes CRUD operations for the **User** model.
  * Example usage:
  * ```ts
  * // Fetch zero or more Users
  * const users = await prisma.user.findMany()
  * ```
  */
    get user(): Prisma.UserDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.account`: Exposes CRUD operations for the **Account** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more Accounts
      * const accounts = await prisma.account.findMany()
      * ```
      */
    get account(): Prisma.AccountDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.session`: Exposes CRUD operations for the **Session** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more Sessions
      * const sessions = await prisma.session.findMany()
      * ```
      */
    get session(): Prisma.SessionDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.verification`: Exposes CRUD operations for the **Verification** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more Verifications
      * const verifications = await prisma.verification.findMany()
      * ```
      */
    get verification(): Prisma.VerificationDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.profile`: Exposes CRUD operations for the **Profile** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more Profiles
      * const profiles = await prisma.profile.findMany()
      * ```
      */
    get profile(): Prisma.ProfileDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.freelancerProfile`: Exposes CRUD operations for the **FreelancerProfile** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more FreelancerProfiles
      * const freelancerProfiles = await prisma.freelancerProfile.findMany()
      * ```
      */
    get freelancerProfile(): Prisma.FreelancerProfileDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.buyerProfile`: Exposes CRUD operations for the **BuyerProfile** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more BuyerProfiles
      * const buyerProfiles = await prisma.buyerProfile.findMany()
      * ```
      */
    get buyerProfile(): Prisma.BuyerProfileDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.category`: Exposes CRUD operations for the **Category** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more Categories
      * const categories = await prisma.category.findMany()
      * ```
      */
    get category(): Prisma.CategoryDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.subcategory`: Exposes CRUD operations for the **Subcategory** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more Subcategories
      * const subcategories = await prisma.subcategory.findMany()
      * ```
      */
    get subcategory(): Prisma.SubcategoryDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.service`: Exposes CRUD operations for the **Service** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more Services
      * const services = await prisma.service.findMany()
      * ```
      */
    get service(): Prisma.ServiceDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.servicePackage`: Exposes CRUD operations for the **ServicePackage** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more ServicePackages
      * const servicePackages = await prisma.servicePackage.findMany()
      * ```
      */
    get servicePackage(): Prisma.ServicePackageDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.serviceImage`: Exposes CRUD operations for the **ServiceImage** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more ServiceImages
      * const serviceImages = await prisma.serviceImage.findMany()
      * ```
      */
    get serviceImage(): Prisma.ServiceImageDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.serviceFAQ`: Exposes CRUD operations for the **ServiceFAQ** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more ServiceFAQS
      * const serviceFAQS = await prisma.serviceFAQ.findMany()
      * ```
      */
    get serviceFAQ(): Prisma.ServiceFAQDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.portfolio`: Exposes CRUD operations for the **Portfolio** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more Portfolios
      * const portfolios = await prisma.portfolio.findMany()
      * ```
      */
    get portfolio(): Prisma.PortfolioDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.order`: Exposes CRUD operations for the **Order** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more Orders
      * const orders = await prisma.order.findMany()
      * ```
      */
    get order(): Prisma.OrderDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.orderItem`: Exposes CRUD operations for the **OrderItem** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more OrderItems
      * const orderItems = await prisma.orderItem.findMany()
      * ```
      */
    get orderItem(): Prisma.OrderItemDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.orderRequirement`: Exposes CRUD operations for the **OrderRequirement** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more OrderRequirements
      * const orderRequirements = await prisma.orderRequirement.findMany()
      * ```
      */
    get orderRequirement(): Prisma.OrderRequirementDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.orderDelivery`: Exposes CRUD operations for the **OrderDelivery** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more OrderDeliveries
      * const orderDeliveries = await prisma.orderDelivery.findMany()
      * ```
      */
    get orderDelivery(): Prisma.OrderDeliveryDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.revision`: Exposes CRUD operations for the **Revision** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more Revisions
      * const revisions = await prisma.revision.findMany()
      * ```
      */
    get revision(): Prisma.RevisionDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.review`: Exposes CRUD operations for the **Review** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more Reviews
      * const reviews = await prisma.review.findMany()
      * ```
      */
    get review(): Prisma.ReviewDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.favorite`: Exposes CRUD operations for the **Favorite** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more Favorites
      * const favorites = await prisma.favorite.findMany()
      * ```
      */
    get favorite(): Prisma.FavoriteDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.cart`: Exposes CRUD operations for the **Cart** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more Carts
      * const carts = await prisma.cart.findMany()
      * ```
      */
    get cart(): Prisma.CartDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.cartItem`: Exposes CRUD operations for the **CartItem** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more CartItems
      * const cartItems = await prisma.cartItem.findMany()
      * ```
      */
    get cartItem(): Prisma.CartItemDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.conversation`: Exposes CRUD operations for the **Conversation** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more Conversations
      * const conversations = await prisma.conversation.findMany()
      * ```
      */
    get conversation(): Prisma.ConversationDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.conversationParticipant`: Exposes CRUD operations for the **ConversationParticipant** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more ConversationParticipants
      * const conversationParticipants = await prisma.conversationParticipant.findMany()
      * ```
      */
    get conversationParticipant(): Prisma.ConversationParticipantDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.message`: Exposes CRUD operations for the **Message** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more Messages
      * const messages = await prisma.message.findMany()
      * ```
      */
    get message(): Prisma.MessageDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.messageAttachment`: Exposes CRUD operations for the **MessageAttachment** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more MessageAttachments
      * const messageAttachments = await prisma.messageAttachment.findMany()
      * ```
      */
    get messageAttachment(): Prisma.MessageAttachmentDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.notification`: Exposes CRUD operations for the **Notification** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more Notifications
      * const notifications = await prisma.notification.findMany()
      * ```
      */
    get notification(): Prisma.NotificationDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.payment`: Exposes CRUD operations for the **Payment** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more Payments
      * const payments = await prisma.payment.findMany()
      * ```
      */
    get payment(): Prisma.PaymentDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.paymentTransaction`: Exposes CRUD operations for the **PaymentTransaction** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more PaymentTransactions
      * const paymentTransactions = await prisma.paymentTransaction.findMany()
      * ```
      */
    get paymentTransaction(): Prisma.PaymentTransactionDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.refund`: Exposes CRUD operations for the **Refund** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more Refunds
      * const refunds = await prisma.refund.findMany()
      * ```
      */
    get refund(): Prisma.RefundDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.payout`: Exposes CRUD operations for the **Payout** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more Payouts
      * const payouts = await prisma.payout.findMany()
      * ```
      */
    get payout(): Prisma.PayoutDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.dispute`: Exposes CRUD operations for the **Dispute** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more Disputes
      * const disputes = await prisma.dispute.findMany()
      * ```
      */
    get dispute(): Prisma.DisputeDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.report`: Exposes CRUD operations for the **Report** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more Reports
      * const reports = await prisma.report.findMany()
      * ```
      */
    get report(): Prisma.ReportDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.coupon`: Exposes CRUD operations for the **Coupon** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more Coupons
      * const coupons = await prisma.coupon.findMany()
      * ```
      */
    get coupon(): Prisma.CouponDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.couponUsage`: Exposes CRUD operations for the **CouponUsage** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more CouponUsages
      * const couponUsages = await prisma.couponUsage.findMany()
      * ```
      */
    get couponUsage(): Prisma.CouponUsageDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.platformSetting`: Exposes CRUD operations for the **PlatformSetting** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more PlatformSettings
      * const platformSettings = await prisma.platformSetting.findMany()
      * ```
      */
    get platformSetting(): Prisma.PlatformSettingDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.auditLog`: Exposes CRUD operations for the **AuditLog** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more AuditLogs
      * const auditLogs = await prisma.auditLog.findMany()
      * ```
      */
    get auditLog(): Prisma.AuditLogDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.achievement`: Exposes CRUD operations for the **Achievement** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more Achievements
      * const achievements = await prisma.achievement.findMany()
      * ```
      */
    get achievement(): Prisma.AchievementDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.userAchievement`: Exposes CRUD operations for the **UserAchievement** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more UserAchievements
      * const userAchievements = await prisma.userAchievement.findMany()
      * ```
      */
    get userAchievement(): Prisma.UserAchievementDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.userXP`: Exposes CRUD operations for the **UserXP** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more UserXPS
      * const userXPS = await prisma.userXP.findMany()
      * ```
      */
    get userXP(): Prisma.UserXPDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.searchHistory`: Exposes CRUD operations for the **SearchHistory** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more SearchHistories
      * const searchHistories = await prisma.searchHistory.findMany()
      * ```
      */
    get searchHistory(): Prisma.SearchHistoryDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.role`: Exposes CRUD operations for the **Role** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more Roles
      * const roles = await prisma.role.findMany()
      * ```
      */
    get role(): Prisma.RoleDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.permission`: Exposes CRUD operations for the **Permission** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more Permissions
      * const permissions = await prisma.permission.findMany()
      * ```
      */
    get permission(): Prisma.PermissionDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.rolePermission`: Exposes CRUD operations for the **RolePermission** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more RolePermissions
      * const rolePermissions = await prisma.rolePermission.findMany()
      * ```
      */
    get rolePermission(): Prisma.RolePermissionDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.userRole`: Exposes CRUD operations for the **UserRole** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more UserRoles
      * const userRoles = await prisma.userRole.findMany()
      * ```
      */
    get userRole(): Prisma.UserRoleDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.productCategory`: Exposes CRUD operations for the **ProductCategory** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more ProductCategories
      * const productCategories = await prisma.productCategory.findMany()
      * ```
      */
    get productCategory(): Prisma.ProductCategoryDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.product`: Exposes CRUD operations for the **Product** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more Products
      * const products = await prisma.product.findMany()
      * ```
      */
    get product(): Prisma.ProductDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.productImage`: Exposes CRUD operations for the **ProductImage** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more ProductImages
      * const productImages = await prisma.productImage.findMany()
      * ```
      */
    get productImage(): Prisma.ProductImageDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.productReview`: Exposes CRUD operations for the **ProductReview** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more ProductReviews
      * const productReviews = await prisma.productReview.findMany()
      * ```
      */
    get productReview(): Prisma.ProductReviewDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.company`: Exposes CRUD operations for the **Company** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more Companies
      * const companies = await prisma.company.findMany()
      * ```
      */
    get company(): Prisma.CompanyDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.job`: Exposes CRUD operations for the **Job** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more Jobs
      * const jobs = await prisma.job.findMany()
      * ```
      */
    get job(): Prisma.JobDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.jobApplication`: Exposes CRUD operations for the **JobApplication** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more JobApplications
      * const jobApplications = await prisma.jobApplication.findMany()
      * ```
      */
    get jobApplication(): Prisma.JobApplicationDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.resume`: Exposes CRUD operations for the **Resume** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more Resumes
      * const resumes = await prisma.resume.findMany()
      * ```
      */
    get resume(): Prisma.ResumeDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.resumeScore`: Exposes CRUD operations for the **ResumeScore** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more ResumeScores
      * const resumeScores = await prisma.resumeScore.findMany()
      * ```
      */
    get resumeScore(): Prisma.ResumeScoreDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.bookCategory`: Exposes CRUD operations for the **BookCategory** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more BookCategories
      * const bookCategories = await prisma.bookCategory.findMany()
      * ```
      */
    get bookCategory(): Prisma.BookCategoryDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.book`: Exposes CRUD operations for the **Book** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more Books
      * const books = await prisma.book.findMany()
      * ```
      */
    get book(): Prisma.BookDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.bookChapter`: Exposes CRUD operations for the **BookChapter** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more BookChapters
      * const bookChapters = await prisma.bookChapter.findMany()
      * ```
      */
    get bookChapter(): Prisma.BookChapterDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.bookPurchase`: Exposes CRUD operations for the **BookPurchase** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more BookPurchases
      * const bookPurchases = await prisma.bookPurchase.findMany()
      * ```
      */
    get bookPurchase(): Prisma.BookPurchaseDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.bookReview`: Exposes CRUD operations for the **BookReview** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more BookReviews
      * const bookReviews = await prisma.bookReview.findMany()
      * ```
      */
    get bookReview(): Prisma.BookReviewDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.resourceCategory`: Exposes CRUD operations for the **ResourceCategory** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more ResourceCategories
      * const resourceCategories = await prisma.resourceCategory.findMany()
      * ```
      */
    get resourceCategory(): Prisma.ResourceCategoryDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.resource`: Exposes CRUD operations for the **Resource** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more Resources
      * const resources = await prisma.resource.findMany()
      * ```
      */
    get resource(): Prisma.ResourceDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.resourceFile`: Exposes CRUD operations for the **ResourceFile** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more ResourceFiles
      * const resourceFiles = await prisma.resourceFile.findMany()
      * ```
      */
    get resourceFile(): Prisma.ResourceFileDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.portfolioProject`: Exposes CRUD operations for the **PortfolioProject** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more PortfolioProjects
      * const portfolioProjects = await prisma.portfolioProject.findMany()
      * ```
      */
    get portfolioProject(): Prisma.PortfolioProjectDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.employee`: Exposes CRUD operations for the **Employee** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more Employees
      * const employees = await prisma.employee.findMany()
      * ```
      */
    get employee(): Prisma.EmployeeDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.aIConversation`: Exposes CRUD operations for the **AIConversation** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more AIConversations
      * const aIConversations = await prisma.aIConversation.findMany()
      * ```
      */
    get aIConversation(): Prisma.AIConversationDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.aIMessage`: Exposes CRUD operations for the **AIMessage** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more AIMessages
      * const aIMessages = await prisma.aIMessage.findMany()
      * ```
      */
    get aIMessage(): Prisma.AIMessageDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
}
export declare function getPrismaClientClass(): PrismaClientConstructor;
