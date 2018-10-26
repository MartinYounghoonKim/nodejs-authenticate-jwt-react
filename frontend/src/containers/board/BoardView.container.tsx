import React from 'react';
import {boardServices} from "../../services/board.services";
import {IBoardItem} from "../../interface/services/Board.interface";
import BoardView from '../../components/board/BoardView';

interface IProps {
    index: string;
}
interface IState {
    item: IBoardItem
}
class BoardViewContainer extends React.Component<IProps, IState> {
    constructor(props: IProps) {
        super(props);
        this.state = {
            item: null
        }
    }

    componentDidMount () {
        const { index } = this.props;
        boardServices.fetchBoard(index)
            .then(boardItem => {
                this.setState({
                    item: boardItem
                });
            });
    }

    render () {
        const {
            item
        } = this.state;
        console.log(item);
        return item ? (
             <BoardView item={item}/>
        ): null
    }
}

export default BoardViewContainer;