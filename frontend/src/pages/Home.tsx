import * as React from 'react';

import BoardContainer from '../containers/Board.container';
import BoardModalContainer from '../containers/BoardModal.container';
import {RouteComponentProps} from "react-router";

interface IProps {}

const Home: React.SFC<RouteComponentProps<IProps>> = (props: RouteComponentProps<IProps>) => {
    const {
        history
    } = props;
    return (
        <div>
            <h2>게시판</h2>
            <BoardContainer history={history}/>
            <BoardModalContainer/>
        </div>
    )
};

export default Home;