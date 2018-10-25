import axios, {AxiosError, AxiosInstance} from 'axios';
import 'es6-promise';
import {IResponseReissueAccessToken} from "../interface/services/Authentication.interface";

export interface IAJAXResponse<T> {
    data: T;
    status: number;
    message?: string;
    isSuccess: boolean;
}

export class BaseServices {
    private readonly axios: AxiosInstance;

    constructor () {
        this.axios = axios.create({
            baseURL: '//localhost:8000'
        });
    }

    protected setAccessToken (accessToken: string) {
        this.axios.defaults.headers.common['x-access-token'] = accessToken;
    }

    protected async get<T>(uri: string): Promise<IAJAXResponse<T>> {
        try {
            const { status, data: { data = null } } = await this.axios.get(uri);
            return Promise.resolve({
                data,
                status,
                isSuccess: true,
            });
        } catch (e) {
            try {
                const { status, data } = await this.errorHandler(e);
                return Promise.resolve({
                    data,
                    status,
                    isSuccess: true
                });
            } catch (e) {
                const { status, data = null } = e.response;
                return Promise.reject({
                    data,
                    status,
                    isSuccess: false,
                });
            }
        }
    }
    protected async post<T>(uri: string, params: object): Promise<IAJAXResponse<T>> {
        try {
            const { status, data: { data = null } } = await this.axios.post(uri, params);
            return Promise.resolve({
                data,
                status,
                isSuccess: true,
            });
        } catch (e) {
            const { status, data = null } = e.response;
            return Promise.reject({
                data,
                status,
                isSuccess: false,
            });
        }
    }
    protected async delete<T>(uri: string): Promise<IAJAXResponse<T>> {
        try {
            const { status, data: { data = null } } = await this.axios.delete(uri);
            return Promise.resolve({
                data,
                status,
                isSuccess: true,
            });
        } catch (e) {
            const { status, data = null } = e.response;
            return Promise.reject({
                data,
                status,
                isSuccess: false,
            });
        }
    }
    protected async put<T>(uri: string, params: T) :Promise<IAJAXResponse<T>> {
        try {
            const { status, data: { data = null } } = await this.axios.put(uri, params);
            return Promise.resolve({
                data,
                status,
                isSuccess: true,
            });
        } catch (e) {
            const { status, data = null } = e.response;
            return Promise.reject({
                data,
                status,
                isSuccess: false,
            });
        }
    }

    protected async reissueAccessToken (): Promise<IAJAXResponse<IResponseReissueAccessToken>> {
        const uri = '/auth/reissuance';
        try {
            const { status, data: { data = null }} = await this.axios.get(uri);
            return Promise.resolve({
                data,
                status,
                isSuccess: true
            });
        } catch (e) {
            const { status, data = null } = e.response;
            return Promise.reject({
                data,
                status,
                isSuccess: false,
            });
        }
    }

    protected async errorHandler (error: AxiosError) {
        const { status } = error.response;
        const { url, method, params } = error.response.config;
        const isExpiredAccessToken = status === 401;

        if (isExpiredAccessToken) {
            // AccessToken 이 만료 되었을 경우
            try {
                // accessToken 헤더에 담기
                const { data: { accessToken } } = await this.reissueAccessToken();
                const { status, data: { data = null }} = await this.axios({ url, params, method });
                return Promise.resolve({
                    status,
                    data,
                    isSuccess: true
                });
            } catch (err) {
                return Promise.reject(err);
            }
        } else {
            // Error tracking 할 부분 삽입
        }
    }
}

