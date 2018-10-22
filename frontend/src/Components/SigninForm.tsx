import * as React from 'react';
import {createRef, FormEvent} from "react";

export default class SigninForm extends React.Component<{}> {
    private userId: HTMLInputElement;
    private password: HTMLInputElement;

    submit = (e: FormEvent) => {
        e.preventDefault();
        const userId = this.userId.value;
        const password = this.password.value;
        const isEmpty = userId.length <= 0 || password.length <= 0;

        if (isEmpty) {
            console.log(1);
        }

        console.log({ userId, password });
    };
    render () {
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