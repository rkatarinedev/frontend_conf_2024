/*
 * ---------------------------------------------------------------
 * This file was generated via @nstmrt/frontend-cli v1.6.2	#
 * Source: https://gitlab.sbmt.io/paas/misc/frontend-cli.git	#
 * ---------------------------------------------------------------
 */
/* tslint:disable */
/* eslint-disable */
export namespace CatalogSuggestsV1Swagger {
  export interface CatalogApiV2AdsMetaSearchSKUObj {
    impId?: string
    impUrls?: string[]
    clickUrl?: string
    clickUrlType?: CatalogApiV2URLType
    metadata?: Record<string, string>
  }
  export interface CatalogApiV2Image {
    miniUrl?: string
    smallUrl?: string
    productUrl?: string
    previewUrl?: string
    originalUrl?: string
  }
  export interface CatalogApiV2Product {
    /** @format double */
    id?: number
    /** @format int64 */
    sku?: string
    active?: boolean
    retailerSku?: string
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
    scoreDetails?: CatalogApiV2ProductScoreDetail
    labels?: string[]
    images?: CatalogApiV2Image[]
    requirements?: CatalogApiV2Requirements[]
    withOptions?: boolean
    /** @format int32 */
    maxPerOrder?: number
    /** @format double */
    stock?: number
    markingSystems?: string[]
    retailerPrice?: string[]
    eans?: string[]
    shippingCategorySlug?: string
    retailerId?: string
    adsMeta?: CatalogApiV2AdsMetaSearchSKUObj
    /** @format int32 */
    retailerPriceStatus?: number
    clientAction?: string
  }
  export interface CatalogApiV2ProductScoreDetail {
    /** @format double */
    commentCount?: number
    /** @format double */
    feedbackCount?: number
  }
  export interface CatalogApiV2Requirements {
    type?: string
    title?: string
  }

  /** @default "EXTERNAL" */
  export enum CatalogApiV2URLType {
    EXTERNAL = 'EXTERNAL',
    PRODUCT_BY_OFFER = 'PRODUCT_BY_OFFER',
    PROMOTION = 'PROMOTION',
  }
  export interface CatalogApiV3AdsMetaSearchSKUObj {
    impId?: string
    impUrls?: string[]
    clickUrl?: string
    clickUrlType?: CatalogApiV3URLType
    metadata?: Record<string, string>
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
    withOptions?: boolean
  }
  export interface CatalogApiV3Requirement {
    type?: string
    title?: string
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

  /**
   * `Any` contains an arbitrary serialized protocol buffer message along with a
   * URL that describes the type of the serialized message.
   *
   * Protobuf library provides support to pack/unpack Any values in the form
   * of utility functions or additional generated methods of the Any type.
   *
   * Example 1: Pack and unpack a message in C++.
   *
   *     Foo foo = ...;
   *     Any any;
   *     any.PackFrom(foo);
   *     ...
   *     if (any.UnpackTo(&foo)) {
   *       ...
   *     }
   *
   * Example 2: Pack and unpack a message in Java.
   *
   *     Foo foo = ...;
   *     Any any = Any.pack(foo);
   *     ...
   *     if (any.is(Foo.class)) {
   *       foo = any.unpack(Foo.class);
   *     }
   *
   * Example 3: Pack and unpack a message in Python.
   *
   *     foo = Foo(...)
   *     any = Any()
   *     any.Pack(foo)
   *     ...
   *     if any.Is(Foo.DESCRIPTOR):
   *       any.Unpack(foo)
   *       ...
   *
   * Example 4: Pack and unpack a message in Go
   *
   *      foo := &pb.Foo{...}
   *      any, err := anypb.New(foo)
   *      if err != nil {
   *        ...
   *      }
   *      ...
   *      foo := &pb.Foo{}
   *      if err := any.UnmarshalTo(foo); err != nil {
   *        ...
   *      }
   *
   * The pack methods provided by protobuf library will by default use
   * 'type.googleapis.com/full.type.name' as the type URL and the unpack
   * methods only use the fully qualified type name after the last '/'
   * in the type URL, for example "foo.bar.com/x/y.z" will yield type
   * name "y.z".
   *
   *
   * JSON
   *
   * The JSON representation of an `Any` value uses the regular
   * representation of the deserialized, embedded message, with an
   * additional field `@type` which contains the type URL. Example:
   *
   *     package google.profile;
   *     message Person {
   *       string first_name = 1;
   *       string last_name = 2;
   *     }
   *
   *     {
   *       "@type": "type.googleapis.com/google.profile.Person",
   *       "firstName": <string>,
   *       "lastName": <string>
   *     }
   *
   * If the embedded message type is well-known and has a custom JSON
   * representation, that representation will be embedded adding a field
   * `value` which holds the custom JSON in addition to the `@type`
   * field. Example (for message [google.protobuf.Duration][]):
   *
   *     {
   *       "@type": "type.googleapis.com/google.protobuf.Duration",
   *       "value": "1.212s"
   *     }
   */
  export interface ProtobufAny {
    /**
     * A URL/resource name that uniquely identifies the type of the serialized
     * protocol buffer message. This string must contain at least
     * one "/" character. The last segment of the URL's path must represent
     * the fully qualified name of the type (as in
     * `path/google.protobuf.Duration`). The name should be in a canonical form
     * (e.g., leading "." is not accepted).
     *
     * In practice, teams usually precompile into the binary all types that they
     * expect it to use in the context of Any. However, for URLs which use the
     * scheme `http`, `https`, or no scheme, one can optionally set up a type
     * server that maps type URLs to message definitions as follows:
     *
     * * If no scheme is provided, `https` is assumed.
     * * An HTTP GET on the URL must yield a [google.protobuf.Type][]
     *   value in binary format, or produce an error.
     * * Applications are allowed to cache lookup results based on the
     *   URL, or have them precompiled into a binary to avoid any
     *   lookup. Therefore, binary compatibility needs to be preserved
     *   on changes to types. (Use versioned type names to manage
     *   breaking changes.)
     *
     * Note: this functionality is not currently available in the official
     * protobuf release, and it is not used for type URLs beginning with
     * type.googleapis.com.
     *
     * Schemes other than `http`, `https` (or the empty scheme) might be
     * used with implementation specific semantics.
     */
    '@type'?: string
    [key: string]: any
  }
  export interface RpcStatus {
    /** @format int32 */
    code?: number
    message?: string
    details?: ProtobufAny[]
  }
  export interface SuggestsV1BrandBlock {
    completion?: SuggestsV1BrandCompletion[]
  }
  export interface SuggestsV1BrandCompletion {
    /** @format int32 */
    id?: number
    name?: string
    slug?: string
  }
  export interface SuggestsV1CategoryBlock {
    completion?: SuggestsV1CategoryCompletion[]
  }
  export interface SuggestsV1CategoryCompletion {
    /** @format int64 */
    id?: string
    name?: string
    images?: CatalogApiV2Image[]
    requirements?: CatalogApiV2Requirements[]
    slug?: string
  }
  export interface SuggestsV1CategorySuggest {
    /** @format int64 */
    id?: string
    name?: string
    image?: string
    slug?: string
    requirements?: CatalogApiV2Requirements[]
  }
  export interface SuggestsV1CompletionBlock {
    type?: SuggestsV1CompletionType
    text?: SuggestsV1TextBlock
    category?: SuggestsV1CategoryBlock
    brand?: SuggestsV1BrandBlock
    product?: SuggestsV1ProductBlock
  }

  /** @default "COMPLETION_TYPE_INVALID" */
  export enum SuggestsV1CompletionType {
    COMPLETION_TYPE_INVALID = 'COMPLETION_TYPE_INVALID',
    COMPLETION_TYPE_TEXT = 'COMPLETION_TYPE_TEXT',
    COMPLETION_TYPE_CATEGORY = 'COMPLETION_TYPE_CATEGORY',
    COMPLETION_TYPE_BRAND = 'COMPLETION_TYPE_BRAND',
    COMPLETION_TYPE_PRODUCT = 'COMPLETION_TYPE_PRODUCT',
  }
  export interface SuggestsV1GetCategorySuggestsResponse {
    categories?: SuggestsV1CategorySuggest[]
  }
  export interface SuggestsV1GetSuggestsRequest {
    text?: string
    /** @format int64 */
    storeId?: string
    /** @format int64 */
    retailerId?: string
    tenantId?: string
  }
  export interface SuggestsV1GetSuggestsResponse {
    suggests?: SuggestsV1CompletionBlock[]
  }
  export interface SuggestsV1GetWebSuggestsResponse {
    suggests?: SuggestsV1WebCompletionBlock[]
  }
  export interface SuggestsV1ProductBlock {
    completion?: CatalogApiV2Product[]
  }
  export interface SuggestsV1TextBlock {
    completion?: SuggestsV1TextCompletion[]
  }
  export interface SuggestsV1TextCompletion {
    text?: string
  }
  export interface SuggestsV1WebCompletionBlock {
    type?: SuggestsV1CompletionType
    text?: SuggestsV1TextBlock
    category?: SuggestsV1CategoryBlock
    brand?: SuggestsV1BrandBlock
    product?: SuggestsV1WebProductBlock
  }
  export interface SuggestsV1WebProductBlock {
    completion?: CatalogApiV3Product[]
  }
}
