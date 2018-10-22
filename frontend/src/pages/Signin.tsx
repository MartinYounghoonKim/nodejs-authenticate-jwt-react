import * as React from 'react';
import { match } from 'react-router';

import SigninForm from '../Components/SigninForm';

const Signin = ({ match }: { match: match<{param: string}> }) => (
    <div>
        <h2>Signin {match.params.param}</h2>
        <SigninForm/>
    </div>
);

export default Signin;