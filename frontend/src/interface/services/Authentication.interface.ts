/**
 * @description Required request signup
 */

export type IUserPosition = UserPosition.DIRECTOR | UserPosition.DESIGNER | UserPosition.DEVELOPER;
export type IUserRole = UserRole.ADMIN | UserRole.GUEST;

export const enum UserPosition {
    DEVELOPER = 'Developer',
    DESIGNER  = 'Designer',
    DIRECTOR = 'Director',
}

export const enum UserRole {
    ADMIN = 'Admin',
    GUEST = 'Guest',
}

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

export interface IResponseReissueAccessToken {
    accessToken: string;
}

