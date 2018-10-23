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
