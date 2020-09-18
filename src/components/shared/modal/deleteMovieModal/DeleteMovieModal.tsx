import { ModalContainer } from '../ModalContainer';
import './DeleteMovieModal.scss';

type Props = {
  onClose: () => void,
  onConfirm: () => void,
  isShow: boolean,
}

export const DeleteMovieModal = ({ onClose, onConfirm, isShow }: Props): JSX.Element => (
  <ModalContainer isShow={isShow} modalTitle="delete movie" handlerClose={onClose}>
    <div className="movie-modal__body">
      <p>Are you sure you want to delete this movie?</p>
    </div>
    <div className="movie-modal-controls">
      <button type="button" className="add-btn pink-button" onClick={onConfirm}>confirm</button>
    </div>
  </ModalContainer>
);
