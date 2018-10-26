import * as React from 'react';
import * as H from "history";
import {authServices} from "../../services/auth.services";
import {FormEvent} from "react";
import SigninForm from "../../components/auth/SigninForm";

interface IProps {
    history: H.History
}

export interface ISubmitParams {
    uid: string;
    password: string;
}

const SigninContainer: React.SFC<IProps> = ({ history } :IProps) => {
    const onSubmit = ({ uid, password }: ISubmitParams) => (e: FormEvent) => {
        e.preventDefault();
        const isEmpty = uid.length <= 0 || password.length <= 0;
        if (isEmpty) {
            return;
        }
        authServices.signin({ uid, password })
            .then(userInformation => {
                history.push('/');
            });
    };

    return (
        <SigninForm onSubmit={onSubmit}/>
    );
};

export default SigninContainer;