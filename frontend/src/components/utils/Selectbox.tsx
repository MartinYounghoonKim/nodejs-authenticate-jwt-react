import * as React from 'react';
import { ChangeEvent } from "react";

interface IProps {
    options: IOption[];
    onChange: (e: ChangeEvent<HTMLSelectElement>) => void;
    value: string | number;
}

export interface IOption {
    text: string | number;
    value: string | number;
    disabled?: boolean;
}

interface IState {

}
class Selectbox extends React.Component<IProps, IState> {
    constructor(props: IProps) {
        super(props);
    }
    renderOptionElement () {
        return this.props.options.map(({ text, value, disabled }) => (
            <option key={value} value={value} disabled={disabled}>{text}</option>
        ))
    }
    render () {
        const {
            ...rest
        } = this.props;
        return (
            <div>
                <select {...rest}>
                    {this.renderOptionElement()}
                </select>
            </div>
        )
    }

}

export default Selectbox;