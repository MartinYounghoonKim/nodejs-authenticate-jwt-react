/**
 * @description Required request signup
 */

export type IUserPosition = 'Developer' | 'Designer' | 'Director' | '';
export type IUserRole = 'Admin' | 'Guest' | '';

export interface IRequestSignup {
    uid: string;
    password: string;
    role: IUserRole;
    position: IUserPosition;
};

export interface IRequestSignin {
    uid: string;
    password: string;
};

export interface IResponseSignin {
    uid: string;
    role: IUserRole;
    position: IUserPosition;
    accessToken: string;
    refreshToken: string;
};

