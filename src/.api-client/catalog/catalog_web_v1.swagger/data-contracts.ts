/*
 * ---------------------------------------------------------------
 * This file was generated via @nstmrt/frontend-cli v1.6.2	#
 * Source: https://gitlab.sbmt.io/paas/misc/frontend-cli.git	#
 * ---------------------------------------------------------------
 */
/* tslint:disable */
/* eslint-disable */
export namespace CatalogCatalogWebV1Swagger {
  export interface RootCategoriesOption {
    key?: string
    permalink?: string
    /** @format double */
    value?: number
    /** @format double */
    count?: number
    active?: boolean
    name?: string
  }
  export interface CatalogApiV3Active {
    title?: string
    titleShort?: string
    url?: string
    tooltip?: string
    buttonText?: string
    imageUrl?: string
    positionTop?: boolean
  }
  export interface CatalogApiV3AdsMetaSearchSKUObj {
    impId?: string
    impUrls?: string[]
    trackClickUrls?: string[]
    trackImpressionUrls?: string[]
    clickUrl?: string
    clickUrlType?: CatalogApiV3URLType
    metadata?: Record<string, string>
  }
  export interface CatalogApiV3AttributeOption {
    active?: CatalogApiV3Active
    inactive?: CatalogApiV3Inactive
  }
  export interface CatalogApiV3Brand {
    /** @format double */
    id?: number
    name?: string
    permalink?: string
  }
  export interface CatalogApiV3Breadcrumb {
    /** @format double */
    id?: number
    name?: string
    /** @format double */
    position?: number
    permalink?: string
    isLeaf?: boolean
  }
  export interface CatalogApiV3Facet {
    key?: string
    name?: string
    type?: string
    options?: CatalogApiV3FacetOption[]
  }
  export interface CatalogApiV3FacetOption {
    name?: string
    /** @format double */
    value?: number
    /** @format double */
    count?: number
    permalink?: string
    active?: boolean
  }
  export interface CatalogApiV3Group {
    /** @format int64 */
    id?: string
    /** @format int32 */
    minItems?: number
    /** @format int32 */
    maxItems?: number
    title?: string
    items?: CatalogApiV3GroupItem[]
    active?: boolean
  }
  export interface CatalogApiV3GroupItem {
    name?: string
    image?: CatalogApiV3Image
    /** @format int64 */
    sku?: string
    selected?: boolean
    /** @format double */
    price?: number
    active?: boolean
  }
  export interface CatalogApiV3Image {
    miniUrl?: string
    smallUrl?: string
    productUrl?: string
    previewUrl?: string
    originalUrl?: string
  }
  export interface CatalogApiV3Inactive {
    title?: string
    titleShort?: string
    url?: string
    tooltip?: string
    buttonText?: string
    imageUrl?: string
    positionTop?: boolean
  }
  export interface CatalogApiV3Manufacturer {
    /** @format double */
    id?: number
    name?: string
  }
  export interface CatalogApiV3ManufacturingCountry {
    id?: string
    name?: string
    permalink?: string
  }
  export interface CatalogApiV3Meta {
    /** @format int64 */
    currentPage?: string
    /** @format int64 */
    nextPage?: string
    /** @format int64 */
    previousPage?: string
    /** @format int64 */
    totalPages?: string
    /** @format int64 */
    perPage?: string
    /** @format int64 */
    totalCount?: string
  }
  export interface CatalogApiV3Offer {
    /** @format double */
    id?: number
    active?: boolean
    uuid?: string
    name?: string
    /** @format double */
    price?: number
    /** @format double */
    discount?: number
    discounted?: boolean
    /** @format double */
    instamartPrice?: number
    /** @format double */
    itemsPerPack?: number
    /** @format double */
    productId?: number
    /** @format double */
    retailerId?: number
    /** @format double */
    storeId?: number
    retailerSku?: string
    rsku?: string
    /** @format double */
    stock?: number
    /** @format double */
    stockRate?: number
    /** @format double */
    maxStockRate?: number
    discountEndsAt?: string
    priceType?: string
    /** @format double */
    unitPrice?: number
    /** @format double */
    originalUnitPrice?: number
    /** @format double */
    gramsPerUnit?: number
    vatInfo?: CatalogApiV3VatInfo
    bmplInfo?: Record<string, number>
    /** @format float */
    maxPerOrder?: number
    vertical?: string
    options?: CatalogApiV3Group[]
  }
  export interface CatalogApiV3Product {
    id?: string
    sku?: string
    retailerSku?: string
    available?: boolean
    /** @format double */
    legacyOfferId?: number
    name?: string
    /** @format double */
    price?: number
    /** @format double */
    originalPrice?: number
    /** @format double */
    discount?: number
    humanVolume?: string
    /** @format double */
    volume?: number
    volumeType?: string
    /** @format double */
    itemsPerPack?: number
    discountEndsAt?: string
    priceType?: string
    /** @format double */
    gramsPerUnit?: number
    /** @format double */
    unitPrice?: number
    /** @format double */
    originalUnitPrice?: number
    promoBadgeIds?: number[]
    /** @format float */
    score?: number
    labels?: string[]
    imageUrls?: string[]
    requirements?: CatalogApiV3Requirement[]
    slug?: string
    /** @format int32 */
    maxSelectQuantity?: number
    canonicalUrl?: string
    vatInfo?: CatalogApiV3VatInfo
    bmplInfo?: Record<string, number>
    /** @format float */
    maxPerOrder?: number
    adsMeta?: CatalogApiV3AdsMetaSearchSKUObj
  }
  export interface CatalogApiV3ProductListSort {
    key?: string
    name?: string
    order?: string
    active?: boolean
  }
  export interface CatalogApiV3ProductTaxon {
    /** @format double */
    id?: number
    name?: string
    permalink?: string
    description?: string
    isLeaf?: boolean
    isAlcohol?: boolean
  }
  export interface CatalogApiV3ProductWithProperties {
    /** @format double */
    id?: number
    /** @format int64 */
    sku?: string
    active?: boolean
    name?: string
    humanVolume?: string
    /** @format double */
    volume?: number
    volumeType?: string
    /** @format double */
    itemsPerPack?: number
    promoBadgeIds?: number[]
    /** @format float */
    score?: number
    labels?: string[]
    images?: CatalogApiV3Image[]
    description?: string
    scoreDetails?: CatalogApiV3ScoreDetail
    requirements?: CatalogApiV3Requirement[]
    relatedProducts?: string[]
    productTaxons?: CatalogApiV3ProductTaxon[]
    brand?: CatalogApiV3Brand
    manufacturer?: CatalogApiV3Manufacturer
    manufacturingCountry?: CatalogApiV3ManufacturingCountry
    offer?: CatalogApiV3Offer
    isAlcohol?: boolean
    permalink?: string
    canonicalPermalink?: string
    licenseInfo?: string
  }
  export interface CatalogApiV3PromoBadge {
    /** @format double */
    id?: number
    type?: string
    attributes?: CatalogApiV3PromoBadgeAttribute
  }
  export interface CatalogApiV3PromoBadgeAttribute {
    name?: string
    options?: CatalogApiV3AttributeOption
  }
  export interface CatalogApiV3Property {
    /** @format double */
    id?: number
    name?: string
    presentation?: string
    value?: string
  }
  export interface CatalogApiV3Requirement {
    type?: string
    title?: string
  }
  export interface CatalogApiV3RootCategories {
    key?: string
    name?: string
    type?: string
    options?: RootCategoriesOption[]
  }
  export interface CatalogApiV3ScoreDetail {
    /** @format double */
    feedbackCount?: number
    feedbackSource?: string
    /** @format double */
    commentCount?: number
  }
  export interface CatalogApiV3SearchFeature {
    name?: string
    context?: Record<string, string>
  }

  /** @default "EXTERNAL" */
  export enum CatalogApiV3URLType {
    EXTERNAL = 'EXTERNAL',
    PRODUCT_BY_OFFER = 'PRODUCT_BY_OFFER',
    PROMOTION = 'PROMOTION',
  }
  export interface CatalogApiV3VatInfo {
    /** @format int32 */
    vatRate?: number
    /** @format double */
    priceWithoutVat?: number
    /** @format double */
    unitPriceWithoutVat?: number
    /** @format double */
    vatAmount?: number
    /** @format double */
    unitVatAmount?: number
  }
  export interface CatalogWebV1AdsIdentity {
    referer?: string
    userAgent?: string
    adsPromoIdentity?: CatalogWebV1AdsPromoIdentity
  }
  export interface CatalogWebV1AdsPromoIdentity {
    siteUid?: string
    placementUid?: string
    pid?: string
  }
  export interface CatalogWebV1Filter {
    key?: string
    values?: string[]
  }
  export interface CatalogWebV1GetProductListRequest {
    storeId?: string
    categoryPermalink?: string
    tenantId?: string
    q?: string
    /** @format int64 */
    page?: string
    /** @format int64 */
    perPage?: string
    sort?: string
    filter?: CatalogWebV1Filter[]
    privateFilters?: Record<string, boolean>
    features?: Record<string, boolean>
    adsIdentity?: CatalogWebV1AdsIdentity
  }
  export interface CatalogWebV1GetProductListResponse {
    products?: CatalogApiV3Product[]
    facets?: CatalogApiV3Facet[]
    meta?: CatalogApiV3Meta
    sort?: CatalogApiV3ProductListSort[]
    promoBadges?: CatalogApiV3PromoBadge[]
    rootCategories?: CatalogApiV3RootCategories
    privateFilters?: Record<string, boolean>
    appliedFeatures?: CatalogApiV3SearchFeature[]
    searchQueryUuid?: string
  }
  export interface CatalogWebV1GetSeoProductResponse {
    product?: CatalogApiV3ProductWithProperties
    promoBadges?: CatalogApiV3PromoBadge[]
    productProperties?: CatalogApiV3Property[]
    productTaxons?: CatalogApiV3Breadcrumb[]
  }
  export interface ProtobufAny {
    '@type'?: string
    [key: string]: any
  }
  export interface RpcStatus {
    /** @format int32 */
    code?: number
    message?: string
    details?: ProtobufAny[]
  }
}
