import axios, { AxiosInstance } from 'axios';
import 'es6-promise';
import { IAJAXResponse } from "../interface/utils/AJAX.interface";

export class BaseServices {
    private _axios: AxiosInstance;

    constructor () {
        this._axios = axios.create({
            baseURL: '//localhost:8000'
        });
    }

    async get<T>(uri: string): Promise<IAJAXResponse<T>> {
        try {
            const { status, data: { data } } = await this._axios.get(uri);
            return {
                status: status,
                data: data || null,
                isSuccess: true,
            }
        } catch (e) {
            const { status, data: data } = e.response;
            return {
                status: status,
                data: data || {},
                isSuccess: false,
            }
        }
    }
    async post<T>(uri: string, params: T): Promise<IAJAXResponse<T>> {
        try {
            const { status, data: { data } } = await this._axios.post(uri, params);
            return {
                status: status,
                data: data || null,
                isSuccess: true,
            }
        } catch (e) {
            const { status, data: data } = e.response;
            return {
                status: status,
                data: data || {},
                isSuccess: false,
            }
        }
    }
    async delete<T>(uri: string): Promise<IAJAXResponse<T>> {
        try {
            const { status, data: { data } } = await this._axios.delete(uri);
            return {
                status: status,
                data: data || null,
                isSuccess: true,
            }
        } catch (e) {
            const { status, data: data } = e.response;
            return {
                status: status,
                data: data || {},
                isSuccess: false,
            }
        }
    }
    async put<T>(uri: string, params: T) :Promise<IAJAXResponse<T>> {
        try {
            const { status, data: { data } } = await this._axios.put(uri, params);
            return {
                status: status,
                data: data || null,
                isSuccess: true,
            }
        } catch (e) {
            const { status, data: data } = e.response;
            return {
                status: status,
                data: data || {},
                isSuccess: false,
            }
        }
    }
}

