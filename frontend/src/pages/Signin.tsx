import * as React from 'react';
import { match } from 'react-router';

import SigninForm from '../Components/SigninForm';

const Signin = ({ match, history }: { match: match<{param: string}>, history: any }) => (
    <div>
        <h2>Signin {match.params.param}</h2>
        <button onClick={() => history.push('signin')}>테스트</button>
        <SigninForm/>
    </div>
);

export default Signin;