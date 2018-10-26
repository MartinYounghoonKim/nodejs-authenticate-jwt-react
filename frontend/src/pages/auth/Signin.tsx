import * as React from 'react';
import { RouteComponentProps } from 'react-router';

import SigninContainer from '../../containers/auth/Signin.container';

interface IProps {
    param: string
}

const Signin: React.SFC<RouteComponentProps<IProps>> = (props: RouteComponentProps<IProps>) => {
    const {
        history,
        match
    } = props;
    return (
        <div>
            <h2>Signin {match.params.param}</h2>
            <SigninContainer history={history}/>
        </div>
    )
}

export default Signin;