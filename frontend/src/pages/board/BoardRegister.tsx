import * as React from 'react';

import { RouteComponentProps} from "react-router";
import BoardFormContainer from '../../containers/board/BoardForm.container';
import {Fragment} from 'react';

interface IProps {}

const BoardRegister: React.SFC<RouteComponentProps<IProps>> = (props: RouteComponentProps<IProps>) => {
    const {
        history,
    } = props;

    return (
        <Fragment>
          Register
          <BoardFormContainer history={history}/>
        </Fragment>
    )
};

export default BoardRegister;