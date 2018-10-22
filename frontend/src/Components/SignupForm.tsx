import * as React from 'react';
import { FormEvent } from "react";
import {authServices} from "../services/auth.services";

export default class SigninForm extends React.Component<{}> {
    private uid: HTMLInputElement;
    private password: HTMLInputElement;
    private role: HTMLInputElement;
    private position: HTMLInputElement;

    submit = (e: FormEvent): void => {
        e.preventDefault();
        const uid = this.uid.value;
        const password = this.password.value;
        const role = this.role.value;
        const position = this.position.value;
        const isEmpty = uid.length <= 0 || password.length <= 0 || role.length <= 0 || position.length <= 0;

        if (isEmpty) {
            return;
        }
        authServices.signup({ uid, password, role, position })
            // .then(res => {
            //     console.log(res);
            // })

    };
    render () {
        return (
            <div>
                <form onSubmit={this.submit}>
                    <fieldset>
                        <label>
                            id
                            <input type='text' ref={ref => this.uid = ref}/>
                        </label>
                        <label>
                            password
                            <input type='password' ref={ref => this.password = ref}/>
                        </label>
                        <label>
                            role
                            <input type='text' ref={ref => this.role = ref}/>
                        </label>
                        <label>
                            position
                            <input type='text' ref={ref => this.position = ref}/>
                        </label>
                        <button type="submit">Signin</button>
                    </fieldset>
                </form>
            </div>
        )
    }
}