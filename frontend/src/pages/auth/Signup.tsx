import * as React from 'react';
import { RouteComponentProps } from "react-router";

import SignupContainer from '../../containers/auth/Signup.container';

interface IProps {}

const Signup: React.SFC<RouteComponentProps<IProps>> = (props: RouteComponentProps<IProps>) => (
    <div>
        <h2>Signup</h2>
        <SignupContainer {...props}/>
    </div>
);

export default Signup;