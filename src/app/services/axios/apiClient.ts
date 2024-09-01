import {Api} from "@/src/.api-client";
import {apiConfig} from "./config";
import {attachInterceptors} from "./interceptors/attachInterceptors";

export const apiClient = new Api({
    ...apiConfig,
    attachInterceptors
})

