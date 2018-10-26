import React, {ChangeEvent, FormEvent} from 'react';
import { ISubmitParams } from '../../containers/auth/Signin.container';

interface IProps {
    onSubmit: (params: ISubmitParams) => (e: FormEvent) => void;
}

type IState = {
    uid: string;
    password: string;
};

export default class SigninForm extends React.Component<IProps, IState> {
    constructor (props: IProps) {
        super(props);
        this.state = {
            uid: '',
            password: '',
        };
    }

    onChangeEvent = (e: ChangeEvent<HTMLInputElement>) => {
        const { value, name } = e.currentTarget;

        this.setState({
            [name]: value
        } as IState);
    };

    render () {
        const { onSubmit } = this.props;
        const { uid, password } = this.state;
        const  {
            onChangeEvent,
        } = this;
        return (
            <div>
                <form onSubmit={onSubmit({ uid, password })}>
                    <fieldset>
                        <label>
                            id
                            <input type='text' name="uid" onChange={onChangeEvent}/>
                        </label>
                        <label>
                            password
                            <input type='password' name="password" onChange={onChangeEvent}/>
                        </label>
                        <button type="submit">Signin</button>
                    </fieldset>
                </form>
            </div>
        )
    }
}