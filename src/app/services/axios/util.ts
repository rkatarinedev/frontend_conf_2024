import qs from 'qs'
import type { IStringifyOptions } from 'qs'
import toSnakecaseKeys from 'snakecase-keys'
import map from 'map-obj'
import toCamelcase from 'to-camel-case'
import type { CamelCasedPropertiesDeep } from 'type-fest'

// https://github.com/sindresorhus/camelcase/issues/77

export function toCamelcaseKeys<T extends Record<string, any>>(data: T) {
    return map(data, (key, val) => [toCamelcase(key as string), val], {
        deep: true,
    }) as CamelCasedPropertiesDeep<T>
}

export function paramsSerializer(params: unknown, options?: IStringifyOptions) {
    return qs.stringify(
        {
            skipNulls: true,
            arrayFormat: 'brackets',
            ...options,
        }
    )
}

export function transformRequest(data: unknown) {
    if (!data || data instanceof FormData) {
        return data
    }

    return typeof data === 'object' ? toSnakecaseKeys(data as Record<string, unknown>, {
        deep: true,
    }) : data
}

export function transformResponse<T extends object | string | undefined>(data: T) {
    if (!data) {
        return data
    }

    return typeof data === 'object' ? toCamelcaseKeys(data) : data
}