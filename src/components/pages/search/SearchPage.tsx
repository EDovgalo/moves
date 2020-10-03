import { useEffect, useState } from 'react';
import { connect, ConnectedProps, useDispatch } from 'react-redux';
import { useLocation } from 'react-router';
import MovieSection from '../../shared/movieSection/MovieSection';
import { fetchMovies } from '../../../store/movies/actions';
import { HomeTopSection } from '../home/HomeTopSection';

const mapStateToProps = state => ({
  movies: state.movies.movies,
});

const connector = connect(mapStateToProps);

type Props = ConnectedProps<typeof connector>;

const SearchPage = ({ movies }: Props) => {
  const dispatch = useDispatch();
  const location = useLocation();
  const searchString = new URLSearchParams(location.search).get('q');

  useEffect(() => {
    dispatch(fetchMovies({ search: searchString, searchBy: 'title' }));
  }, []);

  return (
    <>
      <HomeTopSection searchValue={searchString} />
      <MovieSection moviesList={movies || []} />
    </>
  );
};

export default connector(SearchPage);
