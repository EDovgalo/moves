import React, { useEffect } from 'react';
import { connect, ConnectedProps, useDispatch } from 'react-redux';
import { useParams } from 'react-router';
import { MovieDetails } from './components/MovieDetails';
import { getMovieById } from '../../../store/movies/actions';

const mapStateToProps = state => ({
  movie: state.movies.selectedMovie,
  isLoading: state.movies.isLoading,
});

const connector = connect(mapStateToProps);

type Props = ConnectedProps<typeof connector>;

const MovieDetailsPage = ({ movie, isLoading }: Props) => {
  const dispatch = useDispatch();
  const { id } = useParams();

  useEffect(() => {
    dispatch(getMovieById(id));
  }, [dispatch, id]);

  return (
    <>
      <MovieDetails movie={movie} isLoading={isLoading} />
    </>
  );
};

export default connector(MovieDetailsPage);
