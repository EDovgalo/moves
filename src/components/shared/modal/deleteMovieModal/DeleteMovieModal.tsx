import { ModalContainer } from '../ModalContainer';
import './DeleteMovieModal.scss';

type Props = {
  onClose: () => void,
  onConfirm: () => void,
}

export const DeleteMovieModal = ({ onClose, onConfirm }: Props): JSX.Element => (
  <ModalContainer modalTitle="delete movie" handlerClose={onClose}>
    <div className="movie-modal__body">
      <p>Are you sure you want to delete this movie?</p>
    </div>
    <div className="movie-modal-controls">
      <button type="button" className="add-btn pink-button" onClick={onConfirm}>confirm</button>
    </div>
  </ModalContainer>
);
