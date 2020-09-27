import ReactDOM from 'react-dom';
import './Modal.scss';

const modalRoot = document.getElementById('modal-root');

type Props = {
    isShow: boolean,
    children: any
}

export const Modal = ({ children, isShow }: Props):JSX.Element => (isShow ? ReactDOM.createPortal(
  <div className="modal-content">
    {children}
  </div>,
  modalRoot,
) : null);
