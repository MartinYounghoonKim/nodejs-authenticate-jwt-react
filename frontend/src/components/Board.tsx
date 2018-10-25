import * as React from 'react';
import { boardServices } from '../services/board.services';
import {IBoardItem} from "../interface/services/Board.interface";
import Moment from 'react-moment';

import InfinitetTable from '../components/utils/InfiniteTable';

interface IProps {
    
}

interface IState {
    items: IBoardItem[];
}

class Board extends React.Component<IProps, IState> {
    constructor(props: IProps) {
        super(props);
        this.state = {
            items: []
        }
    }
    
    public componentDidMount () {
        boardServices.fetchBoard()
            .then(boardItems => {
                this.setState({
                    items: boardItems
                });
            });
    }

    public deleteBoardItem = (key: number) => {
        const index = key;

        boardServices.deleteBoard(index)
            .then(res => {
                this.setState({
                    items: this.state.items.filter(v => v.index !== index)
                });
            });
    };

    public loadFunc = () => {
        console.log(123);
        // boardServices.fetchBoard()
        //     .then(boardItems => {
        //         this.setState({
        //             items: this.state.items.concat(...this.state.items, boardItems)
        //         });
        //     });

    };

    render () {
        const {
            items
        } = this.state;
        return (
            <div>
                <InfinitetTable height="100px" loadFunction={this.loadFunc}>
                    <table>
                        <thead>
                            <tr>
                                <th>Index</th>
                                <th>Title</th>
                                <th>Content</th>
                                <th>Regdate</th>
                                <th>Uesr</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {items.filter((v) => v.upk === 10).map(({ index, user, title, content, regdate }) => (
                                <tr key={index}>
                                    <td>{index}</td>
                                    <td>{title}</td>
                                    <td>{content}</td>
                                    <td><Moment format="YYYY-MM-DD">{regdate}</Moment></td>
                                    <td>{user}</td>
                                    <td><button type="button" onClick={() => this.deleteBoardItem(index)}>Delete</button></td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </InfinitetTable>
            </div>
        )
    }

}

export default Board;