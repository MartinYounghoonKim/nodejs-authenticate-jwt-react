import * as React from 'react';
import {createRef, FormEvent} from "react";
import {authServices} from "../../services/auth.services";
import {History} from "history";

interface IProps {
    onSignin: () => void;
    history: History;
}

export default class SigninForm extends React.Component<IProps> {
    private userId: HTMLInputElement;
    private password: HTMLInputElement;

    public submit = (e: FormEvent): void => {
        e.preventDefault();
        const uid = this.userId.value;
        const password = this.password.value;
        const isEmpty = uid.length <= 0 || password.length <= 0;

        if (isEmpty) {
            return;
        }

        authServices.signin({ uid, password })
            .then(userInformation => {
                this.props.onSignin();
                // console.log(userInformation);
            });
    };
    public render () {
        return (
            <div>
                <form onSubmit={this.submit}>
                    <fieldset>
                        <label>
                            id
                            <input type='text' ref={ref => this.userId = ref}/>
                        </label>
                        <label>
                            password
                            <input type='password' ref={ref => this.password = ref}/>
                        </label>
                        <button type="submit">Signin</button>
                    </fieldset>
                </form>
            </div>
        )
    }
}