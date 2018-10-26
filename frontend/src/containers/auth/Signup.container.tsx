import React, {FormEvent} from 'react';
import {UserPosition, UserRole} from "../../interface/services/Authentication.interface";
import {authServices} from "../../services/auth.services";
import SignupForm from "../../components/auth/SignupForm";
import {RouteComponentProps} from "react-router";

interface IProps {}

export interface ISubmitParams {
    uid: string;
    password: string;
    role: UserRole.GUEST | UserRole.ADMIN;
    position: UserPosition.DIRECTOR | UserPosition.DEVELOPER | UserPosition.DESIGNER ;
}

const SignupContainer: React.SFC<RouteComponentProps<IProps>> = ({ history }: RouteComponentProps<IProps>) => {
    const onSubmit  = ({ uid, password, role, position }: ISubmitParams) => (e: FormEvent) => {
        e.preventDefault();
        const isEmpty = uid.length <= 0 || password.length <= 0 || role.length <= 0 || position.length <= 0;

        if (isEmpty) {
            return;
        }
        authServices.signup({ uid, password, role, position })
            .then(() => {
                history.push('/');
            })
            .catch(() => {
                alert('가입실패');
            })
    };
    return (
        <SignupForm onSubmit={onSubmit}/>
    )

};

export default SignupContainer;