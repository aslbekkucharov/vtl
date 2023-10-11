import axios, { AxiosInstance, AxiosRequestConfig, InternalAxiosRequestConfig } from 'axios'

/**
 * Create axios instance
 * @param options {AxiosRequestConfig}
 * @returns {AxiosInstance}
 */
export function createHttpClient(options: AxiosRequestConfig, token: string, chatId: string | number): AxiosInstance {

    const instance = axios.create(options)

    instance.interceptors.request.use((config: InternalAxiosRequestConfig): InternalAxiosRequestConfig<any> | Promise<InternalAxiosRequestConfig<any>> => {
        
        config.baseURL += token
        config.data.chat_id = chatId
        
        return config
    })

    return instance
}