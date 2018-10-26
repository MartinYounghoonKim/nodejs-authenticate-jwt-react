import * as React from 'react';

import BoardListContainer from '../../containers/board/BoardList.container';
import BoardModalContainer from '../../containers/board/BoardModal.container';
import {RouteComponentProps} from "react-router";

interface IProps {}

const BoardList: React.SFC<RouteComponentProps<IProps>> = (props: RouteComponentProps<IProps>) => {
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