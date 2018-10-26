import * as React from 'react';
import { ChangeEvent } from "react";
import Selectbox from '../../components/utils/Selectbox';
import {UserRole, UserPosition, IUserRole, IUserPosition} from '../../interface/services/Authentication.interface';
import { ISubmitParams } from "../../containers/auth/Signup.container";
import {FormEvent} from "react";

type IState = {
    uid: string;
    password: string;
    role: IUserRole;
    position: IUserPosition;
}
interface IProps {
    onSubmit: (params: ISubmitParams) => (e: FormEvent) => void;
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

export default class SigninForm extends React.Component<IProps, IState> {
    constructor (props: IProps) {
        super(props);
        this.state = {
            uid: '',
            password: '',
            role: UserRole.GUEST,
            position: UserPosition.DESIGNER
        };
    }
    handleFieldChange = (e: ChangeEvent<HTMLInputElement>) => {
        /**
         * @reference https://stackoverflow.com/questions/37300933/allow-typescript-compiler-to-call-setstate-on-only-one-react-state-property
         */
        const { value, name } = e.target;
        this.setState({
            [name]: value
        } as IState);
    };

    handleSelectChange = (e: ChangeEvent<HTMLSelectElement>) => {
        const { value, name } = e.target;
        this.setState({
            [name]: value
        } as IState);
    };

    render () {
        const {
            handleFieldChange,
            handleSelectChange
        } = this;
        const {
            uid,
            password,
            role,
            position,
        } = this.state;
        const {
            onSubmit
        } = this.props;
        return (
            <div>
                <form onSubmit={onSubmit({ uid, password, role, position })}>
                    <fieldset>
                        <label>
                            id
                            <input type='text' onChange={handleFieldChange} name='uid'/>
                        </label>
                        <label>
                            password
                            <input type='password' onChange={handleFieldChange} name='password'/>
                        </label>
                        <label>
                            role
                            <Selectbox
                                options={roleOptions}
                                onChange={handleSelectChange}
                                name='role'
                                value={role}
                            />
                        </label>
                        <label>
                            position
                            <Selectbox
                                options={positionOptions}
                                onChange={handleSelectChange}
                                name='position'
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