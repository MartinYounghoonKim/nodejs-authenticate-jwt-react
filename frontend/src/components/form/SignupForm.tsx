import * as React from 'react';
import { ChangeEvent, FormEvent } from "react";
import {authServices} from "../../services/auth.services";
import {RouteComponentProps} from "react-router";
import Selectbox from '../../components/utils/Selectbox';
import { UserRole, UserPosition } from '../../interface/services/Authentication.interface';
/**
 * @description Props 의 interface
 */
interface IState {
    role: UserRole.GUEST | UserRole.ADMIN;
    position: UserPosition.DIRECTOR | UserPosition.DEVELOPER | UserPosition.DESIGNER ;
}
const roleOptions = [
    {
        text: UserRole.ADMIN,
        value: UserRole.ADMIN,
    },
    {
        text: UserRole.GUEST,
        value: UserRole.GUEST,
    },
];
const positionOptions = [
    {
        text: UserPosition.DESIGNER,
        value: UserPosition.DESIGNER,
    },
    {
        text: UserPosition.DEVELOPER,
        value: UserPosition.DEVELOPER,
    },
    {
        text: UserPosition.DIRECTOR,
        value: UserPosition.DIRECTOR,
    },
];

type ISelectboxOptions = 'position' | 'role';

export default class SigninForm extends React.Component<RouteComponentProps, IState> {
    private uid: HTMLInputElement;
    private password: HTMLInputElement;
    constructor (props: RouteComponentProps) {
        super(props);
        this.state = {
            role: UserRole.GUEST,
            position: UserPosition.DESIGNER
        };
    }

    submit = (e: FormEvent): void => {
        e.preventDefault();
        const uid = this.uid.value;
        const password = this.password.value;
        const { role, position } = this.state;
        const isEmpty = uid.length <= 0 || password.length <= 0 || role.length <= 0 || position.length <= 0;
        if (isEmpty) {
            return;
        }

        authServices.signup({ uid, password, role, position })
            .then(() => {
                this.props.history.push('/');
            })
            .catch(() => {
                alert('가입실패');
            })
    };
    changeRole = (e: ChangeEvent<HTMLSelectElement>) => {
        /**
         * @reference https://stackoverflow.com/questions/37300933/allow-typescript-compiler-to-call-setstate-on-only-one-react-state-property
         */
        const { value } = e.target;
        this.setState({
            role: value
        } as IState);
    };
    changePosition = (e: ChangeEvent<HTMLSelectElement>) => {
        const { value } = e.target;
        this.setState({
            position: value
        } as IState);
    };

    render () {
        const {
            role,
            position,
        } = this.state;
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
                            <Selectbox
                                options={roleOptions}
                                onChange={this.changeRole}
                                value={role}
                            />
                        </label>
                        <label>
                            position
                            <Selectbox
                                options={positionOptions}
                                onChange={this.changePosition}
                                value={position}
                            />
                        </label>
                        <button type="submit">Signin</button>
                    </fieldset>
                </form>
            </div>
        )
    }
}