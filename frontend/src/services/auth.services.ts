import { BaseServices } from "./base.services";
import {
    IRequestSignup
} from "../interface/services/Authentication.interface";

class AuthServices extends BaseServices {
    constructor () {
        super();
    }

    signup (payload: IRequestSignup): Promise<void> {
        const uri = '/auth/signup';

        return this.post<{}>(uri, payload)
            .then((res: any) => {
                return Promise.resolve();
            })
            .catch((err: any) => {
                return Promise.reject();
            });
    }
}

export const authServices = new AuthServices;