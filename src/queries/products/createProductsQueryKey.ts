import {ICatalogWebV1ServiceGetProductListParams} from "@/src/queries/products/types";

export type ProductsQueryKey = [
    'infiniteCollection',
    'products',
    ICatalogWebV1ServiceGetProductListParams
]

export const createProductsQueryKey = (params: ICatalogWebV1ServiceGetProductListParams): ProductsQueryKey => {
    return [
        'infiniteCollection',
        'products',
        params
    ]
}