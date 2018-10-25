import React, { Fragment } from 'react';

import Board from "../components/Board";
import InfinitetTable from '../components/utils/InfiniteTable';

import {boardServices} from "../services/board.services";
import {IBoardItem} from "../interface/services/Board.interface";

interface IProps {}
interface IStates {
    items: IBoardItem[];
}

class BoardContainer extends React.Component<IProps, IStates> {
    constructor (props: IProps) {
        super(props);
        this.state = {
            items: []
        };
    }
    public loadFunc = () => {
        // console.log(123);
    };
    public componentDidMount () {
        boardServices.fetchBoard()
            .then(boardItems => {
                this.setState({
                    items: boardItems
                });
            });
    }
    public redirectDetailPage = (index: number) => {
        // console.log(index);
    };

    public deleteBoardItem = (index: number) => {
        boardServices.deleteBoard(index)
            .then(res => {
                this.setState({
                    items: this.state.items.filter(v => v.index !== index)
                });
            });
    };
    public render () {
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
                    <Board
                        items={items}
                        redirectEvent={redirectDetailPage}
                        deleteEvent={deleteBoardItem}
                    />
                </InfinitetTable>
            </Fragment>
        )
    }
}

export default BoardContainer;