import * as React from 'react';
import { RouteComponentProps } from "react-router";

import SignupForm from '../../components/auth/SignupForm';

interface IProps {}

const Signup: React.SFC<RouteComponentProps<IProps>> = (props: RouteComponentProps<IProps>) => (
    <div>
        <h2>Signup</h2>
        <SignupForm {...props}/>
    </div>
);

export default Signup;