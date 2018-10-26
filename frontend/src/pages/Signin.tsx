import * as React from 'react';
import { RouteComponentProps } from 'react-router';

import SigninForm from '../components/form/SigninForm';

interface IProps {
    param: string
}

const Signin: React.SFC<RouteComponentProps<IProps>> = (props: RouteComponentProps<IProps>) => {
    const {
        history,
        match
    } = props;
    const redirect = () => {
        history.push('/');
    };
    return (
        <div>
            <h2>Signin {match.params.param}</h2>
            <SigninForm history={history} onSignin={redirect}/>
        </div>
    )
}

export default Signin;