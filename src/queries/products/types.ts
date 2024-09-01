import {apiClient} from "@/src/app/services/axios/apiClient";

type ICatalogWebV1ServiceGetProductListFn = typeof apiClient.catalog.catalogWebV1Swagger.catalogWebV1ServiceGetProductList
export type ICatalogWebV1ServiceGetProductListParams = Exclude<Parameters<ICatalogWebV1ServiceGetProductListFn>[0], 'undefined'>
export type ICatalogWebV1ServiceGetProductListResponse = ReturnType<ICatalogWebV1ServiceGetProductListFn>