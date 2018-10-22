import * as React from 'react';
import { match } from 'react-router';

const Signin = ({ match }: { match: match<{param: string}> }) => (
    <div>
        <h2>Signin {match.params.param}</h2>
    </div>
);

export default Signin;