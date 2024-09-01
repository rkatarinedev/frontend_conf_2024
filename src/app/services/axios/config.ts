import Axios from 'axios'
import type { AxiosRequestConfig, AxiosRequestTransformer, AxiosResponseTransformer } from 'axios'
import { DEFAULT_AXIOS_TIMEOUT } from './constants'
import { paramsSerializer, transformRequest, transformResponse } from './util'

const defaultRequestTransformers = Array.isArray(Axios.defaults.transformRequest)
    ? Axios.defaults.transformRequest
    : ([Axios.defaults.transformRequest] as AxiosRequestTransformer[])

const defaultResponseTransformers = Array.isArray(Axios.defaults.transformResponse)
    ? Axios.defaults.transformResponse
    : ([Axios.defaults.transformResponse] as AxiosResponseTransformer[])

export const config: AxiosRequestConfig = {
    responseType: 'json' as const,
    withCredentials: true,
    paramsSerializer: (params) => paramsSerializer(params),
    transformRequest: [transformRequest, ...defaultRequestTransformers],
    transformResponse: [...defaultResponseTransformers, transformResponse],
    headers: {},
}

export const apiConfig: AxiosRequestConfig = {
    ...config,
    baseURL: process.env.NEXT_PUBLIC_API_URL,
    headers: {
        ...config.headers,
        'client-token':  process.env.NEXT_PUBLIC_API_CLIENT_TOKEN,
        'sbm-forward-tenant': 'sbermarket',
    },
    timeout: DEFAULT_AXIOS_TIMEOUT,
}