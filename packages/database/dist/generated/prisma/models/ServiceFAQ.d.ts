import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace";
/**
 * Model ServiceFAQ
 *
 */
export type ServiceFAQModel = runtime.Types.Result.DefaultSelection<Prisma.$ServiceFAQPayload>;
export type AggregateServiceFAQ = {
    _count: ServiceFAQCountAggregateOutputType | null;
    _avg: ServiceFAQAvgAggregateOutputType | null;
    _sum: ServiceFAQSumAggregateOutputType | null;
    _min: ServiceFAQMinAggregateOutputType | null;
    _max: ServiceFAQMaxAggregateOutputType | null;
};
export type ServiceFAQAvgAggregateOutputType = {
    sortOrder: number | null;
};
export type ServiceFAQSumAggregateOutputType = {
    sortOrder: number | null;
};
export type ServiceFAQMinAggregateOutputType = {
    id: string | null;
    serviceId: string | null;
    question: string | null;
    answer: string | null;
    sortOrder: number | null;
};
export type ServiceFAQMaxAggregateOutputType = {
    id: string | null;
    serviceId: string | null;
    question: string | null;
    answer: string | null;
    sortOrder: number | null;
};
export type ServiceFAQCountAggregateOutputType = {
    id: number;
    serviceId: number;
    question: number;
    answer: number;
    sortOrder: number;
    _all: number;
};
export type ServiceFAQAvgAggregateInputType = {
    sortOrder?: true;
};
export type ServiceFAQSumAggregateInputType = {
    sortOrder?: true;
};
export type ServiceFAQMinAggregateInputType = {
    id?: true;
    serviceId?: true;
    question?: true;
    answer?: true;
    sortOrder?: true;
};
export type ServiceFAQMaxAggregateInputType = {
    id?: true;
    serviceId?: true;
    question?: true;
    answer?: true;
    sortOrder?: true;
};
export type ServiceFAQCountAggregateInputType = {
    id?: true;
    serviceId?: true;
    question?: true;
    answer?: true;
    sortOrder?: true;
    _all?: true;
};
export type ServiceFAQAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which ServiceFAQ to aggregate.
     */
    where?: Prisma.ServiceFAQWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of ServiceFAQS to fetch.
     */
    orderBy?: Prisma.ServiceFAQOrderByWithRelationInput | Prisma.ServiceFAQOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: Prisma.ServiceFAQWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` ServiceFAQS from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` ServiceFAQS.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned ServiceFAQS
    **/
    _count?: true | ServiceFAQCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
    **/
    _avg?: ServiceFAQAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
    **/
    _sum?: ServiceFAQSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
    **/
    _min?: ServiceFAQMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
    **/
    _max?: ServiceFAQMaxAggregateInputType;
};
export type GetServiceFAQAggregateType<T extends ServiceFAQAggregateArgs> = {
    [P in keyof T & keyof AggregateServiceFAQ]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateServiceFAQ[P]> : Prisma.GetScalarType<T[P], AggregateServiceFAQ[P]>;
};
export type ServiceFAQGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ServiceFAQWhereInput;
    orderBy?: Prisma.ServiceFAQOrderByWithAggregationInput | Prisma.ServiceFAQOrderByWithAggregationInput[];
    by: Prisma.ServiceFAQScalarFieldEnum[] | Prisma.ServiceFAQScalarFieldEnum;
    having?: Prisma.ServiceFAQScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: ServiceFAQCountAggregateInputType | true;
    _avg?: ServiceFAQAvgAggregateInputType;
    _sum?: ServiceFAQSumAggregateInputType;
    _min?: ServiceFAQMinAggregateInputType;
    _max?: ServiceFAQMaxAggregateInputType;
};
export type ServiceFAQGroupByOutputType = {
    id: string;
    serviceId: string;
    question: string;
    answer: string;
    sortOrder: number;
    _count: ServiceFAQCountAggregateOutputType | null;
    _avg: ServiceFAQAvgAggregateOutputType | null;
    _sum: ServiceFAQSumAggregateOutputType | null;
    _min: ServiceFAQMinAggregateOutputType | null;
    _max: ServiceFAQMaxAggregateOutputType | null;
};
export type GetServiceFAQGroupByPayload<T extends ServiceFAQGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<ServiceFAQGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof ServiceFAQGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], ServiceFAQGroupByOutputType[P]> : Prisma.GetScalarType<T[P], ServiceFAQGroupByOutputType[P]>;
}>>;
export type ServiceFAQWhereInput = {
    AND?: Prisma.ServiceFAQWhereInput | Prisma.ServiceFAQWhereInput[];
    OR?: Prisma.ServiceFAQWhereInput[];
    NOT?: Prisma.ServiceFAQWhereInput | Prisma.ServiceFAQWhereInput[];
    id?: Prisma.StringFilter<"ServiceFAQ"> | string;
    serviceId?: Prisma.StringFilter<"ServiceFAQ"> | string;
    question?: Prisma.StringFilter<"ServiceFAQ"> | string;
    answer?: Prisma.StringFilter<"ServiceFAQ"> | string;
    sortOrder?: Prisma.IntFilter<"ServiceFAQ"> | number;
    service?: Prisma.XOR<Prisma.ServiceScalarRelationFilter, Prisma.ServiceWhereInput>;
};
export type ServiceFAQOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    serviceId?: Prisma.SortOrder;
    question?: Prisma.SortOrder;
    answer?: Prisma.SortOrder;
    sortOrder?: Prisma.SortOrder;
    service?: Prisma.ServiceOrderByWithRelationInput;
};
export type ServiceFAQWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    AND?: Prisma.ServiceFAQWhereInput | Prisma.ServiceFAQWhereInput[];
    OR?: Prisma.ServiceFAQWhereInput[];
    NOT?: Prisma.ServiceFAQWhereInput | Prisma.ServiceFAQWhereInput[];
    serviceId?: Prisma.StringFilter<"ServiceFAQ"> | string;
    question?: Prisma.StringFilter<"ServiceFAQ"> | string;
    answer?: Prisma.StringFilter<"ServiceFAQ"> | string;
    sortOrder?: Prisma.IntFilter<"ServiceFAQ"> | number;
    service?: Prisma.XOR<Prisma.ServiceScalarRelationFilter, Prisma.ServiceWhereInput>;
}, "id">;
export type ServiceFAQOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    serviceId?: Prisma.SortOrder;
    question?: Prisma.SortOrder;
    answer?: Prisma.SortOrder;
    sortOrder?: Prisma.SortOrder;
    _count?: Prisma.ServiceFAQCountOrderByAggregateInput;
    _avg?: Prisma.ServiceFAQAvgOrderByAggregateInput;
    _max?: Prisma.ServiceFAQMaxOrderByAggregateInput;
    _min?: Prisma.ServiceFAQMinOrderByAggregateInput;
    _sum?: Prisma.ServiceFAQSumOrderByAggregateInput;
};
export type ServiceFAQScalarWhereWithAggregatesInput = {
    AND?: Prisma.ServiceFAQScalarWhereWithAggregatesInput | Prisma.ServiceFAQScalarWhereWithAggregatesInput[];
    OR?: Prisma.ServiceFAQScalarWhereWithAggregatesInput[];
    NOT?: Prisma.ServiceFAQScalarWhereWithAggregatesInput | Prisma.ServiceFAQScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"ServiceFAQ"> | string;
    serviceId?: Prisma.StringWithAggregatesFilter<"ServiceFAQ"> | string;
    question?: Prisma.StringWithAggregatesFilter<"ServiceFAQ"> | string;
    answer?: Prisma.StringWithAggregatesFilter<"ServiceFAQ"> | string;
    sortOrder?: Prisma.IntWithAggregatesFilter<"ServiceFAQ"> | number;
};
export type ServiceFAQCreateInput = {
    id?: string;
    question: string;
    answer: string;
    sortOrder?: number;
    service: Prisma.ServiceCreateNestedOneWithoutFaqsInput;
};
export type ServiceFAQUncheckedCreateInput = {
    id?: string;
    serviceId: string;
    question: string;
    answer: string;
    sortOrder?: number;
};
export type ServiceFAQUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    question?: Prisma.StringFieldUpdateOperationsInput | string;
    answer?: Prisma.StringFieldUpdateOperationsInput | string;
    sortOrder?: Prisma.IntFieldUpdateOperationsInput | number;
    service?: Prisma.ServiceUpdateOneRequiredWithoutFaqsNestedInput;
};
export type ServiceFAQUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    serviceId?: Prisma.StringFieldUpdateOperationsInput | string;
    question?: Prisma.StringFieldUpdateOperationsInput | string;
    answer?: Prisma.StringFieldUpdateOperationsInput | string;
    sortOrder?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type ServiceFAQCreateManyInput = {
    id?: string;
    serviceId: string;
    question: string;
    answer: string;
    sortOrder?: number;
};
export type ServiceFAQUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    question?: Prisma.StringFieldUpdateOperationsInput | string;
    answer?: Prisma.StringFieldUpdateOperationsInput | string;
    sortOrder?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type ServiceFAQUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    serviceId?: Prisma.StringFieldUpdateOperationsInput | string;
    question?: Prisma.StringFieldUpdateOperationsInput | string;
    answer?: Prisma.StringFieldUpdateOperationsInput | string;
    sortOrder?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type ServiceFAQListRelationFilter = {
    every?: Prisma.ServiceFAQWhereInput;
    some?: Prisma.ServiceFAQWhereInput;
    none?: Prisma.ServiceFAQWhereInput;
};
export type ServiceFAQOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type ServiceFAQCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    serviceId?: Prisma.SortOrder;
    question?: Prisma.SortOrder;
    answer?: Prisma.SortOrder;
    sortOrder?: Prisma.SortOrder;
};
export type ServiceFAQAvgOrderByAggregateInput = {
    sortOrder?: Prisma.SortOrder;
};
export type ServiceFAQMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    serviceId?: Prisma.SortOrder;
    question?: Prisma.SortOrder;
    answer?: Prisma.SortOrder;
    sortOrder?: Prisma.SortOrder;
};
export type ServiceFAQMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    serviceId?: Prisma.SortOrder;
    question?: Prisma.SortOrder;
    answer?: Prisma.SortOrder;
    sortOrder?: Prisma.SortOrder;
};
export type ServiceFAQSumOrderByAggregateInput = {
    sortOrder?: Prisma.SortOrder;
};
export type ServiceFAQCreateNestedManyWithoutServiceInput = {
    create?: Prisma.XOR<Prisma.ServiceFAQCreateWithoutServiceInput, Prisma.ServiceFAQUncheckedCreateWithoutServiceInput> | Prisma.ServiceFAQCreateWithoutServiceInput[] | Prisma.ServiceFAQUncheckedCreateWithoutServiceInput[];
    connectOrCreate?: Prisma.ServiceFAQCreateOrConnectWithoutServiceInput | Prisma.ServiceFAQCreateOrConnectWithoutServiceInput[];
    createMany?: Prisma.ServiceFAQCreateManyServiceInputEnvelope;
    connect?: Prisma.ServiceFAQWhereUniqueInput | Prisma.ServiceFAQWhereUniqueInput[];
};
export type ServiceFAQUncheckedCreateNestedManyWithoutServiceInput = {
    create?: Prisma.XOR<Prisma.ServiceFAQCreateWithoutServiceInput, Prisma.ServiceFAQUncheckedCreateWithoutServiceInput> | Prisma.ServiceFAQCreateWithoutServiceInput[] | Prisma.ServiceFAQUncheckedCreateWithoutServiceInput[];
    connectOrCreate?: Prisma.ServiceFAQCreateOrConnectWithoutServiceInput | Prisma.ServiceFAQCreateOrConnectWithoutServiceInput[];
    createMany?: Prisma.ServiceFAQCreateManyServiceInputEnvelope;
    connect?: Prisma.ServiceFAQWhereUniqueInput | Prisma.ServiceFAQWhereUniqueInput[];
};
export type ServiceFAQUpdateManyWithoutServiceNestedInput = {
    create?: Prisma.XOR<Prisma.ServiceFAQCreateWithoutServiceInput, Prisma.ServiceFAQUncheckedCreateWithoutServiceInput> | Prisma.ServiceFAQCreateWithoutServiceInput[] | Prisma.ServiceFAQUncheckedCreateWithoutServiceInput[];
    connectOrCreate?: Prisma.ServiceFAQCreateOrConnectWithoutServiceInput | Prisma.ServiceFAQCreateOrConnectWithoutServiceInput[];
    upsert?: Prisma.ServiceFAQUpsertWithWhereUniqueWithoutServiceInput | Prisma.ServiceFAQUpsertWithWhereUniqueWithoutServiceInput[];
    createMany?: Prisma.ServiceFAQCreateManyServiceInputEnvelope;
    set?: Prisma.ServiceFAQWhereUniqueInput | Prisma.ServiceFAQWhereUniqueInput[];
    disconnect?: Prisma.ServiceFAQWhereUniqueInput | Prisma.ServiceFAQWhereUniqueInput[];
    delete?: Prisma.ServiceFAQWhereUniqueInput | Prisma.ServiceFAQWhereUniqueInput[];
    connect?: Prisma.ServiceFAQWhereUniqueInput | Prisma.ServiceFAQWhereUniqueInput[];
    update?: Prisma.ServiceFAQUpdateWithWhereUniqueWithoutServiceInput | Prisma.ServiceFAQUpdateWithWhereUniqueWithoutServiceInput[];
    updateMany?: Prisma.ServiceFAQUpdateManyWithWhereWithoutServiceInput | Prisma.ServiceFAQUpdateManyWithWhereWithoutServiceInput[];
    deleteMany?: Prisma.ServiceFAQScalarWhereInput | Prisma.ServiceFAQScalarWhereInput[];
};
export type ServiceFAQUncheckedUpdateManyWithoutServiceNestedInput = {
    create?: Prisma.XOR<Prisma.ServiceFAQCreateWithoutServiceInput, Prisma.ServiceFAQUncheckedCreateWithoutServiceInput> | Prisma.ServiceFAQCreateWithoutServiceInput[] | Prisma.ServiceFAQUncheckedCreateWithoutServiceInput[];
    connectOrCreate?: Prisma.ServiceFAQCreateOrConnectWithoutServiceInput | Prisma.ServiceFAQCreateOrConnectWithoutServiceInput[];
    upsert?: Prisma.ServiceFAQUpsertWithWhereUniqueWithoutServiceInput | Prisma.ServiceFAQUpsertWithWhereUniqueWithoutServiceInput[];
    createMany?: Prisma.ServiceFAQCreateManyServiceInputEnvelope;
    set?: Prisma.ServiceFAQWhereUniqueInput | Prisma.ServiceFAQWhereUniqueInput[];
    disconnect?: Prisma.ServiceFAQWhereUniqueInput | Prisma.ServiceFAQWhereUniqueInput[];
    delete?: Prisma.ServiceFAQWhereUniqueInput | Prisma.ServiceFAQWhereUniqueInput[];
    connect?: Prisma.ServiceFAQWhereUniqueInput | Prisma.ServiceFAQWhereUniqueInput[];
    update?: Prisma.ServiceFAQUpdateWithWhereUniqueWithoutServiceInput | Prisma.ServiceFAQUpdateWithWhereUniqueWithoutServiceInput[];
    updateMany?: Prisma.ServiceFAQUpdateManyWithWhereWithoutServiceInput | Prisma.ServiceFAQUpdateManyWithWhereWithoutServiceInput[];
    deleteMany?: Prisma.ServiceFAQScalarWhereInput | Prisma.ServiceFAQScalarWhereInput[];
};
export type ServiceFAQCreateWithoutServiceInput = {
    id?: string;
    question: string;
    answer: string;
    sortOrder?: number;
};
export type ServiceFAQUncheckedCreateWithoutServiceInput = {
    id?: string;
    question: string;
    answer: string;
    sortOrder?: number;
};
export type ServiceFAQCreateOrConnectWithoutServiceInput = {
    where: Prisma.ServiceFAQWhereUniqueInput;
    create: Prisma.XOR<Prisma.ServiceFAQCreateWithoutServiceInput, Prisma.ServiceFAQUncheckedCreateWithoutServiceInput>;
};
export type ServiceFAQCreateManyServiceInputEnvelope = {
    data: Prisma.ServiceFAQCreateManyServiceInput | Prisma.ServiceFAQCreateManyServiceInput[];
    skipDuplicates?: boolean;
};
export type ServiceFAQUpsertWithWhereUniqueWithoutServiceInput = {
    where: Prisma.ServiceFAQWhereUniqueInput;
    update: Prisma.XOR<Prisma.ServiceFAQUpdateWithoutServiceInput, Prisma.ServiceFAQUncheckedUpdateWithoutServiceInput>;
    create: Prisma.XOR<Prisma.ServiceFAQCreateWithoutServiceInput, Prisma.ServiceFAQUncheckedCreateWithoutServiceInput>;
};
export type ServiceFAQUpdateWithWhereUniqueWithoutServiceInput = {
    where: Prisma.ServiceFAQWhereUniqueInput;
    data: Prisma.XOR<Prisma.ServiceFAQUpdateWithoutServiceInput, Prisma.ServiceFAQUncheckedUpdateWithoutServiceInput>;
};
export type ServiceFAQUpdateManyWithWhereWithoutServiceInput = {
    where: Prisma.ServiceFAQScalarWhereInput;
    data: Prisma.XOR<Prisma.ServiceFAQUpdateManyMutationInput, Prisma.ServiceFAQUncheckedUpdateManyWithoutServiceInput>;
};
export type ServiceFAQScalarWhereInput = {
    AND?: Prisma.ServiceFAQScalarWhereInput | Prisma.ServiceFAQScalarWhereInput[];
    OR?: Prisma.ServiceFAQScalarWhereInput[];
    NOT?: Prisma.ServiceFAQScalarWhereInput | Prisma.ServiceFAQScalarWhereInput[];
    id?: Prisma.StringFilter<"ServiceFAQ"> | string;
    serviceId?: Prisma.StringFilter<"ServiceFAQ"> | string;
    question?: Prisma.StringFilter<"ServiceFAQ"> | string;
    answer?: Prisma.StringFilter<"ServiceFAQ"> | string;
    sortOrder?: Prisma.IntFilter<"ServiceFAQ"> | number;
};
export type ServiceFAQCreateManyServiceInput = {
    id?: string;
    question: string;
    answer: string;
    sortOrder?: number;
};
export type ServiceFAQUpdateWithoutServiceInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    question?: Prisma.StringFieldUpdateOperationsInput | string;
    answer?: Prisma.StringFieldUpdateOperationsInput | string;
    sortOrder?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type ServiceFAQUncheckedUpdateWithoutServiceInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    question?: Prisma.StringFieldUpdateOperationsInput | string;
    answer?: Prisma.StringFieldUpdateOperationsInput | string;
    sortOrder?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type ServiceFAQUncheckedUpdateManyWithoutServiceInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    question?: Prisma.StringFieldUpdateOperationsInput | string;
    answer?: Prisma.StringFieldUpdateOperationsInput | string;
    sortOrder?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type ServiceFAQSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    serviceId?: boolean;
    question?: boolean;
    answer?: boolean;
    sortOrder?: boolean;
    service?: boolean | Prisma.ServiceDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["serviceFAQ"]>;
export type ServiceFAQSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    serviceId?: boolean;
    question?: boolean;
    answer?: boolean;
    sortOrder?: boolean;
    service?: boolean | Prisma.ServiceDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["serviceFAQ"]>;
export type ServiceFAQSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    serviceId?: boolean;
    question?: boolean;
    answer?: boolean;
    sortOrder?: boolean;
    service?: boolean | Prisma.ServiceDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["serviceFAQ"]>;
export type ServiceFAQSelectScalar = {
    id?: boolean;
    serviceId?: boolean;
    question?: boolean;
    answer?: boolean;
    sortOrder?: boolean;
};
export type ServiceFAQOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "serviceId" | "question" | "answer" | "sortOrder", ExtArgs["result"]["serviceFAQ"]>;
export type ServiceFAQInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    service?: boolean | Prisma.ServiceDefaultArgs<ExtArgs>;
};
export type ServiceFAQIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    service?: boolean | Prisma.ServiceDefaultArgs<ExtArgs>;
};
export type ServiceFAQIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    service?: boolean | Prisma.ServiceDefaultArgs<ExtArgs>;
};
export type $ServiceFAQPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "ServiceFAQ";
    objects: {
        service: Prisma.$ServicePayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        serviceId: string;
        question: string;
        answer: string;
        sortOrder: number;
    }, ExtArgs["result"]["serviceFAQ"]>;
    composites: {};
};
export type ServiceFAQGetPayload<S extends boolean | null | undefined | ServiceFAQDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$ServiceFAQPayload, S>;
export type ServiceFAQCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<ServiceFAQFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: ServiceFAQCountAggregateInputType | true;
};
export interface ServiceFAQDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['ServiceFAQ'];
        meta: {
            name: 'ServiceFAQ';
        };
    };
    /**
     * Find zero or one ServiceFAQ that matches the filter.
     * @param {ServiceFAQFindUniqueArgs} args - Arguments to find a ServiceFAQ
     * @example
     * // Get one ServiceFAQ
     * const serviceFAQ = await prisma.serviceFAQ.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ServiceFAQFindUniqueArgs>(args: Prisma.SelectSubset<T, ServiceFAQFindUniqueArgs<ExtArgs>>): Prisma.Prisma__ServiceFAQClient<runtime.Types.Result.GetResult<Prisma.$ServiceFAQPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find one ServiceFAQ that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ServiceFAQFindUniqueOrThrowArgs} args - Arguments to find a ServiceFAQ
     * @example
     * // Get one ServiceFAQ
     * const serviceFAQ = await prisma.serviceFAQ.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ServiceFAQFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, ServiceFAQFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__ServiceFAQClient<runtime.Types.Result.GetResult<Prisma.$ServiceFAQPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first ServiceFAQ that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServiceFAQFindFirstArgs} args - Arguments to find a ServiceFAQ
     * @example
     * // Get one ServiceFAQ
     * const serviceFAQ = await prisma.serviceFAQ.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ServiceFAQFindFirstArgs>(args?: Prisma.SelectSubset<T, ServiceFAQFindFirstArgs<ExtArgs>>): Prisma.Prisma__ServiceFAQClient<runtime.Types.Result.GetResult<Prisma.$ServiceFAQPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first ServiceFAQ that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServiceFAQFindFirstOrThrowArgs} args - Arguments to find a ServiceFAQ
     * @example
     * // Get one ServiceFAQ
     * const serviceFAQ = await prisma.serviceFAQ.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ServiceFAQFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, ServiceFAQFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__ServiceFAQClient<runtime.Types.Result.GetResult<Prisma.$ServiceFAQPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find zero or more ServiceFAQS that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServiceFAQFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ServiceFAQS
     * const serviceFAQS = await prisma.serviceFAQ.findMany()
     *
     * // Get first 10 ServiceFAQS
     * const serviceFAQS = await prisma.serviceFAQ.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const serviceFAQWithIdOnly = await prisma.serviceFAQ.findMany({ select: { id: true } })
     *
     */
    findMany<T extends ServiceFAQFindManyArgs>(args?: Prisma.SelectSubset<T, ServiceFAQFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ServiceFAQPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    /**
     * Create a ServiceFAQ.
     * @param {ServiceFAQCreateArgs} args - Arguments to create a ServiceFAQ.
     * @example
     * // Create one ServiceFAQ
     * const ServiceFAQ = await prisma.serviceFAQ.create({
     *   data: {
     *     // ... data to create a ServiceFAQ
     *   }
     * })
     *
     */
    create<T extends ServiceFAQCreateArgs>(args: Prisma.SelectSubset<T, ServiceFAQCreateArgs<ExtArgs>>): Prisma.Prisma__ServiceFAQClient<runtime.Types.Result.GetResult<Prisma.$ServiceFAQPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Create many ServiceFAQS.
     * @param {ServiceFAQCreateManyArgs} args - Arguments to create many ServiceFAQS.
     * @example
     * // Create many ServiceFAQS
     * const serviceFAQ = await prisma.serviceFAQ.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends ServiceFAQCreateManyArgs>(args?: Prisma.SelectSubset<T, ServiceFAQCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Create many ServiceFAQS and returns the data saved in the database.
     * @param {ServiceFAQCreateManyAndReturnArgs} args - Arguments to create many ServiceFAQS.
     * @example
     * // Create many ServiceFAQS
     * const serviceFAQ = await prisma.serviceFAQ.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many ServiceFAQS and only return the `id`
     * const serviceFAQWithIdOnly = await prisma.serviceFAQ.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends ServiceFAQCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, ServiceFAQCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ServiceFAQPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    /**
     * Delete a ServiceFAQ.
     * @param {ServiceFAQDeleteArgs} args - Arguments to delete one ServiceFAQ.
     * @example
     * // Delete one ServiceFAQ
     * const ServiceFAQ = await prisma.serviceFAQ.delete({
     *   where: {
     *     // ... filter to delete one ServiceFAQ
     *   }
     * })
     *
     */
    delete<T extends ServiceFAQDeleteArgs>(args: Prisma.SelectSubset<T, ServiceFAQDeleteArgs<ExtArgs>>): Prisma.Prisma__ServiceFAQClient<runtime.Types.Result.GetResult<Prisma.$ServiceFAQPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Update one ServiceFAQ.
     * @param {ServiceFAQUpdateArgs} args - Arguments to update one ServiceFAQ.
     * @example
     * // Update one ServiceFAQ
     * const serviceFAQ = await prisma.serviceFAQ.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends ServiceFAQUpdateArgs>(args: Prisma.SelectSubset<T, ServiceFAQUpdateArgs<ExtArgs>>): Prisma.Prisma__ServiceFAQClient<runtime.Types.Result.GetResult<Prisma.$ServiceFAQPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Delete zero or more ServiceFAQS.
     * @param {ServiceFAQDeleteManyArgs} args - Arguments to filter ServiceFAQS to delete.
     * @example
     * // Delete a few ServiceFAQS
     * const { count } = await prisma.serviceFAQ.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends ServiceFAQDeleteManyArgs>(args?: Prisma.SelectSubset<T, ServiceFAQDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more ServiceFAQS.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServiceFAQUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ServiceFAQS
     * const serviceFAQ = await prisma.serviceFAQ.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends ServiceFAQUpdateManyArgs>(args: Prisma.SelectSubset<T, ServiceFAQUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more ServiceFAQS and returns the data updated in the database.
     * @param {ServiceFAQUpdateManyAndReturnArgs} args - Arguments to update many ServiceFAQS.
     * @example
     * // Update many ServiceFAQS
     * const serviceFAQ = await prisma.serviceFAQ.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more ServiceFAQS and only return the `id`
     * const serviceFAQWithIdOnly = await prisma.serviceFAQ.updateManyAndReturn({
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
    updateManyAndReturn<T extends ServiceFAQUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, ServiceFAQUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ServiceFAQPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    /**
     * Create or update one ServiceFAQ.
     * @param {ServiceFAQUpsertArgs} args - Arguments to update or create a ServiceFAQ.
     * @example
     * // Update or create a ServiceFAQ
     * const serviceFAQ = await prisma.serviceFAQ.upsert({
     *   create: {
     *     // ... data to create a ServiceFAQ
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ServiceFAQ we want to update
     *   }
     * })
     */
    upsert<T extends ServiceFAQUpsertArgs>(args: Prisma.SelectSubset<T, ServiceFAQUpsertArgs<ExtArgs>>): Prisma.Prisma__ServiceFAQClient<runtime.Types.Result.GetResult<Prisma.$ServiceFAQPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Count the number of ServiceFAQS.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServiceFAQCountArgs} args - Arguments to filter ServiceFAQS to count.
     * @example
     * // Count the number of ServiceFAQS
     * const count = await prisma.serviceFAQ.count({
     *   where: {
     *     // ... the filter for the ServiceFAQS we want to count
     *   }
     * })
    **/
    count<T extends ServiceFAQCountArgs>(args?: Prisma.Subset<T, ServiceFAQCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], ServiceFAQCountAggregateOutputType> : number>;
    /**
     * Allows you to perform aggregations operations on a ServiceFAQ.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServiceFAQAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ServiceFAQAggregateArgs>(args: Prisma.Subset<T, ServiceFAQAggregateArgs>): Prisma.PrismaPromise<GetServiceFAQAggregateType<T>>;
    /**
     * Group by ServiceFAQ.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServiceFAQGroupByArgs} args - Group by arguments.
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
    groupBy<T extends ServiceFAQGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: ServiceFAQGroupByArgs['orderBy'];
    } : {
        orderBy?: ServiceFAQGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, ServiceFAQGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetServiceFAQGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the ServiceFAQ model
     */
    readonly fields: ServiceFAQFieldRefs;
}
/**
 * The delegate class that acts as a "Promise-like" for ServiceFAQ.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export interface Prisma__ServiceFAQClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    service<T extends Prisma.ServiceDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.ServiceDefaultArgs<ExtArgs>>): Prisma.Prisma__ServiceClient<runtime.Types.Result.GetResult<Prisma.$ServicePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
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
 * Fields of the ServiceFAQ model
 */
export interface ServiceFAQFieldRefs {
    readonly id: Prisma.FieldRef<"ServiceFAQ", 'String'>;
    readonly serviceId: Prisma.FieldRef<"ServiceFAQ", 'String'>;
    readonly question: Prisma.FieldRef<"ServiceFAQ", 'String'>;
    readonly answer: Prisma.FieldRef<"ServiceFAQ", 'String'>;
    readonly sortOrder: Prisma.FieldRef<"ServiceFAQ", 'Int'>;
}
/**
 * ServiceFAQ findUnique
 */
export type ServiceFAQFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServiceFAQ
     */
    select?: Prisma.ServiceFAQSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ServiceFAQ
     */
    omit?: Prisma.ServiceFAQOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ServiceFAQInclude<ExtArgs> | null;
    /**
     * Filter, which ServiceFAQ to fetch.
     */
    where: Prisma.ServiceFAQWhereUniqueInput;
};
/**
 * ServiceFAQ findUniqueOrThrow
 */
export type ServiceFAQFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServiceFAQ
     */
    select?: Prisma.ServiceFAQSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ServiceFAQ
     */
    omit?: Prisma.ServiceFAQOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ServiceFAQInclude<ExtArgs> | null;
    /**
     * Filter, which ServiceFAQ to fetch.
     */
    where: Prisma.ServiceFAQWhereUniqueInput;
};
/**
 * ServiceFAQ findFirst
 */
export type ServiceFAQFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServiceFAQ
     */
    select?: Prisma.ServiceFAQSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ServiceFAQ
     */
    omit?: Prisma.ServiceFAQOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ServiceFAQInclude<ExtArgs> | null;
    /**
     * Filter, which ServiceFAQ to fetch.
     */
    where?: Prisma.ServiceFAQWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of ServiceFAQS to fetch.
     */
    orderBy?: Prisma.ServiceFAQOrderByWithRelationInput | Prisma.ServiceFAQOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for ServiceFAQS.
     */
    cursor?: Prisma.ServiceFAQWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` ServiceFAQS from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` ServiceFAQS.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of ServiceFAQS.
     */
    distinct?: Prisma.ServiceFAQScalarFieldEnum | Prisma.ServiceFAQScalarFieldEnum[];
};
/**
 * ServiceFAQ findFirstOrThrow
 */
export type ServiceFAQFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServiceFAQ
     */
    select?: Prisma.ServiceFAQSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ServiceFAQ
     */
    omit?: Prisma.ServiceFAQOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ServiceFAQInclude<ExtArgs> | null;
    /**
     * Filter, which ServiceFAQ to fetch.
     */
    where?: Prisma.ServiceFAQWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of ServiceFAQS to fetch.
     */
    orderBy?: Prisma.ServiceFAQOrderByWithRelationInput | Prisma.ServiceFAQOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for ServiceFAQS.
     */
    cursor?: Prisma.ServiceFAQWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` ServiceFAQS from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` ServiceFAQS.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of ServiceFAQS.
     */
    distinct?: Prisma.ServiceFAQScalarFieldEnum | Prisma.ServiceFAQScalarFieldEnum[];
};
/**
 * ServiceFAQ findMany
 */
export type ServiceFAQFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServiceFAQ
     */
    select?: Prisma.ServiceFAQSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ServiceFAQ
     */
    omit?: Prisma.ServiceFAQOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ServiceFAQInclude<ExtArgs> | null;
    /**
     * Filter, which ServiceFAQS to fetch.
     */
    where?: Prisma.ServiceFAQWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of ServiceFAQS to fetch.
     */
    orderBy?: Prisma.ServiceFAQOrderByWithRelationInput | Prisma.ServiceFAQOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing ServiceFAQS.
     */
    cursor?: Prisma.ServiceFAQWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` ServiceFAQS from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` ServiceFAQS.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of ServiceFAQS.
     */
    distinct?: Prisma.ServiceFAQScalarFieldEnum | Prisma.ServiceFAQScalarFieldEnum[];
};
/**
 * ServiceFAQ create
 */
export type ServiceFAQCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServiceFAQ
     */
    select?: Prisma.ServiceFAQSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ServiceFAQ
     */
    omit?: Prisma.ServiceFAQOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ServiceFAQInclude<ExtArgs> | null;
    /**
     * The data needed to create a ServiceFAQ.
     */
    data: Prisma.XOR<Prisma.ServiceFAQCreateInput, Prisma.ServiceFAQUncheckedCreateInput>;
};
/**
 * ServiceFAQ createMany
 */
export type ServiceFAQCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to create many ServiceFAQS.
     */
    data: Prisma.ServiceFAQCreateManyInput | Prisma.ServiceFAQCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * ServiceFAQ createManyAndReturn
 */
export type ServiceFAQCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServiceFAQ
     */
    select?: Prisma.ServiceFAQSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the ServiceFAQ
     */
    omit?: Prisma.ServiceFAQOmit<ExtArgs> | null;
    /**
     * The data used to create many ServiceFAQS.
     */
    data: Prisma.ServiceFAQCreateManyInput | Prisma.ServiceFAQCreateManyInput[];
    skipDuplicates?: boolean;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ServiceFAQIncludeCreateManyAndReturn<ExtArgs> | null;
};
/**
 * ServiceFAQ update
 */
export type ServiceFAQUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServiceFAQ
     */
    select?: Prisma.ServiceFAQSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ServiceFAQ
     */
    omit?: Prisma.ServiceFAQOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ServiceFAQInclude<ExtArgs> | null;
    /**
     * The data needed to update a ServiceFAQ.
     */
    data: Prisma.XOR<Prisma.ServiceFAQUpdateInput, Prisma.ServiceFAQUncheckedUpdateInput>;
    /**
     * Choose, which ServiceFAQ to update.
     */
    where: Prisma.ServiceFAQWhereUniqueInput;
};
/**
 * ServiceFAQ updateMany
 */
export type ServiceFAQUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to update ServiceFAQS.
     */
    data: Prisma.XOR<Prisma.ServiceFAQUpdateManyMutationInput, Prisma.ServiceFAQUncheckedUpdateManyInput>;
    /**
     * Filter which ServiceFAQS to update
     */
    where?: Prisma.ServiceFAQWhereInput;
    /**
     * Limit how many ServiceFAQS to update.
     */
    limit?: number;
};
/**
 * ServiceFAQ updateManyAndReturn
 */
export type ServiceFAQUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServiceFAQ
     */
    select?: Prisma.ServiceFAQSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the ServiceFAQ
     */
    omit?: Prisma.ServiceFAQOmit<ExtArgs> | null;
    /**
     * The data used to update ServiceFAQS.
     */
    data: Prisma.XOR<Prisma.ServiceFAQUpdateManyMutationInput, Prisma.ServiceFAQUncheckedUpdateManyInput>;
    /**
     * Filter which ServiceFAQS to update
     */
    where?: Prisma.ServiceFAQWhereInput;
    /**
     * Limit how many ServiceFAQS to update.
     */
    limit?: number;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ServiceFAQIncludeUpdateManyAndReturn<ExtArgs> | null;
};
/**
 * ServiceFAQ upsert
 */
export type ServiceFAQUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServiceFAQ
     */
    select?: Prisma.ServiceFAQSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ServiceFAQ
     */
    omit?: Prisma.ServiceFAQOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ServiceFAQInclude<ExtArgs> | null;
    /**
     * The filter to search for the ServiceFAQ to update in case it exists.
     */
    where: Prisma.ServiceFAQWhereUniqueInput;
    /**
     * In case the ServiceFAQ found by the `where` argument doesn't exist, create a new ServiceFAQ with this data.
     */
    create: Prisma.XOR<Prisma.ServiceFAQCreateInput, Prisma.ServiceFAQUncheckedCreateInput>;
    /**
     * In case the ServiceFAQ was found with the provided `where` argument, update it with this data.
     */
    update: Prisma.XOR<Prisma.ServiceFAQUpdateInput, Prisma.ServiceFAQUncheckedUpdateInput>;
};
/**
 * ServiceFAQ delete
 */
export type ServiceFAQDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServiceFAQ
     */
    select?: Prisma.ServiceFAQSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ServiceFAQ
     */
    omit?: Prisma.ServiceFAQOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ServiceFAQInclude<ExtArgs> | null;
    /**
     * Filter which ServiceFAQ to delete.
     */
    where: Prisma.ServiceFAQWhereUniqueInput;
};
/**
 * ServiceFAQ deleteMany
 */
export type ServiceFAQDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which ServiceFAQS to delete
     */
    where?: Prisma.ServiceFAQWhereInput;
    /**
     * Limit how many ServiceFAQS to delete.
     */
    limit?: number;
};
/**
 * ServiceFAQ without action
 */
export type ServiceFAQDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServiceFAQ
     */
    select?: Prisma.ServiceFAQSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ServiceFAQ
     */
    omit?: Prisma.ServiceFAQOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ServiceFAQInclude<ExtArgs> | null;
};
