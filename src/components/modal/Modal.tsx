// @ts-ignore
import ReactDOM from 'react-dom';
import { Component } from 'react';
import './Modal.scss';

const modalRoot = document.getElementById('modal-root');

type Props = {
    isShow: boolean,
    children: any
}

export const Modal = ({ children, isShow }: Props) => {

    return isShow ? ReactDOM.createPortal(
        <div className="modal-content">
            {children}
        </div>,
        modalRoot,
    ) : null;
};
