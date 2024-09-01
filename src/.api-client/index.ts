/*
 * ---------------------------------------------------------------
 * This file was generated via @nstmrt/frontend-cli v1.6.2	#
 * Source: https://gitlab.sbmt.io/paas/misc/frontend-cli.git	#
 * ---------------------------------------------------------------
 */
/* eslint-disable */
/* tslint:disable */
// this file is generated
import { ContentType, HttpClient, RequestParams } from './http-client'
import { CatalogCatalogWebV1Swagger } from './catalog/catalog_web_v1.swagger/data-contracts'
import { CatalogSuggestsV1Swagger } from './catalog/suggests_v1.swagger/data-contracts'
import { CatalogV3 } from './catalog/v3/data-contracts'
export class Api<SecurityDataType = unknown> extends HttpClient<SecurityDataType> {
  catalog = {
    catalogWebV1Swagger: {
      catalogWebV1ServiceGetProductList: (
        body: CatalogCatalogWebV1Swagger.CatalogWebV1GetProductListRequest,
        params: RequestParams = {}
      ) =>
        this.request<
          CatalogCatalogWebV1Swagger.CatalogWebV1GetProductListResponse,
          CatalogCatalogWebV1Swagger.RpcStatus
        >({
          path: `/api/web/v1/products`,
          method: 'POST',
          body: body,
          type: ContentType.Json,
          format: 'json',
          ...params,
        }).catch(() =>{
            return {
                "products": [
                    {
                        "id": "451517",
                        "sku": "36250",
                        "retailerSku": "451517",
                        "available": true,
                        "legacyOfferId": 4730289,
                        "name": "Батончик Бабаевский шоколадный с помадно-сливочной начинкой 50 г",
                        "price": 45.9,
                        "originalPrice": 59.9,
                        "discount": 14,
                        "human_volume": "50 г",
                        "volume": 50,
                        "volumeType": "g",
                        "itemsPerPack": 1,
                        "discountEndsAt": "2024-09-04T23:59:59.000+00:00",
                        "priceType": "perItem",
                        "gramsPerUnit": 50,
                        "unitPrice": 45.9,
                        "originalUnitPrice": 59.9,
                        "promoBadgeIds": [],
                        "score": 4.6,
                        "labels": [],
                        "imageUrls": [
                            "https://imgproxy.kuper.ru/imgproxy/width-auto/czM6Ly9jb250ZW50LWltYWdlcy1wcm9kL3Byb2R1Y3RzLzM2MjUwL29yaWdpbmFsLzEvMjAyNC0wNy0wNFQxMCUzQTQxJTNBNTcuMDIzNDcyJTJCMDAlM0EwMC8zNjI1MF8xLmpwZw==.jpg",
                            "https://imgproxy.kuper.ru/imgproxy/width-auto/czM6Ly9jb250ZW50LWltYWdlcy1wcm9kL3Byb2R1Y3RzLzM2MjUwL29yaWdpbmFsLzIvMjAyNC0wNy0wNFQxMCUzQTQxJTNBNTcuMzM5NzkzJTJCMDAlM0EwMC8zNjI1MF8yLmpwZw==.jpg"
                        ],
                        "requirements": [],
                        "slug": "batonchik-babaevskiy-shokoladnyy-s-pomadno-slivochnoy-nachinkoy-50-g-5d69e36",
                        "maxSelectQuantity": 999,
                        "canonicalUrl": "https://sbermarket.ru/products/36250-batonchik-babaevskiy-shokoladnyy-s-pomadno-slivochnoy-nachinkoy-50-g-5d69e36",
                        "vatInfo": null,
                        "bmplInfo": {},
                        "maxPerOrder": null,
                        "ads_meta": null,
                        "withOptions": false,
                        "isBeneficial": true,
                        "storeId": "1"
                    },
                    {
                        "id": "117442",
                        "sku": "15626601",
                        "retailerSku": "117442",
                        "available": true,
                        "legacyOfferId": 20622522839,
                        "name": "Шоколад Красный Октябрь Аленка молочный 90 г",
                        "price": 89.9,
                        "originalPrice": 99.9,
                        "discount": 10,
                        "human_volume": "90 г",
                        "volume": 90,
                        "volumeType": "g",
                        "itemsPerPack": 1,
                        "discountEndsAt": "2024-09-04T23:59:59.000+00:00",
                        "priceType": "perItem",
                        "gramsPerUnit": 90,
                        "unitPrice": 89.9,
                        "originalUnitPrice": 99.9,
                        "promoBadgeIds": [],
                        "score": 4.6,
                        "labels": [],
                        "imageUrls": [
                            "https://imgproxy.kuper.ru/imgproxy/width-auto/czM6Ly9jb250ZW50LWltYWdlcy1wcm9kL3Byb2R1Y3RzLzE1NjI2NjAxL29yaWdpbmFsLzEvMjAyMy0xMS0zMFQxOCUzQTUzJTNBMDkuMzQ3MTcwJTJCMDAlM0EwMC8xNTYyNjYwMV8xLmpwZw==.jpg"
                        ],
                        "requirements": [],
                        "slug": "shokolad-krasnyy-oktyabr-alenka-molochnyy-90-g",
                        "maxSelectQuantity": 999,
                        "canonicalUrl": "https://sbermarket.ru/products/15626601-shokolad-krasnyy-oktyabr-alenka-molochnyy-90-g",
                        "vatInfo": null,
                        "bmplInfo": {},
                        "maxPerOrder": null,
                        "ads_meta": null,
                        "withOptions": false,
                        "isBeneficial": true,
                        "storeId": "1"
                    },
                    {
                        "id": "256801",
                        "sku": "35365519",
                        "retailerSku": "256801",
                        "available": true,
                        "legacyOfferId": 37563248611,
                        "name": "Шоколад Alpen Gold Max Fun карамель-мармелад-печенье 140 г",
                        "price": 149,
                        "originalPrice": 201,
                        "discount": 52,
                        "human_volume": "140 г",
                        "volume": 140,
                        "volumeType": "g",
                        "itemsPerPack": 1,
                        "discountEndsAt": "2024-09-04T23:59:59.000+00:00",
                        "priceType": "perItem",
                        "gramsPerUnit": 140,
                        "unitPrice": 149,
                        "originalUnitPrice": 201,
                        "promoBadgeIds": [],
                        "score": null,
                        "labels": [],
                        "imageUrls": [
                            "https://imgproxy.kuper.ru/imgproxy/width-auto/czM6Ly9jb250ZW50LWltYWdlcy1wcm9kL3Byb2R1Y3RzLzM1MzY1NTE5L29yaWdpbmFsLzEvMjAyNC0wNy0wMVQxNiUzQTAyJTNBNDguMDgzNDQwJTJCMDAlM0EwMC8zNTM2NTUxOV8xLmpwZw==.jpg",
                            "https://imgproxy.kuper.ru/imgproxy/width-auto/czM6Ly9jb250ZW50LWltYWdlcy1wcm9kL3Byb2R1Y3RzLzM1MzY1NTE5L29yaWdpbmFsLzIvMjAyNC0wNy0wMVQxNiUzQTAyJTNBNDguNDQ4MTY5JTJCMDAlM0EwMC8zNTM2NTUxOV8yLmpwZw==.jpg"
                        ],
                        "requirements": [],
                        "slug": "shokolad-alpen-gold-max-fun-karamel-marmelad-pechenie-140-g",
                        "maxSelectQuantity": 999,
                        "canonicalUrl": "https://sbermarket.ru/products/35365519-shokolad-alpen-gold-max-fun-karamel-marmelad-pechenie-140-g",
                        "vatInfo": null,
                        "bmplInfo": {},
                        "maxPerOrder": null,
                        "ads_meta": null,
                        "withOptions": false,
                        "isBeneficial": false,
                        "storeId": "1"
                    },
                    {
                        "id": "244028",
                        "sku": "31845920",
                        "retailerSku": "244028",
                        "available": true,
                        "legacyOfferId": 33642650651,
                        "name": "Шоколад Alpen Gold молочный 80 г",
                        "price": 69.9,
                        "originalPrice": 79.9,
                        "discount": 10,
                        "human_volume": "80 г",
                        "volume": 80,
                        "volumeType": "g",
                        "itemsPerPack": 1,
                        "discountEndsAt": "2024-09-04T23:59:59.000+00:00",
                        "priceType": "perItem",
                        "gramsPerUnit": 80,
                        "unitPrice": 69.9,
                        "originalUnitPrice": 79.9,
                        "promoBadgeIds": [],
                        "score": 5,
                        "labels": [],
                        "imageUrls": [
                            "https://imgproxy.kuper.ru/imgproxy/width-auto/czM6Ly9jb250ZW50LWltYWdlcy1wcm9kL3Byb2R1Y3RzLzMxODQ1OTIwL29yaWdpbmFsLzEvMjAyNC0wNi0yMVQwOSUzQTEwJTNBMjkuMjYzNzMyJTJCMDAlM0EwMC8zMTg0NTkyMF8xLmpwZw==.jpg",
                            "https://imgproxy.kuper.ru/imgproxy/width-auto/czM6Ly9jb250ZW50LWltYWdlcy1wcm9kL3Byb2R1Y3RzLzMxODQ1OTIwL29yaWdpbmFsLzIvMjAyNC0wNi0yMVQwOSUzQTEwJTNBMjkuNTc5MTg0JTJCMDAlM0EwMC8zMTg0NTkyMF8yLmpwZw==.jpg",
                            "https://imgproxy.kuper.ru/imgproxy/width-auto/czM6Ly9jb250ZW50LWltYWdlcy1wcm9kL3Byb2R1Y3RzLzMxODQ1OTIwL29yaWdpbmFsLzMvMjAyNC0wNi0yMVQwOSUzQTEyJTNBMDYuMTA3MzQyJTJCMDAlM0EwMC8zMTg0NTkyMF8zLmpwZw==.jpg",
                            "https://imgproxy.kuper.ru/imgproxy/width-auto/czM6Ly9jb250ZW50LWltYWdlcy1wcm9kL3Byb2R1Y3RzLzMxODQ1OTIwL29yaWdpbmFsLzQvMjAyNC0wNi0yMVQwOSUzQTEyJTNBMDYuMzU2MzMxJTJCMDAlM0EwMC8zMTg0NTkyMF80LmpwZw==.jpg"
                        ],
                        "requirements": [],
                        "slug": "shokolad-alpen-gold-molochnyy-80-g-3ad312e",
                        "maxSelectQuantity": 999,
                        "canonicalUrl": "https://sbermarket.ru/products/31845920-shokolad-alpen-gold-molochnyy-80-g-3ad312e",
                        "vatInfo": null,
                        "bmplInfo": {},
                        "maxPerOrder": null,
                        "ads_meta": null,
                        "withOptions": false,
                        "isBeneficial": false,
                        "storeId": "1"
                    },
                    {
                        "id": "256756",
                        "sku": "35365517",
                        "retailerSku": "256756",
                        "available": true,
                        "legacyOfferId": 37563248751,
                        "name": "Шоколад Alpen Gold Max Fun молочный ягоды-карамель-шипучие шарики 140 г",
                        "price": 149,
                        "originalPrice": 201,
                        "discount": 52,
                        "human_volume": "140 г",
                        "volume": 140,
                        "volumeType": "g",
                        "itemsPerPack": 1,
                        "discountEndsAt": "2024-09-04T23:59:59.000+00:00",
                        "priceType": "perItem",
                        "gramsPerUnit": 140,
                        "unitPrice": 149,
                        "originalUnitPrice": 201,
                        "promoBadgeIds": [],
                        "score": 5,
                        "labels": [],
                        "imageUrls": [
                            "https://imgproxy.kuper.ru/imgproxy/width-auto/czM6Ly9jb250ZW50LWltYWdlcy1wcm9kL3Byb2R1Y3RzLzM1MzY1NTE3L29yaWdpbmFsLzEvMjAyNC0wNy0wMVQxNiUzQTAzJTNBMTMuMTg1MDUyJTJCMDAlM0EwMC8zNTM2NTUxN18xLmpwZw==.jpg",
                            "https://imgproxy.kuper.ru/imgproxy/width-auto/czM6Ly9jb250ZW50LWltYWdlcy1wcm9kL3Byb2R1Y3RzLzM1MzY1NTE3L29yaWdpbmFsLzIvMjAyNC0wNy0wMVQxNiUzQTAzJTNBMTMuNTM3NTYzJTJCMDAlM0EwMC8zNTM2NTUxN18yLmpwZw==.jpg"
                        ],
                        "requirements": [],
                        "slug": "shokolad-alpen-gold-max-fun-molochnyy-yagody-karamel-shipuchie-shariki-140-g",
                        "maxSelectQuantity": 999,
                        "canonicalUrl": "https://sbermarket.ru/products/35365517-shokolad-alpen-gold-max-fun-molochnyy-yagody-karamel-shipuchie-shariki-140-g",
                        "vatInfo": null,
                        "bmplInfo": {},
                        "maxPerOrder": null,
                        "ads_meta": null,
                        "withOptions": false,
                        "isBeneficial": false,
                        "storeId": "1"
                    },
                    {
                        "id": "249953",
                        "sku": "33362867",
                        "retailerSku": "249953",
                        "available": true,
                        "legacyOfferId": 35593721251,
                        "name": "Шоколад Alpen Gold Пинаколада белый с воздушным рисом и кокосом 80 г",
                        "price": 74.9,
                        "originalPrice": 82.9,
                        "discount": 8,
                        "human_volume": "80 г",
                        "volume": 80,
                        "volumeType": "g",
                        "itemsPerPack": 1,
                        "discountEndsAt": "2024-09-04T23:59:59.000+00:00",
                        "priceType": "perItem",
                        "gramsPerUnit": 80,
                        "unitPrice": 74.9,
                        "originalUnitPrice": 82.9,
                        "promoBadgeIds": [],
                        "score": null,
                        "labels": [],
                        "imageUrls": [
                            "https://imgproxy.kuper.ru/imgproxy/width-auto/czM6Ly9jb250ZW50LWltYWdlcy1wcm9kL3Byb2R1Y3RzLzMzMzYyODY3L29yaWdpbmFsLzEvMjAyNC0wNi0yMVQwOSUzQTEwJTNBMzYuMjc3NDgxJTJCMDAlM0EwMC8zMzM2Mjg2N18xLmpwZw==.jpg"
                        ],
                        "requirements": [],
                        "slug": "shokolad-alpen-gold-pinakolada-belyy-s-vozdushnym-risom-i-kokosom-80-g",
                        "maxSelectQuantity": 999,
                        "canonicalUrl": "https://sbermarket.ru/products/33362867-shokolad-alpen-gold-pinakolada-belyy-s-vozdushnym-risom-i-kokosom-80-g",
                        "vatInfo": null,
                        "bmplInfo": {},
                        "maxPerOrder": null,
                        "ads_meta": null,
                        "withOptions": false,
                        "isBeneficial": false,
                        "storeId": "1"
                    },
                    {
                        "id": "244023",
                        "sku": "32374594",
                        "retailerSku": "244023",
                        "available": true,
                        "legacyOfferId": 33642681411,
                        "name": "Шоколад Alpen Gold молочный с фундуком 80 г",
                        "price": 74.9,
                        "originalPrice": 89.9,
                        "discount": 15,
                        "human_volume": "80 г",
                        "volume": 80,
                        "volumeType": "g",
                        "itemsPerPack": 1,
                        "discountEndsAt": "2024-09-04T23:59:59.000+00:00",
                        "priceType": "perItem",
                        "gramsPerUnit": 80,
                        "unitPrice": 74.9,
                        "originalUnitPrice": 89.9,
                        "promoBadgeIds": [],
                        "score": 5,
                        "labels": [],
                        "imageUrls": [
                            "https://imgproxy.kuper.ru/imgproxy/width-auto/czM6Ly9jb250ZW50LWltYWdlcy1wcm9kL3Byb2R1Y3RzLzMyMzc0NTk0L29yaWdpbmFsLzEvMjAyNC0wNi0yMVQwOSUzQTEwJTNBMzEuMTEzMTI3JTJCMDAlM0EwMC8zMjM3NDU5NF8xLmpwZw==.jpg",
                            "https://imgproxy.kuper.ru/imgproxy/width-auto/czM6Ly9jb250ZW50LWltYWdlcy1wcm9kL3Byb2R1Y3RzLzMyMzc0NTk0L29yaWdpbmFsLzIvMjAyNC0wNi0yMVQwOSUzQTEwJTNBMzEuNDQwMTU4JTJCMDAlM0EwMC8zMjM3NDU5NF8yLmpwZw==.jpg",
                            "https://imgproxy.kuper.ru/imgproxy/width-auto/czM6Ly9jb250ZW50LWltYWdlcy1wcm9kL3Byb2R1Y3RzLzMyMzc0NTk0L29yaWdpbmFsLzMvMjAyNC0wNi0yMVQwOSUzQTEyJTNBMDcuNjY0NDk4JTJCMDAlM0EwMC8zMjM3NDU5NF8zLmpwZw==.jpg",
                            "https://imgproxy.kuper.ru/imgproxy/width-auto/czM6Ly9jb250ZW50LWltYWdlcy1wcm9kL3Byb2R1Y3RzLzMyMzc0NTk0L29yaWdpbmFsLzQvMjAyNC0wNi0yMVQwOSUzQTEyJTNBMDcuOTIwNTIxJTJCMDAlM0EwMC8zMjM3NDU5NF80LmpwZw==.jpg"
                        ],
                        "requirements": [],
                        "slug": "shokolad-alpen-gold-molochnyy-s-fundukom-80-g-e5300b0",
                        "maxSelectQuantity": 999,
                        "canonicalUrl": "https://sbermarket.ru/products/32374594-shokolad-alpen-gold-molochnyy-s-fundukom-80-g-e5300b0",
                        "vatInfo": null,
                        "bmplInfo": {},
                        "maxPerOrder": null,
                        "ads_meta": null,
                        "withOptions": false,
                        "isBeneficial": false,
                        "storeId": "1"
                    },
                    {
                        "id": "244022",
                        "sku": "31845919",
                        "retailerSku": "244022",
                        "available": true,
                        "legacyOfferId": 33642650571,
                        "name": "Шоколад Alpen Gold белый с миндалем и кокосовой стружкой 80 г",
                        "price": 74.9,
                        "originalPrice": 89.9,
                        "discount": 15,
                        "human_volume": "80 г",
                        "volume": 80,
                        "volumeType": "g",
                        "itemsPerPack": 1,
                        "discountEndsAt": "2024-09-04T23:59:59.000+00:00",
                        "priceType": "perItem",
                        "gramsPerUnit": 80,
                        "unitPrice": 74.9,
                        "originalUnitPrice": 89.9,
                        "promoBadgeIds": [],
                        "score": 5,
                        "labels": [],
                        "imageUrls": [
                            "https://imgproxy.kuper.ru/imgproxy/width-auto/czM6Ly9jb250ZW50LWltYWdlcy1wcm9kL3Byb2R1Y3RzLzMxODQ1OTE5L29yaWdpbmFsLzEvMjAyNC0wNi0yMVQwOSUzQTEwJTNBMjguNjM4OTkwJTJCMDAlM0EwMC8zMTg0NTkxOV8xLmpwZw==.jpg",
                            "https://imgproxy.kuper.ru/imgproxy/width-auto/czM6Ly9jb250ZW50LWltYWdlcy1wcm9kL3Byb2R1Y3RzLzMxODQ1OTE5L29yaWdpbmFsLzIvMjAyNC0wNi0yMVQwOSUzQTEwJTNBMjguOTY1NTczJTJCMDAlM0EwMC8zMTg0NTkxOV8yLmpwZw==.jpg",
                            "https://imgproxy.kuper.ru/imgproxy/width-auto/czM6Ly9jb250ZW50LWltYWdlcy1wcm9kL3Byb2R1Y3RzLzMxODQ1OTE5L29yaWdpbmFsLzMvMjAyNC0wNi0yMVQwOSUzQTEyJTNBMDUuODMzNDUzJTJCMDAlM0EwMC8zMTg0NTkxOV8zLmpwZw==.jpg"
                        ],
                        "requirements": [],
                        "slug": "shokolad-alpen-gold-belyy-s-mindalem-i-kokosovoy-struzhkoy-80-g-890d3e8",
                        "maxSelectQuantity": 999,
                        "canonicalUrl": "https://sbermarket.ru/products/31845919-shokolad-alpen-gold-belyy-s-mindalem-i-kokosovoy-struzhkoy-80-g-890d3e8",
                        "vatInfo": null,
                        "bmplInfo": {},
                        "maxPerOrder": null,
                        "ads_meta": null,
                        "withOptions": false,
                        "isBeneficial": false,
                        "storeId": "1"
                    },
                    {
                        "id": "256767",
                        "sku": "35310545",
                        "retailerSku": "256767",
                        "available": true,
                        "legacyOfferId": 37563248671,
                        "name": "Шоколад Milka молочный 80 г",
                        "price": 109,
                        "originalPrice": 129,
                        "discount": 20,
                        "human_volume": "80 г",
                        "volume": 80,
                        "volumeType": "g",
                        "itemsPerPack": 1,
                        "discountEndsAt": "2024-09-04T23:59:59.000+00:00",
                        "priceType": "perItem",
                        "gramsPerUnit": 80,
                        "unitPrice": 109,
                        "originalUnitPrice": 129,
                        "promoBadgeIds": [],
                        "score": 1,
                        "labels": [],
                        "imageUrls": [
                            "https://imgproxy.kuper.ru/imgproxy/width-auto/czM6Ly9jb250ZW50LWltYWdlcy1wcm9kL3Byb2R1Y3RzLzM1MzEwNTQ1L29yaWdpbmFsLzEvMjAyNC0wNy0wMlQwOCUzQTQ4JTNBMDYuNTMwNjE3JTJCMDAlM0EwMC8zNTMxMDU0NV8xLmpwZw==.jpg",
                            "https://imgproxy.kuper.ru/imgproxy/width-auto/czM6Ly9jb250ZW50LWltYWdlcy1wcm9kL3Byb2R1Y3RzLzM1MzEwNTQ1L29yaWdpbmFsLzIvMjAyNC0wNy0wMlQwOCUzQTQ4JTNBMDYuOTA3ODc4JTJCMDAlM0EwMC8zNTMxMDU0NV8yLmpwZw==.jpg"
                        ],
                        "requirements": [],
                        "slug": "shokolad-milka-molochnyy-80-g",
                        "maxSelectQuantity": 999,
                        "canonicalUrl": "https://sbermarket.ru/products/35310545-shokolad-milka-molochnyy-80-g",
                        "vatInfo": null,
                        "bmplInfo": {},
                        "maxPerOrder": null,
                        "ads_meta": null,
                        "withOptions": false,
                        "isBeneficial": false,
                        "storeId": "1"
                    },
                    {
                        "id": "256791",
                        "sku": "35365516",
                        "retailerSku": "256791",
                        "available": true,
                        "legacyOfferId": 37563248761,
                        "name": "Шоколад Alpen Gold Max Fun молочный кола-попкорн-карамель 140 г",
                        "price": 149,
                        "originalPrice": 201,
                        "discount": 52,
                        "human_volume": "140 г",
                        "volume": 140,
                        "volumeType": "g",
                        "itemsPerPack": 1,
                        "discountEndsAt": "2024-09-04T23:59:59.000+00:00",
                        "priceType": "perItem",
                        "gramsPerUnit": 140,
                        "unitPrice": 149,
                        "originalUnitPrice": 201,
                        "promoBadgeIds": [],
                        "score": null,
                        "labels": [],
                        "imageUrls": [
                            "https://imgproxy.kuper.ru/imgproxy/width-auto/czM6Ly9jb250ZW50LWltYWdlcy1wcm9kL3Byb2R1Y3RzLzM1MzY1NTE2L29yaWdpbmFsLzEvMjAyNC0wNy0wMVQxNiUzQTAzJTNBNTcuNzE5MzU4JTJCMDAlM0EwMC8zNTM2NTUxNl8xLmpwZw==.jpg",
                            "https://imgproxy.kuper.ru/imgproxy/width-auto/czM6Ly9jb250ZW50LWltYWdlcy1wcm9kL3Byb2R1Y3RzLzM1MzY1NTE2L29yaWdpbmFsLzIvMjAyNC0wNy0wMVQxNiUzQTAzJTNBNTguNDc3ODI4JTJCMDAlM0EwMC8zNTM2NTUxNl8yLmpwZw==.jpg"
                        ],
                        "requirements": [],
                        "slug": "shokolad-alpen-gold-max-fun-molochnyy-kola-popkorn-karamel-140-g",
                        "maxSelectQuantity": 999,
                        "canonicalUrl": "https://sbermarket.ru/products/35365516-shokolad-alpen-gold-max-fun-molochnyy-kola-popkorn-karamel-140-g",
                        "vatInfo": null,
                        "bmplInfo": {},
                        "maxPerOrder": null,
                        "ads_meta": null,
                        "withOptions": false,
                        "isBeneficial": false,
                        "storeId": "1"
                    },
                    {
                        "id": "256650",
                        "sku": "35365506",
                        "retailerSku": "256650",
                        "available": true,
                        "legacyOfferId": 37563248821,
                        "name": "Шоколад Alpen Gold Oreo молочный черника-печенье 85 г",
                        "price": 69.9,
                        "originalPrice": 97.9,
                        "discount": 28,
                        "human_volume": "85 г",
                        "volume": 85,
                        "volumeType": "g",
                        "itemsPerPack": 1,
                        "discountEndsAt": "2024-09-04T23:59:59.000+00:00",
                        "priceType": "perItem",
                        "gramsPerUnit": 85,
                        "unitPrice": 69.9,
                        "originalUnitPrice": 97.9,
                        "promoBadgeIds": [],
                        "score": null,
                        "labels": [],
                        "imageUrls": [
                            "https://imgproxy.kuper.ru/imgproxy/width-auto/czM6Ly9jb250ZW50LWltYWdlcy1wcm9kL3Byb2R1Y3RzLzM1MzY1NTA2L29yaWdpbmFsLzEvMjAyNC0wNy0wMVQxNiUzQTAzJTNBNDYuNDQyNjU2JTJCMDAlM0EwMC8zNTM2NTUwNl8xLmpwZw==.jpg",
                            "https://imgproxy.kuper.ru/imgproxy/width-auto/czM6Ly9jb250ZW50LWltYWdlcy1wcm9kL3Byb2R1Y3RzLzM1MzY1NTA2L29yaWdpbmFsLzIvMjAyNC0wNy0wMVQxNiUzQTAzJTNBNDYuODMyMzc5JTJCMDAlM0EwMC8zNTM2NTUwNl8yLmpwZw==.jpg"
                        ],
                        "requirements": [],
                        "slug": "shokolad-alpen-gold-oreo-molochnyy-chernika-pechenie-85-g",
                        "maxSelectQuantity": 999,
                        "canonicalUrl": "https://sbermarket.ru/products/35365506-shokolad-alpen-gold-oreo-molochnyy-chernika-pechenie-85-g",
                        "vatInfo": null,
                        "bmplInfo": {},
                        "maxPerOrder": null,
                        "ads_meta": null,
                        "withOptions": false,
                        "isBeneficial": false,
                        "storeId": "1"
                    },
                    {
                        "id": "256782",
                        "sku": "35365513",
                        "retailerSku": "256782",
                        "available": true,
                        "legacyOfferId": 37563248801,
                        "name": "Шоколад Alpen Gold Max Fun молочный ягоды-карамель-шипучие шарики 140 г",
                        "price": 149,
                        "originalPrice": 201,
                        "discount": 52,
                        "human_volume": "140 г",
                        "volume": 140,
                        "volumeType": "g",
                        "itemsPerPack": 1,
                        "discountEndsAt": "2024-09-04T23:59:59.000+00:00",
                        "priceType": "perItem",
                        "gramsPerUnit": 140,
                        "unitPrice": 149,
                        "originalUnitPrice": 201,
                        "promoBadgeIds": [],
                        "score": 3,
                        "labels": [],
                        "imageUrls": [
                            "https://imgproxy.kuper.ru/imgproxy/width-auto/czM6Ly9jb250ZW50LWltYWdlcy1wcm9kL3Byb2R1Y3RzLzM1MzY1NTEzL29yaWdpbmFsLzEvMjAyNC0wNy0wMVQxNiUzQTAzJTNBMjcuMDk2Mjg3JTJCMDAlM0EwMC8zNTM2NTUxM18xLmpwZw==.jpg",
                            "https://imgproxy.kuper.ru/imgproxy/width-auto/czM6Ly9jb250ZW50LWltYWdlcy1wcm9kL3Byb2R1Y3RzLzM1MzY1NTEzL29yaWdpbmFsLzIvMjAyNC0wNy0wMVQxNiUzQTAzJTNBMjcuNDE5MzEzJTJCMDAlM0EwMC8zNTM2NTUxM18yLmpwZw==.jpg"
                        ],
                        "requirements": [],
                        "slug": "shokolad-alpen-gold-max-fun-molochnyy-yagody-karamel-shipuchie-shariki-140-g-26e61ee",
                        "maxSelectQuantity": 999,
                        "canonicalUrl": "https://sbermarket.ru/products/35365513-shokolad-alpen-gold-max-fun-molochnyy-yagody-karamel-shipuchie-shariki-140-g-26e61ee",
                        "vatInfo": null,
                        "bmplInfo": {},
                        "maxPerOrder": null,
                        "ads_meta": null,
                        "withOptions": false,
                        "isBeneficial": false,
                        "storeId": "1"
                    },
                    {
                        "id": "138161",
                        "sku": "22006131",
                        "retailerSku": "138161",
                        "available": true,
                        "legacyOfferId": 30616066592,
                        "name": "Шоколад Rioba молочный ассорти 800 г",
                        "price": 939,
                        "originalPrice": 1099,
                        "discount": 160,
                        "human_volume": "800 г",
                        "volume": 800,
                        "volumeType": "g",
                        "itemsPerPack": 1,
                        "discountEndsAt": "2024-09-04T23:59:59.000+00:00",
                        "priceType": "perItem",
                        "gramsPerUnit": 800,
                        "unitPrice": 939,
                        "originalUnitPrice": 1099,
                        "promoBadgeIds": [],
                        "score": 5,
                        "labels": [],
                        "imageUrls": [
                            "https://imgproxy.kuper.ru/imgproxy/width-auto/czM6Ly9jb250ZW50LWltYWdlcy1wcm9kL3Byb2R1Y3RzLzIyMDA2MTMxL29yaWdpbmFsLzEvMjAyMy0xMS0yOFQxNyUzQTU3JTNBMzcuOTIxNTkzJTJCMDAlM0EwMC8yMjAwNjEzMV8xLmpwZw==.jpg",
                            "https://imgproxy.kuper.ru/imgproxy/width-auto/czM6Ly9jb250ZW50LWltYWdlcy1wcm9kL3Byb2R1Y3RzLzIyMDA2MTMxL29yaWdpbmFsLzIvMjAyMy0xMS0yOFQxNyUzQTU3JTNBMzguMzQ1NDA0JTJCMDAlM0EwMC8yMjAwNjEzMV8yLmpwZw==.jpg",
                            "https://imgproxy.kuper.ru/imgproxy/width-auto/czM6Ly9jb250ZW50LWltYWdlcy1wcm9kL3Byb2R1Y3RzLzIyMDA2MTMxL29yaWdpbmFsLzMvMjAyMy0xMS0yOFQxNyUzQTU3JTNBMzguNTU0NjU5JTJCMDAlM0EwMC8yMjAwNjEzMV8zLmpwZw==.jpg",
                            "https://imgproxy.kuper.ru/imgproxy/width-auto/czM6Ly9jb250ZW50LWltYWdlcy1wcm9kL3Byb2R1Y3RzLzIyMDA2MTMxL29yaWdpbmFsLzQvMjAyMy0xMS0yOFQxNyUzQTU3JTNBMzguNzkyNDUxJTJCMDAlM0EwMC8yMjAwNjEzMV80LmpwZw==.jpg",
                            "https://imgproxy.kuper.ru/imgproxy/width-auto/czM6Ly9jb250ZW50LWltYWdlcy1wcm9kL3Byb2R1Y3RzLzIyMDA2MTMxL29yaWdpbmFsLzUvMjAyMy0xMS0yOFQxNyUzQTU3JTNBMzguMTU4NjkzJTJCMDAlM0EwMC8yMjAwNjEzMV81LmpwZw==.jpg",
                            "https://imgproxy.kuper.ru/imgproxy/width-auto/czM6Ly9jb250ZW50LWltYWdlcy1wcm9kL3Byb2R1Y3RzLzIyMDA2MTMxL29yaWdpbmFsLzYvMjAyMy0wNC0yNFQwOSUzQTQxJTNBMzAuNjc5MDAwJTJCMDAlM0EwMC8yMjAwNjEzMV82LmpwZw==.jpg",
                            "https://imgproxy.kuper.ru/imgproxy/width-auto/czM6Ly9jb250ZW50LWltYWdlcy1wcm9kL3Byb2R1Y3RzLzIyMDA2MTMxL29yaWdpbmFsLzcvMjAyMy0wNC0yNFQwOSUzQTQxJTNBMjkuMzAyMDAwJTJCMDAlM0EwMC8yMjAwNjEzMV83LmpwZw==.jpg",
                            "https://imgproxy.kuper.ru/imgproxy/width-auto/czM6Ly9jb250ZW50LWltYWdlcy1wcm9kL3Byb2R1Y3RzLzIyMDA2MTMxL29yaWdpbmFsLzgvMjAyMy0wNC0yNFQwOSUzQTQxJTNBNDAuMjI2MDAwJTJCMDAlM0EwMC8yMjAwNjEzMV84LmpwZw==.jpg",
                            "https://imgproxy.kuper.ru/imgproxy/width-auto/czM6Ly9jb250ZW50LWltYWdlcy1wcm9kL3Byb2R1Y3RzLzIyMDA2MTMxL29yaWdpbmFsLzkvMjAyMy0wNC0yNFQwOSUzQTQxJTNBNDcuMTY2MDAwJTJCMDAlM0EwMC8yMjAwNjEzMV85LmpwZw==.jpg",
                            "https://imgproxy.kuper.ru/imgproxy/width-auto/czM6Ly9jb250ZW50LWltYWdlcy1wcm9kL3Byb2R1Y3RzLzIyMDA2MTMxL29yaWdpbmFsLzEwLzIwMjMtMDQtMjRUMDklM0E0MSUzQTQ4Ljc0NzAwMCUyQjAwJTNBMDAvMjIwMDYxMzFfMTAuanBn.jpg",
                            "https://imgproxy.kuper.ru/imgproxy/width-auto/czM6Ly9jb250ZW50LWltYWdlcy1wcm9kL3Byb2R1Y3RzLzIyMDA2MTMxL29yaWdpbmFsLzExLzIwMjMtMDQtMjRUMDklM0E0MSUzQTMyLjkzODAwMCUyQjAwJTNBMDAvMjIwMDYxMzFfMTEuanBn.jpg"
                        ],
                        "requirements": [],
                        "slug": "shokolad-rioba-molochnyy-assorti-800-g-8a1e4a5",
                        "maxSelectQuantity": 999,
                        "canonicalUrl": "https://sbermarket.ru/products/22006131-shokolad-rioba-molochnyy-assorti-800-g-8a1e4a5",
                        "vatInfo": null,
                        "bmplInfo": {},
                        "maxPerOrder": null,
                        "ads_meta": null,
                        "withOptions": false,
                        "isBeneficial": true,
                        "storeId": "1"
                    },
                    {
                        "id": "200990",
                        "sku": "25193886",
                        "retailerSku": "200990",
                        "available": true,
                        "legacyOfferId": 31353421124,
                        "name": "Шоколад Бабаевский Элитный горький 90 г",
                        "price": 125,
                        "originalPrice": 149,
                        "discount": 24,
                        "human_volume": "90 г",
                        "volume": 90,
                        "volumeType": "g",
                        "itemsPerPack": 1,
                        "discountEndsAt": "2024-09-04T23:59:59.000+00:00",
                        "priceType": "perItem",
                        "gramsPerUnit": 90,
                        "unitPrice": 125,
                        "originalUnitPrice": 149,
                        "promoBadgeIds": [],
                        "score": 5,
                        "labels": [],
                        "imageUrls": [
                            "https://imgproxy.kuper.ru/imgproxy/width-auto/czM6Ly9jb250ZW50LWltYWdlcy1wcm9kL3Byb2R1Y3RzLzI1MTkzODg2L29yaWdpbmFsLzEvMjAyMy0xMS0yNFQxNSUzQTMyJTNBNDEuMzU5MjM4JTJCMDAlM0EwMC8yNTE5Mzg4Nl8xLmpwZw==.jpg"
                        ],
                        "requirements": [],
                        "slug": "shokolad-babaevskiy-elitnyy-gor-kiy-90-g-7f0dc3d",
                        "maxSelectQuantity": 999,
                        "canonicalUrl": "https://sbermarket.ru/products/25193886-shokolad-babaevskiy-elitnyy-gor-kiy-90-g-7f0dc3d",
                        "vatInfo": null,
                        "bmplInfo": {},
                        "maxPerOrder": null,
                        "ads_meta": null,
                        "withOptions": false,
                        "isBeneficial": true,
                        "storeId": "1"
                    },
                    {
                        "id": "559452",
                        "sku": "24273339",
                        "retailerSku": "559452",
                        "available": true,
                        "legacyOfferId": 10243494,
                        "name": "Шоколад Ritter Sport Цельный лесной орех молочный 100 г",
                        "price": 165,
                        "originalPrice": 179,
                        "discount": 14,
                        "human_volume": "100 г",
                        "volume": 100,
                        "volumeType": "g",
                        "itemsPerPack": 1,
                        "discountEndsAt": "2024-09-04T23:59:59.000+00:00",
                        "priceType": "perItem",
                        "gramsPerUnit": 100,
                        "unitPrice": 165,
                        "originalUnitPrice": 179,
                        "promoBadgeIds": [],
                        "score": 4.8,
                        "labels": [],
                        "imageUrls": [
                            "https://imgproxy.kuper.ru/imgproxy/width-auto/czM6Ly9jb250ZW50LWltYWdlcy1wcm9kL3Byb2R1Y3RzLzI0MjczMzM5L29yaWdpbmFsLzEvMjAyNC0wMi0yMFQwNyUzQTQ5JTNBNDQuMDExODQ3JTJCMDAlM0EwMC8yNDI3MzMzOV8xLmpwZw==.jpg",
                            "https://imgproxy.kuper.ru/imgproxy/width-auto/czM6Ly9jb250ZW50LWltYWdlcy1wcm9kL3Byb2R1Y3RzLzI0MjczMzM5L29yaWdpbmFsLzIvMjAyMy0xMS0yNFQxNSUzQTM2JTNBMTEuOTI1ODc2JTJCMDAlM0EwMC8yNDI3MzMzOV8yLmpwZw==.jpg",
                            "https://imgproxy.kuper.ru/imgproxy/width-auto/czM6Ly9jb250ZW50LWltYWdlcy1wcm9kL3Byb2R1Y3RzLzI0MjczMzM5L29yaWdpbmFsLzMvMjAyMy0xMS0yNFQxNSUzQTM2JTNBMTIuMDc4NzkzJTJCMDAlM0EwMC8yNDI3MzMzOV8zLmpwZw==.jpg",
                            "https://imgproxy.kuper.ru/imgproxy/width-auto/czM6Ly9jb250ZW50LWltYWdlcy1wcm9kL3Byb2R1Y3RzLzI0MjczMzM5L29yaWdpbmFsLzQvMjAyMy0xMS0yNFQxNSUzQTQ0JTNBNDQuMDI0NjkyJTJCMDAlM0EwMC8yNDI3MzMzOV80LmpwZw==.jpg"
                        ],
                        "requirements": [],
                        "slug": "shokolad-ritter-sport-tsel-nyy-lesnoy-oreh-molochnyy-100-g",
                        "maxSelectQuantity": 999,
                        "canonicalUrl": "https://sbermarket.ru/products/24273339-shokolad-ritter-sport-tsel-nyy-lesnoy-oreh-molochnyy-100-g",
                        "vatInfo": null,
                        "bmplInfo": {},
                        "maxPerOrder": null,
                        "ads_meta": null,
                        "withOptions": false,
                        "isBeneficial": true,
                        "storeId": "1"
                    },
                    {
                        "id": "244027",
                        "sku": "32374589",
                        "retailerSku": "244027",
                        "available": true,
                        "legacyOfferId": 33642684801,
                        "name": "Шоколад Alpen Gold молочный с фундуком и изюмом 80 г",
                        "price": 74.9,
                        "originalPrice": 89.9,
                        "discount": 15,
                        "human_volume": "80 г",
                        "volume": 80,
                        "volumeType": "g",
                        "itemsPerPack": 1,
                        "discountEndsAt": "2024-09-04T23:59:59.000+00:00",
                        "priceType": "perItem",
                        "gramsPerUnit": 80,
                        "unitPrice": 74.9,
                        "originalUnitPrice": 89.9,
                        "promoBadgeIds": [],
                        "score": null,
                        "labels": [],
                        "imageUrls": [
                            "https://imgproxy.kuper.ru/imgproxy/width-auto/czM6Ly9jb250ZW50LWltYWdlcy1wcm9kL3Byb2R1Y3RzLzMyMzc0NTg5L29yaWdpbmFsLzEvMjAyNC0wNi0yMVQwOSUzQTEwJTNBMjkuODkwOTk4JTJCMDAlM0EwMC8zMjM3NDU4OV8xLmpwZw==.jpg",
                            "https://imgproxy.kuper.ru/imgproxy/width-auto/czM6Ly9jb250ZW50LWltYWdlcy1wcm9kL3Byb2R1Y3RzLzMyMzc0NTg5L29yaWdpbmFsLzIvMjAyNC0wNi0yMVQwOSUzQTEwJTNBMzAuMjIzMTM4JTJCMDAlM0EwMC8zMjM3NDU4OV8yLmpwZw==.jpg",
                            "https://imgproxy.kuper.ru/imgproxy/width-auto/czM6Ly9jb250ZW50LWltYWdlcy1wcm9kL3Byb2R1Y3RzLzMyMzc0NTg5L29yaWdpbmFsLzMvMjAyNC0wNi0yMVQwOSUzQTEyJTNBMDYuNTg5MDM1JTJCMDAlM0EwMC8zMjM3NDU4OV8zLmpwZw==.jpg",
                            "https://imgproxy.kuper.ru/imgproxy/width-auto/czM6Ly9jb250ZW50LWltYWdlcy1wcm9kL3Byb2R1Y3RzLzMyMzc0NTg5L29yaWdpbmFsLzQvMjAyNC0wNi0yMVQwOSUzQTEyJTNBMDYuODMzNTU3JTJCMDAlM0EwMC8zMjM3NDU4OV80LmpwZw==.jpg"
                        ],
                        "requirements": [],
                        "slug": "shokolad-alpen-gold-molochnyy-s-fundukom-i-izyumom-80-g-f36e685",
                        "maxSelectQuantity": 999,
                        "canonicalUrl": "https://sbermarket.ru/products/32374589-shokolad-alpen-gold-molochnyy-s-fundukom-i-izyumom-80-g-f36e685",
                        "vatInfo": null,
                        "bmplInfo": {},
                        "maxPerOrder": null,
                        "ads_meta": null,
                        "withOptions": false,
                        "isBeneficial": false,
                        "storeId": "1"
                    },
                    {
                        "id": "254436",
                        "sku": "34778572",
                        "retailerSku": "254436",
                        "available": true,
                        "legacyOfferId": 35637602841,
                        "name": "Шоколад Фабрика имени Крупской темный с помадно-сливочной начинкой 47 г",
                        "price": 49.9,
                        "originalPrice": 57.9,
                        "discount": 8,
                        "human_volume": "47 г",
                        "volume": 47,
                        "volumeType": "g",
                        "itemsPerPack": 1,
                        "discountEndsAt": "2024-09-04T23:59:59.000+00:00",
                        "priceType": "perItem",
                        "gramsPerUnit": 47,
                        "unitPrice": 49.9,
                        "originalUnitPrice": 57.9,
                        "promoBadgeIds": [],
                        "score": null,
                        "labels": [],
                        "imageUrls": [
                            "https://imgproxy.kuper.ru/imgproxy/width-auto/czM6Ly9jb250ZW50LWltYWdlcy1wcm9kL3Byb2R1Y3RzLzM0Nzc4NTcyL29yaWdpbmFsLzEvMjAyNC0wNi0xNlQxNSUzQTQyJTNBNTIuMjE0ODM3JTJCMDAlM0EwMC8zNDc3ODU3Ml8xLmpwZw==.jpg"
                        ],
                        "requirements": [],
                        "slug": "shokolad-fabrika-imeni-krupskoy-temnyy-s-pomadno-slivochnoy-nachinkoy-47-g-0f007d6",
                        "maxSelectQuantity": 999,
                        "canonicalUrl": "https://sbermarket.ru/products/34778572-shokolad-fabrika-imeni-krupskoy-temnyy-s-pomadno-slivochnoy-nachinkoy-47-g-0f007d6",
                        "vatInfo": null,
                        "bmplInfo": {},
                        "maxPerOrder": null,
                        "ads_meta": null,
                        "withOptions": false,
                        "isBeneficial": false,
                        "storeId": "1"
                    },
                    {
                        "id": "275874",
                        "sku": "15650037",
                        "retailerSku": "275874",
                        "available": true,
                        "legacyOfferId": 231451,
                        "name": "Батончик Twix Minis шоколадный 184 г",
                        "price": 185,
                        "originalPrice": 215,
                        "discount": 30,
                        "human_volume": "184 г",
                        "volume": 184,
                        "volumeType": "g",
                        "itemsPerPack": 1,
                        "discountEndsAt": "2024-09-04T23:59:59.000+00:00",
                        "priceType": "perItem",
                        "gramsPerUnit": 184,
                        "unitPrice": 185,
                        "originalUnitPrice": 215,
                        "promoBadgeIds": [],
                        "score": 5,
                        "labels": [],
                        "imageUrls": [
                            "https://imgproxy.kuper.ru/imgproxy/width-auto/czM6Ly9jb250ZW50LWltYWdlcy1wcm9kL3Byb2R1Y3RzLzE1NjUwMDM3L29yaWdpbmFsLzEvMjAyMy0xMS0zMFQxOCUzQTUzJTNBMTguOTIyNjE2JTJCMDAlM0EwMC8xNTY1MDAzN18xLmpwZw==.jpg",
                            "https://imgproxy.kuper.ru/imgproxy/width-auto/czM6Ly9jb250ZW50LWltYWdlcy1wcm9kL3Byb2R1Y3RzLzE1NjUwMDM3L29yaWdpbmFsLzIvMjAyMy0xMS0zMFQxOCUzQTU5JTNBNDYuMDAxODM5JTJCMDAlM0EwMC8xNTY1MDAzN18yLmpwZw==.jpg",
                            "https://imgproxy.kuper.ru/imgproxy/width-auto/czM6Ly9jb250ZW50LWltYWdlcy1wcm9kL3Byb2R1Y3RzLzE1NjUwMDM3L29yaWdpbmFsLzMvMjAyMy0xMS0zMFQxOCUzQTUzJTNBMTkuMTMyNjQ0JTJCMDAlM0EwMC8xNTY1MDAzN18zLmpwZw==.jpg",
                            "https://imgproxy.kuper.ru/imgproxy/width-auto/czM6Ly9jb250ZW50LWltYWdlcy1wcm9kL3Byb2R1Y3RzLzE1NjUwMDM3L29yaWdpbmFsLzQvMjAyMy0xMS0zMFQxOCUzQTU5JTNBNDYuMTgzMzQ2JTJCMDAlM0EwMC8xNTY1MDAzN180LmpwZw==.jpg"
                        ],
                        "requirements": [],
                        "slug": "batonchik-twix-minis-shokoladnyy-184-g-0cf950a",
                        "maxSelectQuantity": 999,
                        "canonicalUrl": "https://sbermarket.ru/products/15650037-batonchik-twix-minis-shokoladnyy-184-g-0cf950a",
                        "vatInfo": null,
                        "bmplInfo": {},
                        "maxPerOrder": null,
                        "ads_meta": null,
                        "withOptions": false,
                        "isBeneficial": true,
                        "storeId": "1"
                    },
                    {
                        "id": "244024",
                        "sku": "32374613",
                        "retailerSku": "244024",
                        "available": true,
                        "legacyOfferId": 33642657001,
                        "name": "Шоколад Alpen Gold молочный с соленым арахисом и крекером 80 г",
                        "price": 69.9,
                        "originalPrice": 79.9,
                        "discount": 10,
                        "human_volume": "80 г",
                        "volume": 80,
                        "volumeType": "g",
                        "itemsPerPack": 1,
                        "discountEndsAt": "2024-09-04T23:59:59.000+00:00",
                        "priceType": "perItem",
                        "gramsPerUnit": 80,
                        "unitPrice": 69.9,
                        "originalUnitPrice": 79.9,
                        "promoBadgeIds": [],
                        "score": null,
                        "labels": [],
                        "imageUrls": [
                            "https://imgproxy.kuper.ru/imgproxy/width-auto/czM6Ly9jb250ZW50LWltYWdlcy1wcm9kL3Byb2R1Y3RzLzMyMzc0NjEzL29yaWdpbmFsLzEvMjAyNC0wNi0yMVQwOSUzQTEwJTNBMzMuMzY2NDMyJTJCMDAlM0EwMC8zMjM3NDYxM18xLmpwZw==.jpg",
                            "https://imgproxy.kuper.ru/imgproxy/width-auto/czM6Ly9jb250ZW50LWltYWdlcy1wcm9kL3Byb2R1Y3RzLzMyMzc0NjEzL29yaWdpbmFsLzIvMjAyNC0wNi0yMVQwOSUzQTEwJTNBMzMuNjY3NTYwJTJCMDAlM0EwMC8zMjM3NDYxM18yLmpwZw==.jpg",
                            "https://imgproxy.kuper.ru/imgproxy/width-auto/czM6Ly9jb250ZW50LWltYWdlcy1wcm9kL3Byb2R1Y3RzLzMyMzc0NjEzL29yaWdpbmFsLzMvMjAyNC0wNi0yMVQwOSUzQTEyJTNBMDkuNTczMTMzJTJCMDAlM0EwMC8zMjM3NDYxM18zLmpwZw==.jpg",
                            "https://imgproxy.kuper.ru/imgproxy/width-auto/czM6Ly9jb250ZW50LWltYWdlcy1wcm9kL3Byb2R1Y3RzLzMyMzc0NjEzL29yaWdpbmFsLzQvMjAyNC0wNi0yMVQwOSUzQTEyJTNBMDkuNzkwMDIyJTJCMDAlM0EwMC8zMjM3NDYxM180LmpwZw==.jpg"
                        ],
                        "requirements": [],
                        "slug": "shokolad-alpen-gold-molochnyy-s-solenym-arahisom-i-krekerom-80-g-14f12b8",
                        "maxSelectQuantity": 999,
                        "canonicalUrl": "https://sbermarket.ru/products/32374613-shokolad-alpen-gold-molochnyy-s-solenym-arahisom-i-krekerom-80-g-14f12b8",
                        "vatInfo": null,
                        "bmplInfo": {},
                        "maxPerOrder": null,
                        "ads_meta": null,
                        "withOptions": false,
                        "isBeneficial": false,
                        "storeId": "1"
                    },
                    {
                        "id": "492756",
                        "sku": "36283",
                        "retailerSku": "492756",
                        "available": true,
                        "legacyOfferId": 265258,
                        "name": "Батончик Picnic шоколадный с грецким орехом 52 г",
                        "price": 58.9,
                        "originalPrice": 62.9,
                        "discount": 4,
                        "human_volume": "52 г",
                        "volume": 52,
                        "volumeType": "g",
                        "itemsPerPack": 1,
                        "discountEndsAt": "2024-09-04T23:59:59.000+00:00",
                        "priceType": "perItem",
                        "gramsPerUnit": 52,
                        "unitPrice": 58.9,
                        "originalUnitPrice": 62.9,
                        "promoBadgeIds": [],
                        "score": 4.1,
                        "labels": [],
                        "imageUrls": [
                            "https://imgproxy.kuper.ru/imgproxy/width-auto/czM6Ly9jb250ZW50LWltYWdlcy1wcm9kL3Byb2R1Y3RzLzM2MjgzL29yaWdpbmFsLzEvMjAyNC0wNy0wNFQxMCUzQTQ0JTNBMTcuOTk1MTYyJTJCMDAlM0EwMC8zNjI4M18xLmpwZw==.jpg",
                            "https://imgproxy.kuper.ru/imgproxy/width-auto/czM6Ly9jb250ZW50LWltYWdlcy1wcm9kL3Byb2R1Y3RzLzM2MjgzL29yaWdpbmFsLzIvMjAyMi0wOC0yMlQyMyUzQTU3JTNBNTYuOTcxMDAwJTJCMDAlM0EwMC8zNjI4M18yLmpwZw==.jpg"
                        ],
                        "requirements": [],
                        "slug": "batonchik-picnic-shokoladnyy-s-gretskim-orehom-52-g",
                        "maxSelectQuantity": 999,
                        "canonicalUrl": "https://sbermarket.ru/products/36283-batonchik-picnic-shokoladnyy-s-gretskim-orehom-52-g",
                        "vatInfo": null,
                        "bmplInfo": {},
                        "maxPerOrder": null,
                        "ads_meta": null,
                        "withOptions": false,
                        "isBeneficial": true,
                        "storeId": "1"
                    },
                    {
                        "id": "215868",
                        "sku": "20629180",
                        "retailerSku": "215868",
                        "available": true,
                        "legacyOfferId": 31500498421,
                        "name": "Шоколад Красный Октябрь Слава темный 75 г",
                        "price": 99.9,
                        "originalPrice": 127,
                        "discount": 27.1,
                        "human_volume": "75 г",
                        "volume": 75,
                        "volumeType": "g",
                        "itemsPerPack": 1,
                        "discountEndsAt": "2024-09-04T23:59:59.000+00:00",
                        "priceType": "perItem",
                        "gramsPerUnit": 75,
                        "unitPrice": 99.9,
                        "originalUnitPrice": 127,
                        "promoBadgeIds": [],
                        "score": 5,
                        "labels": [],
                        "imageUrls": [
                            "https://imgproxy.kuper.ru/imgproxy/width-auto/czM6Ly9jb250ZW50LWltYWdlcy1wcm9kL3Byb2R1Y3RzLzIwNjI5MTgwL29yaWdpbmFsLzEvMjAyMy0xMS0yOFQxNyUzQTU1JTNBMzMuNjE1Nzc4JTJCMDAlM0EwMC8yMDYyOTE4MF8xLmpwZw==.jpg",
                            "https://imgproxy.kuper.ru/imgproxy/width-auto/czM6Ly9jb250ZW50LWltYWdlcy1wcm9kL3Byb2R1Y3RzLzIwNjI5MTgwL29yaWdpbmFsLzIvMjAyMy0xMS0yOFQxOCUzQTAxJTNBMTAuNzk5MDQ3JTJCMDAlM0EwMC8yMDYyOTE4MF8yLmpwZw==.jpg",
                            "https://imgproxy.kuper.ru/imgproxy/width-auto/czM6Ly9jb250ZW50LWltYWdlcy1wcm9kL3Byb2R1Y3RzLzIwNjI5MTgwL29yaWdpbmFsLzMvMjAyMy0xMS0yOFQxOCUzQTAxJTNBMTEuMDA2MzMxJTJCMDAlM0EwMC8yMDYyOTE4MF8zLmpwZw==.jpg",
                            "https://imgproxy.kuper.ru/imgproxy/width-auto/czM6Ly9jb250ZW50LWltYWdlcy1wcm9kL3Byb2R1Y3RzLzIwNjI5MTgwL29yaWdpbmFsLzQvMjAyMy0xMS0yOFQxOCUzQTAxJTNBMTEuMjQxNDcwJTJCMDAlM0EwMC8yMDYyOTE4MF80LmpwZw==.jpg"
                        ],
                        "requirements": [],
                        "slug": "shokolad-krasnyy-oktyabr-slava-temnyy-75-g-6c064e5",
                        "maxSelectQuantity": 999,
                        "canonicalUrl": "https://sbermarket.ru/products/20629180-shokolad-krasnyy-oktyabr-slava-temnyy-75-g-6c064e5",
                        "vatInfo": null,
                        "bmplInfo": {},
                        "maxPerOrder": null,
                        "ads_meta": null,
                        "withOptions": false,
                        "isBeneficial": true,
                        "storeId": "1"
                    },
                    {
                        "id": "427048",
                        "sku": "36249",
                        "retailerSku": "427048",
                        "available": true,
                        "legacyOfferId": 253524553,
                        "name": "Батончик Бабаевский с шоколадной начинкой 50 г",
                        "price": 54.9,
                        "originalPrice": 59.9,
                        "discount": 5,
                        "human_volume": "50 г",
                        "volume": 50,
                        "volumeType": "g",
                        "itemsPerPack": 1,
                        "discountEndsAt": "2024-09-04T23:59:59.000+00:00",
                        "priceType": "perItem",
                        "gramsPerUnit": 50,
                        "unitPrice": 54.9,
                        "originalUnitPrice": 59.9,
                        "promoBadgeIds": [],
                        "score": 4.4,
                        "labels": [],
                        "imageUrls": [
                            "https://imgproxy.kuper.ru/imgproxy/width-auto/czM6Ly9jb250ZW50LWltYWdlcy1wcm9kL3Byb2R1Y3RzLzM2MjQ5L29yaWdpbmFsLzEvMjAyMy0xMS0yNFQxNiUzQTMyJTNBMDEuNjE0MTQ5JTJCMDAlM0EwMC8zNjI0OV8xLmpwZw==.jpg"
                        ],
                        "requirements": [],
                        "slug": "batonchik-babaevskiy-s-shokoladnoy-nachinkoy-50-g-1cf2e15",
                        "maxSelectQuantity": 999,
                        "canonicalUrl": "https://sbermarket.ru/products/36249-batonchik-babaevskiy-s-shokoladnoy-nachinkoy-50-g-1cf2e15",
                        "vatInfo": null,
                        "bmplInfo": {},
                        "maxPerOrder": null,
                        "ads_meta": null,
                        "withOptions": false,
                        "isBeneficial": true,
                        "storeId": "1"
                    },
                    {
                        "id": "366306",
                        "sku": "16321",
                        "retailerSku": "366306",
                        "available": true,
                        "legacyOfferId": 231472,
                        "name": "Шоколад Rioba горький 72% 800 г",
                        "price": 939,
                        "originalPrice": 1099,
                        "discount": 160,
                        "human_volume": "800 г",
                        "volume": 800,
                        "volumeType": "g",
                        "itemsPerPack": 1,
                        "discountEndsAt": "2024-09-04T23:59:59.000+00:00",
                        "priceType": "perItem",
                        "gramsPerUnit": 800,
                        "unitPrice": 939,
                        "originalUnitPrice": 1099,
                        "promoBadgeIds": [],
                        "score": 4.8,
                        "labels": [],
                        "imageUrls": [
                            "https://imgproxy.kuper.ru/imgproxy/width-auto/czM6Ly9jb250ZW50LWltYWdlcy1wcm9kL3Byb2R1Y3RzLzE2MzIxL29yaWdpbmFsLzEvMjAyMy0xMS0yNFQxNiUzQTI0JTNBNDAuNjA2NjUxJTJCMDAlM0EwMC8xNjMyMV8xLmpwZw==.jpg",
                            "https://imgproxy.kuper.ru/imgproxy/width-auto/czM6Ly9jb250ZW50LWltYWdlcy1wcm9kL3Byb2R1Y3RzLzE2MzIxL29yaWdpbmFsLzIvMjAyMy0xMS0yNFQxNiUzQTI0JTNBNDAuNzg2MDM4JTJCMDAlM0EwMC8xNjMyMV8yLmpwZw==.jpg",
                            "https://imgproxy.kuper.ru/imgproxy/width-auto/czM6Ly9jb250ZW50LWltYWdlcy1wcm9kL3Byb2R1Y3RzLzE2MzIxL29yaWdpbmFsLzMvMjAyMy0xMS0yNFQxNiUzQTMzJTNBMjguMDMwMzY5JTJCMDAlM0EwMC8xNjMyMV8zLmpwZw==.jpg",
                            "https://imgproxy.kuper.ru/imgproxy/width-auto/czM6Ly9jb250ZW50LWltYWdlcy1wcm9kL3Byb2R1Y3RzLzE2MzIxL29yaWdpbmFsLzQvMjAyMy0xMS0yNFQxNiUzQTMzJTNBMjguMjE4OTYwJTJCMDAlM0EwMC8xNjMyMV80LmpwZw==.jpg",
                            "https://imgproxy.kuper.ru/imgproxy/width-auto/czM6Ly9jb250ZW50LWltYWdlcy1wcm9kL3Byb2R1Y3RzLzE2MzIxL29yaWdpbmFsLzUvMjAyMy0xMS0yNFQxNiUzQTMzJTNBMjguMzk1NDY3JTJCMDAlM0EwMC8xNjMyMV81LmpwZw==.jpg"
                        ],
                        "requirements": [],
                        "slug": "shokolad-rioba-gor-kiy-72-800-g-ce480e5",
                        "maxSelectQuantity": 999,
                        "canonicalUrl": "https://sbermarket.ru/products/16321-shokolad-rioba-gor-kiy-72-800-g-ce480e5",
                        "vatInfo": null,
                        "bmplInfo": {},
                        "maxPerOrder": null,
                        "ads_meta": null,
                        "withOptions": false,
                        "isBeneficial": true,
                        "storeId": "1"
                    },
                    {
                        "id": "256662",
                        "sku": "35365507",
                        "retailerSku": "256662",
                        "available": true,
                        "legacyOfferId": 37563248811,
                        "name": "Шоколад Milka молочный цельный фундук 80 г",
                        "price": 119,
                        "originalPrice": 139,
                        "discount": 20,
                        "human_volume": "80 г",
                        "volume": 80,
                        "volumeType": "g",
                        "itemsPerPack": 1,
                        "discountEndsAt": "2024-09-04T23:59:59.000+00:00",
                        "priceType": "perItem",
                        "gramsPerUnit": 80,
                        "unitPrice": 119,
                        "originalUnitPrice": 139,
                        "promoBadgeIds": [],
                        "score": null,
                        "labels": [],
                        "imageUrls": [
                            "https://imgproxy.kuper.ru/imgproxy/width-auto/czM6Ly9jb250ZW50LWltYWdlcy1wcm9kL3Byb2R1Y3RzLzM1MzY1NTA3L29yaWdpbmFsLzEvMjAyNC0wNy0wMVQxNiUzQTAzJTNBMzQuMTMyMjQyJTJCMDAlM0EwMC8zNTM2NTUwN18xLmpwZw==.jpg",
                            "https://imgproxy.kuper.ru/imgproxy/width-auto/czM6Ly9jb250ZW50LWltYWdlcy1wcm9kL3Byb2R1Y3RzLzM1MzY1NTA3L29yaWdpbmFsLzIvMjAyNC0wNy0wMVQxNiUzQTAzJTNBMzUuNTQ2MDc5JTJCMDAlM0EwMC8zNTM2NTUwN18yLmpwZw==.jpg"
                        ],
                        "requirements": [],
                        "slug": "shokolad-milka-molochnyy-tsel-nyy-funduk-80-g",
                        "maxSelectQuantity": 999,
                        "canonicalUrl": "https://sbermarket.ru/products/35365507-shokolad-milka-molochnyy-tsel-nyy-funduk-80-g",
                        "vatInfo": null,
                        "bmplInfo": {},
                        "maxPerOrder": null,
                        "ads_meta": null,
                        "withOptions": false,
                        "isBeneficial": false,
                        "storeId": "1"
                    }
                ],
                "facets": [
                    {
                        "key": "discounted",
                        "name": "Товары со скидкой",
                        "type": "toggle",
                        "options": [
                            {
                                "name": null,
                                "value": 1,
                                "count": 154,
                                "permalink": null,
                                "active": true,
                                "bound": 0
                            }
                        ]
                    },
                    {
                        "key": "brand",
                        "name": "Бренд",
                        "type": "multiSelect",
                        "options": [
                            {
                                "name": "Snickers",
                                "value": 10467,
                                "count": 3,
                                "permalink": "snickers",
                                "active": false,
                                "bound": 0
                            },
                            {
                                "name": "Twix",
                                "value": 11525,
                                "count": 1,
                                "permalink": "twix",
                                "active": false,
                                "bound": 0
                            },
                            {
                                "name": "Zentis",
                                "value": 12334,
                                "count": 1,
                                "permalink": "zentis",
                                "active": false,
                                "bound": 0
                            },
                            {
                                "name": "Агуша",
                                "value": 12512,
                                "count": 1,
                                "permalink": "agusha",
                                "active": false,
                                "bound": 0
                            },
                            {
                                "name": "Бабаевский",
                                "value": 13021,
                                "count": 9,
                                "permalink": "babaevskiy",
                                "active": false,
                                "bound": 0
                            },
                            {
                                "name": "Без бренда",
                                "value": 13173,
                                "count": 1,
                                "permalink": "bez-brenda",
                                "active": false,
                                "bound": 0
                            },
                            {
                                "name": "BombBar",
                                "value": 1535,
                                "count": 9,
                                "permalink": "bombbar",
                                "active": false,
                                "bound": 0
                            },
                            {
                                "name": "Коломенское",
                                "value": 16072,
                                "count": 1,
                                "permalink": "kolomenskoe",
                                "active": false,
                                "bound": 0
                            },
                            {
                                "name": "Конфитрейд",
                                "value": 16164,
                                "count": 1,
                                "permalink": "konfitreyd",
                                "active": false,
                                "bound": 0
                            },
                            {
                                "name": "Красный Октябрь",
                                "value": 16327,
                                "count": 12,
                                "permalink": "krasnyy-oktyabr",
                                "active": false,
                                "bound": 0
                            },
                            {
                                "name": "Bounty",
                                "value": 1658,
                                "count": 1,
                                "permalink": "bounty",
                                "active": false,
                                "bound": 0
                            },
                            {
                                "name": "Bucheron",
                                "value": 1764,
                                "count": 2,
                                "permalink": "bucheron",
                                "active": false,
                                "bound": 0
                            },
                            {
                                "name": "Славянка",
                                "value": 20159,
                                "count": 1,
                                "permalink": "slavyanka",
                                "active": false,
                                "bound": 0
                            },
                            {
                                "name": "Фабрика имени Крупской",
                                "value": 21309,
                                "count": 2,
                                "permalink": "fabrika-imeni-krupskoy",
                                "active": false,
                                "bound": 0
                            },
                            {
                                "name": "ФрутоНяня",
                                "value": 21538,
                                "count": 2,
                                "permalink": "frutonyanya",
                                "active": false,
                                "bound": 0
                            },
                            {
                                "name": "Chikalab",
                                "value": 2351,
                                "count": 4,
                                "permalink": "chikalab-c1dba43",
                                "active": false,
                                "bound": 0
                            },
                            {
                                "name": "Россия - щедрая душа!",
                                "value": 25161,
                                "count": 10,
                                "permalink": "rossiya-schedraya-dusha-321c6d16-1353-4a35-a64a-28188200a3a1",
                                "active": false,
                                "bound": 0
                            },
                            {
                                "name": "Победа Вкуса",
                                "value": 32424,
                                "count": 3,
                                "permalink": "pobeda-vkusa-8197e69",
                                "active": false,
                                "bound": 0
                            },
                            {
                                "name": "Dove",
                                "value": 3382,
                                "count": 3,
                                "permalink": "dove",
                                "active": false,
                                "bound": 0
                            },
                            {
                                "name": "Nature's Own Factory",
                                "value": 34569,
                                "count": 5,
                                "permalink": "nature-s-own-factory",
                                "active": false,
                                "bound": 0
                            },
                            {
                                "name": "Alpen Gold",
                                "value": 346,
                                "count": 22,
                                "permalink": "alpen-gold",
                                "active": false,
                                "bound": 0
                            },
                            {
                                "name": "Коркунов",
                                "value": 36253,
                                "count": 3,
                                "permalink": "korkunov",
                                "active": false,
                                "bound": 0
                            },
                            {
                                "name": "Snaq Fabriq",
                                "value": 40400,
                                "count": 2,
                                "permalink": "snaq-fabriq",
                                "active": false,
                                "bound": 0
                            },
                            {
                                "name": "Gerber",
                                "value": 4684,
                                "count": 2,
                                "permalink": "gerber",
                                "active": false,
                                "bound": 0
                            },
                            {
                                "name": "Crony",
                                "value": 48156,
                                "count": 2,
                                "permalink": "crony",
                                "active": false,
                                "bound": 0
                            },
                            {
                                "name": "Шоки Токи",
                                "value": 55365,
                                "count": 1,
                                "permalink": "shoki-toki-fe4a894",
                                "active": false,
                                "bound": 0
                            },
                            {
                                "name": "Goodmix",
                                "value": 65111,
                                "count": 3,
                                "permalink": "goodmix",
                                "active": false,
                                "bound": 0
                            },
                            {
                                "name": "N Nature",
                                "value": 67473,
                                "count": 2,
                                "permalink": "n-nature",
                                "active": false,
                                "bound": 0
                            },
                            {
                                "name": "Lion",
                                "value": 6863,
                                "count": 1,
                                "permalink": "lion",
                                "active": false,
                                "bound": 0
                            },
                            {
                                "name": "Mars",
                                "value": 7342,
                                "count": 2,
                                "permalink": "mars",
                                "active": false,
                                "bound": 0
                            },
                            {
                                "name": "Milka",
                                "value": 7657,
                                "count": 13,
                                "permalink": "milka",
                                "active": false,
                                "bound": 0
                            },
                            {
                                "name": "Milky Way",
                                "value": 7666,
                                "count": 1,
                                "permalink": "milky-way",
                                "active": false,
                                "bound": 0
                            },
                            {
                                "name": "Nature",
                                "value": 8095,
                                "count": 1,
                                "permalink": "nature",
                                "active": false,
                                "bound": 0
                            },
                            {
                                "name": "Nuts",
                                "value": 8353,
                                "count": 1,
                                "permalink": "nuts",
                                "active": false,
                                "bound": 0
                            },
                            {
                                "name": "Picnic",
                                "value": 8931,
                                "count": 2,
                                "permalink": "picnic",
                                "active": false,
                                "bound": 0
                            },
                            {
                                "name": "Racionika",
                                "value": 9381,
                                "count": 2,
                                "permalink": "racionika",
                                "active": false,
                                "bound": 0
                            },
                            {
                                "name": "Rioba",
                                "value": 9587,
                                "count": 14,
                                "permalink": "rioba",
                                "active": false,
                                "bound": 0
                            },
                            {
                                "name": "Ritter Sport",
                                "value": 9605,
                                "count": 8,
                                "permalink": "ritter-sport",
                                "active": false,
                                "bound": 0
                            }
                        ]
                    },
                    {
                        "key": "site_category_filter_20589",
                        "name": "Тип продукта",
                        "type": "multiSelect",
                        "options": [
                            {
                                "name": "Батончик",
                                "value": 173310,
                                "count": 46,
                                "permalink": "batonchik-173310",
                                "active": false,
                                "bound": 0
                            },
                            {
                                "name": "Плитка",
                                "value": 173313,
                                "count": 105,
                                "permalink": "plitka-173313",
                                "active": false,
                                "bound": 0
                            },
                            {
                                "name": "Яйцо шоколадное",
                                "value": 173316,
                                "count": 2,
                                "permalink": "yaytso-shokoladnoe-173316",
                                "active": false,
                                "bound": 0
                            },
                            {
                                "name": "Паста шоколадная",
                                "value": 355909,
                                "count": 1,
                                "permalink": "pasta-shokoladnaya-355909",
                                "active": false,
                                "bound": 0
                            }
                        ]
                    },
                    {
                        "key": "site_category_filter_20590",
                        "name": "Вид шоколада",
                        "type": "multiSelect",
                        "options": [
                            {
                                "name": "Молочный",
                                "value": 173318,
                                "count": 89,
                                "permalink": "molochnyy-173318",
                                "active": false,
                                "bound": 0
                            },
                            {
                                "name": "Темный/Горький",
                                "value": 188207,
                                "count": 35,
                                "permalink": "temnyy-gor-kiy-188207",
                                "active": false,
                                "bound": 0
                            },
                            {
                                "name": "Белый",
                                "value": 173317,
                                "count": 9,
                                "permalink": "belyy-173317",
                                "active": false,
                                "bound": 0
                            },
                            {
                                "name": "Пористый",
                                "value": 188208,
                                "count": 6,
                                "permalink": "poristyy-188208",
                                "active": false,
                                "bound": 0
                            }
                        ]
                    },
                    {
                        "key": "site_category_filter_20592",
                        "name": "Начинка/Вкус",
                        "type": "multiSelect",
                        "options": [
                            {
                                "name": "Без начинки",
                                "value": 173322,
                                "count": 28,
                                "permalink": "bez-nachinki-173322",
                                "active": false,
                                "bound": 0
                            },
                            {
                                "name": "Ваниль",
                                "value": 173323,
                                "count": 2,
                                "permalink": "vanil-173323",
                                "active": false,
                                "bound": 0
                            },
                            {
                                "name": "Алкоголь",
                                "value": 173324,
                                "count": 1,
                                "permalink": "alkogol-173324",
                                "active": false,
                                "bound": 0
                            },
                            {
                                "name": "Вафли",
                                "value": 173325,
                                "count": 5,
                                "permalink": "vafli-173325",
                                "active": false,
                                "bound": 0
                            },
                            {
                                "name": "Воздушный рис",
                                "value": 173326,
                                "count": 1,
                                "permalink": "vozdushnyy-ris-173326",
                                "active": false,
                                "bound": 0
                            },
                            {
                                "name": "Изюм",
                                "value": 173328,
                                "count": 7,
                                "permalink": "izyum-173328",
                                "active": false,
                                "bound": 0
                            },
                            {
                                "name": "Йогурт",
                                "value": 173329,
                                "count": 3,
                                "permalink": "yogurt-173329",
                                "active": false,
                                "bound": 0
                            },
                            {
                                "name": "Карамель",
                                "value": 173330,
                                "count": 23,
                                "permalink": "karamel-173330",
                                "active": false,
                                "bound": 0
                            },
                            {
                                "name": "Кокос",
                                "value": 173331,
                                "count": 13,
                                "permalink": "kokos-173331",
                                "active": false,
                                "bound": 0
                            },
                            {
                                "name": "Кофе",
                                "value": 173332,
                                "count": 3,
                                "permalink": "kofe-173332",
                                "active": false,
                                "bound": 0
                            },
                            {
                                "name": "Крем / Паста",
                                "value": 173333,
                                "count": 2,
                                "permalink": "krem-pasta-173333",
                                "active": false,
                                "bound": 0
                            },
                            {
                                "name": "Мармелад",
                                "value": 173335,
                                "count": 2,
                                "permalink": "marmelad-173335",
                                "active": false,
                                "bound": 0
                            },
                            {
                                "name": "Марципан",
                                "value": 173336,
                                "count": 2,
                                "permalink": "martsipan-173336",
                                "active": false,
                                "bound": 0
                            },
                            {
                                "name": "Молочный",
                                "value": 173337,
                                "count": 2,
                                "permalink": "molochnyy-173337",
                                "active": false,
                                "bound": 0
                            },
                            {
                                "name": "Нуга",
                                "value": 173339,
                                "count": 5,
                                "permalink": "nuga-173339",
                                "active": false,
                                "bound": 0
                            },
                            {
                                "name": "Орехи",
                                "value": 173340,
                                "count": 59,
                                "permalink": "orehi-173340",
                                "active": false,
                                "bound": 0
                            },
                            {
                                "name": "Оригинальный",
                                "value": 173341,
                                "count": 10,
                                "permalink": "original-nyy-173341",
                                "active": false,
                                "bound": 0
                            },
                            {
                                "name": "Печенье",
                                "value": 173342,
                                "count": 14,
                                "permalink": "pechenie-173342",
                                "active": false,
                                "bound": 0
                            },
                            {
                                "name": "Сливки",
                                "value": 173344,
                                "count": 1,
                                "permalink": "slivki-173344",
                                "active": false,
                                "bound": 0
                            },
                            {
                                "name": "Фрукты",
                                "value": 173345,
                                "count": 17,
                                "permalink": "frukty-173345",
                                "active": false,
                                "bound": 0
                            },
                            {
                                "name": "Ягоды",
                                "value": 173348,
                                "count": 16,
                                "permalink": "yagody-173348",
                                "active": false,
                                "bound": 0
                            }
                        ]
                    },
                    {
                        "key": "site_category_filter_40315",
                        "name": "Вид батончика",
                        "type": "multiSelect",
                        "options": [
                            {
                                "name": "Злаковый",
                                "value": 459930,
                                "count": 8,
                                "permalink": "zlakovyy-459930",
                                "active": false,
                                "bound": 0
                            },
                            {
                                "name": "Протеиновые ",
                                "value": 355907,
                                "count": 9,
                                "permalink": "proteinovye-355907",
                                "active": false,
                                "bound": 0
                            },
                            {
                                "name": "Шоколадный",
                                "value": 459967,
                                "count": 28,
                                "permalink": "shokoladnyy-459967",
                                "active": false,
                                "bound": 0
                            }
                        ]
                    },
                    {
                        "key": "site_category_filter_20593",
                        "name": "Без сахара",
                        "type": "multiSelect",
                        "options": [
                            {
                                "name": "Да",
                                "value": 173349,
                                "count": 15,
                                "permalink": "da-173349",
                                "active": false,
                                "bound": 0
                            }
                        ]
                    },
                    {
                        "key": "site_category_filter_40306",
                        "name": "Для детей",
                        "type": "multiSelect",
                        "options": [
                            {
                                "name": "Да",
                                "value": 355763,
                                "count": 4,
                                "permalink": "da-355763",
                                "active": false,
                                "bound": 0
                            }
                        ]
                    },
                    {
                        "key": "site_category_filter_41689",
                        "name": "Мини - формат",
                        "type": "multiSelect",
                        "options": [
                            {
                                "name": "Да",
                                "value": 376201,
                                "count": 11,
                                "permalink": "da-376201",
                                "active": false,
                                "bound": 0
                            }
                        ]
                    },
                    {
                        "key": "site_category_filter_41678",
                        "name": "Энергетическая ценность на 100 г",
                        "type": "multiSelect",
                        "options": [
                            {
                                "name": "31 - 99 ккал",
                                "value": 376219,
                                "count": 1,
                                "permalink": "31-99-kkal-376219",
                                "active": false,
                                "bound": 0
                            },
                            {
                                "name": "100 - 199 ккал",
                                "value": 376220,
                                "count": 1,
                                "permalink": "100-199-kkal-376220",
                                "active": false,
                                "bound": 0
                            },
                            {
                                "name": "200 - 400 ккал",
                                "value": 376221,
                                "count": 21,
                                "permalink": "200-400-kkal-376221",
                                "active": false,
                                "bound": 0
                            },
                            {
                                "name": "401 - 650 ккал",
                                "value": 382009,
                                "count": 131,
                                "permalink": "401-650-kkal-382009",
                                "active": false,
                                "bound": 0
                            }
                        ]
                    },
                    {
                        "key": "site_category_filter_41677",
                        "name": "Категория",
                        "type": "multiSelect",
                        "options": [
                            {
                                "name": "Диабетический продукт",
                                "value": 376175,
                                "count": 3,
                                "permalink": "diabeticheskiy-produkt-376175",
                                "active": false,
                                "bound": 0
                            }
                        ]
                    },
                    {
                        "key": "site_category_filter_20594",
                        "name": "Экомаркировка",
                        "type": "multiSelect",
                        "options": [
                            {
                                "name": "Все",
                                "value": 173350,
                                "count": 2,
                                "permalink": "vse-173350",
                                "active": false,
                                "bound": 0
                            }
                        ]
                    }
                ],
                "meta": {
                    "currentPage": "1",
                    "nextPage": "2",
                    "previousPage": null,
                    "totalPages": "7",
                    "perPage": "24",
                    "total_count": "154"
                },
                "sort": [
                    {
                        "key": "popularity",
                        "name": "По популярности",
                        "order": "desc",
                        "active": true
                    },
                    {
                        "key": "priceAsc",
                        "name": "Сначала дешевые",
                        "order": "asc",
                        "active": false
                    },
                    {
                        "key": "price_desc",
                        "name": "Сначала дорогие",
                        "order": "desc",
                        "active": false
                    },
                    {
                        "key": "unitPriceAsc",
                        "name": "Выгоднее по весу",
                        "order": "asc",
                        "active": false
                    }
                ],
                "promoBadges": [],
                "root_categories": {
                    "key": "root_category",
                    "name": "Категория",
                    "type": "select",
                    "options": []
                },
                "private_filters": {
                    "inStock": true,
                    "withSimilar": false
                },
                "applied_features": [],
                "searchQueryUuid": "dd0dc6bb-9410-46c3-bbb8-12e1ff9b8a21"
            } as unknown as CatalogCatalogWebV1Swagger.CatalogWebV1GetProductListResponse
        }),
      catalogWebV1ServiceGetSeoProduct: (
        canonicalPermalink: string,
        query?: {
          tenantId?: string
        },
        params: RequestParams = {}
      ) =>
        this.request<
          CatalogCatalogWebV1Swagger.CatalogWebV1GetSeoProductResponse,
          CatalogCatalogWebV1Swagger.RpcStatus
        >({
          path: `/api/catalog/web/v1/seo/products/${canonicalPermalink}`,
          method: 'GET',
          query: query,
          format: 'json',
          ...params,
        }),
    },
    suggestsV1Swagger: {
      suggestsGetCategorySuggests: (
        query?: {
          q?: string
          /** @format int64 */
          sid?: string
          tenantId?: string
        },
        params: RequestParams = {}
      ) =>
        this.request<
          CatalogSuggestsV1Swagger.SuggestsV1GetCategorySuggestsResponse,
          CatalogSuggestsV1Swagger.RpcStatus
        >({
          path: `/api/web/v1/suggests/category`,
          method: 'GET',
          query: query,
          format: 'json',
          ...params,
        }),
      suggestsGetWebSuggests: (
        query?: {
          q?: string
          /** @format int64 */
          sid?: string
          tenantId?: string
        },
        params: RequestParams = {}
      ) =>
        this.request<
          CatalogSuggestsV1Swagger.SuggestsV1GetWebSuggestsResponse,
          CatalogSuggestsV1Swagger.RpcStatus
        >({
          path: `/api/web/v1/suggests`,
          method: 'GET',
          query: query,
          format: 'json',
          ...params,
        }),
    },
    v3: {
      v3MulticardsList: (
        query: {
          /**
           * Пермалинк
           * @example "moloko-3-2-ul-trapasterizovannoe-925-ml-domik-v-derevne-bzmzh-97ce822"
           */
          permalink: string
          /**
           * Айди магазина
           * @example "1"
           */
          storeId: string
          /**
           * Тенант
           * @example "metro"
           */
          tenantId: string
          /**
           * Анонимус
           * @example "2f6e55c95d30c113"
           */
          anonymousId?: string
          /** Selected options sku */
          selected?: Record<string, string>
          /**
           * Хлебные крошки для сео?
           * @default false
           */
          isSeo?: boolean
        },
        params: RequestParams = {}
      ) =>
        this.request<CatalogV3.MulticardResponse, any>({
          path: `/api/v3/multicards`,
          method: 'GET',
          query: query,
          format: 'json',
          ...params,
        }),
      v3MultisearchesList: (
        query: {
          /**
           * Широта, допустимые значения: [-90, 90] (Необязательный для самовывоза)
           * @min -90
           * @max 90
           * @example 55.824678
           */
          'lat': number
          /**
           * Долгота, допустимые значения: [-180, 180] (Необязательный для самовывоза)
           * @min -180
           * @max 180
           * @example 37.499489
           */
          'lon': number
          /**
           * Способ доставки: delivery - для доставки, pickup_from_store - для самовывоза,
           *           также используется для фильтрации ближайших слотов доставки
           *           при передаче параметра include=closest_shipping_options
           * @example "delivery"
           */
          'shippingMethod'?: 'delivery' | 'pickup_from_store'
          /**
           * Идентификатор или slug ретейлера
           * @example "metro"
           */
          'retailerId'?: string
          /**
           * Идентификатор города
           * @example "28"
           */
          'cityId'?: string
          /** Какие поля включать в ответ, макс. длина 255 */
          'include'?: string[]
          /**
           * Ограничение радиуса поиска магазинов самовывоза.
           *                       Работает только с lat/lon и shipping_method=pickup_from_store
           * @min -1
           * @max 50000
           * @example -1
           */
          'radius'?: number
          /** Строка поиска */
          'q'?: string
          /**
           * Фильтр по вертикали
           * @default ["all"]
           * @example ["all"]
           */
          'verticals'?: ('all' | 'grocery' | 'restaurants')[]
          /** Строка поиска */
          'slug'?: string
          /**
           * Идентификаторы категорий
           * @example [1,2,3]
           */
          'taxon_ids[]'?: number[]
          /**
           * Тенант
           * @maxLength 64
           * @example "sbermarket"
           */
          'tenant'?: string
          /**
           * Фильтр по label
           * @example ["0ddde525-595c-4b9d-a0ba-9753da114eb8","electronics"]
           */
          'labels[]'?: string[]
          /**
           * Идентификатор последнего магазина в предыдущей выборке, используемый для пагинации. Этот параметр не передается для первой страницы, но указывается для последующих страниц, чтобы определить, с какого магазина продолжить выборку.
           * @min 1
           * @example 21
           */
          'lastSeenStoreId'?: number
          /**
           * Количество элементов на одной странице результатов
           * @min 1
           * @example 25
           */
          'perPage'?: number
        },
        params: RequestParams = {}
      ) =>
        this.request<
          CatalogV3.Store[],
          CatalogV3.ErrorsObject | (CatalogV3.ErrorsObject | CatalogV3.SimpleError)
        >({
          path: `/api/v3/multisearches`,
          method: 'GET',
          query: query,
          format: 'json',
          ...params,
        }),
    },
  }
}
