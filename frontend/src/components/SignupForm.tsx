import * as React from 'react';
import { ChangeEvent, FormEvent } from "react";
import {authServices} from "../services/auth.services";
import {RouteComponentProps} from "react-router";
import { IUserPosition, IUserRole } from "../interface/services/Authentication.interface";

/**
 * @description Props 의 interface
 */
interface IProps extends RouteComponentProps {

}
interface IState extends ISelectbox {
    role: IUserRole;
    roleOptions: IUserRole[];
    position: IUserPosition;
    positionOptions: IUserPosition[];
}
type ISelectboxOptions = 'position' | 'role';
type ISelectbox = { [key in ISelectboxOptions]: IUserPosition | IUserRole };

export default class SigninForm extends React.Component<IProps, IState> {
    private uid: HTMLInputElement;
    private password: HTMLInputElement;
    constructor (props: IProps) {
        super(props);
        this.state = {
            role: '',
            roleOptions: ['Admin', 'Guest'],
            positionOptions: ['Developer', 'Designer', 'Director'],
            position: ''
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
    };
    public handleChange (e: ChangeEvent<HTMLSelectElement>, type: ISelectboxOptions) {
        /**
         * @reference https://stackoverflow.com/questions/37300933/allow-typescript-compiler-to-call-setstate-on-only-one-react-state-property
         */

        const { value }: any = e.target;
        this.setState({
            [type]: value
        } as IState);
    }
    render () {
        const {
            role,
            roleOptions,
            position,
            positionOptions,
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
                            <select value={role} onChange={(e) => this.handleChange(e, 'role')}>
                                {positionOptions.map((positionOption) => (
                                    <option value={positionOption} key={positionOption}>{positionOption}</option>
                                ))}
                                <option value="Guest">Guest</option>
                            </select>
                        </label>
                        <label>
                            position
                            <select value={position} onChange={(e) => this.handleChange(e, 'position')}>
                                {roleOptions.map((roleOption) => (
                                    <option value={roleOption} key={roleOption}>{roleOption}</option>
                                ))};
                            </select>
                        </label>
                        <button type="submit">Signin</button>
                    </fieldset>
                </form>
            </div>
        )
    }
}