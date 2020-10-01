import { useEffect, useState } from 'react';
import { connect, ConnectedProps, useDispatch } from 'react-redux';
import { useLocation } from 'react-router';
import MovieSection from '../../shared/movieSection/MovieSection';
import { fetchMovies, searchMovie } from '../../../store/movies/actions';
import { HomeTopSection } from '../home/HomeTopSection';

const mapStateToProps = state => ({
  movies: state.movies.foundMovies,
});

const connector = connect(mapStateToProps);

type Props = ConnectedProps<typeof connector>;

const SearchPage = ({ movies }: Props) => {
  const dispatch = useDispatch();
  const location = useLocation();
  const [searchString, setSearchString] = useState('');

  useEffect(() => {
    setSearchString(new URLSearchParams(location.search).get('q'));
  }, [location]);

  useEffect(() => {
    if (searchString) {
      dispatch(searchMovie(searchString));
    }
  }, [searchString, dispatch]);
  return (
    <>
      <HomeTopSection searchValue={searchString} />
      <MovieSection moviesList={movies || []} />
    </>
  );
};

export default connector(SearchPage);
