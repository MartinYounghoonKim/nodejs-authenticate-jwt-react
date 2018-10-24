import axios, { AxiosInstance } from 'axios';
import 'es6-promise';

export interface IAJAXResponse<T> {
    data: T;
    status: number;
    message?: string;
    isSuccess: boolean;
}

export class BaseServices {
    private axios: AxiosInstance;

    constructor () {
        this.axios = axios.create({
            baseURL: '//localhost:8000'
        });
    }

    public async get<T>(uri: string): Promise<IAJAXResponse<T>> {
        try {
            const { status, data: { data = null } } = await this.axios.get(uri);
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
    public async post<T>(uri: string, params: object): Promise<IAJAXResponse<T>> {
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
    public async delete<T>(uri: string): Promise<IAJAXResponse<T>> {
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
    public async put<T>(uri: string, params: T) :Promise<IAJAXResponse<T>> {
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
}

