import { BaseServices } from "./base.services";

class AuthServices extends BaseServices {
    constructor () {
        super();
    }

    signup (payload: any): any {
        const uri = '/auth/signup';
        this.post(uri, payload)
            .then((res: any) => {
                console.log(res);
            })
            .catch((err: any) => {
                console.log(err);
            });
    }
}

export const authServices = new AuthServices;