import React, { useCallback, useState } from 'react';
import { connect, ConnectedProps, useDispatch } from 'react-redux';
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
  moviesList,
});

const connector = connect(mapStateToProps);

type Props = ConnectedProps<typeof connector>

const MovieSection = ({ moviesList, isLoading }: Props): JSX.Element => {
  const dispatch = useDispatch();
  const [activeFilter, setActiveFilter] = useState(filters[0].value);

  const handlerGenreChange = useCallback((e: React.ChangeEvent<HTMLInputElement>): void => {
    const { value } = e.target;
    setActiveFilter(value);
    dispatch(MoviesActions.filterByGenres([value]));
  }, [dispatch]);

  const changeSortValue = useCallback((e: React.ChangeEvent<HTMLInputElement>): void => {
    const { value } = e.target;
    dispatch(MoviesActions.SortBy(value));
  }, [dispatch]);

  const handlerOpenDeleteModal = useCallback((id: number): void => {
    dispatch(MoviesActions.setDeleteMovieId(id));
  }, [dispatch]);

  const handlerOpenEditMovieModal = useCallback((movie: Movie): void => {
    dispatch(MoviesActions.selectMovie(movie));
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
                onOpenDeleteModal={handlerOpenDeleteModal}
                onOpenEditModal={handlerOpenEditMovieModal}
                movies={moviesList}
                />
            ) : <NotFound title="Movies" />}

        </LoadSpinner>
      </div>
    </>
  );
};

export default connector(MovieSection);
