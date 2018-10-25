import * as React from 'react';

import BoardContainer from '../containers/Board.container';
import BoardModalContainer from '../containers/BoardModal.container';

const Home = () => {
    return (
        <div>
            <h2>게시판</h2>
            <BoardContainer/>
            <BoardModalContainer/>
        </div>
    )
};

export default Home;