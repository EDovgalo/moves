import { useEffect, useMemo } from 'react';
import { connect, ConnectedProps, useDispatch } from 'react-redux';
import { useParams } from 'react-router';
import MovieSection from '../../shared/movieSection/MovieSection';
import { MovieDetails } from './components/MovieDetails';
import { findById } from '../../../helpers/utils';
import { fetchMovies } from '../../../store/movies/actions';

const mapStateToProps = state => ({
  movies: state.movies.movies,
  isLoading: state.movies.isLoading,
});

const connector = connect(mapStateToProps);

type Props = ConnectedProps<typeof connector>;

const MovieDetailsPage = ({ movies, isLoading }: Props) => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const movie = useMemo(() => findById(movies, id), [id, movies]);

  useEffect(() => {
    if (movies && !movies.length) {
      dispatch(fetchMovies());
    }
  }, [movies, dispatch]);

  return (
    <>
      <MovieDetails movie={movie} isLoading={isLoading} />
      <MovieSection moviesList={movies} />
    </>
  );
};

export default connector(MovieDetailsPage);
