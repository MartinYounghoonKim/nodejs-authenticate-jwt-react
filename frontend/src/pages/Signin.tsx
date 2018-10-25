import * as React from 'react';
import {match} from 'react-router';

import SigninForm from '../components/form/SigninForm';
import {History} from "history";

const Signin = ({ match, history }: { match: match<{param: string}>, history: History }) => {
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