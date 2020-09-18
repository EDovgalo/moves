import React from 'react';
import { Movie } from '../../../../models/movie.model';
import { MovieCard } from './MovieCard';
import './MoviesList.scss';

type Props = {
  movies: Array<Movie>,
  onOpenDeleteModal: (id: number) => void,
  onOpenEditModal?: (movie: Movie) => void
}

const renderMoves = (movies, onOpenEditModal, onOpenDeleteModal):JSX.Element => (
  <div className="moves__list">
    {movies.map(item => (
      <MovieCard
        onOpenDeleteModal={onOpenDeleteModal}
        onOpenEditModal={onOpenEditModal}
        key={item.id}
        movie={item}
        />
    ))}
  </div>
);

export const MoviesList = React.memo(({ movies, onOpenEditModal,
  onOpenDeleteModal }: Props):JSX.Element => (
    <div className="moves">
      <p className="moves__total">
        <b>{movies.length}</b>
        <span> moves found</span>
      </p>
      {renderMoves(movies, onOpenEditModal, onOpenDeleteModal)}
    </div>
));
