import React, { useState } from 'react';
import { MoviesList } from './components/MoviesList';
import { Filters } from './components/Filters';
import { LoadSpinner } from '../loadSpiner/LoadSpinner';
import { DeleteMovieModal } from '../modal/deleteMovieModal/DeleteMovieModal';
import { MovieModal } from '../modal/movieModal/MovieModal';
import { comparator } from '../../helpers/utils';
import { Movie } from '../../models/movie/movie.model';
import { moviesArray } from '../../data/movies';
import { useTimer } from '../../hooks/index';
import './MovieSection.scss';

export type SortList = {
  caption: string,
  value: string
};

const filters = [
  'All',
  'Documentary',
  'Comedy',
  'Horror',
  'Crime',
];

const sortList: Array<SortList> = [
  { caption: 'release date', value: 'releaseDate' },
  { caption: 'title', value: 'title' },
  { caption: 'genre', value: 'genre' },
];

const loadLogger = () => {
  console.log('Loading done');
};

export const MovieSection = (): JSX.Element => {
  const [movies, setMovies] = useState(moviesArray);
  const [activeFilter, setActiveFilter] = useState(null);
  const [isShowDeleteModal, setIsShowDeleteModal] = useState(false);
  const [isShowMovieModal, setIsShowMovieModal] = useState(false);
  const [deleteCardId, setDeleteCardId] = useState(null);
  const [currentMovie, setCurrentMovie] = useState(null);
  const [loadDone] = useTimer(3000, loadLogger);

  const updateActiveFilter = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const { value } = e.target;
    setActiveFilter(value);
  };

  const changeSortValue = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const { value } = e.target;
    setMovies([...movies].sort(comparator(value)));
  };

  const openDeleteModal = (cardId: number): void => {
    setIsShowDeleteModal(true);
    setDeleteCardId(cardId);
  };

  const closeDeleteModal = (): void => {
    setIsShowDeleteModal(false);
    setDeleteCardId(null);
  };

  const editMovie = (movie: Movie): void => {
    setIsShowMovieModal(true);
    setCurrentMovie(movie);
  };

  const closeMovieModal = (): void => {
    setIsShowMovieModal(false);
    setCurrentMovie(null);
  };

  const deleteCard = (): void => {
    const newMovies = movies.filter(item => item.id !== deleteCardId);
    setMovies(newMovies);
    setIsShowDeleteModal(false);
    setDeleteCardId(null);
  };

  return (
    <>
      <DeleteMovieModal
        handlerClose={closeDeleteModal}
        handleConfirm={deleteCard}
        isShow={isShowDeleteModal}
        />

      <MovieModal
        handlerClose={closeMovieModal}
        handlerSubmit={null}
        data={currentMovie}
        isShow={isShowMovieModal}
        />
      <div className="home-page">
        <Filters
          filters={filters}
          sortList={sortList}
          activeFilter={activeFilter}
          handlerFilterClick={updateActiveFilter}
          handlerChangeSortValue={changeSortValue}
          />
        <LoadSpinner isLoading={!loadDone}>
          <MoviesList
            moves={movies}
            handlerOpenMovieModal={editMovie}
            handlerOpenDeleteModal={openDeleteModal}
            />
        </LoadSpinner>
      </div>
    </>
  );
};
