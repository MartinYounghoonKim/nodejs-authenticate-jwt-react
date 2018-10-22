import axios, { AxiosInstance } from 'axios';
import 'es6-promise';

export class BaseServices {
    private _axios: AxiosInstance;

    constructor () {
        this._axios = axios.create({
            baseURL: '//localhost:8000'
        });
    }

    async get (uri: string): Promise<any> {
        const { status, data } = await this._axios.get(uri);

        if (status === 200) {
            return {
                status: status,
                isSuccess: true,
                message: data.message || '',
                data: data || null,
            }
        } else {
            return {
                status: status,
                isSuccess: false,
                message: data.message || '',
                data: data || null,
            }
        }
    }
    async post (uri: string, params: any): Promise<any> {
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
    async delete (uri: string) {
        const { status, data } = await this._axios.delete(uri);

        if (status === 200) {
            return {
                status: status,
                isSuccess: true,
                message: data.message || '',
                data: data || null,
            }
        } else {
            return {
                status: status,
                isSuccess: false,
                message: data.message || '',
                data: data || null,
            }
        }
    }
    async put ({ uri, params }: { uri: string, params: any }) {
        const { status, data } = await this._axios.put(uri, params);

        if (status === 200) {
            return {
                status: status,
                isSuccess: true,
                message: data.message || '',
                data: data || null,
            }
        } else {
            return {
                status: status,
                isSuccess: false,
                message: data.message || '',
                data: data || null,
            }
        }
    }
}

