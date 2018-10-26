import * as React from 'react';
import BoardForm from '../components/form/BoardForm';
import { RouteComponentProps} from "react-router";

interface IProps {}

const RegisterBoard: React.SFC<RouteComponentProps<IProps>> = (props: RouteComponentProps<IProps>) => {
    const {
        match,
        history,
    } = props;
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