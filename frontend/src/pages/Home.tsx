import * as React from 'react';

import BoardContainer from '../containers/Board.container';
import BoardModalContainer from '../containers/BoardModal.container';

interface IProps {
    history: History
}
const Home: React.SFC<IProps> = ({ history }: { history: History}) => {
    return (
        <div>
            <h2>게시판</h2>
            <BoardContainer history={history}/>
            <BoardModalContainer/>
        </div>
    )
};

export default Home;