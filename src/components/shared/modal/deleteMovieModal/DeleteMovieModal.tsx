import './DeleteMovieModal.scss';

type Props = {
  onConfirm: () => void
}

export const DeleteMovieModal = ({ onConfirm }: Props): JSX.Element => (
  <>
    <div className="movie-modal__body">
      <p>Are you sure you want to delete this movie?</p>
    </div>
    <div className="movie-modal-controls">
      <button type="button" className="add-btn pink-button" onClick={onConfirm}>confirm</button>
    </div>
  </>
);
