import axios, { AxiosInstance } from 'axios';
import 'es6-promise';
import { IAJAXResponse } from "../interface/utils/AJAX.interface";

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
            return {
                data,
                status,
                isSuccess: true,
            }
        } catch (e) {
            const { status, data = null } = e.response;
            return {
                data,
                status,
                isSuccess: false,
            }
        }
    }
    public async post<T>(uri: string, params: object): Promise<IAJAXResponse<T>> {
        try {
            const { status, data: { data = null } } = await this.axios.post(uri, params);
            return {
                data,
                status,
                isSuccess: true,
            }
        } catch (e) {
            const { status, data = null } = e.response;
            return {
                data,
                status,
                isSuccess: false,
            }
        }
    }
    public async delete<T>(uri: string): Promise<IAJAXResponse<T>> {
        try {
            const { status, data: { data = null } } = await this.axios.delete(uri);
            return {
                data,
                status,
                isSuccess: true,
            }
        } catch (e) {
            const { status, data = null } = e.response;
            return {
                data,
                status,
                isSuccess: false,
            }
        }
    }
    public async put<T>(uri: string, params: T) :Promise<IAJAXResponse<T>> {
        try {
            const { status, data: { data = null } } = await this.axios.put(uri, params);
            return {
                data,
                status,
                isSuccess: true,
            }
        } catch (e) {
            const { status, data = null } = e.response;
            return {
                data,
                status,
                isSuccess: false,
            }
        }
    }
}

