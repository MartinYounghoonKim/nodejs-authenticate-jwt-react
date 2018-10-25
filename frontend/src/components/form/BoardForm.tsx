import * as React from 'react';
import {FormEvent} from "react";
import { boardServices } from "../../services/board.services";

interface IProps {
    onSubmit: () => void;
}

class BoardForm extends React.Component<IProps>{
    private title: HTMLInputElement;
    private content: HTMLInputElement;
    constructor(props: IProps) {
        super(props);
    }
    submit = (e: FormEvent) => {
        e.preventDefault();
        const title = this.title.value;
        const content = this.content.value;

        boardServices.createBoard({ title, content })
            .then(() => {
                this.props.onSubmit();
            });
    };

    render () {
        return (
            <form onSubmit={this.submit}>
                <fieldset>
                    <label>
                        Title
                        <input type="text" name="title" ref={ref => this.title = ref}/>
                    </label>
                    <label>
                        Content
                        <input type="text" name="Content" ref={ref => this.content = ref}/>
                    </label>
                    <button type="submit">Submit</button>
                </fieldset>
            </form>
        )
    }
}

export default BoardForm;