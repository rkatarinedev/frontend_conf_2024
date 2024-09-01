import {ICatalogWebV1ServiceGetProductListParams} from "./types";
import {useInfiniteQuery} from "@tanstack/react-query";
import {CatalogCatalogWebV1Swagger} from "@/src/.api-client/catalog/catalog_web_v1.swagger/data-contracts";
import {getProductsQueryOptions} from "@/src/queries/products/getProductsQueryOptions";

function transformMetaValuesToNumber(
    meta?: CatalogCatalogWebV1Swagger.CatalogWebV1GetProductListResponse['meta']
) {
    return {
        currentPage: Number(meta?.currentPage) || 0,
        nextPage: Number(meta?.nextPage) || 0,
        previousPage: Number(meta?.previousPage) || 0,
        totalPages: Number(meta?.totalPages) || 0,
        perPage: Number(meta?.perPage) || 0,
        totalCount: Number(meta?.totalCount) || 0,
    }
}

export const useProductsInfiniteQuery = (productsBody: ICatalogWebV1ServiceGetProductListParams) => {
    return useInfiniteQuery({
        ...getProductsQueryOptions(productsBody),
        select: (data) => {
            const newPages = data.pages.map((page) => ({
                ...page,
                meta: transformMetaValuesToNumber(page.meta),
            }));
            return {
                ...data,
                pages: newPages,
            }
        }
    })
}