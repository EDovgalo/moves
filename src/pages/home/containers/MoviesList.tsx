import React from 'react';
import { MovieCard } from '../components/MovieCard';
import { IMovie } from '../HomePage';
import './MoviesList.scss';


type Props = {
    moves: Array<IMovie>,
    handlerOpenDeleteModal: any,
    handlerOpenMovieModal: any
}

const renderMoves = (moves, handlerOpenDeleteModal, handlerOpenMovieModal) => {
    return <div className="moves__list">
        {moves.map((item) => (
            <MovieCard key={item.id}
                       cardData={item}
                       handlerOpenMovieModal={handlerOpenMovieModal}
                       handlerOpenDeleteModal={handlerOpenDeleteModal}/>
        ))}
    </div>;
};

export const MoviesList = ({ moves, handlerOpenDeleteModal, handlerOpenMovieModal }: Props) => {
    return (
        <div className="moves">
            <p className="moves__total">
                <b>{moves.length}</b> moves found
            </p>
            {renderMoves(moves, handlerOpenDeleteModal, handlerOpenMovieModal)}
        </div>
    );
};
