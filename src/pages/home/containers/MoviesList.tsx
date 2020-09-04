import React from 'react';
import { MovieCard } from '../components/MovieCard';
import { Movie } from '../HomePage';
import './MoviesList.scss';

type Props = {
  moves: Array<Movie>,
  handlerOpenDeleteModal: (id: number) => void,
  handlerOpenMovieModal: (movie: Movie) => void
}

const renderMoves = (moves, handlerOpenDeleteModal, handlerOpenMovieModal):JSX.Element => (
  <div className="moves__list">
    {moves.map(item => (
      <MovieCard
        key={item.id}
        cardData={item}
        handlerOpenMovieModal={handlerOpenMovieModal}
        handlerOpenDeleteModal={handlerOpenDeleteModal}
        />
    ))}
  </div>
);

export const MoviesList = ({
  moves,
  handlerOpenDeleteModal,
  handlerOpenMovieModal,
}: Props):JSX.Element => (
  <div className="moves">
    <p className="moves__total">
      <b>{moves.length}</b>
      <span> moves found</span>
    </p>
    {renderMoves(moves, handlerOpenDeleteModal, handlerOpenMovieModal)}
  </div>
);
