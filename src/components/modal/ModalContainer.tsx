import { Modal } from './Modal';

type Props = {
    handlerClose: () => void,
    isShow: boolean,
    modalTitle?: string,
    children: any
}

export const ModalContainer = ({
  handlerClose, isShow, children, modalTitle = 'add movie',
}: Props):JSX.Element => (
  <Modal isShow={isShow}>
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
  </Modal>
);
