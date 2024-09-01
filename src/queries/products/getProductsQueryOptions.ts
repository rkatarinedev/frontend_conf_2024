import {createProductsQueryKey, ProductsQueryKey} from "./createProductsQueryKey";
import {
    ICatalogWebV1ServiceGetProductListParams,
    ICatalogWebV1ServiceGetProductListResponse
} from "./types";
import {apiClient} from "@/src/app/services/axios/apiClient";
import {FetchInfiniteQueryOptions, InfiniteData, QueryFunction} from "@tanstack/react-query";

type ProductInfiniteQueryOptions = FetchInfiniteQueryOptions<
    ICatalogWebV1ServiceGetProductListResponse,
    Error,
    InfiniteData<ICatalogWebV1ServiceGetProductListResponse, number>,
    ProductsQueryKey
>;

export function getProductsQueryOptions(rawParams: ICatalogWebV1ServiceGetProductListParams): ProductInfiniteQueryOptions {

    return {
        queryKey: createProductsQueryKey(rawParams),
        queryFn: ({
                      queryKey: [
                          , , params
                      ]
                  }) => apiClient.catalog.catalogWebV1Swagger.catalogWebV1ServiceGetProductList(params),
        initialPageParam: rawParams.page,
    };
}