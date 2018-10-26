import React from 'react';
import { RouteComponentProps } from "react-router";
import BoardViewContainer from '../containers/BoardView.container';

interface IProps {
    index: string;
}

const ViewBoard: React.SFC<RouteComponentProps<IProps>> = (props: RouteComponentProps<IProps>) => {
    const { index } = props.match.params;
    return (
        <BoardViewContainer index={index}/>
    )
};

export default ViewBoard;


