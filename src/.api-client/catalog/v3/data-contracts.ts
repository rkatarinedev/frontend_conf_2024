/*
 * ---------------------------------------------------------------
 * This file was generated via @nstmrt/frontend-cli v1.6.2	#
 * Source: https://gitlab.sbmt.io/paas/misc/frontend-cli.git	#
 * ---------------------------------------------------------------
 */
/* tslint:disable */
/* eslint-disable */
export namespace CatalogV3 {
  export interface Active {
    buttonText?: string
    imageUrl?: string
    positionTop?: boolean
    title?: string
    titleShort?: string
    tooltip?: string
    url?: string
  }
  export interface AttributeOption {
    active?: Active
    inactive?: Inactive
  }
  export interface Brand {
    id?: string
    name?: string
    permalink?: string
  }
  export interface Breadcrumb {
    filters?: CategoryFilter[]
    id?: string
    leaf?: boolean
    name?: string
    permalink?: string
    /** @format double */
    position?: number
  }
  export interface CategoryFilter {
    dictionaryValueId?: string
    filter?: boolean
    key?: string
    multiValue?: boolean
    name?: string
    permalink?: string
    /** @format int32 */
    position?: number
    value?: string
  }
  export interface Image {
    miniUrl?: string
    originalUrl?: string
    previewUrl?: string
    productUrl?: string
    smallUrl?: string
  }
  export interface Inactive {
    buttonText?: string
    imageUrl?: string
    positionTop?: boolean
    title?: string
    titleShort?: string
    tooltip?: string
    url?: string
  }
  export interface Manufacturer {
    id?: string
    name?: string
  }
  export interface ManufacturingCountry {
    id?: string
    name?: string
    permalink?: string
  }
  export interface MulticardResponse {
    data: {
      product?: Product
      productGroups?: ProductGroup[]
      productProperties?: Property[]
      productTaxons?: Breadcrumb[]
      promoBadges?: PromoBadges[]
    }
  }
  export interface Offer {
    active?: boolean
    beneficial?: boolean
    bmplInfo?: Record<string, number>
    /** @format double */
    discount?: number
    /** @format date-time */
    discountEndsAt?: string
    discounted?: boolean
    /** @format double */
    gramsPerUnit?: number
    id?: string
    /** @format double */
    instamartPrice?: number
    /** @format double */
    itemsPerPack?: number
    /** @format float */
    maxPerOrder?: number
    /** @format double */
    maxStockRate?: number
    name?: string
    options?: OfferOptions[]
    /** @format double */
    originalUnitPrice?: number
    /** @format double */
    price?: number
    priceType?: string
    productId?: string
    retailerId?: string
    retailerSku?: string
    rsku?: string
    /** @format double */
    stock?: number
    /** @format double */
    stockRate?: number
    storeId?: string
    /** @format double */
    unitPrice?: number
    uuid?: string
    vatInfo?: VatInfo
    vertical?: string
  }
  export interface OfferGroupItem {
    image?: Image
    name?: string
    /** @format double */
    price?: number
    selected?: boolean
    /** @format int64 */
    sku?: number
  }
  export interface OfferOptions {
    active?: boolean
    id?: string
    items?: OfferGroupItem[]
    /** @format int32 */
    maxItems?: number
    /** @format int32 */
    minItems?: number
    title?: string
  }
  export interface Product {
    active?: boolean
    alcohol?: boolean
    brand?: Brand
    canonicalPermalink?: string
    description?: string
    humanVolume?: string
    id?: string
    images?: Image[]
    /** @format double */
    itemsPerPack?: number
    labels?: string[]
    licenseInfo?: string
    manufacturer?: Manufacturer
    manufacturingCountry?: ManufacturingCountry
    name?: string
    offer?: Offer
    permalink?: string
    productTaxons?: ProductTaxon[]
    promoBadgeIds?: string[]
    relatedProducts?: string[]
    requirements?: Requirement[]
    /** @format float */
    score?: number
    scoreDetails?: ScoreDetail
    /** @format int64 */
    sku?: number
    /** @format double */
    volume?: number
    volumeType?: string
  }
  export interface ProductGroup {
    key?: string
    name?: string
    type?: string
    values?: ProductGroupItem[]
  }
  export interface ProductGroupItem {
    active?: boolean
    clickable?: boolean
    key?: string
    name?: string
    permalink?: string
    productId?: string
    selected?: boolean
    value?: string
  }
  export interface ProductTaxon {
    alcohol?: boolean
    description?: string
    id?: string
    leaf?: boolean
    name?: string
    permalink?: string
  }
  export interface PromoBadgeAttribute {
    name?: string
    options?: AttributeOption
  }
  export interface PromoBadges {
    attributes?: PromoBadgeAttribute
    id?: string
    type?: string
  }
  export interface Property {
    id?: string
    name?: string
    presentation?: string
    value?: string
  }
  export interface Requirement {
    title?: string
    type?: string
  }
  export interface ScoreDetail {
    /** @format double */
    commentCount?: number
    /** @format double */
    feedbackCount?: number
    feedbackSource?: string
  }
  export interface VatInfo {
    /** @format double */
    priceWithoutVat?: number
    /** @format double */
    unitPriceWithoutVat?: number
    /** @format double */
    unitVatAmount?: number
    /** @format double */
    vatAmount?: number
    /** @format int32 */
    vatRate?: number
  }
  export interface ErrorsObject {
    /**
     * Код ошибки
     * @format int32
     * @example 422
     */
    code: number
    /** Сообщения об ошибках */
    errors: {
      /**
       * Поле указывающее на ошибку
       * @maxLength 255
       * @example "name"
       */
      field: string | null
      /**
       * Описание ошибки
       * @maxLength 65535
       * @example "не может быть пустым"
       */
      message: string
      /**
       * Тип ошибки
       * @maxLength 255
       * @example "unprocessable_entity"
       */
      type: string | null
    }[]
  }

  /** Группа магазина */
  export interface Label {
    /**
     * Код группы
     * @maxLength 255
     * @example "express_delivery"
     */
    code: string
    /**
     * Название иконки
     * @maxLength 255
     * @example "delivery"
     */
    icon: string
    labelStoreIds?: number[] | null
    /**
     * Позиция
     * @format int32
     * @example 1
     */
    position: number
    /**
     * Описание группы
     * @maxLength 255
     * @example "Доставка за 15 минут"
     */
    subtitle: string
    /**
     * Название группы
     * @maxLength 255
     * @example "Быстрая доставка"
     */
    title: string
    /**
     * UUID группы
     * @maxLength 36
     * @example "bf538d49-2170-4bd2-979e-ef3406a5e58a"
     */
    uuid: string
  }

  /** Маркетинговый бейдж */
  export type PromoShield = {
    gradientEndColor: string
    gradientStartColor: string
    promoText: string
    textColor: string
  } | null

  /** Внешний вид ретейлера */
  export type RetailerAppearance = {
    /**
     * Цвет фона
     * @example "#0f447c"
     */
    backgroundColor: string
    /**
     * Темный шрифт
     * @example false
     */
    blackTheme: boolean
    /**
     * Главная картинка ресторана
     * @example "https://imgproxy.sbermarket.ru/imgproxy/size-500-500/czM6Ly9jb250ZW50LWltYWdlcy1wcm9kL3Byb2R1Y3RzLzIyODM2MTczL29yaWdpbmFsLzEvMjAyMy0wMi0yN1QwOSUzQTQxJTNBMjUuODcyMDAwJTJCMDAlM0EwMC8yMjgzNjE3M18xLmpwZw==.jpg"
     */
    coverImage: string | null
    /**
     * Цвет картинки
     * @example "#0f447c"
     */
    imageColor: string
    /**
     * Основной логотип
     * @example "https://sbermarket.ru/statics/retailer_banners/1/logo_images/Metro.png?1658923296"
     */
    logoImage: string
    /**
     * Маленький логотип
     * @example "https://sbermarket.ru/statics/retailer_banners/1/mini_logo_images/Metro.png?1658923296"
     */
    miniLogoImage: string | null
    /**
     * Боковая картинка
     * @example "https://sbermarket.ru/statics/retailer_banners/1/side_images/Img-min.jpg?1658923296"
     */
    sideImage: string | null
  }

  /**
   * Время открытия и закрытия
   * Данный объект отсутствует (field not set), если время работы неопределено или неизвестно. Поле присутствует только у ресторанов (vertical=restaurant).
   */
  export interface Schedule {
    /**
     * Дата-время закрытия. Отсутствует во время нерабочего времени.
     * @format date-time
     * @example "2022-01-01T13:00:00.000+03:00"
     */
    closingAt?: string
    /**
     * Количество минут до закрытия ресторана,
     * когда следует начинать показывать бейдж "Х минут до закрытия".
     * Отсутствует во время нерабочего времени.
     * @format int32
     * @example 15
     */
    minutesTillClosingSoon?: number
    /**
     * Дата-время открытия. Отсутствует во время рабочего времени.
     * @format date-time
     * @example "2022-01-01T13:00:00.000+03:00"
     */
    openingAt?: string
  }
  export interface SimpleError {
    /**
     * Текст ошибки
     * @example "Объект не найден"
     */
    error: string
  }

  /** Магазин */
  export interface Store {
    /** Ближайшие слоты с доставкой */
    closestShippingOptions?: {
      /**
       * Время окончания слота
       * @format date-time
       * @maxLength 255
       * @example "2021-07-02T10:00:00.000+03:00"
       */
      endsAt: string
      /** Признак быстрой доставки */
      expressDelivery?: boolean
      /**
       * Идентификатор
       * @maxLength 255
       * @example "pickup:46cdd780-2473-4f63-b5e6-3cf05225750a"
       */
      optionId: string
      /**
       * Цена
       * @format float
       * @example 490
       */
      price: number
      /**
       * Время начала слота
       * @format date-time
       * @maxLength 255
       * @example "2021-07-02T10:00:00.000+03:00"
       */
      startsAt: string
      /**
       * Текст времени действия
       * @maxLength 255
       * @example "завтра 09:00–10:00"
       */
      summary: string
    }[]
    /** Примерное время доставки */
    deliveryForecastText: string | null
    /**
     * Расстояние до магазина
     * @format int32
     * @example 10000
     */
    distance?: number | null
    /**
     * Максимальное время доставки
     * @format int32
     * @example 60
     */
    estimateMinutesMax?: number | null
    /**
     * Минимальное время доставки
     * @format int32
     * @example 20
     */
    estimateMinutesMin?: number | null
    /**
     * Тип быстрой доставки
     * @example "one_hour_slot"
     */
    estimateSource?: string | null
    /** Применяется быстрая доставка */
    expressDelivery: boolean
    /**
     * Полный адрес
     * @example "Москва, Ленинградское шоссе, 71Г"
     */
    fullAddress?: string | null
    /**
     * идентификатор магазина
     * @maxLength 255
     * @example "1g6f3798-f53c-4666-b27c-0evfab6b0c7x"
     */
    id: string
    /** Нет плановой доставки, только on_demand */
    isPlannedDeliveryAvailable: boolean
    /** Группы */
    labels?: Label[]
    /**
     * Юридическая информация. Поле присутствует только у ресторанов (vertical=restaurant)
     * @example "ООО Вектор, адрес регистрации: ул  Садовая 1, ИНН 100500, рег.номер 100500"
     */
    legalInfo?: string
    /** Метаинформация о store_id */
    meta?: {
      /** Ключ метаинформации */
      key: string
      /** Значение метаинформации */
      value: string
    }[]
    /**
     * Минимальная сумма первого заказа
     * @deprecated
     * @format float
     */
    minFirstOrderAmount: number
    /**
     * Минимальная сумма первого заказа (Самовывоз)
     * @deprecated
     * @format float
     */
    minFirstOrderAmountPickup: number
    /**
     * Минимальная сумма заказа
     * @deprecated
     * @format float
     */
    minOrderAmount: number
    /**
     * Минимальная сумма заказа (Самовывоз)
     * @deprecated
     * @format float
     */
    minOrderAmountPickup: number
    /**
     * Минимальная сумма заказа на основе предыдущих заказов
     * @format float
     */
    minimumOrderAmount: number
    /**
     * Минимальная сумма заказа (Самовывоз) на основе предыдущих заказов
     * @format float
     */
    minimumOrderAmountPickup: number
    /**
     * название магазина
     * @maxLength 255
     * @example "METRO, Фридриха Энгельса"
     */
    name: string
    /** Применяется доставка */
    onDemand: boolean
    promoShield?: PromoShield
    retailer?: {
      appearance: RetailerAppearance
      /**
       * ID
       * @format int32
       * @example 11
       */
      id: number
      /**
       * Признак ретейлера с договором Агентская схема
       * @example true
       */
      isAgentContractTypes?: boolean
      /**
       * Название
       * @maxLength 255
       * @example "METRO"
       */
      name: string
      /**
       * Код ретейлера
       * @maxLength 255
       * @example "metro"
       */
      slug: string
    }
    /** Данный объект отсутствует (field not set), если время работы неопределено или неизвестно. Поле присутствует только у ресторанов (vertical=restaurant). */
    schedule?: Schedule
    /** Способы доставки */
    shippingMethods: {
      /**
       * Название способа доставки
       * @maxLength 255
       * @example "Курьером"
       */
      title: string
      /**
       * Тип способа доставки
       * @maxLength 255
       * @example "by_courier"
       */
      type: string
    }[]
    /**
     * идентификатор магазина (внутренний)
     * @format int32
     * @example 123
     */
    storeId: number
    /**
     * вертикаль
     * @example "grocery"
     */
    vertical?: 'pharm' | 'grocery' | 'restaurant'
  }
}
