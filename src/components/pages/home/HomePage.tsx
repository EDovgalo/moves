import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchMovies } from '../../../store/movies/actions';
import { HomeTopSection } from './HomeTopSection';

export const HomePage = (): JSX.Element => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchMovies({}));
  }, [dispatch]);

  return (
    <>
      <HomeTopSection />
    </>
  );
};
