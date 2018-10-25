import * as React from 'react';
import { match } from 'react-router';

import SigninForm from '../components/form/SigninForm';

const Signin = ({ match, history }: { match: match<{param: string}>, history: any }) => {
    const redirect = () => {
        history.push('/');
    };
    return (
        <div>
            <h2>Signin {match.params.param}</h2>
            <SigninForm onSignin={redirect}/>
        </div>
    )
}

export default Signin;