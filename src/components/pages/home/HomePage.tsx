import { useEffect } from 'react';
import { connect, ConnectedProps, useDispatch } from 'react-redux';
import { fetchMovies } from '../../../store/movies/actions';
import { HomeTopSection } from './HomeTopSection';
import MovieSection from '../../shared/movieSection/MovieSection';

const mapStateToProps = state => ({
  movies: state.movies.movies,
});

const connector = connect(mapStateToProps);

type Props = ConnectedProps<typeof connector>;

const HomePage = ({ movies }: Props) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchMovies());
  }, []);

  return (
    <>
      <HomeTopSection onSearch={null} onOpenAddModal={null} />
      <MovieSection moviesList={movies} />
    </>
  );
};

export default connector(HomePage);
