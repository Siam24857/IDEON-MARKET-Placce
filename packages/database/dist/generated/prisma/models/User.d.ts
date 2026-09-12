import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace";
/**
 * Model User
 *
 */
export type UserModel = runtime.Types.Result.DefaultSelection<Prisma.$UserPayload>;
export type AggregateUser = {
    _count: UserCountAggregateOutputType | null;
    _avg: UserAvgAggregateOutputType | null;
    _sum: UserSumAggregateOutputType | null;
    _min: UserMinAggregateOutputType | null;
    _max: UserMaxAggregateOutputType | null;
};
export type UserAvgAggregateOutputType = {
    profileCompletion: number | null;
};
export type UserSumAggregateOutputType = {
    profileCompletion: number | null;
};
export type UserMinAggregateOutputType = {
    id: string | null;
    name: string | null;
    username: string | null;
    email: string | null;
    emailVerified: boolean | null;
    image: string | null;
    coverImage: string | null;
    bio: string | null;
    location: string | null;
    timezone: string | null;
    website: string | null;
    github: string | null;
    linkedin: string | null;
    role: string | null;
    status: string | null;
    verificationStatus: string | null;
    profileCompletion: number | null;
    preferredCurrency: string | null;
    stripeAccountId: string | null;
    stripeOnboardingDone: boolean | null;
    lastLoginAt: Date | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type UserMaxAggregateOutputType = {
    id: string | null;
    name: string | null;
    username: string | null;
    email: string | null;
    emailVerified: boolean | null;
    image: string | null;
    coverImage: string | null;
    bio: string | null;
    location: string | null;
    timezone: string | null;
    website: string | null;
    github: string | null;
    linkedin: string | null;
    role: string | null;
    status: string | null;
    verificationStatus: string | null;
    profileCompletion: number | null;
    preferredCurrency: string | null;
    stripeAccountId: string | null;
    stripeOnboardingDone: boolean | null;
    lastLoginAt: Date | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type UserCountAggregateOutputType = {
    id: number;
    name: number;
    username: number;
    email: number;
    emailVerified: number;
    image: number;
    coverImage: number;
    bio: number;
    location: number;
    skills: number;
    languages: number;
    timezone: number;
    website: number;
    github: number;
    linkedin: number;
    role: number;
    status: number;
    verificationStatus: number;
    profileCompletion: number;
    preferredCurrency: number;
    stripeAccountId: number;
    stripeOnboardingDone: number;
    lastLoginAt: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
};
export type UserAvgAggregateInputType = {
    profileCompletion?: true;
};
export type UserSumAggregateInputType = {
    profileCompletion?: true;
};
export type UserMinAggregateInputType = {
    id?: true;
    name?: true;
    username?: true;
    email?: true;
    emailVerified?: true;
    image?: true;
    coverImage?: true;
    bio?: true;
    location?: true;
    timezone?: true;
    website?: true;
    github?: true;
    linkedin?: true;
    role?: true;
    status?: true;
    verificationStatus?: true;
    profileCompletion?: true;
    preferredCurrency?: true;
    stripeAccountId?: true;
    stripeOnboardingDone?: true;
    lastLoginAt?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type UserMaxAggregateInputType = {
    id?: true;
    name?: true;
    username?: true;
    email?: true;
    emailVerified?: true;
    image?: true;
    coverImage?: true;
    bio?: true;
    location?: true;
    timezone?: true;
    website?: true;
    github?: true;
    linkedin?: true;
    role?: true;
    status?: true;
    verificationStatus?: true;
    profileCompletion?: true;
    preferredCurrency?: true;
    stripeAccountId?: true;
    stripeOnboardingDone?: true;
    lastLoginAt?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type UserCountAggregateInputType = {
    id?: true;
    name?: true;
    username?: true;
    email?: true;
    emailVerified?: true;
    image?: true;
    coverImage?: true;
    bio?: true;
    location?: true;
    skills?: true;
    languages?: true;
    timezone?: true;
    website?: true;
    github?: true;
    linkedin?: true;
    role?: true;
    status?: true;
    verificationStatus?: true;
    profileCompletion?: true;
    preferredCurrency?: true;
    stripeAccountId?: true;
    stripeOnboardingDone?: true;
    lastLoginAt?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
};
export type UserAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: Prisma.UserWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Users to fetch.
     */
    orderBy?: Prisma.UserOrderByWithRelationInput | Prisma.UserOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: Prisma.UserWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Users from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Users.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType;
};
export type GetUserAggregateType<T extends UserAggregateArgs> = {
    [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateUser[P]> : Prisma.GetScalarType<T[P], AggregateUser[P]>;
};
export type UserGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.UserWhereInput;
    orderBy?: Prisma.UserOrderByWithAggregationInput | Prisma.UserOrderByWithAggregationInput[];
    by: Prisma.UserScalarFieldEnum[] | Prisma.UserScalarFieldEnum;
    having?: Prisma.UserScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: UserCountAggregateInputType | true;
    _avg?: UserAvgAggregateInputType;
    _sum?: UserSumAggregateInputType;
    _min?: UserMinAggregateInputType;
    _max?: UserMaxAggregateInputType;
};
export type UserGroupByOutputType = {
    id: string;
    name: string;
    username: string | null;
    email: string;
    emailVerified: boolean;
    image: string | null;
    coverImage: string | null;
    bio: string | null;
    location: string | null;
    skills: string[];
    languages: string[];
    timezone: string | null;
    website: string | null;
    github: string | null;
    linkedin: string | null;
    role: string;
    status: string;
    verificationStatus: string;
    profileCompletion: number;
    preferredCurrency: string;
    stripeAccountId: string | null;
    stripeOnboardingDone: boolean;
    lastLoginAt: Date | null;
    createdAt: Date;
    updatedAt: Date;
    _count: UserCountAggregateOutputType | null;
    _avg: UserAvgAggregateOutputType | null;
    _sum: UserSumAggregateOutputType | null;
    _min: UserMinAggregateOutputType | null;
    _max: UserMaxAggregateOutputType | null;
};
export type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<UserGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], UserGroupByOutputType[P]> : Prisma.GetScalarType<T[P], UserGroupByOutputType[P]>;
}>>;
export type UserWhereInput = {
    AND?: Prisma.UserWhereInput | Prisma.UserWhereInput[];
    OR?: Prisma.UserWhereInput[];
    NOT?: Prisma.UserWhereInput | Prisma.UserWhereInput[];
    id?: Prisma.StringFilter<"User"> | string;
    name?: Prisma.StringFilter<"User"> | string;
    username?: Prisma.StringNullableFilter<"User"> | string | null;
    email?: Prisma.StringFilter<"User"> | string;
    emailVerified?: Prisma.BoolFilter<"User"> | boolean;
    image?: Prisma.StringNullableFilter<"User"> | string | null;
    coverImage?: Prisma.StringNullableFilter<"User"> | string | null;
    bio?: Prisma.StringNullableFilter<"User"> | string | null;
    location?: Prisma.StringNullableFilter<"User"> | string | null;
    skills?: Prisma.StringNullableListFilter<"User">;
    languages?: Prisma.StringNullableListFilter<"User">;
    timezone?: Prisma.StringNullableFilter<"User"> | string | null;
    website?: Prisma.StringNullableFilter<"User"> | string | null;
    github?: Prisma.StringNullableFilter<"User"> | string | null;
    linkedin?: Prisma.StringNullableFilter<"User"> | string | null;
    role?: Prisma.StringFilter<"User"> | string;
    status?: Prisma.StringFilter<"User"> | string;
    verificationStatus?: Prisma.StringFilter<"User"> | string;
    profileCompletion?: Prisma.IntFilter<"User"> | number;
    preferredCurrency?: Prisma.StringFilter<"User"> | string;
    stripeAccountId?: Prisma.StringNullableFilter<"User"> | string | null;
    stripeOnboardingDone?: Prisma.BoolFilter<"User"> | boolean;
    lastLoginAt?: Prisma.DateTimeNullableFilter<"User"> | Date | string | null;
    createdAt?: Prisma.DateTimeFilter<"User"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"User"> | Date | string;
    accounts?: Prisma.AccountListRelationFilter;
    sessions?: Prisma.SessionListRelationFilter;
    profile?: Prisma.XOR<Prisma.ProfileNullableScalarRelationFilter, Prisma.ProfileWhereInput> | null;
    freelancerProfile?: Prisma.XOR<Prisma.FreelancerProfileNullableScalarRelationFilter, Prisma.FreelancerProfileWhereInput> | null;
    buyerProfile?: Prisma.XOR<Prisma.BuyerProfileNullableScalarRelationFilter, Prisma.BuyerProfileWhereInput> | null;
    portfolioItems?: Prisma.PortfolioListRelationFilter;
    services?: Prisma.ServiceListRelationFilter;
    ordersAsBuyer?: Prisma.OrderListRelationFilter;
    ordersAsFreelancer?: Prisma.OrderListRelationFilter;
    reviewsWritten?: Prisma.ReviewListRelationFilter;
    reviewsReceived?: Prisma.ReviewListRelationFilter;
    favorites?: Prisma.FavoriteListRelationFilter;
    cart?: Prisma.XOR<Prisma.CartNullableScalarRelationFilter, Prisma.CartWhereInput> | null;
    conversationParts?: Prisma.ConversationParticipantListRelationFilter;
    messages?: Prisma.MessageListRelationFilter;
    notifications?: Prisma.NotificationListRelationFilter;
    payouts?: Prisma.PayoutListRelationFilter;
    disputes?: Prisma.DisputeListRelationFilter;
    reports?: Prisma.ReportListRelationFilter;
    achievements?: Prisma.UserAchievementListRelationFilter;
    xp?: Prisma.XOR<Prisma.UserXPNullableScalarRelationFilter, Prisma.UserXPWhereInput> | null;
    searchHistory?: Prisma.SearchHistoryListRelationFilter;
    userRoles?: Prisma.UserRoleListRelationFilter;
    companiesOwned?: Prisma.CompanyListRelationFilter;
    companyEmployees?: Prisma.EmployeeListRelationFilter;
    jobsPosted?: Prisma.JobListRelationFilter;
    resumes?: Prisma.ResumeListRelationFilter;
    jobApplications?: Prisma.JobApplicationListRelationFilter;
    products?: Prisma.ProductListRelationFilter;
    productReviewsWritten?: Prisma.ProductReviewListRelationFilter;
    productReviewsReceived?: Prisma.ProductReviewListRelationFilter;
    booksAuthored?: Prisma.BookListRelationFilter;
    bookPurchases?: Prisma.BookPurchaseListRelationFilter;
    bookReviews?: Prisma.BookReviewListRelationFilter;
    resourcesCreated?: Prisma.ResourceListRelationFilter;
    portfolioProjects?: Prisma.PortfolioProjectListRelationFilter;
    aiConversations?: Prisma.AIConversationListRelationFilter;
};
export type UserOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    username?: Prisma.SortOrderInput | Prisma.SortOrder;
    email?: Prisma.SortOrder;
    emailVerified?: Prisma.SortOrder;
    image?: Prisma.SortOrderInput | Prisma.SortOrder;
    coverImage?: Prisma.SortOrderInput | Prisma.SortOrder;
    bio?: Prisma.SortOrderInput | Prisma.SortOrder;
    location?: Prisma.SortOrderInput | Prisma.SortOrder;
    skills?: Prisma.SortOrder;
    languages?: Prisma.SortOrder;
    timezone?: Prisma.SortOrderInput | Prisma.SortOrder;
    website?: Prisma.SortOrderInput | Prisma.SortOrder;
    github?: Prisma.SortOrderInput | Prisma.SortOrder;
    linkedin?: Prisma.SortOrderInput | Prisma.SortOrder;
    role?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    verificationStatus?: Prisma.SortOrder;
    profileCompletion?: Prisma.SortOrder;
    preferredCurrency?: Prisma.SortOrder;
    stripeAccountId?: Prisma.SortOrderInput | Prisma.SortOrder;
    stripeOnboardingDone?: Prisma.SortOrder;
    lastLoginAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    accounts?: Prisma.AccountOrderByRelationAggregateInput;
    sessions?: Prisma.SessionOrderByRelationAggregateInput;
    profile?: Prisma.ProfileOrderByWithRelationInput;
    freelancerProfile?: Prisma.FreelancerProfileOrderByWithRelationInput;
    buyerProfile?: Prisma.BuyerProfileOrderByWithRelationInput;
    portfolioItems?: Prisma.PortfolioOrderByRelationAggregateInput;
    services?: Prisma.ServiceOrderByRelationAggregateInput;
    ordersAsBuyer?: Prisma.OrderOrderByRelationAggregateInput;
    ordersAsFreelancer?: Prisma.OrderOrderByRelationAggregateInput;
    reviewsWritten?: Prisma.ReviewOrderByRelationAggregateInput;
    reviewsReceived?: Prisma.ReviewOrderByRelationAggregateInput;
    favorites?: Prisma.FavoriteOrderByRelationAggregateInput;
    cart?: Prisma.CartOrderByWithRelationInput;
    conversationParts?: Prisma.ConversationParticipantOrderByRelationAggregateInput;
    messages?: Prisma.MessageOrderByRelationAggregateInput;
    notifications?: Prisma.NotificationOrderByRelationAggregateInput;
    payouts?: Prisma.PayoutOrderByRelationAggregateInput;
    disputes?: Prisma.DisputeOrderByRelationAggregateInput;
    reports?: Prisma.ReportOrderByRelationAggregateInput;
    achievements?: Prisma.UserAchievementOrderByRelationAggregateInput;
    xp?: Prisma.UserXPOrderByWithRelationInput;
    searchHistory?: Prisma.SearchHistoryOrderByRelationAggregateInput;
    userRoles?: Prisma.UserRoleOrderByRelationAggregateInput;
    companiesOwned?: Prisma.CompanyOrderByRelationAggregateInput;
    companyEmployees?: Prisma.EmployeeOrderByRelationAggregateInput;
    jobsPosted?: Prisma.JobOrderByRelationAggregateInput;
    resumes?: Prisma.ResumeOrderByRelationAggregateInput;
    jobApplications?: Prisma.JobApplicationOrderByRelationAggregateInput;
    products?: Prisma.ProductOrderByRelationAggregateInput;
    productReviewsWritten?: Prisma.ProductReviewOrderByRelationAggregateInput;
    productReviewsReceived?: Prisma.ProductReviewOrderByRelationAggregateInput;
    booksAuthored?: Prisma.BookOrderByRelationAggregateInput;
    bookPurchases?: Prisma.BookPurchaseOrderByRelationAggregateInput;
    bookReviews?: Prisma.BookReviewOrderByRelationAggregateInput;
    resourcesCreated?: Prisma.ResourceOrderByRelationAggregateInput;
    portfolioProjects?: Prisma.PortfolioProjectOrderByRelationAggregateInput;
    aiConversations?: Prisma.AIConversationOrderByRelationAggregateInput;
};
export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    username?: string;
    email?: string;
    stripeAccountId?: string;
    AND?: Prisma.UserWhereInput | Prisma.UserWhereInput[];
    OR?: Prisma.UserWhereInput[];
    NOT?: Prisma.UserWhereInput | Prisma.UserWhereInput[];
    name?: Prisma.StringFilter<"User"> | string;
    emailVerified?: Prisma.BoolFilter<"User"> | boolean;
    image?: Prisma.StringNullableFilter<"User"> | string | null;
    coverImage?: Prisma.StringNullableFilter<"User"> | string | null;
    bio?: Prisma.StringNullableFilter<"User"> | string | null;
    location?: Prisma.StringNullableFilter<"User"> | string | null;
    skills?: Prisma.StringNullableListFilter<"User">;
    languages?: Prisma.StringNullableListFilter<"User">;
    timezone?: Prisma.StringNullableFilter<"User"> | string | null;
    website?: Prisma.StringNullableFilter<"User"> | string | null;
    github?: Prisma.StringNullableFilter<"User"> | string | null;
    linkedin?: Prisma.StringNullableFilter<"User"> | string | null;
    role?: Prisma.StringFilter<"User"> | string;
    status?: Prisma.StringFilter<"User"> | string;
    verificationStatus?: Prisma.StringFilter<"User"> | string;
    profileCompletion?: Prisma.IntFilter<"User"> | number;
    preferredCurrency?: Prisma.StringFilter<"User"> | string;
    stripeOnboardingDone?: Prisma.BoolFilter<"User"> | boolean;
    lastLoginAt?: Prisma.DateTimeNullableFilter<"User"> | Date | string | null;
    createdAt?: Prisma.DateTimeFilter<"User"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"User"> | Date | string;
    accounts?: Prisma.AccountListRelationFilter;
    sessions?: Prisma.SessionListRelationFilter;
    profile?: Prisma.XOR<Prisma.ProfileNullableScalarRelationFilter, Prisma.ProfileWhereInput> | null;
    freelancerProfile?: Prisma.XOR<Prisma.FreelancerProfileNullableScalarRelationFilter, Prisma.FreelancerProfileWhereInput> | null;
    buyerProfile?: Prisma.XOR<Prisma.BuyerProfileNullableScalarRelationFilter, Prisma.BuyerProfileWhereInput> | null;
    portfolioItems?: Prisma.PortfolioListRelationFilter;
    services?: Prisma.ServiceListRelationFilter;
    ordersAsBuyer?: Prisma.OrderListRelationFilter;
    ordersAsFreelancer?: Prisma.OrderListRelationFilter;
    reviewsWritten?: Prisma.ReviewListRelationFilter;
    reviewsReceived?: Prisma.ReviewListRelationFilter;
    favorites?: Prisma.FavoriteListRelationFilter;
    cart?: Prisma.XOR<Prisma.CartNullableScalarRelationFilter, Prisma.CartWhereInput> | null;
    conversationParts?: Prisma.ConversationParticipantListRelationFilter;
    messages?: Prisma.MessageListRelationFilter;
    notifications?: Prisma.NotificationListRelationFilter;
    payouts?: Prisma.PayoutListRelationFilter;
    disputes?: Prisma.DisputeListRelationFilter;
    reports?: Prisma.ReportListRelationFilter;
    achievements?: Prisma.UserAchievementListRelationFilter;
    xp?: Prisma.XOR<Prisma.UserXPNullableScalarRelationFilter, Prisma.UserXPWhereInput> | null;
    searchHistory?: Prisma.SearchHistoryListRelationFilter;
    userRoles?: Prisma.UserRoleListRelationFilter;
    companiesOwned?: Prisma.CompanyListRelationFilter;
    companyEmployees?: Prisma.EmployeeListRelationFilter;
    jobsPosted?: Prisma.JobListRelationFilter;
    resumes?: Prisma.ResumeListRelationFilter;
    jobApplications?: Prisma.JobApplicationListRelationFilter;
    products?: Prisma.ProductListRelationFilter;
    productReviewsWritten?: Prisma.ProductReviewListRelationFilter;
    productReviewsReceived?: Prisma.ProductReviewListRelationFilter;
    booksAuthored?: Prisma.BookListRelationFilter;
    bookPurchases?: Prisma.BookPurchaseListRelationFilter;
    bookReviews?: Prisma.BookReviewListRelationFilter;
    resourcesCreated?: Prisma.ResourceListRelationFilter;
    portfolioProjects?: Prisma.PortfolioProjectListRelationFilter;
    aiConversations?: Prisma.AIConversationListRelationFilter;
}, "id" | "username" | "email" | "stripeAccountId">;
export type UserOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    username?: Prisma.SortOrderInput | Prisma.SortOrder;
    email?: Prisma.SortOrder;
    emailVerified?: Prisma.SortOrder;
    image?: Prisma.SortOrderInput | Prisma.SortOrder;
    coverImage?: Prisma.SortOrderInput | Prisma.SortOrder;
    bio?: Prisma.SortOrderInput | Prisma.SortOrder;
    location?: Prisma.SortOrderInput | Prisma.SortOrder;
    skills?: Prisma.SortOrder;
    languages?: Prisma.SortOrder;
    timezone?: Prisma.SortOrderInput | Prisma.SortOrder;
    website?: Prisma.SortOrderInput | Prisma.SortOrder;
    github?: Prisma.SortOrderInput | Prisma.SortOrder;
    linkedin?: Prisma.SortOrderInput | Prisma.SortOrder;
    role?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    verificationStatus?: Prisma.SortOrder;
    profileCompletion?: Prisma.SortOrder;
    preferredCurrency?: Prisma.SortOrder;
    stripeAccountId?: Prisma.SortOrderInput | Prisma.SortOrder;
    stripeOnboardingDone?: Prisma.SortOrder;
    lastLoginAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    _count?: Prisma.UserCountOrderByAggregateInput;
    _avg?: Prisma.UserAvgOrderByAggregateInput;
    _max?: Prisma.UserMaxOrderByAggregateInput;
    _min?: Prisma.UserMinOrderByAggregateInput;
    _sum?: Prisma.UserSumOrderByAggregateInput;
};
export type UserScalarWhereWithAggregatesInput = {
    AND?: Prisma.UserScalarWhereWithAggregatesInput | Prisma.UserScalarWhereWithAggregatesInput[];
    OR?: Prisma.UserScalarWhereWithAggregatesInput[];
    NOT?: Prisma.UserScalarWhereWithAggregatesInput | Prisma.UserScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"User"> | string;
    name?: Prisma.StringWithAggregatesFilter<"User"> | string;
    username?: Prisma.StringNullableWithAggregatesFilter<"User"> | string | null;
    email?: Prisma.StringWithAggregatesFilter<"User"> | string;
    emailVerified?: Prisma.BoolWithAggregatesFilter<"User"> | boolean;
    image?: Prisma.StringNullableWithAggregatesFilter<"User"> | string | null;
    coverImage?: Prisma.StringNullableWithAggregatesFilter<"User"> | string | null;
    bio?: Prisma.StringNullableWithAggregatesFilter<"User"> | string | null;
    location?: Prisma.StringNullableWithAggregatesFilter<"User"> | string | null;
    skills?: Prisma.StringNullableListFilter<"User">;
    languages?: Prisma.StringNullableListFilter<"User">;
    timezone?: Prisma.StringNullableWithAggregatesFilter<"User"> | string | null;
    website?: Prisma.StringNullableWithAggregatesFilter<"User"> | string | null;
    github?: Prisma.StringNullableWithAggregatesFilter<"User"> | string | null;
    linkedin?: Prisma.StringNullableWithAggregatesFilter<"User"> | string | null;
    role?: Prisma.StringWithAggregatesFilter<"User"> | string;
    status?: Prisma.StringWithAggregatesFilter<"User"> | string;
    verificationStatus?: Prisma.StringWithAggregatesFilter<"User"> | string;
    profileCompletion?: Prisma.IntWithAggregatesFilter<"User"> | number;
    preferredCurrency?: Prisma.StringWithAggregatesFilter<"User"> | string;
    stripeAccountId?: Prisma.StringNullableWithAggregatesFilter<"User"> | string | null;
    stripeOnboardingDone?: Prisma.BoolWithAggregatesFilter<"User"> | boolean;
    lastLoginAt?: Prisma.DateTimeNullableWithAggregatesFilter<"User"> | Date | string | null;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"User"> | Date | string;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"User"> | Date | string;
};
export type UserCreateInput = {
    id?: string;
    name: string;
    username?: string | null;
    email: string;
    emailVerified?: boolean;
    image?: string | null;
    coverImage?: string | null;
    bio?: string | null;
    location?: string | null;
    skills?: Prisma.UserCreateskillsInput | string[];
    languages?: Prisma.UserCreatelanguagesInput | string[];
    timezone?: string | null;
    website?: string | null;
    github?: string | null;
    linkedin?: string | null;
    role?: string;
    status?: string;
    verificationStatus?: string;
    profileCompletion?: number;
    preferredCurrency?: string;
    stripeAccountId?: string | null;
    stripeOnboardingDone?: boolean;
    lastLoginAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    accounts?: Prisma.AccountCreateNestedManyWithoutUserInput;
    sessions?: Prisma.SessionCreateNestedManyWithoutUserInput;
    profile?: Prisma.ProfileCreateNestedOneWithoutUserInput;
    freelancerProfile?: Prisma.FreelancerProfileCreateNestedOneWithoutUserInput;
    buyerProfile?: Prisma.BuyerProfileCreateNestedOneWithoutUserInput;
    portfolioItems?: Prisma.PortfolioCreateNestedManyWithoutUserInput;
    services?: Prisma.ServiceCreateNestedManyWithoutUserInput;
    ordersAsBuyer?: Prisma.OrderCreateNestedManyWithoutBuyerInput;
    ordersAsFreelancer?: Prisma.OrderCreateNestedManyWithoutFreelancerInput;
    reviewsWritten?: Prisma.ReviewCreateNestedManyWithoutReviewerInput;
    reviewsReceived?: Prisma.ReviewCreateNestedManyWithoutRevieweeInput;
    favorites?: Prisma.FavoriteCreateNestedManyWithoutUserInput;
    cart?: Prisma.CartCreateNestedOneWithoutUserInput;
    conversationParts?: Prisma.ConversationParticipantCreateNestedManyWithoutUserInput;
    messages?: Prisma.MessageCreateNestedManyWithoutSenderInput;
    notifications?: Prisma.NotificationCreateNestedManyWithoutUserInput;
    payouts?: Prisma.PayoutCreateNestedManyWithoutFreelancerInput;
    disputes?: Prisma.DisputeCreateNestedManyWithoutOpenerInput;
    reports?: Prisma.ReportCreateNestedManyWithoutReporterInput;
    achievements?: Prisma.UserAchievementCreateNestedManyWithoutUserInput;
    xp?: Prisma.UserXPCreateNestedOneWithoutUserInput;
    searchHistory?: Prisma.SearchHistoryCreateNestedManyWithoutUserInput;
    userRoles?: Prisma.UserRoleCreateNestedManyWithoutUserInput;
    companiesOwned?: Prisma.CompanyCreateNestedManyWithoutOwnerInput;
    companyEmployees?: Prisma.EmployeeCreateNestedManyWithoutUserInput;
    jobsPosted?: Prisma.JobCreateNestedManyWithoutPostedByInput;
    resumes?: Prisma.ResumeCreateNestedManyWithoutUserInput;
    jobApplications?: Prisma.JobApplicationCreateNestedManyWithoutApplicantInput;
    products?: Prisma.ProductCreateNestedManyWithoutSellerInput;
    productReviewsWritten?: Prisma.ProductReviewCreateNestedManyWithoutReviewerInput;
    productReviewsReceived?: Prisma.ProductReviewCreateNestedManyWithoutRevieweeInput;
    booksAuthored?: Prisma.BookCreateNestedManyWithoutAuthorUserInput;
    bookPurchases?: Prisma.BookPurchaseCreateNestedManyWithoutUserInput;
    bookReviews?: Prisma.BookReviewCreateNestedManyWithoutUserInput;
    resourcesCreated?: Prisma.ResourceCreateNestedManyWithoutAuthorInput;
    portfolioProjects?: Prisma.PortfolioProjectCreateNestedManyWithoutUserInput;
    aiConversations?: Prisma.AIConversationCreateNestedManyWithoutUserInput;
};
export type UserUncheckedCreateInput = {
    id?: string;
    name: string;
    username?: string | null;
    email: string;
    emailVerified?: boolean;
    image?: string | null;
    coverImage?: string | null;
    bio?: string | null;
    location?: string | null;
    skills?: Prisma.UserCreateskillsInput | string[];
    languages?: Prisma.UserCreatelanguagesInput | string[];
    timezone?: string | null;
    website?: string | null;
    github?: string | null;
    linkedin?: string | null;
    role?: string;
    status?: string;
    verificationStatus?: string;
    profileCompletion?: number;
    preferredCurrency?: string;
    stripeAccountId?: string | null;
    stripeOnboardingDone?: boolean;
    lastLoginAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    accounts?: Prisma.AccountUncheckedCreateNestedManyWithoutUserInput;
    sessions?: Prisma.SessionUncheckedCreateNestedManyWithoutUserInput;
    profile?: Prisma.ProfileUncheckedCreateNestedOneWithoutUserInput;
    freelancerProfile?: Prisma.FreelancerProfileUncheckedCreateNestedOneWithoutUserInput;
    buyerProfile?: Prisma.BuyerProfileUncheckedCreateNestedOneWithoutUserInput;
    portfolioItems?: Prisma.PortfolioUncheckedCreateNestedManyWithoutUserInput;
    services?: Prisma.ServiceUncheckedCreateNestedManyWithoutUserInput;
    ordersAsBuyer?: Prisma.OrderUncheckedCreateNestedManyWithoutBuyerInput;
    ordersAsFreelancer?: Prisma.OrderUncheckedCreateNestedManyWithoutFreelancerInput;
    reviewsWritten?: Prisma.ReviewUncheckedCreateNestedManyWithoutReviewerInput;
    reviewsReceived?: Prisma.ReviewUncheckedCreateNestedManyWithoutRevieweeInput;
    favorites?: Prisma.FavoriteUncheckedCreateNestedManyWithoutUserInput;
    cart?: Prisma.CartUncheckedCreateNestedOneWithoutUserInput;
    conversationParts?: Prisma.ConversationParticipantUncheckedCreateNestedManyWithoutUserInput;
    messages?: Prisma.MessageUncheckedCreateNestedManyWithoutSenderInput;
    notifications?: Prisma.NotificationUncheckedCreateNestedManyWithoutUserInput;
    payouts?: Prisma.PayoutUncheckedCreateNestedManyWithoutFreelancerInput;
    disputes?: Prisma.DisputeUncheckedCreateNestedManyWithoutOpenerInput;
    reports?: Prisma.ReportUncheckedCreateNestedManyWithoutReporterInput;
    achievements?: Prisma.UserAchievementUncheckedCreateNestedManyWithoutUserInput;
    xp?: Prisma.UserXPUncheckedCreateNestedOneWithoutUserInput;
    searchHistory?: Prisma.SearchHistoryUncheckedCreateNestedManyWithoutUserInput;
    userRoles?: Prisma.UserRoleUncheckedCreateNestedManyWithoutUserInput;
    companiesOwned?: Prisma.CompanyUncheckedCreateNestedManyWithoutOwnerInput;
    companyEmployees?: Prisma.EmployeeUncheckedCreateNestedManyWithoutUserInput;
    jobsPosted?: Prisma.JobUncheckedCreateNestedManyWithoutPostedByInput;
    resumes?: Prisma.ResumeUncheckedCreateNestedManyWithoutUserInput;
    jobApplications?: Prisma.JobApplicationUncheckedCreateNestedManyWithoutApplicantInput;
    products?: Prisma.ProductUncheckedCreateNestedManyWithoutSellerInput;
    productReviewsWritten?: Prisma.ProductReviewUncheckedCreateNestedManyWithoutReviewerInput;
    productReviewsReceived?: Prisma.ProductReviewUncheckedCreateNestedManyWithoutRevieweeInput;
    booksAuthored?: Prisma.BookUncheckedCreateNestedManyWithoutAuthorUserInput;
    bookPurchases?: Prisma.BookPurchaseUncheckedCreateNestedManyWithoutUserInput;
    bookReviews?: Prisma.BookReviewUncheckedCreateNestedManyWithoutUserInput;
    resourcesCreated?: Prisma.ResourceUncheckedCreateNestedManyWithoutAuthorInput;
    portfolioProjects?: Prisma.PortfolioProjectUncheckedCreateNestedManyWithoutUserInput;
    aiConversations?: Prisma.AIConversationUncheckedCreateNestedManyWithoutUserInput;
};
export type UserUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    username?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    emailVerified?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    image?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    coverImage?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    bio?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    location?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    skills?: Prisma.UserUpdateskillsInput | string[];
    languages?: Prisma.UserUpdatelanguagesInput | string[];
    timezone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    website?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    github?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    linkedin?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    role?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    verificationStatus?: Prisma.StringFieldUpdateOperationsInput | string;
    profileCompletion?: Prisma.IntFieldUpdateOperationsInput | number;
    preferredCurrency?: Prisma.StringFieldUpdateOperationsInput | string;
    stripeAccountId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    stripeOnboardingDone?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    lastLoginAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    accounts?: Prisma.AccountUpdateManyWithoutUserNestedInput;
    sessions?: Prisma.SessionUpdateManyWithoutUserNestedInput;
    profile?: Prisma.ProfileUpdateOneWithoutUserNestedInput;
    freelancerProfile?: Prisma.FreelancerProfileUpdateOneWithoutUserNestedInput;
    buyerProfile?: Prisma.BuyerProfileUpdateOneWithoutUserNestedInput;
    portfolioItems?: Prisma.PortfolioUpdateManyWithoutUserNestedInput;
    services?: Prisma.ServiceUpdateManyWithoutUserNestedInput;
    ordersAsBuyer?: Prisma.OrderUpdateManyWithoutBuyerNestedInput;
    ordersAsFreelancer?: Prisma.OrderUpdateManyWithoutFreelancerNestedInput;
    reviewsWritten?: Prisma.ReviewUpdateManyWithoutReviewerNestedInput;
    reviewsReceived?: Prisma.ReviewUpdateManyWithoutRevieweeNestedInput;
    favorites?: Prisma.FavoriteUpdateManyWithoutUserNestedInput;
    cart?: Prisma.CartUpdateOneWithoutUserNestedInput;
    conversationParts?: Prisma.ConversationParticipantUpdateManyWithoutUserNestedInput;
    messages?: Prisma.MessageUpdateManyWithoutSenderNestedInput;
    notifications?: Prisma.NotificationUpdateManyWithoutUserNestedInput;
    payouts?: Prisma.PayoutUpdateManyWithoutFreelancerNestedInput;
    disputes?: Prisma.DisputeUpdateManyWithoutOpenerNestedInput;
    reports?: Prisma.ReportUpdateManyWithoutReporterNestedInput;
    achievements?: Prisma.UserAchievementUpdateManyWithoutUserNestedInput;
    xp?: Prisma.UserXPUpdateOneWithoutUserNestedInput;
    searchHistory?: Prisma.SearchHistoryUpdateManyWithoutUserNestedInput;
    userRoles?: Prisma.UserRoleUpdateManyWithoutUserNestedInput;
    companiesOwned?: Prisma.CompanyUpdateManyWithoutOwnerNestedInput;
    companyEmployees?: Prisma.EmployeeUpdateManyWithoutUserNestedInput;
    jobsPosted?: Prisma.JobUpdateManyWithoutPostedByNestedInput;
    resumes?: Prisma.ResumeUpdateManyWithoutUserNestedInput;
    jobApplications?: Prisma.JobApplicationUpdateManyWithoutApplicantNestedInput;
    products?: Prisma.ProductUpdateManyWithoutSellerNestedInput;
    productReviewsWritten?: Prisma.ProductReviewUpdateManyWithoutReviewerNestedInput;
    productReviewsReceived?: Prisma.ProductReviewUpdateManyWithoutRevieweeNestedInput;
    booksAuthored?: Prisma.BookUpdateManyWithoutAuthorUserNestedInput;
    bookPurchases?: Prisma.BookPurchaseUpdateManyWithoutUserNestedInput;
    bookReviews?: Prisma.BookReviewUpdateManyWithoutUserNestedInput;
    resourcesCreated?: Prisma.ResourceUpdateManyWithoutAuthorNestedInput;
    portfolioProjects?: Prisma.PortfolioProjectUpdateManyWithoutUserNestedInput;
    aiConversations?: Prisma.AIConversationUpdateManyWithoutUserNestedInput;
};
export type UserUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    username?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    emailVerified?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    image?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    coverImage?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    bio?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    location?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    skills?: Prisma.UserUpdateskillsInput | string[];
    languages?: Prisma.UserUpdatelanguagesInput | string[];
    timezone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    website?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    github?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    linkedin?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    role?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    verificationStatus?: Prisma.StringFieldUpdateOperationsInput | string;
    profileCompletion?: Prisma.IntFieldUpdateOperationsInput | number;
    preferredCurrency?: Prisma.StringFieldUpdateOperationsInput | string;
    stripeAccountId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    stripeOnboardingDone?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    lastLoginAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    accounts?: Prisma.AccountUncheckedUpdateManyWithoutUserNestedInput;
    sessions?: Prisma.SessionUncheckedUpdateManyWithoutUserNestedInput;
    profile?: Prisma.ProfileUncheckedUpdateOneWithoutUserNestedInput;
    freelancerProfile?: Prisma.FreelancerProfileUncheckedUpdateOneWithoutUserNestedInput;
    buyerProfile?: Prisma.BuyerProfileUncheckedUpdateOneWithoutUserNestedInput;
    portfolioItems?: Prisma.PortfolioUncheckedUpdateManyWithoutUserNestedInput;
    services?: Prisma.ServiceUncheckedUpdateManyWithoutUserNestedInput;
    ordersAsBuyer?: Prisma.OrderUncheckedUpdateManyWithoutBuyerNestedInput;
    ordersAsFreelancer?: Prisma.OrderUncheckedUpdateManyWithoutFreelancerNestedInput;
    reviewsWritten?: Prisma.ReviewUncheckedUpdateManyWithoutReviewerNestedInput;
    reviewsReceived?: Prisma.ReviewUncheckedUpdateManyWithoutRevieweeNestedInput;
    favorites?: Prisma.FavoriteUncheckedUpdateManyWithoutUserNestedInput;
    cart?: Prisma.CartUncheckedUpdateOneWithoutUserNestedInput;
    conversationParts?: Prisma.ConversationParticipantUncheckedUpdateManyWithoutUserNestedInput;
    messages?: Prisma.MessageUncheckedUpdateManyWithoutSenderNestedInput;
    notifications?: Prisma.NotificationUncheckedUpdateManyWithoutUserNestedInput;
    payouts?: Prisma.PayoutUncheckedUpdateManyWithoutFreelancerNestedInput;
    disputes?: Prisma.DisputeUncheckedUpdateManyWithoutOpenerNestedInput;
    reports?: Prisma.ReportUncheckedUpdateManyWithoutReporterNestedInput;
    achievements?: Prisma.UserAchievementUncheckedUpdateManyWithoutUserNestedInput;
    xp?: Prisma.UserXPUncheckedUpdateOneWithoutUserNestedInput;
    searchHistory?: Prisma.SearchHistoryUncheckedUpdateManyWithoutUserNestedInput;
    userRoles?: Prisma.UserRoleUncheckedUpdateManyWithoutUserNestedInput;
    companiesOwned?: Prisma.CompanyUncheckedUpdateManyWithoutOwnerNestedInput;
    companyEmployees?: Prisma.EmployeeUncheckedUpdateManyWithoutUserNestedInput;
    jobsPosted?: Prisma.JobUncheckedUpdateManyWithoutPostedByNestedInput;
    resumes?: Prisma.ResumeUncheckedUpdateManyWithoutUserNestedInput;
    jobApplications?: Prisma.JobApplicationUncheckedUpdateManyWithoutApplicantNestedInput;
    products?: Prisma.ProductUncheckedUpdateManyWithoutSellerNestedInput;
    productReviewsWritten?: Prisma.ProductReviewUncheckedUpdateManyWithoutReviewerNestedInput;
    productReviewsReceived?: Prisma.ProductReviewUncheckedUpdateManyWithoutRevieweeNestedInput;
    booksAuthored?: Prisma.BookUncheckedUpdateManyWithoutAuthorUserNestedInput;
    bookPurchases?: Prisma.BookPurchaseUncheckedUpdateManyWithoutUserNestedInput;
    bookReviews?: Prisma.BookReviewUncheckedUpdateManyWithoutUserNestedInput;
    resourcesCreated?: Prisma.ResourceUncheckedUpdateManyWithoutAuthorNestedInput;
    portfolioProjects?: Prisma.PortfolioProjectUncheckedUpdateManyWithoutUserNestedInput;
    aiConversations?: Prisma.AIConversationUncheckedUpdateManyWithoutUserNestedInput;
};
export type UserCreateManyInput = {
    id?: string;
    name: string;
    username?: string | null;
    email: string;
    emailVerified?: boolean;
    image?: string | null;
    coverImage?: string | null;
    bio?: string | null;
    location?: string | null;
    skills?: Prisma.UserCreateskillsInput | string[];
    languages?: Prisma.UserCreatelanguagesInput | string[];
    timezone?: string | null;
    website?: string | null;
    github?: string | null;
    linkedin?: string | null;
    role?: string;
    status?: string;
    verificationStatus?: string;
    profileCompletion?: number;
    preferredCurrency?: string;
    stripeAccountId?: string | null;
    stripeOnboardingDone?: boolean;
    lastLoginAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type UserUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    username?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    emailVerified?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    image?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    coverImage?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    bio?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    location?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    skills?: Prisma.UserUpdateskillsInput | string[];
    languages?: Prisma.UserUpdatelanguagesInput | string[];
    timezone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    website?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    github?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    linkedin?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    role?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    verificationStatus?: Prisma.StringFieldUpdateOperationsInput | string;
    profileCompletion?: Prisma.IntFieldUpdateOperationsInput | number;
    preferredCurrency?: Prisma.StringFieldUpdateOperationsInput | string;
    stripeAccountId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    stripeOnboardingDone?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    lastLoginAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type UserUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    username?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    emailVerified?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    image?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    coverImage?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    bio?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    location?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    skills?: Prisma.UserUpdateskillsInput | string[];
    languages?: Prisma.UserUpdatelanguagesInput | string[];
    timezone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    website?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    github?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    linkedin?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    role?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    verificationStatus?: Prisma.StringFieldUpdateOperationsInput | string;
    profileCompletion?: Prisma.IntFieldUpdateOperationsInput | number;
    preferredCurrency?: Prisma.StringFieldUpdateOperationsInput | string;
    stripeAccountId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    stripeOnboardingDone?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    lastLoginAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type StringNullableListFilter<$PrismaModel = never> = {
    equals?: string[] | Prisma.ListStringFieldRefInput<$PrismaModel> | null;
    has?: string | Prisma.StringFieldRefInput<$PrismaModel> | null;
    hasEvery?: string[] | Prisma.ListStringFieldRefInput<$PrismaModel>;
    hasSome?: string[] | Prisma.ListStringFieldRefInput<$PrismaModel>;
    isEmpty?: boolean;
};
export type UserCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    username?: Prisma.SortOrder;
    email?: Prisma.SortOrder;
    emailVerified?: Prisma.SortOrder;
    image?: Prisma.SortOrder;
    coverImage?: Prisma.SortOrder;
    bio?: Prisma.SortOrder;
    location?: Prisma.SortOrder;
    skills?: Prisma.SortOrder;
    languages?: Prisma.SortOrder;
    timezone?: Prisma.SortOrder;
    website?: Prisma.SortOrder;
    github?: Prisma.SortOrder;
    linkedin?: Prisma.SortOrder;
    role?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    verificationStatus?: Prisma.SortOrder;
    profileCompletion?: Prisma.SortOrder;
    preferredCurrency?: Prisma.SortOrder;
    stripeAccountId?: Prisma.SortOrder;
    stripeOnboardingDone?: Prisma.SortOrder;
    lastLoginAt?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type UserAvgOrderByAggregateInput = {
    profileCompletion?: Prisma.SortOrder;
};
export type UserMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    username?: Prisma.SortOrder;
    email?: Prisma.SortOrder;
    emailVerified?: Prisma.SortOrder;
    image?: Prisma.SortOrder;
    coverImage?: Prisma.SortOrder;
    bio?: Prisma.SortOrder;
    location?: Prisma.SortOrder;
    timezone?: Prisma.SortOrder;
    website?: Prisma.SortOrder;
    github?: Prisma.SortOrder;
    linkedin?: Prisma.SortOrder;
    role?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    verificationStatus?: Prisma.SortOrder;
    profileCompletion?: Prisma.SortOrder;
    preferredCurrency?: Prisma.SortOrder;
    stripeAccountId?: Prisma.SortOrder;
    stripeOnboardingDone?: Prisma.SortOrder;
    lastLoginAt?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type UserMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    username?: Prisma.SortOrder;
    email?: Prisma.SortOrder;
    emailVerified?: Prisma.SortOrder;
    image?: Prisma.SortOrder;
    coverImage?: Prisma.SortOrder;
    bio?: Prisma.SortOrder;
    location?: Prisma.SortOrder;
    timezone?: Prisma.SortOrder;
    website?: Prisma.SortOrder;
    github?: Prisma.SortOrder;
    linkedin?: Prisma.SortOrder;
    role?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    verificationStatus?: Prisma.SortOrder;
    profileCompletion?: Prisma.SortOrder;
    preferredCurrency?: Prisma.SortOrder;
    stripeAccountId?: Prisma.SortOrder;
    stripeOnboardingDone?: Prisma.SortOrder;
    lastLoginAt?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type UserSumOrderByAggregateInput = {
    profileCompletion?: Prisma.SortOrder;
};
export type UserScalarRelationFilter = {
    is?: Prisma.UserWhereInput;
    isNot?: Prisma.UserWhereInput;
};
export type UserNullableScalarRelationFilter = {
    is?: Prisma.UserWhereInput | null;
    isNot?: Prisma.UserWhereInput | null;
};
export type UserCreateskillsInput = {
    set: string[];
};
export type UserCreatelanguagesInput = {
    set: string[];
};
export type StringFieldUpdateOperationsInput = {
    set?: string;
};
export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null;
};
export type BoolFieldUpdateOperationsInput = {
    set?: boolean;
};
export type UserUpdateskillsInput = {
    set?: string[];
    push?: string | string[];
};
export type UserUpdatelanguagesInput = {
    set?: string[];
    push?: string | string[];
};
export type IntFieldUpdateOperationsInput = {
    set?: number;
    increment?: number;
    decrement?: number;
    multiply?: number;
    divide?: number;
};
export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null;
};
export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string;
};
export type UserCreateNestedOneWithoutAccountsInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutAccountsInput, Prisma.UserUncheckedCreateWithoutAccountsInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutAccountsInput;
    connect?: Prisma.UserWhereUniqueInput;
};
export type UserUpdateOneRequiredWithoutAccountsNestedInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutAccountsInput, Prisma.UserUncheckedCreateWithoutAccountsInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutAccountsInput;
    upsert?: Prisma.UserUpsertWithoutAccountsInput;
    connect?: Prisma.UserWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.UserUpdateToOneWithWhereWithoutAccountsInput, Prisma.UserUpdateWithoutAccountsInput>, Prisma.UserUncheckedUpdateWithoutAccountsInput>;
};
export type UserCreateNestedOneWithoutSessionsInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutSessionsInput, Prisma.UserUncheckedCreateWithoutSessionsInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutSessionsInput;
    connect?: Prisma.UserWhereUniqueInput;
};
export type UserUpdateOneRequiredWithoutSessionsNestedInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutSessionsInput, Prisma.UserUncheckedCreateWithoutSessionsInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutSessionsInput;
    upsert?: Prisma.UserUpsertWithoutSessionsInput;
    connect?: Prisma.UserWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.UserUpdateToOneWithWhereWithoutSessionsInput, Prisma.UserUpdateWithoutSessionsInput>, Prisma.UserUncheckedUpdateWithoutSessionsInput>;
};
export type UserCreateNestedOneWithoutProfileInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutProfileInput, Prisma.UserUncheckedCreateWithoutProfileInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutProfileInput;
    connect?: Prisma.UserWhereUniqueInput;
};
export type UserUpdateOneRequiredWithoutProfileNestedInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutProfileInput, Prisma.UserUncheckedCreateWithoutProfileInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutProfileInput;
    upsert?: Prisma.UserUpsertWithoutProfileInput;
    connect?: Prisma.UserWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.UserUpdateToOneWithWhereWithoutProfileInput, Prisma.UserUpdateWithoutProfileInput>, Prisma.UserUncheckedUpdateWithoutProfileInput>;
};
export type UserCreateNestedOneWithoutFreelancerProfileInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutFreelancerProfileInput, Prisma.UserUncheckedCreateWithoutFreelancerProfileInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutFreelancerProfileInput;
    connect?: Prisma.UserWhereUniqueInput;
};
export type UserUpdateOneRequiredWithoutFreelancerProfileNestedInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutFreelancerProfileInput, Prisma.UserUncheckedCreateWithoutFreelancerProfileInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutFreelancerProfileInput;
    upsert?: Prisma.UserUpsertWithoutFreelancerProfileInput;
    connect?: Prisma.UserWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.UserUpdateToOneWithWhereWithoutFreelancerProfileInput, Prisma.UserUpdateWithoutFreelancerProfileInput>, Prisma.UserUncheckedUpdateWithoutFreelancerProfileInput>;
};
export type UserCreateNestedOneWithoutBuyerProfileInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutBuyerProfileInput, Prisma.UserUncheckedCreateWithoutBuyerProfileInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutBuyerProfileInput;
    connect?: Prisma.UserWhereUniqueInput;
};
export type UserUpdateOneRequiredWithoutBuyerProfileNestedInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutBuyerProfileInput, Prisma.UserUncheckedCreateWithoutBuyerProfileInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutBuyerProfileInput;
    upsert?: Prisma.UserUpsertWithoutBuyerProfileInput;
    connect?: Prisma.UserWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.UserUpdateToOneWithWhereWithoutBuyerProfileInput, Prisma.UserUpdateWithoutBuyerProfileInput>, Prisma.UserUncheckedUpdateWithoutBuyerProfileInput>;
};
export type UserCreateNestedOneWithoutServicesInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutServicesInput, Prisma.UserUncheckedCreateWithoutServicesInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutServicesInput;
    connect?: Prisma.UserWhereUniqueInput;
};
export type UserUpdateOneRequiredWithoutServicesNestedInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutServicesInput, Prisma.UserUncheckedCreateWithoutServicesInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutServicesInput;
    upsert?: Prisma.UserUpsertWithoutServicesInput;
    connect?: Prisma.UserWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.UserUpdateToOneWithWhereWithoutServicesInput, Prisma.UserUpdateWithoutServicesInput>, Prisma.UserUncheckedUpdateWithoutServicesInput>;
};
export type UserCreateNestedOneWithoutPortfolioItemsInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutPortfolioItemsInput, Prisma.UserUncheckedCreateWithoutPortfolioItemsInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutPortfolioItemsInput;
    connect?: Prisma.UserWhereUniqueInput;
};
export type UserUpdateOneRequiredWithoutPortfolioItemsNestedInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutPortfolioItemsInput, Prisma.UserUncheckedCreateWithoutPortfolioItemsInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutPortfolioItemsInput;
    upsert?: Prisma.UserUpsertWithoutPortfolioItemsInput;
    connect?: Prisma.UserWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.UserUpdateToOneWithWhereWithoutPortfolioItemsInput, Prisma.UserUpdateWithoutPortfolioItemsInput>, Prisma.UserUncheckedUpdateWithoutPortfolioItemsInput>;
};
export type UserCreateNestedOneWithoutOrdersAsBuyerInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutOrdersAsBuyerInput, Prisma.UserUncheckedCreateWithoutOrdersAsBuyerInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutOrdersAsBuyerInput;
    connect?: Prisma.UserWhereUniqueInput;
};
export type UserCreateNestedOneWithoutOrdersAsFreelancerInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutOrdersAsFreelancerInput, Prisma.UserUncheckedCreateWithoutOrdersAsFreelancerInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutOrdersAsFreelancerInput;
    connect?: Prisma.UserWhereUniqueInput;
};
export type UserUpdateOneRequiredWithoutOrdersAsBuyerNestedInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutOrdersAsBuyerInput, Prisma.UserUncheckedCreateWithoutOrdersAsBuyerInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutOrdersAsBuyerInput;
    upsert?: Prisma.UserUpsertWithoutOrdersAsBuyerInput;
    connect?: Prisma.UserWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.UserUpdateToOneWithWhereWithoutOrdersAsBuyerInput, Prisma.UserUpdateWithoutOrdersAsBuyerInput>, Prisma.UserUncheckedUpdateWithoutOrdersAsBuyerInput>;
};
export type UserUpdateOneRequiredWithoutOrdersAsFreelancerNestedInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutOrdersAsFreelancerInput, Prisma.UserUncheckedCreateWithoutOrdersAsFreelancerInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutOrdersAsFreelancerInput;
    upsert?: Prisma.UserUpsertWithoutOrdersAsFreelancerInput;
    connect?: Prisma.UserWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.UserUpdateToOneWithWhereWithoutOrdersAsFreelancerInput, Prisma.UserUpdateWithoutOrdersAsFreelancerInput>, Prisma.UserUncheckedUpdateWithoutOrdersAsFreelancerInput>;
};
export type UserCreateNestedOneWithoutReviewsWrittenInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutReviewsWrittenInput, Prisma.UserUncheckedCreateWithoutReviewsWrittenInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutReviewsWrittenInput;
    connect?: Prisma.UserWhereUniqueInput;
};
export type UserCreateNestedOneWithoutReviewsReceivedInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutReviewsReceivedInput, Prisma.UserUncheckedCreateWithoutReviewsReceivedInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutReviewsReceivedInput;
    connect?: Prisma.UserWhereUniqueInput;
};
export type UserUpdateOneRequiredWithoutReviewsWrittenNestedInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutReviewsWrittenInput, Prisma.UserUncheckedCreateWithoutReviewsWrittenInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutReviewsWrittenInput;
    upsert?: Prisma.UserUpsertWithoutReviewsWrittenInput;
    connect?: Prisma.UserWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.UserUpdateToOneWithWhereWithoutReviewsWrittenInput, Prisma.UserUpdateWithoutReviewsWrittenInput>, Prisma.UserUncheckedUpdateWithoutReviewsWrittenInput>;
};
export type UserUpdateOneRequiredWithoutReviewsReceivedNestedInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutReviewsReceivedInput, Prisma.UserUncheckedCreateWithoutReviewsReceivedInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutReviewsReceivedInput;
    upsert?: Prisma.UserUpsertWithoutReviewsReceivedInput;
    connect?: Prisma.UserWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.UserUpdateToOneWithWhereWithoutReviewsReceivedInput, Prisma.UserUpdateWithoutReviewsReceivedInput>, Prisma.UserUncheckedUpdateWithoutReviewsReceivedInput>;
};
export type UserCreateNestedOneWithoutFavoritesInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutFavoritesInput, Prisma.UserUncheckedCreateWithoutFavoritesInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutFavoritesInput;
    connect?: Prisma.UserWhereUniqueInput;
};
export type UserUpdateOneRequiredWithoutFavoritesNestedInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutFavoritesInput, Prisma.UserUncheckedCreateWithoutFavoritesInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutFavoritesInput;
    upsert?: Prisma.UserUpsertWithoutFavoritesInput;
    connect?: Prisma.UserWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.UserUpdateToOneWithWhereWithoutFavoritesInput, Prisma.UserUpdateWithoutFavoritesInput>, Prisma.UserUncheckedUpdateWithoutFavoritesInput>;
};
export type UserCreateNestedOneWithoutCartInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutCartInput, Prisma.UserUncheckedCreateWithoutCartInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutCartInput;
    connect?: Prisma.UserWhereUniqueInput;
};
export type UserUpdateOneRequiredWithoutCartNestedInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutCartInput, Prisma.UserUncheckedCreateWithoutCartInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutCartInput;
    upsert?: Prisma.UserUpsertWithoutCartInput;
    connect?: Prisma.UserWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.UserUpdateToOneWithWhereWithoutCartInput, Prisma.UserUpdateWithoutCartInput>, Prisma.UserUncheckedUpdateWithoutCartInput>;
};
export type UserCreateNestedOneWithoutConversationPartsInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutConversationPartsInput, Prisma.UserUncheckedCreateWithoutConversationPartsInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutConversationPartsInput;
    connect?: Prisma.UserWhereUniqueInput;
};
export type UserUpdateOneRequiredWithoutConversationPartsNestedInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutConversationPartsInput, Prisma.UserUncheckedCreateWithoutConversationPartsInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutConversationPartsInput;
    upsert?: Prisma.UserUpsertWithoutConversationPartsInput;
    connect?: Prisma.UserWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.UserUpdateToOneWithWhereWithoutConversationPartsInput, Prisma.UserUpdateWithoutConversationPartsInput>, Prisma.UserUncheckedUpdateWithoutConversationPartsInput>;
};
export type UserCreateNestedOneWithoutMessagesInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutMessagesInput, Prisma.UserUncheckedCreateWithoutMessagesInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutMessagesInput;
    connect?: Prisma.UserWhereUniqueInput;
};
export type UserUpdateOneRequiredWithoutMessagesNestedInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutMessagesInput, Prisma.UserUncheckedCreateWithoutMessagesInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutMessagesInput;
    upsert?: Prisma.UserUpsertWithoutMessagesInput;
    connect?: Prisma.UserWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.UserUpdateToOneWithWhereWithoutMessagesInput, Prisma.UserUpdateWithoutMessagesInput>, Prisma.UserUncheckedUpdateWithoutMessagesInput>;
};
export type UserCreateNestedOneWithoutNotificationsInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutNotificationsInput, Prisma.UserUncheckedCreateWithoutNotificationsInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutNotificationsInput;
    connect?: Prisma.UserWhereUniqueInput;
};
export type UserUpdateOneRequiredWithoutNotificationsNestedInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutNotificationsInput, Prisma.UserUncheckedCreateWithoutNotificationsInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutNotificationsInput;
    upsert?: Prisma.UserUpsertWithoutNotificationsInput;
    connect?: Prisma.UserWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.UserUpdateToOneWithWhereWithoutNotificationsInput, Prisma.UserUpdateWithoutNotificationsInput>, Prisma.UserUncheckedUpdateWithoutNotificationsInput>;
};
export type UserCreateNestedOneWithoutPayoutsInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutPayoutsInput, Prisma.UserUncheckedCreateWithoutPayoutsInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutPayoutsInput;
    connect?: Prisma.UserWhereUniqueInput;
};
export type UserUpdateOneRequiredWithoutPayoutsNestedInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutPayoutsInput, Prisma.UserUncheckedCreateWithoutPayoutsInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutPayoutsInput;
    upsert?: Prisma.UserUpsertWithoutPayoutsInput;
    connect?: Prisma.UserWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.UserUpdateToOneWithWhereWithoutPayoutsInput, Prisma.UserUpdateWithoutPayoutsInput>, Prisma.UserUncheckedUpdateWithoutPayoutsInput>;
};
export type UserCreateNestedOneWithoutDisputesInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutDisputesInput, Prisma.UserUncheckedCreateWithoutDisputesInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutDisputesInput;
    connect?: Prisma.UserWhereUniqueInput;
};
export type UserUpdateOneRequiredWithoutDisputesNestedInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutDisputesInput, Prisma.UserUncheckedCreateWithoutDisputesInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutDisputesInput;
    upsert?: Prisma.UserUpsertWithoutDisputesInput;
    connect?: Prisma.UserWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.UserUpdateToOneWithWhereWithoutDisputesInput, Prisma.UserUpdateWithoutDisputesInput>, Prisma.UserUncheckedUpdateWithoutDisputesInput>;
};
export type UserCreateNestedOneWithoutReportsInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutReportsInput, Prisma.UserUncheckedCreateWithoutReportsInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutReportsInput;
    connect?: Prisma.UserWhereUniqueInput;
};
export type UserUpdateOneRequiredWithoutReportsNestedInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutReportsInput, Prisma.UserUncheckedCreateWithoutReportsInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutReportsInput;
    upsert?: Prisma.UserUpsertWithoutReportsInput;
    connect?: Prisma.UserWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.UserUpdateToOneWithWhereWithoutReportsInput, Prisma.UserUpdateWithoutReportsInput>, Prisma.UserUncheckedUpdateWithoutReportsInput>;
};
export type UserCreateNestedOneWithoutAchievementsInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutAchievementsInput, Prisma.UserUncheckedCreateWithoutAchievementsInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutAchievementsInput;
    connect?: Prisma.UserWhereUniqueInput;
};
export type UserUpdateOneRequiredWithoutAchievementsNestedInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutAchievementsInput, Prisma.UserUncheckedCreateWithoutAchievementsInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutAchievementsInput;
    upsert?: Prisma.UserUpsertWithoutAchievementsInput;
    connect?: Prisma.UserWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.UserUpdateToOneWithWhereWithoutAchievementsInput, Prisma.UserUpdateWithoutAchievementsInput>, Prisma.UserUncheckedUpdateWithoutAchievementsInput>;
};
export type UserCreateNestedOneWithoutXpInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutXpInput, Prisma.UserUncheckedCreateWithoutXpInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutXpInput;
    connect?: Prisma.UserWhereUniqueInput;
};
export type UserUpdateOneRequiredWithoutXpNestedInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutXpInput, Prisma.UserUncheckedCreateWithoutXpInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutXpInput;
    upsert?: Prisma.UserUpsertWithoutXpInput;
    connect?: Prisma.UserWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.UserUpdateToOneWithWhereWithoutXpInput, Prisma.UserUpdateWithoutXpInput>, Prisma.UserUncheckedUpdateWithoutXpInput>;
};
export type UserCreateNestedOneWithoutSearchHistoryInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutSearchHistoryInput, Prisma.UserUncheckedCreateWithoutSearchHistoryInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutSearchHistoryInput;
    connect?: Prisma.UserWhereUniqueInput;
};
export type UserUpdateOneRequiredWithoutSearchHistoryNestedInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutSearchHistoryInput, Prisma.UserUncheckedCreateWithoutSearchHistoryInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutSearchHistoryInput;
    upsert?: Prisma.UserUpsertWithoutSearchHistoryInput;
    connect?: Prisma.UserWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.UserUpdateToOneWithWhereWithoutSearchHistoryInput, Prisma.UserUpdateWithoutSearchHistoryInput>, Prisma.UserUncheckedUpdateWithoutSearchHistoryInput>;
};
export type UserCreateNestedOneWithoutUserRolesInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutUserRolesInput, Prisma.UserUncheckedCreateWithoutUserRolesInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutUserRolesInput;
    connect?: Prisma.UserWhereUniqueInput;
};
export type UserUpdateOneRequiredWithoutUserRolesNestedInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutUserRolesInput, Prisma.UserUncheckedCreateWithoutUserRolesInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutUserRolesInput;
    upsert?: Prisma.UserUpsertWithoutUserRolesInput;
    connect?: Prisma.UserWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.UserUpdateToOneWithWhereWithoutUserRolesInput, Prisma.UserUpdateWithoutUserRolesInput>, Prisma.UserUncheckedUpdateWithoutUserRolesInput>;
};
export type UserCreateNestedOneWithoutProductsInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutProductsInput, Prisma.UserUncheckedCreateWithoutProductsInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutProductsInput;
    connect?: Prisma.UserWhereUniqueInput;
};
export type UserUpdateOneRequiredWithoutProductsNestedInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutProductsInput, Prisma.UserUncheckedCreateWithoutProductsInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutProductsInput;
    upsert?: Prisma.UserUpsertWithoutProductsInput;
    connect?: Prisma.UserWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.UserUpdateToOneWithWhereWithoutProductsInput, Prisma.UserUpdateWithoutProductsInput>, Prisma.UserUncheckedUpdateWithoutProductsInput>;
};
export type UserCreateNestedOneWithoutProductReviewsWrittenInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutProductReviewsWrittenInput, Prisma.UserUncheckedCreateWithoutProductReviewsWrittenInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutProductReviewsWrittenInput;
    connect?: Prisma.UserWhereUniqueInput;
};
export type UserCreateNestedOneWithoutProductReviewsReceivedInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutProductReviewsReceivedInput, Prisma.UserUncheckedCreateWithoutProductReviewsReceivedInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutProductReviewsReceivedInput;
    connect?: Prisma.UserWhereUniqueInput;
};
export type UserUpdateOneRequiredWithoutProductReviewsWrittenNestedInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutProductReviewsWrittenInput, Prisma.UserUncheckedCreateWithoutProductReviewsWrittenInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutProductReviewsWrittenInput;
    upsert?: Prisma.UserUpsertWithoutProductReviewsWrittenInput;
    connect?: Prisma.UserWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.UserUpdateToOneWithWhereWithoutProductReviewsWrittenInput, Prisma.UserUpdateWithoutProductReviewsWrittenInput>, Prisma.UserUncheckedUpdateWithoutProductReviewsWrittenInput>;
};
export type UserUpdateOneRequiredWithoutProductReviewsReceivedNestedInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutProductReviewsReceivedInput, Prisma.UserUncheckedCreateWithoutProductReviewsReceivedInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutProductReviewsReceivedInput;
    upsert?: Prisma.UserUpsertWithoutProductReviewsReceivedInput;
    connect?: Prisma.UserWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.UserUpdateToOneWithWhereWithoutProductReviewsReceivedInput, Prisma.UserUpdateWithoutProductReviewsReceivedInput>, Prisma.UserUncheckedUpdateWithoutProductReviewsReceivedInput>;
};
export type UserCreateNestedOneWithoutCompaniesOwnedInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutCompaniesOwnedInput, Prisma.UserUncheckedCreateWithoutCompaniesOwnedInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutCompaniesOwnedInput;
    connect?: Prisma.UserWhereUniqueInput;
};
export type UserUpdateOneWithoutCompaniesOwnedNestedInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutCompaniesOwnedInput, Prisma.UserUncheckedCreateWithoutCompaniesOwnedInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutCompaniesOwnedInput;
    upsert?: Prisma.UserUpsertWithoutCompaniesOwnedInput;
    disconnect?: Prisma.UserWhereInput | boolean;
    delete?: Prisma.UserWhereInput | boolean;
    connect?: Prisma.UserWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.UserUpdateToOneWithWhereWithoutCompaniesOwnedInput, Prisma.UserUpdateWithoutCompaniesOwnedInput>, Prisma.UserUncheckedUpdateWithoutCompaniesOwnedInput>;
};
export type UserCreateNestedOneWithoutJobsPostedInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutJobsPostedInput, Prisma.UserUncheckedCreateWithoutJobsPostedInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutJobsPostedInput;
    connect?: Prisma.UserWhereUniqueInput;
};
export type UserUpdateOneWithoutJobsPostedNestedInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutJobsPostedInput, Prisma.UserUncheckedCreateWithoutJobsPostedInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutJobsPostedInput;
    upsert?: Prisma.UserUpsertWithoutJobsPostedInput;
    disconnect?: Prisma.UserWhereInput | boolean;
    delete?: Prisma.UserWhereInput | boolean;
    connect?: Prisma.UserWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.UserUpdateToOneWithWhereWithoutJobsPostedInput, Prisma.UserUpdateWithoutJobsPostedInput>, Prisma.UserUncheckedUpdateWithoutJobsPostedInput>;
};
export type UserCreateNestedOneWithoutJobApplicationsInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutJobApplicationsInput, Prisma.UserUncheckedCreateWithoutJobApplicationsInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutJobApplicationsInput;
    connect?: Prisma.UserWhereUniqueInput;
};
export type UserUpdateOneRequiredWithoutJobApplicationsNestedInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutJobApplicationsInput, Prisma.UserUncheckedCreateWithoutJobApplicationsInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutJobApplicationsInput;
    upsert?: Prisma.UserUpsertWithoutJobApplicationsInput;
    connect?: Prisma.UserWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.UserUpdateToOneWithWhereWithoutJobApplicationsInput, Prisma.UserUpdateWithoutJobApplicationsInput>, Prisma.UserUncheckedUpdateWithoutJobApplicationsInput>;
};
export type UserCreateNestedOneWithoutResumesInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutResumesInput, Prisma.UserUncheckedCreateWithoutResumesInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutResumesInput;
    connect?: Prisma.UserWhereUniqueInput;
};
export type UserUpdateOneRequiredWithoutResumesNestedInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutResumesInput, Prisma.UserUncheckedCreateWithoutResumesInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutResumesInput;
    upsert?: Prisma.UserUpsertWithoutResumesInput;
    connect?: Prisma.UserWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.UserUpdateToOneWithWhereWithoutResumesInput, Prisma.UserUpdateWithoutResumesInput>, Prisma.UserUncheckedUpdateWithoutResumesInput>;
};
export type UserCreateNestedOneWithoutBooksAuthoredInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutBooksAuthoredInput, Prisma.UserUncheckedCreateWithoutBooksAuthoredInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutBooksAuthoredInput;
    connect?: Prisma.UserWhereUniqueInput;
};
export type UserUpdateOneWithoutBooksAuthoredNestedInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutBooksAuthoredInput, Prisma.UserUncheckedCreateWithoutBooksAuthoredInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutBooksAuthoredInput;
    upsert?: Prisma.UserUpsertWithoutBooksAuthoredInput;
    disconnect?: Prisma.UserWhereInput | boolean;
    delete?: Prisma.UserWhereInput | boolean;
    connect?: Prisma.UserWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.UserUpdateToOneWithWhereWithoutBooksAuthoredInput, Prisma.UserUpdateWithoutBooksAuthoredInput>, Prisma.UserUncheckedUpdateWithoutBooksAuthoredInput>;
};
export type UserCreateNestedOneWithoutBookPurchasesInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutBookPurchasesInput, Prisma.UserUncheckedCreateWithoutBookPurchasesInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutBookPurchasesInput;
    connect?: Prisma.UserWhereUniqueInput;
};
export type UserUpdateOneRequiredWithoutBookPurchasesNestedInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutBookPurchasesInput, Prisma.UserUncheckedCreateWithoutBookPurchasesInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutBookPurchasesInput;
    upsert?: Prisma.UserUpsertWithoutBookPurchasesInput;
    connect?: Prisma.UserWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.UserUpdateToOneWithWhereWithoutBookPurchasesInput, Prisma.UserUpdateWithoutBookPurchasesInput>, Prisma.UserUncheckedUpdateWithoutBookPurchasesInput>;
};
export type UserCreateNestedOneWithoutBookReviewsInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutBookReviewsInput, Prisma.UserUncheckedCreateWithoutBookReviewsInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutBookReviewsInput;
    connect?: Prisma.UserWhereUniqueInput;
};
export type UserUpdateOneRequiredWithoutBookReviewsNestedInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutBookReviewsInput, Prisma.UserUncheckedCreateWithoutBookReviewsInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutBookReviewsInput;
    upsert?: Prisma.UserUpsertWithoutBookReviewsInput;
    connect?: Prisma.UserWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.UserUpdateToOneWithWhereWithoutBookReviewsInput, Prisma.UserUpdateWithoutBookReviewsInput>, Prisma.UserUncheckedUpdateWithoutBookReviewsInput>;
};
export type UserCreateNestedOneWithoutResourcesCreatedInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutResourcesCreatedInput, Prisma.UserUncheckedCreateWithoutResourcesCreatedInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutResourcesCreatedInput;
    connect?: Prisma.UserWhereUniqueInput;
};
export type UserUpdateOneWithoutResourcesCreatedNestedInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutResourcesCreatedInput, Prisma.UserUncheckedCreateWithoutResourcesCreatedInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutResourcesCreatedInput;
    upsert?: Prisma.UserUpsertWithoutResourcesCreatedInput;
    disconnect?: Prisma.UserWhereInput | boolean;
    delete?: Prisma.UserWhereInput | boolean;
    connect?: Prisma.UserWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.UserUpdateToOneWithWhereWithoutResourcesCreatedInput, Prisma.UserUpdateWithoutResourcesCreatedInput>, Prisma.UserUncheckedUpdateWithoutResourcesCreatedInput>;
};
export type UserCreateNestedOneWithoutPortfolioProjectsInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutPortfolioProjectsInput, Prisma.UserUncheckedCreateWithoutPortfolioProjectsInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutPortfolioProjectsInput;
    connect?: Prisma.UserWhereUniqueInput;
};
export type UserUpdateOneRequiredWithoutPortfolioProjectsNestedInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutPortfolioProjectsInput, Prisma.UserUncheckedCreateWithoutPortfolioProjectsInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutPortfolioProjectsInput;
    upsert?: Prisma.UserUpsertWithoutPortfolioProjectsInput;
    connect?: Prisma.UserWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.UserUpdateToOneWithWhereWithoutPortfolioProjectsInput, Prisma.UserUpdateWithoutPortfolioProjectsInput>, Prisma.UserUncheckedUpdateWithoutPortfolioProjectsInput>;
};
export type UserCreateNestedOneWithoutCompanyEmployeesInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutCompanyEmployeesInput, Prisma.UserUncheckedCreateWithoutCompanyEmployeesInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutCompanyEmployeesInput;
    connect?: Prisma.UserWhereUniqueInput;
};
export type UserUpdateOneWithoutCompanyEmployeesNestedInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutCompanyEmployeesInput, Prisma.UserUncheckedCreateWithoutCompanyEmployeesInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutCompanyEmployeesInput;
    upsert?: Prisma.UserUpsertWithoutCompanyEmployeesInput;
    disconnect?: Prisma.UserWhereInput | boolean;
    delete?: Prisma.UserWhereInput | boolean;
    connect?: Prisma.UserWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.UserUpdateToOneWithWhereWithoutCompanyEmployeesInput, Prisma.UserUpdateWithoutCompanyEmployeesInput>, Prisma.UserUncheckedUpdateWithoutCompanyEmployeesInput>;
};
export type UserCreateNestedOneWithoutAiConversationsInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutAiConversationsInput, Prisma.UserUncheckedCreateWithoutAiConversationsInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutAiConversationsInput;
    connect?: Prisma.UserWhereUniqueInput;
};
export type UserUpdateOneRequiredWithoutAiConversationsNestedInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutAiConversationsInput, Prisma.UserUncheckedCreateWithoutAiConversationsInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutAiConversationsInput;
    upsert?: Prisma.UserUpsertWithoutAiConversationsInput;
    connect?: Prisma.UserWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.UserUpdateToOneWithWhereWithoutAiConversationsInput, Prisma.UserUpdateWithoutAiConversationsInput>, Prisma.UserUncheckedUpdateWithoutAiConversationsInput>;
};
export type UserCreateWithoutAccountsInput = {
    id?: string;
    name: string;
    username?: string | null;
    email: string;
    emailVerified?: boolean;
    image?: string | null;
    coverImage?: string | null;
    bio?: string | null;
    location?: string | null;
    skills?: Prisma.UserCreateskillsInput | string[];
    languages?: Prisma.UserCreatelanguagesInput | string[];
    timezone?: string | null;
    website?: string | null;
    github?: string | null;
    linkedin?: string | null;
    role?: string;
    status?: string;
    verificationStatus?: string;
    profileCompletion?: number;
    preferredCurrency?: string;
    stripeAccountId?: string | null;
    stripeOnboardingDone?: boolean;
    lastLoginAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    sessions?: Prisma.SessionCreateNestedManyWithoutUserInput;
    profile?: Prisma.ProfileCreateNestedOneWithoutUserInput;
    freelancerProfile?: Prisma.FreelancerProfileCreateNestedOneWithoutUserInput;
    buyerProfile?: Prisma.BuyerProfileCreateNestedOneWithoutUserInput;
    portfolioItems?: Prisma.PortfolioCreateNestedManyWithoutUserInput;
    services?: Prisma.ServiceCreateNestedManyWithoutUserInput;
    ordersAsBuyer?: Prisma.OrderCreateNestedManyWithoutBuyerInput;
    ordersAsFreelancer?: Prisma.OrderCreateNestedManyWithoutFreelancerInput;
    reviewsWritten?: Prisma.ReviewCreateNestedManyWithoutReviewerInput;
    reviewsReceived?: Prisma.ReviewCreateNestedManyWithoutRevieweeInput;
    favorites?: Prisma.FavoriteCreateNestedManyWithoutUserInput;
    cart?: Prisma.CartCreateNestedOneWithoutUserInput;
    conversationParts?: Prisma.ConversationParticipantCreateNestedManyWithoutUserInput;
    messages?: Prisma.MessageCreateNestedManyWithoutSenderInput;
    notifications?: Prisma.NotificationCreateNestedManyWithoutUserInput;
    payouts?: Prisma.PayoutCreateNestedManyWithoutFreelancerInput;
    disputes?: Prisma.DisputeCreateNestedManyWithoutOpenerInput;
    reports?: Prisma.ReportCreateNestedManyWithoutReporterInput;
    achievements?: Prisma.UserAchievementCreateNestedManyWithoutUserInput;
    xp?: Prisma.UserXPCreateNestedOneWithoutUserInput;
    searchHistory?: Prisma.SearchHistoryCreateNestedManyWithoutUserInput;
    userRoles?: Prisma.UserRoleCreateNestedManyWithoutUserInput;
    companiesOwned?: Prisma.CompanyCreateNestedManyWithoutOwnerInput;
    companyEmployees?: Prisma.EmployeeCreateNestedManyWithoutUserInput;
    jobsPosted?: Prisma.JobCreateNestedManyWithoutPostedByInput;
    resumes?: Prisma.ResumeCreateNestedManyWithoutUserInput;
    jobApplications?: Prisma.JobApplicationCreateNestedManyWithoutApplicantInput;
    products?: Prisma.ProductCreateNestedManyWithoutSellerInput;
    productReviewsWritten?: Prisma.ProductReviewCreateNestedManyWithoutReviewerInput;
    productReviewsReceived?: Prisma.ProductReviewCreateNestedManyWithoutRevieweeInput;
    booksAuthored?: Prisma.BookCreateNestedManyWithoutAuthorUserInput;
    bookPurchases?: Prisma.BookPurchaseCreateNestedManyWithoutUserInput;
    bookReviews?: Prisma.BookReviewCreateNestedManyWithoutUserInput;
    resourcesCreated?: Prisma.ResourceCreateNestedManyWithoutAuthorInput;
    portfolioProjects?: Prisma.PortfolioProjectCreateNestedManyWithoutUserInput;
    aiConversations?: Prisma.AIConversationCreateNestedManyWithoutUserInput;
};
export type UserUncheckedCreateWithoutAccountsInput = {
    id?: string;
    name: string;
    username?: string | null;
    email: string;
    emailVerified?: boolean;
    image?: string | null;
    coverImage?: string | null;
    bio?: string | null;
    location?: string | null;
    skills?: Prisma.UserCreateskillsInput | string[];
    languages?: Prisma.UserCreatelanguagesInput | string[];
    timezone?: string | null;
    website?: string | null;
    github?: string | null;
    linkedin?: string | null;
    role?: string;
    status?: string;
    verificationStatus?: string;
    profileCompletion?: number;
    preferredCurrency?: string;
    stripeAccountId?: string | null;
    stripeOnboardingDone?: boolean;
    lastLoginAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    sessions?: Prisma.SessionUncheckedCreateNestedManyWithoutUserInput;
    profile?: Prisma.ProfileUncheckedCreateNestedOneWithoutUserInput;
    freelancerProfile?: Prisma.FreelancerProfileUncheckedCreateNestedOneWithoutUserInput;
    buyerProfile?: Prisma.BuyerProfileUncheckedCreateNestedOneWithoutUserInput;
    portfolioItems?: Prisma.PortfolioUncheckedCreateNestedManyWithoutUserInput;
    services?: Prisma.ServiceUncheckedCreateNestedManyWithoutUserInput;
    ordersAsBuyer?: Prisma.OrderUncheckedCreateNestedManyWithoutBuyerInput;
    ordersAsFreelancer?: Prisma.OrderUncheckedCreateNestedManyWithoutFreelancerInput;
    reviewsWritten?: Prisma.ReviewUncheckedCreateNestedManyWithoutReviewerInput;
    reviewsReceived?: Prisma.ReviewUncheckedCreateNestedManyWithoutRevieweeInput;
    favorites?: Prisma.FavoriteUncheckedCreateNestedManyWithoutUserInput;
    cart?: Prisma.CartUncheckedCreateNestedOneWithoutUserInput;
    conversationParts?: Prisma.ConversationParticipantUncheckedCreateNestedManyWithoutUserInput;
    messages?: Prisma.MessageUncheckedCreateNestedManyWithoutSenderInput;
    notifications?: Prisma.NotificationUncheckedCreateNestedManyWithoutUserInput;
    payouts?: Prisma.PayoutUncheckedCreateNestedManyWithoutFreelancerInput;
    disputes?: Prisma.DisputeUncheckedCreateNestedManyWithoutOpenerInput;
    reports?: Prisma.ReportUncheckedCreateNestedManyWithoutReporterInput;
    achievements?: Prisma.UserAchievementUncheckedCreateNestedManyWithoutUserInput;
    xp?: Prisma.UserXPUncheckedCreateNestedOneWithoutUserInput;
    searchHistory?: Prisma.SearchHistoryUncheckedCreateNestedManyWithoutUserInput;
    userRoles?: Prisma.UserRoleUncheckedCreateNestedManyWithoutUserInput;
    companiesOwned?: Prisma.CompanyUncheckedCreateNestedManyWithoutOwnerInput;
    companyEmployees?: Prisma.EmployeeUncheckedCreateNestedManyWithoutUserInput;
    jobsPosted?: Prisma.JobUncheckedCreateNestedManyWithoutPostedByInput;
    resumes?: Prisma.ResumeUncheckedCreateNestedManyWithoutUserInput;
    jobApplications?: Prisma.JobApplicationUncheckedCreateNestedManyWithoutApplicantInput;
    products?: Prisma.ProductUncheckedCreateNestedManyWithoutSellerInput;
    productReviewsWritten?: Prisma.ProductReviewUncheckedCreateNestedManyWithoutReviewerInput;
    productReviewsReceived?: Prisma.ProductReviewUncheckedCreateNestedManyWithoutRevieweeInput;
    booksAuthored?: Prisma.BookUncheckedCreateNestedManyWithoutAuthorUserInput;
    bookPurchases?: Prisma.BookPurchaseUncheckedCreateNestedManyWithoutUserInput;
    bookReviews?: Prisma.BookReviewUncheckedCreateNestedManyWithoutUserInput;
    resourcesCreated?: Prisma.ResourceUncheckedCreateNestedManyWithoutAuthorInput;
    portfolioProjects?: Prisma.PortfolioProjectUncheckedCreateNestedManyWithoutUserInput;
    aiConversations?: Prisma.AIConversationUncheckedCreateNestedManyWithoutUserInput;
};
export type UserCreateOrConnectWithoutAccountsInput = {
    where: Prisma.UserWhereUniqueInput;
    create: Prisma.XOR<Prisma.UserCreateWithoutAccountsInput, Prisma.UserUncheckedCreateWithoutAccountsInput>;
};
export type UserUpsertWithoutAccountsInput = {
    update: Prisma.XOR<Prisma.UserUpdateWithoutAccountsInput, Prisma.UserUncheckedUpdateWithoutAccountsInput>;
    create: Prisma.XOR<Prisma.UserCreateWithoutAccountsInput, Prisma.UserUncheckedCreateWithoutAccountsInput>;
    where?: Prisma.UserWhereInput;
};
export type UserUpdateToOneWithWhereWithoutAccountsInput = {
    where?: Prisma.UserWhereInput;
    data: Prisma.XOR<Prisma.UserUpdateWithoutAccountsInput, Prisma.UserUncheckedUpdateWithoutAccountsInput>;
};
export type UserUpdateWithoutAccountsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    username?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    emailVerified?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    image?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    coverImage?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    bio?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    location?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    skills?: Prisma.UserUpdateskillsInput | string[];
    languages?: Prisma.UserUpdatelanguagesInput | string[];
    timezone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    website?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    github?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    linkedin?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    role?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    verificationStatus?: Prisma.StringFieldUpdateOperationsInput | string;
    profileCompletion?: Prisma.IntFieldUpdateOperationsInput | number;
    preferredCurrency?: Prisma.StringFieldUpdateOperationsInput | string;
    stripeAccountId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    stripeOnboardingDone?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    lastLoginAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    sessions?: Prisma.SessionUpdateManyWithoutUserNestedInput;
    profile?: Prisma.ProfileUpdateOneWithoutUserNestedInput;
    freelancerProfile?: Prisma.FreelancerProfileUpdateOneWithoutUserNestedInput;
    buyerProfile?: Prisma.BuyerProfileUpdateOneWithoutUserNestedInput;
    portfolioItems?: Prisma.PortfolioUpdateManyWithoutUserNestedInput;
    services?: Prisma.ServiceUpdateManyWithoutUserNestedInput;
    ordersAsBuyer?: Prisma.OrderUpdateManyWithoutBuyerNestedInput;
    ordersAsFreelancer?: Prisma.OrderUpdateManyWithoutFreelancerNestedInput;
    reviewsWritten?: Prisma.ReviewUpdateManyWithoutReviewerNestedInput;
    reviewsReceived?: Prisma.ReviewUpdateManyWithoutRevieweeNestedInput;
    favorites?: Prisma.FavoriteUpdateManyWithoutUserNestedInput;
    cart?: Prisma.CartUpdateOneWithoutUserNestedInput;
    conversationParts?: Prisma.ConversationParticipantUpdateManyWithoutUserNestedInput;
    messages?: Prisma.MessageUpdateManyWithoutSenderNestedInput;
    notifications?: Prisma.NotificationUpdateManyWithoutUserNestedInput;
    payouts?: Prisma.PayoutUpdateManyWithoutFreelancerNestedInput;
    disputes?: Prisma.DisputeUpdateManyWithoutOpenerNestedInput;
    reports?: Prisma.ReportUpdateManyWithoutReporterNestedInput;
    achievements?: Prisma.UserAchievementUpdateManyWithoutUserNestedInput;
    xp?: Prisma.UserXPUpdateOneWithoutUserNestedInput;
    searchHistory?: Prisma.SearchHistoryUpdateManyWithoutUserNestedInput;
    userRoles?: Prisma.UserRoleUpdateManyWithoutUserNestedInput;
    companiesOwned?: Prisma.CompanyUpdateManyWithoutOwnerNestedInput;
    companyEmployees?: Prisma.EmployeeUpdateManyWithoutUserNestedInput;
    jobsPosted?: Prisma.JobUpdateManyWithoutPostedByNestedInput;
    resumes?: Prisma.ResumeUpdateManyWithoutUserNestedInput;
    jobApplications?: Prisma.JobApplicationUpdateManyWithoutApplicantNestedInput;
    products?: Prisma.ProductUpdateManyWithoutSellerNestedInput;
    productReviewsWritten?: Prisma.ProductReviewUpdateManyWithoutReviewerNestedInput;
    productReviewsReceived?: Prisma.ProductReviewUpdateManyWithoutRevieweeNestedInput;
    booksAuthored?: Prisma.BookUpdateManyWithoutAuthorUserNestedInput;
    bookPurchases?: Prisma.BookPurchaseUpdateManyWithoutUserNestedInput;
    bookReviews?: Prisma.BookReviewUpdateManyWithoutUserNestedInput;
    resourcesCreated?: Prisma.ResourceUpdateManyWithoutAuthorNestedInput;
    portfolioProjects?: Prisma.PortfolioProjectUpdateManyWithoutUserNestedInput;
    aiConversations?: Prisma.AIConversationUpdateManyWithoutUserNestedInput;
};
export type UserUncheckedUpdateWithoutAccountsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    username?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    emailVerified?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    image?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    coverImage?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    bio?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    location?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    skills?: Prisma.UserUpdateskillsInput | string[];
    languages?: Prisma.UserUpdatelanguagesInput | string[];
    timezone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    website?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    github?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    linkedin?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    role?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    verificationStatus?: Prisma.StringFieldUpdateOperationsInput | string;
    profileCompletion?: Prisma.IntFieldUpdateOperationsInput | number;
    preferredCurrency?: Prisma.StringFieldUpdateOperationsInput | string;
    stripeAccountId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    stripeOnboardingDone?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    lastLoginAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    sessions?: Prisma.SessionUncheckedUpdateManyWithoutUserNestedInput;
    profile?: Prisma.ProfileUncheckedUpdateOneWithoutUserNestedInput;
    freelancerProfile?: Prisma.FreelancerProfileUncheckedUpdateOneWithoutUserNestedInput;
    buyerProfile?: Prisma.BuyerProfileUncheckedUpdateOneWithoutUserNestedInput;
    portfolioItems?: Prisma.PortfolioUncheckedUpdateManyWithoutUserNestedInput;
    services?: Prisma.ServiceUncheckedUpdateManyWithoutUserNestedInput;
    ordersAsBuyer?: Prisma.OrderUncheckedUpdateManyWithoutBuyerNestedInput;
    ordersAsFreelancer?: Prisma.OrderUncheckedUpdateManyWithoutFreelancerNestedInput;
    reviewsWritten?: Prisma.ReviewUncheckedUpdateManyWithoutReviewerNestedInput;
    reviewsReceived?: Prisma.ReviewUncheckedUpdateManyWithoutRevieweeNestedInput;
    favorites?: Prisma.FavoriteUncheckedUpdateManyWithoutUserNestedInput;
    cart?: Prisma.CartUncheckedUpdateOneWithoutUserNestedInput;
    conversationParts?: Prisma.ConversationParticipantUncheckedUpdateManyWithoutUserNestedInput;
    messages?: Prisma.MessageUncheckedUpdateManyWithoutSenderNestedInput;
    notifications?: Prisma.NotificationUncheckedUpdateManyWithoutUserNestedInput;
    payouts?: Prisma.PayoutUncheckedUpdateManyWithoutFreelancerNestedInput;
    disputes?: Prisma.DisputeUncheckedUpdateManyWithoutOpenerNestedInput;
    reports?: Prisma.ReportUncheckedUpdateManyWithoutReporterNestedInput;
    achievements?: Prisma.UserAchievementUncheckedUpdateManyWithoutUserNestedInput;
    xp?: Prisma.UserXPUncheckedUpdateOneWithoutUserNestedInput;
    searchHistory?: Prisma.SearchHistoryUncheckedUpdateManyWithoutUserNestedInput;
    userRoles?: Prisma.UserRoleUncheckedUpdateManyWithoutUserNestedInput;
    companiesOwned?: Prisma.CompanyUncheckedUpdateManyWithoutOwnerNestedInput;
    companyEmployees?: Prisma.EmployeeUncheckedUpdateManyWithoutUserNestedInput;
    jobsPosted?: Prisma.JobUncheckedUpdateManyWithoutPostedByNestedInput;
    resumes?: Prisma.ResumeUncheckedUpdateManyWithoutUserNestedInput;
    jobApplications?: Prisma.JobApplicationUncheckedUpdateManyWithoutApplicantNestedInput;
    products?: Prisma.ProductUncheckedUpdateManyWithoutSellerNestedInput;
    productReviewsWritten?: Prisma.ProductReviewUncheckedUpdateManyWithoutReviewerNestedInput;
    productReviewsReceived?: Prisma.ProductReviewUncheckedUpdateManyWithoutRevieweeNestedInput;
    booksAuthored?: Prisma.BookUncheckedUpdateManyWithoutAuthorUserNestedInput;
    bookPurchases?: Prisma.BookPurchaseUncheckedUpdateManyWithoutUserNestedInput;
    bookReviews?: Prisma.BookReviewUncheckedUpdateManyWithoutUserNestedInput;
    resourcesCreated?: Prisma.ResourceUncheckedUpdateManyWithoutAuthorNestedInput;
    portfolioProjects?: Prisma.PortfolioProjectUncheckedUpdateManyWithoutUserNestedInput;
    aiConversations?: Prisma.AIConversationUncheckedUpdateManyWithoutUserNestedInput;
};
export type UserCreateWithoutSessionsInput = {
    id?: string;
    name: string;
    username?: string | null;
    email: string;
    emailVerified?: boolean;
    image?: string | null;
    coverImage?: string | null;
    bio?: string | null;
    location?: string | null;
    skills?: Prisma.UserCreateskillsInput | string[];
    languages?: Prisma.UserCreatelanguagesInput | string[];
    timezone?: string | null;
    website?: string | null;
    github?: string | null;
    linkedin?: string | null;
    role?: string;
    status?: string;
    verificationStatus?: string;
    profileCompletion?: number;
    preferredCurrency?: string;
    stripeAccountId?: string | null;
    stripeOnboardingDone?: boolean;
    lastLoginAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    accounts?: Prisma.AccountCreateNestedManyWithoutUserInput;
    profile?: Prisma.ProfileCreateNestedOneWithoutUserInput;
    freelancerProfile?: Prisma.FreelancerProfileCreateNestedOneWithoutUserInput;
    buyerProfile?: Prisma.BuyerProfileCreateNestedOneWithoutUserInput;
    portfolioItems?: Prisma.PortfolioCreateNestedManyWithoutUserInput;
    services?: Prisma.ServiceCreateNestedManyWithoutUserInput;
    ordersAsBuyer?: Prisma.OrderCreateNestedManyWithoutBuyerInput;
    ordersAsFreelancer?: Prisma.OrderCreateNestedManyWithoutFreelancerInput;
    reviewsWritten?: Prisma.ReviewCreateNestedManyWithoutReviewerInput;
    reviewsReceived?: Prisma.ReviewCreateNestedManyWithoutRevieweeInput;
    favorites?: Prisma.FavoriteCreateNestedManyWithoutUserInput;
    cart?: Prisma.CartCreateNestedOneWithoutUserInput;
    conversationParts?: Prisma.ConversationParticipantCreateNestedManyWithoutUserInput;
    messages?: Prisma.MessageCreateNestedManyWithoutSenderInput;
    notifications?: Prisma.NotificationCreateNestedManyWithoutUserInput;
    payouts?: Prisma.PayoutCreateNestedManyWithoutFreelancerInput;
    disputes?: Prisma.DisputeCreateNestedManyWithoutOpenerInput;
    reports?: Prisma.ReportCreateNestedManyWithoutReporterInput;
    achievements?: Prisma.UserAchievementCreateNestedManyWithoutUserInput;
    xp?: Prisma.UserXPCreateNestedOneWithoutUserInput;
    searchHistory?: Prisma.SearchHistoryCreateNestedManyWithoutUserInput;
    userRoles?: Prisma.UserRoleCreateNestedManyWithoutUserInput;
    companiesOwned?: Prisma.CompanyCreateNestedManyWithoutOwnerInput;
    companyEmployees?: Prisma.EmployeeCreateNestedManyWithoutUserInput;
    jobsPosted?: Prisma.JobCreateNestedManyWithoutPostedByInput;
    resumes?: Prisma.ResumeCreateNestedManyWithoutUserInput;
    jobApplications?: Prisma.JobApplicationCreateNestedManyWithoutApplicantInput;
    products?: Prisma.ProductCreateNestedManyWithoutSellerInput;
    productReviewsWritten?: Prisma.ProductReviewCreateNestedManyWithoutReviewerInput;
    productReviewsReceived?: Prisma.ProductReviewCreateNestedManyWithoutRevieweeInput;
    booksAuthored?: Prisma.BookCreateNestedManyWithoutAuthorUserInput;
    bookPurchases?: Prisma.BookPurchaseCreateNestedManyWithoutUserInput;
    bookReviews?: Prisma.BookReviewCreateNestedManyWithoutUserInput;
    resourcesCreated?: Prisma.ResourceCreateNestedManyWithoutAuthorInput;
    portfolioProjects?: Prisma.PortfolioProjectCreateNestedManyWithoutUserInput;
    aiConversations?: Prisma.AIConversationCreateNestedManyWithoutUserInput;
};
export type UserUncheckedCreateWithoutSessionsInput = {
    id?: string;
    name: string;
    username?: string | null;
    email: string;
    emailVerified?: boolean;
    image?: string | null;
    coverImage?: string | null;
    bio?: string | null;
    location?: string | null;
    skills?: Prisma.UserCreateskillsInput | string[];
    languages?: Prisma.UserCreatelanguagesInput | string[];
    timezone?: string | null;
    website?: string | null;
    github?: string | null;
    linkedin?: string | null;
    role?: string;
    status?: string;
    verificationStatus?: string;
    profileCompletion?: number;
    preferredCurrency?: string;
    stripeAccountId?: string | null;
    stripeOnboardingDone?: boolean;
    lastLoginAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    accounts?: Prisma.AccountUncheckedCreateNestedManyWithoutUserInput;
    profile?: Prisma.ProfileUncheckedCreateNestedOneWithoutUserInput;
    freelancerProfile?: Prisma.FreelancerProfileUncheckedCreateNestedOneWithoutUserInput;
    buyerProfile?: Prisma.BuyerProfileUncheckedCreateNestedOneWithoutUserInput;
    portfolioItems?: Prisma.PortfolioUncheckedCreateNestedManyWithoutUserInput;
    services?: Prisma.ServiceUncheckedCreateNestedManyWithoutUserInput;
    ordersAsBuyer?: Prisma.OrderUncheckedCreateNestedManyWithoutBuyerInput;
    ordersAsFreelancer?: Prisma.OrderUncheckedCreateNestedManyWithoutFreelancerInput;
    reviewsWritten?: Prisma.ReviewUncheckedCreateNestedManyWithoutReviewerInput;
    reviewsReceived?: Prisma.ReviewUncheckedCreateNestedManyWithoutRevieweeInput;
    favorites?: Prisma.FavoriteUncheckedCreateNestedManyWithoutUserInput;
    cart?: Prisma.CartUncheckedCreateNestedOneWithoutUserInput;
    conversationParts?: Prisma.ConversationParticipantUncheckedCreateNestedManyWithoutUserInput;
    messages?: Prisma.MessageUncheckedCreateNestedManyWithoutSenderInput;
    notifications?: Prisma.NotificationUncheckedCreateNestedManyWithoutUserInput;
    payouts?: Prisma.PayoutUncheckedCreateNestedManyWithoutFreelancerInput;
    disputes?: Prisma.DisputeUncheckedCreateNestedManyWithoutOpenerInput;
    reports?: Prisma.ReportUncheckedCreateNestedManyWithoutReporterInput;
    achievements?: Prisma.UserAchievementUncheckedCreateNestedManyWithoutUserInput;
    xp?: Prisma.UserXPUncheckedCreateNestedOneWithoutUserInput;
    searchHistory?: Prisma.SearchHistoryUncheckedCreateNestedManyWithoutUserInput;
    userRoles?: Prisma.UserRoleUncheckedCreateNestedManyWithoutUserInput;
    companiesOwned?: Prisma.CompanyUncheckedCreateNestedManyWithoutOwnerInput;
    companyEmployees?: Prisma.EmployeeUncheckedCreateNestedManyWithoutUserInput;
    jobsPosted?: Prisma.JobUncheckedCreateNestedManyWithoutPostedByInput;
    resumes?: Prisma.ResumeUncheckedCreateNestedManyWithoutUserInput;
    jobApplications?: Prisma.JobApplicationUncheckedCreateNestedManyWithoutApplicantInput;
    products?: Prisma.ProductUncheckedCreateNestedManyWithoutSellerInput;
    productReviewsWritten?: Prisma.ProductReviewUncheckedCreateNestedManyWithoutReviewerInput;
    productReviewsReceived?: Prisma.ProductReviewUncheckedCreateNestedManyWithoutRevieweeInput;
    booksAuthored?: Prisma.BookUncheckedCreateNestedManyWithoutAuthorUserInput;
    bookPurchases?: Prisma.BookPurchaseUncheckedCreateNestedManyWithoutUserInput;
    bookReviews?: Prisma.BookReviewUncheckedCreateNestedManyWithoutUserInput;
    resourcesCreated?: Prisma.ResourceUncheckedCreateNestedManyWithoutAuthorInput;
    portfolioProjects?: Prisma.PortfolioProjectUncheckedCreateNestedManyWithoutUserInput;
    aiConversations?: Prisma.AIConversationUncheckedCreateNestedManyWithoutUserInput;
};
export type UserCreateOrConnectWithoutSessionsInput = {
    where: Prisma.UserWhereUniqueInput;
    create: Prisma.XOR<Prisma.UserCreateWithoutSessionsInput, Prisma.UserUncheckedCreateWithoutSessionsInput>;
};
export type UserUpsertWithoutSessionsInput = {
    update: Prisma.XOR<Prisma.UserUpdateWithoutSessionsInput, Prisma.UserUncheckedUpdateWithoutSessionsInput>;
    create: Prisma.XOR<Prisma.UserCreateWithoutSessionsInput, Prisma.UserUncheckedCreateWithoutSessionsInput>;
    where?: Prisma.UserWhereInput;
};
export type UserUpdateToOneWithWhereWithoutSessionsInput = {
    where?: Prisma.UserWhereInput;
    data: Prisma.XOR<Prisma.UserUpdateWithoutSessionsInput, Prisma.UserUncheckedUpdateWithoutSessionsInput>;
};
export type UserUpdateWithoutSessionsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    username?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    emailVerified?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    image?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    coverImage?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    bio?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    location?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    skills?: Prisma.UserUpdateskillsInput | string[];
    languages?: Prisma.UserUpdatelanguagesInput | string[];
    timezone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    website?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    github?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    linkedin?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    role?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    verificationStatus?: Prisma.StringFieldUpdateOperationsInput | string;
    profileCompletion?: Prisma.IntFieldUpdateOperationsInput | number;
    preferredCurrency?: Prisma.StringFieldUpdateOperationsInput | string;
    stripeAccountId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    stripeOnboardingDone?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    lastLoginAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    accounts?: Prisma.AccountUpdateManyWithoutUserNestedInput;
    profile?: Prisma.ProfileUpdateOneWithoutUserNestedInput;
    freelancerProfile?: Prisma.FreelancerProfileUpdateOneWithoutUserNestedInput;
    buyerProfile?: Prisma.BuyerProfileUpdateOneWithoutUserNestedInput;
    portfolioItems?: Prisma.PortfolioUpdateManyWithoutUserNestedInput;
    services?: Prisma.ServiceUpdateManyWithoutUserNestedInput;
    ordersAsBuyer?: Prisma.OrderUpdateManyWithoutBuyerNestedInput;
    ordersAsFreelancer?: Prisma.OrderUpdateManyWithoutFreelancerNestedInput;
    reviewsWritten?: Prisma.ReviewUpdateManyWithoutReviewerNestedInput;
    reviewsReceived?: Prisma.ReviewUpdateManyWithoutRevieweeNestedInput;
    favorites?: Prisma.FavoriteUpdateManyWithoutUserNestedInput;
    cart?: Prisma.CartUpdateOneWithoutUserNestedInput;
    conversationParts?: Prisma.ConversationParticipantUpdateManyWithoutUserNestedInput;
    messages?: Prisma.MessageUpdateManyWithoutSenderNestedInput;
    notifications?: Prisma.NotificationUpdateManyWithoutUserNestedInput;
    payouts?: Prisma.PayoutUpdateManyWithoutFreelancerNestedInput;
    disputes?: Prisma.DisputeUpdateManyWithoutOpenerNestedInput;
    reports?: Prisma.ReportUpdateManyWithoutReporterNestedInput;
    achievements?: Prisma.UserAchievementUpdateManyWithoutUserNestedInput;
    xp?: Prisma.UserXPUpdateOneWithoutUserNestedInput;
    searchHistory?: Prisma.SearchHistoryUpdateManyWithoutUserNestedInput;
    userRoles?: Prisma.UserRoleUpdateManyWithoutUserNestedInput;
    companiesOwned?: Prisma.CompanyUpdateManyWithoutOwnerNestedInput;
    companyEmployees?: Prisma.EmployeeUpdateManyWithoutUserNestedInput;
    jobsPosted?: Prisma.JobUpdateManyWithoutPostedByNestedInput;
    resumes?: Prisma.ResumeUpdateManyWithoutUserNestedInput;
    jobApplications?: Prisma.JobApplicationUpdateManyWithoutApplicantNestedInput;
    products?: Prisma.ProductUpdateManyWithoutSellerNestedInput;
    productReviewsWritten?: Prisma.ProductReviewUpdateManyWithoutReviewerNestedInput;
    productReviewsReceived?: Prisma.ProductReviewUpdateManyWithoutRevieweeNestedInput;
    booksAuthored?: Prisma.BookUpdateManyWithoutAuthorUserNestedInput;
    bookPurchases?: Prisma.BookPurchaseUpdateManyWithoutUserNestedInput;
    bookReviews?: Prisma.BookReviewUpdateManyWithoutUserNestedInput;
    resourcesCreated?: Prisma.ResourceUpdateManyWithoutAuthorNestedInput;
    portfolioProjects?: Prisma.PortfolioProjectUpdateManyWithoutUserNestedInput;
    aiConversations?: Prisma.AIConversationUpdateManyWithoutUserNestedInput;
};
export type UserUncheckedUpdateWithoutSessionsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    username?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    emailVerified?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    image?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    coverImage?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    bio?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    location?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    skills?: Prisma.UserUpdateskillsInput | string[];
    languages?: Prisma.UserUpdatelanguagesInput | string[];
    timezone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    website?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    github?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    linkedin?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    role?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    verificationStatus?: Prisma.StringFieldUpdateOperationsInput | string;
    profileCompletion?: Prisma.IntFieldUpdateOperationsInput | number;
    preferredCurrency?: Prisma.StringFieldUpdateOperationsInput | string;
    stripeAccountId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    stripeOnboardingDone?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    lastLoginAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    accounts?: Prisma.AccountUncheckedUpdateManyWithoutUserNestedInput;
    profile?: Prisma.ProfileUncheckedUpdateOneWithoutUserNestedInput;
    freelancerProfile?: Prisma.FreelancerProfileUncheckedUpdateOneWithoutUserNestedInput;
    buyerProfile?: Prisma.BuyerProfileUncheckedUpdateOneWithoutUserNestedInput;
    portfolioItems?: Prisma.PortfolioUncheckedUpdateManyWithoutUserNestedInput;
    services?: Prisma.ServiceUncheckedUpdateManyWithoutUserNestedInput;
    ordersAsBuyer?: Prisma.OrderUncheckedUpdateManyWithoutBuyerNestedInput;
    ordersAsFreelancer?: Prisma.OrderUncheckedUpdateManyWithoutFreelancerNestedInput;
    reviewsWritten?: Prisma.ReviewUncheckedUpdateManyWithoutReviewerNestedInput;
    reviewsReceived?: Prisma.ReviewUncheckedUpdateManyWithoutRevieweeNestedInput;
    favorites?: Prisma.FavoriteUncheckedUpdateManyWithoutUserNestedInput;
    cart?: Prisma.CartUncheckedUpdateOneWithoutUserNestedInput;
    conversationParts?: Prisma.ConversationParticipantUncheckedUpdateManyWithoutUserNestedInput;
    messages?: Prisma.MessageUncheckedUpdateManyWithoutSenderNestedInput;
    notifications?: Prisma.NotificationUncheckedUpdateManyWithoutUserNestedInput;
    payouts?: Prisma.PayoutUncheckedUpdateManyWithoutFreelancerNestedInput;
    disputes?: Prisma.DisputeUncheckedUpdateManyWithoutOpenerNestedInput;
    reports?: Prisma.ReportUncheckedUpdateManyWithoutReporterNestedInput;
    achievements?: Prisma.UserAchievementUncheckedUpdateManyWithoutUserNestedInput;
    xp?: Prisma.UserXPUncheckedUpdateOneWithoutUserNestedInput;
    searchHistory?: Prisma.SearchHistoryUncheckedUpdateManyWithoutUserNestedInput;
    userRoles?: Prisma.UserRoleUncheckedUpdateManyWithoutUserNestedInput;
    companiesOwned?: Prisma.CompanyUncheckedUpdateManyWithoutOwnerNestedInput;
    companyEmployees?: Prisma.EmployeeUncheckedUpdateManyWithoutUserNestedInput;
    jobsPosted?: Prisma.JobUncheckedUpdateManyWithoutPostedByNestedInput;
    resumes?: Prisma.ResumeUncheckedUpdateManyWithoutUserNestedInput;
    jobApplications?: Prisma.JobApplicationUncheckedUpdateManyWithoutApplicantNestedInput;
    products?: Prisma.ProductUncheckedUpdateManyWithoutSellerNestedInput;
    productReviewsWritten?: Prisma.ProductReviewUncheckedUpdateManyWithoutReviewerNestedInput;
    productReviewsReceived?: Prisma.ProductReviewUncheckedUpdateManyWithoutRevieweeNestedInput;
    booksAuthored?: Prisma.BookUncheckedUpdateManyWithoutAuthorUserNestedInput;
    bookPurchases?: Prisma.BookPurchaseUncheckedUpdateManyWithoutUserNestedInput;
    bookReviews?: Prisma.BookReviewUncheckedUpdateManyWithoutUserNestedInput;
    resourcesCreated?: Prisma.ResourceUncheckedUpdateManyWithoutAuthorNestedInput;
    portfolioProjects?: Prisma.PortfolioProjectUncheckedUpdateManyWithoutUserNestedInput;
    aiConversations?: Prisma.AIConversationUncheckedUpdateManyWithoutUserNestedInput;
};
export type UserCreateWithoutProfileInput = {
    id?: string;
    name: string;
    username?: string | null;
    email: string;
    emailVerified?: boolean;
    image?: string | null;
    coverImage?: string | null;
    bio?: string | null;
    location?: string | null;
    skills?: Prisma.UserCreateskillsInput | string[];
    languages?: Prisma.UserCreatelanguagesInput | string[];
    timezone?: string | null;
    website?: string | null;
    github?: string | null;
    linkedin?: string | null;
    role?: string;
    status?: string;
    verificationStatus?: string;
    profileCompletion?: number;
    preferredCurrency?: string;
    stripeAccountId?: string | null;
    stripeOnboardingDone?: boolean;
    lastLoginAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    accounts?: Prisma.AccountCreateNestedManyWithoutUserInput;
    sessions?: Prisma.SessionCreateNestedManyWithoutUserInput;
    freelancerProfile?: Prisma.FreelancerProfileCreateNestedOneWithoutUserInput;
    buyerProfile?: Prisma.BuyerProfileCreateNestedOneWithoutUserInput;
    portfolioItems?: Prisma.PortfolioCreateNestedManyWithoutUserInput;
    services?: Prisma.ServiceCreateNestedManyWithoutUserInput;
    ordersAsBuyer?: Prisma.OrderCreateNestedManyWithoutBuyerInput;
    ordersAsFreelancer?: Prisma.OrderCreateNestedManyWithoutFreelancerInput;
    reviewsWritten?: Prisma.ReviewCreateNestedManyWithoutReviewerInput;
    reviewsReceived?: Prisma.ReviewCreateNestedManyWithoutRevieweeInput;
    favorites?: Prisma.FavoriteCreateNestedManyWithoutUserInput;
    cart?: Prisma.CartCreateNestedOneWithoutUserInput;
    conversationParts?: Prisma.ConversationParticipantCreateNestedManyWithoutUserInput;
    messages?: Prisma.MessageCreateNestedManyWithoutSenderInput;
    notifications?: Prisma.NotificationCreateNestedManyWithoutUserInput;
    payouts?: Prisma.PayoutCreateNestedManyWithoutFreelancerInput;
    disputes?: Prisma.DisputeCreateNestedManyWithoutOpenerInput;
    reports?: Prisma.ReportCreateNestedManyWithoutReporterInput;
    achievements?: Prisma.UserAchievementCreateNestedManyWithoutUserInput;
    xp?: Prisma.UserXPCreateNestedOneWithoutUserInput;
    searchHistory?: Prisma.SearchHistoryCreateNestedManyWithoutUserInput;
    userRoles?: Prisma.UserRoleCreateNestedManyWithoutUserInput;
    companiesOwned?: Prisma.CompanyCreateNestedManyWithoutOwnerInput;
    companyEmployees?: Prisma.EmployeeCreateNestedManyWithoutUserInput;
    jobsPosted?: Prisma.JobCreateNestedManyWithoutPostedByInput;
    resumes?: Prisma.ResumeCreateNestedManyWithoutUserInput;
    jobApplications?: Prisma.JobApplicationCreateNestedManyWithoutApplicantInput;
    products?: Prisma.ProductCreateNestedManyWithoutSellerInput;
    productReviewsWritten?: Prisma.ProductReviewCreateNestedManyWithoutReviewerInput;
    productReviewsReceived?: Prisma.ProductReviewCreateNestedManyWithoutRevieweeInput;
    booksAuthored?: Prisma.BookCreateNestedManyWithoutAuthorUserInput;
    bookPurchases?: Prisma.BookPurchaseCreateNestedManyWithoutUserInput;
    bookReviews?: Prisma.BookReviewCreateNestedManyWithoutUserInput;
    resourcesCreated?: Prisma.ResourceCreateNestedManyWithoutAuthorInput;
    portfolioProjects?: Prisma.PortfolioProjectCreateNestedManyWithoutUserInput;
    aiConversations?: Prisma.AIConversationCreateNestedManyWithoutUserInput;
};
export type UserUncheckedCreateWithoutProfileInput = {
    id?: string;
    name: string;
    username?: string | null;
    email: string;
    emailVerified?: boolean;
    image?: string | null;
    coverImage?: string | null;
    bio?: string | null;
    location?: string | null;
    skills?: Prisma.UserCreateskillsInput | string[];
    languages?: Prisma.UserCreatelanguagesInput | string[];
    timezone?: string | null;
    website?: string | null;
    github?: string | null;
    linkedin?: string | null;
    role?: string;
    status?: string;
    verificationStatus?: string;
    profileCompletion?: number;
    preferredCurrency?: string;
    stripeAccountId?: string | null;
    stripeOnboardingDone?: boolean;
    lastLoginAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    accounts?: Prisma.AccountUncheckedCreateNestedManyWithoutUserInput;
    sessions?: Prisma.SessionUncheckedCreateNestedManyWithoutUserInput;
    freelancerProfile?: Prisma.FreelancerProfileUncheckedCreateNestedOneWithoutUserInput;
    buyerProfile?: Prisma.BuyerProfileUncheckedCreateNestedOneWithoutUserInput;
    portfolioItems?: Prisma.PortfolioUncheckedCreateNestedManyWithoutUserInput;
    services?: Prisma.ServiceUncheckedCreateNestedManyWithoutUserInput;
    ordersAsBuyer?: Prisma.OrderUncheckedCreateNestedManyWithoutBuyerInput;
    ordersAsFreelancer?: Prisma.OrderUncheckedCreateNestedManyWithoutFreelancerInput;
    reviewsWritten?: Prisma.ReviewUncheckedCreateNestedManyWithoutReviewerInput;
    reviewsReceived?: Prisma.ReviewUncheckedCreateNestedManyWithoutRevieweeInput;
    favorites?: Prisma.FavoriteUncheckedCreateNestedManyWithoutUserInput;
    cart?: Prisma.CartUncheckedCreateNestedOneWithoutUserInput;
    conversationParts?: Prisma.ConversationParticipantUncheckedCreateNestedManyWithoutUserInput;
    messages?: Prisma.MessageUncheckedCreateNestedManyWithoutSenderInput;
    notifications?: Prisma.NotificationUncheckedCreateNestedManyWithoutUserInput;
    payouts?: Prisma.PayoutUncheckedCreateNestedManyWithoutFreelancerInput;
    disputes?: Prisma.DisputeUncheckedCreateNestedManyWithoutOpenerInput;
    reports?: Prisma.ReportUncheckedCreateNestedManyWithoutReporterInput;
    achievements?: Prisma.UserAchievementUncheckedCreateNestedManyWithoutUserInput;
    xp?: Prisma.UserXPUncheckedCreateNestedOneWithoutUserInput;
    searchHistory?: Prisma.SearchHistoryUncheckedCreateNestedManyWithoutUserInput;
    userRoles?: Prisma.UserRoleUncheckedCreateNestedManyWithoutUserInput;
    companiesOwned?: Prisma.CompanyUncheckedCreateNestedManyWithoutOwnerInput;
    companyEmployees?: Prisma.EmployeeUncheckedCreateNestedManyWithoutUserInput;
    jobsPosted?: Prisma.JobUncheckedCreateNestedManyWithoutPostedByInput;
    resumes?: Prisma.ResumeUncheckedCreateNestedManyWithoutUserInput;
    jobApplications?: Prisma.JobApplicationUncheckedCreateNestedManyWithoutApplicantInput;
    products?: Prisma.ProductUncheckedCreateNestedManyWithoutSellerInput;
    productReviewsWritten?: Prisma.ProductReviewUncheckedCreateNestedManyWithoutReviewerInput;
    productReviewsReceived?: Prisma.ProductReviewUncheckedCreateNestedManyWithoutRevieweeInput;
    booksAuthored?: Prisma.BookUncheckedCreateNestedManyWithoutAuthorUserInput;
    bookPurchases?: Prisma.BookPurchaseUncheckedCreateNestedManyWithoutUserInput;
    bookReviews?: Prisma.BookReviewUncheckedCreateNestedManyWithoutUserInput;
    resourcesCreated?: Prisma.ResourceUncheckedCreateNestedManyWithoutAuthorInput;
    portfolioProjects?: Prisma.PortfolioProjectUncheckedCreateNestedManyWithoutUserInput;
    aiConversations?: Prisma.AIConversationUncheckedCreateNestedManyWithoutUserInput;
};
export type UserCreateOrConnectWithoutProfileInput = {
    where: Prisma.UserWhereUniqueInput;
    create: Prisma.XOR<Prisma.UserCreateWithoutProfileInput, Prisma.UserUncheckedCreateWithoutProfileInput>;
};
export type UserUpsertWithoutProfileInput = {
    update: Prisma.XOR<Prisma.UserUpdateWithoutProfileInput, Prisma.UserUncheckedUpdateWithoutProfileInput>;
    create: Prisma.XOR<Prisma.UserCreateWithoutProfileInput, Prisma.UserUncheckedCreateWithoutProfileInput>;
    where?: Prisma.UserWhereInput;
};
export type UserUpdateToOneWithWhereWithoutProfileInput = {
    where?: Prisma.UserWhereInput;
    data: Prisma.XOR<Prisma.UserUpdateWithoutProfileInput, Prisma.UserUncheckedUpdateWithoutProfileInput>;
};
export type UserUpdateWithoutProfileInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    username?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    emailVerified?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    image?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    coverImage?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    bio?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    location?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    skills?: Prisma.UserUpdateskillsInput | string[];
    languages?: Prisma.UserUpdatelanguagesInput | string[];
    timezone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    website?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    github?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    linkedin?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    role?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    verificationStatus?: Prisma.StringFieldUpdateOperationsInput | string;
    profileCompletion?: Prisma.IntFieldUpdateOperationsInput | number;
    preferredCurrency?: Prisma.StringFieldUpdateOperationsInput | string;
    stripeAccountId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    stripeOnboardingDone?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    lastLoginAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    accounts?: Prisma.AccountUpdateManyWithoutUserNestedInput;
    sessions?: Prisma.SessionUpdateManyWithoutUserNestedInput;
    freelancerProfile?: Prisma.FreelancerProfileUpdateOneWithoutUserNestedInput;
    buyerProfile?: Prisma.BuyerProfileUpdateOneWithoutUserNestedInput;
    portfolioItems?: Prisma.PortfolioUpdateManyWithoutUserNestedInput;
    services?: Prisma.ServiceUpdateManyWithoutUserNestedInput;
    ordersAsBuyer?: Prisma.OrderUpdateManyWithoutBuyerNestedInput;
    ordersAsFreelancer?: Prisma.OrderUpdateManyWithoutFreelancerNestedInput;
    reviewsWritten?: Prisma.ReviewUpdateManyWithoutReviewerNestedInput;
    reviewsReceived?: Prisma.ReviewUpdateManyWithoutRevieweeNestedInput;
    favorites?: Prisma.FavoriteUpdateManyWithoutUserNestedInput;
    cart?: Prisma.CartUpdateOneWithoutUserNestedInput;
    conversationParts?: Prisma.ConversationParticipantUpdateManyWithoutUserNestedInput;
    messages?: Prisma.MessageUpdateManyWithoutSenderNestedInput;
    notifications?: Prisma.NotificationUpdateManyWithoutUserNestedInput;
    payouts?: Prisma.PayoutUpdateManyWithoutFreelancerNestedInput;
    disputes?: Prisma.DisputeUpdateManyWithoutOpenerNestedInput;
    reports?: Prisma.ReportUpdateManyWithoutReporterNestedInput;
    achievements?: Prisma.UserAchievementUpdateManyWithoutUserNestedInput;
    xp?: Prisma.UserXPUpdateOneWithoutUserNestedInput;
    searchHistory?: Prisma.SearchHistoryUpdateManyWithoutUserNestedInput;
    userRoles?: Prisma.UserRoleUpdateManyWithoutUserNestedInput;
    companiesOwned?: Prisma.CompanyUpdateManyWithoutOwnerNestedInput;
    companyEmployees?: Prisma.EmployeeUpdateManyWithoutUserNestedInput;
    jobsPosted?: Prisma.JobUpdateManyWithoutPostedByNestedInput;
    resumes?: Prisma.ResumeUpdateManyWithoutUserNestedInput;
    jobApplications?: Prisma.JobApplicationUpdateManyWithoutApplicantNestedInput;
    products?: Prisma.ProductUpdateManyWithoutSellerNestedInput;
    productReviewsWritten?: Prisma.ProductReviewUpdateManyWithoutReviewerNestedInput;
    productReviewsReceived?: Prisma.ProductReviewUpdateManyWithoutRevieweeNestedInput;
    booksAuthored?: Prisma.BookUpdateManyWithoutAuthorUserNestedInput;
    bookPurchases?: Prisma.BookPurchaseUpdateManyWithoutUserNestedInput;
    bookReviews?: Prisma.BookReviewUpdateManyWithoutUserNestedInput;
    resourcesCreated?: Prisma.ResourceUpdateManyWithoutAuthorNestedInput;
    portfolioProjects?: Prisma.PortfolioProjectUpdateManyWithoutUserNestedInput;
    aiConversations?: Prisma.AIConversationUpdateManyWithoutUserNestedInput;
};
export type UserUncheckedUpdateWithoutProfileInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    username?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    emailVerified?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    image?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    coverImage?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    bio?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    location?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    skills?: Prisma.UserUpdateskillsInput | string[];
    languages?: Prisma.UserUpdatelanguagesInput | string[];
    timezone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    website?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    github?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    linkedin?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    role?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    verificationStatus?: Prisma.StringFieldUpdateOperationsInput | string;
    profileCompletion?: Prisma.IntFieldUpdateOperationsInput | number;
    preferredCurrency?: Prisma.StringFieldUpdateOperationsInput | string;
    stripeAccountId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    stripeOnboardingDone?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    lastLoginAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    accounts?: Prisma.AccountUncheckedUpdateManyWithoutUserNestedInput;
    sessions?: Prisma.SessionUncheckedUpdateManyWithoutUserNestedInput;
    freelancerProfile?: Prisma.FreelancerProfileUncheckedUpdateOneWithoutUserNestedInput;
    buyerProfile?: Prisma.BuyerProfileUncheckedUpdateOneWithoutUserNestedInput;
    portfolioItems?: Prisma.PortfolioUncheckedUpdateManyWithoutUserNestedInput;
    services?: Prisma.ServiceUncheckedUpdateManyWithoutUserNestedInput;
    ordersAsBuyer?: Prisma.OrderUncheckedUpdateManyWithoutBuyerNestedInput;
    ordersAsFreelancer?: Prisma.OrderUncheckedUpdateManyWithoutFreelancerNestedInput;
    reviewsWritten?: Prisma.ReviewUncheckedUpdateManyWithoutReviewerNestedInput;
    reviewsReceived?: Prisma.ReviewUncheckedUpdateManyWithoutRevieweeNestedInput;
    favorites?: Prisma.FavoriteUncheckedUpdateManyWithoutUserNestedInput;
    cart?: Prisma.CartUncheckedUpdateOneWithoutUserNestedInput;
    conversationParts?: Prisma.ConversationParticipantUncheckedUpdateManyWithoutUserNestedInput;
    messages?: Prisma.MessageUncheckedUpdateManyWithoutSenderNestedInput;
    notifications?: Prisma.NotificationUncheckedUpdateManyWithoutUserNestedInput;
    payouts?: Prisma.PayoutUncheckedUpdateManyWithoutFreelancerNestedInput;
    disputes?: Prisma.DisputeUncheckedUpdateManyWithoutOpenerNestedInput;
    reports?: Prisma.ReportUncheckedUpdateManyWithoutReporterNestedInput;
    achievements?: Prisma.UserAchievementUncheckedUpdateManyWithoutUserNestedInput;
    xp?: Prisma.UserXPUncheckedUpdateOneWithoutUserNestedInput;
    searchHistory?: Prisma.SearchHistoryUncheckedUpdateManyWithoutUserNestedInput;
    userRoles?: Prisma.UserRoleUncheckedUpdateManyWithoutUserNestedInput;
    companiesOwned?: Prisma.CompanyUncheckedUpdateManyWithoutOwnerNestedInput;
    companyEmployees?: Prisma.EmployeeUncheckedUpdateManyWithoutUserNestedInput;
    jobsPosted?: Prisma.JobUncheckedUpdateManyWithoutPostedByNestedInput;
    resumes?: Prisma.ResumeUncheckedUpdateManyWithoutUserNestedInput;
    jobApplications?: Prisma.JobApplicationUncheckedUpdateManyWithoutApplicantNestedInput;
    products?: Prisma.ProductUncheckedUpdateManyWithoutSellerNestedInput;
    productReviewsWritten?: Prisma.ProductReviewUncheckedUpdateManyWithoutReviewerNestedInput;
    productReviewsReceived?: Prisma.ProductReviewUncheckedUpdateManyWithoutRevieweeNestedInput;
    booksAuthored?: Prisma.BookUncheckedUpdateManyWithoutAuthorUserNestedInput;
    bookPurchases?: Prisma.BookPurchaseUncheckedUpdateManyWithoutUserNestedInput;
    bookReviews?: Prisma.BookReviewUncheckedUpdateManyWithoutUserNestedInput;
    resourcesCreated?: Prisma.ResourceUncheckedUpdateManyWithoutAuthorNestedInput;
    portfolioProjects?: Prisma.PortfolioProjectUncheckedUpdateManyWithoutUserNestedInput;
    aiConversations?: Prisma.AIConversationUncheckedUpdateManyWithoutUserNestedInput;
};
export type UserCreateWithoutFreelancerProfileInput = {
    id?: string;
    name: string;
    username?: string | null;
    email: string;
    emailVerified?: boolean;
    image?: string | null;
    coverImage?: string | null;
    bio?: string | null;
    location?: string | null;
    skills?: Prisma.UserCreateskillsInput | string[];
    languages?: Prisma.UserCreatelanguagesInput | string[];
    timezone?: string | null;
    website?: string | null;
    github?: string | null;
    linkedin?: string | null;
    role?: string;
    status?: string;
    verificationStatus?: string;
    profileCompletion?: number;
    preferredCurrency?: string;
    stripeAccountId?: string | null;
    stripeOnboardingDone?: boolean;
    lastLoginAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    accounts?: Prisma.AccountCreateNestedManyWithoutUserInput;
    sessions?: Prisma.SessionCreateNestedManyWithoutUserInput;
    profile?: Prisma.ProfileCreateNestedOneWithoutUserInput;
    buyerProfile?: Prisma.BuyerProfileCreateNestedOneWithoutUserInput;
    portfolioItems?: Prisma.PortfolioCreateNestedManyWithoutUserInput;
    services?: Prisma.ServiceCreateNestedManyWithoutUserInput;
    ordersAsBuyer?: Prisma.OrderCreateNestedManyWithoutBuyerInput;
    ordersAsFreelancer?: Prisma.OrderCreateNestedManyWithoutFreelancerInput;
    reviewsWritten?: Prisma.ReviewCreateNestedManyWithoutReviewerInput;
    reviewsReceived?: Prisma.ReviewCreateNestedManyWithoutRevieweeInput;
    favorites?: Prisma.FavoriteCreateNestedManyWithoutUserInput;
    cart?: Prisma.CartCreateNestedOneWithoutUserInput;
    conversationParts?: Prisma.ConversationParticipantCreateNestedManyWithoutUserInput;
    messages?: Prisma.MessageCreateNestedManyWithoutSenderInput;
    notifications?: Prisma.NotificationCreateNestedManyWithoutUserInput;
    payouts?: Prisma.PayoutCreateNestedManyWithoutFreelancerInput;
    disputes?: Prisma.DisputeCreateNestedManyWithoutOpenerInput;
    reports?: Prisma.ReportCreateNestedManyWithoutReporterInput;
    achievements?: Prisma.UserAchievementCreateNestedManyWithoutUserInput;
    xp?: Prisma.UserXPCreateNestedOneWithoutUserInput;
    searchHistory?: Prisma.SearchHistoryCreateNestedManyWithoutUserInput;
    userRoles?: Prisma.UserRoleCreateNestedManyWithoutUserInput;
    companiesOwned?: Prisma.CompanyCreateNestedManyWithoutOwnerInput;
    companyEmployees?: Prisma.EmployeeCreateNestedManyWithoutUserInput;
    jobsPosted?: Prisma.JobCreateNestedManyWithoutPostedByInput;
    resumes?: Prisma.ResumeCreateNestedManyWithoutUserInput;
    jobApplications?: Prisma.JobApplicationCreateNestedManyWithoutApplicantInput;
    products?: Prisma.ProductCreateNestedManyWithoutSellerInput;
    productReviewsWritten?: Prisma.ProductReviewCreateNestedManyWithoutReviewerInput;
    productReviewsReceived?: Prisma.ProductReviewCreateNestedManyWithoutRevieweeInput;
    booksAuthored?: Prisma.BookCreateNestedManyWithoutAuthorUserInput;
    bookPurchases?: Prisma.BookPurchaseCreateNestedManyWithoutUserInput;
    bookReviews?: Prisma.BookReviewCreateNestedManyWithoutUserInput;
    resourcesCreated?: Prisma.ResourceCreateNestedManyWithoutAuthorInput;
    portfolioProjects?: Prisma.PortfolioProjectCreateNestedManyWithoutUserInput;
    aiConversations?: Prisma.AIConversationCreateNestedManyWithoutUserInput;
};
export type UserUncheckedCreateWithoutFreelancerProfileInput = {
    id?: string;
    name: string;
    username?: string | null;
    email: string;
    emailVerified?: boolean;
    image?: string | null;
    coverImage?: string | null;
    bio?: string | null;
    location?: string | null;
    skills?: Prisma.UserCreateskillsInput | string[];
    languages?: Prisma.UserCreatelanguagesInput | string[];
    timezone?: string | null;
    website?: string | null;
    github?: string | null;
    linkedin?: string | null;
    role?: string;
    status?: string;
    verificationStatus?: string;
    profileCompletion?: number;
    preferredCurrency?: string;
    stripeAccountId?: string | null;
    stripeOnboardingDone?: boolean;
    lastLoginAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    accounts?: Prisma.AccountUncheckedCreateNestedManyWithoutUserInput;
    sessions?: Prisma.SessionUncheckedCreateNestedManyWithoutUserInput;
    profile?: Prisma.ProfileUncheckedCreateNestedOneWithoutUserInput;
    buyerProfile?: Prisma.BuyerProfileUncheckedCreateNestedOneWithoutUserInput;
    portfolioItems?: Prisma.PortfolioUncheckedCreateNestedManyWithoutUserInput;
    services?: Prisma.ServiceUncheckedCreateNestedManyWithoutUserInput;
    ordersAsBuyer?: Prisma.OrderUncheckedCreateNestedManyWithoutBuyerInput;
    ordersAsFreelancer?: Prisma.OrderUncheckedCreateNestedManyWithoutFreelancerInput;
    reviewsWritten?: Prisma.ReviewUncheckedCreateNestedManyWithoutReviewerInput;
    reviewsReceived?: Prisma.ReviewUncheckedCreateNestedManyWithoutRevieweeInput;
    favorites?: Prisma.FavoriteUncheckedCreateNestedManyWithoutUserInput;
    cart?: Prisma.CartUncheckedCreateNestedOneWithoutUserInput;
    conversationParts?: Prisma.ConversationParticipantUncheckedCreateNestedManyWithoutUserInput;
    messages?: Prisma.MessageUncheckedCreateNestedManyWithoutSenderInput;
    notifications?: Prisma.NotificationUncheckedCreateNestedManyWithoutUserInput;
    payouts?: Prisma.PayoutUncheckedCreateNestedManyWithoutFreelancerInput;
    disputes?: Prisma.DisputeUncheckedCreateNestedManyWithoutOpenerInput;
    reports?: Prisma.ReportUncheckedCreateNestedManyWithoutReporterInput;
    achievements?: Prisma.UserAchievementUncheckedCreateNestedManyWithoutUserInput;
    xp?: Prisma.UserXPUncheckedCreateNestedOneWithoutUserInput;
    searchHistory?: Prisma.SearchHistoryUncheckedCreateNestedManyWithoutUserInput;
    userRoles?: Prisma.UserRoleUncheckedCreateNestedManyWithoutUserInput;
    companiesOwned?: Prisma.CompanyUncheckedCreateNestedManyWithoutOwnerInput;
    companyEmployees?: Prisma.EmployeeUncheckedCreateNestedManyWithoutUserInput;
    jobsPosted?: Prisma.JobUncheckedCreateNestedManyWithoutPostedByInput;
    resumes?: Prisma.ResumeUncheckedCreateNestedManyWithoutUserInput;
    jobApplications?: Prisma.JobApplicationUncheckedCreateNestedManyWithoutApplicantInput;
    products?: Prisma.ProductUncheckedCreateNestedManyWithoutSellerInput;
    productReviewsWritten?: Prisma.ProductReviewUncheckedCreateNestedManyWithoutReviewerInput;
    productReviewsReceived?: Prisma.ProductReviewUncheckedCreateNestedManyWithoutRevieweeInput;
    booksAuthored?: Prisma.BookUncheckedCreateNestedManyWithoutAuthorUserInput;
    bookPurchases?: Prisma.BookPurchaseUncheckedCreateNestedManyWithoutUserInput;
    bookReviews?: Prisma.BookReviewUncheckedCreateNestedManyWithoutUserInput;
    resourcesCreated?: Prisma.ResourceUncheckedCreateNestedManyWithoutAuthorInput;
    portfolioProjects?: Prisma.PortfolioProjectUncheckedCreateNestedManyWithoutUserInput;
    aiConversations?: Prisma.AIConversationUncheckedCreateNestedManyWithoutUserInput;
};
export type UserCreateOrConnectWithoutFreelancerProfileInput = {
    where: Prisma.UserWhereUniqueInput;
    create: Prisma.XOR<Prisma.UserCreateWithoutFreelancerProfileInput, Prisma.UserUncheckedCreateWithoutFreelancerProfileInput>;
};
export type UserUpsertWithoutFreelancerProfileInput = {
    update: Prisma.XOR<Prisma.UserUpdateWithoutFreelancerProfileInput, Prisma.UserUncheckedUpdateWithoutFreelancerProfileInput>;
    create: Prisma.XOR<Prisma.UserCreateWithoutFreelancerProfileInput, Prisma.UserUncheckedCreateWithoutFreelancerProfileInput>;
    where?: Prisma.UserWhereInput;
};
export type UserUpdateToOneWithWhereWithoutFreelancerProfileInput = {
    where?: Prisma.UserWhereInput;
    data: Prisma.XOR<Prisma.UserUpdateWithoutFreelancerProfileInput, Prisma.UserUncheckedUpdateWithoutFreelancerProfileInput>;
};
export type UserUpdateWithoutFreelancerProfileInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    username?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    emailVerified?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    image?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    coverImage?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    bio?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    location?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    skills?: Prisma.UserUpdateskillsInput | string[];
    languages?: Prisma.UserUpdatelanguagesInput | string[];
    timezone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    website?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    github?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    linkedin?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    role?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    verificationStatus?: Prisma.StringFieldUpdateOperationsInput | string;
    profileCompletion?: Prisma.IntFieldUpdateOperationsInput | number;
    preferredCurrency?: Prisma.StringFieldUpdateOperationsInput | string;
    stripeAccountId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    stripeOnboardingDone?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    lastLoginAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    accounts?: Prisma.AccountUpdateManyWithoutUserNestedInput;
    sessions?: Prisma.SessionUpdateManyWithoutUserNestedInput;
    profile?: Prisma.ProfileUpdateOneWithoutUserNestedInput;
    buyerProfile?: Prisma.BuyerProfileUpdateOneWithoutUserNestedInput;
    portfolioItems?: Prisma.PortfolioUpdateManyWithoutUserNestedInput;
    services?: Prisma.ServiceUpdateManyWithoutUserNestedInput;
    ordersAsBuyer?: Prisma.OrderUpdateManyWithoutBuyerNestedInput;
    ordersAsFreelancer?: Prisma.OrderUpdateManyWithoutFreelancerNestedInput;
    reviewsWritten?: Prisma.ReviewUpdateManyWithoutReviewerNestedInput;
    reviewsReceived?: Prisma.ReviewUpdateManyWithoutRevieweeNestedInput;
    favorites?: Prisma.FavoriteUpdateManyWithoutUserNestedInput;
    cart?: Prisma.CartUpdateOneWithoutUserNestedInput;
    conversationParts?: Prisma.ConversationParticipantUpdateManyWithoutUserNestedInput;
    messages?: Prisma.MessageUpdateManyWithoutSenderNestedInput;
    notifications?: Prisma.NotificationUpdateManyWithoutUserNestedInput;
    payouts?: Prisma.PayoutUpdateManyWithoutFreelancerNestedInput;
    disputes?: Prisma.DisputeUpdateManyWithoutOpenerNestedInput;
    reports?: Prisma.ReportUpdateManyWithoutReporterNestedInput;
    achievements?: Prisma.UserAchievementUpdateManyWithoutUserNestedInput;
    xp?: Prisma.UserXPUpdateOneWithoutUserNestedInput;
    searchHistory?: Prisma.SearchHistoryUpdateManyWithoutUserNestedInput;
    userRoles?: Prisma.UserRoleUpdateManyWithoutUserNestedInput;
    companiesOwned?: Prisma.CompanyUpdateManyWithoutOwnerNestedInput;
    companyEmployees?: Prisma.EmployeeUpdateManyWithoutUserNestedInput;
    jobsPosted?: Prisma.JobUpdateManyWithoutPostedByNestedInput;
    resumes?: Prisma.ResumeUpdateManyWithoutUserNestedInput;
    jobApplications?: Prisma.JobApplicationUpdateManyWithoutApplicantNestedInput;
    products?: Prisma.ProductUpdateManyWithoutSellerNestedInput;
    productReviewsWritten?: Prisma.ProductReviewUpdateManyWithoutReviewerNestedInput;
    productReviewsReceived?: Prisma.ProductReviewUpdateManyWithoutRevieweeNestedInput;
    booksAuthored?: Prisma.BookUpdateManyWithoutAuthorUserNestedInput;
    bookPurchases?: Prisma.BookPurchaseUpdateManyWithoutUserNestedInput;
    bookReviews?: Prisma.BookReviewUpdateManyWithoutUserNestedInput;
    resourcesCreated?: Prisma.ResourceUpdateManyWithoutAuthorNestedInput;
    portfolioProjects?: Prisma.PortfolioProjectUpdateManyWithoutUserNestedInput;
    aiConversations?: Prisma.AIConversationUpdateManyWithoutUserNestedInput;
};
export type UserUncheckedUpdateWithoutFreelancerProfileInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    username?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    emailVerified?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    image?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    coverImage?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    bio?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    location?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    skills?: Prisma.UserUpdateskillsInput | string[];
    languages?: Prisma.UserUpdatelanguagesInput | string[];
    timezone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    website?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    github?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    linkedin?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    role?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    verificationStatus?: Prisma.StringFieldUpdateOperationsInput | string;
    profileCompletion?: Prisma.IntFieldUpdateOperationsInput | number;
    preferredCurrency?: Prisma.StringFieldUpdateOperationsInput | string;
    stripeAccountId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    stripeOnboardingDone?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    lastLoginAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    accounts?: Prisma.AccountUncheckedUpdateManyWithoutUserNestedInput;
    sessions?: Prisma.SessionUncheckedUpdateManyWithoutUserNestedInput;
    profile?: Prisma.ProfileUncheckedUpdateOneWithoutUserNestedInput;
    buyerProfile?: Prisma.BuyerProfileUncheckedUpdateOneWithoutUserNestedInput;
    portfolioItems?: Prisma.PortfolioUncheckedUpdateManyWithoutUserNestedInput;
    services?: Prisma.ServiceUncheckedUpdateManyWithoutUserNestedInput;
    ordersAsBuyer?: Prisma.OrderUncheckedUpdateManyWithoutBuyerNestedInput;
    ordersAsFreelancer?: Prisma.OrderUncheckedUpdateManyWithoutFreelancerNestedInput;
    reviewsWritten?: Prisma.ReviewUncheckedUpdateManyWithoutReviewerNestedInput;
    reviewsReceived?: Prisma.ReviewUncheckedUpdateManyWithoutRevieweeNestedInput;
    favorites?: Prisma.FavoriteUncheckedUpdateManyWithoutUserNestedInput;
    cart?: Prisma.CartUncheckedUpdateOneWithoutUserNestedInput;
    conversationParts?: Prisma.ConversationParticipantUncheckedUpdateManyWithoutUserNestedInput;
    messages?: Prisma.MessageUncheckedUpdateManyWithoutSenderNestedInput;
    notifications?: Prisma.NotificationUncheckedUpdateManyWithoutUserNestedInput;
    payouts?: Prisma.PayoutUncheckedUpdateManyWithoutFreelancerNestedInput;
    disputes?: Prisma.DisputeUncheckedUpdateManyWithoutOpenerNestedInput;
    reports?: Prisma.ReportUncheckedUpdateManyWithoutReporterNestedInput;
    achievements?: Prisma.UserAchievementUncheckedUpdateManyWithoutUserNestedInput;
    xp?: Prisma.UserXPUncheckedUpdateOneWithoutUserNestedInput;
    searchHistory?: Prisma.SearchHistoryUncheckedUpdateManyWithoutUserNestedInput;
    userRoles?: Prisma.UserRoleUncheckedUpdateManyWithoutUserNestedInput;
    companiesOwned?: Prisma.CompanyUncheckedUpdateManyWithoutOwnerNestedInput;
    companyEmployees?: Prisma.EmployeeUncheckedUpdateManyWithoutUserNestedInput;
    jobsPosted?: Prisma.JobUncheckedUpdateManyWithoutPostedByNestedInput;
    resumes?: Prisma.ResumeUncheckedUpdateManyWithoutUserNestedInput;
    jobApplications?: Prisma.JobApplicationUncheckedUpdateManyWithoutApplicantNestedInput;
    products?: Prisma.ProductUncheckedUpdateManyWithoutSellerNestedInput;
    productReviewsWritten?: Prisma.ProductReviewUncheckedUpdateManyWithoutReviewerNestedInput;
    productReviewsReceived?: Prisma.ProductReviewUncheckedUpdateManyWithoutRevieweeNestedInput;
    booksAuthored?: Prisma.BookUncheckedUpdateManyWithoutAuthorUserNestedInput;
    bookPurchases?: Prisma.BookPurchaseUncheckedUpdateManyWithoutUserNestedInput;
    bookReviews?: Prisma.BookReviewUncheckedUpdateManyWithoutUserNestedInput;
    resourcesCreated?: Prisma.ResourceUncheckedUpdateManyWithoutAuthorNestedInput;
    portfolioProjects?: Prisma.PortfolioProjectUncheckedUpdateManyWithoutUserNestedInput;
    aiConversations?: Prisma.AIConversationUncheckedUpdateManyWithoutUserNestedInput;
};
export type UserCreateWithoutBuyerProfileInput = {
    id?: string;
    name: string;
    username?: string | null;
    email: string;
    emailVerified?: boolean;
    image?: string | null;
    coverImage?: string | null;
    bio?: string | null;
    location?: string | null;
    skills?: Prisma.UserCreateskillsInput | string[];
    languages?: Prisma.UserCreatelanguagesInput | string[];
    timezone?: string | null;
    website?: string | null;
    github?: string | null;
    linkedin?: string | null;
    role?: string;
    status?: string;
    verificationStatus?: string;
    profileCompletion?: number;
    preferredCurrency?: string;
    stripeAccountId?: string | null;
    stripeOnboardingDone?: boolean;
    lastLoginAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    accounts?: Prisma.AccountCreateNestedManyWithoutUserInput;
    sessions?: Prisma.SessionCreateNestedManyWithoutUserInput;
    profile?: Prisma.ProfileCreateNestedOneWithoutUserInput;
    freelancerProfile?: Prisma.FreelancerProfileCreateNestedOneWithoutUserInput;
    portfolioItems?: Prisma.PortfolioCreateNestedManyWithoutUserInput;
    services?: Prisma.ServiceCreateNestedManyWithoutUserInput;
    ordersAsBuyer?: Prisma.OrderCreateNestedManyWithoutBuyerInput;
    ordersAsFreelancer?: Prisma.OrderCreateNestedManyWithoutFreelancerInput;
    reviewsWritten?: Prisma.ReviewCreateNestedManyWithoutReviewerInput;
    reviewsReceived?: Prisma.ReviewCreateNestedManyWithoutRevieweeInput;
    favorites?: Prisma.FavoriteCreateNestedManyWithoutUserInput;
    cart?: Prisma.CartCreateNestedOneWithoutUserInput;
    conversationParts?: Prisma.ConversationParticipantCreateNestedManyWithoutUserInput;
    messages?: Prisma.MessageCreateNestedManyWithoutSenderInput;
    notifications?: Prisma.NotificationCreateNestedManyWithoutUserInput;
    payouts?: Prisma.PayoutCreateNestedManyWithoutFreelancerInput;
    disputes?: Prisma.DisputeCreateNestedManyWithoutOpenerInput;
    reports?: Prisma.ReportCreateNestedManyWithoutReporterInput;
    achievements?: Prisma.UserAchievementCreateNestedManyWithoutUserInput;
    xp?: Prisma.UserXPCreateNestedOneWithoutUserInput;
    searchHistory?: Prisma.SearchHistoryCreateNestedManyWithoutUserInput;
    userRoles?: Prisma.UserRoleCreateNestedManyWithoutUserInput;
    companiesOwned?: Prisma.CompanyCreateNestedManyWithoutOwnerInput;
    companyEmployees?: Prisma.EmployeeCreateNestedManyWithoutUserInput;
    jobsPosted?: Prisma.JobCreateNestedManyWithoutPostedByInput;
    resumes?: Prisma.ResumeCreateNestedManyWithoutUserInput;
    jobApplications?: Prisma.JobApplicationCreateNestedManyWithoutApplicantInput;
    products?: Prisma.ProductCreateNestedManyWithoutSellerInput;
    productReviewsWritten?: Prisma.ProductReviewCreateNestedManyWithoutReviewerInput;
    productReviewsReceived?: Prisma.ProductReviewCreateNestedManyWithoutRevieweeInput;
    booksAuthored?: Prisma.BookCreateNestedManyWithoutAuthorUserInput;
    bookPurchases?: Prisma.BookPurchaseCreateNestedManyWithoutUserInput;
    bookReviews?: Prisma.BookReviewCreateNestedManyWithoutUserInput;
    resourcesCreated?: Prisma.ResourceCreateNestedManyWithoutAuthorInput;
    portfolioProjects?: Prisma.PortfolioProjectCreateNestedManyWithoutUserInput;
    aiConversations?: Prisma.AIConversationCreateNestedManyWithoutUserInput;
};
export type UserUncheckedCreateWithoutBuyerProfileInput = {
    id?: string;
    name: string;
    username?: string | null;
    email: string;
    emailVerified?: boolean;
    image?: string | null;
    coverImage?: string | null;
    bio?: string | null;
    location?: string | null;
    skills?: Prisma.UserCreateskillsInput | string[];
    languages?: Prisma.UserCreatelanguagesInput | string[];
    timezone?: string | null;
    website?: string | null;
    github?: string | null;
    linkedin?: string | null;
    role?: string;
    status?: string;
    verificationStatus?: string;
    profileCompletion?: number;
    preferredCurrency?: string;
    stripeAccountId?: string | null;
    stripeOnboardingDone?: boolean;
    lastLoginAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    accounts?: Prisma.AccountUncheckedCreateNestedManyWithoutUserInput;
    sessions?: Prisma.SessionUncheckedCreateNestedManyWithoutUserInput;
    profile?: Prisma.ProfileUncheckedCreateNestedOneWithoutUserInput;
    freelancerProfile?: Prisma.FreelancerProfileUncheckedCreateNestedOneWithoutUserInput;
    portfolioItems?: Prisma.PortfolioUncheckedCreateNestedManyWithoutUserInput;
    services?: Prisma.ServiceUncheckedCreateNestedManyWithoutUserInput;
    ordersAsBuyer?: Prisma.OrderUncheckedCreateNestedManyWithoutBuyerInput;
    ordersAsFreelancer?: Prisma.OrderUncheckedCreateNestedManyWithoutFreelancerInput;
    reviewsWritten?: Prisma.ReviewUncheckedCreateNestedManyWithoutReviewerInput;
    reviewsReceived?: Prisma.ReviewUncheckedCreateNestedManyWithoutRevieweeInput;
    favorites?: Prisma.FavoriteUncheckedCreateNestedManyWithoutUserInput;
    cart?: Prisma.CartUncheckedCreateNestedOneWithoutUserInput;
    conversationParts?: Prisma.ConversationParticipantUncheckedCreateNestedManyWithoutUserInput;
    messages?: Prisma.MessageUncheckedCreateNestedManyWithoutSenderInput;
    notifications?: Prisma.NotificationUncheckedCreateNestedManyWithoutUserInput;
    payouts?: Prisma.PayoutUncheckedCreateNestedManyWithoutFreelancerInput;
    disputes?: Prisma.DisputeUncheckedCreateNestedManyWithoutOpenerInput;
    reports?: Prisma.ReportUncheckedCreateNestedManyWithoutReporterInput;
    achievements?: Prisma.UserAchievementUncheckedCreateNestedManyWithoutUserInput;
    xp?: Prisma.UserXPUncheckedCreateNestedOneWithoutUserInput;
    searchHistory?: Prisma.SearchHistoryUncheckedCreateNestedManyWithoutUserInput;
    userRoles?: Prisma.UserRoleUncheckedCreateNestedManyWithoutUserInput;
    companiesOwned?: Prisma.CompanyUncheckedCreateNestedManyWithoutOwnerInput;
    companyEmployees?: Prisma.EmployeeUncheckedCreateNestedManyWithoutUserInput;
    jobsPosted?: Prisma.JobUncheckedCreateNestedManyWithoutPostedByInput;
    resumes?: Prisma.ResumeUncheckedCreateNestedManyWithoutUserInput;
    jobApplications?: Prisma.JobApplicationUncheckedCreateNestedManyWithoutApplicantInput;
    products?: Prisma.ProductUncheckedCreateNestedManyWithoutSellerInput;
    productReviewsWritten?: Prisma.ProductReviewUncheckedCreateNestedManyWithoutReviewerInput;
    productReviewsReceived?: Prisma.ProductReviewUncheckedCreateNestedManyWithoutRevieweeInput;
    booksAuthored?: Prisma.BookUncheckedCreateNestedManyWithoutAuthorUserInput;
    bookPurchases?: Prisma.BookPurchaseUncheckedCreateNestedManyWithoutUserInput;
    bookReviews?: Prisma.BookReviewUncheckedCreateNestedManyWithoutUserInput;
    resourcesCreated?: Prisma.ResourceUncheckedCreateNestedManyWithoutAuthorInput;
    portfolioProjects?: Prisma.PortfolioProjectUncheckedCreateNestedManyWithoutUserInput;
    aiConversations?: Prisma.AIConversationUncheckedCreateNestedManyWithoutUserInput;
};
export type UserCreateOrConnectWithoutBuyerProfileInput = {
    where: Prisma.UserWhereUniqueInput;
    create: Prisma.XOR<Prisma.UserCreateWithoutBuyerProfileInput, Prisma.UserUncheckedCreateWithoutBuyerProfileInput>;
};
export type UserUpsertWithoutBuyerProfileInput = {
    update: Prisma.XOR<Prisma.UserUpdateWithoutBuyerProfileInput, Prisma.UserUncheckedUpdateWithoutBuyerProfileInput>;
    create: Prisma.XOR<Prisma.UserCreateWithoutBuyerProfileInput, Prisma.UserUncheckedCreateWithoutBuyerProfileInput>;
    where?: Prisma.UserWhereInput;
};
export type UserUpdateToOneWithWhereWithoutBuyerProfileInput = {
    where?: Prisma.UserWhereInput;
    data: Prisma.XOR<Prisma.UserUpdateWithoutBuyerProfileInput, Prisma.UserUncheckedUpdateWithoutBuyerProfileInput>;
};
export type UserUpdateWithoutBuyerProfileInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    username?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    emailVerified?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    image?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    coverImage?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    bio?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    location?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    skills?: Prisma.UserUpdateskillsInput | string[];
    languages?: Prisma.UserUpdatelanguagesInput | string[];
    timezone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    website?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    github?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    linkedin?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    role?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    verificationStatus?: Prisma.StringFieldUpdateOperationsInput | string;
    profileCompletion?: Prisma.IntFieldUpdateOperationsInput | number;
    preferredCurrency?: Prisma.StringFieldUpdateOperationsInput | string;
    stripeAccountId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    stripeOnboardingDone?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    lastLoginAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    accounts?: Prisma.AccountUpdateManyWithoutUserNestedInput;
    sessions?: Prisma.SessionUpdateManyWithoutUserNestedInput;
    profile?: Prisma.ProfileUpdateOneWithoutUserNestedInput;
    freelancerProfile?: Prisma.FreelancerProfileUpdateOneWithoutUserNestedInput;
    portfolioItems?: Prisma.PortfolioUpdateManyWithoutUserNestedInput;
    services?: Prisma.ServiceUpdateManyWithoutUserNestedInput;
    ordersAsBuyer?: Prisma.OrderUpdateManyWithoutBuyerNestedInput;
    ordersAsFreelancer?: Prisma.OrderUpdateManyWithoutFreelancerNestedInput;
    reviewsWritten?: Prisma.ReviewUpdateManyWithoutReviewerNestedInput;
    reviewsReceived?: Prisma.ReviewUpdateManyWithoutRevieweeNestedInput;
    favorites?: Prisma.FavoriteUpdateManyWithoutUserNestedInput;
    cart?: Prisma.CartUpdateOneWithoutUserNestedInput;
    conversationParts?: Prisma.ConversationParticipantUpdateManyWithoutUserNestedInput;
    messages?: Prisma.MessageUpdateManyWithoutSenderNestedInput;
    notifications?: Prisma.NotificationUpdateManyWithoutUserNestedInput;
    payouts?: Prisma.PayoutUpdateManyWithoutFreelancerNestedInput;
    disputes?: Prisma.DisputeUpdateManyWithoutOpenerNestedInput;
    reports?: Prisma.ReportUpdateManyWithoutReporterNestedInput;
    achievements?: Prisma.UserAchievementUpdateManyWithoutUserNestedInput;
    xp?: Prisma.UserXPUpdateOneWithoutUserNestedInput;
    searchHistory?: Prisma.SearchHistoryUpdateManyWithoutUserNestedInput;
    userRoles?: Prisma.UserRoleUpdateManyWithoutUserNestedInput;
    companiesOwned?: Prisma.CompanyUpdateManyWithoutOwnerNestedInput;
    companyEmployees?: Prisma.EmployeeUpdateManyWithoutUserNestedInput;
    jobsPosted?: Prisma.JobUpdateManyWithoutPostedByNestedInput;
    resumes?: Prisma.ResumeUpdateManyWithoutUserNestedInput;
    jobApplications?: Prisma.JobApplicationUpdateManyWithoutApplicantNestedInput;
    products?: Prisma.ProductUpdateManyWithoutSellerNestedInput;
    productReviewsWritten?: Prisma.ProductReviewUpdateManyWithoutReviewerNestedInput;
    productReviewsReceived?: Prisma.ProductReviewUpdateManyWithoutRevieweeNestedInput;
    booksAuthored?: Prisma.BookUpdateManyWithoutAuthorUserNestedInput;
    bookPurchases?: Prisma.BookPurchaseUpdateManyWithoutUserNestedInput;
    bookReviews?: Prisma.BookReviewUpdateManyWithoutUserNestedInput;
    resourcesCreated?: Prisma.ResourceUpdateManyWithoutAuthorNestedInput;
    portfolioProjects?: Prisma.PortfolioProjectUpdateManyWithoutUserNestedInput;
    aiConversations?: Prisma.AIConversationUpdateManyWithoutUserNestedInput;
};
export type UserUncheckedUpdateWithoutBuyerProfileInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    username?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    emailVerified?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    image?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    coverImage?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    bio?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    location?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    skills?: Prisma.UserUpdateskillsInput | string[];
    languages?: Prisma.UserUpdatelanguagesInput | string[];
    timezone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    website?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    github?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    linkedin?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    role?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    verificationStatus?: Prisma.StringFieldUpdateOperationsInput | string;
    profileCompletion?: Prisma.IntFieldUpdateOperationsInput | number;
    preferredCurrency?: Prisma.StringFieldUpdateOperationsInput | string;
    stripeAccountId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    stripeOnboardingDone?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    lastLoginAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    accounts?: Prisma.AccountUncheckedUpdateManyWithoutUserNestedInput;
    sessions?: Prisma.SessionUncheckedUpdateManyWithoutUserNestedInput;
    profile?: Prisma.ProfileUncheckedUpdateOneWithoutUserNestedInput;
    freelancerProfile?: Prisma.FreelancerProfileUncheckedUpdateOneWithoutUserNestedInput;
    portfolioItems?: Prisma.PortfolioUncheckedUpdateManyWithoutUserNestedInput;
    services?: Prisma.ServiceUncheckedUpdateManyWithoutUserNestedInput;
    ordersAsBuyer?: Prisma.OrderUncheckedUpdateManyWithoutBuyerNestedInput;
    ordersAsFreelancer?: Prisma.OrderUncheckedUpdateManyWithoutFreelancerNestedInput;
    reviewsWritten?: Prisma.ReviewUncheckedUpdateManyWithoutReviewerNestedInput;
    reviewsReceived?: Prisma.ReviewUncheckedUpdateManyWithoutRevieweeNestedInput;
    favorites?: Prisma.FavoriteUncheckedUpdateManyWithoutUserNestedInput;
    cart?: Prisma.CartUncheckedUpdateOneWithoutUserNestedInput;
    conversationParts?: Prisma.ConversationParticipantUncheckedUpdateManyWithoutUserNestedInput;
    messages?: Prisma.MessageUncheckedUpdateManyWithoutSenderNestedInput;
    notifications?: Prisma.NotificationUncheckedUpdateManyWithoutUserNestedInput;
    payouts?: Prisma.PayoutUncheckedUpdateManyWithoutFreelancerNestedInput;
    disputes?: Prisma.DisputeUncheckedUpdateManyWithoutOpenerNestedInput;
    reports?: Prisma.ReportUncheckedUpdateManyWithoutReporterNestedInput;
    achievements?: Prisma.UserAchievementUncheckedUpdateManyWithoutUserNestedInput;
    xp?: Prisma.UserXPUncheckedUpdateOneWithoutUserNestedInput;
    searchHistory?: Prisma.SearchHistoryUncheckedUpdateManyWithoutUserNestedInput;
    userRoles?: Prisma.UserRoleUncheckedUpdateManyWithoutUserNestedInput;
    companiesOwned?: Prisma.CompanyUncheckedUpdateManyWithoutOwnerNestedInput;
    companyEmployees?: Prisma.EmployeeUncheckedUpdateManyWithoutUserNestedInput;
    jobsPosted?: Prisma.JobUncheckedUpdateManyWithoutPostedByNestedInput;
    resumes?: Prisma.ResumeUncheckedUpdateManyWithoutUserNestedInput;
    jobApplications?: Prisma.JobApplicationUncheckedUpdateManyWithoutApplicantNestedInput;
    products?: Prisma.ProductUncheckedUpdateManyWithoutSellerNestedInput;
    productReviewsWritten?: Prisma.ProductReviewUncheckedUpdateManyWithoutReviewerNestedInput;
    productReviewsReceived?: Prisma.ProductReviewUncheckedUpdateManyWithoutRevieweeNestedInput;
    booksAuthored?: Prisma.BookUncheckedUpdateManyWithoutAuthorUserNestedInput;
    bookPurchases?: Prisma.BookPurchaseUncheckedUpdateManyWithoutUserNestedInput;
    bookReviews?: Prisma.BookReviewUncheckedUpdateManyWithoutUserNestedInput;
    resourcesCreated?: Prisma.ResourceUncheckedUpdateManyWithoutAuthorNestedInput;
    portfolioProjects?: Prisma.PortfolioProjectUncheckedUpdateManyWithoutUserNestedInput;
    aiConversations?: Prisma.AIConversationUncheckedUpdateManyWithoutUserNestedInput;
};
export type UserCreateWithoutServicesInput = {
    id?: string;
    name: string;
    username?: string | null;
    email: string;
    emailVerified?: boolean;
    image?: string | null;
    coverImage?: string | null;
    bio?: string | null;
    location?: string | null;
    skills?: Prisma.UserCreateskillsInput | string[];
    languages?: Prisma.UserCreatelanguagesInput | string[];
    timezone?: string | null;
    website?: string | null;
    github?: string | null;
    linkedin?: string | null;
    role?: string;
    status?: string;
    verificationStatus?: string;
    profileCompletion?: number;
    preferredCurrency?: string;
    stripeAccountId?: string | null;
    stripeOnboardingDone?: boolean;
    lastLoginAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    accounts?: Prisma.AccountCreateNestedManyWithoutUserInput;
    sessions?: Prisma.SessionCreateNestedManyWithoutUserInput;
    profile?: Prisma.ProfileCreateNestedOneWithoutUserInput;
    freelancerProfile?: Prisma.FreelancerProfileCreateNestedOneWithoutUserInput;
    buyerProfile?: Prisma.BuyerProfileCreateNestedOneWithoutUserInput;
    portfolioItems?: Prisma.PortfolioCreateNestedManyWithoutUserInput;
    ordersAsBuyer?: Prisma.OrderCreateNestedManyWithoutBuyerInput;
    ordersAsFreelancer?: Prisma.OrderCreateNestedManyWithoutFreelancerInput;
    reviewsWritten?: Prisma.ReviewCreateNestedManyWithoutReviewerInput;
    reviewsReceived?: Prisma.ReviewCreateNestedManyWithoutRevieweeInput;
    favorites?: Prisma.FavoriteCreateNestedManyWithoutUserInput;
    cart?: Prisma.CartCreateNestedOneWithoutUserInput;
    conversationParts?: Prisma.ConversationParticipantCreateNestedManyWithoutUserInput;
    messages?: Prisma.MessageCreateNestedManyWithoutSenderInput;
    notifications?: Prisma.NotificationCreateNestedManyWithoutUserInput;
    payouts?: Prisma.PayoutCreateNestedManyWithoutFreelancerInput;
    disputes?: Prisma.DisputeCreateNestedManyWithoutOpenerInput;
    reports?: Prisma.ReportCreateNestedManyWithoutReporterInput;
    achievements?: Prisma.UserAchievementCreateNestedManyWithoutUserInput;
    xp?: Prisma.UserXPCreateNestedOneWithoutUserInput;
    searchHistory?: Prisma.SearchHistoryCreateNestedManyWithoutUserInput;
    userRoles?: Prisma.UserRoleCreateNestedManyWithoutUserInput;
    companiesOwned?: Prisma.CompanyCreateNestedManyWithoutOwnerInput;
    companyEmployees?: Prisma.EmployeeCreateNestedManyWithoutUserInput;
    jobsPosted?: Prisma.JobCreateNestedManyWithoutPostedByInput;
    resumes?: Prisma.ResumeCreateNestedManyWithoutUserInput;
    jobApplications?: Prisma.JobApplicationCreateNestedManyWithoutApplicantInput;
    products?: Prisma.ProductCreateNestedManyWithoutSellerInput;
    productReviewsWritten?: Prisma.ProductReviewCreateNestedManyWithoutReviewerInput;
    productReviewsReceived?: Prisma.ProductReviewCreateNestedManyWithoutRevieweeInput;
    booksAuthored?: Prisma.BookCreateNestedManyWithoutAuthorUserInput;
    bookPurchases?: Prisma.BookPurchaseCreateNestedManyWithoutUserInput;
    bookReviews?: Prisma.BookReviewCreateNestedManyWithoutUserInput;
    resourcesCreated?: Prisma.ResourceCreateNestedManyWithoutAuthorInput;
    portfolioProjects?: Prisma.PortfolioProjectCreateNestedManyWithoutUserInput;
    aiConversations?: Prisma.AIConversationCreateNestedManyWithoutUserInput;
};
export type UserUncheckedCreateWithoutServicesInput = {
    id?: string;
    name: string;
    username?: string | null;
    email: string;
    emailVerified?: boolean;
    image?: string | null;
    coverImage?: string | null;
    bio?: string | null;
    location?: string | null;
    skills?: Prisma.UserCreateskillsInput | string[];
    languages?: Prisma.UserCreatelanguagesInput | string[];
    timezone?: string | null;
    website?: string | null;
    github?: string | null;
    linkedin?: string | null;
    role?: string;
    status?: string;
    verificationStatus?: string;
    profileCompletion?: number;
    preferredCurrency?: string;
    stripeAccountId?: string | null;
    stripeOnboardingDone?: boolean;
    lastLoginAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    accounts?: Prisma.AccountUncheckedCreateNestedManyWithoutUserInput;
    sessions?: Prisma.SessionUncheckedCreateNestedManyWithoutUserInput;
    profile?: Prisma.ProfileUncheckedCreateNestedOneWithoutUserInput;
    freelancerProfile?: Prisma.FreelancerProfileUncheckedCreateNestedOneWithoutUserInput;
    buyerProfile?: Prisma.BuyerProfileUncheckedCreateNestedOneWithoutUserInput;
    portfolioItems?: Prisma.PortfolioUncheckedCreateNestedManyWithoutUserInput;
    ordersAsBuyer?: Prisma.OrderUncheckedCreateNestedManyWithoutBuyerInput;
    ordersAsFreelancer?: Prisma.OrderUncheckedCreateNestedManyWithoutFreelancerInput;
    reviewsWritten?: Prisma.ReviewUncheckedCreateNestedManyWithoutReviewerInput;
    reviewsReceived?: Prisma.ReviewUncheckedCreateNestedManyWithoutRevieweeInput;
    favorites?: Prisma.FavoriteUncheckedCreateNestedManyWithoutUserInput;
    cart?: Prisma.CartUncheckedCreateNestedOneWithoutUserInput;
    conversationParts?: Prisma.ConversationParticipantUncheckedCreateNestedManyWithoutUserInput;
    messages?: Prisma.MessageUncheckedCreateNestedManyWithoutSenderInput;
    notifications?: Prisma.NotificationUncheckedCreateNestedManyWithoutUserInput;
    payouts?: Prisma.PayoutUncheckedCreateNestedManyWithoutFreelancerInput;
    disputes?: Prisma.DisputeUncheckedCreateNestedManyWithoutOpenerInput;
    reports?: Prisma.ReportUncheckedCreateNestedManyWithoutReporterInput;
    achievements?: Prisma.UserAchievementUncheckedCreateNestedManyWithoutUserInput;
    xp?: Prisma.UserXPUncheckedCreateNestedOneWithoutUserInput;
    searchHistory?: Prisma.SearchHistoryUncheckedCreateNestedManyWithoutUserInput;
    userRoles?: Prisma.UserRoleUncheckedCreateNestedManyWithoutUserInput;
    companiesOwned?: Prisma.CompanyUncheckedCreateNestedManyWithoutOwnerInput;
    companyEmployees?: Prisma.EmployeeUncheckedCreateNestedManyWithoutUserInput;
    jobsPosted?: Prisma.JobUncheckedCreateNestedManyWithoutPostedByInput;
    resumes?: Prisma.ResumeUncheckedCreateNestedManyWithoutUserInput;
    jobApplications?: Prisma.JobApplicationUncheckedCreateNestedManyWithoutApplicantInput;
    products?: Prisma.ProductUncheckedCreateNestedManyWithoutSellerInput;
    productReviewsWritten?: Prisma.ProductReviewUncheckedCreateNestedManyWithoutReviewerInput;
    productReviewsReceived?: Prisma.ProductReviewUncheckedCreateNestedManyWithoutRevieweeInput;
    booksAuthored?: Prisma.BookUncheckedCreateNestedManyWithoutAuthorUserInput;
    bookPurchases?: Prisma.BookPurchaseUncheckedCreateNestedManyWithoutUserInput;
    bookReviews?: Prisma.BookReviewUncheckedCreateNestedManyWithoutUserInput;
    resourcesCreated?: Prisma.ResourceUncheckedCreateNestedManyWithoutAuthorInput;
    portfolioProjects?: Prisma.PortfolioProjectUncheckedCreateNestedManyWithoutUserInput;
    aiConversations?: Prisma.AIConversationUncheckedCreateNestedManyWithoutUserInput;
};
export type UserCreateOrConnectWithoutServicesInput = {
    where: Prisma.UserWhereUniqueInput;
    create: Prisma.XOR<Prisma.UserCreateWithoutServicesInput, Prisma.UserUncheckedCreateWithoutServicesInput>;
};
export type UserUpsertWithoutServicesInput = {
    update: Prisma.XOR<Prisma.UserUpdateWithoutServicesInput, Prisma.UserUncheckedUpdateWithoutServicesInput>;
    create: Prisma.XOR<Prisma.UserCreateWithoutServicesInput, Prisma.UserUncheckedCreateWithoutServicesInput>;
    where?: Prisma.UserWhereInput;
};
export type UserUpdateToOneWithWhereWithoutServicesInput = {
    where?: Prisma.UserWhereInput;
    data: Prisma.XOR<Prisma.UserUpdateWithoutServicesInput, Prisma.UserUncheckedUpdateWithoutServicesInput>;
};
export type UserUpdateWithoutServicesInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    username?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    emailVerified?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    image?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    coverImage?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    bio?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    location?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    skills?: Prisma.UserUpdateskillsInput | string[];
    languages?: Prisma.UserUpdatelanguagesInput | string[];
    timezone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    website?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    github?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    linkedin?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    role?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    verificationStatus?: Prisma.StringFieldUpdateOperationsInput | string;
    profileCompletion?: Prisma.IntFieldUpdateOperationsInput | number;
    preferredCurrency?: Prisma.StringFieldUpdateOperationsInput | string;
    stripeAccountId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    stripeOnboardingDone?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    lastLoginAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    accounts?: Prisma.AccountUpdateManyWithoutUserNestedInput;
    sessions?: Prisma.SessionUpdateManyWithoutUserNestedInput;
    profile?: Prisma.ProfileUpdateOneWithoutUserNestedInput;
    freelancerProfile?: Prisma.FreelancerProfileUpdateOneWithoutUserNestedInput;
    buyerProfile?: Prisma.BuyerProfileUpdateOneWithoutUserNestedInput;
    portfolioItems?: Prisma.PortfolioUpdateManyWithoutUserNestedInput;
    ordersAsBuyer?: Prisma.OrderUpdateManyWithoutBuyerNestedInput;
    ordersAsFreelancer?: Prisma.OrderUpdateManyWithoutFreelancerNestedInput;
    reviewsWritten?: Prisma.ReviewUpdateManyWithoutReviewerNestedInput;
    reviewsReceived?: Prisma.ReviewUpdateManyWithoutRevieweeNestedInput;
    favorites?: Prisma.FavoriteUpdateManyWithoutUserNestedInput;
    cart?: Prisma.CartUpdateOneWithoutUserNestedInput;
    conversationParts?: Prisma.ConversationParticipantUpdateManyWithoutUserNestedInput;
    messages?: Prisma.MessageUpdateManyWithoutSenderNestedInput;
    notifications?: Prisma.NotificationUpdateManyWithoutUserNestedInput;
    payouts?: Prisma.PayoutUpdateManyWithoutFreelancerNestedInput;
    disputes?: Prisma.DisputeUpdateManyWithoutOpenerNestedInput;
    reports?: Prisma.ReportUpdateManyWithoutReporterNestedInput;
    achievements?: Prisma.UserAchievementUpdateManyWithoutUserNestedInput;
    xp?: Prisma.UserXPUpdateOneWithoutUserNestedInput;
    searchHistory?: Prisma.SearchHistoryUpdateManyWithoutUserNestedInput;
    userRoles?: Prisma.UserRoleUpdateManyWithoutUserNestedInput;
    companiesOwned?: Prisma.CompanyUpdateManyWithoutOwnerNestedInput;
    companyEmployees?: Prisma.EmployeeUpdateManyWithoutUserNestedInput;
    jobsPosted?: Prisma.JobUpdateManyWithoutPostedByNestedInput;
    resumes?: Prisma.ResumeUpdateManyWithoutUserNestedInput;
    jobApplications?: Prisma.JobApplicationUpdateManyWithoutApplicantNestedInput;
    products?: Prisma.ProductUpdateManyWithoutSellerNestedInput;
    productReviewsWritten?: Prisma.ProductReviewUpdateManyWithoutReviewerNestedInput;
    productReviewsReceived?: Prisma.ProductReviewUpdateManyWithoutRevieweeNestedInput;
    booksAuthored?: Prisma.BookUpdateManyWithoutAuthorUserNestedInput;
    bookPurchases?: Prisma.BookPurchaseUpdateManyWithoutUserNestedInput;
    bookReviews?: Prisma.BookReviewUpdateManyWithoutUserNestedInput;
    resourcesCreated?: Prisma.ResourceUpdateManyWithoutAuthorNestedInput;
    portfolioProjects?: Prisma.PortfolioProjectUpdateManyWithoutUserNestedInput;
    aiConversations?: Prisma.AIConversationUpdateManyWithoutUserNestedInput;
};
export type UserUncheckedUpdateWithoutServicesInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    username?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    emailVerified?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    image?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    coverImage?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    bio?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    location?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    skills?: Prisma.UserUpdateskillsInput | string[];
    languages?: Prisma.UserUpdatelanguagesInput | string[];
    timezone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    website?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    github?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    linkedin?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    role?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    verificationStatus?: Prisma.StringFieldUpdateOperationsInput | string;
    profileCompletion?: Prisma.IntFieldUpdateOperationsInput | number;
    preferredCurrency?: Prisma.StringFieldUpdateOperationsInput | string;
    stripeAccountId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    stripeOnboardingDone?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    lastLoginAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    accounts?: Prisma.AccountUncheckedUpdateManyWithoutUserNestedInput;
    sessions?: Prisma.SessionUncheckedUpdateManyWithoutUserNestedInput;
    profile?: Prisma.ProfileUncheckedUpdateOneWithoutUserNestedInput;
    freelancerProfile?: Prisma.FreelancerProfileUncheckedUpdateOneWithoutUserNestedInput;
    buyerProfile?: Prisma.BuyerProfileUncheckedUpdateOneWithoutUserNestedInput;
    portfolioItems?: Prisma.PortfolioUncheckedUpdateManyWithoutUserNestedInput;
    ordersAsBuyer?: Prisma.OrderUncheckedUpdateManyWithoutBuyerNestedInput;
    ordersAsFreelancer?: Prisma.OrderUncheckedUpdateManyWithoutFreelancerNestedInput;
    reviewsWritten?: Prisma.ReviewUncheckedUpdateManyWithoutReviewerNestedInput;
    reviewsReceived?: Prisma.ReviewUncheckedUpdateManyWithoutRevieweeNestedInput;
    favorites?: Prisma.FavoriteUncheckedUpdateManyWithoutUserNestedInput;
    cart?: Prisma.CartUncheckedUpdateOneWithoutUserNestedInput;
    conversationParts?: Prisma.ConversationParticipantUncheckedUpdateManyWithoutUserNestedInput;
    messages?: Prisma.MessageUncheckedUpdateManyWithoutSenderNestedInput;
    notifications?: Prisma.NotificationUncheckedUpdateManyWithoutUserNestedInput;
    payouts?: Prisma.PayoutUncheckedUpdateManyWithoutFreelancerNestedInput;
    disputes?: Prisma.DisputeUncheckedUpdateManyWithoutOpenerNestedInput;
    reports?: Prisma.ReportUncheckedUpdateManyWithoutReporterNestedInput;
    achievements?: Prisma.UserAchievementUncheckedUpdateManyWithoutUserNestedInput;
    xp?: Prisma.UserXPUncheckedUpdateOneWithoutUserNestedInput;
    searchHistory?: Prisma.SearchHistoryUncheckedUpdateManyWithoutUserNestedInput;
    userRoles?: Prisma.UserRoleUncheckedUpdateManyWithoutUserNestedInput;
    companiesOwned?: Prisma.CompanyUncheckedUpdateManyWithoutOwnerNestedInput;
    companyEmployees?: Prisma.EmployeeUncheckedUpdateManyWithoutUserNestedInput;
    jobsPosted?: Prisma.JobUncheckedUpdateManyWithoutPostedByNestedInput;
    resumes?: Prisma.ResumeUncheckedUpdateManyWithoutUserNestedInput;
    jobApplications?: Prisma.JobApplicationUncheckedUpdateManyWithoutApplicantNestedInput;
    products?: Prisma.ProductUncheckedUpdateManyWithoutSellerNestedInput;
    productReviewsWritten?: Prisma.ProductReviewUncheckedUpdateManyWithoutReviewerNestedInput;
    productReviewsReceived?: Prisma.ProductReviewUncheckedUpdateManyWithoutRevieweeNestedInput;
    booksAuthored?: Prisma.BookUncheckedUpdateManyWithoutAuthorUserNestedInput;
    bookPurchases?: Prisma.BookPurchaseUncheckedUpdateManyWithoutUserNestedInput;
    bookReviews?: Prisma.BookReviewUncheckedUpdateManyWithoutUserNestedInput;
    resourcesCreated?: Prisma.ResourceUncheckedUpdateManyWithoutAuthorNestedInput;
    portfolioProjects?: Prisma.PortfolioProjectUncheckedUpdateManyWithoutUserNestedInput;
    aiConversations?: Prisma.AIConversationUncheckedUpdateManyWithoutUserNestedInput;
};
export type UserCreateWithoutPortfolioItemsInput = {
    id?: string;
    name: string;
    username?: string | null;
    email: string;
    emailVerified?: boolean;
    image?: string | null;
    coverImage?: string | null;
    bio?: string | null;
    location?: string | null;
    skills?: Prisma.UserCreateskillsInput | string[];
    languages?: Prisma.UserCreatelanguagesInput | string[];
    timezone?: string | null;
    website?: string | null;
    github?: string | null;
    linkedin?: string | null;
    role?: string;
    status?: string;
    verificationStatus?: string;
    profileCompletion?: number;
    preferredCurrency?: string;
    stripeAccountId?: string | null;
    stripeOnboardingDone?: boolean;
    lastLoginAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    accounts?: Prisma.AccountCreateNestedManyWithoutUserInput;
    sessions?: Prisma.SessionCreateNestedManyWithoutUserInput;
    profile?: Prisma.ProfileCreateNestedOneWithoutUserInput;
    freelancerProfile?: Prisma.FreelancerProfileCreateNestedOneWithoutUserInput;
    buyerProfile?: Prisma.BuyerProfileCreateNestedOneWithoutUserInput;
    services?: Prisma.ServiceCreateNestedManyWithoutUserInput;
    ordersAsBuyer?: Prisma.OrderCreateNestedManyWithoutBuyerInput;
    ordersAsFreelancer?: Prisma.OrderCreateNestedManyWithoutFreelancerInput;
    reviewsWritten?: Prisma.ReviewCreateNestedManyWithoutReviewerInput;
    reviewsReceived?: Prisma.ReviewCreateNestedManyWithoutRevieweeInput;
    favorites?: Prisma.FavoriteCreateNestedManyWithoutUserInput;
    cart?: Prisma.CartCreateNestedOneWithoutUserInput;
    conversationParts?: Prisma.ConversationParticipantCreateNestedManyWithoutUserInput;
    messages?: Prisma.MessageCreateNestedManyWithoutSenderInput;
    notifications?: Prisma.NotificationCreateNestedManyWithoutUserInput;
    payouts?: Prisma.PayoutCreateNestedManyWithoutFreelancerInput;
    disputes?: Prisma.DisputeCreateNestedManyWithoutOpenerInput;
    reports?: Prisma.ReportCreateNestedManyWithoutReporterInput;
    achievements?: Prisma.UserAchievementCreateNestedManyWithoutUserInput;
    xp?: Prisma.UserXPCreateNestedOneWithoutUserInput;
    searchHistory?: Prisma.SearchHistoryCreateNestedManyWithoutUserInput;
    userRoles?: Prisma.UserRoleCreateNestedManyWithoutUserInput;
    companiesOwned?: Prisma.CompanyCreateNestedManyWithoutOwnerInput;
    companyEmployees?: Prisma.EmployeeCreateNestedManyWithoutUserInput;
    jobsPosted?: Prisma.JobCreateNestedManyWithoutPostedByInput;
    resumes?: Prisma.ResumeCreateNestedManyWithoutUserInput;
    jobApplications?: Prisma.JobApplicationCreateNestedManyWithoutApplicantInput;
    products?: Prisma.ProductCreateNestedManyWithoutSellerInput;
    productReviewsWritten?: Prisma.ProductReviewCreateNestedManyWithoutReviewerInput;
    productReviewsReceived?: Prisma.ProductReviewCreateNestedManyWithoutRevieweeInput;
    booksAuthored?: Prisma.BookCreateNestedManyWithoutAuthorUserInput;
    bookPurchases?: Prisma.BookPurchaseCreateNestedManyWithoutUserInput;
    bookReviews?: Prisma.BookReviewCreateNestedManyWithoutUserInput;
    resourcesCreated?: Prisma.ResourceCreateNestedManyWithoutAuthorInput;
    portfolioProjects?: Prisma.PortfolioProjectCreateNestedManyWithoutUserInput;
    aiConversations?: Prisma.AIConversationCreateNestedManyWithoutUserInput;
};
export type UserUncheckedCreateWithoutPortfolioItemsInput = {
    id?: string;
    name: string;
    username?: string | null;
    email: string;
    emailVerified?: boolean;
    image?: string | null;
    coverImage?: string | null;
    bio?: string | null;
    location?: string | null;
    skills?: Prisma.UserCreateskillsInput | string[];
    languages?: Prisma.UserCreatelanguagesInput | string[];
    timezone?: string | null;
    website?: string | null;
    github?: string | null;
    linkedin?: string | null;
    role?: string;
    status?: string;
    verificationStatus?: string;
    profileCompletion?: number;
    preferredCurrency?: string;
    stripeAccountId?: string | null;
    stripeOnboardingDone?: boolean;
    lastLoginAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    accounts?: Prisma.AccountUncheckedCreateNestedManyWithoutUserInput;
    sessions?: Prisma.SessionUncheckedCreateNestedManyWithoutUserInput;
    profile?: Prisma.ProfileUncheckedCreateNestedOneWithoutUserInput;
    freelancerProfile?: Prisma.FreelancerProfileUncheckedCreateNestedOneWithoutUserInput;
    buyerProfile?: Prisma.BuyerProfileUncheckedCreateNestedOneWithoutUserInput;
    services?: Prisma.ServiceUncheckedCreateNestedManyWithoutUserInput;
    ordersAsBuyer?: Prisma.OrderUncheckedCreateNestedManyWithoutBuyerInput;
    ordersAsFreelancer?: Prisma.OrderUncheckedCreateNestedManyWithoutFreelancerInput;
    reviewsWritten?: Prisma.ReviewUncheckedCreateNestedManyWithoutReviewerInput;
    reviewsReceived?: Prisma.ReviewUncheckedCreateNestedManyWithoutRevieweeInput;
    favorites?: Prisma.FavoriteUncheckedCreateNestedManyWithoutUserInput;
    cart?: Prisma.CartUncheckedCreateNestedOneWithoutUserInput;
    conversationParts?: Prisma.ConversationParticipantUncheckedCreateNestedManyWithoutUserInput;
    messages?: Prisma.MessageUncheckedCreateNestedManyWithoutSenderInput;
    notifications?: Prisma.NotificationUncheckedCreateNestedManyWithoutUserInput;
    payouts?: Prisma.PayoutUncheckedCreateNestedManyWithoutFreelancerInput;
    disputes?: Prisma.DisputeUncheckedCreateNestedManyWithoutOpenerInput;
    reports?: Prisma.ReportUncheckedCreateNestedManyWithoutReporterInput;
    achievements?: Prisma.UserAchievementUncheckedCreateNestedManyWithoutUserInput;
    xp?: Prisma.UserXPUncheckedCreateNestedOneWithoutUserInput;
    searchHistory?: Prisma.SearchHistoryUncheckedCreateNestedManyWithoutUserInput;
    userRoles?: Prisma.UserRoleUncheckedCreateNestedManyWithoutUserInput;
    companiesOwned?: Prisma.CompanyUncheckedCreateNestedManyWithoutOwnerInput;
    companyEmployees?: Prisma.EmployeeUncheckedCreateNestedManyWithoutUserInput;
    jobsPosted?: Prisma.JobUncheckedCreateNestedManyWithoutPostedByInput;
    resumes?: Prisma.ResumeUncheckedCreateNestedManyWithoutUserInput;
    jobApplications?: Prisma.JobApplicationUncheckedCreateNestedManyWithoutApplicantInput;
    products?: Prisma.ProductUncheckedCreateNestedManyWithoutSellerInput;
    productReviewsWritten?: Prisma.ProductReviewUncheckedCreateNestedManyWithoutReviewerInput;
    productReviewsReceived?: Prisma.ProductReviewUncheckedCreateNestedManyWithoutRevieweeInput;
    booksAuthored?: Prisma.BookUncheckedCreateNestedManyWithoutAuthorUserInput;
    bookPurchases?: Prisma.BookPurchaseUncheckedCreateNestedManyWithoutUserInput;
    bookReviews?: Prisma.BookReviewUncheckedCreateNestedManyWithoutUserInput;
    resourcesCreated?: Prisma.ResourceUncheckedCreateNestedManyWithoutAuthorInput;
    portfolioProjects?: Prisma.PortfolioProjectUncheckedCreateNestedManyWithoutUserInput;
    aiConversations?: Prisma.AIConversationUncheckedCreateNestedManyWithoutUserInput;
};
export type UserCreateOrConnectWithoutPortfolioItemsInput = {
    where: Prisma.UserWhereUniqueInput;
    create: Prisma.XOR<Prisma.UserCreateWithoutPortfolioItemsInput, Prisma.UserUncheckedCreateWithoutPortfolioItemsInput>;
};
export type UserUpsertWithoutPortfolioItemsInput = {
    update: Prisma.XOR<Prisma.UserUpdateWithoutPortfolioItemsInput, Prisma.UserUncheckedUpdateWithoutPortfolioItemsInput>;
    create: Prisma.XOR<Prisma.UserCreateWithoutPortfolioItemsInput, Prisma.UserUncheckedCreateWithoutPortfolioItemsInput>;
    where?: Prisma.UserWhereInput;
};
export type UserUpdateToOneWithWhereWithoutPortfolioItemsInput = {
    where?: Prisma.UserWhereInput;
    data: Prisma.XOR<Prisma.UserUpdateWithoutPortfolioItemsInput, Prisma.UserUncheckedUpdateWithoutPortfolioItemsInput>;
};
export type UserUpdateWithoutPortfolioItemsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    username?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    emailVerified?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    image?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    coverImage?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    bio?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    location?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    skills?: Prisma.UserUpdateskillsInput | string[];
    languages?: Prisma.UserUpdatelanguagesInput | string[];
    timezone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    website?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    github?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    linkedin?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    role?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    verificationStatus?: Prisma.StringFieldUpdateOperationsInput | string;
    profileCompletion?: Prisma.IntFieldUpdateOperationsInput | number;
    preferredCurrency?: Prisma.StringFieldUpdateOperationsInput | string;
    stripeAccountId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    stripeOnboardingDone?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    lastLoginAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    accounts?: Prisma.AccountUpdateManyWithoutUserNestedInput;
    sessions?: Prisma.SessionUpdateManyWithoutUserNestedInput;
    profile?: Prisma.ProfileUpdateOneWithoutUserNestedInput;
    freelancerProfile?: Prisma.FreelancerProfileUpdateOneWithoutUserNestedInput;
    buyerProfile?: Prisma.BuyerProfileUpdateOneWithoutUserNestedInput;
    services?: Prisma.ServiceUpdateManyWithoutUserNestedInput;
    ordersAsBuyer?: Prisma.OrderUpdateManyWithoutBuyerNestedInput;
    ordersAsFreelancer?: Prisma.OrderUpdateManyWithoutFreelancerNestedInput;
    reviewsWritten?: Prisma.ReviewUpdateManyWithoutReviewerNestedInput;
    reviewsReceived?: Prisma.ReviewUpdateManyWithoutRevieweeNestedInput;
    favorites?: Prisma.FavoriteUpdateManyWithoutUserNestedInput;
    cart?: Prisma.CartUpdateOneWithoutUserNestedInput;
    conversationParts?: Prisma.ConversationParticipantUpdateManyWithoutUserNestedInput;
    messages?: Prisma.MessageUpdateManyWithoutSenderNestedInput;
    notifications?: Prisma.NotificationUpdateManyWithoutUserNestedInput;
    payouts?: Prisma.PayoutUpdateManyWithoutFreelancerNestedInput;
    disputes?: Prisma.DisputeUpdateManyWithoutOpenerNestedInput;
    reports?: Prisma.ReportUpdateManyWithoutReporterNestedInput;
    achievements?: Prisma.UserAchievementUpdateManyWithoutUserNestedInput;
    xp?: Prisma.UserXPUpdateOneWithoutUserNestedInput;
    searchHistory?: Prisma.SearchHistoryUpdateManyWithoutUserNestedInput;
    userRoles?: Prisma.UserRoleUpdateManyWithoutUserNestedInput;
    companiesOwned?: Prisma.CompanyUpdateManyWithoutOwnerNestedInput;
    companyEmployees?: Prisma.EmployeeUpdateManyWithoutUserNestedInput;
    jobsPosted?: Prisma.JobUpdateManyWithoutPostedByNestedInput;
    resumes?: Prisma.ResumeUpdateManyWithoutUserNestedInput;
    jobApplications?: Prisma.JobApplicationUpdateManyWithoutApplicantNestedInput;
    products?: Prisma.ProductUpdateManyWithoutSellerNestedInput;
    productReviewsWritten?: Prisma.ProductReviewUpdateManyWithoutReviewerNestedInput;
    productReviewsReceived?: Prisma.ProductReviewUpdateManyWithoutRevieweeNestedInput;
    booksAuthored?: Prisma.BookUpdateManyWithoutAuthorUserNestedInput;
    bookPurchases?: Prisma.BookPurchaseUpdateManyWithoutUserNestedInput;
    bookReviews?: Prisma.BookReviewUpdateManyWithoutUserNestedInput;
    resourcesCreated?: Prisma.ResourceUpdateManyWithoutAuthorNestedInput;
    portfolioProjects?: Prisma.PortfolioProjectUpdateManyWithoutUserNestedInput;
    aiConversations?: Prisma.AIConversationUpdateManyWithoutUserNestedInput;
};
export type UserUncheckedUpdateWithoutPortfolioItemsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    username?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    emailVerified?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    image?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    coverImage?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    bio?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    location?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    skills?: Prisma.UserUpdateskillsInput | string[];
    languages?: Prisma.UserUpdatelanguagesInput | string[];
    timezone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    website?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    github?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    linkedin?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    role?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    verificationStatus?: Prisma.StringFieldUpdateOperationsInput | string;
    profileCompletion?: Prisma.IntFieldUpdateOperationsInput | number;
    preferredCurrency?: Prisma.StringFieldUpdateOperationsInput | string;
    stripeAccountId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    stripeOnboardingDone?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    lastLoginAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    accounts?: Prisma.AccountUncheckedUpdateManyWithoutUserNestedInput;
    sessions?: Prisma.SessionUncheckedUpdateManyWithoutUserNestedInput;
    profile?: Prisma.ProfileUncheckedUpdateOneWithoutUserNestedInput;
    freelancerProfile?: Prisma.FreelancerProfileUncheckedUpdateOneWithoutUserNestedInput;
    buyerProfile?: Prisma.BuyerProfileUncheckedUpdateOneWithoutUserNestedInput;
    services?: Prisma.ServiceUncheckedUpdateManyWithoutUserNestedInput;
    ordersAsBuyer?: Prisma.OrderUncheckedUpdateManyWithoutBuyerNestedInput;
    ordersAsFreelancer?: Prisma.OrderUncheckedUpdateManyWithoutFreelancerNestedInput;
    reviewsWritten?: Prisma.ReviewUncheckedUpdateManyWithoutReviewerNestedInput;
    reviewsReceived?: Prisma.ReviewUncheckedUpdateManyWithoutRevieweeNestedInput;
    favorites?: Prisma.FavoriteUncheckedUpdateManyWithoutUserNestedInput;
    cart?: Prisma.CartUncheckedUpdateOneWithoutUserNestedInput;
    conversationParts?: Prisma.ConversationParticipantUncheckedUpdateManyWithoutUserNestedInput;
    messages?: Prisma.MessageUncheckedUpdateManyWithoutSenderNestedInput;
    notifications?: Prisma.NotificationUncheckedUpdateManyWithoutUserNestedInput;
    payouts?: Prisma.PayoutUncheckedUpdateManyWithoutFreelancerNestedInput;
    disputes?: Prisma.DisputeUncheckedUpdateManyWithoutOpenerNestedInput;
    reports?: Prisma.ReportUncheckedUpdateManyWithoutReporterNestedInput;
    achievements?: Prisma.UserAchievementUncheckedUpdateManyWithoutUserNestedInput;
    xp?: Prisma.UserXPUncheckedUpdateOneWithoutUserNestedInput;
    searchHistory?: Prisma.SearchHistoryUncheckedUpdateManyWithoutUserNestedInput;
    userRoles?: Prisma.UserRoleUncheckedUpdateManyWithoutUserNestedInput;
    companiesOwned?: Prisma.CompanyUncheckedUpdateManyWithoutOwnerNestedInput;
    companyEmployees?: Prisma.EmployeeUncheckedUpdateManyWithoutUserNestedInput;
    jobsPosted?: Prisma.JobUncheckedUpdateManyWithoutPostedByNestedInput;
    resumes?: Prisma.ResumeUncheckedUpdateManyWithoutUserNestedInput;
    jobApplications?: Prisma.JobApplicationUncheckedUpdateManyWithoutApplicantNestedInput;
    products?: Prisma.ProductUncheckedUpdateManyWithoutSellerNestedInput;
    productReviewsWritten?: Prisma.ProductReviewUncheckedUpdateManyWithoutReviewerNestedInput;
    productReviewsReceived?: Prisma.ProductReviewUncheckedUpdateManyWithoutRevieweeNestedInput;
    booksAuthored?: Prisma.BookUncheckedUpdateManyWithoutAuthorUserNestedInput;
    bookPurchases?: Prisma.BookPurchaseUncheckedUpdateManyWithoutUserNestedInput;
    bookReviews?: Prisma.BookReviewUncheckedUpdateManyWithoutUserNestedInput;
    resourcesCreated?: Prisma.ResourceUncheckedUpdateManyWithoutAuthorNestedInput;
    portfolioProjects?: Prisma.PortfolioProjectUncheckedUpdateManyWithoutUserNestedInput;
    aiConversations?: Prisma.AIConversationUncheckedUpdateManyWithoutUserNestedInput;
};
export type UserCreateWithoutOrdersAsBuyerInput = {
    id?: string;
    name: string;
    username?: string | null;
    email: string;
    emailVerified?: boolean;
    image?: string | null;
    coverImage?: string | null;
    bio?: string | null;
    location?: string | null;
    skills?: Prisma.UserCreateskillsInput | string[];
    languages?: Prisma.UserCreatelanguagesInput | string[];
    timezone?: string | null;
    website?: string | null;
    github?: string | null;
    linkedin?: string | null;
    role?: string;
    status?: string;
    verificationStatus?: string;
    profileCompletion?: number;
    preferredCurrency?: string;
    stripeAccountId?: string | null;
    stripeOnboardingDone?: boolean;
    lastLoginAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    accounts?: Prisma.AccountCreateNestedManyWithoutUserInput;
    sessions?: Prisma.SessionCreateNestedManyWithoutUserInput;
    profile?: Prisma.ProfileCreateNestedOneWithoutUserInput;
    freelancerProfile?: Prisma.FreelancerProfileCreateNestedOneWithoutUserInput;
    buyerProfile?: Prisma.BuyerProfileCreateNestedOneWithoutUserInput;
    portfolioItems?: Prisma.PortfolioCreateNestedManyWithoutUserInput;
    services?: Prisma.ServiceCreateNestedManyWithoutUserInput;
    ordersAsFreelancer?: Prisma.OrderCreateNestedManyWithoutFreelancerInput;
    reviewsWritten?: Prisma.ReviewCreateNestedManyWithoutReviewerInput;
    reviewsReceived?: Prisma.ReviewCreateNestedManyWithoutRevieweeInput;
    favorites?: Prisma.FavoriteCreateNestedManyWithoutUserInput;
    cart?: Prisma.CartCreateNestedOneWithoutUserInput;
    conversationParts?: Prisma.ConversationParticipantCreateNestedManyWithoutUserInput;
    messages?: Prisma.MessageCreateNestedManyWithoutSenderInput;
    notifications?: Prisma.NotificationCreateNestedManyWithoutUserInput;
    payouts?: Prisma.PayoutCreateNestedManyWithoutFreelancerInput;
    disputes?: Prisma.DisputeCreateNestedManyWithoutOpenerInput;
    reports?: Prisma.ReportCreateNestedManyWithoutReporterInput;
    achievements?: Prisma.UserAchievementCreateNestedManyWithoutUserInput;
    xp?: Prisma.UserXPCreateNestedOneWithoutUserInput;
    searchHistory?: Prisma.SearchHistoryCreateNestedManyWithoutUserInput;
    userRoles?: Prisma.UserRoleCreateNestedManyWithoutUserInput;
    companiesOwned?: Prisma.CompanyCreateNestedManyWithoutOwnerInput;
    companyEmployees?: Prisma.EmployeeCreateNestedManyWithoutUserInput;
    jobsPosted?: Prisma.JobCreateNestedManyWithoutPostedByInput;
    resumes?: Prisma.ResumeCreateNestedManyWithoutUserInput;
    jobApplications?: Prisma.JobApplicationCreateNestedManyWithoutApplicantInput;
    products?: Prisma.ProductCreateNestedManyWithoutSellerInput;
    productReviewsWritten?: Prisma.ProductReviewCreateNestedManyWithoutReviewerInput;
    productReviewsReceived?: Prisma.ProductReviewCreateNestedManyWithoutRevieweeInput;
    booksAuthored?: Prisma.BookCreateNestedManyWithoutAuthorUserInput;
    bookPurchases?: Prisma.BookPurchaseCreateNestedManyWithoutUserInput;
    bookReviews?: Prisma.BookReviewCreateNestedManyWithoutUserInput;
    resourcesCreated?: Prisma.ResourceCreateNestedManyWithoutAuthorInput;
    portfolioProjects?: Prisma.PortfolioProjectCreateNestedManyWithoutUserInput;
    aiConversations?: Prisma.AIConversationCreateNestedManyWithoutUserInput;
};
export type UserUncheckedCreateWithoutOrdersAsBuyerInput = {
    id?: string;
    name: string;
    username?: string | null;
    email: string;
    emailVerified?: boolean;
    image?: string | null;
    coverImage?: string | null;
    bio?: string | null;
    location?: string | null;
    skills?: Prisma.UserCreateskillsInput | string[];
    languages?: Prisma.UserCreatelanguagesInput | string[];
    timezone?: string | null;
    website?: string | null;
    github?: string | null;
    linkedin?: string | null;
    role?: string;
    status?: string;
    verificationStatus?: string;
    profileCompletion?: number;
    preferredCurrency?: string;
    stripeAccountId?: string | null;
    stripeOnboardingDone?: boolean;
    lastLoginAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    accounts?: Prisma.AccountUncheckedCreateNestedManyWithoutUserInput;
    sessions?: Prisma.SessionUncheckedCreateNestedManyWithoutUserInput;
    profile?: Prisma.ProfileUncheckedCreateNestedOneWithoutUserInput;
    freelancerProfile?: Prisma.FreelancerProfileUncheckedCreateNestedOneWithoutUserInput;
    buyerProfile?: Prisma.BuyerProfileUncheckedCreateNestedOneWithoutUserInput;
    portfolioItems?: Prisma.PortfolioUncheckedCreateNestedManyWithoutUserInput;
    services?: Prisma.ServiceUncheckedCreateNestedManyWithoutUserInput;
    ordersAsFreelancer?: Prisma.OrderUncheckedCreateNestedManyWithoutFreelancerInput;
    reviewsWritten?: Prisma.ReviewUncheckedCreateNestedManyWithoutReviewerInput;
    reviewsReceived?: Prisma.ReviewUncheckedCreateNestedManyWithoutRevieweeInput;
    favorites?: Prisma.FavoriteUncheckedCreateNestedManyWithoutUserInput;
    cart?: Prisma.CartUncheckedCreateNestedOneWithoutUserInput;
    conversationParts?: Prisma.ConversationParticipantUncheckedCreateNestedManyWithoutUserInput;
    messages?: Prisma.MessageUncheckedCreateNestedManyWithoutSenderInput;
    notifications?: Prisma.NotificationUncheckedCreateNestedManyWithoutUserInput;
    payouts?: Prisma.PayoutUncheckedCreateNestedManyWithoutFreelancerInput;
    disputes?: Prisma.DisputeUncheckedCreateNestedManyWithoutOpenerInput;
    reports?: Prisma.ReportUncheckedCreateNestedManyWithoutReporterInput;
    achievements?: Prisma.UserAchievementUncheckedCreateNestedManyWithoutUserInput;
    xp?: Prisma.UserXPUncheckedCreateNestedOneWithoutUserInput;
    searchHistory?: Prisma.SearchHistoryUncheckedCreateNestedManyWithoutUserInput;
    userRoles?: Prisma.UserRoleUncheckedCreateNestedManyWithoutUserInput;
    companiesOwned?: Prisma.CompanyUncheckedCreateNestedManyWithoutOwnerInput;
    companyEmployees?: Prisma.EmployeeUncheckedCreateNestedManyWithoutUserInput;
    jobsPosted?: Prisma.JobUncheckedCreateNestedManyWithoutPostedByInput;
    resumes?: Prisma.ResumeUncheckedCreateNestedManyWithoutUserInput;
    jobApplications?: Prisma.JobApplicationUncheckedCreateNestedManyWithoutApplicantInput;
    products?: Prisma.ProductUncheckedCreateNestedManyWithoutSellerInput;
    productReviewsWritten?: Prisma.ProductReviewUncheckedCreateNestedManyWithoutReviewerInput;
    productReviewsReceived?: Prisma.ProductReviewUncheckedCreateNestedManyWithoutRevieweeInput;
    booksAuthored?: Prisma.BookUncheckedCreateNestedManyWithoutAuthorUserInput;
    bookPurchases?: Prisma.BookPurchaseUncheckedCreateNestedManyWithoutUserInput;
    bookReviews?: Prisma.BookReviewUncheckedCreateNestedManyWithoutUserInput;
    resourcesCreated?: Prisma.ResourceUncheckedCreateNestedManyWithoutAuthorInput;
    portfolioProjects?: Prisma.PortfolioProjectUncheckedCreateNestedManyWithoutUserInput;
    aiConversations?: Prisma.AIConversationUncheckedCreateNestedManyWithoutUserInput;
};
export type UserCreateOrConnectWithoutOrdersAsBuyerInput = {
    where: Prisma.UserWhereUniqueInput;
    create: Prisma.XOR<Prisma.UserCreateWithoutOrdersAsBuyerInput, Prisma.UserUncheckedCreateWithoutOrdersAsBuyerInput>;
};
export type UserCreateWithoutOrdersAsFreelancerInput = {
    id?: string;
    name: string;
    username?: string | null;
    email: string;
    emailVerified?: boolean;
    image?: string | null;
    coverImage?: string | null;
    bio?: string | null;
    location?: string | null;
    skills?: Prisma.UserCreateskillsInput | string[];
    languages?: Prisma.UserCreatelanguagesInput | string[];
    timezone?: string | null;
    website?: string | null;
    github?: string | null;
    linkedin?: string | null;
    role?: string;
    status?: string;
    verificationStatus?: string;
    profileCompletion?: number;
    preferredCurrency?: string;
    stripeAccountId?: string | null;
    stripeOnboardingDone?: boolean;
    lastLoginAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    accounts?: Prisma.AccountCreateNestedManyWithoutUserInput;
    sessions?: Prisma.SessionCreateNestedManyWithoutUserInput;
    profile?: Prisma.ProfileCreateNestedOneWithoutUserInput;
    freelancerProfile?: Prisma.FreelancerProfileCreateNestedOneWithoutUserInput;
    buyerProfile?: Prisma.BuyerProfileCreateNestedOneWithoutUserInput;
    portfolioItems?: Prisma.PortfolioCreateNestedManyWithoutUserInput;
    services?: Prisma.ServiceCreateNestedManyWithoutUserInput;
    ordersAsBuyer?: Prisma.OrderCreateNestedManyWithoutBuyerInput;
    reviewsWritten?: Prisma.ReviewCreateNestedManyWithoutReviewerInput;
    reviewsReceived?: Prisma.ReviewCreateNestedManyWithoutRevieweeInput;
    favorites?: Prisma.FavoriteCreateNestedManyWithoutUserInput;
    cart?: Prisma.CartCreateNestedOneWithoutUserInput;
    conversationParts?: Prisma.ConversationParticipantCreateNestedManyWithoutUserInput;
    messages?: Prisma.MessageCreateNestedManyWithoutSenderInput;
    notifications?: Prisma.NotificationCreateNestedManyWithoutUserInput;
    payouts?: Prisma.PayoutCreateNestedManyWithoutFreelancerInput;
    disputes?: Prisma.DisputeCreateNestedManyWithoutOpenerInput;
    reports?: Prisma.ReportCreateNestedManyWithoutReporterInput;
    achievements?: Prisma.UserAchievementCreateNestedManyWithoutUserInput;
    xp?: Prisma.UserXPCreateNestedOneWithoutUserInput;
    searchHistory?: Prisma.SearchHistoryCreateNestedManyWithoutUserInput;
    userRoles?: Prisma.UserRoleCreateNestedManyWithoutUserInput;
    companiesOwned?: Prisma.CompanyCreateNestedManyWithoutOwnerInput;
    companyEmployees?: Prisma.EmployeeCreateNestedManyWithoutUserInput;
    jobsPosted?: Prisma.JobCreateNestedManyWithoutPostedByInput;
    resumes?: Prisma.ResumeCreateNestedManyWithoutUserInput;
    jobApplications?: Prisma.JobApplicationCreateNestedManyWithoutApplicantInput;
    products?: Prisma.ProductCreateNestedManyWithoutSellerInput;
    productReviewsWritten?: Prisma.ProductReviewCreateNestedManyWithoutReviewerInput;
    productReviewsReceived?: Prisma.ProductReviewCreateNestedManyWithoutRevieweeInput;
    booksAuthored?: Prisma.BookCreateNestedManyWithoutAuthorUserInput;
    bookPurchases?: Prisma.BookPurchaseCreateNestedManyWithoutUserInput;
    bookReviews?: Prisma.BookReviewCreateNestedManyWithoutUserInput;
    resourcesCreated?: Prisma.ResourceCreateNestedManyWithoutAuthorInput;
    portfolioProjects?: Prisma.PortfolioProjectCreateNestedManyWithoutUserInput;
    aiConversations?: Prisma.AIConversationCreateNestedManyWithoutUserInput;
};
export type UserUncheckedCreateWithoutOrdersAsFreelancerInput = {
    id?: string;
    name: string;
    username?: string | null;
    email: string;
    emailVerified?: boolean;
    image?: string | null;
    coverImage?: string | null;
    bio?: string | null;
    location?: string | null;
    skills?: Prisma.UserCreateskillsInput | string[];
    languages?: Prisma.UserCreatelanguagesInput | string[];
    timezone?: string | null;
    website?: string | null;
    github?: string | null;
    linkedin?: string | null;
    role?: string;
    status?: string;
    verificationStatus?: string;
    profileCompletion?: number;
    preferredCurrency?: string;
    stripeAccountId?: string | null;
    stripeOnboardingDone?: boolean;
    lastLoginAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    accounts?: Prisma.AccountUncheckedCreateNestedManyWithoutUserInput;
    sessions?: Prisma.SessionUncheckedCreateNestedManyWithoutUserInput;
    profile?: Prisma.ProfileUncheckedCreateNestedOneWithoutUserInput;
    freelancerProfile?: Prisma.FreelancerProfileUncheckedCreateNestedOneWithoutUserInput;
    buyerProfile?: Prisma.BuyerProfileUncheckedCreateNestedOneWithoutUserInput;
    portfolioItems?: Prisma.PortfolioUncheckedCreateNestedManyWithoutUserInput;
    services?: Prisma.ServiceUncheckedCreateNestedManyWithoutUserInput;
    ordersAsBuyer?: Prisma.OrderUncheckedCreateNestedManyWithoutBuyerInput;
    reviewsWritten?: Prisma.ReviewUncheckedCreateNestedManyWithoutReviewerInput;
    reviewsReceived?: Prisma.ReviewUncheckedCreateNestedManyWithoutRevieweeInput;
    favorites?: Prisma.FavoriteUncheckedCreateNestedManyWithoutUserInput;
    cart?: Prisma.CartUncheckedCreateNestedOneWithoutUserInput;
    conversationParts?: Prisma.ConversationParticipantUncheckedCreateNestedManyWithoutUserInput;
    messages?: Prisma.MessageUncheckedCreateNestedManyWithoutSenderInput;
    notifications?: Prisma.NotificationUncheckedCreateNestedManyWithoutUserInput;
    payouts?: Prisma.PayoutUncheckedCreateNestedManyWithoutFreelancerInput;
    disputes?: Prisma.DisputeUncheckedCreateNestedManyWithoutOpenerInput;
    reports?: Prisma.ReportUncheckedCreateNestedManyWithoutReporterInput;
    achievements?: Prisma.UserAchievementUncheckedCreateNestedManyWithoutUserInput;
    xp?: Prisma.UserXPUncheckedCreateNestedOneWithoutUserInput;
    searchHistory?: Prisma.SearchHistoryUncheckedCreateNestedManyWithoutUserInput;
    userRoles?: Prisma.UserRoleUncheckedCreateNestedManyWithoutUserInput;
    companiesOwned?: Prisma.CompanyUncheckedCreateNestedManyWithoutOwnerInput;
    companyEmployees?: Prisma.EmployeeUncheckedCreateNestedManyWithoutUserInput;
    jobsPosted?: Prisma.JobUncheckedCreateNestedManyWithoutPostedByInput;
    resumes?: Prisma.ResumeUncheckedCreateNestedManyWithoutUserInput;
    jobApplications?: Prisma.JobApplicationUncheckedCreateNestedManyWithoutApplicantInput;
    products?: Prisma.ProductUncheckedCreateNestedManyWithoutSellerInput;
    productReviewsWritten?: Prisma.ProductReviewUncheckedCreateNestedManyWithoutReviewerInput;
    productReviewsReceived?: Prisma.ProductReviewUncheckedCreateNestedManyWithoutRevieweeInput;
    booksAuthored?: Prisma.BookUncheckedCreateNestedManyWithoutAuthorUserInput;
    bookPurchases?: Prisma.BookPurchaseUncheckedCreateNestedManyWithoutUserInput;
    bookReviews?: Prisma.BookReviewUncheckedCreateNestedManyWithoutUserInput;
    resourcesCreated?: Prisma.ResourceUncheckedCreateNestedManyWithoutAuthorInput;
    portfolioProjects?: Prisma.PortfolioProjectUncheckedCreateNestedManyWithoutUserInput;
    aiConversations?: Prisma.AIConversationUncheckedCreateNestedManyWithoutUserInput;
};
export type UserCreateOrConnectWithoutOrdersAsFreelancerInput = {
    where: Prisma.UserWhereUniqueInput;
    create: Prisma.XOR<Prisma.UserCreateWithoutOrdersAsFreelancerInput, Prisma.UserUncheckedCreateWithoutOrdersAsFreelancerInput>;
};
export type UserUpsertWithoutOrdersAsBuyerInput = {
    update: Prisma.XOR<Prisma.UserUpdateWithoutOrdersAsBuyerInput, Prisma.UserUncheckedUpdateWithoutOrdersAsBuyerInput>;
    create: Prisma.XOR<Prisma.UserCreateWithoutOrdersAsBuyerInput, Prisma.UserUncheckedCreateWithoutOrdersAsBuyerInput>;
    where?: Prisma.UserWhereInput;
};
export type UserUpdateToOneWithWhereWithoutOrdersAsBuyerInput = {
    where?: Prisma.UserWhereInput;
    data: Prisma.XOR<Prisma.UserUpdateWithoutOrdersAsBuyerInput, Prisma.UserUncheckedUpdateWithoutOrdersAsBuyerInput>;
};
export type UserUpdateWithoutOrdersAsBuyerInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    username?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    emailVerified?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    image?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    coverImage?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    bio?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    location?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    skills?: Prisma.UserUpdateskillsInput | string[];
    languages?: Prisma.UserUpdatelanguagesInput | string[];
    timezone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    website?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    github?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    linkedin?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    role?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    verificationStatus?: Prisma.StringFieldUpdateOperationsInput | string;
    profileCompletion?: Prisma.IntFieldUpdateOperationsInput | number;
    preferredCurrency?: Prisma.StringFieldUpdateOperationsInput | string;
    stripeAccountId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    stripeOnboardingDone?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    lastLoginAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    accounts?: Prisma.AccountUpdateManyWithoutUserNestedInput;
    sessions?: Prisma.SessionUpdateManyWithoutUserNestedInput;
    profile?: Prisma.ProfileUpdateOneWithoutUserNestedInput;
    freelancerProfile?: Prisma.FreelancerProfileUpdateOneWithoutUserNestedInput;
    buyerProfile?: Prisma.BuyerProfileUpdateOneWithoutUserNestedInput;
    portfolioItems?: Prisma.PortfolioUpdateManyWithoutUserNestedInput;
    services?: Prisma.ServiceUpdateManyWithoutUserNestedInput;
    ordersAsFreelancer?: Prisma.OrderUpdateManyWithoutFreelancerNestedInput;
    reviewsWritten?: Prisma.ReviewUpdateManyWithoutReviewerNestedInput;
    reviewsReceived?: Prisma.ReviewUpdateManyWithoutRevieweeNestedInput;
    favorites?: Prisma.FavoriteUpdateManyWithoutUserNestedInput;
    cart?: Prisma.CartUpdateOneWithoutUserNestedInput;
    conversationParts?: Prisma.ConversationParticipantUpdateManyWithoutUserNestedInput;
    messages?: Prisma.MessageUpdateManyWithoutSenderNestedInput;
    notifications?: Prisma.NotificationUpdateManyWithoutUserNestedInput;
    payouts?: Prisma.PayoutUpdateManyWithoutFreelancerNestedInput;
    disputes?: Prisma.DisputeUpdateManyWithoutOpenerNestedInput;
    reports?: Prisma.ReportUpdateManyWithoutReporterNestedInput;
    achievements?: Prisma.UserAchievementUpdateManyWithoutUserNestedInput;
    xp?: Prisma.UserXPUpdateOneWithoutUserNestedInput;
    searchHistory?: Prisma.SearchHistoryUpdateManyWithoutUserNestedInput;
    userRoles?: Prisma.UserRoleUpdateManyWithoutUserNestedInput;
    companiesOwned?: Prisma.CompanyUpdateManyWithoutOwnerNestedInput;
    companyEmployees?: Prisma.EmployeeUpdateManyWithoutUserNestedInput;
    jobsPosted?: Prisma.JobUpdateManyWithoutPostedByNestedInput;
    resumes?: Prisma.ResumeUpdateManyWithoutUserNestedInput;
    jobApplications?: Prisma.JobApplicationUpdateManyWithoutApplicantNestedInput;
    products?: Prisma.ProductUpdateManyWithoutSellerNestedInput;
    productReviewsWritten?: Prisma.ProductReviewUpdateManyWithoutReviewerNestedInput;
    productReviewsReceived?: Prisma.ProductReviewUpdateManyWithoutRevieweeNestedInput;
    booksAuthored?: Prisma.BookUpdateManyWithoutAuthorUserNestedInput;
    bookPurchases?: Prisma.BookPurchaseUpdateManyWithoutUserNestedInput;
    bookReviews?: Prisma.BookReviewUpdateManyWithoutUserNestedInput;
    resourcesCreated?: Prisma.ResourceUpdateManyWithoutAuthorNestedInput;
    portfolioProjects?: Prisma.PortfolioProjectUpdateManyWithoutUserNestedInput;
    aiConversations?: Prisma.AIConversationUpdateManyWithoutUserNestedInput;
};
export type UserUncheckedUpdateWithoutOrdersAsBuyerInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    username?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    emailVerified?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    image?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    coverImage?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    bio?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    location?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    skills?: Prisma.UserUpdateskillsInput | string[];
    languages?: Prisma.UserUpdatelanguagesInput | string[];
    timezone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    website?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    github?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    linkedin?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    role?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    verificationStatus?: Prisma.StringFieldUpdateOperationsInput | string;
    profileCompletion?: Prisma.IntFieldUpdateOperationsInput | number;
    preferredCurrency?: Prisma.StringFieldUpdateOperationsInput | string;
    stripeAccountId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    stripeOnboardingDone?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    lastLoginAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    accounts?: Prisma.AccountUncheckedUpdateManyWithoutUserNestedInput;
    sessions?: Prisma.SessionUncheckedUpdateManyWithoutUserNestedInput;
    profile?: Prisma.ProfileUncheckedUpdateOneWithoutUserNestedInput;
    freelancerProfile?: Prisma.FreelancerProfileUncheckedUpdateOneWithoutUserNestedInput;
    buyerProfile?: Prisma.BuyerProfileUncheckedUpdateOneWithoutUserNestedInput;
    portfolioItems?: Prisma.PortfolioUncheckedUpdateManyWithoutUserNestedInput;
    services?: Prisma.ServiceUncheckedUpdateManyWithoutUserNestedInput;
    ordersAsFreelancer?: Prisma.OrderUncheckedUpdateManyWithoutFreelancerNestedInput;
    reviewsWritten?: Prisma.ReviewUncheckedUpdateManyWithoutReviewerNestedInput;
    reviewsReceived?: Prisma.ReviewUncheckedUpdateManyWithoutRevieweeNestedInput;
    favorites?: Prisma.FavoriteUncheckedUpdateManyWithoutUserNestedInput;
    cart?: Prisma.CartUncheckedUpdateOneWithoutUserNestedInput;
    conversationParts?: Prisma.ConversationParticipantUncheckedUpdateManyWithoutUserNestedInput;
    messages?: Prisma.MessageUncheckedUpdateManyWithoutSenderNestedInput;
    notifications?: Prisma.NotificationUncheckedUpdateManyWithoutUserNestedInput;
    payouts?: Prisma.PayoutUncheckedUpdateManyWithoutFreelancerNestedInput;
    disputes?: Prisma.DisputeUncheckedUpdateManyWithoutOpenerNestedInput;
    reports?: Prisma.ReportUncheckedUpdateManyWithoutReporterNestedInput;
    achievements?: Prisma.UserAchievementUncheckedUpdateManyWithoutUserNestedInput;
    xp?: Prisma.UserXPUncheckedUpdateOneWithoutUserNestedInput;
    searchHistory?: Prisma.SearchHistoryUncheckedUpdateManyWithoutUserNestedInput;
    userRoles?: Prisma.UserRoleUncheckedUpdateManyWithoutUserNestedInput;
    companiesOwned?: Prisma.CompanyUncheckedUpdateManyWithoutOwnerNestedInput;
    companyEmployees?: Prisma.EmployeeUncheckedUpdateManyWithoutUserNestedInput;
    jobsPosted?: Prisma.JobUncheckedUpdateManyWithoutPostedByNestedInput;
    resumes?: Prisma.ResumeUncheckedUpdateManyWithoutUserNestedInput;
    jobApplications?: Prisma.JobApplicationUncheckedUpdateManyWithoutApplicantNestedInput;
    products?: Prisma.ProductUncheckedUpdateManyWithoutSellerNestedInput;
    productReviewsWritten?: Prisma.ProductReviewUncheckedUpdateManyWithoutReviewerNestedInput;
    productReviewsReceived?: Prisma.ProductReviewUncheckedUpdateManyWithoutRevieweeNestedInput;
    booksAuthored?: Prisma.BookUncheckedUpdateManyWithoutAuthorUserNestedInput;
    bookPurchases?: Prisma.BookPurchaseUncheckedUpdateManyWithoutUserNestedInput;
    bookReviews?: Prisma.BookReviewUncheckedUpdateManyWithoutUserNestedInput;
    resourcesCreated?: Prisma.ResourceUncheckedUpdateManyWithoutAuthorNestedInput;
    portfolioProjects?: Prisma.PortfolioProjectUncheckedUpdateManyWithoutUserNestedInput;
    aiConversations?: Prisma.AIConversationUncheckedUpdateManyWithoutUserNestedInput;
};
export type UserUpsertWithoutOrdersAsFreelancerInput = {
    update: Prisma.XOR<Prisma.UserUpdateWithoutOrdersAsFreelancerInput, Prisma.UserUncheckedUpdateWithoutOrdersAsFreelancerInput>;
    create: Prisma.XOR<Prisma.UserCreateWithoutOrdersAsFreelancerInput, Prisma.UserUncheckedCreateWithoutOrdersAsFreelancerInput>;
    where?: Prisma.UserWhereInput;
};
export type UserUpdateToOneWithWhereWithoutOrdersAsFreelancerInput = {
    where?: Prisma.UserWhereInput;
    data: Prisma.XOR<Prisma.UserUpdateWithoutOrdersAsFreelancerInput, Prisma.UserUncheckedUpdateWithoutOrdersAsFreelancerInput>;
};
export type UserUpdateWithoutOrdersAsFreelancerInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    username?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    emailVerified?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    image?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    coverImage?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    bio?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    location?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    skills?: Prisma.UserUpdateskillsInput | string[];
    languages?: Prisma.UserUpdatelanguagesInput | string[];
    timezone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    website?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    github?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    linkedin?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    role?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    verificationStatus?: Prisma.StringFieldUpdateOperationsInput | string;
    profileCompletion?: Prisma.IntFieldUpdateOperationsInput | number;
    preferredCurrency?: Prisma.StringFieldUpdateOperationsInput | string;
    stripeAccountId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    stripeOnboardingDone?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    lastLoginAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    accounts?: Prisma.AccountUpdateManyWithoutUserNestedInput;
    sessions?: Prisma.SessionUpdateManyWithoutUserNestedInput;
    profile?: Prisma.ProfileUpdateOneWithoutUserNestedInput;
    freelancerProfile?: Prisma.FreelancerProfileUpdateOneWithoutUserNestedInput;
    buyerProfile?: Prisma.BuyerProfileUpdateOneWithoutUserNestedInput;
    portfolioItems?: Prisma.PortfolioUpdateManyWithoutUserNestedInput;
    services?: Prisma.ServiceUpdateManyWithoutUserNestedInput;
    ordersAsBuyer?: Prisma.OrderUpdateManyWithoutBuyerNestedInput;
    reviewsWritten?: Prisma.ReviewUpdateManyWithoutReviewerNestedInput;
    reviewsReceived?: Prisma.ReviewUpdateManyWithoutRevieweeNestedInput;
    favorites?: Prisma.FavoriteUpdateManyWithoutUserNestedInput;
    cart?: Prisma.CartUpdateOneWithoutUserNestedInput;
    conversationParts?: Prisma.ConversationParticipantUpdateManyWithoutUserNestedInput;
    messages?: Prisma.MessageUpdateManyWithoutSenderNestedInput;
    notifications?: Prisma.NotificationUpdateManyWithoutUserNestedInput;
    payouts?: Prisma.PayoutUpdateManyWithoutFreelancerNestedInput;
    disputes?: Prisma.DisputeUpdateManyWithoutOpenerNestedInput;
    reports?: Prisma.ReportUpdateManyWithoutReporterNestedInput;
    achievements?: Prisma.UserAchievementUpdateManyWithoutUserNestedInput;
    xp?: Prisma.UserXPUpdateOneWithoutUserNestedInput;
    searchHistory?: Prisma.SearchHistoryUpdateManyWithoutUserNestedInput;
    userRoles?: Prisma.UserRoleUpdateManyWithoutUserNestedInput;
    companiesOwned?: Prisma.CompanyUpdateManyWithoutOwnerNestedInput;
    companyEmployees?: Prisma.EmployeeUpdateManyWithoutUserNestedInput;
    jobsPosted?: Prisma.JobUpdateManyWithoutPostedByNestedInput;
    resumes?: Prisma.ResumeUpdateManyWithoutUserNestedInput;
    jobApplications?: Prisma.JobApplicationUpdateManyWithoutApplicantNestedInput;
    products?: Prisma.ProductUpdateManyWithoutSellerNestedInput;
    productReviewsWritten?: Prisma.ProductReviewUpdateManyWithoutReviewerNestedInput;
    productReviewsReceived?: Prisma.ProductReviewUpdateManyWithoutRevieweeNestedInput;
    booksAuthored?: Prisma.BookUpdateManyWithoutAuthorUserNestedInput;
    bookPurchases?: Prisma.BookPurchaseUpdateManyWithoutUserNestedInput;
    bookReviews?: Prisma.BookReviewUpdateManyWithoutUserNestedInput;
    resourcesCreated?: Prisma.ResourceUpdateManyWithoutAuthorNestedInput;
    portfolioProjects?: Prisma.PortfolioProjectUpdateManyWithoutUserNestedInput;
    aiConversations?: Prisma.AIConversationUpdateManyWithoutUserNestedInput;
};
export type UserUncheckedUpdateWithoutOrdersAsFreelancerInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    username?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    emailVerified?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    image?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    coverImage?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    bio?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    location?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    skills?: Prisma.UserUpdateskillsInput | string[];
    languages?: Prisma.UserUpdatelanguagesInput | string[];
    timezone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    website?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    github?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    linkedin?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    role?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    verificationStatus?: Prisma.StringFieldUpdateOperationsInput | string;
    profileCompletion?: Prisma.IntFieldUpdateOperationsInput | number;
    preferredCurrency?: Prisma.StringFieldUpdateOperationsInput | string;
    stripeAccountId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    stripeOnboardingDone?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    lastLoginAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    accounts?: Prisma.AccountUncheckedUpdateManyWithoutUserNestedInput;
    sessions?: Prisma.SessionUncheckedUpdateManyWithoutUserNestedInput;
    profile?: Prisma.ProfileUncheckedUpdateOneWithoutUserNestedInput;
    freelancerProfile?: Prisma.FreelancerProfileUncheckedUpdateOneWithoutUserNestedInput;
    buyerProfile?: Prisma.BuyerProfileUncheckedUpdateOneWithoutUserNestedInput;
    portfolioItems?: Prisma.PortfolioUncheckedUpdateManyWithoutUserNestedInput;
    services?: Prisma.ServiceUncheckedUpdateManyWithoutUserNestedInput;
    ordersAsBuyer?: Prisma.OrderUncheckedUpdateManyWithoutBuyerNestedInput;
    reviewsWritten?: Prisma.ReviewUncheckedUpdateManyWithoutReviewerNestedInput;
    reviewsReceived?: Prisma.ReviewUncheckedUpdateManyWithoutRevieweeNestedInput;
    favorites?: Prisma.FavoriteUncheckedUpdateManyWithoutUserNestedInput;
    cart?: Prisma.CartUncheckedUpdateOneWithoutUserNestedInput;
    conversationParts?: Prisma.ConversationParticipantUncheckedUpdateManyWithoutUserNestedInput;
    messages?: Prisma.MessageUncheckedUpdateManyWithoutSenderNestedInput;
    notifications?: Prisma.NotificationUncheckedUpdateManyWithoutUserNestedInput;
    payouts?: Prisma.PayoutUncheckedUpdateManyWithoutFreelancerNestedInput;
    disputes?: Prisma.DisputeUncheckedUpdateManyWithoutOpenerNestedInput;
    reports?: Prisma.ReportUncheckedUpdateManyWithoutReporterNestedInput;
    achievements?: Prisma.UserAchievementUncheckedUpdateManyWithoutUserNestedInput;
    xp?: Prisma.UserXPUncheckedUpdateOneWithoutUserNestedInput;
    searchHistory?: Prisma.SearchHistoryUncheckedUpdateManyWithoutUserNestedInput;
    userRoles?: Prisma.UserRoleUncheckedUpdateManyWithoutUserNestedInput;
    companiesOwned?: Prisma.CompanyUncheckedUpdateManyWithoutOwnerNestedInput;
    companyEmployees?: Prisma.EmployeeUncheckedUpdateManyWithoutUserNestedInput;
    jobsPosted?: Prisma.JobUncheckedUpdateManyWithoutPostedByNestedInput;
    resumes?: Prisma.ResumeUncheckedUpdateManyWithoutUserNestedInput;
    jobApplications?: Prisma.JobApplicationUncheckedUpdateManyWithoutApplicantNestedInput;
    products?: Prisma.ProductUncheckedUpdateManyWithoutSellerNestedInput;
    productReviewsWritten?: Prisma.ProductReviewUncheckedUpdateManyWithoutReviewerNestedInput;
    productReviewsReceived?: Prisma.ProductReviewUncheckedUpdateManyWithoutRevieweeNestedInput;
    booksAuthored?: Prisma.BookUncheckedUpdateManyWithoutAuthorUserNestedInput;
    bookPurchases?: Prisma.BookPurchaseUncheckedUpdateManyWithoutUserNestedInput;
    bookReviews?: Prisma.BookReviewUncheckedUpdateManyWithoutUserNestedInput;
    resourcesCreated?: Prisma.ResourceUncheckedUpdateManyWithoutAuthorNestedInput;
    portfolioProjects?: Prisma.PortfolioProjectUncheckedUpdateManyWithoutUserNestedInput;
    aiConversations?: Prisma.AIConversationUncheckedUpdateManyWithoutUserNestedInput;
};
export type UserCreateWithoutReviewsWrittenInput = {
    id?: string;
    name: string;
    username?: string | null;
    email: string;
    emailVerified?: boolean;
    image?: string | null;
    coverImage?: string | null;
    bio?: string | null;
    location?: string | null;
    skills?: Prisma.UserCreateskillsInput | string[];
    languages?: Prisma.UserCreatelanguagesInput | string[];
    timezone?: string | null;
    website?: string | null;
    github?: string | null;
    linkedin?: string | null;
    role?: string;
    status?: string;
    verificationStatus?: string;
    profileCompletion?: number;
    preferredCurrency?: string;
    stripeAccountId?: string | null;
    stripeOnboardingDone?: boolean;
    lastLoginAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    accounts?: Prisma.AccountCreateNestedManyWithoutUserInput;
    sessions?: Prisma.SessionCreateNestedManyWithoutUserInput;
    profile?: Prisma.ProfileCreateNestedOneWithoutUserInput;
    freelancerProfile?: Prisma.FreelancerProfileCreateNestedOneWithoutUserInput;
    buyerProfile?: Prisma.BuyerProfileCreateNestedOneWithoutUserInput;
    portfolioItems?: Prisma.PortfolioCreateNestedManyWithoutUserInput;
    services?: Prisma.ServiceCreateNestedManyWithoutUserInput;
    ordersAsBuyer?: Prisma.OrderCreateNestedManyWithoutBuyerInput;
    ordersAsFreelancer?: Prisma.OrderCreateNestedManyWithoutFreelancerInput;
    reviewsReceived?: Prisma.ReviewCreateNestedManyWithoutRevieweeInput;
    favorites?: Prisma.FavoriteCreateNestedManyWithoutUserInput;
    cart?: Prisma.CartCreateNestedOneWithoutUserInput;
    conversationParts?: Prisma.ConversationParticipantCreateNestedManyWithoutUserInput;
    messages?: Prisma.MessageCreateNestedManyWithoutSenderInput;
    notifications?: Prisma.NotificationCreateNestedManyWithoutUserInput;
    payouts?: Prisma.PayoutCreateNestedManyWithoutFreelancerInput;
    disputes?: Prisma.DisputeCreateNestedManyWithoutOpenerInput;
    reports?: Prisma.ReportCreateNestedManyWithoutReporterInput;
    achievements?: Prisma.UserAchievementCreateNestedManyWithoutUserInput;
    xp?: Prisma.UserXPCreateNestedOneWithoutUserInput;
    searchHistory?: Prisma.SearchHistoryCreateNestedManyWithoutUserInput;
    userRoles?: Prisma.UserRoleCreateNestedManyWithoutUserInput;
    companiesOwned?: Prisma.CompanyCreateNestedManyWithoutOwnerInput;
    companyEmployees?: Prisma.EmployeeCreateNestedManyWithoutUserInput;
    jobsPosted?: Prisma.JobCreateNestedManyWithoutPostedByInput;
    resumes?: Prisma.ResumeCreateNestedManyWithoutUserInput;
    jobApplications?: Prisma.JobApplicationCreateNestedManyWithoutApplicantInput;
    products?: Prisma.ProductCreateNestedManyWithoutSellerInput;
    productReviewsWritten?: Prisma.ProductReviewCreateNestedManyWithoutReviewerInput;
    productReviewsReceived?: Prisma.ProductReviewCreateNestedManyWithoutRevieweeInput;
    booksAuthored?: Prisma.BookCreateNestedManyWithoutAuthorUserInput;
    bookPurchases?: Prisma.BookPurchaseCreateNestedManyWithoutUserInput;
    bookReviews?: Prisma.BookReviewCreateNestedManyWithoutUserInput;
    resourcesCreated?: Prisma.ResourceCreateNestedManyWithoutAuthorInput;
    portfolioProjects?: Prisma.PortfolioProjectCreateNestedManyWithoutUserInput;
    aiConversations?: Prisma.AIConversationCreateNestedManyWithoutUserInput;
};
export type UserUncheckedCreateWithoutReviewsWrittenInput = {
    id?: string;
    name: string;
    username?: string | null;
    email: string;
    emailVerified?: boolean;
    image?: string | null;
    coverImage?: string | null;
    bio?: string | null;
    location?: string | null;
    skills?: Prisma.UserCreateskillsInput | string[];
    languages?: Prisma.UserCreatelanguagesInput | string[];
    timezone?: string | null;
    website?: string | null;
    github?: string | null;
    linkedin?: string | null;
    role?: string;
    status?: string;
    verificationStatus?: string;
    profileCompletion?: number;
    preferredCurrency?: string;
    stripeAccountId?: string | null;
    stripeOnboardingDone?: boolean;
    lastLoginAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    accounts?: Prisma.AccountUncheckedCreateNestedManyWithoutUserInput;
    sessions?: Prisma.SessionUncheckedCreateNestedManyWithoutUserInput;
    profile?: Prisma.ProfileUncheckedCreateNestedOneWithoutUserInput;
    freelancerProfile?: Prisma.FreelancerProfileUncheckedCreateNestedOneWithoutUserInput;
    buyerProfile?: Prisma.BuyerProfileUncheckedCreateNestedOneWithoutUserInput;
    portfolioItems?: Prisma.PortfolioUncheckedCreateNestedManyWithoutUserInput;
    services?: Prisma.ServiceUncheckedCreateNestedManyWithoutUserInput;
    ordersAsBuyer?: Prisma.OrderUncheckedCreateNestedManyWithoutBuyerInput;
    ordersAsFreelancer?: Prisma.OrderUncheckedCreateNestedManyWithoutFreelancerInput;
    reviewsReceived?: Prisma.ReviewUncheckedCreateNestedManyWithoutRevieweeInput;
    favorites?: Prisma.FavoriteUncheckedCreateNestedManyWithoutUserInput;
    cart?: Prisma.CartUncheckedCreateNestedOneWithoutUserInput;
    conversationParts?: Prisma.ConversationParticipantUncheckedCreateNestedManyWithoutUserInput;
    messages?: Prisma.MessageUncheckedCreateNestedManyWithoutSenderInput;
    notifications?: Prisma.NotificationUncheckedCreateNestedManyWithoutUserInput;
    payouts?: Prisma.PayoutUncheckedCreateNestedManyWithoutFreelancerInput;
    disputes?: Prisma.DisputeUncheckedCreateNestedManyWithoutOpenerInput;
    reports?: Prisma.ReportUncheckedCreateNestedManyWithoutReporterInput;
    achievements?: Prisma.UserAchievementUncheckedCreateNestedManyWithoutUserInput;
    xp?: Prisma.UserXPUncheckedCreateNestedOneWithoutUserInput;
    searchHistory?: Prisma.SearchHistoryUncheckedCreateNestedManyWithoutUserInput;
    userRoles?: Prisma.UserRoleUncheckedCreateNestedManyWithoutUserInput;
    companiesOwned?: Prisma.CompanyUncheckedCreateNestedManyWithoutOwnerInput;
    companyEmployees?: Prisma.EmployeeUncheckedCreateNestedManyWithoutUserInput;
    jobsPosted?: Prisma.JobUncheckedCreateNestedManyWithoutPostedByInput;
    resumes?: Prisma.ResumeUncheckedCreateNestedManyWithoutUserInput;
    jobApplications?: Prisma.JobApplicationUncheckedCreateNestedManyWithoutApplicantInput;
    products?: Prisma.ProductUncheckedCreateNestedManyWithoutSellerInput;
    productReviewsWritten?: Prisma.ProductReviewUncheckedCreateNestedManyWithoutReviewerInput;
    productReviewsReceived?: Prisma.ProductReviewUncheckedCreateNestedManyWithoutRevieweeInput;
    booksAuthored?: Prisma.BookUncheckedCreateNestedManyWithoutAuthorUserInput;
    bookPurchases?: Prisma.BookPurchaseUncheckedCreateNestedManyWithoutUserInput;
    bookReviews?: Prisma.BookReviewUncheckedCreateNestedManyWithoutUserInput;
    resourcesCreated?: Prisma.ResourceUncheckedCreateNestedManyWithoutAuthorInput;
    portfolioProjects?: Prisma.PortfolioProjectUncheckedCreateNestedManyWithoutUserInput;
    aiConversations?: Prisma.AIConversationUncheckedCreateNestedManyWithoutUserInput;
};
export type UserCreateOrConnectWithoutReviewsWrittenInput = {
    where: Prisma.UserWhereUniqueInput;
    create: Prisma.XOR<Prisma.UserCreateWithoutReviewsWrittenInput, Prisma.UserUncheckedCreateWithoutReviewsWrittenInput>;
};
export type UserCreateWithoutReviewsReceivedInput = {
    id?: string;
    name: string;
    username?: string | null;
    email: string;
    emailVerified?: boolean;
    image?: string | null;
    coverImage?: string | null;
    bio?: string | null;
    location?: string | null;
    skills?: Prisma.UserCreateskillsInput | string[];
    languages?: Prisma.UserCreatelanguagesInput | string[];
    timezone?: string | null;
    website?: string | null;
    github?: string | null;
    linkedin?: string | null;
    role?: string;
    status?: string;
    verificationStatus?: string;
    profileCompletion?: number;
    preferredCurrency?: string;
    stripeAccountId?: string | null;
    stripeOnboardingDone?: boolean;
    lastLoginAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    accounts?: Prisma.AccountCreateNestedManyWithoutUserInput;
    sessions?: Prisma.SessionCreateNestedManyWithoutUserInput;
    profile?: Prisma.ProfileCreateNestedOneWithoutUserInput;
    freelancerProfile?: Prisma.FreelancerProfileCreateNestedOneWithoutUserInput;
    buyerProfile?: Prisma.BuyerProfileCreateNestedOneWithoutUserInput;
    portfolioItems?: Prisma.PortfolioCreateNestedManyWithoutUserInput;
    services?: Prisma.ServiceCreateNestedManyWithoutUserInput;
    ordersAsBuyer?: Prisma.OrderCreateNestedManyWithoutBuyerInput;
    ordersAsFreelancer?: Prisma.OrderCreateNestedManyWithoutFreelancerInput;
    reviewsWritten?: Prisma.ReviewCreateNestedManyWithoutReviewerInput;
    favorites?: Prisma.FavoriteCreateNestedManyWithoutUserInput;
    cart?: Prisma.CartCreateNestedOneWithoutUserInput;
    conversationParts?: Prisma.ConversationParticipantCreateNestedManyWithoutUserInput;
    messages?: Prisma.MessageCreateNestedManyWithoutSenderInput;
    notifications?: Prisma.NotificationCreateNestedManyWithoutUserInput;
    payouts?: Prisma.PayoutCreateNestedManyWithoutFreelancerInput;
    disputes?: Prisma.DisputeCreateNestedManyWithoutOpenerInput;
    reports?: Prisma.ReportCreateNestedManyWithoutReporterInput;
    achievements?: Prisma.UserAchievementCreateNestedManyWithoutUserInput;
    xp?: Prisma.UserXPCreateNestedOneWithoutUserInput;
    searchHistory?: Prisma.SearchHistoryCreateNestedManyWithoutUserInput;
    userRoles?: Prisma.UserRoleCreateNestedManyWithoutUserInput;
    companiesOwned?: Prisma.CompanyCreateNestedManyWithoutOwnerInput;
    companyEmployees?: Prisma.EmployeeCreateNestedManyWithoutUserInput;
    jobsPosted?: Prisma.JobCreateNestedManyWithoutPostedByInput;
    resumes?: Prisma.ResumeCreateNestedManyWithoutUserInput;
    jobApplications?: Prisma.JobApplicationCreateNestedManyWithoutApplicantInput;
    products?: Prisma.ProductCreateNestedManyWithoutSellerInput;
    productReviewsWritten?: Prisma.ProductReviewCreateNestedManyWithoutReviewerInput;
    productReviewsReceived?: Prisma.ProductReviewCreateNestedManyWithoutRevieweeInput;
    booksAuthored?: Prisma.BookCreateNestedManyWithoutAuthorUserInput;
    bookPurchases?: Prisma.BookPurchaseCreateNestedManyWithoutUserInput;
    bookReviews?: Prisma.BookReviewCreateNestedManyWithoutUserInput;
    resourcesCreated?: Prisma.ResourceCreateNestedManyWithoutAuthorInput;
    portfolioProjects?: Prisma.PortfolioProjectCreateNestedManyWithoutUserInput;
    aiConversations?: Prisma.AIConversationCreateNestedManyWithoutUserInput;
};
export type UserUncheckedCreateWithoutReviewsReceivedInput = {
    id?: string;
    name: string;
    username?: string | null;
    email: string;
    emailVerified?: boolean;
    image?: string | null;
    coverImage?: string | null;
    bio?: string | null;
    location?: string | null;
    skills?: Prisma.UserCreateskillsInput | string[];
    languages?: Prisma.UserCreatelanguagesInput | string[];
    timezone?: string | null;
    website?: string | null;
    github?: string | null;
    linkedin?: string | null;
    role?: string;
    status?: string;
    verificationStatus?: string;
    profileCompletion?: number;
    preferredCurrency?: string;
    stripeAccountId?: string | null;
    stripeOnboardingDone?: boolean;
    lastLoginAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    accounts?: Prisma.AccountUncheckedCreateNestedManyWithoutUserInput;
    sessions?: Prisma.SessionUncheckedCreateNestedManyWithoutUserInput;
    profile?: Prisma.ProfileUncheckedCreateNestedOneWithoutUserInput;
    freelancerProfile?: Prisma.FreelancerProfileUncheckedCreateNestedOneWithoutUserInput;
    buyerProfile?: Prisma.BuyerProfileUncheckedCreateNestedOneWithoutUserInput;
    portfolioItems?: Prisma.PortfolioUncheckedCreateNestedManyWithoutUserInput;
    services?: Prisma.ServiceUncheckedCreateNestedManyWithoutUserInput;
    ordersAsBuyer?: Prisma.OrderUncheckedCreateNestedManyWithoutBuyerInput;
    ordersAsFreelancer?: Prisma.OrderUncheckedCreateNestedManyWithoutFreelancerInput;
    reviewsWritten?: Prisma.ReviewUncheckedCreateNestedManyWithoutReviewerInput;
    favorites?: Prisma.FavoriteUncheckedCreateNestedManyWithoutUserInput;
    cart?: Prisma.CartUncheckedCreateNestedOneWithoutUserInput;
    conversationParts?: Prisma.ConversationParticipantUncheckedCreateNestedManyWithoutUserInput;
    messages?: Prisma.MessageUncheckedCreateNestedManyWithoutSenderInput;
    notifications?: Prisma.NotificationUncheckedCreateNestedManyWithoutUserInput;
    payouts?: Prisma.PayoutUncheckedCreateNestedManyWithoutFreelancerInput;
    disputes?: Prisma.DisputeUncheckedCreateNestedManyWithoutOpenerInput;
    reports?: Prisma.ReportUncheckedCreateNestedManyWithoutReporterInput;
    achievements?: Prisma.UserAchievementUncheckedCreateNestedManyWithoutUserInput;
    xp?: Prisma.UserXPUncheckedCreateNestedOneWithoutUserInput;
    searchHistory?: Prisma.SearchHistoryUncheckedCreateNestedManyWithoutUserInput;
    userRoles?: Prisma.UserRoleUncheckedCreateNestedManyWithoutUserInput;
    companiesOwned?: Prisma.CompanyUncheckedCreateNestedManyWithoutOwnerInput;
    companyEmployees?: Prisma.EmployeeUncheckedCreateNestedManyWithoutUserInput;
    jobsPosted?: Prisma.JobUncheckedCreateNestedManyWithoutPostedByInput;
    resumes?: Prisma.ResumeUncheckedCreateNestedManyWithoutUserInput;
    jobApplications?: Prisma.JobApplicationUncheckedCreateNestedManyWithoutApplicantInput;
    products?: Prisma.ProductUncheckedCreateNestedManyWithoutSellerInput;
    productReviewsWritten?: Prisma.ProductReviewUncheckedCreateNestedManyWithoutReviewerInput;
    productReviewsReceived?: Prisma.ProductReviewUncheckedCreateNestedManyWithoutRevieweeInput;
    booksAuthored?: Prisma.BookUncheckedCreateNestedManyWithoutAuthorUserInput;
    bookPurchases?: Prisma.BookPurchaseUncheckedCreateNestedManyWithoutUserInput;
    bookReviews?: Prisma.BookReviewUncheckedCreateNestedManyWithoutUserInput;
    resourcesCreated?: Prisma.ResourceUncheckedCreateNestedManyWithoutAuthorInput;
    portfolioProjects?: Prisma.PortfolioProjectUncheckedCreateNestedManyWithoutUserInput;
    aiConversations?: Prisma.AIConversationUncheckedCreateNestedManyWithoutUserInput;
};
export type UserCreateOrConnectWithoutReviewsReceivedInput = {
    where: Prisma.UserWhereUniqueInput;
    create: Prisma.XOR<Prisma.UserCreateWithoutReviewsReceivedInput, Prisma.UserUncheckedCreateWithoutReviewsReceivedInput>;
};
export type UserUpsertWithoutReviewsWrittenInput = {
    update: Prisma.XOR<Prisma.UserUpdateWithoutReviewsWrittenInput, Prisma.UserUncheckedUpdateWithoutReviewsWrittenInput>;
    create: Prisma.XOR<Prisma.UserCreateWithoutReviewsWrittenInput, Prisma.UserUncheckedCreateWithoutReviewsWrittenInput>;
    where?: Prisma.UserWhereInput;
};
export type UserUpdateToOneWithWhereWithoutReviewsWrittenInput = {
    where?: Prisma.UserWhereInput;
    data: Prisma.XOR<Prisma.UserUpdateWithoutReviewsWrittenInput, Prisma.UserUncheckedUpdateWithoutReviewsWrittenInput>;
};
export type UserUpdateWithoutReviewsWrittenInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    username?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    emailVerified?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    image?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    coverImage?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    bio?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    location?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    skills?: Prisma.UserUpdateskillsInput | string[];
    languages?: Prisma.UserUpdatelanguagesInput | string[];
    timezone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    website?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    github?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    linkedin?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    role?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    verificationStatus?: Prisma.StringFieldUpdateOperationsInput | string;
    profileCompletion?: Prisma.IntFieldUpdateOperationsInput | number;
    preferredCurrency?: Prisma.StringFieldUpdateOperationsInput | string;
    stripeAccountId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    stripeOnboardingDone?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    lastLoginAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    accounts?: Prisma.AccountUpdateManyWithoutUserNestedInput;
    sessions?: Prisma.SessionUpdateManyWithoutUserNestedInput;
    profile?: Prisma.ProfileUpdateOneWithoutUserNestedInput;
    freelancerProfile?: Prisma.FreelancerProfileUpdateOneWithoutUserNestedInput;
    buyerProfile?: Prisma.BuyerProfileUpdateOneWithoutUserNestedInput;
    portfolioItems?: Prisma.PortfolioUpdateManyWithoutUserNestedInput;
    services?: Prisma.ServiceUpdateManyWithoutUserNestedInput;
    ordersAsBuyer?: Prisma.OrderUpdateManyWithoutBuyerNestedInput;
    ordersAsFreelancer?: Prisma.OrderUpdateManyWithoutFreelancerNestedInput;
    reviewsReceived?: Prisma.ReviewUpdateManyWithoutRevieweeNestedInput;
    favorites?: Prisma.FavoriteUpdateManyWithoutUserNestedInput;
    cart?: Prisma.CartUpdateOneWithoutUserNestedInput;
    conversationParts?: Prisma.ConversationParticipantUpdateManyWithoutUserNestedInput;
    messages?: Prisma.MessageUpdateManyWithoutSenderNestedInput;
    notifications?: Prisma.NotificationUpdateManyWithoutUserNestedInput;
    payouts?: Prisma.PayoutUpdateManyWithoutFreelancerNestedInput;
    disputes?: Prisma.DisputeUpdateManyWithoutOpenerNestedInput;
    reports?: Prisma.ReportUpdateManyWithoutReporterNestedInput;
    achievements?: Prisma.UserAchievementUpdateManyWithoutUserNestedInput;
    xp?: Prisma.UserXPUpdateOneWithoutUserNestedInput;
    searchHistory?: Prisma.SearchHistoryUpdateManyWithoutUserNestedInput;
    userRoles?: Prisma.UserRoleUpdateManyWithoutUserNestedInput;
    companiesOwned?: Prisma.CompanyUpdateManyWithoutOwnerNestedInput;
    companyEmployees?: Prisma.EmployeeUpdateManyWithoutUserNestedInput;
    jobsPosted?: Prisma.JobUpdateManyWithoutPostedByNestedInput;
    resumes?: Prisma.ResumeUpdateManyWithoutUserNestedInput;
    jobApplications?: Prisma.JobApplicationUpdateManyWithoutApplicantNestedInput;
    products?: Prisma.ProductUpdateManyWithoutSellerNestedInput;
    productReviewsWritten?: Prisma.ProductReviewUpdateManyWithoutReviewerNestedInput;
    productReviewsReceived?: Prisma.ProductReviewUpdateManyWithoutRevieweeNestedInput;
    booksAuthored?: Prisma.BookUpdateManyWithoutAuthorUserNestedInput;
    bookPurchases?: Prisma.BookPurchaseUpdateManyWithoutUserNestedInput;
    bookReviews?: Prisma.BookReviewUpdateManyWithoutUserNestedInput;
    resourcesCreated?: Prisma.ResourceUpdateManyWithoutAuthorNestedInput;
    portfolioProjects?: Prisma.PortfolioProjectUpdateManyWithoutUserNestedInput;
    aiConversations?: Prisma.AIConversationUpdateManyWithoutUserNestedInput;
};
export type UserUncheckedUpdateWithoutReviewsWrittenInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    username?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    emailVerified?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    image?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    coverImage?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    bio?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    location?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    skills?: Prisma.UserUpdateskillsInput | string[];
    languages?: Prisma.UserUpdatelanguagesInput | string[];
    timezone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    website?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    github?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    linkedin?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    role?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    verificationStatus?: Prisma.StringFieldUpdateOperationsInput | string;
    profileCompletion?: Prisma.IntFieldUpdateOperationsInput | number;
    preferredCurrency?: Prisma.StringFieldUpdateOperationsInput | string;
    stripeAccountId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    stripeOnboardingDone?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    lastLoginAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    accounts?: Prisma.AccountUncheckedUpdateManyWithoutUserNestedInput;
    sessions?: Prisma.SessionUncheckedUpdateManyWithoutUserNestedInput;
    profile?: Prisma.ProfileUncheckedUpdateOneWithoutUserNestedInput;
    freelancerProfile?: Prisma.FreelancerProfileUncheckedUpdateOneWithoutUserNestedInput;
    buyerProfile?: Prisma.BuyerProfileUncheckedUpdateOneWithoutUserNestedInput;
    portfolioItems?: Prisma.PortfolioUncheckedUpdateManyWithoutUserNestedInput;
    services?: Prisma.ServiceUncheckedUpdateManyWithoutUserNestedInput;
    ordersAsBuyer?: Prisma.OrderUncheckedUpdateManyWithoutBuyerNestedInput;
    ordersAsFreelancer?: Prisma.OrderUncheckedUpdateManyWithoutFreelancerNestedInput;
    reviewsReceived?: Prisma.ReviewUncheckedUpdateManyWithoutRevieweeNestedInput;
    favorites?: Prisma.FavoriteUncheckedUpdateManyWithoutUserNestedInput;
    cart?: Prisma.CartUncheckedUpdateOneWithoutUserNestedInput;
    conversationParts?: Prisma.ConversationParticipantUncheckedUpdateManyWithoutUserNestedInput;
    messages?: Prisma.MessageUncheckedUpdateManyWithoutSenderNestedInput;
    notifications?: Prisma.NotificationUncheckedUpdateManyWithoutUserNestedInput;
    payouts?: Prisma.PayoutUncheckedUpdateManyWithoutFreelancerNestedInput;
    disputes?: Prisma.DisputeUncheckedUpdateManyWithoutOpenerNestedInput;
    reports?: Prisma.ReportUncheckedUpdateManyWithoutReporterNestedInput;
    achievements?: Prisma.UserAchievementUncheckedUpdateManyWithoutUserNestedInput;
    xp?: Prisma.UserXPUncheckedUpdateOneWithoutUserNestedInput;
    searchHistory?: Prisma.SearchHistoryUncheckedUpdateManyWithoutUserNestedInput;
    userRoles?: Prisma.UserRoleUncheckedUpdateManyWithoutUserNestedInput;
    companiesOwned?: Prisma.CompanyUncheckedUpdateManyWithoutOwnerNestedInput;
    companyEmployees?: Prisma.EmployeeUncheckedUpdateManyWithoutUserNestedInput;
    jobsPosted?: Prisma.JobUncheckedUpdateManyWithoutPostedByNestedInput;
    resumes?: Prisma.ResumeUncheckedUpdateManyWithoutUserNestedInput;
    jobApplications?: Prisma.JobApplicationUncheckedUpdateManyWithoutApplicantNestedInput;
    products?: Prisma.ProductUncheckedUpdateManyWithoutSellerNestedInput;
    productReviewsWritten?: Prisma.ProductReviewUncheckedUpdateManyWithoutReviewerNestedInput;
    productReviewsReceived?: Prisma.ProductReviewUncheckedUpdateManyWithoutRevieweeNestedInput;
    booksAuthored?: Prisma.BookUncheckedUpdateManyWithoutAuthorUserNestedInput;
    bookPurchases?: Prisma.BookPurchaseUncheckedUpdateManyWithoutUserNestedInput;
    bookReviews?: Prisma.BookReviewUncheckedUpdateManyWithoutUserNestedInput;
    resourcesCreated?: Prisma.ResourceUncheckedUpdateManyWithoutAuthorNestedInput;
    portfolioProjects?: Prisma.PortfolioProjectUncheckedUpdateManyWithoutUserNestedInput;
    aiConversations?: Prisma.AIConversationUncheckedUpdateManyWithoutUserNestedInput;
};
export type UserUpsertWithoutReviewsReceivedInput = {
    update: Prisma.XOR<Prisma.UserUpdateWithoutReviewsReceivedInput, Prisma.UserUncheckedUpdateWithoutReviewsReceivedInput>;
    create: Prisma.XOR<Prisma.UserCreateWithoutReviewsReceivedInput, Prisma.UserUncheckedCreateWithoutReviewsReceivedInput>;
    where?: Prisma.UserWhereInput;
};
export type UserUpdateToOneWithWhereWithoutReviewsReceivedInput = {
    where?: Prisma.UserWhereInput;
    data: Prisma.XOR<Prisma.UserUpdateWithoutReviewsReceivedInput, Prisma.UserUncheckedUpdateWithoutReviewsReceivedInput>;
};
export type UserUpdateWithoutReviewsReceivedInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    username?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    emailVerified?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    image?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    coverImage?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    bio?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    location?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    skills?: Prisma.UserUpdateskillsInput | string[];
    languages?: Prisma.UserUpdatelanguagesInput | string[];
    timezone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    website?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    github?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    linkedin?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    role?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    verificationStatus?: Prisma.StringFieldUpdateOperationsInput | string;
    profileCompletion?: Prisma.IntFieldUpdateOperationsInput | number;
    preferredCurrency?: Prisma.StringFieldUpdateOperationsInput | string;
    stripeAccountId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    stripeOnboardingDone?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    lastLoginAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    accounts?: Prisma.AccountUpdateManyWithoutUserNestedInput;
    sessions?: Prisma.SessionUpdateManyWithoutUserNestedInput;
    profile?: Prisma.ProfileUpdateOneWithoutUserNestedInput;
    freelancerProfile?: Prisma.FreelancerProfileUpdateOneWithoutUserNestedInput;
    buyerProfile?: Prisma.BuyerProfileUpdateOneWithoutUserNestedInput;
    portfolioItems?: Prisma.PortfolioUpdateManyWithoutUserNestedInput;
    services?: Prisma.ServiceUpdateManyWithoutUserNestedInput;
    ordersAsBuyer?: Prisma.OrderUpdateManyWithoutBuyerNestedInput;
    ordersAsFreelancer?: Prisma.OrderUpdateManyWithoutFreelancerNestedInput;
    reviewsWritten?: Prisma.ReviewUpdateManyWithoutReviewerNestedInput;
    favorites?: Prisma.FavoriteUpdateManyWithoutUserNestedInput;
    cart?: Prisma.CartUpdateOneWithoutUserNestedInput;
    conversationParts?: Prisma.ConversationParticipantUpdateManyWithoutUserNestedInput;
    messages?: Prisma.MessageUpdateManyWithoutSenderNestedInput;
    notifications?: Prisma.NotificationUpdateManyWithoutUserNestedInput;
    payouts?: Prisma.PayoutUpdateManyWithoutFreelancerNestedInput;
    disputes?: Prisma.DisputeUpdateManyWithoutOpenerNestedInput;
    reports?: Prisma.ReportUpdateManyWithoutReporterNestedInput;
    achievements?: Prisma.UserAchievementUpdateManyWithoutUserNestedInput;
    xp?: Prisma.UserXPUpdateOneWithoutUserNestedInput;
    searchHistory?: Prisma.SearchHistoryUpdateManyWithoutUserNestedInput;
    userRoles?: Prisma.UserRoleUpdateManyWithoutUserNestedInput;
    companiesOwned?: Prisma.CompanyUpdateManyWithoutOwnerNestedInput;
    companyEmployees?: Prisma.EmployeeUpdateManyWithoutUserNestedInput;
    jobsPosted?: Prisma.JobUpdateManyWithoutPostedByNestedInput;
    resumes?: Prisma.ResumeUpdateManyWithoutUserNestedInput;
    jobApplications?: Prisma.JobApplicationUpdateManyWithoutApplicantNestedInput;
    products?: Prisma.ProductUpdateManyWithoutSellerNestedInput;
    productReviewsWritten?: Prisma.ProductReviewUpdateManyWithoutReviewerNestedInput;
    productReviewsReceived?: Prisma.ProductReviewUpdateManyWithoutRevieweeNestedInput;
    booksAuthored?: Prisma.BookUpdateManyWithoutAuthorUserNestedInput;
    bookPurchases?: Prisma.BookPurchaseUpdateManyWithoutUserNestedInput;
    bookReviews?: Prisma.BookReviewUpdateManyWithoutUserNestedInput;
    resourcesCreated?: Prisma.ResourceUpdateManyWithoutAuthorNestedInput;
    portfolioProjects?: Prisma.PortfolioProjectUpdateManyWithoutUserNestedInput;
    aiConversations?: Prisma.AIConversationUpdateManyWithoutUserNestedInput;
};
export type UserUncheckedUpdateWithoutReviewsReceivedInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    username?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    emailVerified?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    image?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    coverImage?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    bio?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    location?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    skills?: Prisma.UserUpdateskillsInput | string[];
    languages?: Prisma.UserUpdatelanguagesInput | string[];
    timezone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    website?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    github?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    linkedin?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    role?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    verificationStatus?: Prisma.StringFieldUpdateOperationsInput | string;
    profileCompletion?: Prisma.IntFieldUpdateOperationsInput | number;
    preferredCurrency?: Prisma.StringFieldUpdateOperationsInput | string;
    stripeAccountId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    stripeOnboardingDone?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    lastLoginAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    accounts?: Prisma.AccountUncheckedUpdateManyWithoutUserNestedInput;
    sessions?: Prisma.SessionUncheckedUpdateManyWithoutUserNestedInput;
    profile?: Prisma.ProfileUncheckedUpdateOneWithoutUserNestedInput;
    freelancerProfile?: Prisma.FreelancerProfileUncheckedUpdateOneWithoutUserNestedInput;
    buyerProfile?: Prisma.BuyerProfileUncheckedUpdateOneWithoutUserNestedInput;
    portfolioItems?: Prisma.PortfolioUncheckedUpdateManyWithoutUserNestedInput;
    services?: Prisma.ServiceUncheckedUpdateManyWithoutUserNestedInput;
    ordersAsBuyer?: Prisma.OrderUncheckedUpdateManyWithoutBuyerNestedInput;
    ordersAsFreelancer?: Prisma.OrderUncheckedUpdateManyWithoutFreelancerNestedInput;
    reviewsWritten?: Prisma.ReviewUncheckedUpdateManyWithoutReviewerNestedInput;
    favorites?: Prisma.FavoriteUncheckedUpdateManyWithoutUserNestedInput;
    cart?: Prisma.CartUncheckedUpdateOneWithoutUserNestedInput;
    conversationParts?: Prisma.ConversationParticipantUncheckedUpdateManyWithoutUserNestedInput;
    messages?: Prisma.MessageUncheckedUpdateManyWithoutSenderNestedInput;
    notifications?: Prisma.NotificationUncheckedUpdateManyWithoutUserNestedInput;
    payouts?: Prisma.PayoutUncheckedUpdateManyWithoutFreelancerNestedInput;
    disputes?: Prisma.DisputeUncheckedUpdateManyWithoutOpenerNestedInput;
    reports?: Prisma.ReportUncheckedUpdateManyWithoutReporterNestedInput;
    achievements?: Prisma.UserAchievementUncheckedUpdateManyWithoutUserNestedInput;
    xp?: Prisma.UserXPUncheckedUpdateOneWithoutUserNestedInput;
    searchHistory?: Prisma.SearchHistoryUncheckedUpdateManyWithoutUserNestedInput;
    userRoles?: Prisma.UserRoleUncheckedUpdateManyWithoutUserNestedInput;
    companiesOwned?: Prisma.CompanyUncheckedUpdateManyWithoutOwnerNestedInput;
    companyEmployees?: Prisma.EmployeeUncheckedUpdateManyWithoutUserNestedInput;
    jobsPosted?: Prisma.JobUncheckedUpdateManyWithoutPostedByNestedInput;
    resumes?: Prisma.ResumeUncheckedUpdateManyWithoutUserNestedInput;
    jobApplications?: Prisma.JobApplicationUncheckedUpdateManyWithoutApplicantNestedInput;
    products?: Prisma.ProductUncheckedUpdateManyWithoutSellerNestedInput;
    productReviewsWritten?: Prisma.ProductReviewUncheckedUpdateManyWithoutReviewerNestedInput;
    productReviewsReceived?: Prisma.ProductReviewUncheckedUpdateManyWithoutRevieweeNestedInput;
    booksAuthored?: Prisma.BookUncheckedUpdateManyWithoutAuthorUserNestedInput;
    bookPurchases?: Prisma.BookPurchaseUncheckedUpdateManyWithoutUserNestedInput;
    bookReviews?: Prisma.BookReviewUncheckedUpdateManyWithoutUserNestedInput;
    resourcesCreated?: Prisma.ResourceUncheckedUpdateManyWithoutAuthorNestedInput;
    portfolioProjects?: Prisma.PortfolioProjectUncheckedUpdateManyWithoutUserNestedInput;
    aiConversations?: Prisma.AIConversationUncheckedUpdateManyWithoutUserNestedInput;
};
export type UserCreateWithoutFavoritesInput = {
    id?: string;
    name: string;
    username?: string | null;
    email: string;
    emailVerified?: boolean;
    image?: string | null;
    coverImage?: string | null;
    bio?: string | null;
    location?: string | null;
    skills?: Prisma.UserCreateskillsInput | string[];
    languages?: Prisma.UserCreatelanguagesInput | string[];
    timezone?: string | null;
    website?: string | null;
    github?: string | null;
    linkedin?: string | null;
    role?: string;
    status?: string;
    verificationStatus?: string;
    profileCompletion?: number;
    preferredCurrency?: string;
    stripeAccountId?: string | null;
    stripeOnboardingDone?: boolean;
    lastLoginAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    accounts?: Prisma.AccountCreateNestedManyWithoutUserInput;
    sessions?: Prisma.SessionCreateNestedManyWithoutUserInput;
    profile?: Prisma.ProfileCreateNestedOneWithoutUserInput;
    freelancerProfile?: Prisma.FreelancerProfileCreateNestedOneWithoutUserInput;
    buyerProfile?: Prisma.BuyerProfileCreateNestedOneWithoutUserInput;
    portfolioItems?: Prisma.PortfolioCreateNestedManyWithoutUserInput;
    services?: Prisma.ServiceCreateNestedManyWithoutUserInput;
    ordersAsBuyer?: Prisma.OrderCreateNestedManyWithoutBuyerInput;
    ordersAsFreelancer?: Prisma.OrderCreateNestedManyWithoutFreelancerInput;
    reviewsWritten?: Prisma.ReviewCreateNestedManyWithoutReviewerInput;
    reviewsReceived?: Prisma.ReviewCreateNestedManyWithoutRevieweeInput;
    cart?: Prisma.CartCreateNestedOneWithoutUserInput;
    conversationParts?: Prisma.ConversationParticipantCreateNestedManyWithoutUserInput;
    messages?: Prisma.MessageCreateNestedManyWithoutSenderInput;
    notifications?: Prisma.NotificationCreateNestedManyWithoutUserInput;
    payouts?: Prisma.PayoutCreateNestedManyWithoutFreelancerInput;
    disputes?: Prisma.DisputeCreateNestedManyWithoutOpenerInput;
    reports?: Prisma.ReportCreateNestedManyWithoutReporterInput;
    achievements?: Prisma.UserAchievementCreateNestedManyWithoutUserInput;
    xp?: Prisma.UserXPCreateNestedOneWithoutUserInput;
    searchHistory?: Prisma.SearchHistoryCreateNestedManyWithoutUserInput;
    userRoles?: Prisma.UserRoleCreateNestedManyWithoutUserInput;
    companiesOwned?: Prisma.CompanyCreateNestedManyWithoutOwnerInput;
    companyEmployees?: Prisma.EmployeeCreateNestedManyWithoutUserInput;
    jobsPosted?: Prisma.JobCreateNestedManyWithoutPostedByInput;
    resumes?: Prisma.ResumeCreateNestedManyWithoutUserInput;
    jobApplications?: Prisma.JobApplicationCreateNestedManyWithoutApplicantInput;
    products?: Prisma.ProductCreateNestedManyWithoutSellerInput;
    productReviewsWritten?: Prisma.ProductReviewCreateNestedManyWithoutReviewerInput;
    productReviewsReceived?: Prisma.ProductReviewCreateNestedManyWithoutRevieweeInput;
    booksAuthored?: Prisma.BookCreateNestedManyWithoutAuthorUserInput;
    bookPurchases?: Prisma.BookPurchaseCreateNestedManyWithoutUserInput;
    bookReviews?: Prisma.BookReviewCreateNestedManyWithoutUserInput;
    resourcesCreated?: Prisma.ResourceCreateNestedManyWithoutAuthorInput;
    portfolioProjects?: Prisma.PortfolioProjectCreateNestedManyWithoutUserInput;
    aiConversations?: Prisma.AIConversationCreateNestedManyWithoutUserInput;
};
export type UserUncheckedCreateWithoutFavoritesInput = {
    id?: string;
    name: string;
    username?: string | null;
    email: string;
    emailVerified?: boolean;
    image?: string | null;
    coverImage?: string | null;
    bio?: string | null;
    location?: string | null;
    skills?: Prisma.UserCreateskillsInput | string[];
    languages?: Prisma.UserCreatelanguagesInput | string[];
    timezone?: string | null;
    website?: string | null;
    github?: string | null;
    linkedin?: string | null;
    role?: string;
    status?: string;
    verificationStatus?: string;
    profileCompletion?: number;
    preferredCurrency?: string;
    stripeAccountId?: string | null;
    stripeOnboardingDone?: boolean;
    lastLoginAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    accounts?: Prisma.AccountUncheckedCreateNestedManyWithoutUserInput;
    sessions?: Prisma.SessionUncheckedCreateNestedManyWithoutUserInput;
    profile?: Prisma.ProfileUncheckedCreateNestedOneWithoutUserInput;
    freelancerProfile?: Prisma.FreelancerProfileUncheckedCreateNestedOneWithoutUserInput;
    buyerProfile?: Prisma.BuyerProfileUncheckedCreateNestedOneWithoutUserInput;
    portfolioItems?: Prisma.PortfolioUncheckedCreateNestedManyWithoutUserInput;
    services?: Prisma.ServiceUncheckedCreateNestedManyWithoutUserInput;
    ordersAsBuyer?: Prisma.OrderUncheckedCreateNestedManyWithoutBuyerInput;
    ordersAsFreelancer?: Prisma.OrderUncheckedCreateNestedManyWithoutFreelancerInput;
    reviewsWritten?: Prisma.ReviewUncheckedCreateNestedManyWithoutReviewerInput;
    reviewsReceived?: Prisma.ReviewUncheckedCreateNestedManyWithoutRevieweeInput;
    cart?: Prisma.CartUncheckedCreateNestedOneWithoutUserInput;
    conversationParts?: Prisma.ConversationParticipantUncheckedCreateNestedManyWithoutUserInput;
    messages?: Prisma.MessageUncheckedCreateNestedManyWithoutSenderInput;
    notifications?: Prisma.NotificationUncheckedCreateNestedManyWithoutUserInput;
    payouts?: Prisma.PayoutUncheckedCreateNestedManyWithoutFreelancerInput;
    disputes?: Prisma.DisputeUncheckedCreateNestedManyWithoutOpenerInput;
    reports?: Prisma.ReportUncheckedCreateNestedManyWithoutReporterInput;
    achievements?: Prisma.UserAchievementUncheckedCreateNestedManyWithoutUserInput;
    xp?: Prisma.UserXPUncheckedCreateNestedOneWithoutUserInput;
    searchHistory?: Prisma.SearchHistoryUncheckedCreateNestedManyWithoutUserInput;
    userRoles?: Prisma.UserRoleUncheckedCreateNestedManyWithoutUserInput;
    companiesOwned?: Prisma.CompanyUncheckedCreateNestedManyWithoutOwnerInput;
    companyEmployees?: Prisma.EmployeeUncheckedCreateNestedManyWithoutUserInput;
    jobsPosted?: Prisma.JobUncheckedCreateNestedManyWithoutPostedByInput;
    resumes?: Prisma.ResumeUncheckedCreateNestedManyWithoutUserInput;
    jobApplications?: Prisma.JobApplicationUncheckedCreateNestedManyWithoutApplicantInput;
    products?: Prisma.ProductUncheckedCreateNestedManyWithoutSellerInput;
    productReviewsWritten?: Prisma.ProductReviewUncheckedCreateNestedManyWithoutReviewerInput;
    productReviewsReceived?: Prisma.ProductReviewUncheckedCreateNestedManyWithoutRevieweeInput;
    booksAuthored?: Prisma.BookUncheckedCreateNestedManyWithoutAuthorUserInput;
    bookPurchases?: Prisma.BookPurchaseUncheckedCreateNestedManyWithoutUserInput;
    bookReviews?: Prisma.BookReviewUncheckedCreateNestedManyWithoutUserInput;
    resourcesCreated?: Prisma.ResourceUncheckedCreateNestedManyWithoutAuthorInput;
    portfolioProjects?: Prisma.PortfolioProjectUncheckedCreateNestedManyWithoutUserInput;
    aiConversations?: Prisma.AIConversationUncheckedCreateNestedManyWithoutUserInput;
};
export type UserCreateOrConnectWithoutFavoritesInput = {
    where: Prisma.UserWhereUniqueInput;
    create: Prisma.XOR<Prisma.UserCreateWithoutFavoritesInput, Prisma.UserUncheckedCreateWithoutFavoritesInput>;
};
export type UserUpsertWithoutFavoritesInput = {
    update: Prisma.XOR<Prisma.UserUpdateWithoutFavoritesInput, Prisma.UserUncheckedUpdateWithoutFavoritesInput>;
    create: Prisma.XOR<Prisma.UserCreateWithoutFavoritesInput, Prisma.UserUncheckedCreateWithoutFavoritesInput>;
    where?: Prisma.UserWhereInput;
};
export type UserUpdateToOneWithWhereWithoutFavoritesInput = {
    where?: Prisma.UserWhereInput;
    data: Prisma.XOR<Prisma.UserUpdateWithoutFavoritesInput, Prisma.UserUncheckedUpdateWithoutFavoritesInput>;
};
export type UserUpdateWithoutFavoritesInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    username?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    emailVerified?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    image?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    coverImage?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    bio?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    location?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    skills?: Prisma.UserUpdateskillsInput | string[];
    languages?: Prisma.UserUpdatelanguagesInput | string[];
    timezone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    website?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    github?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    linkedin?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    role?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    verificationStatus?: Prisma.StringFieldUpdateOperationsInput | string;
    profileCompletion?: Prisma.IntFieldUpdateOperationsInput | number;
    preferredCurrency?: Prisma.StringFieldUpdateOperationsInput | string;
    stripeAccountId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    stripeOnboardingDone?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    lastLoginAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    accounts?: Prisma.AccountUpdateManyWithoutUserNestedInput;
    sessions?: Prisma.SessionUpdateManyWithoutUserNestedInput;
    profile?: Prisma.ProfileUpdateOneWithoutUserNestedInput;
    freelancerProfile?: Prisma.FreelancerProfileUpdateOneWithoutUserNestedInput;
    buyerProfile?: Prisma.BuyerProfileUpdateOneWithoutUserNestedInput;
    portfolioItems?: Prisma.PortfolioUpdateManyWithoutUserNestedInput;
    services?: Prisma.ServiceUpdateManyWithoutUserNestedInput;
    ordersAsBuyer?: Prisma.OrderUpdateManyWithoutBuyerNestedInput;
    ordersAsFreelancer?: Prisma.OrderUpdateManyWithoutFreelancerNestedInput;
    reviewsWritten?: Prisma.ReviewUpdateManyWithoutReviewerNestedInput;
    reviewsReceived?: Prisma.ReviewUpdateManyWithoutRevieweeNestedInput;
    cart?: Prisma.CartUpdateOneWithoutUserNestedInput;
    conversationParts?: Prisma.ConversationParticipantUpdateManyWithoutUserNestedInput;
    messages?: Prisma.MessageUpdateManyWithoutSenderNestedInput;
    notifications?: Prisma.NotificationUpdateManyWithoutUserNestedInput;
    payouts?: Prisma.PayoutUpdateManyWithoutFreelancerNestedInput;
    disputes?: Prisma.DisputeUpdateManyWithoutOpenerNestedInput;
    reports?: Prisma.ReportUpdateManyWithoutReporterNestedInput;
    achievements?: Prisma.UserAchievementUpdateManyWithoutUserNestedInput;
    xp?: Prisma.UserXPUpdateOneWithoutUserNestedInput;
    searchHistory?: Prisma.SearchHistoryUpdateManyWithoutUserNestedInput;
    userRoles?: Prisma.UserRoleUpdateManyWithoutUserNestedInput;
    companiesOwned?: Prisma.CompanyUpdateManyWithoutOwnerNestedInput;
    companyEmployees?: Prisma.EmployeeUpdateManyWithoutUserNestedInput;
    jobsPosted?: Prisma.JobUpdateManyWithoutPostedByNestedInput;
    resumes?: Prisma.ResumeUpdateManyWithoutUserNestedInput;
    jobApplications?: Prisma.JobApplicationUpdateManyWithoutApplicantNestedInput;
    products?: Prisma.ProductUpdateManyWithoutSellerNestedInput;
    productReviewsWritten?: Prisma.ProductReviewUpdateManyWithoutReviewerNestedInput;
    productReviewsReceived?: Prisma.ProductReviewUpdateManyWithoutRevieweeNestedInput;
    booksAuthored?: Prisma.BookUpdateManyWithoutAuthorUserNestedInput;
    bookPurchases?: Prisma.BookPurchaseUpdateManyWithoutUserNestedInput;
    bookReviews?: Prisma.BookReviewUpdateManyWithoutUserNestedInput;
    resourcesCreated?: Prisma.ResourceUpdateManyWithoutAuthorNestedInput;
    portfolioProjects?: Prisma.PortfolioProjectUpdateManyWithoutUserNestedInput;
    aiConversations?: Prisma.AIConversationUpdateManyWithoutUserNestedInput;
};
export type UserUncheckedUpdateWithoutFavoritesInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    username?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    emailVerified?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    image?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    coverImage?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    bio?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    location?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    skills?: Prisma.UserUpdateskillsInput | string[];
    languages?: Prisma.UserUpdatelanguagesInput | string[];
    timezone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    website?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    github?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    linkedin?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    role?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    verificationStatus?: Prisma.StringFieldUpdateOperationsInput | string;
    profileCompletion?: Prisma.IntFieldUpdateOperationsInput | number;
    preferredCurrency?: Prisma.StringFieldUpdateOperationsInput | string;
    stripeAccountId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    stripeOnboardingDone?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    lastLoginAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    accounts?: Prisma.AccountUncheckedUpdateManyWithoutUserNestedInput;
    sessions?: Prisma.SessionUncheckedUpdateManyWithoutUserNestedInput;
    profile?: Prisma.ProfileUncheckedUpdateOneWithoutUserNestedInput;
    freelancerProfile?: Prisma.FreelancerProfileUncheckedUpdateOneWithoutUserNestedInput;
    buyerProfile?: Prisma.BuyerProfileUncheckedUpdateOneWithoutUserNestedInput;
    portfolioItems?: Prisma.PortfolioUncheckedUpdateManyWithoutUserNestedInput;
    services?: Prisma.ServiceUncheckedUpdateManyWithoutUserNestedInput;
    ordersAsBuyer?: Prisma.OrderUncheckedUpdateManyWithoutBuyerNestedInput;
    ordersAsFreelancer?: Prisma.OrderUncheckedUpdateManyWithoutFreelancerNestedInput;
    reviewsWritten?: Prisma.ReviewUncheckedUpdateManyWithoutReviewerNestedInput;
    reviewsReceived?: Prisma.ReviewUncheckedUpdateManyWithoutRevieweeNestedInput;
    cart?: Prisma.CartUncheckedUpdateOneWithoutUserNestedInput;
    conversationParts?: Prisma.ConversationParticipantUncheckedUpdateManyWithoutUserNestedInput;
    messages?: Prisma.MessageUncheckedUpdateManyWithoutSenderNestedInput;
    notifications?: Prisma.NotificationUncheckedUpdateManyWithoutUserNestedInput;
    payouts?: Prisma.PayoutUncheckedUpdateManyWithoutFreelancerNestedInput;
    disputes?: Prisma.DisputeUncheckedUpdateManyWithoutOpenerNestedInput;
    reports?: Prisma.ReportUncheckedUpdateManyWithoutReporterNestedInput;
    achievements?: Prisma.UserAchievementUncheckedUpdateManyWithoutUserNestedInput;
    xp?: Prisma.UserXPUncheckedUpdateOneWithoutUserNestedInput;
    searchHistory?: Prisma.SearchHistoryUncheckedUpdateManyWithoutUserNestedInput;
    userRoles?: Prisma.UserRoleUncheckedUpdateManyWithoutUserNestedInput;
    companiesOwned?: Prisma.CompanyUncheckedUpdateManyWithoutOwnerNestedInput;
    companyEmployees?: Prisma.EmployeeUncheckedUpdateManyWithoutUserNestedInput;
    jobsPosted?: Prisma.JobUncheckedUpdateManyWithoutPostedByNestedInput;
    resumes?: Prisma.ResumeUncheckedUpdateManyWithoutUserNestedInput;
    jobApplications?: Prisma.JobApplicationUncheckedUpdateManyWithoutApplicantNestedInput;
    products?: Prisma.ProductUncheckedUpdateManyWithoutSellerNestedInput;
    productReviewsWritten?: Prisma.ProductReviewUncheckedUpdateManyWithoutReviewerNestedInput;
    productReviewsReceived?: Prisma.ProductReviewUncheckedUpdateManyWithoutRevieweeNestedInput;
    booksAuthored?: Prisma.BookUncheckedUpdateManyWithoutAuthorUserNestedInput;
    bookPurchases?: Prisma.BookPurchaseUncheckedUpdateManyWithoutUserNestedInput;
    bookReviews?: Prisma.BookReviewUncheckedUpdateManyWithoutUserNestedInput;
    resourcesCreated?: Prisma.ResourceUncheckedUpdateManyWithoutAuthorNestedInput;
    portfolioProjects?: Prisma.PortfolioProjectUncheckedUpdateManyWithoutUserNestedInput;
    aiConversations?: Prisma.AIConversationUncheckedUpdateManyWithoutUserNestedInput;
};
export type UserCreateWithoutCartInput = {
    id?: string;
    name: string;
    username?: string | null;
    email: string;
    emailVerified?: boolean;
    image?: string | null;
    coverImage?: string | null;
    bio?: string | null;
    location?: string | null;
    skills?: Prisma.UserCreateskillsInput | string[];
    languages?: Prisma.UserCreatelanguagesInput | string[];
    timezone?: string | null;
    website?: string | null;
    github?: string | null;
    linkedin?: string | null;
    role?: string;
    status?: string;
    verificationStatus?: string;
    profileCompletion?: number;
    preferredCurrency?: string;
    stripeAccountId?: string | null;
    stripeOnboardingDone?: boolean;
    lastLoginAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    accounts?: Prisma.AccountCreateNestedManyWithoutUserInput;
    sessions?: Prisma.SessionCreateNestedManyWithoutUserInput;
    profile?: Prisma.ProfileCreateNestedOneWithoutUserInput;
    freelancerProfile?: Prisma.FreelancerProfileCreateNestedOneWithoutUserInput;
    buyerProfile?: Prisma.BuyerProfileCreateNestedOneWithoutUserInput;
    portfolioItems?: Prisma.PortfolioCreateNestedManyWithoutUserInput;
    services?: Prisma.ServiceCreateNestedManyWithoutUserInput;
    ordersAsBuyer?: Prisma.OrderCreateNestedManyWithoutBuyerInput;
    ordersAsFreelancer?: Prisma.OrderCreateNestedManyWithoutFreelancerInput;
    reviewsWritten?: Prisma.ReviewCreateNestedManyWithoutReviewerInput;
    reviewsReceived?: Prisma.ReviewCreateNestedManyWithoutRevieweeInput;
    favorites?: Prisma.FavoriteCreateNestedManyWithoutUserInput;
    conversationParts?: Prisma.ConversationParticipantCreateNestedManyWithoutUserInput;
    messages?: Prisma.MessageCreateNestedManyWithoutSenderInput;
    notifications?: Prisma.NotificationCreateNestedManyWithoutUserInput;
    payouts?: Prisma.PayoutCreateNestedManyWithoutFreelancerInput;
    disputes?: Prisma.DisputeCreateNestedManyWithoutOpenerInput;
    reports?: Prisma.ReportCreateNestedManyWithoutReporterInput;
    achievements?: Prisma.UserAchievementCreateNestedManyWithoutUserInput;
    xp?: Prisma.UserXPCreateNestedOneWithoutUserInput;
    searchHistory?: Prisma.SearchHistoryCreateNestedManyWithoutUserInput;
    userRoles?: Prisma.UserRoleCreateNestedManyWithoutUserInput;
    companiesOwned?: Prisma.CompanyCreateNestedManyWithoutOwnerInput;
    companyEmployees?: Prisma.EmployeeCreateNestedManyWithoutUserInput;
    jobsPosted?: Prisma.JobCreateNestedManyWithoutPostedByInput;
    resumes?: Prisma.ResumeCreateNestedManyWithoutUserInput;
    jobApplications?: Prisma.JobApplicationCreateNestedManyWithoutApplicantInput;
    products?: Prisma.ProductCreateNestedManyWithoutSellerInput;
    productReviewsWritten?: Prisma.ProductReviewCreateNestedManyWithoutReviewerInput;
    productReviewsReceived?: Prisma.ProductReviewCreateNestedManyWithoutRevieweeInput;
    booksAuthored?: Prisma.BookCreateNestedManyWithoutAuthorUserInput;
    bookPurchases?: Prisma.BookPurchaseCreateNestedManyWithoutUserInput;
    bookReviews?: Prisma.BookReviewCreateNestedManyWithoutUserInput;
    resourcesCreated?: Prisma.ResourceCreateNestedManyWithoutAuthorInput;
    portfolioProjects?: Prisma.PortfolioProjectCreateNestedManyWithoutUserInput;
    aiConversations?: Prisma.AIConversationCreateNestedManyWithoutUserInput;
};
export type UserUncheckedCreateWithoutCartInput = {
    id?: string;
    name: string;
    username?: string | null;
    email: string;
    emailVerified?: boolean;
    image?: string | null;
    coverImage?: string | null;
    bio?: string | null;
    location?: string | null;
    skills?: Prisma.UserCreateskillsInput | string[];
    languages?: Prisma.UserCreatelanguagesInput | string[];
    timezone?: string | null;
    website?: string | null;
    github?: string | null;
    linkedin?: string | null;
    role?: string;
    status?: string;
    verificationStatus?: string;
    profileCompletion?: number;
    preferredCurrency?: string;
    stripeAccountId?: string | null;
    stripeOnboardingDone?: boolean;
    lastLoginAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    accounts?: Prisma.AccountUncheckedCreateNestedManyWithoutUserInput;
    sessions?: Prisma.SessionUncheckedCreateNestedManyWithoutUserInput;
    profile?: Prisma.ProfileUncheckedCreateNestedOneWithoutUserInput;
    freelancerProfile?: Prisma.FreelancerProfileUncheckedCreateNestedOneWithoutUserInput;
    buyerProfile?: Prisma.BuyerProfileUncheckedCreateNestedOneWithoutUserInput;
    portfolioItems?: Prisma.PortfolioUncheckedCreateNestedManyWithoutUserInput;
    services?: Prisma.ServiceUncheckedCreateNestedManyWithoutUserInput;
    ordersAsBuyer?: Prisma.OrderUncheckedCreateNestedManyWithoutBuyerInput;
    ordersAsFreelancer?: Prisma.OrderUncheckedCreateNestedManyWithoutFreelancerInput;
    reviewsWritten?: Prisma.ReviewUncheckedCreateNestedManyWithoutReviewerInput;
    reviewsReceived?: Prisma.ReviewUncheckedCreateNestedManyWithoutRevieweeInput;
    favorites?: Prisma.FavoriteUncheckedCreateNestedManyWithoutUserInput;
    conversationParts?: Prisma.ConversationParticipantUncheckedCreateNestedManyWithoutUserInput;
    messages?: Prisma.MessageUncheckedCreateNestedManyWithoutSenderInput;
    notifications?: Prisma.NotificationUncheckedCreateNestedManyWithoutUserInput;
    payouts?: Prisma.PayoutUncheckedCreateNestedManyWithoutFreelancerInput;
    disputes?: Prisma.DisputeUncheckedCreateNestedManyWithoutOpenerInput;
    reports?: Prisma.ReportUncheckedCreateNestedManyWithoutReporterInput;
    achievements?: Prisma.UserAchievementUncheckedCreateNestedManyWithoutUserInput;
    xp?: Prisma.UserXPUncheckedCreateNestedOneWithoutUserInput;
    searchHistory?: Prisma.SearchHistoryUncheckedCreateNestedManyWithoutUserInput;
    userRoles?: Prisma.UserRoleUncheckedCreateNestedManyWithoutUserInput;
    companiesOwned?: Prisma.CompanyUncheckedCreateNestedManyWithoutOwnerInput;
    companyEmployees?: Prisma.EmployeeUncheckedCreateNestedManyWithoutUserInput;
    jobsPosted?: Prisma.JobUncheckedCreateNestedManyWithoutPostedByInput;
    resumes?: Prisma.ResumeUncheckedCreateNestedManyWithoutUserInput;
    jobApplications?: Prisma.JobApplicationUncheckedCreateNestedManyWithoutApplicantInput;
    products?: Prisma.ProductUncheckedCreateNestedManyWithoutSellerInput;
    productReviewsWritten?: Prisma.ProductReviewUncheckedCreateNestedManyWithoutReviewerInput;
    productReviewsReceived?: Prisma.ProductReviewUncheckedCreateNestedManyWithoutRevieweeInput;
    booksAuthored?: Prisma.BookUncheckedCreateNestedManyWithoutAuthorUserInput;
    bookPurchases?: Prisma.BookPurchaseUncheckedCreateNestedManyWithoutUserInput;
    bookReviews?: Prisma.BookReviewUncheckedCreateNestedManyWithoutUserInput;
    resourcesCreated?: Prisma.ResourceUncheckedCreateNestedManyWithoutAuthorInput;
    portfolioProjects?: Prisma.PortfolioProjectUncheckedCreateNestedManyWithoutUserInput;
    aiConversations?: Prisma.AIConversationUncheckedCreateNestedManyWithoutUserInput;
};
export type UserCreateOrConnectWithoutCartInput = {
    where: Prisma.UserWhereUniqueInput;
    create: Prisma.XOR<Prisma.UserCreateWithoutCartInput, Prisma.UserUncheckedCreateWithoutCartInput>;
};
export type UserUpsertWithoutCartInput = {
    update: Prisma.XOR<Prisma.UserUpdateWithoutCartInput, Prisma.UserUncheckedUpdateWithoutCartInput>;
    create: Prisma.XOR<Prisma.UserCreateWithoutCartInput, Prisma.UserUncheckedCreateWithoutCartInput>;
    where?: Prisma.UserWhereInput;
};
export type UserUpdateToOneWithWhereWithoutCartInput = {
    where?: Prisma.UserWhereInput;
    data: Prisma.XOR<Prisma.UserUpdateWithoutCartInput, Prisma.UserUncheckedUpdateWithoutCartInput>;
};
export type UserUpdateWithoutCartInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    username?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    emailVerified?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    image?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    coverImage?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    bio?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    location?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    skills?: Prisma.UserUpdateskillsInput | string[];
    languages?: Prisma.UserUpdatelanguagesInput | string[];
    timezone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    website?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    github?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    linkedin?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    role?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    verificationStatus?: Prisma.StringFieldUpdateOperationsInput | string;
    profileCompletion?: Prisma.IntFieldUpdateOperationsInput | number;
    preferredCurrency?: Prisma.StringFieldUpdateOperationsInput | string;
    stripeAccountId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    stripeOnboardingDone?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    lastLoginAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    accounts?: Prisma.AccountUpdateManyWithoutUserNestedInput;
    sessions?: Prisma.SessionUpdateManyWithoutUserNestedInput;
    profile?: Prisma.ProfileUpdateOneWithoutUserNestedInput;
    freelancerProfile?: Prisma.FreelancerProfileUpdateOneWithoutUserNestedInput;
    buyerProfile?: Prisma.BuyerProfileUpdateOneWithoutUserNestedInput;
    portfolioItems?: Prisma.PortfolioUpdateManyWithoutUserNestedInput;
    services?: Prisma.ServiceUpdateManyWithoutUserNestedInput;
    ordersAsBuyer?: Prisma.OrderUpdateManyWithoutBuyerNestedInput;
    ordersAsFreelancer?: Prisma.OrderUpdateManyWithoutFreelancerNestedInput;
    reviewsWritten?: Prisma.ReviewUpdateManyWithoutReviewerNestedInput;
    reviewsReceived?: Prisma.ReviewUpdateManyWithoutRevieweeNestedInput;
    favorites?: Prisma.FavoriteUpdateManyWithoutUserNestedInput;
    conversationParts?: Prisma.ConversationParticipantUpdateManyWithoutUserNestedInput;
    messages?: Prisma.MessageUpdateManyWithoutSenderNestedInput;
    notifications?: Prisma.NotificationUpdateManyWithoutUserNestedInput;
    payouts?: Prisma.PayoutUpdateManyWithoutFreelancerNestedInput;
    disputes?: Prisma.DisputeUpdateManyWithoutOpenerNestedInput;
    reports?: Prisma.ReportUpdateManyWithoutReporterNestedInput;
    achievements?: Prisma.UserAchievementUpdateManyWithoutUserNestedInput;
    xp?: Prisma.UserXPUpdateOneWithoutUserNestedInput;
    searchHistory?: Prisma.SearchHistoryUpdateManyWithoutUserNestedInput;
    userRoles?: Prisma.UserRoleUpdateManyWithoutUserNestedInput;
    companiesOwned?: Prisma.CompanyUpdateManyWithoutOwnerNestedInput;
    companyEmployees?: Prisma.EmployeeUpdateManyWithoutUserNestedInput;
    jobsPosted?: Prisma.JobUpdateManyWithoutPostedByNestedInput;
    resumes?: Prisma.ResumeUpdateManyWithoutUserNestedInput;
    jobApplications?: Prisma.JobApplicationUpdateManyWithoutApplicantNestedInput;
    products?: Prisma.ProductUpdateManyWithoutSellerNestedInput;
    productReviewsWritten?: Prisma.ProductReviewUpdateManyWithoutReviewerNestedInput;
    productReviewsReceived?: Prisma.ProductReviewUpdateManyWithoutRevieweeNestedInput;
    booksAuthored?: Prisma.BookUpdateManyWithoutAuthorUserNestedInput;
    bookPurchases?: Prisma.BookPurchaseUpdateManyWithoutUserNestedInput;
    bookReviews?: Prisma.BookReviewUpdateManyWithoutUserNestedInput;
    resourcesCreated?: Prisma.ResourceUpdateManyWithoutAuthorNestedInput;
    portfolioProjects?: Prisma.PortfolioProjectUpdateManyWithoutUserNestedInput;
    aiConversations?: Prisma.AIConversationUpdateManyWithoutUserNestedInput;
};
export type UserUncheckedUpdateWithoutCartInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    username?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    emailVerified?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    image?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    coverImage?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    bio?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    location?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    skills?: Prisma.UserUpdateskillsInput | string[];
    languages?: Prisma.UserUpdatelanguagesInput | string[];
    timezone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    website?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    github?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    linkedin?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    role?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    verificationStatus?: Prisma.StringFieldUpdateOperationsInput | string;
    profileCompletion?: Prisma.IntFieldUpdateOperationsInput | number;
    preferredCurrency?: Prisma.StringFieldUpdateOperationsInput | string;
    stripeAccountId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    stripeOnboardingDone?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    lastLoginAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    accounts?: Prisma.AccountUncheckedUpdateManyWithoutUserNestedInput;
    sessions?: Prisma.SessionUncheckedUpdateManyWithoutUserNestedInput;
    profile?: Prisma.ProfileUncheckedUpdateOneWithoutUserNestedInput;
    freelancerProfile?: Prisma.FreelancerProfileUncheckedUpdateOneWithoutUserNestedInput;
    buyerProfile?: Prisma.BuyerProfileUncheckedUpdateOneWithoutUserNestedInput;
    portfolioItems?: Prisma.PortfolioUncheckedUpdateManyWithoutUserNestedInput;
    services?: Prisma.ServiceUncheckedUpdateManyWithoutUserNestedInput;
    ordersAsBuyer?: Prisma.OrderUncheckedUpdateManyWithoutBuyerNestedInput;
    ordersAsFreelancer?: Prisma.OrderUncheckedUpdateManyWithoutFreelancerNestedInput;
    reviewsWritten?: Prisma.ReviewUncheckedUpdateManyWithoutReviewerNestedInput;
    reviewsReceived?: Prisma.ReviewUncheckedUpdateManyWithoutRevieweeNestedInput;
    favorites?: Prisma.FavoriteUncheckedUpdateManyWithoutUserNestedInput;
    conversationParts?: Prisma.ConversationParticipantUncheckedUpdateManyWithoutUserNestedInput;
    messages?: Prisma.MessageUncheckedUpdateManyWithoutSenderNestedInput;
    notifications?: Prisma.NotificationUncheckedUpdateManyWithoutUserNestedInput;
    payouts?: Prisma.PayoutUncheckedUpdateManyWithoutFreelancerNestedInput;
    disputes?: Prisma.DisputeUncheckedUpdateManyWithoutOpenerNestedInput;
    reports?: Prisma.ReportUncheckedUpdateManyWithoutReporterNestedInput;
    achievements?: Prisma.UserAchievementUncheckedUpdateManyWithoutUserNestedInput;
    xp?: Prisma.UserXPUncheckedUpdateOneWithoutUserNestedInput;
    searchHistory?: Prisma.SearchHistoryUncheckedUpdateManyWithoutUserNestedInput;
    userRoles?: Prisma.UserRoleUncheckedUpdateManyWithoutUserNestedInput;
    companiesOwned?: Prisma.CompanyUncheckedUpdateManyWithoutOwnerNestedInput;
    companyEmployees?: Prisma.EmployeeUncheckedUpdateManyWithoutUserNestedInput;
    jobsPosted?: Prisma.JobUncheckedUpdateManyWithoutPostedByNestedInput;
    resumes?: Prisma.ResumeUncheckedUpdateManyWithoutUserNestedInput;
    jobApplications?: Prisma.JobApplicationUncheckedUpdateManyWithoutApplicantNestedInput;
    products?: Prisma.ProductUncheckedUpdateManyWithoutSellerNestedInput;
    productReviewsWritten?: Prisma.ProductReviewUncheckedUpdateManyWithoutReviewerNestedInput;
    productReviewsReceived?: Prisma.ProductReviewUncheckedUpdateManyWithoutRevieweeNestedInput;
    booksAuthored?: Prisma.BookUncheckedUpdateManyWithoutAuthorUserNestedInput;
    bookPurchases?: Prisma.BookPurchaseUncheckedUpdateManyWithoutUserNestedInput;
    bookReviews?: Prisma.BookReviewUncheckedUpdateManyWithoutUserNestedInput;
    resourcesCreated?: Prisma.ResourceUncheckedUpdateManyWithoutAuthorNestedInput;
    portfolioProjects?: Prisma.PortfolioProjectUncheckedUpdateManyWithoutUserNestedInput;
    aiConversations?: Prisma.AIConversationUncheckedUpdateManyWithoutUserNestedInput;
};
export type UserCreateWithoutConversationPartsInput = {
    id?: string;
    name: string;
    username?: string | null;
    email: string;
    emailVerified?: boolean;
    image?: string | null;
    coverImage?: string | null;
    bio?: string | null;
    location?: string | null;
    skills?: Prisma.UserCreateskillsInput | string[];
    languages?: Prisma.UserCreatelanguagesInput | string[];
    timezone?: string | null;
    website?: string | null;
    github?: string | null;
    linkedin?: string | null;
    role?: string;
    status?: string;
    verificationStatus?: string;
    profileCompletion?: number;
    preferredCurrency?: string;
    stripeAccountId?: string | null;
    stripeOnboardingDone?: boolean;
    lastLoginAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    accounts?: Prisma.AccountCreateNestedManyWithoutUserInput;
    sessions?: Prisma.SessionCreateNestedManyWithoutUserInput;
    profile?: Prisma.ProfileCreateNestedOneWithoutUserInput;
    freelancerProfile?: Prisma.FreelancerProfileCreateNestedOneWithoutUserInput;
    buyerProfile?: Prisma.BuyerProfileCreateNestedOneWithoutUserInput;
    portfolioItems?: Prisma.PortfolioCreateNestedManyWithoutUserInput;
    services?: Prisma.ServiceCreateNestedManyWithoutUserInput;
    ordersAsBuyer?: Prisma.OrderCreateNestedManyWithoutBuyerInput;
    ordersAsFreelancer?: Prisma.OrderCreateNestedManyWithoutFreelancerInput;
    reviewsWritten?: Prisma.ReviewCreateNestedManyWithoutReviewerInput;
    reviewsReceived?: Prisma.ReviewCreateNestedManyWithoutRevieweeInput;
    favorites?: Prisma.FavoriteCreateNestedManyWithoutUserInput;
    cart?: Prisma.CartCreateNestedOneWithoutUserInput;
    messages?: Prisma.MessageCreateNestedManyWithoutSenderInput;
    notifications?: Prisma.NotificationCreateNestedManyWithoutUserInput;
    payouts?: Prisma.PayoutCreateNestedManyWithoutFreelancerInput;
    disputes?: Prisma.DisputeCreateNestedManyWithoutOpenerInput;
    reports?: Prisma.ReportCreateNestedManyWithoutReporterInput;
    achievements?: Prisma.UserAchievementCreateNestedManyWithoutUserInput;
    xp?: Prisma.UserXPCreateNestedOneWithoutUserInput;
    searchHistory?: Prisma.SearchHistoryCreateNestedManyWithoutUserInput;
    userRoles?: Prisma.UserRoleCreateNestedManyWithoutUserInput;
    companiesOwned?: Prisma.CompanyCreateNestedManyWithoutOwnerInput;
    companyEmployees?: Prisma.EmployeeCreateNestedManyWithoutUserInput;
    jobsPosted?: Prisma.JobCreateNestedManyWithoutPostedByInput;
    resumes?: Prisma.ResumeCreateNestedManyWithoutUserInput;
    jobApplications?: Prisma.JobApplicationCreateNestedManyWithoutApplicantInput;
    products?: Prisma.ProductCreateNestedManyWithoutSellerInput;
    productReviewsWritten?: Prisma.ProductReviewCreateNestedManyWithoutReviewerInput;
    productReviewsReceived?: Prisma.ProductReviewCreateNestedManyWithoutRevieweeInput;
    booksAuthored?: Prisma.BookCreateNestedManyWithoutAuthorUserInput;
    bookPurchases?: Prisma.BookPurchaseCreateNestedManyWithoutUserInput;
    bookReviews?: Prisma.BookReviewCreateNestedManyWithoutUserInput;
    resourcesCreated?: Prisma.ResourceCreateNestedManyWithoutAuthorInput;
    portfolioProjects?: Prisma.PortfolioProjectCreateNestedManyWithoutUserInput;
    aiConversations?: Prisma.AIConversationCreateNestedManyWithoutUserInput;
};
export type UserUncheckedCreateWithoutConversationPartsInput = {
    id?: string;
    name: string;
    username?: string | null;
    email: string;
    emailVerified?: boolean;
    image?: string | null;
    coverImage?: string | null;
    bio?: string | null;
    location?: string | null;
    skills?: Prisma.UserCreateskillsInput | string[];
    languages?: Prisma.UserCreatelanguagesInput | string[];
    timezone?: string | null;
    website?: string | null;
    github?: string | null;
    linkedin?: string | null;
    role?: string;
    status?: string;
    verificationStatus?: string;
    profileCompletion?: number;
    preferredCurrency?: string;
    stripeAccountId?: string | null;
    stripeOnboardingDone?: boolean;
    lastLoginAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    accounts?: Prisma.AccountUncheckedCreateNestedManyWithoutUserInput;
    sessions?: Prisma.SessionUncheckedCreateNestedManyWithoutUserInput;
    profile?: Prisma.ProfileUncheckedCreateNestedOneWithoutUserInput;
    freelancerProfile?: Prisma.FreelancerProfileUncheckedCreateNestedOneWithoutUserInput;
    buyerProfile?: Prisma.BuyerProfileUncheckedCreateNestedOneWithoutUserInput;
    portfolioItems?: Prisma.PortfolioUncheckedCreateNestedManyWithoutUserInput;
    services?: Prisma.ServiceUncheckedCreateNestedManyWithoutUserInput;
    ordersAsBuyer?: Prisma.OrderUncheckedCreateNestedManyWithoutBuyerInput;
    ordersAsFreelancer?: Prisma.OrderUncheckedCreateNestedManyWithoutFreelancerInput;
    reviewsWritten?: Prisma.ReviewUncheckedCreateNestedManyWithoutReviewerInput;
    reviewsReceived?: Prisma.ReviewUncheckedCreateNestedManyWithoutRevieweeInput;
    favorites?: Prisma.FavoriteUncheckedCreateNestedManyWithoutUserInput;
    cart?: Prisma.CartUncheckedCreateNestedOneWithoutUserInput;
    messages?: Prisma.MessageUncheckedCreateNestedManyWithoutSenderInput;
    notifications?: Prisma.NotificationUncheckedCreateNestedManyWithoutUserInput;
    payouts?: Prisma.PayoutUncheckedCreateNestedManyWithoutFreelancerInput;
    disputes?: Prisma.DisputeUncheckedCreateNestedManyWithoutOpenerInput;
    reports?: Prisma.ReportUncheckedCreateNestedManyWithoutReporterInput;
    achievements?: Prisma.UserAchievementUncheckedCreateNestedManyWithoutUserInput;
    xp?: Prisma.UserXPUncheckedCreateNestedOneWithoutUserInput;
    searchHistory?: Prisma.SearchHistoryUncheckedCreateNestedManyWithoutUserInput;
    userRoles?: Prisma.UserRoleUncheckedCreateNestedManyWithoutUserInput;
    companiesOwned?: Prisma.CompanyUncheckedCreateNestedManyWithoutOwnerInput;
    companyEmployees?: Prisma.EmployeeUncheckedCreateNestedManyWithoutUserInput;
    jobsPosted?: Prisma.JobUncheckedCreateNestedManyWithoutPostedByInput;
    resumes?: Prisma.ResumeUncheckedCreateNestedManyWithoutUserInput;
    jobApplications?: Prisma.JobApplicationUncheckedCreateNestedManyWithoutApplicantInput;
    products?: Prisma.ProductUncheckedCreateNestedManyWithoutSellerInput;
    productReviewsWritten?: Prisma.ProductReviewUncheckedCreateNestedManyWithoutReviewerInput;
    productReviewsReceived?: Prisma.ProductReviewUncheckedCreateNestedManyWithoutRevieweeInput;
    booksAuthored?: Prisma.BookUncheckedCreateNestedManyWithoutAuthorUserInput;
    bookPurchases?: Prisma.BookPurchaseUncheckedCreateNestedManyWithoutUserInput;
    bookReviews?: Prisma.BookReviewUncheckedCreateNestedManyWithoutUserInput;
    resourcesCreated?: Prisma.ResourceUncheckedCreateNestedManyWithoutAuthorInput;
    portfolioProjects?: Prisma.PortfolioProjectUncheckedCreateNestedManyWithoutUserInput;
    aiConversations?: Prisma.AIConversationUncheckedCreateNestedManyWithoutUserInput;
};
export type UserCreateOrConnectWithoutConversationPartsInput = {
    where: Prisma.UserWhereUniqueInput;
    create: Prisma.XOR<Prisma.UserCreateWithoutConversationPartsInput, Prisma.UserUncheckedCreateWithoutConversationPartsInput>;
};
export type UserUpsertWithoutConversationPartsInput = {
    update: Prisma.XOR<Prisma.UserUpdateWithoutConversationPartsInput, Prisma.UserUncheckedUpdateWithoutConversationPartsInput>;
    create: Prisma.XOR<Prisma.UserCreateWithoutConversationPartsInput, Prisma.UserUncheckedCreateWithoutConversationPartsInput>;
    where?: Prisma.UserWhereInput;
};
export type UserUpdateToOneWithWhereWithoutConversationPartsInput = {
    where?: Prisma.UserWhereInput;
    data: Prisma.XOR<Prisma.UserUpdateWithoutConversationPartsInput, Prisma.UserUncheckedUpdateWithoutConversationPartsInput>;
};
export type UserUpdateWithoutConversationPartsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    username?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    emailVerified?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    image?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    coverImage?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    bio?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    location?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    skills?: Prisma.UserUpdateskillsInput | string[];
    languages?: Prisma.UserUpdatelanguagesInput | string[];
    timezone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    website?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    github?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    linkedin?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    role?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    verificationStatus?: Prisma.StringFieldUpdateOperationsInput | string;
    profileCompletion?: Prisma.IntFieldUpdateOperationsInput | number;
    preferredCurrency?: Prisma.StringFieldUpdateOperationsInput | string;
    stripeAccountId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    stripeOnboardingDone?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    lastLoginAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    accounts?: Prisma.AccountUpdateManyWithoutUserNestedInput;
    sessions?: Prisma.SessionUpdateManyWithoutUserNestedInput;
    profile?: Prisma.ProfileUpdateOneWithoutUserNestedInput;
    freelancerProfile?: Prisma.FreelancerProfileUpdateOneWithoutUserNestedInput;
    buyerProfile?: Prisma.BuyerProfileUpdateOneWithoutUserNestedInput;
    portfolioItems?: Prisma.PortfolioUpdateManyWithoutUserNestedInput;
    services?: Prisma.ServiceUpdateManyWithoutUserNestedInput;
    ordersAsBuyer?: Prisma.OrderUpdateManyWithoutBuyerNestedInput;
    ordersAsFreelancer?: Prisma.OrderUpdateManyWithoutFreelancerNestedInput;
    reviewsWritten?: Prisma.ReviewUpdateManyWithoutReviewerNestedInput;
    reviewsReceived?: Prisma.ReviewUpdateManyWithoutRevieweeNestedInput;
    favorites?: Prisma.FavoriteUpdateManyWithoutUserNestedInput;
    cart?: Prisma.CartUpdateOneWithoutUserNestedInput;
    messages?: Prisma.MessageUpdateManyWithoutSenderNestedInput;
    notifications?: Prisma.NotificationUpdateManyWithoutUserNestedInput;
    payouts?: Prisma.PayoutUpdateManyWithoutFreelancerNestedInput;
    disputes?: Prisma.DisputeUpdateManyWithoutOpenerNestedInput;
    reports?: Prisma.ReportUpdateManyWithoutReporterNestedInput;
    achievements?: Prisma.UserAchievementUpdateManyWithoutUserNestedInput;
    xp?: Prisma.UserXPUpdateOneWithoutUserNestedInput;
    searchHistory?: Prisma.SearchHistoryUpdateManyWithoutUserNestedInput;
    userRoles?: Prisma.UserRoleUpdateManyWithoutUserNestedInput;
    companiesOwned?: Prisma.CompanyUpdateManyWithoutOwnerNestedInput;
    companyEmployees?: Prisma.EmployeeUpdateManyWithoutUserNestedInput;
    jobsPosted?: Prisma.JobUpdateManyWithoutPostedByNestedInput;
    resumes?: Prisma.ResumeUpdateManyWithoutUserNestedInput;
    jobApplications?: Prisma.JobApplicationUpdateManyWithoutApplicantNestedInput;
    products?: Prisma.ProductUpdateManyWithoutSellerNestedInput;
    productReviewsWritten?: Prisma.ProductReviewUpdateManyWithoutReviewerNestedInput;
    productReviewsReceived?: Prisma.ProductReviewUpdateManyWithoutRevieweeNestedInput;
    booksAuthored?: Prisma.BookUpdateManyWithoutAuthorUserNestedInput;
    bookPurchases?: Prisma.BookPurchaseUpdateManyWithoutUserNestedInput;
    bookReviews?: Prisma.BookReviewUpdateManyWithoutUserNestedInput;
    resourcesCreated?: Prisma.ResourceUpdateManyWithoutAuthorNestedInput;
    portfolioProjects?: Prisma.PortfolioProjectUpdateManyWithoutUserNestedInput;
    aiConversations?: Prisma.AIConversationUpdateManyWithoutUserNestedInput;
};
export type UserUncheckedUpdateWithoutConversationPartsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    username?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    emailVerified?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    image?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    coverImage?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    bio?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    location?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    skills?: Prisma.UserUpdateskillsInput | string[];
    languages?: Prisma.UserUpdatelanguagesInput | string[];
    timezone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    website?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    github?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    linkedin?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    role?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    verificationStatus?: Prisma.StringFieldUpdateOperationsInput | string;
    profileCompletion?: Prisma.IntFieldUpdateOperationsInput | number;
    preferredCurrency?: Prisma.StringFieldUpdateOperationsInput | string;
    stripeAccountId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    stripeOnboardingDone?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    lastLoginAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    accounts?: Prisma.AccountUncheckedUpdateManyWithoutUserNestedInput;
    sessions?: Prisma.SessionUncheckedUpdateManyWithoutUserNestedInput;
    profile?: Prisma.ProfileUncheckedUpdateOneWithoutUserNestedInput;
    freelancerProfile?: Prisma.FreelancerProfileUncheckedUpdateOneWithoutUserNestedInput;
    buyerProfile?: Prisma.BuyerProfileUncheckedUpdateOneWithoutUserNestedInput;
    portfolioItems?: Prisma.PortfolioUncheckedUpdateManyWithoutUserNestedInput;
    services?: Prisma.ServiceUncheckedUpdateManyWithoutUserNestedInput;
    ordersAsBuyer?: Prisma.OrderUncheckedUpdateManyWithoutBuyerNestedInput;
    ordersAsFreelancer?: Prisma.OrderUncheckedUpdateManyWithoutFreelancerNestedInput;
    reviewsWritten?: Prisma.ReviewUncheckedUpdateManyWithoutReviewerNestedInput;
    reviewsReceived?: Prisma.ReviewUncheckedUpdateManyWithoutRevieweeNestedInput;
    favorites?: Prisma.FavoriteUncheckedUpdateManyWithoutUserNestedInput;
    cart?: Prisma.CartUncheckedUpdateOneWithoutUserNestedInput;
    messages?: Prisma.MessageUncheckedUpdateManyWithoutSenderNestedInput;
    notifications?: Prisma.NotificationUncheckedUpdateManyWithoutUserNestedInput;
    payouts?: Prisma.PayoutUncheckedUpdateManyWithoutFreelancerNestedInput;
    disputes?: Prisma.DisputeUncheckedUpdateManyWithoutOpenerNestedInput;
    reports?: Prisma.ReportUncheckedUpdateManyWithoutReporterNestedInput;
    achievements?: Prisma.UserAchievementUncheckedUpdateManyWithoutUserNestedInput;
    xp?: Prisma.UserXPUncheckedUpdateOneWithoutUserNestedInput;
    searchHistory?: Prisma.SearchHistoryUncheckedUpdateManyWithoutUserNestedInput;
    userRoles?: Prisma.UserRoleUncheckedUpdateManyWithoutUserNestedInput;
    companiesOwned?: Prisma.CompanyUncheckedUpdateManyWithoutOwnerNestedInput;
    companyEmployees?: Prisma.EmployeeUncheckedUpdateManyWithoutUserNestedInput;
    jobsPosted?: Prisma.JobUncheckedUpdateManyWithoutPostedByNestedInput;
    resumes?: Prisma.ResumeUncheckedUpdateManyWithoutUserNestedInput;
    jobApplications?: Prisma.JobApplicationUncheckedUpdateManyWithoutApplicantNestedInput;
    products?: Prisma.ProductUncheckedUpdateManyWithoutSellerNestedInput;
    productReviewsWritten?: Prisma.ProductReviewUncheckedUpdateManyWithoutReviewerNestedInput;
    productReviewsReceived?: Prisma.ProductReviewUncheckedUpdateManyWithoutRevieweeNestedInput;
    booksAuthored?: Prisma.BookUncheckedUpdateManyWithoutAuthorUserNestedInput;
    bookPurchases?: Prisma.BookPurchaseUncheckedUpdateManyWithoutUserNestedInput;
    bookReviews?: Prisma.BookReviewUncheckedUpdateManyWithoutUserNestedInput;
    resourcesCreated?: Prisma.ResourceUncheckedUpdateManyWithoutAuthorNestedInput;
    portfolioProjects?: Prisma.PortfolioProjectUncheckedUpdateManyWithoutUserNestedInput;
    aiConversations?: Prisma.AIConversationUncheckedUpdateManyWithoutUserNestedInput;
};
export type UserCreateWithoutMessagesInput = {
    id?: string;
    name: string;
    username?: string | null;
    email: string;
    emailVerified?: boolean;
    image?: string | null;
    coverImage?: string | null;
    bio?: string | null;
    location?: string | null;
    skills?: Prisma.UserCreateskillsInput | string[];
    languages?: Prisma.UserCreatelanguagesInput | string[];
    timezone?: string | null;
    website?: string | null;
    github?: string | null;
    linkedin?: string | null;
    role?: string;
    status?: string;
    verificationStatus?: string;
    profileCompletion?: number;
    preferredCurrency?: string;
    stripeAccountId?: string | null;
    stripeOnboardingDone?: boolean;
    lastLoginAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    accounts?: Prisma.AccountCreateNestedManyWithoutUserInput;
    sessions?: Prisma.SessionCreateNestedManyWithoutUserInput;
    profile?: Prisma.ProfileCreateNestedOneWithoutUserInput;
    freelancerProfile?: Prisma.FreelancerProfileCreateNestedOneWithoutUserInput;
    buyerProfile?: Prisma.BuyerProfileCreateNestedOneWithoutUserInput;
    portfolioItems?: Prisma.PortfolioCreateNestedManyWithoutUserInput;
    services?: Prisma.ServiceCreateNestedManyWithoutUserInput;
    ordersAsBuyer?: Prisma.OrderCreateNestedManyWithoutBuyerInput;
    ordersAsFreelancer?: Prisma.OrderCreateNestedManyWithoutFreelancerInput;
    reviewsWritten?: Prisma.ReviewCreateNestedManyWithoutReviewerInput;
    reviewsReceived?: Prisma.ReviewCreateNestedManyWithoutRevieweeInput;
    favorites?: Prisma.FavoriteCreateNestedManyWithoutUserInput;
    cart?: Prisma.CartCreateNestedOneWithoutUserInput;
    conversationParts?: Prisma.ConversationParticipantCreateNestedManyWithoutUserInput;
    notifications?: Prisma.NotificationCreateNestedManyWithoutUserInput;
    payouts?: Prisma.PayoutCreateNestedManyWithoutFreelancerInput;
    disputes?: Prisma.DisputeCreateNestedManyWithoutOpenerInput;
    reports?: Prisma.ReportCreateNestedManyWithoutReporterInput;
    achievements?: Prisma.UserAchievementCreateNestedManyWithoutUserInput;
    xp?: Prisma.UserXPCreateNestedOneWithoutUserInput;
    searchHistory?: Prisma.SearchHistoryCreateNestedManyWithoutUserInput;
    userRoles?: Prisma.UserRoleCreateNestedManyWithoutUserInput;
    companiesOwned?: Prisma.CompanyCreateNestedManyWithoutOwnerInput;
    companyEmployees?: Prisma.EmployeeCreateNestedManyWithoutUserInput;
    jobsPosted?: Prisma.JobCreateNestedManyWithoutPostedByInput;
    resumes?: Prisma.ResumeCreateNestedManyWithoutUserInput;
    jobApplications?: Prisma.JobApplicationCreateNestedManyWithoutApplicantInput;
    products?: Prisma.ProductCreateNestedManyWithoutSellerInput;
    productReviewsWritten?: Prisma.ProductReviewCreateNestedManyWithoutReviewerInput;
    productReviewsReceived?: Prisma.ProductReviewCreateNestedManyWithoutRevieweeInput;
    booksAuthored?: Prisma.BookCreateNestedManyWithoutAuthorUserInput;
    bookPurchases?: Prisma.BookPurchaseCreateNestedManyWithoutUserInput;
    bookReviews?: Prisma.BookReviewCreateNestedManyWithoutUserInput;
    resourcesCreated?: Prisma.ResourceCreateNestedManyWithoutAuthorInput;
    portfolioProjects?: Prisma.PortfolioProjectCreateNestedManyWithoutUserInput;
    aiConversations?: Prisma.AIConversationCreateNestedManyWithoutUserInput;
};
export type UserUncheckedCreateWithoutMessagesInput = {
    id?: string;
    name: string;
    username?: string | null;
    email: string;
    emailVerified?: boolean;
    image?: string | null;
    coverImage?: string | null;
    bio?: string | null;
    location?: string | null;
    skills?: Prisma.UserCreateskillsInput | string[];
    languages?: Prisma.UserCreatelanguagesInput | string[];
    timezone?: string | null;
    website?: string | null;
    github?: string | null;
    linkedin?: string | null;
    role?: string;
    status?: string;
    verificationStatus?: string;
    profileCompletion?: number;
    preferredCurrency?: string;
    stripeAccountId?: string | null;
    stripeOnboardingDone?: boolean;
    lastLoginAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    accounts?: Prisma.AccountUncheckedCreateNestedManyWithoutUserInput;
    sessions?: Prisma.SessionUncheckedCreateNestedManyWithoutUserInput;
    profile?: Prisma.ProfileUncheckedCreateNestedOneWithoutUserInput;
    freelancerProfile?: Prisma.FreelancerProfileUncheckedCreateNestedOneWithoutUserInput;
    buyerProfile?: Prisma.BuyerProfileUncheckedCreateNestedOneWithoutUserInput;
    portfolioItems?: Prisma.PortfolioUncheckedCreateNestedManyWithoutUserInput;
    services?: Prisma.ServiceUncheckedCreateNestedManyWithoutUserInput;
    ordersAsBuyer?: Prisma.OrderUncheckedCreateNestedManyWithoutBuyerInput;
    ordersAsFreelancer?: Prisma.OrderUncheckedCreateNestedManyWithoutFreelancerInput;
    reviewsWritten?: Prisma.ReviewUncheckedCreateNestedManyWithoutReviewerInput;
    reviewsReceived?: Prisma.ReviewUncheckedCreateNestedManyWithoutRevieweeInput;
    favorites?: Prisma.FavoriteUncheckedCreateNestedManyWithoutUserInput;
    cart?: Prisma.CartUncheckedCreateNestedOneWithoutUserInput;
    conversationParts?: Prisma.ConversationParticipantUncheckedCreateNestedManyWithoutUserInput;
    notifications?: Prisma.NotificationUncheckedCreateNestedManyWithoutUserInput;
    payouts?: Prisma.PayoutUncheckedCreateNestedManyWithoutFreelancerInput;
    disputes?: Prisma.DisputeUncheckedCreateNestedManyWithoutOpenerInput;
    reports?: Prisma.ReportUncheckedCreateNestedManyWithoutReporterInput;
    achievements?: Prisma.UserAchievementUncheckedCreateNestedManyWithoutUserInput;
    xp?: Prisma.UserXPUncheckedCreateNestedOneWithoutUserInput;
    searchHistory?: Prisma.SearchHistoryUncheckedCreateNestedManyWithoutUserInput;
    userRoles?: Prisma.UserRoleUncheckedCreateNestedManyWithoutUserInput;
    companiesOwned?: Prisma.CompanyUncheckedCreateNestedManyWithoutOwnerInput;
    companyEmployees?: Prisma.EmployeeUncheckedCreateNestedManyWithoutUserInput;
    jobsPosted?: Prisma.JobUncheckedCreateNestedManyWithoutPostedByInput;
    resumes?: Prisma.ResumeUncheckedCreateNestedManyWithoutUserInput;
    jobApplications?: Prisma.JobApplicationUncheckedCreateNestedManyWithoutApplicantInput;
    products?: Prisma.ProductUncheckedCreateNestedManyWithoutSellerInput;
    productReviewsWritten?: Prisma.ProductReviewUncheckedCreateNestedManyWithoutReviewerInput;
    productReviewsReceived?: Prisma.ProductReviewUncheckedCreateNestedManyWithoutRevieweeInput;
    booksAuthored?: Prisma.BookUncheckedCreateNestedManyWithoutAuthorUserInput;
    bookPurchases?: Prisma.BookPurchaseUncheckedCreateNestedManyWithoutUserInput;
    bookReviews?: Prisma.BookReviewUncheckedCreateNestedManyWithoutUserInput;
    resourcesCreated?: Prisma.ResourceUncheckedCreateNestedManyWithoutAuthorInput;
    portfolioProjects?: Prisma.PortfolioProjectUncheckedCreateNestedManyWithoutUserInput;
    aiConversations?: Prisma.AIConversationUncheckedCreateNestedManyWithoutUserInput;
};
export type UserCreateOrConnectWithoutMessagesInput = {
    where: Prisma.UserWhereUniqueInput;
    create: Prisma.XOR<Prisma.UserCreateWithoutMessagesInput, Prisma.UserUncheckedCreateWithoutMessagesInput>;
};
export type UserUpsertWithoutMessagesInput = {
    update: Prisma.XOR<Prisma.UserUpdateWithoutMessagesInput, Prisma.UserUncheckedUpdateWithoutMessagesInput>;
    create: Prisma.XOR<Prisma.UserCreateWithoutMessagesInput, Prisma.UserUncheckedCreateWithoutMessagesInput>;
    where?: Prisma.UserWhereInput;
};
export type UserUpdateToOneWithWhereWithoutMessagesInput = {
    where?: Prisma.UserWhereInput;
    data: Prisma.XOR<Prisma.UserUpdateWithoutMessagesInput, Prisma.UserUncheckedUpdateWithoutMessagesInput>;
};
export type UserUpdateWithoutMessagesInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    username?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    emailVerified?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    image?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    coverImage?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    bio?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    location?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    skills?: Prisma.UserUpdateskillsInput | string[];
    languages?: Prisma.UserUpdatelanguagesInput | string[];
    timezone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    website?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    github?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    linkedin?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    role?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    verificationStatus?: Prisma.StringFieldUpdateOperationsInput | string;
    profileCompletion?: Prisma.IntFieldUpdateOperationsInput | number;
    preferredCurrency?: Prisma.StringFieldUpdateOperationsInput | string;
    stripeAccountId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    stripeOnboardingDone?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    lastLoginAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    accounts?: Prisma.AccountUpdateManyWithoutUserNestedInput;
    sessions?: Prisma.SessionUpdateManyWithoutUserNestedInput;
    profile?: Prisma.ProfileUpdateOneWithoutUserNestedInput;
    freelancerProfile?: Prisma.FreelancerProfileUpdateOneWithoutUserNestedInput;
    buyerProfile?: Prisma.BuyerProfileUpdateOneWithoutUserNestedInput;
    portfolioItems?: Prisma.PortfolioUpdateManyWithoutUserNestedInput;
    services?: Prisma.ServiceUpdateManyWithoutUserNestedInput;
    ordersAsBuyer?: Prisma.OrderUpdateManyWithoutBuyerNestedInput;
    ordersAsFreelancer?: Prisma.OrderUpdateManyWithoutFreelancerNestedInput;
    reviewsWritten?: Prisma.ReviewUpdateManyWithoutReviewerNestedInput;
    reviewsReceived?: Prisma.ReviewUpdateManyWithoutRevieweeNestedInput;
    favorites?: Prisma.FavoriteUpdateManyWithoutUserNestedInput;
    cart?: Prisma.CartUpdateOneWithoutUserNestedInput;
    conversationParts?: Prisma.ConversationParticipantUpdateManyWithoutUserNestedInput;
    notifications?: Prisma.NotificationUpdateManyWithoutUserNestedInput;
    payouts?: Prisma.PayoutUpdateManyWithoutFreelancerNestedInput;
    disputes?: Prisma.DisputeUpdateManyWithoutOpenerNestedInput;
    reports?: Prisma.ReportUpdateManyWithoutReporterNestedInput;
    achievements?: Prisma.UserAchievementUpdateManyWithoutUserNestedInput;
    xp?: Prisma.UserXPUpdateOneWithoutUserNestedInput;
    searchHistory?: Prisma.SearchHistoryUpdateManyWithoutUserNestedInput;
    userRoles?: Prisma.UserRoleUpdateManyWithoutUserNestedInput;
    companiesOwned?: Prisma.CompanyUpdateManyWithoutOwnerNestedInput;
    companyEmployees?: Prisma.EmployeeUpdateManyWithoutUserNestedInput;
    jobsPosted?: Prisma.JobUpdateManyWithoutPostedByNestedInput;
    resumes?: Prisma.ResumeUpdateManyWithoutUserNestedInput;
    jobApplications?: Prisma.JobApplicationUpdateManyWithoutApplicantNestedInput;
    products?: Prisma.ProductUpdateManyWithoutSellerNestedInput;
    productReviewsWritten?: Prisma.ProductReviewUpdateManyWithoutReviewerNestedInput;
    productReviewsReceived?: Prisma.ProductReviewUpdateManyWithoutRevieweeNestedInput;
    booksAuthored?: Prisma.BookUpdateManyWithoutAuthorUserNestedInput;
    bookPurchases?: Prisma.BookPurchaseUpdateManyWithoutUserNestedInput;
    bookReviews?: Prisma.BookReviewUpdateManyWithoutUserNestedInput;
    resourcesCreated?: Prisma.ResourceUpdateManyWithoutAuthorNestedInput;
    portfolioProjects?: Prisma.PortfolioProjectUpdateManyWithoutUserNestedInput;
    aiConversations?: Prisma.AIConversationUpdateManyWithoutUserNestedInput;
};
export type UserUncheckedUpdateWithoutMessagesInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    username?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    emailVerified?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    image?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    coverImage?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    bio?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    location?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    skills?: Prisma.UserUpdateskillsInput | string[];
    languages?: Prisma.UserUpdatelanguagesInput | string[];
    timezone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    website?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    github?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    linkedin?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    role?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    verificationStatus?: Prisma.StringFieldUpdateOperationsInput | string;
    profileCompletion?: Prisma.IntFieldUpdateOperationsInput | number;
    preferredCurrency?: Prisma.StringFieldUpdateOperationsInput | string;
    stripeAccountId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    stripeOnboardingDone?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    lastLoginAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    accounts?: Prisma.AccountUncheckedUpdateManyWithoutUserNestedInput;
    sessions?: Prisma.SessionUncheckedUpdateManyWithoutUserNestedInput;
    profile?: Prisma.ProfileUncheckedUpdateOneWithoutUserNestedInput;
    freelancerProfile?: Prisma.FreelancerProfileUncheckedUpdateOneWithoutUserNestedInput;
    buyerProfile?: Prisma.BuyerProfileUncheckedUpdateOneWithoutUserNestedInput;
    portfolioItems?: Prisma.PortfolioUncheckedUpdateManyWithoutUserNestedInput;
    services?: Prisma.ServiceUncheckedUpdateManyWithoutUserNestedInput;
    ordersAsBuyer?: Prisma.OrderUncheckedUpdateManyWithoutBuyerNestedInput;
    ordersAsFreelancer?: Prisma.OrderUncheckedUpdateManyWithoutFreelancerNestedInput;
    reviewsWritten?: Prisma.ReviewUncheckedUpdateManyWithoutReviewerNestedInput;
    reviewsReceived?: Prisma.ReviewUncheckedUpdateManyWithoutRevieweeNestedInput;
    favorites?: Prisma.FavoriteUncheckedUpdateManyWithoutUserNestedInput;
    cart?: Prisma.CartUncheckedUpdateOneWithoutUserNestedInput;
    conversationParts?: Prisma.ConversationParticipantUncheckedUpdateManyWithoutUserNestedInput;
    notifications?: Prisma.NotificationUncheckedUpdateManyWithoutUserNestedInput;
    payouts?: Prisma.PayoutUncheckedUpdateManyWithoutFreelancerNestedInput;
    disputes?: Prisma.DisputeUncheckedUpdateManyWithoutOpenerNestedInput;
    reports?: Prisma.ReportUncheckedUpdateManyWithoutReporterNestedInput;
    achievements?: Prisma.UserAchievementUncheckedUpdateManyWithoutUserNestedInput;
    xp?: Prisma.UserXPUncheckedUpdateOneWithoutUserNestedInput;
    searchHistory?: Prisma.SearchHistoryUncheckedUpdateManyWithoutUserNestedInput;
    userRoles?: Prisma.UserRoleUncheckedUpdateManyWithoutUserNestedInput;
    companiesOwned?: Prisma.CompanyUncheckedUpdateManyWithoutOwnerNestedInput;
    companyEmployees?: Prisma.EmployeeUncheckedUpdateManyWithoutUserNestedInput;
    jobsPosted?: Prisma.JobUncheckedUpdateManyWithoutPostedByNestedInput;
    resumes?: Prisma.ResumeUncheckedUpdateManyWithoutUserNestedInput;
    jobApplications?: Prisma.JobApplicationUncheckedUpdateManyWithoutApplicantNestedInput;
    products?: Prisma.ProductUncheckedUpdateManyWithoutSellerNestedInput;
    productReviewsWritten?: Prisma.ProductReviewUncheckedUpdateManyWithoutReviewerNestedInput;
    productReviewsReceived?: Prisma.ProductReviewUncheckedUpdateManyWithoutRevieweeNestedInput;
    booksAuthored?: Prisma.BookUncheckedUpdateManyWithoutAuthorUserNestedInput;
    bookPurchases?: Prisma.BookPurchaseUncheckedUpdateManyWithoutUserNestedInput;
    bookReviews?: Prisma.BookReviewUncheckedUpdateManyWithoutUserNestedInput;
    resourcesCreated?: Prisma.ResourceUncheckedUpdateManyWithoutAuthorNestedInput;
    portfolioProjects?: Prisma.PortfolioProjectUncheckedUpdateManyWithoutUserNestedInput;
    aiConversations?: Prisma.AIConversationUncheckedUpdateManyWithoutUserNestedInput;
};
export type UserCreateWithoutNotificationsInput = {
    id?: string;
    name: string;
    username?: string | null;
    email: string;
    emailVerified?: boolean;
    image?: string | null;
    coverImage?: string | null;
    bio?: string | null;
    location?: string | null;
    skills?: Prisma.UserCreateskillsInput | string[];
    languages?: Prisma.UserCreatelanguagesInput | string[];
    timezone?: string | null;
    website?: string | null;
    github?: string | null;
    linkedin?: string | null;
    role?: string;
    status?: string;
    verificationStatus?: string;
    profileCompletion?: number;
    preferredCurrency?: string;
    stripeAccountId?: string | null;
    stripeOnboardingDone?: boolean;
    lastLoginAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    accounts?: Prisma.AccountCreateNestedManyWithoutUserInput;
    sessions?: Prisma.SessionCreateNestedManyWithoutUserInput;
    profile?: Prisma.ProfileCreateNestedOneWithoutUserInput;
    freelancerProfile?: Prisma.FreelancerProfileCreateNestedOneWithoutUserInput;
    buyerProfile?: Prisma.BuyerProfileCreateNestedOneWithoutUserInput;
    portfolioItems?: Prisma.PortfolioCreateNestedManyWithoutUserInput;
    services?: Prisma.ServiceCreateNestedManyWithoutUserInput;
    ordersAsBuyer?: Prisma.OrderCreateNestedManyWithoutBuyerInput;
    ordersAsFreelancer?: Prisma.OrderCreateNestedManyWithoutFreelancerInput;
    reviewsWritten?: Prisma.ReviewCreateNestedManyWithoutReviewerInput;
    reviewsReceived?: Prisma.ReviewCreateNestedManyWithoutRevieweeInput;
    favorites?: Prisma.FavoriteCreateNestedManyWithoutUserInput;
    cart?: Prisma.CartCreateNestedOneWithoutUserInput;
    conversationParts?: Prisma.ConversationParticipantCreateNestedManyWithoutUserInput;
    messages?: Prisma.MessageCreateNestedManyWithoutSenderInput;
    payouts?: Prisma.PayoutCreateNestedManyWithoutFreelancerInput;
    disputes?: Prisma.DisputeCreateNestedManyWithoutOpenerInput;
    reports?: Prisma.ReportCreateNestedManyWithoutReporterInput;
    achievements?: Prisma.UserAchievementCreateNestedManyWithoutUserInput;
    xp?: Prisma.UserXPCreateNestedOneWithoutUserInput;
    searchHistory?: Prisma.SearchHistoryCreateNestedManyWithoutUserInput;
    userRoles?: Prisma.UserRoleCreateNestedManyWithoutUserInput;
    companiesOwned?: Prisma.CompanyCreateNestedManyWithoutOwnerInput;
    companyEmployees?: Prisma.EmployeeCreateNestedManyWithoutUserInput;
    jobsPosted?: Prisma.JobCreateNestedManyWithoutPostedByInput;
    resumes?: Prisma.ResumeCreateNestedManyWithoutUserInput;
    jobApplications?: Prisma.JobApplicationCreateNestedManyWithoutApplicantInput;
    products?: Prisma.ProductCreateNestedManyWithoutSellerInput;
    productReviewsWritten?: Prisma.ProductReviewCreateNestedManyWithoutReviewerInput;
    productReviewsReceived?: Prisma.ProductReviewCreateNestedManyWithoutRevieweeInput;
    booksAuthored?: Prisma.BookCreateNestedManyWithoutAuthorUserInput;
    bookPurchases?: Prisma.BookPurchaseCreateNestedManyWithoutUserInput;
    bookReviews?: Prisma.BookReviewCreateNestedManyWithoutUserInput;
    resourcesCreated?: Prisma.ResourceCreateNestedManyWithoutAuthorInput;
    portfolioProjects?: Prisma.PortfolioProjectCreateNestedManyWithoutUserInput;
    aiConversations?: Prisma.AIConversationCreateNestedManyWithoutUserInput;
};
export type UserUncheckedCreateWithoutNotificationsInput = {
    id?: string;
    name: string;
    username?: string | null;
    email: string;
    emailVerified?: boolean;
    image?: string | null;
    coverImage?: string | null;
    bio?: string | null;
    location?: string | null;
    skills?: Prisma.UserCreateskillsInput | string[];
    languages?: Prisma.UserCreatelanguagesInput | string[];
    timezone?: string | null;
    website?: string | null;
    github?: string | null;
    linkedin?: string | null;
    role?: string;
    status?: string;
    verificationStatus?: string;
    profileCompletion?: number;
    preferredCurrency?: string;
    stripeAccountId?: string | null;
    stripeOnboardingDone?: boolean;
    lastLoginAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    accounts?: Prisma.AccountUncheckedCreateNestedManyWithoutUserInput;
    sessions?: Prisma.SessionUncheckedCreateNestedManyWithoutUserInput;
    profile?: Prisma.ProfileUncheckedCreateNestedOneWithoutUserInput;
    freelancerProfile?: Prisma.FreelancerProfileUncheckedCreateNestedOneWithoutUserInput;
    buyerProfile?: Prisma.BuyerProfileUncheckedCreateNestedOneWithoutUserInput;
    portfolioItems?: Prisma.PortfolioUncheckedCreateNestedManyWithoutUserInput;
    services?: Prisma.ServiceUncheckedCreateNestedManyWithoutUserInput;
    ordersAsBuyer?: Prisma.OrderUncheckedCreateNestedManyWithoutBuyerInput;
    ordersAsFreelancer?: Prisma.OrderUncheckedCreateNestedManyWithoutFreelancerInput;
    reviewsWritten?: Prisma.ReviewUncheckedCreateNestedManyWithoutReviewerInput;
    reviewsReceived?: Prisma.ReviewUncheckedCreateNestedManyWithoutRevieweeInput;
    favorites?: Prisma.FavoriteUncheckedCreateNestedManyWithoutUserInput;
    cart?: Prisma.CartUncheckedCreateNestedOneWithoutUserInput;
    conversationParts?: Prisma.ConversationParticipantUncheckedCreateNestedManyWithoutUserInput;
    messages?: Prisma.MessageUncheckedCreateNestedManyWithoutSenderInput;
    payouts?: Prisma.PayoutUncheckedCreateNestedManyWithoutFreelancerInput;
    disputes?: Prisma.DisputeUncheckedCreateNestedManyWithoutOpenerInput;
    reports?: Prisma.ReportUncheckedCreateNestedManyWithoutReporterInput;
    achievements?: Prisma.UserAchievementUncheckedCreateNestedManyWithoutUserInput;
    xp?: Prisma.UserXPUncheckedCreateNestedOneWithoutUserInput;
    searchHistory?: Prisma.SearchHistoryUncheckedCreateNestedManyWithoutUserInput;
    userRoles?: Prisma.UserRoleUncheckedCreateNestedManyWithoutUserInput;
    companiesOwned?: Prisma.CompanyUncheckedCreateNestedManyWithoutOwnerInput;
    companyEmployees?: Prisma.EmployeeUncheckedCreateNestedManyWithoutUserInput;
    jobsPosted?: Prisma.JobUncheckedCreateNestedManyWithoutPostedByInput;
    resumes?: Prisma.ResumeUncheckedCreateNestedManyWithoutUserInput;
    jobApplications?: Prisma.JobApplicationUncheckedCreateNestedManyWithoutApplicantInput;
    products?: Prisma.ProductUncheckedCreateNestedManyWithoutSellerInput;
    productReviewsWritten?: Prisma.ProductReviewUncheckedCreateNestedManyWithoutReviewerInput;
    productReviewsReceived?: Prisma.ProductReviewUncheckedCreateNestedManyWithoutRevieweeInput;
    booksAuthored?: Prisma.BookUncheckedCreateNestedManyWithoutAuthorUserInput;
    bookPurchases?: Prisma.BookPurchaseUncheckedCreateNestedManyWithoutUserInput;
    bookReviews?: Prisma.BookReviewUncheckedCreateNestedManyWithoutUserInput;
    resourcesCreated?: Prisma.ResourceUncheckedCreateNestedManyWithoutAuthorInput;
    portfolioProjects?: Prisma.PortfolioProjectUncheckedCreateNestedManyWithoutUserInput;
    aiConversations?: Prisma.AIConversationUncheckedCreateNestedManyWithoutUserInput;
};
export type UserCreateOrConnectWithoutNotificationsInput = {
    where: Prisma.UserWhereUniqueInput;
    create: Prisma.XOR<Prisma.UserCreateWithoutNotificationsInput, Prisma.UserUncheckedCreateWithoutNotificationsInput>;
};
export type UserUpsertWithoutNotificationsInput = {
    update: Prisma.XOR<Prisma.UserUpdateWithoutNotificationsInput, Prisma.UserUncheckedUpdateWithoutNotificationsInput>;
    create: Prisma.XOR<Prisma.UserCreateWithoutNotificationsInput, Prisma.UserUncheckedCreateWithoutNotificationsInput>;
    where?: Prisma.UserWhereInput;
};
export type UserUpdateToOneWithWhereWithoutNotificationsInput = {
    where?: Prisma.UserWhereInput;
    data: Prisma.XOR<Prisma.UserUpdateWithoutNotificationsInput, Prisma.UserUncheckedUpdateWithoutNotificationsInput>;
};
export type UserUpdateWithoutNotificationsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    username?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    emailVerified?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    image?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    coverImage?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    bio?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    location?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    skills?: Prisma.UserUpdateskillsInput | string[];
    languages?: Prisma.UserUpdatelanguagesInput | string[];
    timezone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    website?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    github?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    linkedin?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    role?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    verificationStatus?: Prisma.StringFieldUpdateOperationsInput | string;
    profileCompletion?: Prisma.IntFieldUpdateOperationsInput | number;
    preferredCurrency?: Prisma.StringFieldUpdateOperationsInput | string;
    stripeAccountId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    stripeOnboardingDone?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    lastLoginAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    accounts?: Prisma.AccountUpdateManyWithoutUserNestedInput;
    sessions?: Prisma.SessionUpdateManyWithoutUserNestedInput;
    profile?: Prisma.ProfileUpdateOneWithoutUserNestedInput;
    freelancerProfile?: Prisma.FreelancerProfileUpdateOneWithoutUserNestedInput;
    buyerProfile?: Prisma.BuyerProfileUpdateOneWithoutUserNestedInput;
    portfolioItems?: Prisma.PortfolioUpdateManyWithoutUserNestedInput;
    services?: Prisma.ServiceUpdateManyWithoutUserNestedInput;
    ordersAsBuyer?: Prisma.OrderUpdateManyWithoutBuyerNestedInput;
    ordersAsFreelancer?: Prisma.OrderUpdateManyWithoutFreelancerNestedInput;
    reviewsWritten?: Prisma.ReviewUpdateManyWithoutReviewerNestedInput;
    reviewsReceived?: Prisma.ReviewUpdateManyWithoutRevieweeNestedInput;
    favorites?: Prisma.FavoriteUpdateManyWithoutUserNestedInput;
    cart?: Prisma.CartUpdateOneWithoutUserNestedInput;
    conversationParts?: Prisma.ConversationParticipantUpdateManyWithoutUserNestedInput;
    messages?: Prisma.MessageUpdateManyWithoutSenderNestedInput;
    payouts?: Prisma.PayoutUpdateManyWithoutFreelancerNestedInput;
    disputes?: Prisma.DisputeUpdateManyWithoutOpenerNestedInput;
    reports?: Prisma.ReportUpdateManyWithoutReporterNestedInput;
    achievements?: Prisma.UserAchievementUpdateManyWithoutUserNestedInput;
    xp?: Prisma.UserXPUpdateOneWithoutUserNestedInput;
    searchHistory?: Prisma.SearchHistoryUpdateManyWithoutUserNestedInput;
    userRoles?: Prisma.UserRoleUpdateManyWithoutUserNestedInput;
    companiesOwned?: Prisma.CompanyUpdateManyWithoutOwnerNestedInput;
    companyEmployees?: Prisma.EmployeeUpdateManyWithoutUserNestedInput;
    jobsPosted?: Prisma.JobUpdateManyWithoutPostedByNestedInput;
    resumes?: Prisma.ResumeUpdateManyWithoutUserNestedInput;
    jobApplications?: Prisma.JobApplicationUpdateManyWithoutApplicantNestedInput;
    products?: Prisma.ProductUpdateManyWithoutSellerNestedInput;
    productReviewsWritten?: Prisma.ProductReviewUpdateManyWithoutReviewerNestedInput;
    productReviewsReceived?: Prisma.ProductReviewUpdateManyWithoutRevieweeNestedInput;
    booksAuthored?: Prisma.BookUpdateManyWithoutAuthorUserNestedInput;
    bookPurchases?: Prisma.BookPurchaseUpdateManyWithoutUserNestedInput;
    bookReviews?: Prisma.BookReviewUpdateManyWithoutUserNestedInput;
    resourcesCreated?: Prisma.ResourceUpdateManyWithoutAuthorNestedInput;
    portfolioProjects?: Prisma.PortfolioProjectUpdateManyWithoutUserNestedInput;
    aiConversations?: Prisma.AIConversationUpdateManyWithoutUserNestedInput;
};
export type UserUncheckedUpdateWithoutNotificationsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    username?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    emailVerified?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    image?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    coverImage?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    bio?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    location?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    skills?: Prisma.UserUpdateskillsInput | string[];
    languages?: Prisma.UserUpdatelanguagesInput | string[];
    timezone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    website?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    github?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    linkedin?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    role?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    verificationStatus?: Prisma.StringFieldUpdateOperationsInput | string;
    profileCompletion?: Prisma.IntFieldUpdateOperationsInput | number;
    preferredCurrency?: Prisma.StringFieldUpdateOperationsInput | string;
    stripeAccountId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    stripeOnboardingDone?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    lastLoginAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    accounts?: Prisma.AccountUncheckedUpdateManyWithoutUserNestedInput;
    sessions?: Prisma.SessionUncheckedUpdateManyWithoutUserNestedInput;
    profile?: Prisma.ProfileUncheckedUpdateOneWithoutUserNestedInput;
    freelancerProfile?: Prisma.FreelancerProfileUncheckedUpdateOneWithoutUserNestedInput;
    buyerProfile?: Prisma.BuyerProfileUncheckedUpdateOneWithoutUserNestedInput;
    portfolioItems?: Prisma.PortfolioUncheckedUpdateManyWithoutUserNestedInput;
    services?: Prisma.ServiceUncheckedUpdateManyWithoutUserNestedInput;
    ordersAsBuyer?: Prisma.OrderUncheckedUpdateManyWithoutBuyerNestedInput;
    ordersAsFreelancer?: Prisma.OrderUncheckedUpdateManyWithoutFreelancerNestedInput;
    reviewsWritten?: Prisma.ReviewUncheckedUpdateManyWithoutReviewerNestedInput;
    reviewsReceived?: Prisma.ReviewUncheckedUpdateManyWithoutRevieweeNestedInput;
    favorites?: Prisma.FavoriteUncheckedUpdateManyWithoutUserNestedInput;
    cart?: Prisma.CartUncheckedUpdateOneWithoutUserNestedInput;
    conversationParts?: Prisma.ConversationParticipantUncheckedUpdateManyWithoutUserNestedInput;
    messages?: Prisma.MessageUncheckedUpdateManyWithoutSenderNestedInput;
    payouts?: Prisma.PayoutUncheckedUpdateManyWithoutFreelancerNestedInput;
    disputes?: Prisma.DisputeUncheckedUpdateManyWithoutOpenerNestedInput;
    reports?: Prisma.ReportUncheckedUpdateManyWithoutReporterNestedInput;
    achievements?: Prisma.UserAchievementUncheckedUpdateManyWithoutUserNestedInput;
    xp?: Prisma.UserXPUncheckedUpdateOneWithoutUserNestedInput;
    searchHistory?: Prisma.SearchHistoryUncheckedUpdateManyWithoutUserNestedInput;
    userRoles?: Prisma.UserRoleUncheckedUpdateManyWithoutUserNestedInput;
    companiesOwned?: Prisma.CompanyUncheckedUpdateManyWithoutOwnerNestedInput;
    companyEmployees?: Prisma.EmployeeUncheckedUpdateManyWithoutUserNestedInput;
    jobsPosted?: Prisma.JobUncheckedUpdateManyWithoutPostedByNestedInput;
    resumes?: Prisma.ResumeUncheckedUpdateManyWithoutUserNestedInput;
    jobApplications?: Prisma.JobApplicationUncheckedUpdateManyWithoutApplicantNestedInput;
    products?: Prisma.ProductUncheckedUpdateManyWithoutSellerNestedInput;
    productReviewsWritten?: Prisma.ProductReviewUncheckedUpdateManyWithoutReviewerNestedInput;
    productReviewsReceived?: Prisma.ProductReviewUncheckedUpdateManyWithoutRevieweeNestedInput;
    booksAuthored?: Prisma.BookUncheckedUpdateManyWithoutAuthorUserNestedInput;
    bookPurchases?: Prisma.BookPurchaseUncheckedUpdateManyWithoutUserNestedInput;
    bookReviews?: Prisma.BookReviewUncheckedUpdateManyWithoutUserNestedInput;
    resourcesCreated?: Prisma.ResourceUncheckedUpdateManyWithoutAuthorNestedInput;
    portfolioProjects?: Prisma.PortfolioProjectUncheckedUpdateManyWithoutUserNestedInput;
    aiConversations?: Prisma.AIConversationUncheckedUpdateManyWithoutUserNestedInput;
};
export type UserCreateWithoutPayoutsInput = {
    id?: string;
    name: string;
    username?: string | null;
    email: string;
    emailVerified?: boolean;
    image?: string | null;
    coverImage?: string | null;
    bio?: string | null;
    location?: string | null;
    skills?: Prisma.UserCreateskillsInput | string[];
    languages?: Prisma.UserCreatelanguagesInput | string[];
    timezone?: string | null;
    website?: string | null;
    github?: string | null;
    linkedin?: string | null;
    role?: string;
    status?: string;
    verificationStatus?: string;
    profileCompletion?: number;
    preferredCurrency?: string;
    stripeAccountId?: string | null;
    stripeOnboardingDone?: boolean;
    lastLoginAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    accounts?: Prisma.AccountCreateNestedManyWithoutUserInput;
    sessions?: Prisma.SessionCreateNestedManyWithoutUserInput;
    profile?: Prisma.ProfileCreateNestedOneWithoutUserInput;
    freelancerProfile?: Prisma.FreelancerProfileCreateNestedOneWithoutUserInput;
    buyerProfile?: Prisma.BuyerProfileCreateNestedOneWithoutUserInput;
    portfolioItems?: Prisma.PortfolioCreateNestedManyWithoutUserInput;
    services?: Prisma.ServiceCreateNestedManyWithoutUserInput;
    ordersAsBuyer?: Prisma.OrderCreateNestedManyWithoutBuyerInput;
    ordersAsFreelancer?: Prisma.OrderCreateNestedManyWithoutFreelancerInput;
    reviewsWritten?: Prisma.ReviewCreateNestedManyWithoutReviewerInput;
    reviewsReceived?: Prisma.ReviewCreateNestedManyWithoutRevieweeInput;
    favorites?: Prisma.FavoriteCreateNestedManyWithoutUserInput;
    cart?: Prisma.CartCreateNestedOneWithoutUserInput;
    conversationParts?: Prisma.ConversationParticipantCreateNestedManyWithoutUserInput;
    messages?: Prisma.MessageCreateNestedManyWithoutSenderInput;
    notifications?: Prisma.NotificationCreateNestedManyWithoutUserInput;
    disputes?: Prisma.DisputeCreateNestedManyWithoutOpenerInput;
    reports?: Prisma.ReportCreateNestedManyWithoutReporterInput;
    achievements?: Prisma.UserAchievementCreateNestedManyWithoutUserInput;
    xp?: Prisma.UserXPCreateNestedOneWithoutUserInput;
    searchHistory?: Prisma.SearchHistoryCreateNestedManyWithoutUserInput;
    userRoles?: Prisma.UserRoleCreateNestedManyWithoutUserInput;
    companiesOwned?: Prisma.CompanyCreateNestedManyWithoutOwnerInput;
    companyEmployees?: Prisma.EmployeeCreateNestedManyWithoutUserInput;
    jobsPosted?: Prisma.JobCreateNestedManyWithoutPostedByInput;
    resumes?: Prisma.ResumeCreateNestedManyWithoutUserInput;
    jobApplications?: Prisma.JobApplicationCreateNestedManyWithoutApplicantInput;
    products?: Prisma.ProductCreateNestedManyWithoutSellerInput;
    productReviewsWritten?: Prisma.ProductReviewCreateNestedManyWithoutReviewerInput;
    productReviewsReceived?: Prisma.ProductReviewCreateNestedManyWithoutRevieweeInput;
    booksAuthored?: Prisma.BookCreateNestedManyWithoutAuthorUserInput;
    bookPurchases?: Prisma.BookPurchaseCreateNestedManyWithoutUserInput;
    bookReviews?: Prisma.BookReviewCreateNestedManyWithoutUserInput;
    resourcesCreated?: Prisma.ResourceCreateNestedManyWithoutAuthorInput;
    portfolioProjects?: Prisma.PortfolioProjectCreateNestedManyWithoutUserInput;
    aiConversations?: Prisma.AIConversationCreateNestedManyWithoutUserInput;
};
export type UserUncheckedCreateWithoutPayoutsInput = {
    id?: string;
    name: string;
    username?: string | null;
    email: string;
    emailVerified?: boolean;
    image?: string | null;
    coverImage?: string | null;
    bio?: string | null;
    location?: string | null;
    skills?: Prisma.UserCreateskillsInput | string[];
    languages?: Prisma.UserCreatelanguagesInput | string[];
    timezone?: string | null;
    website?: string | null;
    github?: string | null;
    linkedin?: string | null;
    role?: string;
    status?: string;
    verificationStatus?: string;
    profileCompletion?: number;
    preferredCurrency?: string;
    stripeAccountId?: string | null;
    stripeOnboardingDone?: boolean;
    lastLoginAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    accounts?: Prisma.AccountUncheckedCreateNestedManyWithoutUserInput;
    sessions?: Prisma.SessionUncheckedCreateNestedManyWithoutUserInput;
    profile?: Prisma.ProfileUncheckedCreateNestedOneWithoutUserInput;
    freelancerProfile?: Prisma.FreelancerProfileUncheckedCreateNestedOneWithoutUserInput;
    buyerProfile?: Prisma.BuyerProfileUncheckedCreateNestedOneWithoutUserInput;
    portfolioItems?: Prisma.PortfolioUncheckedCreateNestedManyWithoutUserInput;
    services?: Prisma.ServiceUncheckedCreateNestedManyWithoutUserInput;
    ordersAsBuyer?: Prisma.OrderUncheckedCreateNestedManyWithoutBuyerInput;
    ordersAsFreelancer?: Prisma.OrderUncheckedCreateNestedManyWithoutFreelancerInput;
    reviewsWritten?: Prisma.ReviewUncheckedCreateNestedManyWithoutReviewerInput;
    reviewsReceived?: Prisma.ReviewUncheckedCreateNestedManyWithoutRevieweeInput;
    favorites?: Prisma.FavoriteUncheckedCreateNestedManyWithoutUserInput;
    cart?: Prisma.CartUncheckedCreateNestedOneWithoutUserInput;
    conversationParts?: Prisma.ConversationParticipantUncheckedCreateNestedManyWithoutUserInput;
    messages?: Prisma.MessageUncheckedCreateNestedManyWithoutSenderInput;
    notifications?: Prisma.NotificationUncheckedCreateNestedManyWithoutUserInput;
    disputes?: Prisma.DisputeUncheckedCreateNestedManyWithoutOpenerInput;
    reports?: Prisma.ReportUncheckedCreateNestedManyWithoutReporterInput;
    achievements?: Prisma.UserAchievementUncheckedCreateNestedManyWithoutUserInput;
    xp?: Prisma.UserXPUncheckedCreateNestedOneWithoutUserInput;
    searchHistory?: Prisma.SearchHistoryUncheckedCreateNestedManyWithoutUserInput;
    userRoles?: Prisma.UserRoleUncheckedCreateNestedManyWithoutUserInput;
    companiesOwned?: Prisma.CompanyUncheckedCreateNestedManyWithoutOwnerInput;
    companyEmployees?: Prisma.EmployeeUncheckedCreateNestedManyWithoutUserInput;
    jobsPosted?: Prisma.JobUncheckedCreateNestedManyWithoutPostedByInput;
    resumes?: Prisma.ResumeUncheckedCreateNestedManyWithoutUserInput;
    jobApplications?: Prisma.JobApplicationUncheckedCreateNestedManyWithoutApplicantInput;
    products?: Prisma.ProductUncheckedCreateNestedManyWithoutSellerInput;
    productReviewsWritten?: Prisma.ProductReviewUncheckedCreateNestedManyWithoutReviewerInput;
    productReviewsReceived?: Prisma.ProductReviewUncheckedCreateNestedManyWithoutRevieweeInput;
    booksAuthored?: Prisma.BookUncheckedCreateNestedManyWithoutAuthorUserInput;
    bookPurchases?: Prisma.BookPurchaseUncheckedCreateNestedManyWithoutUserInput;
    bookReviews?: Prisma.BookReviewUncheckedCreateNestedManyWithoutUserInput;
    resourcesCreated?: Prisma.ResourceUncheckedCreateNestedManyWithoutAuthorInput;
    portfolioProjects?: Prisma.PortfolioProjectUncheckedCreateNestedManyWithoutUserInput;
    aiConversations?: Prisma.AIConversationUncheckedCreateNestedManyWithoutUserInput;
};
export type UserCreateOrConnectWithoutPayoutsInput = {
    where: Prisma.UserWhereUniqueInput;
    create: Prisma.XOR<Prisma.UserCreateWithoutPayoutsInput, Prisma.UserUncheckedCreateWithoutPayoutsInput>;
};
export type UserUpsertWithoutPayoutsInput = {
    update: Prisma.XOR<Prisma.UserUpdateWithoutPayoutsInput, Prisma.UserUncheckedUpdateWithoutPayoutsInput>;
    create: Prisma.XOR<Prisma.UserCreateWithoutPayoutsInput, Prisma.UserUncheckedCreateWithoutPayoutsInput>;
    where?: Prisma.UserWhereInput;
};
export type UserUpdateToOneWithWhereWithoutPayoutsInput = {
    where?: Prisma.UserWhereInput;
    data: Prisma.XOR<Prisma.UserUpdateWithoutPayoutsInput, Prisma.UserUncheckedUpdateWithoutPayoutsInput>;
};
export type UserUpdateWithoutPayoutsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    username?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    emailVerified?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    image?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    coverImage?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    bio?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    location?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    skills?: Prisma.UserUpdateskillsInput | string[];
    languages?: Prisma.UserUpdatelanguagesInput | string[];
    timezone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    website?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    github?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    linkedin?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    role?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    verificationStatus?: Prisma.StringFieldUpdateOperationsInput | string;
    profileCompletion?: Prisma.IntFieldUpdateOperationsInput | number;
    preferredCurrency?: Prisma.StringFieldUpdateOperationsInput | string;
    stripeAccountId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    stripeOnboardingDone?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    lastLoginAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    accounts?: Prisma.AccountUpdateManyWithoutUserNestedInput;
    sessions?: Prisma.SessionUpdateManyWithoutUserNestedInput;
    profile?: Prisma.ProfileUpdateOneWithoutUserNestedInput;
    freelancerProfile?: Prisma.FreelancerProfileUpdateOneWithoutUserNestedInput;
    buyerProfile?: Prisma.BuyerProfileUpdateOneWithoutUserNestedInput;
    portfolioItems?: Prisma.PortfolioUpdateManyWithoutUserNestedInput;
    services?: Prisma.ServiceUpdateManyWithoutUserNestedInput;
    ordersAsBuyer?: Prisma.OrderUpdateManyWithoutBuyerNestedInput;
    ordersAsFreelancer?: Prisma.OrderUpdateManyWithoutFreelancerNestedInput;
    reviewsWritten?: Prisma.ReviewUpdateManyWithoutReviewerNestedInput;
    reviewsReceived?: Prisma.ReviewUpdateManyWithoutRevieweeNestedInput;
    favorites?: Prisma.FavoriteUpdateManyWithoutUserNestedInput;
    cart?: Prisma.CartUpdateOneWithoutUserNestedInput;
    conversationParts?: Prisma.ConversationParticipantUpdateManyWithoutUserNestedInput;
    messages?: Prisma.MessageUpdateManyWithoutSenderNestedInput;
    notifications?: Prisma.NotificationUpdateManyWithoutUserNestedInput;
    disputes?: Prisma.DisputeUpdateManyWithoutOpenerNestedInput;
    reports?: Prisma.ReportUpdateManyWithoutReporterNestedInput;
    achievements?: Prisma.UserAchievementUpdateManyWithoutUserNestedInput;
    xp?: Prisma.UserXPUpdateOneWithoutUserNestedInput;
    searchHistory?: Prisma.SearchHistoryUpdateManyWithoutUserNestedInput;
    userRoles?: Prisma.UserRoleUpdateManyWithoutUserNestedInput;
    companiesOwned?: Prisma.CompanyUpdateManyWithoutOwnerNestedInput;
    companyEmployees?: Prisma.EmployeeUpdateManyWithoutUserNestedInput;
    jobsPosted?: Prisma.JobUpdateManyWithoutPostedByNestedInput;
    resumes?: Prisma.ResumeUpdateManyWithoutUserNestedInput;
    jobApplications?: Prisma.JobApplicationUpdateManyWithoutApplicantNestedInput;
    products?: Prisma.ProductUpdateManyWithoutSellerNestedInput;
    productReviewsWritten?: Prisma.ProductReviewUpdateManyWithoutReviewerNestedInput;
    productReviewsReceived?: Prisma.ProductReviewUpdateManyWithoutRevieweeNestedInput;
    booksAuthored?: Prisma.BookUpdateManyWithoutAuthorUserNestedInput;
    bookPurchases?: Prisma.BookPurchaseUpdateManyWithoutUserNestedInput;
    bookReviews?: Prisma.BookReviewUpdateManyWithoutUserNestedInput;
    resourcesCreated?: Prisma.ResourceUpdateManyWithoutAuthorNestedInput;
    portfolioProjects?: Prisma.PortfolioProjectUpdateManyWithoutUserNestedInput;
    aiConversations?: Prisma.AIConversationUpdateManyWithoutUserNestedInput;
};
export type UserUncheckedUpdateWithoutPayoutsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    username?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    emailVerified?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    image?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    coverImage?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    bio?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    location?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    skills?: Prisma.UserUpdateskillsInput | string[];
    languages?: Prisma.UserUpdatelanguagesInput | string[];
    timezone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    website?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    github?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    linkedin?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    role?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    verificationStatus?: Prisma.StringFieldUpdateOperationsInput | string;
    profileCompletion?: Prisma.IntFieldUpdateOperationsInput | number;
    preferredCurrency?: Prisma.StringFieldUpdateOperationsInput | string;
    stripeAccountId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    stripeOnboardingDone?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    lastLoginAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    accounts?: Prisma.AccountUncheckedUpdateManyWithoutUserNestedInput;
    sessions?: Prisma.SessionUncheckedUpdateManyWithoutUserNestedInput;
    profile?: Prisma.ProfileUncheckedUpdateOneWithoutUserNestedInput;
    freelancerProfile?: Prisma.FreelancerProfileUncheckedUpdateOneWithoutUserNestedInput;
    buyerProfile?: Prisma.BuyerProfileUncheckedUpdateOneWithoutUserNestedInput;
    portfolioItems?: Prisma.PortfolioUncheckedUpdateManyWithoutUserNestedInput;
    services?: Prisma.ServiceUncheckedUpdateManyWithoutUserNestedInput;
    ordersAsBuyer?: Prisma.OrderUncheckedUpdateManyWithoutBuyerNestedInput;
    ordersAsFreelancer?: Prisma.OrderUncheckedUpdateManyWithoutFreelancerNestedInput;
    reviewsWritten?: Prisma.ReviewUncheckedUpdateManyWithoutReviewerNestedInput;
    reviewsReceived?: Prisma.ReviewUncheckedUpdateManyWithoutRevieweeNestedInput;
    favorites?: Prisma.FavoriteUncheckedUpdateManyWithoutUserNestedInput;
    cart?: Prisma.CartUncheckedUpdateOneWithoutUserNestedInput;
    conversationParts?: Prisma.ConversationParticipantUncheckedUpdateManyWithoutUserNestedInput;
    messages?: Prisma.MessageUncheckedUpdateManyWithoutSenderNestedInput;
    notifications?: Prisma.NotificationUncheckedUpdateManyWithoutUserNestedInput;
    disputes?: Prisma.DisputeUncheckedUpdateManyWithoutOpenerNestedInput;
    reports?: Prisma.ReportUncheckedUpdateManyWithoutReporterNestedInput;
    achievements?: Prisma.UserAchievementUncheckedUpdateManyWithoutUserNestedInput;
    xp?: Prisma.UserXPUncheckedUpdateOneWithoutUserNestedInput;
    searchHistory?: Prisma.SearchHistoryUncheckedUpdateManyWithoutUserNestedInput;
    userRoles?: Prisma.UserRoleUncheckedUpdateManyWithoutUserNestedInput;
    companiesOwned?: Prisma.CompanyUncheckedUpdateManyWithoutOwnerNestedInput;
    companyEmployees?: Prisma.EmployeeUncheckedUpdateManyWithoutUserNestedInput;
    jobsPosted?: Prisma.JobUncheckedUpdateManyWithoutPostedByNestedInput;
    resumes?: Prisma.ResumeUncheckedUpdateManyWithoutUserNestedInput;
    jobApplications?: Prisma.JobApplicationUncheckedUpdateManyWithoutApplicantNestedInput;
    products?: Prisma.ProductUncheckedUpdateManyWithoutSellerNestedInput;
    productReviewsWritten?: Prisma.ProductReviewUncheckedUpdateManyWithoutReviewerNestedInput;
    productReviewsReceived?: Prisma.ProductReviewUncheckedUpdateManyWithoutRevieweeNestedInput;
    booksAuthored?: Prisma.BookUncheckedUpdateManyWithoutAuthorUserNestedInput;
    bookPurchases?: Prisma.BookPurchaseUncheckedUpdateManyWithoutUserNestedInput;
    bookReviews?: Prisma.BookReviewUncheckedUpdateManyWithoutUserNestedInput;
    resourcesCreated?: Prisma.ResourceUncheckedUpdateManyWithoutAuthorNestedInput;
    portfolioProjects?: Prisma.PortfolioProjectUncheckedUpdateManyWithoutUserNestedInput;
    aiConversations?: Prisma.AIConversationUncheckedUpdateManyWithoutUserNestedInput;
};
export type UserCreateWithoutDisputesInput = {
    id?: string;
    name: string;
    username?: string | null;
    email: string;
    emailVerified?: boolean;
    image?: string | null;
    coverImage?: string | null;
    bio?: string | null;
    location?: string | null;
    skills?: Prisma.UserCreateskillsInput | string[];
    languages?: Prisma.UserCreatelanguagesInput | string[];
    timezone?: string | null;
    website?: string | null;
    github?: string | null;
    linkedin?: string | null;
    role?: string;
    status?: string;
    verificationStatus?: string;
    profileCompletion?: number;
    preferredCurrency?: string;
    stripeAccountId?: string | null;
    stripeOnboardingDone?: boolean;
    lastLoginAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    accounts?: Prisma.AccountCreateNestedManyWithoutUserInput;
    sessions?: Prisma.SessionCreateNestedManyWithoutUserInput;
    profile?: Prisma.ProfileCreateNestedOneWithoutUserInput;
    freelancerProfile?: Prisma.FreelancerProfileCreateNestedOneWithoutUserInput;
    buyerProfile?: Prisma.BuyerProfileCreateNestedOneWithoutUserInput;
    portfolioItems?: Prisma.PortfolioCreateNestedManyWithoutUserInput;
    services?: Prisma.ServiceCreateNestedManyWithoutUserInput;
    ordersAsBuyer?: Prisma.OrderCreateNestedManyWithoutBuyerInput;
    ordersAsFreelancer?: Prisma.OrderCreateNestedManyWithoutFreelancerInput;
    reviewsWritten?: Prisma.ReviewCreateNestedManyWithoutReviewerInput;
    reviewsReceived?: Prisma.ReviewCreateNestedManyWithoutRevieweeInput;
    favorites?: Prisma.FavoriteCreateNestedManyWithoutUserInput;
    cart?: Prisma.CartCreateNestedOneWithoutUserInput;
    conversationParts?: Prisma.ConversationParticipantCreateNestedManyWithoutUserInput;
    messages?: Prisma.MessageCreateNestedManyWithoutSenderInput;
    notifications?: Prisma.NotificationCreateNestedManyWithoutUserInput;
    payouts?: Prisma.PayoutCreateNestedManyWithoutFreelancerInput;
    reports?: Prisma.ReportCreateNestedManyWithoutReporterInput;
    achievements?: Prisma.UserAchievementCreateNestedManyWithoutUserInput;
    xp?: Prisma.UserXPCreateNestedOneWithoutUserInput;
    searchHistory?: Prisma.SearchHistoryCreateNestedManyWithoutUserInput;
    userRoles?: Prisma.UserRoleCreateNestedManyWithoutUserInput;
    companiesOwned?: Prisma.CompanyCreateNestedManyWithoutOwnerInput;
    companyEmployees?: Prisma.EmployeeCreateNestedManyWithoutUserInput;
    jobsPosted?: Prisma.JobCreateNestedManyWithoutPostedByInput;
    resumes?: Prisma.ResumeCreateNestedManyWithoutUserInput;
    jobApplications?: Prisma.JobApplicationCreateNestedManyWithoutApplicantInput;
    products?: Prisma.ProductCreateNestedManyWithoutSellerInput;
    productReviewsWritten?: Prisma.ProductReviewCreateNestedManyWithoutReviewerInput;
    productReviewsReceived?: Prisma.ProductReviewCreateNestedManyWithoutRevieweeInput;
    booksAuthored?: Prisma.BookCreateNestedManyWithoutAuthorUserInput;
    bookPurchases?: Prisma.BookPurchaseCreateNestedManyWithoutUserInput;
    bookReviews?: Prisma.BookReviewCreateNestedManyWithoutUserInput;
    resourcesCreated?: Prisma.ResourceCreateNestedManyWithoutAuthorInput;
    portfolioProjects?: Prisma.PortfolioProjectCreateNestedManyWithoutUserInput;
    aiConversations?: Prisma.AIConversationCreateNestedManyWithoutUserInput;
};
export type UserUncheckedCreateWithoutDisputesInput = {
    id?: string;
    name: string;
    username?: string | null;
    email: string;
    emailVerified?: boolean;
    image?: string | null;
    coverImage?: string | null;
    bio?: string | null;
    location?: string | null;
    skills?: Prisma.UserCreateskillsInput | string[];
    languages?: Prisma.UserCreatelanguagesInput | string[];
    timezone?: string | null;
    website?: string | null;
    github?: string | null;
    linkedin?: string | null;
    role?: string;
    status?: string;
    verificationStatus?: string;
    profileCompletion?: number;
    preferredCurrency?: string;
    stripeAccountId?: string | null;
    stripeOnboardingDone?: boolean;
    lastLoginAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    accounts?: Prisma.AccountUncheckedCreateNestedManyWithoutUserInput;
    sessions?: Prisma.SessionUncheckedCreateNestedManyWithoutUserInput;
    profile?: Prisma.ProfileUncheckedCreateNestedOneWithoutUserInput;
    freelancerProfile?: Prisma.FreelancerProfileUncheckedCreateNestedOneWithoutUserInput;
    buyerProfile?: Prisma.BuyerProfileUncheckedCreateNestedOneWithoutUserInput;
    portfolioItems?: Prisma.PortfolioUncheckedCreateNestedManyWithoutUserInput;
    services?: Prisma.ServiceUncheckedCreateNestedManyWithoutUserInput;
    ordersAsBuyer?: Prisma.OrderUncheckedCreateNestedManyWithoutBuyerInput;
    ordersAsFreelancer?: Prisma.OrderUncheckedCreateNestedManyWithoutFreelancerInput;
    reviewsWritten?: Prisma.ReviewUncheckedCreateNestedManyWithoutReviewerInput;
    reviewsReceived?: Prisma.ReviewUncheckedCreateNestedManyWithoutRevieweeInput;
    favorites?: Prisma.FavoriteUncheckedCreateNestedManyWithoutUserInput;
    cart?: Prisma.CartUncheckedCreateNestedOneWithoutUserInput;
    conversationParts?: Prisma.ConversationParticipantUncheckedCreateNestedManyWithoutUserInput;
    messages?: Prisma.MessageUncheckedCreateNestedManyWithoutSenderInput;
    notifications?: Prisma.NotificationUncheckedCreateNestedManyWithoutUserInput;
    payouts?: Prisma.PayoutUncheckedCreateNestedManyWithoutFreelancerInput;
    reports?: Prisma.ReportUncheckedCreateNestedManyWithoutReporterInput;
    achievements?: Prisma.UserAchievementUncheckedCreateNestedManyWithoutUserInput;
    xp?: Prisma.UserXPUncheckedCreateNestedOneWithoutUserInput;
    searchHistory?: Prisma.SearchHistoryUncheckedCreateNestedManyWithoutUserInput;
    userRoles?: Prisma.UserRoleUncheckedCreateNestedManyWithoutUserInput;
    companiesOwned?: Prisma.CompanyUncheckedCreateNestedManyWithoutOwnerInput;
    companyEmployees?: Prisma.EmployeeUncheckedCreateNestedManyWithoutUserInput;
    jobsPosted?: Prisma.JobUncheckedCreateNestedManyWithoutPostedByInput;
    resumes?: Prisma.ResumeUncheckedCreateNestedManyWithoutUserInput;
    jobApplications?: Prisma.JobApplicationUncheckedCreateNestedManyWithoutApplicantInput;
    products?: Prisma.ProductUncheckedCreateNestedManyWithoutSellerInput;
    productReviewsWritten?: Prisma.ProductReviewUncheckedCreateNestedManyWithoutReviewerInput;
    productReviewsReceived?: Prisma.ProductReviewUncheckedCreateNestedManyWithoutRevieweeInput;
    booksAuthored?: Prisma.BookUncheckedCreateNestedManyWithoutAuthorUserInput;
    bookPurchases?: Prisma.BookPurchaseUncheckedCreateNestedManyWithoutUserInput;
    bookReviews?: Prisma.BookReviewUncheckedCreateNestedManyWithoutUserInput;
    resourcesCreated?: Prisma.ResourceUncheckedCreateNestedManyWithoutAuthorInput;
    portfolioProjects?: Prisma.PortfolioProjectUncheckedCreateNestedManyWithoutUserInput;
    aiConversations?: Prisma.AIConversationUncheckedCreateNestedManyWithoutUserInput;
};
export type UserCreateOrConnectWithoutDisputesInput = {
    where: Prisma.UserWhereUniqueInput;
    create: Prisma.XOR<Prisma.UserCreateWithoutDisputesInput, Prisma.UserUncheckedCreateWithoutDisputesInput>;
};
export type UserUpsertWithoutDisputesInput = {
    update: Prisma.XOR<Prisma.UserUpdateWithoutDisputesInput, Prisma.UserUncheckedUpdateWithoutDisputesInput>;
    create: Prisma.XOR<Prisma.UserCreateWithoutDisputesInput, Prisma.UserUncheckedCreateWithoutDisputesInput>;
    where?: Prisma.UserWhereInput;
};
export type UserUpdateToOneWithWhereWithoutDisputesInput = {
    where?: Prisma.UserWhereInput;
    data: Prisma.XOR<Prisma.UserUpdateWithoutDisputesInput, Prisma.UserUncheckedUpdateWithoutDisputesInput>;
};
export type UserUpdateWithoutDisputesInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    username?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    emailVerified?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    image?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    coverImage?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    bio?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    location?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    skills?: Prisma.UserUpdateskillsInput | string[];
    languages?: Prisma.UserUpdatelanguagesInput | string[];
    timezone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    website?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    github?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    linkedin?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    role?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    verificationStatus?: Prisma.StringFieldUpdateOperationsInput | string;
    profileCompletion?: Prisma.IntFieldUpdateOperationsInput | number;
    preferredCurrency?: Prisma.StringFieldUpdateOperationsInput | string;
    stripeAccountId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    stripeOnboardingDone?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    lastLoginAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    accounts?: Prisma.AccountUpdateManyWithoutUserNestedInput;
    sessions?: Prisma.SessionUpdateManyWithoutUserNestedInput;
    profile?: Prisma.ProfileUpdateOneWithoutUserNestedInput;
    freelancerProfile?: Prisma.FreelancerProfileUpdateOneWithoutUserNestedInput;
    buyerProfile?: Prisma.BuyerProfileUpdateOneWithoutUserNestedInput;
    portfolioItems?: Prisma.PortfolioUpdateManyWithoutUserNestedInput;
    services?: Prisma.ServiceUpdateManyWithoutUserNestedInput;
    ordersAsBuyer?: Prisma.OrderUpdateManyWithoutBuyerNestedInput;
    ordersAsFreelancer?: Prisma.OrderUpdateManyWithoutFreelancerNestedInput;
    reviewsWritten?: Prisma.ReviewUpdateManyWithoutReviewerNestedInput;
    reviewsReceived?: Prisma.ReviewUpdateManyWithoutRevieweeNestedInput;
    favorites?: Prisma.FavoriteUpdateManyWithoutUserNestedInput;
    cart?: Prisma.CartUpdateOneWithoutUserNestedInput;
    conversationParts?: Prisma.ConversationParticipantUpdateManyWithoutUserNestedInput;
    messages?: Prisma.MessageUpdateManyWithoutSenderNestedInput;
    notifications?: Prisma.NotificationUpdateManyWithoutUserNestedInput;
    payouts?: Prisma.PayoutUpdateManyWithoutFreelancerNestedInput;
    reports?: Prisma.ReportUpdateManyWithoutReporterNestedInput;
    achievements?: Prisma.UserAchievementUpdateManyWithoutUserNestedInput;
    xp?: Prisma.UserXPUpdateOneWithoutUserNestedInput;
    searchHistory?: Prisma.SearchHistoryUpdateManyWithoutUserNestedInput;
    userRoles?: Prisma.UserRoleUpdateManyWithoutUserNestedInput;
    companiesOwned?: Prisma.CompanyUpdateManyWithoutOwnerNestedInput;
    companyEmployees?: Prisma.EmployeeUpdateManyWithoutUserNestedInput;
    jobsPosted?: Prisma.JobUpdateManyWithoutPostedByNestedInput;
    resumes?: Prisma.ResumeUpdateManyWithoutUserNestedInput;
    jobApplications?: Prisma.JobApplicationUpdateManyWithoutApplicantNestedInput;
    products?: Prisma.ProductUpdateManyWithoutSellerNestedInput;
    productReviewsWritten?: Prisma.ProductReviewUpdateManyWithoutReviewerNestedInput;
    productReviewsReceived?: Prisma.ProductReviewUpdateManyWithoutRevieweeNestedInput;
    booksAuthored?: Prisma.BookUpdateManyWithoutAuthorUserNestedInput;
    bookPurchases?: Prisma.BookPurchaseUpdateManyWithoutUserNestedInput;
    bookReviews?: Prisma.BookReviewUpdateManyWithoutUserNestedInput;
    resourcesCreated?: Prisma.ResourceUpdateManyWithoutAuthorNestedInput;
    portfolioProjects?: Prisma.PortfolioProjectUpdateManyWithoutUserNestedInput;
    aiConversations?: Prisma.AIConversationUpdateManyWithoutUserNestedInput;
};
export type UserUncheckedUpdateWithoutDisputesInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    username?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    emailVerified?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    image?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    coverImage?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    bio?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    location?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    skills?: Prisma.UserUpdateskillsInput | string[];
    languages?: Prisma.UserUpdatelanguagesInput | string[];
    timezone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    website?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    github?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    linkedin?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    role?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    verificationStatus?: Prisma.StringFieldUpdateOperationsInput | string;
    profileCompletion?: Prisma.IntFieldUpdateOperationsInput | number;
    preferredCurrency?: Prisma.StringFieldUpdateOperationsInput | string;
    stripeAccountId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    stripeOnboardingDone?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    lastLoginAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    accounts?: Prisma.AccountUncheckedUpdateManyWithoutUserNestedInput;
    sessions?: Prisma.SessionUncheckedUpdateManyWithoutUserNestedInput;
    profile?: Prisma.ProfileUncheckedUpdateOneWithoutUserNestedInput;
    freelancerProfile?: Prisma.FreelancerProfileUncheckedUpdateOneWithoutUserNestedInput;
    buyerProfile?: Prisma.BuyerProfileUncheckedUpdateOneWithoutUserNestedInput;
    portfolioItems?: Prisma.PortfolioUncheckedUpdateManyWithoutUserNestedInput;
    services?: Prisma.ServiceUncheckedUpdateManyWithoutUserNestedInput;
    ordersAsBuyer?: Prisma.OrderUncheckedUpdateManyWithoutBuyerNestedInput;
    ordersAsFreelancer?: Prisma.OrderUncheckedUpdateManyWithoutFreelancerNestedInput;
    reviewsWritten?: Prisma.ReviewUncheckedUpdateManyWithoutReviewerNestedInput;
    reviewsReceived?: Prisma.ReviewUncheckedUpdateManyWithoutRevieweeNestedInput;
    favorites?: Prisma.FavoriteUncheckedUpdateManyWithoutUserNestedInput;
    cart?: Prisma.CartUncheckedUpdateOneWithoutUserNestedInput;
    conversationParts?: Prisma.ConversationParticipantUncheckedUpdateManyWithoutUserNestedInput;
    messages?: Prisma.MessageUncheckedUpdateManyWithoutSenderNestedInput;
    notifications?: Prisma.NotificationUncheckedUpdateManyWithoutUserNestedInput;
    payouts?: Prisma.PayoutUncheckedUpdateManyWithoutFreelancerNestedInput;
    reports?: Prisma.ReportUncheckedUpdateManyWithoutReporterNestedInput;
    achievements?: Prisma.UserAchievementUncheckedUpdateManyWithoutUserNestedInput;
    xp?: Prisma.UserXPUncheckedUpdateOneWithoutUserNestedInput;
    searchHistory?: Prisma.SearchHistoryUncheckedUpdateManyWithoutUserNestedInput;
    userRoles?: Prisma.UserRoleUncheckedUpdateManyWithoutUserNestedInput;
    companiesOwned?: Prisma.CompanyUncheckedUpdateManyWithoutOwnerNestedInput;
    companyEmployees?: Prisma.EmployeeUncheckedUpdateManyWithoutUserNestedInput;
    jobsPosted?: Prisma.JobUncheckedUpdateManyWithoutPostedByNestedInput;
    resumes?: Prisma.ResumeUncheckedUpdateManyWithoutUserNestedInput;
    jobApplications?: Prisma.JobApplicationUncheckedUpdateManyWithoutApplicantNestedInput;
    products?: Prisma.ProductUncheckedUpdateManyWithoutSellerNestedInput;
    productReviewsWritten?: Prisma.ProductReviewUncheckedUpdateManyWithoutReviewerNestedInput;
    productReviewsReceived?: Prisma.ProductReviewUncheckedUpdateManyWithoutRevieweeNestedInput;
    booksAuthored?: Prisma.BookUncheckedUpdateManyWithoutAuthorUserNestedInput;
    bookPurchases?: Prisma.BookPurchaseUncheckedUpdateManyWithoutUserNestedInput;
    bookReviews?: Prisma.BookReviewUncheckedUpdateManyWithoutUserNestedInput;
    resourcesCreated?: Prisma.ResourceUncheckedUpdateManyWithoutAuthorNestedInput;
    portfolioProjects?: Prisma.PortfolioProjectUncheckedUpdateManyWithoutUserNestedInput;
    aiConversations?: Prisma.AIConversationUncheckedUpdateManyWithoutUserNestedInput;
};
export type UserCreateWithoutReportsInput = {
    id?: string;
    name: string;
    username?: string | null;
    email: string;
    emailVerified?: boolean;
    image?: string | null;
    coverImage?: string | null;
    bio?: string | null;
    location?: string | null;
    skills?: Prisma.UserCreateskillsInput | string[];
    languages?: Prisma.UserCreatelanguagesInput | string[];
    timezone?: string | null;
    website?: string | null;
    github?: string | null;
    linkedin?: string | null;
    role?: string;
    status?: string;
    verificationStatus?: string;
    profileCompletion?: number;
    preferredCurrency?: string;
    stripeAccountId?: string | null;
    stripeOnboardingDone?: boolean;
    lastLoginAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    accounts?: Prisma.AccountCreateNestedManyWithoutUserInput;
    sessions?: Prisma.SessionCreateNestedManyWithoutUserInput;
    profile?: Prisma.ProfileCreateNestedOneWithoutUserInput;
    freelancerProfile?: Prisma.FreelancerProfileCreateNestedOneWithoutUserInput;
    buyerProfile?: Prisma.BuyerProfileCreateNestedOneWithoutUserInput;
    portfolioItems?: Prisma.PortfolioCreateNestedManyWithoutUserInput;
    services?: Prisma.ServiceCreateNestedManyWithoutUserInput;
    ordersAsBuyer?: Prisma.OrderCreateNestedManyWithoutBuyerInput;
    ordersAsFreelancer?: Prisma.OrderCreateNestedManyWithoutFreelancerInput;
    reviewsWritten?: Prisma.ReviewCreateNestedManyWithoutReviewerInput;
    reviewsReceived?: Prisma.ReviewCreateNestedManyWithoutRevieweeInput;
    favorites?: Prisma.FavoriteCreateNestedManyWithoutUserInput;
    cart?: Prisma.CartCreateNestedOneWithoutUserInput;
    conversationParts?: Prisma.ConversationParticipantCreateNestedManyWithoutUserInput;
    messages?: Prisma.MessageCreateNestedManyWithoutSenderInput;
    notifications?: Prisma.NotificationCreateNestedManyWithoutUserInput;
    payouts?: Prisma.PayoutCreateNestedManyWithoutFreelancerInput;
    disputes?: Prisma.DisputeCreateNestedManyWithoutOpenerInput;
    achievements?: Prisma.UserAchievementCreateNestedManyWithoutUserInput;
    xp?: Prisma.UserXPCreateNestedOneWithoutUserInput;
    searchHistory?: Prisma.SearchHistoryCreateNestedManyWithoutUserInput;
    userRoles?: Prisma.UserRoleCreateNestedManyWithoutUserInput;
    companiesOwned?: Prisma.CompanyCreateNestedManyWithoutOwnerInput;
    companyEmployees?: Prisma.EmployeeCreateNestedManyWithoutUserInput;
    jobsPosted?: Prisma.JobCreateNestedManyWithoutPostedByInput;
    resumes?: Prisma.ResumeCreateNestedManyWithoutUserInput;
    jobApplications?: Prisma.JobApplicationCreateNestedManyWithoutApplicantInput;
    products?: Prisma.ProductCreateNestedManyWithoutSellerInput;
    productReviewsWritten?: Prisma.ProductReviewCreateNestedManyWithoutReviewerInput;
    productReviewsReceived?: Prisma.ProductReviewCreateNestedManyWithoutRevieweeInput;
    booksAuthored?: Prisma.BookCreateNestedManyWithoutAuthorUserInput;
    bookPurchases?: Prisma.BookPurchaseCreateNestedManyWithoutUserInput;
    bookReviews?: Prisma.BookReviewCreateNestedManyWithoutUserInput;
    resourcesCreated?: Prisma.ResourceCreateNestedManyWithoutAuthorInput;
    portfolioProjects?: Prisma.PortfolioProjectCreateNestedManyWithoutUserInput;
    aiConversations?: Prisma.AIConversationCreateNestedManyWithoutUserInput;
};
export type UserUncheckedCreateWithoutReportsInput = {
    id?: string;
    name: string;
    username?: string | null;
    email: string;
    emailVerified?: boolean;
    image?: string | null;
    coverImage?: string | null;
    bio?: string | null;
    location?: string | null;
    skills?: Prisma.UserCreateskillsInput | string[];
    languages?: Prisma.UserCreatelanguagesInput | string[];
    timezone?: string | null;
    website?: string | null;
    github?: string | null;
    linkedin?: string | null;
    role?: string;
    status?: string;
    verificationStatus?: string;
    profileCompletion?: number;
    preferredCurrency?: string;
    stripeAccountId?: string | null;
    stripeOnboardingDone?: boolean;
    lastLoginAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    accounts?: Prisma.AccountUncheckedCreateNestedManyWithoutUserInput;
    sessions?: Prisma.SessionUncheckedCreateNestedManyWithoutUserInput;
    profile?: Prisma.ProfileUncheckedCreateNestedOneWithoutUserInput;
    freelancerProfile?: Prisma.FreelancerProfileUncheckedCreateNestedOneWithoutUserInput;
    buyerProfile?: Prisma.BuyerProfileUncheckedCreateNestedOneWithoutUserInput;
    portfolioItems?: Prisma.PortfolioUncheckedCreateNestedManyWithoutUserInput;
    services?: Prisma.ServiceUncheckedCreateNestedManyWithoutUserInput;
    ordersAsBuyer?: Prisma.OrderUncheckedCreateNestedManyWithoutBuyerInput;
    ordersAsFreelancer?: Prisma.OrderUncheckedCreateNestedManyWithoutFreelancerInput;
    reviewsWritten?: Prisma.ReviewUncheckedCreateNestedManyWithoutReviewerInput;
    reviewsReceived?: Prisma.ReviewUncheckedCreateNestedManyWithoutRevieweeInput;
    favorites?: Prisma.FavoriteUncheckedCreateNestedManyWithoutUserInput;
    cart?: Prisma.CartUncheckedCreateNestedOneWithoutUserInput;
    conversationParts?: Prisma.ConversationParticipantUncheckedCreateNestedManyWithoutUserInput;
    messages?: Prisma.MessageUncheckedCreateNestedManyWithoutSenderInput;
    notifications?: Prisma.NotificationUncheckedCreateNestedManyWithoutUserInput;
    payouts?: Prisma.PayoutUncheckedCreateNestedManyWithoutFreelancerInput;
    disputes?: Prisma.DisputeUncheckedCreateNestedManyWithoutOpenerInput;
    achievements?: Prisma.UserAchievementUncheckedCreateNestedManyWithoutUserInput;
    xp?: Prisma.UserXPUncheckedCreateNestedOneWithoutUserInput;
    searchHistory?: Prisma.SearchHistoryUncheckedCreateNestedManyWithoutUserInput;
    userRoles?: Prisma.UserRoleUncheckedCreateNestedManyWithoutUserInput;
    companiesOwned?: Prisma.CompanyUncheckedCreateNestedManyWithoutOwnerInput;
    companyEmployees?: Prisma.EmployeeUncheckedCreateNestedManyWithoutUserInput;
    jobsPosted?: Prisma.JobUncheckedCreateNestedManyWithoutPostedByInput;
    resumes?: Prisma.ResumeUncheckedCreateNestedManyWithoutUserInput;
    jobApplications?: Prisma.JobApplicationUncheckedCreateNestedManyWithoutApplicantInput;
    products?: Prisma.ProductUncheckedCreateNestedManyWithoutSellerInput;
    productReviewsWritten?: Prisma.ProductReviewUncheckedCreateNestedManyWithoutReviewerInput;
    productReviewsReceived?: Prisma.ProductReviewUncheckedCreateNestedManyWithoutRevieweeInput;
    booksAuthored?: Prisma.BookUncheckedCreateNestedManyWithoutAuthorUserInput;
    bookPurchases?: Prisma.BookPurchaseUncheckedCreateNestedManyWithoutUserInput;
    bookReviews?: Prisma.BookReviewUncheckedCreateNestedManyWithoutUserInput;
    resourcesCreated?: Prisma.ResourceUncheckedCreateNestedManyWithoutAuthorInput;
    portfolioProjects?: Prisma.PortfolioProjectUncheckedCreateNestedManyWithoutUserInput;
    aiConversations?: Prisma.AIConversationUncheckedCreateNestedManyWithoutUserInput;
};
export type UserCreateOrConnectWithoutReportsInput = {
    where: Prisma.UserWhereUniqueInput;
    create: Prisma.XOR<Prisma.UserCreateWithoutReportsInput, Prisma.UserUncheckedCreateWithoutReportsInput>;
};
export type UserUpsertWithoutReportsInput = {
    update: Prisma.XOR<Prisma.UserUpdateWithoutReportsInput, Prisma.UserUncheckedUpdateWithoutReportsInput>;
    create: Prisma.XOR<Prisma.UserCreateWithoutReportsInput, Prisma.UserUncheckedCreateWithoutReportsInput>;
    where?: Prisma.UserWhereInput;
};
export type UserUpdateToOneWithWhereWithoutReportsInput = {
    where?: Prisma.UserWhereInput;
    data: Prisma.XOR<Prisma.UserUpdateWithoutReportsInput, Prisma.UserUncheckedUpdateWithoutReportsInput>;
};
export type UserUpdateWithoutReportsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    username?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    emailVerified?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    image?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    coverImage?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    bio?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    location?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    skills?: Prisma.UserUpdateskillsInput | string[];
    languages?: Prisma.UserUpdatelanguagesInput | string[];
    timezone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    website?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    github?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    linkedin?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    role?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    verificationStatus?: Prisma.StringFieldUpdateOperationsInput | string;
    profileCompletion?: Prisma.IntFieldUpdateOperationsInput | number;
    preferredCurrency?: Prisma.StringFieldUpdateOperationsInput | string;
    stripeAccountId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    stripeOnboardingDone?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    lastLoginAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    accounts?: Prisma.AccountUpdateManyWithoutUserNestedInput;
    sessions?: Prisma.SessionUpdateManyWithoutUserNestedInput;
    profile?: Prisma.ProfileUpdateOneWithoutUserNestedInput;
    freelancerProfile?: Prisma.FreelancerProfileUpdateOneWithoutUserNestedInput;
    buyerProfile?: Prisma.BuyerProfileUpdateOneWithoutUserNestedInput;
    portfolioItems?: Prisma.PortfolioUpdateManyWithoutUserNestedInput;
    services?: Prisma.ServiceUpdateManyWithoutUserNestedInput;
    ordersAsBuyer?: Prisma.OrderUpdateManyWithoutBuyerNestedInput;
    ordersAsFreelancer?: Prisma.OrderUpdateManyWithoutFreelancerNestedInput;
    reviewsWritten?: Prisma.ReviewUpdateManyWithoutReviewerNestedInput;
    reviewsReceived?: Prisma.ReviewUpdateManyWithoutRevieweeNestedInput;
    favorites?: Prisma.FavoriteUpdateManyWithoutUserNestedInput;
    cart?: Prisma.CartUpdateOneWithoutUserNestedInput;
    conversationParts?: Prisma.ConversationParticipantUpdateManyWithoutUserNestedInput;
    messages?: Prisma.MessageUpdateManyWithoutSenderNestedInput;
    notifications?: Prisma.NotificationUpdateManyWithoutUserNestedInput;
    payouts?: Prisma.PayoutUpdateManyWithoutFreelancerNestedInput;
    disputes?: Prisma.DisputeUpdateManyWithoutOpenerNestedInput;
    achievements?: Prisma.UserAchievementUpdateManyWithoutUserNestedInput;
    xp?: Prisma.UserXPUpdateOneWithoutUserNestedInput;
    searchHistory?: Prisma.SearchHistoryUpdateManyWithoutUserNestedInput;
    userRoles?: Prisma.UserRoleUpdateManyWithoutUserNestedInput;
    companiesOwned?: Prisma.CompanyUpdateManyWithoutOwnerNestedInput;
    companyEmployees?: Prisma.EmployeeUpdateManyWithoutUserNestedInput;
    jobsPosted?: Prisma.JobUpdateManyWithoutPostedByNestedInput;
    resumes?: Prisma.ResumeUpdateManyWithoutUserNestedInput;
    jobApplications?: Prisma.JobApplicationUpdateManyWithoutApplicantNestedInput;
    products?: Prisma.ProductUpdateManyWithoutSellerNestedInput;
    productReviewsWritten?: Prisma.ProductReviewUpdateManyWithoutReviewerNestedInput;
    productReviewsReceived?: Prisma.ProductReviewUpdateManyWithoutRevieweeNestedInput;
    booksAuthored?: Prisma.BookUpdateManyWithoutAuthorUserNestedInput;
    bookPurchases?: Prisma.BookPurchaseUpdateManyWithoutUserNestedInput;
    bookReviews?: Prisma.BookReviewUpdateManyWithoutUserNestedInput;
    resourcesCreated?: Prisma.ResourceUpdateManyWithoutAuthorNestedInput;
    portfolioProjects?: Prisma.PortfolioProjectUpdateManyWithoutUserNestedInput;
    aiConversations?: Prisma.AIConversationUpdateManyWithoutUserNestedInput;
};
export type UserUncheckedUpdateWithoutReportsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    username?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    emailVerified?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    image?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    coverImage?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    bio?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    location?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    skills?: Prisma.UserUpdateskillsInput | string[];
    languages?: Prisma.UserUpdatelanguagesInput | string[];
    timezone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    website?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    github?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    linkedin?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    role?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    verificationStatus?: Prisma.StringFieldUpdateOperationsInput | string;
    profileCompletion?: Prisma.IntFieldUpdateOperationsInput | number;
    preferredCurrency?: Prisma.StringFieldUpdateOperationsInput | string;
    stripeAccountId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    stripeOnboardingDone?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    lastLoginAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    accounts?: Prisma.AccountUncheckedUpdateManyWithoutUserNestedInput;
    sessions?: Prisma.SessionUncheckedUpdateManyWithoutUserNestedInput;
    profile?: Prisma.ProfileUncheckedUpdateOneWithoutUserNestedInput;
    freelancerProfile?: Prisma.FreelancerProfileUncheckedUpdateOneWithoutUserNestedInput;
    buyerProfile?: Prisma.BuyerProfileUncheckedUpdateOneWithoutUserNestedInput;
    portfolioItems?: Prisma.PortfolioUncheckedUpdateManyWithoutUserNestedInput;
    services?: Prisma.ServiceUncheckedUpdateManyWithoutUserNestedInput;
    ordersAsBuyer?: Prisma.OrderUncheckedUpdateManyWithoutBuyerNestedInput;
    ordersAsFreelancer?: Prisma.OrderUncheckedUpdateManyWithoutFreelancerNestedInput;
    reviewsWritten?: Prisma.ReviewUncheckedUpdateManyWithoutReviewerNestedInput;
    reviewsReceived?: Prisma.ReviewUncheckedUpdateManyWithoutRevieweeNestedInput;
    favorites?: Prisma.FavoriteUncheckedUpdateManyWithoutUserNestedInput;
    cart?: Prisma.CartUncheckedUpdateOneWithoutUserNestedInput;
    conversationParts?: Prisma.ConversationParticipantUncheckedUpdateManyWithoutUserNestedInput;
    messages?: Prisma.MessageUncheckedUpdateManyWithoutSenderNestedInput;
    notifications?: Prisma.NotificationUncheckedUpdateManyWithoutUserNestedInput;
    payouts?: Prisma.PayoutUncheckedUpdateManyWithoutFreelancerNestedInput;
    disputes?: Prisma.DisputeUncheckedUpdateManyWithoutOpenerNestedInput;
    achievements?: Prisma.UserAchievementUncheckedUpdateManyWithoutUserNestedInput;
    xp?: Prisma.UserXPUncheckedUpdateOneWithoutUserNestedInput;
    searchHistory?: Prisma.SearchHistoryUncheckedUpdateManyWithoutUserNestedInput;
    userRoles?: Prisma.UserRoleUncheckedUpdateManyWithoutUserNestedInput;
    companiesOwned?: Prisma.CompanyUncheckedUpdateManyWithoutOwnerNestedInput;
    companyEmployees?: Prisma.EmployeeUncheckedUpdateManyWithoutUserNestedInput;
    jobsPosted?: Prisma.JobUncheckedUpdateManyWithoutPostedByNestedInput;
    resumes?: Prisma.ResumeUncheckedUpdateManyWithoutUserNestedInput;
    jobApplications?: Prisma.JobApplicationUncheckedUpdateManyWithoutApplicantNestedInput;
    products?: Prisma.ProductUncheckedUpdateManyWithoutSellerNestedInput;
    productReviewsWritten?: Prisma.ProductReviewUncheckedUpdateManyWithoutReviewerNestedInput;
    productReviewsReceived?: Prisma.ProductReviewUncheckedUpdateManyWithoutRevieweeNestedInput;
    booksAuthored?: Prisma.BookUncheckedUpdateManyWithoutAuthorUserNestedInput;
    bookPurchases?: Prisma.BookPurchaseUncheckedUpdateManyWithoutUserNestedInput;
    bookReviews?: Prisma.BookReviewUncheckedUpdateManyWithoutUserNestedInput;
    resourcesCreated?: Prisma.ResourceUncheckedUpdateManyWithoutAuthorNestedInput;
    portfolioProjects?: Prisma.PortfolioProjectUncheckedUpdateManyWithoutUserNestedInput;
    aiConversations?: Prisma.AIConversationUncheckedUpdateManyWithoutUserNestedInput;
};
export type UserCreateWithoutAchievementsInput = {
    id?: string;
    name: string;
    username?: string | null;
    email: string;
    emailVerified?: boolean;
    image?: string | null;
    coverImage?: string | null;
    bio?: string | null;
    location?: string | null;
    skills?: Prisma.UserCreateskillsInput | string[];
    languages?: Prisma.UserCreatelanguagesInput | string[];
    timezone?: string | null;
    website?: string | null;
    github?: string | null;
    linkedin?: string | null;
    role?: string;
    status?: string;
    verificationStatus?: string;
    profileCompletion?: number;
    preferredCurrency?: string;
    stripeAccountId?: string | null;
    stripeOnboardingDone?: boolean;
    lastLoginAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    accounts?: Prisma.AccountCreateNestedManyWithoutUserInput;
    sessions?: Prisma.SessionCreateNestedManyWithoutUserInput;
    profile?: Prisma.ProfileCreateNestedOneWithoutUserInput;
    freelancerProfile?: Prisma.FreelancerProfileCreateNestedOneWithoutUserInput;
    buyerProfile?: Prisma.BuyerProfileCreateNestedOneWithoutUserInput;
    portfolioItems?: Prisma.PortfolioCreateNestedManyWithoutUserInput;
    services?: Prisma.ServiceCreateNestedManyWithoutUserInput;
    ordersAsBuyer?: Prisma.OrderCreateNestedManyWithoutBuyerInput;
    ordersAsFreelancer?: Prisma.OrderCreateNestedManyWithoutFreelancerInput;
    reviewsWritten?: Prisma.ReviewCreateNestedManyWithoutReviewerInput;
    reviewsReceived?: Prisma.ReviewCreateNestedManyWithoutRevieweeInput;
    favorites?: Prisma.FavoriteCreateNestedManyWithoutUserInput;
    cart?: Prisma.CartCreateNestedOneWithoutUserInput;
    conversationParts?: Prisma.ConversationParticipantCreateNestedManyWithoutUserInput;
    messages?: Prisma.MessageCreateNestedManyWithoutSenderInput;
    notifications?: Prisma.NotificationCreateNestedManyWithoutUserInput;
    payouts?: Prisma.PayoutCreateNestedManyWithoutFreelancerInput;
    disputes?: Prisma.DisputeCreateNestedManyWithoutOpenerInput;
    reports?: Prisma.ReportCreateNestedManyWithoutReporterInput;
    xp?: Prisma.UserXPCreateNestedOneWithoutUserInput;
    searchHistory?: Prisma.SearchHistoryCreateNestedManyWithoutUserInput;
    userRoles?: Prisma.UserRoleCreateNestedManyWithoutUserInput;
    companiesOwned?: Prisma.CompanyCreateNestedManyWithoutOwnerInput;
    companyEmployees?: Prisma.EmployeeCreateNestedManyWithoutUserInput;
    jobsPosted?: Prisma.JobCreateNestedManyWithoutPostedByInput;
    resumes?: Prisma.ResumeCreateNestedManyWithoutUserInput;
    jobApplications?: Prisma.JobApplicationCreateNestedManyWithoutApplicantInput;
    products?: Prisma.ProductCreateNestedManyWithoutSellerInput;
    productReviewsWritten?: Prisma.ProductReviewCreateNestedManyWithoutReviewerInput;
    productReviewsReceived?: Prisma.ProductReviewCreateNestedManyWithoutRevieweeInput;
    booksAuthored?: Prisma.BookCreateNestedManyWithoutAuthorUserInput;
    bookPurchases?: Prisma.BookPurchaseCreateNestedManyWithoutUserInput;
    bookReviews?: Prisma.BookReviewCreateNestedManyWithoutUserInput;
    resourcesCreated?: Prisma.ResourceCreateNestedManyWithoutAuthorInput;
    portfolioProjects?: Prisma.PortfolioProjectCreateNestedManyWithoutUserInput;
    aiConversations?: Prisma.AIConversationCreateNestedManyWithoutUserInput;
};
export type UserUncheckedCreateWithoutAchievementsInput = {
    id?: string;
    name: string;
    username?: string | null;
    email: string;
    emailVerified?: boolean;
    image?: string | null;
    coverImage?: string | null;
    bio?: string | null;
    location?: string | null;
    skills?: Prisma.UserCreateskillsInput | string[];
    languages?: Prisma.UserCreatelanguagesInput | string[];
    timezone?: string | null;
    website?: string | null;
    github?: string | null;
    linkedin?: string | null;
    role?: string;
    status?: string;
    verificationStatus?: string;
    profileCompletion?: number;
    preferredCurrency?: string;
    stripeAccountId?: string | null;
    stripeOnboardingDone?: boolean;
    lastLoginAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    accounts?: Prisma.AccountUncheckedCreateNestedManyWithoutUserInput;
    sessions?: Prisma.SessionUncheckedCreateNestedManyWithoutUserInput;
    profile?: Prisma.ProfileUncheckedCreateNestedOneWithoutUserInput;
    freelancerProfile?: Prisma.FreelancerProfileUncheckedCreateNestedOneWithoutUserInput;
    buyerProfile?: Prisma.BuyerProfileUncheckedCreateNestedOneWithoutUserInput;
    portfolioItems?: Prisma.PortfolioUncheckedCreateNestedManyWithoutUserInput;
    services?: Prisma.ServiceUncheckedCreateNestedManyWithoutUserInput;
    ordersAsBuyer?: Prisma.OrderUncheckedCreateNestedManyWithoutBuyerInput;
    ordersAsFreelancer?: Prisma.OrderUncheckedCreateNestedManyWithoutFreelancerInput;
    reviewsWritten?: Prisma.ReviewUncheckedCreateNestedManyWithoutReviewerInput;
    reviewsReceived?: Prisma.ReviewUncheckedCreateNestedManyWithoutRevieweeInput;
    favorites?: Prisma.FavoriteUncheckedCreateNestedManyWithoutUserInput;
    cart?: Prisma.CartUncheckedCreateNestedOneWithoutUserInput;
    conversationParts?: Prisma.ConversationParticipantUncheckedCreateNestedManyWithoutUserInput;
    messages?: Prisma.MessageUncheckedCreateNestedManyWithoutSenderInput;
    notifications?: Prisma.NotificationUncheckedCreateNestedManyWithoutUserInput;
    payouts?: Prisma.PayoutUncheckedCreateNestedManyWithoutFreelancerInput;
    disputes?: Prisma.DisputeUncheckedCreateNestedManyWithoutOpenerInput;
    reports?: Prisma.ReportUncheckedCreateNestedManyWithoutReporterInput;
    xp?: Prisma.UserXPUncheckedCreateNestedOneWithoutUserInput;
    searchHistory?: Prisma.SearchHistoryUncheckedCreateNestedManyWithoutUserInput;
    userRoles?: Prisma.UserRoleUncheckedCreateNestedManyWithoutUserInput;
    companiesOwned?: Prisma.CompanyUncheckedCreateNestedManyWithoutOwnerInput;
    companyEmployees?: Prisma.EmployeeUncheckedCreateNestedManyWithoutUserInput;
    jobsPosted?: Prisma.JobUncheckedCreateNestedManyWithoutPostedByInput;
    resumes?: Prisma.ResumeUncheckedCreateNestedManyWithoutUserInput;
    jobApplications?: Prisma.JobApplicationUncheckedCreateNestedManyWithoutApplicantInput;
    products?: Prisma.ProductUncheckedCreateNestedManyWithoutSellerInput;
    productReviewsWritten?: Prisma.ProductReviewUncheckedCreateNestedManyWithoutReviewerInput;
    productReviewsReceived?: Prisma.ProductReviewUncheckedCreateNestedManyWithoutRevieweeInput;
    booksAuthored?: Prisma.BookUncheckedCreateNestedManyWithoutAuthorUserInput;
    bookPurchases?: Prisma.BookPurchaseUncheckedCreateNestedManyWithoutUserInput;
    bookReviews?: Prisma.BookReviewUncheckedCreateNestedManyWithoutUserInput;
    resourcesCreated?: Prisma.ResourceUncheckedCreateNestedManyWithoutAuthorInput;
    portfolioProjects?: Prisma.PortfolioProjectUncheckedCreateNestedManyWithoutUserInput;
    aiConversations?: Prisma.AIConversationUncheckedCreateNestedManyWithoutUserInput;
};
export type UserCreateOrConnectWithoutAchievementsInput = {
    where: Prisma.UserWhereUniqueInput;
    create: Prisma.XOR<Prisma.UserCreateWithoutAchievementsInput, Prisma.UserUncheckedCreateWithoutAchievementsInput>;
};
export type UserUpsertWithoutAchievementsInput = {
    update: Prisma.XOR<Prisma.UserUpdateWithoutAchievementsInput, Prisma.UserUncheckedUpdateWithoutAchievementsInput>;
    create: Prisma.XOR<Prisma.UserCreateWithoutAchievementsInput, Prisma.UserUncheckedCreateWithoutAchievementsInput>;
    where?: Prisma.UserWhereInput;
};
export type UserUpdateToOneWithWhereWithoutAchievementsInput = {
    where?: Prisma.UserWhereInput;
    data: Prisma.XOR<Prisma.UserUpdateWithoutAchievementsInput, Prisma.UserUncheckedUpdateWithoutAchievementsInput>;
};
export type UserUpdateWithoutAchievementsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    username?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    emailVerified?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    image?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    coverImage?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    bio?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    location?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    skills?: Prisma.UserUpdateskillsInput | string[];
    languages?: Prisma.UserUpdatelanguagesInput | string[];
    timezone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    website?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    github?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    linkedin?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    role?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    verificationStatus?: Prisma.StringFieldUpdateOperationsInput | string;
    profileCompletion?: Prisma.IntFieldUpdateOperationsInput | number;
    preferredCurrency?: Prisma.StringFieldUpdateOperationsInput | string;
    stripeAccountId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    stripeOnboardingDone?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    lastLoginAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    accounts?: Prisma.AccountUpdateManyWithoutUserNestedInput;
    sessions?: Prisma.SessionUpdateManyWithoutUserNestedInput;
    profile?: Prisma.ProfileUpdateOneWithoutUserNestedInput;
    freelancerProfile?: Prisma.FreelancerProfileUpdateOneWithoutUserNestedInput;
    buyerProfile?: Prisma.BuyerProfileUpdateOneWithoutUserNestedInput;
    portfolioItems?: Prisma.PortfolioUpdateManyWithoutUserNestedInput;
    services?: Prisma.ServiceUpdateManyWithoutUserNestedInput;
    ordersAsBuyer?: Prisma.OrderUpdateManyWithoutBuyerNestedInput;
    ordersAsFreelancer?: Prisma.OrderUpdateManyWithoutFreelancerNestedInput;
    reviewsWritten?: Prisma.ReviewUpdateManyWithoutReviewerNestedInput;
    reviewsReceived?: Prisma.ReviewUpdateManyWithoutRevieweeNestedInput;
    favorites?: Prisma.FavoriteUpdateManyWithoutUserNestedInput;
    cart?: Prisma.CartUpdateOneWithoutUserNestedInput;
    conversationParts?: Prisma.ConversationParticipantUpdateManyWithoutUserNestedInput;
    messages?: Prisma.MessageUpdateManyWithoutSenderNestedInput;
    notifications?: Prisma.NotificationUpdateManyWithoutUserNestedInput;
    payouts?: Prisma.PayoutUpdateManyWithoutFreelancerNestedInput;
    disputes?: Prisma.DisputeUpdateManyWithoutOpenerNestedInput;
    reports?: Prisma.ReportUpdateManyWithoutReporterNestedInput;
    xp?: Prisma.UserXPUpdateOneWithoutUserNestedInput;
    searchHistory?: Prisma.SearchHistoryUpdateManyWithoutUserNestedInput;
    userRoles?: Prisma.UserRoleUpdateManyWithoutUserNestedInput;
    companiesOwned?: Prisma.CompanyUpdateManyWithoutOwnerNestedInput;
    companyEmployees?: Prisma.EmployeeUpdateManyWithoutUserNestedInput;
    jobsPosted?: Prisma.JobUpdateManyWithoutPostedByNestedInput;
    resumes?: Prisma.ResumeUpdateManyWithoutUserNestedInput;
    jobApplications?: Prisma.JobApplicationUpdateManyWithoutApplicantNestedInput;
    products?: Prisma.ProductUpdateManyWithoutSellerNestedInput;
    productReviewsWritten?: Prisma.ProductReviewUpdateManyWithoutReviewerNestedInput;
    productReviewsReceived?: Prisma.ProductReviewUpdateManyWithoutRevieweeNestedInput;
    booksAuthored?: Prisma.BookUpdateManyWithoutAuthorUserNestedInput;
    bookPurchases?: Prisma.BookPurchaseUpdateManyWithoutUserNestedInput;
    bookReviews?: Prisma.BookReviewUpdateManyWithoutUserNestedInput;
    resourcesCreated?: Prisma.ResourceUpdateManyWithoutAuthorNestedInput;
    portfolioProjects?: Prisma.PortfolioProjectUpdateManyWithoutUserNestedInput;
    aiConversations?: Prisma.AIConversationUpdateManyWithoutUserNestedInput;
};
export type UserUncheckedUpdateWithoutAchievementsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    username?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    emailVerified?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    image?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    coverImage?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    bio?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    location?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    skills?: Prisma.UserUpdateskillsInput | string[];
    languages?: Prisma.UserUpdatelanguagesInput | string[];
    timezone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    website?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    github?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    linkedin?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    role?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    verificationStatus?: Prisma.StringFieldUpdateOperationsInput | string;
    profileCompletion?: Prisma.IntFieldUpdateOperationsInput | number;
    preferredCurrency?: Prisma.StringFieldUpdateOperationsInput | string;
    stripeAccountId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    stripeOnboardingDone?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    lastLoginAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    accounts?: Prisma.AccountUncheckedUpdateManyWithoutUserNestedInput;
    sessions?: Prisma.SessionUncheckedUpdateManyWithoutUserNestedInput;
    profile?: Prisma.ProfileUncheckedUpdateOneWithoutUserNestedInput;
    freelancerProfile?: Prisma.FreelancerProfileUncheckedUpdateOneWithoutUserNestedInput;
    buyerProfile?: Prisma.BuyerProfileUncheckedUpdateOneWithoutUserNestedInput;
    portfolioItems?: Prisma.PortfolioUncheckedUpdateManyWithoutUserNestedInput;
    services?: Prisma.ServiceUncheckedUpdateManyWithoutUserNestedInput;
    ordersAsBuyer?: Prisma.OrderUncheckedUpdateManyWithoutBuyerNestedInput;
    ordersAsFreelancer?: Prisma.OrderUncheckedUpdateManyWithoutFreelancerNestedInput;
    reviewsWritten?: Prisma.ReviewUncheckedUpdateManyWithoutReviewerNestedInput;
    reviewsReceived?: Prisma.ReviewUncheckedUpdateManyWithoutRevieweeNestedInput;
    favorites?: Prisma.FavoriteUncheckedUpdateManyWithoutUserNestedInput;
    cart?: Prisma.CartUncheckedUpdateOneWithoutUserNestedInput;
    conversationParts?: Prisma.ConversationParticipantUncheckedUpdateManyWithoutUserNestedInput;
    messages?: Prisma.MessageUncheckedUpdateManyWithoutSenderNestedInput;
    notifications?: Prisma.NotificationUncheckedUpdateManyWithoutUserNestedInput;
    payouts?: Prisma.PayoutUncheckedUpdateManyWithoutFreelancerNestedInput;
    disputes?: Prisma.DisputeUncheckedUpdateManyWithoutOpenerNestedInput;
    reports?: Prisma.ReportUncheckedUpdateManyWithoutReporterNestedInput;
    xp?: Prisma.UserXPUncheckedUpdateOneWithoutUserNestedInput;
    searchHistory?: Prisma.SearchHistoryUncheckedUpdateManyWithoutUserNestedInput;
    userRoles?: Prisma.UserRoleUncheckedUpdateManyWithoutUserNestedInput;
    companiesOwned?: Prisma.CompanyUncheckedUpdateManyWithoutOwnerNestedInput;
    companyEmployees?: Prisma.EmployeeUncheckedUpdateManyWithoutUserNestedInput;
    jobsPosted?: Prisma.JobUncheckedUpdateManyWithoutPostedByNestedInput;
    resumes?: Prisma.ResumeUncheckedUpdateManyWithoutUserNestedInput;
    jobApplications?: Prisma.JobApplicationUncheckedUpdateManyWithoutApplicantNestedInput;
    products?: Prisma.ProductUncheckedUpdateManyWithoutSellerNestedInput;
    productReviewsWritten?: Prisma.ProductReviewUncheckedUpdateManyWithoutReviewerNestedInput;
    productReviewsReceived?: Prisma.ProductReviewUncheckedUpdateManyWithoutRevieweeNestedInput;
    booksAuthored?: Prisma.BookUncheckedUpdateManyWithoutAuthorUserNestedInput;
    bookPurchases?: Prisma.BookPurchaseUncheckedUpdateManyWithoutUserNestedInput;
    bookReviews?: Prisma.BookReviewUncheckedUpdateManyWithoutUserNestedInput;
    resourcesCreated?: Prisma.ResourceUncheckedUpdateManyWithoutAuthorNestedInput;
    portfolioProjects?: Prisma.PortfolioProjectUncheckedUpdateManyWithoutUserNestedInput;
    aiConversations?: Prisma.AIConversationUncheckedUpdateManyWithoutUserNestedInput;
};
export type UserCreateWithoutXpInput = {
    id?: string;
    name: string;
    username?: string | null;
    email: string;
    emailVerified?: boolean;
    image?: string | null;
    coverImage?: string | null;
    bio?: string | null;
    location?: string | null;
    skills?: Prisma.UserCreateskillsInput | string[];
    languages?: Prisma.UserCreatelanguagesInput | string[];
    timezone?: string | null;
    website?: string | null;
    github?: string | null;
    linkedin?: string | null;
    role?: string;
    status?: string;
    verificationStatus?: string;
    profileCompletion?: number;
    preferredCurrency?: string;
    stripeAccountId?: string | null;
    stripeOnboardingDone?: boolean;
    lastLoginAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    accounts?: Prisma.AccountCreateNestedManyWithoutUserInput;
    sessions?: Prisma.SessionCreateNestedManyWithoutUserInput;
    profile?: Prisma.ProfileCreateNestedOneWithoutUserInput;
    freelancerProfile?: Prisma.FreelancerProfileCreateNestedOneWithoutUserInput;
    buyerProfile?: Prisma.BuyerProfileCreateNestedOneWithoutUserInput;
    portfolioItems?: Prisma.PortfolioCreateNestedManyWithoutUserInput;
    services?: Prisma.ServiceCreateNestedManyWithoutUserInput;
    ordersAsBuyer?: Prisma.OrderCreateNestedManyWithoutBuyerInput;
    ordersAsFreelancer?: Prisma.OrderCreateNestedManyWithoutFreelancerInput;
    reviewsWritten?: Prisma.ReviewCreateNestedManyWithoutReviewerInput;
    reviewsReceived?: Prisma.ReviewCreateNestedManyWithoutRevieweeInput;
    favorites?: Prisma.FavoriteCreateNestedManyWithoutUserInput;
    cart?: Prisma.CartCreateNestedOneWithoutUserInput;
    conversationParts?: Prisma.ConversationParticipantCreateNestedManyWithoutUserInput;
    messages?: Prisma.MessageCreateNestedManyWithoutSenderInput;
    notifications?: Prisma.NotificationCreateNestedManyWithoutUserInput;
    payouts?: Prisma.PayoutCreateNestedManyWithoutFreelancerInput;
    disputes?: Prisma.DisputeCreateNestedManyWithoutOpenerInput;
    reports?: Prisma.ReportCreateNestedManyWithoutReporterInput;
    achievements?: Prisma.UserAchievementCreateNestedManyWithoutUserInput;
    searchHistory?: Prisma.SearchHistoryCreateNestedManyWithoutUserInput;
    userRoles?: Prisma.UserRoleCreateNestedManyWithoutUserInput;
    companiesOwned?: Prisma.CompanyCreateNestedManyWithoutOwnerInput;
    companyEmployees?: Prisma.EmployeeCreateNestedManyWithoutUserInput;
    jobsPosted?: Prisma.JobCreateNestedManyWithoutPostedByInput;
    resumes?: Prisma.ResumeCreateNestedManyWithoutUserInput;
    jobApplications?: Prisma.JobApplicationCreateNestedManyWithoutApplicantInput;
    products?: Prisma.ProductCreateNestedManyWithoutSellerInput;
    productReviewsWritten?: Prisma.ProductReviewCreateNestedManyWithoutReviewerInput;
    productReviewsReceived?: Prisma.ProductReviewCreateNestedManyWithoutRevieweeInput;
    booksAuthored?: Prisma.BookCreateNestedManyWithoutAuthorUserInput;
    bookPurchases?: Prisma.BookPurchaseCreateNestedManyWithoutUserInput;
    bookReviews?: Prisma.BookReviewCreateNestedManyWithoutUserInput;
    resourcesCreated?: Prisma.ResourceCreateNestedManyWithoutAuthorInput;
    portfolioProjects?: Prisma.PortfolioProjectCreateNestedManyWithoutUserInput;
    aiConversations?: Prisma.AIConversationCreateNestedManyWithoutUserInput;
};
export type UserUncheckedCreateWithoutXpInput = {
    id?: string;
    name: string;
    username?: string | null;
    email: string;
    emailVerified?: boolean;
    image?: string | null;
    coverImage?: string | null;
    bio?: string | null;
    location?: string | null;
    skills?: Prisma.UserCreateskillsInput | string[];
    languages?: Prisma.UserCreatelanguagesInput | string[];
    timezone?: string | null;
    website?: string | null;
    github?: string | null;
    linkedin?: string | null;
    role?: string;
    status?: string;
    verificationStatus?: string;
    profileCompletion?: number;
    preferredCurrency?: string;
    stripeAccountId?: string | null;
    stripeOnboardingDone?: boolean;
    lastLoginAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    accounts?: Prisma.AccountUncheckedCreateNestedManyWithoutUserInput;
    sessions?: Prisma.SessionUncheckedCreateNestedManyWithoutUserInput;
    profile?: Prisma.ProfileUncheckedCreateNestedOneWithoutUserInput;
    freelancerProfile?: Prisma.FreelancerProfileUncheckedCreateNestedOneWithoutUserInput;
    buyerProfile?: Prisma.BuyerProfileUncheckedCreateNestedOneWithoutUserInput;
    portfolioItems?: Prisma.PortfolioUncheckedCreateNestedManyWithoutUserInput;
    services?: Prisma.ServiceUncheckedCreateNestedManyWithoutUserInput;
    ordersAsBuyer?: Prisma.OrderUncheckedCreateNestedManyWithoutBuyerInput;
    ordersAsFreelancer?: Prisma.OrderUncheckedCreateNestedManyWithoutFreelancerInput;
    reviewsWritten?: Prisma.ReviewUncheckedCreateNestedManyWithoutReviewerInput;
    reviewsReceived?: Prisma.ReviewUncheckedCreateNestedManyWithoutRevieweeInput;
    favorites?: Prisma.FavoriteUncheckedCreateNestedManyWithoutUserInput;
    cart?: Prisma.CartUncheckedCreateNestedOneWithoutUserInput;
    conversationParts?: Prisma.ConversationParticipantUncheckedCreateNestedManyWithoutUserInput;
    messages?: Prisma.MessageUncheckedCreateNestedManyWithoutSenderInput;
    notifications?: Prisma.NotificationUncheckedCreateNestedManyWithoutUserInput;
    payouts?: Prisma.PayoutUncheckedCreateNestedManyWithoutFreelancerInput;
    disputes?: Prisma.DisputeUncheckedCreateNestedManyWithoutOpenerInput;
    reports?: Prisma.ReportUncheckedCreateNestedManyWithoutReporterInput;
    achievements?: Prisma.UserAchievementUncheckedCreateNestedManyWithoutUserInput;
    searchHistory?: Prisma.SearchHistoryUncheckedCreateNestedManyWithoutUserInput;
    userRoles?: Prisma.UserRoleUncheckedCreateNestedManyWithoutUserInput;
    companiesOwned?: Prisma.CompanyUncheckedCreateNestedManyWithoutOwnerInput;
    companyEmployees?: Prisma.EmployeeUncheckedCreateNestedManyWithoutUserInput;
    jobsPosted?: Prisma.JobUncheckedCreateNestedManyWithoutPostedByInput;
    resumes?: Prisma.ResumeUncheckedCreateNestedManyWithoutUserInput;
    jobApplications?: Prisma.JobApplicationUncheckedCreateNestedManyWithoutApplicantInput;
    products?: Prisma.ProductUncheckedCreateNestedManyWithoutSellerInput;
    productReviewsWritten?: Prisma.ProductReviewUncheckedCreateNestedManyWithoutReviewerInput;
    productReviewsReceived?: Prisma.ProductReviewUncheckedCreateNestedManyWithoutRevieweeInput;
    booksAuthored?: Prisma.BookUncheckedCreateNestedManyWithoutAuthorUserInput;
    bookPurchases?: Prisma.BookPurchaseUncheckedCreateNestedManyWithoutUserInput;
    bookReviews?: Prisma.BookReviewUncheckedCreateNestedManyWithoutUserInput;
    resourcesCreated?: Prisma.ResourceUncheckedCreateNestedManyWithoutAuthorInput;
    portfolioProjects?: Prisma.PortfolioProjectUncheckedCreateNestedManyWithoutUserInput;
    aiConversations?: Prisma.AIConversationUncheckedCreateNestedManyWithoutUserInput;
};
export type UserCreateOrConnectWithoutXpInput = {
    where: Prisma.UserWhereUniqueInput;
    create: Prisma.XOR<Prisma.UserCreateWithoutXpInput, Prisma.UserUncheckedCreateWithoutXpInput>;
};
export type UserUpsertWithoutXpInput = {
    update: Prisma.XOR<Prisma.UserUpdateWithoutXpInput, Prisma.UserUncheckedUpdateWithoutXpInput>;
    create: Prisma.XOR<Prisma.UserCreateWithoutXpInput, Prisma.UserUncheckedCreateWithoutXpInput>;
    where?: Prisma.UserWhereInput;
};
export type UserUpdateToOneWithWhereWithoutXpInput = {
    where?: Prisma.UserWhereInput;
    data: Prisma.XOR<Prisma.UserUpdateWithoutXpInput, Prisma.UserUncheckedUpdateWithoutXpInput>;
};
export type UserUpdateWithoutXpInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    username?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    emailVerified?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    image?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    coverImage?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    bio?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    location?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    skills?: Prisma.UserUpdateskillsInput | string[];
    languages?: Prisma.UserUpdatelanguagesInput | string[];
    timezone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    website?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    github?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    linkedin?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    role?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    verificationStatus?: Prisma.StringFieldUpdateOperationsInput | string;
    profileCompletion?: Prisma.IntFieldUpdateOperationsInput | number;
    preferredCurrency?: Prisma.StringFieldUpdateOperationsInput | string;
    stripeAccountId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    stripeOnboardingDone?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    lastLoginAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    accounts?: Prisma.AccountUpdateManyWithoutUserNestedInput;
    sessions?: Prisma.SessionUpdateManyWithoutUserNestedInput;
    profile?: Prisma.ProfileUpdateOneWithoutUserNestedInput;
    freelancerProfile?: Prisma.FreelancerProfileUpdateOneWithoutUserNestedInput;
    buyerProfile?: Prisma.BuyerProfileUpdateOneWithoutUserNestedInput;
    portfolioItems?: Prisma.PortfolioUpdateManyWithoutUserNestedInput;
    services?: Prisma.ServiceUpdateManyWithoutUserNestedInput;
    ordersAsBuyer?: Prisma.OrderUpdateManyWithoutBuyerNestedInput;
    ordersAsFreelancer?: Prisma.OrderUpdateManyWithoutFreelancerNestedInput;
    reviewsWritten?: Prisma.ReviewUpdateManyWithoutReviewerNestedInput;
    reviewsReceived?: Prisma.ReviewUpdateManyWithoutRevieweeNestedInput;
    favorites?: Prisma.FavoriteUpdateManyWithoutUserNestedInput;
    cart?: Prisma.CartUpdateOneWithoutUserNestedInput;
    conversationParts?: Prisma.ConversationParticipantUpdateManyWithoutUserNestedInput;
    messages?: Prisma.MessageUpdateManyWithoutSenderNestedInput;
    notifications?: Prisma.NotificationUpdateManyWithoutUserNestedInput;
    payouts?: Prisma.PayoutUpdateManyWithoutFreelancerNestedInput;
    disputes?: Prisma.DisputeUpdateManyWithoutOpenerNestedInput;
    reports?: Prisma.ReportUpdateManyWithoutReporterNestedInput;
    achievements?: Prisma.UserAchievementUpdateManyWithoutUserNestedInput;
    searchHistory?: Prisma.SearchHistoryUpdateManyWithoutUserNestedInput;
    userRoles?: Prisma.UserRoleUpdateManyWithoutUserNestedInput;
    companiesOwned?: Prisma.CompanyUpdateManyWithoutOwnerNestedInput;
    companyEmployees?: Prisma.EmployeeUpdateManyWithoutUserNestedInput;
    jobsPosted?: Prisma.JobUpdateManyWithoutPostedByNestedInput;
    resumes?: Prisma.ResumeUpdateManyWithoutUserNestedInput;
    jobApplications?: Prisma.JobApplicationUpdateManyWithoutApplicantNestedInput;
    products?: Prisma.ProductUpdateManyWithoutSellerNestedInput;
    productReviewsWritten?: Prisma.ProductReviewUpdateManyWithoutReviewerNestedInput;
    productReviewsReceived?: Prisma.ProductReviewUpdateManyWithoutRevieweeNestedInput;
    booksAuthored?: Prisma.BookUpdateManyWithoutAuthorUserNestedInput;
    bookPurchases?: Prisma.BookPurchaseUpdateManyWithoutUserNestedInput;
    bookReviews?: Prisma.BookReviewUpdateManyWithoutUserNestedInput;
    resourcesCreated?: Prisma.ResourceUpdateManyWithoutAuthorNestedInput;
    portfolioProjects?: Prisma.PortfolioProjectUpdateManyWithoutUserNestedInput;
    aiConversations?: Prisma.AIConversationUpdateManyWithoutUserNestedInput;
};
export type UserUncheckedUpdateWithoutXpInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    username?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    emailVerified?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    image?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    coverImage?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    bio?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    location?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    skills?: Prisma.UserUpdateskillsInput | string[];
    languages?: Prisma.UserUpdatelanguagesInput | string[];
    timezone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    website?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    github?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    linkedin?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    role?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    verificationStatus?: Prisma.StringFieldUpdateOperationsInput | string;
    profileCompletion?: Prisma.IntFieldUpdateOperationsInput | number;
    preferredCurrency?: Prisma.StringFieldUpdateOperationsInput | string;
    stripeAccountId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    stripeOnboardingDone?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    lastLoginAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    accounts?: Prisma.AccountUncheckedUpdateManyWithoutUserNestedInput;
    sessions?: Prisma.SessionUncheckedUpdateManyWithoutUserNestedInput;
    profile?: Prisma.ProfileUncheckedUpdateOneWithoutUserNestedInput;
    freelancerProfile?: Prisma.FreelancerProfileUncheckedUpdateOneWithoutUserNestedInput;
    buyerProfile?: Prisma.BuyerProfileUncheckedUpdateOneWithoutUserNestedInput;
    portfolioItems?: Prisma.PortfolioUncheckedUpdateManyWithoutUserNestedInput;
    services?: Prisma.ServiceUncheckedUpdateManyWithoutUserNestedInput;
    ordersAsBuyer?: Prisma.OrderUncheckedUpdateManyWithoutBuyerNestedInput;
    ordersAsFreelancer?: Prisma.OrderUncheckedUpdateManyWithoutFreelancerNestedInput;
    reviewsWritten?: Prisma.ReviewUncheckedUpdateManyWithoutReviewerNestedInput;
    reviewsReceived?: Prisma.ReviewUncheckedUpdateManyWithoutRevieweeNestedInput;
    favorites?: Prisma.FavoriteUncheckedUpdateManyWithoutUserNestedInput;
    cart?: Prisma.CartUncheckedUpdateOneWithoutUserNestedInput;
    conversationParts?: Prisma.ConversationParticipantUncheckedUpdateManyWithoutUserNestedInput;
    messages?: Prisma.MessageUncheckedUpdateManyWithoutSenderNestedInput;
    notifications?: Prisma.NotificationUncheckedUpdateManyWithoutUserNestedInput;
    payouts?: Prisma.PayoutUncheckedUpdateManyWithoutFreelancerNestedInput;
    disputes?: Prisma.DisputeUncheckedUpdateManyWithoutOpenerNestedInput;
    reports?: Prisma.ReportUncheckedUpdateManyWithoutReporterNestedInput;
    achievements?: Prisma.UserAchievementUncheckedUpdateManyWithoutUserNestedInput;
    searchHistory?: Prisma.SearchHistoryUncheckedUpdateManyWithoutUserNestedInput;
    userRoles?: Prisma.UserRoleUncheckedUpdateManyWithoutUserNestedInput;
    companiesOwned?: Prisma.CompanyUncheckedUpdateManyWithoutOwnerNestedInput;
    companyEmployees?: Prisma.EmployeeUncheckedUpdateManyWithoutUserNestedInput;
    jobsPosted?: Prisma.JobUncheckedUpdateManyWithoutPostedByNestedInput;
    resumes?: Prisma.ResumeUncheckedUpdateManyWithoutUserNestedInput;
    jobApplications?: Prisma.JobApplicationUncheckedUpdateManyWithoutApplicantNestedInput;
    products?: Prisma.ProductUncheckedUpdateManyWithoutSellerNestedInput;
    productReviewsWritten?: Prisma.ProductReviewUncheckedUpdateManyWithoutReviewerNestedInput;
    productReviewsReceived?: Prisma.ProductReviewUncheckedUpdateManyWithoutRevieweeNestedInput;
    booksAuthored?: Prisma.BookUncheckedUpdateManyWithoutAuthorUserNestedInput;
    bookPurchases?: Prisma.BookPurchaseUncheckedUpdateManyWithoutUserNestedInput;
    bookReviews?: Prisma.BookReviewUncheckedUpdateManyWithoutUserNestedInput;
    resourcesCreated?: Prisma.ResourceUncheckedUpdateManyWithoutAuthorNestedInput;
    portfolioProjects?: Prisma.PortfolioProjectUncheckedUpdateManyWithoutUserNestedInput;
    aiConversations?: Prisma.AIConversationUncheckedUpdateManyWithoutUserNestedInput;
};
export type UserCreateWithoutSearchHistoryInput = {
    id?: string;
    name: string;
    username?: string | null;
    email: string;
    emailVerified?: boolean;
    image?: string | null;
    coverImage?: string | null;
    bio?: string | null;
    location?: string | null;
    skills?: Prisma.UserCreateskillsInput | string[];
    languages?: Prisma.UserCreatelanguagesInput | string[];
    timezone?: string | null;
    website?: string | null;
    github?: string | null;
    linkedin?: string | null;
    role?: string;
    status?: string;
    verificationStatus?: string;
    profileCompletion?: number;
    preferredCurrency?: string;
    stripeAccountId?: string | null;
    stripeOnboardingDone?: boolean;
    lastLoginAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    accounts?: Prisma.AccountCreateNestedManyWithoutUserInput;
    sessions?: Prisma.SessionCreateNestedManyWithoutUserInput;
    profile?: Prisma.ProfileCreateNestedOneWithoutUserInput;
    freelancerProfile?: Prisma.FreelancerProfileCreateNestedOneWithoutUserInput;
    buyerProfile?: Prisma.BuyerProfileCreateNestedOneWithoutUserInput;
    portfolioItems?: Prisma.PortfolioCreateNestedManyWithoutUserInput;
    services?: Prisma.ServiceCreateNestedManyWithoutUserInput;
    ordersAsBuyer?: Prisma.OrderCreateNestedManyWithoutBuyerInput;
    ordersAsFreelancer?: Prisma.OrderCreateNestedManyWithoutFreelancerInput;
    reviewsWritten?: Prisma.ReviewCreateNestedManyWithoutReviewerInput;
    reviewsReceived?: Prisma.ReviewCreateNestedManyWithoutRevieweeInput;
    favorites?: Prisma.FavoriteCreateNestedManyWithoutUserInput;
    cart?: Prisma.CartCreateNestedOneWithoutUserInput;
    conversationParts?: Prisma.ConversationParticipantCreateNestedManyWithoutUserInput;
    messages?: Prisma.MessageCreateNestedManyWithoutSenderInput;
    notifications?: Prisma.NotificationCreateNestedManyWithoutUserInput;
    payouts?: Prisma.PayoutCreateNestedManyWithoutFreelancerInput;
    disputes?: Prisma.DisputeCreateNestedManyWithoutOpenerInput;
    reports?: Prisma.ReportCreateNestedManyWithoutReporterInput;
    achievements?: Prisma.UserAchievementCreateNestedManyWithoutUserInput;
    xp?: Prisma.UserXPCreateNestedOneWithoutUserInput;
    userRoles?: Prisma.UserRoleCreateNestedManyWithoutUserInput;
    companiesOwned?: Prisma.CompanyCreateNestedManyWithoutOwnerInput;
    companyEmployees?: Prisma.EmployeeCreateNestedManyWithoutUserInput;
    jobsPosted?: Prisma.JobCreateNestedManyWithoutPostedByInput;
    resumes?: Prisma.ResumeCreateNestedManyWithoutUserInput;
    jobApplications?: Prisma.JobApplicationCreateNestedManyWithoutApplicantInput;
    products?: Prisma.ProductCreateNestedManyWithoutSellerInput;
    productReviewsWritten?: Prisma.ProductReviewCreateNestedManyWithoutReviewerInput;
    productReviewsReceived?: Prisma.ProductReviewCreateNestedManyWithoutRevieweeInput;
    booksAuthored?: Prisma.BookCreateNestedManyWithoutAuthorUserInput;
    bookPurchases?: Prisma.BookPurchaseCreateNestedManyWithoutUserInput;
    bookReviews?: Prisma.BookReviewCreateNestedManyWithoutUserInput;
    resourcesCreated?: Prisma.ResourceCreateNestedManyWithoutAuthorInput;
    portfolioProjects?: Prisma.PortfolioProjectCreateNestedManyWithoutUserInput;
    aiConversations?: Prisma.AIConversationCreateNestedManyWithoutUserInput;
};
export type UserUncheckedCreateWithoutSearchHistoryInput = {
    id?: string;
    name: string;
    username?: string | null;
    email: string;
    emailVerified?: boolean;
    image?: string | null;
    coverImage?: string | null;
    bio?: string | null;
    location?: string | null;
    skills?: Prisma.UserCreateskillsInput | string[];
    languages?: Prisma.UserCreatelanguagesInput | string[];
    timezone?: string | null;
    website?: string | null;
    github?: string | null;
    linkedin?: string | null;
    role?: string;
    status?: string;
    verificationStatus?: string;
    profileCompletion?: number;
    preferredCurrency?: string;
    stripeAccountId?: string | null;
    stripeOnboardingDone?: boolean;
    lastLoginAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    accounts?: Prisma.AccountUncheckedCreateNestedManyWithoutUserInput;
    sessions?: Prisma.SessionUncheckedCreateNestedManyWithoutUserInput;
    profile?: Prisma.ProfileUncheckedCreateNestedOneWithoutUserInput;
    freelancerProfile?: Prisma.FreelancerProfileUncheckedCreateNestedOneWithoutUserInput;
    buyerProfile?: Prisma.BuyerProfileUncheckedCreateNestedOneWithoutUserInput;
    portfolioItems?: Prisma.PortfolioUncheckedCreateNestedManyWithoutUserInput;
    services?: Prisma.ServiceUncheckedCreateNestedManyWithoutUserInput;
    ordersAsBuyer?: Prisma.OrderUncheckedCreateNestedManyWithoutBuyerInput;
    ordersAsFreelancer?: Prisma.OrderUncheckedCreateNestedManyWithoutFreelancerInput;
    reviewsWritten?: Prisma.ReviewUncheckedCreateNestedManyWithoutReviewerInput;
    reviewsReceived?: Prisma.ReviewUncheckedCreateNestedManyWithoutRevieweeInput;
    favorites?: Prisma.FavoriteUncheckedCreateNestedManyWithoutUserInput;
    cart?: Prisma.CartUncheckedCreateNestedOneWithoutUserInput;
    conversationParts?: Prisma.ConversationParticipantUncheckedCreateNestedManyWithoutUserInput;
    messages?: Prisma.MessageUncheckedCreateNestedManyWithoutSenderInput;
    notifications?: Prisma.NotificationUncheckedCreateNestedManyWithoutUserInput;
    payouts?: Prisma.PayoutUncheckedCreateNestedManyWithoutFreelancerInput;
    disputes?: Prisma.DisputeUncheckedCreateNestedManyWithoutOpenerInput;
    reports?: Prisma.ReportUncheckedCreateNestedManyWithoutReporterInput;
    achievements?: Prisma.UserAchievementUncheckedCreateNestedManyWithoutUserInput;
    xp?: Prisma.UserXPUncheckedCreateNestedOneWithoutUserInput;
    userRoles?: Prisma.UserRoleUncheckedCreateNestedManyWithoutUserInput;
    companiesOwned?: Prisma.CompanyUncheckedCreateNestedManyWithoutOwnerInput;
    companyEmployees?: Prisma.EmployeeUncheckedCreateNestedManyWithoutUserInput;
    jobsPosted?: Prisma.JobUncheckedCreateNestedManyWithoutPostedByInput;
    resumes?: Prisma.ResumeUncheckedCreateNestedManyWithoutUserInput;
    jobApplications?: Prisma.JobApplicationUncheckedCreateNestedManyWithoutApplicantInput;
    products?: Prisma.ProductUncheckedCreateNestedManyWithoutSellerInput;
    productReviewsWritten?: Prisma.ProductReviewUncheckedCreateNestedManyWithoutReviewerInput;
    productReviewsReceived?: Prisma.ProductReviewUncheckedCreateNestedManyWithoutRevieweeInput;
    booksAuthored?: Prisma.BookUncheckedCreateNestedManyWithoutAuthorUserInput;
    bookPurchases?: Prisma.BookPurchaseUncheckedCreateNestedManyWithoutUserInput;
    bookReviews?: Prisma.BookReviewUncheckedCreateNestedManyWithoutUserInput;
    resourcesCreated?: Prisma.ResourceUncheckedCreateNestedManyWithoutAuthorInput;
    portfolioProjects?: Prisma.PortfolioProjectUncheckedCreateNestedManyWithoutUserInput;
    aiConversations?: Prisma.AIConversationUncheckedCreateNestedManyWithoutUserInput;
};
export type UserCreateOrConnectWithoutSearchHistoryInput = {
    where: Prisma.UserWhereUniqueInput;
    create: Prisma.XOR<Prisma.UserCreateWithoutSearchHistoryInput, Prisma.UserUncheckedCreateWithoutSearchHistoryInput>;
};
export type UserUpsertWithoutSearchHistoryInput = {
    update: Prisma.XOR<Prisma.UserUpdateWithoutSearchHistoryInput, Prisma.UserUncheckedUpdateWithoutSearchHistoryInput>;
    create: Prisma.XOR<Prisma.UserCreateWithoutSearchHistoryInput, Prisma.UserUncheckedCreateWithoutSearchHistoryInput>;
    where?: Prisma.UserWhereInput;
};
export type UserUpdateToOneWithWhereWithoutSearchHistoryInput = {
    where?: Prisma.UserWhereInput;
    data: Prisma.XOR<Prisma.UserUpdateWithoutSearchHistoryInput, Prisma.UserUncheckedUpdateWithoutSearchHistoryInput>;
};
export type UserUpdateWithoutSearchHistoryInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    username?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    emailVerified?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    image?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    coverImage?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    bio?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    location?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    skills?: Prisma.UserUpdateskillsInput | string[];
    languages?: Prisma.UserUpdatelanguagesInput | string[];
    timezone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    website?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    github?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    linkedin?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    role?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    verificationStatus?: Prisma.StringFieldUpdateOperationsInput | string;
    profileCompletion?: Prisma.IntFieldUpdateOperationsInput | number;
    preferredCurrency?: Prisma.StringFieldUpdateOperationsInput | string;
    stripeAccountId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    stripeOnboardingDone?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    lastLoginAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    accounts?: Prisma.AccountUpdateManyWithoutUserNestedInput;
    sessions?: Prisma.SessionUpdateManyWithoutUserNestedInput;
    profile?: Prisma.ProfileUpdateOneWithoutUserNestedInput;
    freelancerProfile?: Prisma.FreelancerProfileUpdateOneWithoutUserNestedInput;
    buyerProfile?: Prisma.BuyerProfileUpdateOneWithoutUserNestedInput;
    portfolioItems?: Prisma.PortfolioUpdateManyWithoutUserNestedInput;
    services?: Prisma.ServiceUpdateManyWithoutUserNestedInput;
    ordersAsBuyer?: Prisma.OrderUpdateManyWithoutBuyerNestedInput;
    ordersAsFreelancer?: Prisma.OrderUpdateManyWithoutFreelancerNestedInput;
    reviewsWritten?: Prisma.ReviewUpdateManyWithoutReviewerNestedInput;
    reviewsReceived?: Prisma.ReviewUpdateManyWithoutRevieweeNestedInput;
    favorites?: Prisma.FavoriteUpdateManyWithoutUserNestedInput;
    cart?: Prisma.CartUpdateOneWithoutUserNestedInput;
    conversationParts?: Prisma.ConversationParticipantUpdateManyWithoutUserNestedInput;
    messages?: Prisma.MessageUpdateManyWithoutSenderNestedInput;
    notifications?: Prisma.NotificationUpdateManyWithoutUserNestedInput;
    payouts?: Prisma.PayoutUpdateManyWithoutFreelancerNestedInput;
    disputes?: Prisma.DisputeUpdateManyWithoutOpenerNestedInput;
    reports?: Prisma.ReportUpdateManyWithoutReporterNestedInput;
    achievements?: Prisma.UserAchievementUpdateManyWithoutUserNestedInput;
    xp?: Prisma.UserXPUpdateOneWithoutUserNestedInput;
    userRoles?: Prisma.UserRoleUpdateManyWithoutUserNestedInput;
    companiesOwned?: Prisma.CompanyUpdateManyWithoutOwnerNestedInput;
    companyEmployees?: Prisma.EmployeeUpdateManyWithoutUserNestedInput;
    jobsPosted?: Prisma.JobUpdateManyWithoutPostedByNestedInput;
    resumes?: Prisma.ResumeUpdateManyWithoutUserNestedInput;
    jobApplications?: Prisma.JobApplicationUpdateManyWithoutApplicantNestedInput;
    products?: Prisma.ProductUpdateManyWithoutSellerNestedInput;
    productReviewsWritten?: Prisma.ProductReviewUpdateManyWithoutReviewerNestedInput;
    productReviewsReceived?: Prisma.ProductReviewUpdateManyWithoutRevieweeNestedInput;
    booksAuthored?: Prisma.BookUpdateManyWithoutAuthorUserNestedInput;
    bookPurchases?: Prisma.BookPurchaseUpdateManyWithoutUserNestedInput;
    bookReviews?: Prisma.BookReviewUpdateManyWithoutUserNestedInput;
    resourcesCreated?: Prisma.ResourceUpdateManyWithoutAuthorNestedInput;
    portfolioProjects?: Prisma.PortfolioProjectUpdateManyWithoutUserNestedInput;
    aiConversations?: Prisma.AIConversationUpdateManyWithoutUserNestedInput;
};
export type UserUncheckedUpdateWithoutSearchHistoryInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    username?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    emailVerified?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    image?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    coverImage?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    bio?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    location?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    skills?: Prisma.UserUpdateskillsInput | string[];
    languages?: Prisma.UserUpdatelanguagesInput | string[];
    timezone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    website?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    github?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    linkedin?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    role?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    verificationStatus?: Prisma.StringFieldUpdateOperationsInput | string;
    profileCompletion?: Prisma.IntFieldUpdateOperationsInput | number;
    preferredCurrency?: Prisma.StringFieldUpdateOperationsInput | string;
    stripeAccountId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    stripeOnboardingDone?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    lastLoginAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    accounts?: Prisma.AccountUncheckedUpdateManyWithoutUserNestedInput;
    sessions?: Prisma.SessionUncheckedUpdateManyWithoutUserNestedInput;
    profile?: Prisma.ProfileUncheckedUpdateOneWithoutUserNestedInput;
    freelancerProfile?: Prisma.FreelancerProfileUncheckedUpdateOneWithoutUserNestedInput;
    buyerProfile?: Prisma.BuyerProfileUncheckedUpdateOneWithoutUserNestedInput;
    portfolioItems?: Prisma.PortfolioUncheckedUpdateManyWithoutUserNestedInput;
    services?: Prisma.ServiceUncheckedUpdateManyWithoutUserNestedInput;
    ordersAsBuyer?: Prisma.OrderUncheckedUpdateManyWithoutBuyerNestedInput;
    ordersAsFreelancer?: Prisma.OrderUncheckedUpdateManyWithoutFreelancerNestedInput;
    reviewsWritten?: Prisma.ReviewUncheckedUpdateManyWithoutReviewerNestedInput;
    reviewsReceived?: Prisma.ReviewUncheckedUpdateManyWithoutRevieweeNestedInput;
    favorites?: Prisma.FavoriteUncheckedUpdateManyWithoutUserNestedInput;
    cart?: Prisma.CartUncheckedUpdateOneWithoutUserNestedInput;
    conversationParts?: Prisma.ConversationParticipantUncheckedUpdateManyWithoutUserNestedInput;
    messages?: Prisma.MessageUncheckedUpdateManyWithoutSenderNestedInput;
    notifications?: Prisma.NotificationUncheckedUpdateManyWithoutUserNestedInput;
    payouts?: Prisma.PayoutUncheckedUpdateManyWithoutFreelancerNestedInput;
    disputes?: Prisma.DisputeUncheckedUpdateManyWithoutOpenerNestedInput;
    reports?: Prisma.ReportUncheckedUpdateManyWithoutReporterNestedInput;
    achievements?: Prisma.UserAchievementUncheckedUpdateManyWithoutUserNestedInput;
    xp?: Prisma.UserXPUncheckedUpdateOneWithoutUserNestedInput;
    userRoles?: Prisma.UserRoleUncheckedUpdateManyWithoutUserNestedInput;
    companiesOwned?: Prisma.CompanyUncheckedUpdateManyWithoutOwnerNestedInput;
    companyEmployees?: Prisma.EmployeeUncheckedUpdateManyWithoutUserNestedInput;
    jobsPosted?: Prisma.JobUncheckedUpdateManyWithoutPostedByNestedInput;
    resumes?: Prisma.ResumeUncheckedUpdateManyWithoutUserNestedInput;
    jobApplications?: Prisma.JobApplicationUncheckedUpdateManyWithoutApplicantNestedInput;
    products?: Prisma.ProductUncheckedUpdateManyWithoutSellerNestedInput;
    productReviewsWritten?: Prisma.ProductReviewUncheckedUpdateManyWithoutReviewerNestedInput;
    productReviewsReceived?: Prisma.ProductReviewUncheckedUpdateManyWithoutRevieweeNestedInput;
    booksAuthored?: Prisma.BookUncheckedUpdateManyWithoutAuthorUserNestedInput;
    bookPurchases?: Prisma.BookPurchaseUncheckedUpdateManyWithoutUserNestedInput;
    bookReviews?: Prisma.BookReviewUncheckedUpdateManyWithoutUserNestedInput;
    resourcesCreated?: Prisma.ResourceUncheckedUpdateManyWithoutAuthorNestedInput;
    portfolioProjects?: Prisma.PortfolioProjectUncheckedUpdateManyWithoutUserNestedInput;
    aiConversations?: Prisma.AIConversationUncheckedUpdateManyWithoutUserNestedInput;
};
export type UserCreateWithoutUserRolesInput = {
    id?: string;
    name: string;
    username?: string | null;
    email: string;
    emailVerified?: boolean;
    image?: string | null;
    coverImage?: string | null;
    bio?: string | null;
    location?: string | null;
    skills?: Prisma.UserCreateskillsInput | string[];
    languages?: Prisma.UserCreatelanguagesInput | string[];
    timezone?: string | null;
    website?: string | null;
    github?: string | null;
    linkedin?: string | null;
    role?: string;
    status?: string;
    verificationStatus?: string;
    profileCompletion?: number;
    preferredCurrency?: string;
    stripeAccountId?: string | null;
    stripeOnboardingDone?: boolean;
    lastLoginAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    accounts?: Prisma.AccountCreateNestedManyWithoutUserInput;
    sessions?: Prisma.SessionCreateNestedManyWithoutUserInput;
    profile?: Prisma.ProfileCreateNestedOneWithoutUserInput;
    freelancerProfile?: Prisma.FreelancerProfileCreateNestedOneWithoutUserInput;
    buyerProfile?: Prisma.BuyerProfileCreateNestedOneWithoutUserInput;
    portfolioItems?: Prisma.PortfolioCreateNestedManyWithoutUserInput;
    services?: Prisma.ServiceCreateNestedManyWithoutUserInput;
    ordersAsBuyer?: Prisma.OrderCreateNestedManyWithoutBuyerInput;
    ordersAsFreelancer?: Prisma.OrderCreateNestedManyWithoutFreelancerInput;
    reviewsWritten?: Prisma.ReviewCreateNestedManyWithoutReviewerInput;
    reviewsReceived?: Prisma.ReviewCreateNestedManyWithoutRevieweeInput;
    favorites?: Prisma.FavoriteCreateNestedManyWithoutUserInput;
    cart?: Prisma.CartCreateNestedOneWithoutUserInput;
    conversationParts?: Prisma.ConversationParticipantCreateNestedManyWithoutUserInput;
    messages?: Prisma.MessageCreateNestedManyWithoutSenderInput;
    notifications?: Prisma.NotificationCreateNestedManyWithoutUserInput;
    payouts?: Prisma.PayoutCreateNestedManyWithoutFreelancerInput;
    disputes?: Prisma.DisputeCreateNestedManyWithoutOpenerInput;
    reports?: Prisma.ReportCreateNestedManyWithoutReporterInput;
    achievements?: Prisma.UserAchievementCreateNestedManyWithoutUserInput;
    xp?: Prisma.UserXPCreateNestedOneWithoutUserInput;
    searchHistory?: Prisma.SearchHistoryCreateNestedManyWithoutUserInput;
    companiesOwned?: Prisma.CompanyCreateNestedManyWithoutOwnerInput;
    companyEmployees?: Prisma.EmployeeCreateNestedManyWithoutUserInput;
    jobsPosted?: Prisma.JobCreateNestedManyWithoutPostedByInput;
    resumes?: Prisma.ResumeCreateNestedManyWithoutUserInput;
    jobApplications?: Prisma.JobApplicationCreateNestedManyWithoutApplicantInput;
    products?: Prisma.ProductCreateNestedManyWithoutSellerInput;
    productReviewsWritten?: Prisma.ProductReviewCreateNestedManyWithoutReviewerInput;
    productReviewsReceived?: Prisma.ProductReviewCreateNestedManyWithoutRevieweeInput;
    booksAuthored?: Prisma.BookCreateNestedManyWithoutAuthorUserInput;
    bookPurchases?: Prisma.BookPurchaseCreateNestedManyWithoutUserInput;
    bookReviews?: Prisma.BookReviewCreateNestedManyWithoutUserInput;
    resourcesCreated?: Prisma.ResourceCreateNestedManyWithoutAuthorInput;
    portfolioProjects?: Prisma.PortfolioProjectCreateNestedManyWithoutUserInput;
    aiConversations?: Prisma.AIConversationCreateNestedManyWithoutUserInput;
};
export type UserUncheckedCreateWithoutUserRolesInput = {
    id?: string;
    name: string;
    username?: string | null;
    email: string;
    emailVerified?: boolean;
    image?: string | null;
    coverImage?: string | null;
    bio?: string | null;
    location?: string | null;
    skills?: Prisma.UserCreateskillsInput | string[];
    languages?: Prisma.UserCreatelanguagesInput | string[];
    timezone?: string | null;
    website?: string | null;
    github?: string | null;
    linkedin?: string | null;
    role?: string;
    status?: string;
    verificationStatus?: string;
    profileCompletion?: number;
    preferredCurrency?: string;
    stripeAccountId?: string | null;
    stripeOnboardingDone?: boolean;
    lastLoginAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    accounts?: Prisma.AccountUncheckedCreateNestedManyWithoutUserInput;
    sessions?: Prisma.SessionUncheckedCreateNestedManyWithoutUserInput;
    profile?: Prisma.ProfileUncheckedCreateNestedOneWithoutUserInput;
    freelancerProfile?: Prisma.FreelancerProfileUncheckedCreateNestedOneWithoutUserInput;
    buyerProfile?: Prisma.BuyerProfileUncheckedCreateNestedOneWithoutUserInput;
    portfolioItems?: Prisma.PortfolioUncheckedCreateNestedManyWithoutUserInput;
    services?: Prisma.ServiceUncheckedCreateNestedManyWithoutUserInput;
    ordersAsBuyer?: Prisma.OrderUncheckedCreateNestedManyWithoutBuyerInput;
    ordersAsFreelancer?: Prisma.OrderUncheckedCreateNestedManyWithoutFreelancerInput;
    reviewsWritten?: Prisma.ReviewUncheckedCreateNestedManyWithoutReviewerInput;
    reviewsReceived?: Prisma.ReviewUncheckedCreateNestedManyWithoutRevieweeInput;
    favorites?: Prisma.FavoriteUncheckedCreateNestedManyWithoutUserInput;
    cart?: Prisma.CartUncheckedCreateNestedOneWithoutUserInput;
    conversationParts?: Prisma.ConversationParticipantUncheckedCreateNestedManyWithoutUserInput;
    messages?: Prisma.MessageUncheckedCreateNestedManyWithoutSenderInput;
    notifications?: Prisma.NotificationUncheckedCreateNestedManyWithoutUserInput;
    payouts?: Prisma.PayoutUncheckedCreateNestedManyWithoutFreelancerInput;
    disputes?: Prisma.DisputeUncheckedCreateNestedManyWithoutOpenerInput;
    reports?: Prisma.ReportUncheckedCreateNestedManyWithoutReporterInput;
    achievements?: Prisma.UserAchievementUncheckedCreateNestedManyWithoutUserInput;
    xp?: Prisma.UserXPUncheckedCreateNestedOneWithoutUserInput;
    searchHistory?: Prisma.SearchHistoryUncheckedCreateNestedManyWithoutUserInput;
    companiesOwned?: Prisma.CompanyUncheckedCreateNestedManyWithoutOwnerInput;
    companyEmployees?: Prisma.EmployeeUncheckedCreateNestedManyWithoutUserInput;
    jobsPosted?: Prisma.JobUncheckedCreateNestedManyWithoutPostedByInput;
    resumes?: Prisma.ResumeUncheckedCreateNestedManyWithoutUserInput;
    jobApplications?: Prisma.JobApplicationUncheckedCreateNestedManyWithoutApplicantInput;
    products?: Prisma.ProductUncheckedCreateNestedManyWithoutSellerInput;
    productReviewsWritten?: Prisma.ProductReviewUncheckedCreateNestedManyWithoutReviewerInput;
    productReviewsReceived?: Prisma.ProductReviewUncheckedCreateNestedManyWithoutRevieweeInput;
    booksAuthored?: Prisma.BookUncheckedCreateNestedManyWithoutAuthorUserInput;
    bookPurchases?: Prisma.BookPurchaseUncheckedCreateNestedManyWithoutUserInput;
    bookReviews?: Prisma.BookReviewUncheckedCreateNestedManyWithoutUserInput;
    resourcesCreated?: Prisma.ResourceUncheckedCreateNestedManyWithoutAuthorInput;
    portfolioProjects?: Prisma.PortfolioProjectUncheckedCreateNestedManyWithoutUserInput;
    aiConversations?: Prisma.AIConversationUncheckedCreateNestedManyWithoutUserInput;
};
export type UserCreateOrConnectWithoutUserRolesInput = {
    where: Prisma.UserWhereUniqueInput;
    create: Prisma.XOR<Prisma.UserCreateWithoutUserRolesInput, Prisma.UserUncheckedCreateWithoutUserRolesInput>;
};
export type UserUpsertWithoutUserRolesInput = {
    update: Prisma.XOR<Prisma.UserUpdateWithoutUserRolesInput, Prisma.UserUncheckedUpdateWithoutUserRolesInput>;
    create: Prisma.XOR<Prisma.UserCreateWithoutUserRolesInput, Prisma.UserUncheckedCreateWithoutUserRolesInput>;
    where?: Prisma.UserWhereInput;
};
export type UserUpdateToOneWithWhereWithoutUserRolesInput = {
    where?: Prisma.UserWhereInput;
    data: Prisma.XOR<Prisma.UserUpdateWithoutUserRolesInput, Prisma.UserUncheckedUpdateWithoutUserRolesInput>;
};
export type UserUpdateWithoutUserRolesInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    username?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    emailVerified?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    image?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    coverImage?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    bio?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    location?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    skills?: Prisma.UserUpdateskillsInput | string[];
    languages?: Prisma.UserUpdatelanguagesInput | string[];
    timezone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    website?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    github?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    linkedin?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    role?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    verificationStatus?: Prisma.StringFieldUpdateOperationsInput | string;
    profileCompletion?: Prisma.IntFieldUpdateOperationsInput | number;
    preferredCurrency?: Prisma.StringFieldUpdateOperationsInput | string;
    stripeAccountId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    stripeOnboardingDone?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    lastLoginAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    accounts?: Prisma.AccountUpdateManyWithoutUserNestedInput;
    sessions?: Prisma.SessionUpdateManyWithoutUserNestedInput;
    profile?: Prisma.ProfileUpdateOneWithoutUserNestedInput;
    freelancerProfile?: Prisma.FreelancerProfileUpdateOneWithoutUserNestedInput;
    buyerProfile?: Prisma.BuyerProfileUpdateOneWithoutUserNestedInput;
    portfolioItems?: Prisma.PortfolioUpdateManyWithoutUserNestedInput;
    services?: Prisma.ServiceUpdateManyWithoutUserNestedInput;
    ordersAsBuyer?: Prisma.OrderUpdateManyWithoutBuyerNestedInput;
    ordersAsFreelancer?: Prisma.OrderUpdateManyWithoutFreelancerNestedInput;
    reviewsWritten?: Prisma.ReviewUpdateManyWithoutReviewerNestedInput;
    reviewsReceived?: Prisma.ReviewUpdateManyWithoutRevieweeNestedInput;
    favorites?: Prisma.FavoriteUpdateManyWithoutUserNestedInput;
    cart?: Prisma.CartUpdateOneWithoutUserNestedInput;
    conversationParts?: Prisma.ConversationParticipantUpdateManyWithoutUserNestedInput;
    messages?: Prisma.MessageUpdateManyWithoutSenderNestedInput;
    notifications?: Prisma.NotificationUpdateManyWithoutUserNestedInput;
    payouts?: Prisma.PayoutUpdateManyWithoutFreelancerNestedInput;
    disputes?: Prisma.DisputeUpdateManyWithoutOpenerNestedInput;
    reports?: Prisma.ReportUpdateManyWithoutReporterNestedInput;
    achievements?: Prisma.UserAchievementUpdateManyWithoutUserNestedInput;
    xp?: Prisma.UserXPUpdateOneWithoutUserNestedInput;
    searchHistory?: Prisma.SearchHistoryUpdateManyWithoutUserNestedInput;
    companiesOwned?: Prisma.CompanyUpdateManyWithoutOwnerNestedInput;
    companyEmployees?: Prisma.EmployeeUpdateManyWithoutUserNestedInput;
    jobsPosted?: Prisma.JobUpdateManyWithoutPostedByNestedInput;
    resumes?: Prisma.ResumeUpdateManyWithoutUserNestedInput;
    jobApplications?: Prisma.JobApplicationUpdateManyWithoutApplicantNestedInput;
    products?: Prisma.ProductUpdateManyWithoutSellerNestedInput;
    productReviewsWritten?: Prisma.ProductReviewUpdateManyWithoutReviewerNestedInput;
    productReviewsReceived?: Prisma.ProductReviewUpdateManyWithoutRevieweeNestedInput;
    booksAuthored?: Prisma.BookUpdateManyWithoutAuthorUserNestedInput;
    bookPurchases?: Prisma.BookPurchaseUpdateManyWithoutUserNestedInput;
    bookReviews?: Prisma.BookReviewUpdateManyWithoutUserNestedInput;
    resourcesCreated?: Prisma.ResourceUpdateManyWithoutAuthorNestedInput;
    portfolioProjects?: Prisma.PortfolioProjectUpdateManyWithoutUserNestedInput;
    aiConversations?: Prisma.AIConversationUpdateManyWithoutUserNestedInput;
};
export type UserUncheckedUpdateWithoutUserRolesInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    username?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    emailVerified?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    image?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    coverImage?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    bio?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    location?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    skills?: Prisma.UserUpdateskillsInput | string[];
    languages?: Prisma.UserUpdatelanguagesInput | string[];
    timezone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    website?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    github?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    linkedin?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    role?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    verificationStatus?: Prisma.StringFieldUpdateOperationsInput | string;
    profileCompletion?: Prisma.IntFieldUpdateOperationsInput | number;
    preferredCurrency?: Prisma.StringFieldUpdateOperationsInput | string;
    stripeAccountId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    stripeOnboardingDone?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    lastLoginAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    accounts?: Prisma.AccountUncheckedUpdateManyWithoutUserNestedInput;
    sessions?: Prisma.SessionUncheckedUpdateManyWithoutUserNestedInput;
    profile?: Prisma.ProfileUncheckedUpdateOneWithoutUserNestedInput;
    freelancerProfile?: Prisma.FreelancerProfileUncheckedUpdateOneWithoutUserNestedInput;
    buyerProfile?: Prisma.BuyerProfileUncheckedUpdateOneWithoutUserNestedInput;
    portfolioItems?: Prisma.PortfolioUncheckedUpdateManyWithoutUserNestedInput;
    services?: Prisma.ServiceUncheckedUpdateManyWithoutUserNestedInput;
    ordersAsBuyer?: Prisma.OrderUncheckedUpdateManyWithoutBuyerNestedInput;
    ordersAsFreelancer?: Prisma.OrderUncheckedUpdateManyWithoutFreelancerNestedInput;
    reviewsWritten?: Prisma.ReviewUncheckedUpdateManyWithoutReviewerNestedInput;
    reviewsReceived?: Prisma.ReviewUncheckedUpdateManyWithoutRevieweeNestedInput;
    favorites?: Prisma.FavoriteUncheckedUpdateManyWithoutUserNestedInput;
    cart?: Prisma.CartUncheckedUpdateOneWithoutUserNestedInput;
    conversationParts?: Prisma.ConversationParticipantUncheckedUpdateManyWithoutUserNestedInput;
    messages?: Prisma.MessageUncheckedUpdateManyWithoutSenderNestedInput;
    notifications?: Prisma.NotificationUncheckedUpdateManyWithoutUserNestedInput;
    payouts?: Prisma.PayoutUncheckedUpdateManyWithoutFreelancerNestedInput;
    disputes?: Prisma.DisputeUncheckedUpdateManyWithoutOpenerNestedInput;
    reports?: Prisma.ReportUncheckedUpdateManyWithoutReporterNestedInput;
    achievements?: Prisma.UserAchievementUncheckedUpdateManyWithoutUserNestedInput;
    xp?: Prisma.UserXPUncheckedUpdateOneWithoutUserNestedInput;
    searchHistory?: Prisma.SearchHistoryUncheckedUpdateManyWithoutUserNestedInput;
    companiesOwned?: Prisma.CompanyUncheckedUpdateManyWithoutOwnerNestedInput;
    companyEmployees?: Prisma.EmployeeUncheckedUpdateManyWithoutUserNestedInput;
    jobsPosted?: Prisma.JobUncheckedUpdateManyWithoutPostedByNestedInput;
    resumes?: Prisma.ResumeUncheckedUpdateManyWithoutUserNestedInput;
    jobApplications?: Prisma.JobApplicationUncheckedUpdateManyWithoutApplicantNestedInput;
    products?: Prisma.ProductUncheckedUpdateManyWithoutSellerNestedInput;
    productReviewsWritten?: Prisma.ProductReviewUncheckedUpdateManyWithoutReviewerNestedInput;
    productReviewsReceived?: Prisma.ProductReviewUncheckedUpdateManyWithoutRevieweeNestedInput;
    booksAuthored?: Prisma.BookUncheckedUpdateManyWithoutAuthorUserNestedInput;
    bookPurchases?: Prisma.BookPurchaseUncheckedUpdateManyWithoutUserNestedInput;
    bookReviews?: Prisma.BookReviewUncheckedUpdateManyWithoutUserNestedInput;
    resourcesCreated?: Prisma.ResourceUncheckedUpdateManyWithoutAuthorNestedInput;
    portfolioProjects?: Prisma.PortfolioProjectUncheckedUpdateManyWithoutUserNestedInput;
    aiConversations?: Prisma.AIConversationUncheckedUpdateManyWithoutUserNestedInput;
};
export type UserCreateWithoutProductsInput = {
    id?: string;
    name: string;
    username?: string | null;
    email: string;
    emailVerified?: boolean;
    image?: string | null;
    coverImage?: string | null;
    bio?: string | null;
    location?: string | null;
    skills?: Prisma.UserCreateskillsInput | string[];
    languages?: Prisma.UserCreatelanguagesInput | string[];
    timezone?: string | null;
    website?: string | null;
    github?: string | null;
    linkedin?: string | null;
    role?: string;
    status?: string;
    verificationStatus?: string;
    profileCompletion?: number;
    preferredCurrency?: string;
    stripeAccountId?: string | null;
    stripeOnboardingDone?: boolean;
    lastLoginAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    accounts?: Prisma.AccountCreateNestedManyWithoutUserInput;
    sessions?: Prisma.SessionCreateNestedManyWithoutUserInput;
    profile?: Prisma.ProfileCreateNestedOneWithoutUserInput;
    freelancerProfile?: Prisma.FreelancerProfileCreateNestedOneWithoutUserInput;
    buyerProfile?: Prisma.BuyerProfileCreateNestedOneWithoutUserInput;
    portfolioItems?: Prisma.PortfolioCreateNestedManyWithoutUserInput;
    services?: Prisma.ServiceCreateNestedManyWithoutUserInput;
    ordersAsBuyer?: Prisma.OrderCreateNestedManyWithoutBuyerInput;
    ordersAsFreelancer?: Prisma.OrderCreateNestedManyWithoutFreelancerInput;
    reviewsWritten?: Prisma.ReviewCreateNestedManyWithoutReviewerInput;
    reviewsReceived?: Prisma.ReviewCreateNestedManyWithoutRevieweeInput;
    favorites?: Prisma.FavoriteCreateNestedManyWithoutUserInput;
    cart?: Prisma.CartCreateNestedOneWithoutUserInput;
    conversationParts?: Prisma.ConversationParticipantCreateNestedManyWithoutUserInput;
    messages?: Prisma.MessageCreateNestedManyWithoutSenderInput;
    notifications?: Prisma.NotificationCreateNestedManyWithoutUserInput;
    payouts?: Prisma.PayoutCreateNestedManyWithoutFreelancerInput;
    disputes?: Prisma.DisputeCreateNestedManyWithoutOpenerInput;
    reports?: Prisma.ReportCreateNestedManyWithoutReporterInput;
    achievements?: Prisma.UserAchievementCreateNestedManyWithoutUserInput;
    xp?: Prisma.UserXPCreateNestedOneWithoutUserInput;
    searchHistory?: Prisma.SearchHistoryCreateNestedManyWithoutUserInput;
    userRoles?: Prisma.UserRoleCreateNestedManyWithoutUserInput;
    companiesOwned?: Prisma.CompanyCreateNestedManyWithoutOwnerInput;
    companyEmployees?: Prisma.EmployeeCreateNestedManyWithoutUserInput;
    jobsPosted?: Prisma.JobCreateNestedManyWithoutPostedByInput;
    resumes?: Prisma.ResumeCreateNestedManyWithoutUserInput;
    jobApplications?: Prisma.JobApplicationCreateNestedManyWithoutApplicantInput;
    productReviewsWritten?: Prisma.ProductReviewCreateNestedManyWithoutReviewerInput;
    productReviewsReceived?: Prisma.ProductReviewCreateNestedManyWithoutRevieweeInput;
    booksAuthored?: Prisma.BookCreateNestedManyWithoutAuthorUserInput;
    bookPurchases?: Prisma.BookPurchaseCreateNestedManyWithoutUserInput;
    bookReviews?: Prisma.BookReviewCreateNestedManyWithoutUserInput;
    resourcesCreated?: Prisma.ResourceCreateNestedManyWithoutAuthorInput;
    portfolioProjects?: Prisma.PortfolioProjectCreateNestedManyWithoutUserInput;
    aiConversations?: Prisma.AIConversationCreateNestedManyWithoutUserInput;
};
export type UserUncheckedCreateWithoutProductsInput = {
    id?: string;
    name: string;
    username?: string | null;
    email: string;
    emailVerified?: boolean;
    image?: string | null;
    coverImage?: string | null;
    bio?: string | null;
    location?: string | null;
    skills?: Prisma.UserCreateskillsInput | string[];
    languages?: Prisma.UserCreatelanguagesInput | string[];
    timezone?: string | null;
    website?: string | null;
    github?: string | null;
    linkedin?: string | null;
    role?: string;
    status?: string;
    verificationStatus?: string;
    profileCompletion?: number;
    preferredCurrency?: string;
    stripeAccountId?: string | null;
    stripeOnboardingDone?: boolean;
    lastLoginAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    accounts?: Prisma.AccountUncheckedCreateNestedManyWithoutUserInput;
    sessions?: Prisma.SessionUncheckedCreateNestedManyWithoutUserInput;
    profile?: Prisma.ProfileUncheckedCreateNestedOneWithoutUserInput;
    freelancerProfile?: Prisma.FreelancerProfileUncheckedCreateNestedOneWithoutUserInput;
    buyerProfile?: Prisma.BuyerProfileUncheckedCreateNestedOneWithoutUserInput;
    portfolioItems?: Prisma.PortfolioUncheckedCreateNestedManyWithoutUserInput;
    services?: Prisma.ServiceUncheckedCreateNestedManyWithoutUserInput;
    ordersAsBuyer?: Prisma.OrderUncheckedCreateNestedManyWithoutBuyerInput;
    ordersAsFreelancer?: Prisma.OrderUncheckedCreateNestedManyWithoutFreelancerInput;
    reviewsWritten?: Prisma.ReviewUncheckedCreateNestedManyWithoutReviewerInput;
    reviewsReceived?: Prisma.ReviewUncheckedCreateNestedManyWithoutRevieweeInput;
    favorites?: Prisma.FavoriteUncheckedCreateNestedManyWithoutUserInput;
    cart?: Prisma.CartUncheckedCreateNestedOneWithoutUserInput;
    conversationParts?: Prisma.ConversationParticipantUncheckedCreateNestedManyWithoutUserInput;
    messages?: Prisma.MessageUncheckedCreateNestedManyWithoutSenderInput;
    notifications?: Prisma.NotificationUncheckedCreateNestedManyWithoutUserInput;
    payouts?: Prisma.PayoutUncheckedCreateNestedManyWithoutFreelancerInput;
    disputes?: Prisma.DisputeUncheckedCreateNestedManyWithoutOpenerInput;
    reports?: Prisma.ReportUncheckedCreateNestedManyWithoutReporterInput;
    achievements?: Prisma.UserAchievementUncheckedCreateNestedManyWithoutUserInput;
    xp?: Prisma.UserXPUncheckedCreateNestedOneWithoutUserInput;
    searchHistory?: Prisma.SearchHistoryUncheckedCreateNestedManyWithoutUserInput;
    userRoles?: Prisma.UserRoleUncheckedCreateNestedManyWithoutUserInput;
    companiesOwned?: Prisma.CompanyUncheckedCreateNestedManyWithoutOwnerInput;
    companyEmployees?: Prisma.EmployeeUncheckedCreateNestedManyWithoutUserInput;
    jobsPosted?: Prisma.JobUncheckedCreateNestedManyWithoutPostedByInput;
    resumes?: Prisma.ResumeUncheckedCreateNestedManyWithoutUserInput;
    jobApplications?: Prisma.JobApplicationUncheckedCreateNestedManyWithoutApplicantInput;
    productReviewsWritten?: Prisma.ProductReviewUncheckedCreateNestedManyWithoutReviewerInput;
    productReviewsReceived?: Prisma.ProductReviewUncheckedCreateNestedManyWithoutRevieweeInput;
    booksAuthored?: Prisma.BookUncheckedCreateNestedManyWithoutAuthorUserInput;
    bookPurchases?: Prisma.BookPurchaseUncheckedCreateNestedManyWithoutUserInput;
    bookReviews?: Prisma.BookReviewUncheckedCreateNestedManyWithoutUserInput;
    resourcesCreated?: Prisma.ResourceUncheckedCreateNestedManyWithoutAuthorInput;
    portfolioProjects?: Prisma.PortfolioProjectUncheckedCreateNestedManyWithoutUserInput;
    aiConversations?: Prisma.AIConversationUncheckedCreateNestedManyWithoutUserInput;
};
export type UserCreateOrConnectWithoutProductsInput = {
    where: Prisma.UserWhereUniqueInput;
    create: Prisma.XOR<Prisma.UserCreateWithoutProductsInput, Prisma.UserUncheckedCreateWithoutProductsInput>;
};
export type UserUpsertWithoutProductsInput = {
    update: Prisma.XOR<Prisma.UserUpdateWithoutProductsInput, Prisma.UserUncheckedUpdateWithoutProductsInput>;
    create: Prisma.XOR<Prisma.UserCreateWithoutProductsInput, Prisma.UserUncheckedCreateWithoutProductsInput>;
    where?: Prisma.UserWhereInput;
};
export type UserUpdateToOneWithWhereWithoutProductsInput = {
    where?: Prisma.UserWhereInput;
    data: Prisma.XOR<Prisma.UserUpdateWithoutProductsInput, Prisma.UserUncheckedUpdateWithoutProductsInput>;
};
export type UserUpdateWithoutProductsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    username?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    emailVerified?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    image?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    coverImage?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    bio?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    location?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    skills?: Prisma.UserUpdateskillsInput | string[];
    languages?: Prisma.UserUpdatelanguagesInput | string[];
    timezone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    website?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    github?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    linkedin?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    role?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    verificationStatus?: Prisma.StringFieldUpdateOperationsInput | string;
    profileCompletion?: Prisma.IntFieldUpdateOperationsInput | number;
    preferredCurrency?: Prisma.StringFieldUpdateOperationsInput | string;
    stripeAccountId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    stripeOnboardingDone?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    lastLoginAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    accounts?: Prisma.AccountUpdateManyWithoutUserNestedInput;
    sessions?: Prisma.SessionUpdateManyWithoutUserNestedInput;
    profile?: Prisma.ProfileUpdateOneWithoutUserNestedInput;
    freelancerProfile?: Prisma.FreelancerProfileUpdateOneWithoutUserNestedInput;
    buyerProfile?: Prisma.BuyerProfileUpdateOneWithoutUserNestedInput;
    portfolioItems?: Prisma.PortfolioUpdateManyWithoutUserNestedInput;
    services?: Prisma.ServiceUpdateManyWithoutUserNestedInput;
    ordersAsBuyer?: Prisma.OrderUpdateManyWithoutBuyerNestedInput;
    ordersAsFreelancer?: Prisma.OrderUpdateManyWithoutFreelancerNestedInput;
    reviewsWritten?: Prisma.ReviewUpdateManyWithoutReviewerNestedInput;
    reviewsReceived?: Prisma.ReviewUpdateManyWithoutRevieweeNestedInput;
    favorites?: Prisma.FavoriteUpdateManyWithoutUserNestedInput;
    cart?: Prisma.CartUpdateOneWithoutUserNestedInput;
    conversationParts?: Prisma.ConversationParticipantUpdateManyWithoutUserNestedInput;
    messages?: Prisma.MessageUpdateManyWithoutSenderNestedInput;
    notifications?: Prisma.NotificationUpdateManyWithoutUserNestedInput;
    payouts?: Prisma.PayoutUpdateManyWithoutFreelancerNestedInput;
    disputes?: Prisma.DisputeUpdateManyWithoutOpenerNestedInput;
    reports?: Prisma.ReportUpdateManyWithoutReporterNestedInput;
    achievements?: Prisma.UserAchievementUpdateManyWithoutUserNestedInput;
    xp?: Prisma.UserXPUpdateOneWithoutUserNestedInput;
    searchHistory?: Prisma.SearchHistoryUpdateManyWithoutUserNestedInput;
    userRoles?: Prisma.UserRoleUpdateManyWithoutUserNestedInput;
    companiesOwned?: Prisma.CompanyUpdateManyWithoutOwnerNestedInput;
    companyEmployees?: Prisma.EmployeeUpdateManyWithoutUserNestedInput;
    jobsPosted?: Prisma.JobUpdateManyWithoutPostedByNestedInput;
    resumes?: Prisma.ResumeUpdateManyWithoutUserNestedInput;
    jobApplications?: Prisma.JobApplicationUpdateManyWithoutApplicantNestedInput;
    productReviewsWritten?: Prisma.ProductReviewUpdateManyWithoutReviewerNestedInput;
    productReviewsReceived?: Prisma.ProductReviewUpdateManyWithoutRevieweeNestedInput;
    booksAuthored?: Prisma.BookUpdateManyWithoutAuthorUserNestedInput;
    bookPurchases?: Prisma.BookPurchaseUpdateManyWithoutUserNestedInput;
    bookReviews?: Prisma.BookReviewUpdateManyWithoutUserNestedInput;
    resourcesCreated?: Prisma.ResourceUpdateManyWithoutAuthorNestedInput;
    portfolioProjects?: Prisma.PortfolioProjectUpdateManyWithoutUserNestedInput;
    aiConversations?: Prisma.AIConversationUpdateManyWithoutUserNestedInput;
};
export type UserUncheckedUpdateWithoutProductsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    username?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    emailVerified?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    image?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    coverImage?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    bio?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    location?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    skills?: Prisma.UserUpdateskillsInput | string[];
    languages?: Prisma.UserUpdatelanguagesInput | string[];
    timezone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    website?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    github?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    linkedin?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    role?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    verificationStatus?: Prisma.StringFieldUpdateOperationsInput | string;
    profileCompletion?: Prisma.IntFieldUpdateOperationsInput | number;
    preferredCurrency?: Prisma.StringFieldUpdateOperationsInput | string;
    stripeAccountId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    stripeOnboardingDone?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    lastLoginAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    accounts?: Prisma.AccountUncheckedUpdateManyWithoutUserNestedInput;
    sessions?: Prisma.SessionUncheckedUpdateManyWithoutUserNestedInput;
    profile?: Prisma.ProfileUncheckedUpdateOneWithoutUserNestedInput;
    freelancerProfile?: Prisma.FreelancerProfileUncheckedUpdateOneWithoutUserNestedInput;
    buyerProfile?: Prisma.BuyerProfileUncheckedUpdateOneWithoutUserNestedInput;
    portfolioItems?: Prisma.PortfolioUncheckedUpdateManyWithoutUserNestedInput;
    services?: Prisma.ServiceUncheckedUpdateManyWithoutUserNestedInput;
    ordersAsBuyer?: Prisma.OrderUncheckedUpdateManyWithoutBuyerNestedInput;
    ordersAsFreelancer?: Prisma.OrderUncheckedUpdateManyWithoutFreelancerNestedInput;
    reviewsWritten?: Prisma.ReviewUncheckedUpdateManyWithoutReviewerNestedInput;
    reviewsReceived?: Prisma.ReviewUncheckedUpdateManyWithoutRevieweeNestedInput;
    favorites?: Prisma.FavoriteUncheckedUpdateManyWithoutUserNestedInput;
    cart?: Prisma.CartUncheckedUpdateOneWithoutUserNestedInput;
    conversationParts?: Prisma.ConversationParticipantUncheckedUpdateManyWithoutUserNestedInput;
    messages?: Prisma.MessageUncheckedUpdateManyWithoutSenderNestedInput;
    notifications?: Prisma.NotificationUncheckedUpdateManyWithoutUserNestedInput;
    payouts?: Prisma.PayoutUncheckedUpdateManyWithoutFreelancerNestedInput;
    disputes?: Prisma.DisputeUncheckedUpdateManyWithoutOpenerNestedInput;
    reports?: Prisma.ReportUncheckedUpdateManyWithoutReporterNestedInput;
    achievements?: Prisma.UserAchievementUncheckedUpdateManyWithoutUserNestedInput;
    xp?: Prisma.UserXPUncheckedUpdateOneWithoutUserNestedInput;
    searchHistory?: Prisma.SearchHistoryUncheckedUpdateManyWithoutUserNestedInput;
    userRoles?: Prisma.UserRoleUncheckedUpdateManyWithoutUserNestedInput;
    companiesOwned?: Prisma.CompanyUncheckedUpdateManyWithoutOwnerNestedInput;
    companyEmployees?: Prisma.EmployeeUncheckedUpdateManyWithoutUserNestedInput;
    jobsPosted?: Prisma.JobUncheckedUpdateManyWithoutPostedByNestedInput;
    resumes?: Prisma.ResumeUncheckedUpdateManyWithoutUserNestedInput;
    jobApplications?: Prisma.JobApplicationUncheckedUpdateManyWithoutApplicantNestedInput;
    productReviewsWritten?: Prisma.ProductReviewUncheckedUpdateManyWithoutReviewerNestedInput;
    productReviewsReceived?: Prisma.ProductReviewUncheckedUpdateManyWithoutRevieweeNestedInput;
    booksAuthored?: Prisma.BookUncheckedUpdateManyWithoutAuthorUserNestedInput;
    bookPurchases?: Prisma.BookPurchaseUncheckedUpdateManyWithoutUserNestedInput;
    bookReviews?: Prisma.BookReviewUncheckedUpdateManyWithoutUserNestedInput;
    resourcesCreated?: Prisma.ResourceUncheckedUpdateManyWithoutAuthorNestedInput;
    portfolioProjects?: Prisma.PortfolioProjectUncheckedUpdateManyWithoutUserNestedInput;
    aiConversations?: Prisma.AIConversationUncheckedUpdateManyWithoutUserNestedInput;
};
export type UserCreateWithoutProductReviewsWrittenInput = {
    id?: string;
    name: string;
    username?: string | null;
    email: string;
    emailVerified?: boolean;
    image?: string | null;
    coverImage?: string | null;
    bio?: string | null;
    location?: string | null;
    skills?: Prisma.UserCreateskillsInput | string[];
    languages?: Prisma.UserCreatelanguagesInput | string[];
    timezone?: string | null;
    website?: string | null;
    github?: string | null;
    linkedin?: string | null;
    role?: string;
    status?: string;
    verificationStatus?: string;
    profileCompletion?: number;
    preferredCurrency?: string;
    stripeAccountId?: string | null;
    stripeOnboardingDone?: boolean;
    lastLoginAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    accounts?: Prisma.AccountCreateNestedManyWithoutUserInput;
    sessions?: Prisma.SessionCreateNestedManyWithoutUserInput;
    profile?: Prisma.ProfileCreateNestedOneWithoutUserInput;
    freelancerProfile?: Prisma.FreelancerProfileCreateNestedOneWithoutUserInput;
    buyerProfile?: Prisma.BuyerProfileCreateNestedOneWithoutUserInput;
    portfolioItems?: Prisma.PortfolioCreateNestedManyWithoutUserInput;
    services?: Prisma.ServiceCreateNestedManyWithoutUserInput;
    ordersAsBuyer?: Prisma.OrderCreateNestedManyWithoutBuyerInput;
    ordersAsFreelancer?: Prisma.OrderCreateNestedManyWithoutFreelancerInput;
    reviewsWritten?: Prisma.ReviewCreateNestedManyWithoutReviewerInput;
    reviewsReceived?: Prisma.ReviewCreateNestedManyWithoutRevieweeInput;
    favorites?: Prisma.FavoriteCreateNestedManyWithoutUserInput;
    cart?: Prisma.CartCreateNestedOneWithoutUserInput;
    conversationParts?: Prisma.ConversationParticipantCreateNestedManyWithoutUserInput;
    messages?: Prisma.MessageCreateNestedManyWithoutSenderInput;
    notifications?: Prisma.NotificationCreateNestedManyWithoutUserInput;
    payouts?: Prisma.PayoutCreateNestedManyWithoutFreelancerInput;
    disputes?: Prisma.DisputeCreateNestedManyWithoutOpenerInput;
    reports?: Prisma.ReportCreateNestedManyWithoutReporterInput;
    achievements?: Prisma.UserAchievementCreateNestedManyWithoutUserInput;
    xp?: Prisma.UserXPCreateNestedOneWithoutUserInput;
    searchHistory?: Prisma.SearchHistoryCreateNestedManyWithoutUserInput;
    userRoles?: Prisma.UserRoleCreateNestedManyWithoutUserInput;
    companiesOwned?: Prisma.CompanyCreateNestedManyWithoutOwnerInput;
    companyEmployees?: Prisma.EmployeeCreateNestedManyWithoutUserInput;
    jobsPosted?: Prisma.JobCreateNestedManyWithoutPostedByInput;
    resumes?: Prisma.ResumeCreateNestedManyWithoutUserInput;
    jobApplications?: Prisma.JobApplicationCreateNestedManyWithoutApplicantInput;
    products?: Prisma.ProductCreateNestedManyWithoutSellerInput;
    productReviewsReceived?: Prisma.ProductReviewCreateNestedManyWithoutRevieweeInput;
    booksAuthored?: Prisma.BookCreateNestedManyWithoutAuthorUserInput;
    bookPurchases?: Prisma.BookPurchaseCreateNestedManyWithoutUserInput;
    bookReviews?: Prisma.BookReviewCreateNestedManyWithoutUserInput;
    resourcesCreated?: Prisma.ResourceCreateNestedManyWithoutAuthorInput;
    portfolioProjects?: Prisma.PortfolioProjectCreateNestedManyWithoutUserInput;
    aiConversations?: Prisma.AIConversationCreateNestedManyWithoutUserInput;
};
export type UserUncheckedCreateWithoutProductReviewsWrittenInput = {
    id?: string;
    name: string;
    username?: string | null;
    email: string;
    emailVerified?: boolean;
    image?: string | null;
    coverImage?: string | null;
    bio?: string | null;
    location?: string | null;
    skills?: Prisma.UserCreateskillsInput | string[];
    languages?: Prisma.UserCreatelanguagesInput | string[];
    timezone?: string | null;
    website?: string | null;
    github?: string | null;
    linkedin?: string | null;
    role?: string;
    status?: string;
    verificationStatus?: string;
    profileCompletion?: number;
    preferredCurrency?: string;
    stripeAccountId?: string | null;
    stripeOnboardingDone?: boolean;
    lastLoginAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    accounts?: Prisma.AccountUncheckedCreateNestedManyWithoutUserInput;
    sessions?: Prisma.SessionUncheckedCreateNestedManyWithoutUserInput;
    profile?: Prisma.ProfileUncheckedCreateNestedOneWithoutUserInput;
    freelancerProfile?: Prisma.FreelancerProfileUncheckedCreateNestedOneWithoutUserInput;
    buyerProfile?: Prisma.BuyerProfileUncheckedCreateNestedOneWithoutUserInput;
    portfolioItems?: Prisma.PortfolioUncheckedCreateNestedManyWithoutUserInput;
    services?: Prisma.ServiceUncheckedCreateNestedManyWithoutUserInput;
    ordersAsBuyer?: Prisma.OrderUncheckedCreateNestedManyWithoutBuyerInput;
    ordersAsFreelancer?: Prisma.OrderUncheckedCreateNestedManyWithoutFreelancerInput;
    reviewsWritten?: Prisma.ReviewUncheckedCreateNestedManyWithoutReviewerInput;
    reviewsReceived?: Prisma.ReviewUncheckedCreateNestedManyWithoutRevieweeInput;
    favorites?: Prisma.FavoriteUncheckedCreateNestedManyWithoutUserInput;
    cart?: Prisma.CartUncheckedCreateNestedOneWithoutUserInput;
    conversationParts?: Prisma.ConversationParticipantUncheckedCreateNestedManyWithoutUserInput;
    messages?: Prisma.MessageUncheckedCreateNestedManyWithoutSenderInput;
    notifications?: Prisma.NotificationUncheckedCreateNestedManyWithoutUserInput;
    payouts?: Prisma.PayoutUncheckedCreateNestedManyWithoutFreelancerInput;
    disputes?: Prisma.DisputeUncheckedCreateNestedManyWithoutOpenerInput;
    reports?: Prisma.ReportUncheckedCreateNestedManyWithoutReporterInput;
    achievements?: Prisma.UserAchievementUncheckedCreateNestedManyWithoutUserInput;
    xp?: Prisma.UserXPUncheckedCreateNestedOneWithoutUserInput;
    searchHistory?: Prisma.SearchHistoryUncheckedCreateNestedManyWithoutUserInput;
    userRoles?: Prisma.UserRoleUncheckedCreateNestedManyWithoutUserInput;
    companiesOwned?: Prisma.CompanyUncheckedCreateNestedManyWithoutOwnerInput;
    companyEmployees?: Prisma.EmployeeUncheckedCreateNestedManyWithoutUserInput;
    jobsPosted?: Prisma.JobUncheckedCreateNestedManyWithoutPostedByInput;
    resumes?: Prisma.ResumeUncheckedCreateNestedManyWithoutUserInput;
    jobApplications?: Prisma.JobApplicationUncheckedCreateNestedManyWithoutApplicantInput;
    products?: Prisma.ProductUncheckedCreateNestedManyWithoutSellerInput;
    productReviewsReceived?: Prisma.ProductReviewUncheckedCreateNestedManyWithoutRevieweeInput;
    booksAuthored?: Prisma.BookUncheckedCreateNestedManyWithoutAuthorUserInput;
    bookPurchases?: Prisma.BookPurchaseUncheckedCreateNestedManyWithoutUserInput;
    bookReviews?: Prisma.BookReviewUncheckedCreateNestedManyWithoutUserInput;
    resourcesCreated?: Prisma.ResourceUncheckedCreateNestedManyWithoutAuthorInput;
    portfolioProjects?: Prisma.PortfolioProjectUncheckedCreateNestedManyWithoutUserInput;
    aiConversations?: Prisma.AIConversationUncheckedCreateNestedManyWithoutUserInput;
};
export type UserCreateOrConnectWithoutProductReviewsWrittenInput = {
    where: Prisma.UserWhereUniqueInput;
    create: Prisma.XOR<Prisma.UserCreateWithoutProductReviewsWrittenInput, Prisma.UserUncheckedCreateWithoutProductReviewsWrittenInput>;
};
export type UserCreateWithoutProductReviewsReceivedInput = {
    id?: string;
    name: string;
    username?: string | null;
    email: string;
    emailVerified?: boolean;
    image?: string | null;
    coverImage?: string | null;
    bio?: string | null;
    location?: string | null;
    skills?: Prisma.UserCreateskillsInput | string[];
    languages?: Prisma.UserCreatelanguagesInput | string[];
    timezone?: string | null;
    website?: string | null;
    github?: string | null;
    linkedin?: string | null;
    role?: string;
    status?: string;
    verificationStatus?: string;
    profileCompletion?: number;
    preferredCurrency?: string;
    stripeAccountId?: string | null;
    stripeOnboardingDone?: boolean;
    lastLoginAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    accounts?: Prisma.AccountCreateNestedManyWithoutUserInput;
    sessions?: Prisma.SessionCreateNestedManyWithoutUserInput;
    profile?: Prisma.ProfileCreateNestedOneWithoutUserInput;
    freelancerProfile?: Prisma.FreelancerProfileCreateNestedOneWithoutUserInput;
    buyerProfile?: Prisma.BuyerProfileCreateNestedOneWithoutUserInput;
    portfolioItems?: Prisma.PortfolioCreateNestedManyWithoutUserInput;
    services?: Prisma.ServiceCreateNestedManyWithoutUserInput;
    ordersAsBuyer?: Prisma.OrderCreateNestedManyWithoutBuyerInput;
    ordersAsFreelancer?: Prisma.OrderCreateNestedManyWithoutFreelancerInput;
    reviewsWritten?: Prisma.ReviewCreateNestedManyWithoutReviewerInput;
    reviewsReceived?: Prisma.ReviewCreateNestedManyWithoutRevieweeInput;
    favorites?: Prisma.FavoriteCreateNestedManyWithoutUserInput;
    cart?: Prisma.CartCreateNestedOneWithoutUserInput;
    conversationParts?: Prisma.ConversationParticipantCreateNestedManyWithoutUserInput;
    messages?: Prisma.MessageCreateNestedManyWithoutSenderInput;
    notifications?: Prisma.NotificationCreateNestedManyWithoutUserInput;
    payouts?: Prisma.PayoutCreateNestedManyWithoutFreelancerInput;
    disputes?: Prisma.DisputeCreateNestedManyWithoutOpenerInput;
    reports?: Prisma.ReportCreateNestedManyWithoutReporterInput;
    achievements?: Prisma.UserAchievementCreateNestedManyWithoutUserInput;
    xp?: Prisma.UserXPCreateNestedOneWithoutUserInput;
    searchHistory?: Prisma.SearchHistoryCreateNestedManyWithoutUserInput;
    userRoles?: Prisma.UserRoleCreateNestedManyWithoutUserInput;
    companiesOwned?: Prisma.CompanyCreateNestedManyWithoutOwnerInput;
    companyEmployees?: Prisma.EmployeeCreateNestedManyWithoutUserInput;
    jobsPosted?: Prisma.JobCreateNestedManyWithoutPostedByInput;
    resumes?: Prisma.ResumeCreateNestedManyWithoutUserInput;
    jobApplications?: Prisma.JobApplicationCreateNestedManyWithoutApplicantInput;
    products?: Prisma.ProductCreateNestedManyWithoutSellerInput;
    productReviewsWritten?: Prisma.ProductReviewCreateNestedManyWithoutReviewerInput;
    booksAuthored?: Prisma.BookCreateNestedManyWithoutAuthorUserInput;
    bookPurchases?: Prisma.BookPurchaseCreateNestedManyWithoutUserInput;
    bookReviews?: Prisma.BookReviewCreateNestedManyWithoutUserInput;
    resourcesCreated?: Prisma.ResourceCreateNestedManyWithoutAuthorInput;
    portfolioProjects?: Prisma.PortfolioProjectCreateNestedManyWithoutUserInput;
    aiConversations?: Prisma.AIConversationCreateNestedManyWithoutUserInput;
};
export type UserUncheckedCreateWithoutProductReviewsReceivedInput = {
    id?: string;
    name: string;
    username?: string | null;
    email: string;
    emailVerified?: boolean;
    image?: string | null;
    coverImage?: string | null;
    bio?: string | null;
    location?: string | null;
    skills?: Prisma.UserCreateskillsInput | string[];
    languages?: Prisma.UserCreatelanguagesInput | string[];
    timezone?: string | null;
    website?: string | null;
    github?: string | null;
    linkedin?: string | null;
    role?: string;
    status?: string;
    verificationStatus?: string;
    profileCompletion?: number;
    preferredCurrency?: string;
    stripeAccountId?: string | null;
    stripeOnboardingDone?: boolean;
    lastLoginAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    accounts?: Prisma.AccountUncheckedCreateNestedManyWithoutUserInput;
    sessions?: Prisma.SessionUncheckedCreateNestedManyWithoutUserInput;
    profile?: Prisma.ProfileUncheckedCreateNestedOneWithoutUserInput;
    freelancerProfile?: Prisma.FreelancerProfileUncheckedCreateNestedOneWithoutUserInput;
    buyerProfile?: Prisma.BuyerProfileUncheckedCreateNestedOneWithoutUserInput;
    portfolioItems?: Prisma.PortfolioUncheckedCreateNestedManyWithoutUserInput;
    services?: Prisma.ServiceUncheckedCreateNestedManyWithoutUserInput;
    ordersAsBuyer?: Prisma.OrderUncheckedCreateNestedManyWithoutBuyerInput;
    ordersAsFreelancer?: Prisma.OrderUncheckedCreateNestedManyWithoutFreelancerInput;
    reviewsWritten?: Prisma.ReviewUncheckedCreateNestedManyWithoutReviewerInput;
    reviewsReceived?: Prisma.ReviewUncheckedCreateNestedManyWithoutRevieweeInput;
    favorites?: Prisma.FavoriteUncheckedCreateNestedManyWithoutUserInput;
    cart?: Prisma.CartUncheckedCreateNestedOneWithoutUserInput;
    conversationParts?: Prisma.ConversationParticipantUncheckedCreateNestedManyWithoutUserInput;
    messages?: Prisma.MessageUncheckedCreateNestedManyWithoutSenderInput;
    notifications?: Prisma.NotificationUncheckedCreateNestedManyWithoutUserInput;
    payouts?: Prisma.PayoutUncheckedCreateNestedManyWithoutFreelancerInput;
    disputes?: Prisma.DisputeUncheckedCreateNestedManyWithoutOpenerInput;
    reports?: Prisma.ReportUncheckedCreateNestedManyWithoutReporterInput;
    achievements?: Prisma.UserAchievementUncheckedCreateNestedManyWithoutUserInput;
    xp?: Prisma.UserXPUncheckedCreateNestedOneWithoutUserInput;
    searchHistory?: Prisma.SearchHistoryUncheckedCreateNestedManyWithoutUserInput;
    userRoles?: Prisma.UserRoleUncheckedCreateNestedManyWithoutUserInput;
    companiesOwned?: Prisma.CompanyUncheckedCreateNestedManyWithoutOwnerInput;
    companyEmployees?: Prisma.EmployeeUncheckedCreateNestedManyWithoutUserInput;
    jobsPosted?: Prisma.JobUncheckedCreateNestedManyWithoutPostedByInput;
    resumes?: Prisma.ResumeUncheckedCreateNestedManyWithoutUserInput;
    jobApplications?: Prisma.JobApplicationUncheckedCreateNestedManyWithoutApplicantInput;
    products?: Prisma.ProductUncheckedCreateNestedManyWithoutSellerInput;
    productReviewsWritten?: Prisma.ProductReviewUncheckedCreateNestedManyWithoutReviewerInput;
    booksAuthored?: Prisma.BookUncheckedCreateNestedManyWithoutAuthorUserInput;
    bookPurchases?: Prisma.BookPurchaseUncheckedCreateNestedManyWithoutUserInput;
    bookReviews?: Prisma.BookReviewUncheckedCreateNestedManyWithoutUserInput;
    resourcesCreated?: Prisma.ResourceUncheckedCreateNestedManyWithoutAuthorInput;
    portfolioProjects?: Prisma.PortfolioProjectUncheckedCreateNestedManyWithoutUserInput;
    aiConversations?: Prisma.AIConversationUncheckedCreateNestedManyWithoutUserInput;
};
export type UserCreateOrConnectWithoutProductReviewsReceivedInput = {
    where: Prisma.UserWhereUniqueInput;
    create: Prisma.XOR<Prisma.UserCreateWithoutProductReviewsReceivedInput, Prisma.UserUncheckedCreateWithoutProductReviewsReceivedInput>;
};
export type UserUpsertWithoutProductReviewsWrittenInput = {
    update: Prisma.XOR<Prisma.UserUpdateWithoutProductReviewsWrittenInput, Prisma.UserUncheckedUpdateWithoutProductReviewsWrittenInput>;
    create: Prisma.XOR<Prisma.UserCreateWithoutProductReviewsWrittenInput, Prisma.UserUncheckedCreateWithoutProductReviewsWrittenInput>;
    where?: Prisma.UserWhereInput;
};
export type UserUpdateToOneWithWhereWithoutProductReviewsWrittenInput = {
    where?: Prisma.UserWhereInput;
    data: Prisma.XOR<Prisma.UserUpdateWithoutProductReviewsWrittenInput, Prisma.UserUncheckedUpdateWithoutProductReviewsWrittenInput>;
};
export type UserUpdateWithoutProductReviewsWrittenInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    username?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    emailVerified?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    image?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    coverImage?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    bio?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    location?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    skills?: Prisma.UserUpdateskillsInput | string[];
    languages?: Prisma.UserUpdatelanguagesInput | string[];
    timezone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    website?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    github?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    linkedin?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    role?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    verificationStatus?: Prisma.StringFieldUpdateOperationsInput | string;
    profileCompletion?: Prisma.IntFieldUpdateOperationsInput | number;
    preferredCurrency?: Prisma.StringFieldUpdateOperationsInput | string;
    stripeAccountId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    stripeOnboardingDone?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    lastLoginAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    accounts?: Prisma.AccountUpdateManyWithoutUserNestedInput;
    sessions?: Prisma.SessionUpdateManyWithoutUserNestedInput;
    profile?: Prisma.ProfileUpdateOneWithoutUserNestedInput;
    freelancerProfile?: Prisma.FreelancerProfileUpdateOneWithoutUserNestedInput;
    buyerProfile?: Prisma.BuyerProfileUpdateOneWithoutUserNestedInput;
    portfolioItems?: Prisma.PortfolioUpdateManyWithoutUserNestedInput;
    services?: Prisma.ServiceUpdateManyWithoutUserNestedInput;
    ordersAsBuyer?: Prisma.OrderUpdateManyWithoutBuyerNestedInput;
    ordersAsFreelancer?: Prisma.OrderUpdateManyWithoutFreelancerNestedInput;
    reviewsWritten?: Prisma.ReviewUpdateManyWithoutReviewerNestedInput;
    reviewsReceived?: Prisma.ReviewUpdateManyWithoutRevieweeNestedInput;
    favorites?: Prisma.FavoriteUpdateManyWithoutUserNestedInput;
    cart?: Prisma.CartUpdateOneWithoutUserNestedInput;
    conversationParts?: Prisma.ConversationParticipantUpdateManyWithoutUserNestedInput;
    messages?: Prisma.MessageUpdateManyWithoutSenderNestedInput;
    notifications?: Prisma.NotificationUpdateManyWithoutUserNestedInput;
    payouts?: Prisma.PayoutUpdateManyWithoutFreelancerNestedInput;
    disputes?: Prisma.DisputeUpdateManyWithoutOpenerNestedInput;
    reports?: Prisma.ReportUpdateManyWithoutReporterNestedInput;
    achievements?: Prisma.UserAchievementUpdateManyWithoutUserNestedInput;
    xp?: Prisma.UserXPUpdateOneWithoutUserNestedInput;
    searchHistory?: Prisma.SearchHistoryUpdateManyWithoutUserNestedInput;
    userRoles?: Prisma.UserRoleUpdateManyWithoutUserNestedInput;
    companiesOwned?: Prisma.CompanyUpdateManyWithoutOwnerNestedInput;
    companyEmployees?: Prisma.EmployeeUpdateManyWithoutUserNestedInput;
    jobsPosted?: Prisma.JobUpdateManyWithoutPostedByNestedInput;
    resumes?: Prisma.ResumeUpdateManyWithoutUserNestedInput;
    jobApplications?: Prisma.JobApplicationUpdateManyWithoutApplicantNestedInput;
    products?: Prisma.ProductUpdateManyWithoutSellerNestedInput;
    productReviewsReceived?: Prisma.ProductReviewUpdateManyWithoutRevieweeNestedInput;
    booksAuthored?: Prisma.BookUpdateManyWithoutAuthorUserNestedInput;
    bookPurchases?: Prisma.BookPurchaseUpdateManyWithoutUserNestedInput;
    bookReviews?: Prisma.BookReviewUpdateManyWithoutUserNestedInput;
    resourcesCreated?: Prisma.ResourceUpdateManyWithoutAuthorNestedInput;
    portfolioProjects?: Prisma.PortfolioProjectUpdateManyWithoutUserNestedInput;
    aiConversations?: Prisma.AIConversationUpdateManyWithoutUserNestedInput;
};
export type UserUncheckedUpdateWithoutProductReviewsWrittenInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    username?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    emailVerified?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    image?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    coverImage?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    bio?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    location?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    skills?: Prisma.UserUpdateskillsInput | string[];
    languages?: Prisma.UserUpdatelanguagesInput | string[];
    timezone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    website?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    github?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    linkedin?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    role?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    verificationStatus?: Prisma.StringFieldUpdateOperationsInput | string;
    profileCompletion?: Prisma.IntFieldUpdateOperationsInput | number;
    preferredCurrency?: Prisma.StringFieldUpdateOperationsInput | string;
    stripeAccountId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    stripeOnboardingDone?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    lastLoginAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    accounts?: Prisma.AccountUncheckedUpdateManyWithoutUserNestedInput;
    sessions?: Prisma.SessionUncheckedUpdateManyWithoutUserNestedInput;
    profile?: Prisma.ProfileUncheckedUpdateOneWithoutUserNestedInput;
    freelancerProfile?: Prisma.FreelancerProfileUncheckedUpdateOneWithoutUserNestedInput;
    buyerProfile?: Prisma.BuyerProfileUncheckedUpdateOneWithoutUserNestedInput;
    portfolioItems?: Prisma.PortfolioUncheckedUpdateManyWithoutUserNestedInput;
    services?: Prisma.ServiceUncheckedUpdateManyWithoutUserNestedInput;
    ordersAsBuyer?: Prisma.OrderUncheckedUpdateManyWithoutBuyerNestedInput;
    ordersAsFreelancer?: Prisma.OrderUncheckedUpdateManyWithoutFreelancerNestedInput;
    reviewsWritten?: Prisma.ReviewUncheckedUpdateManyWithoutReviewerNestedInput;
    reviewsReceived?: Prisma.ReviewUncheckedUpdateManyWithoutRevieweeNestedInput;
    favorites?: Prisma.FavoriteUncheckedUpdateManyWithoutUserNestedInput;
    cart?: Prisma.CartUncheckedUpdateOneWithoutUserNestedInput;
    conversationParts?: Prisma.ConversationParticipantUncheckedUpdateManyWithoutUserNestedInput;
    messages?: Prisma.MessageUncheckedUpdateManyWithoutSenderNestedInput;
    notifications?: Prisma.NotificationUncheckedUpdateManyWithoutUserNestedInput;
    payouts?: Prisma.PayoutUncheckedUpdateManyWithoutFreelancerNestedInput;
    disputes?: Prisma.DisputeUncheckedUpdateManyWithoutOpenerNestedInput;
    reports?: Prisma.ReportUncheckedUpdateManyWithoutReporterNestedInput;
    achievements?: Prisma.UserAchievementUncheckedUpdateManyWithoutUserNestedInput;
    xp?: Prisma.UserXPUncheckedUpdateOneWithoutUserNestedInput;
    searchHistory?: Prisma.SearchHistoryUncheckedUpdateManyWithoutUserNestedInput;
    userRoles?: Prisma.UserRoleUncheckedUpdateManyWithoutUserNestedInput;
    companiesOwned?: Prisma.CompanyUncheckedUpdateManyWithoutOwnerNestedInput;
    companyEmployees?: Prisma.EmployeeUncheckedUpdateManyWithoutUserNestedInput;
    jobsPosted?: Prisma.JobUncheckedUpdateManyWithoutPostedByNestedInput;
    resumes?: Prisma.ResumeUncheckedUpdateManyWithoutUserNestedInput;
    jobApplications?: Prisma.JobApplicationUncheckedUpdateManyWithoutApplicantNestedInput;
    products?: Prisma.ProductUncheckedUpdateManyWithoutSellerNestedInput;
    productReviewsReceived?: Prisma.ProductReviewUncheckedUpdateManyWithoutRevieweeNestedInput;
    booksAuthored?: Prisma.BookUncheckedUpdateManyWithoutAuthorUserNestedInput;
    bookPurchases?: Prisma.BookPurchaseUncheckedUpdateManyWithoutUserNestedInput;
    bookReviews?: Prisma.BookReviewUncheckedUpdateManyWithoutUserNestedInput;
    resourcesCreated?: Prisma.ResourceUncheckedUpdateManyWithoutAuthorNestedInput;
    portfolioProjects?: Prisma.PortfolioProjectUncheckedUpdateManyWithoutUserNestedInput;
    aiConversations?: Prisma.AIConversationUncheckedUpdateManyWithoutUserNestedInput;
};
export type UserUpsertWithoutProductReviewsReceivedInput = {
    update: Prisma.XOR<Prisma.UserUpdateWithoutProductReviewsReceivedInput, Prisma.UserUncheckedUpdateWithoutProductReviewsReceivedInput>;
    create: Prisma.XOR<Prisma.UserCreateWithoutProductReviewsReceivedInput, Prisma.UserUncheckedCreateWithoutProductReviewsReceivedInput>;
    where?: Prisma.UserWhereInput;
};
export type UserUpdateToOneWithWhereWithoutProductReviewsReceivedInput = {
    where?: Prisma.UserWhereInput;
    data: Prisma.XOR<Prisma.UserUpdateWithoutProductReviewsReceivedInput, Prisma.UserUncheckedUpdateWithoutProductReviewsReceivedInput>;
};
export type UserUpdateWithoutProductReviewsReceivedInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    username?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    emailVerified?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    image?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    coverImage?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    bio?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    location?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    skills?: Prisma.UserUpdateskillsInput | string[];
    languages?: Prisma.UserUpdatelanguagesInput | string[];
    timezone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    website?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    github?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    linkedin?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    role?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    verificationStatus?: Prisma.StringFieldUpdateOperationsInput | string;
    profileCompletion?: Prisma.IntFieldUpdateOperationsInput | number;
    preferredCurrency?: Prisma.StringFieldUpdateOperationsInput | string;
    stripeAccountId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    stripeOnboardingDone?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    lastLoginAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    accounts?: Prisma.AccountUpdateManyWithoutUserNestedInput;
    sessions?: Prisma.SessionUpdateManyWithoutUserNestedInput;
    profile?: Prisma.ProfileUpdateOneWithoutUserNestedInput;
    freelancerProfile?: Prisma.FreelancerProfileUpdateOneWithoutUserNestedInput;
    buyerProfile?: Prisma.BuyerProfileUpdateOneWithoutUserNestedInput;
    portfolioItems?: Prisma.PortfolioUpdateManyWithoutUserNestedInput;
    services?: Prisma.ServiceUpdateManyWithoutUserNestedInput;
    ordersAsBuyer?: Prisma.OrderUpdateManyWithoutBuyerNestedInput;
    ordersAsFreelancer?: Prisma.OrderUpdateManyWithoutFreelancerNestedInput;
    reviewsWritten?: Prisma.ReviewUpdateManyWithoutReviewerNestedInput;
    reviewsReceived?: Prisma.ReviewUpdateManyWithoutRevieweeNestedInput;
    favorites?: Prisma.FavoriteUpdateManyWithoutUserNestedInput;
    cart?: Prisma.CartUpdateOneWithoutUserNestedInput;
    conversationParts?: Prisma.ConversationParticipantUpdateManyWithoutUserNestedInput;
    messages?: Prisma.MessageUpdateManyWithoutSenderNestedInput;
    notifications?: Prisma.NotificationUpdateManyWithoutUserNestedInput;
    payouts?: Prisma.PayoutUpdateManyWithoutFreelancerNestedInput;
    disputes?: Prisma.DisputeUpdateManyWithoutOpenerNestedInput;
    reports?: Prisma.ReportUpdateManyWithoutReporterNestedInput;
    achievements?: Prisma.UserAchievementUpdateManyWithoutUserNestedInput;
    xp?: Prisma.UserXPUpdateOneWithoutUserNestedInput;
    searchHistory?: Prisma.SearchHistoryUpdateManyWithoutUserNestedInput;
    userRoles?: Prisma.UserRoleUpdateManyWithoutUserNestedInput;
    companiesOwned?: Prisma.CompanyUpdateManyWithoutOwnerNestedInput;
    companyEmployees?: Prisma.EmployeeUpdateManyWithoutUserNestedInput;
    jobsPosted?: Prisma.JobUpdateManyWithoutPostedByNestedInput;
    resumes?: Prisma.ResumeUpdateManyWithoutUserNestedInput;
    jobApplications?: Prisma.JobApplicationUpdateManyWithoutApplicantNestedInput;
    products?: Prisma.ProductUpdateManyWithoutSellerNestedInput;
    productReviewsWritten?: Prisma.ProductReviewUpdateManyWithoutReviewerNestedInput;
    booksAuthored?: Prisma.BookUpdateManyWithoutAuthorUserNestedInput;
    bookPurchases?: Prisma.BookPurchaseUpdateManyWithoutUserNestedInput;
    bookReviews?: Prisma.BookReviewUpdateManyWithoutUserNestedInput;
    resourcesCreated?: Prisma.ResourceUpdateManyWithoutAuthorNestedInput;
    portfolioProjects?: Prisma.PortfolioProjectUpdateManyWithoutUserNestedInput;
    aiConversations?: Prisma.AIConversationUpdateManyWithoutUserNestedInput;
};
export type UserUncheckedUpdateWithoutProductReviewsReceivedInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    username?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    emailVerified?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    image?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    coverImage?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    bio?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    location?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    skills?: Prisma.UserUpdateskillsInput | string[];
    languages?: Prisma.UserUpdatelanguagesInput | string[];
    timezone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    website?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    github?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    linkedin?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    role?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    verificationStatus?: Prisma.StringFieldUpdateOperationsInput | string;
    profileCompletion?: Prisma.IntFieldUpdateOperationsInput | number;
    preferredCurrency?: Prisma.StringFieldUpdateOperationsInput | string;
    stripeAccountId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    stripeOnboardingDone?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    lastLoginAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    accounts?: Prisma.AccountUncheckedUpdateManyWithoutUserNestedInput;
    sessions?: Prisma.SessionUncheckedUpdateManyWithoutUserNestedInput;
    profile?: Prisma.ProfileUncheckedUpdateOneWithoutUserNestedInput;
    freelancerProfile?: Prisma.FreelancerProfileUncheckedUpdateOneWithoutUserNestedInput;
    buyerProfile?: Prisma.BuyerProfileUncheckedUpdateOneWithoutUserNestedInput;
    portfolioItems?: Prisma.PortfolioUncheckedUpdateManyWithoutUserNestedInput;
    services?: Prisma.ServiceUncheckedUpdateManyWithoutUserNestedInput;
    ordersAsBuyer?: Prisma.OrderUncheckedUpdateManyWithoutBuyerNestedInput;
    ordersAsFreelancer?: Prisma.OrderUncheckedUpdateManyWithoutFreelancerNestedInput;
    reviewsWritten?: Prisma.ReviewUncheckedUpdateManyWithoutReviewerNestedInput;
    reviewsReceived?: Prisma.ReviewUncheckedUpdateManyWithoutRevieweeNestedInput;
    favorites?: Prisma.FavoriteUncheckedUpdateManyWithoutUserNestedInput;
    cart?: Prisma.CartUncheckedUpdateOneWithoutUserNestedInput;
    conversationParts?: Prisma.ConversationParticipantUncheckedUpdateManyWithoutUserNestedInput;
    messages?: Prisma.MessageUncheckedUpdateManyWithoutSenderNestedInput;
    notifications?: Prisma.NotificationUncheckedUpdateManyWithoutUserNestedInput;
    payouts?: Prisma.PayoutUncheckedUpdateManyWithoutFreelancerNestedInput;
    disputes?: Prisma.DisputeUncheckedUpdateManyWithoutOpenerNestedInput;
    reports?: Prisma.ReportUncheckedUpdateManyWithoutReporterNestedInput;
    achievements?: Prisma.UserAchievementUncheckedUpdateManyWithoutUserNestedInput;
    xp?: Prisma.UserXPUncheckedUpdateOneWithoutUserNestedInput;
    searchHistory?: Prisma.SearchHistoryUncheckedUpdateManyWithoutUserNestedInput;
    userRoles?: Prisma.UserRoleUncheckedUpdateManyWithoutUserNestedInput;
    companiesOwned?: Prisma.CompanyUncheckedUpdateManyWithoutOwnerNestedInput;
    companyEmployees?: Prisma.EmployeeUncheckedUpdateManyWithoutUserNestedInput;
    jobsPosted?: Prisma.JobUncheckedUpdateManyWithoutPostedByNestedInput;
    resumes?: Prisma.ResumeUncheckedUpdateManyWithoutUserNestedInput;
    jobApplications?: Prisma.JobApplicationUncheckedUpdateManyWithoutApplicantNestedInput;
    products?: Prisma.ProductUncheckedUpdateManyWithoutSellerNestedInput;
    productReviewsWritten?: Prisma.ProductReviewUncheckedUpdateManyWithoutReviewerNestedInput;
    booksAuthored?: Prisma.BookUncheckedUpdateManyWithoutAuthorUserNestedInput;
    bookPurchases?: Prisma.BookPurchaseUncheckedUpdateManyWithoutUserNestedInput;
    bookReviews?: Prisma.BookReviewUncheckedUpdateManyWithoutUserNestedInput;
    resourcesCreated?: Prisma.ResourceUncheckedUpdateManyWithoutAuthorNestedInput;
    portfolioProjects?: Prisma.PortfolioProjectUncheckedUpdateManyWithoutUserNestedInput;
    aiConversations?: Prisma.AIConversationUncheckedUpdateManyWithoutUserNestedInput;
};
export type UserCreateWithoutCompaniesOwnedInput = {
    id?: string;
    name: string;
    username?: string | null;
    email: string;
    emailVerified?: boolean;
    image?: string | null;
    coverImage?: string | null;
    bio?: string | null;
    location?: string | null;
    skills?: Prisma.UserCreateskillsInput | string[];
    languages?: Prisma.UserCreatelanguagesInput | string[];
    timezone?: string | null;
    website?: string | null;
    github?: string | null;
    linkedin?: string | null;
    role?: string;
    status?: string;
    verificationStatus?: string;
    profileCompletion?: number;
    preferredCurrency?: string;
    stripeAccountId?: string | null;
    stripeOnboardingDone?: boolean;
    lastLoginAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    accounts?: Prisma.AccountCreateNestedManyWithoutUserInput;
    sessions?: Prisma.SessionCreateNestedManyWithoutUserInput;
    profile?: Prisma.ProfileCreateNestedOneWithoutUserInput;
    freelancerProfile?: Prisma.FreelancerProfileCreateNestedOneWithoutUserInput;
    buyerProfile?: Prisma.BuyerProfileCreateNestedOneWithoutUserInput;
    portfolioItems?: Prisma.PortfolioCreateNestedManyWithoutUserInput;
    services?: Prisma.ServiceCreateNestedManyWithoutUserInput;
    ordersAsBuyer?: Prisma.OrderCreateNestedManyWithoutBuyerInput;
    ordersAsFreelancer?: Prisma.OrderCreateNestedManyWithoutFreelancerInput;
    reviewsWritten?: Prisma.ReviewCreateNestedManyWithoutReviewerInput;
    reviewsReceived?: Prisma.ReviewCreateNestedManyWithoutRevieweeInput;
    favorites?: Prisma.FavoriteCreateNestedManyWithoutUserInput;
    cart?: Prisma.CartCreateNestedOneWithoutUserInput;
    conversationParts?: Prisma.ConversationParticipantCreateNestedManyWithoutUserInput;
    messages?: Prisma.MessageCreateNestedManyWithoutSenderInput;
    notifications?: Prisma.NotificationCreateNestedManyWithoutUserInput;
    payouts?: Prisma.PayoutCreateNestedManyWithoutFreelancerInput;
    disputes?: Prisma.DisputeCreateNestedManyWithoutOpenerInput;
    reports?: Prisma.ReportCreateNestedManyWithoutReporterInput;
    achievements?: Prisma.UserAchievementCreateNestedManyWithoutUserInput;
    xp?: Prisma.UserXPCreateNestedOneWithoutUserInput;
    searchHistory?: Prisma.SearchHistoryCreateNestedManyWithoutUserInput;
    userRoles?: Prisma.UserRoleCreateNestedManyWithoutUserInput;
    companyEmployees?: Prisma.EmployeeCreateNestedManyWithoutUserInput;
    jobsPosted?: Prisma.JobCreateNestedManyWithoutPostedByInput;
    resumes?: Prisma.ResumeCreateNestedManyWithoutUserInput;
    jobApplications?: Prisma.JobApplicationCreateNestedManyWithoutApplicantInput;
    products?: Prisma.ProductCreateNestedManyWithoutSellerInput;
    productReviewsWritten?: Prisma.ProductReviewCreateNestedManyWithoutReviewerInput;
    productReviewsReceived?: Prisma.ProductReviewCreateNestedManyWithoutRevieweeInput;
    booksAuthored?: Prisma.BookCreateNestedManyWithoutAuthorUserInput;
    bookPurchases?: Prisma.BookPurchaseCreateNestedManyWithoutUserInput;
    bookReviews?: Prisma.BookReviewCreateNestedManyWithoutUserInput;
    resourcesCreated?: Prisma.ResourceCreateNestedManyWithoutAuthorInput;
    portfolioProjects?: Prisma.PortfolioProjectCreateNestedManyWithoutUserInput;
    aiConversations?: Prisma.AIConversationCreateNestedManyWithoutUserInput;
};
export type UserUncheckedCreateWithoutCompaniesOwnedInput = {
    id?: string;
    name: string;
    username?: string | null;
    email: string;
    emailVerified?: boolean;
    image?: string | null;
    coverImage?: string | null;
    bio?: string | null;
    location?: string | null;
    skills?: Prisma.UserCreateskillsInput | string[];
    languages?: Prisma.UserCreatelanguagesInput | string[];
    timezone?: string | null;
    website?: string | null;
    github?: string | null;
    linkedin?: string | null;
    role?: string;
    status?: string;
    verificationStatus?: string;
    profileCompletion?: number;
    preferredCurrency?: string;
    stripeAccountId?: string | null;
    stripeOnboardingDone?: boolean;
    lastLoginAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    accounts?: Prisma.AccountUncheckedCreateNestedManyWithoutUserInput;
    sessions?: Prisma.SessionUncheckedCreateNestedManyWithoutUserInput;
    profile?: Prisma.ProfileUncheckedCreateNestedOneWithoutUserInput;
    freelancerProfile?: Prisma.FreelancerProfileUncheckedCreateNestedOneWithoutUserInput;
    buyerProfile?: Prisma.BuyerProfileUncheckedCreateNestedOneWithoutUserInput;
    portfolioItems?: Prisma.PortfolioUncheckedCreateNestedManyWithoutUserInput;
    services?: Prisma.ServiceUncheckedCreateNestedManyWithoutUserInput;
    ordersAsBuyer?: Prisma.OrderUncheckedCreateNestedManyWithoutBuyerInput;
    ordersAsFreelancer?: Prisma.OrderUncheckedCreateNestedManyWithoutFreelancerInput;
    reviewsWritten?: Prisma.ReviewUncheckedCreateNestedManyWithoutReviewerInput;
    reviewsReceived?: Prisma.ReviewUncheckedCreateNestedManyWithoutRevieweeInput;
    favorites?: Prisma.FavoriteUncheckedCreateNestedManyWithoutUserInput;
    cart?: Prisma.CartUncheckedCreateNestedOneWithoutUserInput;
    conversationParts?: Prisma.ConversationParticipantUncheckedCreateNestedManyWithoutUserInput;
    messages?: Prisma.MessageUncheckedCreateNestedManyWithoutSenderInput;
    notifications?: Prisma.NotificationUncheckedCreateNestedManyWithoutUserInput;
    payouts?: Prisma.PayoutUncheckedCreateNestedManyWithoutFreelancerInput;
    disputes?: Prisma.DisputeUncheckedCreateNestedManyWithoutOpenerInput;
    reports?: Prisma.ReportUncheckedCreateNestedManyWithoutReporterInput;
    achievements?: Prisma.UserAchievementUncheckedCreateNestedManyWithoutUserInput;
    xp?: Prisma.UserXPUncheckedCreateNestedOneWithoutUserInput;
    searchHistory?: Prisma.SearchHistoryUncheckedCreateNestedManyWithoutUserInput;
    userRoles?: Prisma.UserRoleUncheckedCreateNestedManyWithoutUserInput;
    companyEmployees?: Prisma.EmployeeUncheckedCreateNestedManyWithoutUserInput;
    jobsPosted?: Prisma.JobUncheckedCreateNestedManyWithoutPostedByInput;
    resumes?: Prisma.ResumeUncheckedCreateNestedManyWithoutUserInput;
    jobApplications?: Prisma.JobApplicationUncheckedCreateNestedManyWithoutApplicantInput;
    products?: Prisma.ProductUncheckedCreateNestedManyWithoutSellerInput;
    productReviewsWritten?: Prisma.ProductReviewUncheckedCreateNestedManyWithoutReviewerInput;
    productReviewsReceived?: Prisma.ProductReviewUncheckedCreateNestedManyWithoutRevieweeInput;
    booksAuthored?: Prisma.BookUncheckedCreateNestedManyWithoutAuthorUserInput;
    bookPurchases?: Prisma.BookPurchaseUncheckedCreateNestedManyWithoutUserInput;
    bookReviews?: Prisma.BookReviewUncheckedCreateNestedManyWithoutUserInput;
    resourcesCreated?: Prisma.ResourceUncheckedCreateNestedManyWithoutAuthorInput;
    portfolioProjects?: Prisma.PortfolioProjectUncheckedCreateNestedManyWithoutUserInput;
    aiConversations?: Prisma.AIConversationUncheckedCreateNestedManyWithoutUserInput;
};
export type UserCreateOrConnectWithoutCompaniesOwnedInput = {
    where: Prisma.UserWhereUniqueInput;
    create: Prisma.XOR<Prisma.UserCreateWithoutCompaniesOwnedInput, Prisma.UserUncheckedCreateWithoutCompaniesOwnedInput>;
};
export type UserUpsertWithoutCompaniesOwnedInput = {
    update: Prisma.XOR<Prisma.UserUpdateWithoutCompaniesOwnedInput, Prisma.UserUncheckedUpdateWithoutCompaniesOwnedInput>;
    create: Prisma.XOR<Prisma.UserCreateWithoutCompaniesOwnedInput, Prisma.UserUncheckedCreateWithoutCompaniesOwnedInput>;
    where?: Prisma.UserWhereInput;
};
export type UserUpdateToOneWithWhereWithoutCompaniesOwnedInput = {
    where?: Prisma.UserWhereInput;
    data: Prisma.XOR<Prisma.UserUpdateWithoutCompaniesOwnedInput, Prisma.UserUncheckedUpdateWithoutCompaniesOwnedInput>;
};
export type UserUpdateWithoutCompaniesOwnedInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    username?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    emailVerified?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    image?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    coverImage?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    bio?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    location?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    skills?: Prisma.UserUpdateskillsInput | string[];
    languages?: Prisma.UserUpdatelanguagesInput | string[];
    timezone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    website?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    github?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    linkedin?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    role?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    verificationStatus?: Prisma.StringFieldUpdateOperationsInput | string;
    profileCompletion?: Prisma.IntFieldUpdateOperationsInput | number;
    preferredCurrency?: Prisma.StringFieldUpdateOperationsInput | string;
    stripeAccountId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    stripeOnboardingDone?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    lastLoginAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    accounts?: Prisma.AccountUpdateManyWithoutUserNestedInput;
    sessions?: Prisma.SessionUpdateManyWithoutUserNestedInput;
    profile?: Prisma.ProfileUpdateOneWithoutUserNestedInput;
    freelancerProfile?: Prisma.FreelancerProfileUpdateOneWithoutUserNestedInput;
    buyerProfile?: Prisma.BuyerProfileUpdateOneWithoutUserNestedInput;
    portfolioItems?: Prisma.PortfolioUpdateManyWithoutUserNestedInput;
    services?: Prisma.ServiceUpdateManyWithoutUserNestedInput;
    ordersAsBuyer?: Prisma.OrderUpdateManyWithoutBuyerNestedInput;
    ordersAsFreelancer?: Prisma.OrderUpdateManyWithoutFreelancerNestedInput;
    reviewsWritten?: Prisma.ReviewUpdateManyWithoutReviewerNestedInput;
    reviewsReceived?: Prisma.ReviewUpdateManyWithoutRevieweeNestedInput;
    favorites?: Prisma.FavoriteUpdateManyWithoutUserNestedInput;
    cart?: Prisma.CartUpdateOneWithoutUserNestedInput;
    conversationParts?: Prisma.ConversationParticipantUpdateManyWithoutUserNestedInput;
    messages?: Prisma.MessageUpdateManyWithoutSenderNestedInput;
    notifications?: Prisma.NotificationUpdateManyWithoutUserNestedInput;
    payouts?: Prisma.PayoutUpdateManyWithoutFreelancerNestedInput;
    disputes?: Prisma.DisputeUpdateManyWithoutOpenerNestedInput;
    reports?: Prisma.ReportUpdateManyWithoutReporterNestedInput;
    achievements?: Prisma.UserAchievementUpdateManyWithoutUserNestedInput;
    xp?: Prisma.UserXPUpdateOneWithoutUserNestedInput;
    searchHistory?: Prisma.SearchHistoryUpdateManyWithoutUserNestedInput;
    userRoles?: Prisma.UserRoleUpdateManyWithoutUserNestedInput;
    companyEmployees?: Prisma.EmployeeUpdateManyWithoutUserNestedInput;
    jobsPosted?: Prisma.JobUpdateManyWithoutPostedByNestedInput;
    resumes?: Prisma.ResumeUpdateManyWithoutUserNestedInput;
    jobApplications?: Prisma.JobApplicationUpdateManyWithoutApplicantNestedInput;
    products?: Prisma.ProductUpdateManyWithoutSellerNestedInput;
    productReviewsWritten?: Prisma.ProductReviewUpdateManyWithoutReviewerNestedInput;
    productReviewsReceived?: Prisma.ProductReviewUpdateManyWithoutRevieweeNestedInput;
    booksAuthored?: Prisma.BookUpdateManyWithoutAuthorUserNestedInput;
    bookPurchases?: Prisma.BookPurchaseUpdateManyWithoutUserNestedInput;
    bookReviews?: Prisma.BookReviewUpdateManyWithoutUserNestedInput;
    resourcesCreated?: Prisma.ResourceUpdateManyWithoutAuthorNestedInput;
    portfolioProjects?: Prisma.PortfolioProjectUpdateManyWithoutUserNestedInput;
    aiConversations?: Prisma.AIConversationUpdateManyWithoutUserNestedInput;
};
export type UserUncheckedUpdateWithoutCompaniesOwnedInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    username?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    emailVerified?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    image?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    coverImage?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    bio?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    location?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    skills?: Prisma.UserUpdateskillsInput | string[];
    languages?: Prisma.UserUpdatelanguagesInput | string[];
    timezone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    website?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    github?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    linkedin?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    role?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    verificationStatus?: Prisma.StringFieldUpdateOperationsInput | string;
    profileCompletion?: Prisma.IntFieldUpdateOperationsInput | number;
    preferredCurrency?: Prisma.StringFieldUpdateOperationsInput | string;
    stripeAccountId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    stripeOnboardingDone?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    lastLoginAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    accounts?: Prisma.AccountUncheckedUpdateManyWithoutUserNestedInput;
    sessions?: Prisma.SessionUncheckedUpdateManyWithoutUserNestedInput;
    profile?: Prisma.ProfileUncheckedUpdateOneWithoutUserNestedInput;
    freelancerProfile?: Prisma.FreelancerProfileUncheckedUpdateOneWithoutUserNestedInput;
    buyerProfile?: Prisma.BuyerProfileUncheckedUpdateOneWithoutUserNestedInput;
    portfolioItems?: Prisma.PortfolioUncheckedUpdateManyWithoutUserNestedInput;
    services?: Prisma.ServiceUncheckedUpdateManyWithoutUserNestedInput;
    ordersAsBuyer?: Prisma.OrderUncheckedUpdateManyWithoutBuyerNestedInput;
    ordersAsFreelancer?: Prisma.OrderUncheckedUpdateManyWithoutFreelancerNestedInput;
    reviewsWritten?: Prisma.ReviewUncheckedUpdateManyWithoutReviewerNestedInput;
    reviewsReceived?: Prisma.ReviewUncheckedUpdateManyWithoutRevieweeNestedInput;
    favorites?: Prisma.FavoriteUncheckedUpdateManyWithoutUserNestedInput;
    cart?: Prisma.CartUncheckedUpdateOneWithoutUserNestedInput;
    conversationParts?: Prisma.ConversationParticipantUncheckedUpdateManyWithoutUserNestedInput;
    messages?: Prisma.MessageUncheckedUpdateManyWithoutSenderNestedInput;
    notifications?: Prisma.NotificationUncheckedUpdateManyWithoutUserNestedInput;
    payouts?: Prisma.PayoutUncheckedUpdateManyWithoutFreelancerNestedInput;
    disputes?: Prisma.DisputeUncheckedUpdateManyWithoutOpenerNestedInput;
    reports?: Prisma.ReportUncheckedUpdateManyWithoutReporterNestedInput;
    achievements?: Prisma.UserAchievementUncheckedUpdateManyWithoutUserNestedInput;
    xp?: Prisma.UserXPUncheckedUpdateOneWithoutUserNestedInput;
    searchHistory?: Prisma.SearchHistoryUncheckedUpdateManyWithoutUserNestedInput;
    userRoles?: Prisma.UserRoleUncheckedUpdateManyWithoutUserNestedInput;
    companyEmployees?: Prisma.EmployeeUncheckedUpdateManyWithoutUserNestedInput;
    jobsPosted?: Prisma.JobUncheckedUpdateManyWithoutPostedByNestedInput;
    resumes?: Prisma.ResumeUncheckedUpdateManyWithoutUserNestedInput;
    jobApplications?: Prisma.JobApplicationUncheckedUpdateManyWithoutApplicantNestedInput;
    products?: Prisma.ProductUncheckedUpdateManyWithoutSellerNestedInput;
    productReviewsWritten?: Prisma.ProductReviewUncheckedUpdateManyWithoutReviewerNestedInput;
    productReviewsReceived?: Prisma.ProductReviewUncheckedUpdateManyWithoutRevieweeNestedInput;
    booksAuthored?: Prisma.BookUncheckedUpdateManyWithoutAuthorUserNestedInput;
    bookPurchases?: Prisma.BookPurchaseUncheckedUpdateManyWithoutUserNestedInput;
    bookReviews?: Prisma.BookReviewUncheckedUpdateManyWithoutUserNestedInput;
    resourcesCreated?: Prisma.ResourceUncheckedUpdateManyWithoutAuthorNestedInput;
    portfolioProjects?: Prisma.PortfolioProjectUncheckedUpdateManyWithoutUserNestedInput;
    aiConversations?: Prisma.AIConversationUncheckedUpdateManyWithoutUserNestedInput;
};
export type UserCreateWithoutJobsPostedInput = {
    id?: string;
    name: string;
    username?: string | null;
    email: string;
    emailVerified?: boolean;
    image?: string | null;
    coverImage?: string | null;
    bio?: string | null;
    location?: string | null;
    skills?: Prisma.UserCreateskillsInput | string[];
    languages?: Prisma.UserCreatelanguagesInput | string[];
    timezone?: string | null;
    website?: string | null;
    github?: string | null;
    linkedin?: string | null;
    role?: string;
    status?: string;
    verificationStatus?: string;
    profileCompletion?: number;
    preferredCurrency?: string;
    stripeAccountId?: string | null;
    stripeOnboardingDone?: boolean;
    lastLoginAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    accounts?: Prisma.AccountCreateNestedManyWithoutUserInput;
    sessions?: Prisma.SessionCreateNestedManyWithoutUserInput;
    profile?: Prisma.ProfileCreateNestedOneWithoutUserInput;
    freelancerProfile?: Prisma.FreelancerProfileCreateNestedOneWithoutUserInput;
    buyerProfile?: Prisma.BuyerProfileCreateNestedOneWithoutUserInput;
    portfolioItems?: Prisma.PortfolioCreateNestedManyWithoutUserInput;
    services?: Prisma.ServiceCreateNestedManyWithoutUserInput;
    ordersAsBuyer?: Prisma.OrderCreateNestedManyWithoutBuyerInput;
    ordersAsFreelancer?: Prisma.OrderCreateNestedManyWithoutFreelancerInput;
    reviewsWritten?: Prisma.ReviewCreateNestedManyWithoutReviewerInput;
    reviewsReceived?: Prisma.ReviewCreateNestedManyWithoutRevieweeInput;
    favorites?: Prisma.FavoriteCreateNestedManyWithoutUserInput;
    cart?: Prisma.CartCreateNestedOneWithoutUserInput;
    conversationParts?: Prisma.ConversationParticipantCreateNestedManyWithoutUserInput;
    messages?: Prisma.MessageCreateNestedManyWithoutSenderInput;
    notifications?: Prisma.NotificationCreateNestedManyWithoutUserInput;
    payouts?: Prisma.PayoutCreateNestedManyWithoutFreelancerInput;
    disputes?: Prisma.DisputeCreateNestedManyWithoutOpenerInput;
    reports?: Prisma.ReportCreateNestedManyWithoutReporterInput;
    achievements?: Prisma.UserAchievementCreateNestedManyWithoutUserInput;
    xp?: Prisma.UserXPCreateNestedOneWithoutUserInput;
    searchHistory?: Prisma.SearchHistoryCreateNestedManyWithoutUserInput;
    userRoles?: Prisma.UserRoleCreateNestedManyWithoutUserInput;
    companiesOwned?: Prisma.CompanyCreateNestedManyWithoutOwnerInput;
    companyEmployees?: Prisma.EmployeeCreateNestedManyWithoutUserInput;
    resumes?: Prisma.ResumeCreateNestedManyWithoutUserInput;
    jobApplications?: Prisma.JobApplicationCreateNestedManyWithoutApplicantInput;
    products?: Prisma.ProductCreateNestedManyWithoutSellerInput;
    productReviewsWritten?: Prisma.ProductReviewCreateNestedManyWithoutReviewerInput;
    productReviewsReceived?: Prisma.ProductReviewCreateNestedManyWithoutRevieweeInput;
    booksAuthored?: Prisma.BookCreateNestedManyWithoutAuthorUserInput;
    bookPurchases?: Prisma.BookPurchaseCreateNestedManyWithoutUserInput;
    bookReviews?: Prisma.BookReviewCreateNestedManyWithoutUserInput;
    resourcesCreated?: Prisma.ResourceCreateNestedManyWithoutAuthorInput;
    portfolioProjects?: Prisma.PortfolioProjectCreateNestedManyWithoutUserInput;
    aiConversations?: Prisma.AIConversationCreateNestedManyWithoutUserInput;
};
export type UserUncheckedCreateWithoutJobsPostedInput = {
    id?: string;
    name: string;
    username?: string | null;
    email: string;
    emailVerified?: boolean;
    image?: string | null;
    coverImage?: string | null;
    bio?: string | null;
    location?: string | null;
    skills?: Prisma.UserCreateskillsInput | string[];
    languages?: Prisma.UserCreatelanguagesInput | string[];
    timezone?: string | null;
    website?: string | null;
    github?: string | null;
    linkedin?: string | null;
    role?: string;
    status?: string;
    verificationStatus?: string;
    profileCompletion?: number;
    preferredCurrency?: string;
    stripeAccountId?: string | null;
    stripeOnboardingDone?: boolean;
    lastLoginAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    accounts?: Prisma.AccountUncheckedCreateNestedManyWithoutUserInput;
    sessions?: Prisma.SessionUncheckedCreateNestedManyWithoutUserInput;
    profile?: Prisma.ProfileUncheckedCreateNestedOneWithoutUserInput;
    freelancerProfile?: Prisma.FreelancerProfileUncheckedCreateNestedOneWithoutUserInput;
    buyerProfile?: Prisma.BuyerProfileUncheckedCreateNestedOneWithoutUserInput;
    portfolioItems?: Prisma.PortfolioUncheckedCreateNestedManyWithoutUserInput;
    services?: Prisma.ServiceUncheckedCreateNestedManyWithoutUserInput;
    ordersAsBuyer?: Prisma.OrderUncheckedCreateNestedManyWithoutBuyerInput;
    ordersAsFreelancer?: Prisma.OrderUncheckedCreateNestedManyWithoutFreelancerInput;
    reviewsWritten?: Prisma.ReviewUncheckedCreateNestedManyWithoutReviewerInput;
    reviewsReceived?: Prisma.ReviewUncheckedCreateNestedManyWithoutRevieweeInput;
    favorites?: Prisma.FavoriteUncheckedCreateNestedManyWithoutUserInput;
    cart?: Prisma.CartUncheckedCreateNestedOneWithoutUserInput;
    conversationParts?: Prisma.ConversationParticipantUncheckedCreateNestedManyWithoutUserInput;
    messages?: Prisma.MessageUncheckedCreateNestedManyWithoutSenderInput;
    notifications?: Prisma.NotificationUncheckedCreateNestedManyWithoutUserInput;
    payouts?: Prisma.PayoutUncheckedCreateNestedManyWithoutFreelancerInput;
    disputes?: Prisma.DisputeUncheckedCreateNestedManyWithoutOpenerInput;
    reports?: Prisma.ReportUncheckedCreateNestedManyWithoutReporterInput;
    achievements?: Prisma.UserAchievementUncheckedCreateNestedManyWithoutUserInput;
    xp?: Prisma.UserXPUncheckedCreateNestedOneWithoutUserInput;
    searchHistory?: Prisma.SearchHistoryUncheckedCreateNestedManyWithoutUserInput;
    userRoles?: Prisma.UserRoleUncheckedCreateNestedManyWithoutUserInput;
    companiesOwned?: Prisma.CompanyUncheckedCreateNestedManyWithoutOwnerInput;
    companyEmployees?: Prisma.EmployeeUncheckedCreateNestedManyWithoutUserInput;
    resumes?: Prisma.ResumeUncheckedCreateNestedManyWithoutUserInput;
    jobApplications?: Prisma.JobApplicationUncheckedCreateNestedManyWithoutApplicantInput;
    products?: Prisma.ProductUncheckedCreateNestedManyWithoutSellerInput;
    productReviewsWritten?: Prisma.ProductReviewUncheckedCreateNestedManyWithoutReviewerInput;
    productReviewsReceived?: Prisma.ProductReviewUncheckedCreateNestedManyWithoutRevieweeInput;
    booksAuthored?: Prisma.BookUncheckedCreateNestedManyWithoutAuthorUserInput;
    bookPurchases?: Prisma.BookPurchaseUncheckedCreateNestedManyWithoutUserInput;
    bookReviews?: Prisma.BookReviewUncheckedCreateNestedManyWithoutUserInput;
    resourcesCreated?: Prisma.ResourceUncheckedCreateNestedManyWithoutAuthorInput;
    portfolioProjects?: Prisma.PortfolioProjectUncheckedCreateNestedManyWithoutUserInput;
    aiConversations?: Prisma.AIConversationUncheckedCreateNestedManyWithoutUserInput;
};
export type UserCreateOrConnectWithoutJobsPostedInput = {
    where: Prisma.UserWhereUniqueInput;
    create: Prisma.XOR<Prisma.UserCreateWithoutJobsPostedInput, Prisma.UserUncheckedCreateWithoutJobsPostedInput>;
};
export type UserUpsertWithoutJobsPostedInput = {
    update: Prisma.XOR<Prisma.UserUpdateWithoutJobsPostedInput, Prisma.UserUncheckedUpdateWithoutJobsPostedInput>;
    create: Prisma.XOR<Prisma.UserCreateWithoutJobsPostedInput, Prisma.UserUncheckedCreateWithoutJobsPostedInput>;
    where?: Prisma.UserWhereInput;
};
export type UserUpdateToOneWithWhereWithoutJobsPostedInput = {
    where?: Prisma.UserWhereInput;
    data: Prisma.XOR<Prisma.UserUpdateWithoutJobsPostedInput, Prisma.UserUncheckedUpdateWithoutJobsPostedInput>;
};
export type UserUpdateWithoutJobsPostedInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    username?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    emailVerified?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    image?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    coverImage?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    bio?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    location?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    skills?: Prisma.UserUpdateskillsInput | string[];
    languages?: Prisma.UserUpdatelanguagesInput | string[];
    timezone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    website?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    github?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    linkedin?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    role?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    verificationStatus?: Prisma.StringFieldUpdateOperationsInput | string;
    profileCompletion?: Prisma.IntFieldUpdateOperationsInput | number;
    preferredCurrency?: Prisma.StringFieldUpdateOperationsInput | string;
    stripeAccountId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    stripeOnboardingDone?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    lastLoginAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    accounts?: Prisma.AccountUpdateManyWithoutUserNestedInput;
    sessions?: Prisma.SessionUpdateManyWithoutUserNestedInput;
    profile?: Prisma.ProfileUpdateOneWithoutUserNestedInput;
    freelancerProfile?: Prisma.FreelancerProfileUpdateOneWithoutUserNestedInput;
    buyerProfile?: Prisma.BuyerProfileUpdateOneWithoutUserNestedInput;
    portfolioItems?: Prisma.PortfolioUpdateManyWithoutUserNestedInput;
    services?: Prisma.ServiceUpdateManyWithoutUserNestedInput;
    ordersAsBuyer?: Prisma.OrderUpdateManyWithoutBuyerNestedInput;
    ordersAsFreelancer?: Prisma.OrderUpdateManyWithoutFreelancerNestedInput;
    reviewsWritten?: Prisma.ReviewUpdateManyWithoutReviewerNestedInput;
    reviewsReceived?: Prisma.ReviewUpdateManyWithoutRevieweeNestedInput;
    favorites?: Prisma.FavoriteUpdateManyWithoutUserNestedInput;
    cart?: Prisma.CartUpdateOneWithoutUserNestedInput;
    conversationParts?: Prisma.ConversationParticipantUpdateManyWithoutUserNestedInput;
    messages?: Prisma.MessageUpdateManyWithoutSenderNestedInput;
    notifications?: Prisma.NotificationUpdateManyWithoutUserNestedInput;
    payouts?: Prisma.PayoutUpdateManyWithoutFreelancerNestedInput;
    disputes?: Prisma.DisputeUpdateManyWithoutOpenerNestedInput;
    reports?: Prisma.ReportUpdateManyWithoutReporterNestedInput;
    achievements?: Prisma.UserAchievementUpdateManyWithoutUserNestedInput;
    xp?: Prisma.UserXPUpdateOneWithoutUserNestedInput;
    searchHistory?: Prisma.SearchHistoryUpdateManyWithoutUserNestedInput;
    userRoles?: Prisma.UserRoleUpdateManyWithoutUserNestedInput;
    companiesOwned?: Prisma.CompanyUpdateManyWithoutOwnerNestedInput;
    companyEmployees?: Prisma.EmployeeUpdateManyWithoutUserNestedInput;
    resumes?: Prisma.ResumeUpdateManyWithoutUserNestedInput;
    jobApplications?: Prisma.JobApplicationUpdateManyWithoutApplicantNestedInput;
    products?: Prisma.ProductUpdateManyWithoutSellerNestedInput;
    productReviewsWritten?: Prisma.ProductReviewUpdateManyWithoutReviewerNestedInput;
    productReviewsReceived?: Prisma.ProductReviewUpdateManyWithoutRevieweeNestedInput;
    booksAuthored?: Prisma.BookUpdateManyWithoutAuthorUserNestedInput;
    bookPurchases?: Prisma.BookPurchaseUpdateManyWithoutUserNestedInput;
    bookReviews?: Prisma.BookReviewUpdateManyWithoutUserNestedInput;
    resourcesCreated?: Prisma.ResourceUpdateManyWithoutAuthorNestedInput;
    portfolioProjects?: Prisma.PortfolioProjectUpdateManyWithoutUserNestedInput;
    aiConversations?: Prisma.AIConversationUpdateManyWithoutUserNestedInput;
};
export type UserUncheckedUpdateWithoutJobsPostedInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    username?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    emailVerified?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    image?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    coverImage?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    bio?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    location?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    skills?: Prisma.UserUpdateskillsInput | string[];
    languages?: Prisma.UserUpdatelanguagesInput | string[];
    timezone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    website?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    github?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    linkedin?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    role?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    verificationStatus?: Prisma.StringFieldUpdateOperationsInput | string;
    profileCompletion?: Prisma.IntFieldUpdateOperationsInput | number;
    preferredCurrency?: Prisma.StringFieldUpdateOperationsInput | string;
    stripeAccountId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    stripeOnboardingDone?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    lastLoginAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    accounts?: Prisma.AccountUncheckedUpdateManyWithoutUserNestedInput;
    sessions?: Prisma.SessionUncheckedUpdateManyWithoutUserNestedInput;
    profile?: Prisma.ProfileUncheckedUpdateOneWithoutUserNestedInput;
    freelancerProfile?: Prisma.FreelancerProfileUncheckedUpdateOneWithoutUserNestedInput;
    buyerProfile?: Prisma.BuyerProfileUncheckedUpdateOneWithoutUserNestedInput;
    portfolioItems?: Prisma.PortfolioUncheckedUpdateManyWithoutUserNestedInput;
    services?: Prisma.ServiceUncheckedUpdateManyWithoutUserNestedInput;
    ordersAsBuyer?: Prisma.OrderUncheckedUpdateManyWithoutBuyerNestedInput;
    ordersAsFreelancer?: Prisma.OrderUncheckedUpdateManyWithoutFreelancerNestedInput;
    reviewsWritten?: Prisma.ReviewUncheckedUpdateManyWithoutReviewerNestedInput;
    reviewsReceived?: Prisma.ReviewUncheckedUpdateManyWithoutRevieweeNestedInput;
    favorites?: Prisma.FavoriteUncheckedUpdateManyWithoutUserNestedInput;
    cart?: Prisma.CartUncheckedUpdateOneWithoutUserNestedInput;
    conversationParts?: Prisma.ConversationParticipantUncheckedUpdateManyWithoutUserNestedInput;
    messages?: Prisma.MessageUncheckedUpdateManyWithoutSenderNestedInput;
    notifications?: Prisma.NotificationUncheckedUpdateManyWithoutUserNestedInput;
    payouts?: Prisma.PayoutUncheckedUpdateManyWithoutFreelancerNestedInput;
    disputes?: Prisma.DisputeUncheckedUpdateManyWithoutOpenerNestedInput;
    reports?: Prisma.ReportUncheckedUpdateManyWithoutReporterNestedInput;
    achievements?: Prisma.UserAchievementUncheckedUpdateManyWithoutUserNestedInput;
    xp?: Prisma.UserXPUncheckedUpdateOneWithoutUserNestedInput;
    searchHistory?: Prisma.SearchHistoryUncheckedUpdateManyWithoutUserNestedInput;
    userRoles?: Prisma.UserRoleUncheckedUpdateManyWithoutUserNestedInput;
    companiesOwned?: Prisma.CompanyUncheckedUpdateManyWithoutOwnerNestedInput;
    companyEmployees?: Prisma.EmployeeUncheckedUpdateManyWithoutUserNestedInput;
    resumes?: Prisma.ResumeUncheckedUpdateManyWithoutUserNestedInput;
    jobApplications?: Prisma.JobApplicationUncheckedUpdateManyWithoutApplicantNestedInput;
    products?: Prisma.ProductUncheckedUpdateManyWithoutSellerNestedInput;
    productReviewsWritten?: Prisma.ProductReviewUncheckedUpdateManyWithoutReviewerNestedInput;
    productReviewsReceived?: Prisma.ProductReviewUncheckedUpdateManyWithoutRevieweeNestedInput;
    booksAuthored?: Prisma.BookUncheckedUpdateManyWithoutAuthorUserNestedInput;
    bookPurchases?: Prisma.BookPurchaseUncheckedUpdateManyWithoutUserNestedInput;
    bookReviews?: Prisma.BookReviewUncheckedUpdateManyWithoutUserNestedInput;
    resourcesCreated?: Prisma.ResourceUncheckedUpdateManyWithoutAuthorNestedInput;
    portfolioProjects?: Prisma.PortfolioProjectUncheckedUpdateManyWithoutUserNestedInput;
    aiConversations?: Prisma.AIConversationUncheckedUpdateManyWithoutUserNestedInput;
};
export type UserCreateWithoutJobApplicationsInput = {
    id?: string;
    name: string;
    username?: string | null;
    email: string;
    emailVerified?: boolean;
    image?: string | null;
    coverImage?: string | null;
    bio?: string | null;
    location?: string | null;
    skills?: Prisma.UserCreateskillsInput | string[];
    languages?: Prisma.UserCreatelanguagesInput | string[];
    timezone?: string | null;
    website?: string | null;
    github?: string | null;
    linkedin?: string | null;
    role?: string;
    status?: string;
    verificationStatus?: string;
    profileCompletion?: number;
    preferredCurrency?: string;
    stripeAccountId?: string | null;
    stripeOnboardingDone?: boolean;
    lastLoginAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    accounts?: Prisma.AccountCreateNestedManyWithoutUserInput;
    sessions?: Prisma.SessionCreateNestedManyWithoutUserInput;
    profile?: Prisma.ProfileCreateNestedOneWithoutUserInput;
    freelancerProfile?: Prisma.FreelancerProfileCreateNestedOneWithoutUserInput;
    buyerProfile?: Prisma.BuyerProfileCreateNestedOneWithoutUserInput;
    portfolioItems?: Prisma.PortfolioCreateNestedManyWithoutUserInput;
    services?: Prisma.ServiceCreateNestedManyWithoutUserInput;
    ordersAsBuyer?: Prisma.OrderCreateNestedManyWithoutBuyerInput;
    ordersAsFreelancer?: Prisma.OrderCreateNestedManyWithoutFreelancerInput;
    reviewsWritten?: Prisma.ReviewCreateNestedManyWithoutReviewerInput;
    reviewsReceived?: Prisma.ReviewCreateNestedManyWithoutRevieweeInput;
    favorites?: Prisma.FavoriteCreateNestedManyWithoutUserInput;
    cart?: Prisma.CartCreateNestedOneWithoutUserInput;
    conversationParts?: Prisma.ConversationParticipantCreateNestedManyWithoutUserInput;
    messages?: Prisma.MessageCreateNestedManyWithoutSenderInput;
    notifications?: Prisma.NotificationCreateNestedManyWithoutUserInput;
    payouts?: Prisma.PayoutCreateNestedManyWithoutFreelancerInput;
    disputes?: Prisma.DisputeCreateNestedManyWithoutOpenerInput;
    reports?: Prisma.ReportCreateNestedManyWithoutReporterInput;
    achievements?: Prisma.UserAchievementCreateNestedManyWithoutUserInput;
    xp?: Prisma.UserXPCreateNestedOneWithoutUserInput;
    searchHistory?: Prisma.SearchHistoryCreateNestedManyWithoutUserInput;
    userRoles?: Prisma.UserRoleCreateNestedManyWithoutUserInput;
    companiesOwned?: Prisma.CompanyCreateNestedManyWithoutOwnerInput;
    companyEmployees?: Prisma.EmployeeCreateNestedManyWithoutUserInput;
    jobsPosted?: Prisma.JobCreateNestedManyWithoutPostedByInput;
    resumes?: Prisma.ResumeCreateNestedManyWithoutUserInput;
    products?: Prisma.ProductCreateNestedManyWithoutSellerInput;
    productReviewsWritten?: Prisma.ProductReviewCreateNestedManyWithoutReviewerInput;
    productReviewsReceived?: Prisma.ProductReviewCreateNestedManyWithoutRevieweeInput;
    booksAuthored?: Prisma.BookCreateNestedManyWithoutAuthorUserInput;
    bookPurchases?: Prisma.BookPurchaseCreateNestedManyWithoutUserInput;
    bookReviews?: Prisma.BookReviewCreateNestedManyWithoutUserInput;
    resourcesCreated?: Prisma.ResourceCreateNestedManyWithoutAuthorInput;
    portfolioProjects?: Prisma.PortfolioProjectCreateNestedManyWithoutUserInput;
    aiConversations?: Prisma.AIConversationCreateNestedManyWithoutUserInput;
};
export type UserUncheckedCreateWithoutJobApplicationsInput = {
    id?: string;
    name: string;
    username?: string | null;
    email: string;
    emailVerified?: boolean;
    image?: string | null;
    coverImage?: string | null;
    bio?: string | null;
    location?: string | null;
    skills?: Prisma.UserCreateskillsInput | string[];
    languages?: Prisma.UserCreatelanguagesInput | string[];
    timezone?: string | null;
    website?: string | null;
    github?: string | null;
    linkedin?: string | null;
    role?: string;
    status?: string;
    verificationStatus?: string;
    profileCompletion?: number;
    preferredCurrency?: string;
    stripeAccountId?: string | null;
    stripeOnboardingDone?: boolean;
    lastLoginAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    accounts?: Prisma.AccountUncheckedCreateNestedManyWithoutUserInput;
    sessions?: Prisma.SessionUncheckedCreateNestedManyWithoutUserInput;
    profile?: Prisma.ProfileUncheckedCreateNestedOneWithoutUserInput;
    freelancerProfile?: Prisma.FreelancerProfileUncheckedCreateNestedOneWithoutUserInput;
    buyerProfile?: Prisma.BuyerProfileUncheckedCreateNestedOneWithoutUserInput;
    portfolioItems?: Prisma.PortfolioUncheckedCreateNestedManyWithoutUserInput;
    services?: Prisma.ServiceUncheckedCreateNestedManyWithoutUserInput;
    ordersAsBuyer?: Prisma.OrderUncheckedCreateNestedManyWithoutBuyerInput;
    ordersAsFreelancer?: Prisma.OrderUncheckedCreateNestedManyWithoutFreelancerInput;
    reviewsWritten?: Prisma.ReviewUncheckedCreateNestedManyWithoutReviewerInput;
    reviewsReceived?: Prisma.ReviewUncheckedCreateNestedManyWithoutRevieweeInput;
    favorites?: Prisma.FavoriteUncheckedCreateNestedManyWithoutUserInput;
    cart?: Prisma.CartUncheckedCreateNestedOneWithoutUserInput;
    conversationParts?: Prisma.ConversationParticipantUncheckedCreateNestedManyWithoutUserInput;
    messages?: Prisma.MessageUncheckedCreateNestedManyWithoutSenderInput;
    notifications?: Prisma.NotificationUncheckedCreateNestedManyWithoutUserInput;
    payouts?: Prisma.PayoutUncheckedCreateNestedManyWithoutFreelancerInput;
    disputes?: Prisma.DisputeUncheckedCreateNestedManyWithoutOpenerInput;
    reports?: Prisma.ReportUncheckedCreateNestedManyWithoutReporterInput;
    achievements?: Prisma.UserAchievementUncheckedCreateNestedManyWithoutUserInput;
    xp?: Prisma.UserXPUncheckedCreateNestedOneWithoutUserInput;
    searchHistory?: Prisma.SearchHistoryUncheckedCreateNestedManyWithoutUserInput;
    userRoles?: Prisma.UserRoleUncheckedCreateNestedManyWithoutUserInput;
    companiesOwned?: Prisma.CompanyUncheckedCreateNestedManyWithoutOwnerInput;
    companyEmployees?: Prisma.EmployeeUncheckedCreateNestedManyWithoutUserInput;
    jobsPosted?: Prisma.JobUncheckedCreateNestedManyWithoutPostedByInput;
    resumes?: Prisma.ResumeUncheckedCreateNestedManyWithoutUserInput;
    products?: Prisma.ProductUncheckedCreateNestedManyWithoutSellerInput;
    productReviewsWritten?: Prisma.ProductReviewUncheckedCreateNestedManyWithoutReviewerInput;
    productReviewsReceived?: Prisma.ProductReviewUncheckedCreateNestedManyWithoutRevieweeInput;
    booksAuthored?: Prisma.BookUncheckedCreateNestedManyWithoutAuthorUserInput;
    bookPurchases?: Prisma.BookPurchaseUncheckedCreateNestedManyWithoutUserInput;
    bookReviews?: Prisma.BookReviewUncheckedCreateNestedManyWithoutUserInput;
    resourcesCreated?: Prisma.ResourceUncheckedCreateNestedManyWithoutAuthorInput;
    portfolioProjects?: Prisma.PortfolioProjectUncheckedCreateNestedManyWithoutUserInput;
    aiConversations?: Prisma.AIConversationUncheckedCreateNestedManyWithoutUserInput;
};
export type UserCreateOrConnectWithoutJobApplicationsInput = {
    where: Prisma.UserWhereUniqueInput;
    create: Prisma.XOR<Prisma.UserCreateWithoutJobApplicationsInput, Prisma.UserUncheckedCreateWithoutJobApplicationsInput>;
};
export type UserUpsertWithoutJobApplicationsInput = {
    update: Prisma.XOR<Prisma.UserUpdateWithoutJobApplicationsInput, Prisma.UserUncheckedUpdateWithoutJobApplicationsInput>;
    create: Prisma.XOR<Prisma.UserCreateWithoutJobApplicationsInput, Prisma.UserUncheckedCreateWithoutJobApplicationsInput>;
    where?: Prisma.UserWhereInput;
};
export type UserUpdateToOneWithWhereWithoutJobApplicationsInput = {
    where?: Prisma.UserWhereInput;
    data: Prisma.XOR<Prisma.UserUpdateWithoutJobApplicationsInput, Prisma.UserUncheckedUpdateWithoutJobApplicationsInput>;
};
export type UserUpdateWithoutJobApplicationsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    username?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    emailVerified?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    image?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    coverImage?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    bio?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    location?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    skills?: Prisma.UserUpdateskillsInput | string[];
    languages?: Prisma.UserUpdatelanguagesInput | string[];
    timezone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    website?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    github?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    linkedin?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    role?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    verificationStatus?: Prisma.StringFieldUpdateOperationsInput | string;
    profileCompletion?: Prisma.IntFieldUpdateOperationsInput | number;
    preferredCurrency?: Prisma.StringFieldUpdateOperationsInput | string;
    stripeAccountId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    stripeOnboardingDone?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    lastLoginAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    accounts?: Prisma.AccountUpdateManyWithoutUserNestedInput;
    sessions?: Prisma.SessionUpdateManyWithoutUserNestedInput;
    profile?: Prisma.ProfileUpdateOneWithoutUserNestedInput;
    freelancerProfile?: Prisma.FreelancerProfileUpdateOneWithoutUserNestedInput;
    buyerProfile?: Prisma.BuyerProfileUpdateOneWithoutUserNestedInput;
    portfolioItems?: Prisma.PortfolioUpdateManyWithoutUserNestedInput;
    services?: Prisma.ServiceUpdateManyWithoutUserNestedInput;
    ordersAsBuyer?: Prisma.OrderUpdateManyWithoutBuyerNestedInput;
    ordersAsFreelancer?: Prisma.OrderUpdateManyWithoutFreelancerNestedInput;
    reviewsWritten?: Prisma.ReviewUpdateManyWithoutReviewerNestedInput;
    reviewsReceived?: Prisma.ReviewUpdateManyWithoutRevieweeNestedInput;
    favorites?: Prisma.FavoriteUpdateManyWithoutUserNestedInput;
    cart?: Prisma.CartUpdateOneWithoutUserNestedInput;
    conversationParts?: Prisma.ConversationParticipantUpdateManyWithoutUserNestedInput;
    messages?: Prisma.MessageUpdateManyWithoutSenderNestedInput;
    notifications?: Prisma.NotificationUpdateManyWithoutUserNestedInput;
    payouts?: Prisma.PayoutUpdateManyWithoutFreelancerNestedInput;
    disputes?: Prisma.DisputeUpdateManyWithoutOpenerNestedInput;
    reports?: Prisma.ReportUpdateManyWithoutReporterNestedInput;
    achievements?: Prisma.UserAchievementUpdateManyWithoutUserNestedInput;
    xp?: Prisma.UserXPUpdateOneWithoutUserNestedInput;
    searchHistory?: Prisma.SearchHistoryUpdateManyWithoutUserNestedInput;
    userRoles?: Prisma.UserRoleUpdateManyWithoutUserNestedInput;
    companiesOwned?: Prisma.CompanyUpdateManyWithoutOwnerNestedInput;
    companyEmployees?: Prisma.EmployeeUpdateManyWithoutUserNestedInput;
    jobsPosted?: Prisma.JobUpdateManyWithoutPostedByNestedInput;
    resumes?: Prisma.ResumeUpdateManyWithoutUserNestedInput;
    products?: Prisma.ProductUpdateManyWithoutSellerNestedInput;
    productReviewsWritten?: Prisma.ProductReviewUpdateManyWithoutReviewerNestedInput;
    productReviewsReceived?: Prisma.ProductReviewUpdateManyWithoutRevieweeNestedInput;
    booksAuthored?: Prisma.BookUpdateManyWithoutAuthorUserNestedInput;
    bookPurchases?: Prisma.BookPurchaseUpdateManyWithoutUserNestedInput;
    bookReviews?: Prisma.BookReviewUpdateManyWithoutUserNestedInput;
    resourcesCreated?: Prisma.ResourceUpdateManyWithoutAuthorNestedInput;
    portfolioProjects?: Prisma.PortfolioProjectUpdateManyWithoutUserNestedInput;
    aiConversations?: Prisma.AIConversationUpdateManyWithoutUserNestedInput;
};
export type UserUncheckedUpdateWithoutJobApplicationsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    username?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    emailVerified?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    image?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    coverImage?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    bio?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    location?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    skills?: Prisma.UserUpdateskillsInput | string[];
    languages?: Prisma.UserUpdatelanguagesInput | string[];
    timezone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    website?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    github?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    linkedin?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    role?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    verificationStatus?: Prisma.StringFieldUpdateOperationsInput | string;
    profileCompletion?: Prisma.IntFieldUpdateOperationsInput | number;
    preferredCurrency?: Prisma.StringFieldUpdateOperationsInput | string;
    stripeAccountId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    stripeOnboardingDone?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    lastLoginAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    accounts?: Prisma.AccountUncheckedUpdateManyWithoutUserNestedInput;
    sessions?: Prisma.SessionUncheckedUpdateManyWithoutUserNestedInput;
    profile?: Prisma.ProfileUncheckedUpdateOneWithoutUserNestedInput;
    freelancerProfile?: Prisma.FreelancerProfileUncheckedUpdateOneWithoutUserNestedInput;
    buyerProfile?: Prisma.BuyerProfileUncheckedUpdateOneWithoutUserNestedInput;
    portfolioItems?: Prisma.PortfolioUncheckedUpdateManyWithoutUserNestedInput;
    services?: Prisma.ServiceUncheckedUpdateManyWithoutUserNestedInput;
    ordersAsBuyer?: Prisma.OrderUncheckedUpdateManyWithoutBuyerNestedInput;
    ordersAsFreelancer?: Prisma.OrderUncheckedUpdateManyWithoutFreelancerNestedInput;
    reviewsWritten?: Prisma.ReviewUncheckedUpdateManyWithoutReviewerNestedInput;
    reviewsReceived?: Prisma.ReviewUncheckedUpdateManyWithoutRevieweeNestedInput;
    favorites?: Prisma.FavoriteUncheckedUpdateManyWithoutUserNestedInput;
    cart?: Prisma.CartUncheckedUpdateOneWithoutUserNestedInput;
    conversationParts?: Prisma.ConversationParticipantUncheckedUpdateManyWithoutUserNestedInput;
    messages?: Prisma.MessageUncheckedUpdateManyWithoutSenderNestedInput;
    notifications?: Prisma.NotificationUncheckedUpdateManyWithoutUserNestedInput;
    payouts?: Prisma.PayoutUncheckedUpdateManyWithoutFreelancerNestedInput;
    disputes?: Prisma.DisputeUncheckedUpdateManyWithoutOpenerNestedInput;
    reports?: Prisma.ReportUncheckedUpdateManyWithoutReporterNestedInput;
    achievements?: Prisma.UserAchievementUncheckedUpdateManyWithoutUserNestedInput;
    xp?: Prisma.UserXPUncheckedUpdateOneWithoutUserNestedInput;
    searchHistory?: Prisma.SearchHistoryUncheckedUpdateManyWithoutUserNestedInput;
    userRoles?: Prisma.UserRoleUncheckedUpdateManyWithoutUserNestedInput;
    companiesOwned?: Prisma.CompanyUncheckedUpdateManyWithoutOwnerNestedInput;
    companyEmployees?: Prisma.EmployeeUncheckedUpdateManyWithoutUserNestedInput;
    jobsPosted?: Prisma.JobUncheckedUpdateManyWithoutPostedByNestedInput;
    resumes?: Prisma.ResumeUncheckedUpdateManyWithoutUserNestedInput;
    products?: Prisma.ProductUncheckedUpdateManyWithoutSellerNestedInput;
    productReviewsWritten?: Prisma.ProductReviewUncheckedUpdateManyWithoutReviewerNestedInput;
    productReviewsReceived?: Prisma.ProductReviewUncheckedUpdateManyWithoutRevieweeNestedInput;
    booksAuthored?: Prisma.BookUncheckedUpdateManyWithoutAuthorUserNestedInput;
    bookPurchases?: Prisma.BookPurchaseUncheckedUpdateManyWithoutUserNestedInput;
    bookReviews?: Prisma.BookReviewUncheckedUpdateManyWithoutUserNestedInput;
    resourcesCreated?: Prisma.ResourceUncheckedUpdateManyWithoutAuthorNestedInput;
    portfolioProjects?: Prisma.PortfolioProjectUncheckedUpdateManyWithoutUserNestedInput;
    aiConversations?: Prisma.AIConversationUncheckedUpdateManyWithoutUserNestedInput;
};
export type UserCreateWithoutResumesInput = {
    id?: string;
    name: string;
    username?: string | null;
    email: string;
    emailVerified?: boolean;
    image?: string | null;
    coverImage?: string | null;
    bio?: string | null;
    location?: string | null;
    skills?: Prisma.UserCreateskillsInput | string[];
    languages?: Prisma.UserCreatelanguagesInput | string[];
    timezone?: string | null;
    website?: string | null;
    github?: string | null;
    linkedin?: string | null;
    role?: string;
    status?: string;
    verificationStatus?: string;
    profileCompletion?: number;
    preferredCurrency?: string;
    stripeAccountId?: string | null;
    stripeOnboardingDone?: boolean;
    lastLoginAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    accounts?: Prisma.AccountCreateNestedManyWithoutUserInput;
    sessions?: Prisma.SessionCreateNestedManyWithoutUserInput;
    profile?: Prisma.ProfileCreateNestedOneWithoutUserInput;
    freelancerProfile?: Prisma.FreelancerProfileCreateNestedOneWithoutUserInput;
    buyerProfile?: Prisma.BuyerProfileCreateNestedOneWithoutUserInput;
    portfolioItems?: Prisma.PortfolioCreateNestedManyWithoutUserInput;
    services?: Prisma.ServiceCreateNestedManyWithoutUserInput;
    ordersAsBuyer?: Prisma.OrderCreateNestedManyWithoutBuyerInput;
    ordersAsFreelancer?: Prisma.OrderCreateNestedManyWithoutFreelancerInput;
    reviewsWritten?: Prisma.ReviewCreateNestedManyWithoutReviewerInput;
    reviewsReceived?: Prisma.ReviewCreateNestedManyWithoutRevieweeInput;
    favorites?: Prisma.FavoriteCreateNestedManyWithoutUserInput;
    cart?: Prisma.CartCreateNestedOneWithoutUserInput;
    conversationParts?: Prisma.ConversationParticipantCreateNestedManyWithoutUserInput;
    messages?: Prisma.MessageCreateNestedManyWithoutSenderInput;
    notifications?: Prisma.NotificationCreateNestedManyWithoutUserInput;
    payouts?: Prisma.PayoutCreateNestedManyWithoutFreelancerInput;
    disputes?: Prisma.DisputeCreateNestedManyWithoutOpenerInput;
    reports?: Prisma.ReportCreateNestedManyWithoutReporterInput;
    achievements?: Prisma.UserAchievementCreateNestedManyWithoutUserInput;
    xp?: Prisma.UserXPCreateNestedOneWithoutUserInput;
    searchHistory?: Prisma.SearchHistoryCreateNestedManyWithoutUserInput;
    userRoles?: Prisma.UserRoleCreateNestedManyWithoutUserInput;
    companiesOwned?: Prisma.CompanyCreateNestedManyWithoutOwnerInput;
    companyEmployees?: Prisma.EmployeeCreateNestedManyWithoutUserInput;
    jobsPosted?: Prisma.JobCreateNestedManyWithoutPostedByInput;
    jobApplications?: Prisma.JobApplicationCreateNestedManyWithoutApplicantInput;
    products?: Prisma.ProductCreateNestedManyWithoutSellerInput;
    productReviewsWritten?: Prisma.ProductReviewCreateNestedManyWithoutReviewerInput;
    productReviewsReceived?: Prisma.ProductReviewCreateNestedManyWithoutRevieweeInput;
    booksAuthored?: Prisma.BookCreateNestedManyWithoutAuthorUserInput;
    bookPurchases?: Prisma.BookPurchaseCreateNestedManyWithoutUserInput;
    bookReviews?: Prisma.BookReviewCreateNestedManyWithoutUserInput;
    resourcesCreated?: Prisma.ResourceCreateNestedManyWithoutAuthorInput;
    portfolioProjects?: Prisma.PortfolioProjectCreateNestedManyWithoutUserInput;
    aiConversations?: Prisma.AIConversationCreateNestedManyWithoutUserInput;
};
export type UserUncheckedCreateWithoutResumesInput = {
    id?: string;
    name: string;
    username?: string | null;
    email: string;
    emailVerified?: boolean;
    image?: string | null;
    coverImage?: string | null;
    bio?: string | null;
    location?: string | null;
    skills?: Prisma.UserCreateskillsInput | string[];
    languages?: Prisma.UserCreatelanguagesInput | string[];
    timezone?: string | null;
    website?: string | null;
    github?: string | null;
    linkedin?: string | null;
    role?: string;
    status?: string;
    verificationStatus?: string;
    profileCompletion?: number;
    preferredCurrency?: string;
    stripeAccountId?: string | null;
    stripeOnboardingDone?: boolean;
    lastLoginAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    accounts?: Prisma.AccountUncheckedCreateNestedManyWithoutUserInput;
    sessions?: Prisma.SessionUncheckedCreateNestedManyWithoutUserInput;
    profile?: Prisma.ProfileUncheckedCreateNestedOneWithoutUserInput;
    freelancerProfile?: Prisma.FreelancerProfileUncheckedCreateNestedOneWithoutUserInput;
    buyerProfile?: Prisma.BuyerProfileUncheckedCreateNestedOneWithoutUserInput;
    portfolioItems?: Prisma.PortfolioUncheckedCreateNestedManyWithoutUserInput;
    services?: Prisma.ServiceUncheckedCreateNestedManyWithoutUserInput;
    ordersAsBuyer?: Prisma.OrderUncheckedCreateNestedManyWithoutBuyerInput;
    ordersAsFreelancer?: Prisma.OrderUncheckedCreateNestedManyWithoutFreelancerInput;
    reviewsWritten?: Prisma.ReviewUncheckedCreateNestedManyWithoutReviewerInput;
    reviewsReceived?: Prisma.ReviewUncheckedCreateNestedManyWithoutRevieweeInput;
    favorites?: Prisma.FavoriteUncheckedCreateNestedManyWithoutUserInput;
    cart?: Prisma.CartUncheckedCreateNestedOneWithoutUserInput;
    conversationParts?: Prisma.ConversationParticipantUncheckedCreateNestedManyWithoutUserInput;
    messages?: Prisma.MessageUncheckedCreateNestedManyWithoutSenderInput;
    notifications?: Prisma.NotificationUncheckedCreateNestedManyWithoutUserInput;
    payouts?: Prisma.PayoutUncheckedCreateNestedManyWithoutFreelancerInput;
    disputes?: Prisma.DisputeUncheckedCreateNestedManyWithoutOpenerInput;
    reports?: Prisma.ReportUncheckedCreateNestedManyWithoutReporterInput;
    achievements?: Prisma.UserAchievementUncheckedCreateNestedManyWithoutUserInput;
    xp?: Prisma.UserXPUncheckedCreateNestedOneWithoutUserInput;
    searchHistory?: Prisma.SearchHistoryUncheckedCreateNestedManyWithoutUserInput;
    userRoles?: Prisma.UserRoleUncheckedCreateNestedManyWithoutUserInput;
    companiesOwned?: Prisma.CompanyUncheckedCreateNestedManyWithoutOwnerInput;
    companyEmployees?: Prisma.EmployeeUncheckedCreateNestedManyWithoutUserInput;
    jobsPosted?: Prisma.JobUncheckedCreateNestedManyWithoutPostedByInput;
    jobApplications?: Prisma.JobApplicationUncheckedCreateNestedManyWithoutApplicantInput;
    products?: Prisma.ProductUncheckedCreateNestedManyWithoutSellerInput;
    productReviewsWritten?: Prisma.ProductReviewUncheckedCreateNestedManyWithoutReviewerInput;
    productReviewsReceived?: Prisma.ProductReviewUncheckedCreateNestedManyWithoutRevieweeInput;
    booksAuthored?: Prisma.BookUncheckedCreateNestedManyWithoutAuthorUserInput;
    bookPurchases?: Prisma.BookPurchaseUncheckedCreateNestedManyWithoutUserInput;
    bookReviews?: Prisma.BookReviewUncheckedCreateNestedManyWithoutUserInput;
    resourcesCreated?: Prisma.ResourceUncheckedCreateNestedManyWithoutAuthorInput;
    portfolioProjects?: Prisma.PortfolioProjectUncheckedCreateNestedManyWithoutUserInput;
    aiConversations?: Prisma.AIConversationUncheckedCreateNestedManyWithoutUserInput;
};
export type UserCreateOrConnectWithoutResumesInput = {
    where: Prisma.UserWhereUniqueInput;
    create: Prisma.XOR<Prisma.UserCreateWithoutResumesInput, Prisma.UserUncheckedCreateWithoutResumesInput>;
};
export type UserUpsertWithoutResumesInput = {
    update: Prisma.XOR<Prisma.UserUpdateWithoutResumesInput, Prisma.UserUncheckedUpdateWithoutResumesInput>;
    create: Prisma.XOR<Prisma.UserCreateWithoutResumesInput, Prisma.UserUncheckedCreateWithoutResumesInput>;
    where?: Prisma.UserWhereInput;
};
export type UserUpdateToOneWithWhereWithoutResumesInput = {
    where?: Prisma.UserWhereInput;
    data: Prisma.XOR<Prisma.UserUpdateWithoutResumesInput, Prisma.UserUncheckedUpdateWithoutResumesInput>;
};
export type UserUpdateWithoutResumesInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    username?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    emailVerified?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    image?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    coverImage?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    bio?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    location?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    skills?: Prisma.UserUpdateskillsInput | string[];
    languages?: Prisma.UserUpdatelanguagesInput | string[];
    timezone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    website?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    github?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    linkedin?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    role?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    verificationStatus?: Prisma.StringFieldUpdateOperationsInput | string;
    profileCompletion?: Prisma.IntFieldUpdateOperationsInput | number;
    preferredCurrency?: Prisma.StringFieldUpdateOperationsInput | string;
    stripeAccountId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    stripeOnboardingDone?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    lastLoginAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    accounts?: Prisma.AccountUpdateManyWithoutUserNestedInput;
    sessions?: Prisma.SessionUpdateManyWithoutUserNestedInput;
    profile?: Prisma.ProfileUpdateOneWithoutUserNestedInput;
    freelancerProfile?: Prisma.FreelancerProfileUpdateOneWithoutUserNestedInput;
    buyerProfile?: Prisma.BuyerProfileUpdateOneWithoutUserNestedInput;
    portfolioItems?: Prisma.PortfolioUpdateManyWithoutUserNestedInput;
    services?: Prisma.ServiceUpdateManyWithoutUserNestedInput;
    ordersAsBuyer?: Prisma.OrderUpdateManyWithoutBuyerNestedInput;
    ordersAsFreelancer?: Prisma.OrderUpdateManyWithoutFreelancerNestedInput;
    reviewsWritten?: Prisma.ReviewUpdateManyWithoutReviewerNestedInput;
    reviewsReceived?: Prisma.ReviewUpdateManyWithoutRevieweeNestedInput;
    favorites?: Prisma.FavoriteUpdateManyWithoutUserNestedInput;
    cart?: Prisma.CartUpdateOneWithoutUserNestedInput;
    conversationParts?: Prisma.ConversationParticipantUpdateManyWithoutUserNestedInput;
    messages?: Prisma.MessageUpdateManyWithoutSenderNestedInput;
    notifications?: Prisma.NotificationUpdateManyWithoutUserNestedInput;
    payouts?: Prisma.PayoutUpdateManyWithoutFreelancerNestedInput;
    disputes?: Prisma.DisputeUpdateManyWithoutOpenerNestedInput;
    reports?: Prisma.ReportUpdateManyWithoutReporterNestedInput;
    achievements?: Prisma.UserAchievementUpdateManyWithoutUserNestedInput;
    xp?: Prisma.UserXPUpdateOneWithoutUserNestedInput;
    searchHistory?: Prisma.SearchHistoryUpdateManyWithoutUserNestedInput;
    userRoles?: Prisma.UserRoleUpdateManyWithoutUserNestedInput;
    companiesOwned?: Prisma.CompanyUpdateManyWithoutOwnerNestedInput;
    companyEmployees?: Prisma.EmployeeUpdateManyWithoutUserNestedInput;
    jobsPosted?: Prisma.JobUpdateManyWithoutPostedByNestedInput;
    jobApplications?: Prisma.JobApplicationUpdateManyWithoutApplicantNestedInput;
    products?: Prisma.ProductUpdateManyWithoutSellerNestedInput;
    productReviewsWritten?: Prisma.ProductReviewUpdateManyWithoutReviewerNestedInput;
    productReviewsReceived?: Prisma.ProductReviewUpdateManyWithoutRevieweeNestedInput;
    booksAuthored?: Prisma.BookUpdateManyWithoutAuthorUserNestedInput;
    bookPurchases?: Prisma.BookPurchaseUpdateManyWithoutUserNestedInput;
    bookReviews?: Prisma.BookReviewUpdateManyWithoutUserNestedInput;
    resourcesCreated?: Prisma.ResourceUpdateManyWithoutAuthorNestedInput;
    portfolioProjects?: Prisma.PortfolioProjectUpdateManyWithoutUserNestedInput;
    aiConversations?: Prisma.AIConversationUpdateManyWithoutUserNestedInput;
};
export type UserUncheckedUpdateWithoutResumesInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    username?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    emailVerified?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    image?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    coverImage?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    bio?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    location?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    skills?: Prisma.UserUpdateskillsInput | string[];
    languages?: Prisma.UserUpdatelanguagesInput | string[];
    timezone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    website?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    github?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    linkedin?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    role?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    verificationStatus?: Prisma.StringFieldUpdateOperationsInput | string;
    profileCompletion?: Prisma.IntFieldUpdateOperationsInput | number;
    preferredCurrency?: Prisma.StringFieldUpdateOperationsInput | string;
    stripeAccountId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    stripeOnboardingDone?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    lastLoginAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    accounts?: Prisma.AccountUncheckedUpdateManyWithoutUserNestedInput;
    sessions?: Prisma.SessionUncheckedUpdateManyWithoutUserNestedInput;
    profile?: Prisma.ProfileUncheckedUpdateOneWithoutUserNestedInput;
    freelancerProfile?: Prisma.FreelancerProfileUncheckedUpdateOneWithoutUserNestedInput;
    buyerProfile?: Prisma.BuyerProfileUncheckedUpdateOneWithoutUserNestedInput;
    portfolioItems?: Prisma.PortfolioUncheckedUpdateManyWithoutUserNestedInput;
    services?: Prisma.ServiceUncheckedUpdateManyWithoutUserNestedInput;
    ordersAsBuyer?: Prisma.OrderUncheckedUpdateManyWithoutBuyerNestedInput;
    ordersAsFreelancer?: Prisma.OrderUncheckedUpdateManyWithoutFreelancerNestedInput;
    reviewsWritten?: Prisma.ReviewUncheckedUpdateManyWithoutReviewerNestedInput;
    reviewsReceived?: Prisma.ReviewUncheckedUpdateManyWithoutRevieweeNestedInput;
    favorites?: Prisma.FavoriteUncheckedUpdateManyWithoutUserNestedInput;
    cart?: Prisma.CartUncheckedUpdateOneWithoutUserNestedInput;
    conversationParts?: Prisma.ConversationParticipantUncheckedUpdateManyWithoutUserNestedInput;
    messages?: Prisma.MessageUncheckedUpdateManyWithoutSenderNestedInput;
    notifications?: Prisma.NotificationUncheckedUpdateManyWithoutUserNestedInput;
    payouts?: Prisma.PayoutUncheckedUpdateManyWithoutFreelancerNestedInput;
    disputes?: Prisma.DisputeUncheckedUpdateManyWithoutOpenerNestedInput;
    reports?: Prisma.ReportUncheckedUpdateManyWithoutReporterNestedInput;
    achievements?: Prisma.UserAchievementUncheckedUpdateManyWithoutUserNestedInput;
    xp?: Prisma.UserXPUncheckedUpdateOneWithoutUserNestedInput;
    searchHistory?: Prisma.SearchHistoryUncheckedUpdateManyWithoutUserNestedInput;
    userRoles?: Prisma.UserRoleUncheckedUpdateManyWithoutUserNestedInput;
    companiesOwned?: Prisma.CompanyUncheckedUpdateManyWithoutOwnerNestedInput;
    companyEmployees?: Prisma.EmployeeUncheckedUpdateManyWithoutUserNestedInput;
    jobsPosted?: Prisma.JobUncheckedUpdateManyWithoutPostedByNestedInput;
    jobApplications?: Prisma.JobApplicationUncheckedUpdateManyWithoutApplicantNestedInput;
    products?: Prisma.ProductUncheckedUpdateManyWithoutSellerNestedInput;
    productReviewsWritten?: Prisma.ProductReviewUncheckedUpdateManyWithoutReviewerNestedInput;
    productReviewsReceived?: Prisma.ProductReviewUncheckedUpdateManyWithoutRevieweeNestedInput;
    booksAuthored?: Prisma.BookUncheckedUpdateManyWithoutAuthorUserNestedInput;
    bookPurchases?: Prisma.BookPurchaseUncheckedUpdateManyWithoutUserNestedInput;
    bookReviews?: Prisma.BookReviewUncheckedUpdateManyWithoutUserNestedInput;
    resourcesCreated?: Prisma.ResourceUncheckedUpdateManyWithoutAuthorNestedInput;
    portfolioProjects?: Prisma.PortfolioProjectUncheckedUpdateManyWithoutUserNestedInput;
    aiConversations?: Prisma.AIConversationUncheckedUpdateManyWithoutUserNestedInput;
};
export type UserCreateWithoutBooksAuthoredInput = {
    id?: string;
    name: string;
    username?: string | null;
    email: string;
    emailVerified?: boolean;
    image?: string | null;
    coverImage?: string | null;
    bio?: string | null;
    location?: string | null;
    skills?: Prisma.UserCreateskillsInput | string[];
    languages?: Prisma.UserCreatelanguagesInput | string[];
    timezone?: string | null;
    website?: string | null;
    github?: string | null;
    linkedin?: string | null;
    role?: string;
    status?: string;
    verificationStatus?: string;
    profileCompletion?: number;
    preferredCurrency?: string;
    stripeAccountId?: string | null;
    stripeOnboardingDone?: boolean;
    lastLoginAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    accounts?: Prisma.AccountCreateNestedManyWithoutUserInput;
    sessions?: Prisma.SessionCreateNestedManyWithoutUserInput;
    profile?: Prisma.ProfileCreateNestedOneWithoutUserInput;
    freelancerProfile?: Prisma.FreelancerProfileCreateNestedOneWithoutUserInput;
    buyerProfile?: Prisma.BuyerProfileCreateNestedOneWithoutUserInput;
    portfolioItems?: Prisma.PortfolioCreateNestedManyWithoutUserInput;
    services?: Prisma.ServiceCreateNestedManyWithoutUserInput;
    ordersAsBuyer?: Prisma.OrderCreateNestedManyWithoutBuyerInput;
    ordersAsFreelancer?: Prisma.OrderCreateNestedManyWithoutFreelancerInput;
    reviewsWritten?: Prisma.ReviewCreateNestedManyWithoutReviewerInput;
    reviewsReceived?: Prisma.ReviewCreateNestedManyWithoutRevieweeInput;
    favorites?: Prisma.FavoriteCreateNestedManyWithoutUserInput;
    cart?: Prisma.CartCreateNestedOneWithoutUserInput;
    conversationParts?: Prisma.ConversationParticipantCreateNestedManyWithoutUserInput;
    messages?: Prisma.MessageCreateNestedManyWithoutSenderInput;
    notifications?: Prisma.NotificationCreateNestedManyWithoutUserInput;
    payouts?: Prisma.PayoutCreateNestedManyWithoutFreelancerInput;
    disputes?: Prisma.DisputeCreateNestedManyWithoutOpenerInput;
    reports?: Prisma.ReportCreateNestedManyWithoutReporterInput;
    achievements?: Prisma.UserAchievementCreateNestedManyWithoutUserInput;
    xp?: Prisma.UserXPCreateNestedOneWithoutUserInput;
    searchHistory?: Prisma.SearchHistoryCreateNestedManyWithoutUserInput;
    userRoles?: Prisma.UserRoleCreateNestedManyWithoutUserInput;
    companiesOwned?: Prisma.CompanyCreateNestedManyWithoutOwnerInput;
    companyEmployees?: Prisma.EmployeeCreateNestedManyWithoutUserInput;
    jobsPosted?: Prisma.JobCreateNestedManyWithoutPostedByInput;
    resumes?: Prisma.ResumeCreateNestedManyWithoutUserInput;
    jobApplications?: Prisma.JobApplicationCreateNestedManyWithoutApplicantInput;
    products?: Prisma.ProductCreateNestedManyWithoutSellerInput;
    productReviewsWritten?: Prisma.ProductReviewCreateNestedManyWithoutReviewerInput;
    productReviewsReceived?: Prisma.ProductReviewCreateNestedManyWithoutRevieweeInput;
    bookPurchases?: Prisma.BookPurchaseCreateNestedManyWithoutUserInput;
    bookReviews?: Prisma.BookReviewCreateNestedManyWithoutUserInput;
    resourcesCreated?: Prisma.ResourceCreateNestedManyWithoutAuthorInput;
    portfolioProjects?: Prisma.PortfolioProjectCreateNestedManyWithoutUserInput;
    aiConversations?: Prisma.AIConversationCreateNestedManyWithoutUserInput;
};
export type UserUncheckedCreateWithoutBooksAuthoredInput = {
    id?: string;
    name: string;
    username?: string | null;
    email: string;
    emailVerified?: boolean;
    image?: string | null;
    coverImage?: string | null;
    bio?: string | null;
    location?: string | null;
    skills?: Prisma.UserCreateskillsInput | string[];
    languages?: Prisma.UserCreatelanguagesInput | string[];
    timezone?: string | null;
    website?: string | null;
    github?: string | null;
    linkedin?: string | null;
    role?: string;
    status?: string;
    verificationStatus?: string;
    profileCompletion?: number;
    preferredCurrency?: string;
    stripeAccountId?: string | null;
    stripeOnboardingDone?: boolean;
    lastLoginAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    accounts?: Prisma.AccountUncheckedCreateNestedManyWithoutUserInput;
    sessions?: Prisma.SessionUncheckedCreateNestedManyWithoutUserInput;
    profile?: Prisma.ProfileUncheckedCreateNestedOneWithoutUserInput;
    freelancerProfile?: Prisma.FreelancerProfileUncheckedCreateNestedOneWithoutUserInput;
    buyerProfile?: Prisma.BuyerProfileUncheckedCreateNestedOneWithoutUserInput;
    portfolioItems?: Prisma.PortfolioUncheckedCreateNestedManyWithoutUserInput;
    services?: Prisma.ServiceUncheckedCreateNestedManyWithoutUserInput;
    ordersAsBuyer?: Prisma.OrderUncheckedCreateNestedManyWithoutBuyerInput;
    ordersAsFreelancer?: Prisma.OrderUncheckedCreateNestedManyWithoutFreelancerInput;
    reviewsWritten?: Prisma.ReviewUncheckedCreateNestedManyWithoutReviewerInput;
    reviewsReceived?: Prisma.ReviewUncheckedCreateNestedManyWithoutRevieweeInput;
    favorites?: Prisma.FavoriteUncheckedCreateNestedManyWithoutUserInput;
    cart?: Prisma.CartUncheckedCreateNestedOneWithoutUserInput;
    conversationParts?: Prisma.ConversationParticipantUncheckedCreateNestedManyWithoutUserInput;
    messages?: Prisma.MessageUncheckedCreateNestedManyWithoutSenderInput;
    notifications?: Prisma.NotificationUncheckedCreateNestedManyWithoutUserInput;
    payouts?: Prisma.PayoutUncheckedCreateNestedManyWithoutFreelancerInput;
    disputes?: Prisma.DisputeUncheckedCreateNestedManyWithoutOpenerInput;
    reports?: Prisma.ReportUncheckedCreateNestedManyWithoutReporterInput;
    achievements?: Prisma.UserAchievementUncheckedCreateNestedManyWithoutUserInput;
    xp?: Prisma.UserXPUncheckedCreateNestedOneWithoutUserInput;
    searchHistory?: Prisma.SearchHistoryUncheckedCreateNestedManyWithoutUserInput;
    userRoles?: Prisma.UserRoleUncheckedCreateNestedManyWithoutUserInput;
    companiesOwned?: Prisma.CompanyUncheckedCreateNestedManyWithoutOwnerInput;
    companyEmployees?: Prisma.EmployeeUncheckedCreateNestedManyWithoutUserInput;
    jobsPosted?: Prisma.JobUncheckedCreateNestedManyWithoutPostedByInput;
    resumes?: Prisma.ResumeUncheckedCreateNestedManyWithoutUserInput;
    jobApplications?: Prisma.JobApplicationUncheckedCreateNestedManyWithoutApplicantInput;
    products?: Prisma.ProductUncheckedCreateNestedManyWithoutSellerInput;
    productReviewsWritten?: Prisma.ProductReviewUncheckedCreateNestedManyWithoutReviewerInput;
    productReviewsReceived?: Prisma.ProductReviewUncheckedCreateNestedManyWithoutRevieweeInput;
    bookPurchases?: Prisma.BookPurchaseUncheckedCreateNestedManyWithoutUserInput;
    bookReviews?: Prisma.BookReviewUncheckedCreateNestedManyWithoutUserInput;
    resourcesCreated?: Prisma.ResourceUncheckedCreateNestedManyWithoutAuthorInput;
    portfolioProjects?: Prisma.PortfolioProjectUncheckedCreateNestedManyWithoutUserInput;
    aiConversations?: Prisma.AIConversationUncheckedCreateNestedManyWithoutUserInput;
};
export type UserCreateOrConnectWithoutBooksAuthoredInput = {
    where: Prisma.UserWhereUniqueInput;
    create: Prisma.XOR<Prisma.UserCreateWithoutBooksAuthoredInput, Prisma.UserUncheckedCreateWithoutBooksAuthoredInput>;
};
export type UserUpsertWithoutBooksAuthoredInput = {
    update: Prisma.XOR<Prisma.UserUpdateWithoutBooksAuthoredInput, Prisma.UserUncheckedUpdateWithoutBooksAuthoredInput>;
    create: Prisma.XOR<Prisma.UserCreateWithoutBooksAuthoredInput, Prisma.UserUncheckedCreateWithoutBooksAuthoredInput>;
    where?: Prisma.UserWhereInput;
};
export type UserUpdateToOneWithWhereWithoutBooksAuthoredInput = {
    where?: Prisma.UserWhereInput;
    data: Prisma.XOR<Prisma.UserUpdateWithoutBooksAuthoredInput, Prisma.UserUncheckedUpdateWithoutBooksAuthoredInput>;
};
export type UserUpdateWithoutBooksAuthoredInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    username?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    emailVerified?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    image?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    coverImage?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    bio?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    location?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    skills?: Prisma.UserUpdateskillsInput | string[];
    languages?: Prisma.UserUpdatelanguagesInput | string[];
    timezone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    website?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    github?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    linkedin?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    role?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    verificationStatus?: Prisma.StringFieldUpdateOperationsInput | string;
    profileCompletion?: Prisma.IntFieldUpdateOperationsInput | number;
    preferredCurrency?: Prisma.StringFieldUpdateOperationsInput | string;
    stripeAccountId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    stripeOnboardingDone?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    lastLoginAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    accounts?: Prisma.AccountUpdateManyWithoutUserNestedInput;
    sessions?: Prisma.SessionUpdateManyWithoutUserNestedInput;
    profile?: Prisma.ProfileUpdateOneWithoutUserNestedInput;
    freelancerProfile?: Prisma.FreelancerProfileUpdateOneWithoutUserNestedInput;
    buyerProfile?: Prisma.BuyerProfileUpdateOneWithoutUserNestedInput;
    portfolioItems?: Prisma.PortfolioUpdateManyWithoutUserNestedInput;
    services?: Prisma.ServiceUpdateManyWithoutUserNestedInput;
    ordersAsBuyer?: Prisma.OrderUpdateManyWithoutBuyerNestedInput;
    ordersAsFreelancer?: Prisma.OrderUpdateManyWithoutFreelancerNestedInput;
    reviewsWritten?: Prisma.ReviewUpdateManyWithoutReviewerNestedInput;
    reviewsReceived?: Prisma.ReviewUpdateManyWithoutRevieweeNestedInput;
    favorites?: Prisma.FavoriteUpdateManyWithoutUserNestedInput;
    cart?: Prisma.CartUpdateOneWithoutUserNestedInput;
    conversationParts?: Prisma.ConversationParticipantUpdateManyWithoutUserNestedInput;
    messages?: Prisma.MessageUpdateManyWithoutSenderNestedInput;
    notifications?: Prisma.NotificationUpdateManyWithoutUserNestedInput;
    payouts?: Prisma.PayoutUpdateManyWithoutFreelancerNestedInput;
    disputes?: Prisma.DisputeUpdateManyWithoutOpenerNestedInput;
    reports?: Prisma.ReportUpdateManyWithoutReporterNestedInput;
    achievements?: Prisma.UserAchievementUpdateManyWithoutUserNestedInput;
    xp?: Prisma.UserXPUpdateOneWithoutUserNestedInput;
    searchHistory?: Prisma.SearchHistoryUpdateManyWithoutUserNestedInput;
    userRoles?: Prisma.UserRoleUpdateManyWithoutUserNestedInput;
    companiesOwned?: Prisma.CompanyUpdateManyWithoutOwnerNestedInput;
    companyEmployees?: Prisma.EmployeeUpdateManyWithoutUserNestedInput;
    jobsPosted?: Prisma.JobUpdateManyWithoutPostedByNestedInput;
    resumes?: Prisma.ResumeUpdateManyWithoutUserNestedInput;
    jobApplications?: Prisma.JobApplicationUpdateManyWithoutApplicantNestedInput;
    products?: Prisma.ProductUpdateManyWithoutSellerNestedInput;
    productReviewsWritten?: Prisma.ProductReviewUpdateManyWithoutReviewerNestedInput;
    productReviewsReceived?: Prisma.ProductReviewUpdateManyWithoutRevieweeNestedInput;
    bookPurchases?: Prisma.BookPurchaseUpdateManyWithoutUserNestedInput;
    bookReviews?: Prisma.BookReviewUpdateManyWithoutUserNestedInput;
    resourcesCreated?: Prisma.ResourceUpdateManyWithoutAuthorNestedInput;
    portfolioProjects?: Prisma.PortfolioProjectUpdateManyWithoutUserNestedInput;
    aiConversations?: Prisma.AIConversationUpdateManyWithoutUserNestedInput;
};
export type UserUncheckedUpdateWithoutBooksAuthoredInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    username?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    emailVerified?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    image?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    coverImage?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    bio?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    location?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    skills?: Prisma.UserUpdateskillsInput | string[];
    languages?: Prisma.UserUpdatelanguagesInput | string[];
    timezone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    website?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    github?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    linkedin?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    role?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    verificationStatus?: Prisma.StringFieldUpdateOperationsInput | string;
    profileCompletion?: Prisma.IntFieldUpdateOperationsInput | number;
    preferredCurrency?: Prisma.StringFieldUpdateOperationsInput | string;
    stripeAccountId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    stripeOnboardingDone?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    lastLoginAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    accounts?: Prisma.AccountUncheckedUpdateManyWithoutUserNestedInput;
    sessions?: Prisma.SessionUncheckedUpdateManyWithoutUserNestedInput;
    profile?: Prisma.ProfileUncheckedUpdateOneWithoutUserNestedInput;
    freelancerProfile?: Prisma.FreelancerProfileUncheckedUpdateOneWithoutUserNestedInput;
    buyerProfile?: Prisma.BuyerProfileUncheckedUpdateOneWithoutUserNestedInput;
    portfolioItems?: Prisma.PortfolioUncheckedUpdateManyWithoutUserNestedInput;
    services?: Prisma.ServiceUncheckedUpdateManyWithoutUserNestedInput;
    ordersAsBuyer?: Prisma.OrderUncheckedUpdateManyWithoutBuyerNestedInput;
    ordersAsFreelancer?: Prisma.OrderUncheckedUpdateManyWithoutFreelancerNestedInput;
    reviewsWritten?: Prisma.ReviewUncheckedUpdateManyWithoutReviewerNestedInput;
    reviewsReceived?: Prisma.ReviewUncheckedUpdateManyWithoutRevieweeNestedInput;
    favorites?: Prisma.FavoriteUncheckedUpdateManyWithoutUserNestedInput;
    cart?: Prisma.CartUncheckedUpdateOneWithoutUserNestedInput;
    conversationParts?: Prisma.ConversationParticipantUncheckedUpdateManyWithoutUserNestedInput;
    messages?: Prisma.MessageUncheckedUpdateManyWithoutSenderNestedInput;
    notifications?: Prisma.NotificationUncheckedUpdateManyWithoutUserNestedInput;
    payouts?: Prisma.PayoutUncheckedUpdateManyWithoutFreelancerNestedInput;
    disputes?: Prisma.DisputeUncheckedUpdateManyWithoutOpenerNestedInput;
    reports?: Prisma.ReportUncheckedUpdateManyWithoutReporterNestedInput;
    achievements?: Prisma.UserAchievementUncheckedUpdateManyWithoutUserNestedInput;
    xp?: Prisma.UserXPUncheckedUpdateOneWithoutUserNestedInput;
    searchHistory?: Prisma.SearchHistoryUncheckedUpdateManyWithoutUserNestedInput;
    userRoles?: Prisma.UserRoleUncheckedUpdateManyWithoutUserNestedInput;
    companiesOwned?: Prisma.CompanyUncheckedUpdateManyWithoutOwnerNestedInput;
    companyEmployees?: Prisma.EmployeeUncheckedUpdateManyWithoutUserNestedInput;
    jobsPosted?: Prisma.JobUncheckedUpdateManyWithoutPostedByNestedInput;
    resumes?: Prisma.ResumeUncheckedUpdateManyWithoutUserNestedInput;
    jobApplications?: Prisma.JobApplicationUncheckedUpdateManyWithoutApplicantNestedInput;
    products?: Prisma.ProductUncheckedUpdateManyWithoutSellerNestedInput;
    productReviewsWritten?: Prisma.ProductReviewUncheckedUpdateManyWithoutReviewerNestedInput;
    productReviewsReceived?: Prisma.ProductReviewUncheckedUpdateManyWithoutRevieweeNestedInput;
    bookPurchases?: Prisma.BookPurchaseUncheckedUpdateManyWithoutUserNestedInput;
    bookReviews?: Prisma.BookReviewUncheckedUpdateManyWithoutUserNestedInput;
    resourcesCreated?: Prisma.ResourceUncheckedUpdateManyWithoutAuthorNestedInput;
    portfolioProjects?: Prisma.PortfolioProjectUncheckedUpdateManyWithoutUserNestedInput;
    aiConversations?: Prisma.AIConversationUncheckedUpdateManyWithoutUserNestedInput;
};
export type UserCreateWithoutBookPurchasesInput = {
    id?: string;
    name: string;
    username?: string | null;
    email: string;
    emailVerified?: boolean;
    image?: string | null;
    coverImage?: string | null;
    bio?: string | null;
    location?: string | null;
    skills?: Prisma.UserCreateskillsInput | string[];
    languages?: Prisma.UserCreatelanguagesInput | string[];
    timezone?: string | null;
    website?: string | null;
    github?: string | null;
    linkedin?: string | null;
    role?: string;
    status?: string;
    verificationStatus?: string;
    profileCompletion?: number;
    preferredCurrency?: string;
    stripeAccountId?: string | null;
    stripeOnboardingDone?: boolean;
    lastLoginAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    accounts?: Prisma.AccountCreateNestedManyWithoutUserInput;
    sessions?: Prisma.SessionCreateNestedManyWithoutUserInput;
    profile?: Prisma.ProfileCreateNestedOneWithoutUserInput;
    freelancerProfile?: Prisma.FreelancerProfileCreateNestedOneWithoutUserInput;
    buyerProfile?: Prisma.BuyerProfileCreateNestedOneWithoutUserInput;
    portfolioItems?: Prisma.PortfolioCreateNestedManyWithoutUserInput;
    services?: Prisma.ServiceCreateNestedManyWithoutUserInput;
    ordersAsBuyer?: Prisma.OrderCreateNestedManyWithoutBuyerInput;
    ordersAsFreelancer?: Prisma.OrderCreateNestedManyWithoutFreelancerInput;
    reviewsWritten?: Prisma.ReviewCreateNestedManyWithoutReviewerInput;
    reviewsReceived?: Prisma.ReviewCreateNestedManyWithoutRevieweeInput;
    favorites?: Prisma.FavoriteCreateNestedManyWithoutUserInput;
    cart?: Prisma.CartCreateNestedOneWithoutUserInput;
    conversationParts?: Prisma.ConversationParticipantCreateNestedManyWithoutUserInput;
    messages?: Prisma.MessageCreateNestedManyWithoutSenderInput;
    notifications?: Prisma.NotificationCreateNestedManyWithoutUserInput;
    payouts?: Prisma.PayoutCreateNestedManyWithoutFreelancerInput;
    disputes?: Prisma.DisputeCreateNestedManyWithoutOpenerInput;
    reports?: Prisma.ReportCreateNestedManyWithoutReporterInput;
    achievements?: Prisma.UserAchievementCreateNestedManyWithoutUserInput;
    xp?: Prisma.UserXPCreateNestedOneWithoutUserInput;
    searchHistory?: Prisma.SearchHistoryCreateNestedManyWithoutUserInput;
    userRoles?: Prisma.UserRoleCreateNestedManyWithoutUserInput;
    companiesOwned?: Prisma.CompanyCreateNestedManyWithoutOwnerInput;
    companyEmployees?: Prisma.EmployeeCreateNestedManyWithoutUserInput;
    jobsPosted?: Prisma.JobCreateNestedManyWithoutPostedByInput;
    resumes?: Prisma.ResumeCreateNestedManyWithoutUserInput;
    jobApplications?: Prisma.JobApplicationCreateNestedManyWithoutApplicantInput;
    products?: Prisma.ProductCreateNestedManyWithoutSellerInput;
    productReviewsWritten?: Prisma.ProductReviewCreateNestedManyWithoutReviewerInput;
    productReviewsReceived?: Prisma.ProductReviewCreateNestedManyWithoutRevieweeInput;
    booksAuthored?: Prisma.BookCreateNestedManyWithoutAuthorUserInput;
    bookReviews?: Prisma.BookReviewCreateNestedManyWithoutUserInput;
    resourcesCreated?: Prisma.ResourceCreateNestedManyWithoutAuthorInput;
    portfolioProjects?: Prisma.PortfolioProjectCreateNestedManyWithoutUserInput;
    aiConversations?: Prisma.AIConversationCreateNestedManyWithoutUserInput;
};
export type UserUncheckedCreateWithoutBookPurchasesInput = {
    id?: string;
    name: string;
    username?: string | null;
    email: string;
    emailVerified?: boolean;
    image?: string | null;
    coverImage?: string | null;
    bio?: string | null;
    location?: string | null;
    skills?: Prisma.UserCreateskillsInput | string[];
    languages?: Prisma.UserCreatelanguagesInput | string[];
    timezone?: string | null;
    website?: string | null;
    github?: string | null;
    linkedin?: string | null;
    role?: string;
    status?: string;
    verificationStatus?: string;
    profileCompletion?: number;
    preferredCurrency?: string;
    stripeAccountId?: string | null;
    stripeOnboardingDone?: boolean;
    lastLoginAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    accounts?: Prisma.AccountUncheckedCreateNestedManyWithoutUserInput;
    sessions?: Prisma.SessionUncheckedCreateNestedManyWithoutUserInput;
    profile?: Prisma.ProfileUncheckedCreateNestedOneWithoutUserInput;
    freelancerProfile?: Prisma.FreelancerProfileUncheckedCreateNestedOneWithoutUserInput;
    buyerProfile?: Prisma.BuyerProfileUncheckedCreateNestedOneWithoutUserInput;
    portfolioItems?: Prisma.PortfolioUncheckedCreateNestedManyWithoutUserInput;
    services?: Prisma.ServiceUncheckedCreateNestedManyWithoutUserInput;
    ordersAsBuyer?: Prisma.OrderUncheckedCreateNestedManyWithoutBuyerInput;
    ordersAsFreelancer?: Prisma.OrderUncheckedCreateNestedManyWithoutFreelancerInput;
    reviewsWritten?: Prisma.ReviewUncheckedCreateNestedManyWithoutReviewerInput;
    reviewsReceived?: Prisma.ReviewUncheckedCreateNestedManyWithoutRevieweeInput;
    favorites?: Prisma.FavoriteUncheckedCreateNestedManyWithoutUserInput;
    cart?: Prisma.CartUncheckedCreateNestedOneWithoutUserInput;
    conversationParts?: Prisma.ConversationParticipantUncheckedCreateNestedManyWithoutUserInput;
    messages?: Prisma.MessageUncheckedCreateNestedManyWithoutSenderInput;
    notifications?: Prisma.NotificationUncheckedCreateNestedManyWithoutUserInput;
    payouts?: Prisma.PayoutUncheckedCreateNestedManyWithoutFreelancerInput;
    disputes?: Prisma.DisputeUncheckedCreateNestedManyWithoutOpenerInput;
    reports?: Prisma.ReportUncheckedCreateNestedManyWithoutReporterInput;
    achievements?: Prisma.UserAchievementUncheckedCreateNestedManyWithoutUserInput;
    xp?: Prisma.UserXPUncheckedCreateNestedOneWithoutUserInput;
    searchHistory?: Prisma.SearchHistoryUncheckedCreateNestedManyWithoutUserInput;
    userRoles?: Prisma.UserRoleUncheckedCreateNestedManyWithoutUserInput;
    companiesOwned?: Prisma.CompanyUncheckedCreateNestedManyWithoutOwnerInput;
    companyEmployees?: Prisma.EmployeeUncheckedCreateNestedManyWithoutUserInput;
    jobsPosted?: Prisma.JobUncheckedCreateNestedManyWithoutPostedByInput;
    resumes?: Prisma.ResumeUncheckedCreateNestedManyWithoutUserInput;
    jobApplications?: Prisma.JobApplicationUncheckedCreateNestedManyWithoutApplicantInput;
    products?: Prisma.ProductUncheckedCreateNestedManyWithoutSellerInput;
    productReviewsWritten?: Prisma.ProductReviewUncheckedCreateNestedManyWithoutReviewerInput;
    productReviewsReceived?: Prisma.ProductReviewUncheckedCreateNestedManyWithoutRevieweeInput;
    booksAuthored?: Prisma.BookUncheckedCreateNestedManyWithoutAuthorUserInput;
    bookReviews?: Prisma.BookReviewUncheckedCreateNestedManyWithoutUserInput;
    resourcesCreated?: Prisma.ResourceUncheckedCreateNestedManyWithoutAuthorInput;
    portfolioProjects?: Prisma.PortfolioProjectUncheckedCreateNestedManyWithoutUserInput;
    aiConversations?: Prisma.AIConversationUncheckedCreateNestedManyWithoutUserInput;
};
export type UserCreateOrConnectWithoutBookPurchasesInput = {
    where: Prisma.UserWhereUniqueInput;
    create: Prisma.XOR<Prisma.UserCreateWithoutBookPurchasesInput, Prisma.UserUncheckedCreateWithoutBookPurchasesInput>;
};
export type UserUpsertWithoutBookPurchasesInput = {
    update: Prisma.XOR<Prisma.UserUpdateWithoutBookPurchasesInput, Prisma.UserUncheckedUpdateWithoutBookPurchasesInput>;
    create: Prisma.XOR<Prisma.UserCreateWithoutBookPurchasesInput, Prisma.UserUncheckedCreateWithoutBookPurchasesInput>;
    where?: Prisma.UserWhereInput;
};
export type UserUpdateToOneWithWhereWithoutBookPurchasesInput = {
    where?: Prisma.UserWhereInput;
    data: Prisma.XOR<Prisma.UserUpdateWithoutBookPurchasesInput, Prisma.UserUncheckedUpdateWithoutBookPurchasesInput>;
};
export type UserUpdateWithoutBookPurchasesInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    username?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    emailVerified?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    image?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    coverImage?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    bio?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    location?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    skills?: Prisma.UserUpdateskillsInput | string[];
    languages?: Prisma.UserUpdatelanguagesInput | string[];
    timezone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    website?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    github?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    linkedin?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    role?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    verificationStatus?: Prisma.StringFieldUpdateOperationsInput | string;
    profileCompletion?: Prisma.IntFieldUpdateOperationsInput | number;
    preferredCurrency?: Prisma.StringFieldUpdateOperationsInput | string;
    stripeAccountId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    stripeOnboardingDone?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    lastLoginAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    accounts?: Prisma.AccountUpdateManyWithoutUserNestedInput;
    sessions?: Prisma.SessionUpdateManyWithoutUserNestedInput;
    profile?: Prisma.ProfileUpdateOneWithoutUserNestedInput;
    freelancerProfile?: Prisma.FreelancerProfileUpdateOneWithoutUserNestedInput;
    buyerProfile?: Prisma.BuyerProfileUpdateOneWithoutUserNestedInput;
    portfolioItems?: Prisma.PortfolioUpdateManyWithoutUserNestedInput;
    services?: Prisma.ServiceUpdateManyWithoutUserNestedInput;
    ordersAsBuyer?: Prisma.OrderUpdateManyWithoutBuyerNestedInput;
    ordersAsFreelancer?: Prisma.OrderUpdateManyWithoutFreelancerNestedInput;
    reviewsWritten?: Prisma.ReviewUpdateManyWithoutReviewerNestedInput;
    reviewsReceived?: Prisma.ReviewUpdateManyWithoutRevieweeNestedInput;
    favorites?: Prisma.FavoriteUpdateManyWithoutUserNestedInput;
    cart?: Prisma.CartUpdateOneWithoutUserNestedInput;
    conversationParts?: Prisma.ConversationParticipantUpdateManyWithoutUserNestedInput;
    messages?: Prisma.MessageUpdateManyWithoutSenderNestedInput;
    notifications?: Prisma.NotificationUpdateManyWithoutUserNestedInput;
    payouts?: Prisma.PayoutUpdateManyWithoutFreelancerNestedInput;
    disputes?: Prisma.DisputeUpdateManyWithoutOpenerNestedInput;
    reports?: Prisma.ReportUpdateManyWithoutReporterNestedInput;
    achievements?: Prisma.UserAchievementUpdateManyWithoutUserNestedInput;
    xp?: Prisma.UserXPUpdateOneWithoutUserNestedInput;
    searchHistory?: Prisma.SearchHistoryUpdateManyWithoutUserNestedInput;
    userRoles?: Prisma.UserRoleUpdateManyWithoutUserNestedInput;
    companiesOwned?: Prisma.CompanyUpdateManyWithoutOwnerNestedInput;
    companyEmployees?: Prisma.EmployeeUpdateManyWithoutUserNestedInput;
    jobsPosted?: Prisma.JobUpdateManyWithoutPostedByNestedInput;
    resumes?: Prisma.ResumeUpdateManyWithoutUserNestedInput;
    jobApplications?: Prisma.JobApplicationUpdateManyWithoutApplicantNestedInput;
    products?: Prisma.ProductUpdateManyWithoutSellerNestedInput;
    productReviewsWritten?: Prisma.ProductReviewUpdateManyWithoutReviewerNestedInput;
    productReviewsReceived?: Prisma.ProductReviewUpdateManyWithoutRevieweeNestedInput;
    booksAuthored?: Prisma.BookUpdateManyWithoutAuthorUserNestedInput;
    bookReviews?: Prisma.BookReviewUpdateManyWithoutUserNestedInput;
    resourcesCreated?: Prisma.ResourceUpdateManyWithoutAuthorNestedInput;
    portfolioProjects?: Prisma.PortfolioProjectUpdateManyWithoutUserNestedInput;
    aiConversations?: Prisma.AIConversationUpdateManyWithoutUserNestedInput;
};
export type UserUncheckedUpdateWithoutBookPurchasesInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    username?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    emailVerified?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    image?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    coverImage?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    bio?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    location?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    skills?: Prisma.UserUpdateskillsInput | string[];
    languages?: Prisma.UserUpdatelanguagesInput | string[];
    timezone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    website?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    github?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    linkedin?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    role?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    verificationStatus?: Prisma.StringFieldUpdateOperationsInput | string;
    profileCompletion?: Prisma.IntFieldUpdateOperationsInput | number;
    preferredCurrency?: Prisma.StringFieldUpdateOperationsInput | string;
    stripeAccountId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    stripeOnboardingDone?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    lastLoginAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    accounts?: Prisma.AccountUncheckedUpdateManyWithoutUserNestedInput;
    sessions?: Prisma.SessionUncheckedUpdateManyWithoutUserNestedInput;
    profile?: Prisma.ProfileUncheckedUpdateOneWithoutUserNestedInput;
    freelancerProfile?: Prisma.FreelancerProfileUncheckedUpdateOneWithoutUserNestedInput;
    buyerProfile?: Prisma.BuyerProfileUncheckedUpdateOneWithoutUserNestedInput;
    portfolioItems?: Prisma.PortfolioUncheckedUpdateManyWithoutUserNestedInput;
    services?: Prisma.ServiceUncheckedUpdateManyWithoutUserNestedInput;
    ordersAsBuyer?: Prisma.OrderUncheckedUpdateManyWithoutBuyerNestedInput;
    ordersAsFreelancer?: Prisma.OrderUncheckedUpdateManyWithoutFreelancerNestedInput;
    reviewsWritten?: Prisma.ReviewUncheckedUpdateManyWithoutReviewerNestedInput;
    reviewsReceived?: Prisma.ReviewUncheckedUpdateManyWithoutRevieweeNestedInput;
    favorites?: Prisma.FavoriteUncheckedUpdateManyWithoutUserNestedInput;
    cart?: Prisma.CartUncheckedUpdateOneWithoutUserNestedInput;
    conversationParts?: Prisma.ConversationParticipantUncheckedUpdateManyWithoutUserNestedInput;
    messages?: Prisma.MessageUncheckedUpdateManyWithoutSenderNestedInput;
    notifications?: Prisma.NotificationUncheckedUpdateManyWithoutUserNestedInput;
    payouts?: Prisma.PayoutUncheckedUpdateManyWithoutFreelancerNestedInput;
    disputes?: Prisma.DisputeUncheckedUpdateManyWithoutOpenerNestedInput;
    reports?: Prisma.ReportUncheckedUpdateManyWithoutReporterNestedInput;
    achievements?: Prisma.UserAchievementUncheckedUpdateManyWithoutUserNestedInput;
    xp?: Prisma.UserXPUncheckedUpdateOneWithoutUserNestedInput;
    searchHistory?: Prisma.SearchHistoryUncheckedUpdateManyWithoutUserNestedInput;
    userRoles?: Prisma.UserRoleUncheckedUpdateManyWithoutUserNestedInput;
    companiesOwned?: Prisma.CompanyUncheckedUpdateManyWithoutOwnerNestedInput;
    companyEmployees?: Prisma.EmployeeUncheckedUpdateManyWithoutUserNestedInput;
    jobsPosted?: Prisma.JobUncheckedUpdateManyWithoutPostedByNestedInput;
    resumes?: Prisma.ResumeUncheckedUpdateManyWithoutUserNestedInput;
    jobApplications?: Prisma.JobApplicationUncheckedUpdateManyWithoutApplicantNestedInput;
    products?: Prisma.ProductUncheckedUpdateManyWithoutSellerNestedInput;
    productReviewsWritten?: Prisma.ProductReviewUncheckedUpdateManyWithoutReviewerNestedInput;
    productReviewsReceived?: Prisma.ProductReviewUncheckedUpdateManyWithoutRevieweeNestedInput;
    booksAuthored?: Prisma.BookUncheckedUpdateManyWithoutAuthorUserNestedInput;
    bookReviews?: Prisma.BookReviewUncheckedUpdateManyWithoutUserNestedInput;
    resourcesCreated?: Prisma.ResourceUncheckedUpdateManyWithoutAuthorNestedInput;
    portfolioProjects?: Prisma.PortfolioProjectUncheckedUpdateManyWithoutUserNestedInput;
    aiConversations?: Prisma.AIConversationUncheckedUpdateManyWithoutUserNestedInput;
};
export type UserCreateWithoutBookReviewsInput = {
    id?: string;
    name: string;
    username?: string | null;
    email: string;
    emailVerified?: boolean;
    image?: string | null;
    coverImage?: string | null;
    bio?: string | null;
    location?: string | null;
    skills?: Prisma.UserCreateskillsInput | string[];
    languages?: Prisma.UserCreatelanguagesInput | string[];
    timezone?: string | null;
    website?: string | null;
    github?: string | null;
    linkedin?: string | null;
    role?: string;
    status?: string;
    verificationStatus?: string;
    profileCompletion?: number;
    preferredCurrency?: string;
    stripeAccountId?: string | null;
    stripeOnboardingDone?: boolean;
    lastLoginAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    accounts?: Prisma.AccountCreateNestedManyWithoutUserInput;
    sessions?: Prisma.SessionCreateNestedManyWithoutUserInput;
    profile?: Prisma.ProfileCreateNestedOneWithoutUserInput;
    freelancerProfile?: Prisma.FreelancerProfileCreateNestedOneWithoutUserInput;
    buyerProfile?: Prisma.BuyerProfileCreateNestedOneWithoutUserInput;
    portfolioItems?: Prisma.PortfolioCreateNestedManyWithoutUserInput;
    services?: Prisma.ServiceCreateNestedManyWithoutUserInput;
    ordersAsBuyer?: Prisma.OrderCreateNestedManyWithoutBuyerInput;
    ordersAsFreelancer?: Prisma.OrderCreateNestedManyWithoutFreelancerInput;
    reviewsWritten?: Prisma.ReviewCreateNestedManyWithoutReviewerInput;
    reviewsReceived?: Prisma.ReviewCreateNestedManyWithoutRevieweeInput;
    favorites?: Prisma.FavoriteCreateNestedManyWithoutUserInput;
    cart?: Prisma.CartCreateNestedOneWithoutUserInput;
    conversationParts?: Prisma.ConversationParticipantCreateNestedManyWithoutUserInput;
    messages?: Prisma.MessageCreateNestedManyWithoutSenderInput;
    notifications?: Prisma.NotificationCreateNestedManyWithoutUserInput;
    payouts?: Prisma.PayoutCreateNestedManyWithoutFreelancerInput;
    disputes?: Prisma.DisputeCreateNestedManyWithoutOpenerInput;
    reports?: Prisma.ReportCreateNestedManyWithoutReporterInput;
    achievements?: Prisma.UserAchievementCreateNestedManyWithoutUserInput;
    xp?: Prisma.UserXPCreateNestedOneWithoutUserInput;
    searchHistory?: Prisma.SearchHistoryCreateNestedManyWithoutUserInput;
    userRoles?: Prisma.UserRoleCreateNestedManyWithoutUserInput;
    companiesOwned?: Prisma.CompanyCreateNestedManyWithoutOwnerInput;
    companyEmployees?: Prisma.EmployeeCreateNestedManyWithoutUserInput;
    jobsPosted?: Prisma.JobCreateNestedManyWithoutPostedByInput;
    resumes?: Prisma.ResumeCreateNestedManyWithoutUserInput;
    jobApplications?: Prisma.JobApplicationCreateNestedManyWithoutApplicantInput;
    products?: Prisma.ProductCreateNestedManyWithoutSellerInput;
    productReviewsWritten?: Prisma.ProductReviewCreateNestedManyWithoutReviewerInput;
    productReviewsReceived?: Prisma.ProductReviewCreateNestedManyWithoutRevieweeInput;
    booksAuthored?: Prisma.BookCreateNestedManyWithoutAuthorUserInput;
    bookPurchases?: Prisma.BookPurchaseCreateNestedManyWithoutUserInput;
    resourcesCreated?: Prisma.ResourceCreateNestedManyWithoutAuthorInput;
    portfolioProjects?: Prisma.PortfolioProjectCreateNestedManyWithoutUserInput;
    aiConversations?: Prisma.AIConversationCreateNestedManyWithoutUserInput;
};
export type UserUncheckedCreateWithoutBookReviewsInput = {
    id?: string;
    name: string;
    username?: string | null;
    email: string;
    emailVerified?: boolean;
    image?: string | null;
    coverImage?: string | null;
    bio?: string | null;
    location?: string | null;
    skills?: Prisma.UserCreateskillsInput | string[];
    languages?: Prisma.UserCreatelanguagesInput | string[];
    timezone?: string | null;
    website?: string | null;
    github?: string | null;
    linkedin?: string | null;
    role?: string;
    status?: string;
    verificationStatus?: string;
    profileCompletion?: number;
    preferredCurrency?: string;
    stripeAccountId?: string | null;
    stripeOnboardingDone?: boolean;
    lastLoginAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    accounts?: Prisma.AccountUncheckedCreateNestedManyWithoutUserInput;
    sessions?: Prisma.SessionUncheckedCreateNestedManyWithoutUserInput;
    profile?: Prisma.ProfileUncheckedCreateNestedOneWithoutUserInput;
    freelancerProfile?: Prisma.FreelancerProfileUncheckedCreateNestedOneWithoutUserInput;
    buyerProfile?: Prisma.BuyerProfileUncheckedCreateNestedOneWithoutUserInput;
    portfolioItems?: Prisma.PortfolioUncheckedCreateNestedManyWithoutUserInput;
    services?: Prisma.ServiceUncheckedCreateNestedManyWithoutUserInput;
    ordersAsBuyer?: Prisma.OrderUncheckedCreateNestedManyWithoutBuyerInput;
    ordersAsFreelancer?: Prisma.OrderUncheckedCreateNestedManyWithoutFreelancerInput;
    reviewsWritten?: Prisma.ReviewUncheckedCreateNestedManyWithoutReviewerInput;
    reviewsReceived?: Prisma.ReviewUncheckedCreateNestedManyWithoutRevieweeInput;
    favorites?: Prisma.FavoriteUncheckedCreateNestedManyWithoutUserInput;
    cart?: Prisma.CartUncheckedCreateNestedOneWithoutUserInput;
    conversationParts?: Prisma.ConversationParticipantUncheckedCreateNestedManyWithoutUserInput;
    messages?: Prisma.MessageUncheckedCreateNestedManyWithoutSenderInput;
    notifications?: Prisma.NotificationUncheckedCreateNestedManyWithoutUserInput;
    payouts?: Prisma.PayoutUncheckedCreateNestedManyWithoutFreelancerInput;
    disputes?: Prisma.DisputeUncheckedCreateNestedManyWithoutOpenerInput;
    reports?: Prisma.ReportUncheckedCreateNestedManyWithoutReporterInput;
    achievements?: Prisma.UserAchievementUncheckedCreateNestedManyWithoutUserInput;
    xp?: Prisma.UserXPUncheckedCreateNestedOneWithoutUserInput;
    searchHistory?: Prisma.SearchHistoryUncheckedCreateNestedManyWithoutUserInput;
    userRoles?: Prisma.UserRoleUncheckedCreateNestedManyWithoutUserInput;
    companiesOwned?: Prisma.CompanyUncheckedCreateNestedManyWithoutOwnerInput;
    companyEmployees?: Prisma.EmployeeUncheckedCreateNestedManyWithoutUserInput;
    jobsPosted?: Prisma.JobUncheckedCreateNestedManyWithoutPostedByInput;
    resumes?: Prisma.ResumeUncheckedCreateNestedManyWithoutUserInput;
    jobApplications?: Prisma.JobApplicationUncheckedCreateNestedManyWithoutApplicantInput;
    products?: Prisma.ProductUncheckedCreateNestedManyWithoutSellerInput;
    productReviewsWritten?: Prisma.ProductReviewUncheckedCreateNestedManyWithoutReviewerInput;
    productReviewsReceived?: Prisma.ProductReviewUncheckedCreateNestedManyWithoutRevieweeInput;
    booksAuthored?: Prisma.BookUncheckedCreateNestedManyWithoutAuthorUserInput;
    bookPurchases?: Prisma.BookPurchaseUncheckedCreateNestedManyWithoutUserInput;
    resourcesCreated?: Prisma.ResourceUncheckedCreateNestedManyWithoutAuthorInput;
    portfolioProjects?: Prisma.PortfolioProjectUncheckedCreateNestedManyWithoutUserInput;
    aiConversations?: Prisma.AIConversationUncheckedCreateNestedManyWithoutUserInput;
};
export type UserCreateOrConnectWithoutBookReviewsInput = {
    where: Prisma.UserWhereUniqueInput;
    create: Prisma.XOR<Prisma.UserCreateWithoutBookReviewsInput, Prisma.UserUncheckedCreateWithoutBookReviewsInput>;
};
export type UserUpsertWithoutBookReviewsInput = {
    update: Prisma.XOR<Prisma.UserUpdateWithoutBookReviewsInput, Prisma.UserUncheckedUpdateWithoutBookReviewsInput>;
    create: Prisma.XOR<Prisma.UserCreateWithoutBookReviewsInput, Prisma.UserUncheckedCreateWithoutBookReviewsInput>;
    where?: Prisma.UserWhereInput;
};
export type UserUpdateToOneWithWhereWithoutBookReviewsInput = {
    where?: Prisma.UserWhereInput;
    data: Prisma.XOR<Prisma.UserUpdateWithoutBookReviewsInput, Prisma.UserUncheckedUpdateWithoutBookReviewsInput>;
};
export type UserUpdateWithoutBookReviewsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    username?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    emailVerified?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    image?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    coverImage?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    bio?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    location?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    skills?: Prisma.UserUpdateskillsInput | string[];
    languages?: Prisma.UserUpdatelanguagesInput | string[];
    timezone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    website?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    github?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    linkedin?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    role?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    verificationStatus?: Prisma.StringFieldUpdateOperationsInput | string;
    profileCompletion?: Prisma.IntFieldUpdateOperationsInput | number;
    preferredCurrency?: Prisma.StringFieldUpdateOperationsInput | string;
    stripeAccountId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    stripeOnboardingDone?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    lastLoginAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    accounts?: Prisma.AccountUpdateManyWithoutUserNestedInput;
    sessions?: Prisma.SessionUpdateManyWithoutUserNestedInput;
    profile?: Prisma.ProfileUpdateOneWithoutUserNestedInput;
    freelancerProfile?: Prisma.FreelancerProfileUpdateOneWithoutUserNestedInput;
    buyerProfile?: Prisma.BuyerProfileUpdateOneWithoutUserNestedInput;
    portfolioItems?: Prisma.PortfolioUpdateManyWithoutUserNestedInput;
    services?: Prisma.ServiceUpdateManyWithoutUserNestedInput;
    ordersAsBuyer?: Prisma.OrderUpdateManyWithoutBuyerNestedInput;
    ordersAsFreelancer?: Prisma.OrderUpdateManyWithoutFreelancerNestedInput;
    reviewsWritten?: Prisma.ReviewUpdateManyWithoutReviewerNestedInput;
    reviewsReceived?: Prisma.ReviewUpdateManyWithoutRevieweeNestedInput;
    favorites?: Prisma.FavoriteUpdateManyWithoutUserNestedInput;
    cart?: Prisma.CartUpdateOneWithoutUserNestedInput;
    conversationParts?: Prisma.ConversationParticipantUpdateManyWithoutUserNestedInput;
    messages?: Prisma.MessageUpdateManyWithoutSenderNestedInput;
    notifications?: Prisma.NotificationUpdateManyWithoutUserNestedInput;
    payouts?: Prisma.PayoutUpdateManyWithoutFreelancerNestedInput;
    disputes?: Prisma.DisputeUpdateManyWithoutOpenerNestedInput;
    reports?: Prisma.ReportUpdateManyWithoutReporterNestedInput;
    achievements?: Prisma.UserAchievementUpdateManyWithoutUserNestedInput;
    xp?: Prisma.UserXPUpdateOneWithoutUserNestedInput;
    searchHistory?: Prisma.SearchHistoryUpdateManyWithoutUserNestedInput;
    userRoles?: Prisma.UserRoleUpdateManyWithoutUserNestedInput;
    companiesOwned?: Prisma.CompanyUpdateManyWithoutOwnerNestedInput;
    companyEmployees?: Prisma.EmployeeUpdateManyWithoutUserNestedInput;
    jobsPosted?: Prisma.JobUpdateManyWithoutPostedByNestedInput;
    resumes?: Prisma.ResumeUpdateManyWithoutUserNestedInput;
    jobApplications?: Prisma.JobApplicationUpdateManyWithoutApplicantNestedInput;
    products?: Prisma.ProductUpdateManyWithoutSellerNestedInput;
    productReviewsWritten?: Prisma.ProductReviewUpdateManyWithoutReviewerNestedInput;
    productReviewsReceived?: Prisma.ProductReviewUpdateManyWithoutRevieweeNestedInput;
    booksAuthored?: Prisma.BookUpdateManyWithoutAuthorUserNestedInput;
    bookPurchases?: Prisma.BookPurchaseUpdateManyWithoutUserNestedInput;
    resourcesCreated?: Prisma.ResourceUpdateManyWithoutAuthorNestedInput;
    portfolioProjects?: Prisma.PortfolioProjectUpdateManyWithoutUserNestedInput;
    aiConversations?: Prisma.AIConversationUpdateManyWithoutUserNestedInput;
};
export type UserUncheckedUpdateWithoutBookReviewsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    username?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    emailVerified?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    image?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    coverImage?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    bio?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    location?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    skills?: Prisma.UserUpdateskillsInput | string[];
    languages?: Prisma.UserUpdatelanguagesInput | string[];
    timezone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    website?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    github?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    linkedin?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    role?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    verificationStatus?: Prisma.StringFieldUpdateOperationsInput | string;
    profileCompletion?: Prisma.IntFieldUpdateOperationsInput | number;
    preferredCurrency?: Prisma.StringFieldUpdateOperationsInput | string;
    stripeAccountId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    stripeOnboardingDone?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    lastLoginAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    accounts?: Prisma.AccountUncheckedUpdateManyWithoutUserNestedInput;
    sessions?: Prisma.SessionUncheckedUpdateManyWithoutUserNestedInput;
    profile?: Prisma.ProfileUncheckedUpdateOneWithoutUserNestedInput;
    freelancerProfile?: Prisma.FreelancerProfileUncheckedUpdateOneWithoutUserNestedInput;
    buyerProfile?: Prisma.BuyerProfileUncheckedUpdateOneWithoutUserNestedInput;
    portfolioItems?: Prisma.PortfolioUncheckedUpdateManyWithoutUserNestedInput;
    services?: Prisma.ServiceUncheckedUpdateManyWithoutUserNestedInput;
    ordersAsBuyer?: Prisma.OrderUncheckedUpdateManyWithoutBuyerNestedInput;
    ordersAsFreelancer?: Prisma.OrderUncheckedUpdateManyWithoutFreelancerNestedInput;
    reviewsWritten?: Prisma.ReviewUncheckedUpdateManyWithoutReviewerNestedInput;
    reviewsReceived?: Prisma.ReviewUncheckedUpdateManyWithoutRevieweeNestedInput;
    favorites?: Prisma.FavoriteUncheckedUpdateManyWithoutUserNestedInput;
    cart?: Prisma.CartUncheckedUpdateOneWithoutUserNestedInput;
    conversationParts?: Prisma.ConversationParticipantUncheckedUpdateManyWithoutUserNestedInput;
    messages?: Prisma.MessageUncheckedUpdateManyWithoutSenderNestedInput;
    notifications?: Prisma.NotificationUncheckedUpdateManyWithoutUserNestedInput;
    payouts?: Prisma.PayoutUncheckedUpdateManyWithoutFreelancerNestedInput;
    disputes?: Prisma.DisputeUncheckedUpdateManyWithoutOpenerNestedInput;
    reports?: Prisma.ReportUncheckedUpdateManyWithoutReporterNestedInput;
    achievements?: Prisma.UserAchievementUncheckedUpdateManyWithoutUserNestedInput;
    xp?: Prisma.UserXPUncheckedUpdateOneWithoutUserNestedInput;
    searchHistory?: Prisma.SearchHistoryUncheckedUpdateManyWithoutUserNestedInput;
    userRoles?: Prisma.UserRoleUncheckedUpdateManyWithoutUserNestedInput;
    companiesOwned?: Prisma.CompanyUncheckedUpdateManyWithoutOwnerNestedInput;
    companyEmployees?: Prisma.EmployeeUncheckedUpdateManyWithoutUserNestedInput;
    jobsPosted?: Prisma.JobUncheckedUpdateManyWithoutPostedByNestedInput;
    resumes?: Prisma.ResumeUncheckedUpdateManyWithoutUserNestedInput;
    jobApplications?: Prisma.JobApplicationUncheckedUpdateManyWithoutApplicantNestedInput;
    products?: Prisma.ProductUncheckedUpdateManyWithoutSellerNestedInput;
    productReviewsWritten?: Prisma.ProductReviewUncheckedUpdateManyWithoutReviewerNestedInput;
    productReviewsReceived?: Prisma.ProductReviewUncheckedUpdateManyWithoutRevieweeNestedInput;
    booksAuthored?: Prisma.BookUncheckedUpdateManyWithoutAuthorUserNestedInput;
    bookPurchases?: Prisma.BookPurchaseUncheckedUpdateManyWithoutUserNestedInput;
    resourcesCreated?: Prisma.ResourceUncheckedUpdateManyWithoutAuthorNestedInput;
    portfolioProjects?: Prisma.PortfolioProjectUncheckedUpdateManyWithoutUserNestedInput;
    aiConversations?: Prisma.AIConversationUncheckedUpdateManyWithoutUserNestedInput;
};
export type UserCreateWithoutResourcesCreatedInput = {
    id?: string;
    name: string;
    username?: string | null;
    email: string;
    emailVerified?: boolean;
    image?: string | null;
    coverImage?: string | null;
    bio?: string | null;
    location?: string | null;
    skills?: Prisma.UserCreateskillsInput | string[];
    languages?: Prisma.UserCreatelanguagesInput | string[];
    timezone?: string | null;
    website?: string | null;
    github?: string | null;
    linkedin?: string | null;
    role?: string;
    status?: string;
    verificationStatus?: string;
    profileCompletion?: number;
    preferredCurrency?: string;
    stripeAccountId?: string | null;
    stripeOnboardingDone?: boolean;
    lastLoginAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    accounts?: Prisma.AccountCreateNestedManyWithoutUserInput;
    sessions?: Prisma.SessionCreateNestedManyWithoutUserInput;
    profile?: Prisma.ProfileCreateNestedOneWithoutUserInput;
    freelancerProfile?: Prisma.FreelancerProfileCreateNestedOneWithoutUserInput;
    buyerProfile?: Prisma.BuyerProfileCreateNestedOneWithoutUserInput;
    portfolioItems?: Prisma.PortfolioCreateNestedManyWithoutUserInput;
    services?: Prisma.ServiceCreateNestedManyWithoutUserInput;
    ordersAsBuyer?: Prisma.OrderCreateNestedManyWithoutBuyerInput;
    ordersAsFreelancer?: Prisma.OrderCreateNestedManyWithoutFreelancerInput;
    reviewsWritten?: Prisma.ReviewCreateNestedManyWithoutReviewerInput;
    reviewsReceived?: Prisma.ReviewCreateNestedManyWithoutRevieweeInput;
    favorites?: Prisma.FavoriteCreateNestedManyWithoutUserInput;
    cart?: Prisma.CartCreateNestedOneWithoutUserInput;
    conversationParts?: Prisma.ConversationParticipantCreateNestedManyWithoutUserInput;
    messages?: Prisma.MessageCreateNestedManyWithoutSenderInput;
    notifications?: Prisma.NotificationCreateNestedManyWithoutUserInput;
    payouts?: Prisma.PayoutCreateNestedManyWithoutFreelancerInput;
    disputes?: Prisma.DisputeCreateNestedManyWithoutOpenerInput;
    reports?: Prisma.ReportCreateNestedManyWithoutReporterInput;
    achievements?: Prisma.UserAchievementCreateNestedManyWithoutUserInput;
    xp?: Prisma.UserXPCreateNestedOneWithoutUserInput;
    searchHistory?: Prisma.SearchHistoryCreateNestedManyWithoutUserInput;
    userRoles?: Prisma.UserRoleCreateNestedManyWithoutUserInput;
    companiesOwned?: Prisma.CompanyCreateNestedManyWithoutOwnerInput;
    companyEmployees?: Prisma.EmployeeCreateNestedManyWithoutUserInput;
    jobsPosted?: Prisma.JobCreateNestedManyWithoutPostedByInput;
    resumes?: Prisma.ResumeCreateNestedManyWithoutUserInput;
    jobApplications?: Prisma.JobApplicationCreateNestedManyWithoutApplicantInput;
    products?: Prisma.ProductCreateNestedManyWithoutSellerInput;
    productReviewsWritten?: Prisma.ProductReviewCreateNestedManyWithoutReviewerInput;
    productReviewsReceived?: Prisma.ProductReviewCreateNestedManyWithoutRevieweeInput;
    booksAuthored?: Prisma.BookCreateNestedManyWithoutAuthorUserInput;
    bookPurchases?: Prisma.BookPurchaseCreateNestedManyWithoutUserInput;
    bookReviews?: Prisma.BookReviewCreateNestedManyWithoutUserInput;
    portfolioProjects?: Prisma.PortfolioProjectCreateNestedManyWithoutUserInput;
    aiConversations?: Prisma.AIConversationCreateNestedManyWithoutUserInput;
};
export type UserUncheckedCreateWithoutResourcesCreatedInput = {
    id?: string;
    name: string;
    username?: string | null;
    email: string;
    emailVerified?: boolean;
    image?: string | null;
    coverImage?: string | null;
    bio?: string | null;
    location?: string | null;
    skills?: Prisma.UserCreateskillsInput | string[];
    languages?: Prisma.UserCreatelanguagesInput | string[];
    timezone?: string | null;
    website?: string | null;
    github?: string | null;
    linkedin?: string | null;
    role?: string;
    status?: string;
    verificationStatus?: string;
    profileCompletion?: number;
    preferredCurrency?: string;
    stripeAccountId?: string | null;
    stripeOnboardingDone?: boolean;
    lastLoginAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    accounts?: Prisma.AccountUncheckedCreateNestedManyWithoutUserInput;
    sessions?: Prisma.SessionUncheckedCreateNestedManyWithoutUserInput;
    profile?: Prisma.ProfileUncheckedCreateNestedOneWithoutUserInput;
    freelancerProfile?: Prisma.FreelancerProfileUncheckedCreateNestedOneWithoutUserInput;
    buyerProfile?: Prisma.BuyerProfileUncheckedCreateNestedOneWithoutUserInput;
    portfolioItems?: Prisma.PortfolioUncheckedCreateNestedManyWithoutUserInput;
    services?: Prisma.ServiceUncheckedCreateNestedManyWithoutUserInput;
    ordersAsBuyer?: Prisma.OrderUncheckedCreateNestedManyWithoutBuyerInput;
    ordersAsFreelancer?: Prisma.OrderUncheckedCreateNestedManyWithoutFreelancerInput;
    reviewsWritten?: Prisma.ReviewUncheckedCreateNestedManyWithoutReviewerInput;
    reviewsReceived?: Prisma.ReviewUncheckedCreateNestedManyWithoutRevieweeInput;
    favorites?: Prisma.FavoriteUncheckedCreateNestedManyWithoutUserInput;
    cart?: Prisma.CartUncheckedCreateNestedOneWithoutUserInput;
    conversationParts?: Prisma.ConversationParticipantUncheckedCreateNestedManyWithoutUserInput;
    messages?: Prisma.MessageUncheckedCreateNestedManyWithoutSenderInput;
    notifications?: Prisma.NotificationUncheckedCreateNestedManyWithoutUserInput;
    payouts?: Prisma.PayoutUncheckedCreateNestedManyWithoutFreelancerInput;
    disputes?: Prisma.DisputeUncheckedCreateNestedManyWithoutOpenerInput;
    reports?: Prisma.ReportUncheckedCreateNestedManyWithoutReporterInput;
    achievements?: Prisma.UserAchievementUncheckedCreateNestedManyWithoutUserInput;
    xp?: Prisma.UserXPUncheckedCreateNestedOneWithoutUserInput;
    searchHistory?: Prisma.SearchHistoryUncheckedCreateNestedManyWithoutUserInput;
    userRoles?: Prisma.UserRoleUncheckedCreateNestedManyWithoutUserInput;
    companiesOwned?: Prisma.CompanyUncheckedCreateNestedManyWithoutOwnerInput;
    companyEmployees?: Prisma.EmployeeUncheckedCreateNestedManyWithoutUserInput;
    jobsPosted?: Prisma.JobUncheckedCreateNestedManyWithoutPostedByInput;
    resumes?: Prisma.ResumeUncheckedCreateNestedManyWithoutUserInput;
    jobApplications?: Prisma.JobApplicationUncheckedCreateNestedManyWithoutApplicantInput;
    products?: Prisma.ProductUncheckedCreateNestedManyWithoutSellerInput;
    productReviewsWritten?: Prisma.ProductReviewUncheckedCreateNestedManyWithoutReviewerInput;
    productReviewsReceived?: Prisma.ProductReviewUncheckedCreateNestedManyWithoutRevieweeInput;
    booksAuthored?: Prisma.BookUncheckedCreateNestedManyWithoutAuthorUserInput;
    bookPurchases?: Prisma.BookPurchaseUncheckedCreateNestedManyWithoutUserInput;
    bookReviews?: Prisma.BookReviewUncheckedCreateNestedManyWithoutUserInput;
    portfolioProjects?: Prisma.PortfolioProjectUncheckedCreateNestedManyWithoutUserInput;
    aiConversations?: Prisma.AIConversationUncheckedCreateNestedManyWithoutUserInput;
};
export type UserCreateOrConnectWithoutResourcesCreatedInput = {
    where: Prisma.UserWhereUniqueInput;
    create: Prisma.XOR<Prisma.UserCreateWithoutResourcesCreatedInput, Prisma.UserUncheckedCreateWithoutResourcesCreatedInput>;
};
export type UserUpsertWithoutResourcesCreatedInput = {
    update: Prisma.XOR<Prisma.UserUpdateWithoutResourcesCreatedInput, Prisma.UserUncheckedUpdateWithoutResourcesCreatedInput>;
    create: Prisma.XOR<Prisma.UserCreateWithoutResourcesCreatedInput, Prisma.UserUncheckedCreateWithoutResourcesCreatedInput>;
    where?: Prisma.UserWhereInput;
};
export type UserUpdateToOneWithWhereWithoutResourcesCreatedInput = {
    where?: Prisma.UserWhereInput;
    data: Prisma.XOR<Prisma.UserUpdateWithoutResourcesCreatedInput, Prisma.UserUncheckedUpdateWithoutResourcesCreatedInput>;
};
export type UserUpdateWithoutResourcesCreatedInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    username?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    emailVerified?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    image?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    coverImage?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    bio?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    location?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    skills?: Prisma.UserUpdateskillsInput | string[];
    languages?: Prisma.UserUpdatelanguagesInput | string[];
    timezone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    website?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    github?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    linkedin?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    role?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    verificationStatus?: Prisma.StringFieldUpdateOperationsInput | string;
    profileCompletion?: Prisma.IntFieldUpdateOperationsInput | number;
    preferredCurrency?: Prisma.StringFieldUpdateOperationsInput | string;
    stripeAccountId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    stripeOnboardingDone?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    lastLoginAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    accounts?: Prisma.AccountUpdateManyWithoutUserNestedInput;
    sessions?: Prisma.SessionUpdateManyWithoutUserNestedInput;
    profile?: Prisma.ProfileUpdateOneWithoutUserNestedInput;
    freelancerProfile?: Prisma.FreelancerProfileUpdateOneWithoutUserNestedInput;
    buyerProfile?: Prisma.BuyerProfileUpdateOneWithoutUserNestedInput;
    portfolioItems?: Prisma.PortfolioUpdateManyWithoutUserNestedInput;
    services?: Prisma.ServiceUpdateManyWithoutUserNestedInput;
    ordersAsBuyer?: Prisma.OrderUpdateManyWithoutBuyerNestedInput;
    ordersAsFreelancer?: Prisma.OrderUpdateManyWithoutFreelancerNestedInput;
    reviewsWritten?: Prisma.ReviewUpdateManyWithoutReviewerNestedInput;
    reviewsReceived?: Prisma.ReviewUpdateManyWithoutRevieweeNestedInput;
    favorites?: Prisma.FavoriteUpdateManyWithoutUserNestedInput;
    cart?: Prisma.CartUpdateOneWithoutUserNestedInput;
    conversationParts?: Prisma.ConversationParticipantUpdateManyWithoutUserNestedInput;
    messages?: Prisma.MessageUpdateManyWithoutSenderNestedInput;
    notifications?: Prisma.NotificationUpdateManyWithoutUserNestedInput;
    payouts?: Prisma.PayoutUpdateManyWithoutFreelancerNestedInput;
    disputes?: Prisma.DisputeUpdateManyWithoutOpenerNestedInput;
    reports?: Prisma.ReportUpdateManyWithoutReporterNestedInput;
    achievements?: Prisma.UserAchievementUpdateManyWithoutUserNestedInput;
    xp?: Prisma.UserXPUpdateOneWithoutUserNestedInput;
    searchHistory?: Prisma.SearchHistoryUpdateManyWithoutUserNestedInput;
    userRoles?: Prisma.UserRoleUpdateManyWithoutUserNestedInput;
    companiesOwned?: Prisma.CompanyUpdateManyWithoutOwnerNestedInput;
    companyEmployees?: Prisma.EmployeeUpdateManyWithoutUserNestedInput;
    jobsPosted?: Prisma.JobUpdateManyWithoutPostedByNestedInput;
    resumes?: Prisma.ResumeUpdateManyWithoutUserNestedInput;
    jobApplications?: Prisma.JobApplicationUpdateManyWithoutApplicantNestedInput;
    products?: Prisma.ProductUpdateManyWithoutSellerNestedInput;
    productReviewsWritten?: Prisma.ProductReviewUpdateManyWithoutReviewerNestedInput;
    productReviewsReceived?: Prisma.ProductReviewUpdateManyWithoutRevieweeNestedInput;
    booksAuthored?: Prisma.BookUpdateManyWithoutAuthorUserNestedInput;
    bookPurchases?: Prisma.BookPurchaseUpdateManyWithoutUserNestedInput;
    bookReviews?: Prisma.BookReviewUpdateManyWithoutUserNestedInput;
    portfolioProjects?: Prisma.PortfolioProjectUpdateManyWithoutUserNestedInput;
    aiConversations?: Prisma.AIConversationUpdateManyWithoutUserNestedInput;
};
export type UserUncheckedUpdateWithoutResourcesCreatedInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    username?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    emailVerified?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    image?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    coverImage?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    bio?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    location?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    skills?: Prisma.UserUpdateskillsInput | string[];
    languages?: Prisma.UserUpdatelanguagesInput | string[];
    timezone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    website?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    github?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    linkedin?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    role?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    verificationStatus?: Prisma.StringFieldUpdateOperationsInput | string;
    profileCompletion?: Prisma.IntFieldUpdateOperationsInput | number;
    preferredCurrency?: Prisma.StringFieldUpdateOperationsInput | string;
    stripeAccountId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    stripeOnboardingDone?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    lastLoginAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    accounts?: Prisma.AccountUncheckedUpdateManyWithoutUserNestedInput;
    sessions?: Prisma.SessionUncheckedUpdateManyWithoutUserNestedInput;
    profile?: Prisma.ProfileUncheckedUpdateOneWithoutUserNestedInput;
    freelancerProfile?: Prisma.FreelancerProfileUncheckedUpdateOneWithoutUserNestedInput;
    buyerProfile?: Prisma.BuyerProfileUncheckedUpdateOneWithoutUserNestedInput;
    portfolioItems?: Prisma.PortfolioUncheckedUpdateManyWithoutUserNestedInput;
    services?: Prisma.ServiceUncheckedUpdateManyWithoutUserNestedInput;
    ordersAsBuyer?: Prisma.OrderUncheckedUpdateManyWithoutBuyerNestedInput;
    ordersAsFreelancer?: Prisma.OrderUncheckedUpdateManyWithoutFreelancerNestedInput;
    reviewsWritten?: Prisma.ReviewUncheckedUpdateManyWithoutReviewerNestedInput;
    reviewsReceived?: Prisma.ReviewUncheckedUpdateManyWithoutRevieweeNestedInput;
    favorites?: Prisma.FavoriteUncheckedUpdateManyWithoutUserNestedInput;
    cart?: Prisma.CartUncheckedUpdateOneWithoutUserNestedInput;
    conversationParts?: Prisma.ConversationParticipantUncheckedUpdateManyWithoutUserNestedInput;
    messages?: Prisma.MessageUncheckedUpdateManyWithoutSenderNestedInput;
    notifications?: Prisma.NotificationUncheckedUpdateManyWithoutUserNestedInput;
    payouts?: Prisma.PayoutUncheckedUpdateManyWithoutFreelancerNestedInput;
    disputes?: Prisma.DisputeUncheckedUpdateManyWithoutOpenerNestedInput;
    reports?: Prisma.ReportUncheckedUpdateManyWithoutReporterNestedInput;
    achievements?: Prisma.UserAchievementUncheckedUpdateManyWithoutUserNestedInput;
    xp?: Prisma.UserXPUncheckedUpdateOneWithoutUserNestedInput;
    searchHistory?: Prisma.SearchHistoryUncheckedUpdateManyWithoutUserNestedInput;
    userRoles?: Prisma.UserRoleUncheckedUpdateManyWithoutUserNestedInput;
    companiesOwned?: Prisma.CompanyUncheckedUpdateManyWithoutOwnerNestedInput;
    companyEmployees?: Prisma.EmployeeUncheckedUpdateManyWithoutUserNestedInput;
    jobsPosted?: Prisma.JobUncheckedUpdateManyWithoutPostedByNestedInput;
    resumes?: Prisma.ResumeUncheckedUpdateManyWithoutUserNestedInput;
    jobApplications?: Prisma.JobApplicationUncheckedUpdateManyWithoutApplicantNestedInput;
    products?: Prisma.ProductUncheckedUpdateManyWithoutSellerNestedInput;
    productReviewsWritten?: Prisma.ProductReviewUncheckedUpdateManyWithoutReviewerNestedInput;
    productReviewsReceived?: Prisma.ProductReviewUncheckedUpdateManyWithoutRevieweeNestedInput;
    booksAuthored?: Prisma.BookUncheckedUpdateManyWithoutAuthorUserNestedInput;
    bookPurchases?: Prisma.BookPurchaseUncheckedUpdateManyWithoutUserNestedInput;
    bookReviews?: Prisma.BookReviewUncheckedUpdateManyWithoutUserNestedInput;
    portfolioProjects?: Prisma.PortfolioProjectUncheckedUpdateManyWithoutUserNestedInput;
    aiConversations?: Prisma.AIConversationUncheckedUpdateManyWithoutUserNestedInput;
};
export type UserCreateWithoutPortfolioProjectsInput = {
    id?: string;
    name: string;
    username?: string | null;
    email: string;
    emailVerified?: boolean;
    image?: string | null;
    coverImage?: string | null;
    bio?: string | null;
    location?: string | null;
    skills?: Prisma.UserCreateskillsInput | string[];
    languages?: Prisma.UserCreatelanguagesInput | string[];
    timezone?: string | null;
    website?: string | null;
    github?: string | null;
    linkedin?: string | null;
    role?: string;
    status?: string;
    verificationStatus?: string;
    profileCompletion?: number;
    preferredCurrency?: string;
    stripeAccountId?: string | null;
    stripeOnboardingDone?: boolean;
    lastLoginAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    accounts?: Prisma.AccountCreateNestedManyWithoutUserInput;
    sessions?: Prisma.SessionCreateNestedManyWithoutUserInput;
    profile?: Prisma.ProfileCreateNestedOneWithoutUserInput;
    freelancerProfile?: Prisma.FreelancerProfileCreateNestedOneWithoutUserInput;
    buyerProfile?: Prisma.BuyerProfileCreateNestedOneWithoutUserInput;
    portfolioItems?: Prisma.PortfolioCreateNestedManyWithoutUserInput;
    services?: Prisma.ServiceCreateNestedManyWithoutUserInput;
    ordersAsBuyer?: Prisma.OrderCreateNestedManyWithoutBuyerInput;
    ordersAsFreelancer?: Prisma.OrderCreateNestedManyWithoutFreelancerInput;
    reviewsWritten?: Prisma.ReviewCreateNestedManyWithoutReviewerInput;
    reviewsReceived?: Prisma.ReviewCreateNestedManyWithoutRevieweeInput;
    favorites?: Prisma.FavoriteCreateNestedManyWithoutUserInput;
    cart?: Prisma.CartCreateNestedOneWithoutUserInput;
    conversationParts?: Prisma.ConversationParticipantCreateNestedManyWithoutUserInput;
    messages?: Prisma.MessageCreateNestedManyWithoutSenderInput;
    notifications?: Prisma.NotificationCreateNestedManyWithoutUserInput;
    payouts?: Prisma.PayoutCreateNestedManyWithoutFreelancerInput;
    disputes?: Prisma.DisputeCreateNestedManyWithoutOpenerInput;
    reports?: Prisma.ReportCreateNestedManyWithoutReporterInput;
    achievements?: Prisma.UserAchievementCreateNestedManyWithoutUserInput;
    xp?: Prisma.UserXPCreateNestedOneWithoutUserInput;
    searchHistory?: Prisma.SearchHistoryCreateNestedManyWithoutUserInput;
    userRoles?: Prisma.UserRoleCreateNestedManyWithoutUserInput;
    companiesOwned?: Prisma.CompanyCreateNestedManyWithoutOwnerInput;
    companyEmployees?: Prisma.EmployeeCreateNestedManyWithoutUserInput;
    jobsPosted?: Prisma.JobCreateNestedManyWithoutPostedByInput;
    resumes?: Prisma.ResumeCreateNestedManyWithoutUserInput;
    jobApplications?: Prisma.JobApplicationCreateNestedManyWithoutApplicantInput;
    products?: Prisma.ProductCreateNestedManyWithoutSellerInput;
    productReviewsWritten?: Prisma.ProductReviewCreateNestedManyWithoutReviewerInput;
    productReviewsReceived?: Prisma.ProductReviewCreateNestedManyWithoutRevieweeInput;
    booksAuthored?: Prisma.BookCreateNestedManyWithoutAuthorUserInput;
    bookPurchases?: Prisma.BookPurchaseCreateNestedManyWithoutUserInput;
    bookReviews?: Prisma.BookReviewCreateNestedManyWithoutUserInput;
    resourcesCreated?: Prisma.ResourceCreateNestedManyWithoutAuthorInput;
    aiConversations?: Prisma.AIConversationCreateNestedManyWithoutUserInput;
};
export type UserUncheckedCreateWithoutPortfolioProjectsInput = {
    id?: string;
    name: string;
    username?: string | null;
    email: string;
    emailVerified?: boolean;
    image?: string | null;
    coverImage?: string | null;
    bio?: string | null;
    location?: string | null;
    skills?: Prisma.UserCreateskillsInput | string[];
    languages?: Prisma.UserCreatelanguagesInput | string[];
    timezone?: string | null;
    website?: string | null;
    github?: string | null;
    linkedin?: string | null;
    role?: string;
    status?: string;
    verificationStatus?: string;
    profileCompletion?: number;
    preferredCurrency?: string;
    stripeAccountId?: string | null;
    stripeOnboardingDone?: boolean;
    lastLoginAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    accounts?: Prisma.AccountUncheckedCreateNestedManyWithoutUserInput;
    sessions?: Prisma.SessionUncheckedCreateNestedManyWithoutUserInput;
    profile?: Prisma.ProfileUncheckedCreateNestedOneWithoutUserInput;
    freelancerProfile?: Prisma.FreelancerProfileUncheckedCreateNestedOneWithoutUserInput;
    buyerProfile?: Prisma.BuyerProfileUncheckedCreateNestedOneWithoutUserInput;
    portfolioItems?: Prisma.PortfolioUncheckedCreateNestedManyWithoutUserInput;
    services?: Prisma.ServiceUncheckedCreateNestedManyWithoutUserInput;
    ordersAsBuyer?: Prisma.OrderUncheckedCreateNestedManyWithoutBuyerInput;
    ordersAsFreelancer?: Prisma.OrderUncheckedCreateNestedManyWithoutFreelancerInput;
    reviewsWritten?: Prisma.ReviewUncheckedCreateNestedManyWithoutReviewerInput;
    reviewsReceived?: Prisma.ReviewUncheckedCreateNestedManyWithoutRevieweeInput;
    favorites?: Prisma.FavoriteUncheckedCreateNestedManyWithoutUserInput;
    cart?: Prisma.CartUncheckedCreateNestedOneWithoutUserInput;
    conversationParts?: Prisma.ConversationParticipantUncheckedCreateNestedManyWithoutUserInput;
    messages?: Prisma.MessageUncheckedCreateNestedManyWithoutSenderInput;
    notifications?: Prisma.NotificationUncheckedCreateNestedManyWithoutUserInput;
    payouts?: Prisma.PayoutUncheckedCreateNestedManyWithoutFreelancerInput;
    disputes?: Prisma.DisputeUncheckedCreateNestedManyWithoutOpenerInput;
    reports?: Prisma.ReportUncheckedCreateNestedManyWithoutReporterInput;
    achievements?: Prisma.UserAchievementUncheckedCreateNestedManyWithoutUserInput;
    xp?: Prisma.UserXPUncheckedCreateNestedOneWithoutUserInput;
    searchHistory?: Prisma.SearchHistoryUncheckedCreateNestedManyWithoutUserInput;
    userRoles?: Prisma.UserRoleUncheckedCreateNestedManyWithoutUserInput;
    companiesOwned?: Prisma.CompanyUncheckedCreateNestedManyWithoutOwnerInput;
    companyEmployees?: Prisma.EmployeeUncheckedCreateNestedManyWithoutUserInput;
    jobsPosted?: Prisma.JobUncheckedCreateNestedManyWithoutPostedByInput;
    resumes?: Prisma.ResumeUncheckedCreateNestedManyWithoutUserInput;
    jobApplications?: Prisma.JobApplicationUncheckedCreateNestedManyWithoutApplicantInput;
    products?: Prisma.ProductUncheckedCreateNestedManyWithoutSellerInput;
    productReviewsWritten?: Prisma.ProductReviewUncheckedCreateNestedManyWithoutReviewerInput;
    productReviewsReceived?: Prisma.ProductReviewUncheckedCreateNestedManyWithoutRevieweeInput;
    booksAuthored?: Prisma.BookUncheckedCreateNestedManyWithoutAuthorUserInput;
    bookPurchases?: Prisma.BookPurchaseUncheckedCreateNestedManyWithoutUserInput;
    bookReviews?: Prisma.BookReviewUncheckedCreateNestedManyWithoutUserInput;
    resourcesCreated?: Prisma.ResourceUncheckedCreateNestedManyWithoutAuthorInput;
    aiConversations?: Prisma.AIConversationUncheckedCreateNestedManyWithoutUserInput;
};
export type UserCreateOrConnectWithoutPortfolioProjectsInput = {
    where: Prisma.UserWhereUniqueInput;
    create: Prisma.XOR<Prisma.UserCreateWithoutPortfolioProjectsInput, Prisma.UserUncheckedCreateWithoutPortfolioProjectsInput>;
};
export type UserUpsertWithoutPortfolioProjectsInput = {
    update: Prisma.XOR<Prisma.UserUpdateWithoutPortfolioProjectsInput, Prisma.UserUncheckedUpdateWithoutPortfolioProjectsInput>;
    create: Prisma.XOR<Prisma.UserCreateWithoutPortfolioProjectsInput, Prisma.UserUncheckedCreateWithoutPortfolioProjectsInput>;
    where?: Prisma.UserWhereInput;
};
export type UserUpdateToOneWithWhereWithoutPortfolioProjectsInput = {
    where?: Prisma.UserWhereInput;
    data: Prisma.XOR<Prisma.UserUpdateWithoutPortfolioProjectsInput, Prisma.UserUncheckedUpdateWithoutPortfolioProjectsInput>;
};
export type UserUpdateWithoutPortfolioProjectsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    username?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    emailVerified?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    image?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    coverImage?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    bio?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    location?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    skills?: Prisma.UserUpdateskillsInput | string[];
    languages?: Prisma.UserUpdatelanguagesInput | string[];
    timezone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    website?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    github?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    linkedin?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    role?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    verificationStatus?: Prisma.StringFieldUpdateOperationsInput | string;
    profileCompletion?: Prisma.IntFieldUpdateOperationsInput | number;
    preferredCurrency?: Prisma.StringFieldUpdateOperationsInput | string;
    stripeAccountId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    stripeOnboardingDone?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    lastLoginAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    accounts?: Prisma.AccountUpdateManyWithoutUserNestedInput;
    sessions?: Prisma.SessionUpdateManyWithoutUserNestedInput;
    profile?: Prisma.ProfileUpdateOneWithoutUserNestedInput;
    freelancerProfile?: Prisma.FreelancerProfileUpdateOneWithoutUserNestedInput;
    buyerProfile?: Prisma.BuyerProfileUpdateOneWithoutUserNestedInput;
    portfolioItems?: Prisma.PortfolioUpdateManyWithoutUserNestedInput;
    services?: Prisma.ServiceUpdateManyWithoutUserNestedInput;
    ordersAsBuyer?: Prisma.OrderUpdateManyWithoutBuyerNestedInput;
    ordersAsFreelancer?: Prisma.OrderUpdateManyWithoutFreelancerNestedInput;
    reviewsWritten?: Prisma.ReviewUpdateManyWithoutReviewerNestedInput;
    reviewsReceived?: Prisma.ReviewUpdateManyWithoutRevieweeNestedInput;
    favorites?: Prisma.FavoriteUpdateManyWithoutUserNestedInput;
    cart?: Prisma.CartUpdateOneWithoutUserNestedInput;
    conversationParts?: Prisma.ConversationParticipantUpdateManyWithoutUserNestedInput;
    messages?: Prisma.MessageUpdateManyWithoutSenderNestedInput;
    notifications?: Prisma.NotificationUpdateManyWithoutUserNestedInput;
    payouts?: Prisma.PayoutUpdateManyWithoutFreelancerNestedInput;
    disputes?: Prisma.DisputeUpdateManyWithoutOpenerNestedInput;
    reports?: Prisma.ReportUpdateManyWithoutReporterNestedInput;
    achievements?: Prisma.UserAchievementUpdateManyWithoutUserNestedInput;
    xp?: Prisma.UserXPUpdateOneWithoutUserNestedInput;
    searchHistory?: Prisma.SearchHistoryUpdateManyWithoutUserNestedInput;
    userRoles?: Prisma.UserRoleUpdateManyWithoutUserNestedInput;
    companiesOwned?: Prisma.CompanyUpdateManyWithoutOwnerNestedInput;
    companyEmployees?: Prisma.EmployeeUpdateManyWithoutUserNestedInput;
    jobsPosted?: Prisma.JobUpdateManyWithoutPostedByNestedInput;
    resumes?: Prisma.ResumeUpdateManyWithoutUserNestedInput;
    jobApplications?: Prisma.JobApplicationUpdateManyWithoutApplicantNestedInput;
    products?: Prisma.ProductUpdateManyWithoutSellerNestedInput;
    productReviewsWritten?: Prisma.ProductReviewUpdateManyWithoutReviewerNestedInput;
    productReviewsReceived?: Prisma.ProductReviewUpdateManyWithoutRevieweeNestedInput;
    booksAuthored?: Prisma.BookUpdateManyWithoutAuthorUserNestedInput;
    bookPurchases?: Prisma.BookPurchaseUpdateManyWithoutUserNestedInput;
    bookReviews?: Prisma.BookReviewUpdateManyWithoutUserNestedInput;
    resourcesCreated?: Prisma.ResourceUpdateManyWithoutAuthorNestedInput;
    aiConversations?: Prisma.AIConversationUpdateManyWithoutUserNestedInput;
};
export type UserUncheckedUpdateWithoutPortfolioProjectsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    username?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    emailVerified?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    image?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    coverImage?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    bio?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    location?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    skills?: Prisma.UserUpdateskillsInput | string[];
    languages?: Prisma.UserUpdatelanguagesInput | string[];
    timezone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    website?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    github?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    linkedin?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    role?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    verificationStatus?: Prisma.StringFieldUpdateOperationsInput | string;
    profileCompletion?: Prisma.IntFieldUpdateOperationsInput | number;
    preferredCurrency?: Prisma.StringFieldUpdateOperationsInput | string;
    stripeAccountId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    stripeOnboardingDone?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    lastLoginAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    accounts?: Prisma.AccountUncheckedUpdateManyWithoutUserNestedInput;
    sessions?: Prisma.SessionUncheckedUpdateManyWithoutUserNestedInput;
    profile?: Prisma.ProfileUncheckedUpdateOneWithoutUserNestedInput;
    freelancerProfile?: Prisma.FreelancerProfileUncheckedUpdateOneWithoutUserNestedInput;
    buyerProfile?: Prisma.BuyerProfileUncheckedUpdateOneWithoutUserNestedInput;
    portfolioItems?: Prisma.PortfolioUncheckedUpdateManyWithoutUserNestedInput;
    services?: Prisma.ServiceUncheckedUpdateManyWithoutUserNestedInput;
    ordersAsBuyer?: Prisma.OrderUncheckedUpdateManyWithoutBuyerNestedInput;
    ordersAsFreelancer?: Prisma.OrderUncheckedUpdateManyWithoutFreelancerNestedInput;
    reviewsWritten?: Prisma.ReviewUncheckedUpdateManyWithoutReviewerNestedInput;
    reviewsReceived?: Prisma.ReviewUncheckedUpdateManyWithoutRevieweeNestedInput;
    favorites?: Prisma.FavoriteUncheckedUpdateManyWithoutUserNestedInput;
    cart?: Prisma.CartUncheckedUpdateOneWithoutUserNestedInput;
    conversationParts?: Prisma.ConversationParticipantUncheckedUpdateManyWithoutUserNestedInput;
    messages?: Prisma.MessageUncheckedUpdateManyWithoutSenderNestedInput;
    notifications?: Prisma.NotificationUncheckedUpdateManyWithoutUserNestedInput;
    payouts?: Prisma.PayoutUncheckedUpdateManyWithoutFreelancerNestedInput;
    disputes?: Prisma.DisputeUncheckedUpdateManyWithoutOpenerNestedInput;
    reports?: Prisma.ReportUncheckedUpdateManyWithoutReporterNestedInput;
    achievements?: Prisma.UserAchievementUncheckedUpdateManyWithoutUserNestedInput;
    xp?: Prisma.UserXPUncheckedUpdateOneWithoutUserNestedInput;
    searchHistory?: Prisma.SearchHistoryUncheckedUpdateManyWithoutUserNestedInput;
    userRoles?: Prisma.UserRoleUncheckedUpdateManyWithoutUserNestedInput;
    companiesOwned?: Prisma.CompanyUncheckedUpdateManyWithoutOwnerNestedInput;
    companyEmployees?: Prisma.EmployeeUncheckedUpdateManyWithoutUserNestedInput;
    jobsPosted?: Prisma.JobUncheckedUpdateManyWithoutPostedByNestedInput;
    resumes?: Prisma.ResumeUncheckedUpdateManyWithoutUserNestedInput;
    jobApplications?: Prisma.JobApplicationUncheckedUpdateManyWithoutApplicantNestedInput;
    products?: Prisma.ProductUncheckedUpdateManyWithoutSellerNestedInput;
    productReviewsWritten?: Prisma.ProductReviewUncheckedUpdateManyWithoutReviewerNestedInput;
    productReviewsReceived?: Prisma.ProductReviewUncheckedUpdateManyWithoutRevieweeNestedInput;
    booksAuthored?: Prisma.BookUncheckedUpdateManyWithoutAuthorUserNestedInput;
    bookPurchases?: Prisma.BookPurchaseUncheckedUpdateManyWithoutUserNestedInput;
    bookReviews?: Prisma.BookReviewUncheckedUpdateManyWithoutUserNestedInput;
    resourcesCreated?: Prisma.ResourceUncheckedUpdateManyWithoutAuthorNestedInput;
    aiConversations?: Prisma.AIConversationUncheckedUpdateManyWithoutUserNestedInput;
};
export type UserCreateWithoutCompanyEmployeesInput = {
    id?: string;
    name: string;
    username?: string | null;
    email: string;
    emailVerified?: boolean;
    image?: string | null;
    coverImage?: string | null;
    bio?: string | null;
    location?: string | null;
    skills?: Prisma.UserCreateskillsInput | string[];
    languages?: Prisma.UserCreatelanguagesInput | string[];
    timezone?: string | null;
    website?: string | null;
    github?: string | null;
    linkedin?: string | null;
    role?: string;
    status?: string;
    verificationStatus?: string;
    profileCompletion?: number;
    preferredCurrency?: string;
    stripeAccountId?: string | null;
    stripeOnboardingDone?: boolean;
    lastLoginAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    accounts?: Prisma.AccountCreateNestedManyWithoutUserInput;
    sessions?: Prisma.SessionCreateNestedManyWithoutUserInput;
    profile?: Prisma.ProfileCreateNestedOneWithoutUserInput;
    freelancerProfile?: Prisma.FreelancerProfileCreateNestedOneWithoutUserInput;
    buyerProfile?: Prisma.BuyerProfileCreateNestedOneWithoutUserInput;
    portfolioItems?: Prisma.PortfolioCreateNestedManyWithoutUserInput;
    services?: Prisma.ServiceCreateNestedManyWithoutUserInput;
    ordersAsBuyer?: Prisma.OrderCreateNestedManyWithoutBuyerInput;
    ordersAsFreelancer?: Prisma.OrderCreateNestedManyWithoutFreelancerInput;
    reviewsWritten?: Prisma.ReviewCreateNestedManyWithoutReviewerInput;
    reviewsReceived?: Prisma.ReviewCreateNestedManyWithoutRevieweeInput;
    favorites?: Prisma.FavoriteCreateNestedManyWithoutUserInput;
    cart?: Prisma.CartCreateNestedOneWithoutUserInput;
    conversationParts?: Prisma.ConversationParticipantCreateNestedManyWithoutUserInput;
    messages?: Prisma.MessageCreateNestedManyWithoutSenderInput;
    notifications?: Prisma.NotificationCreateNestedManyWithoutUserInput;
    payouts?: Prisma.PayoutCreateNestedManyWithoutFreelancerInput;
    disputes?: Prisma.DisputeCreateNestedManyWithoutOpenerInput;
    reports?: Prisma.ReportCreateNestedManyWithoutReporterInput;
    achievements?: Prisma.UserAchievementCreateNestedManyWithoutUserInput;
    xp?: Prisma.UserXPCreateNestedOneWithoutUserInput;
    searchHistory?: Prisma.SearchHistoryCreateNestedManyWithoutUserInput;
    userRoles?: Prisma.UserRoleCreateNestedManyWithoutUserInput;
    companiesOwned?: Prisma.CompanyCreateNestedManyWithoutOwnerInput;
    jobsPosted?: Prisma.JobCreateNestedManyWithoutPostedByInput;
    resumes?: Prisma.ResumeCreateNestedManyWithoutUserInput;
    jobApplications?: Prisma.JobApplicationCreateNestedManyWithoutApplicantInput;
    products?: Prisma.ProductCreateNestedManyWithoutSellerInput;
    productReviewsWritten?: Prisma.ProductReviewCreateNestedManyWithoutReviewerInput;
    productReviewsReceived?: Prisma.ProductReviewCreateNestedManyWithoutRevieweeInput;
    booksAuthored?: Prisma.BookCreateNestedManyWithoutAuthorUserInput;
    bookPurchases?: Prisma.BookPurchaseCreateNestedManyWithoutUserInput;
    bookReviews?: Prisma.BookReviewCreateNestedManyWithoutUserInput;
    resourcesCreated?: Prisma.ResourceCreateNestedManyWithoutAuthorInput;
    portfolioProjects?: Prisma.PortfolioProjectCreateNestedManyWithoutUserInput;
    aiConversations?: Prisma.AIConversationCreateNestedManyWithoutUserInput;
};
export type UserUncheckedCreateWithoutCompanyEmployeesInput = {
    id?: string;
    name: string;
    username?: string | null;
    email: string;
    emailVerified?: boolean;
    image?: string | null;
    coverImage?: string | null;
    bio?: string | null;
    location?: string | null;
    skills?: Prisma.UserCreateskillsInput | string[];
    languages?: Prisma.UserCreatelanguagesInput | string[];
    timezone?: string | null;
    website?: string | null;
    github?: string | null;
    linkedin?: string | null;
    role?: string;
    status?: string;
    verificationStatus?: string;
    profileCompletion?: number;
    preferredCurrency?: string;
    stripeAccountId?: string | null;
    stripeOnboardingDone?: boolean;
    lastLoginAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    accounts?: Prisma.AccountUncheckedCreateNestedManyWithoutUserInput;
    sessions?: Prisma.SessionUncheckedCreateNestedManyWithoutUserInput;
    profile?: Prisma.ProfileUncheckedCreateNestedOneWithoutUserInput;
    freelancerProfile?: Prisma.FreelancerProfileUncheckedCreateNestedOneWithoutUserInput;
    buyerProfile?: Prisma.BuyerProfileUncheckedCreateNestedOneWithoutUserInput;
    portfolioItems?: Prisma.PortfolioUncheckedCreateNestedManyWithoutUserInput;
    services?: Prisma.ServiceUncheckedCreateNestedManyWithoutUserInput;
    ordersAsBuyer?: Prisma.OrderUncheckedCreateNestedManyWithoutBuyerInput;
    ordersAsFreelancer?: Prisma.OrderUncheckedCreateNestedManyWithoutFreelancerInput;
    reviewsWritten?: Prisma.ReviewUncheckedCreateNestedManyWithoutReviewerInput;
    reviewsReceived?: Prisma.ReviewUncheckedCreateNestedManyWithoutRevieweeInput;
    favorites?: Prisma.FavoriteUncheckedCreateNestedManyWithoutUserInput;
    cart?: Prisma.CartUncheckedCreateNestedOneWithoutUserInput;
    conversationParts?: Prisma.ConversationParticipantUncheckedCreateNestedManyWithoutUserInput;
    messages?: Prisma.MessageUncheckedCreateNestedManyWithoutSenderInput;
    notifications?: Prisma.NotificationUncheckedCreateNestedManyWithoutUserInput;
    payouts?: Prisma.PayoutUncheckedCreateNestedManyWithoutFreelancerInput;
    disputes?: Prisma.DisputeUncheckedCreateNestedManyWithoutOpenerInput;
    reports?: Prisma.ReportUncheckedCreateNestedManyWithoutReporterInput;
    achievements?: Prisma.UserAchievementUncheckedCreateNestedManyWithoutUserInput;
    xp?: Prisma.UserXPUncheckedCreateNestedOneWithoutUserInput;
    searchHistory?: Prisma.SearchHistoryUncheckedCreateNestedManyWithoutUserInput;
    userRoles?: Prisma.UserRoleUncheckedCreateNestedManyWithoutUserInput;
    companiesOwned?: Prisma.CompanyUncheckedCreateNestedManyWithoutOwnerInput;
    jobsPosted?: Prisma.JobUncheckedCreateNestedManyWithoutPostedByInput;
    resumes?: Prisma.ResumeUncheckedCreateNestedManyWithoutUserInput;
    jobApplications?: Prisma.JobApplicationUncheckedCreateNestedManyWithoutApplicantInput;
    products?: Prisma.ProductUncheckedCreateNestedManyWithoutSellerInput;
    productReviewsWritten?: Prisma.ProductReviewUncheckedCreateNestedManyWithoutReviewerInput;
    productReviewsReceived?: Prisma.ProductReviewUncheckedCreateNestedManyWithoutRevieweeInput;
    booksAuthored?: Prisma.BookUncheckedCreateNestedManyWithoutAuthorUserInput;
    bookPurchases?: Prisma.BookPurchaseUncheckedCreateNestedManyWithoutUserInput;
    bookReviews?: Prisma.BookReviewUncheckedCreateNestedManyWithoutUserInput;
    resourcesCreated?: Prisma.ResourceUncheckedCreateNestedManyWithoutAuthorInput;
    portfolioProjects?: Prisma.PortfolioProjectUncheckedCreateNestedManyWithoutUserInput;
    aiConversations?: Prisma.AIConversationUncheckedCreateNestedManyWithoutUserInput;
};
export type UserCreateOrConnectWithoutCompanyEmployeesInput = {
    where: Prisma.UserWhereUniqueInput;
    create: Prisma.XOR<Prisma.UserCreateWithoutCompanyEmployeesInput, Prisma.UserUncheckedCreateWithoutCompanyEmployeesInput>;
};
export type UserUpsertWithoutCompanyEmployeesInput = {
    update: Prisma.XOR<Prisma.UserUpdateWithoutCompanyEmployeesInput, Prisma.UserUncheckedUpdateWithoutCompanyEmployeesInput>;
    create: Prisma.XOR<Prisma.UserCreateWithoutCompanyEmployeesInput, Prisma.UserUncheckedCreateWithoutCompanyEmployeesInput>;
    where?: Prisma.UserWhereInput;
};
export type UserUpdateToOneWithWhereWithoutCompanyEmployeesInput = {
    where?: Prisma.UserWhereInput;
    data: Prisma.XOR<Prisma.UserUpdateWithoutCompanyEmployeesInput, Prisma.UserUncheckedUpdateWithoutCompanyEmployeesInput>;
};
export type UserUpdateWithoutCompanyEmployeesInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    username?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    emailVerified?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    image?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    coverImage?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    bio?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    location?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    skills?: Prisma.UserUpdateskillsInput | string[];
    languages?: Prisma.UserUpdatelanguagesInput | string[];
    timezone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    website?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    github?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    linkedin?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    role?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    verificationStatus?: Prisma.StringFieldUpdateOperationsInput | string;
    profileCompletion?: Prisma.IntFieldUpdateOperationsInput | number;
    preferredCurrency?: Prisma.StringFieldUpdateOperationsInput | string;
    stripeAccountId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    stripeOnboardingDone?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    lastLoginAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    accounts?: Prisma.AccountUpdateManyWithoutUserNestedInput;
    sessions?: Prisma.SessionUpdateManyWithoutUserNestedInput;
    profile?: Prisma.ProfileUpdateOneWithoutUserNestedInput;
    freelancerProfile?: Prisma.FreelancerProfileUpdateOneWithoutUserNestedInput;
    buyerProfile?: Prisma.BuyerProfileUpdateOneWithoutUserNestedInput;
    portfolioItems?: Prisma.PortfolioUpdateManyWithoutUserNestedInput;
    services?: Prisma.ServiceUpdateManyWithoutUserNestedInput;
    ordersAsBuyer?: Prisma.OrderUpdateManyWithoutBuyerNestedInput;
    ordersAsFreelancer?: Prisma.OrderUpdateManyWithoutFreelancerNestedInput;
    reviewsWritten?: Prisma.ReviewUpdateManyWithoutReviewerNestedInput;
    reviewsReceived?: Prisma.ReviewUpdateManyWithoutRevieweeNestedInput;
    favorites?: Prisma.FavoriteUpdateManyWithoutUserNestedInput;
    cart?: Prisma.CartUpdateOneWithoutUserNestedInput;
    conversationParts?: Prisma.ConversationParticipantUpdateManyWithoutUserNestedInput;
    messages?: Prisma.MessageUpdateManyWithoutSenderNestedInput;
    notifications?: Prisma.NotificationUpdateManyWithoutUserNestedInput;
    payouts?: Prisma.PayoutUpdateManyWithoutFreelancerNestedInput;
    disputes?: Prisma.DisputeUpdateManyWithoutOpenerNestedInput;
    reports?: Prisma.ReportUpdateManyWithoutReporterNestedInput;
    achievements?: Prisma.UserAchievementUpdateManyWithoutUserNestedInput;
    xp?: Prisma.UserXPUpdateOneWithoutUserNestedInput;
    searchHistory?: Prisma.SearchHistoryUpdateManyWithoutUserNestedInput;
    userRoles?: Prisma.UserRoleUpdateManyWithoutUserNestedInput;
    companiesOwned?: Prisma.CompanyUpdateManyWithoutOwnerNestedInput;
    jobsPosted?: Prisma.JobUpdateManyWithoutPostedByNestedInput;
    resumes?: Prisma.ResumeUpdateManyWithoutUserNestedInput;
    jobApplications?: Prisma.JobApplicationUpdateManyWithoutApplicantNestedInput;
    products?: Prisma.ProductUpdateManyWithoutSellerNestedInput;
    productReviewsWritten?: Prisma.ProductReviewUpdateManyWithoutReviewerNestedInput;
    productReviewsReceived?: Prisma.ProductReviewUpdateManyWithoutRevieweeNestedInput;
    booksAuthored?: Prisma.BookUpdateManyWithoutAuthorUserNestedInput;
    bookPurchases?: Prisma.BookPurchaseUpdateManyWithoutUserNestedInput;
    bookReviews?: Prisma.BookReviewUpdateManyWithoutUserNestedInput;
    resourcesCreated?: Prisma.ResourceUpdateManyWithoutAuthorNestedInput;
    portfolioProjects?: Prisma.PortfolioProjectUpdateManyWithoutUserNestedInput;
    aiConversations?: Prisma.AIConversationUpdateManyWithoutUserNestedInput;
};
export type UserUncheckedUpdateWithoutCompanyEmployeesInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    username?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    emailVerified?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    image?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    coverImage?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    bio?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    location?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    skills?: Prisma.UserUpdateskillsInput | string[];
    languages?: Prisma.UserUpdatelanguagesInput | string[];
    timezone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    website?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    github?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    linkedin?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    role?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    verificationStatus?: Prisma.StringFieldUpdateOperationsInput | string;
    profileCompletion?: Prisma.IntFieldUpdateOperationsInput | number;
    preferredCurrency?: Prisma.StringFieldUpdateOperationsInput | string;
    stripeAccountId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    stripeOnboardingDone?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    lastLoginAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    accounts?: Prisma.AccountUncheckedUpdateManyWithoutUserNestedInput;
    sessions?: Prisma.SessionUncheckedUpdateManyWithoutUserNestedInput;
    profile?: Prisma.ProfileUncheckedUpdateOneWithoutUserNestedInput;
    freelancerProfile?: Prisma.FreelancerProfileUncheckedUpdateOneWithoutUserNestedInput;
    buyerProfile?: Prisma.BuyerProfileUncheckedUpdateOneWithoutUserNestedInput;
    portfolioItems?: Prisma.PortfolioUncheckedUpdateManyWithoutUserNestedInput;
    services?: Prisma.ServiceUncheckedUpdateManyWithoutUserNestedInput;
    ordersAsBuyer?: Prisma.OrderUncheckedUpdateManyWithoutBuyerNestedInput;
    ordersAsFreelancer?: Prisma.OrderUncheckedUpdateManyWithoutFreelancerNestedInput;
    reviewsWritten?: Prisma.ReviewUncheckedUpdateManyWithoutReviewerNestedInput;
    reviewsReceived?: Prisma.ReviewUncheckedUpdateManyWithoutRevieweeNestedInput;
    favorites?: Prisma.FavoriteUncheckedUpdateManyWithoutUserNestedInput;
    cart?: Prisma.CartUncheckedUpdateOneWithoutUserNestedInput;
    conversationParts?: Prisma.ConversationParticipantUncheckedUpdateManyWithoutUserNestedInput;
    messages?: Prisma.MessageUncheckedUpdateManyWithoutSenderNestedInput;
    notifications?: Prisma.NotificationUncheckedUpdateManyWithoutUserNestedInput;
    payouts?: Prisma.PayoutUncheckedUpdateManyWithoutFreelancerNestedInput;
    disputes?: Prisma.DisputeUncheckedUpdateManyWithoutOpenerNestedInput;
    reports?: Prisma.ReportUncheckedUpdateManyWithoutReporterNestedInput;
    achievements?: Prisma.UserAchievementUncheckedUpdateManyWithoutUserNestedInput;
    xp?: Prisma.UserXPUncheckedUpdateOneWithoutUserNestedInput;
    searchHistory?: Prisma.SearchHistoryUncheckedUpdateManyWithoutUserNestedInput;
    userRoles?: Prisma.UserRoleUncheckedUpdateManyWithoutUserNestedInput;
    companiesOwned?: Prisma.CompanyUncheckedUpdateManyWithoutOwnerNestedInput;
    jobsPosted?: Prisma.JobUncheckedUpdateManyWithoutPostedByNestedInput;
    resumes?: Prisma.ResumeUncheckedUpdateManyWithoutUserNestedInput;
    jobApplications?: Prisma.JobApplicationUncheckedUpdateManyWithoutApplicantNestedInput;
    products?: Prisma.ProductUncheckedUpdateManyWithoutSellerNestedInput;
    productReviewsWritten?: Prisma.ProductReviewUncheckedUpdateManyWithoutReviewerNestedInput;
    productReviewsReceived?: Prisma.ProductReviewUncheckedUpdateManyWithoutRevieweeNestedInput;
    booksAuthored?: Prisma.BookUncheckedUpdateManyWithoutAuthorUserNestedInput;
    bookPurchases?: Prisma.BookPurchaseUncheckedUpdateManyWithoutUserNestedInput;
    bookReviews?: Prisma.BookReviewUncheckedUpdateManyWithoutUserNestedInput;
    resourcesCreated?: Prisma.ResourceUncheckedUpdateManyWithoutAuthorNestedInput;
    portfolioProjects?: Prisma.PortfolioProjectUncheckedUpdateManyWithoutUserNestedInput;
    aiConversations?: Prisma.AIConversationUncheckedUpdateManyWithoutUserNestedInput;
};
export type UserCreateWithoutAiConversationsInput = {
    id?: string;
    name: string;
    username?: string | null;
    email: string;
    emailVerified?: boolean;
    image?: string | null;
    coverImage?: string | null;
    bio?: string | null;
    location?: string | null;
    skills?: Prisma.UserCreateskillsInput | string[];
    languages?: Prisma.UserCreatelanguagesInput | string[];
    timezone?: string | null;
    website?: string | null;
    github?: string | null;
    linkedin?: string | null;
    role?: string;
    status?: string;
    verificationStatus?: string;
    profileCompletion?: number;
    preferredCurrency?: string;
    stripeAccountId?: string | null;
    stripeOnboardingDone?: boolean;
    lastLoginAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    accounts?: Prisma.AccountCreateNestedManyWithoutUserInput;
    sessions?: Prisma.SessionCreateNestedManyWithoutUserInput;
    profile?: Prisma.ProfileCreateNestedOneWithoutUserInput;
    freelancerProfile?: Prisma.FreelancerProfileCreateNestedOneWithoutUserInput;
    buyerProfile?: Prisma.BuyerProfileCreateNestedOneWithoutUserInput;
    portfolioItems?: Prisma.PortfolioCreateNestedManyWithoutUserInput;
    services?: Prisma.ServiceCreateNestedManyWithoutUserInput;
    ordersAsBuyer?: Prisma.OrderCreateNestedManyWithoutBuyerInput;
    ordersAsFreelancer?: Prisma.OrderCreateNestedManyWithoutFreelancerInput;
    reviewsWritten?: Prisma.ReviewCreateNestedManyWithoutReviewerInput;
    reviewsReceived?: Prisma.ReviewCreateNestedManyWithoutRevieweeInput;
    favorites?: Prisma.FavoriteCreateNestedManyWithoutUserInput;
    cart?: Prisma.CartCreateNestedOneWithoutUserInput;
    conversationParts?: Prisma.ConversationParticipantCreateNestedManyWithoutUserInput;
    messages?: Prisma.MessageCreateNestedManyWithoutSenderInput;
    notifications?: Prisma.NotificationCreateNestedManyWithoutUserInput;
    payouts?: Prisma.PayoutCreateNestedManyWithoutFreelancerInput;
    disputes?: Prisma.DisputeCreateNestedManyWithoutOpenerInput;
    reports?: Prisma.ReportCreateNestedManyWithoutReporterInput;
    achievements?: Prisma.UserAchievementCreateNestedManyWithoutUserInput;
    xp?: Prisma.UserXPCreateNestedOneWithoutUserInput;
    searchHistory?: Prisma.SearchHistoryCreateNestedManyWithoutUserInput;
    userRoles?: Prisma.UserRoleCreateNestedManyWithoutUserInput;
    companiesOwned?: Prisma.CompanyCreateNestedManyWithoutOwnerInput;
    companyEmployees?: Prisma.EmployeeCreateNestedManyWithoutUserInput;
    jobsPosted?: Prisma.JobCreateNestedManyWithoutPostedByInput;
    resumes?: Prisma.ResumeCreateNestedManyWithoutUserInput;
    jobApplications?: Prisma.JobApplicationCreateNestedManyWithoutApplicantInput;
    products?: Prisma.ProductCreateNestedManyWithoutSellerInput;
    productReviewsWritten?: Prisma.ProductReviewCreateNestedManyWithoutReviewerInput;
    productReviewsReceived?: Prisma.ProductReviewCreateNestedManyWithoutRevieweeInput;
    booksAuthored?: Prisma.BookCreateNestedManyWithoutAuthorUserInput;
    bookPurchases?: Prisma.BookPurchaseCreateNestedManyWithoutUserInput;
    bookReviews?: Prisma.BookReviewCreateNestedManyWithoutUserInput;
    resourcesCreated?: Prisma.ResourceCreateNestedManyWithoutAuthorInput;
    portfolioProjects?: Prisma.PortfolioProjectCreateNestedManyWithoutUserInput;
};
export type UserUncheckedCreateWithoutAiConversationsInput = {
    id?: string;
    name: string;
    username?: string | null;
    email: string;
    emailVerified?: boolean;
    image?: string | null;
    coverImage?: string | null;
    bio?: string | null;
    location?: string | null;
    skills?: Prisma.UserCreateskillsInput | string[];
    languages?: Prisma.UserCreatelanguagesInput | string[];
    timezone?: string | null;
    website?: string | null;
    github?: string | null;
    linkedin?: string | null;
    role?: string;
    status?: string;
    verificationStatus?: string;
    profileCompletion?: number;
    preferredCurrency?: string;
    stripeAccountId?: string | null;
    stripeOnboardingDone?: boolean;
    lastLoginAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    accounts?: Prisma.AccountUncheckedCreateNestedManyWithoutUserInput;
    sessions?: Prisma.SessionUncheckedCreateNestedManyWithoutUserInput;
    profile?: Prisma.ProfileUncheckedCreateNestedOneWithoutUserInput;
    freelancerProfile?: Prisma.FreelancerProfileUncheckedCreateNestedOneWithoutUserInput;
    buyerProfile?: Prisma.BuyerProfileUncheckedCreateNestedOneWithoutUserInput;
    portfolioItems?: Prisma.PortfolioUncheckedCreateNestedManyWithoutUserInput;
    services?: Prisma.ServiceUncheckedCreateNestedManyWithoutUserInput;
    ordersAsBuyer?: Prisma.OrderUncheckedCreateNestedManyWithoutBuyerInput;
    ordersAsFreelancer?: Prisma.OrderUncheckedCreateNestedManyWithoutFreelancerInput;
    reviewsWritten?: Prisma.ReviewUncheckedCreateNestedManyWithoutReviewerInput;
    reviewsReceived?: Prisma.ReviewUncheckedCreateNestedManyWithoutRevieweeInput;
    favorites?: Prisma.FavoriteUncheckedCreateNestedManyWithoutUserInput;
    cart?: Prisma.CartUncheckedCreateNestedOneWithoutUserInput;
    conversationParts?: Prisma.ConversationParticipantUncheckedCreateNestedManyWithoutUserInput;
    messages?: Prisma.MessageUncheckedCreateNestedManyWithoutSenderInput;
    notifications?: Prisma.NotificationUncheckedCreateNestedManyWithoutUserInput;
    payouts?: Prisma.PayoutUncheckedCreateNestedManyWithoutFreelancerInput;
    disputes?: Prisma.DisputeUncheckedCreateNestedManyWithoutOpenerInput;
    reports?: Prisma.ReportUncheckedCreateNestedManyWithoutReporterInput;
    achievements?: Prisma.UserAchievementUncheckedCreateNestedManyWithoutUserInput;
    xp?: Prisma.UserXPUncheckedCreateNestedOneWithoutUserInput;
    searchHistory?: Prisma.SearchHistoryUncheckedCreateNestedManyWithoutUserInput;
    userRoles?: Prisma.UserRoleUncheckedCreateNestedManyWithoutUserInput;
    companiesOwned?: Prisma.CompanyUncheckedCreateNestedManyWithoutOwnerInput;
    companyEmployees?: Prisma.EmployeeUncheckedCreateNestedManyWithoutUserInput;
    jobsPosted?: Prisma.JobUncheckedCreateNestedManyWithoutPostedByInput;
    resumes?: Prisma.ResumeUncheckedCreateNestedManyWithoutUserInput;
    jobApplications?: Prisma.JobApplicationUncheckedCreateNestedManyWithoutApplicantInput;
    products?: Prisma.ProductUncheckedCreateNestedManyWithoutSellerInput;
    productReviewsWritten?: Prisma.ProductReviewUncheckedCreateNestedManyWithoutReviewerInput;
    productReviewsReceived?: Prisma.ProductReviewUncheckedCreateNestedManyWithoutRevieweeInput;
    booksAuthored?: Prisma.BookUncheckedCreateNestedManyWithoutAuthorUserInput;
    bookPurchases?: Prisma.BookPurchaseUncheckedCreateNestedManyWithoutUserInput;
    bookReviews?: Prisma.BookReviewUncheckedCreateNestedManyWithoutUserInput;
    resourcesCreated?: Prisma.ResourceUncheckedCreateNestedManyWithoutAuthorInput;
    portfolioProjects?: Prisma.PortfolioProjectUncheckedCreateNestedManyWithoutUserInput;
};
export type UserCreateOrConnectWithoutAiConversationsInput = {
    where: Prisma.UserWhereUniqueInput;
    create: Prisma.XOR<Prisma.UserCreateWithoutAiConversationsInput, Prisma.UserUncheckedCreateWithoutAiConversationsInput>;
};
export type UserUpsertWithoutAiConversationsInput = {
    update: Prisma.XOR<Prisma.UserUpdateWithoutAiConversationsInput, Prisma.UserUncheckedUpdateWithoutAiConversationsInput>;
    create: Prisma.XOR<Prisma.UserCreateWithoutAiConversationsInput, Prisma.UserUncheckedCreateWithoutAiConversationsInput>;
    where?: Prisma.UserWhereInput;
};
export type UserUpdateToOneWithWhereWithoutAiConversationsInput = {
    where?: Prisma.UserWhereInput;
    data: Prisma.XOR<Prisma.UserUpdateWithoutAiConversationsInput, Prisma.UserUncheckedUpdateWithoutAiConversationsInput>;
};
export type UserUpdateWithoutAiConversationsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    username?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    emailVerified?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    image?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    coverImage?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    bio?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    location?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    skills?: Prisma.UserUpdateskillsInput | string[];
    languages?: Prisma.UserUpdatelanguagesInput | string[];
    timezone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    website?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    github?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    linkedin?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    role?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    verificationStatus?: Prisma.StringFieldUpdateOperationsInput | string;
    profileCompletion?: Prisma.IntFieldUpdateOperationsInput | number;
    preferredCurrency?: Prisma.StringFieldUpdateOperationsInput | string;
    stripeAccountId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    stripeOnboardingDone?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    lastLoginAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    accounts?: Prisma.AccountUpdateManyWithoutUserNestedInput;
    sessions?: Prisma.SessionUpdateManyWithoutUserNestedInput;
    profile?: Prisma.ProfileUpdateOneWithoutUserNestedInput;
    freelancerProfile?: Prisma.FreelancerProfileUpdateOneWithoutUserNestedInput;
    buyerProfile?: Prisma.BuyerProfileUpdateOneWithoutUserNestedInput;
    portfolioItems?: Prisma.PortfolioUpdateManyWithoutUserNestedInput;
    services?: Prisma.ServiceUpdateManyWithoutUserNestedInput;
    ordersAsBuyer?: Prisma.OrderUpdateManyWithoutBuyerNestedInput;
    ordersAsFreelancer?: Prisma.OrderUpdateManyWithoutFreelancerNestedInput;
    reviewsWritten?: Prisma.ReviewUpdateManyWithoutReviewerNestedInput;
    reviewsReceived?: Prisma.ReviewUpdateManyWithoutRevieweeNestedInput;
    favorites?: Prisma.FavoriteUpdateManyWithoutUserNestedInput;
    cart?: Prisma.CartUpdateOneWithoutUserNestedInput;
    conversationParts?: Prisma.ConversationParticipantUpdateManyWithoutUserNestedInput;
    messages?: Prisma.MessageUpdateManyWithoutSenderNestedInput;
    notifications?: Prisma.NotificationUpdateManyWithoutUserNestedInput;
    payouts?: Prisma.PayoutUpdateManyWithoutFreelancerNestedInput;
    disputes?: Prisma.DisputeUpdateManyWithoutOpenerNestedInput;
    reports?: Prisma.ReportUpdateManyWithoutReporterNestedInput;
    achievements?: Prisma.UserAchievementUpdateManyWithoutUserNestedInput;
    xp?: Prisma.UserXPUpdateOneWithoutUserNestedInput;
    searchHistory?: Prisma.SearchHistoryUpdateManyWithoutUserNestedInput;
    userRoles?: Prisma.UserRoleUpdateManyWithoutUserNestedInput;
    companiesOwned?: Prisma.CompanyUpdateManyWithoutOwnerNestedInput;
    companyEmployees?: Prisma.EmployeeUpdateManyWithoutUserNestedInput;
    jobsPosted?: Prisma.JobUpdateManyWithoutPostedByNestedInput;
    resumes?: Prisma.ResumeUpdateManyWithoutUserNestedInput;
    jobApplications?: Prisma.JobApplicationUpdateManyWithoutApplicantNestedInput;
    products?: Prisma.ProductUpdateManyWithoutSellerNestedInput;
    productReviewsWritten?: Prisma.ProductReviewUpdateManyWithoutReviewerNestedInput;
    productReviewsReceived?: Prisma.ProductReviewUpdateManyWithoutRevieweeNestedInput;
    booksAuthored?: Prisma.BookUpdateManyWithoutAuthorUserNestedInput;
    bookPurchases?: Prisma.BookPurchaseUpdateManyWithoutUserNestedInput;
    bookReviews?: Prisma.BookReviewUpdateManyWithoutUserNestedInput;
    resourcesCreated?: Prisma.ResourceUpdateManyWithoutAuthorNestedInput;
    portfolioProjects?: Prisma.PortfolioProjectUpdateManyWithoutUserNestedInput;
};
export type UserUncheckedUpdateWithoutAiConversationsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    username?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    emailVerified?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    image?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    coverImage?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    bio?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    location?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    skills?: Prisma.UserUpdateskillsInput | string[];
    languages?: Prisma.UserUpdatelanguagesInput | string[];
    timezone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    website?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    github?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    linkedin?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    role?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    verificationStatus?: Prisma.StringFieldUpdateOperationsInput | string;
    profileCompletion?: Prisma.IntFieldUpdateOperationsInput | number;
    preferredCurrency?: Prisma.StringFieldUpdateOperationsInput | string;
    stripeAccountId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    stripeOnboardingDone?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    lastLoginAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    accounts?: Prisma.AccountUncheckedUpdateManyWithoutUserNestedInput;
    sessions?: Prisma.SessionUncheckedUpdateManyWithoutUserNestedInput;
    profile?: Prisma.ProfileUncheckedUpdateOneWithoutUserNestedInput;
    freelancerProfile?: Prisma.FreelancerProfileUncheckedUpdateOneWithoutUserNestedInput;
    buyerProfile?: Prisma.BuyerProfileUncheckedUpdateOneWithoutUserNestedInput;
    portfolioItems?: Prisma.PortfolioUncheckedUpdateManyWithoutUserNestedInput;
    services?: Prisma.ServiceUncheckedUpdateManyWithoutUserNestedInput;
    ordersAsBuyer?: Prisma.OrderUncheckedUpdateManyWithoutBuyerNestedInput;
    ordersAsFreelancer?: Prisma.OrderUncheckedUpdateManyWithoutFreelancerNestedInput;
    reviewsWritten?: Prisma.ReviewUncheckedUpdateManyWithoutReviewerNestedInput;
    reviewsReceived?: Prisma.ReviewUncheckedUpdateManyWithoutRevieweeNestedInput;
    favorites?: Prisma.FavoriteUncheckedUpdateManyWithoutUserNestedInput;
    cart?: Prisma.CartUncheckedUpdateOneWithoutUserNestedInput;
    conversationParts?: Prisma.ConversationParticipantUncheckedUpdateManyWithoutUserNestedInput;
    messages?: Prisma.MessageUncheckedUpdateManyWithoutSenderNestedInput;
    notifications?: Prisma.NotificationUncheckedUpdateManyWithoutUserNestedInput;
    payouts?: Prisma.PayoutUncheckedUpdateManyWithoutFreelancerNestedInput;
    disputes?: Prisma.DisputeUncheckedUpdateManyWithoutOpenerNestedInput;
    reports?: Prisma.ReportUncheckedUpdateManyWithoutReporterNestedInput;
    achievements?: Prisma.UserAchievementUncheckedUpdateManyWithoutUserNestedInput;
    xp?: Prisma.UserXPUncheckedUpdateOneWithoutUserNestedInput;
    searchHistory?: Prisma.SearchHistoryUncheckedUpdateManyWithoutUserNestedInput;
    userRoles?: Prisma.UserRoleUncheckedUpdateManyWithoutUserNestedInput;
    companiesOwned?: Prisma.CompanyUncheckedUpdateManyWithoutOwnerNestedInput;
    companyEmployees?: Prisma.EmployeeUncheckedUpdateManyWithoutUserNestedInput;
    jobsPosted?: Prisma.JobUncheckedUpdateManyWithoutPostedByNestedInput;
    resumes?: Prisma.ResumeUncheckedUpdateManyWithoutUserNestedInput;
    jobApplications?: Prisma.JobApplicationUncheckedUpdateManyWithoutApplicantNestedInput;
    products?: Prisma.ProductUncheckedUpdateManyWithoutSellerNestedInput;
    productReviewsWritten?: Prisma.ProductReviewUncheckedUpdateManyWithoutReviewerNestedInput;
    productReviewsReceived?: Prisma.ProductReviewUncheckedUpdateManyWithoutRevieweeNestedInput;
    booksAuthored?: Prisma.BookUncheckedUpdateManyWithoutAuthorUserNestedInput;
    bookPurchases?: Prisma.BookPurchaseUncheckedUpdateManyWithoutUserNestedInput;
    bookReviews?: Prisma.BookReviewUncheckedUpdateManyWithoutUserNestedInput;
    resourcesCreated?: Prisma.ResourceUncheckedUpdateManyWithoutAuthorNestedInput;
    portfolioProjects?: Prisma.PortfolioProjectUncheckedUpdateManyWithoutUserNestedInput;
};
/**
 * Count Type UserCountOutputType
 */
export type UserCountOutputType = {
    accounts: number;
    sessions: number;
    portfolioItems: number;
    services: number;
    ordersAsBuyer: number;
    ordersAsFreelancer: number;
    reviewsWritten: number;
    reviewsReceived: number;
    favorites: number;
    conversationParts: number;
    messages: number;
    notifications: number;
    payouts: number;
    disputes: number;
    reports: number;
    achievements: number;
    searchHistory: number;
    userRoles: number;
    companiesOwned: number;
    companyEmployees: number;
    jobsPosted: number;
    resumes: number;
    jobApplications: number;
    products: number;
    productReviewsWritten: number;
    productReviewsReceived: number;
    booksAuthored: number;
    bookPurchases: number;
    bookReviews: number;
    resourcesCreated: number;
    portfolioProjects: number;
    aiConversations: number;
};
export type UserCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    accounts?: boolean | UserCountOutputTypeCountAccountsArgs;
    sessions?: boolean | UserCountOutputTypeCountSessionsArgs;
    portfolioItems?: boolean | UserCountOutputTypeCountPortfolioItemsArgs;
    services?: boolean | UserCountOutputTypeCountServicesArgs;
    ordersAsBuyer?: boolean | UserCountOutputTypeCountOrdersAsBuyerArgs;
    ordersAsFreelancer?: boolean | UserCountOutputTypeCountOrdersAsFreelancerArgs;
    reviewsWritten?: boolean | UserCountOutputTypeCountReviewsWrittenArgs;
    reviewsReceived?: boolean | UserCountOutputTypeCountReviewsReceivedArgs;
    favorites?: boolean | UserCountOutputTypeCountFavoritesArgs;
    conversationParts?: boolean | UserCountOutputTypeCountConversationPartsArgs;
    messages?: boolean | UserCountOutputTypeCountMessagesArgs;
    notifications?: boolean | UserCountOutputTypeCountNotificationsArgs;
    payouts?: boolean | UserCountOutputTypeCountPayoutsArgs;
    disputes?: boolean | UserCountOutputTypeCountDisputesArgs;
    reports?: boolean | UserCountOutputTypeCountReportsArgs;
    achievements?: boolean | UserCountOutputTypeCountAchievementsArgs;
    searchHistory?: boolean | UserCountOutputTypeCountSearchHistoryArgs;
    userRoles?: boolean | UserCountOutputTypeCountUserRolesArgs;
    companiesOwned?: boolean | UserCountOutputTypeCountCompaniesOwnedArgs;
    companyEmployees?: boolean | UserCountOutputTypeCountCompanyEmployeesArgs;
    jobsPosted?: boolean | UserCountOutputTypeCountJobsPostedArgs;
    resumes?: boolean | UserCountOutputTypeCountResumesArgs;
    jobApplications?: boolean | UserCountOutputTypeCountJobApplicationsArgs;
    products?: boolean | UserCountOutputTypeCountProductsArgs;
    productReviewsWritten?: boolean | UserCountOutputTypeCountProductReviewsWrittenArgs;
    productReviewsReceived?: boolean | UserCountOutputTypeCountProductReviewsReceivedArgs;
    booksAuthored?: boolean | UserCountOutputTypeCountBooksAuthoredArgs;
    bookPurchases?: boolean | UserCountOutputTypeCountBookPurchasesArgs;
    bookReviews?: boolean | UserCountOutputTypeCountBookReviewsArgs;
    resourcesCreated?: boolean | UserCountOutputTypeCountResourcesCreatedArgs;
    portfolioProjects?: boolean | UserCountOutputTypeCountPortfolioProjectsArgs;
    aiConversations?: boolean | UserCountOutputTypeCountAiConversationsArgs;
};
/**
 * UserCountOutputType without action
 */
export type UserCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: Prisma.UserCountOutputTypeSelect<ExtArgs> | null;
};
/**
 * UserCountOutputType without action
 */
export type UserCountOutputTypeCountAccountsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.AccountWhereInput;
};
/**
 * UserCountOutputType without action
 */
export type UserCountOutputTypeCountSessionsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.SessionWhereInput;
};
/**
 * UserCountOutputType without action
 */
export type UserCountOutputTypeCountPortfolioItemsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.PortfolioWhereInput;
};
/**
 * UserCountOutputType without action
 */
export type UserCountOutputTypeCountServicesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ServiceWhereInput;
};
/**
 * UserCountOutputType without action
 */
export type UserCountOutputTypeCountOrdersAsBuyerArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.OrderWhereInput;
};
/**
 * UserCountOutputType without action
 */
export type UserCountOutputTypeCountOrdersAsFreelancerArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.OrderWhereInput;
};
/**
 * UserCountOutputType without action
 */
export type UserCountOutputTypeCountReviewsWrittenArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ReviewWhereInput;
};
/**
 * UserCountOutputType without action
 */
export type UserCountOutputTypeCountReviewsReceivedArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ReviewWhereInput;
};
/**
 * UserCountOutputType without action
 */
export type UserCountOutputTypeCountFavoritesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.FavoriteWhereInput;
};
/**
 * UserCountOutputType without action
 */
export type UserCountOutputTypeCountConversationPartsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ConversationParticipantWhereInput;
};
/**
 * UserCountOutputType without action
 */
export type UserCountOutputTypeCountMessagesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.MessageWhereInput;
};
/**
 * UserCountOutputType without action
 */
export type UserCountOutputTypeCountNotificationsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.NotificationWhereInput;
};
/**
 * UserCountOutputType without action
 */
export type UserCountOutputTypeCountPayoutsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.PayoutWhereInput;
};
/**
 * UserCountOutputType without action
 */
export type UserCountOutputTypeCountDisputesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.DisputeWhereInput;
};
/**
 * UserCountOutputType without action
 */
export type UserCountOutputTypeCountReportsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ReportWhereInput;
};
/**
 * UserCountOutputType without action
 */
export type UserCountOutputTypeCountAchievementsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.UserAchievementWhereInput;
};
/**
 * UserCountOutputType without action
 */
export type UserCountOutputTypeCountSearchHistoryArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.SearchHistoryWhereInput;
};
/**
 * UserCountOutputType without action
 */
export type UserCountOutputTypeCountUserRolesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.UserRoleWhereInput;
};
/**
 * UserCountOutputType without action
 */
export type UserCountOutputTypeCountCompaniesOwnedArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.CompanyWhereInput;
};
/**
 * UserCountOutputType without action
 */
export type UserCountOutputTypeCountCompanyEmployeesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.EmployeeWhereInput;
};
/**
 * UserCountOutputType without action
 */
export type UserCountOutputTypeCountJobsPostedArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.JobWhereInput;
};
/**
 * UserCountOutputType without action
 */
export type UserCountOutputTypeCountResumesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ResumeWhereInput;
};
/**
 * UserCountOutputType without action
 */
export type UserCountOutputTypeCountJobApplicationsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.JobApplicationWhereInput;
};
/**
 * UserCountOutputType without action
 */
export type UserCountOutputTypeCountProductsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ProductWhereInput;
};
/**
 * UserCountOutputType without action
 */
export type UserCountOutputTypeCountProductReviewsWrittenArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ProductReviewWhereInput;
};
/**
 * UserCountOutputType without action
 */
export type UserCountOutputTypeCountProductReviewsReceivedArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ProductReviewWhereInput;
};
/**
 * UserCountOutputType without action
 */
export type UserCountOutputTypeCountBooksAuthoredArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.BookWhereInput;
};
/**
 * UserCountOutputType without action
 */
export type UserCountOutputTypeCountBookPurchasesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.BookPurchaseWhereInput;
};
/**
 * UserCountOutputType without action
 */
export type UserCountOutputTypeCountBookReviewsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.BookReviewWhereInput;
};
/**
 * UserCountOutputType without action
 */
export type UserCountOutputTypeCountResourcesCreatedArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ResourceWhereInput;
};
/**
 * UserCountOutputType without action
 */
export type UserCountOutputTypeCountPortfolioProjectsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.PortfolioProjectWhereInput;
};
/**
 * UserCountOutputType without action
 */
export type UserCountOutputTypeCountAiConversationsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.AIConversationWhereInput;
};
export type UserSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    name?: boolean;
    username?: boolean;
    email?: boolean;
    emailVerified?: boolean;
    image?: boolean;
    coverImage?: boolean;
    bio?: boolean;
    location?: boolean;
    skills?: boolean;
    languages?: boolean;
    timezone?: boolean;
    website?: boolean;
    github?: boolean;
    linkedin?: boolean;
    role?: boolean;
    status?: boolean;
    verificationStatus?: boolean;
    profileCompletion?: boolean;
    preferredCurrency?: boolean;
    stripeAccountId?: boolean;
    stripeOnboardingDone?: boolean;
    lastLoginAt?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    accounts?: boolean | Prisma.User$accountsArgs<ExtArgs>;
    sessions?: boolean | Prisma.User$sessionsArgs<ExtArgs>;
    profile?: boolean | Prisma.User$profileArgs<ExtArgs>;
    freelancerProfile?: boolean | Prisma.User$freelancerProfileArgs<ExtArgs>;
    buyerProfile?: boolean | Prisma.User$buyerProfileArgs<ExtArgs>;
    portfolioItems?: boolean | Prisma.User$portfolioItemsArgs<ExtArgs>;
    services?: boolean | Prisma.User$servicesArgs<ExtArgs>;
    ordersAsBuyer?: boolean | Prisma.User$ordersAsBuyerArgs<ExtArgs>;
    ordersAsFreelancer?: boolean | Prisma.User$ordersAsFreelancerArgs<ExtArgs>;
    reviewsWritten?: boolean | Prisma.User$reviewsWrittenArgs<ExtArgs>;
    reviewsReceived?: boolean | Prisma.User$reviewsReceivedArgs<ExtArgs>;
    favorites?: boolean | Prisma.User$favoritesArgs<ExtArgs>;
    cart?: boolean | Prisma.User$cartArgs<ExtArgs>;
    conversationParts?: boolean | Prisma.User$conversationPartsArgs<ExtArgs>;
    messages?: boolean | Prisma.User$messagesArgs<ExtArgs>;
    notifications?: boolean | Prisma.User$notificationsArgs<ExtArgs>;
    payouts?: boolean | Prisma.User$payoutsArgs<ExtArgs>;
    disputes?: boolean | Prisma.User$disputesArgs<ExtArgs>;
    reports?: boolean | Prisma.User$reportsArgs<ExtArgs>;
    achievements?: boolean | Prisma.User$achievementsArgs<ExtArgs>;
    xp?: boolean | Prisma.User$xpArgs<ExtArgs>;
    searchHistory?: boolean | Prisma.User$searchHistoryArgs<ExtArgs>;
    userRoles?: boolean | Prisma.User$userRolesArgs<ExtArgs>;
    companiesOwned?: boolean | Prisma.User$companiesOwnedArgs<ExtArgs>;
    companyEmployees?: boolean | Prisma.User$companyEmployeesArgs<ExtArgs>;
    jobsPosted?: boolean | Prisma.User$jobsPostedArgs<ExtArgs>;
    resumes?: boolean | Prisma.User$resumesArgs<ExtArgs>;
    jobApplications?: boolean | Prisma.User$jobApplicationsArgs<ExtArgs>;
    products?: boolean | Prisma.User$productsArgs<ExtArgs>;
    productReviewsWritten?: boolean | Prisma.User$productReviewsWrittenArgs<ExtArgs>;
    productReviewsReceived?: boolean | Prisma.User$productReviewsReceivedArgs<ExtArgs>;
    booksAuthored?: boolean | Prisma.User$booksAuthoredArgs<ExtArgs>;
    bookPurchases?: boolean | Prisma.User$bookPurchasesArgs<ExtArgs>;
    bookReviews?: boolean | Prisma.User$bookReviewsArgs<ExtArgs>;
    resourcesCreated?: boolean | Prisma.User$resourcesCreatedArgs<ExtArgs>;
    portfolioProjects?: boolean | Prisma.User$portfolioProjectsArgs<ExtArgs>;
    aiConversations?: boolean | Prisma.User$aiConversationsArgs<ExtArgs>;
    _count?: boolean | Prisma.UserCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["user"]>;
export type UserSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    name?: boolean;
    username?: boolean;
    email?: boolean;
    emailVerified?: boolean;
    image?: boolean;
    coverImage?: boolean;
    bio?: boolean;
    location?: boolean;
    skills?: boolean;
    languages?: boolean;
    timezone?: boolean;
    website?: boolean;
    github?: boolean;
    linkedin?: boolean;
    role?: boolean;
    status?: boolean;
    verificationStatus?: boolean;
    profileCompletion?: boolean;
    preferredCurrency?: boolean;
    stripeAccountId?: boolean;
    stripeOnboardingDone?: boolean;
    lastLoginAt?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
}, ExtArgs["result"]["user"]>;
export type UserSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    name?: boolean;
    username?: boolean;
    email?: boolean;
    emailVerified?: boolean;
    image?: boolean;
    coverImage?: boolean;
    bio?: boolean;
    location?: boolean;
    skills?: boolean;
    languages?: boolean;
    timezone?: boolean;
    website?: boolean;
    github?: boolean;
    linkedin?: boolean;
    role?: boolean;
    status?: boolean;
    verificationStatus?: boolean;
    profileCompletion?: boolean;
    preferredCurrency?: boolean;
    stripeAccountId?: boolean;
    stripeOnboardingDone?: boolean;
    lastLoginAt?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
}, ExtArgs["result"]["user"]>;
export type UserSelectScalar = {
    id?: boolean;
    name?: boolean;
    username?: boolean;
    email?: boolean;
    emailVerified?: boolean;
    image?: boolean;
    coverImage?: boolean;
    bio?: boolean;
    location?: boolean;
    skills?: boolean;
    languages?: boolean;
    timezone?: boolean;
    website?: boolean;
    github?: boolean;
    linkedin?: boolean;
    role?: boolean;
    status?: boolean;
    verificationStatus?: boolean;
    profileCompletion?: boolean;
    preferredCurrency?: boolean;
    stripeAccountId?: boolean;
    stripeOnboardingDone?: boolean;
    lastLoginAt?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
};
export type UserOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "name" | "username" | "email" | "emailVerified" | "image" | "coverImage" | "bio" | "location" | "skills" | "languages" | "timezone" | "website" | "github" | "linkedin" | "role" | "status" | "verificationStatus" | "profileCompletion" | "preferredCurrency" | "stripeAccountId" | "stripeOnboardingDone" | "lastLoginAt" | "createdAt" | "updatedAt", ExtArgs["result"]["user"]>;
export type UserInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    accounts?: boolean | Prisma.User$accountsArgs<ExtArgs>;
    sessions?: boolean | Prisma.User$sessionsArgs<ExtArgs>;
    profile?: boolean | Prisma.User$profileArgs<ExtArgs>;
    freelancerProfile?: boolean | Prisma.User$freelancerProfileArgs<ExtArgs>;
    buyerProfile?: boolean | Prisma.User$buyerProfileArgs<ExtArgs>;
    portfolioItems?: boolean | Prisma.User$portfolioItemsArgs<ExtArgs>;
    services?: boolean | Prisma.User$servicesArgs<ExtArgs>;
    ordersAsBuyer?: boolean | Prisma.User$ordersAsBuyerArgs<ExtArgs>;
    ordersAsFreelancer?: boolean | Prisma.User$ordersAsFreelancerArgs<ExtArgs>;
    reviewsWritten?: boolean | Prisma.User$reviewsWrittenArgs<ExtArgs>;
    reviewsReceived?: boolean | Prisma.User$reviewsReceivedArgs<ExtArgs>;
    favorites?: boolean | Prisma.User$favoritesArgs<ExtArgs>;
    cart?: boolean | Prisma.User$cartArgs<ExtArgs>;
    conversationParts?: boolean | Prisma.User$conversationPartsArgs<ExtArgs>;
    messages?: boolean | Prisma.User$messagesArgs<ExtArgs>;
    notifications?: boolean | Prisma.User$notificationsArgs<ExtArgs>;
    payouts?: boolean | Prisma.User$payoutsArgs<ExtArgs>;
    disputes?: boolean | Prisma.User$disputesArgs<ExtArgs>;
    reports?: boolean | Prisma.User$reportsArgs<ExtArgs>;
    achievements?: boolean | Prisma.User$achievementsArgs<ExtArgs>;
    xp?: boolean | Prisma.User$xpArgs<ExtArgs>;
    searchHistory?: boolean | Prisma.User$searchHistoryArgs<ExtArgs>;
    userRoles?: boolean | Prisma.User$userRolesArgs<ExtArgs>;
    companiesOwned?: boolean | Prisma.User$companiesOwnedArgs<ExtArgs>;
    companyEmployees?: boolean | Prisma.User$companyEmployeesArgs<ExtArgs>;
    jobsPosted?: boolean | Prisma.User$jobsPostedArgs<ExtArgs>;
    resumes?: boolean | Prisma.User$resumesArgs<ExtArgs>;
    jobApplications?: boolean | Prisma.User$jobApplicationsArgs<ExtArgs>;
    products?: boolean | Prisma.User$productsArgs<ExtArgs>;
    productReviewsWritten?: boolean | Prisma.User$productReviewsWrittenArgs<ExtArgs>;
    productReviewsReceived?: boolean | Prisma.User$productReviewsReceivedArgs<ExtArgs>;
    booksAuthored?: boolean | Prisma.User$booksAuthoredArgs<ExtArgs>;
    bookPurchases?: boolean | Prisma.User$bookPurchasesArgs<ExtArgs>;
    bookReviews?: boolean | Prisma.User$bookReviewsArgs<ExtArgs>;
    resourcesCreated?: boolean | Prisma.User$resourcesCreatedArgs<ExtArgs>;
    portfolioProjects?: boolean | Prisma.User$portfolioProjectsArgs<ExtArgs>;
    aiConversations?: boolean | Prisma.User$aiConversationsArgs<ExtArgs>;
    _count?: boolean | Prisma.UserCountOutputTypeDefaultArgs<ExtArgs>;
};
export type UserIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {};
export type UserIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {};
export type $UserPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "User";
    objects: {
        accounts: Prisma.$AccountPayload<ExtArgs>[];
        sessions: Prisma.$SessionPayload<ExtArgs>[];
        profile: Prisma.$ProfilePayload<ExtArgs> | null;
        freelancerProfile: Prisma.$FreelancerProfilePayload<ExtArgs> | null;
        buyerProfile: Prisma.$BuyerProfilePayload<ExtArgs> | null;
        portfolioItems: Prisma.$PortfolioPayload<ExtArgs>[];
        services: Prisma.$ServicePayload<ExtArgs>[];
        ordersAsBuyer: Prisma.$OrderPayload<ExtArgs>[];
        ordersAsFreelancer: Prisma.$OrderPayload<ExtArgs>[];
        reviewsWritten: Prisma.$ReviewPayload<ExtArgs>[];
        reviewsReceived: Prisma.$ReviewPayload<ExtArgs>[];
        favorites: Prisma.$FavoritePayload<ExtArgs>[];
        cart: Prisma.$CartPayload<ExtArgs> | null;
        conversationParts: Prisma.$ConversationParticipantPayload<ExtArgs>[];
        messages: Prisma.$MessagePayload<ExtArgs>[];
        notifications: Prisma.$NotificationPayload<ExtArgs>[];
        payouts: Prisma.$PayoutPayload<ExtArgs>[];
        disputes: Prisma.$DisputePayload<ExtArgs>[];
        reports: Prisma.$ReportPayload<ExtArgs>[];
        achievements: Prisma.$UserAchievementPayload<ExtArgs>[];
        xp: Prisma.$UserXPPayload<ExtArgs> | null;
        searchHistory: Prisma.$SearchHistoryPayload<ExtArgs>[];
        userRoles: Prisma.$UserRolePayload<ExtArgs>[];
        companiesOwned: Prisma.$CompanyPayload<ExtArgs>[];
        companyEmployees: Prisma.$EmployeePayload<ExtArgs>[];
        jobsPosted: Prisma.$JobPayload<ExtArgs>[];
        resumes: Prisma.$ResumePayload<ExtArgs>[];
        jobApplications: Prisma.$JobApplicationPayload<ExtArgs>[];
        products: Prisma.$ProductPayload<ExtArgs>[];
        productReviewsWritten: Prisma.$ProductReviewPayload<ExtArgs>[];
        productReviewsReceived: Prisma.$ProductReviewPayload<ExtArgs>[];
        booksAuthored: Prisma.$BookPayload<ExtArgs>[];
        bookPurchases: Prisma.$BookPurchasePayload<ExtArgs>[];
        bookReviews: Prisma.$BookReviewPayload<ExtArgs>[];
        resourcesCreated: Prisma.$ResourcePayload<ExtArgs>[];
        portfolioProjects: Prisma.$PortfolioProjectPayload<ExtArgs>[];
        aiConversations: Prisma.$AIConversationPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        name: string;
        username: string | null;
        email: string;
        emailVerified: boolean;
        image: string | null;
        coverImage: string | null;
        bio: string | null;
        location: string | null;
        skills: string[];
        languages: string[];
        timezone: string | null;
        website: string | null;
        github: string | null;
        linkedin: string | null;
        role: string;
        status: string;
        verificationStatus: string;
        profileCompletion: number;
        preferredCurrency: string;
        stripeAccountId: string | null;
        stripeOnboardingDone: boolean;
        lastLoginAt: Date | null;
        createdAt: Date;
        updatedAt: Date;
    }, ExtArgs["result"]["user"]>;
    composites: {};
};
export type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$UserPayload, S>;
export type UserCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: UserCountAggregateInputType | true;
};
export interface UserDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['User'];
        meta: {
            name: 'User';
        };
    };
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: Prisma.SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: Prisma.SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     *
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     *
     */
    findMany<T extends UserFindManyArgs>(args?: Prisma.SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     *
     */
    create<T extends UserCreateArgs>(args: Prisma.SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends UserCreateManyArgs>(args?: Prisma.SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     *
     */
    delete<T extends UserDeleteArgs>(args: Prisma.SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends UserUpdateArgs>(args: Prisma.SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: Prisma.SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends UserUpdateManyArgs>(args: Prisma.SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: Prisma.SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(args?: Prisma.Subset<T, UserCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], UserCountAggregateOutputType> : number>;
    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Prisma.Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>;
    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
    **/
    groupBy<T extends UserGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: UserGroupByArgs['orderBy'];
    } : {
        orderBy?: UserGroupByArgs['orderBy'];
    }, OrderFields extends Prisma.ExcludeUnderscoreKeys<Prisma.Keys<Prisma.MaybeTupleToUnion<T['orderBy']>>>, ByFields extends Prisma.MaybeTupleToUnion<T['by']>, ByValid extends Prisma.Has<ByFields, OrderFields>, HavingFields extends Prisma.GetHavingFields<T['having']>, HavingValid extends Prisma.Has<ByFields, HavingFields>, ByEmpty extends T['by'] extends never[] ? Prisma.True : Prisma.False, InputErrors extends ByEmpty extends Prisma.True ? `Error: "by" must not be empty.` : HavingValid extends Prisma.False ? {
        [P in HavingFields]: P extends ByFields ? never : P extends string ? `Error: Field "${P}" used in "having" needs to be provided in "by".` : [
            Error,
            'Field ',
            P,
            ` in "having" needs to be provided in "by"`
        ];
    }[HavingFields] : 'take' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields] : 'Error: If you provide "take", you also need to provide "orderBy"' : 'skip' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields] : 'Error: If you provide "skip", you also need to provide "orderBy"' : ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the User model
     */
    readonly fields: UserFieldRefs;
}
/**
 * The delegate class that acts as a "Promise-like" for User.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export interface Prisma__UserClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    accounts<T extends Prisma.User$accountsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.User$accountsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    sessions<T extends Prisma.User$sessionsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.User$sessionsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    profile<T extends Prisma.User$profileArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.User$profileArgs<ExtArgs>>): Prisma.Prisma__ProfileClient<runtime.Types.Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    freelancerProfile<T extends Prisma.User$freelancerProfileArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.User$freelancerProfileArgs<ExtArgs>>): Prisma.Prisma__FreelancerProfileClient<runtime.Types.Result.GetResult<Prisma.$FreelancerProfilePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    buyerProfile<T extends Prisma.User$buyerProfileArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.User$buyerProfileArgs<ExtArgs>>): Prisma.Prisma__BuyerProfileClient<runtime.Types.Result.GetResult<Prisma.$BuyerProfilePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    portfolioItems<T extends Prisma.User$portfolioItemsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.User$portfolioItemsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$PortfolioPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    services<T extends Prisma.User$servicesArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.User$servicesArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ServicePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    ordersAsBuyer<T extends Prisma.User$ordersAsBuyerArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.User$ordersAsBuyerArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    ordersAsFreelancer<T extends Prisma.User$ordersAsFreelancerArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.User$ordersAsFreelancerArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    reviewsWritten<T extends Prisma.User$reviewsWrittenArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.User$reviewsWrittenArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    reviewsReceived<T extends Prisma.User$reviewsReceivedArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.User$reviewsReceivedArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    favorites<T extends Prisma.User$favoritesArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.User$favoritesArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$FavoritePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    cart<T extends Prisma.User$cartArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.User$cartArgs<ExtArgs>>): Prisma.Prisma__CartClient<runtime.Types.Result.GetResult<Prisma.$CartPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    conversationParts<T extends Prisma.User$conversationPartsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.User$conversationPartsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ConversationParticipantPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    messages<T extends Prisma.User$messagesArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.User$messagesArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    notifications<T extends Prisma.User$notificationsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.User$notificationsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    payouts<T extends Prisma.User$payoutsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.User$payoutsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$PayoutPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    disputes<T extends Prisma.User$disputesArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.User$disputesArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$DisputePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    reports<T extends Prisma.User$reportsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.User$reportsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ReportPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    achievements<T extends Prisma.User$achievementsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.User$achievementsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$UserAchievementPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    xp<T extends Prisma.User$xpArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.User$xpArgs<ExtArgs>>): Prisma.Prisma__UserXPClient<runtime.Types.Result.GetResult<Prisma.$UserXPPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    searchHistory<T extends Prisma.User$searchHistoryArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.User$searchHistoryArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$SearchHistoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    userRoles<T extends Prisma.User$userRolesArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.User$userRolesArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$UserRolePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    companiesOwned<T extends Prisma.User$companiesOwnedArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.User$companiesOwnedArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$CompanyPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    companyEmployees<T extends Prisma.User$companyEmployeesArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.User$companyEmployeesArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$EmployeePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    jobsPosted<T extends Prisma.User$jobsPostedArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.User$jobsPostedArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$JobPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    resumes<T extends Prisma.User$resumesArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.User$resumesArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ResumePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    jobApplications<T extends Prisma.User$jobApplicationsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.User$jobApplicationsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$JobApplicationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    products<T extends Prisma.User$productsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.User$productsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    productReviewsWritten<T extends Prisma.User$productReviewsWrittenArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.User$productReviewsWrittenArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ProductReviewPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    productReviewsReceived<T extends Prisma.User$productReviewsReceivedArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.User$productReviewsReceivedArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ProductReviewPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    booksAuthored<T extends Prisma.User$booksAuthoredArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.User$booksAuthoredArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$BookPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    bookPurchases<T extends Prisma.User$bookPurchasesArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.User$bookPurchasesArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$BookPurchasePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    bookReviews<T extends Prisma.User$bookReviewsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.User$bookReviewsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$BookReviewPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    resourcesCreated<T extends Prisma.User$resourcesCreatedArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.User$resourcesCreatedArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ResourcePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    portfolioProjects<T extends Prisma.User$portfolioProjectsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.User$portfolioProjectsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$PortfolioProjectPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    aiConversations<T extends Prisma.User$aiConversationsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.User$aiConversationsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$AIConversationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
/**
 * Fields of the User model
 */
export interface UserFieldRefs {
    readonly id: Prisma.FieldRef<"User", 'String'>;
    readonly name: Prisma.FieldRef<"User", 'String'>;
    readonly username: Prisma.FieldRef<"User", 'String'>;
    readonly email: Prisma.FieldRef<"User", 'String'>;
    readonly emailVerified: Prisma.FieldRef<"User", 'Boolean'>;
    readonly image: Prisma.FieldRef<"User", 'String'>;
    readonly coverImage: Prisma.FieldRef<"User", 'String'>;
    readonly bio: Prisma.FieldRef<"User", 'String'>;
    readonly location: Prisma.FieldRef<"User", 'String'>;
    readonly skills: Prisma.FieldRef<"User", 'String[]'>;
    readonly languages: Prisma.FieldRef<"User", 'String[]'>;
    readonly timezone: Prisma.FieldRef<"User", 'String'>;
    readonly website: Prisma.FieldRef<"User", 'String'>;
    readonly github: Prisma.FieldRef<"User", 'String'>;
    readonly linkedin: Prisma.FieldRef<"User", 'String'>;
    readonly role: Prisma.FieldRef<"User", 'String'>;
    readonly status: Prisma.FieldRef<"User", 'String'>;
    readonly verificationStatus: Prisma.FieldRef<"User", 'String'>;
    readonly profileCompletion: Prisma.FieldRef<"User", 'Int'>;
    readonly preferredCurrency: Prisma.FieldRef<"User", 'String'>;
    readonly stripeAccountId: Prisma.FieldRef<"User", 'String'>;
    readonly stripeOnboardingDone: Prisma.FieldRef<"User", 'Boolean'>;
    readonly lastLoginAt: Prisma.FieldRef<"User", 'DateTime'>;
    readonly createdAt: Prisma.FieldRef<"User", 'DateTime'>;
    readonly updatedAt: Prisma.FieldRef<"User", 'DateTime'>;
}
/**
 * User findUnique
 */
export type UserFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: Prisma.UserSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the User
     */
    omit?: Prisma.UserOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.UserInclude<ExtArgs> | null;
    /**
     * Filter, which User to fetch.
     */
    where: Prisma.UserWhereUniqueInput;
};
/**
 * User findUniqueOrThrow
 */
export type UserFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: Prisma.UserSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the User
     */
    omit?: Prisma.UserOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.UserInclude<ExtArgs> | null;
    /**
     * Filter, which User to fetch.
     */
    where: Prisma.UserWhereUniqueInput;
};
/**
 * User findFirst
 */
export type UserFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: Prisma.UserSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the User
     */
    omit?: Prisma.UserOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.UserInclude<ExtArgs> | null;
    /**
     * Filter, which User to fetch.
     */
    where?: Prisma.UserWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Users to fetch.
     */
    orderBy?: Prisma.UserOrderByWithRelationInput | Prisma.UserOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Users.
     */
    cursor?: Prisma.UserWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Users from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Users.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Users.
     */
    distinct?: Prisma.UserScalarFieldEnum | Prisma.UserScalarFieldEnum[];
};
/**
 * User findFirstOrThrow
 */
export type UserFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: Prisma.UserSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the User
     */
    omit?: Prisma.UserOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.UserInclude<ExtArgs> | null;
    /**
     * Filter, which User to fetch.
     */
    where?: Prisma.UserWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Users to fetch.
     */
    orderBy?: Prisma.UserOrderByWithRelationInput | Prisma.UserOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Users.
     */
    cursor?: Prisma.UserWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Users from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Users.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Users.
     */
    distinct?: Prisma.UserScalarFieldEnum | Prisma.UserScalarFieldEnum[];
};
/**
 * User findMany
 */
export type UserFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: Prisma.UserSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the User
     */
    omit?: Prisma.UserOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.UserInclude<ExtArgs> | null;
    /**
     * Filter, which Users to fetch.
     */
    where?: Prisma.UserWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Users to fetch.
     */
    orderBy?: Prisma.UserOrderByWithRelationInput | Prisma.UserOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing Users.
     */
    cursor?: Prisma.UserWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Users from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Users.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Users.
     */
    distinct?: Prisma.UserScalarFieldEnum | Prisma.UserScalarFieldEnum[];
};
/**
 * User create
 */
export type UserCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: Prisma.UserSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the User
     */
    omit?: Prisma.UserOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.UserInclude<ExtArgs> | null;
    /**
     * The data needed to create a User.
     */
    data: Prisma.XOR<Prisma.UserCreateInput, Prisma.UserUncheckedCreateInput>;
};
/**
 * User createMany
 */
export type UserCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: Prisma.UserCreateManyInput | Prisma.UserCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * User createManyAndReturn
 */
export type UserCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: Prisma.UserSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the User
     */
    omit?: Prisma.UserOmit<ExtArgs> | null;
    /**
     * The data used to create many Users.
     */
    data: Prisma.UserCreateManyInput | Prisma.UserCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * User update
 */
export type UserUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: Prisma.UserSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the User
     */
    omit?: Prisma.UserOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.UserInclude<ExtArgs> | null;
    /**
     * The data needed to update a User.
     */
    data: Prisma.XOR<Prisma.UserUpdateInput, Prisma.UserUncheckedUpdateInput>;
    /**
     * Choose, which User to update.
     */
    where: Prisma.UserWhereUniqueInput;
};
/**
 * User updateMany
 */
export type UserUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: Prisma.XOR<Prisma.UserUpdateManyMutationInput, Prisma.UserUncheckedUpdateManyInput>;
    /**
     * Filter which Users to update
     */
    where?: Prisma.UserWhereInput;
    /**
     * Limit how many Users to update.
     */
    limit?: number;
};
/**
 * User updateManyAndReturn
 */
export type UserUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: Prisma.UserSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the User
     */
    omit?: Prisma.UserOmit<ExtArgs> | null;
    /**
     * The data used to update Users.
     */
    data: Prisma.XOR<Prisma.UserUpdateManyMutationInput, Prisma.UserUncheckedUpdateManyInput>;
    /**
     * Filter which Users to update
     */
    where?: Prisma.UserWhereInput;
    /**
     * Limit how many Users to update.
     */
    limit?: number;
};
/**
 * User upsert
 */
export type UserUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: Prisma.UserSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the User
     */
    omit?: Prisma.UserOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.UserInclude<ExtArgs> | null;
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: Prisma.UserWhereUniqueInput;
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: Prisma.XOR<Prisma.UserCreateInput, Prisma.UserUncheckedCreateInput>;
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: Prisma.XOR<Prisma.UserUpdateInput, Prisma.UserUncheckedUpdateInput>;
};
/**
 * User delete
 */
export type UserDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: Prisma.UserSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the User
     */
    omit?: Prisma.UserOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.UserInclude<ExtArgs> | null;
    /**
     * Filter which User to delete.
     */
    where: Prisma.UserWhereUniqueInput;
};
/**
 * User deleteMany
 */
export type UserDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: Prisma.UserWhereInput;
    /**
     * Limit how many Users to delete.
     */
    limit?: number;
};
/**
 * User.accounts
 */
export type User$accountsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: Prisma.AccountSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Account
     */
    omit?: Prisma.AccountOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.AccountInclude<ExtArgs> | null;
    where?: Prisma.AccountWhereInput;
    orderBy?: Prisma.AccountOrderByWithRelationInput | Prisma.AccountOrderByWithRelationInput[];
    cursor?: Prisma.AccountWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.AccountScalarFieldEnum | Prisma.AccountScalarFieldEnum[];
};
/**
 * User.sessions
 */
export type User$sessionsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: Prisma.SessionSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Session
     */
    omit?: Prisma.SessionOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.SessionInclude<ExtArgs> | null;
    where?: Prisma.SessionWhereInput;
    orderBy?: Prisma.SessionOrderByWithRelationInput | Prisma.SessionOrderByWithRelationInput[];
    cursor?: Prisma.SessionWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.SessionScalarFieldEnum | Prisma.SessionScalarFieldEnum[];
};
/**
 * User.profile
 */
export type User$profileArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: Prisma.ProfileSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Profile
     */
    omit?: Prisma.ProfileOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ProfileInclude<ExtArgs> | null;
    where?: Prisma.ProfileWhereInput;
};
/**
 * User.freelancerProfile
 */
export type User$freelancerProfileArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FreelancerProfile
     */
    select?: Prisma.FreelancerProfileSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the FreelancerProfile
     */
    omit?: Prisma.FreelancerProfileOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.FreelancerProfileInclude<ExtArgs> | null;
    where?: Prisma.FreelancerProfileWhereInput;
};
/**
 * User.buyerProfile
 */
export type User$buyerProfileArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BuyerProfile
     */
    select?: Prisma.BuyerProfileSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the BuyerProfile
     */
    omit?: Prisma.BuyerProfileOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.BuyerProfileInclude<ExtArgs> | null;
    where?: Prisma.BuyerProfileWhereInput;
};
/**
 * User.portfolioItems
 */
export type User$portfolioItemsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Portfolio
     */
    select?: Prisma.PortfolioSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Portfolio
     */
    omit?: Prisma.PortfolioOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.PortfolioInclude<ExtArgs> | null;
    where?: Prisma.PortfolioWhereInput;
    orderBy?: Prisma.PortfolioOrderByWithRelationInput | Prisma.PortfolioOrderByWithRelationInput[];
    cursor?: Prisma.PortfolioWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.PortfolioScalarFieldEnum | Prisma.PortfolioScalarFieldEnum[];
};
/**
 * User.services
 */
export type User$servicesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Service
     */
    select?: Prisma.ServiceSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Service
     */
    omit?: Prisma.ServiceOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ServiceInclude<ExtArgs> | null;
    where?: Prisma.ServiceWhereInput;
    orderBy?: Prisma.ServiceOrderByWithRelationInput | Prisma.ServiceOrderByWithRelationInput[];
    cursor?: Prisma.ServiceWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ServiceScalarFieldEnum | Prisma.ServiceScalarFieldEnum[];
};
/**
 * User.ordersAsBuyer
 */
export type User$ordersAsBuyerArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: Prisma.OrderSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Order
     */
    omit?: Prisma.OrderOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.OrderInclude<ExtArgs> | null;
    where?: Prisma.OrderWhereInput;
    orderBy?: Prisma.OrderOrderByWithRelationInput | Prisma.OrderOrderByWithRelationInput[];
    cursor?: Prisma.OrderWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.OrderScalarFieldEnum | Prisma.OrderScalarFieldEnum[];
};
/**
 * User.ordersAsFreelancer
 */
export type User$ordersAsFreelancerArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: Prisma.OrderSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Order
     */
    omit?: Prisma.OrderOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.OrderInclude<ExtArgs> | null;
    where?: Prisma.OrderWhereInput;
    orderBy?: Prisma.OrderOrderByWithRelationInput | Prisma.OrderOrderByWithRelationInput[];
    cursor?: Prisma.OrderWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.OrderScalarFieldEnum | Prisma.OrderScalarFieldEnum[];
};
/**
 * User.reviewsWritten
 */
export type User$reviewsWrittenArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: Prisma.ReviewSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Review
     */
    omit?: Prisma.ReviewOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ReviewInclude<ExtArgs> | null;
    where?: Prisma.ReviewWhereInput;
    orderBy?: Prisma.ReviewOrderByWithRelationInput | Prisma.ReviewOrderByWithRelationInput[];
    cursor?: Prisma.ReviewWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ReviewScalarFieldEnum | Prisma.ReviewScalarFieldEnum[];
};
/**
 * User.reviewsReceived
 */
export type User$reviewsReceivedArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: Prisma.ReviewSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Review
     */
    omit?: Prisma.ReviewOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ReviewInclude<ExtArgs> | null;
    where?: Prisma.ReviewWhereInput;
    orderBy?: Prisma.ReviewOrderByWithRelationInput | Prisma.ReviewOrderByWithRelationInput[];
    cursor?: Prisma.ReviewWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ReviewScalarFieldEnum | Prisma.ReviewScalarFieldEnum[];
};
/**
 * User.favorites
 */
export type User$favoritesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Favorite
     */
    select?: Prisma.FavoriteSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Favorite
     */
    omit?: Prisma.FavoriteOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.FavoriteInclude<ExtArgs> | null;
    where?: Prisma.FavoriteWhereInput;
    orderBy?: Prisma.FavoriteOrderByWithRelationInput | Prisma.FavoriteOrderByWithRelationInput[];
    cursor?: Prisma.FavoriteWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.FavoriteScalarFieldEnum | Prisma.FavoriteScalarFieldEnum[];
};
/**
 * User.cart
 */
export type User$cartArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cart
     */
    select?: Prisma.CartSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Cart
     */
    omit?: Prisma.CartOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.CartInclude<ExtArgs> | null;
    where?: Prisma.CartWhereInput;
};
/**
 * User.conversationParts
 */
export type User$conversationPartsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ConversationParticipant
     */
    select?: Prisma.ConversationParticipantSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ConversationParticipant
     */
    omit?: Prisma.ConversationParticipantOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ConversationParticipantInclude<ExtArgs> | null;
    where?: Prisma.ConversationParticipantWhereInput;
    orderBy?: Prisma.ConversationParticipantOrderByWithRelationInput | Prisma.ConversationParticipantOrderByWithRelationInput[];
    cursor?: Prisma.ConversationParticipantWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ConversationParticipantScalarFieldEnum | Prisma.ConversationParticipantScalarFieldEnum[];
};
/**
 * User.messages
 */
export type User$messagesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: Prisma.MessageSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Message
     */
    omit?: Prisma.MessageOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.MessageInclude<ExtArgs> | null;
    where?: Prisma.MessageWhereInput;
    orderBy?: Prisma.MessageOrderByWithRelationInput | Prisma.MessageOrderByWithRelationInput[];
    cursor?: Prisma.MessageWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.MessageScalarFieldEnum | Prisma.MessageScalarFieldEnum[];
};
/**
 * User.notifications
 */
export type User$notificationsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: Prisma.NotificationSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Notification
     */
    omit?: Prisma.NotificationOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.NotificationInclude<ExtArgs> | null;
    where?: Prisma.NotificationWhereInput;
    orderBy?: Prisma.NotificationOrderByWithRelationInput | Prisma.NotificationOrderByWithRelationInput[];
    cursor?: Prisma.NotificationWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.NotificationScalarFieldEnum | Prisma.NotificationScalarFieldEnum[];
};
/**
 * User.payouts
 */
export type User$payoutsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payout
     */
    select?: Prisma.PayoutSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Payout
     */
    omit?: Prisma.PayoutOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.PayoutInclude<ExtArgs> | null;
    where?: Prisma.PayoutWhereInput;
    orderBy?: Prisma.PayoutOrderByWithRelationInput | Prisma.PayoutOrderByWithRelationInput[];
    cursor?: Prisma.PayoutWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.PayoutScalarFieldEnum | Prisma.PayoutScalarFieldEnum[];
};
/**
 * User.disputes
 */
export type User$disputesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dispute
     */
    select?: Prisma.DisputeSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Dispute
     */
    omit?: Prisma.DisputeOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.DisputeInclude<ExtArgs> | null;
    where?: Prisma.DisputeWhereInput;
    orderBy?: Prisma.DisputeOrderByWithRelationInput | Prisma.DisputeOrderByWithRelationInput[];
    cursor?: Prisma.DisputeWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.DisputeScalarFieldEnum | Prisma.DisputeScalarFieldEnum[];
};
/**
 * User.reports
 */
export type User$reportsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Report
     */
    select?: Prisma.ReportSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Report
     */
    omit?: Prisma.ReportOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ReportInclude<ExtArgs> | null;
    where?: Prisma.ReportWhereInput;
    orderBy?: Prisma.ReportOrderByWithRelationInput | Prisma.ReportOrderByWithRelationInput[];
    cursor?: Prisma.ReportWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ReportScalarFieldEnum | Prisma.ReportScalarFieldEnum[];
};
/**
 * User.achievements
 */
export type User$achievementsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserAchievement
     */
    select?: Prisma.UserAchievementSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the UserAchievement
     */
    omit?: Prisma.UserAchievementOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.UserAchievementInclude<ExtArgs> | null;
    where?: Prisma.UserAchievementWhereInput;
    orderBy?: Prisma.UserAchievementOrderByWithRelationInput | Prisma.UserAchievementOrderByWithRelationInput[];
    cursor?: Prisma.UserAchievementWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.UserAchievementScalarFieldEnum | Prisma.UserAchievementScalarFieldEnum[];
};
/**
 * User.xp
 */
export type User$xpArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserXP
     */
    select?: Prisma.UserXPSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the UserXP
     */
    omit?: Prisma.UserXPOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.UserXPInclude<ExtArgs> | null;
    where?: Prisma.UserXPWhereInput;
};
/**
 * User.searchHistory
 */
export type User$searchHistoryArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SearchHistory
     */
    select?: Prisma.SearchHistorySelect<ExtArgs> | null;
    /**
     * Omit specific fields from the SearchHistory
     */
    omit?: Prisma.SearchHistoryOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.SearchHistoryInclude<ExtArgs> | null;
    where?: Prisma.SearchHistoryWhereInput;
    orderBy?: Prisma.SearchHistoryOrderByWithRelationInput | Prisma.SearchHistoryOrderByWithRelationInput[];
    cursor?: Prisma.SearchHistoryWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.SearchHistoryScalarFieldEnum | Prisma.SearchHistoryScalarFieldEnum[];
};
/**
 * User.userRoles
 */
export type User$userRolesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserRole
     */
    select?: Prisma.UserRoleSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the UserRole
     */
    omit?: Prisma.UserRoleOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.UserRoleInclude<ExtArgs> | null;
    where?: Prisma.UserRoleWhereInput;
    orderBy?: Prisma.UserRoleOrderByWithRelationInput | Prisma.UserRoleOrderByWithRelationInput[];
    cursor?: Prisma.UserRoleWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.UserRoleScalarFieldEnum | Prisma.UserRoleScalarFieldEnum[];
};
/**
 * User.companiesOwned
 */
export type User$companiesOwnedArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Company
     */
    select?: Prisma.CompanySelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Company
     */
    omit?: Prisma.CompanyOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.CompanyInclude<ExtArgs> | null;
    where?: Prisma.CompanyWhereInput;
    orderBy?: Prisma.CompanyOrderByWithRelationInput | Prisma.CompanyOrderByWithRelationInput[];
    cursor?: Prisma.CompanyWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.CompanyScalarFieldEnum | Prisma.CompanyScalarFieldEnum[];
};
/**
 * User.companyEmployees
 */
export type User$companyEmployeesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employee
     */
    select?: Prisma.EmployeeSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Employee
     */
    omit?: Prisma.EmployeeOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.EmployeeInclude<ExtArgs> | null;
    where?: Prisma.EmployeeWhereInput;
    orderBy?: Prisma.EmployeeOrderByWithRelationInput | Prisma.EmployeeOrderByWithRelationInput[];
    cursor?: Prisma.EmployeeWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.EmployeeScalarFieldEnum | Prisma.EmployeeScalarFieldEnum[];
};
/**
 * User.jobsPosted
 */
export type User$jobsPostedArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Job
     */
    select?: Prisma.JobSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Job
     */
    omit?: Prisma.JobOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.JobInclude<ExtArgs> | null;
    where?: Prisma.JobWhereInput;
    orderBy?: Prisma.JobOrderByWithRelationInput | Prisma.JobOrderByWithRelationInput[];
    cursor?: Prisma.JobWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.JobScalarFieldEnum | Prisma.JobScalarFieldEnum[];
};
/**
 * User.resumes
 */
export type User$resumesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Resume
     */
    select?: Prisma.ResumeSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Resume
     */
    omit?: Prisma.ResumeOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ResumeInclude<ExtArgs> | null;
    where?: Prisma.ResumeWhereInput;
    orderBy?: Prisma.ResumeOrderByWithRelationInput | Prisma.ResumeOrderByWithRelationInput[];
    cursor?: Prisma.ResumeWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ResumeScalarFieldEnum | Prisma.ResumeScalarFieldEnum[];
};
/**
 * User.jobApplications
 */
export type User$jobApplicationsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JobApplication
     */
    select?: Prisma.JobApplicationSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the JobApplication
     */
    omit?: Prisma.JobApplicationOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.JobApplicationInclude<ExtArgs> | null;
    where?: Prisma.JobApplicationWhereInput;
    orderBy?: Prisma.JobApplicationOrderByWithRelationInput | Prisma.JobApplicationOrderByWithRelationInput[];
    cursor?: Prisma.JobApplicationWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.JobApplicationScalarFieldEnum | Prisma.JobApplicationScalarFieldEnum[];
};
/**
 * User.products
 */
export type User$productsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: Prisma.ProductSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Product
     */
    omit?: Prisma.ProductOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ProductInclude<ExtArgs> | null;
    where?: Prisma.ProductWhereInput;
    orderBy?: Prisma.ProductOrderByWithRelationInput | Prisma.ProductOrderByWithRelationInput[];
    cursor?: Prisma.ProductWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ProductScalarFieldEnum | Prisma.ProductScalarFieldEnum[];
};
/**
 * User.productReviewsWritten
 */
export type User$productReviewsWrittenArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductReview
     */
    select?: Prisma.ProductReviewSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ProductReview
     */
    omit?: Prisma.ProductReviewOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ProductReviewInclude<ExtArgs> | null;
    where?: Prisma.ProductReviewWhereInput;
    orderBy?: Prisma.ProductReviewOrderByWithRelationInput | Prisma.ProductReviewOrderByWithRelationInput[];
    cursor?: Prisma.ProductReviewWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ProductReviewScalarFieldEnum | Prisma.ProductReviewScalarFieldEnum[];
};
/**
 * User.productReviewsReceived
 */
export type User$productReviewsReceivedArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductReview
     */
    select?: Prisma.ProductReviewSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ProductReview
     */
    omit?: Prisma.ProductReviewOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ProductReviewInclude<ExtArgs> | null;
    where?: Prisma.ProductReviewWhereInput;
    orderBy?: Prisma.ProductReviewOrderByWithRelationInput | Prisma.ProductReviewOrderByWithRelationInput[];
    cursor?: Prisma.ProductReviewWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ProductReviewScalarFieldEnum | Prisma.ProductReviewScalarFieldEnum[];
};
/**
 * User.booksAuthored
 */
export type User$booksAuthoredArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Book
     */
    select?: Prisma.BookSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Book
     */
    omit?: Prisma.BookOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.BookInclude<ExtArgs> | null;
    where?: Prisma.BookWhereInput;
    orderBy?: Prisma.BookOrderByWithRelationInput | Prisma.BookOrderByWithRelationInput[];
    cursor?: Prisma.BookWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.BookScalarFieldEnum | Prisma.BookScalarFieldEnum[];
};
/**
 * User.bookPurchases
 */
export type User$bookPurchasesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookPurchase
     */
    select?: Prisma.BookPurchaseSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the BookPurchase
     */
    omit?: Prisma.BookPurchaseOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.BookPurchaseInclude<ExtArgs> | null;
    where?: Prisma.BookPurchaseWhereInput;
    orderBy?: Prisma.BookPurchaseOrderByWithRelationInput | Prisma.BookPurchaseOrderByWithRelationInput[];
    cursor?: Prisma.BookPurchaseWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.BookPurchaseScalarFieldEnum | Prisma.BookPurchaseScalarFieldEnum[];
};
/**
 * User.bookReviews
 */
export type User$bookReviewsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookReview
     */
    select?: Prisma.BookReviewSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the BookReview
     */
    omit?: Prisma.BookReviewOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.BookReviewInclude<ExtArgs> | null;
    where?: Prisma.BookReviewWhereInput;
    orderBy?: Prisma.BookReviewOrderByWithRelationInput | Prisma.BookReviewOrderByWithRelationInput[];
    cursor?: Prisma.BookReviewWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.BookReviewScalarFieldEnum | Prisma.BookReviewScalarFieldEnum[];
};
/**
 * User.resourcesCreated
 */
export type User$resourcesCreatedArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Resource
     */
    select?: Prisma.ResourceSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Resource
     */
    omit?: Prisma.ResourceOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ResourceInclude<ExtArgs> | null;
    where?: Prisma.ResourceWhereInput;
    orderBy?: Prisma.ResourceOrderByWithRelationInput | Prisma.ResourceOrderByWithRelationInput[];
    cursor?: Prisma.ResourceWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ResourceScalarFieldEnum | Prisma.ResourceScalarFieldEnum[];
};
/**
 * User.portfolioProjects
 */
export type User$portfolioProjectsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PortfolioProject
     */
    select?: Prisma.PortfolioProjectSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the PortfolioProject
     */
    omit?: Prisma.PortfolioProjectOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.PortfolioProjectInclude<ExtArgs> | null;
    where?: Prisma.PortfolioProjectWhereInput;
    orderBy?: Prisma.PortfolioProjectOrderByWithRelationInput | Prisma.PortfolioProjectOrderByWithRelationInput[];
    cursor?: Prisma.PortfolioProjectWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.PortfolioProjectScalarFieldEnum | Prisma.PortfolioProjectScalarFieldEnum[];
};
/**
 * User.aiConversations
 */
export type User$aiConversationsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AIConversation
     */
    select?: Prisma.AIConversationSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the AIConversation
     */
    omit?: Prisma.AIConversationOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.AIConversationInclude<ExtArgs> | null;
    where?: Prisma.AIConversationWhereInput;
    orderBy?: Prisma.AIConversationOrderByWithRelationInput | Prisma.AIConversationOrderByWithRelationInput[];
    cursor?: Prisma.AIConversationWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.AIConversationScalarFieldEnum | Prisma.AIConversationScalarFieldEnum[];
};
/**
 * User without action
 */
export type UserDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: Prisma.UserSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the User
     */
    omit?: Prisma.UserOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.UserInclude<ExtArgs> | null;
};
