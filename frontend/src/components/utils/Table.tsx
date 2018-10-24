import * as React from 'react';

interface IProps {
    items: ITableItem[]
}

interface ITableItem {
    [key: string]: string | number;
}

class Table extends React.Component<IProps>{
    constructor(props: IProps) {
        super(props);
    }
    render () {
        return (
            <table>
                <colgroup>
                    <col/>
                </colgroup>
                <thead>
                    <tr>
                        <th scope="col"></th>
                        <th scope="col"></th>
                        <th scope="col"></th>
                    </tr>
                </thead>
                <tbody>
                    {this.props.items.map(item => (
                        <tr>
                            <td>{item}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        )
    }
}

export default Table;