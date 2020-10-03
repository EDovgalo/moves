import React, { useCallback, useState } from 'react';
import { connect, ConnectedProps, useDispatch } from 'react-redux';
import { useHistory } from 'react-router';
import { MoviesList } from './components/MoviesList';
import { Filters } from './components/Filters';
import { LoadSpinner } from '../loadSpiner/LoadSpinner';
import { Movie } from '../../../models/movie.model';
import { NotFound } from '../../pages/notFound/NotFound';
import * as MoviesActions from '../../../store/movies/actions';

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

type OwnProps = {
  moviesList: Movie[]
}

const mapStateToProps = (state, { moviesList }: OwnProps) => ({
  isLoading: state.movies.isLoading,
  queryParams: state.movies.queryParams,
  moviesList,
});

const connector = connect(mapStateToProps);

type Props = ConnectedProps<typeof connector>

const MovieSection = ({ moviesList, isLoading, queryParams }: Props): JSX.Element => {
  const dispatch = useDispatch();
  const [activeFilter, setActiveFilter] = useState(filters[0].value);
  const history = useHistory();

  const handlerGenreChange = useCallback((e: React.ChangeEvent<HTMLInputElement>): void => {
    const { value } = e.target;
    setActiveFilter(value);
    dispatch(MoviesActions.fetchMovies({ ...queryParams, filter: value }));
  }, [queryParams, dispatch]);

  const changeSortValue = useCallback((e: React.ChangeEvent<HTMLInputElement>): void => {
    const { value } = e.target;
    dispatch(MoviesActions.fetchMovies({ ...queryParams, sortBy: value }));
  }, [queryParams, dispatch]);

  const handlerOpenDeleteModal = useCallback((id: number): void => {
    dispatch(MoviesActions.setDeleteMovieId(id));
  }, [dispatch]);

  const handlerOpenEditMovieModal = useCallback((movie: Movie): void => {
    dispatch(MoviesActions.setEditMovie(movie));
  }, [dispatch]);

  const handleSelectMovie = useCallback((movie: Movie): void => {
    dispatch(MoviesActions.selectMovie(movie));
    history.push(`/film/${movie.id}`);
  }, [dispatch]);

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
          { moviesList && moviesList.length
            ? (
              <MoviesList
                movies={moviesList}
                onSelectMovie={handleSelectMovie}
                onOpenDeleteModal={handlerOpenDeleteModal}
                onOpenEditModal={handlerOpenEditMovieModal}
                />
            ) : <NotFound title="Movies" />}

        </LoadSpinner>
      </div>
    </>
  );
};

export default connector(MovieSection);
