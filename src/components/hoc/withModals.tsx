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

export const withModals = WrappedComponent => {
  const [isShowDeleteModal, toggleShowDeleteModal] = useToggle(false);
  const [isShowEditModal, toggleShowEditModal] = useToggle(false);
  const [selectedMovie, setSelectedMovie] = useState(null);

  return ({ onDelete, onSubmit, ...props }: Props) => {
    const handlerDelete = useCallback(() => {
      onDelete(selectedMovie.id);
      toggleShowDeleteModal();
    }, [WrappedComponent]);

    const handlerSubmit = useCallback((newMovie: Movie) => {
      onSubmit(newMovie);
      toggleShowEditModal();
    }, [WrappedComponent]);

    const handlerOpenEditModal = useCallback((movie: Movie) => {
      setSelectedMovie(movie);
      toggleShowEditModal();
    }, [WrappedComponent]);

    const handlerDeleteModal = useCallback((movie: Movie) => {
      setSelectedMovie(movie);
      toggleShowDeleteModal();
    }, [WrappedComponent]);

    return (
      <>
        <DeleteMovieModal
          onClose={toggleShowDeleteModal}
          onConfirm={handlerDelete}
          isShow={isShowDeleteModal}
          />
        <MovieModal
          onClose={toggleShowEditModal}
          onSubmit={handlerSubmit}
          data={selectedMovie}
          isShow={isShowEditModal}
          />
        <WrappedComponent
          onOpenDeleteModal={handlerDeleteModal}
          onOpenEditModal={handlerOpenEditModal}
          {...props}
          />
      </>
    );
  };
};
