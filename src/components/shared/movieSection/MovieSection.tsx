import React, { useCallback, useEffect, useState } from 'react';
import { connect, ConnectedProps, useDispatch } from 'react-redux';

import { MoviesList } from './components/MoviesList';
import { Filters } from './components/Filters';
import { LoadSpinner } from '../loadSpiner/LoadSpinner';
import { Movie } from '../../../models/movie.model';
import * as MoviesActions from '../../../store/movies/actions';
import { deleteMovie } from '../../../store/movies/actions';
import { withModals } from '../../hoc/withModals';
import './MovieSection.scss';

export type SortList = {
  caption: string,
  value: string
};

const filters = [
  { caption: 'All', value: '' },
  { caption: 'Documentary', value: 'Documentary' },
  { caption: 'Comedy', value: 'Comedy' },
  { caption: 'Horror', value: 'Horror' },
  { caption: 'Crime', value: 'Crime' },
];

const sortList: Array<SortList> = [
  { caption: '', value: '' },
  { caption: 'release date', value: 'release_date' },
  { caption: 'title', value: 'title' },
  { caption: 'genre', value: 'genre' },
];

const mapStateToProps = state => ({
  movies: state.movies.movies,
  isLoading: state.movies.isLoading,
});

const connector = connect(mapStateToProps);

type Props = ConnectedProps<typeof connector>

const MovieSection = ({ movies, isLoading }: Props): JSX.Element => {
  const dispatch = useDispatch();
  const [activeFilter, setActiveFilter] = useState(filters[0].value);

  useEffect(() => {
    dispatch(MoviesActions.fetchMovies());
  }, [dispatch]);

  const handlerGenreChange = useCallback((e: React.ChangeEvent<HTMLInputElement>): void => {
    const { value } = e.target;
    setActiveFilter(value);
    dispatch(MoviesActions.filterByGenres([value]));
  }, [dispatch]);

  const changeSortValue = useCallback((e: React.ChangeEvent<HTMLInputElement>): void => {
    const { value } = e.target;
    dispatch(MoviesActions.SortBy(value));
  }, [dispatch]);

  const handlerDeleteMovie = useCallback((id: number): void => {
    dispatch(deleteMovie(id));
  }, [dispatch]);

  const handlerAddEditMovie = useCallback((movie: Movie): void => {
    dispatch(MoviesActions.editMovie(movie));
  }, [dispatch]);

  const CardWithModals = withModals(MoviesList);

  return (
    <>
      <div className="home-page">
        <Filters
          filters={filters}
          sortList={sortList}
          activeFilter={activeFilter}
          onGenreChange={handlerGenreChange}
          handlerChangeSortValue={changeSortValue}
          />
        <LoadSpinner isLoading={isLoading}>
          <CardWithModals
            onDelete={handlerDeleteMovie}
            onSubmit={handlerAddEditMovie}
            movies={movies}
            />
        </LoadSpinner>
      </div>
    </>
  );
};

export default connector(MovieSection);
