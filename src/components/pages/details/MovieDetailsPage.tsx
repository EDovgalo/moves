import { useEffect, useMemo } from 'react';
import { connect, ConnectedProps, useDispatch } from 'react-redux';
import { useParams } from 'react-router';
import MovieSection from '../../shared/movieSection/MovieSection';
import { MovieDetails } from './components/MovieDetails';
import { findById } from '../../../helpers/utils';
import { fetchMovies, getMovieById } from '../../../store/movies/actions';

const mapStateToProps = state => ({
  movies: state.movies.movies,
  movie: state.movies.selectedMovie,
  isLoading: state.movies.isLoading,
});

const connector = connect(mapStateToProps);

type Props = ConnectedProps<typeof connector>;

const MovieDetailsPage = ({ movie, movies, isLoading }: Props) => {
  const dispatch = useDispatch();
  const { id } = useParams();

  useEffect(() => {
    if (movies && !movies.length) {
      dispatch(fetchMovies({}));
    }
  }, [movies, dispatch]);

  useEffect(() => {
    if (!movie) {
      dispatch(getMovieById(id));
    }
  }, [movie, id, dispatch]);

  return (
    <>
      <MovieDetails movie={movie} isLoading={isLoading} />
      <MovieSection moviesList={movies} />
    </>
  );
};

export default connector(MovieDetailsPage);
