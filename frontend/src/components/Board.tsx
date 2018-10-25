import * as React from 'react';
import { boardServices } from '../services/board.services';

interface IProps {
    
}

class Board extends React.Component<IProps> {
    constructor(props: IProps) {
        super(props);
    }
    
    public componentDidMount () {
        boardServices.fetchBoard()
            .then(res => {
                console.log(res);
            });
    }

    render () {
        return (
            <div>
                테이블
            </div>
        )
    }

}

export default Board;