import * as React from 'react';
import { RouteComponentProps } from "react-router";

import SignupForm from '../Components/SignupForm';

const Signup = (props: RouteComponentProps) => (
    <div>
        <h2>Signup</h2>
        <SignupForm {...props}/>
    </div>
);

export default Signup;