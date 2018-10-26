import React, {FormEvent} from 'react';
import BoardForm from '../components/board/BoardForm';
import {boardServices} from "../services/board.services";
import * as H from 'history';

interface IProps {
    history: H.History
}
interface IState {}

export type ISubmitParams = {
    e: FormEvent;
    title: string;
    content: string;
}


class BoardFormContainer extends React.Component<IProps, IState> {
    constructor (props: IProps) {
        super(props);
    }
    submit = ({ e, title, content }: ISubmitParams) => {
        e.preventDefault();
        const isEmpty = title.length <= 0 || content.length <= 0;
        if (isEmpty) {
            return;
        }

        boardServices.createBoard({ title, content })
            .then(() => {
                this.props.history.push('/');
            });
    };
    render () {
        const {
            submit
        } = this;
        return (
            <BoardForm onSubmit={submit}/>
        )
    }
}

export default BoardFormContainer;