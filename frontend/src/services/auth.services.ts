import { BaseServices } from "./base.services";
import {
    IRequestSignup
} from "../interface/services/Authentication.interface";

interface IResponseSignuo {
    uid: string;
    password: string;
}
class AuthServices extends BaseServices {
    constructor () {
        super();
    }

    signup (payload: IRequestSignup): Promise<void> {
        const uri = '/auth/signup';

        return this.post<IResponseSignuo>(uri, payload)
            .then(res => {
                return Promise.resolve();
            })
            .catch(err => {
                return Promise.reject();
            });
    }
}

export const authServices = new AuthServices;