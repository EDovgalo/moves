import React, { useCallback, useState } from 'react';
import { useToggle } from '../../hooks';
import { DeleteMovieModal } from '../shared/modal/deleteMovieModal/DeleteMovieModal';
import { MovieModal } from '../shared/modal/movieModal/MovieModal';
import { Movie } from '../../models/movie.model';

type Props = {
  movies?: Movie[],
  onDelete?: (id: number) => void,
  onSubmit?: (movie?: Movie) => void
}

export const withModals = WrappedComponent => ({ onDelete, onSubmit, ...props }: Props) => {
  const [isShowDeleteModal, toggleShowDeleteModal] = useToggle(false);
  const [isShowEditModal, toggleShowEditModal] = useToggle(false);
  const [selectedMovie, setSelectedMovie] = useState(null);

  const handlerDelete = useCallback(() => {
    onDelete(selectedMovie.id);
    toggleShowDeleteModal();
  }, [selectedMovie]);

  const closeEditModal = useCallback(() => {
    toggleShowEditModal();
    setSelectedMovie(null);
  }, [isShowEditModal]);

  const handlerSubmit = useCallback((newMovie: Movie) => {
    onSubmit(newMovie);
    closeEditModal();
  }, [onSubmit]);

  const handlerOpenEditModal = (movie: Movie) => {
    setSelectedMovie(movie);
    toggleShowEditModal();
  };

  const handlerDeleteModal = (movie: Movie) => {
    setSelectedMovie(movie);
    toggleShowDeleteModal();
  };

  return (
    <>
      {isShowDeleteModal ? (
        <DeleteMovieModal
          onClose={toggleShowDeleteModal}
          onConfirm={handlerDelete}
          />
      ) : null}
      {
        isShowEditModal ? (
          <MovieModal
            onClose={closeEditModal}
            onSubmit={handlerSubmit}
            data={selectedMovie}
            />
        ) : null
      }

      <WrappedComponent
        onOpenDeleteModal={handlerDeleteModal}
        onOpenEditModal={handlerOpenEditModal}
        {...props}
        />
    </>
  );
};
