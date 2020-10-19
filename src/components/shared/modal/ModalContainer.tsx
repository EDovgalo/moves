import { connect, ConnectedProps, useDispatch } from 'react-redux';
import { useCallback } from 'react';
import {
  addMovie,
  clearDeleteMovieId,
  clearEditedMovie,
  deleteMovie,
  editMovie,
} from '../../../store/movies/actions';
import { Modal } from './Modal';
import { DeleteMovieModal } from './deleteMovieModal/DeleteMovieModal';
import { MovieModal } from './movieModal/MovieModal';

const mapStateToProps = state => ({
  deleteMovieId: state.movies.deleteMovieId,
  editedMovie: state.movies.editedMovie,
});

const connector = connect(mapStateToProps);

type Props = ConnectedProps<typeof connector>;

const ModalContainer = ({ deleteMovieId, editedMovie } : Props) => {
  const dispatch = useDispatch();

  const handlerDeleteMovie = useCallback(() => {
    dispatch(deleteMovie(deleteMovieId));
  }, [dispatch, deleteMovieId]);

  const handlerConfirmEdit = useCallback(movie => {
    movie.id ? dispatch(editMovie(movie))
      : dispatch(addMovie(movie));
  }, [dispatch]);

  const handlerCloseModal = useCallback(() => {
    dispatch(clearDeleteMovieId());
    dispatch(clearEditedMovie());
  }, [dispatch]);

  return (
    (editedMovie || deleteMovieId) ? (
      <Modal modalTitle="delete movie" onClose={handlerCloseModal}>
        {editedMovie ? <MovieModal onSubmit={handlerConfirmEdit} data={editedMovie} /> : null}
        {deleteMovieId ? <DeleteMovieModal onConfirm={handlerDeleteMovie} /> : null}
      </Modal>
    ) : null
  );
};

export default connector(ModalContainer);
