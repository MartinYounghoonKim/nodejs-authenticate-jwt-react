import { BaseServices } from "./base.services";
import {
    IRequestSignin,
    IRequestSignup,
    IResponseSignin
} from "../interface/services/Authentication.interface";
import { cookieHelper } from '../helpers/cookie.helper';

class AuthServices extends BaseServices {
    constructor () {
        super();
    }

    signup (payload: IRequestSignup): Promise<void> {
        const uri = '/auth/signup';

        return this.post<{}>(uri, payload)
            .then(res => {
                return Promise.resolve();
            })
            .catch(err => {
                return Promise.reject(err);
            });
    }

    signin (payload: IRequestSignin): Promise<IResponseSignin> {
        const uri = '/auth/signin';

        return this.post<IResponseSignin>(uri, payload)
            .then(res => {
                const { accessToken } = res.data;
                this.accessToken = accessToken;
                cookieHelper.set('accessToken', accessToken);

                return Promise.resolve(res.data);
            })
            .catch(err => {
                return Promise.reject();
            });
    }
}

export const authServices = new AuthServices;