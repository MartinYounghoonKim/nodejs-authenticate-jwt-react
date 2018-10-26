import React from 'react';
import Modal from "../components/utils/Modal";

interface IProps {

}
class BoardModalContainer extends React.Component<IProps> {
    constructor (props: IProps) {
        super(props);
    }
    onConfirm = () => {
        // console.log('confirm');
    };
    onCancel = () => {
        // console.log('cancel');
    };
    render () {
        const {
            onCancel,
            onConfirm,
        } = this;
        return (
            <Modal>
                {{
                    header: 'test',
                    content: (<h1>asdf</h1>),
                    actions: (
                        <>
                            <button onClick={onConfirm}>Confirm</button>
                            <button onClick={onCancel}>Cancel</button>
                        </>
                    )
                }}
            </Modal>
        )
    }
}

export default BoardModalContainer;