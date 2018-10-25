import * as React from 'react';
// import Table from '../components/utils/Table';
import Modal from '../components/utils/Modal';
import BoardContainer from '../containers/Board.container';

const Home = () => {
    return (
        <div>
            <h2>
                홈
            </h2>
            <BoardContainer/>
            <Modal>
                {{
                    header: 'test',
                    content: (<h1>asdf</h1>)
                }}
            </Modal>
            {/*<Table/>*/}
        </div>
    )
};

export default Home;