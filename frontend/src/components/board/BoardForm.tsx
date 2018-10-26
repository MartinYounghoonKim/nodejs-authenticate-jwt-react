import * as React from 'react';
import {ISubmitParams} from "../../containers/board/BoardForm.container";

interface IProps {
    onSubmit: (params: ISubmitParams) => void;
}

class BoardForm extends React.Component<IProps>{
    private title: HTMLInputElement;
    private content: HTMLInputElement;

    constructor(props: IProps) {
        super(props);
    }

    render () {
        const { onSubmit } = this.props;
        return (
            <form onSubmit={(e) => onSubmit({
                e,
                title: this.title.value,
                content: this.content.value
            })}>
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