import * as React from 'react';

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
        console.log(123);
    };
    public componentDidMount () {
        boardServices.fetchBoard()
            .then(boardItems => {
                this.setState({
                    items: boardItems
                });
            });
    }
    public deleteBoardItem = (index: number) => {
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
            deleteBoardItem
        } = this;
        return (
            <InfinitetTable height="100px" loadFunction={this.loadFunc}>
                <Board
                    items={items}
                    deleteEvent={deleteBoardItem}
                />
            </InfinitetTable>
        )
    }
}

export default BoardContainer;