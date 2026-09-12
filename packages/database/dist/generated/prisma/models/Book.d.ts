import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace";
/**
 * Model Book
 *
 */
export type BookModel = runtime.Types.Result.DefaultSelection<Prisma.$BookPayload>;
export type AggregateBook = {
    _count: BookCountAggregateOutputType | null;
    _avg: BookAvgAggregateOutputType | null;
    _sum: BookSumAggregateOutputType | null;
    _min: BookMinAggregateOutputType | null;
    _max: BookMaxAggregateOutputType | null;
};
export type BookAvgAggregateOutputType = {
    price: number | null;
    pages: number | null;
    ratingValue: number | null;
    reviewCount: number | null;
    salesCount: number | null;
};
export type BookSumAggregateOutputType = {
    price: number | null;
    pages: number | null;
    ratingValue: number | null;
    reviewCount: number | null;
    salesCount: number | null;
};
export type BookMinAggregateOutputType = {
    id: string | null;
    slug: string | null;
    title: string | null;
    author: string | null;
    authorUserId: string | null;
    bio: string | null;
    description: string | null;
    coverImage: string | null;
    categoryId: string | null;
    price: number | null;
    status: string | null;
    pages: number | null;
    edition: string | null;
    isbn: string | null;
    ratingValue: number | null;
    reviewCount: number | null;
    salesCount: number | null;
    publishedAt: Date | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type BookMaxAggregateOutputType = {
    id: string | null;
    slug: string | null;
    title: string | null;
    author: string | null;
    authorUserId: string | null;
    bio: string | null;
    description: string | null;
    coverImage: string | null;
    categoryId: string | null;
    price: number | null;
    status: string | null;
    pages: number | null;
    edition: string | null;
    isbn: string | null;
    ratingValue: number | null;
    reviewCount: number | null;
    salesCount: number | null;
    publishedAt: Date | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type BookCountAggregateOutputType = {
    id: number;
    slug: number;
    title: number;
    author: number;
    authorUserId: number;
    bio: number;
    description: number;
    coverImage: number;
    categoryId: number;
    price: number;
    status: number;
    pages: number;
    edition: number;
    isbn: number;
    tags: number;
    ratingValue: number;
    reviewCount: number;
    salesCount: number;
    publishedAt: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
};
export type BookAvgAggregateInputType = {
    price?: true;
    pages?: true;
    ratingValue?: true;
    reviewCount?: true;
    salesCount?: true;
};
export type BookSumAggregateInputType = {
    price?: true;
    pages?: true;
    ratingValue?: true;
    reviewCount?: true;
    salesCount?: true;
};
export type BookMinAggregateInputType = {
    id?: true;
    slug?: true;
    title?: true;
    author?: true;
    authorUserId?: true;
    bio?: true;
    description?: true;
    coverImage?: true;
    categoryId?: true;
    price?: true;
    status?: true;
    pages?: true;
    edition?: true;
    isbn?: true;
    ratingValue?: true;
    reviewCount?: true;
    salesCount?: true;
    publishedAt?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type BookMaxAggregateInputType = {
    id?: true;
    slug?: true;
    title?: true;
    author?: true;
    authorUserId?: true;
    bio?: true;
    description?: true;
    coverImage?: true;
    categoryId?: true;
    price?: true;
    status?: true;
    pages?: true;
    edition?: true;
    isbn?: true;
    ratingValue?: true;
    reviewCount?: true;
    salesCount?: true;
    publishedAt?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type BookCountAggregateInputType = {
    id?: true;
    slug?: true;
    title?: true;
    author?: true;
    authorUserId?: true;
    bio?: true;
    description?: true;
    coverImage?: true;
    categoryId?: true;
    price?: true;
    status?: true;
    pages?: true;
    edition?: true;
    isbn?: true;
    tags?: true;
    ratingValue?: true;
    reviewCount?: true;
    salesCount?: true;
    publishedAt?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
};
export type BookAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which Book to aggregate.
     */
    where?: Prisma.BookWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Books to fetch.
     */
    orderBy?: Prisma.BookOrderByWithRelationInput | Prisma.BookOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: Prisma.BookWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Books from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Books.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned Books
    **/
    _count?: true | BookCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
    **/
    _avg?: BookAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
    **/
    _sum?: BookSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
    **/
    _min?: BookMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
    **/
    _max?: BookMaxAggregateInputType;
};
export type GetBookAggregateType<T extends BookAggregateArgs> = {
    [P in keyof T & keyof AggregateBook]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateBook[P]> : Prisma.GetScalarType<T[P], AggregateBook[P]>;
};
export type BookGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.BookWhereInput;
    orderBy?: Prisma.BookOrderByWithAggregationInput | Prisma.BookOrderByWithAggregationInput[];
    by: Prisma.BookScalarFieldEnum[] | Prisma.BookScalarFieldEnum;
    having?: Prisma.BookScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: BookCountAggregateInputType | true;
    _avg?: BookAvgAggregateInputType;
    _sum?: BookSumAggregateInputType;
    _min?: BookMinAggregateInputType;
    _max?: BookMaxAggregateInputType;
};
export type BookGroupByOutputType = {
    id: string;
    slug: string;
    title: string;
    author: string;
    authorUserId: string | null;
    bio: string | null;
    description: string | null;
    coverImage: string | null;
    categoryId: string | null;
    price: number;
    status: string;
    pages: number | null;
    edition: string | null;
    isbn: string | null;
    tags: string[];
    ratingValue: number;
    reviewCount: number;
    salesCount: number;
    publishedAt: Date | null;
    createdAt: Date;
    updatedAt: Date;
    _count: BookCountAggregateOutputType | null;
    _avg: BookAvgAggregateOutputType | null;
    _sum: BookSumAggregateOutputType | null;
    _min: BookMinAggregateOutputType | null;
    _max: BookMaxAggregateOutputType | null;
};
export type GetBookGroupByPayload<T extends BookGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<BookGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof BookGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], BookGroupByOutputType[P]> : Prisma.GetScalarType<T[P], BookGroupByOutputType[P]>;
}>>;
export type BookWhereInput = {
    AND?: Prisma.BookWhereInput | Prisma.BookWhereInput[];
    OR?: Prisma.BookWhereInput[];
    NOT?: Prisma.BookWhereInput | Prisma.BookWhereInput[];
    id?: Prisma.StringFilter<"Book"> | string;
    slug?: Prisma.StringFilter<"Book"> | string;
    title?: Prisma.StringFilter<"Book"> | string;
    author?: Prisma.StringFilter<"Book"> | string;
    authorUserId?: Prisma.StringNullableFilter<"Book"> | string | null;
    bio?: Prisma.StringNullableFilter<"Book"> | string | null;
    description?: Prisma.StringNullableFilter<"Book"> | string | null;
    coverImage?: Prisma.StringNullableFilter<"Book"> | string | null;
    categoryId?: Prisma.StringNullableFilter<"Book"> | string | null;
    price?: Prisma.IntFilter<"Book"> | number;
    status?: Prisma.StringFilter<"Book"> | string;
    pages?: Prisma.IntNullableFilter<"Book"> | number | null;
    edition?: Prisma.StringNullableFilter<"Book"> | string | null;
    isbn?: Prisma.StringNullableFilter<"Book"> | string | null;
    tags?: Prisma.StringNullableListFilter<"Book">;
    ratingValue?: Prisma.FloatFilter<"Book"> | number;
    reviewCount?: Prisma.IntFilter<"Book"> | number;
    salesCount?: Prisma.IntFilter<"Book"> | number;
    publishedAt?: Prisma.DateTimeNullableFilter<"Book"> | Date | string | null;
    createdAt?: Prisma.DateTimeFilter<"Book"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Book"> | Date | string;
    authorUser?: Prisma.XOR<Prisma.UserNullableScalarRelationFilter, Prisma.UserWhereInput> | null;
    category?: Prisma.XOR<Prisma.BookCategoryNullableScalarRelationFilter, Prisma.BookCategoryWhereInput> | null;
    chapters?: Prisma.BookChapterListRelationFilter;
    purchases?: Prisma.BookPurchaseListRelationFilter;
    reviews?: Prisma.BookReviewListRelationFilter;
};
export type BookOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    slug?: Prisma.SortOrder;
    title?: Prisma.SortOrder;
    author?: Prisma.SortOrder;
    authorUserId?: Prisma.SortOrderInput | Prisma.SortOrder;
    bio?: Prisma.SortOrderInput | Prisma.SortOrder;
    description?: Prisma.SortOrderInput | Prisma.SortOrder;
    coverImage?: Prisma.SortOrderInput | Prisma.SortOrder;
    categoryId?: Prisma.SortOrderInput | Prisma.SortOrder;
    price?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    pages?: Prisma.SortOrderInput | Prisma.SortOrder;
    edition?: Prisma.SortOrderInput | Prisma.SortOrder;
    isbn?: Prisma.SortOrderInput | Prisma.SortOrder;
    tags?: Prisma.SortOrder;
    ratingValue?: Prisma.SortOrder;
    reviewCount?: Prisma.SortOrder;
    salesCount?: Prisma.SortOrder;
    publishedAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    authorUser?: Prisma.UserOrderByWithRelationInput;
    category?: Prisma.BookCategoryOrderByWithRelationInput;
    chapters?: Prisma.BookChapterOrderByRelationAggregateInput;
    purchases?: Prisma.BookPurchaseOrderByRelationAggregateInput;
    reviews?: Prisma.BookReviewOrderByRelationAggregateInput;
};
export type BookWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    slug?: string;
    AND?: Prisma.BookWhereInput | Prisma.BookWhereInput[];
    OR?: Prisma.BookWhereInput[];
    NOT?: Prisma.BookWhereInput | Prisma.BookWhereInput[];
    title?: Prisma.StringFilter<"Book"> | string;
    author?: Prisma.StringFilter<"Book"> | string;
    authorUserId?: Prisma.StringNullableFilter<"Book"> | string | null;
    bio?: Prisma.StringNullableFilter<"Book"> | string | null;
    description?: Prisma.StringNullableFilter<"Book"> | string | null;
    coverImage?: Prisma.StringNullableFilter<"Book"> | string | null;
    categoryId?: Prisma.StringNullableFilter<"Book"> | string | null;
    price?: Prisma.IntFilter<"Book"> | number;
    status?: Prisma.StringFilter<"Book"> | string;
    pages?: Prisma.IntNullableFilter<"Book"> | number | null;
    edition?: Prisma.StringNullableFilter<"Book"> | string | null;
    isbn?: Prisma.StringNullableFilter<"Book"> | string | null;
    tags?: Prisma.StringNullableListFilter<"Book">;
    ratingValue?: Prisma.FloatFilter<"Book"> | number;
    reviewCount?: Prisma.IntFilter<"Book"> | number;
    salesCount?: Prisma.IntFilter<"Book"> | number;
    publishedAt?: Prisma.DateTimeNullableFilter<"Book"> | Date | string | null;
    createdAt?: Prisma.DateTimeFilter<"Book"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Book"> | Date | string;
    authorUser?: Prisma.XOR<Prisma.UserNullableScalarRelationFilter, Prisma.UserWhereInput> | null;
    category?: Prisma.XOR<Prisma.BookCategoryNullableScalarRelationFilter, Prisma.BookCategoryWhereInput> | null;
    chapters?: Prisma.BookChapterListRelationFilter;
    purchases?: Prisma.BookPurchaseListRelationFilter;
    reviews?: Prisma.BookReviewListRelationFilter;
}, "id" | "slug">;
export type BookOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    slug?: Prisma.SortOrder;
    title?: Prisma.SortOrder;
    author?: Prisma.SortOrder;
    authorUserId?: Prisma.SortOrderInput | Prisma.SortOrder;
    bio?: Prisma.SortOrderInput | Prisma.SortOrder;
    description?: Prisma.SortOrderInput | Prisma.SortOrder;
    coverImage?: Prisma.SortOrderInput | Prisma.SortOrder;
    categoryId?: Prisma.SortOrderInput | Prisma.SortOrder;
    price?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    pages?: Prisma.SortOrderInput | Prisma.SortOrder;
    edition?: Prisma.SortOrderInput | Prisma.SortOrder;
    isbn?: Prisma.SortOrderInput | Prisma.SortOrder;
    tags?: Prisma.SortOrder;
    ratingValue?: Prisma.SortOrder;
    reviewCount?: Prisma.SortOrder;
    salesCount?: Prisma.SortOrder;
    publishedAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    _count?: Prisma.BookCountOrderByAggregateInput;
    _avg?: Prisma.BookAvgOrderByAggregateInput;
    _max?: Prisma.BookMaxOrderByAggregateInput;
    _min?: Prisma.BookMinOrderByAggregateInput;
    _sum?: Prisma.BookSumOrderByAggregateInput;
};
export type BookScalarWhereWithAggregatesInput = {
    AND?: Prisma.BookScalarWhereWithAggregatesInput | Prisma.BookScalarWhereWithAggregatesInput[];
    OR?: Prisma.BookScalarWhereWithAggregatesInput[];
    NOT?: Prisma.BookScalarWhereWithAggregatesInput | Prisma.BookScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"Book"> | string;
    slug?: Prisma.StringWithAggregatesFilter<"Book"> | string;
    title?: Prisma.StringWithAggregatesFilter<"Book"> | string;
    author?: Prisma.StringWithAggregatesFilter<"Book"> | string;
    authorUserId?: Prisma.StringNullableWithAggregatesFilter<"Book"> | string | null;
    bio?: Prisma.StringNullableWithAggregatesFilter<"Book"> | string | null;
    description?: Prisma.StringNullableWithAggregatesFilter<"Book"> | string | null;
    coverImage?: Prisma.StringNullableWithAggregatesFilter<"Book"> | string | null;
    categoryId?: Prisma.StringNullableWithAggregatesFilter<"Book"> | string | null;
    price?: Prisma.IntWithAggregatesFilter<"Book"> | number;
    status?: Prisma.StringWithAggregatesFilter<"Book"> | string;
    pages?: Prisma.IntNullableWithAggregatesFilter<"Book"> | number | null;
    edition?: Prisma.StringNullableWithAggregatesFilter<"Book"> | string | null;
    isbn?: Prisma.StringNullableWithAggregatesFilter<"Book"> | string | null;
    tags?: Prisma.StringNullableListFilter<"Book">;
    ratingValue?: Prisma.FloatWithAggregatesFilter<"Book"> | number;
    reviewCount?: Prisma.IntWithAggregatesFilter<"Book"> | number;
    salesCount?: Prisma.IntWithAggregatesFilter<"Book"> | number;
    publishedAt?: Prisma.DateTimeNullableWithAggregatesFilter<"Book"> | Date | string | null;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"Book"> | Date | string;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"Book"> | Date | string;
};
export type BookCreateInput = {
    id?: string;
    slug: string;
    title: string;
    author: string;
    bio?: string | null;
    description?: string | null;
    coverImage?: string | null;
    price?: number;
    status?: string;
    pages?: number | null;
    edition?: string | null;
    isbn?: string | null;
    tags?: Prisma.BookCreatetagsInput | string[];
    ratingValue?: number;
    reviewCount?: number;
    salesCount?: number;
    publishedAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    authorUser?: Prisma.UserCreateNestedOneWithoutBooksAuthoredInput;
    category?: Prisma.BookCategoryCreateNestedOneWithoutBooksInput;
    chapters?: Prisma.BookChapterCreateNestedManyWithoutBookInput;
    purchases?: Prisma.BookPurchaseCreateNestedManyWithoutBookInput;
    reviews?: Prisma.BookReviewCreateNestedManyWithoutBookInput;
};
export type BookUncheckedCreateInput = {
    id?: string;
    slug: string;
    title: string;
    author: string;
    authorUserId?: string | null;
    bio?: string | null;
    description?: string | null;
    coverImage?: string | null;
    categoryId?: string | null;
    price?: number;
    status?: string;
    pages?: number | null;
    edition?: string | null;
    isbn?: string | null;
    tags?: Prisma.BookCreatetagsInput | string[];
    ratingValue?: number;
    reviewCount?: number;
    salesCount?: number;
    publishedAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    chapters?: Prisma.BookChapterUncheckedCreateNestedManyWithoutBookInput;
    purchases?: Prisma.BookPurchaseUncheckedCreateNestedManyWithoutBookInput;
    reviews?: Prisma.BookReviewUncheckedCreateNestedManyWithoutBookInput;
};
export type BookUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    slug?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    author?: Prisma.StringFieldUpdateOperationsInput | string;
    bio?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    coverImage?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    price?: Prisma.IntFieldUpdateOperationsInput | number;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    pages?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    edition?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isbn?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    tags?: Prisma.BookUpdatetagsInput | string[];
    ratingValue?: Prisma.FloatFieldUpdateOperationsInput | number;
    reviewCount?: Prisma.IntFieldUpdateOperationsInput | number;
    salesCount?: Prisma.IntFieldUpdateOperationsInput | number;
    publishedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    authorUser?: Prisma.UserUpdateOneWithoutBooksAuthoredNestedInput;
    category?: Prisma.BookCategoryUpdateOneWithoutBooksNestedInput;
    chapters?: Prisma.BookChapterUpdateManyWithoutBookNestedInput;
    purchases?: Prisma.BookPurchaseUpdateManyWithoutBookNestedInput;
    reviews?: Prisma.BookReviewUpdateManyWithoutBookNestedInput;
};
export type BookUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    slug?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    author?: Prisma.StringFieldUpdateOperationsInput | string;
    authorUserId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    bio?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    coverImage?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    categoryId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    price?: Prisma.IntFieldUpdateOperationsInput | number;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    pages?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    edition?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isbn?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    tags?: Prisma.BookUpdatetagsInput | string[];
    ratingValue?: Prisma.FloatFieldUpdateOperationsInput | number;
    reviewCount?: Prisma.IntFieldUpdateOperationsInput | number;
    salesCount?: Prisma.IntFieldUpdateOperationsInput | number;
    publishedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    chapters?: Prisma.BookChapterUncheckedUpdateManyWithoutBookNestedInput;
    purchases?: Prisma.BookPurchaseUncheckedUpdateManyWithoutBookNestedInput;
    reviews?: Prisma.BookReviewUncheckedUpdateManyWithoutBookNestedInput;
};
export type BookCreateManyInput = {
    id?: string;
    slug: string;
    title: string;
    author: string;
    authorUserId?: string | null;
    bio?: string | null;
    description?: string | null;
    coverImage?: string | null;
    categoryId?: string | null;
    price?: number;
    status?: string;
    pages?: number | null;
    edition?: string | null;
    isbn?: string | null;
    tags?: Prisma.BookCreatetagsInput | string[];
    ratingValue?: number;
    reviewCount?: number;
    salesCount?: number;
    publishedAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type BookUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    slug?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    author?: Prisma.StringFieldUpdateOperationsInput | string;
    bio?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    coverImage?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    price?: Prisma.IntFieldUpdateOperationsInput | number;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    pages?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    edition?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isbn?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    tags?: Prisma.BookUpdatetagsInput | string[];
    ratingValue?: Prisma.FloatFieldUpdateOperationsInput | number;
    reviewCount?: Prisma.IntFieldUpdateOperationsInput | number;
    salesCount?: Prisma.IntFieldUpdateOperationsInput | number;
    publishedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type BookUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    slug?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    author?: Prisma.StringFieldUpdateOperationsInput | string;
    authorUserId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    bio?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    coverImage?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    categoryId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    price?: Prisma.IntFieldUpdateOperationsInput | number;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    pages?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    edition?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isbn?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    tags?: Prisma.BookUpdatetagsInput | string[];
    ratingValue?: Prisma.FloatFieldUpdateOperationsInput | number;
    reviewCount?: Prisma.IntFieldUpdateOperationsInput | number;
    salesCount?: Prisma.IntFieldUpdateOperationsInput | number;
    publishedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type BookListRelationFilter = {
    every?: Prisma.BookWhereInput;
    some?: Prisma.BookWhereInput;
    none?: Prisma.BookWhereInput;
};
export type BookOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type BookCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    slug?: Prisma.SortOrder;
    title?: Prisma.SortOrder;
    author?: Prisma.SortOrder;
    authorUserId?: Prisma.SortOrder;
    bio?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    coverImage?: Prisma.SortOrder;
    categoryId?: Prisma.SortOrder;
    price?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    pages?: Prisma.SortOrder;
    edition?: Prisma.SortOrder;
    isbn?: Prisma.SortOrder;
    tags?: Prisma.SortOrder;
    ratingValue?: Prisma.SortOrder;
    reviewCount?: Prisma.SortOrder;
    salesCount?: Prisma.SortOrder;
    publishedAt?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type BookAvgOrderByAggregateInput = {
    price?: Prisma.SortOrder;
    pages?: Prisma.SortOrder;
    ratingValue?: Prisma.SortOrder;
    reviewCount?: Prisma.SortOrder;
    salesCount?: Prisma.SortOrder;
};
export type BookMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    slug?: Prisma.SortOrder;
    title?: Prisma.SortOrder;
    author?: Prisma.SortOrder;
    authorUserId?: Prisma.SortOrder;
    bio?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    coverImage?: Prisma.SortOrder;
    categoryId?: Prisma.SortOrder;
    price?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    pages?: Prisma.SortOrder;
    edition?: Prisma.SortOrder;
    isbn?: Prisma.SortOrder;
    ratingValue?: Prisma.SortOrder;
    reviewCount?: Prisma.SortOrder;
    salesCount?: Prisma.SortOrder;
    publishedAt?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type BookMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    slug?: Prisma.SortOrder;
    title?: Prisma.SortOrder;
    author?: Prisma.SortOrder;
    authorUserId?: Prisma.SortOrder;
    bio?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    coverImage?: Prisma.SortOrder;
    categoryId?: Prisma.SortOrder;
    price?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    pages?: Prisma.SortOrder;
    edition?: Prisma.SortOrder;
    isbn?: Prisma.SortOrder;
    ratingValue?: Prisma.SortOrder;
    reviewCount?: Prisma.SortOrder;
    salesCount?: Prisma.SortOrder;
    publishedAt?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type BookSumOrderByAggregateInput = {
    price?: Prisma.SortOrder;
    pages?: Prisma.SortOrder;
    ratingValue?: Prisma.SortOrder;
    reviewCount?: Prisma.SortOrder;
    salesCount?: Prisma.SortOrder;
};
export type BookScalarRelationFilter = {
    is?: Prisma.BookWhereInput;
    isNot?: Prisma.BookWhereInput;
};
export type BookCreateNestedManyWithoutAuthorUserInput = {
    create?: Prisma.XOR<Prisma.BookCreateWithoutAuthorUserInput, Prisma.BookUncheckedCreateWithoutAuthorUserInput> | Prisma.BookCreateWithoutAuthorUserInput[] | Prisma.BookUncheckedCreateWithoutAuthorUserInput[];
    connectOrCreate?: Prisma.BookCreateOrConnectWithoutAuthorUserInput | Prisma.BookCreateOrConnectWithoutAuthorUserInput[];
    createMany?: Prisma.BookCreateManyAuthorUserInputEnvelope;
    connect?: Prisma.BookWhereUniqueInput | Prisma.BookWhereUniqueInput[];
};
export type BookUncheckedCreateNestedManyWithoutAuthorUserInput = {
    create?: Prisma.XOR<Prisma.BookCreateWithoutAuthorUserInput, Prisma.BookUncheckedCreateWithoutAuthorUserInput> | Prisma.BookCreateWithoutAuthorUserInput[] | Prisma.BookUncheckedCreateWithoutAuthorUserInput[];
    connectOrCreate?: Prisma.BookCreateOrConnectWithoutAuthorUserInput | Prisma.BookCreateOrConnectWithoutAuthorUserInput[];
    createMany?: Prisma.BookCreateManyAuthorUserInputEnvelope;
    connect?: Prisma.BookWhereUniqueInput | Prisma.BookWhereUniqueInput[];
};
export type BookUpdateManyWithoutAuthorUserNestedInput = {
    create?: Prisma.XOR<Prisma.BookCreateWithoutAuthorUserInput, Prisma.BookUncheckedCreateWithoutAuthorUserInput> | Prisma.BookCreateWithoutAuthorUserInput[] | Prisma.BookUncheckedCreateWithoutAuthorUserInput[];
    connectOrCreate?: Prisma.BookCreateOrConnectWithoutAuthorUserInput | Prisma.BookCreateOrConnectWithoutAuthorUserInput[];
    upsert?: Prisma.BookUpsertWithWhereUniqueWithoutAuthorUserInput | Prisma.BookUpsertWithWhereUniqueWithoutAuthorUserInput[];
    createMany?: Prisma.BookCreateManyAuthorUserInputEnvelope;
    set?: Prisma.BookWhereUniqueInput | Prisma.BookWhereUniqueInput[];
    disconnect?: Prisma.BookWhereUniqueInput | Prisma.BookWhereUniqueInput[];
    delete?: Prisma.BookWhereUniqueInput | Prisma.BookWhereUniqueInput[];
    connect?: Prisma.BookWhereUniqueInput | Prisma.BookWhereUniqueInput[];
    update?: Prisma.BookUpdateWithWhereUniqueWithoutAuthorUserInput | Prisma.BookUpdateWithWhereUniqueWithoutAuthorUserInput[];
    updateMany?: Prisma.BookUpdateManyWithWhereWithoutAuthorUserInput | Prisma.BookUpdateManyWithWhereWithoutAuthorUserInput[];
    deleteMany?: Prisma.BookScalarWhereInput | Prisma.BookScalarWhereInput[];
};
export type BookUncheckedUpdateManyWithoutAuthorUserNestedInput = {
    create?: Prisma.XOR<Prisma.BookCreateWithoutAuthorUserInput, Prisma.BookUncheckedCreateWithoutAuthorUserInput> | Prisma.BookCreateWithoutAuthorUserInput[] | Prisma.BookUncheckedCreateWithoutAuthorUserInput[];
    connectOrCreate?: Prisma.BookCreateOrConnectWithoutAuthorUserInput | Prisma.BookCreateOrConnectWithoutAuthorUserInput[];
    upsert?: Prisma.BookUpsertWithWhereUniqueWithoutAuthorUserInput | Prisma.BookUpsertWithWhereUniqueWithoutAuthorUserInput[];
    createMany?: Prisma.BookCreateManyAuthorUserInputEnvelope;
    set?: Prisma.BookWhereUniqueInput | Prisma.BookWhereUniqueInput[];
    disconnect?: Prisma.BookWhereUniqueInput | Prisma.BookWhereUniqueInput[];
    delete?: Prisma.BookWhereUniqueInput | Prisma.BookWhereUniqueInput[];
    connect?: Prisma.BookWhereUniqueInput | Prisma.BookWhereUniqueInput[];
    update?: Prisma.BookUpdateWithWhereUniqueWithoutAuthorUserInput | Prisma.BookUpdateWithWhereUniqueWithoutAuthorUserInput[];
    updateMany?: Prisma.BookUpdateManyWithWhereWithoutAuthorUserInput | Prisma.BookUpdateManyWithWhereWithoutAuthorUserInput[];
    deleteMany?: Prisma.BookScalarWhereInput | Prisma.BookScalarWhereInput[];
};
export type BookCreateNestedManyWithoutCategoryInput = {
    create?: Prisma.XOR<Prisma.BookCreateWithoutCategoryInput, Prisma.BookUncheckedCreateWithoutCategoryInput> | Prisma.BookCreateWithoutCategoryInput[] | Prisma.BookUncheckedCreateWithoutCategoryInput[];
    connectOrCreate?: Prisma.BookCreateOrConnectWithoutCategoryInput | Prisma.BookCreateOrConnectWithoutCategoryInput[];
    createMany?: Prisma.BookCreateManyCategoryInputEnvelope;
    connect?: Prisma.BookWhereUniqueInput | Prisma.BookWhereUniqueInput[];
};
export type BookUncheckedCreateNestedManyWithoutCategoryInput = {
    create?: Prisma.XOR<Prisma.BookCreateWithoutCategoryInput, Prisma.BookUncheckedCreateWithoutCategoryInput> | Prisma.BookCreateWithoutCategoryInput[] | Prisma.BookUncheckedCreateWithoutCategoryInput[];
    connectOrCreate?: Prisma.BookCreateOrConnectWithoutCategoryInput | Prisma.BookCreateOrConnectWithoutCategoryInput[];
    createMany?: Prisma.BookCreateManyCategoryInputEnvelope;
    connect?: Prisma.BookWhereUniqueInput | Prisma.BookWhereUniqueInput[];
};
export type BookUpdateManyWithoutCategoryNestedInput = {
    create?: Prisma.XOR<Prisma.BookCreateWithoutCategoryInput, Prisma.BookUncheckedCreateWithoutCategoryInput> | Prisma.BookCreateWithoutCategoryInput[] | Prisma.BookUncheckedCreateWithoutCategoryInput[];
    connectOrCreate?: Prisma.BookCreateOrConnectWithoutCategoryInput | Prisma.BookCreateOrConnectWithoutCategoryInput[];
    upsert?: Prisma.BookUpsertWithWhereUniqueWithoutCategoryInput | Prisma.BookUpsertWithWhereUniqueWithoutCategoryInput[];
    createMany?: Prisma.BookCreateManyCategoryInputEnvelope;
    set?: Prisma.BookWhereUniqueInput | Prisma.BookWhereUniqueInput[];
    disconnect?: Prisma.BookWhereUniqueInput | Prisma.BookWhereUniqueInput[];
    delete?: Prisma.BookWhereUniqueInput | Prisma.BookWhereUniqueInput[];
    connect?: Prisma.BookWhereUniqueInput | Prisma.BookWhereUniqueInput[];
    update?: Prisma.BookUpdateWithWhereUniqueWithoutCategoryInput | Prisma.BookUpdateWithWhereUniqueWithoutCategoryInput[];
    updateMany?: Prisma.BookUpdateManyWithWhereWithoutCategoryInput | Prisma.BookUpdateManyWithWhereWithoutCategoryInput[];
    deleteMany?: Prisma.BookScalarWhereInput | Prisma.BookScalarWhereInput[];
};
export type BookUncheckedUpdateManyWithoutCategoryNestedInput = {
    create?: Prisma.XOR<Prisma.BookCreateWithoutCategoryInput, Prisma.BookUncheckedCreateWithoutCategoryInput> | Prisma.BookCreateWithoutCategoryInput[] | Prisma.BookUncheckedCreateWithoutCategoryInput[];
    connectOrCreate?: Prisma.BookCreateOrConnectWithoutCategoryInput | Prisma.BookCreateOrConnectWithoutCategoryInput[];
    upsert?: Prisma.BookUpsertWithWhereUniqueWithoutCategoryInput | Prisma.BookUpsertWithWhereUniqueWithoutCategoryInput[];
    createMany?: Prisma.BookCreateManyCategoryInputEnvelope;
    set?: Prisma.BookWhereUniqueInput | Prisma.BookWhereUniqueInput[];
    disconnect?: Prisma.BookWhereUniqueInput | Prisma.BookWhereUniqueInput[];
    delete?: Prisma.BookWhereUniqueInput | Prisma.BookWhereUniqueInput[];
    connect?: Prisma.BookWhereUniqueInput | Prisma.BookWhereUniqueInput[];
    update?: Prisma.BookUpdateWithWhereUniqueWithoutCategoryInput | Prisma.BookUpdateWithWhereUniqueWithoutCategoryInput[];
    updateMany?: Prisma.BookUpdateManyWithWhereWithoutCategoryInput | Prisma.BookUpdateManyWithWhereWithoutCategoryInput[];
    deleteMany?: Prisma.BookScalarWhereInput | Prisma.BookScalarWhereInput[];
};
export type BookCreatetagsInput = {
    set: string[];
};
export type BookUpdatetagsInput = {
    set?: string[];
    push?: string | string[];
};
export type BookCreateNestedOneWithoutChaptersInput = {
    create?: Prisma.XOR<Prisma.BookCreateWithoutChaptersInput, Prisma.BookUncheckedCreateWithoutChaptersInput>;
    connectOrCreate?: Prisma.BookCreateOrConnectWithoutChaptersInput;
    connect?: Prisma.BookWhereUniqueInput;
};
export type BookUpdateOneRequiredWithoutChaptersNestedInput = {
    create?: Prisma.XOR<Prisma.BookCreateWithoutChaptersInput, Prisma.BookUncheckedCreateWithoutChaptersInput>;
    connectOrCreate?: Prisma.BookCreateOrConnectWithoutChaptersInput;
    upsert?: Prisma.BookUpsertWithoutChaptersInput;
    connect?: Prisma.BookWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.BookUpdateToOneWithWhereWithoutChaptersInput, Prisma.BookUpdateWithoutChaptersInput>, Prisma.BookUncheckedUpdateWithoutChaptersInput>;
};
export type BookCreateNestedOneWithoutPurchasesInput = {
    create?: Prisma.XOR<Prisma.BookCreateWithoutPurchasesInput, Prisma.BookUncheckedCreateWithoutPurchasesInput>;
    connectOrCreate?: Prisma.BookCreateOrConnectWithoutPurchasesInput;
    connect?: Prisma.BookWhereUniqueInput;
};
export type BookUpdateOneRequiredWithoutPurchasesNestedInput = {
    create?: Prisma.XOR<Prisma.BookCreateWithoutPurchasesInput, Prisma.BookUncheckedCreateWithoutPurchasesInput>;
    connectOrCreate?: Prisma.BookCreateOrConnectWithoutPurchasesInput;
    upsert?: Prisma.BookUpsertWithoutPurchasesInput;
    connect?: Prisma.BookWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.BookUpdateToOneWithWhereWithoutPurchasesInput, Prisma.BookUpdateWithoutPurchasesInput>, Prisma.BookUncheckedUpdateWithoutPurchasesInput>;
};
export type BookCreateNestedOneWithoutReviewsInput = {
    create?: Prisma.XOR<Prisma.BookCreateWithoutReviewsInput, Prisma.BookUncheckedCreateWithoutReviewsInput>;
    connectOrCreate?: Prisma.BookCreateOrConnectWithoutReviewsInput;
    connect?: Prisma.BookWhereUniqueInput;
};
export type BookUpdateOneRequiredWithoutReviewsNestedInput = {
    create?: Prisma.XOR<Prisma.BookCreateWithoutReviewsInput, Prisma.BookUncheckedCreateWithoutReviewsInput>;
    connectOrCreate?: Prisma.BookCreateOrConnectWithoutReviewsInput;
    upsert?: Prisma.BookUpsertWithoutReviewsInput;
    connect?: Prisma.BookWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.BookUpdateToOneWithWhereWithoutReviewsInput, Prisma.BookUpdateWithoutReviewsInput>, Prisma.BookUncheckedUpdateWithoutReviewsInput>;
};
export type BookCreateWithoutAuthorUserInput = {
    id?: string;
    slug: string;
    title: string;
    author: string;
    bio?: string | null;
    description?: string | null;
    coverImage?: string | null;
    price?: number;
    status?: string;
    pages?: number | null;
    edition?: string | null;
    isbn?: string | null;
    tags?: Prisma.BookCreatetagsInput | string[];
    ratingValue?: number;
    reviewCount?: number;
    salesCount?: number;
    publishedAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    category?: Prisma.BookCategoryCreateNestedOneWithoutBooksInput;
    chapters?: Prisma.BookChapterCreateNestedManyWithoutBookInput;
    purchases?: Prisma.BookPurchaseCreateNestedManyWithoutBookInput;
    reviews?: Prisma.BookReviewCreateNestedManyWithoutBookInput;
};
export type BookUncheckedCreateWithoutAuthorUserInput = {
    id?: string;
    slug: string;
    title: string;
    author: string;
    bio?: string | null;
    description?: string | null;
    coverImage?: string | null;
    categoryId?: string | null;
    price?: number;
    status?: string;
    pages?: number | null;
    edition?: string | null;
    isbn?: string | null;
    tags?: Prisma.BookCreatetagsInput | string[];
    ratingValue?: number;
    reviewCount?: number;
    salesCount?: number;
    publishedAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    chapters?: Prisma.BookChapterUncheckedCreateNestedManyWithoutBookInput;
    purchases?: Prisma.BookPurchaseUncheckedCreateNestedManyWithoutBookInput;
    reviews?: Prisma.BookReviewUncheckedCreateNestedManyWithoutBookInput;
};
export type BookCreateOrConnectWithoutAuthorUserInput = {
    where: Prisma.BookWhereUniqueInput;
    create: Prisma.XOR<Prisma.BookCreateWithoutAuthorUserInput, Prisma.BookUncheckedCreateWithoutAuthorUserInput>;
};
export type BookCreateManyAuthorUserInputEnvelope = {
    data: Prisma.BookCreateManyAuthorUserInput | Prisma.BookCreateManyAuthorUserInput[];
    skipDuplicates?: boolean;
};
export type BookUpsertWithWhereUniqueWithoutAuthorUserInput = {
    where: Prisma.BookWhereUniqueInput;
    update: Prisma.XOR<Prisma.BookUpdateWithoutAuthorUserInput, Prisma.BookUncheckedUpdateWithoutAuthorUserInput>;
    create: Prisma.XOR<Prisma.BookCreateWithoutAuthorUserInput, Prisma.BookUncheckedCreateWithoutAuthorUserInput>;
};
export type BookUpdateWithWhereUniqueWithoutAuthorUserInput = {
    where: Prisma.BookWhereUniqueInput;
    data: Prisma.XOR<Prisma.BookUpdateWithoutAuthorUserInput, Prisma.BookUncheckedUpdateWithoutAuthorUserInput>;
};
export type BookUpdateManyWithWhereWithoutAuthorUserInput = {
    where: Prisma.BookScalarWhereInput;
    data: Prisma.XOR<Prisma.BookUpdateManyMutationInput, Prisma.BookUncheckedUpdateManyWithoutAuthorUserInput>;
};
export type BookScalarWhereInput = {
    AND?: Prisma.BookScalarWhereInput | Prisma.BookScalarWhereInput[];
    OR?: Prisma.BookScalarWhereInput[];
    NOT?: Prisma.BookScalarWhereInput | Prisma.BookScalarWhereInput[];
    id?: Prisma.StringFilter<"Book"> | string;
    slug?: Prisma.StringFilter<"Book"> | string;
    title?: Prisma.StringFilter<"Book"> | string;
    author?: Prisma.StringFilter<"Book"> | string;
    authorUserId?: Prisma.StringNullableFilter<"Book"> | string | null;
    bio?: Prisma.StringNullableFilter<"Book"> | string | null;
    description?: Prisma.StringNullableFilter<"Book"> | string | null;
    coverImage?: Prisma.StringNullableFilter<"Book"> | string | null;
    categoryId?: Prisma.StringNullableFilter<"Book"> | string | null;
    price?: Prisma.IntFilter<"Book"> | number;
    status?: Prisma.StringFilter<"Book"> | string;
    pages?: Prisma.IntNullableFilter<"Book"> | number | null;
    edition?: Prisma.StringNullableFilter<"Book"> | string | null;
    isbn?: Prisma.StringNullableFilter<"Book"> | string | null;
    tags?: Prisma.StringNullableListFilter<"Book">;
    ratingValue?: Prisma.FloatFilter<"Book"> | number;
    reviewCount?: Prisma.IntFilter<"Book"> | number;
    salesCount?: Prisma.IntFilter<"Book"> | number;
    publishedAt?: Prisma.DateTimeNullableFilter<"Book"> | Date | string | null;
    createdAt?: Prisma.DateTimeFilter<"Book"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Book"> | Date | string;
};
export type BookCreateWithoutCategoryInput = {
    id?: string;
    slug: string;
    title: string;
    author: string;
    bio?: string | null;
    description?: string | null;
    coverImage?: string | null;
    price?: number;
    status?: string;
    pages?: number | null;
    edition?: string | null;
    isbn?: string | null;
    tags?: Prisma.BookCreatetagsInput | string[];
    ratingValue?: number;
    reviewCount?: number;
    salesCount?: number;
    publishedAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    authorUser?: Prisma.UserCreateNestedOneWithoutBooksAuthoredInput;
    chapters?: Prisma.BookChapterCreateNestedManyWithoutBookInput;
    purchases?: Prisma.BookPurchaseCreateNestedManyWithoutBookInput;
    reviews?: Prisma.BookReviewCreateNestedManyWithoutBookInput;
};
export type BookUncheckedCreateWithoutCategoryInput = {
    id?: string;
    slug: string;
    title: string;
    author: string;
    authorUserId?: string | null;
    bio?: string | null;
    description?: string | null;
    coverImage?: string | null;
    price?: number;
    status?: string;
    pages?: number | null;
    edition?: string | null;
    isbn?: string | null;
    tags?: Prisma.BookCreatetagsInput | string[];
    ratingValue?: number;
    reviewCount?: number;
    salesCount?: number;
    publishedAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    chapters?: Prisma.BookChapterUncheckedCreateNestedManyWithoutBookInput;
    purchases?: Prisma.BookPurchaseUncheckedCreateNestedManyWithoutBookInput;
    reviews?: Prisma.BookReviewUncheckedCreateNestedManyWithoutBookInput;
};
export type BookCreateOrConnectWithoutCategoryInput = {
    where: Prisma.BookWhereUniqueInput;
    create: Prisma.XOR<Prisma.BookCreateWithoutCategoryInput, Prisma.BookUncheckedCreateWithoutCategoryInput>;
};
export type BookCreateManyCategoryInputEnvelope = {
    data: Prisma.BookCreateManyCategoryInput | Prisma.BookCreateManyCategoryInput[];
    skipDuplicates?: boolean;
};
export type BookUpsertWithWhereUniqueWithoutCategoryInput = {
    where: Prisma.BookWhereUniqueInput;
    update: Prisma.XOR<Prisma.BookUpdateWithoutCategoryInput, Prisma.BookUncheckedUpdateWithoutCategoryInput>;
    create: Prisma.XOR<Prisma.BookCreateWithoutCategoryInput, Prisma.BookUncheckedCreateWithoutCategoryInput>;
};
export type BookUpdateWithWhereUniqueWithoutCategoryInput = {
    where: Prisma.BookWhereUniqueInput;
    data: Prisma.XOR<Prisma.BookUpdateWithoutCategoryInput, Prisma.BookUncheckedUpdateWithoutCategoryInput>;
};
export type BookUpdateManyWithWhereWithoutCategoryInput = {
    where: Prisma.BookScalarWhereInput;
    data: Prisma.XOR<Prisma.BookUpdateManyMutationInput, Prisma.BookUncheckedUpdateManyWithoutCategoryInput>;
};
export type BookCreateWithoutChaptersInput = {
    id?: string;
    slug: string;
    title: string;
    author: string;
    bio?: string | null;
    description?: string | null;
    coverImage?: string | null;
    price?: number;
    status?: string;
    pages?: number | null;
    edition?: string | null;
    isbn?: string | null;
    tags?: Prisma.BookCreatetagsInput | string[];
    ratingValue?: number;
    reviewCount?: number;
    salesCount?: number;
    publishedAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    authorUser?: Prisma.UserCreateNestedOneWithoutBooksAuthoredInput;
    category?: Prisma.BookCategoryCreateNestedOneWithoutBooksInput;
    purchases?: Prisma.BookPurchaseCreateNestedManyWithoutBookInput;
    reviews?: Prisma.BookReviewCreateNestedManyWithoutBookInput;
};
export type BookUncheckedCreateWithoutChaptersInput = {
    id?: string;
    slug: string;
    title: string;
    author: string;
    authorUserId?: string | null;
    bio?: string | null;
    description?: string | null;
    coverImage?: string | null;
    categoryId?: string | null;
    price?: number;
    status?: string;
    pages?: number | null;
    edition?: string | null;
    isbn?: string | null;
    tags?: Prisma.BookCreatetagsInput | string[];
    ratingValue?: number;
    reviewCount?: number;
    salesCount?: number;
    publishedAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    purchases?: Prisma.BookPurchaseUncheckedCreateNestedManyWithoutBookInput;
    reviews?: Prisma.BookReviewUncheckedCreateNestedManyWithoutBookInput;
};
export type BookCreateOrConnectWithoutChaptersInput = {
    where: Prisma.BookWhereUniqueInput;
    create: Prisma.XOR<Prisma.BookCreateWithoutChaptersInput, Prisma.BookUncheckedCreateWithoutChaptersInput>;
};
export type BookUpsertWithoutChaptersInput = {
    update: Prisma.XOR<Prisma.BookUpdateWithoutChaptersInput, Prisma.BookUncheckedUpdateWithoutChaptersInput>;
    create: Prisma.XOR<Prisma.BookCreateWithoutChaptersInput, Prisma.BookUncheckedCreateWithoutChaptersInput>;
    where?: Prisma.BookWhereInput;
};
export type BookUpdateToOneWithWhereWithoutChaptersInput = {
    where?: Prisma.BookWhereInput;
    data: Prisma.XOR<Prisma.BookUpdateWithoutChaptersInput, Prisma.BookUncheckedUpdateWithoutChaptersInput>;
};
export type BookUpdateWithoutChaptersInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    slug?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    author?: Prisma.StringFieldUpdateOperationsInput | string;
    bio?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    coverImage?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    price?: Prisma.IntFieldUpdateOperationsInput | number;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    pages?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    edition?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isbn?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    tags?: Prisma.BookUpdatetagsInput | string[];
    ratingValue?: Prisma.FloatFieldUpdateOperationsInput | number;
    reviewCount?: Prisma.IntFieldUpdateOperationsInput | number;
    salesCount?: Prisma.IntFieldUpdateOperationsInput | number;
    publishedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    authorUser?: Prisma.UserUpdateOneWithoutBooksAuthoredNestedInput;
    category?: Prisma.BookCategoryUpdateOneWithoutBooksNestedInput;
    purchases?: Prisma.BookPurchaseUpdateManyWithoutBookNestedInput;
    reviews?: Prisma.BookReviewUpdateManyWithoutBookNestedInput;
};
export type BookUncheckedUpdateWithoutChaptersInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    slug?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    author?: Prisma.StringFieldUpdateOperationsInput | string;
    authorUserId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    bio?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    coverImage?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    categoryId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    price?: Prisma.IntFieldUpdateOperationsInput | number;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    pages?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    edition?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isbn?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    tags?: Prisma.BookUpdatetagsInput | string[];
    ratingValue?: Prisma.FloatFieldUpdateOperationsInput | number;
    reviewCount?: Prisma.IntFieldUpdateOperationsInput | number;
    salesCount?: Prisma.IntFieldUpdateOperationsInput | number;
    publishedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    purchases?: Prisma.BookPurchaseUncheckedUpdateManyWithoutBookNestedInput;
    reviews?: Prisma.BookReviewUncheckedUpdateManyWithoutBookNestedInput;
};
export type BookCreateWithoutPurchasesInput = {
    id?: string;
    slug: string;
    title: string;
    author: string;
    bio?: string | null;
    description?: string | null;
    coverImage?: string | null;
    price?: number;
    status?: string;
    pages?: number | null;
    edition?: string | null;
    isbn?: string | null;
    tags?: Prisma.BookCreatetagsInput | string[];
    ratingValue?: number;
    reviewCount?: number;
    salesCount?: number;
    publishedAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    authorUser?: Prisma.UserCreateNestedOneWithoutBooksAuthoredInput;
    category?: Prisma.BookCategoryCreateNestedOneWithoutBooksInput;
    chapters?: Prisma.BookChapterCreateNestedManyWithoutBookInput;
    reviews?: Prisma.BookReviewCreateNestedManyWithoutBookInput;
};
export type BookUncheckedCreateWithoutPurchasesInput = {
    id?: string;
    slug: string;
    title: string;
    author: string;
    authorUserId?: string | null;
    bio?: string | null;
    description?: string | null;
    coverImage?: string | null;
    categoryId?: string | null;
    price?: number;
    status?: string;
    pages?: number | null;
    edition?: string | null;
    isbn?: string | null;
    tags?: Prisma.BookCreatetagsInput | string[];
    ratingValue?: number;
    reviewCount?: number;
    salesCount?: number;
    publishedAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    chapters?: Prisma.BookChapterUncheckedCreateNestedManyWithoutBookInput;
    reviews?: Prisma.BookReviewUncheckedCreateNestedManyWithoutBookInput;
};
export type BookCreateOrConnectWithoutPurchasesInput = {
    where: Prisma.BookWhereUniqueInput;
    create: Prisma.XOR<Prisma.BookCreateWithoutPurchasesInput, Prisma.BookUncheckedCreateWithoutPurchasesInput>;
};
export type BookUpsertWithoutPurchasesInput = {
    update: Prisma.XOR<Prisma.BookUpdateWithoutPurchasesInput, Prisma.BookUncheckedUpdateWithoutPurchasesInput>;
    create: Prisma.XOR<Prisma.BookCreateWithoutPurchasesInput, Prisma.BookUncheckedCreateWithoutPurchasesInput>;
    where?: Prisma.BookWhereInput;
};
export type BookUpdateToOneWithWhereWithoutPurchasesInput = {
    where?: Prisma.BookWhereInput;
    data: Prisma.XOR<Prisma.BookUpdateWithoutPurchasesInput, Prisma.BookUncheckedUpdateWithoutPurchasesInput>;
};
export type BookUpdateWithoutPurchasesInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    slug?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    author?: Prisma.StringFieldUpdateOperationsInput | string;
    bio?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    coverImage?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    price?: Prisma.IntFieldUpdateOperationsInput | number;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    pages?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    edition?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isbn?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    tags?: Prisma.BookUpdatetagsInput | string[];
    ratingValue?: Prisma.FloatFieldUpdateOperationsInput | number;
    reviewCount?: Prisma.IntFieldUpdateOperationsInput | number;
    salesCount?: Prisma.IntFieldUpdateOperationsInput | number;
    publishedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    authorUser?: Prisma.UserUpdateOneWithoutBooksAuthoredNestedInput;
    category?: Prisma.BookCategoryUpdateOneWithoutBooksNestedInput;
    chapters?: Prisma.BookChapterUpdateManyWithoutBookNestedInput;
    reviews?: Prisma.BookReviewUpdateManyWithoutBookNestedInput;
};
export type BookUncheckedUpdateWithoutPurchasesInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    slug?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    author?: Prisma.StringFieldUpdateOperationsInput | string;
    authorUserId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    bio?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    coverImage?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    categoryId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    price?: Prisma.IntFieldUpdateOperationsInput | number;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    pages?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    edition?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isbn?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    tags?: Prisma.BookUpdatetagsInput | string[];
    ratingValue?: Prisma.FloatFieldUpdateOperationsInput | number;
    reviewCount?: Prisma.IntFieldUpdateOperationsInput | number;
    salesCount?: Prisma.IntFieldUpdateOperationsInput | number;
    publishedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    chapters?: Prisma.BookChapterUncheckedUpdateManyWithoutBookNestedInput;
    reviews?: Prisma.BookReviewUncheckedUpdateManyWithoutBookNestedInput;
};
export type BookCreateWithoutReviewsInput = {
    id?: string;
    slug: string;
    title: string;
    author: string;
    bio?: string | null;
    description?: string | null;
    coverImage?: string | null;
    price?: number;
    status?: string;
    pages?: number | null;
    edition?: string | null;
    isbn?: string | null;
    tags?: Prisma.BookCreatetagsInput | string[];
    ratingValue?: number;
    reviewCount?: number;
    salesCount?: number;
    publishedAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    authorUser?: Prisma.UserCreateNestedOneWithoutBooksAuthoredInput;
    category?: Prisma.BookCategoryCreateNestedOneWithoutBooksInput;
    chapters?: Prisma.BookChapterCreateNestedManyWithoutBookInput;
    purchases?: Prisma.BookPurchaseCreateNestedManyWithoutBookInput;
};
export type BookUncheckedCreateWithoutReviewsInput = {
    id?: string;
    slug: string;
    title: string;
    author: string;
    authorUserId?: string | null;
    bio?: string | null;
    description?: string | null;
    coverImage?: string | null;
    categoryId?: string | null;
    price?: number;
    status?: string;
    pages?: number | null;
    edition?: string | null;
    isbn?: string | null;
    tags?: Prisma.BookCreatetagsInput | string[];
    ratingValue?: number;
    reviewCount?: number;
    salesCount?: number;
    publishedAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    chapters?: Prisma.BookChapterUncheckedCreateNestedManyWithoutBookInput;
    purchases?: Prisma.BookPurchaseUncheckedCreateNestedManyWithoutBookInput;
};
export type BookCreateOrConnectWithoutReviewsInput = {
    where: Prisma.BookWhereUniqueInput;
    create: Prisma.XOR<Prisma.BookCreateWithoutReviewsInput, Prisma.BookUncheckedCreateWithoutReviewsInput>;
};
export type BookUpsertWithoutReviewsInput = {
    update: Prisma.XOR<Prisma.BookUpdateWithoutReviewsInput, Prisma.BookUncheckedUpdateWithoutReviewsInput>;
    create: Prisma.XOR<Prisma.BookCreateWithoutReviewsInput, Prisma.BookUncheckedCreateWithoutReviewsInput>;
    where?: Prisma.BookWhereInput;
};
export type BookUpdateToOneWithWhereWithoutReviewsInput = {
    where?: Prisma.BookWhereInput;
    data: Prisma.XOR<Prisma.BookUpdateWithoutReviewsInput, Prisma.BookUncheckedUpdateWithoutReviewsInput>;
};
export type BookUpdateWithoutReviewsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    slug?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    author?: Prisma.StringFieldUpdateOperationsInput | string;
    bio?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    coverImage?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    price?: Prisma.IntFieldUpdateOperationsInput | number;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    pages?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    edition?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isbn?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    tags?: Prisma.BookUpdatetagsInput | string[];
    ratingValue?: Prisma.FloatFieldUpdateOperationsInput | number;
    reviewCount?: Prisma.IntFieldUpdateOperationsInput | number;
    salesCount?: Prisma.IntFieldUpdateOperationsInput | number;
    publishedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    authorUser?: Prisma.UserUpdateOneWithoutBooksAuthoredNestedInput;
    category?: Prisma.BookCategoryUpdateOneWithoutBooksNestedInput;
    chapters?: Prisma.BookChapterUpdateManyWithoutBookNestedInput;
    purchases?: Prisma.BookPurchaseUpdateManyWithoutBookNestedInput;
};
export type BookUncheckedUpdateWithoutReviewsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    slug?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    author?: Prisma.StringFieldUpdateOperationsInput | string;
    authorUserId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    bio?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    coverImage?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    categoryId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    price?: Prisma.IntFieldUpdateOperationsInput | number;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    pages?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    edition?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isbn?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    tags?: Prisma.BookUpdatetagsInput | string[];
    ratingValue?: Prisma.FloatFieldUpdateOperationsInput | number;
    reviewCount?: Prisma.IntFieldUpdateOperationsInput | number;
    salesCount?: Prisma.IntFieldUpdateOperationsInput | number;
    publishedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    chapters?: Prisma.BookChapterUncheckedUpdateManyWithoutBookNestedInput;
    purchases?: Prisma.BookPurchaseUncheckedUpdateManyWithoutBookNestedInput;
};
export type BookCreateManyAuthorUserInput = {
    id?: string;
    slug: string;
    title: string;
    author: string;
    bio?: string | null;
    description?: string | null;
    coverImage?: string | null;
    categoryId?: string | null;
    price?: number;
    status?: string;
    pages?: number | null;
    edition?: string | null;
    isbn?: string | null;
    tags?: Prisma.BookCreatetagsInput | string[];
    ratingValue?: number;
    reviewCount?: number;
    salesCount?: number;
    publishedAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type BookUpdateWithoutAuthorUserInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    slug?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    author?: Prisma.StringFieldUpdateOperationsInput | string;
    bio?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    coverImage?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    price?: Prisma.IntFieldUpdateOperationsInput | number;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    pages?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    edition?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isbn?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    tags?: Prisma.BookUpdatetagsInput | string[];
    ratingValue?: Prisma.FloatFieldUpdateOperationsInput | number;
    reviewCount?: Prisma.IntFieldUpdateOperationsInput | number;
    salesCount?: Prisma.IntFieldUpdateOperationsInput | number;
    publishedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    category?: Prisma.BookCategoryUpdateOneWithoutBooksNestedInput;
    chapters?: Prisma.BookChapterUpdateManyWithoutBookNestedInput;
    purchases?: Prisma.BookPurchaseUpdateManyWithoutBookNestedInput;
    reviews?: Prisma.BookReviewUpdateManyWithoutBookNestedInput;
};
export type BookUncheckedUpdateWithoutAuthorUserInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    slug?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    author?: Prisma.StringFieldUpdateOperationsInput | string;
    bio?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    coverImage?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    categoryId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    price?: Prisma.IntFieldUpdateOperationsInput | number;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    pages?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    edition?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isbn?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    tags?: Prisma.BookUpdatetagsInput | string[];
    ratingValue?: Prisma.FloatFieldUpdateOperationsInput | number;
    reviewCount?: Prisma.IntFieldUpdateOperationsInput | number;
    salesCount?: Prisma.IntFieldUpdateOperationsInput | number;
    publishedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    chapters?: Prisma.BookChapterUncheckedUpdateManyWithoutBookNestedInput;
    purchases?: Prisma.BookPurchaseUncheckedUpdateManyWithoutBookNestedInput;
    reviews?: Prisma.BookReviewUncheckedUpdateManyWithoutBookNestedInput;
};
export type BookUncheckedUpdateManyWithoutAuthorUserInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    slug?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    author?: Prisma.StringFieldUpdateOperationsInput | string;
    bio?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    coverImage?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    categoryId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    price?: Prisma.IntFieldUpdateOperationsInput | number;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    pages?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    edition?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isbn?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    tags?: Prisma.BookUpdatetagsInput | string[];
    ratingValue?: Prisma.FloatFieldUpdateOperationsInput | number;
    reviewCount?: Prisma.IntFieldUpdateOperationsInput | number;
    salesCount?: Prisma.IntFieldUpdateOperationsInput | number;
    publishedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type BookCreateManyCategoryInput = {
    id?: string;
    slug: string;
    title: string;
    author: string;
    authorUserId?: string | null;
    bio?: string | null;
    description?: string | null;
    coverImage?: string | null;
    price?: number;
    status?: string;
    pages?: number | null;
    edition?: string | null;
    isbn?: string | null;
    tags?: Prisma.BookCreatetagsInput | string[];
    ratingValue?: number;
    reviewCount?: number;
    salesCount?: number;
    publishedAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type BookUpdateWithoutCategoryInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    slug?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    author?: Prisma.StringFieldUpdateOperationsInput | string;
    bio?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    coverImage?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    price?: Prisma.IntFieldUpdateOperationsInput | number;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    pages?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    edition?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isbn?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    tags?: Prisma.BookUpdatetagsInput | string[];
    ratingValue?: Prisma.FloatFieldUpdateOperationsInput | number;
    reviewCount?: Prisma.IntFieldUpdateOperationsInput | number;
    salesCount?: Prisma.IntFieldUpdateOperationsInput | number;
    publishedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    authorUser?: Prisma.UserUpdateOneWithoutBooksAuthoredNestedInput;
    chapters?: Prisma.BookChapterUpdateManyWithoutBookNestedInput;
    purchases?: Prisma.BookPurchaseUpdateManyWithoutBookNestedInput;
    reviews?: Prisma.BookReviewUpdateManyWithoutBookNestedInput;
};
export type BookUncheckedUpdateWithoutCategoryInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    slug?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    author?: Prisma.StringFieldUpdateOperationsInput | string;
    authorUserId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    bio?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    coverImage?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    price?: Prisma.IntFieldUpdateOperationsInput | number;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    pages?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    edition?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isbn?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    tags?: Prisma.BookUpdatetagsInput | string[];
    ratingValue?: Prisma.FloatFieldUpdateOperationsInput | number;
    reviewCount?: Prisma.IntFieldUpdateOperationsInput | number;
    salesCount?: Prisma.IntFieldUpdateOperationsInput | number;
    publishedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    chapters?: Prisma.BookChapterUncheckedUpdateManyWithoutBookNestedInput;
    purchases?: Prisma.BookPurchaseUncheckedUpdateManyWithoutBookNestedInput;
    reviews?: Prisma.BookReviewUncheckedUpdateManyWithoutBookNestedInput;
};
export type BookUncheckedUpdateManyWithoutCategoryInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    slug?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    author?: Prisma.StringFieldUpdateOperationsInput | string;
    authorUserId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    bio?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    coverImage?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    price?: Prisma.IntFieldUpdateOperationsInput | number;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    pages?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    edition?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isbn?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    tags?: Prisma.BookUpdatetagsInput | string[];
    ratingValue?: Prisma.FloatFieldUpdateOperationsInput | number;
    reviewCount?: Prisma.IntFieldUpdateOperationsInput | number;
    salesCount?: Prisma.IntFieldUpdateOperationsInput | number;
    publishedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
/**
 * Count Type BookCountOutputType
 */
export type BookCountOutputType = {
    chapters: number;
    purchases: number;
    reviews: number;
};
export type BookCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    chapters?: boolean | BookCountOutputTypeCountChaptersArgs;
    purchases?: boolean | BookCountOutputTypeCountPurchasesArgs;
    reviews?: boolean | BookCountOutputTypeCountReviewsArgs;
};
/**
 * BookCountOutputType without action
 */
export type BookCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookCountOutputType
     */
    select?: Prisma.BookCountOutputTypeSelect<ExtArgs> | null;
};
/**
 * BookCountOutputType without action
 */
export type BookCountOutputTypeCountChaptersArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.BookChapterWhereInput;
};
/**
 * BookCountOutputType without action
 */
export type BookCountOutputTypeCountPurchasesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.BookPurchaseWhereInput;
};
/**
 * BookCountOutputType without action
 */
export type BookCountOutputTypeCountReviewsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.BookReviewWhereInput;
};
export type BookSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    slug?: boolean;
    title?: boolean;
    author?: boolean;
    authorUserId?: boolean;
    bio?: boolean;
    description?: boolean;
    coverImage?: boolean;
    categoryId?: boolean;
    price?: boolean;
    status?: boolean;
    pages?: boolean;
    edition?: boolean;
    isbn?: boolean;
    tags?: boolean;
    ratingValue?: boolean;
    reviewCount?: boolean;
    salesCount?: boolean;
    publishedAt?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    authorUser?: boolean | Prisma.Book$authorUserArgs<ExtArgs>;
    category?: boolean | Prisma.Book$categoryArgs<ExtArgs>;
    chapters?: boolean | Prisma.Book$chaptersArgs<ExtArgs>;
    purchases?: boolean | Prisma.Book$purchasesArgs<ExtArgs>;
    reviews?: boolean | Prisma.Book$reviewsArgs<ExtArgs>;
    _count?: boolean | Prisma.BookCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["book"]>;
export type BookSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    slug?: boolean;
    title?: boolean;
    author?: boolean;
    authorUserId?: boolean;
    bio?: boolean;
    description?: boolean;
    coverImage?: boolean;
    categoryId?: boolean;
    price?: boolean;
    status?: boolean;
    pages?: boolean;
    edition?: boolean;
    isbn?: boolean;
    tags?: boolean;
    ratingValue?: boolean;
    reviewCount?: boolean;
    salesCount?: boolean;
    publishedAt?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    authorUser?: boolean | Prisma.Book$authorUserArgs<ExtArgs>;
    category?: boolean | Prisma.Book$categoryArgs<ExtArgs>;
}, ExtArgs["result"]["book"]>;
export type BookSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    slug?: boolean;
    title?: boolean;
    author?: boolean;
    authorUserId?: boolean;
    bio?: boolean;
    description?: boolean;
    coverImage?: boolean;
    categoryId?: boolean;
    price?: boolean;
    status?: boolean;
    pages?: boolean;
    edition?: boolean;
    isbn?: boolean;
    tags?: boolean;
    ratingValue?: boolean;
    reviewCount?: boolean;
    salesCount?: boolean;
    publishedAt?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    authorUser?: boolean | Prisma.Book$authorUserArgs<ExtArgs>;
    category?: boolean | Prisma.Book$categoryArgs<ExtArgs>;
}, ExtArgs["result"]["book"]>;
export type BookSelectScalar = {
    id?: boolean;
    slug?: boolean;
    title?: boolean;
    author?: boolean;
    authorUserId?: boolean;
    bio?: boolean;
    description?: boolean;
    coverImage?: boolean;
    categoryId?: boolean;
    price?: boolean;
    status?: boolean;
    pages?: boolean;
    edition?: boolean;
    isbn?: boolean;
    tags?: boolean;
    ratingValue?: boolean;
    reviewCount?: boolean;
    salesCount?: boolean;
    publishedAt?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
};
export type BookOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "slug" | "title" | "author" | "authorUserId" | "bio" | "description" | "coverImage" | "categoryId" | "price" | "status" | "pages" | "edition" | "isbn" | "tags" | "ratingValue" | "reviewCount" | "salesCount" | "publishedAt" | "createdAt" | "updatedAt", ExtArgs["result"]["book"]>;
export type BookInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    authorUser?: boolean | Prisma.Book$authorUserArgs<ExtArgs>;
    category?: boolean | Prisma.Book$categoryArgs<ExtArgs>;
    chapters?: boolean | Prisma.Book$chaptersArgs<ExtArgs>;
    purchases?: boolean | Prisma.Book$purchasesArgs<ExtArgs>;
    reviews?: boolean | Prisma.Book$reviewsArgs<ExtArgs>;
    _count?: boolean | Prisma.BookCountOutputTypeDefaultArgs<ExtArgs>;
};
export type BookIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    authorUser?: boolean | Prisma.Book$authorUserArgs<ExtArgs>;
    category?: boolean | Prisma.Book$categoryArgs<ExtArgs>;
};
export type BookIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    authorUser?: boolean | Prisma.Book$authorUserArgs<ExtArgs>;
    category?: boolean | Prisma.Book$categoryArgs<ExtArgs>;
};
export type $BookPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Book";
    objects: {
        authorUser: Prisma.$UserPayload<ExtArgs> | null;
        category: Prisma.$BookCategoryPayload<ExtArgs> | null;
        chapters: Prisma.$BookChapterPayload<ExtArgs>[];
        purchases: Prisma.$BookPurchasePayload<ExtArgs>[];
        reviews: Prisma.$BookReviewPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        slug: string;
        title: string;
        author: string;
        authorUserId: string | null;
        bio: string | null;
        description: string | null;
        coverImage: string | null;
        categoryId: string | null;
        price: number;
        status: string;
        pages: number | null;
        edition: string | null;
        isbn: string | null;
        tags: string[];
        ratingValue: number;
        reviewCount: number;
        salesCount: number;
        publishedAt: Date | null;
        createdAt: Date;
        updatedAt: Date;
    }, ExtArgs["result"]["book"]>;
    composites: {};
};
export type BookGetPayload<S extends boolean | null | undefined | BookDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$BookPayload, S>;
export type BookCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<BookFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: BookCountAggregateInputType | true;
};
export interface BookDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Book'];
        meta: {
            name: 'Book';
        };
    };
    /**
     * Find zero or one Book that matches the filter.
     * @param {BookFindUniqueArgs} args - Arguments to find a Book
     * @example
     * // Get one Book
     * const book = await prisma.book.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends BookFindUniqueArgs>(args: Prisma.SelectSubset<T, BookFindUniqueArgs<ExtArgs>>): Prisma.Prisma__BookClient<runtime.Types.Result.GetResult<Prisma.$BookPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find one Book that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {BookFindUniqueOrThrowArgs} args - Arguments to find a Book
     * @example
     * // Get one Book
     * const book = await prisma.book.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends BookFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, BookFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__BookClient<runtime.Types.Result.GetResult<Prisma.$BookPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first Book that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookFindFirstArgs} args - Arguments to find a Book
     * @example
     * // Get one Book
     * const book = await prisma.book.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends BookFindFirstArgs>(args?: Prisma.SelectSubset<T, BookFindFirstArgs<ExtArgs>>): Prisma.Prisma__BookClient<runtime.Types.Result.GetResult<Prisma.$BookPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first Book that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookFindFirstOrThrowArgs} args - Arguments to find a Book
     * @example
     * // Get one Book
     * const book = await prisma.book.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends BookFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, BookFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__BookClient<runtime.Types.Result.GetResult<Prisma.$BookPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find zero or more Books that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Books
     * const books = await prisma.book.findMany()
     *
     * // Get first 10 Books
     * const books = await prisma.book.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const bookWithIdOnly = await prisma.book.findMany({ select: { id: true } })
     *
     */
    findMany<T extends BookFindManyArgs>(args?: Prisma.SelectSubset<T, BookFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$BookPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    /**
     * Create a Book.
     * @param {BookCreateArgs} args - Arguments to create a Book.
     * @example
     * // Create one Book
     * const Book = await prisma.book.create({
     *   data: {
     *     // ... data to create a Book
     *   }
     * })
     *
     */
    create<T extends BookCreateArgs>(args: Prisma.SelectSubset<T, BookCreateArgs<ExtArgs>>): Prisma.Prisma__BookClient<runtime.Types.Result.GetResult<Prisma.$BookPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Create many Books.
     * @param {BookCreateManyArgs} args - Arguments to create many Books.
     * @example
     * // Create many Books
     * const book = await prisma.book.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends BookCreateManyArgs>(args?: Prisma.SelectSubset<T, BookCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Create many Books and returns the data saved in the database.
     * @param {BookCreateManyAndReturnArgs} args - Arguments to create many Books.
     * @example
     * // Create many Books
     * const book = await prisma.book.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many Books and only return the `id`
     * const bookWithIdOnly = await prisma.book.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends BookCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, BookCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$BookPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    /**
     * Delete a Book.
     * @param {BookDeleteArgs} args - Arguments to delete one Book.
     * @example
     * // Delete one Book
     * const Book = await prisma.book.delete({
     *   where: {
     *     // ... filter to delete one Book
     *   }
     * })
     *
     */
    delete<T extends BookDeleteArgs>(args: Prisma.SelectSubset<T, BookDeleteArgs<ExtArgs>>): Prisma.Prisma__BookClient<runtime.Types.Result.GetResult<Prisma.$BookPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Update one Book.
     * @param {BookUpdateArgs} args - Arguments to update one Book.
     * @example
     * // Update one Book
     * const book = await prisma.book.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends BookUpdateArgs>(args: Prisma.SelectSubset<T, BookUpdateArgs<ExtArgs>>): Prisma.Prisma__BookClient<runtime.Types.Result.GetResult<Prisma.$BookPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Delete zero or more Books.
     * @param {BookDeleteManyArgs} args - Arguments to filter Books to delete.
     * @example
     * // Delete a few Books
     * const { count } = await prisma.book.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends BookDeleteManyArgs>(args?: Prisma.SelectSubset<T, BookDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more Books.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Books
     * const book = await prisma.book.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends BookUpdateManyArgs>(args: Prisma.SelectSubset<T, BookUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more Books and returns the data updated in the database.
     * @param {BookUpdateManyAndReturnArgs} args - Arguments to update many Books.
     * @example
     * // Update many Books
     * const book = await prisma.book.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more Books and only return the `id`
     * const bookWithIdOnly = await prisma.book.updateManyAndReturn({
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
    updateManyAndReturn<T extends BookUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, BookUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$BookPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    /**
     * Create or update one Book.
     * @param {BookUpsertArgs} args - Arguments to update or create a Book.
     * @example
     * // Update or create a Book
     * const book = await prisma.book.upsert({
     *   create: {
     *     // ... data to create a Book
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Book we want to update
     *   }
     * })
     */
    upsert<T extends BookUpsertArgs>(args: Prisma.SelectSubset<T, BookUpsertArgs<ExtArgs>>): Prisma.Prisma__BookClient<runtime.Types.Result.GetResult<Prisma.$BookPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Count the number of Books.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookCountArgs} args - Arguments to filter Books to count.
     * @example
     * // Count the number of Books
     * const count = await prisma.book.count({
     *   where: {
     *     // ... the filter for the Books we want to count
     *   }
     * })
    **/
    count<T extends BookCountArgs>(args?: Prisma.Subset<T, BookCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], BookCountAggregateOutputType> : number>;
    /**
     * Allows you to perform aggregations operations on a Book.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends BookAggregateArgs>(args: Prisma.Subset<T, BookAggregateArgs>): Prisma.PrismaPromise<GetBookAggregateType<T>>;
    /**
     * Group by Book.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookGroupByArgs} args - Group by arguments.
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
    groupBy<T extends BookGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: BookGroupByArgs['orderBy'];
    } : {
        orderBy?: BookGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, BookGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBookGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the Book model
     */
    readonly fields: BookFieldRefs;
}
/**
 * The delegate class that acts as a "Promise-like" for Book.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export interface Prisma__BookClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    authorUser<T extends Prisma.Book$authorUserArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Book$authorUserArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    category<T extends Prisma.Book$categoryArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Book$categoryArgs<ExtArgs>>): Prisma.Prisma__BookCategoryClient<runtime.Types.Result.GetResult<Prisma.$BookCategoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    chapters<T extends Prisma.Book$chaptersArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Book$chaptersArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$BookChapterPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    purchases<T extends Prisma.Book$purchasesArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Book$purchasesArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$BookPurchasePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    reviews<T extends Prisma.Book$reviewsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Book$reviewsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$BookReviewPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
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
 * Fields of the Book model
 */
export interface BookFieldRefs {
    readonly id: Prisma.FieldRef<"Book", 'String'>;
    readonly slug: Prisma.FieldRef<"Book", 'String'>;
    readonly title: Prisma.FieldRef<"Book", 'String'>;
    readonly author: Prisma.FieldRef<"Book", 'String'>;
    readonly authorUserId: Prisma.FieldRef<"Book", 'String'>;
    readonly bio: Prisma.FieldRef<"Book", 'String'>;
    readonly description: Prisma.FieldRef<"Book", 'String'>;
    readonly coverImage: Prisma.FieldRef<"Book", 'String'>;
    readonly categoryId: Prisma.FieldRef<"Book", 'String'>;
    readonly price: Prisma.FieldRef<"Book", 'Int'>;
    readonly status: Prisma.FieldRef<"Book", 'String'>;
    readonly pages: Prisma.FieldRef<"Book", 'Int'>;
    readonly edition: Prisma.FieldRef<"Book", 'String'>;
    readonly isbn: Prisma.FieldRef<"Book", 'String'>;
    readonly tags: Prisma.FieldRef<"Book", 'String[]'>;
    readonly ratingValue: Prisma.FieldRef<"Book", 'Float'>;
    readonly reviewCount: Prisma.FieldRef<"Book", 'Int'>;
    readonly salesCount: Prisma.FieldRef<"Book", 'Int'>;
    readonly publishedAt: Prisma.FieldRef<"Book", 'DateTime'>;
    readonly createdAt: Prisma.FieldRef<"Book", 'DateTime'>;
    readonly updatedAt: Prisma.FieldRef<"Book", 'DateTime'>;
}
/**
 * Book findUnique
 */
export type BookFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which Book to fetch.
     */
    where: Prisma.BookWhereUniqueInput;
};
/**
 * Book findUniqueOrThrow
 */
export type BookFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which Book to fetch.
     */
    where: Prisma.BookWhereUniqueInput;
};
/**
 * Book findFirst
 */
export type BookFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which Book to fetch.
     */
    where?: Prisma.BookWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Books to fetch.
     */
    orderBy?: Prisma.BookOrderByWithRelationInput | Prisma.BookOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Books.
     */
    cursor?: Prisma.BookWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Books from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Books.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Books.
     */
    distinct?: Prisma.BookScalarFieldEnum | Prisma.BookScalarFieldEnum[];
};
/**
 * Book findFirstOrThrow
 */
export type BookFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which Book to fetch.
     */
    where?: Prisma.BookWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Books to fetch.
     */
    orderBy?: Prisma.BookOrderByWithRelationInput | Prisma.BookOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Books.
     */
    cursor?: Prisma.BookWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Books from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Books.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Books.
     */
    distinct?: Prisma.BookScalarFieldEnum | Prisma.BookScalarFieldEnum[];
};
/**
 * Book findMany
 */
export type BookFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which Books to fetch.
     */
    where?: Prisma.BookWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Books to fetch.
     */
    orderBy?: Prisma.BookOrderByWithRelationInput | Prisma.BookOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing Books.
     */
    cursor?: Prisma.BookWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Books from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Books.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Books.
     */
    distinct?: Prisma.BookScalarFieldEnum | Prisma.BookScalarFieldEnum[];
};
/**
 * Book create
 */
export type BookCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * The data needed to create a Book.
     */
    data: Prisma.XOR<Prisma.BookCreateInput, Prisma.BookUncheckedCreateInput>;
};
/**
 * Book createMany
 */
export type BookCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to create many Books.
     */
    data: Prisma.BookCreateManyInput | Prisma.BookCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * Book createManyAndReturn
 */
export type BookCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Book
     */
    select?: Prisma.BookSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the Book
     */
    omit?: Prisma.BookOmit<ExtArgs> | null;
    /**
     * The data used to create many Books.
     */
    data: Prisma.BookCreateManyInput | Prisma.BookCreateManyInput[];
    skipDuplicates?: boolean;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.BookIncludeCreateManyAndReturn<ExtArgs> | null;
};
/**
 * Book update
 */
export type BookUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * The data needed to update a Book.
     */
    data: Prisma.XOR<Prisma.BookUpdateInput, Prisma.BookUncheckedUpdateInput>;
    /**
     * Choose, which Book to update.
     */
    where: Prisma.BookWhereUniqueInput;
};
/**
 * Book updateMany
 */
export type BookUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to update Books.
     */
    data: Prisma.XOR<Prisma.BookUpdateManyMutationInput, Prisma.BookUncheckedUpdateManyInput>;
    /**
     * Filter which Books to update
     */
    where?: Prisma.BookWhereInput;
    /**
     * Limit how many Books to update.
     */
    limit?: number;
};
/**
 * Book updateManyAndReturn
 */
export type BookUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Book
     */
    select?: Prisma.BookSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the Book
     */
    omit?: Prisma.BookOmit<ExtArgs> | null;
    /**
     * The data used to update Books.
     */
    data: Prisma.XOR<Prisma.BookUpdateManyMutationInput, Prisma.BookUncheckedUpdateManyInput>;
    /**
     * Filter which Books to update
     */
    where?: Prisma.BookWhereInput;
    /**
     * Limit how many Books to update.
     */
    limit?: number;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.BookIncludeUpdateManyAndReturn<ExtArgs> | null;
};
/**
 * Book upsert
 */
export type BookUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * The filter to search for the Book to update in case it exists.
     */
    where: Prisma.BookWhereUniqueInput;
    /**
     * In case the Book found by the `where` argument doesn't exist, create a new Book with this data.
     */
    create: Prisma.XOR<Prisma.BookCreateInput, Prisma.BookUncheckedCreateInput>;
    /**
     * In case the Book was found with the provided `where` argument, update it with this data.
     */
    update: Prisma.XOR<Prisma.BookUpdateInput, Prisma.BookUncheckedUpdateInput>;
};
/**
 * Book delete
 */
export type BookDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter which Book to delete.
     */
    where: Prisma.BookWhereUniqueInput;
};
/**
 * Book deleteMany
 */
export type BookDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which Books to delete
     */
    where?: Prisma.BookWhereInput;
    /**
     * Limit how many Books to delete.
     */
    limit?: number;
};
/**
 * Book.authorUser
 */
export type Book$authorUserArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    where?: Prisma.UserWhereInput;
};
/**
 * Book.category
 */
export type Book$categoryArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookCategory
     */
    select?: Prisma.BookCategorySelect<ExtArgs> | null;
    /**
     * Omit specific fields from the BookCategory
     */
    omit?: Prisma.BookCategoryOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.BookCategoryInclude<ExtArgs> | null;
    where?: Prisma.BookCategoryWhereInput;
};
/**
 * Book.chapters
 */
export type Book$chaptersArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookChapter
     */
    select?: Prisma.BookChapterSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the BookChapter
     */
    omit?: Prisma.BookChapterOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.BookChapterInclude<ExtArgs> | null;
    where?: Prisma.BookChapterWhereInput;
    orderBy?: Prisma.BookChapterOrderByWithRelationInput | Prisma.BookChapterOrderByWithRelationInput[];
    cursor?: Prisma.BookChapterWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.BookChapterScalarFieldEnum | Prisma.BookChapterScalarFieldEnum[];
};
/**
 * Book.purchases
 */
export type Book$purchasesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
 * Book.reviews
 */
export type Book$reviewsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
 * Book without action
 */
export type BookDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
};
