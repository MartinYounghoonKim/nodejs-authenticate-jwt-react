import * as React from 'react';
/**
 * @reference
 * https://medium.com/@martin_hotell/react-children-composition-patterns-with-typescript-56dfc8923c64
 */
import { ReactNode } from "react";

interface IProps {
    children: {
        header: ReactNode,
        content: ReactNode,
        actions: ReactNode
    };
    isShow?: boolean;
}
const Modal = ({ isShow, children }: IProps) => {
    if (!isShow) {
        return null;
    }
    return (
        <div className="modal">
            <div className="modal-header">
                {children.header}
            </div>
            <div className="modal-content">
                {children.content}
            </div>
        </div>
    )
};

Modal.defaultProps = {
    isShow: false
};

export default Modal;