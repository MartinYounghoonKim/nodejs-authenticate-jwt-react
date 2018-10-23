import { BaseServices } from "./base.services";

class AuthServices extends BaseServices {
    constructor () {
        super();
    }

    signup (payload: any): Promise<void> {
        const uri = '/auth/signup';
        return this.post(uri, payload)
            .then((res: any) => {
                return Promise.resolve();
            })
            .catch((err: any) => {
                return Promise.reject();
            });
    }
}

export const authServices = new AuthServices;