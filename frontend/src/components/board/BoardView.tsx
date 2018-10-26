import React from 'react';
import {IBoardItem} from "../../interface/services/Board.interface";

interface IProps {
    item: IBoardItem
}

const BoardView: React.SFC<IProps> = (props: IProps) => {
    if (props.item === null) {
        // @TODO is it required ?
        return null;
    }
    const {
        upk,
        title,
        content,
        user,
        index,
        regdate
    } = props.item;
    return (
        <div className='board-view'>
            <div className='board-view__index'>{index}</div>
            <div className='board-view__user'>{user}</div>
            <div className='board-view__regdate'>{regdate}</div>
            <div className='board-view__title'>{title}</div>
            <div className='board-view__content'>{content}</div>
        </div>
    )
};

export default BoardView;