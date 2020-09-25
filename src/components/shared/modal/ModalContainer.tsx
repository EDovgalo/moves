import ReactDOM from 'react-dom';
import './Modal.scss';

type Props = {
    handlerClose: () => void,
    modalTitle?: string,
    children: any
}
const modalRoot = document.getElementById('modal-root');

export const ModalContainer = ({
  handlerClose, children, modalTitle = 'add movie',
}: Props):JSX.Element => (
  ReactDOM.createPortal(
    <div className="modal-content">
      <div className="modal">
        <span
          role="button"
          tabIndex={0}
          className="modal__icon-close"
          onKeyDown={() => 0}
          onClick={handlerClose}
        >
          &#9587;
        </span>
        <div className="modal__header header">
          <h6 className="header__title">{modalTitle}</h6>
        </div>
        <div className="modal__body">
          {children}
        </div>
      </div>
    </div>,
    modalRoot,
  )
);
