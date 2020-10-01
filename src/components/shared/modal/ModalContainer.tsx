import { connect, ConnectedProps, useDispatch } from 'react-redux';
import { useCallback } from 'react';
import {
  addMovie,
  clearDeleteMovieId,
  clearSelectedMovie,
  deleteMovie,
  editMovie,
} from '../../../store/movies/actions';
import { Modal } from './Modal';
import { DeleteMovieModal } from './deleteMovieModal/DeleteMovieModal';
import { MovieModal } from './movieModal/MovieModal';

const mapStateToProps = state => ({
  deleteMovieId: state.movies.deleteMovieId,
  selectedMovie: state.movies.selectedMovie,
});

const connector = connect(mapStateToProps);

type Props = ConnectedProps<typeof connector>;

const ModalContainer = ({ deleteMovieId, selectedMovie } : Props) => {
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
    dispatch(clearSelectedMovie());
  }, [dispatch]);

  return (
    (selectedMovie || deleteMovieId) ? (
      <Modal modalTitle="delete movie" onClose={handlerCloseModal}>
        {selectedMovie ? <MovieModal onSubmit={handlerConfirmEdit} data={selectedMovie} /> : null}
        {deleteMovieId ? <DeleteMovieModal onConfirm={handlerDeleteMovie} /> : null}
      </Modal>
    ) : null
  );
};

export default connector(ModalContainer);
