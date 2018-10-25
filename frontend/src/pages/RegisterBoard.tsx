import * as React from 'react';
import BoardForm from '../components/form/BoardForm';
import {match} from "react-router";


const RegisterBoard = ({ match, history }: { match: match<{param: string}>, history: any }, {}) => {
    const redirect = () => {
        history.push('/');
    };
    return (
        <div>
            Register
            <BoardForm onSubmit={redirect}/>
        </div>
    )
};

export default RegisterBoard;