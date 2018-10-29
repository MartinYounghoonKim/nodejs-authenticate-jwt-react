import React, { Fragment } from 'react';

import BoardList from "../../components/board/BoardList";
import InfinitetTable from '../../components/utils/InfiniteTable';

import {boardServices} from "../../services/board.services";
import {IBoardItem} from "../../interface/services/Board.interface";
import {History} from "history";

import { connect } from 'react-redux';
import {fetchBoardItems} from "../../actions";

interface IProps {
    item1: any,
    history: History,
    fetchBoardItems: () => void
}
interface IStates {
    items: IBoardItem[];
}

class BoardListContainer extends React.Component<IProps, IStates> {
    constructor (props: IProps) {
        super(props);
        this.state = {
            items: []
        };
    }
    loadFunc = () => {
        // console.log(123);
    };
    componentDidMount () {
        boardServices.fetchBoards()
            .then(boardItems => {
                this.setState({
                    items: boardItems
                });
            });
    }
    redirectDetailPage = (index: number) => {
        console.log(index);
        this.props.history.push('/');
        // console.log(index);
    };

    deleteBoardItem = (index: number) => {
        boardServices.deleteBoard(index)
            .then(res => {
                this.setState({
                    items: this.state.items.filter(v => v.index !== index)
                });
            });
    };
    render () {
        const {
            items
        } = this.state;
        const {
            item1,
            fetchBoardItems
        } = this.props;
        const {
            deleteBoardItem,
            redirectDetailPage,
        } = this;
        return (
            <Fragment>
                {item1}
                <InfinitetTable loadFunction={this.loadFunc}>
                    <BoardList
                        items={items}
                        redirectEvent={redirectDetailPage}
                        deleteEvent={deleteBoardItem}
                    />
                </InfinitetTable>
                <button onClick={fetchBoardItems}>잉</button>
            </Fragment>
        )
    }
}
let mapDispatchToProps = (dispatch: any) => {
    return {
        fetchBoardItems: () => dispatch(fetchBoardItems()),
    }
};

export default connect((state: any) => {
    return {
        item1: state.board.items
    }
}, mapDispatchToProps)(BoardListContainer) ;