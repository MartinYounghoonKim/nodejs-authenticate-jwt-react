import * as React from 'react';
import {IBoardItem} from "../interface/services/Board.interface";
import Moment from 'react-moment';

interface IProps {
    items: IBoardItem[];
    deleteEvent: (key: number) => void;
}

const Board = ({ items, deleteEvent }: IProps) => {
    return (
        <table>
            <thead>
            <tr>
                <th>Index</th>
                <th>Title</th>
                <th>Content</th>
                <th>Regdate</th>
                <th>User</th>
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
                    <td>
                        <button type="button" onClick={() => deleteEvent(index)}>Delete</button>
                        <button type="button">Update</button>
                    </td>
                </tr>
            ))}
            </tbody>
        </table>
    )
};

export default Board;