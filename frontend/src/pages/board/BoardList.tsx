import * as React from 'react';

import BoardListContainer from '../../containers/BoardList.container';
import BoardModalContainer from '../../containers/BoardModal.container';
import {RouteComponentProps} from "react-router";

interface IProps {}

const BoardList: React.SFC<RouteComponentProps<IProps>> = (props: RouteComponentProps<IProps>) => {
    // @TODO send history props to children component
    const {
        history
    } = props;
    return (
        <div>
            <h2>게시판</h2>
            <BoardListContainer history={history}/>
            <BoardModalContainer/>
        </div>
    )
};

export default BoardList;