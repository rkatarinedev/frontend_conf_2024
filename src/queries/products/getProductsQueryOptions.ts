import {createProductsQueryKey} from "./createProductsQueryKey";
import {
    ICatalogWebV1ServiceGetProductListParams,
} from "./types";
import {apiClient} from "@/src/app/services/axios/apiClient";
import {infiniteQueryOptions} from "@tanstack/react-query";

export function getProductsQueryOptions(productBody: ICatalogWebV1ServiceGetProductListParams) {
    return infiniteQueryOptions({
        queryKey: createProductsQueryKey(productBody),
        queryFn: ({
                      queryKey: [
                          , , params
                      ]
                  }) => apiClient.catalog.catalogWebV1Swagger.catalogWebV1ServiceGetProductList(params),
        initialPageParam: productBody.page,
        getNextPageParam: (lastPage) => {
            const {meta} = lastPage;

            return meta?.nextPage ?? undefined;
        },
    });
}