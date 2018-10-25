import * as React from 'react';

interface IProps {

}
class Modal extends React.Component<IProps> {
    constructor (props: IProps) {
        super(props);
    }
    render () {
        return (
            <div>
                모달
            </div>
        )
    }
}

export default Modal;