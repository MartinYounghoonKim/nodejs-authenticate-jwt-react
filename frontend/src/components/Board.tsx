import * as React from 'react';
import { boardServices } from '../services/board.services';
import {IBoardItem} from "../interface/services/Board.interface";
import Moment from 'react-moment';
import InfiniteScroll from 'react-infinite-scroller';

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
        // boardServices.fetchBoard()
        //     .then(boardItems => {
        //         this.setState({
        //             items: this.state.items.concat(...this.state.items, boardItems)
        //         });
        //     });

    };

    render () {
        const item = 1;
        const style ={
            height: '100px',
            overflow: 'auto'
        };
        const {
            items
        } = this.state;
        return (
            <div>
                {/*<InfiniteScroll*/}
                    {/*pageStart={0}*/}
                    {/*loadMore={this.loadFunc}*/}
                    {/*hasMore={true}*/}
                    {/*loader={<div className="loader" key={0}>Loading ...</div>}*/}
                    {/*useWindow={false}*/}
                {/*>*/}
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
                {/*</InfiniteScroll>*/}
            </div>
        )
    }

}

export default Board;