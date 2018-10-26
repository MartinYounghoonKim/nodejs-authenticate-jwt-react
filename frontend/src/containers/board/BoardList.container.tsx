import React, { Fragment } from 'react';

import BoardList from "../../components/board/BoardList";
import InfinitetTable from '../../components/utils/InfiniteTable';

import {boardServices} from "../../services/board.services";
import {IBoardItem} from "../../interface/services/Board.interface";
import {History} from "history";

interface IProps {
    history: History
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
            deleteBoardItem,
            redirectDetailPage,
        } = this;
        return (
            <Fragment>
                <InfinitetTable loadFunction={this.loadFunc}>
                    <BoardList
                        items={items}
                        redirectEvent={redirectDetailPage}
                        deleteEvent={deleteBoardItem}
                    />
                </InfinitetTable>
            </Fragment>
        )
    }
}

export default BoardListContainer;