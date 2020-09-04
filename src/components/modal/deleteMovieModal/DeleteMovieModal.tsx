import { ModalContainer } from '../ModalContainer';
import './DeleteMovieModal.scss';

type Props = {
  handlerClose: () => void,
  handleConfirm: () => void,
  isShow: boolean,
}

export const DeleteMovieModal = ({ handlerClose, handleConfirm, isShow }: Props): JSX.Element => (
  <ModalContainer isShow={isShow} modalTitle="delete movie" handlerClose={handlerClose}>
    <div className="movie-modal__body">
      <p>Are you sure you want to delete this movie?</p>
    </div>
    <div className="movie-modal-controls">
      <button type="button" className="add-btn pink-button" onClick={handleConfirm}>confirm</button>
    </div>
  </ModalContainer>
);
