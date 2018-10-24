import { BaseServices } from "./base.services";
import {
    IRequestSignin,
    IRequestSignup,
    IResponseSignin
} from "../interface/services/Authentication.interface";

class AuthServices extends BaseServices {
    constructor () {
        super();
    }

    public signup (payload: IRequestSignup): Promise<void> {
        const uri = '/auth/signup';

        return this.post<{}>(uri, payload)
            .then(res => {
                return Promise.resolve();
            })
            .catch(err => {
                return Promise.reject(err);
            });
    }

    public signin (payload: IRequestSignin): Promise<IResponseSignin> {
        const uri = '/auth/signin';

        return this.post<IResponseSignin>(uri, payload)
            .then(res => {
                return Promise.resolve(res.data);
            })
            .catch(err => {
                return Promise.reject();
            });
    }
}

export const authServices = new AuthServices;