import './Modal.scss';

type Props = {
    onClose: () => void,
    modalTitle?: string,
    children: any
}

export const Modal = ({
  onClose, children, modalTitle = 'add movie',
}: Props):JSX.Element => (
  <div id="modal-root">
    <div className="modal-content">
      <div className="modal">
        <span
          role="button"
          tabIndex={0}
          className="modal__icon-close"
          onKeyDown={() => 0}
          onClick={onClose}
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
    </div>
  </div>
);
